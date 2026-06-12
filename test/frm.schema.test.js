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

describe("FRM schema generation", () => {
  it("defines frame/geodetic transform request and result records", async () => {
    const schemaSource = await readUtf8("schema/FRM/main.fbs");

    for (const token of [
      "enum frmOperationCode : byte",
      "PCI_TO_PCPF",
      "PCPF_TO_PCI",
      "LLA_TO_PCPF",
      "PCPF_TO_LLA",
      "enum frmResultStatus : byte",
      "table FRMVector3",
      "X:double",
      "Y:double",
      "Z:double",
      "table FRMMatrix3",
      "M11:double",
      "M12:double",
      "M13:double",
      "M21:double",
      "M22:double",
      "M23:double",
      "M31:double",
      "M32:double",
      "M33:double",
      "table FRMFrameTransformRequest",
      "OPERATION:frmOperationCode",
      "POSITION:FRMVector3",
      "TRANSFORM_DCM:FRMMatrix3",
      "EQUATORIAL_RADIUS_M:double",
      "POLAR_RADIUS_M:double",
      "TRACE_ID:string",
      "table FRMFrameTransformResult",
      "STATUS:frmResultStatus",
      "POSITION:FRMVector3",
      "ERROR_MESSAGE:string",
      "TRACE_ID:string",
      "FRAME_TRANSFORM_REQUEST:FRMFrameTransformRequest",
      "FRAME_TRANSFORM_RESULT:FRMFrameTransformResult",
      "root_type FRM;",
      'file_identifier "$FRM";',
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("generates FRM bindings for TypeScript, C++, and JSON schema consumers", async () => {
    const [
      tsMainSource,
      tsRequestSource,
      tsResultSource,
      cppSource,
      jsonSchemaSource,
      fbJsonSchemaSource,
    ] = await Promise.all([
      readUtf8("lib/ts/FRM/main.ts"),
      readUtf8("lib/ts/FRM/FRMFrameTransformRequest.ts"),
      readUtf8("lib/ts/FRM/FRMFrameTransformResult.ts"),
      readUtf8("lib/cpp/FRM/main_generated.h"),
      readUtf8("lib/json/FRM/main.schema.json"),
      readUtf8("lib/fbjson/FRM/main.fb.schema.json"),
    ]);

    for (const exportPath of [
      "./FRM.js",
      "./FRMVector3.js",
      "./FRMMatrix3.js",
      "./FRMFrameTransformRequest.js",
      "./FRMFrameTransformResult.js",
      "./frmOperationCode.js",
      "./frmResultStatus.js",
    ]) {
      assert.match(tsMainSource, escapedTokenRegex(exportPath));
    }

    for (const token of [
      "OPERATION():frmOperationCode",
      "POSITION(obj?:FRMVector3):FRMVector3|null",
      "TRANSFORM_DCM(obj?:FRMMatrix3):FRMMatrix3|null",
      "EQUATORIAL_RADIUS_M():number",
      "POLAR_RADIUS_M():number",
    ]) {
      assert.match(tsRequestSource, escapedTokenRegex(token));
    }

    assert.match(tsResultSource, escapedTokenRegex("POSITION(obj?:FRMVector3):FRMVector3|null"));
    assert.match(cppSource, /struct FRMVector3\b/);
    assert.match(cppSource, /struct FRMMatrix3\b/);
    assert.match(cppSource, /struct FRMFrameTransformRequest\b/);
    assert.match(cppSource, /struct FRMFrameTransformResult\b/);

    const jsonSchema = JSON.parse(jsonSchemaSource);
    const fbJsonSchema = JSON.parse(fbJsonSchemaSource);

    for (const definition of [
      "FRMVector3",
      "FRMMatrix3",
      "FRMFrameTransformRequest",
      "FRMFrameTransformResult",
      "frmOperationCode",
      "frmResultStatus",
    ]) {
      assert.ok(jsonSchema.definitions[definition], `JSON schema should define ${definition}`);
      assert.ok(fbJsonSchema.definitions[definition], `augmented fbjson should define ${definition}`);
    }

    assert.equal(fbJsonSchema["x-flatbuffer-root-type"], "FRM");
    assert.equal(fbJsonSchema["x-flatbuffer-file-identifier"], "$FRM");
  });
});
