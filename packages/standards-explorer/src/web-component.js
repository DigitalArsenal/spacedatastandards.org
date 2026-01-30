/**
 * <standards-explorer> Web Component
 *
 * Renders an interactive standards browser with:
 * - Category grid view (matching index.html design)
 * - Flat list view with search
 * - Detail panel with IDL, JSON Schema, FB JSON Schema tabs
 * - Code generation via flatc-wasm with language selector
 */

import { StandardsExplorer, CATEGORIES, SUPPORTED_LANGUAGES, LANGUAGE_LABELS } from "./explorer.js";
import { styles } from "./styles.js";

/** SVG icon templates matching index.html */
const ICONS = {
  orbit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="4"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`,
  alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/></svg>`,
  radio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="2"/>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>`,
  rocket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`,
  store: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/></svg>`,
};

export class StandardsExplorerElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._explorer = new StandardsExplorer();
    this._view = "categories"; // "categories" | "list"
    this._selectedStandard = null;
    this._activeTab = "idl";
    this._searchQuery = "";
    this._selectedLang = "ts";
    this._generatedCode = null;
    this._generatedFiles = null;
    this._activeFile = null;
    this._generating = false;
    this._error = null;
  }

  async connectedCallback() {
    await this._explorer.init();
    this._render();
  }

  _render() {
    const root = this.shadowRoot;
    root.innerHTML = "";

    const style = document.createElement("style");
    style.textContent = styles;
    root.appendChild(style);

    const container = document.createElement("div");
    container.className = "explorer-container";

    // Header
    container.appendChild(this._renderHeader());

    // Main content
    if (this._selectedStandard) {
      container.appendChild(this._renderDetail());
    } else if (this._view === "categories") {
      container.appendChild(this._renderCategories());
    } else {
      container.appendChild(this._renderList());
    }

    root.appendChild(container);
  }

  _renderHeader() {
    const header = document.createElement("div");
    header.className = "explorer-header";

    const left = document.createElement("div");
    left.style.display = "flex";
    left.style.alignItems = "center";

    const title = document.createElement("span");
    title.className = "explorer-title";
    title.textContent = "Space Data Standards";
    left.appendChild(title);

    const version = this._explorer.getVersion();
    if (version) {
      const badge = document.createElement("span");
      badge.className = "explorer-version";
      badge.textContent = `v${version.split("+")[0]}`;
      left.appendChild(badge);
    }

    header.appendChild(left);

    const right = document.createElement("div");
    right.className = "search-bar";

    const input = document.createElement("input");
    input.className = "search-input";
    input.type = "text";
    input.placeholder = "Search standards...";
    input.value = this._searchQuery;
    input.addEventListener("input", (e) => {
      this._searchQuery = e.target.value;
      this._selectedStandard = null;
      this._view = "list";
      this._render();
    });
    right.appendChild(input);

    const toggle = document.createElement("div");
    toggle.className = "view-toggle";

    const catBtn = document.createElement("button");
    catBtn.className = `view-btn ${this._view === "categories" && !this._selectedStandard ? "active" : ""}`;
    catBtn.textContent = "Categories";
    catBtn.addEventListener("click", () => {
      this._view = "categories";
      this._selectedStandard = null;
      this._searchQuery = "";
      this._render();
    });
    toggle.appendChild(catBtn);

    const listBtn = document.createElement("button");
    listBtn.className = `view-btn ${this._view === "list" && !this._selectedStandard ? "active" : ""}`;
    listBtn.textContent = "All";
    listBtn.addEventListener("click", () => {
      this._view = "list";
      this._selectedStandard = null;
      this._render();
    });
    toggle.appendChild(listBtn);

    right.appendChild(toggle);
    header.appendChild(right);

    return header;
  }

  _renderCategories() {
    const grid = document.createElement("div");
    grid.className = "categories-grid";

    for (const cat of CATEGORIES) {
      const card = document.createElement("div");
      card.className = "category-card";

      const icon = document.createElement("div");
      icon.className = `category-icon ${cat.iconClass}`;
      icon.innerHTML = ICONS[cat.icon] || "";
      card.appendChild(icon);

      const title = document.createElement("h3");
      title.className = "category-title";
      title.textContent = cat.title;
      card.appendChild(title);

      const desc = document.createElement("p");
      desc.className = "category-desc";
      desc.textContent = cat.description;
      card.appendChild(desc);

      const tags = document.createElement("div");
      tags.className = "schema-tags";
      for (const schema of cat.schemas) {
        // Only show schemas that exist in the manifest
        if (!this._explorer.getStandard(schema)) continue;
        const tag = document.createElement("span");
        tag.className = "schema-tag";
        tag.textContent = schema;
        tag.addEventListener("click", () => this._selectStandard(schema));
        tags.appendChild(tag);
      }
      card.appendChild(tags);

      grid.appendChild(card);
    }

    return grid;
  }

  _renderList() {
    const list = document.createElement("div");
    list.className = "standards-list";

    const q = this._searchQuery.toLowerCase();
    const standards = this._explorer.getStandards().filter(
      (s) => !q || s.toLowerCase().includes(q)
    );

    for (const name of standards) {
      const chip = document.createElement("div");
      chip.className = "standard-chip";
      chip.textContent = name;
      chip.addEventListener("click", () => this._selectStandard(name));
      list.appendChild(chip);
    }

    if (standards.length === 0) {
      const msg = document.createElement("div");
      msg.className = "status-msg";
      msg.textContent = `No standards matching "${this._searchQuery}"`;
      list.appendChild(msg);
    }

    return list;
  }

  _renderDetail() {
    const panel = document.createElement("div");
    panel.className = "detail-panel";

    const std = this._explorer.getStandard(this._selectedStandard);
    if (!std) return panel;

    // Header
    const header = document.createElement("div");
    header.className = "detail-header";

    const title = document.createElement("span");
    title.className = "detail-title";
    title.textContent = std.name;
    header.appendChild(title);

    const close = document.createElement("button");
    close.className = "detail-close";
    close.innerHTML = "&times;";
    close.addEventListener("click", () => {
      this._selectedStandard = null;
      this._generatedCode = null;
      this._generatedFiles = null;
      this._activeFile = null;
      this._error = null;
      this._render();
    });
    header.appendChild(close);

    panel.appendChild(header);

    // Tabs
    const tabs = document.createElement("div");
    tabs.className = "tabs";

    const tabDefs = [
      { id: "idl", label: "FlatBuffers IDL" },
      { id: "jsonschema", label: "JSON Schema" },
      { id: "fbjsonschema", label: "FB JSON Schema" },
      { id: "codegen", label: "Generate Code" },
    ];

    for (const t of tabDefs) {
      const tab = document.createElement("button");
      tab.className = `tab ${this._activeTab === t.id ? "active" : ""}`;
      tab.textContent = t.label;
      tab.addEventListener("click", () => {
        this._activeTab = t.id;
        this._render();
      });
      tabs.appendChild(tab);
    }

    panel.appendChild(tabs);

    // Tab content
    if (this._activeTab === "idl") {
      panel.appendChild(this._renderCodeBlock(std.idl || "No IDL available"));
    } else if (this._activeTab === "jsonschema") {
      const content = std.jsonSchema ? JSON.stringify(std.jsonSchema, null, 2) : "No JSON Schema available";
      panel.appendChild(this._renderCodeBlock(content));
    } else if (this._activeTab === "fbjsonschema") {
      const content = std.fbJsonSchema ? JSON.stringify(std.fbJsonSchema, null, 2) : "No FB JSON Schema available";
      panel.appendChild(this._renderCodeBlock(content));
    } else if (this._activeTab === "codegen") {
      panel.appendChild(this._renderCodeGen(std));
    }

    // Available languages bar
    const langBar = document.createElement("div");
    langBar.className = "languages-bar";
    for (const lang of SUPPORTED_LANGUAGES) {
      const badge = document.createElement("span");
      badge.className = "lang-badge";
      badge.textContent = LANGUAGE_LABELS[lang];
      langBar.appendChild(badge);
    }
    panel.appendChild(langBar);

    return panel;
  }

  _renderCodeBlock(content) {
    const container = document.createElement("div");
    container.className = "code-container";

    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "Copy";
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(content).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => { copyBtn.textContent = "Copy"; }, 1500);
      });
    });
    container.appendChild(copyBtn);

    const block = document.createElement("div");
    block.className = "code-block";
    const pre = document.createElement("pre");
    pre.textContent = content;
    block.appendChild(pre);
    container.appendChild(block);

    return container;
  }

  _renderCodeGen(std) {
    const wrapper = document.createElement("div");

    // Controls
    const controls = document.createElement("div");
    controls.className = "codegen-controls";

    const label = document.createElement("span");
    label.className = "codegen-label";
    label.textContent = "Target language:";
    controls.appendChild(label);

    const select = document.createElement("select");
    select.className = "lang-select";
    for (const lang of SUPPORTED_LANGUAGES) {
      const opt = document.createElement("option");
      opt.value = lang;
      opt.textContent = LANGUAGE_LABELS[lang];
      if (lang === this._selectedLang) opt.selected = true;
      select.appendChild(opt);
    }
    select.addEventListener("change", (e) => {
      this._selectedLang = e.target.value;
    });
    controls.appendChild(select);

    const btn = document.createElement("button");
    btn.className = "generate-btn";
    btn.textContent = this._generating ? "Generating..." : "Generate";
    btn.disabled = this._generating;
    btn.addEventListener("click", () => this._generate(std.name));
    controls.appendChild(btn);

    wrapper.appendChild(controls);

    // Error
    if (this._error) {
      const err = document.createElement("div");
      err.className = "status-msg error-msg";
      err.textContent = this._error;
      wrapper.appendChild(err);
    }

    // Loading
    if (this._generating) {
      const loading = document.createElement("div");
      loading.className = "loading";
      loading.innerHTML = '<div class="spinner"></div>Generating code...';
      wrapper.appendChild(loading);
    }

    // Generated code
    if (this._generatedFiles && !this._generating) {
      const fileNames = Object.keys(this._generatedFiles);

      if (fileNames.length > 0) {
        // File tabs
        const fileTabs = document.createElement("div");
        fileTabs.className = "generated-files";
        for (const fname of fileNames) {
          const ft = document.createElement("button");
          ft.className = `file-tab ${fname === this._activeFile ? "active" : ""}`;
          ft.textContent = fname;
          ft.addEventListener("click", () => {
            this._activeFile = fname;
            this._render();
          });
          fileTabs.appendChild(ft);
        }
        wrapper.appendChild(fileTabs);

        // Show active file content
        const activeContent = this._generatedFiles[this._activeFile] || "";
        wrapper.appendChild(this._renderCodeBlock(activeContent));
      } else {
        const msg = document.createElement("div");
        msg.className = "status-msg";
        msg.textContent = "No files generated";
        wrapper.appendChild(msg);
      }
    }

    return wrapper;
  }

  async _generate(name) {
    this._generating = true;
    this._error = null;
    this._generatedFiles = null;
    this._activeFile = null;
    this._render();

    try {
      const result = await this._explorer.generateCode(name, this._selectedLang);
      this._generatedFiles = result;
      const fileNames = Object.keys(result);
      this._activeFile = fileNames.length > 0 ? fileNames[0] : null;
    } catch (e) {
      this._error = e.message || "Code generation failed";
    }

    this._generating = false;
    this._render();
  }

  _selectStandard(name) {
    this._selectedStandard = name;
    this._activeTab = "idl";
    this._generatedCode = null;
    this._generatedFiles = null;
    this._activeFile = null;
    this._error = null;
    this._render();
  }
}

// Register the custom element
if (!customElements.get("standards-explorer")) {
  customElements.define("standards-explorer", StandardsExplorerElement);
}
