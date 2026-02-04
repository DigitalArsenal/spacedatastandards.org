<script lang="ts">
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";

  export let params: { name: string } = { name: "" };

  let schema: any = null;
  let schemaFbs: string = "";
  let loading = true;
  let schemaTab = "json";
  let expandedFields: Set<string> = new Set();

  // Code generation state
  let selectedLanguage = "ts";
  let generatedFiles: Record<string, string> = {};
  let selectedFile = "";
  let isGenerating = false;
  let generationError = "";
  let standardsExplorer: any = null;

  const SUPPORTED_LANGUAGES = [
    { value: "ts", label: "TypeScript" },
    { value: "python", label: "Python" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "cpp", label: "C++" },
    { value: "csharp", label: "C#" },
    { value: "java", label: "Java" },
    { value: "kotlin", label: "Kotlin" },
    { value: "swift", label: "Swift" },
    { value: "dart", label: "Dart" },
    { value: "php", label: "PHP" },
  ];

  // Schema descriptions
  const schemaDescriptions: Record<string, string> = {
    "OMM": "The Orbit Mean-Elements Message (OMM) contains orbital state information based on mean Keplerian elements for a specified epoch. Used for TLE-equivalent data exchange.",
    "OEM": "The Orbit Ephemeris Message (OEM) contains precise state vectors for spacecraft trajectory information at multiple epochs.",
    "CDM": "The Conjunction Data Message (CDM) provides detailed collision risk assessment data between two space objects.",
    "EPM": "The Entity Profile Message (EPM) contains identity and profile information for organizations, individuals, or systems.",
    "STF": "The Storefront Listing (STF) defines a data product or service offering in the Space Data Network marketplace.",
    "PUR": "The Purchase Request (PUR) represents a buyer's intent to purchase access to a storefront listing.",
    "REV": "The Review (REV) contains user feedback and ratings for storefront listings.",
    "ACL": "The Access Control Grant (ACL) represents permission to access purchased data from a storefront listing.",
  };

  const categoryMap: Record<string, string> = {
    "OMM": "Orbital", "OEM": "Orbital", "OCM": "Orbital", "OSM": "Orbital",
    "CDM": "Conjunction", "CSM": "Conjunction", "CAT": "Conjunction",
    "EPM": "Entity", "PNM": "Entity",
    "TDM": "Tracking", "RFM": "Tracking",
    "MET": "Maneuver", "MPE": "Maneuver",
    "STF": "Marketplace", "PUR": "Marketplace", "REV": "Marketplace", "ACL": "Marketplace",
  };

  interface FieldInfo {
    name: string;
    type: string;
    description: string;
    required: boolean;
    flatbufferType?: string;
    flatbufferId?: number;
    children?: FieldInfo[];
  }

  let fields: FieldInfo[] = [];

  // Load standards-explorer from CDN (similar to Cesium pattern)
  async function loadStandardsExplorer(): Promise<any> {
    // Check if already loaded
    if ((window as any).StandardsExplorerLib?.StandardsExplorer) {
      const explorer = new (window as any).StandardsExplorerLib.StandardsExplorer();
      await explorer.init();
      return explorer;
    }

    // Load standards-explorer which bundles flatc-wasm
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@spacedatastandards/standards-explorer@latest/dist/standards-explorer.min.js";
      script.async = true;
      script.onload = async () => {
        try {
          const explorer = new (window as any).StandardsExplorerLib.StandardsExplorer();
          await explorer.init();
          resolve(explorer);
        } catch (e) {
          reject(e);
        }
      };
      script.onerror = () => reject(new Error("Failed to load standards-explorer"));
      document.head.appendChild(script);
    });
  }

  onMount(async () => {
    try {
      // Try to load the JSON schema
      const response = await fetch(`/lib/json/${params.name}/main.schema.json`);
      if (response.ok) {
        schema = await response.json();
        fields = parseSchemaFields(schema);
      }
    } catch (e) {
      console.error("Error loading schema:", e);
    }

    try {
      // Try to load the FlatBuffers schema
      const fbsResponse = await fetch(`/schema/${params.name}/main.fbs`);
      if (fbsResponse.ok) {
        schemaFbs = await fbsResponse.text();
      }
    } catch (e) {
      console.error("Error loading fbs:", e);
    }

    loading = false;

    // Generate code with default language
    generateCode();
  });

  function parseSchemaFields(schema: any): FieldInfo[] {
    const mainDef = schema.definitions?.[params.name];
    if (!mainDef?.properties) return [];

    return Object.entries(mainDef.properties).map(([name, prop]: [string, any]) => ({
      name,
      type: getTypeString(prop),
      description: prop.description || "",
      required: mainDef.required?.includes(name) || false,
      flatbufferType: prop["x-flatbuffer-type"],
      flatbufferId: prop["x-flatbuffer-field-id"],
    }));
  }

  function getTypeString(prop: any): string {
    if (prop.$ref) {
      const refName = prop.$ref.split("/").pop();
      return refName || "object";
    }
    if (prop.type === "array") {
      return `array<${getTypeString(prop.items || {})}>`;
    }
    return prop.type || "any";
  }

  function toggleField(fieldName: string) {
    if (expandedFields.has(fieldName)) {
      expandedFields.delete(fieldName);
    } else {
      expandedFields.add(fieldName);
    }
    expandedFields = expandedFields;
  }

  function expandAll() {
    fields.forEach(f => expandedFields.add(f.name));
    expandedFields = expandedFields;
  }

  function collapseAll() {
    expandedFields.clear();
    expandedFields = expandedFields;
  }

  function downloadSchema(format: string) {
    let url = "";
    let filename = "";

    switch (format) {
      case "json":
        url = `/lib/json/${params.name}/main.schema.json`;
        filename = `${params.name}.schema.json`;
        break;
      case "fbs":
        url = `/schema/${params.name}/main.fbs`;
        filename = `${params.name}.fbs`;
        break;
      case "ts":
        url = `/lib/ts/${params.name}/main.d.ts`;
        filename = `${params.name}.d.ts`;
        break;
    }

    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();
    }
  }

  async function generateCode() {
    isGenerating = true;
    generationError = "";
    generatedFiles = {};
    selectedFile = "";

    try {
      // Lazy-init standards-explorer by loading from CDN (similar to Cesium)
      if (!standardsExplorer) {
        standardsExplorer = await loadStandardsExplorer();
      }

      // Use standards-explorer's generateCode API which handles includes internally
      const files = await standardsExplorer.generateCode(params.name, selectedLanguage);

      generatedFiles = files;

      // Select the first file by default
      const fileNames = Object.keys(files);
      if (fileNames.length > 0) {
        selectedFile = fileNames[0];
      }
    } catch (e: any) {
      console.error("Code generation error:", e);
      generationError = e.message || "Failed to generate code";
    } finally {
      isGenerating = false;
    }
  }

  function handleLanguageChange() {
    generateCode();
  }

  function selectFile(filename: string) {
    selectedFile = filename;
  }

  function getFileExtension(filename: string): string {
    const parts = filename.split(".");
    return parts.length > 1 ? parts[parts.length - 1] : "";
  }

  function getFileName(filepath: string): string {
    const parts = filepath.split("/");
    return parts[parts.length - 1];
  }

  async function downloadGeneratedCode() {
    if (Object.keys(generatedFiles).length === 0) return;

    // Dynamic import JSZip
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();

    // Add all generated files to the zip
    for (const [filepath, content] of Object.entries(generatedFiles)) {
      // Remove leading slash if present
      const cleanPath = filepath.startsWith("/") ? filepath.slice(1) : filepath;
      zip.file(cleanPath, content);
    }

    // Generate and download the zip
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${params.name}-${selectedLanguage}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  }
</script>

<section class="schema-detail-page">
  <div class="container">
    <nav class="breadcrumb">
      <a href="/schemas" use:link>Schemas</a>
      <span>/</span>
      <span>{params.name}</span>
    </nav>

    {#if loading}
      <div class="loading">Loading schema...</div>
    {:else}
      <div class="schema-detail-header">
        <div class="header-top">
          <h1 class="schema-detail-title">{params.name}</h1>
          <span class="schema-category-badge">
            {categoryMap[params.name] || "Other"}
          </span>
        </div>
        <p class="schema-detail-desc">
          {schemaDescriptions[params.name] || schema?.definitions?.[params.name]?.description || "Space Data Standard schema"}
        </p>
      </div>

      <!-- SCHEMA SECTION -->
      <div class="section">
        <div class="section-header">
          <h2 class="section-title">Schema</h2>
          <div class="schema-actions">
            <button class="download-btn" on:click={() => downloadSchema("json")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              JSON Schema
            </button>
            <button class="download-btn" on:click={() => downloadSchema("fbs")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              FlatBuffers
            </button>
          </div>
        </div>

        <div class="schema-tabs">
          <button
            class="schema-tab"
            class:active={schemaTab === "json"}
            on:click={() => schemaTab = "json"}
          >
            JSON Schema
          </button>
          <button
            class="schema-tab"
            class:active={schemaTab === "fbs"}
            on:click={() => schemaTab = "fbs"}
          >
            FlatBuffers
          </button>
          <button
            class="schema-tab"
            class:active={schemaTab === "fields"}
            on:click={() => schemaTab = "fields"}
          >
            Field Explorer
          </button>
        </div>

        <div class="schema-content">
          {#if schemaTab === "json"}
            <div class="schema-code">
              <pre>{JSON.stringify(schema, null, 2)}</pre>
            </div>
          {:else if schemaTab === "fbs"}
            <div class="schema-code">
              <pre>{schemaFbs || "FlatBuffer schema not available"}</pre>
            </div>
          {:else if schemaTab === "fields"}
            <div class="field-tree">
              <div class="field-tree-actions">
                <button on:click={expandAll}>Expand All</button>
                <button on:click={collapseAll}>Collapse All</button>
              </div>
              {#each fields as field}
                <div class="field-item">
                  <div class="field-header" on:click={() => toggleField(field.name)}>
                    <span class="field-expand" class:expanded={expandedFields.has(field.name)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                    <span class="field-name">{field.name}</span>
                    <span class="field-type">{field.type}</span>
                    {#if field.required}
                      <span class="field-required">required</span>
                    {/if}
                  </div>
                  {#if expandedFields.has(field.name)}
                    <div class="field-details">
                      <p class="field-description">{field.description || "No description available"}</p>
                      {#if field.flatbufferType}
                        <div class="field-annotation">
                          <span class="field-annotation-key">x-flatbuffer-type:</span>
                          <span class="field-annotation-value">{field.flatbufferType}</span>
                        </div>
                      {/if}
                      {#if field.flatbufferId !== undefined}
                        <div class="field-annotation">
                          <span class="field-annotation-key">x-flatbuffer-field-id:</span>
                          <span class="field-annotation-value">{field.flatbufferId}</span>
                        </div>
                      {/if}
                    </div>
                  {/if}
                </div>
              {/each}
              {#if fields.length === 0}
                <p class="no-fields">No field information available for this schema.</p>
              {/if}
            </div>
          {/if}
        </div>
      </div>

      <!-- CODE SECTION -->
      <div class="section">
        <div class="section-header">
          <h2 class="section-title">Code</h2>
          <div class="code-actions">
            <select class="language-select" bind:value={selectedLanguage} on:change={handleLanguageChange}>
              {#each SUPPORTED_LANGUAGES as lang}
                <option value={lang.value}>{lang.label}</option>
              {/each}
            </select>
            <button
              class="download-btn"
              on:click={downloadGeneratedCode}
              disabled={Object.keys(generatedFiles).length === 0 || isGenerating}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </button>
          </div>
        </div>

        <div class="code-studio">
          {#if isGenerating}
            <div class="code-loading">
              <div class="spinner"></div>
              <p>Generating code...</p>
            </div>
          {:else if generationError}
            <div class="code-error">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <p>{generationError}</p>
            </div>
          {:else}
            <div class="code-layout">
              <!-- File Explorer -->
              <div class="file-explorer">
                <div class="file-explorer-header">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Files ({Object.keys(generatedFiles).length})</span>
                </div>
                <div class="file-list">
                  {#each Object.keys(generatedFiles) as filepath}
                    <button
                      class="file-item"
                      class:selected={selectedFile === filepath}
                      on:click={() => selectFile(filepath)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                      </svg>
                      <span class="file-name" title={filepath}>{getFileName(filepath)}</span>
                    </button>
                  {/each}
                  {#if Object.keys(generatedFiles).length === 0}
                    <p class="no-files">No files generated</p>
                  {/if}
                </div>
              </div>

              <!-- Code Viewer -->
              <div class="code-viewer">
                {#if selectedFile && generatedFiles[selectedFile]}
                  <div class="code-viewer-header">
                    <span class="code-file-path">{selectedFile}</span>
                  </div>
                  <div class="code-content">
                    <pre><code>{generatedFiles[selectedFile]}</code></pre>
                  </div>
                {:else}
                  <div class="code-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <p>Select a file to view its contents</p>
                  </div>
                {/if}
              </div>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .schema-detail-page {
    padding-top: 80px;
    min-height: 100vh;
    padding-bottom: 60px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--text-muted);
    margin-bottom: 32px;
  }

  .breadcrumb a {
    color: var(--text-secondary);
    transition: color 0.2s;
  }

  .breadcrumb a:hover {
    color: var(--text-primary);
  }

  .schema-detail-header {
    margin-bottom: 32px;
  }

  .header-top {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
  }

  .schema-detail-title {
    font-size: 36px;
    font-weight: 600;
    font-family: var(--font-mono);
  }

  .schema-category-badge {
    padding: 6px 14px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    color: white;
  }

  .schema-detail-desc {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  /* Section Styles */
  .section {
    margin-bottom: 48px;
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 16px;
  }

  .section-title {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .schema-actions, .code-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .download-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
  }

  .download-btn:hover:not(:disabled) {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
  }

  .download-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .language-select {
    padding: 10px 16px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
    min-width: 140px;
  }

  .language-select:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
  }

  .language-select:focus {
    outline: none;
    border-color: var(--accent);
  }

  .schema-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .schema-tab {
    padding: 10px 20px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
  }

  .schema-tab:hover {
    background: var(--ui-hover);
    color: var(--text-primary);
  }

  .schema-tab.active {
    background: var(--text-primary);
    border-color: var(--text-primary);
    color: var(--bg);
  }

  .schema-content {
    background: var(--code-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    overflow: hidden;
  }

  .schema-code {
    padding: 24px;
    overflow-x: auto;
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-secondary);
    max-height: 500px;
    overflow-y: auto;
  }

  .schema-code pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .field-tree {
    padding: 24px;
    max-height: 500px;
    overflow-y: auto;
  }

  .field-tree-actions {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .field-tree-actions button {
    padding: 6px 14px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    font-size: 13px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
  }

  .field-tree-actions button:hover {
    background: var(--ui-hover);
    color: var(--text-primary);
  }

  .field-item {
    border-bottom: 1px solid var(--ui-border);
    padding: 12px 0;
  }

  .field-item:last-child {
    border-bottom: none;
  }

  .field-header {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .field-expand {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    transition: transform 0.2s;
  }

  .field-expand.expanded {
    transform: rotate(90deg);
  }

  .field-name {
    font-family: var(--font-mono);
    font-weight: 500;
    color: var(--text-primary);
  }

  .field-type {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--accent);
  }

  .field-required {
    font-size: 11px;
    padding: 2px 6px;
    background: rgba(245, 87, 108, 0.2);
    border-radius: 4px;
    color: #f5576c;
    font-weight: 500;
  }

  .field-details {
    margin-left: 28px;
    padding-top: 12px;
    font-size: 14px;
    color: var(--text-secondary);
  }

  .field-description {
    margin-bottom: 8px;
  }

  .field-annotation {
    display: flex;
    gap: 8px;
    margin-top: 4px;
    font-family: var(--font-mono);
    font-size: 12px;
  }

  .field-annotation-key {
    color: var(--text-muted);
  }

  .field-annotation-value {
    color: var(--accent);
  }

  /* Code Studio Styles */
  .code-studio {
    background: var(--code-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    overflow: hidden;
    min-height: 400px;
  }

  .code-loading, .code-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    color: var(--text-muted);
    gap: 16px;
  }

  .code-error {
    color: #f5576c;
  }

  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid var(--ui-border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .code-layout {
    display: flex;
    height: 500px;
  }

  .file-explorer {
    width: 250px;
    border-right: 1px solid var(--ui-border);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .file-explorer-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.03);
    border-bottom: 1px solid var(--ui-border);
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
  }

  .file-list {
    flex: 1;
    overflow-y: auto;
    padding: 8px;
  }

  .file-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 12px;
    background: transparent;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.15s;
    text-align: left;
    font-family: var(--font-mono);
  }

  .file-item:hover {
    background: var(--ui-hover);
    color: var(--text-primary);
  }

  .file-item.selected {
    background: var(--accent);
    color: white;
  }

  .file-item.selected svg {
    stroke: white;
  }

  .file-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .no-files {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
    font-size: 13px;
  }

  .code-viewer {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .code-viewer-header {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.03);
    border-bottom: 1px solid var(--ui-border);
  }

  .code-file-path {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-muted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .code-content {
    flex: 1;
    overflow: auto;
    padding: 16px 20px;
  }

  .code-content pre {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-secondary);
    white-space: pre;
  }

  .code-content code {
    display: block;
  }

  .code-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--text-muted);
    gap: 16px;
  }

  .code-placeholder svg {
    opacity: 0.5;
  }

  .loading, .no-fields {
    padding: 40px;
    text-align: center;
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .header-top {
      flex-direction: column;
      align-items: flex-start;
    }

    .section-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .schema-actions, .code-actions {
      width: 100%;
    }

    .download-btn {
      flex: 1;
      justify-content: center;
    }

    .language-select {
      flex: 1;
    }

    .code-layout {
      flex-direction: column;
      height: auto;
    }

    .file-explorer {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid var(--ui-border);
      max-height: 200px;
    }

    .code-viewer {
      min-height: 300px;
    }
  }
</style>
