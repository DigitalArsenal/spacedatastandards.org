import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import * as flatbuffers from "flatbuffers";

import {
  DTT,
  DTTPayloadRefT,
  DTTProvenanceT,
  DTTT,
  dttPayloadFormat,
  dttSourceClass,
  dttTilingScheme,
  dttVerticalDatum,
} from "../lib/js/DTT/main.js";
import {
  RFM,
  RFMCoordinateSystemT,
  RFMCoordinateSystemWrapperT,
  RFMT,
  RFMUnion,
  rfmAxisType,
  SIT,
  SITT,
  SiteType,
} from "../lib/js/SIT/main.js";

const fixture = (name) => new Uint8Array(readFileSync(new URL(`./fixtures/${name}`, import.meta.url)));
const schema = (code) => readFileSync(new URL(`../schema/${code}/main.fbs`, import.meta.url), "utf8");

/** Ordinal-ordered member names of one enum. */
function members(source, name) {
  return source
    .match(new RegExp(`enum ${name}\\s*:\\s*byte\\s*\\{([\\s\\S]*?)\\n\\}`))[1]
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("///"))
    .map((line) => line.replace(/,$/, "").trim());
}

/** Field names of one table, in declaration (slot) order. */
function fields(source, table) {
  const body = source.match(new RegExp(`table ${table} \\{([\\s\\S]*?)\\n\\}`))[1];
  return [...body.matchAll(/^\s*([A-Z_]+)\s*:/gm)].map((m) => m[1]);
}

/** Frames of a size-prefixed $SIT stream. */
function frames(bytes) {
  const out = [];
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  for (let offset = 0; offset + 4 <= bytes.length; ) {
    const size = view.getUint32(offset, true);
    out.push(bytes.subarray(offset + 4, offset + 4 + size));
    offset += 4 + size;
  }
  return out;
}

const provenance = () => {
  const p = new DTTProvenanceT();
  p.DATASET_ID = "lola-ldem-64";
  p.DATASET_NAME = "LOLA LDEM_64";
  p.DATASET_EPOCH = "2013";
  p.RETRIEVED_AT = "2026-10-15T00:00:00.000Z";
  p.LICENSE = "PDDL-1.0";
  return p;
};

describe("DTT and SIT for any body", () => {
  // The snapshots are what the 1.250.0 bindings (DTT 1.190.0, SIT 1.1.0) decode from the
  // same bytes; the new bindings must decode every one of those fields to the same value.
  const snapshot = (name) =>
    JSON.parse(readFileSync(new URL(`./fixtures/${name}`, import.meta.url), "utf8"));
  const withoutNew = (o, keys) => Object.fromEntries(Object.entries(o).filter(([k]) => !keys.includes(k)));
  const asJson = (o) => JSON.parse(JSON.stringify(o, (k, v) => (typeof v === "bigint" ? v.toString() : v)));

  it("decodes an Earth tile published under DTT 1.190.0 to the same values, the body fields at their defaults", () => {
    const bytes = fixture("dtt-1.190.0-earth-tile.fb");
    const bb = new flatbuffers.ByteBuffer(bytes);
    assert.ok(DTT.bufferHasIdentifier(bb));
    const tile = DTT.getRootAsDTT(bb);
    assert.equal(tile.CENTER_NAME(), null);
    assert.equal(tile.referenceRadiiMLength(), 0);
    assert.equal(tile.HORIZON_ELEVATIONS(), null);
    assert.equal(tile.HORIZON_SECTORS(), 0);
    const unpacked = asJson(tile.unpack());
    assert.deepEqual(
      withoutNew(unpacked, ["CENTER_NAME", "REFERENCE_RADII_M", "HORIZON_ELEVATIONS", "HORIZON_SECTORS"]),
      snapshot("dtt-1.190.0-earth-tile.unpacked.json"),
    );
    // Writing the same tile with the new bindings keeps the Earth meaning: no body fields set.
    const builder = new flatbuffers.Builder(1024);
    builder.finish(tile.unpack().pack(builder), "$DTT");
    const again = DTT.getRootAsDTT(new flatbuffers.ByteBuffer(builder.asUint8Array()));
    assert.equal(again.CENTER_NAME(), null);
    assert.equal(again.TILING_SCHEME(), dttTilingScheme.GEOGRAPHIC_WGS84);
    assert.equal(again.WEST_DEG(), -45);
  });

  it("decodes every SIT 1.0.1 record to the same values, the body fields at their defaults", () => {
    const records = frames(fixture("sit-1.0.1-ilrs-ground-stations.fbseq"));
    const expected = snapshot("sit-1.0.1-ilrs-ground-stations.unpacked.json");
    assert.equal(records.length, 20);
    records.forEach((bytes, i) => {
      const site = SIT.getRootAsSIT(new flatbuffers.ByteBuffer(bytes));
      assert.equal(site.CENTER_NAME(), null);
      assert.equal(site.REFERENCE_FRAME(), null);
      assert.equal(site.MISSION(), null);
      assert.equal(site.EVENT_EPOCH(), null);
      assert.deepEqual(
        withoutNew(asJson(site.unpack()), ["CENTER_NAME", "REFERENCE_FRAME", "MISSION", "EVENT_EPOCH"]),
        expected[i],
      );
    });
  });

  it("round-trips a Moon tile", () => {
    const tile = new DTTT();
    tile.TILESET_ID = "moon-ldem-64";
    tile.TILESET_NAME = "LOLA LDEM_64";
    tile.TILING_SCHEME = dttTilingScheme.GEOGRAPHIC_TWO_ROOT_BODY;
    tile.LEVEL = 2;
    tile.X = 3;
    tile.Y = 1;
    tile.ROW_ORIGIN_NORTH = true;
    tile.WEST_DEG = 0;
    tile.SOUTH_DEG = -45;
    tile.EAST_DEG = 45;
    tile.NORTH_DEG = 0;
    tile.MIN_HEIGHT_M = -4120.5;
    tile.MAX_HEIGHT_M = 2310.25;
    tile.PAYLOAD_FORMAT = dttPayloadFormat.HEIGHTMAP_FLOAT32;
    tile.PAYLOAD = new DTTPayloadRefT();
    tile.PAYLOAD.CID = "bafkreimoontile";
    tile.PAYLOAD.SIZE_BYTES = 4096n;
    tile.GRID_WIDTH = 32;
    tile.GRID_HEIGHT = 32;
    tile.VERTICAL_DATUM = dttVerticalDatum.REFERENCE_SPHERE;
    tile.VERTICAL_DATUM_NAME = "Moon reference sphere 1737.4 km";
    tile.SOURCE_CLASS = dttSourceClass.SPACEBORNE_ALTIMETRIC;
    tile.PROVENANCE = provenance();
    tile.CENTER_NAME = "MOON";
    tile.REFERENCE_RADII_M = [1737400];
    tile.HORIZON_ELEVATIONS = new DTTPayloadRefT();
    tile.HORIZON_ELEVATIONS.CID = "bafkreimoonhorizon";
    tile.HORIZON_ELEVATIONS.SIZE_BYTES = 32n * 32n * 16n;
    tile.HORIZON_SECTORS = 16;

    const builder = new flatbuffers.Builder(1024);
    builder.finish(tile.pack(builder), "$DTT");
    const read = DTT.getRootAsDTT(new flatbuffers.ByteBuffer(builder.asUint8Array()));
    assert.equal(read.CENTER_NAME(), "MOON");
    assert.equal(read.TILING_SCHEME(), dttTilingScheme.GEOGRAPHIC_TWO_ROOT_BODY);
    assert.equal(read.VERTICAL_DATUM(), dttVerticalDatum.REFERENCE_SPHERE);
    assert.deepEqual(Array.from(read.referenceRadiiMArray()), [1737400]);
    assert.equal(read.HORIZON_SECTORS(), 16);
    assert.equal(read.HORIZON_ELEVATIONS().CID(), "bafkreimoonhorizon");
    assert.deepEqual(read.unpack(), tile);

    // A triaxial body states all three semi-axes, in order.
    tile.REFERENCE_RADII_M = [1738100, 1737400, 1736000];
    const again = new flatbuffers.Builder(1024);
    again.finish(tile.pack(again), "$DTT");
    assert.deepEqual(Array.from(DTT.getRootAsDTT(new flatbuffers.ByteBuffer(again.asUint8Array())).referenceRadiiMArray()), [1738100, 1737400, 1736000]);
  });

  it("round-trips a Moon landing site", () => {
    const site = new SITT();
    site.ID = "moon:apollo-11";
    site.NAME = "Tranquility Base";
    site.SITE_TYPE = SiteType.LANDING_SITE;
    site.LATITUDE = Math.fround(0.67416);
    site.LONGITUDE = Math.fround(23.47314);
    site.ALTITUDE = Math.fround(-1929);
    site.CENTER_NAME = "MOON";
    const frame = new RFMCoordinateSystemT();
    frame.NAME = "Moon mean-Earth/rotation-axis";
    frame.AXIS_TYPE = rfmAxisType.EPHEMERIS_KERNEL_DEFINED;
    frame.KERNEL_FRAME_NAME = "MOON_ME";
    site.REFERENCE_FRAME = new RFMT(RFMUnion.RFMCoordinateSystemWrapper, new RFMCoordinateSystemWrapperT(frame));
    site.MISSION = "Apollo 11";
    site.EVENT_EPOCH = "1969-07-20T20:17:40Z";

    const builder = new flatbuffers.Builder(1024);
    builder.finish(site.pack(builder), "$SIT");
    const read = SIT.getRootAsSIT(new flatbuffers.ByteBuffer(builder.asUint8Array()));
    assert.equal(read.SITE_TYPE(), SiteType.LANDING_SITE);
    assert.equal(read.CENTER_NAME(), "MOON");
    assert.equal(read.MISSION(), "Apollo 11");
    assert.equal(read.EVENT_EPOCH(), "1969-07-20T20:17:40Z");
    assert.equal(read.REFERENCE_FRAME().REFERENCE_FRAME_type(), RFMUnion.RFMCoordinateSystemWrapper);
    assert.deepEqual(read.unpack(), site);
    assert.equal(read.unpack().REFERENCE_FRAME.REFERENCE_FRAME.COORDINATE_SYSTEM.KERNEL_FRAME_NAME, "MOON_ME");
    // The other new site kinds are distinct wire values after OTHER.
    assert.deepEqual(
      [SiteType.IMPACT_SITE, SiteType.CANDIDATE_REGION, SiteType.SURFACE_FEATURE].map((v) => v - SiteType.OTHER),
      [2, 3, 4],
    );
    assert.ok(RFM);
  });

  it("appends only: no ordinal or slot moves", () => {
    const dtt = schema("DTT");
    assert.deepEqual(members(dtt, "dttTilingScheme"), [
      "UNSPECIFIED", "GEOGRAPHIC_WGS84", "GEOGRAPHIC_SINGLE_ROOT", "WEB_MERCATOR", "CUSTOM", "GEOGRAPHIC_TWO_ROOT_BODY",
    ]);
    assert.deepEqual(members(dtt, "dttVerticalDatum"), [
      "UNSPECIFIED", "ELLIPSOIDAL_WGS84", "GEOID", "MEAN_SEA_LEVEL", "REGIONAL_DATUM", "CUSTOM", "REFERENCE_SPHERE",
    ]);
    const dttFields = fields(dtt, "DTT");
    assert.equal(dttFields[dttFields.length - 5], "REMARKS");
    assert.deepEqual(dttFields.slice(-4), ["CENTER_NAME", "REFERENCE_RADII_M", "HORIZON_ELEVATIONS", "HORIZON_SECTORS"]);

    const sit = schema("SIT");
    assert.deepEqual(members(sit, "SiteType").slice(-5), ["OTHER", "LANDING_SITE", "IMPACT_SITE", "CANDIDATE_REGION", "SURFACE_FEATURE"]);
    assert.equal(members(sit, "SiteType").indexOf("OTHER"), 17);
    const sitFields = fields(sit, "SIT");
    assert.equal(sitFields.indexOf("PROVENANCE"), sitFields.length - 5);
    assert.deepEqual(sitFields.slice(-4), ["CENTER_NAME", "REFERENCE_FRAME", "MISSION", "EVENT_EPOCH"]);
  });

  it("carries the new fields through every standard that includes $SIT", async () => {
    for (const code of ["LAM", "SCN", "REC", "LDM", "SCC"]) {
      const bindings = await import(`../lib/js/${code}/main.js`);
      assert.equal(bindings.SiteType.SURFACE_FEATURE, 21, `${code} SiteType`);
      assert.equal(typeof bindings.SIT.prototype.CENTER_NAME, "function", `${code} SIT.CENTER_NAME`);
    }
    const rec = await import("../lib/js/REC/main.js");
    assert.equal(rec.dttTilingScheme.GEOGRAPHIC_TWO_ROOT_BODY, 5);
    assert.equal(rec.dttVerticalDatum.REFERENCE_SPHERE, 6);
  });
});
