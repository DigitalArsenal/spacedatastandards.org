import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";

describe("DTT digital terrain tile schema", () => {
  it("cannot encode a tile without an address, payload, and lineage", async () => {
    const source = await readFile("schema/DTT/main.fbs", "utf8");

    assert.match(source, /table DTT\s*\{/);
    assert.match(source, /file_identifier\s+"\$DTT";/);
    assert.match(source, /root_type DTT;/);

    assert.match(source, /TILESET_ID:string \(required\);/);
    assert.match(source, /TILING_SCHEME:dttTilingScheme = UNSPECIFIED;/);
    assert.match(source, /LEVEL:uint32;/);
    assert.match(source, /X:uint32;/);
    assert.match(source, /Y:uint32;/);
    assert.match(source, /ROW_ORIGIN_NORTH:bool = false;/);
    assert.match(source, /WEST_DEG:double;/);
    assert.match(source, /SOUTH_DEG:double;/);
    assert.match(source, /EAST_DEG:double;/);
    assert.match(source, /NORTH_DEG:double;/);
    assert.match(source, /MIN_HEIGHT_M:double;/);
    assert.match(source, /MAX_HEIGHT_M:double;/);
    assert.match(source, /PAYLOAD_FORMAT:dttPayloadFormat = UNSPECIFIED;/);
    assert.match(source, /PAYLOAD:DTTPayloadRef \(required\);/);
    assert.match(source, /VERTICAL_DATUM:dttVerticalDatum = UNSPECIFIED;/);
    assert.match(source, /WATER_MASK_KIND:dttWaterMask = NONE;/);
    assert.match(source, /WATER_MASK:DTTPayloadRef;/);
    assert.match(source, /CHILD_AVAILABILITY:uint8;/);
    assert.match(source, /SOURCE_CLASS:dttSourceClass = UNSPECIFIED;/);
    assert.match(source, /PROVENANCE:DTTProvenance \(required\);/);

    assert.match(source, /table DTTPayloadRef\s*\{/);
    assert.match(source, /CID:string;/);
    assert.match(source, /BYTES:\[ubyte\];/);
    assert.match(source, /SIZE_BYTES:uint64;/);

    assert.match(source, /table DTTProvenance\s*\{/);
    assert.match(source, /DATASET_ID:string \(required\);/);
    assert.match(source, /DATASET_EPOCH:string \(required\);/);
    assert.match(source, /RETRIEVED_AT:string \(required\);/);
    assert.match(source, /LICENSE:string \(required\);/);
    assert.match(source, /SHARE_ALIKE:bool = false;/);
  });

  it("keeps every enum's ordinal-0 member a non-claim", async () => {
    const source = await readFile("schema/DTT/main.fbs", "utf8");
    const first = (name) => {
      const body = source.match(
        new RegExp(`enum ${name} : byte \\{([\\s\\S]*?)\\n\\}`)
      )[1];
      return body
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("///"))
        .map((line) => line.replace(/,$/, "").trim())[0];
    };

    assert.equal(first("dttTilingScheme"), "UNSPECIFIED");
    assert.equal(first("dttPayloadFormat"), "UNSPECIFIED");
    assert.equal(first("dttVerticalDatum"), "UNSPECIFIED");
    assert.equal(first("dttSourceClass"), "UNSPECIFIED");
    assert.equal(first("dttWaterMask"), "NONE");
  });

  it("names no dataset, mission, agency, or vendor in its descriptions", async () => {
    const source = await readFile("schema/DTT/main.fbs", "utf8");
    const comments = source
      .split("\n")
      .filter((line) => line.trim().startsWith("///"))
      .join("\n");

    for (const banned of [
      "Copernicus",
      "SRTM",
      "ASTER",
      "TanDEM",
      "ArcticDEM",
      "Cesium",
      "Mapbox",
      "NASA",
      "ESA",
      "USGS",
      "Google",
      "Bing",
      "terrarium",
    ]) {
      assert.ok(
        !new RegExp(
          `\\b${banned.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
          "i"
        ).test(comments),
        `DTT descriptions must name no dataset or vendor (found ${banned})`
      );
    }
  });

  it("holds RecordType ordinal 211 in the frozen contract", async () => {
    const ordinals = JSON.parse(
      await readFile("schema/REC/RECORDTYPE_ORDINALS.json", "utf8")
    );
    const frozen = ordinals.ordinals ?? ordinals;
    assert.equal(frozen.DTT, 211);
    assert.equal(frozen.GNP, 210);
  });

  it("generates bindings and an augmented JSON schema", async () => {
    const [ts, go, cpp, jsonSchema] = await Promise.all([
      readFile("lib/ts/DTT/DTT.ts", "utf8"),
      readFile("lib/go/DTT/DTT.go", "utf8"),
      readFile("lib/cpp/DTT/main_generated.h", "utf8"),
      readFile("lib/fbjson/DTT/main.fb.schema.json", "utf8"),
    ]);

    assert.match(ts, /class DTT\b/);
    assert.match(go, /type DTT struct/);
    assert.match(cpp, /struct DTT FLATBUFFERS_FINAL_CLASS/);

    const schema = JSON.parse(jsonSchema);
    assert.equal(schema["x-flatbuffer-root-type"], "DTT");
    // JSON keys match IDL capitalization exactly.
    assert.ok(schema.definitions.DTT.properties.TILESET_ID);
    assert.ok(schema.definitions.DTT.properties.MIN_HEIGHT_M);
    assert.ok(schema.definitions.DTT.properties.WATER_MASK_KIND);
    assert.ok(schema.definitions.DTT.properties.PROVENANCE);
    assert.ok(!schema.definitions.DTT.properties.tileset_id);
    assert.ok(!schema.definitions.DTT.properties.min_height_m);
  });
});
