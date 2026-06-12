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

describe("GRV schema generation", () => {
  it("defines gravity model numeric context fields", async () => {
    const schemaSource = await readUtf8("schema/GRV/main.fbs");

    for (const token of [
      "enum GravityModelType : byte",
      "J2_ONLY",
      "enum GravityModelName : byte",
      "EGM2008",
      "enum CentralBody : byte",
      "EARTH",
      "table GRV",
      "EQUATORIAL_RADIUS:double",
      "MU:double",
      "J2:double",
      "J3:double",
      "J4:double",
      "J5:double",
      "J6:double",
      "root_type GRV;",
      'file_identifier "$GRV";',
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("generates GRV bindings for TypeScript, C++, and JSON schema consumers", async () => {
    const [
      tsMainSource,
      tsGrvSource,
      cppSource,
      jsonSchemaSource,
      fbJsonSchemaSource,
    ] = await Promise.all([
      readUtf8("lib/ts/GRV/main.ts"),
      readUtf8("lib/ts/GRV/GRV.ts"),
      readUtf8("lib/cpp/GRV/main_generated.h"),
      readUtf8("lib/json/GRV/main.schema.json"),
      readUtf8("lib/fbjson/GRV/main.fb.schema.json"),
    ]);

    for (const exportPath of [
      "./CentralBody.js",
      "./GravityModelName.js",
      "./GravityModelType.js",
      "./GRV.js",
    ]) {
      assert.match(tsMainSource, escapedTokenRegex(exportPath));
    }

    for (const token of [
      "EQUATORIAL_RADIUS():number",
      "MU():number",
      "J2():number",
      "J3():number",
      "J4():number",
      "J5():number",
      "J6():number",
    ]) {
      assert.match(tsGrvSource, escapedTokenRegex(token));
    }

    assert.match(cppSource, /double EQUATORIAL_RADIUS\(\) const/);
    assert.match(cppSource, /double MU\(\) const/);
    assert.match(cppSource, /double J2\(\) const/);
    assert.match(cppSource, /double J3\(\) const/);
    assert.match(cppSource, /double J4\(\) const/);
    assert.match(cppSource, /double J5\(\) const/);
    assert.match(cppSource, /double J6\(\) const/);

    const jsonSchema = JSON.parse(jsonSchemaSource);
    const fbJsonSchema = JSON.parse(fbJsonSchemaSource);

    assert.ok(jsonSchema.definitions.GRV);
    assert.ok(jsonSchema.definitions.GravityModelType);
    assert.ok(jsonSchema.definitions.GravityModelName);
    assert.ok(jsonSchema.definitions.CentralBody);
    for (const property of ["EQUATORIAL_RADIUS", "MU", "J2", "J3", "J4", "J5", "J6"]) {
      assert.ok(jsonSchema.definitions.GRV.properties[property]);
      assert.ok(fbJsonSchema.definitions.GRV.properties[property]);
    }
    assert.ok(fbJsonSchema.definitions.GRV);
    assert.equal(fbJsonSchema["x-flatbuffer-root-type"], "GRV");
    assert.equal(fbJsonSchema["x-flatbuffer-file-identifier"], "$GRV");
  });
});
