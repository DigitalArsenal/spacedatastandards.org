import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import vm from "node:vm";

function loadManifest() {
  return JSON.parse(
    readFileSync(new URL("../dist/manifest.json", import.meta.url), "utf8"),
  );
}

async function loadReadableExplorer() {
  const bundleUrl = pathToFileURL(
    new URL(
      "../packages/standards-explorer/dist/standards-explorer.js",
      import.meta.url,
    ).pathname,
  );
  bundleUrl.search = `?t=${Date.now()}`;

  const explorerModule = await import(bundleUrl.href);
  return new explorerModule.StandardsExplorer().init();
}

function canonicalJson(value) {
  if (Array.isArray(value)) {
    return value.map(canonicalJson);
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, canonicalJson(value[key])]),
    );
  }
  return value;
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
    const explorer = await loadReadableExplorer();

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

  it("keeps the published minified IIFE bundle in exact VAM parity", async () => {
    const minifiedSource = readFileSync(
      new URL(
        "../packages/standards-explorer/dist/standards-explorer.min.js",
        import.meta.url,
      ),
      "utf8",
    );
    const context = {
      console,
      TextDecoder,
      TextEncoder,
      URL,
      WebAssembly,
      clearTimeout,
      performance,
      setTimeout,
      HTMLElement: class {},
      customElements: {
        define() {},
        get() {
          return undefined;
        },
      },
    };
    context.globalThis = context;
    context.window = context;
    context.self = context;
    vm.createContext(context);
    vm.runInContext(minifiedSource, context, {
      filename: "standards-explorer.min.js",
    });

    const MinifiedExplorer = context.StandardsExplorerLib.StandardsExplorer;
    const minifiedExplorer = await new MinifiedExplorer().init();
    const readableExplorer = await loadReadableExplorer();
    const manifest = loadManifest();
    const manifestKeys = Object.keys(manifest.STANDARDS || {}).sort();
    const minifiedVam = minifiedExplorer.getStandard("VAM");
    const readableVam = readableExplorer.getStandard("VAM");
    const sourceIdl = readFileSync(
      new URL("../schema/VAM/main.fbs", import.meta.url),
      "utf8",
    );
    const sourceJsonSchema = JSON.parse(
      readFileSync(
        new URL("../lib/json/VAM/main.schema.json", import.meta.url),
        "utf8",
      ),
    );
    const sourceFbJsonSchema = JSON.parse(
      readFileSync(
        new URL("../lib/fbjson/VAM/main.fb.schema.json", import.meta.url),
        "utf8",
      ),
    );
    const serialize = (value) => JSON.stringify(canonicalJson(value));

    assert.equal(
      serialize(minifiedExplorer.getStandards()),
      serialize(manifestKeys),
    );
    assert.ok(minifiedVam, "VAM should exist in the minified IIFE bundle");
    assert.equal(minifiedVam.idl, readableVam.idl);
    assert.equal(minifiedVam.idl, sourceIdl);
    assert.equal(serialize(minifiedVam.files), serialize(readableVam.files));
    assert.equal(
      serialize(minifiedVam.files),
      serialize(manifest.STANDARDS.VAM.files),
    );
    assert.equal(
      serialize(minifiedVam.jsonSchema),
      serialize(readableVam.jsonSchema),
    );
    assert.equal(serialize(minifiedVam.jsonSchema), serialize(sourceJsonSchema));
    assert.equal(
      serialize(minifiedVam.fbJsonSchema),
      serialize(readableVam.fbJsonSchema),
    );
    assert.equal(
      serialize(minifiedVam.fbJsonSchema),
      serialize(sourceFbJsonSchema),
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
