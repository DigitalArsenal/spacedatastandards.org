import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as ACM from "../lib/js/ACM/main.js";
import * as APM from "../lib/js/APM/main.js";
import * as CDM from "../lib/js/CDM/main.js";
import * as NCD from "../lib/js/NCD/main.js";
import * as OEM from "../lib/js/OEM/main.js";
import * as OMM from "../lib/js/OMM/main.js";
import * as OPM from "../lib/js/OPM/main.js";
import * as RDM from "../lib/js/RDM/main.js";

// Size-prefixed round trip through the generated object API: `family` is the module (OPM),
// `table` the root table name in it (OPM), `identifier` the file identifier ($OPM).
function roundTrip(family, table, value) {
  const builder = new flatbuffers.Builder(1024);
  family[table][`finishSizePrefixed${table}Buffer`](builder, value.pack(builder));
  const bytes = builder.asUint8Array().slice();
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), `$${table}`);
  return family[table][`getSizePrefixedRootAs${table}`](new flatbuffers.ByteBuffer(bytes)).unpack();
}

describe("CCSDS navigation data messages as SDS records (502.0-B-3, 504.0-B-2, 508.0-B-1, 508.1-B-1)", () => {
  it("names every CCSDS message and syntax the NCD can describe, in the order members were appended", () => {
    const f = NCD.ncdContainerFormat;
    const names = ["OEM", "AEM", "TDM", "OMM", "OPM", "OCM", "CDM", "APM", "ACM", "RDM"];
    const expected = [7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
    names.forEach((message, i) => {
      assert.equal(f[`CCSDS_${message}_KVN`], expected[i], `CCSDS_${message}_KVN`);
      assert.equal(f[`CCSDS_${message}_XML`], expected[i] + 1, `CCSDS_${message}_XML`);
    });
  });

  it("OPM carries the Keplerian elements' reference frame, the covariance, every maneuver and the user-defined parameters", () => {
    const o = new OPM.OPMT();
    o.COMMENT = "an OPM";
    o.MESSAGE_ID = "OPM-1";
    o.REF_FRAME_EPOCH = "2026-10-11T12:00:00";
    o.COV_REF_FRAME = "RTN";
    o.COVARIANCE = Array.from({ length: 21 }, (_, i) => (i + 1) / 100);
    o.MANEUVERS = [0, 1].map((k) => Object.assign(new OPM.OPMManeuverT(), {
      COMMENT: `maneuver ${k}`, MAN_EPOCH_IGNITION: `2026-10-11T1${k}:30:00`, MAN_DURATION: 132.6 * k, MAN_DELTA_MASS: -18.4 * k,
      MAN_REF_FRAME: "RTN", MAN_DV_1: -0.0233, MAN_DV_2: 0.0021, MAN_DV_3: 0.0004 * k,
    }));
    o.USER_DEFINED_PARAMETERS = [Object.assign(new OPM.OPMUserDefinedParameterT(), { PARAM_NAME: "EARTH_MODEL", PARAM_VALUE: "WGS-84" })];
    const r = roundTrip(OPM, "OPM", o);
    assert.equal(r.MESSAGE_ID, "OPM-1");
    assert.equal(r.COV_REF_FRAME, "RTN");
    assert.deepEqual(r.COVARIANCE, o.COVARIANCE);
    assert.equal(r.MANEUVERS.length, 2);
    assert.deepEqual(r.MANEUVERS.map((m) => m.COMMENT), ["maneuver 0", "maneuver 1"]);
    assert.equal(r.MANEUVERS[1].MAN_DURATION, 132.6);
    assert.equal(r.MANEUVERS[0].MAN_DURATION, 0, "a stated zero duration is a zero");
    assert.deepEqual(r.USER_DEFINED_PARAMETERS.map((p) => [p.PARAM_NAME, p.PARAM_VALUE]), [["EARTH_MODEL", "WGS-84"]]);
  });

  it("OMM and OEM carry the header's classification, message id and comments, a covariance matrix's own frame and comment", () => {
    const omm = new OMM.OMMT();
    omm.CLASSIFICATION = "UNCLASSIFIED";
    omm.MESSAGE_ID = "OMM-1";
    omm.USER_DEFINED_PARAMETERS = [Object.assign(new OMM.OMMUserDefinedParameterT(), { PARAM_NAME: "CONSOLE_POC", PARAM_VALUE: "OPS" })];
    const r = roundTrip(OMM, "OMM", omm);
    assert.equal(r.CLASSIFICATION, "UNCLASSIFIED");
    assert.equal(r.MESSAGE_ID, "OMM-1");
    assert.equal(r.USER_DEFINED_PARAMETERS[0].PARAM_VALUE, "OPS");

    const oem = new OEM.OEMT();
    oem.COMMENT = "header";
    oem.MESSAGE_ID = "OEM-1";
    const line = new OEM.covarianceMatrixLineT();
    line.COMMENT = "second matrix";
    line.COV_REFERENCE_FRAME = Object.assign(new OEM.RFMT(), { NAME: "RTN" });
    const block = new OEM.ephemerisDataBlockT();
    block.COVARIANCE_MATRIX_LINES = [line];
    oem.EPHEMERIS_DATA_BLOCK = [block];
    const e = roundTrip(OEM, "OEM", oem);
    assert.equal(e.MESSAGE_ID, "OEM-1");
    assert.equal(e.EPHEMERIS_DATA_BLOCK[0].COVARIANCE_MATRIX_LINES[0].COMMENT, "second matrix");
    assert.equal(e.EPHEMERIS_DATA_BLOCK[0].COVARIANCE_MATRIX_LINES[0].COV_REFERENCE_FRAME.NAME, "RTN");
  });

  it("APM carries its states by kind, and a derivative nobody stated is NaN while a stated zero is a zero", () => {
    assert.ok(Number.isNaN(new APM.APMQuaternionStateT().Q1_DOT), "Q1_DOT defaults to not-stated");
    const a = new APM.APMT();
    a.CENTER_NAME = "EARTH";
    a.TIME_SYSTEM = "UTC";
    const stated = Object.assign(new APM.APMQuaternionStateT(), { REF_FRAME_A: "J2000", REF_FRAME_B: "SC_BODY_1", Q1: 0.1, Q2: 0.2, Q3: 0.3, QC: 0.9, Q1_DOT: 0, Q3_DOT: -2e-5 });
    const bare = Object.assign(new APM.APMQuaternionStateT(), { REF_FRAME_A: "J2000", REF_FRAME_B: "SC_BODY_1", Q1: 0.1, Q2: 0.2, Q3: 0.3, QC: 0.9 });
    a.QUATERNION_STATES = [stated, bare];
    a.SPIN_STATES = [Object.assign(new APM.APMSpinStateT(), { SPIN_ALPHA: 1, SPIN_DELTA: 2, SPIN_ANGLE: 3, SPIN_ANGLE_VEL: 4, NUTATION: 0.5 })];
    a.INERTIAS = [Object.assign(new APM.APMInertiaT(), { INERTIA_REF_FRAME: "SC_BODY_1", IXX: 1, IYY: 2, IZZ: 3, IXY: -0.5 })];
    a.MANEUVERS = [Object.assign(new APM.APMManeuverT(), { MAN_EPOCH_START: "2026-10-11T00:00:00", MAN_DURATION: 4, MAN_REF_FRAME: "SC_BODY_1", MAN_TOR_X: 1, MAN_TOR_Y: 0, MAN_TOR_Z: -1 })];
    const r = roundTrip(APM, "APM", a);
    assert.equal(r.QUATERNION_STATES[0].Q1_DOT, 0);
    assert.equal(r.QUATERNION_STATES[0].Q3_DOT, -2e-5);
    assert.ok(Number.isNaN(r.QUATERNION_STATES[0].Q2_DOT));
    assert.ok(Number.isNaN(r.QUATERNION_STATES[1].Q1_DOT));
    assert.equal(r.SPIN_STATES[0].NUTATION, 0.5);
    assert.ok(Number.isNaN(r.SPIN_STATES[0].NUTATION_PER));
    assert.equal(r.INERTIAS[0].IXY, -0.5);
    assert.ok(Number.isNaN(r.MANEUVERS[0].MAN_DELTA_MASS));
  });

  it("ACM carries attitude, covariance and maneuver blocks, the determination with its sensors, and a maneuver ends by time or by duration", () => {
    const a = new ACM.ACMT();
    a.ATT_BLOCKS = [Object.assign(new ACM.ACMAttitudeBlockT(), { ATT_ID: "ATT-1", NUMBER_STATES: 7, ATT_TYPE: "QUATERNION/RATE", TIMES: ["0.0", "60.0"], VALUES: Array.from({ length: 14 }, (_, i) => i / 10) })];
    a.COV_BLOCKS = [Object.assign(new ACM.ACMCovarianceBlockT(), { COV_ID: "COV-1", COV_REF_FRAME: "SC_BODY_1", COV_TYPE: "ANGLE", TIMES: ["0.0"], VALUES: [1, 0, 2, 0, 0, 3] })];
    a.MAN_BLOCKS = [
      Object.assign(new ACM.ACMManeuverBlockT(), { MAN_ID: "M1", MAN_BEGIN_TIME: 10, MAN_DURATION: 450, TARGET_MOMENTUM: [1.3, -16.4, -11.35] }),
      Object.assign(new ACM.ACMManeuverBlockT(), { MAN_ID: "M2", MAN_BEGIN_TIME: 10, MAN_END_TIME: 460 }),
    ];
    a.DETERMINATION = Object.assign(new ACM.ACMDeterminationT(), { AD_METHOD: "EKF", SENSORS: [
      Object.assign(new ACM.ACMSensorT(), { SENSOR_NUMBER: 1, SENSOR_USED: "AST", NUMBER_SENSOR_NOISE_COVARIANCE: 3, SENSOR_NOISE_STDDEV: [0.003, 0.003, 0.01], SENSOR_FREQUENCY: 5 }),
      Object.assign(new ACM.ACMSensorT(), { SENSOR_NUMBER: 2, SENSOR_USED: "DSS" }),
    ] });
    const r = roundTrip(ACM, "ACM", a);
    assert.deepEqual(r.ATT_BLOCKS[0].TIMES, ["0.0", "60.0"]);
    assert.equal(r.ATT_BLOCKS[0].VALUES.length, 14);
    assert.deepEqual(r.COV_BLOCKS[0].VALUES, [1, 0, 2, 0, 0, 3]);
    assert.equal(r.MAN_BLOCKS[0].MAN_DURATION, 450);
    assert.ok(Number.isNaN(r.MAN_BLOCKS[0].MAN_END_TIME), "no end time stated");
    assert.equal(r.MAN_BLOCKS[1].MAN_END_TIME, 460);
    assert.ok(Number.isNaN(r.MAN_BLOCKS[1].MAN_DURATION), "no duration stated");
    assert.deepEqual(r.DETERMINATION.SENSORS[0].SENSOR_NOISE_STDDEV, [0.003, 0.003, 0.01]);
    assert.ok(Number.isNaN(r.DETERMINATION.SENSORS[1].SENSOR_FREQUENCY));
  });

  it("RDM carries its metadata, the prediction with its probabilities, the covariance and the OD parameters; CDM says whether an object can maneuver", () => {
    assert.deepEqual([0, 1, 2, 3].map((v) => RDM.rdmControlledReentry[v]), ["UNSPECIFIED", "YES", "NO", "UNKNOWN"]);
    const d = new RDM.RDMT();
    d.MESSAGE_ID = "RDM-1";
    d.CONTROLLED_REENTRY = RDM.rdmControlledReentry.NO;
    d.EPOCH_TZERO = "2026-04-22T09:00:00";
    d.ORBIT_LIFETIME = 5.5;
    d.PROBABILITY_OF_IMPACT = 0;
    d.PROBABILITY_OF_BURN_UP = 1;
    d.COV_REF_FRAME = "RTN";
    d.COVARIANCE = Array.from({ length: 21 }, (_, i) => i);
    d.OBS_USED = 4;
    d.USER_DEFINED_PARAMETERS = [Object.assign(new RDM.RDMUserDefinedParameterT(), { PARAM_NAME: "X", PARAM_VALUE: "1" })];
    const r = roundTrip(RDM, "RDM", d);
    assert.equal(r.CONTROLLED_REENTRY, RDM.rdmControlledReentry.NO);
    assert.equal(r.PROBABILITY_OF_IMPACT, 0, "a stated zero probability is stored");
    assert.ok(Number.isNaN(r.PROBABILITY_OF_CASUALTY), "an unstated one is NaN");
    assert.equal(r.OBS_USED, 4);
    assert.equal(r.COVARIANCE.length, 21);

    assert.deepEqual([0, 1, 2, 3].map((v) => CDM.cdmManeuverable[v]), ["UNSPECIFIED", "YES", "NO", "NOT_APPLICABLE"]);
    const c = new CDM.CDMT();
    c.OBJECT1 = Object.assign(new CDM.CDMObjectT(), { OBJECT_DESIGNATOR: "12345", CATALOG_NAME: "SATCAT", MANEUVERABLE: CDM.cdmManeuverable.YES, CD_AREA_OVER_MASS: 0.012 });
    const k = roundTrip(CDM, "CDM", c);
    assert.equal(k.OBJECT1.MANEUVERABLE, CDM.cdmManeuverable.YES);
    assert.equal(k.OBJECT1.OBJECT_DESIGNATOR, "12345");
    assert.equal(k.OBJECT1.CD_AREA_OVER_MASS, 0.012);
  });
});
