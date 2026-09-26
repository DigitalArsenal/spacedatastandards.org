import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as SKQ from "../lib/js/SKQ/main.js";
import * as SKR from "../lib/js/SKR/main.js";

function roundTrip(module, root, object) {
  const builder = new flatbuffers.Builder(1024);
  module[root][`finish${root}Buffer`](builder, object.pack(builder));
  const bytes = builder.asUint8Array();
  assert.equal(new TextDecoder().decode(bytes.subarray(4, 8)), `$${root}`);
  return module[root][`getRootAs${root}`](new flatbuffers.ByteBuffer(bytes)).unpack();
}

describe("Sky query standards (SKQ, SKR)", () => {
  it("numbers the query kinds append-only", () => {
    const k = SKQ.skqQueryKind;
    assert.deepEqual(
      [k.APPARENT_PLACES, k.SYNTHETIC_PHOTOMETRY, k.CONE, k.FIELD_OF_VIEW, k.IDENTIFY, k.OCCULTATION, k.BRIGHT_STAR_EXCLUSION, k.INGEST],
      [1, 2, 3, 4, 5, 6, 7, 8],
    );
  });

  it("round-trips an identification query from a spacecraft", () => {
    const q = new SKQ.SKQT();
    q.QUERY_ID = "tracker-frame-17";
    q.QUERY_KIND = SKQ.skqQueryKind.IDENTIFY;
    q.EPOCH_JD_TT = 2461309;
    q.EPOCH_JD_TT_FRACTION = 0.125;
    q.OBSERVER_POSITION_M = [6778137, 0, 0];
    q.OBSERVER_VELOCITY_M_PER_S = [0, 7668.6, 0];
    q.BAND_ID = "G";
    q.MAG_LIMIT = 6.5;
    q.TOLERANCE_ARCSEC = 20;
    q.MAX_FIELD_DEG = 14;
    q.DETECTIONS = [new SKQ.SKQDetectionT(0.01, -0.02, 1, 900, 0), new SKQ.SKQDetectionT(-0.05, 0.03, 1, 400, 0)];
    const back = roundTrip(SKQ, "SKQ", q);
    assert.equal(back.QUERY_KIND, SKQ.skqQueryKind.IDENTIFY);
    assert.equal(back.EPOCH_JD_TT + back.EPOCH_JD_TT_FRACTION, 2461309.125);
    assert.deepEqual(back.OBSERVER_VELOCITY_M_PER_S, [0, 7668.6, 0]);
    assert.equal(back.DETECTIONS.length, 2);
    assert.equal(back.DETECTIONS[0].BRIGHTNESS, 900);
    assert.equal(back.PLACE, SKQ.sktPlaceKind.APPARENT);
    assert.equal(back.TILE_ORDER, 3);
    assert.ok(Number.isNaN(back.RADIUS_DEG), "a field the kind does not use reads NaN");
  });

  it("round-trips occultation tracks and exclusion pointings as packed structs", () => {
    assert.equal(SKQ.SKQDetection.sizeOf(), 32);
    assert.equal(SKQ.SKQTrack.sizeOf(), 48);
    assert.equal(SKQ.SKQPointing.sizeOf(), 24);
    const q = new SKQ.SKQT();
    q.QUERY_KIND = SKQ.skqQueryKind.OCCULTATION;
    q.TRACKS = [new SKQ.SKQTrackT(10, 20, 10.5, 20.1, 0.25, 7, 0)];
    q.POINTINGS = [new SKQ.SKQPointingT(83.8, -5.4, 3, 0)];
    q.EXCLUSION_RADIUS_DEG = 2;
    q.MAG_THRESHOLD = 3;
    const back = roundTrip(SKQ, "SKQ", q);
    assert.equal(back.TRACKS[0].BODY_ID, 7);
    assert.equal(back.TRACKS[0].END_DEC_DEG, 20.1);
    assert.equal(back.POINTINGS[0].POINTING_ID, 3);
    assert.equal(back.MAG_THRESHOLD, 3);
  });

  it("round-trips a result with hits, photometry and an attitude", () => {
    assert.equal(SKR.SKRHit.sizeOf(), 56);
    assert.equal(SKR.SKROccultation.sizeOf(), 32);
    assert.equal(SKR.SKRExclusion.sizeOf(), 32);
    const r = new SKR.SKRT();
    r.QUERY_ID = "q";
    r.QUERY_KIND = SKQ.skqQueryKind.CONE;
    r.ROW_COUNT = 2;
    r.MATCHED_COUNT = 1;
    r.HITS = [new SKR.SKRHitT(1, 0, 101.28, -16.71, 0.5, 0.3, -0.4, -1.46, 0)];
    r.BAND_IDS = ["V", "K"];
    r.MAGNITUDES = [-1.46, -1.39, NaN, 5.2];
    r.DERIVATIONS = [1, 1, 0, 3];
    r.ROTATION = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    r.QUATERNION = [1, 0, 0, 0];
    r.MATCHED_ROWS = [0, 4294967295];
    r.EXCLUSIONS = [new SKR.SKRExclusionT(3, 1, 0, 0, 1.25, 0.5, 0)];
    const back = roundTrip(SKR, "SKR", r);
    assert.equal(back.STATUS, SKR.skrStatus.OK);
    assert.equal(back.HITS[0].ROW, 1);
    assert.ok(Math.abs(back.HITS[0].MAG + 1.46) < 1e-6);
    assert.equal(back.MAGNITUDES.length, 4);
    assert.ok(Number.isNaN(back.MAGNITUDES[2]));
    assert.deepEqual(back.DERIVATIONS, [1, 1, 0, 3]);
    assert.deepEqual(back.MATCHED_ROWS, [0, 4294967295]);
    assert.equal(back.EXCLUSIONS[0].BRIGHTEST_SEPARATION_DEG, 1.25);
    assert.ok(Number.isNaN(back.RESIDUAL_RMS_ARCSEC));
  });
});
