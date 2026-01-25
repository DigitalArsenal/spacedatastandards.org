<script lang="ts">
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";

  let schemaCount = 0;

  // Schema categories with descriptions
  const categories = [
    {
      icon: "orbit",
      iconClass: "icon-blue",
      title: "Orbital Data",
      description: "OMM, OEM, OCM, OSM - Mean elements, ephemerides, and orbit characterization messages"
    },
    {
      icon: "alert",
      iconClass: "icon-orange",
      title: "Conjunction",
      description: "CDM, CSM, CAT - Conjunction data, screening, and catalog messages for collision avoidance"
    },
    {
      icon: "user",
      iconClass: "icon-green",
      title: "Entity",
      description: "EPM, PNM - Entity profiles and publish notifications for identity management"
    },
    {
      icon: "radio",
      iconClass: "icon-cyan",
      title: "Tracking",
      description: "TDM, RFM - Tracking data and reference frame messages for observation data"
    },
    {
      icon: "rocket",
      iconClass: "icon-purple",
      title: "Maneuver",
      description: "MET, MPE - Maneuver planning and execution messages for operations"
    },
    {
      icon: "store",
      iconClass: "icon-gold",
      title: "Marketplace",
      description: "STF, PUR, REV, ACL - Storefront, purchase, review, and access control for data commerce"
    }
  ];

  onMount(async () => {
    // Simulate counting schemas - in real implementation, fetch from index.json
    schemaCount = 36; // Current schema count including new marketplace schemas
  });
</script>

<section class="hero">
  <div class="hero-badge">
    <span class="badge-count">{schemaCount}</span>
    <span>Open Schemas</span>
  </div>
  <h1 class="hero-title">Space Data Standards</h1>
  <p class="hero-subtitle">
    Open schemas for standardized space situational awareness data exchange.
    FlatBuffers and JSON Schema definitions for orbital, conjunction, entity, and marketplace data.
  </p>
  <div class="hero-actions">
    <a href="/schemas" use:link class="btn btn-accent">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
      Browse Schemas
    </a>
    <a href="/docs" use:link class="btn btn-primary">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
      Documentation
    </a>
  </div>
</section>

<section id="features">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Schema Categories</h2>
      <p class="section-subtitle">
        Comprehensive data standards covering all aspects of space operations
      </p>
    </div>
    <div class="features-grid">
      {#each categories as cat}
        <div class="feature-card">
          <div class="feature-icon {cat.iconClass}">
            {#if cat.icon === "orbit"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
                <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
              </svg>
            {:else if cat.icon === "alert"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            {:else if cat.icon === "user"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            {:else if cat.icon === "radio"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
              </svg>
            {:else if cat.icon === "rocket"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            {:else if cat.icon === "store"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            {/if}
          </div>
          <h3 class="feature-title">{cat.title}</h3>
          <p class="feature-desc">{cat.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="formats">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Multiple Formats</h2>
      <p class="section-subtitle">
        JSON Schema with x-flatbuffer annotations as the canonical format, with generated code for multiple languages
      </p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon icon-blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </div>
        <h3 class="feature-title">JSON Schema</h3>
        <p class="feature-desc">Canonical format with x-flatbuffer annotations for type mapping and field IDs</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-green">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
        <h3 class="feature-title">FlatBuffers</h3>
        <p class="feature-desc">High-performance binary serialization with zero-copy access</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-cyan">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 18l6-6-6-6"></path>
            <path d="M8 6l-6 6 6 6"></path>
          </svg>
        </div>
        <h3 class="feature-title">TypeScript</h3>
        <p class="feature-desc">Full type definitions for browser and Node.js applications</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-purple">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        <h3 class="feature-title">Go</h3>
        <p class="feature-desc">Struct definitions for high-performance server implementations</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-orange">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <h3 class="feature-title">Python</h3>
        <p class="feature-desc">Dataclass definitions for data science and analysis</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <h3 class="feature-title">Rust</h3>
        <p class="feature-desc">Struct definitions for systems programming and embedded</p>
      </div>
    </div>
  </div>
</section>

<section id="cta" class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h2 class="cta-title">Ready to get started?</h2>
      <p class="cta-subtitle">Explore all available schemas or download the complete package</p>
      <div class="cta-actions">
        <a href="/schemas" use:link class="btn btn-accent">Explore Schemas</a>
        <a href="/download" use:link class="btn btn-primary">Download All</a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 120px 24px 80px;
    position: relative;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 24px;
    backdrop-filter: blur(10px);
  }

  .badge-count {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    padding: 2px 10px;
    border-radius: 12px;
    font-weight: 600;
    color: white;
  }

  .hero-title {
    font-size: clamp(40px, 8vw, 72px);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 20px;
    max-width: 900px;
  }

  .hero-subtitle {
    font-size: clamp(18px, 3vw, 22px);
    font-weight: 400;
    color: var(--text-secondary);
    max-width: 700px;
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  section {
    padding: 100px 24px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .section-title {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }

  .section-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
  }

  .feature-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    padding: 28px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
    transform: translateY(-4px);
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }

  .feature-icon::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.9;
    border-radius: inherit;
  }

  .feature-icon :global(svg) {
    width: 24px;
    height: 24px;
    color: #fff;
    position: relative;
    z-index: 1;
  }

  .icon-blue::before { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
  .icon-cyan::before { background: linear-gradient(135deg, #17ead9 0%, #6078ea 100%); }
  .icon-green::before { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); }
  .icon-orange::before { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
  .icon-purple::before { background: linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%); }
  .icon-gold::before { background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%); }

  .feature-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .feature-desc {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.5;
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
    backdrop-filter: blur(20px);
    transition: all 0.2s ease;
    cursor: pointer;
    border: 1px solid var(--ui-border);
    text-decoration: none;
  }

  .btn-primary {
    background: var(--ui-bg);
    color: var(--text-primary);
  }

  .btn-primary:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
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

  .cta-section {
    padding: 120px 24px;
  }

  .cta-content {
    text-align: center;
  }

  .cta-title {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 600;
    margin-bottom: 16px;
  }

  .cta-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  .cta-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 100px 20px 60px;
    }

    section {
      padding: 60px 20px;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
