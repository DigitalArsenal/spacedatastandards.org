import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as HFC from "../lib/js/HFC/main.js";
import * as WXF from "../lib/js/WXF/main.js";

describe("Horizontal wind samples (HFC) and wind fields at altitude (WXF)", () => {
  it("appends the new WXF enum members after every existing one", () => {
    const m = WXF.wxfModelClass;
    assert.equal(m.Other, 7);
    assert.equal(m.EmpiricalClimatology, 8);
    const l = WXF.wxfLevelKind;
    assert.deepEqual(
      [l.Surface, l.HeightAboveGround, l.PressureLevel, l.MeanSeaLevel, l.EntireAtmosphere, l.TopOfAtmosphere, l.Tropopause],
      [0, 1, 2, 3, 4, 5, 6],
    );
    assert.equal(l.HeightAboveEllipsoid, 7);
  });

  it("round-trips HFC wind samples and the wind model identity", () => {
    const h = new HFC.HFCT();
    h.LATITUDE_DEG = [-45, 30];
    h.LONGITUDE_DEG = [-85, -100];
    h.ALTITUDE_M = [250000, 400000];
    h.WIND_NORTH_M_PER_S = [40.408, -12.5];
    h.WIND_EAST_M_PER_S = [-87.56, 55.25];
    h.WIND_MODEL = "HWM14.123114 quiet+DWM07";
    const builder = new flatbuffers.Builder(1024);
    HFC.HFC.finishHFCBuffer(builder, h.pack(builder));
    const bytes = builder.asUint8Array();
    assert.equal(new TextDecoder().decode(bytes.subarray(4, 8)), "$HFC");
    const back = HFC.HFC.getRootAsHFC(new flatbuffers.ByteBuffer(bytes)).unpack();
    assert.deepEqual(back.WIND_NORTH_M_PER_S, [40.408, -12.5]);
    assert.deepEqual(back.WIND_EAST_M_PER_S, [-87.56, 55.25]);
    assert.equal(back.WIND_MODEL, "HWM14.123114 quiet+DWM07");
    assert.deepEqual(back.ALTITUDE_M, [250000, 400000]);
  });

  it("carries a wind component at geometric height from an empirical climatology", () => {
    const w = new WXF.WXFT();
    w.FIELD_ID = "hwm14/wind-u/250km/2026-09-24T12:00Z";
    w.MODEL_CLASS = WXF.wxfModelClass.EmpiricalClimatology;
    w.TIME_BASIS = WXF.wxfTimeBasis.ValidTimeOnly;
    w.VALID_TIME_MS = 1790251200000n;
    w.VARIABLE = WXF.wxfVariable.WindU;
    w.UNITS = "m/s";
    w.LEVEL_KIND = WXF.wxfLevelKind.HeightAboveEllipsoid;
    w.LEVEL_VALUE = 250000;
    const grid = new WXF.WXFGridT();
    grid.NLAT = 2;
    grid.NLON = 2;
    grid.DLAT = 90;
    grid.DLON = 180;
    w.GRID = grid;
    w.VALUES = [1, 2, 3, 4];
    const builder = new flatbuffers.Builder(1024);
    WXF.WXF.finishWXFBuffer(builder, w.pack(builder));
    const back = WXF.WXF.getRootAsWXF(new flatbuffers.ByteBuffer(builder.asUint8Array())).unpack();
    assert.equal(back.MODEL_CLASS, WXF.wxfModelClass.EmpiricalClimatology);
    assert.equal(back.LEVEL_KIND, WXF.wxfLevelKind.HeightAboveEllipsoid);
    assert.equal(back.LEVEL_VALUE, 250000);
    assert.deepEqual(back.VALUES, [1, 2, 3, 4]);
  });
});
