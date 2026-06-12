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

describe("ACW schema generation", () => {
  it("defines access-window request and result records", async () => {
    const schemaSource = await readUtf8("schema/ACW/main.fbs");

    for (const token of [
      "enum acwOperationCode : byte",
      "COMPUTE_ACCESS_WINDOWS",
      "enum acwResultStatus : byte",
      "INVALID_INPUT",
      "enum acwRefractionModelKind : byte",
      "EARTH_STANDARD_ATMOSPHERE",
      "table ACWStateSample",
      "JULIAN_DATE_TT:double",
      "POSITION_X_M:double",
      "POSITION_Y_M:double",
      "POSITION_Z_M:double",
      "table ACWElevationMaskPoint",
      "AZIMUTH_RAD:double",
      "ELEVATION_RAD:double",
      "table ACWRefractionModel",
      "MODEL_KIND:acwRefractionModelKind",
      "PRESSURE_PA:double",
      "TEMPERATURE_K:double",
      "table ACWGroundStation",
      "STATION_ID:string",
      "LATITUDE_RAD:double",
      "LONGITUDE_RAD:double",
      "ALTITUDE_M:double",
      "MIN_ELEVATION_RAD:double",
      "CHANNEL_CAPACITY:uint32",
      "BLACKOUT_WINDOWS:[ACWBlackoutWindow]",
      "table ACWRequest",
      "OPERATION:acwOperationCode",
      "GROUND_STATIONS:[ACWGroundStation]",
      "STATES:[ACWStateSample]",
      "TARGET_STATION_ID:string",
      "MIN_ELEVATION_OVERRIDE_RAD:double",
      "ELEVATION_MASK:[ACWElevationMaskPoint]",
      "REFRACTION_MODEL:ACWRefractionModel",
      "table ACWAccessWindow",
      "START_JULIAN_DATE_TT:double",
      "END_JULIAN_DATE_TT:double",
      "MAX_ELEVATION_RAD:double",
      "SAMPLE_COUNT:uint32",
      "table ACWResult",
      "STATUS:acwResultStatus",
      "WINDOWS:[ACWAccessWindow]",
      "REQUEST:ACWRequest",
      "RESULT:ACWResult",
      "root_type ACW;",
      'file_identifier "$ACW";',
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("generates ACW bindings for TypeScript, C++, and JSON schema consumers", async () => {
    const [
      tsMainSource,
      tsRequestSource,
      tsResultSource,
      cppSource,
      jsonSchemaSource,
      fbJsonSchemaSource,
    ] = await Promise.all([
      readUtf8("lib/ts/ACW/main.ts"),
      readUtf8("lib/ts/ACW/ACWRequest.ts"),
      readUtf8("lib/ts/ACW/ACWResult.ts"),
      readUtf8("lib/cpp/ACW/main_generated.h"),
      readUtf8("lib/json/ACW/main.schema.json"),
      readUtf8("lib/fbjson/ACW/main.fb.schema.json"),
    ]);

    for (const token of [
      "from './ACW.js';",
      "from './ACWRequest.js';",
      "from './ACWResult.js';",
      "from './ACWAccessWindow.js';",
      "from './ACWElevationMaskPoint.js';",
      "from './ACWGroundStation.js';",
      "from './ACWRefractionModel.js';",
      "from './ACWStateSample.js';",
      "from './ACWBlackoutWindow.js';",
      "from './acwOperationCode.js';",
      "from './acwRefractionModelKind.js';",
      "from './acwResultStatus.js';",
    ]) {
      assert.match(tsMainSource, escapedTokenRegex(token));
    }

    for (const token of [
      "TARGET_STATION_ID():string|null",
      "MIN_ELEVATION_OVERRIDE_RAD():number",
      "GROUND_STATIONS(index: number",
      "STATES(index: number",
      "ELEVATION_MASK(index: number",
      "REFRACTION_MODEL(obj?:ACWRefractionModel):ACWRefractionModel|null",
    ]) {
      assert.match(tsRequestSource, escapedTokenRegex(token));
    }

    for (const token of [
      "STATUS():acwResultStatus",
      "WINDOWS(index: number",
      "TRACE_ID():string|null",
    ]) {
      assert.match(tsResultSource, escapedTokenRegex(token));
    }

    for (const token of [
      "struct ACWRequest",
      "struct ACWResult",
      "struct ACWAccessWindow",
      "struct ACWElevationMaskPoint",
      "struct ACWRefractionModel",
      "ACWIdentifier()",
    ]) {
      assert.match(cppSource, escapedTokenRegex(token));
    }

    for (const token of [
      "\"ACWRequest\"",
      "\"ACWResult\"",
      "\"ACWAccessWindow\"",
      "\"ACWElevationMaskPoint\"",
      "\"ACWRefractionModel\"",
    ]) {
      assert.match(jsonSchemaSource, escapedTokenRegex(token));
      assert.match(fbJsonSchemaSource, escapedTokenRegex(token));
    }
  });
});
