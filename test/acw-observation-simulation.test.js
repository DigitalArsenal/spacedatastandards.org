import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as ACW from "../lib/js/ACW/main.js";

function roundTrip(object) {
  const builder = new flatbuffers.Builder(1024);
  ACW.ACW.finishACWBuffer(builder, object.pack(builder));
  const bytes = builder.asUint8Array();
  assert.equal(new TextDecoder().decode(bytes.subarray(4, 8)), "$ACW");
  return ACW.ACW.getRootAsACW(new flatbuffers.ByteBuffer(bytes)).unpack();
}

function sample(jd, p, v) {
  const s = new ACW.ACWStateSampleT();
  s.JULIAN_DATE_TT = jd;
  [s.POSITION_X_M, s.POSITION_Y_M, s.POSITION_Z_M] = p;
  if (v) [s.VELOCITY_X_MPS, s.VELOCITY_Y_MPS, s.VELOCITY_Z_MPS] = v;
  return s;
}

describe("ACW observation simulation (SIMULATE_OBSERVATIONS)", () => {
  it("numbers operations and phenomenologies append-only", () => {
    assert.equal(ACW.acwOperationCode.COMPUTE_ACCESS_WINDOWS, 1);
    assert.equal(ACW.acwOperationCode.SIMULATE_OBSERVATIONS, 2);
    const p = ACW.acwSensorPhenomenology;
    assert.deepEqual([p.RADAR, p.OPTICAL, p.PASSIVE_RF, p.LASER_RANGING], [1, 2, 3, 4]);
  });

  it("round-trips targets, sensors with MEM error models, EOP and the seed", () => {
    const station = new ACW.ACWGroundStationT();
    station.STATION_ID = "radar-site";
    station.LATITUDE_RAD = 0.5;
    station.LONGITUDE_RAD = -1.2;
    station.ALTITUDE_M = 100;

    const signature = new ACW.ACWTargetSignatureT();
    signature.RCS_M2 = 2.5;
    signature.DIAMETER_M = 1.8;
    signature.GEOMETRIC_ALBEDO = 0.175;
    const target = new ACW.ACWTargetT();
    target.TARGET_ID = "sat-1";
    target.NORAD_CAT_ID = 25544;
    target.OBJECT_ID = "1998-067A";
    target.STATES = [sample(2461313.5, [6778137, 0, 0], [0, 7668.6, 0])];
    target.SIGNATURE = signature;

    const range = new ACW.MEMErrorModelT();
    range.MODEL_ID = "radar-range";
    range.MEASUREMENT_TYPE = ACW.memMeasurementType.RANGE;
    range.NOISE_SIGMA = 15;
    range.BIAS = 3;
    const sensor = new ACW.ACWSensorT();
    sensor.SENSOR_ID = "radar-1";
    sensor.HOST_ID = "radar-site";
    sensor.PHENOMENOLOGY = ACW.acwSensorPhenomenology.RADAR;
    sensor.ERROR_MODELS = [range];
    sensor.OBSERVATION_INTERVAL_S = 10;
    sensor.REFERENCE_SNR_DB = 20;
    sensor.REFERENCE_RANGE_M = 1e6;
    sensor.DETECTION_THRESHOLD_DB = 13;

    const eop = new ACW.EOPT();
    eop.MJD = 61313;
    eop.UT1_MINUS_UTC_SECONDS_HP = 0.0415;

    const window = new ACW.ACWAccessWindowT();
    window.STATION_ID = "radar-site";
    window.START_JULIAN_DATE_TT = 2461313.5;
    window.END_JULIAN_DATE_TT = 2461313.507;
    const access = new ACW.ACWSensorAccessT();
    access.SENSOR_ID = "radar-1";
    access.TARGET_ID = "sat-1";
    access.WINDOWS = [window];

    const request = new ACW.ACWRequestT();
    request.OPERATION = ACW.acwOperationCode.SIMULATE_OBSERVATIONS;
    request.ACCESS = [access];
    request.GROUND_STATIONS = [station];
    request.TARGETS = [target];
    request.SENSORS = [sensor];
    request.EARTH_ORIENTATION = [eop];
    request.RANDOM_SEED = 42n;
    const message = new ACW.ACWT();
    message.REQUEST = request;

    const back = roundTrip(message).REQUEST;
    assert.equal(back.OPERATION, ACW.acwOperationCode.SIMULATE_OBSERVATIONS);
    assert.equal(back.TARGETS[0].STATES[0].VELOCITY_Y_MPS, 7668.6);
    assert.equal(back.TARGETS[0].SIGNATURE.RCS_M2, 2.5);
    assert.equal(back.SENSORS[0].ERROR_MODELS[0].MEASUREMENT_TYPE, ACW.memMeasurementType.RANGE);
    assert.equal(back.SENSORS[0].ERROR_MODELS[0].NOISE_SIGMA, 15);
    assert.equal(back.SENSORS[0].MAX_SIMULTANEOUS_TRACKS, 1, "one track at a time by default");
    assert.equal(back.SENSORS[0].REFERENCE_RCS_M2, 1, "1 m^2 reference target by default");
    assert.equal(back.EARTH_ORIENTATION[0].UT1_MINUS_UTC_SECONDS_HP, 0.0415);
    assert.equal(back.RANDOM_SEED, 42n);
    assert.equal(back.ACCESS[0].TARGET_ID, "sat-1");
    assert.equal(back.ACCESS[0].WINDOWS[0].END_JULIAN_DATE_TT, 2461313.507);
  });

  it("round-trips result tracks", () => {
    const track = new ACW.ACWTrackT();
    track.SENSOR_ID = "radar-1";
    track.TARGET_ID = "sat-1";
    track.START_JULIAN_DATE_TT = 2461313.5;
    track.END_JULIAN_DATE_TT = 2461313.505;
    track.SCHEDULED_COUNT = 43;
    track.DETECTED_COUNT = 40;
    track.LOSS_REASON = "SNR";
    const result = new ACW.ACWResultT();
    result.TRACKS = [track];
    result.OBSERVATION_COUNT = 41;
    const message = new ACW.ACWT();
    message.RESULT = result;
    const back = roundTrip(message).RESULT;
    assert.equal(back.TRACKS[0].DETECTED_COUNT, 40);
    assert.equal(back.TRACKS[0].LOSS_REASON, "SNR");
    assert.equal(back.OBSERVATION_COUNT, 41);
  });

  it("reads an access-window sample without velocity as zero velocity", () => {
    const message = new ACW.ACWT();
    message.REQUEST = new ACW.ACWRequestT();
    message.REQUEST.STATES = [sample(2461313.5, [7000000, 0, 0])];
    const back = roundTrip(message).REQUEST.STATES[0];
    assert.equal(back.POSITION_X_M, 7000000);
    assert.equal(back.VELOCITY_X_MPS, 0);
  });
});
