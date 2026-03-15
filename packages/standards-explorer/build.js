import { build } from "esbuild";

const browserModuleStub = {
  name: "browser-module-stub",
  setup(buildContext) {
    buildContext.onResolve({ filter: /^module$/ }, () => ({
      path: "module",
      namespace: "browser-stub",
    }));

    buildContext.onLoad({ filter: /.*/, namespace: "browser-stub" }, () => ({
      contents: [
        "export default {};",
        "export const createRequire = () => () => {",
        '  throw new Error("module.createRequire is unavailable in the browser bundle");',
        "};",
      ].join("\n"),
      loader: "js",
    }));
  },
};

const sharedBuildOptions = {
  entryPoints: ["src/index.js"],
  bundle: true,
  platform: "browser",
  target: "es2020",
  plugins: [browserModuleStub],
};

// ESM bundle
await build({
  ...sharedBuildOptions,
  format: "esm",
  outfile: "dist/standards-explorer.js",
  minify: false,
});

// Minified IIFE bundle (for <script> tag usage)
await build({
  ...sharedBuildOptions,
  format: "iife",
  globalName: "StandardsExplorerLib",
  outfile: "dist/standards-explorer.min.js",
  minify: true,
});

console.log("Build complete.");
