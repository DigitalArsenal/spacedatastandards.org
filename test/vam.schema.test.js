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

describe("VAM schema generation", () => {
  it("defines the visual asset manifest contract", async () => {
    const source = await readUtf8("schema/VAM/main.fbs");
    for (const token of [
      "enum visualAssetVariantKind : byte",
      "enum visualAssetReviewState : byte",
      "enum visualAssetLicenseClass : byte",
      "enum visualAssetPermissionDecision : byte",
      "enum visualAssetUpAxis : byte",
      "enum visualAssetDecisionKind : byte",
      "table VAMVector3",
      "table VAMScale3",
      "table VAMQuaternion",
      "table VAMTransform",
      "table VAMSource",
      "table VAMMetrics",
      "table VAMValidation",
      "table VAMQualityDimension",
      "table VAMVariant",
      "table VAMReview",
      "SCALE:VAMScale3",
      "REDISTRIBUTION_PERMISSION:visualAssetPermissionDecision = UNKNOWN",
      "DERIVATIVE_PERMISSION:visualAssetPermissionDecision = UNKNOWN",
      "REVIEWER_ID:string (required)",
      "CANDIDATE_ID:string (required)",
      "CANDIDATE_SHA256:string (required)",
      "DECIDED_AT:string (required)",
      "ENVELOPE_SHA256:string (required)",
      "SIGNATURE:[ubyte] (required)",
      "SIGNATURE_TYPE:string (required)",
      "RFC 8785",
      "excluding ENVELOPE_SHA256 and SIGNATURE",
      "YYYY-MM-DDTHH:mm:ss.sssZ",
      "SemVer 2.0.0",
      "MAJOR.MINOR glTF specification version",
      "exact version identifier reported by CONVERSION_TOOL without normalization",
      "ENTITY_ID:string (required)",
      "CANONICAL_VARIANT_ID:string",
      "VARIANTS:[VAMVariant]",
      "REVIEW:VAMReview",
      "root_type VAM;",
      'file_identifier "$VAM";',
    ]) {
      assert.match(source, escapedTokenRegex(token));
    }
    assert.match(source, /\btable\s+VAM\s*\{/);
  });

  it("generates VAM bindings and augmented schema metadata", async function () {
    const source = await readUtf8("schema/VAM/main.fbs");
    // Generated checks become mandatory once generateVersion.py marks the schema as built; after the header exists, any missing artifact remains a failure.
    if (!/^\/\/ Hash: [0-9a-f]{64}\n\/\/ Version: /.test(source)) {
      this.skip();
    }

    const [tsMain, tsVam, jsVam, goVam, cppVam, jsonText, fbjsonText, recSource] = await Promise.all([
      readUtf8("lib/ts/VAM/main.ts"),
      readUtf8("lib/ts/VAM/VAM.ts"),
      readUtf8("lib/js/VAM/VAM.js"),
      readUtf8("lib/go/VAM/VAM.go"),
      readUtf8("lib/cpp/VAM/main_generated.h"),
      readUtf8("lib/json/VAM/main.schema.json"),
      readUtf8("lib/fbjson/VAM/main.fb.schema.json"),
      readUtf8("schema/REC/main.fbs"),
    ]);

    for (const exportPath of [
      "./VAM.js",
      "./VAMVariant.js",
      "./VAMReview.js",
      "./visualAssetVariantKind.js",
      "./visualAssetReviewState.js",
    ]) {
      assert.match(tsMain, escapedTokenRegex(exportPath));
    }
    assert.match(tsVam, /class VAM\b/);
    assert.match(jsVam, /class VAMT\b/);
    assert.match(goVam, /type VAM struct/);
    assert.match(cppVam, /struct VAM\b/);
    assert.match(recSource, /include "\.\.\/VAM\/main\.fbs";/);
    assert.match(recSource, /union\s+RecordType\s*\{[^}]*\bVAM\b[^}]*\}/s);

    const jsonSchema = JSON.parse(jsonText);
    const fbjson = JSON.parse(fbjsonText);
    for (const definition of ["VAM", "VAMVariant", "VAMReview", "VAMTransform", "VAMMetrics"]) {
      assert.ok(jsonSchema.definitions[definition], `JSON schema should define ${definition}`);
      assert.ok(fbjson.definitions[definition], `augmented schema should define ${definition}`);
    }
    assert.equal(fbjson["x-flatbuffer-root-type"], "VAM");
    assert.equal(fbjson["x-flatbuffer-file-identifier"], "$VAM");
  });
});
