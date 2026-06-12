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

describe("BSP schema generation", () => {
  it("defines B-spline interpolation request and result records", async () => {
    const schemaSource = await readUtf8("schema/BSP/main.fbs");

    for (const token of [
      "enum bspInterpolationStatus : byte",
      "table BSPVector3Series",
      "T:[double]",
      "X1:[double]",
      "X2:[double]",
      "X3:[double]",
      "table BSPInterpolationRequest",
      "WAYPOINTS:BSPVector3Series",
      "SAMPLE_COUNT:uint",
      "POLYNOMIAL_ORDER:ushort",
      "HAS_X_DOT_0:bool",
      "X_DOT_0:[double]",
      "HAS_X_D_DOT_N:bool",
      "X_D_DOT_N:[double]",
      "table BSPInterpolationResult",
      "STATUS:bspInterpolationStatus",
      "SAMPLES:BSPVector3Series",
      "XD1:[double]",
      "XDD3:[double]",
      "INTERPOLATION_REQUEST:BSPInterpolationRequest",
      "INTERPOLATION_RESULT:BSPInterpolationResult",
      "root_type BSP;",
      'file_identifier "$BSP";',
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("generates BSP bindings for TypeScript, C++, and JSON schema consumers", async () => {
    const [
      tsMainSource,
      tsRequestSource,
      tsResultSource,
      cppSource,
      jsonSchemaSource,
      fbJsonSchemaSource,
    ] = await Promise.all([
      readUtf8("lib/ts/BSP/main.ts"),
      readUtf8("lib/ts/BSP/BSPInterpolationRequest.ts"),
      readUtf8("lib/ts/BSP/BSPInterpolationResult.ts"),
      readUtf8("lib/cpp/BSP/main_generated.h"),
      readUtf8("lib/json/BSP/main.schema.json"),
      readUtf8("lib/fbjson/BSP/main.fb.schema.json"),
    ]);

    for (const exportPath of [
      "./BSPVector3Series.js",
      "./BSPInterpolationRequest.js",
      "./BSPInterpolationResult.js",
      "./bspInterpolationStatus.js",
    ]) {
      assert.match(tsMainSource, escapedTokenRegex(exportPath));
    }

    assert.match(tsRequestSource, /class BSPInterpolationRequest\b/);
    assert.match(tsResultSource, /class BSPInterpolationResult\b/);
    assert.match(cppSource, /struct BSPVector3Series\b/);
    assert.match(cppSource, /struct BSPInterpolationRequest\b/);
    assert.match(cppSource, /struct BSPInterpolationResult\b/);

    const jsonSchema = JSON.parse(jsonSchemaSource);
    const fbJsonSchema = JSON.parse(fbJsonSchemaSource);

    for (const definition of [
      "BSPVector3Series",
      "BSPInterpolationRequest",
      "BSPInterpolationResult",
      "bspInterpolationStatus",
    ]) {
      assert.ok(jsonSchema.definitions[definition], `JSON schema should define ${definition}`);
      assert.ok(fbJsonSchema.definitions[definition], `augmented fbjson should define ${definition}`);
    }

    assert.equal(fbJsonSchema["x-flatbuffer-root-type"], "BSP");
    assert.equal(fbJsonSchema["x-flatbuffer-file-identifier"], "$BSP");
  });
});
