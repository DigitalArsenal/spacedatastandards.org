import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { inflateSync } from "node:zlib";
import * as flatbuffers from "flatbuffers";
import {
  AGF,
  AGFT,
  AGFProjectionParametersT,
  AGFProvenanceT,
  agfVariable,
  agfDType,
  agfPayloadCodec,
  agfProjection,
  agfRowOrder,
  agfSourceClass,
} from "../lib/js/AGF/main.js";
import {
  AGV,
  AGVT,
  AGVProvenanceT,
  agvVerticalCoordinate,
  agvLevelOrder,
  agvArrayLayout,
} from "../lib/js/AGV/main.js";

/// Acceptance test 3 of graph task cw-sds-gridded-atm: encode a REAL
/// geostationary-imager L2 cloud-optical-depth grid and a REAL numerical
/// weather prediction cloud-ice-mixing-ratio volume into $AGF / $AGV records
/// and read them back — byte-exact payload and geometry round trip.
///
/// Fixtures (test/fixtures/gridded-atmosphere/) were extracted 2026-08-15
/// from live open-data endpoints:
///  * agf_goes_cod_512.raw.bin — 512x512 uint16 raw cloud-optical-depth
///    subgrid of a full-disc geostationary imager L2 product
///    (valid 2026-08-14T12:00Z, GEOSTATIONARY projection, sub-satellite
///    longitude -75 deg).
///  * agv_gfs_icmr.deflate.bin — DEFLATE-compressed 281x121x22 float32
///    cloud-ice-mixing-ratio volume on 22 isobaric levels from a global
///    NWP model 0.25-degree forecast (reference 2026-08-14T12:00Z, lead 3 h),
///    level-major slabs.

const FX = new URL("./fixtures/gridded-atmosphere/", import.meta.url);
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

const finishRoot = (builder, offset, ident) => {
  builder.finish(offset, ident);
  return builder.asUint8Array().slice();
};

describe("gridded atmosphere round trip — real data", () => {
  it("$AGF: real geostationary imager cloud-optical-depth grid survives byte-exact", async () => {
    const payload = new Uint8Array(
      await readFile(new URL("agf_goes_cod_512.raw.bin", FX))
    );
    const meta = JSON.parse(
      await readFile(new URL("agf_goes_cod_512.json", FX), "utf8")
    );
    assert.equal(payload.length, meta.PAYLOAD_BYTES ?? meta.PAYLOAD_SIZE_BYTES ?? payload.length);
    assert.ok(payload.length <= 1048576, "fixture must be inline-legal");
    assert.equal(sha256(payload), meta.PAYLOAD_SHA256);

    const proj = new AGFProjectionParametersT();
    proj.SEMI_MAJOR_AXIS_M = meta.SEMI_MAJOR_AXIS_M;
    proj.SEMI_MINOR_AXIS_M = meta.SEMI_MINOR_AXIS_M;
    proj.INVERSE_FLATTENING = NaN;
    proj.DX = meta.DX_RAD;
    proj.DY = meta.DY_RAD;
    proj.GRID_SPACING_UNITS = "rad";
    proj.X_ORIGIN = meta.X0_RAD;
    proj.Y_ORIGIN = meta.Y0_RAD;
    proj.CENTRAL_MERIDIAN_DEG = NaN;
    proj.ORIGIN_LATITUDE_DEG = NaN;
    proj.STANDARD_PARALLEL_1_DEG = NaN;
    proj.STANDARD_PARALLEL_2_DEG = NaN;
    proj.SCALE_FACTOR_AT_ORIGIN = NaN;
    proj.FALSE_EASTING_M = NaN;
    proj.FALSE_NORTHING_M = NaN;
    proj.SUB_SATELLITE_LON_DEG = meta.SUB_SATELLITE_LON_DEG;
    proj.PERSPECTIVE_HEIGHT_M = meta.PERSPECTIVE_HEIGHT_M;
    proj.SWEEP_ANGLE_AXIS_IS_X = true;

    const prov = new AGFProvenanceT();
    prov.SOURCE_CLASS = agfSourceClass.GEO_IMAGER;
    prov.SOURCE_ID = meta.SOURCE_ID;
    prov.PRODUCT_ID = meta.PRODUCT_ID;

    const rec = new AGFT();
    rec.ID = "agf-roundtrip-fixture-1";
    rec.EPOCH = meta.VALID_START;
    rec.VALID_START = meta.VALID_START;
    rec.VALID_END = meta.VALID_END;
    rec.FORECAST_LEAD_S = NaN;
    rec.VARIABLE = agfVariable.CLOUD_OPTICAL_DEPTH;
    rec.UNITS = meta.UNITS;
    rec.DTYPE = agfDType.UINT16;
    rec.FILL_VALUE = meta.FILL_VALUE;
    rec.SCALE_FACTOR = meta.SCALE_FACTOR;
    rec.ADD_OFFSET = meta.ADD_OFFSET;
    rec.NX = meta.NX;
    rec.NY = meta.NY;
    rec.ROW_ORDER = agfRowOrder.FIRST_ROW_NORTH;
    rec.PROJECTION = agfProjection.GEOSTATIONARY;
    rec.PROJECTION_PARAMETERS = proj;
    rec.PAYLOAD_CODEC = agfPayloadCodec.RAW;
    rec.PAYLOAD = Array.from(payload);
    rec.PAYLOAD_SHA256 = meta.PAYLOAD_SHA256;
    rec.PAYLOAD_SIZE_BYTES = BigInt(payload.length);
    rec.PROVENANCE = prov;

    const builder = new flatbuffers.Builder(payload.length + 4096);
    const bytes = finishRoot(builder, rec.pack(builder), "$AGF");

    const back = AGF.getRootAsAGF(new flatbuffers.ByteBuffer(bytes));
    // payload byte-exact
    const outPayload = back.payloadArray();
    assert.equal(outPayload.length, payload.length);
    assert.equal(sha256(outPayload), meta.PAYLOAD_SHA256);
    assert.deepEqual(Buffer.from(outPayload), Buffer.from(payload));
    // dual-payload invariant: inline mode, no CID
    assert.equal(back.PAYLOAD_CID(), null);
    assert.equal(back.PAYLOAD_SHA256(), meta.PAYLOAD_SHA256);
    assert.equal(back.PAYLOAD_SIZE_BYTES(), BigInt(payload.length));
    // geometry round trip
    assert.equal(back.NX(), meta.NX);
    assert.equal(back.NY(), meta.NY);
    assert.equal(back.PROJECTION(), agfProjection.GEOSTATIONARY);
    const p = back.PROJECTION_PARAMETERS();
    assert.equal(p.SUB_SATELLITE_LON_DEG(), meta.SUB_SATELLITE_LON_DEG);
    assert.equal(p.PERSPECTIVE_HEIGHT_M(), meta.PERSPECTIVE_HEIGHT_M);
    assert.equal(p.SEMI_MAJOR_AXIS_M(), meta.SEMI_MAJOR_AXIS_M);
    assert.equal(p.SEMI_MINOR_AXIS_M(), meta.SEMI_MINOR_AXIS_M);
    assert.equal(p.X_ORIGIN(), meta.X0_RAD);
    assert.equal(p.Y_ORIGIN(), meta.Y0_RAD);
    assert.equal(p.DX(), meta.DX_RAD);
    assert.equal(p.DY(), meta.DY_RAD);
    assert.ok(Number.isNaN(p.STANDARD_PARALLEL_1_DEG()), "inapplicable params stay NaN");
    // observation: no forecast reference time
    assert.equal(back.FORECAST_REFERENCE_TIME(), null);
    assert.ok(Number.isNaN(back.FORECAST_LEAD_S()));
    // packing survives
    assert.equal(back.FILL_VALUE(), meta.FILL_VALUE);
    assert.equal(back.SCALE_FACTOR(), meta.SCALE_FACTOR);
    assert.equal(back.ADD_OFFSET(), meta.ADD_OFFSET);
    // a real physical value decodes: first non-fill cell scales into COD range
    const grid = new Uint16Array(outPayload.buffer, outPayload.byteOffset, meta.NX * meta.NY);
    const idx = grid.findIndex((v) => v !== meta.FILL_VALUE);
    assert.ok(idx >= 0, "fixture contains real retrievals");
    const cod = grid[idx] * back.SCALE_FACTOR() + back.ADD_OFFSET();
    assert.ok(cod >= 0 && cod <= 160, `cloud optical depth in range, got ${cod}`);
  });

  it("$AGV: real NWP cloud-ice volume (22 isobaric levels) survives byte-exact incl. DEFLATE codec", async () => {
    const post = new Uint8Array(
      await readFile(new URL("agv_gfs_icmr.deflate.bin", FX))
    );
    const meta = JSON.parse(
      await readFile(new URL("agv_gfs_icmr.json", FX), "utf8")
    );
    assert.equal(post.length, meta.PAYLOAD_SIZE_BYTES);
    assert.equal(sha256(post), meta.PAYLOAD_SHA256);

    const proj = new AGFProjectionParametersT();
    proj.SEMI_MAJOR_AXIS_M = 6371229.0; // model spherical Earth
    proj.SEMI_MINOR_AXIS_M = 6371229.0;
    proj.INVERSE_FLATTENING = NaN;
    proj.DX = meta.DLON_DEG;
    proj.DY = meta.DLAT_DEG;
    proj.GRID_SPACING_UNITS = "degree";
    proj.X_ORIGIN = meta.LON0_DEG;
    proj.Y_ORIGIN = meta.LAT0_DEG;
    proj.CENTRAL_MERIDIAN_DEG = NaN;
    proj.ORIGIN_LATITUDE_DEG = NaN;
    proj.STANDARD_PARALLEL_1_DEG = NaN;
    proj.STANDARD_PARALLEL_2_DEG = NaN;
    proj.SCALE_FACTOR_AT_ORIGIN = NaN;
    proj.FALSE_EASTING_M = NaN;
    proj.FALSE_NORTHING_M = NaN;
    proj.SUB_SATELLITE_LON_DEG = NaN;
    proj.PERSPECTIVE_HEIGHT_M = NaN;

    const prov = new AGVProvenanceT();
    prov.SOURCE_CLASS = agfSourceClass.NWP_MODEL;
    prov.SOURCE_ID = meta.SOURCE_ID;
    prov.PRODUCT_ID = meta.PRODUCT_ID;
    prov.NOMINAL_RESOLUTION = "0.25 degree";

    const rec = new AGVT();
    rec.ID = "agv-roundtrip-fixture-1";
    rec.EPOCH = "2026-08-14T15:00:00Z";
    rec.FORECAST_REFERENCE_TIME = meta.FORECAST_REFERENCE_TIME;
    rec.FORECAST_LEAD_S = meta.FORECAST_LEAD_S;
    rec.VARIABLE = agfVariable.CLOUD_ICE_MIXING_RATIO;
    rec.UNITS = meta.UNITS;
    rec.DTYPE = agfDType.FLOAT32;
    rec.FILL_VALUE = meta.FILL_VALUE;
    rec.NX = meta.NX;
    rec.NY = meta.NY;
    rec.NZ = meta.NZ;
    rec.ROW_ORDER = agfRowOrder.FIRST_ROW_NORTH;
    rec.PROJECTION = agfProjection.LATLON_REGULAR;
    rec.PROJECTION_PARAMETERS = proj;
    rec.VERTICAL_COORDINATE = agvVerticalCoordinate.PRESSURE_PA;
    rec.LEVELS = meta.LEVELS;
    rec.LEVEL_ORDER = agvLevelOrder.ASCENDING;
    rec.SURFACE_PRESSURE_REFERENCE_PA = NaN;
    rec.ARRAY_LAYOUT = agvArrayLayout.LEVEL_MAJOR;
    rec.PAYLOAD_CODEC = agfPayloadCodec.DEFLATE;
    rec.PAYLOAD = Array.from(post);
    rec.PAYLOAD_SHA256 = meta.PAYLOAD_SHA256;
    rec.PAYLOAD_SIZE_BYTES = BigInt(post.length);
    rec.PROVENANCE = prov;

    const builder = new flatbuffers.Builder(post.length + 8192);
    const bytes = finishRoot(builder, rec.pack(builder), "$AGV");

    const back = AGV.getRootAsAGV(new flatbuffers.ByteBuffer(bytes));
    // post-codec payload byte-exact
    const outPost = back.payloadArray();
    assert.equal(sha256(outPost), meta.PAYLOAD_SHA256);
    assert.equal(back.PAYLOAD_SIZE_BYTES(), BigInt(post.length));
    assert.equal(back.PAYLOAD_CID(), null);
    // decode through the declared codec: raw volume byte-exact
    const raw = inflateSync(Buffer.from(outPost));
    assert.equal(raw.length, meta.RAW_BYTES);
    assert.equal(sha256(raw), meta.RAW_SHA256);
    assert.equal(raw.length, meta.NX * meta.NY * meta.NZ * 4);
    // vertical geometry round trip
    assert.equal(back.NZ(), meta.NZ);
    assert.equal(back.levelsLength(), meta.NZ);
    const levels = Array.from({ length: back.levelsLength() }, (_, i) =>
      back.LEVELS(i)
    );
    assert.deepEqual(levels, meta.LEVELS);
    assert.equal(back.VERTICAL_COORDINATE(), agvVerticalCoordinate.PRESSURE_PA);
    assert.equal(back.LEVEL_ORDER(), agvLevelOrder.ASCENDING);
    assert.equal(back.ARRAY_LAYOUT(), agvArrayLayout.LEVEL_MAJOR);
    // forecast identity
    assert.equal(back.FORECAST_REFERENCE_TIME(), meta.FORECAST_REFERENCE_TIME);
    assert.equal(back.FORECAST_LEAD_S(), meta.FORECAST_LEAD_S);
    // level-major indexing: slab k=meta.NZ-1 (1000 hPa) is the LAST slab;
    // spot-check a real value decodes finite and non-negative
    const vol = new Float32Array(raw.buffer, raw.byteOffset, meta.NX * meta.NY * meta.NZ);
    const k = meta.NZ - 1, j = 60, i = 140;
    const v = vol[k * meta.NX * meta.NY + j * meta.NX + i];
    assert.ok(Number.isFinite(v) && v >= 0, `mixing ratio finite/non-negative, got ${v}`);
    // whole volume: every element finite (a mis-sliced decode shows Inf/NaN)
    assert.ok(vol.every((x) => Number.isFinite(x)), "volume fully finite");
  });

  it("dual-payload invariant is checkable: CID mode carries hash + size without inline bytes", () => {
    const post = new Uint8Array([1, 2, 3, 4]);
    const rec = new AGFT();
    rec.ID = "agf-cid-mode";
    rec.EPOCH = "2026-08-14T12:00:00Z";
    rec.UNITS = "1";
    rec.PROJECTION_PARAMETERS = new AGFProjectionParametersT();
    rec.PROVENANCE = Object.assign(new AGFProvenanceT(), { SOURCE_ID: "X" });
    rec.PAYLOAD = [];
    rec.PAYLOAD_CID = "bafy-example-cid";
    rec.PAYLOAD_SHA256 = sha256(post);
    rec.PAYLOAD_SIZE_BYTES = BigInt(post.length);
    const b = new flatbuffers.Builder(1024);
    b.finish(rec.pack(b), "$AGF");
    const back = AGF.getRootAsAGF(new flatbuffers.ByteBuffer(b.asUint8Array().slice()));
    assert.equal(back.payloadLength(), 0);
    assert.equal(back.PAYLOAD_CID(), "bafy-example-cid");
    assert.equal(back.PAYLOAD_SHA256(), sha256(post));
    assert.equal(back.PAYLOAD_SIZE_BYTES(), BigInt(post.length));
  });
});
