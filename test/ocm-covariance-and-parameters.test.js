import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as OCM from "../lib/js/OCM/main.js";

function roundTrip(value) {
  const builder = new flatbuffers.Builder(1024);
  OCM.OCM.finishSizePrefixedOCMBuffer(builder, value.pack(builder));
  const bytes = builder.asUint8Array().slice();
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), "$OCM");
  return OCM.OCM.getSizePrefixedRootAsOCM(new flatbuffers.ByteBuffer(bytes)).unpack();
}

describe("OCM covariance size, ordering and dynamical-model parameters (CCSDS 502.0-B-3 COV_TYPE, COV_ORDERING)", () => {
  it("states the CCSDS orderings in the order the standard lists them", () => {
    const o = OCM.covarianceOrdering;
    assert.deepEqual([o.LTM, o.UTM, o.FULL, o.LTMWCC, o.UTMWCC], [0, 1, 2, 3, 4]);
  });

  it("reads an OCM that states none of the covariance fields as the 6x6 lower triangle it always was", () => {
    const o = new OCM.OCMT();
    o.STATE_DATA = [7000, 0, 0, 0, 7.5, 0];
    o.COVARIANCE_DATA = Array.from({ length: 21 }, (_, i) => i + 1);
    const r = roundTrip(o);
    assert.equal(r.COV_TYPE, null);
    assert.equal(r.COV_ORDERING, OCM.covarianceOrdering.LTM);
    assert.equal(r.COV_SIZE, 6);
    assert.deepEqual(r.COV_PARAMETERS, []);
    assert.deepEqual(r.COV_UNITS, []);
    assert.deepEqual(r.ORBIT_DETERMINATION, null);
    assert.deepEqual(r.COVARIANCE_DATA, o.COVARIANCE_DATA);
  });

  it("carries a VCM's covariance: state plus B, BDOT, AGOM and thrust rows, with the parameters' values", () => {
    const n = 10; // 6 state rows and four parameter rows
    const o = new OCM.OCMT();
    o.STATE_DATA = [7000, 0, 0, 0, 7.5, 0];
    o.COVARIANCE_DATA = Array.from({ length: (n * (n + 1)) / 2 }, (_, i) => (i + 1) / 100);
    o.COV_TYPE = "CARTPV";
    o.COV_ORDERING = OCM.covarianceOrdering.LTM;
    o.COV_SIZE = n;
    o.COV_PARAMETERS = ["DRAG_AREA_OVER_MASS", "DRAG_AREA_OVER_MASS_RATE", "SRP_AREA_OVER_MASS", "IN_TRACK_ACCELERATION"];
    o.COV_UNITS = ["km", "km", "km", "km/s", "km/s", "km/s", "m**2/kg", "m**2/kg/s", "m**2/kg", "m/s**2"];
    o.ORBIT_DETERMINATION = new OCM.OrbitDeterminationT();
    o.ORBIT_DETERMINATION.WEIGHTED_RMS = 1.09;
    o.ORBIT_DETERMINATION.OD_DYNAMIC_PARAMETERS = [
      ["DRAG_AREA_OVER_MASS", 0.0123, "m**2/kg", true],
      ["DRAG_AREA_OVER_MASS_RATE", 1.5e-9, "m**2/kg/s", false],
      ["SRP_AREA_OVER_MASS", 0.021, "m**2/kg", true],
      ["IN_TRACK_ACCELERATION", -3.2e-9, "m/s**2", true],
    ].map(([NAME, VALUE, UNITS, SOLVED_FOR]) => Object.assign(new OCM.OCMDynamicParameterT(), { NAME, VALUE, UNITS, SOLVED_FOR }));

    const r = roundTrip(o);
    assert.equal(r.COV_TYPE, "CARTPV");
    assert.equal(r.COV_SIZE, n);
    assert.deepEqual(r.COV_PARAMETERS, o.COV_PARAMETERS);
    assert.deepEqual(r.COV_UNITS, o.COV_UNITS);
    assert.deepEqual(r.COVARIANCE_DATA, o.COVARIANCE_DATA);
    assert.equal(r.COVARIANCE_DATA.length, (n * (n + 1)) / 2);
    const parameters = r.ORBIT_DETERMINATION.OD_DYNAMIC_PARAMETERS;
    assert.deepEqual(parameters.map((p) => p.NAME), o.COV_PARAMETERS);
    assert.deepEqual(parameters.map((p) => p.VALUE), [0.0123, 1.5e-9, 0.021, -3.2e-9]);
    assert.deepEqual(parameters.map((p) => p.UNITS), ["m**2/kg", "m**2/kg/s", "m**2/kg", "m/s**2"]);
    assert.deepEqual(parameters.map((p) => p.SOLVED_FOR), [true, false, true, true]);
  });

  it("carries the full and cross-correlation orderings with their N*N values", () => {
    for (const ordering of ["FULL", "LTMWCC", "UTMWCC"]) {
      const o = new OCM.OCMT();
      o.COV_SIZE = 3;
      o.COV_ORDERING = OCM.covarianceOrdering[ordering];
      o.COVARIANCE_DATA = Array.from({ length: 9 }, (_, i) => i + 1);
      const r = roundTrip(o);
      assert.equal(r.COV_ORDERING, OCM.covarianceOrdering[ordering]);
      assert.equal(r.COV_SIZE, 3);
      assert.equal(r.COVARIANCE_DATA.length, 9);
    }
  });
});
