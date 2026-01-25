<script lang="ts">
  import { link } from "svelte-spa-router";

  const docSections = [
    {
      title: "Getting Started",
      description: "Quick introduction to Space Data Standards and how to use them in your projects",
      icon: "rocket",
      items: [
        { title: "Introduction", description: "Overview of Space Data Standards" },
        { title: "Installation", description: "How to install the SDK" },
        { title: "Quick Start", description: "Your first SDS application" },
      ]
    },
    {
      title: "JSON Schema",
      description: "Using JSON Schema definitions with x-flatbuffer annotations",
      icon: "file",
      items: [
        { title: "Schema Structure", description: "Understanding JSON Schema format" },
        { title: "x-flatbuffer Annotations", description: "Mapping JSON to FlatBuffers" },
        { title: "Validation", description: "Validating data against schemas" },
      ]
    },
    {
      title: "FlatBuffers",
      description: "Working with FlatBuffers binary serialization",
      icon: "binary",
      items: [
        { title: "Why FlatBuffers", description: "Benefits of binary serialization" },
        { title: "Schema Compilation", description: "Using flatc compiler" },
        { title: "Zero-Copy Access", description: "Reading data without parsing" },
      ]
    },
    {
      title: "Language Guides",
      description: "Using SDS in different programming languages",
      icon: "code",
      items: [
        { title: "TypeScript/JavaScript", description: "Browser and Node.js usage" },
        { title: "Go", description: "Server-side implementation" },
        { title: "Python", description: "Data science and analysis" },
        { title: "Rust", description: "Systems programming" },
      ]
    },
  ];

  const annotationDocs = [
    {
      name: "x-flatbuffer-type",
      description: "Maps JSON Schema type to FlatBuffer type",
      example: '"x-flatbuffer-type": "double"',
      values: ["bool", "byte", "ubyte", "short", "ushort", "int", "uint", "float", "double", "long", "ulong", "string"]
    },
    {
      name: "x-flatbuffer-field-id",
      description: "Stable field ID for binary compatibility across schema versions",
      example: '"x-flatbuffer-field-id": 1',
      values: ["Integer (0-65535)"]
    },
    {
      name: "x-flatbuffer-deprecated",
      description: "Marks a field as deprecated while maintaining compatibility",
      example: '"x-flatbuffer-deprecated": true',
      values: ["true", "false"]
    },
    {
      name: "x-flatbuffer-default",
      description: "Default value for the field in FlatBuffer encoding",
      example: '"x-flatbuffer-default": 0',
      values: ["Any value matching the field type"]
    },
  ];
</script>

<section class="docs-page">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Documentation</h1>
      <p class="page-subtitle">
        Learn how to use Space Data Standards in your applications
      </p>
    </div>

    <div class="docs-grid">
      {#each docSections as section}
        <div class="doc-section">
          <div class="doc-section-header">
            <div class="doc-icon">
              {#if section.icon === "rocket"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                </svg>
              {:else if section.icon === "file"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              {:else if section.icon === "binary"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="4" height="16" rx="1"></rect>
                  <rect x="10" y="4" width="4" height="16" rx="1"></rect>
                  <rect x="18" y="4" width="4" height="16" rx="1"></rect>
                </svg>
              {:else if section.icon === "code"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              {/if}
            </div>
            <div>
              <h2 class="doc-section-title">{section.title}</h2>
              <p class="doc-section-desc">{section.description}</p>
            </div>
          </div>
          <ul class="doc-items">
            {#each section.items as item}
              <li class="doc-item">
                <span class="doc-item-title">{item.title}</span>
                <span class="doc-item-desc">{item.description}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div class="annotation-section">
      <h2 class="section-title">x-flatbuffer Annotations</h2>
      <p class="section-subtitle">
        JSON Schema extensions for FlatBuffer type mapping
      </p>

      <div class="annotation-grid">
        {#each annotationDocs as annotation}
          <div class="annotation-card">
            <div class="annotation-header">
              <code class="annotation-name">{annotation.name}</code>
            </div>
            <p class="annotation-desc">{annotation.description}</p>
            <div class="annotation-example">
              <span class="example-label">Example:</span>
              <code>{annotation.example}</code>
            </div>
            <div class="annotation-values">
              <span class="values-label">Values:</span>
              <span class="values-list">{annotation.values.join(", ")}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="cta-section">
      <h2 class="cta-title">Ready to explore schemas?</h2>
      <p class="cta-desc">Browse the complete catalog of Space Data Standards schemas</p>
      <a href="/schemas" use:link class="btn btn-accent">View All Schemas</a>
    </div>
  </div>
</section>

<style>
  .docs-page {
    padding-top: 100px;
    min-height: 100vh;
    padding-bottom: 60px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .page-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .page-title {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }

  .page-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .docs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 80px;
  }

  .doc-section {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 24px;
    backdrop-filter: blur(20px);
  }

  .doc-section-header {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
  }

  .doc-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .doc-icon :global(svg) {
    width: 24px;
    height: 24px;
    color: white;
  }

  .doc-section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .doc-section-desc {
    font-size: 14px;
    color: var(--text-secondary);
  }

  .doc-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .doc-item {
    padding: 12px 0;
    border-bottom: 1px solid var(--ui-border);
    cursor: pointer;
    transition: all 0.2s;
  }

  .doc-item:last-child {
    border-bottom: none;
  }

  .doc-item:hover {
    padding-left: 8px;
  }

  .doc-item-title {
    display: block;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 2px;
  }

  .doc-item-desc {
    display: block;
    font-size: 13px;
    color: var(--text-muted);
  }

  .annotation-section {
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 12px;
    text-align: center;
  }

  .section-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 40px;
  }

  .annotation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .annotation-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 20px;
  }

  .annotation-header {
    margin-bottom: 12px;
  }

  .annotation-name {
    font-family: var(--font-mono);
    font-size: 16px;
    font-weight: 600;
    color: var(--accent);
    background: rgba(102, 126, 234, 0.1);
    padding: 4px 10px;
    border-radius: 6px;
  }

  .annotation-desc {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 16px;
    line-height: 1.5;
  }

  .annotation-example {
    background: var(--code-bg);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
  }

  .example-label {
    display: block;
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .annotation-example code {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-primary);
  }

  .annotation-values {
    font-size: 13px;
  }

  .values-label {
    color: var(--text-muted);
    margin-right: 8px;
  }

  .values-list {
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 12px;
  }

  .cta-section {
    text-align: center;
    padding: 60px 20px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
  }

  .cta-title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .cta-desc {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 24px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 28px;
    transition: all 0.2s ease;
    cursor: pointer;
    text-decoration: none;
  }

  .btn-accent {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    color: white;
    border: none;
  }

  .btn-accent:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  }

  @media (max-width: 768px) {
    .docs-grid,
    .annotation-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
