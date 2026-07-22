import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

const allowedRuntimeDependencies = [
  "buffer",
  "flatbuffers",
  "hd-wallet-wasm",
];

const devOnlyPackages = [
  "@huggingface/transformers",
  "ajv",
  "esbuild",
  "flatc-wasm",
  "flatsql",
  "sdn-emception",
];

describe("npm runtime dependency surface", () => {
  it("keeps the published runtime dependency list intentionally small", () => {
    assert.deepEqual(Object.keys(packageJson.dependencies ?? {}).sort(), allowedRuntimeDependencies);
  });

  it("does not publish build, website, and test tooling as runtime dependencies", () => {
    for (const dependencyName of devOnlyPackages) {
      assert.ok(
        !packageJson.dependencies?.[dependencyName],
        `${dependencyName} belongs in devDependencies, not dependencies`,
      );
    }
  });

  it("pins the reviewed wallet runtime exactly", () => {
    assert.equal(packageJson.dependencies?.["hd-wallet-wasm"], "2.0.28");
  });
});
