<script lang="ts">
  const version = "1.71.0";
  const standardsCount = 118;

  const languages = [
    { name: "TypeScript", ext: "ts", file: "sds-typescript.zip", files: 1119, size: "8.8 MB", icon: "TS" },
    { name: "JavaScript", ext: "js", file: "sds-javascript.zip", files: 3359, size: "20 MB", icon: "JS" },
    { name: "Python", ext: "py", file: "sds-python.zip", files: 1141, size: "6.9 MB", icon: "PY" },
    { name: "Go", ext: "go", file: "sds-go.zip", files: 1001, size: "6.7 MB", icon: "GO" },
    { name: "Rust", ext: "rs", file: "sds-rust.zip", files: 118, size: "5.0 MB", icon: "RS" },
    { name: "C++", ext: "cpp", file: "sds-cpp.zip", files: 118, size: "2.7 MB", icon: "C++" },
    { name: "C#", ext: "cs", file: "sds-csharp.zip", files: 1000, size: "10 MB", icon: "C#" },
    { name: "Java", ext: "java", file: "sds-java.zip", files: 1000, size: "7.3 MB", icon: "JV" },
    { name: "Kotlin", ext: "kt", file: "sds-kotlin.zip", files: 1000, size: "7.4 MB", icon: "KT" },
    { name: "Swift", ext: "swift", file: "sds-swift.zip", files: 118, size: "2.5 MB", icon: "SW" },
    { name: "Dart", ext: "dart", file: "sds-dart.zip", files: 118, size: "2.2 MB", icon: "DT" },
    { name: "PHP", ext: "php", file: "sds-php.zip", files: 1000, size: "7.7 MB", icon: "PHP" },
    { name: "JSON Schema", ext: "json", file: "sds-json-schemas.zip", files: 119, size: "2.9 MB", icon: "{}" },
    { name: "FlatBuffers", ext: "fbs", file: "sds-flatbuffers.zip", files: 118, size: "1.2 MB", icon: "FB" },
  ];

  let selectedIndex = 0;
  let dropdownOpen = false;

  $: selected = languages[selectedIndex];

  function selectLanguage(index: number) {
    selectedIndex = index;
    dropdownOpen = false;
  }

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      dropdownOpen = false;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="download-page">
  <div class="bg-grid"></div>

  <div class="container">
    <div class="hero">
      <div class="version-badge">v{version}</div>
      <h1 class="title">Download Standards</h1>
      <p class="subtitle">{standardsCount} space data standards in your language</p>
    </div>

    <div class="download-card">
      <div class="card-glow"></div>

      <div class="selector-section">
        <label class="selector-label">Select Language</label>
        <div class="dropdown" class:open={dropdownOpen}>
          <button class="dropdown-trigger" on:click={toggleDropdown}>
            <span class="lang-badge">{selected.icon}</span>
            <span class="lang-name">{selected.name}</span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {#if dropdownOpen}
            <div class="dropdown-menu">
              {#each languages as lang, i}
                <button
                  class="dropdown-item"
                  class:selected={i === selectedIndex}
                  on:click={() => selectLanguage(i)}
                >
                  <span class="lang-badge">{lang.icon}</span>
                  <span class="lang-name">{lang.name}</span>
                  <span class="lang-ext">.{lang.ext}</span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat">
          <div class="stat-value">{selected.files.toLocaleString()}</div>
          <div class="stat-label">Files</div>
        </div>
        <div class="stat">
          <div class="stat-value">{selected.size}</div>
          <div class="stat-label">Size</div>
        </div>
        <div class="stat">
          <div class="stat-value">{standardsCount}</div>
          <div class="stat-label">Standards</div>
        </div>
      </div>

      <a href="/download/{selected.file}" class="download-button">
        <span class="button-bg"></span>
        <svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span class="button-text">Download {selected.name}</span>
      </a>

      <div class="file-info">
        <span class="file-name">{selected.file}</span>
      </div>
    </div>

    <div class="package-managers">
      <h2 class="pm-title">Install via Package Manager</h2>
      <p class="pm-subtitle">Available on all major package registries</p>

      <div class="pm-grid">
        <a href="https://www.npmjs.com/package/spacedatastandards.org" target="_blank" rel="noopener" class="pm-card">
          <div class="pm-icon npm">npm</div>
          <div class="pm-info">
            <div class="pm-name">npm / Node.js</div>
            <code class="pm-command">npm i spacedatastandards.org</code>
          </div>
        </a>

        <a href="https://pypi.org/project/spacedatastandards.org/" target="_blank" rel="noopener" class="pm-card">
          <div class="pm-icon pypi">PyPI</div>
          <div class="pm-info">
            <div class="pm-name">Python / PyPI</div>
            <code class="pm-command">pip install spacedatastandards.org</code>
          </div>
        </a>

        <a href="https://pkg.go.dev/github.com/DigitalArsenal/spacedatastandards.org/lib/go" target="_blank" rel="noopener" class="pm-card">
          <div class="pm-icon go">Go</div>
          <div class="pm-info">
            <div class="pm-name">Go Modules</div>
            <code class="pm-command">go get github.com/DigitalArsenal/spacedatastandards.org/lib/go</code>
          </div>
        </a>

        <a href="https://github.com/DigitalArsenal/spacedatastandards.org/pkgs/npm/spacedatastandards" target="_blank" rel="noopener" class="pm-card">
          <div class="pm-icon github">GH</div>
          <div class="pm-info">
            <div class="pm-name">GitHub Packages</div>
            <code class="pm-command">npm i @digitalarsenal/spacedatastandards</code>
          </div>
        </a>

        <a href="https://packagist.org/packages/digitalarsenal/spacedatastandards" target="_blank" rel="noopener" class="pm-card">
          <div class="pm-icon php">PHP</div>
          <div class="pm-info">
            <div class="pm-name">Packagist / PHP</div>
            <code class="pm-command">composer require digitalarsenal/spacedatastandards</code>
          </div>
        </a>

        <a href="https://github.com/DigitalArsenal/spacedatastandards.org" target="_blank" rel="noopener" class="pm-card">
          <div class="pm-icon source">src</div>
          <div class="pm-info">
            <div class="pm-name">Source Code</div>
            <code class="pm-command">git clone github.com/DigitalArsenal/spacedatastandards.org</code>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- svelte-ignore css-unused-selector -->
<style>
  .download-page {
    padding-top: 100px;
    min-height: calc(100vh - 100px);
    padding-bottom: 80px;
    position: relative;
    box-sizing: border-box;
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0, 119, 182, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 119, 182, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    pointer-events: none;
  }

  .container {
    max-width: 560px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
  }

  .hero {
    text-align: center;
    margin-bottom: 48px;
  }

  .version-badge {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(0, 119, 182, 0.1);
    border: 1px solid rgba(0, 119, 182, 0.2);
    border-radius: 20px;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--accent);
    margin-bottom: 20px;
  }

  .title {
    font-size: clamp(32px, 6vw, 44px);
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 12px;
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 17px;
    color: var(--text-secondary);
  }

  .download-card {
    position: relative;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 24px;
    padding: 32px;
    backdrop-filter: blur(20px);
  }

  .card-glow {
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.6;
  }

  .selector-section {
    margin-bottom: 28px;
  }

  .selector-label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin-bottom: 10px;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: var(--code-bg);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .dropdown-trigger:hover {
    border-color: var(--ui-border-hover);
    background: var(--ui-hover);
  }

  .dropdown.open .dropdown-trigger {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.1);
  }

  .lang-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    border-radius: 8px;
    font-size: 11px;
    font-weight: 700;
    color: white;
    flex-shrink: 0;
  }

  .lang-name {
    flex: 1;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary);
  }

  .chevron {
    width: 20px;
    height: 20px;
    color: var(--text-muted);
    transition: transform 0.2s;
  }

  .dropdown.open .chevron {
    transform: rotate(180deg);
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: #1a1a1a;
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
    z-index: 100;
    max-height: 320px;
    overflow-y: auto;
  }

  .dropdown-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.1s;
  }

  .dropdown-item:hover {
    background: var(--ui-hover);
  }

  .dropdown-item.selected {
    background: rgba(0, 119, 182, 0.1);
  }

  .dropdown-item .lang-badge {
    width: 32px;
    height: 32px;
    font-size: 10px;
  }

  .dropdown-item .lang-name {
    font-size: 14px;
  }

  .lang-ext {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-muted);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }

  .stat {
    text-align: center;
    padding: 16px;
    background: var(--code-bg);
    border-radius: 12px;
  }

  .stat-value {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    font-variant-numeric: tabular-nums;
  }

  .stat-label {
    font-size: 12px;
    color: var(--text-muted);
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .download-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    padding: 18px 32px;
    background: var(--accent);
    border: none;
    border-radius: 14px;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
  }

  .download-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%);
    transition: background 0.2s ease;
  }

  .download-button:hover::before {
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%);
  }

  .button-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
  }

  .button-icon {
    width: 22px;
    height: 22px;
    color: white;
    position: relative;
  }

  .button-text {
    font-size: 16px;
    font-weight: 600;
    color: white;
    position: relative;
  }

  .file-info {
    margin-top: 16px;
    text-align: center;
  }

  .file-name {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-muted);
  }

  .package-managers {
    margin-top: 48px;
    text-align: center;
  }

  .pm-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .pm-subtitle {
    font-size: 15px;
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  .pm-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .pm-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.15s;
  }

  .pm-card:hover {
    border-color: var(--accent);
    background: var(--ui-hover);
    transform: translateY(-2px);
  }

  .pm-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 700;
    color: white;
    flex-shrink: 0;
  }

  .pm-icon.npm { background: linear-gradient(135deg, #cb3837, #a02c2c); }
  .pm-icon.pypi { background: linear-gradient(135deg, #3775a9, #ffd43b); color: #3775a9; }
  .pm-icon.go { background: linear-gradient(135deg, #00add8, #007d9c); }
  .pm-icon.github { background: linear-gradient(135deg, #333, #24292e); }
  .pm-icon.php { background: linear-gradient(135deg, #777bb4, #4f5b93); }
  .pm-icon.source { background: linear-gradient(135deg, var(--accent), var(--accent-hover)); }

  .pm-info {
    flex: 1;
    text-align: left;
    overflow: hidden;
  }

  .pm-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
  }

  .pm-command {
    display: block;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 480px) {
    .download-card {
      padding: 24px;
    }

    .stats-grid {
      gap: 10px;
    }

    .stat {
      padding: 12px 8px;
    }

    .stat-value {
      font-size: 18px;
    }

    .pm-card {
      padding: 12px 16px;
    }

    .pm-icon {
      width: 36px;
      height: 36px;
      font-size: 10px;
    }

    .pm-command {
      font-size: 11px;
    }
  }
</style>
