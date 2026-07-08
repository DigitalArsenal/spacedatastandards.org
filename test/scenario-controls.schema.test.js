import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function readUtf8(relativePath) {
  return fs.readFile(path.join(repoRoot, relativePath), "utf8");
}

async function readJson(relativePath) {
  return JSON.parse(await readUtf8(relativePath));
}

function escapedTokenRegex(token) {
  return new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
}

function assertFieldDescriptions(schema, definitionNames) {
  for (const definitionName of definitionNames) {
    const properties = schema.definitions?.[definitionName]?.properties;
    assert.ok(properties, `missing generated definition for ${definitionName}`);

    for (const [fieldName, fieldSchema] of Object.entries(properties)) {
      assert.equal(
        typeof fieldSchema.description,
        "string",
        `${definitionName}.${fieldName} should include a generated field description`,
      );
      assert.ok(
        fieldSchema.description.trim().length > 0,
        `${definitionName}.${fieldName} should include a non-empty generated field description`,
      );
    }
  }
}

function assertNoLineElementSetSurface(label, source) {
  const prohibitedPatterns = [
    new RegExp(["S", "C", "N", "T", "l", "e", "L", "i", "n", "e", "s"].join(""), "i"),
    new RegExp(`\\b${["T", "L", "E", "S"].join("")}\\b`, "i"),
    new RegExp(`\\b${["T", "L", "E"].join("")}\\b`, "i"),
    new RegExp(["two", "line"].join("-"), "i"),
    new RegExp(["two", "line"].join(" "), "i"),
  ];

  for (const pattern of prohibitedPatterns) {
    assert.doesNotMatch(
      source,
      pattern,
      `${label} should use OMM instead of line-element set terminology`,
    );
  }
}

function assertNoScenarioUnitSuffixFields(label, source) {
  const prohibitedFields = [
    "LATITUDE_DEG",
    "LONGITUDE_DEG",
    "ALTITUDE_KM",
    "HIGHLIGHT_BEFORE_SEC",
    "HIGHLIGHT_AFTER_SEC",
    "MIN_ELEVATION_DEG",
    "MAX_ELEVATION_DEG",
    "MIN_AZIMUTH_DEG",
    "MAX_AZIMUTH_DEG",
    "MAX_RANGE_KM",
    "HALF_ANGLE_DEG",
    "SITE_LATITUDE_DEG",
    "SITE_LONGITUDE_DEG",
    "YAW_DEG",
    "PITCH_DEG",
    "ROLL_DEG",
    "DISTANCE_FROM_TARGET_KM",
  ];

  for (const fieldName of prohibitedFields) {
    assert.doesNotMatch(
      source,
      escapedTokenRegex(fieldName),
      `${label} should use CCSDS-derived concept names without unit suffixes`,
    );
  }
}

describe("scenario controls schema consolidation", () => {
  it("keeps scenario controls schema sources and docs vendor neutral", async () => {
    const prohibitedTerms = [
      ["saber", "astro"].join(""),
      ["sabre", "astro"].join(""),
      ["cock", "pit"].join(""),
    ];
    const authoredPaths = [
      "input_schemas",
      "schema/SCC/main.fbs",
      "schema/SCN/main.fbs",
      "schema/VST/main.fbs",
      "test",
    ];

    const stack = authoredPaths.map((relativePath) =>
      path.join(repoRoot, relativePath),
    );
    const relativePaths = [];
    while (stack.length > 0) {
      const currentPath = stack.pop();
      const stat = await fs.lstat(currentPath);
      if (stat.isDirectory()) {
        const children = await fs.readdir(currentPath);
        for (const child of children) {
          stack.push(path.join(currentPath, child));
        }
        continue;
      }
      relativePaths.push(path.relative(repoRoot, currentPath));
    }

    const docs = await Promise.all(
      [
        "input_schemas/README.md",
        "input_schemas/scenario_controls/message-bus.schema.json",
        "schema/SCC/main.fbs",
        "schema/SCN/main.fbs",
        "schema/VST/main.fbs",
      ].map(readUtf8),
    );
    const combinedSurface = [...relativePaths, ...docs].join("\n").toLowerCase();

    for (const term of prohibitedTerms) {
      assert.doesNotMatch(combinedSurface, escapedTokenRegex(term));
    }
  });

  it("keeps upstream input schemas in the top-level input_schemas tree", async () => {
    const expectedInputs = [
      "input_schemas/udl/udl_openapi.json",
      "input_schemas/scenario_controls/message-bus.schema.json",
      "input_schemas/satobs/positional-observation-reporting-formats.mhtml",
      "input_schemas/README.md",
    ];

    await Promise.all(
      expectedInputs.map((relativePath) =>
        fs.access(path.join(repoRoot, relativePath)),
      ),
    );

    await assert.rejects(
      fs.access(path.join(repoRoot, "data", "input_schemas")),
      /ENOENT/,
      "schema-source files should not remain under data/input_schemas",
    );

    const readme = await readUtf8("input_schemas/README.md");
    for (const token of ["Scenario controls", "UDL", "satobs", "schema-source"]) {
      assert.match(readme, escapedTokenRegex(token));
    }
  });

  it("defines viewer, scenario, and control-message schemas without duplicating domain records", async () => {
    const [vstSource, scnSource, sccSource] = await Promise.all([
      readUtf8("schema/VST/main.fbs"),
      readUtf8("schema/SCN/main.fbs"),
      readUtf8("schema/SCC/main.fbs"),
    ]);

    for (const token of [
      "enum viewerMapMode : byte",
      "enum viewerCameraFrameMode : byte",
      "enum viewerSatelliteAlignmentMode : byte",
      "table VSTDisplaySettings",
      "table VSTCameraOptions",
      "table VST",
      "YAW:double",
      "PITCH:double",
      "ROLL:double",
      "DISTANCE_FROM_TARGET:double",
      "CAMERA:VSTCameraOptions",
      "DISPLAY_SETTINGS:VSTDisplaySettings",
      "root_type VST;",
      'file_identifier "$VST";',
    ]) {
      assert.match(vstSource, escapedTokenRegex(token));
    }

    for (const token of [
      'include "../EOO/main.fbs";',
      'include "../RDO/main.fbs";',
      'include "../OMM/main.fbs";',
      'include "../STV/main.fbs";',
      'include "../MNV/main.fbs";',
      'include "../SIT/main.fbs";',
      'include "../SEN/main.fbs";',
      'include "../GJN/main.fbs";',
      'include "../RFM/main.fbs";',
      'include "../VST/main.fbs";',
      "enum scenarioReferenceKind : byte",
      "enum scenarioActionCode : byte",
      "POSITION:GJNPosition",
      "table SCNPointOfInterest",
      "table SCNViewCone",
      "table SCNExclusionZone",
      "table SCNReference",
      "HIGHLIGHT_BEFORE:double",
      "HIGHLIGHT_AFTER:double",
      "MIN_ELEVATION:double",
      "MAX_ELEVATION:double",
      "MIN_AZIMUTH:double",
      "MAX_AZIMUTH:double",
      "MAX_RANGE:double",
      "HALF_ANGLE:double",
      "MEAN_ELEMENTS:[OMM]",
      "STATE_VECTORS:[STV]",
      "MANEUVERS:[MNV]",
      "SITE:SIT",
      "SENSOR:SEN",
      "SENSOR_SYSTEM_ID:string",
      "SITE_POSITION:GJNPosition",
      "TARGET_ID:string",
      "SITE_ID:string",
      "OBSERVATION_EO:EOO",
      "OBSERVATION_RADAR:RDO",
      "EXCLUSION_ZONE:SCNExclusionZone",
      "table SCNEvent",
      "MEAN_ELEMENTS:[OMM]",
      "STATE_VECTORS:[STV]",
      "EO_OBSERVATIONS:[EOO]",
      "RADAR_OBSERVATIONS:[RDO]",
      "table SCNAssetsChanged",
      "table SCN",
      "REFERENCES:[SCNReference]",
      "EPOCH:string",
      "USE_BODY_FIXED_FRAME:bool",
      "VIEW_STATE:VST",
      "root_type SCN;",
      'file_identifier "$SCN";',
    ]) {
      assert.match(scnSource, escapedTokenRegex(token));
    }

    for (const prohibitedToken of [
      "table SCNGeodeticPoint",
      "POSITION:SCNGeodeticPoint",
      "POINTS:[SCNGeodeticPoint]",
      "DISPLAY_NAME:string",
      "TARGET_REFERENCE_ID:string",
      "TARGET_NORAD_CAT_ID:uint32",
      "GROUND_SITE_ID:string",
      "SITE_LATITUDE:double",
      "SITE_LONGITUDE:double",
      "ELSETS:[OMM]",
      "SIM_TIME:string",
      "USE_ECEF_FRAME:bool",
    ]) {
      assert.doesNotMatch(scnSource, escapedTokenRegex(prohibitedToken));
    }

    for (const token of [
      'include "../SCN/main.fbs";',
      "enum controlMessageKind : byte",
      "enum stateRequestKind : byte",
      "enum assetCatalogTab : byte",
      "table SCCRequestState",
      "table SCCStateResponse",
      "table SCCAssetPicker",
      "CATALOG_TAB:assetCatalogTab",
      "table SCCReady",
      "table SCC",
      "MESSAGE_KIND:controlMessageKind",
      "SCENARIOS:[SCN]",
      "SCENARIO:SCN",
      "REQUEST_STATE:SCCRequestState",
      "STATE_RESPONSE:SCCStateResponse",
      "ASSET_PICKER:SCCAssetPicker",
      "READY:SCCReady",
      "root_type SCC;",
      'file_identifier "$SCC";',
    ]) {
      assert.match(sccSource, escapedTokenRegex(token));
    }
  });

  it("uses CCSDS-derived concept field names for scenario coordinates, angles, ranges, and durations", async () => {
    const [vstSource, scnSource, vstSchema, scnSchema] = await Promise.all([
      readUtf8("schema/VST/main.fbs"),
      readUtf8("schema/SCN/main.fbs"),
      readUtf8("lib/fbjson/VST/main.fb.schema.json"),
      readUtf8("lib/fbjson/SCN/main.fb.schema.json"),
    ]);

    for (const [label, source] of [
      ["VST schema", vstSource],
      ["SCN schema", scnSource],
      ["VST Field Explorer schema", vstSchema],
      ["SCN Field Explorer schema", scnSchema],
    ]) {
      assertNoScenarioUnitSuffixFields(label, source);
    }

    for (const token of [
      "POSITION:GJNPosition",
      "HIGHLIGHT_BEFORE:double",
      "HIGHLIGHT_AFTER:double",
      "MIN_ELEVATION:double",
      "MAX_ELEVATION:double",
      "MIN_AZIMUTH:double",
      "MAX_AZIMUTH:double",
      "MAX_RANGE:double",
      "HALF_ANGLE:double",
      "SITE_POSITION:GJNPosition",
    ]) {
      assert.match(scnSource, escapedTokenRegex(token));
    }

    for (const token of [
      "YAW:double",
      "PITCH:double",
      "ROLL:double",
      "DISTANCE_FROM_TARGET:double",
    ]) {
      assert.match(vstSource, escapedTokenRegex(token));
    }
  });

  it("generates bindings and JSON schemas for scenario controls schemas", async () => {
    const generatedFiles = [
      "lib/ts/VST/main.ts",
      "lib/ts/SCN/main.ts",
      "lib/ts/SCC/main.ts",
      "lib/js/VST/main.js",
      "lib/js/SCN/main.js",
      "lib/js/SCC/main.js",
      "lib/cpp/VST/main_generated.h",
      "lib/cpp/SCN/main_generated.h",
      "lib/cpp/SCC/main_generated.h",
      "lib/json/VST/main.schema.json",
      "lib/json/SCN/main.schema.json",
      "lib/json/SCC/main.schema.json",
      "lib/fbjson/VST/main.fb.schema.json",
      "lib/fbjson/SCN/main.fb.schema.json",
      "lib/fbjson/SCC/main.fb.schema.json",
    ];

    const sources = await Promise.all(generatedFiles.map(readUtf8));
    const combined = sources.join("\n");

    for (const token of [
      "VSTCameraOptions",
      "VSTDisplaySettings",
      "SCNReference",
      "SCNAssetsChanged",
      "SCCRequestState",
      "SCCStateResponse",
      "SCCAssetPicker",
      '"x-flatbuffer-root-type": "SCC"',
      '"x-flatbuffer-root-type": "SCN"',
      '"x-flatbuffer-root-type": "VST"',
    ]) {
      assert.match(combined, escapedTokenRegex(token));
    }
  });

  it("uses OMM instead of line-element set records for scenario orbital elements", async () => {
    const sources = await Promise.all([
      readUtf8("schema/SCN/main.fbs"),
      readUtf8("lib/fbjson/SCN/main.fb.schema.json"),
      readUtf8("lib/json/SCN/main.schema.json"),
      readUtf8("lib/ts/SCN/main.ts"),
      readUtf8("lib/js/SCN/main.js"),
      readUtf8("lib/go/SCN/SCNReference.go"),
    ]);

    assert.match(sources[0], escapedTokenRegex("MEAN_ELEMENTS:[OMM]"));
    assert.doesNotMatch(sources[0], escapedTokenRegex("ELSETS:[OMM]"));

    for (const [index, source] of sources.entries()) {
      assertNoLineElementSetSurface(`scenario schema artifact ${index}`, source);
    }
  });

  it("generates Field Explorer descriptions for scenario controls fields", async () => {
    const [vstSchema, scnSchema, sccSchema] = await Promise.all([
      readJson("lib/fbjson/VST/main.fb.schema.json"),
      readJson("lib/fbjson/SCN/main.fb.schema.json"),
      readJson("lib/fbjson/SCC/main.fb.schema.json"),
    ]);

    assertFieldDescriptions(vstSchema, [
      "VSTCameraRotation",
      "VSTDisplaySettings",
      "VSTCameraOptions",
      "VST",
    ]);
    assertFieldDescriptions(scnSchema, [
      "GJNPosition",
      "SCNPointOfInterest",
      "SCNViewCone",
      "SCNSunAdvantageTarget",
      "SCNExclusionZone",
      "SCNReference",
      "SCNEvent",
      "SCNAssetsChanged",
      "SCN",
    ]);
    assertFieldDescriptions(sccSchema, [
      "SCCRequestState",
      "SCCStateResponse",
      "SCCAssetPicker",
      "SCCReady",
      "SCC",
    ]);
  });
});
