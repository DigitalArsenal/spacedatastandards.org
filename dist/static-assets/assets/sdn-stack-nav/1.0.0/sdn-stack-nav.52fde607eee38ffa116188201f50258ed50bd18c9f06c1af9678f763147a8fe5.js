(() => {
  "use strict";

  const footerHeight = "40px";
  const documentClientKey = Symbol.for("sdn.wallet.public-client.v1");
  const links = Object.freeze([
    Object.freeze({
      key: "onboarding",
      label: "Onboarding",
      href: "https://spacedatanetwork.org/onboarding.html",
    }),
    Object.freeze({
      key: "standards",
      label: "Standards",
      href: "https://spacedatastandards.org/",
    }),
    Object.freeze({
      key: "flatbuffers",
      label: "FlatBuffers",
      href: "https://digitalarsenal.github.io/flatbuffers/",
    }),
    Object.freeze({
      key: "flatsql",
      label: "FlatSQL",
      href: "https://digitalarsenal.github.io/flatsql/",
    }),
    Object.freeze({
      key: "sdn",
      label: "SDN",
      href: "https://spacedatanetwork.org/",
    }),
    Object.freeze({
      key: "module-sdk",
      label: "Module SDK",
      href: "https://digitalarsenal.github.io/space-data-module-sdk/",
    }),
  ]);
  const loader = document.currentScript;
  const sha256 = /^[0-9a-f]{64}$/u;
  const sha384 = /^sha384-[A-Za-z0-9+/]{64}$/u;
  const clientId = /^[a-z0-9]+(?:-[a-z0-9]+)*-v[0-9]+$/u;

  function attribute(element, name) {
    if (!element || typeof element.getAttribute !== "function") return null;
    const value = element.getAttribute(name);
    return typeof value === "string" && value.length > 0 ? value : null;
  }

  function immutableAsset(urlValue, integrityValue, extension) {
    if (
      !urlValue
      || !urlValue.startsWith("https://static.spacedatanetwork.org/assets/")
      || !integrityValue
      || !sha384.test(integrityValue)
    ) return null;
    let url;
    try {
      url = new URL(urlValue);
    } catch {
      return null;
    }
    if (
      url.origin !== "https://static.spacedatanetwork.org"
      || url.search
      || url.hash
      || !url.pathname.startsWith("/assets/")
    ) return null;
    const filename = url.pathname.slice(url.pathname.lastIndexOf("/") + 1);
    const digest = filename.split(".").at(-2);
    if (!filename.endsWith(`.${extension}`) || !sha256.test(digest ?? "")) return null;
    return Object.freeze({ integrity: integrityValue, url: urlValue });
  }

  function exactPreloadedAsset(element, tagName, sourceName, asset) {
    if (!element || element.tagName !== tagName || !asset) return false;
    return attribute(element, sourceName) === asset.url
      && attribute(element, "integrity") === asset.integrity
      && attribute(element, "crossorigin") === "anonymous";
  }

  function readConfiguration() {
    const navStyle = immutableAsset(
      attribute(loader, "data-nav-style-url"),
      attribute(loader, "data-nav-style-integrity"),
      "css",
    );
    const walletClient = immutableAsset(
      attribute(loader, "data-wallet-client-url"),
      attribute(loader, "data-wallet-client-integrity"),
      "js",
    );
    const walletStyle = immutableAsset(
      attribute(loader, "data-wallet-style-url"),
      attribute(loader, "data-wallet-style-integrity"),
      "css",
    );
    const configuredClientId = attribute(loader, "data-wallet-client-id");
    const callbackValue = attribute(loader, "data-wallet-callback-uri");
    const registryDigest = attribute(loader, "data-wallet-registry-sha256");
    let callback;
    try {
      callback = callbackValue ? new URL(callbackValue) : null;
    } catch {
      callback = null;
    }
    const publicClientScript = loader?.previousElementSibling ?? null;
    const publicClientStyle = publicClientScript?.previousElementSibling ?? null;
    const preloaded = exactPreloadedAsset(publicClientScript, "SCRIPT", "src", walletClient)
      && attribute(publicClientScript, "data-sdn-wallet-public-client") === "v1"
      && exactPreloadedAsset(publicClientStyle, "LINK", "href", walletStyle)
      && attribute(publicClientStyle, "rel") === "stylesheet";
    const callbackValid = callback
      && callback.protocol === "https:"
      && callbackValue.startsWith(`${callback.origin}/`)
      && !callback.search
      && !callback.hash;
    const wallet = navStyle
      && walletClient
      && walletStyle
      && clientId.test(configuredClientId ?? "")
      && callbackValid
      && sha256.test(registryDigest ?? "")
      && preloaded
      ? Object.freeze({
        callbackUri: callbackValue,
        clientId: configuredClientId,
        registryDigest,
      })
      : null;
    return Object.freeze({ navStyle, wallet });
  }

  const config = readConfiguration();

  function validClient(value) {
    return Object.isFrozen(value)
      && typeof value.connect === "function"
      && typeof value.getSnapshot === "function"
      && typeof value.openAccount === "function"
      && typeof value.subscribe === "function";
  }

  function validDocumentClient(value) {
    return Object.isFrozen(value)
      && value.identity === "sdn.wallet.public-client.document.v1"
      && validClient(value.client)
      && typeof value.addPresenter === "function"
      && typeof value.getSnapshot === "function";
  }

  function createDocumentClient() {
    if (!config.wallet) return null;
    const existing = document[documentClientKey];
    if (existing !== undefined) return validDocumentClient(existing) ? existing : null;
    const namespace = globalThis.SDNWalletPublicClient;
    if (
      !namespace
      || !Object.isFrozen(namespace)
      || Object.keys(namespace).length !== 1
      || Object.keys(namespace)[0] !== "create"
      || typeof namespace.create !== "function"
    ) return null;

    try {
      const client = namespace.create({ clientId: config.wallet.clientId });
      if (!validClient(client)) return null;
      const presenters = new Set();
      let snapshot = client.getSnapshot();
      const record = Object.freeze({
        addPresenter(presenter) {
          presenters.add(presenter);
        },
        client,
        getSnapshot() {
          return snapshot;
        },
        identity: "sdn.wallet.public-client.document.v1",
      });
      const unsubscribe = client.subscribe((nextSnapshot) => {
        snapshot = nextSnapshot;
        for (const presenter of presenters) presenter.render();
      });
      if (typeof unsubscribe !== "function") return null;
      Object.defineProperty(document, documentClientKey, {
        configurable: false,
        enumerable: false,
        value: record,
        writable: false,
      });
      return record;
    } catch {
      return null;
    }
  }

  class SdnStackNav extends HTMLElement {
    static get observedAttributes() {
      return ["active", "wallet-presenter"];
    }

    connectedCallback() {
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      if (this.getAttribute("wallet-presenter") !== "none" && !this.walletClient) {
        this.walletClient = createDocumentClient();
        this.walletClient?.addPresenter(this);
      }
      this.render();
    }

    attributeChangedCallback() {
      if (!this.shadowRoot) return;
      if (this.getAttribute("wallet-presenter") !== "none" && !this.walletClient) {
        this.walletClient = createDocumentClient();
        this.walletClient?.addPresenter(this);
      }
      this.render();
    }

    createWalletButton() {
      const button = document.createElement("button");
      const snapshot = this.walletClient.getSnapshot();
      const connected = snapshot?.status === "connected";
      const opening = snapshot?.status === "opening";
      button.className = "sdn-stack-wallet";
      button.type = "button";
      button.textContent = connected ? "Account" : opening ? "Opening wallet…" : "Login";
      button.disabled = opening;
      button.dataset.status = opening ? "opening" : connected ? "connected" : "disconnected";
      button.setAttribute("aria-label", connected ? "Open wallet account" : "Log in with SDN Wallet");
      if (opening) button.setAttribute("aria-busy", "true");
      button.addEventListener("click", (event) => {
        if (event?.isTrusted !== true) return;
        const client = this.walletClient?.client;
        if (!client) return;
        let completion;
        try {
          completion = client.getSnapshot()?.status === "connected"
            ? client.openAccount()
            : client.connect();
        } catch {
          return;
        }
        if (completion && typeof completion.catch === "function") {
          void completion.catch(() => {});
        }
      });
      return button;
    }

    render() {
      if (!this.shadowRoot) return;
      const active = this.getAttribute("active") || "";
      const nodes = [];
      if (config.navStyle) {
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = config.navStyle.url;
        style.integrity = config.navStyle.integrity;
        style.crossOrigin = "anonymous";
        nodes.push(style);
      }
      const footer = document.createElement("footer");
      footer.className = "sdn-stack-bar";
      const nav = document.createElement("nav");
      nav.className = "sdn-stack-inner";
      nav.setAttribute("aria-label", "SDN Stack sites");
      const brand = document.createElement("div");
      brand.className = "sdn-stack-brand";
      brand.textContent = "SDN Stack";
      const list = document.createElement("div");
      list.className = "sdn-stack-links";
      for (const link of links) {
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.textContent = link.label;
        anchor.dataset.active = String(link.key === active);
        if (link.key === active) anchor.setAttribute("aria-current", "page");
        list.append(anchor);
      }
      nav.append(brand, list);
      if (this.getAttribute("wallet-presenter") !== "none" && this.walletClient) {
        nav.append(this.createWalletButton());
      }
      footer.append(nav);
      nodes.push(footer);
      this.shadowRoot.replaceChildren(...nodes);
    }
  }

  document.documentElement.style.setProperty("--sdn-stack-footer-height", footerHeight);
  if (!customElements.get("sdn-stack-nav")) {
    customElements.define("sdn-stack-nav", SdnStackNav);
  }
})();
