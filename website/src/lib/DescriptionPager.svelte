<script lang="ts">
  import { onDestroy, tick } from "svelte";

  export let text: string = "";
  export let label: string = "Description";

  /** Visible height of the description box, in CSS pixels. */
  const BOX_HEIGHT = 150;
  /** A single unbroken block shorter than this is left as one paragraph. */
  const SENTENCE_SPLIT_MIN = 320;
  const MAX_SENTENCES_PER_PARAGRAPH = 4;
  const TARGET_SENTENCES_PER_PARAGRAPH = 3;
  /** Tokens that end in a period without ending a sentence. */
  const NON_TERMINAL = /(?:\b[A-Za-z]|\be\.g|\bi\.e|\bvs|\bcf|\betc|\bNo|\bFig|\bapprox)\.$/;

  let viewportEl: HTMLElement | null = null;
  let flowEl: HTMLElement | null = null;
  let offsets: number[] = [0];
  let ends: number[] = [0];
  let flowHeight = 0;
  let page = 0;
  let measured = false;
  let lastWidth = -1;
  let frame = 0;
  let observer: ResizeObserver | null = null;

  $: paragraphs = toParagraphs(text);
  $: pageCount = offsets.length;
  $: paged = measured && pageCount > 1;
  /**
   * Translating alone would leave the next line sliced in half at the bottom
   * edge whenever the box height is not a whole multiple of the line height.
   * The clip ends each page at its last COMPLETE line; the leftover few pixels
   * stay blank instead of showing a half-rendered line of text.
   */
  $: flowStyle = paged
    ? `transform: translateY(${-offsets[page]}px); ` +
      `clip-path: inset(${offsets[page]}px 0px ${Math.max(0, flowHeight - (ends[page] ?? flowHeight))}px 0px);`
    : "";

  // Re-measure from scratch whenever the rendered text changes.
  $: if (paragraphs) resetAndMeasure();

  /**
   * Paragraphs come from the source itself: the FlatBuffers IDL `///` block for
   * each standard separates paragraphs with a blank comment line, and that blank
   * line survives into the generated JSON schema `description` as "\n\n". Only
   * the HTML render collapsed it. Soft wraps inside a paragraph ("\n") are
   * rejoined with a space; the words themselves are never altered.
   */
  function toParagraphs(src: string): string[] {
    if (!src) return [];
    const blocks = src
      .split(/\n[ \t]*\n/)
      .map((block) => block.replace(/\s*\n\s*/g, " ").trim())
      .filter(Boolean);
    if (blocks.length !== 1) return blocks;
    const single = blocks[0];
    return single.length > SENTENCE_SPLIT_MIN ? groupSentences(splitSentences(single)) : blocks;
  }

  function splitSentences(block: string): string[] {
    const parts = block.split(/(?<=[.!?])["')\]]?\s+(?=[A-Z$`(])/);
    const out: string[] = [];
    for (const part of parts) {
      const previous = out[out.length - 1];
      if (previous !== undefined && NON_TERMINAL.test(previous)) {
        out[out.length - 1] = `${previous} ${part}`;
      } else {
        out.push(part);
      }
    }
    return out;
  }

  /** Two or more consecutive ALL-CAPS words open a normative lead-in. */
  function isLeadIn(sentence: string): boolean {
    return /^(?:[A-Z][A-Z'’-]*\s+)+[A-Z][A-Z'’-]*\b/.test(sentence);
  }

  /**
   * An ALL-CAPS lead-in always opens a paragraph; the sentences between two
   * lead-ins are then partitioned into evenly sized paragraphs so no paragraph
   * exceeds MAX_SENTENCES_PER_PARAGRAPH and none is left as an orphan tail.
   */
  function groupSentences(sentences: string[]): string[] {
    const runs: string[][] = [];
    for (const sentence of sentences) {
      if (!runs.length || (isLeadIn(sentence) && runs[runs.length - 1].length)) runs.push([]);
      runs[runs.length - 1].push(sentence);
    }
    const paras: string[] = [];
    for (const run of runs) {
      const groups = Math.max(
        1,
        Math.ceil(run.length / TARGET_SENTENCES_PER_PARAGRAPH),
        Math.ceil(run.length / MAX_SENTENCES_PER_PARAGRAPH),
      );
      const base = Math.floor(run.length / groups);
      const extra = run.length % groups;
      let cursor = 0;
      for (let g = 0; g < groups; g += 1) {
        const size = base + (g < extra ? 1 : 0);
        paras.push(run.slice(cursor, cursor + size).join(" "));
        cursor += size;
      }
    }
    return paras;
  }

  /**
   * Every line box in the flow, positioned relative to the flow's own top.
   * Line rects are what make a page break land between lines, never mid-word,
   * and they carry inter-paragraph margins implicitly through their positions.
   */
  function lineBoxes(root: HTMLElement): { top: number; bottom: number }[] {
    const base = root.getBoundingClientRect().top;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const range = document.createRange();
    const boxes: { top: number; bottom: number }[] = [];
    let node = walker.nextNode();
    while (node) {
      if (node.nodeValue && node.nodeValue.trim()) {
        range.selectNodeContents(node);
        for (const rect of Array.from(range.getClientRects())) {
          if (rect.height > 0) boxes.push({ top: rect.top - base, bottom: rect.bottom - base });
        }
      }
      node = walker.nextNode();
    }
    boxes.sort((a, b) => a.top - b.top || a.bottom - b.bottom);
    return boxes;
  }

  function measure(): void {
    if (!flowEl || !viewportEl) return;
    const width = flowEl.clientWidth;
    if (width <= 0) return;
    lastWidth = width;

    const boxes = lineBoxes(flowEl);
    const starts = [0];
    const lastLineBottoms: number[] = [];
    let start = 0;
    let end = 0;
    for (const box of boxes) {
      // The first line of a page always stays on it, even if it alone overflows.
      if (box.top <= start + 0.5) {
        end = Math.max(end, box.bottom);
        continue;
      }
      // Tolerance is deliberately hairline: half a pixel of slack here clips
      // half a pixel off a real line of text, which the box then hides for good.
      if (box.bottom - start > BOX_HEIGHT + 0.05) {
        lastLineBottoms.push(end);
        start = box.top;
        starts.push(start);
        end = box.bottom;
      } else {
        end = Math.max(end, box.bottom);
      }
    }
    lastLineBottoms.push(end);

    offsets = starts;
    ends = lastLineBottoms;
    flowHeight = flowEl.getBoundingClientRect().height;
    measured = true;
    if (page > offsets.length - 1) page = offsets.length - 1;
  }

  function scheduleMeasure(): void {
    if (typeof window === "undefined") return;
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      frame = 0;
      measure();
    });
  }

  function resetAndMeasure(): void {
    if (typeof window === "undefined") return;
    page = 0;
    measured = false;
    offsets = [0];
    lastWidth = -1;
    void tick().then(scheduleMeasure);
  }

  function attach(node: HTMLElement): { destroy(): void } {
    flowEl = node;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => {
        // Height changes when pagination turns on; only a WIDTH change reflows text.
        if (flowEl && flowEl.clientWidth !== lastWidth) scheduleMeasure();
      });
      observer.observe(node);
    }
    if (typeof document !== "undefined" && (document as any).fonts?.ready) {
      void (document as any).fonts.ready.then(scheduleMeasure);
    }
    scheduleMeasure();
    return {
      destroy() {
        observer?.disconnect();
        observer = null;
        flowEl = null;
      },
    };
  }

  function goto(next: number): void {
    page = Math.min(Math.max(next, 0), offsets.length - 1);
  }

  function onKeydown(event: KeyboardEvent): void {
    if (!paged) return;
    const moves: Record<string, number> = {
      ArrowLeft: page - 1,
      ArrowUp: page - 1,
      ArrowRight: page + 1,
      ArrowDown: page + 1,
      Home: 0,
      End: offsets.length - 1,
    };
    const target = moves[event.key];
    if (target === undefined) return;
    event.preventDefault();
    goto(target);
  }

  onDestroy(() => {
    if (frame) cancelAnimationFrame(frame);
    observer?.disconnect();
  });
</script>

<div class="desc-pager" class:is-paged={paged}>
  <!-- A clipped, paged region is focusable on purpose: it is how a keyboard
       reader reaches the text and the arrow keys that move between pages. -->
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="desc-viewport"
    bind:this={viewportEl}
    role="group"
    aria-label={label}
    aria-roledescription={paged ? "carousel" : undefined}
    tabindex={paged ? 0 : -1}
    on:keydown={onKeydown}
    style={paged ? `height: ${BOX_HEIGHT}px;` : ""}
  >
    <div class="desc-flow" use:attach style={flowStyle}>
      {#each paragraphs as paragraph}
        <p class="desc-para">{paragraph}</p>
      {/each}
    </div>
  </div>

  {#if paged}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="desc-pagination" role="group" aria-label="Description pages" on:keydown={onKeydown}>
      <button
        type="button"
        class="desc-page-btn desc-page-step"
        on:click={() => goto(page - 1)}
        disabled={page === 0}
        aria-label="Previous page"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {#each offsets as _, index}
        <button
          type="button"
          class="desc-page-btn"
          class:active={index === page}
          aria-current={index === page ? "true" : undefined}
          aria-label={`Page ${index + 1} of ${pageCount}`}
          on:click={() => goto(index)}
        >
          {index + 1}
        </button>
      {/each}
      <button
        type="button"
        class="desc-page-btn desc-page-step"
        on:click={() => goto(page + 1)}
        disabled={page === pageCount - 1}
        aria-label="Next page"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  {/if}
</div>

<style>
  .desc-pager {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .desc-viewport {
    position: relative;
    width: 100%;
    /* Without measurement (or with a single page) the full text simply shows. */
    overflow: hidden;
  }

  .desc-pager.is-paged .desc-viewport {
    border-left: 2px solid var(--ui-border);
    padding-left: 16px;
  }

  .desc-viewport:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
    border-radius: var(--radius-xs);
  }

  .desc-flow {
    will-change: transform;
  }

  .desc-para {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .desc-para + .desc-para {
    margin-top: 14px;
  }

  .desc-pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
  }

  .desc-page-btn {
    min-width: 30px;
    height: 30px;
    padding: 0 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: var(--radius-xs);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1;
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }

  .desc-page-btn:hover:not(:disabled) {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
    color: var(--text-primary);
  }

  .desc-page-btn:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .desc-page-btn.active {
    background: var(--accent);
    border-color: var(--accent);
    color: #ffffff;
  }

  .desc-page-btn:disabled {
    opacity: 0.35;
    cursor: default;
  }

  @media (max-width: 768px) {
    .desc-para {
      font-size: 16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .desc-page-btn {
      transition: none;
    }
  }
</style>
