import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const packageDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(packageDir, "../..");

const repoAssetAliases = new Map([
  ["spacedatastandards.org/dist/manifest.json", resolve(repoRoot, "dist/manifest.json")],
  ["spacedatastandards.org/lib/json/index.json", resolve(repoRoot, "lib/json/index.json")],
  ["spacedatastandards.org/lib/fbjson/index.json", resolve(repoRoot, "lib/fbjson/index.json")],
]);

const localRepoDataPlugin = {
  name: "local-repo-data",
  setup(buildContext) {
    buildContext.onResolve(
      { filter: /^spacedatastandards\.org\/(dist\/manifest\.json|lib\/json\/index\.json|lib\/fbjson\/index\.json)$/ },
      (args) => {
        const localPath = repoAssetAliases.get(args.path);
        if (localPath && existsSync(localPath)) {
          return { path: localPath };
        }
        return null;
      },
    );
  },
};

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
  plugins: [localRepoDataPlugin, browserModuleStub],
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
