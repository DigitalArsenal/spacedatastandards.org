<script lang="ts">
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";
  import { writable, derived } from "svelte/store";

  interface SchemaInfo {
    key: string;
    name: string;
    description: string;
    category: string;
    fields: number;
  }

  // Schema metadata with categories
  const schemaData: Record<string, { description: string; category: string }> = {
    "OMM": { description: "Orbit Mean-Elements Message", category: "Orbital" },
    "OEM": { description: "Orbit Ephemeris Message", category: "Orbital" },
    "OCM": { description: "Orbit Comprehensive Message", category: "Orbital" },
    "OSM": { description: "Orbit State Message", category: "Orbital" },
    "CDM": { description: "Conjunction Data Message", category: "Conjunction" },
    "CSM": { description: "Conjunction Screening Message", category: "Conjunction" },
    "CAT": { description: "Catalog Message", category: "Conjunction" },
    "TDM": { description: "Tracking Data Message", category: "Tracking" },
    "RFM": { description: "Reference Frame Message", category: "Tracking" },
    "EPM": { description: "Entity Profile Message", category: "Entity" },
    "PNM": { description: "Publish Notification Message", category: "Entity" },
    "MET": { description: "Mean Element Theory", category: "Maneuver" },
    "MPE": { description: "Maneuver Planning/Execution", category: "Maneuver" },
    "HYP": { description: "Hyperbolic Orbit Parameters", category: "Propagation" },
    "EME": { description: "Earth Mean Equator", category: "Propagation" },
    "EOO": { description: "Earth Orientation Parameters", category: "Propagation" },
    "EOP": { description: "Earth Orientation Parameters", category: "Propagation" },
    "LCC": { description: "Launch Coordination Center", category: "Reference" },
    "LDM": { description: "Launch Data Message", category: "Reference" },
    "CRM": { description: "Collection Request Message", category: "Reference" },
    "CTR": { description: "Contact Request", category: "Reference" },
    "ATM": { description: "Attitude Message", category: "Other" },
    "BOV": { description: "Burn-out Vector", category: "Other" },
    "IDM": { description: "Identification Message", category: "Other" },
    "PLD": { description: "Payload Message", category: "Other" },
    "PRG": { description: "Progress Message", category: "Other" },
    "REC": { description: "Record Message", category: "Other" },
    "ROC": { description: "Reentry Operations Coordination", category: "Other" },
    "SCM": { description: "Schema Catalog Message", category: "Other" },
    "SIT": { description: "Site Message", category: "Other" },
    "TIM": { description: "Time System Message", category: "Other" },
    "VCM": { description: "Vector Covariance Message", category: "Other" },
    "STF": { description: "Storefront Listing", category: "Marketplace" },
    "PUR": { description: "Purchase Request", category: "Marketplace" },
    "REV": { description: "Review", category: "Marketplace" },
    "ACL": { description: "Access Control Grant", category: "Marketplace" },
    "XTC": { description: "XML Telemetry and Command Exchange", category: "Telemetry" },
  };

  const categories = ["All", "Orbital", "Conjunction", "Entity", "Tracking", "Telemetry", "Maneuver", "Propagation", "Reference", "Marketplace", "Other"];

  let schemas = writable<SchemaInfo[]>([]);
  let searchQuery = writable("");
  let activeCategory = writable("All");

  const filteredSchemas = derived(
    [schemas, searchQuery, activeCategory],
    ([$schemas, $searchQuery, $activeCategory]) => {
      return $schemas.filter((schema) => {
        const matchesSearch =
          schema.key.toLowerCase().includes($searchQuery.toLowerCase()) ||
          schema.description.toLowerCase().includes($searchQuery.toLowerCase());
        const matchesCategory =
          $activeCategory === "All" || schema.category === $activeCategory;
        return matchesSearch && matchesCategory;
      });
    }
  );

  onMount(async () => {
    // Build schema list from metadata
    const schemaList: SchemaInfo[] = Object.entries(schemaData).map(([key, data]) => ({
      key,
      name: key,
      description: data.description,
      category: data.category,
      fields: Math.floor(Math.random() * 50) + 10 // Placeholder - would come from actual schema
    }));
    schemas.set(schemaList);
  });

  function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      "Orbital": "rgba(102, 126, 234, 0.2)",
      "Conjunction": "rgba(245, 87, 108, 0.2)",
      "Entity": "rgba(56, 239, 125, 0.2)",
      "Tracking": "rgba(23, 234, 217, 0.2)",
      "Telemetry": "rgba(0, 200, 170, 0.2)",
      "Maneuver": "rgba(142, 45, 226, 0.2)",
      "Propagation": "rgba(240, 147, 251, 0.2)",
      "Reference": "rgba(247, 151, 30, 0.2)",
      "Marketplace": "rgba(255, 210, 0, 0.2)",
      "Other": "rgba(134, 134, 139, 0.2)",
    };
    return colors[category] || colors["Other"];
  }

  function getCategoryTextColor(category: string): string {
    const colors: Record<string, string> = {
      "Orbital": "#667eea",
      "Conjunction": "#f5576c",
      "Entity": "#38ef7d",
      "Tracking": "#17ead9",
      "Telemetry": "#00c8aa",
      "Maneuver": "#8E2DE2",
      "Propagation": "#f093fb",
      "Reference": "#f7971e",
      "Marketplace": "#ffd200",
      "Other": "#86868b",
    };
    return colors[category] || colors["Other"];
  }
</script>

<section class="schemas-page">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Schema Registry</h1>
      <p class="page-subtitle">
        Browse all Space Data Standards schemas. Click a schema to view its structure and download options.
      </p>
    </div>

    <div class="schema-controls">
      <input
        type="search"
        class="search-box"
        placeholder="Search schemas..."
        bind:value={$searchQuery}
      />
      <div class="filter-pills">
        {#each categories as category}
          <button
            class="filter-pill"
            class:active={$activeCategory === category}
            on:click={() => activeCategory.set(category)}
          >
            {category}
          </button>
        {/each}
      </div>
    </div>

    <div class="results-info">
      Showing {$filteredSchemas.length} of {$schemas.length} schemas
    </div>

    <div class="schema-grid">
      {#each $filteredSchemas as schema}
        <a href="/schemas/{schema.key}" use:link class="schema-card">
          <div class="schema-card-header">
            <span class="schema-name">{schema.key}</span>
            <span
              class="schema-category"
              style="background: {getCategoryColor(schema.category)}; color: {getCategoryTextColor(schema.category)};"
            >
              {schema.category}
            </span>
          </div>
          <p class="schema-desc">{schema.description}</p>
          <div class="schema-meta">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              JSON Schema
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              FlatBuffers
            </span>
          </div>
        </a>
      {/each}
    </div>

    {#if $filteredSchemas.length === 0}
      <div class="no-results">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p>No schemas found matching your search.</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .schemas-page {
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
    margin-bottom: 48px;
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

  .schema-controls {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .search-box {
    flex: 1;
    min-width: 250px;
    padding: 12px 20px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    font-size: 15px;
    color: var(--text-primary);
    font-family: var(--font-sans);
    backdrop-filter: blur(10px);
    transition: all 0.2s;
  }

  .search-box:focus {
    outline: none;
    border-color: var(--accent);
  }

  .search-box::placeholder {
    color: var(--text-muted);
  }

  .filter-pills {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .filter-pill {
    padding: 10px 18px;
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

  .filter-pill:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
    color: var(--text-primary);
  }

  .filter-pill.active {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    border-color: transparent;
    color: white;
  }

  .results-info {
    font-size: 14px;
    color: var(--text-muted);
    margin-bottom: 24px;
  }

  .schema-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }

  .schema-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 20px;
    backdrop-filter: blur(20px);
    transition: all 0.2s;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .schema-card:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
    transform: translateY(-2px);
  }

  .schema-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .schema-name {
    font-size: 18px;
    font-weight: 600;
    font-family: var(--font-mono);
    color: var(--text-primary);
  }

  .schema-category {
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 12px;
    font-weight: 500;
  }

  .schema-desc {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 12px;
  }

  .schema-meta {
    display: flex;
    gap: 16px;
    font-size: 13px;
    color: var(--text-muted);
  }

  .schema-meta span {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .no-results {
    text-align: center;
    padding: 60px 20px;
    color: var(--text-muted);
  }

  .no-results svg {
    margin-bottom: 16px;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    .schema-controls {
      flex-direction: column;
    }

    .search-box {
      width: 100%;
    }

    .schema-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
