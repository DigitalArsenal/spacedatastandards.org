import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

import { migrationCases } from "./fixtures/sdn-stack-nav-migration-cases.mjs";

const expectedLinks = [
  ["onboarding", "Onboarding", "https://spacedatanetwork.org/onboarding.html"],
  ["standards", "Standards", "https://spacedatastandards.org/"],
  ["flatbuffers", "FlatBuffers", "https://digitalarsenal.github.io/flatbuffers/"],
  ["flatsql", "FlatSQL", "https://digitalarsenal.github.io/flatsql/"],
  ["sdn", "SDN", "https://spacedatanetwork.org/"],
  ["module-sdk", "Module SDK", "https://digitalarsenal.github.io/space-data-module-sdk/"],
];

const headerTokens = [
  ["--sdn-stack-header-height", "52px"],
  ["--sdn-stack-header-brand-size", "15px"],
  ["--sdn-stack-header-link-size", "14px"],
  ["--sdn-stack-header-action-size", "13px"],
  ["--sdn-stack-header-mobile-link-size", "16px"],
];

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const assetIndex = args.indexOf("--asset");
const assetPath = assetIndex === -1 ? null : args[assetIndex + 1];
const filteredArgs = assetIndex === -1
  ? args
  : [...args.slice(0, assetIndex), ...args.slice(assetIndex + 2)];
const [active, ...contentPaths] = filteredArgs;

if (!active || contentPaths.length === 0 || (assetIndex !== -1 && !assetPath)) {
  throw new Error("Usage: node scripts/check-sdn-stack-nav.mjs <active> <content...> [--asset <path>]");
}

function read(path) {
  return readFileSync(path, "utf8");
}

function checkContent(path) {
  const content = read(path);
  if (content.includes("--sdn-stack-nav-height")) {
    throw new Error(`${path} must not reserve top header space for the SDN Stack nav`);
  }
  if (content.includes("Space Stack")) {
    throw new Error(`${path} must use SDN Stack, not Space Stack`);
  }
  return content;
}

const contents = contentPaths.map((path) => [path, checkContent(path)]);
const asset = assetPath ? read(assetPath) : "";
const styleAsset = read(resolve(repositoryRoot, "sdn-stack-nav.css"));

if (assetPath) {
  assert.doesNotMatch(asset, /innerHTML|insertAdjacentHTML|document\.write/u);
  assert.match(asset, /wallet-presenter/u);
  assert.match(asset, /SDNWalletPublicClient/u);
  assert.match(asset, /replaceChildren/u);
}

const linksDocument = JSON.parse(read(resolve(repositoryRoot, "sdn-stack-nav.links.json")));
const packageDocument = JSON.parse(read(resolve(repositoryRoot, "package.json")));
assert.deepEqual(Object.keys(linksDocument).sort(), ["links", "schemaVersion"]);
assert.equal(linksDocument.schemaVersion, 1);
assert.deepEqual(
  linksDocument.links.map(({ key, label, href }) => [key, label, href]),
  expectedLinks,
);
assert.deepEqual(
  linksDocument.links.map((link) => Object.keys(link).sort()),
  expectedLinks.map(() => ["href", "key", "label"]),
);
for (const scriptName of ["build", "build:mac"]) {
  assert.match(
    packageDocument.scripts[scriptName],
    /&& npm run build:nav-release$/u,
    `${scriptName} must retain the immutable nav release after rebuilding dist`,
  );
}

if (!contents.some(([, content]) => content.includes("sdn-stack-nav"))) {
  throw new Error("Expected a page shell to reference the SDN Stack nav");
}
if (!contents.some(([, content]) => content.includes("<sdn-stack-nav"))) {
  throw new Error("Expected a page shell to render <sdn-stack-nav>");
}
if (!contents.some(([, content]) => content.includes(`active="${active}"`))) {
  throw new Error(`Expected an sdn-stack-nav element with active="${active}"`);
}
if (!contents.some(([, content]) => content.includes('href="#stack"'))) {
  throw new Error("Expected a header Stack link pointing to #stack");
}
if (!contents.some(([, content]) => content.includes('id="stack"'))) {
  throw new Error("Expected a local #stack section");
}
for (const [name, value] of headerTokens) {
  const declaration = `${name}: ${value}`;
  if (!contents.some(([, content]) => content.includes(declaration))) {
    throw new Error(`Expected shared header token ${declaration}`);
  }
}
if (!contents.some(([, content]) => content.includes("height: var(--sdn-stack-header-height, 52px)"))) {
  throw new Error("Expected header height to use --sdn-stack-header-height");
}
if (!contents.some(([, content]) => content.includes("font-size: var(--sdn-stack-header-link-size, 14px)"))) {
  throw new Error("Expected desktop header links to use --sdn-stack-header-link-size");
}

for (const [path, content] of contents.filter(([path]) => path.endsWith(".html"))) {
  assert.equal(
    (content.match(/<!-- SDN_CONSUMER_ASSETS_START -->/gu) ?? []).length,
    1,
    `${path} must contain one consumer-assets start marker`,
  );
  assert.equal(
    (content.match(/<!-- SDN_CONSUMER_ASSETS_END -->/gu) ?? []).length,
    1,
    `${path} must contain one consumer-assets end marker`,
  );
  assert.doesNotMatch(content, /consumer-assets\.v1\.json/u);
}

if (assetPath) {
  assert.match(asset, /SDN Stack/u);
  assert.match(asset, /customElements\.define\("sdn-stack-nav"/u);
  assert.match(asset, /--sdn-stack-footer-height/u);
  assert.doesNotMatch(asset, /--sdn-stack-nav-height/u);
  assert.match(styleAsset, /--sdn-stack-footer-height,\s*40px/u);
  assert.match(styleAsset, /bottom:\s*0/u);
  assert.doesNotMatch(styleAsset, /top:\s*0/u);
  assert.doesNotMatch(styleAsset, /--sdn-stack-nav-height/u);
  assert.doesNotMatch(asset, /password|mnemonic|private(?:Key|[-_ ]key)|sign\s*\(/iu);
  for (const [, label, href] of expectedLinks) {
    assert.match(asset, new RegExp(label.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&"), "u"));
    assert.match(asset, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&"), "u"));
  }
  assert.doesNotMatch(asset, /Space Stack/u);
}

const completeAttributes = Object.freeze({
  "data-nav-style-url": `https://static.spacedatanetwork.org/assets/sdn-stack-nav/1.0.0/sdn-stack-nav.${"1".repeat(64)}.css`,
  "data-nav-style-integrity": `sha384-${"A".repeat(64)}`,
  "data-wallet-client-url": `https://static.spacedatanetwork.org/assets/hd-wallet-ui/2.0.22/sdn-wallet-public-client.${"2".repeat(64)}.js`,
  "data-wallet-client-integrity": `sha384-${"B".repeat(64)}`,
  "data-wallet-style-url": `https://static.spacedatanetwork.org/assets/hd-wallet-ui/2.0.22/sdn-wallet-public-client.${"3".repeat(64)}.css`,
  "data-wallet-style-integrity": `sha384-${"C".repeat(64)}`,
  "data-wallet-client-id": "sdn-standards-web-v1",
  "data-wallet-callback-uri": "https://spacedatastandards.org/wallet-callback.html",
  "data-wallet-registry-sha256": "4".repeat(64),
});

function dataProperty(name) {
  return name.slice(5).replace(/-([a-z])/gu, (_, letter) => letter.toUpperCase());
}

class FakeElement {
  constructor(tagName = "sdn-stack-nav") {
    this.attributes = new Map();
    this.children = [];
    this.className = "";
    this.dataset = {};
    this.disabled = false;
    this.href = "";
    this.integrity = "";
    this.listeners = new Map();
    this.parentNode = null;
    this.previousElementSibling = null;
    this.rel = "";
    this.shadowRoot = null;
    this.tagName = tagName.toUpperCase();
    this.textContent = "";
  }

  addEventListener(name, listener) {
    const listeners = this.listeners.get(name) ?? [];
    listeners.push(listener);
    this.listeners.set(name, listeners);
  }

  append(...nodes) {
    for (const node of nodes) {
      node.parentNode = this;
      this.children.push(node);
    }
  }

  appendChild(node) {
    this.append(node);
    return node;
  }

  attachShadow() {
    this.shadowRoot = new FakeElement("#shadow-root");
    return this.shadowRoot;
  }

  getAttribute(name) {
    return this.attributes.has(name) ? this.attributes.get(name) : null;
  }

  hasAttribute(name) {
    return this.attributes.has(name);
  }

  replaceChildren(...nodes) {
    this.children = [];
    this.append(...nodes);
  }

  setAttribute(name, value) {
    const rendered = String(value);
    this.attributes.set(name, rendered);
    if (name.startsWith("data-")) this.dataset[dataProperty(name)] = rendered;
  }
}

function descendants(node, predicate, output = []) {
  for (const child of node.children) {
    if (predicate(child)) output.push(child);
    descendants(child, predicate, output);
  }
  return output;
}

function configuredElement(tagName, attributes) {
  const element = new FakeElement(tagName);
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
  if (attributes.src) element.src = attributes.src;
  if (attributes.href) element.href = attributes.href;
  if (attributes.integrity) element.integrity = attributes.integrity;
  return element;
}

function runMigrationCase(source, migrationCase) {
  const events = [];
  const counts = {
    clients: 0,
    createdScripts: 0,
    relayRequests: 0,
    subscriptions: 0,
  };
  const listeners = [];
  let snapshot = Object.freeze({ error: null, identity: null, status: "disconnected" });
  const client = Object.freeze({
    connect() {
      events.push("connect-enter");
      events.push("window-open");
      events.push("connect-return");
      return Promise.resolve(Object.freeze({ publicKey: "fixture" }));
    },
    getSnapshot() {
      return snapshot;
    },
    openAccount() {
      events.push("open-account-enter");
      events.push("window-open");
      events.push("open-account-return");
      return Promise.resolve();
    },
    subscribe(listener) {
      counts.subscriptions += 1;
      listeners.push(listener);
      listener(snapshot);
      return () => {};
    },
  });

  const attributes = migrationCase.scriptAttributes.complete
    ? { ...completeAttributes, ...migrationCase.scriptAttributes }
    : { ...migrationCase.scriptAttributes };
  delete attributes.complete;
  const loader = configuredElement("script", attributes);
  const publicStyle = configuredElement("link", {
    rel: "stylesheet",
    href: completeAttributes["data-wallet-style-url"],
    integrity: completeAttributes["data-wallet-style-integrity"],
    crossorigin: "anonymous",
  });
  const publicClientScript = configuredElement("script", {
    defer: "",
    src: completeAttributes["data-wallet-client-url"],
    integrity: completeAttributes["data-wallet-client-integrity"],
    crossorigin: "anonymous",
    "data-sdn-wallet-public-client": "v1",
  });
  publicClientScript.previousElementSibling = publicStyle;
  loader.previousElementSibling = publicClientScript;

  const constructors = new Map();
  const documentElement = new FakeElement("html");
  documentElement.style = {
    properties: new Map(),
    setProperty(name, value) {
      this.properties.set(name, value);
    },
  };
  const document = {
    currentScript: loader,
    documentElement,
    createElement(tagName) {
      if (tagName.toLowerCase() === "script") counts.createdScripts += 1;
      return new FakeElement(tagName);
    },
  };
  const customElements = {
    define(name, constructor) {
      constructors.set(name, constructor);
    },
    get(name) {
      return constructors.get(name);
    },
  };
  const context = vm.createContext({
    console: Object.freeze({ error() {}, warn() {} }),
    customElements,
    document,
    fetch() {
      counts.relayRequests += 1;
      throw new Error("relay must remain inert");
    },
    HTMLElement: FakeElement,
    Promise,
    Symbol,
    URL,
  });
  if (migrationCase.scriptAttributes.complete) {
    context.SDNWalletPublicClient = Object.freeze({
      create(options) {
        counts.clients += 1;
        assert.deepEqual({ ...options }, { clientId: "sdn-standards-web-v1" });
        return client;
      },
    });
  }

  vm.runInContext(source, context, { filename: "sdn-stack-nav.js" });
  const SdnStackNav = constructors.get("sdn-stack-nav");
  assert.equal(typeof SdnStackNav, "function");
  const element = new SdnStackNav();
  element.setAttribute("active", "standards");
  if (migrationCase.presenter !== null) element.setAttribute("wallet-presenter", migrationCase.presenter);
  element.connectedCallback();

  const anchors = descendants(element.shadowRoot, (node) => node.tagName === "A");
  assert.deepEqual(anchors.map((anchor) => anchor.textContent), expectedLinks.map(([, label]) => label));
  assert.deepEqual(anchors.map((anchor) => anchor.href), expectedLinks.map(([, , href]) => href));
  const buttons = descendants(
    element.shadowRoot,
    (node) => node.tagName === "BUTTON" && node.className === "sdn-stack-wallet",
  );
  assert.equal(buttons.length, migrationCase.expectWalletButtons, migrationCase.name);
  assert.equal(counts.createdScripts, 0, migrationCase.name);
  assert.equal(counts.relayRequests, 0, migrationCase.name);

  if (migrationCase.expectWalletButtons === 0) {
    assert.equal(counts.clients, 0, migrationCase.name);
    assert.equal(counts.subscriptions, 0, migrationCase.name);
  } else {
    assert.equal(counts.clients, 1, migrationCase.name);
    assert.equal(counts.subscriptions, 1, migrationCase.name);
    assert.equal(buttons[0].textContent, "Login");
    events.push("trusted-click");
    for (const listener of buttons[0].listeners.get("click") ?? []) {
      listener(Object.freeze({ isTrusted: true }));
    }
    assert.deepEqual(events, ["trusted-click", "connect-enter", "window-open", "connect-return"]);
    snapshot = Object.freeze({ error: null, identity: Object.freeze({ publicKey: "fixture" }), status: "connected" });
    for (const listener of listeners) listener(snapshot);
    const updatedButtons = descendants(
      element.shadowRoot,
      (node) => node.tagName === "BUTTON" && node.className === "sdn-stack-wallet",
    );
    assert.equal(updatedButtons[0].textContent, "Account");
  }
}

if (assetPath) {
  for (const migrationCase of migrationCases) runMigrationCase(asset, migrationCase);
}

async function checkReleaseBuilder() {
  const { buildSdnStackNavRelease } = await import("./build-sdn-stack-nav-release.mjs");
  const outputRoot = await mkdtemp(join(tmpdir(), "sdn-stack-nav-release-"));
  try {
    await buildSdnStackNavRelease({ sourceRoot: repositoryRoot, outputRoot });
    const versionRoot = join(outputRoot, "assets/sdn-stack-nav/1.0.0");
    const files = (await readdir(versionRoot)).sort();
    assert.equal(files.length, 2);
    const fragmentPath = join(outputRoot, "sdn-stack-nav.release-fragment.v1.json");
    const fragment = JSON.parse(await readFile(fragmentPath, "utf8"));
    assert.deepEqual(Object.keys(fragment).sort(), ["assets", "linksSha256", "navVersion", "schemaVersion"]);
    assert.equal(fragment.schemaVersion, 1);
    assert.equal(fragment.navVersion, "1.0.0");
    assert.equal(
      fragment.linksSha256,
      createHash("sha256").update(await readFile(resolve(repositoryRoot, "sdn-stack-nav.links.json"))).digest("hex"),
    );
    for (const [key, extension] of [["navScript", "js"], ["navStyle", "css"]]) {
      const record = fragment.assets[key];
      assert.deepEqual(Object.keys(record).sort(), ["bytes", "sha256", "sha384", "url"]);
      assert.match(record.sha256, /^[0-9a-f]{64}$/u);
      assert.match(record.sha384, /^sha384-[A-Za-z0-9+/]{64}$/u);
      const filename = `sdn-stack-nav.${record.sha256}.${extension}`;
      assert.ok(files.includes(filename));
      const bytes = await readFile(join(versionRoot, filename));
      assert.equal(record.bytes, bytes.byteLength);
      assert.equal(record.sha256, createHash("sha256").update(bytes).digest("hex"));
      assert.equal(record.sha384, `sha384-${createHash("sha384").update(bytes).digest("base64")}`);
      assert.equal(
        record.url,
        `https://static.spacedatanetwork.org/assets/sdn-stack-nav/1.0.0/${filename}`,
      );
    }
    const emittedScript = await readFile(
      join(versionRoot, `sdn-stack-nav.${fragment.assets.navScript.sha256}.js`),
      "utf8",
    );
    assert.doesNotMatch(emittedScript, /:host\s*\{|\.sdn-stack-bar\s*\{/u);
    assert.deepEqual((await readdir(outputRoot)).sort(), [
      "assets",
      "sdn-stack-nav.release-fragment.v1.json",
    ]);
  } finally {
    await rm(outputRoot, { recursive: true, force: true });
  }
}

async function checkReleaseRetention() {
  const { buildSdnStackNavRelease } = await import("./build-sdn-stack-nav-release.mjs");
  const outputRoot = await mkdtemp(join(tmpdir(), "sdn-stack-nav-retention-"));
  const versionRoot = join(outputRoot, "assets/sdn-stack-nav/1.0.0");
  const priorScript = Buffer.from("prior immutable script\n");
  const priorStyle = Buffer.from("prior immutable style\n");
  const priorAssets = new Map([
    [`sdn-stack-nav.${createHash("sha256").update(priorScript).digest("hex")}.js`, priorScript],
    [`sdn-stack-nav.${createHash("sha256").update(priorStyle).digest("hex")}.css`, priorStyle],
  ]);
  try {
    await mkdir(versionRoot, { recursive: true });
    await Promise.all(
      [...priorAssets].map(([filename, bytes]) => writeFile(join(versionRoot, filename), bytes)),
    );

    const fragment = await buildSdnStackNavRelease({ sourceRoot: repositoryRoot, outputRoot });

    for (const [filename, bytes] of priorAssets) {
      assert.deepEqual(
        await readFile(join(versionRoot, filename)),
        bytes,
        `the immutable nav release must retain ${filename}`,
      );
    }
    assert.deepEqual((await readdir(versionRoot)).sort(), [
      ...priorAssets.keys(),
      `sdn-stack-nav.${fragment.assets.navScript.sha256}.js`,
      `sdn-stack-nav.${fragment.assets.navStyle.sha256}.css`,
    ].sort());
  } finally {
    await rm(outputRoot, { recursive: true, force: true });
  }
}

await checkReleaseBuilder();
await checkReleaseRetention();
process.stdout.write(`${migrationCases.length} nav migration cases and immutable release contract pass\n`);
