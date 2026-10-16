import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import ts from "typescript";

import { PropagatorMethod as jsMethod } from "../lib/js/AST/main.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

// Execute the generated TS enum with this worktree's compiler, without writing
// test artefacts or relying on another checkout's generated JS.
const compiled = ts.transpileModule(read("lib/ts/AST/PropagatorMethod.ts"), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { PropagatorMethod: tsMethod } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled.outputText).toString("base64")}`
);

// AST declares the enum but has no field of that type. Decode the preserved
// ordinal through each generated enum's reverse mapping, not an invented field.
for (const [language, method] of [["JS", jsMethod], ["TS", tsMethod]]) {
  assert.equal(method.FFM, 3, `${language}: FFM must retain ordinal 3`);
  assert.equal(method[3], "FFM", `${language}: ordinal 3 must decode as FFM`);
  assert.equal(Object.hasOwn(method, "HPOP"), false, `${language}: no legacy alias`);
}
assert.deepEqual(tsMethod, jsMethod, "generated TS and JS enums must agree");
console.log("PASS generated TS/JS AST: FFM = 3; ordinal 3 decodes as FFM; HPOP absent");

const astSource = read("schema/AST/main.fbs");
const manifest = JSON.parse(read("dist/manifest.json"));
assert.equal(manifest.STANDARDS.AST.IDL.trimEnd(), astSource.trimEnd());
assert.match(astSource, /FFM,\s*\/\/ Full Force Model: numerical integration under the full force model \(profile FFM-1\)/);
console.log("PASS manifest AST IDL matches source and defines profile FFM-1");

const targets = ["schema/", "lib/", "dist/manifest.json", "scripts/", "website/src"];
const scan = spawnSync("grep", [
  "-r", "-i", "-l", "-I", "--exclude-dir=docs", "--exclude=CHANGELOG*",
  "--", "hpop", ...targets,
], { cwd: root, encoding: "utf8", maxBuffer: 16 * 1024 * 1024 });
assert.ifError(scan.error);
assert.equal(scan.status, 1, `expected zero HPOP hits (grep status ${scan.status})\n${scan.stdout}${scan.stderr}`);
console.log(`PASS case-insensitive HPOP scan: 0 hits in ${targets.join(", ")} (docs/CHANGELOG excluded)`);
console.log("PASS ffm-propagator-method E2E");
