<script lang="ts">
  import { link } from "svelte-spa-router";

  const downloadOptions = [
    {
      title: "JSON Schema Package",
      description: "All schemas in JSON Schema format with x-flatbuffer annotations. The canonical format for Space Data Standards.",
      format: "json",
      icon: "file",
      links: [
        { label: "Download .zip", url: "/download/sds-json-schemas.zip" },
        { label: "npm package", url: "https://www.npmjs.com/package/@spacedatastandards/schemas", external: true },
      ]
    },
    {
      title: "FlatBuffers Schemas",
      description: "All .fbs schema files for use with the FlatBuffers compiler (flatc).",
      format: "fbs",
      icon: "binary",
      links: [
        { label: "Download .zip", url: "/download/sds-flatbuffers.zip" },
      ]
    },
    {
      title: "TypeScript Types",
      description: "Full TypeScript type definitions for browser and Node.js applications.",
      format: "ts",
      icon: "code",
      links: [
        { label: "Download .zip", url: "/download/sds-typescript.zip" },
        { label: "npm package", url: "https://www.npmjs.com/package/spacedatastandards.org", external: true },
      ]
    },
    {
      title: "Go Module",
      description: "Go struct definitions for server-side implementations.",
      format: "go",
      icon: "server",
      links: [
        { label: "Download .zip", url: "/download/sds-go.zip" },
        { label: "Go module", url: "https://pkg.go.dev/github.com/DigitalArsenal/spacedatastandards.org", external: true },
      ]
    },
    {
      title: "Python Package",
      description: "Python dataclass definitions for data science and analysis.",
      format: "py",
      icon: "python",
      links: [
        { label: "Download .zip", url: "/download/sds-python.zip" },
      ]
    },
    {
      title: "Complete Bundle",
      description: "All schemas in all formats. Includes JSON Schema, FlatBuffers, TypeScript, Go, Python, and Rust.",
      format: "all",
      icon: "package",
      links: [
        { label: "Download All (.zip)", url: "/download/sds-all-formats.zip" },
      ]
    },
  ];

  const schemaCategories = [
    { name: "Orbital", schemas: ["OMM", "OEM", "OCM", "OSM"], count: 4 },
    { name: "Conjunction", schemas: ["CDM", "CSM", "CAT"], count: 3 },
    { name: "Entity", schemas: ["EPM", "PNM"], count: 2 },
    { name: "Tracking", schemas: ["TDM", "RFM"], count: 2 },
    { name: "Maneuver", schemas: ["MET", "MPE"], count: 2 },
    { name: "Marketplace", schemas: ["STF", "PUR", "REV", "ACL"], count: 4 },
  ];
</script>

<section class="download-page">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Download Center</h1>
      <p class="page-subtitle">
        Get Space Data Standards schemas in your preferred format
      </p>
    </div>

    <div class="download-grid">
      {#each downloadOptions as option}
        <div class="download-card">
          <div class="download-icon">
            {#if option.icon === "file"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            {:else if option.icon === "binary"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="4" height="16" rx="1"></rect>
                <rect x="10" y="4" width="4" height="16" rx="1"></rect>
                <rect x="18" y="4" width="4" height="16" rx="1"></rect>
              </svg>
            {:else if option.icon === "code"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            {:else if option.icon === "server"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            {:else if option.icon === "python"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            {:else if option.icon === "package"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            {/if}
          </div>
          <div class="download-content">
            <h3 class="download-title">{option.title}</h3>
            <p class="download-desc">{option.description}</p>
            <div class="download-actions">
              {#each option.links as link}
                {#if link.external}
                  <a href={link.url} target="_blank" rel="noopener" class="download-link">
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                {:else}
                  <a href={link.url} class="download-link download-btn-primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    {link.label}
                  </a>
                {/if}
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="individual-section">
      <h2 class="section-title">Individual Schema Downloads</h2>
      <p class="section-subtitle">
        Download specific schemas by category
      </p>

      <div class="category-grid">
        {#each schemaCategories as category}
          <div class="category-card">
            <div class="category-header">
              <h3 class="category-name">{category.name}</h3>
              <span class="category-count">{category.count} schemas</span>
            </div>
            <div class="category-schemas">
              {#each category.schemas as schema}
                <a href="/schemas/{schema}" use:link class="schema-link">{schema}</a>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="npm-section">
      <h2 class="section-title">Package Managers</h2>
      <div class="npm-commands">
        <div class="npm-command">
          <span class="npm-label">npm</span>
          <code>npm install spacedatastandards.org</code>
        </div>
        <div class="npm-command">
          <span class="npm-label">yarn</span>
          <code>yarn add spacedatastandards.org</code>
        </div>
        <div class="npm-command">
          <span class="npm-label">pnpm</span>
          <code>pnpm add spacedatastandards.org</code>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .download-page {
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

  .download-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 20px;
    margin-bottom: 80px;
  }

  .download-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    gap: 20px;
    backdrop-filter: blur(20px);
    transition: all 0.2s;
  }

  .download-card:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
  }

  .download-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .download-icon :global(svg) {
    width: 24px;
    height: 24px;
    color: white;
  }

  .download-content {
    flex: 1;
  }

  .download-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .download-desc {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .download-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .download-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--code-bg);
    border: 1px solid var(--ui-border);
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    transition: all 0.2s;
    text-decoration: none;
  }

  .download-link:hover {
    background: var(--ui-hover);
    color: var(--text-primary);
    border-color: var(--ui-border-hover);
  }

  .download-btn-primary {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    border-color: transparent;
    color: white;
  }

  .download-btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  .individual-section {
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 12px;
    text-align: center;
  }

  .section-subtitle {
    font-size: 16px;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 40px;
  }

  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  .category-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 20px;
  }

  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .category-name {
    font-size: 16px;
    font-weight: 600;
  }

  .category-count {
    font-size: 12px;
    color: var(--text-muted);
  }

  .category-schemas {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .schema-link {
    padding: 6px 12px;
    background: var(--code-bg);
    border-radius: 8px;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--accent);
    transition: all 0.2s;
    text-decoration: none;
  }

  .schema-link:hover {
    background: rgba(102, 126, 234, 0.2);
    color: var(--text-primary);
  }

  .npm-section {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 40px;
  }

  .npm-section .section-title {
    margin-bottom: 24px;
  }

  .npm-commands {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 500px;
    margin: 0 auto;
  }

  .npm-command {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--code-bg);
    border-radius: 12px;
    padding: 12px 16px;
  }

  .npm-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    min-width: 50px;
  }

  .npm-command code {
    font-family: var(--font-mono);
    font-size: 14px;
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    .download-grid {
      grid-template-columns: 1fr;
    }

    .download-card {
      flex-direction: column;
    }

    .category-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
