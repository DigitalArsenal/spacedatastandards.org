/**
 * Shadow DOM styles matching the spacedatastandards.org index.html design.
 * Uses Inter font family, dark theme, card-based layout.
 */
export const styles = `
  :host {
    display: block;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #e0e0e0;
    --bg-primary: #0a0a0f;
    --bg-card: #12121a;
    --bg-card-hover: #1a1a2e;
    --bg-input: #1a1a2e;
    --border-color: #2a2a3e;
    --accent-blue: #4a9eff;
    --accent-green: #4ade80;
    --accent-red: #f87171;
    --accent-purple: #a78bfa;
    --accent-orange: #fb923c;
    --accent-teal: #2dd4bf;
    --text-primary: #e0e0e0;
    --text-secondary: #9ca3af;
    --text-muted: #6b7280;
    --radius: 12px;
    --radius-sm: 8px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .explorer-container {
    background: var(--bg-primary);
    padding: 24px;
    min-height: 400px;
  }

  /* Header */
  .explorer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 16px;
  }

  .explorer-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  .explorer-version {
    font-size: 12px;
    color: var(--text-muted);
    background: var(--bg-card);
    padding: 4px 10px;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    margin-left: 12px;
  }

  /* Search */
  .search-bar {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .search-input {
    background: var(--bg-input);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    padding: 8px 14px;
    font-size: 14px;
    font-family: inherit;
    width: 240px;
    outline: none;
    transition: border-color 0.2s;
  }

  .search-input:focus {
    border-color: var(--accent-blue);
  }

  .search-input::placeholder {
    color: var(--text-muted);
  }

  /* View toggle */
  .view-toggle {
    display: flex;
    gap: 4px;
    background: var(--bg-card);
    border-radius: var(--radius-sm);
    padding: 4px;
    border: 1px solid var(--border-color);
  }

  .view-btn {
    background: none;
    border: none;
    color: var(--text-muted);
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    font-family: inherit;
    transition: all 0.2s;
  }

  .view-btn.active {
    background: var(--accent-blue);
    color: #fff;
  }

  /* Category grid (matching index.html feature-card layout) */
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 20px;
    margin-bottom: 32px;
  }

  .category-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 24px;
    transition: all 0.2s;
  }

  .category-card:hover {
    border-color: var(--accent-blue);
    background: var(--bg-card-hover);
  }

  .category-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  .category-icon svg {
    width: 22px;
    height: 22px;
  }

  .icon-blue { background: rgba(74,158,255,0.15); color: var(--accent-blue); }
  .icon-red { background: rgba(248,113,113,0.15); color: var(--accent-red); }
  .icon-green { background: rgba(74,222,128,0.15); color: var(--accent-green); }
  .icon-purple { background: rgba(167,139,250,0.15); color: var(--accent-purple); }
  .icon-orange { background: rgba(251,146,60,0.15); color: var(--accent-orange); }
  .icon-teal { background: rgba(45,212,191,0.15); color: var(--accent-teal); }

  .category-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .category-desc {
    font-size: 13px;
    color: var(--text-secondary);
    margin-bottom: 16px;
    line-height: 1.5;
  }

  .schema-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .schema-tag {
    background: var(--bg-input);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 4px 10px;
    font-size: 12px;
    font-family: 'JetBrains Mono', monospace;
    color: var(--accent-blue);
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
  }

  .schema-tag:hover {
    background: rgba(74,158,255,0.15);
    border-color: var(--accent-blue);
  }

  .schema-tag.active {
    background: var(--accent-blue);
    color: #fff;
    border-color: var(--accent-blue);
  }

  /* Flat list view */
  .standards-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 8px;
    margin-bottom: 32px;
  }

  .standard-chip {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    padding: 10px 14px;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s;
  }

  .standard-chip:hover {
    border-color: var(--accent-blue);
    background: var(--bg-card-hover);
  }

  .standard-chip.active {
    background: var(--accent-blue);
    color: #fff;
    border-color: var(--accent-blue);
  }

  /* Detail panel */
  .detail-panel {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .detail-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--border-color);
    flex-wrap: wrap;
    gap: 12px;
  }

  .detail-title {
    font-size: 20px;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    color: var(--text-primary);
  }

  .detail-close {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    font-size: 20px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: color 0.2s;
  }

  .detail-close:hover {
    color: var(--text-primary);
  }

  /* Tabs */
  .tabs {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    padding: 0 20px;
    gap: 0;
    overflow-x: auto;
  }

  .tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-muted);
    padding: 12px 16px;
    font-size: 13px;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .tab:hover {
    color: var(--text-secondary);
  }

  .tab.active {
    color: var(--accent-blue);
    border-bottom-color: var(--accent-blue);
  }

  /* Code display */
  .code-container {
    position: relative;
  }

  .code-block {
    background: #0d0d14;
    padding: 20px;
    overflow-x: auto;
    max-height: 500px;
    overflow-y: auto;
  }

  .code-block pre {
    margin: 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-primary);
    white-space: pre;
    tab-size: 2;
  }

  .copy-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    color: var(--text-muted);
    padding: 6px 12px;
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 1;
  }

  .copy-btn:hover {
    color: var(--text-primary);
    border-color: var(--accent-blue);
  }

  /* Code gen controls */
  .codegen-controls {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    border-bottom: 1px solid var(--border-color);
    flex-wrap: wrap;
  }

  .codegen-label {
    font-size: 13px;
    color: var(--text-secondary);
  }

  .lang-select {
    background: var(--bg-input);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    padding: 8px 12px;
    font-size: 13px;
    font-family: inherit;
    outline: none;
    cursor: pointer;
  }

  .lang-select option {
    background: var(--bg-card);
    color: var(--text-primary);
  }

  .generate-btn {
    background: var(--accent-blue);
    border: none;
    border-radius: var(--radius-sm);
    color: #fff;
    padding: 8px 20px;
    font-size: 13px;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .generate-btn:hover {
    opacity: 0.9;
  }

  .generate-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Loading */
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    color: var(--text-muted);
    font-size: 14px;
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-top-color: var(--accent-blue);
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    margin-right: 10px;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Languages grid */
  .languages-bar {
    display: flex;
    gap: 8px;
    padding: 16px 20px;
    border-bottom: 1px solid var(--border-color);
    flex-wrap: wrap;
  }

  .lang-badge {
    background: var(--bg-input);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 4px 10px;
    font-size: 11px;
    color: var(--text-secondary);
  }

  /* Status messages */
  .status-msg {
    padding: 20px;
    text-align: center;
    color: var(--text-muted);
    font-size: 14px;
  }

  .error-msg {
    color: var(--accent-red);
  }

  /* Generated files list */
  .generated-files {
    border-bottom: 1px solid var(--border-color);
    padding: 0 20px;
    display: flex;
    gap: 0;
    overflow-x: auto;
  }

  .file-tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-muted);
    padding: 10px 14px;
    font-size: 12px;
    font-family: 'JetBrains Mono', monospace;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
  }

  .file-tab:hover {
    color: var(--text-secondary);
  }

  .file-tab.active {
    color: var(--accent-green);
    border-bottom-color: var(--accent-green);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .categories-grid {
      grid-template-columns: 1fr;
    }
    .explorer-header {
      flex-direction: column;
      align-items: flex-start;
    }
    .search-input {
      width: 100%;
    }
  }
`;
