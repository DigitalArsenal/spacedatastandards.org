import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

function loadManifest() {
  return JSON.parse(
    readFileSync(new URL("../dist/manifest.json", import.meta.url), "utf8"),
  );
}

describe("standards-explorer bundle", () => {
  let originalCustomElements;
  let originalHTMLElement;

  before(() => {
    originalCustomElements = globalThis.customElements;
    originalHTMLElement = globalThis.HTMLElement;
    globalThis.HTMLElement = class {};
    globalThis.customElements = {
      define() {},
      get() {
        return undefined;
      },
    };
  });

  after(() => {
    if (originalHTMLElement === undefined) {
      delete globalThis.HTMLElement;
    } else {
      globalThis.HTMLElement = originalHTMLElement;
    }
    if (originalCustomElements === undefined) {
      delete globalThis.customElements;
    } else {
      globalThis.customElements = originalCustomElements;
    }
  });

  it("embeds every standard from the current generated manifest", async () => {
    const bundleUrl = pathToFileURL(
      new URL(
        "../packages/standards-explorer/dist/standards-explorer.js",
        import.meta.url,
      ).pathname,
    );
    bundleUrl.search = `?t=${Date.now()}`;

    const explorerModule = await import(bundleUrl.href);
    const explorer = new explorerModule.StandardsExplorer();
    await explorer.init();

    const manifest = loadManifest();
    const missing = Object.keys(manifest.STANDARDS || {}).filter(
      (name) => !explorer.getStandard(name),
    );

    assert.deepEqual(missing, []);
    assert.ok(
      explorer.getStandard("PIV"),
      "PIV should be available for code generation",
    );
  });

  it("runs browser flatc-wasm code generation with preserve-case enabled", () => {
    const source = readFileSync(
      new URL(
        "../packages/standards-explorer/src/flatc-runner.js",
        import.meta.url,
      ),
      "utf8",
    );
    const bundle = readFileSync(
      new URL(
        "../packages/standards-explorer/dist/standards-explorer.js",
        import.meta.url,
      ),
      "utf8",
    );

    assert.match(source, /"--preserve-case"/);
    assert.match(bundle, /"--preserve-case"/);
  });
});
