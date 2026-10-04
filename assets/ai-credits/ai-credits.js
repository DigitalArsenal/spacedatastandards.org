// The AI behind this project, listed in the lower right of every page of the
// Space Data Network family of sites. The canonical copy lives in
// spacedatanetwork.org docs/assets/ai-credits/; the other stack sites carry
// verbatim copies. The panel sits in the lower right above any fixed footer
// bar, and rides above the page footer once that scrolls into view (in the
// page flow above the footer on phones), at 45% opacity, and no
// part of it is selectable. Only the header takes a click: it starts
// collapsed, and the header grows the panel to show the list, then collapses
// it again.
(function () {
  if (document.querySelector('.ai-credits')) return;

  // Four lines of exactly 30 characters: in a monospace face they set as a
  // perfect rectangle.
  var HEADER = [
    'THIS PROJECT WAS BUILT WITH AI',
    'MODELS, LOCAL AND IN THE CLOUD',
    'OVER NINE MONTHS, WORKING WITH',
    'THE AGENTS AND THE TOOLS BELOW'
  ];
  var GROUPS = [
    ['CLAUDE CODE / ANTHROPIC', 'Claude Opus 5.5 · Claude Opus 5 · Claude Fable 5.1 · Claude Sonnet 5 · Claude Opus 4.8 · Claude Haiku 4.5'],
    ['CODEX / OPENAI', 'GPT-6.1 Sol · GPT-6 Astra · GPT-5.6 Sol · GPT-5.6 Terra · GPT-5.6 Luna · GPT-5.4 · GPT-5.3 Codex Spark · GPT Reserve · Codex Auto Review'],
    ['LOCAL / LLAMA.CPP', 'Qwen3.8 Flash Next · GLM-5.3 Flash · GLM-4.7 Flash'],
    ['MUSIC', 'Suno'],
    ['TOOLS THE AGENTS DROVE / MCP', 'Blender 5.0 · Google Chrome (DevTools, Claude in Chrome) · Playwright · Claude Docs · Codex Computer Use · Node REPL · Xcode iOS Simulator · Sketchfab, Poly Haven and Poly Pizza through Blender']
  ];

  var CSS =
    '.ai-credits{position:fixed;right:14px;bottom:calc(max(var(--sdn-stack-footer-height,0px),var(--ai-credits-lift,0px)) + 14px);z-index:9000;' +
      'width:max-content;max-width:calc(100vw - 28px);box-sizing:border-box;padding:11px 13px 12px;' +
      'font:500 9.5px/1.5 ui-monospace,"SF Mono",Menlo,Consolas,"Liberation Mono",monospace;letter-spacing:.05em;' +
      'color:#fff;background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.28);border-radius:3px;' +
      '-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);opacity:.45;pointer-events:none;' +
      '-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;text-align:left;text-shadow:none}' +
    '.ai-credits *{-webkit-user-select:none;user-select:none;pointer-events:none}' +
    '.ai-credits::before,.ai-credits::after{content:"";position:absolute;width:8px;height:8px;border:1px solid #fff}' +
    '.ai-credits::before{left:-1px;top:-1px;border-right:0;border-bottom:0}' +
    '.ai-credits::after{right:-1px;bottom:-1px;border-left:0;border-top:0}' +
    // The header is the toggle: the one part that takes a click.
    '.ai-credits .ai-credits-toggle{display:block;margin:0;padding:0;border:0;background:none;color:inherit;font:inherit;' +
      'letter-spacing:inherit;text-align:left;cursor:pointer;pointer-events:auto;-webkit-tap-highlight-color:transparent}' +
    '.ai-credits .ai-credits-toggle:focus-visible{outline:1px solid #fff;outline-offset:4px}' +
    '.ai-credits pre{margin:0;font-family:inherit;font-size:1em;font-weight:700;line-height:1.35;letter-spacing:inherit;white-space:pre;color:#fff}' +
    // The list grows open from nothing and folds away again.
    '.ai-credits .ai-credits-body{display:grid;grid-template-rows:0fr;transition:grid-template-rows .35s cubic-bezier(.2,.7,.2,1)}' +
    '.ai-credits.is-open .ai-credits-body{grid-template-rows:1fr}' +
    '.ai-credits .ai-credits-body>div{overflow:hidden;min-height:0}' +
    '.ai-credits hr{height:0;margin:8px 0 2px;border:0;border-top:1px dashed rgba(255,255,255,.55)}' +
    '.ai-credits dl{width:0;min-width:100%;margin:0}' +
    '.ai-credits dt{margin-top:6px;font-weight:700;color:#fff}' +
    '.ai-credits dt::before{content:"> "}' +
    '.ai-credits dd{margin:1px 0 0 2ch;color:rgba(255,255,255,.92)}' +
    '@media (prefers-reduced-motion:reduce){.ai-credits .ai-credits-body{transition:none}}' +
    // Phones: no room for a fixed corner panel, so it sits in the page flow,
    // right-aligned, just above the footer.
    '@media (max-width:620px){.ai-credits{position:relative;right:auto;bottom:auto;display:block;font-size:8.5px;' +
      'margin:28px 14px 14px auto}}' +
    '@media print{.ai-credits{display:none}}';

  function mount() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    var box = document.createElement('aside');
    box.className = 'ai-credits';
    box.setAttribute('aria-label', 'AI used to build this project');
    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'ai-credits-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    var pre = document.createElement('pre');
    pre.textContent = HEADER.join('\n');
    toggle.appendChild(pre);
    box.appendChild(toggle);
    var body = document.createElement('div');
    body.className = 'ai-credits-body';
    body.id = 'ai-credits-list';
    toggle.setAttribute('aria-controls', body.id);
    var inner = document.createElement('div');
    inner.appendChild(document.createElement('hr'));
    var dl = document.createElement('dl');
    GROUPS.forEach(function (g) {
      var dt = document.createElement('dt');
      dt.textContent = g[0];
      var dd = document.createElement('dd');
      dd.textContent = g[1];
      dl.appendChild(dt);
      dl.appendChild(dd);
    });
    inner.appendChild(dl);
    body.appendChild(inner);
    box.appendChild(body);
    toggle.addEventListener('click', function () {
      var open = !box.classList.contains('is-open');
      box.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    var footers = document.querySelectorAll('.sdn-footer, body > footer, body > .site-footer');
    var footer = footers[footers.length - 1];
    if (footer) footer.parentNode.insertBefore(box, footer); else document.body.appendChild(box);
    // Lift the fixed panel by however much of the page footer is on screen.
    var frame = 0;
    function place() {
      frame = 0;
      var pageFooter = document.querySelector('.sdn-footer');
      var lift = pageFooter ? Math.max(0, window.innerHeight - pageFooter.getBoundingClientRect().top) : 0;
      box.style.setProperty('--ai-credits-lift', lift + 'px');
    }
    function queue() { if (!frame) frame = requestAnimationFrame(place); }
    window.addEventListener('scroll', queue, { passive: true, capture: true });
    window.addEventListener('resize', queue);
    queue();
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
