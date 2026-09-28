import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as CQR from "../lib/js/CQR/main.js";
import * as LDM from "../lib/js/LDM/main.js";

function roundTrip(module, root, object) {
  const builder = new flatbuffers.Builder(1024);
  module[root][`finish${root}Buffer`](builder, object.pack(builder));
  const bytes = builder.asUint8Array();
  assert.equal(new TextDecoder().decode(bytes.subarray(4, 8)), `$${root}`);
  return module[root][`getRootAs${root}`](new flatbuffers.ByteBuffer(bytes)).unpack();
}

function instant(iso) {
  const t = new CQR.TIMInstantT();
  t.TIME_SYSTEM = CQR.timingStandard.UTC;
  t.EPOCH_FORMAT = CQR.timEpochRepresentation.ISO8601;
  t.ISO8601 = iso;
  return t;
}

function earthFixed() {
  const frame = new CQR.RFMCoordinateSystemT();
  frame.NAME = "ITRF";
  frame.AXIS_TYPE = CQR.rfmAxisType.BODY_FIXED;
  frame.AXIS_REFERENCE_BODY_ID = 399;
  return frame;
}

function criterion(objectClass, screening, fields) {
  const c = new CQR.CQRLaunchCriterionT();
  c.OBJECT_CLASS = objectClass;
  c.SCREENING = screening;
  Object.assign(c, fields);
  return c;
}

describe("Launch-window screening arms (CQR) and launch ID (LDM)", () => {
  it("numbers the object classes and screening kinds append-only", () => {
    const k = CQR.cqrLaunchObjectClass;
    assert.deepEqual([k.UNSPECIFIED, k.INHABITABLE, k.NON_DEBRIS, k.DEBRIS], [0, 1, 2, 3]);
    const s = CQR.cqrLaunchScreening;
    assert.deepEqual([s.UNSPECIFIED, s.SPHERICAL, s.ELLIPSOIDAL, s.PROBABILITY], [0, 1, 2, 3]);
  });

  it("round-trips a launch request with one criterion per class", () => {
    const block = new CQR.ephemerisDataBlockT();
    block.CENTER_NAME = "EARTH";
    block.START_TIME = "2026-09-28T12:48:59Z";
    block.STEP_SIZE = 10;
    block.EPHEMERIS_DATA = [6528.137, 0, 0, 0, 7.8, 0, 6528.137, 78, 0, 0, 7.8, 0];
    const oem = new CQR.OEMT();
    oem.EPHEMERIS_DATA_BLOCK = [block];

    const segment = new CQR.CQRLaunchSegmentT();
    segment.SEGMENT_ID = "stage-2";
    segment.TRAJECTORY = oem;
    segment.RADIUS_M = 3;
    segment.RADAR_CROSS_SECTION_M2 = 12;
    segment.HAS_RADAR_CROSS_SECTION_M2 = true;

    const source = new CQR.CQRObjectSourceT();
    source.OBJECT_ID = "25544";
    const object = new CQR.CQRLaunchObjectT();
    object.SOURCE = source;
    object.OBJECT_CLASS = CQR.cqrLaunchObjectClass.INHABITABLE;

    const request = new CQR.CQRLaunchRequestT();
    request.MISSION_NAME = "demo";
    request.NOMINAL_LIFTOFF = instant("2026-09-28T12:48:59Z");
    request.WINDOW_OPEN = instant("2026-09-28T12:15:00Z");
    request.WINDOW_CLOSE = instant("2026-09-28T13:30:00Z");
    request.SEGMENTS = [segment];
    request.OBJECTS = [object];
    request.CRITERIA = [
      criterion(CQR.cqrLaunchObjectClass.INHABITABLE, CQR.cqrLaunchScreening.ELLIPSOIDAL, { RADIAL_M: 50000, IN_TRACK_M: 200000, CROSS_TRACK_M: 50000 }),
      criterion(CQR.cqrLaunchObjectClass.NON_DEBRIS, CQR.cqrLaunchScreening.SPHERICAL, { RADIUS_M: 25000 }),
      criterion(CQR.cqrLaunchObjectClass.DEBRIS, CQR.cqrLaunchScreening.SPHERICAL, { RADIUS_M: 2500 }),
    ];
    request.EVALUATION_FRAME = earthFixed();

    const message = new CQR.CQRT();
    message.LAUNCH_REQUEST = request;
    const back = roundTrip(CQR, "CQR", message).LAUNCH_REQUEST;
    assert.equal(back.LIFTOFF_STEP_SECONDS, 1);
    assert.equal(back.MINIMUM_ALTITUDE_M, 150000);
    assert.equal(back.SCREEN_SECONDS_AFTER_LIFTOFF, 10800);
    assert.equal(back.REPORT_RATIO, 1);
    assert.equal(back.CRITERIA[0].IN_TRACK_M, 200000);
    assert.equal(back.CRITERIA[2].RADIUS_M, 2500);
    assert.equal(back.SEGMENTS[0].TRAJECTORY.EPHEMERIS_DATA_BLOCK[0].STEP_SIZE, 10);
    assert.equal(back.SEGMENTS[0].RADAR_CROSS_SECTION_M2, 12);
    assert.equal(back.OBJECTS[0].OBJECT_CLASS, CQR.cqrLaunchObjectClass.INHABITABLE);
    assert.equal(back.OBJECTS[0].RENDEZVOUS_COORDINATED, false);
    assert.equal(back.EVALUATION_FRAME.AXIS_TYPE, CQR.rfmAxisType.BODY_FIXED);
  });

  it("round-trips a launch result with a closure and its approach", () => {
    const closure = new CQR.CQRLaunchClosureT();
    closure.START = instant("2026-09-28T12:20:10Z");
    closure.END = instant("2026-09-28T12:20:31Z");
    closure.OBJECT_IDS = ["25544"];
    closure.SEGMENT_IDS = ["stage-2"];

    const offset = new CQR.FRMVector3T();
    offset.X = 1200;
    offset.Y = -48000;
    offset.Z = 900;
    const approach = new CQR.CQRLaunchApproachT();
    approach.SEGMENT_ID = "stage-2";
    approach.OBJECT_ID = "25544";
    approach.OBJECT_CLASS = CQR.cqrLaunchObjectClass.INHABITABLE;
    approach.LIFTOFF = instant("2026-09-28T12:20:20Z");
    approach.TCA = instant("2026-09-28T12:29:41.250Z");
    approach.MISS_DISTANCE_M = 48030;
    approach.RELATIVE_POSITION_RTN = offset;
    approach.CRITERION_RATIO = 0.24;
    approach.VIOLATES = true;

    const result = new CQR.CQRLaunchResultT();
    result.LIFTOFF_STEP_SECONDS = 1;
    result.LIFTOFF_TIMES_EVALUATED = 4501n;
    result.CLOSURES = [closure];
    result.APPROACHES = [approach];

    const message = new CQR.CQRT();
    message.LAUNCH_RESULT = result;
    const back = roundTrip(CQR, "CQR", message).LAUNCH_RESULT;
    assert.equal(back.LIFTOFF_TIMES_EVALUATED, 4501n);
    assert.equal(back.CLOSURES[0].END.ISO8601, "2026-09-28T12:20:31Z");
    assert.deepEqual(back.CLOSURES[0].OBJECT_IDS, ["25544"]);
    assert.equal(back.APPROACHES[0].VIOLATES, true);
    assert.equal(back.APPROACHES[0].RELATIVE_POSITION_RTN.Y, -48000);
    assert.equal(back.APPROACHES[0].CRITERION_RATIO, 0.24);
  });

  it("carries a stable launch ID on the launch data message", () => {
    const ldm = new LDM.LDMT();
    ldm.ID = "f059f2e9-0b35-4ae8-9d0b-1f5cc1f0d3a1";
    ldm.NET = "2026-09-28T12:48:59Z";
    ldm.EARLIEST_LAUNCH_TIMES = ["2026-09-28T12:15:00Z"];
    ldm.LATEST_LAUNCH_TIMES = ["2026-09-28T13:30:00Z"];
    const back = roundTrip(LDM, "LDM", ldm);
    assert.equal(back.ID, "f059f2e9-0b35-4ae8-9d0b-1f5cc1f0d3a1");
    assert.deepEqual(back.LATEST_LAUNCH_TIMES, ["2026-09-28T13:30:00Z"]);
  });
});
