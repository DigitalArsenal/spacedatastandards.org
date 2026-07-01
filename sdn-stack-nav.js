(() => {
  const footerHeight = "40px";
  const links = [
    {
      key: "standards",
      label: "Standards",
      href: "https://spacedatastandards.org/",
    },
    {
      key: "flatbuffers",
      label: "FlatBuffers",
      href: "https://digitalarsenal.github.io/flatbuffers/",
    },
    {
      key: "flatsql",
      label: "FlatSQL",
      href: "https://digitalarsenal.github.io/flatsql/",
    },
    {
      key: "sdn",
      label: "SDN",
      href: "https://spacedatanetwork.org/",
    },
    {
      key: "module-sdk",
      label: "Module SDK",
      href: "https://digitalarsenal.github.io/space-data-module-sdk/",
    },
  ];

  const styles = `
    :host {
      --sdn-stack-height: ${footerHeight};
      color-scheme: dark;
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .sdn-stack-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2147483000;
      height: var(--sdn-stack-height);
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(5, 7, 10, 0.94);
      color: #f5f5f7;
      backdrop-filter: blur(18px) saturate(140%);
      -webkit-backdrop-filter: blur(18px) saturate(140%);
    }

    .sdn-stack-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      height: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      min-width: 0;
    }

    .sdn-stack-brand {
      flex: 0 0 auto;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 1;
      white-space: nowrap;
    }

    .sdn-stack-links {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2px;
      min-width: 0;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .sdn-stack-links::-webkit-scrollbar {
      display: none;
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      padding: 0 9px;
      border: 1px solid transparent;
      border-radius: 6px;
      color: rgba(245, 245, 247, 0.74);
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      white-space: nowrap;
      transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease;
    }

    a:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.12);
    }

    a[data-active="true"] {
      color: #ffffff;
      background: rgba(10, 132, 255, 0.24);
      border-color: rgba(41, 151, 255, 0.42);
    }

    @media (max-width: 640px) {
      .sdn-stack-inner {
        padding: 0 12px;
        gap: 8px;
      }

      .sdn-stack-brand {
        font-size: 11px;
      }

      a {
        padding: 0 8px;
        font-size: 11px;
      }
    }
  `;

  class SdnStackNav extends HTMLElement {
    static get observedAttributes() {
      return ["active"];
    }

    connectedCallback() {
      if (!this.shadowRoot) {
        this.attachShadow({ mode: "open" });
      }
      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
      if (!this.shadowRoot) return;
      const active = this.getAttribute("active") || "";
      const items = links.map((link) => {
        const isActive = link.key === active;
        const current = isActive ? ' aria-current="page"' : "";
        return `<a href="${link.href}" data-active="${String(isActive)}"${current}>${link.label}</a>`;
      }).join("");

      this.shadowRoot.innerHTML = `
        <style>${styles}</style>
        <footer class="sdn-stack-bar">
          <nav class="sdn-stack-inner" aria-label="SDN Stack sites">
            <div class="sdn-stack-brand">SDN Stack</div>
            <div class="sdn-stack-links">${items}</div>
          </nav>
        </footer>
      `;
    }
  }

  document.documentElement.style.setProperty("--sdn-stack-footer-height", footerHeight);

  if (!customElements.get("sdn-stack-nav")) {
    customElements.define("sdn-stack-nav", SdnStackNav);
  }
})();
