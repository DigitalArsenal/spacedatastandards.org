import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as OCM from "../lib/js/OCM/main.js";
import * as VCM from "../lib/js/VCM/main.js";

/**
 * Pack a native object through the size-prefixed finisher, prove the frame
 * carries the standard's file identifier at bytes 8..12, and unpack it again.
 */
function roundTrip(value, finish, readSizePrefixed, identifier) {
  const builder = new flatbuffers.Builder(1024);
  finish(builder, value.pack(builder));
  const bytes = builder.asUint8Array().slice();
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), identifier);
  return readSizePrefixed(new flatbuffers.ByteBuffer(bytes)).unpack();
}

describe("OCM trajectory frame and element sets (CCSDS 502.0-B-3, SANA orbital elements)", () => {
  it("appends the SANA element sets after every existing trajectoryType", () => {
    const t = OCM.trajectoryType;
    assert.deepEqual(
      [t.CARTESIAN_PV, t.CARTESIAN_PVA, t.POLYNOMIAL_POS, t.POLYNOMIAL_OE, t.HERMITE, t.LAGRANGE],
      [0, 1, 2, 3, 4, 5],
    );
    assert.deepEqual([t.KEPLERIAN, t.KEPLERIAN_MEAN, t.EQUINOCTIAL, t.EQUINOCTIAL_MOD], [6, 7, 8, 9]);
  });

  it("round-trips the trajectory frame, revolution number, averaging and OD fields", () => {
    const o = new OCM.OCMT();
    o.TRAJ_TYPE = OCM.trajectoryType.KEPLERIAN_MEAN;
    o.STATE_VECTOR_SIZE = 6;
    o.STATE_DATA = [6878.137, 0.001, 51.6, 120.0, 90.0, 10.0];
    o.CENTER_NAME = "EARTH";
    const frame = new OCM.RFMT();
    frame.NAME = "EME2000";
    frame.REFERENCE_FRAME_type = OCM.RFMUnion.CelestialFrameWrapper;
    const wrapper = new OCM.CelestialFrameWrapperT();
    wrapper.frame = OCM.CelestialFrame.EME2000;
    frame.REFERENCE_FRAME = wrapper;
    o.TRAJ_REF_FRAME = frame;
    o.TRAJ_FRAME_EPOCH = "2000-01-01T12:00:00";
    o.ORB_REVNUM = 37693;
    o.ORB_AVERAGING = "BROUWER";
    o.PERTURBATIONS = new OCM.PerturbationsT();
    o.PERTURBATIONS.FIXED_GEOMAG_AP = 10;
    o.ORBIT_DETERMINATION = new OCM.OrbitDeterminationT();
    o.ORBIT_DETERMINATION.SEDR = 0.0039;
    o.ORBIT_DETERMINATION.WEIGHTED_RMS = 1.1498;

    const r = roundTrip(o, OCM.OCM.finishSizePrefixedOCMBuffer, OCM.OCM.getSizePrefixedRootAsOCM, "$OCM");
    assert.equal(r.TRAJ_TYPE, OCM.trajectoryType.KEPLERIAN_MEAN);
    assert.deepEqual(r.STATE_DATA, o.STATE_DATA);
    assert.equal(r.CENTER_NAME, "EARTH");
    assert.equal(r.TRAJ_REF_FRAME.NAME, "EME2000");
    assert.equal(r.TRAJ_REF_FRAME.REFERENCE_FRAME.frame, OCM.CelestialFrame.EME2000);
    assert.equal(r.TRAJ_FRAME_EPOCH, "2000-01-01T12:00:00");
    assert.equal(r.ORB_REVNUM, 37693);
    assert.equal(r.ORB_AVERAGING, "BROUWER");
    assert.equal(r.PERTURBATIONS.FIXED_GEOMAG_AP, 10);
    assert.equal(r.ORBIT_DETERMINATION.SEDR, 0.0039);
    assert.equal(r.ORBIT_DETERMINATION.WEIGHTED_RMS, 1.1498);
  });

  it("gives the superseded VCM its $VCM file identifier", () => {
    const v = new VCM.VCMT();
    v.OBJECT_NAME = "OBJECT";
    const r = roundTrip(v, VCM.VCM.finishSizePrefixedVCMBuffer, VCM.VCM.getSizePrefixedRootAsVCM, "$VCM");
    assert.equal(r.OBJECT_NAME, "OBJECT");
  });
});
