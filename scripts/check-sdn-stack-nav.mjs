import { readFileSync } from "node:fs";

const links = [
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

const args = process.argv.slice(2);
const assetIndex = args.indexOf("--asset");
const assetPath = assetIndex === -1 ? null : args[assetIndex + 1];
const filteredArgs = assetIndex === -1 ? args : args.slice(0, assetIndex);
const [active, ...contentPaths] = filteredArgs;

if (!active || contentPaths.length === 0) {
  throw new Error("Usage: node scripts/check-sdn-stack-nav.mjs <active> <content...> [--asset <path>]");
}

function read(path) {
  return readFileSync(path, "utf8");
}

function assertContains(content, expected, path) {
  if (!content.includes(expected)) {
    throw new Error(`${path} is missing ${expected}`);
  }
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

if (!contents.some(([, content]) => content.includes("sdn-stack-nav.js"))) {
  throw new Error("Expected a page shell to load sdn-stack-nav.js");
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

if (assetPath) {
  const asset = read(assetPath);
  assertContains(asset, "SDN Stack", assetPath);
  assertContains(asset, "customElements.define(\"sdn-stack-nav\"", assetPath);
  assertContains(asset, "--sdn-stack-footer-height", assetPath);
  assertContains(asset, "bottom: 0", assetPath);
  if (asset.includes("top: 0")) {
    throw new Error(`${assetPath} must render as a fixed footer, not a top bar`);
  }
  if (asset.includes("--sdn-stack-nav-height")) {
    throw new Error(`${assetPath} must not publish a top nav offset variable`);
  }
  for (const [, label, href] of links) {
    assertContains(asset, label, assetPath);
    assertContains(asset, href, assetPath);
  }
  if (asset.includes("Space Stack")) {
    throw new Error(`${assetPath} must use SDN Stack, not Space Stack`);
  }
}
