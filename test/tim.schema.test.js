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

describe("TIM schema generation", () => {
  it("defines typed time instants and conversion request/result records", async () => {
    const schemaSource = await readUtf8("schema/TIM/main.fbs");

    for (const token of [
      "enum timEpochRepresentation : byte",
      "enum timCcsdsTimeCodeKind : byte",
      "enum timConversionStatus : byte",
      "table TIMCcsdsTimeCode",
      "CODE_KIND:timCcsdsTimeCodeKind",
      "PREAMBLE_FIELD1:ubyte",
      "PREAMBLE_FIELD2:ubyte",
      "TIME_FIELD:[ubyte]",
      "table TIMInstant",
      "TIME_SYSTEM: timingStandard",
      "EPOCH_FORMAT:timEpochRepresentation",
      "JULIAN_DATE:double",
      "SECONDS:double",
      "ISO8601:string",
      "SUBSECOND_NANOS:int",
      "GNSS_WEEK:int",
      "HAS_GNSS_ROLLOVER_REFERENCE:bool",
      "GNSS_ROLLOVER_REFERENCE_ISO8601:string",
      "CCSDS_TIME_CODE:TIMCcsdsTimeCode",
      "table TIMConversionRequest",
      "SOURCE:TIMInstant",
      "TARGET_TIME_SYSTEM:timingStandard",
      "TARGET_EPOCH_FORMAT:timEpochRepresentation",
      "TAI_MINUS_UTC_SECONDS:double",
      "DUT1_SECONDS:double",
      "table TIMConversionResult",
      "TARGET:TIMInstant",
      "DELTA_SECONDS:double",
      "STATUS:timConversionStatus",
      "CONVERSION_REQUEST:TIMConversionRequest",
      "CONVERSION_RESULT:TIMConversionResult",
      'root_type TIM;',
      'file_identifier "$TIM";',
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("generates TIM conversion bindings for TypeScript, C++, and JSON schema consumers", async () => {
    const [
      tsMainSource,
      tsCcsdsTimeCodeSource,
      tsInstantSource,
      tsRequestSource,
      tsResultSource,
      cppSource,
      jsonSchemaSource,
      fbJsonSchemaSource,
    ] = await Promise.all([
      readUtf8("lib/ts/TIM/main.ts"),
      readUtf8("lib/ts/TIM/TIMCcsdsTimeCode.ts"),
      readUtf8("lib/ts/TIM/TIMInstant.ts"),
      readUtf8("lib/ts/TIM/TIMConversionRequest.ts"),
      readUtf8("lib/ts/TIM/TIMConversionResult.ts"),
      readUtf8("lib/cpp/TIM/main_generated.h"),
      readUtf8("lib/json/TIM/main.schema.json"),
      readUtf8("lib/fbjson/TIM/main.fb.schema.json"),
    ]);

    for (const exportPath of [
      "./TIMCcsdsTimeCode.js",
      "./TIMInstant.js",
      "./TIMConversionRequest.js",
      "./TIMConversionResult.js",
      "./timEpochRepresentation.js",
      "./timCcsdsTimeCodeKind.js",
      "./timConversionStatus.js",
    ]) {
      assert.match(tsMainSource, escapedTokenRegex(exportPath));
    }

    assert.match(tsCcsdsTimeCodeSource, /class TIMCcsdsTimeCode\b/);
    assert.match(tsInstantSource, /CCSDS_TIME_CODE\(\):TIMCcsdsTimeCode|null/);
    assert.match(tsRequestSource, /class TIMConversionRequest\b/);
    assert.match(tsResultSource, /class TIMConversionResult\b/);
    assert.match(cppSource, /struct TIMCcsdsTimeCode\b/);
    assert.match(tsInstantSource, /class TIMInstant\b/);
    assert.match(tsInstantSource, /GNSS_WEEK\(\):number/);
    assert.match(tsInstantSource, /GNSS_ROLLOVER_REFERENCE_ISO8601\(\):string|null/);
    assert.match(cppSource, /struct TIMInstant\b/);
    assert.match(cppSource, /struct TIMConversionRequest\b/);
    assert.match(cppSource, /struct TIMConversionResult\b/);

    const jsonSchema = JSON.parse(jsonSchemaSource);
    const fbJsonSchema = JSON.parse(fbJsonSchemaSource);

    for (const definition of [
      "TIMInstant",
      "TIMCcsdsTimeCode",
      "TIMConversionRequest",
      "TIMConversionResult",
      "timEpochRepresentation",
      "timCcsdsTimeCodeKind",
      "timConversionStatus",
    ]) {
      assert.ok(jsonSchema.definitions[definition], `JSON schema should define ${definition}`);
      assert.ok(fbJsonSchema.definitions[definition], `augmented fbjson should define ${definition}`);
    }

    assert.equal(fbJsonSchema["x-flatbuffer-root-type"], "TIM");
    assert.equal(fbJsonSchema["x-flatbuffer-file-identifier"], "$TIM");
  });
});
