import assert from "node:assert/strict";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jsonDir = path.join(repoRoot, "lib", "json");
const schemaDir = path.join(repoRoot, "schema");

function standardNames() {
  return readdirSync(jsonDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function declaredRootType(name) {
  const fbsPath = path.join(schemaDir, name, "main.fbs");
  if (!existsSync(fbsPath)) return null;
  const match = readFileSync(fbsPath, "utf8").match(/^\s*root_type\s+(\w+)\s*;/m);
  return match ? match[1] : null;
}

function loadJsonSchema(name) {
  return JSON.parse(
    readFileSync(path.join(jsonDir, name, "main.schema.json"), "utf8"),
  );
}

// REGRESSION GUARD. `flatc --jsonschema` writes one `main.schema.json` per
// compilation unit. While every transitive include was passed as its own
// compilation unit into a single output directory, each include OVERWROTE the
// entry schema and the last include won: the published JSON Schema for $PMM
// described $EPM, $OMM described $MET, $OCM described $LCC, $OEM described
// $PPE and $CDM described $RFM — 34 standards in all, each shipping a document
// that validated the wrong record and contained none of its own definitions.
// The fix passes only the entry schema to that generator (scripts/
// generateSource.mjs `flatOutputExts`), leaving -I to resolve the includes.
describe("generated JSON Schema root integrity", () => {
  it("publishes each standard's OWN root type, never an included file's", () => {
    const offenders = [];
    for (const name of standardNames()) {
      const root = declaredRootType(name);
      if (!root) continue;
      const schema = loadJsonSchema(name);
      if (schema.$ref !== `#/definitions/${root}`) {
        offenders.push(`${name}: $ref=${schema.$ref} expected #/definitions/${root}`);
      }
    }
    assert.deepEqual(offenders, []);
  });

  it("defines the root record itself, with fields", () => {
    const offenders = [];
    for (const name of standardNames()) {
      const root = declaredRootType(name);
      if (!root) continue;
      const definition = loadJsonSchema(name).definitions?.[root];
      if (!definition) {
        offenders.push(`${name}: no definition for root ${root}`);
      } else if (Object.keys(definition.properties ?? {}).length === 0) {
        offenders.push(`${name}: root ${root} exposes no properties`);
      }
    }
    assert.deepEqual(offenders, []);
  });

  it("keeps lib/json and lib/fbjson agreed on the root", () => {
    const fbjsonDir = path.join(repoRoot, "lib", "fbjson");
    const offenders = [];
    for (const name of standardNames()) {
      const fbjsonPath = path.join(fbjsonDir, name, "main.fb.schema.json");
      if (!existsSync(fbjsonPath)) continue;
      const fbjson = JSON.parse(readFileSync(fbjsonPath, "utf8"));
      const jsonRef = loadJsonSchema(name).$ref;
      if (fbjson.$ref !== jsonRef) {
        offenders.push(`${name}: fbjson ${fbjson.$ref} vs json ${jsonRef}`);
      }
    }
    assert.deepEqual(offenders, []);
  });
});
