import { readFileSync } from "node:fs";

const links = [
  ["standards", "Standards", "https://spacedatastandards.org/"],
  ["flatbuffers", "FlatBuffers", "https://digitalarsenal.github.io/flatbuffers/"],
  ["flatsql", "FlatSQL", "https://digitalarsenal.github.io/flatsql/"],
  ["sdn", "SDN", "https://spacedatanetwork.org/"],
  ["module-sdk", "Module SDK", "https://digitalarsenal.github.io/space-data-module-sdk/"],
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
  assertContains(content, "sdn-stack-nav.js", path);
  assertContains(content, "<sdn-stack-nav", path);
  assertContains(content, `active="${active}"`, path);
  if (content.includes("Space Stack")) {
    throw new Error(`${path} must use SDN Stack, not Space Stack`);
  }
}

for (const path of contentPaths) {
  checkContent(path);
}

if (assetPath) {
  const asset = read(assetPath);
  assertContains(asset, "SDN Stack", assetPath);
  assertContains(asset, "customElements.define(\"sdn-stack-nav\"", assetPath);
  for (const [, label, href] of links) {
    assertContains(asset, label, assetPath);
    assertContains(asset, href, assetPath);
  }
  if (asset.includes("Space Stack")) {
    throw new Error(`${assetPath} must use SDN Stack, not Space Stack`);
  }
}
