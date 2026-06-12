import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function readUtf8(relativePath) {
  return fs.readFile(path.join(repoRoot, relativePath), "utf8");
}

function escapedTokenRegex(token) {
  return new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
}

describe("VCM schema generation", () => {
  it("defines parabolic Keplerian periapsis radius in schema and generated bindings", async () => {
    const [schemaSource, tsSource, jsSource, cppSource, fbJsonSchemaSource] =
      await Promise.all([
        readUtf8("schema/VCM/main.fbs"),
        readUtf8("lib/ts/VCM/keplerianElements.ts"),
        readUtf8("lib/js/VCM/keplerianElements.js"),
        readUtf8("lib/cpp/VCM/main_generated.h"),
        readUtf8("lib/fbjson/VCM/main.fb.schema.json"),
      ]);

    for (const token of [
      "PERIAPSIS_RADIUS: double",
      "PERIAPSIS_RADIUS():number",
      "PERIAPSIS_RADIUS()",
      "VT_PERIAPSIS_RADIUS",
    ]) {
      assert.match(`${schemaSource}\n${tsSource}\n${jsSource}\n${cppSource}`, escapedTokenRegex(token));
    }

    const fbJsonSchema = JSON.parse(fbJsonSchemaSource);
    assert.ok(fbJsonSchema.definitions.keplerianElements.properties.PERIAPSIS_RADIUS);
  });
});
