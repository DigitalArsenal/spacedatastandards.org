import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as STR from "../lib/js/STR/main.js";
import * as PHB from "../lib/js/PHB/main.js";
import * as CSO from "../lib/js/CSO/main.js";
import * as SKT from "../lib/js/SKT/main.js";

function identifier(bytes) {
  return new TextDecoder().decode(bytes.subarray(4, 8));
}

function measurement(bandId, regime, wavelengthNm, value, uncertainty) {
  const m = new PHB.PHBMeasurementT();
  m.BAND_ID = bandId;
  m.SPECTRAL_REGIME = regime;
  m.WAVELENGTH_EFF_NM = wavelengthNm;
  m.QUANTITY = PHB.phbQuantity.MAGNITUDE;
  m.MAGNITUDE_SYSTEM = PHB.phbMagnitudeSystem.VEGA;
  m.VALUE = value;
  m.UNCERTAINTY = uncertainty;
  m.DERIVATION = PHB.phbDerivation.MEASURED;
  return m;
}

describe("Star and sky standards (STR photometry, PHB, CSO, SKT)", () => {
  it("orders the spectral regimes from gamma rays to radio", () => {
    const r = PHB.phbSpectralRegime;
    const order = [
      r.GAMMA_RAY, r.HARD_X_RAY, r.SOFT_X_RAY, r.EXTREME_ULTRAVIOLET, r.FAR_ULTRAVIOLET,
      r.NEAR_ULTRAVIOLET, r.VISIBLE, r.NEAR_INFRARED, r.MID_INFRARED, r.FAR_INFRARED,
      r.SUBMILLIMETRE, r.MICROWAVE, r.RADIO,
    ];
    assert.deepEqual(order, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });

  it("round-trips a star with physical parameters, names and photometry", () => {
    const s = new STR.STRT();
    s.ID = "sirius";
    s.HIP_CAT_ID = 32349;
    s.STAR_EPOCH = 2016.0;
    s.RA = 101.28715533;
    s.DEC = -16.71611586;
    s.PMRA = -546.01;
    s.PMDEC = -1223.07;
    s.PARALLAX = 379.21;
    s.TEFF = 9940;
    s.LOGG = 4.33;
    s.RADIAL_VELOCITY = -5.5;
    s.SPECTRAL_TYPE = "A1 V";
    s.PROPER_NAME = "Sirius";
    s.BAYER_FLAMSTEED = "alf CMa";
    s.CONSTELLATION = "CMa";
    s.HR_CAT_ID = 2491;
    s.HD_CAT_ID = 48915;
    s.PHOTOMETRY = [
      measurement("V", PHB.phbSpectralRegime.VISIBLE, 551, -1.46, 0.01),
      measurement("Ks", PHB.phbSpectralRegime.NEAR_INFRARED, 2159, -1.39, 0.11),
    ];
    const builder = new flatbuffers.Builder(1024);
    STR.STR.finishSTRBuffer(builder, s.pack(builder));
    const bytes = builder.asUint8Array();
    assert.equal(identifier(bytes), "$STR");
    const back = STR.STR.getRootAsSTR(new flatbuffers.ByteBuffer(bytes)).unpack();
    assert.equal(back.HIP_CAT_ID, 32349);
    assert.equal(back.TEFF, 9940);
    assert.equal(back.LOGG, 4.33);
    assert.equal(back.RADIAL_VELOCITY, -5.5);
    assert.equal(back.PROPER_NAME, "Sirius");
    assert.equal(back.BAYER_FLAMSTEED, "alf CMa");
    assert.equal(back.HD_CAT_ID, 48915);
    assert.equal(back.PHOTOMETRY.length, 2);
    assert.equal(back.PHOTOMETRY[0].BAND_ID, "V");
    assert.equal(back.PHOTOMETRY[0].VALUE, -1.46);
    assert.equal(back.PHOTOMETRY[1].SPECTRAL_REGIME, PHB.phbSpectralRegime.NEAR_INFRARED);
    assert.equal(back.PHOTOMETRY[1].WAVELENGTH_EFF_NM, 2159);
    assert.ok(Number.isNaN(back.PHOTOMETRY[0].EPOCH_MJD), "unmeasured epoch reads NaN");
    assert.ok(Number.isNaN(back.METALLICITY), "unknown metallicity reads NaN, not zero");
    assert.ok(Number.isNaN(back.VARIABILITY_PERIOD), "unknown period reads NaN, not zero");
  });

  it("reads NaN, not zero, from a star written without the appended fields", () => {
    const builder = new flatbuffers.Builder(256);
    const id = builder.createString("old-row");
    STR.STR.startSTR(builder);
    STR.STR.addId(builder, id);
    STR.STR.addGmag(builder, 5.5);
    STR.STR.finishSTRBuffer(builder, STR.STR.endSTR(builder));
    const star = STR.STR.getRootAsSTR(new flatbuffers.ByteBuffer(builder.asUint8Array()));
    assert.equal(star.GMAG(), 5.5);
    assert.ok(Number.isNaN(star.TEFF()));
    assert.ok(Number.isNaN(star.RADIAL_VELOCITY()));
    assert.equal(star.photometryLength(), 0);
  });

  it("round-trips a band descriptor", () => {
    const b = new PHB.PHBT();
    b.BAND_ID = "0.5-2keV";
    b.SPECTRAL_REGIME = PHB.phbSpectralRegime.SOFT_X_RAY;
    b.WAVELENGTH_EFF_NM = 1239.841984 / 1000;
    b.WAVELENGTH_MIN_NM = 1239.841984 / 2000;
    b.WAVELENGTH_MAX_NM = 1239.841984 / 500;
    b.MAGNITUDE_SYSTEM = PHB.phbMagnitudeSystem.NOT_A_MAGNITUDE;
    b.RESPONSE_WAVELENGTH_NM = [0.62, 1.24, 2.48];
    b.RESPONSE = [0.5, 1, 0.5];
    const builder = new flatbuffers.Builder(512);
    PHB.PHB.finishPHBBuffer(builder, b.pack(builder));
    const bytes = builder.asUint8Array();
    assert.equal(identifier(bytes), "$PHB");
    const back = PHB.PHB.getRootAsPHB(new flatbuffers.ByteBuffer(bytes)).unpack();
    assert.equal(back.BAND_ID, "0.5-2keV");
    assert.equal(back.SPECTRAL_REGIME, PHB.phbSpectralRegime.SOFT_X_RAY);
    assert.equal(back.WAVELENGTH_EFF_NM, 1.239841984);
    assert.deepEqual(back.RESPONSE, [0.5, 1, 0.5]);
    assert.ok(Number.isNaN(back.ZERO_POINT_JY));
  });

  it("round-trips a transient compact source with a flux upper limit", () => {
    const c = new CSO.CSOT();
    c.ID = "grb-20260925a";
    c.SOURCE_CLASS = CSO.csoSourceClass.GAMMA_RAY_BURST;
    c.MESSENGER = CSO.csoMessenger.ELECTROMAGNETIC;
    c.RA = 210.5;
    c.DEC = 45.25;
    c.POS_ERR_MAJOR_ARCSEC = 180;
    c.POS_ERR_MINOR_ARCSEC = 180;
    c.POS_ERR_CONFIDENCE = 0.9;
    c.IS_TRANSIENT = true;
    c.EVENT_TIME = "2026-09-25T03:14:15.926Z";
    c.DURATION_T90_S = 42.5;
    c.ALERT_STATE = CSO.csoAlertStage.UPDATE;
    c.ALERT_REVISION = 2;
    const limit = new PHB.PHBMeasurementT();
    limit.BAND_ID = "r";
    limit.SPECTRAL_REGIME = PHB.phbSpectralRegime.VISIBLE;
    limit.QUANTITY = PHB.phbQuantity.MAGNITUDE;
    limit.MAGNITUDE_SYSTEM = PHB.phbMagnitudeSystem.AB;
    limit.VALUE = 21.3;
    limit.BOUND = PHB.phbBoundKind.UPPER_LIMIT;
    c.PHOTOMETRY = [limit];
    const builder = new flatbuffers.Builder(512);
    CSO.CSO.finishCSOBuffer(builder, c.pack(builder));
    const bytes = builder.asUint8Array();
    assert.equal(identifier(bytes), "$CSO");
    const back = CSO.CSO.getRootAsCSO(new flatbuffers.ByteBuffer(bytes)).unpack();
    assert.equal(back.SOURCE_CLASS, CSO.csoSourceClass.GAMMA_RAY_BURST);
    assert.equal(back.EVENT_TIME, "2026-09-25T03:14:15.926Z");
    assert.equal(back.ALERT_STATE, CSO.csoAlertStage.UPDATE);
    assert.equal(back.ALERT_REVISION, 2);
    assert.equal(back.PHOTOMETRY[0].BOUND, PHB.phbBoundKind.UPPER_LIMIT);
    assert.ok(Math.abs(back.POS_ERR_CONFIDENCE - 0.9) < 1e-6);
    assert.ok(Number.isNaN(back.REDSHIFT));
  });

  it("packs point sources into 24-byte little-endian structs", () => {
    assert.equal(SKT.SKTPoint.sizeOf(), 24);
    const toRaFixed = (deg) => Math.round((deg / 360) * 2 ** 32) >>> 0;
    const toDecFixed = (deg) => Math.round((deg / 90) * 2 ** 31);
    const sirius = new SKT.SKTPointT(
      toRaFixed(101.28715533), toDecFixed(-16.71611586),
      -546, -1223, Math.round(379.21 / 0.02), -1460,
      Math.round(9940 / 2), 0, 0,
    );
    const faint = new SKT.SKTPointT(
      toRaFixed(101.5), toDecFixed(-16.5), -32768, -32768, 0, 6123, 0, (1 << 2) | (1 << 3), 1,
    );
    const t = new SKT.SKTT();
    t.LAYER_ID = "stars/visible/catalog/J2016.0";
    t.ORDER = 3;
    t.PIXEL = 402n;
    t.PAYLOAD_KIND = SKT.sktPayloadKind.POINT_SOURCES;
    t.REFINE = SKT.sktRefinement.ADD;
    t.SPECTRAL_REGIME = PHB.phbSpectralRegime.VISIBLE;
    t.BAND_ID = "G";
    t.PLACE = SKT.sktPlaceKind.CATALOG;
    t.EPOCH = 2016.0;
    t.POINT_COUNT = 2;
    t.MAG_BRIGHTEST = -1.46;
    t.MAG_LIMIT = 6.123;
    t.COLOR_ENCODING = SKT.sktColorEncoding.EFFECTIVE_TEMPERATURE;
    t.POINTS = [sirius, faint];
    t.ROW_COLLECTION_CID = "bafyrows";
    const builder = new flatbuffers.Builder(512);
    SKT.SKT.finishSKTBuffer(builder, t.pack(builder));
    const bytes = builder.asUint8Array();
    assert.equal(identifier(bytes), "$SKT");
    const tile = SKT.SKT.getRootAsSKT(new flatbuffers.ByteBuffer(bytes));
    const back = tile.unpack();
    assert.equal(back.ORDER, 3);
    assert.equal(back.PIXEL, 402n);
    assert.equal(back.FRAME, SKT.sktCelestialFrame.ICRS);
    assert.equal(back.MAX_ORDER, 255);
    assert.equal(back.POINTS.length, 2);
    const p = back.POINTS[0];
    // Within half a fixed-point step: 0.15 mas in RA, 0.08 mas in Dec.
    assert.ok(Math.abs((p.RA_FIXED * 360) / 2 ** 32 - 101.28715533) <= 360 / 2 ** 33);
    assert.ok(Math.abs((p.DEC_FIXED * 90) / 2 ** 31 + 16.71611586) <= 90 / 2 ** 32);
    assert.equal(p.PMRA, -546);
    assert.equal(p.MAG, -1460);
    assert.equal(p.COLOR * 2, 9940);
    assert.equal(back.POINTS[1].FLAGS, 0b1100);
    assert.equal(back.POINTS[1].ROW, 1);

    // The points vector is contiguous 24-byte structs a GPU can take as-is.
    const first = tile.POINTS(0);
    const second = tile.POINTS(1);
    assert.equal(second.bb_pos - first.bb_pos, 24);
    const view = new DataView(bytes.buffer, bytes.byteOffset + first.bb_pos, 24);
    assert.equal(view.getUint32(0, true), sirius.RA_FIXED);
    assert.equal(view.getInt16(14, true), -1460);
    assert.equal(view.getUint32(20, true), 0);
  });

  it("round-trips a scaled diffuse-map tile in nested pixel order", () => {
    const t = new SKT.SKTT();
    t.LAYER_ID = "radio/408MHz/brightness-temperature";
    t.FRAME = SKT.sktCelestialFrame.GALACTIC;
    t.ORDER = 2;
    t.PIXEL = 17n;
    t.PAYLOAD_KIND = SKT.sktPayloadKind.DIFFUSE_MAP;
    t.REFINE = SKT.sktRefinement.REPLACE;
    t.SPECTRAL_REGIME = PHB.phbSpectralRegime.RADIO;
    t.WAVELENGTH_EFF_NM = 299792458e9 / 408e6;
    t.MAP_DEPTH = 1;
    t.MAP_ENCODING = SKT.sktMapEncoding.UINT8_SCALED;
    t.MAP_QUANTITY = SKT.sktMapQuantity.BRIGHTNESS_TEMPERATURE;
    t.MAP_UNITS = "K";
    t.MAP_SCALE = 0.5;
    t.MAP_OFFSET = 10;
    t.MAP_BLANK = 255;
    t.MAP_VALUES = [0, 20, 40, 255];
    t.STRETCH = SKT.sktStretchFunction.ASINH;
    t.PERCENTILE_LEVELS = [1, 50, 99];
    t.PERCENTILE_VALUES = [12, 18, 95];
    const builder = new flatbuffers.Builder(512);
    SKT.SKT.finishSKTBuffer(builder, t.pack(builder));
    const back = SKT.SKT.getRootAsSKT(new flatbuffers.ByteBuffer(builder.asUint8Array())).unpack();
    assert.equal(back.FRAME, SKT.sktCelestialFrame.GALACTIC);
    assert.equal(back.REFINE, SKT.sktRefinement.REPLACE);
    assert.equal(back.MAP_VALUES.length, 4 ** back.MAP_DEPTH);
    const physical = back.MAP_VALUES.map((raw) => (raw === back.MAP_BLANK ? NaN : raw * back.MAP_SCALE + back.MAP_OFFSET));
    assert.deepEqual(physical.slice(0, 3), [10, 20, 30]);
    assert.ok(Number.isNaN(physical[3]));
    assert.ok(Number.isNaN(back.BLACK_POINT));
    assert.deepEqual(back.PERCENTILE_VALUES, [12, 18, 95]);
  });
});
