import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";

/// The ratified taxonomy, in ordinal order, with the canonical display name
/// every consuming surface renders verbatim. This table IS the contract: a
/// storefront, library, search index and module manifest all classify against
/// it. Editing it here without an owner-gated breaking change is a defect.
const RATIFIED = [
  ["UNSPECIFIED", "Unspecified"],
  ["PROPAGATION", "Propagation"],
  ["ORBIT_DETERMINATION", "Orbit Determination"],
  ["MANEUVER_PLANNING", "Maneuver Planning"],
  ["CONJUNCTION_ASSESSMENT", "Conjunction Assessment"],
  ["REENTRY_AND_BREAKUP", "Reentry & Breakup"],
  ["ATTITUDE_AND_POINTING", "Attitude & Pointing"],
  ["REFERENCE_FRAMES_AND_TIME", "Reference Frames & Time"],
  ["SENSORS_AND_COVERAGE", "Sensors & Coverage"],
  ["TRACKING_AND_OBSERVATION", "Tracking & Observation"],
  ["RF_AND_COMMUNICATIONS", "RF & Communications"],
  ["ELECTRONIC_WARFARE", "Electronic Warfare"],
  ["SPACE_ENVIRONMENT", "Space Environment"],
  ["DATA_SOURCES_AND_INGEST", "Data Sources & Ingest"],
  ["DATA_VALIDATION_AND_QUALITY", "Data Validation & Quality"],
  ["CATALOG_AND_IDENTITY", "Catalog & Identity"],
  ["VISUALIZATION_AND_RENDERING", "Visualization & Rendering"],
  ["GROUND_SEGMENT_AND_HARDWARE", "Ground Segment & Hardware"],
  ["MISSION_DESIGN_AND_ANALYSIS", "Mission Design & Analysis"],
  ["FLOW_AND_COMPOSITION", "Flows & Composition"],
  ["DATA_STORAGE_AND_QUERY", "Data Storage & Query"],
  ["SECURITY_AND_IDENTITY", "Security & Identity"],
  ["COMMERCE_AND_LICENSING", "Commerce & Licensing"],
  ["NODE_INFRASTRUCTURE", "Node Infrastructure"],
  ["FOUNDATION_AND_MATH", "Foundation & Math"],
];

const readCCT = () => readFile("schema/CCT/main.fbs", "utf8");

describe("CCT capability category taxonomy schema", () => {
  it("declares the standard envelope", async () => {
    const source = await readCCT();

    assert.match(source, /table CCT\s*\{/);
    assert.match(source, /file_identifier\s+"\$CCT";/);
    assert.match(source, /root_type CCT;/);

    assert.match(source, /TAXONOMY_ID:\s*string \(required\);/);
    assert.match(source, /VERSION:\s*string \(required\);/);
    assert.match(source, /CATEGORIES:\s*\[CCTCategory\] \(required\);/);
    assert.match(source, /ROLLUPS:\s*\[CCTCategoryRollup\];/);
  });

  it("cannot publish a category without the label, sentence and route a surface renders", async () => {
    const source = await readCCT();
    const category = source.match(/table CCTCategory\s*\{([\s\S]*?)\n\}/);
    assert.ok(category, "CCTCategory table must exist");

    assert.match(category[1], /CODE:\s*capabilityClass = UNSPECIFIED;/);
    assert.match(category[1], /DISPLAY_NAME:\s*string \(required\);/);
    assert.match(category[1], /SUMMARY:\s*string \(required\);/);
    assert.match(category[1], /SLUG:\s*string \(required\);/);
    assert.match(category[1], /PARENT:\s*capabilityClass = UNSPECIFIED;/);
  });

  it("cannot publish an item count without saying when and over what it was taken", async () => {
    const source = await readCCT();
    const rollup = source.match(/table CCTCategoryRollup\s*\{([\s\S]*?)\n\}/);
    assert.ok(rollup, "CCTCategoryRollup table must exist");

    assert.match(rollup[1], /SOURCE_CATALOG_ID:\s*string \(required\);/);
    assert.match(rollup[1], /COUNTED_AT:\s*uint64;/);
    assert.match(rollup[1], /ITEM_COUNT:\s*uint32;/);
  });

  it("holds the ratified category vocabulary in frozen ordinal order", async () => {
    const source = await readCCT();
    const block = source.match(/enum capabilityClass : ubyte \{([\s\S]*?)\n\}/);
    assert.ok(block, "capabilityClass enum must exist");

    const members = block[1]
      .replace(/^\s*\/\/\/.*$/gm, "")
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);

    assert.deepEqual(
      members,
      RATIFIED.map(([code]) => code),
      "capabilityClass ordinals are wire values: append only, never reorder"
    );
  });

  it("keeps UNSPECIFIED at ordinal 0 so a zero-filled category never decodes as a real one", async () => {
    const source = await readCCT();
    const block = source.match(/enum capabilityClass : ubyte \{([\s\S]*?)\n\}/);
    const first = block[1]
      .replace(/^\s*\/\/\/.*$/gm, "")
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean)[0];

    assert.equal(first, "UNSPECIFIED");
  });

  it("states a canonical display name for every ratified category", async () => {
    const source = await readCCT();

    for (const [code, displayName] of RATIFIED) {
      const member = source.match(
        new RegExp(`Display name: "([^"]+)"\\.[\\s\\S]{0,80}?\\n\\s*${code}\\b`)
      );
      assert.ok(member, `${code} must state its canonical display name`);
      assert.equal(
        member[1],
        displayName,
        `${code} display name must be exactly "${displayName}"`
      );
    }
  });

  it("names no vendor, site, product or organization in its descriptions", async () => {
    const source = await readCCT();
    const comments = source
      .split("\n")
      .filter((line) => line.trim().startsWith("///"))
      .join("\n");

    for (const banned of [
      "Basilisk",
      "CelesTrak",
      "Space-Track",
      "SpaceAware",
      "Steam",
      "OrbPro",
      "Cesium",
      "STK",
      "AGI",
      "NORAD",
      "Google",
      "Amazon",
      "Starlink",
    ]) {
      assert.ok(
        !new RegExp(`\\b${banned}\\b`, "i").test(comments),
        `CCT descriptions must name no vendor or product (found ${banned})`
      );
    }
  });

  it("is cited by both manifests that a storefront shelves", async () => {
    const [plg, app] = await Promise.all([
      readFile("schema/PLG/main.fbs", "utf8"),
      readFile("schema/APP/main.fbs", "utf8"),
    ]);

    for (const [name, source] of [
      ["PLG", plg],
      ["APP", app],
    ]) {
      assert.match(
        source,
        /include "\.\.\/CCT\/main\.fbs";/,
        `${name} must include the CCT taxonomy`
      );
      assert.match(
        source,
        /PRIMARY_CATEGORY:\s*capabilityClass = UNSPECIFIED;/,
        `${name} must carry a single shelf category`
      );
      assert.match(
        source,
        /CATEGORIES:\s*\[capabilityClass\];/,
        `${name} must carry multi-category browse classification`
      );
    }
  });

  it("keeps the legacy pluginCategory field on the wire and maps every member forward", async () => {
    const plg = await readFile("schema/PLG/main.fbs", "utf8");

    assert.match(
      plg,
      /PLUGIN_TYPE:\s*pluginCategory;/,
      "PLUGIN_TYPE is wire-frozen and is never removed"
    );

    const legacy = plg.match(/enum pluginCategory : byte \{([\s\S]*?)\n\}/);
    const members = legacy[1]
      .replace(/^\s*\/\/\/.*$/gm, "")
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);

    const migration = plg.match(/Canonical migration[\s\S]*?back-derived into/);
    assert.ok(migration, "PLG must document the forward migration");

    for (const member of members) {
      assert.ok(
        new RegExp(`${member}->`).test(migration[0]),
        `pluginCategory.${member} must have a documented forward mapping`
      );
    }
  });

  it("holds RecordType ordinal 204 in the frozen contract", async () => {
    const ordinals = JSON.parse(
      await readFile("schema/REC/RECORDTYPE_ORDINALS.json", "utf8")
    );
    const frozen = ordinals.ordinals ?? ordinals;
    assert.equal(frozen.CCT, 204);
    assert.equal(frozen.TBS, 203);
  });

  it("generates bindings and an augmented JSON schema", async () => {
    const [ts, go, cpp, jsonSchema] = await Promise.all([
      readFile("lib/ts/CCT/CCT.ts", "utf8"),
      readFile("lib/go/CCT/CCT.go", "utf8"),
      readFile("lib/cpp/CCT/main_generated.h", "utf8"),
      readFile("lib/fbjson/CCT/main.fb.schema.json", "utf8"),
    ]);

    assert.match(ts, /class CCT\b/);
    assert.match(go, /type CCT struct/);
    assert.match(cpp, /struct CCT FLATBUFFERS_FINAL_CLASS/);

    const schema = JSON.parse(jsonSchema);
    assert.equal(schema["x-flatbuffer-root-type"], "CCT");
    assert.ok(schema.definitions.CCT.properties.CATEGORIES);
    assert.ok(schema.definitions.CCT.properties.TAXONOMY_ID);
    assert.ok(schema.definitions.CCTCategory.properties.DISPLAY_NAME);
    assert.ok(schema.definitions.CCTCategory.properties.SLUG);
  });
});
