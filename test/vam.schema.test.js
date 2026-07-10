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
      "enum visualAssetReviewerRole : byte",
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
      "table VAMMetadataOnlyReview",
      "table VAMAnnotation",
      "SCALE:VAMScale3",
      "REDISTRIBUTION_PERMISSION:visualAssetPermissionDecision = UNKNOWN",
      "DERIVATIVE_PERMISSION:visualAssetPermissionDecision = UNKNOWN",
      "REVIEWER_ID:string (required)",
      "CAPABILITY_ID:string;",
      "REVIEWER_ROLE:visualAssetReviewerRole = VIEWER",
      "REPOSITORY:string (required)",
      "ISSUE_NUMBER:string (required)",
      "VAM_ID:string (required)",
      "NONCE:string (required)",
      "CANDIDATE_ID:string (required)",
      "CANDIDATE_SHA256:string (required)",
      "CANDIDATE_METADATA_SHA256:string (required)",
      "DECIDED_AT:string (required)",
      "REVIEWED_TRANSFORM:VAMTransform",
      "ALTERNATE_VARIANT_IDS:[string]",
      "ANNOTATIONS:[VAMAnnotation]",
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
      "RANK:uint",
      "sorted ascending RANK",
      "tie-break bytewise ID",
      "arrays preserve order",
      "nested VAMTransform and VAMAnnotation use uppercase schema field names and numeric enums",
      "nonce single use",
      "role authorization",
      "VARIANTS:[VAMVariant]",
      "REVIEW:VAMReview",
      "METADATA_REVIEW:VAMMetadataOnlyReview",
      "root_type VAM;",
      'file_identifier "$VAM";',
    ]) {
      assert.match(source, escapedTokenRegex(token));
    }
    assert.match(source, /\btable\s+VAM\s*\{/);
    assert.doesNotMatch(source, /table\s+VAMReview\s*\{[^}]*CAPABILITY_ID:string\s*\(required\)/);
    assert.match(source, /table\s+VAMAnnotation\s*\{\s*ID:string \(required\);\s*KIND:string \(required\);\s*MESSAGE:string \(required\);\s*POSITION:VAMVector3;/s);
    assert.match(source, /table\s+VAMReview\s*\{[\s\S]*?REPOSITORY:string \(required\);[\s\S]*?ENTITY_ID:string \(required\);[\s\S]*?VAM_ID:string \(required\);/);

    const tableBody = (name) => source.match(new RegExp(`table\\s+${name}\\s*\\{([\\s\\S]*?)\\n\\}`))[1];
    const tableFields = (name) => [...tableBody(name).matchAll(/^\s+([A-Z][A-Z0-9_]*):/gm)].map((match) => match[1]);
    const binaryReviewBody = tableBody("VAMReview");
    for (const field of ["REPOSITORY", "ISSUE_NUMBER", "ENTITY_ID", "VAM_ID", "NONCE"]) {
      assert.match(binaryReviewBody, new RegExp(`^\\s+${field}:string;$`, "m"));
    }
    assert.match(source, /required by the binary validation profile/);
    assert.deepEqual(tableFields("VAMVariant"), [
      "ID", "PARENT_VARIANT_ID", "VARIANT_KIND", "LOD_LEVEL", "FILE_NAME", "MEDIA_TYPE", "BYTE_LENGTH",
      "BYTE_SHA256", "CID", "MULTIFORMAT_ADDRESS", "GLTF_VERSION", "GENERATOR", "CONVERSION_TOOL",
      "CONVERSION_VERSION", "CONVERSION_PROFILE", "INPUT_SHA256", "SOURCE", "TRANSFORM", "METRICS", "VALIDATION",
      "QUALITY", "REVIEW_STATE", "SUPERSEDES_VARIANT_ID", "RANK",
    ]);
    assert.deepEqual(tableFields("VAMReview"), [
      "REVIEWER_ID", "CAPABILITY_ID", "DECISION", "CANDIDATE_ID", "CANDIDATE_CID", "CANDIDATE_SHA256",
      "DECIDED_AT", "REASONS", "COMMENT", "ENVELOPE_SHA256", "SIGNATURE", "SIGNATURE_TYPE",
      "PREVIOUS_DECISION_SHA256", "REVIEWER_ROLE", "REPOSITORY", "ISSUE_NUMBER", "ENTITY_ID", "VAM_ID", "NONCE",
      "REVIEWED_TRANSFORM", "CANONICAL_VARIANT_ID", "ALTERNATE_VARIANT_IDS", "ANNOTATIONS",
    ]);
    assert.deepEqual(tableFields("VAMMetadataOnlyReview"), [
      "REVIEWER_ID", "CAPABILITY_ID", "REVIEWER_ROLE", "REPOSITORY", "ISSUE_NUMBER", "ENTITY_ID", "VAM_ID", "NONCE",
      "DECISION", "CANDIDATE_ID", "CANDIDATE_METADATA_SHA256", "DECIDED_AT", "REASONS", "COMMENT", "ANNOTATIONS",
      "ENVELOPE_SHA256", "SIGNATURE", "SIGNATURE_TYPE", "PREVIOUS_DECISION_SHA256",
    ]);
    assert.equal(tableFields("VAM").at(-1), "METADATA_REVIEW");
    assert.match(source, /RFC 8785[^\n]*VAMSource projection/);

    const reviewProjection = source.slice(source.indexOf("/// The review-envelope projection"), source.indexOf("table VAMReview"));
    for (const approvalSemantic of [
      /when DECISION is APPROVE[^\n]*CANDIDATE_CID MUST be present/,
      /REVIEWED_TRANSFORM and CANONICAL_VARIANT_ID MUST be present/,
      /CANONICAL_VARIANT_ID MUST equal CANDIDATE_ID/,
      /enclosing VAM\.ID MUST equal VAM_ID/,
      /enclosing VAM\.ENTITY_ID MUST equal review ENTITY_ID/,
      /enclosing VAM\.CANONICAL_VARIANT_ID MUST equal review CANONICAL_VARIANT_ID/,
      /referenced VAMVariant\.ID MUST equal CANDIDATE_ID/,
      /variant CID and BYTE_SHA256 MUST equal signed CANDIDATE_CID and CANDIDATE_SHA256/,
      /TRANSFORM MUST be field-for-field equal to REVIEWED_TRANSFORM after decoding schema defaults/,
      /rejects any omission or mismatch before signature trust or publication/,
      /Later transform or canonical-variant changes require a new signed review and envelope/,
    ]) {
      assert.match(reviewProjection, approvalSemantic);
    }
    let projectionOffset = -1;
    for (const field of [
      "REVIEWER_ID", "CAPABILITY_ID", "DECISION", "CANDIDATE_ID", "CANDIDATE_CID", "CANDIDATE_SHA256", "DECIDED_AT",
      "REASONS", "COMMENT", "SIGNATURE_TYPE", "PREVIOUS_DECISION_SHA256", "REVIEWER_ROLE", "REPOSITORY", "ISSUE_NUMBER",
      "ENTITY_ID", "VAM_ID", "NONCE", "REVIEWED_TRANSFORM", "CANONICAL_VARIANT_ID",
      "ALTERNATE_VARIANT_IDS", "ANNOTATIONS",
    ]) {
      const nextOffset = reviewProjection.indexOf(field, projectionOffset + 1);
      assert.ok(nextOffset > projectionOffset, `${field} should appear in signed projection order`);
      projectionOffset = nextOffset;
    }
  });

  it("registers VAM for visual-asset discovery", async () => {
    const [embeddingsSource, schemaListSource, schemasComponentSource, taxonomySource] = await Promise.all([
      readUtf8("scripts/generateSchemaEmbeddings.js"),
      readUtf8("scripts/updateSchemaList.cjs"),
      readUtf8("website/src/lib/Schemas.svelte"),
      readUtf8("website/src/lib/schemaTaxonomy.ts"),
    ]);

    const descriptionPattern = /"VAM": "Visual Asset Manifest - ranked 3D models, LODs, transforms, provenance, licensing, review, and IPFS content identity"/;
    const keywordsPattern = /"VAM": \["visual asset", "3D model", "GLB", "glTF", "LOD", "IPFS", "CID", "license", "review"\]/;
    assert.match(embeddingsSource, descriptionPattern);
    assert.match(embeddingsSource, keywordsPattern);
    assert.match(embeddingsSource, /\{ tag: "Vehicle", types: \[[^\]]*"VAM"[^\]]*\]/);
    assert.match(schemaListSource, /'VAM': 'Spacecraft'/);
    assert.match(schemasComponentSource, descriptionPattern);
    assert.match(schemasComponentSource, keywordsPattern);
    assert.match(
      taxonomySource,
      /tag: "Vehicle",\s*types: \[[^\]]*\{ abbr: "VAM", desc: "Visual Asset Manifest" \}/,
    );
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
