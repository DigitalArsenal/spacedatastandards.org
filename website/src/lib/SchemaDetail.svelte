<script lang="ts">
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";

  export let params: { name: string } = { name: "" };

  let schema: any = null;
  let schemaFbs: string = "";
  let loading = true;
  let activeTab = "json";
  let expandedFields: Set<string> = new Set();

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
        <button class="download-btn" on:click={() => downloadSchema("ts")}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          TypeScript
        </button>
      </div>

      <div class="schema-tabs">
        <button
          class="schema-tab"
          class:active={activeTab === "json"}
          on:click={() => activeTab = "json"}
        >
          JSON Schema
        </button>
        <button
          class="schema-tab"
          class:active={activeTab === "fbs"}
          on:click={() => activeTab = "fbs"}
        >
          FlatBuffers
        </button>
        <button
          class="schema-tab"
          class:active={activeTab === "fields"}
          on:click={() => activeTab = "fields"}
        >
          Field Explorer
        </button>
      </div>

      <div class="schema-content">
        {#if activeTab === "json"}
          <div class="schema-code">
            <pre>{JSON.stringify(schema, null, 2)}</pre>
          </div>
        {:else if activeTab === "fbs"}
          <div class="schema-code">
            <pre>{schemaFbs || "FlatBuffer schema not available"}</pre>
          </div>
        {:else if activeTab === "fields"}
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
    max-width: 1000px;
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

  .schema-actions {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
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

  .download-btn:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
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
    max-height: 600px;
    overflow-y: auto;
  }

  .schema-code pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .field-tree {
    padding: 24px;
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

    .schema-actions {
      flex-direction: column;
    }

    .download-btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
