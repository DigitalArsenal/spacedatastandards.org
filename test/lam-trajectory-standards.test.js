import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as LAM from "../lib/js/LAM/main.js";

function roundTrip(object) {
  const builder = new flatbuffers.Builder(1024);
  LAM.LAM.finishLAMBuffer(builder, object.pack(builder));
  const bytes = builder.asUint8Array();
  assert.equal(new TextDecoder().decode(bytes.subarray(4, 8)), "$LAM");
  return LAM.LAM.getRootAsLAM(new flatbuffers.ByteBuffer(bytes)).unpack();
}

describe("Launch trajectory tracking and projected insertion (LAM)", () => {
  it("numbers pass directions, trajectory sources and speed references append-only", () => {
    const p = LAM.lamPassDirection;
    assert.deepEqual([p.UNSPECIFIED, p.NORTHBOUND, p.SOUTHBOUND], [0, 1, 2]);
    const s = LAM.lamTrajectorySource;
    assert.deepEqual([s.UNSPECIFIED, s.PROJECTED, s.TELEMETRY, s.TRACKING, s.SIMULATED], [0, 1, 2, 3, 4]);
    const r = LAM.lamSpeedReference;
    assert.deepEqual([r.UNSPECIFIED, r.EARTH_RELATIVE, r.INERTIAL], [0, 1, 2]);
  });

  it("round-trips telemetry with a target orbit, instantaneous apsides and an insertion orbit", () => {
    const block = new LAM.ephemerisDataBlockT();
    block.CENTER_NAME = "EARTH";
    block.START_TIME = "2026-09-27T04:10:50Z";
    block.STEP_SIZE = 60;
    block.EPHEMERIS_DATA = [6793.9, 0, 0, 0, 4.78, 5.97, 6793.9, 286.8, 358.2, -0.2, 4.78, 5.96];
    const plane = new LAM.OEMT();
    plane.EPHEMERIS_DATA_BLOCK = [block];

    const target = new LAM.lamTargetOrbitT();
    target.INCLINATION_DEG = 51.64;
    target.PASS_DIRECTION = LAM.lamPassDirection.NORTHBOUND;
    target.PERIAPSIS_ALTITUDE_M = 200000;
    target.APOAPSIS_ALTITUDE_M = 360000;
    target.INSERTION_TIME_FROM_LAUNCH_S = 538;
    target.PLANE_REFERENCE = plane;

    const insertion = new LAM.lamInsertionOrbitT();
    insertion.EPOCH = "2018-12-05T18:25:14Z";
    insertion.TIME_FROM_LAUNCH_S = 538;
    insertion.REF_FRAME = "TEME";
    insertion.SEMI_MAJOR_AXIS_M = 6658400;
    insertion.ECCENTRICITY = 0.0122;
    insertion.INCLINATION_DEG = 51.633;
    insertion.RAAN_DEG = 244.26;
    insertion.ARGUMENT_OF_PERIAPSIS_DEG = 49.8;
    insertion.ARGUMENT_OF_LATITUDE_DEG = 49.81;
    insertion.PERIAPSIS_ALTITUDE_M = 199300;
    insertion.APOAPSIS_ALTITUDE_M = 363000;
    insertion.RAAN_UNCERTAINTY_DEG = 0.4;
    insertion.ARGUMENT_OF_LATITUDE_UNCERTAINTY_DEG = 0.7;
    insertion.PERIAPSIS_ALTITUDE_UNCERTAINTY_M = 2000;
    insertion.APOAPSIS_ALTITUDE_UNCERTAINTY_M = 35000;

    const lam = new LAM.LAMT();
    lam.MISSION_NAME = "demo";
    lam.LAUNCH_EPOCH = "2018-12-05T18:16:16Z";
    lam.TIME_FROM_LAUNCH_S = [0, 120, 538];
    lam.ALTITUDE_M = [0, 60000, 207000];
    lam.SPEED_M_PER_S = [0, 1700, 7538.6];
    lam.TARGET_ORBIT = target;
    lam.TRAJECTORY_SOURCE = LAM.lamTrajectorySource.TELEMETRY;
    lam.SPEED_REFERENCE = LAM.lamSpeedReference.EARTH_RELATIVE;
    lam.INSERTION = insertion;
    lam.INSTANTANEOUS_PERIAPSIS_ALTITUDE_M = [-6378137, -6300000, 199300];
    lam.INSTANTANEOUS_APOAPSIS_ALTITUDE_M = [0, 100000, 363000];
    lam.IN_PLANE_LIFTOFF_EPOCHS = ["2018-12-05T18:16:16Z"];

    const back = roundTrip(lam);
    assert.equal(back.TRAJECTORY_SOURCE, LAM.lamTrajectorySource.TELEMETRY);
    assert.equal(back.SPEED_REFERENCE, LAM.lamSpeedReference.EARTH_RELATIVE);
    assert.equal(back.TARGET_ORBIT.PASS_DIRECTION, LAM.lamPassDirection.NORTHBOUND);
    assert.equal(back.TARGET_ORBIT.INSERTION_TIME_FROM_LAUNCH_S, 538);
    assert.deepEqual(back.TARGET_ORBIT.PLANE_REFERENCE.EPHEMERIS_DATA_BLOCK[0].EPHEMERIS_DATA, block.EPHEMERIS_DATA);
    assert.equal(back.INSERTION.REF_FRAME, "TEME");
    assert.equal(back.INSERTION.RAAN_DEG, 244.26);
    assert.equal(back.INSERTION.APOAPSIS_ALTITUDE_UNCERTAINTY_M, 35000);
    assert.deepEqual(back.INSTANTANEOUS_PERIAPSIS_ALTITUDE_M, lam.INSTANTANEOUS_PERIAPSIS_ALTITUDE_M);
    assert.deepEqual(back.INSTANTANEOUS_APOAPSIS_ALTITUDE_M, lam.INSTANTANEOUS_APOAPSIS_ALTITUDE_M);
    assert.deepEqual(back.IN_PLANE_LIFTOFF_EPOCHS, lam.IN_PLANE_LIFTOFF_EPOCHS);
  });
});
