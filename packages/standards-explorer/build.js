import { build } from "esbuild";

// ESM bundle
await build({
  entryPoints: ["src/index.js"],
  bundle: true,
  format: "esm",
  outfile: "dist/standards-explorer.js",
  external: ["flatc-wasm"],
  platform: "browser",
  target: "es2020",
  minify: false,
});

// Minified IIFE bundle (for <script> tag usage)
await build({
  entryPoints: ["src/index.js"],
  bundle: true,
  format: "iife",
  globalName: "StandardsExplorerLib",
  outfile: "dist/standards-explorer.min.js",
  external: ["flatc-wasm"],
  platform: "browser",
  target: "es2020",
  minify: true,
});

console.log("Build complete.");
