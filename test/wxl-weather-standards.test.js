import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as flatbuffers from "flatbuffers";

import * as WXF from "../lib/js/WXF/main.js";
import * as TCT from "../lib/js/TCT/main.js";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Inline sample budget fixed by the WXF standard (VALUES_ENCODING doc). */
const INLINE_CELL_LIMIT = 1048576;

/** 1 kt = 1852/3600 m/s exactly; 1 nmi = 1.852 km exactly. */
const KT_TO_MS = 1852 / 3600;
const NMI_TO_KM = 1.852;
const HOUR_MS = 3600000;

/**
 * Pack a native object through the size-prefixed finisher, prove the frame
 * carries the standard's file identifier at bytes 8..12 (after the size prefix and root offset), and unpack it again.
 */
function roundTrip(value, finish, readSizePrefixed, identifier) {
  const builder = new flatbuffers.Builder(1024);
  finish(builder, value.pack(builder));
  const bytes = builder.asUint8Array().slice();
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), identifier);
  return readSizePrefixed(new flatbuffers.ByteBuffer(bytes)).unpack();
}

/** Encoding rule from the WXF standard: inline up to 1,048,576 cells, chunk above. */
function chooseEncoding(nlat, nlon) {
  return nlat * nlon <= INLINE_CELL_LIMIT
    ? WXF.wxfValuesEncoding.InlineFloat32
    : WXF.wxfValuesEncoding.ContentAddressedChunk;
}

function grid({ lat0, lon0, dlat, dlon, nlat, nlon, periodic }) {
  const g = new WXF.WXFGridT();
  g.KIND = WXF.wxfGridKind.RegularLatLon;
  g.LAT0 = lat0;
  g.LON0 = lon0;
  g.DLAT = dlat;
  g.DLON = dlon;
  g.NLAT = nlat;
  g.NLON = nlon;
  g.PERIODIC_LON = periodic;
  return g;
}

function radii(thresholdKt, neNmi, seNmi, swNmi, nwNmi) {
  const r = new TCT.TCTRadiiT();
  r.THRESHOLD_WIND_MS = Math.fround(thresholdKt * KT_TO_MS);
  r.NE_KM = neNmi < 0 ? -1 : Math.fround(neNmi * NMI_TO_KM);
  r.SE_KM = seNmi < 0 ? -1 : Math.fround(seNmi * NMI_TO_KM);
  r.SW_KM = swNmi < 0 ? -1 : Math.fround(swNmi * NMI_TO_KM);
  r.NW_KM = nwNmi < 0 ? -1 : Math.fround(nwNmi * NMI_TO_KM);
  return r;
}

const INIT_TIME_MS = 1788307200000n;
const LEAD_HOURS = 6;

describe("weather forecast standards round-trip through the generated JS", () => {
  it("$WXF inline grid keeps row-major float32 samples, NaN gaps and cell centres", () => {
    const NLAT = 3;
    const NLON = 4;
    const values = new Array(NLAT * NLON);
    for (let i = 0; i < NLAT; i += 1) {
      for (let j = 0; j < NLON; j += 1) {
        values[i * NLON + j] = Math.fround(0.01 * i + 0.001 * j);
      }
    }
    values[2 * NLON + 3] = NaN;

    const field = new WXF.WXFT();
    field.FIELD_ID = "test|2026-09-02T00:00:00Z|Member0|low_cloud_cover|6h";
    field.GRID = grid({ lat0: 0.4, lon0: 44.8, dlat: -0.1, dlon: 0.1, nlat: NLAT, nlon: NLON, periodic: false });
    field.VALUES = values;
    field.MISSING_COUNT = values.filter((v) => Number.isNaN(v)).length;
    field.VARIABLE_NAME = "low_cloud_cover";
    field.UNITS = "1";

    const back = roundTrip(field, WXF.WXF.finishSizePrefixedWXFBuffer, WXF.WXF.getSizePrefixedRootAsWXF, "$WXF");
    assert.equal(back.VALUES.length, 12);
    assert.equal(back.VALUES[5], Math.fround(0.011));
    assert.ok(Number.isNaN(back.VALUES[11]));
    assert.equal(back.MISSING_COUNT, 1);
    assert.equal(back.GRID.KIND, WXF.wxfGridKind.RegularLatLon);
    assert.equal(back.GRID.PERIODIC_LON, false);
    assert.equal(back.GRID.NLAT, NLAT);
    assert.equal(back.GRID.NLON, NLON);
    // cell (2, 3) centre per the WXFGrid layout rule
    const lat23 = back.GRID.LAT0 + 2 * back.GRID.DLAT;
    const lon23 = back.GRID.LON0 + 3 * back.GRID.DLON;
    assert.ok(Math.abs(lat23 - 0.2) < 1e-12, `lat ${lat23}`);
    assert.ok(Math.abs(lon23 - 45.1) < 1e-12, `lon ${lon23}`);
    assert.equal(back.UNITS, "1");
  });

  it("$WXF keeps epochs as uint64 BigInt and every enum selector", () => {
    assert.equal(new Date(Number(INIT_TIME_MS)).toISOString(), "2026-09-02T00:00:00.000Z");
    const field = new WXF.WXFT();
    field.FIELD_ID = "f";
    field.GRID = grid({ lat0: 90, lon0: 0, dlat: -0.1, dlon: 0.1, nlat: 2, nlon: 2, periodic: false });
    field.VALUES = [0, 0.25, 0.5, 1];
    field.MODEL_CLASS = WXF.wxfModelClass.MachineLearnedGlobalEnsemble;
    field.INIT_TIME_MS = INIT_TIME_MS;
    field.LEAD_HOURS = LEAD_HOURS;
    field.VALID_TIME_MS = INIT_TIME_MS + BigInt(LEAD_HOURS * HOUR_MS);
    field.HORIZON_HOURS = 360;
    field.MEMBER_KIND = WXF.wxfMemberKind.Member;
    field.MEMBER_INDEX = 17;
    field.ENSEMBLE_SIZE = 64;
    field.VARIABLE = WXF.wxfVariable.LowCloudCover;
    field.LEVEL_KIND = WXF.wxfLevelKind.EntireAtmosphere;
    field.TEMPORAL_KIND = WXF.wxfTemporalKind.Instantaneous;
    field.LICENSE_CLASS = WXF.wxfLicenseClass.Historical;
    field.RETRIEVED_AT = 1788400000000n;

    const back = roundTrip(field, WXF.WXF.finishSizePrefixedWXFBuffer, WXF.WXF.getSizePrefixedRootAsWXF, "$WXF");
    assert.equal(typeof back.INIT_TIME_MS, "bigint");
    assert.equal(back.INIT_TIME_MS, 1788307200000n);
    assert.equal(back.VALID_TIME_MS, 1788328800000n);
    assert.equal(back.VALID_TIME_MS - back.INIT_TIME_MS, BigInt(6 * HOUR_MS));
    assert.equal(back.LEAD_HOURS, 6);
    assert.equal(back.HORIZON_HOURS, 360);
    assert.equal(back.MODEL_CLASS, WXF.wxfModelClass.MachineLearnedGlobalEnsemble);
    assert.equal(back.MEMBER_KIND, WXF.wxfMemberKind.Member);
    assert.equal(back.MEMBER_INDEX, 17);
    assert.equal(back.ENSEMBLE_SIZE, 64);
    assert.equal(back.VARIABLE, WXF.wxfVariable.LowCloudCover);
    assert.equal(back.LEVEL_KIND, WXF.wxfLevelKind.EntireAtmosphere);
    assert.equal(back.TEMPORAL_KIND, WXF.wxfTemporalKind.Instantaneous);
    assert.equal(back.LICENSE_CLASS, WXF.wxfLicenseClass.Historical);
    assert.equal(back.RETRIEVED_AT, 1788400000000n);
  });

  it("$WXF encoding rule: inline up to 1,048,576 cells, content-addressed chunk above", () => {
    assert.equal(721 * 1440, 1038240);
    assert.ok(721 * 1440 <= INLINE_CELL_LIMIT);
    assert.equal(chooseEncoding(721, 1440), WXF.wxfValuesEncoding.InlineFloat32);
    assert.equal(1801 * 3600, 6483600);
    assert.ok(1801 * 3600 > INLINE_CELL_LIMIT);
    assert.equal(chooseEncoding(1801, 3600), WXF.wxfValuesEncoding.ContentAddressedChunk);
    assert.equal(chooseEncoding(1024, 1024), WXF.wxfValuesEncoding.InlineFloat32);
    assert.equal(chooseEncoding(1024, 1025), WXF.wxfValuesEncoding.ContentAddressedChunk);

    const field = new WXF.WXFT();
    field.FIELD_ID = "chunked";
    field.GRID = grid({ lat0: 90, lon0: 0, dlat: -0.1, dlon: 0.1, nlat: 1801, nlon: 3600, periodic: true });
    field.VALUES_ENCODING = chooseEncoding(1801, 3600);
    field.CHUNK_CID = "bafy...";
    field.CHUNK_DTYPE = "float32";
    field.CHUNK_CODECS = ["bytes", "zstd"];
    field.CHUNK_BYTE_LENGTH = 25934400n;
    field.TILE_INDEX = 805;
    field.TILE_COUNT = 1653;

    const back = roundTrip(field, WXF.WXF.finishSizePrefixedWXFBuffer, WXF.WXF.getSizePrefixedRootAsWXF, "$WXF");
    assert.equal(back.VALUES_ENCODING, WXF.wxfValuesEncoding.ContentAddressedChunk);
    assert.equal(back.VALUES.length, 0);
    assert.equal(back.CHUNK_CID, "bafy...");
    assert.equal(back.CHUNK_DTYPE, "float32");
    assert.deepEqual(back.CHUNK_CODECS, ["bytes", "zstd"]);
    assert.equal(back.CHUNK_BYTE_LENGTH, 25934400n);
    assert.equal(back.TILE_INDEX, 805);
    assert.equal(back.TILE_COUNT, 1653);
    assert.equal(back.GRID.PERIODIC_LON, true);
    assert.equal(back.GRID.NLAT * back.GRID.NLON, 6483600);
  });

  it("$WXF defaults read Member / 1 tile / RealTimeExperimental when absent", () => {
    const field = new WXF.WXFT();
    field.FIELD_ID = "defaults";
    field.GRID = grid({ lat0: 0, lon0: 0, dlat: 1, dlon: 1, nlat: 1, nlon: 1, periodic: false });
    const back = roundTrip(field, WXF.WXF.finishSizePrefixedWXFBuffer, WXF.WXF.getSizePrefixedRootAsWXF, "$WXF");
    assert.equal(back.MEMBER_KIND, WXF.wxfMemberKind.Member);
    assert.equal(back.TILE_COUNT, 1);
    assert.equal(back.TILE_INDEX, 0);
    assert.equal(back.LICENSE_CLASS, WXF.wxfLicenseClass.RealTimeExperimental);
    assert.equal(back.VALUES_ENCODING, WXF.wxfValuesEncoding.InlineFloat32);
    assert.equal(back.MODEL_CLASS, WXF.wxfModelClass.Unspecified);
    assert.equal(back.VARIABLE, WXF.wxfVariable.Unspecified);
    assert.equal(back.LEVEL_KIND, WXF.wxfLevelKind.Surface);
    assert.equal(back.TEMPORAL_KIND, WXF.wxfTemporalKind.Instantaneous);
    assert.equal(back.GRID.KIND, WXF.wxfGridKind.RegularLatLon);
  });

  it("$TCT carries a member track with exact knot and nautical-mile conversions", () => {
    const vmaxKt = 95;
    const points = [];
    for (let k = 0; k < 2; k += 1) {
      const p = new TCT.TCTPointT();
      p.VALID_TIME_MS = INIT_TIME_MS + BigInt(k * 6 * HOUR_MS);
      p.LEAD_HOURS = k * 6;
      p.LATITUDE = 12.5 + k;
      p.LONGITUDE = -60 - k;
      p.MAX_SUSTAINED_WIND_MS = Math.fround(vmaxKt * KT_TO_MS);
      p.MIN_CENTRAL_PRESSURE_PA = 96500;
      p.RADIUS_MAX_WIND_KM = Math.fround(15 * NMI_TO_KM);
      p.RADII = [radii(34, 120, 110, -1, 100), radii(50, 60, 50, -1, 40), radii(64, 30, 0, -1, 20)];
      p.CATEGORY = TCT.tctIntensityCategory.Category2;
      p.MOTION_DIRECTION_DEG = -1;
      p.MOTION_SPEED_MS = -1;
      points.push(p);
    }

    const track = new TCT.TCTT();
    track.STORM_ID = "2026245N12300";
    track.STORM_NAME = "ALPHA";
    track.BASIN = TCT.tctBasin.NorthAtlantic;
    track.TRACK_KIND = TCT.tctTrackKind.Forecast;
    track.TRACK_ORIGIN = TCT.tctTrackOrigin.Genesis;
    track.MODEL_CLASS = TCT.wxfModelClass.MachineLearnedGlobalEnsemble;
    track.INIT_TIME_MS = INIT_TIME_MS;
    track.MEMBER_KIND = TCT.wxfMemberKind.Member;
    track.MEMBER_INDEX = 2;
    track.ENSEMBLE_SIZE = 64;
    track.WIND_AVERAGING_PERIOD_S = 60;
    track.POINTS = points;
    track.LICENSE_CLASS = TCT.wxfLicenseClass.RealTimeExperimental;

    const back = roundTrip(track, TCT.TCT.finishSizePrefixedTCTBuffer, TCT.TCT.getSizePrefixedRootAsTCT, "$TCT");
    assert.equal(back.STORM_ID, "2026245N12300");
    assert.equal(back.BASIN, TCT.tctBasin.NorthAtlantic);
    assert.equal(back.TRACK_ORIGIN, TCT.tctTrackOrigin.Genesis);
    assert.equal(back.MODEL_CLASS, WXF.wxfModelClass.MachineLearnedGlobalEnsemble);
    assert.equal(back.INIT_TIME_MS, 1788307200000n);
    assert.equal(back.MEMBER_INDEX, 2);
    assert.equal(back.WIND_AVERAGING_PERIOD_S, 60);
    assert.equal(back.POINTS.length, 2);
    assert.equal(back.POINTS[1].VALID_TIME_MS - back.POINTS[0].VALID_TIME_MS, BigInt(6 * HOUR_MS));
    assert.ok(back.POINTS[0].VALID_TIME_MS < back.POINTS[1].VALID_TIME_MS);

    const p0 = back.POINTS[0];
    assert.equal(p0.RADII.length, 3);
    const thresholds = p0.RADII.map((r) => r.THRESHOLD_WIND_MS);
    assert.deepEqual(thresholds, [Math.fround(34 * KT_TO_MS), Math.fround(50 * KT_TO_MS), Math.fround(64 * KT_TO_MS)]);
    assert.ok(Math.abs(thresholds[0] - 17.491111) < 1e-5, `34 kt -> ${thresholds[0]}`);
    assert.ok(Math.abs(thresholds[1] - 25.722222) < 1e-5, `50 kt -> ${thresholds[1]}`);
    assert.ok(Math.abs(thresholds[2] - 32.924444) < 1e-5, `64 kt -> ${thresholds[2]}`);
    assert.equal(p0.RADII[0].NE_KM, Math.fround(120 * NMI_TO_KM));
    assert.ok(Math.abs(p0.RADII[0].NE_KM - 222.24) < 1e-5);
    assert.equal(p0.RADII[0].SW_KM, -1);
    assert.equal(p0.RADII[2].SE_KM, 0);
    assert.equal(p0.MAX_SUSTAINED_WIND_MS, Math.fround(95 * KT_TO_MS));
    assert.ok(p0.MAX_SUSTAINED_WIND_MS >= 43 && p0.MAX_SUSTAINED_WIND_MS < 50, "95 kt sits in the Category2 band");
    assert.equal(p0.MIN_CENTRAL_PRESSURE_PA, 96500);
    assert.equal(p0.CATEGORY, TCT.tctIntensityCategory.Category2);
    assert.equal(p0.EXISTENCE_PROBABILITY, 1);
    assert.equal(p0.MOTION_DIRECTION_DEG, -1);
  });

  it("$TCT point built without EXISTENCE_PROBABILITY reads the default 1", () => {
    const p = new TCT.TCTPointT();
    p.VALID_TIME_MS = INIT_TIME_MS;
    p.LATITUDE = 15;
    p.LONGITUDE = -70;
    const track = new TCT.TCTT();
    track.STORM_ID = "2026248N15290";
    track.POINTS = [p];
    const back = roundTrip(track, TCT.TCT.finishSizePrefixedTCTBuffer, TCT.TCT.getSizePrefixedRootAsTCT, "$TCT");
    assert.equal(back.POINTS[0].EXISTENCE_PROBABILITY, 1);
    assert.equal(back.POINTS[0].CATEGORY, TCT.tctIntensityCategory.Unspecified);
    assert.equal(back.STORM_NAME, null);
    assert.equal(back.TRACK_KIND, TCT.tctTrackKind.Forecast);
    assert.equal(back.TRACK_ORIGIN, TCT.tctTrackOrigin.ExistingSystem);
    assert.equal(back.MEMBER_KIND, TCT.wxfMemberKind.Member);
    assert.equal(back.LICENSE_CLASS, TCT.wxfLicenseClass.RealTimeExperimental);
  });

  it("RecordType ordinals append WXF and TCT after QRP=243 without moving anything", () => {
    const contract = JSON.parse(
      readFileSync(path.join(REPO_ROOT, "schema", "REC", "RECORDTYPE_ORDINALS.json"), "utf8"),
    );
    const ordinals = contract.ordinals;
    assert.equal(ordinals.QRP, 243);
    assert.equal(typeof ordinals.WXF, "number");
    assert.equal(typeof ordinals.TCT, "number");
    assert.ok(ordinals.WXF > 243);
    assert.ok(ordinals.TCT > 243);
    assert.notEqual(ordinals.WXF, ordinals.TCT);
    assert.deepEqual([ordinals.TCT, ordinals.WXF].sort((a, b) => a - b), [244, 245]);
  });
});
