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
      "table SCNTleLines",
      "table SCNPointOfInterest",
      "table SCNViewCone",
      "table SCNExclusionZone",
      "table SCNReference",
      "MEAN_ELEMENTS:[OMM]",
      "STATES:[STV]",
      "MANEUVERS:[MNV]",
      "SITE:SIT",
      "SENSOR:SEN",
      "SENSOR_SYSTEM_ID:string",
      "OBSERVATION_EO:EOO",
      "OBSERVATION_RADAR:RDO",
      "EXCLUSION_ZONE:SCNExclusionZone",
      "table SCNEvent",
      "EO_OBSERVATIONS:[EOO]",
      "RADAR_OBSERVATIONS:[RDO]",
      "table SCNAssetsChanged",
      "table SCN",
      "REFERENCES:[SCNReference]",
      "VIEW_STATE:VST",
      "root_type SCN;",
      'file_identifier "$SCN";',
    ]) {
      assert.match(scnSource, escapedTokenRegex(token));
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
      "SCNTleLines",
      "SCNGeodeticPoint",
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
