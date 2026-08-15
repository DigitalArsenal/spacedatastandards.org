import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";

describe("GNP gazetteer named place schema", () => {
  it("cannot encode a place without dataset lineage and licence terms", async () => {
    const source = await readFile("schema/GNP/main.fbs", "utf8");

    assert.match(source, /table GNP\s*\{/);
    assert.match(source, /file_identifier\s+"\$GNP";/);
    assert.match(source, /root_type GNP;/);

    assert.match(source, /ID:string \(required\);/);
    assert.match(source, /NAME:string \(required\);/);
    assert.match(source, /ASCII_NAME:string;/);
    assert.match(source, /ALTERNATE_NAMES:\[GNPName\];/);
    assert.match(source, /LATITUDE:double;/);
    assert.match(source, /LONGITUDE:double;/);
    assert.match(source, /ELEVATION_M:double;/);
    assert.match(source, /ELEVATION_PUBLISHED:bool = false;/);
    assert.match(source, /DEM_ELEVATION_M:double;/);
    assert.match(source, /FEATURE_CLASS:gnpFeatureClass = UNSPECIFIED;/);
    assert.match(source, /FEATURE_CLASS_CODE:string;/);
    assert.match(source, /FEATURE_CODE:string;/);
    assert.match(source, /COUNTRY_CODE:string;/);
    assert.match(source, /COUNTRY_NAME:string;/);
    assert.match(source, /ADMIN1_CODE:string;/);
    assert.match(source, /ADMIN1_NAME:string;/);
    assert.match(source, /ADMIN2_CODE:string;/);
    assert.match(source, /ADMIN2_NAME:string;/);
    assert.match(source, /POPULATION:long;/);
    assert.match(source, /TIME_ZONE_ID:string;/);
    assert.match(source, /SOURCE:GNPProvenance \(required\);/);

    assert.match(source, /table GNPProvenance\s*\{/);
    assert.match(source, /DATASET_ID:string \(required\);/);
    assert.match(source, /DATASET_EPOCH:string \(required\);/);
    assert.match(source, /RETRIEVED_AT:string \(required\);/);
    assert.match(source, /LICENSE:string \(required\);/);
    assert.match(source, /NATIVE_ID:string \(required\);/);
    assert.match(source, /SHARE_ALIKE:bool = false;/);

    assert.match(source, /table GNPName\s*\{/);
    assert.match(source, /IS_PREFERRED:bool = false;/);
    assert.match(source, /IS_HISTORIC:bool = false;/);
  });

  it("keeps the enum ordinal-0 hazard defaulted away", async () => {
    const source = await readFile("schema/GNP/main.fbs", "utf8");
    const body = source.match(/enum gnpFeatureClass : byte \{([\s\S]*?)\}/)[1];
    const members = body
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("///"))
      .map((line) => line.replace(/,$/, "").trim());

    assert.equal(members[0], "ADMINISTRATIVE");
    assert.equal(members[members.length - 1], "UNSPECIFIED");
    assert.match(source, /FEATURE_CLASS:gnpFeatureClass = UNSPECIFIED;/);
  });

  it("names no gazetteer, vendor, or site in its descriptions", async () => {
    const source = await readFile("schema/GNP/main.fbs", "utf8");
    const comments = source
      .split("\n")
      .filter((line) => line.trim().startsWith("///"))
      .join("\n");

    for (const banned of [
      "GeoNames",
      "OpenStreetMap",
      "Google",
      "Esri",
      "Who's On First",
      "Nominatim",
      "Natural Earth",
      "creativecommons",
    ]) {
      assert.ok(
        !new RegExp(banned.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(
          comments
        ),
        `GNP descriptions must name no dataset or vendor (found ${banned})`
      );
    }
  });

  it("holds RecordType ordinal 210 in the frozen contract", async () => {
    const ordinals = JSON.parse(
      await readFile("schema/REC/RECORDTYPE_ORDINALS.json", "utf8")
    );
    const frozen = ordinals.ordinals ?? ordinals;
    assert.equal(frozen.GNP, 210);
    assert.equal(frozen.TRS, 209);
  });

  it("generates bindings and an augmented JSON schema", async () => {
    const [ts, go, cpp, jsonSchema] = await Promise.all([
      readFile("lib/ts/GNP/GNP.ts", "utf8"),
      readFile("lib/go/GNP/GNP.go", "utf8"),
      readFile("lib/cpp/GNP/main_generated.h", "utf8"),
      readFile("lib/fbjson/GNP/main.fb.schema.json", "utf8"),
    ]);

    assert.match(ts, /class GNP\b/);
    assert.match(go, /type GNP struct/);
    assert.match(cpp, /struct GNP FLATBUFFERS_FINAL_CLASS/);

    const schema = JSON.parse(jsonSchema);
    assert.equal(schema["x-flatbuffer-root-type"], "GNP");
    // JSON keys match IDL capitalization exactly.
    assert.ok(schema.definitions.GNP.properties.NAME);
    assert.ok(schema.definitions.GNP.properties.ASCII_NAME);
    assert.ok(schema.definitions.GNP.properties.ADMIN1_CODE);
    assert.ok(schema.definitions.GNP.properties.SOURCE);
    assert.ok(!schema.definitions.GNP.properties.name);
    assert.ok(!schema.definitions.GNP.properties.admin1_code);
  });
});
