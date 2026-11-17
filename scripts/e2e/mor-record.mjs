#!/usr/bin/env node
// The minimum orbit record ($MOR) and the additions it needs ($MPE BTERM and AGOM, $DPM DPMAsset
// RECORD_PROVENANCE, DERIVED_BUILD and COV_REALISM_MODELS).
//   a. four records (AP with gravity terms, covariance, realism, two windows of rows and a fallback set; AP with
//      the ECOM2 Y0 term, the slow set, the solid tide and the output-map radiation text; SGP4XP; SGP4) are written
//      with the generated bindings and read back equal; each expands to one $OCM (written, read back) that reduces
//      to the same record; every fixed text of the expansion is the one schema/MOR/main.fbs states; read without
//      its asset a record keeps its covariance and the floor COV_FLOOR names, and no rows; rows whose
//      WINDOW_RECORD_CHECK does not match the elements are void; a ROWS_ONLY record reads back and has no expansion; a record of an unknown kind is ignored;
//      COV_FLOOR wins over a contradicting producer; the validity rules are enforced;
//   b. an $OCM carrying a field the record cannot say is not reducible, by name, for every class the schema lists;
//      the descriptive fields the schema lists are dropped and reported;
//   c. the epoch converts both ways without loss, and refuses a leap second and a seventh fraction digit;
//   d. the mirrored enums keep the ordinals and names of $OCM ocmMessageStatus, $PCF pcfSolidTideModel and $PPE
//      ppeWindowStatus;
//   e. the committed 1.285.0 TypeScript bindings read the new $MPE and $DPM bytes with every existing field unchanged;
//   f. sizes of the AP record: elements alone, with covariance, with one window of rows, with the fallback set.
// The real-catalog measurements are in schema/MOR/README.md.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import * as fb from 'flatbuffers';
import * as C from './lib/mor-convert.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const baseline = '1946b6f1b'; // 1.285.0
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'mor-record-'));
const cleanup = () => {
  try {
    fs.rmSync(tmp, { recursive: true, force: true });
  } catch {}
};
process.once('exit', cleanup);
const run = (cmd, args, cwd = root) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const bundle = async (base, code, tag) => {
  const out = path.join(tmp, `${tag}-${code}.mjs`);
  await build({
    entryPoints: [path.join(base, `lib/ts/${code}/main.ts`)],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: out,
    nodePaths: [path.join(root, 'node_modules')],
    logLevel: 'silent',
  });
  return import(pathToFileURL(out));
};
const finish = (value, id, prefixed = false) => { const b = new fb.Builder(4096); const off = value.pack(b); prefixed ? b.finishSizePrefixed(off, id) : b.finish(off, id); return b.asUint8Array(); };
const f32 = (v) => Math.fround(v);

try {
  const M = await bundle(root, 'MOR', 'new');
  const O = await bundle(root, 'OCM', 'new');
  const D = await bundle(root, 'DPM', 'new');

  // ---- the asset statement and four records ----------------------------------------------------------------
  const provenance = new O.PVNT();
  provenance.PROVIDER_ID = 'com.example.fitter';
  provenance.PRODUCER = 'com.spacedatanetwork.sdn-ap-propagator 0.6.64';
  provenance.SOURCE_ID = 'example-batch-1';
  const buildStatement = { BUILDER_NAME: 'example-builder', BUILDER_VERSION: '1.2.3', BUILDER_DIGEST: [...crypto.createHash('sha256').update('artifact').digest()], ENVIRONMENT_DIGEST: [...crypto.createHash('sha256').update('pcf').digest()], TOL_POSITION: 5e-6, TOL_VELOCITY: 5e-8 };
  const recordDigest = (m) => [...crypto.createHash('sha256').update(`${m.NORAD_CAT_ID} ${m.EPOCH_UNIX_US} ${m.MEAN_MOTION}`).digest()];
  const sharedRealism = Object.assign(new O.CVRT(), { MODEL_ID: 'example process noise', REGIME: 'DRAG', RULE: 3, CALIBRATION: 1, COVERAGE_95: 0.951, SCALE_FACTOR: 1.25 });
  const asset = { provenance, build: buildStatement, recordDigest, realismModels: [{ ID: 1, REALISM: sharedRealism }] };
  const EPOCH = C.epochUs('2026-11-16T12:34:56.123456');
  const elements = (m, n) => Object.assign(m, { MEAN_MOTION: n, ECCENTRICITY: 0.0012345678901234, INCLINATION: 51.6412345678, RA_OF_ASC_NODE: 123.456789012, ARG_OF_PERICENTER: 98.7654321098, MEAN_ANOMALY: 261.234567891 });

  const ap = elements(new M.MORT(), 15.4987654321);
  Object.assign(ap, { NORAD_CAT_ID: 90001, INTERNATIONAL_DESIGNATOR: '2026-001A', ORIGINATOR: 'SDN', MESSAGE_STATUS: M.morMessageStatus.REAL, EPOCH_UNIX_US: EPOCH,
    MEAN_ELEMENT_THEORY: M.meanElementSource.AP, BTERM: 0.0123456789, AGOM: 0.0234567891, GRAVITY_FIELD: M.morGravityField.EGM2008, MAXIMUM_TESSERAL_DEGREE: 12, MAXIMUM_ZONAL_DEGREE: 6,
    OD_PARAMETERS: (1 << 1) | (1 << 3), OD_SOLVED_FOR: (1 << 1) | (1 << 3), ACTUAL_OD_SPAN: 7.5,
    OD_OBSERVATIONS_USED: 412, WEIGHTED_RMS: 1.07, OD_EPOCH_UNIX_US: EPOCH - 3600000000n, DAYS_SINCE_LAST_OBS: 0.25 });
  ap.COVARIANCE_DATA = Array.from({ length: 36 }, (_, k) => (k + 1) * 1.0000001e-3);
  ap.COV_PROPAGATION = new M.MORCovariancePropagationT(1e-6, 2e-7, 3e-6, 4e-8, 5e-8, 6e-6, 1e-9, 2e-9, 3e-9, 4e-9, -120, 0.25, 1.5e-4);
  ap.COV_FLOOR = M.morCovarianceFloor.MEAN_ELEMENTS_TWO_BODY;
  ap.COV_REALISM_ID = 1; // the asset's model: the record names it
  ap.COV_CALIBRATION = M.covarianceCalibration.Calibrated;
  ap.COV_CALIBRATION_REFERENCE = 'example-calibration-report';
  // window 1: position 6 (head 4) and velocity 5 (head 3); window 2 refused by the builder
  const pos = [[6771.123456789, -12.3456789, 0.5, f32(0.125), f32(-0.0625), f32(1e-3)], [-1.5, 2.25, 3.125, f32(4.5e-4), f32(-2e-5), f32(3e-6)], [10.5, -20.25, 0.75, f32(1e-2), f32(5e-5), f32(-7e-6)]];
  const vel = [[0.1234567, 7.5, -0.25, f32(1e-4), f32(2e-6)], [7.6, 0.3, 0.02, f32(-3e-5), f32(4e-7)], [0.001, -0.5, 0.75, f32(5e-5), f32(-6e-7)]];
  ap.WINDOWS = [new M.MORWindowT(1440, 1440, M.morWindowStatus.SERVED, 6, 4, 5, 3), new M.MORWindowT(4320, 1440, M.morWindowStatus.TOLERANCE_NOT_HELD, 0, 0, 0, 0)];
  ap.WINDOW_COEFF_HEADS = [...pos.flatMap((a) => a.slice(0, 4)), ...vel.flatMap((a) => a.slice(0, 3))];
  ap.WINDOW_COEFF_TAILS = [...pos.flatMap((a) => a.slice(4)), ...vel.flatMap((a) => a.slice(3))];
  ap.WINDOW_RECORD_CHECK = C.recordCheck(recordDigest(ap));
  ap.FALLBACK = elements(new M.MPET(), 15.4987);
  Object.assign(ap.FALLBACK, { EPOCH: Number(EPOCH - 3600000000n) / 1e6, MEAN_ELEMENT_THEORY: M.meanElementSource.SGP4XP, BTERM: 0.0125, AGOM: 0.023 });

  const apY0 = elements(new M.MORT(), 2.00561234);
  Object.assign(apY0, { NORAD_CAT_ID: 90002, ORIGINATOR: 'SDN', EPOCH_UNIX_US: EPOCH + 1n, MEAN_ELEMENT_THEORY: M.meanElementSource.AP, ECCENTRICITY: 0.72, BTERM: 0.001, AGOM: 0.05,
    GRAVITY_FIELD: M.morGravityField.EGM2008_SLOW_TESSERAL_70, MAXIMUM_TESSERAL_DEGREE: 70, MAXIMUM_ZONAL_DEGREE: 70, SOLID_TIDES_MODEL: M.morSolidTideModel.IERS_2010,
    SOLAR_RAD_PRESSURE: M.morRadiationModel.SPHERE_OUTPUT_MAP_ECOM2_Y0, OD_PARAMETERS: (1 << 1) | (1 << 3) | (1 << 6), OD_SOLVED_FOR: (1 << 3) | (1 << 6), ECOM2_Y0: -2.5e-9 });
  const xp = elements(new M.MORT(), 14.2);
  Object.assign(xp, { NORAD_CAT_ID: 90003, EPOCH_UNIX_US: EPOCH, MEAN_ELEMENT_THEORY: M.meanElementSource.SGP4XP, BTERM: 0.02, AGOM: 0.01 });
  // a covariance whose realism is the record's own
  xp.COVARIANCE_DATA = Array.from({ length: 21 }, (_, k) => (k + 1) * 2.5e-4);
  xp.COV_PROPAGATION = new M.MORCovariancePropagationT(1e-6, 0, 2e-6, 0, 0, 3e-6, 1e-9, 1e-9, 1e-9, 0, 0, 0, 0);
  xp.COV_FLOOR = M.morCovarianceFloor.MEAN_ELEMENTS_TWO_BODY;
  xp.COV_REALISM = Object.assign(new M.CVRT(), { MODEL_ID: 'example per-record width 0.731' });
  const sgp4 = elements(new M.MORT(), 13.9);
  Object.assign(sgp4, { NORAD_CAT_ID: 90004, OBJECT_NAME: 'EXAMPLE', EPOCH_UNIX_US: EPOCH, MEAN_ELEMENT_THEORY: M.meanElementSource.SGP4, BSTAR: 1.2e-4, MEAN_MOTION_DOT: 3e-6, MEAN_MOTION_DDOT: 1e-12 });
  const records = { ap, apY0, xp, sgp4 };

  // ---- a: write, read, expand, reduce -------------------------------------------------------------------------
  const expanded = {};
  for (const [name, m] of Object.entries(records)) {
    const bytes = C.encode(fb, M, m);
    assert.ok(M.MOR.bufferHasIdentifier(new fb.ByteBuffer(bytes.subarray(4))), `a: ${name} carries $MOR`);
    const back = M.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(bytes)).unpack();
    const d1 = []; C.diff(back, m, name, d1);
    assert.deepEqual(d1, [], `a: ${name} reads back equal`);
    const { ocm, fallback } = C.expand(back, asset, O);
    const ocmBack = O.OCM.getRootAsOCM(new fb.ByteBuffer(finish(ocm, '$OCM'))).unpack();
    expanded[name] = ocmBack;
    const r = C.reduce(ocmBack, asset, O, M);
    assert.deepEqual(r.problems, [], `a: ${name}'s $OCM reduces`);
    assert.deepEqual(r.dropped, [], `a: ${name}'s $OCM drops nothing`);
    r.mor.FALLBACK = m.FALLBACK; // the fallback travels beside the $OCM as its own $MPE
    const d2 = []; C.diff(r.mor, m, name, d2);
    assert.deepEqual(d2, [], `a: ${name} reduces to the same record`);
    if (fallback) {
      const mpe = M.MPE.getRootAsMPE(new fb.ByteBuffer(finish(fallback, '$MPE'))).unpack();
      assert.equal(mpe.ENTITY_ID, String(m.NORAD_CAT_ID), 'a: the fallback $MPE names the object');
      assert.ok(Object.is(mpe.BTERM, m.FALLBACK.BTERM) && Object.is(mpe.AGOM, m.FALLBACK.AGOM), 'a: the fallback carries BTERM and AGOM');
    }
  }
  const e = expanded.ap, y = expanded.apY0;
  assert.equal(e.MEAN_ELEMENTS.EPOCH, '2026-11-16T12:34:56.123456');
  assert.equal(e.TRAJ_FRAME_EPOCH, e.MEAN_ELEMENTS.EPOCH);
  assert.equal(e.TRAJ_REF_FRAME.NAME, 'TEMEOFEPOCH');
  assert.equal(e.COV_REF_FRAME.NAME, 'TEMEOFEPOCH');
  assert.equal(expanded.xp.TRAJ_REF_FRAME.NAME, 'TEMEOFDATE');
  assert.equal(expanded.xp.TRAJ_FRAME_EPOCH, null);
  assert.equal(e.ORB_AVERAGING, 'BROUWER');
  assert.equal(expanded.sgp4.ORB_AVERAGING, 'KOZAI');
  assert.equal(e.PERTURBATIONS.GRAVITY_MODEL, 'EGM2008');
  assert.equal(y.PERTURBATIONS.GRAVITY_MODEL, 'EGM2008; slow tesseral terms to degree 70');
  assert.equal(expanded.xp.PERTURBATIONS.GRAVITY_MODEL, 'EGM-96');
  assert.equal(expanded.sgp4.PERTURBATIONS.GRAVITY_MODEL, 'WGS-72');
  assert.equal(y.PERTURBATIONS.SOLID_TIDES_MODEL, 'IERS 2010');
  assert.equal(y.PERTURBATIONS.SOLAR_RAD_PRESSURE, 'SPHERE (AGOM) THROUGH THE OUTPUT MAP, CYLINDRICAL SHADOW OVER THE STEP, AND ECOM2 Y0 (ARNOLD ET AL. 2015)');
  assert.deepEqual([e.PERTURBATIONS.ATMOSPHERIC_MODEL.MODEL, e.PERTURBATIONS.ATMOSPHERIC_MODEL.YEAR, e.PERTURBATIONS.WEATHER_SOURCE], [O.AtmosphericModelFamily.JXX, 1970, O.pcfWeatherSource.THEORY_FLUX_MODEL]);
  assert.equal(expanded.sgp4.PERTURBATIONS.WEATHER_SOURCE, O.pcfWeatherSource.NONE);
  assert.deepEqual([e.COV_SIZE, e.COV_TYPE, e.COV_PARAMETERS, e.COV_UNITS], [8, 'CARTPV', ['DRAG_AREA_OVER_MASS', 'SRP_AREA_OVER_MASS'], ['km', 'km', 'km', 'km/s', 'km/s', 'km/s', 'm**2/kg', 'm**2/kg']]);
  assert.deepEqual(y.ORBIT_DETERMINATION.OD_DYNAMIC_PARAMETERS.map((p) => [p.NAME, p.SOLVED_FOR, p.UNITS]), [['DRAG_AREA_OVER_MASS', false, 'm**2/kg'], ['SRP_AREA_OVER_MASS', true, 'm**2/kg'], ['ECOM2_Y0', true, 'm/s**2']]);
  assert.deepEqual([e.ORBIT_DETERMINATION.OD_OBSERVATIONS_USED, e.ORBIT_DETERMINATION.OD_TRACKS_USED, e.ORBIT_DETERMINATION.WEIGHTED_RMS, e.ORBIT_DETERMINATION.OD_EPOCH, e.ORBIT_DETERMINATION.DAYS_SINCE_LAST_OBS],
    [412, 0, 1.07, '2026-11-16T11:34:56.123456', 0.25], 'a: the five values a CDM takes; tracks not stated is $OCM 0');
  assert.equal(expanded.sgp4.ORBIT_DETERMINATION, null, 'a: nothing stated, no orbit determination');
  assert.equal(e.COV_REALISM[0].MODEL_ID, 'example process noise', 'a: the named model expands from the asset');
  assert.equal(expanded.xp.COV_REALISM[0].MODEL_ID, 'example per-record width 0.731', 'a: the record\'s own realism expands as written');
  assert.deepEqual([e.METADATA.CATALOG_NAME, e.METADATA.OBJECT_DESIGNATOR, e.METADATA.TIME_SYSTEM, e.CENTER_NAME, e.HEADER.CCSDS_OCM_VERS], ['NORAD', '90001', 'UTC', 'EARTH', '3.0']);
  assert.equal(e.PROVENANCE.PRODUCER, provenance.PRODUCER);
  const de = e.DERIVED_EPHEMERIS;
  assert.deepEqual([de.REFERENCE_EPOCH, de.POSITION_RECORDS.length, de.UNSERVED_STATUS, de.BUILD.BUILDER_NAME], [e.MEAN_ELEMENTS.EPOCH, 1, [O.ppeWindowStatus.TOLERANCE_NOT_HELD], 'example-builder']);
  const r0 = de.POSITION_RECORDS[0];
  assert.deepEqual([r0.NUM_COEFFICIENTS, r0.POS_COEFF_HEAD_COUNT, r0.VEL_COEFF_HEAD_COUNT, r0.EPOCH_MID], [6, 4, 3, '2026-11-16T12:58:56.123456']);
  assert.ok(Object.is(r0.VEL_COEFF_X[5], 0), 'a: the shorter velocity series is padded with +0.0');
  // A: alone, without its asset, the record still carries its covariance and the floor it names
  const alone = C.expand(M.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(C.encode(fb, M, ap))).unpack(), null, O).ocm;
  assert.equal(alone.COVARIANCE_DATA.length, 36, 'A: the covariance without the asset');
  assert.equal(C.floorOf(alone.PROVENANCE.PRODUCER), M.morCovarianceFloor.MEAN_ELEMENTS_TWO_BODY, 'A: the floor text without the asset');
  assert.deepEqual(alone.COV_REALISM, [], 'A: the named model\'s figures need the asset');
  assert.equal(alone.DERIVED_EPHEMERIS, null, 'D: no rows without the asset\'s DERIVED_BUILD');
  assert.equal(C.floorOf('com.spacedatanetwork.sdn-ap-propagator 0.6.38'), M.morCovarianceFloor.WRITER_THEORY_STATE);
  assert.equal(C.floorOf('com.spacedatanetwork.sdn-ap-propagator 0.6.39'), M.morCovarianceFloor.MEAN_ELEMENTS_TWO_BODY);
  assert.equal(C.floorOf('com.spacedatanetwork.sdn-ap-propagator 0.6.39-rc1'), M.morCovarianceFloor.WRITER_THEORY_STATE);
  assert.equal(C.floorOf(null), M.morCovarianceFloor.WRITER_THEORY_STATE);
  // D: elements rewritten under kept rows: the check fails and the rows are void
  const rewritten = Object.assign(Object.create(Object.getPrototypeOf(ap)), ap, { MEAN_MOTION: ap.MEAN_MOTION + 1e-9 });
  assert.equal(C.expand(rewritten, asset, O).ocm.DERIVED_EPHEMERIS, null, 'D: a mismatched check voids the rows');
  assert.notEqual(C.expand(ap, asset, O).ocm.DERIVED_EPHEMERIS, null, 'D: a matching check keeps them');
  // validity and precedence (schema/MOR/main.fbs)
  const variant = (patch) => Object.assign(Object.create(Object.getPrototypeOf(ap)), ap, patch);
  const otherFloor = { ...asset, provenance: Object.assign(new O.PVNT(), { PRODUCER: 'com.example.fitter 1.0.0' }) };
  assert.deepEqual(C.expand(ap, otherFloor, O).refused, ['COV_FLOOR differs from the asset PRODUCER'], 'a: COV_FLOOR governs; the expansion never restates another floor');
  assert.deepEqual(C.expand(variant({ COV_REALISM_ID: 7 }), asset, O).unresolved, ['COV_REALISM_ID 7'], 'a: an unknown model ID is reported unresolved');
  assert.ok(C.expand(variant({ COV_REALISM: Object.assign(new M.CVRT(), { MODEL_ID: 'x' }) }), asset, O).refused.length > 0, 'a: never both realism forms');
  assert.ok(C.expand(variant({ WINDOWS: [ap.WINDOWS[1], ap.WINDOWS[0]] }), asset, O).refused.length > 0, 'a: windows in time order');
  assert.ok(C.expand(variant({ WINDOWS: [ap.WINDOWS[0], new M.MORWindowT(2000, 1440, 1, 0, 0, 0, 0)] }), asset, O).refused.length > 0, 'a: windows do not overlap');
  assert.ok(C.expand(variant({ FALLBACK: Object.assign(Object.create(Object.getPrototypeOf(ap.FALLBACK)), ap.FALLBACK, { ENTITY_ID: '1' }) }), asset, O).refused.length > 0, 'a: the fallback has no ENTITY_ID');
  // two served windows: reduction keeps each window with its own coefficients, and refuses served records out of order
  const two = variant({ WINDOWS: [ap.WINDOWS[0], new M.MORWindowT(4320, 1440, 0, 6, 4, 5, 3)], WINDOW_COEFF_HEADS: [...ap.WINDOW_COEFF_HEADS, ...ap.WINDOW_COEFF_HEADS.map((v) => v * 2)], WINDOW_COEFF_TAILS: [...ap.WINDOW_COEFF_TAILS, ...ap.WINDOW_COEFF_TAILS.map((v) => f32(v * 2))] });
  const twoOcm = O.OCM.getRootAsOCM(new fb.ByteBuffer(finish(C.expand(two, asset, O).ocm, '$OCM'))).unpack();
  const twoBack = C.reduce(twoOcm, asset, O, M);
  const dTwo = []; C.diff(twoBack.mor?.WINDOW_COEFF_HEADS, two.WINDOW_COEFF_HEADS, 'heads', dTwo);
  assert.deepEqual(dTwo, [], 'a: two windows reduce with their own coefficients');
  twoOcm.DERIVED_EPHEMERIS.POSITION_RECORDS.reverse();
  assert.equal(C.reduce(twoOcm, asset, O, M).mor, null, 'a: served records out of time order are not reducible');
  // rows only
  const update = C.rowsOnly(ap, M, ap.WINDOWS, ap.WINDOW_COEFF_HEADS, ap.WINDOW_COEFF_TAILS, ap.WINDOW_RECORD_CHECK);
  const updateBytes = C.encode(fb, M, update);
  const updateBack = M.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(updateBytes)).unpack();
  const dU = []; C.diff(updateBack, update, 'rows-only', dU);
  assert.deepEqual(dU, [], 'a: a rows-only record reads back equal');
  assert.deepEqual(C.invalid(updateBack), [], 'a: a rows-only record is valid');
  assert.ok(C.expand(updateBack, asset, O).refused.includes('ROWS_ONLY has no expansion'), 'a: a rows-only record has no expansion');
  assert.ok(C.invalid(Object.assign(updateBack, { MEAN_MOTION: 15 })).includes('ROWS_ONLY states MEAN_MOTION'), 'a: a rows-only record carries no elements');
  // a kind this reader does not know, written by hand with the generated builder: ignored, nothing changes
  const hb = new fb.Builder(256);
  M.MOR.startMOR(hb);
  M.MOR.addEpochUnixUs(hb, EPOCH);
  M.MOR.addMeanMotion(hb, 15.5);
  M.MOR.addNoradCatId(hb, 90009);
  M.MOR.addRecordKind(hb, 7);
  M.MOR.addMeanElementTheory(hb, M.meanElementSource.AP);
  M.MOR.finishSizePrefixedMORBuffer(hb, M.MOR.endMOR(hb));
  const unknown = M.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(hb.asUint8Array()));
  assert.equal(unknown.RECORD_KIND(), 7, 'a: the unknown kind reads as its number');
  const ignored = C.expand(unknown.unpack(), asset, O);
  assert.ok(ignored.ignored && ignored.ocm === null && ignored.fallback === null, 'a: a record of an unknown kind is ignored, never read as FULL');
  console.log(`PASS a: rows-only update ${updateBytes.length} bytes, written, read back, refused by the expansion; a record of unknown kind ignored; validity and floor precedence enforced`);
  console.log('PASS a: four records written, read, expanded to $OCM and reduced back unchanged; fixed texts as stated');

  // ---- b: not reducible, by name; descriptive fields dropped ----------------------------------------------------
  const mutate = (fn) => { const c = O.OCM.getRootAsOCM(new fb.ByteBuffer(finish(e, '$OCM'))).unpack(); fn(c); return c; };
  const refusals = {
    'a maneuver': (o) => { o.MANEUVER_DATA = [new O.ManeuverT()]; },
    'a state history': (o) => { o.STATE_DATA = [1, 2, 3, 4, 5, 6]; },
    'a forecast': (o) => { o.POLYNOMIAL_POSITION_RECORDS = [new O.PPEPositionRecordT()]; },
    'physical properties': (o) => { o.PHYSICAL_PROPERTIES = new O.PhysicalPropertiesT(); o.PHYSICAL_PROPERTIES.WET_MASS = 100; },
    'seed sets': (o) => { o.SEED_SETS = [new O.OCMSeedSetT()]; },
    'weather rows': (o) => { o.PERTURBATIONS.WEATHER_SOURCE = O.pcfWeatherSource.RECORDS; },
    'NRLMSISE-00': (o) => { o.PERTURBATIONS.ATMOSPHERIC_MODEL.MODEL = O.AtmosphericModelFamily.NRLMSIS00E; o.PERTURBATIONS.ATMOSPHERIC_MODEL.YEAR = 2000; },
    'a density correction': (o) => { o.PERTURBATIONS.DENSITY_CORRECTION = O.pcfDensityCorrection.DCA_COMMON_MODE; },
    'a radiation text with no value here': (o) => { o.PERTURBATIONS.SOLAR_RAD_PRESSURE = 'CANNONBALL'; },
    'a gravity text with no value here': (o) => { o.PERTURBATIONS.GRAVITY_MODEL = 'JGM-3'; },
    'a classification': (o) => { o.HEADER.CLASSIFICATION = 'EXAMPLE'; },
    'an exercise': (o) => { o.HEADER.MESSAGE_STATUS = O.ocmMessageStatus.EXERCISE; },
    'a leap second epoch': (o) => { o.MEAN_ELEMENTS.EPOCH = '2016-12-31T23:59:60.500000'; },
    'a seventh fraction digit': (o) => { o.MEAN_ELEMENTS.EPOCH = '2026-11-16T12:34:56.1234567'; },
    'another provenance': (o) => { o.PROVENANCE.PRODUCER = 'com.example.fitter 1.2.4'; },
    'a second realism entry': (o) => { o.COV_REALISM.push(o.COV_REALISM[0]); },
    'a parameter with no value here': (o) => { const p = new O.OCMDynamicParameterT(); p.PARAMETER = 4; p.NAME = 'IN_TRACK_ACCELERATION'; o.ORBIT_DETERMINATION.OD_DYNAMIC_PARAMETERS.push(p); },
    'another covariance frame': (o) => { o.COV_REF_FRAME.NAME = 'GCRF'; },
    'user-defined parameters': (o) => { o.USER_DEFINED_PARAMETERS = [new O.UserDefinedParametersT()]; },
    'a mean-element theory with no value here': (o) => { o.MEAN_ELEMENTS.MEAN_ELEMENT_THEORY = O.meanElementSource.DSST; },
  };
  for (const [name, fn] of Object.entries(refusals)) {
    const r = C.reduce(mutate(fn), asset, O, M);
    assert.equal(r.mor, null, `b: an $OCM with ${name} is not reducible`);
    assert.ok(r.problems.length > 0, `b: ${name} is named`);
  }
  const descriptive = mutate((o) => { o.HEADER.COMMENT = ['note']; o.HEADER.MESSAGE_ID = 'm-1'; o.ORBIT_DETERMINATION.SEDR = 1.5; o.ORBIT_DETERMINATION.OBS_AVAILABLE = 42; o.DERIVED_EPHEMERIS.POSITION_RECORDS[0].MAX_POSITION_RESIDUAL = 1e-6; });
  const kept = C.reduce(descriptive, asset, O, M);
  assert.deepEqual(kept.problems, []);
  assert.deepEqual(kept.dropped.sort(), ['DERIVED_EPHEMERIS.POSITION_RECORDS.MAX_POSITION_RESIDUAL', 'HEADER.COMMENT', 'HEADER.MESSAGE_ID', 'ORBIT_DETERMINATION.OBS_AVAILABLE', 'ORBIT_DETERMINATION.SEDR']);
  console.log(`PASS b: ${Object.keys(refusals).length} classes of field not reducible, each named; 5 descriptive fields dropped and reported`);

  // ---- c: the epoch ------------------------------------------------------------------------------------------------
  for (const t of ['1957-10-04T19:28:34.000000', '2000-02-29T00:00:00.000001', '2026-11-16T23:59:59.999999', '2100-03-01T00:00:00.500000']) assert.equal(C.epochText(C.epochUs(t)), t, `c: ${t}`);
  assert.equal(C.epochUs('2026-11-16T12:34:56.1234560Z'), C.epochUs('2026-11-16T12:34:56.123456'), 'c: trailing zeros and Z read the same instant');
  assert.equal(C.epochUs('1970-01-01T00:00:00.000001'), 1n);
  assert.equal(C.epochUs('1969-12-31T23:59:59.999999'), -1n);
  assert.equal(C.epochUs('2016-12-31T23:59:60.000000'), null, 'c: a leap second has no value');
  assert.equal(C.epochUs('2026-02-30T00:00:00'), null, 'c: no such day');
  console.log('PASS c: the epoch converts both ways and refuses what it cannot hold');

  // ---- d: mirrored enums -------------------------------------------------------------------------------------------
  const mirror = (ours, theirs, names) => { for (const n of names) assert.equal(ours[n], theirs[n], `d: ${n}`); };
  mirror(M.morMessageStatus, O.ocmMessageStatus, ['UNSPECIFIED', 'REAL', 'TEST']);
  mirror(M.morSolidTideModel, O.pcfSolidTideModel, ['NONE', 'IERS_2010']);
  mirror(M.morWindowStatus, O.ppeWindowStatus, ['THEORY_REFUSED', 'TOLERANCE_NOT_HELD']);
  console.log('PASS d: mirrored enums keep their ordinals');

  // ---- e: old readers of $MPE and $DPM -----------------------------------------------------------------------------
  const old = path.join(tmp, 'old');
  for (const spec of ['schema', 'lib/ts/MPE', 'lib/ts/DPM']) {
    for (const file of run('git', ['ls-tree', '-r', '--name-only', baseline, '--', spec]).trim().split('\n')) {
      if (spec === 'schema' && !file.endsWith('main.fbs')) continue;
      fs.mkdirSync(path.dirname(path.join(old, file)), { recursive: true });
      fs.writeFileSync(path.join(old, file), execFileSync('git', ['show', `${baseline}:${file}`], { cwd: root }));
    }
  }
  const OM = await bundle(old, 'MPE', 'old'), OD = await bundle(old, 'DPM', 'old');
  const plain = (v) => JSON.parse(JSON.stringify(v, (k, x) => (typeof x === 'bigint' ? `${x}n` : Number.isNaN(x) ? 'NaN' : x)));
  const without = (v, keys) => { const p = plain(v); for (const k of keys) delete p[k]; return p; };
  const mpeBytes = finish(ap.FALLBACK, '$MPE');
  assert.deepEqual(plain(OM.MPE.getRootAsMPE(new fb.ByteBuffer(mpeBytes)).unpack()), without(M.MPE.getRootAsMPE(new fb.ByteBuffer(mpeBytes)).unpack(), ['BTERM', 'AGOM']), 'e: 1.285.0 reads the new $MPE');
  const dpm = new D.DPMT();
  Object.assign(dpm, { DATASET_ID: 'example', UPDATE_ID: 'u-1', PROVIDER_PEER_ID: 'peer', PUBLISH_TIMESTAMP: '2026-11-17T00:00:00Z' });
  const assetEntry = Object.assign(new D.DPMAssetT(), { CID: 'bafy-example', SCHEMA_NAME: 'MOR.fbs', BYTE_LENGTH: 1234n });
  assetEntry.RECORD_PROVENANCE = Object.assign(new D.PVNT(), provenance);
  assetEntry.DERIVED_BUILD = Object.assign(new D.DPMDerivedBuildT(), buildStatement);
  const model = Object.assign(new D.DPMRealismModelT(), { ID: 1 });
  model.REALISM = Object.assign(new D.CVRT(), sharedRealism);
  assetEntry.COV_REALISM_MODELS = [model];
  dpm.ASSETS = [assetEntry];
  const dpmBytes = finish(dpm, '$DPM');
  const newDpm = D.DPM.getRootAsDPM(new fb.ByteBuffer(dpmBytes)).unpack();
  assert.equal(newDpm.ASSETS[0].RECORD_PROVENANCE.PRODUCER, provenance.PRODUCER);
  assert.deepEqual(newDpm.ASSETS[0].DERIVED_BUILD.BUILDER_DIGEST, buildStatement.BUILDER_DIGEST);
  assert.equal(newDpm.ASSETS[0].COV_REALISM_MODELS[0].REALISM.MODEL_ID, sharedRealism.MODEL_ID);
  const newPlain = plain(newDpm); for (const a of newPlain.ASSETS) { delete a.RECORD_PROVENANCE; delete a.DERIVED_BUILD; delete a.COV_REALISM_MODELS; }
  assert.deepEqual(plain(OD.DPM.getRootAsDPM(new fb.ByteBuffer(dpmBytes)).unpack()), newPlain, 'e: 1.285.0 reads the new $DPM');
  // the build request and its outcomes ($DRB)
  const R = await bundle(root, 'DRB', 'new');
  const req = Object.assign(new R.DRBT(), { RECEIVER_ARTIFACT_SHA256: buildStatement.BUILDER_DIGEST, START_UNIX_US: EPOCH, WINDOW_COUNT: 2, POSITION_ONLY: true, WIDE_RECORDS: false });
  req.OUTCOMES = [new R.DRBOutcomeT(1, R.drbRecordOutcome.UNSUPPORTED), new R.DRBOutcomeT(3, R.drbRecordOutcome.EXCLUDED)];
  const reqBytes = finish(req, '$DRB');
  assert.ok(R.DRB.bufferHasIdentifier(new fb.ByteBuffer(reqBytes)), 'e: $DRB carries its identifier');
  const reqBack = R.DRB.getRootAsDRB(new fb.ByteBuffer(reqBytes)).unpack();
  assert.deepEqual(plain(reqBack), plain(req), 'e: the request and its outcomes read back equal');
  const flags = (reqBack.POSITION_ONLY ? 1 : 0) | (reqBack.WIDE_RECORDS ? 2 : 0);
  assert.equal(flags, 1, 'e: the flags byte of the environment digest');
  console.log('PASS e: 1.285.0 TypeScript reads the new $MPE and $DPM with every existing field unchanged; a $DRB request with outcomes reads back');

  // ---- f: sizes of the AP record -----------------------------------------------------------------------------------
  const size = (fn) => { const m = Object.assign(Object.create(Object.getPrototypeOf(ap)), ap); fn(m); return C.encode(fb, M, m).length; };
  const none = (m) => { m.COVARIANCE_DATA = []; m.COV_PROPAGATION = null; m.COV_REALISM = null; m.COV_REALISM_ID = 0; m.COV_FLOOR = 0; m.COV_CALIBRATION = 0; m.COV_CALIBRATION_REFERENCE = null; m.WINDOWS = []; m.WINDOW_COEFF_HEADS = []; m.WINDOW_COEFF_TAILS = []; m.WINDOW_RECORD_CHECK = 0n; m.FALLBACK = null; };
  const base = size(none);
  const withCov = size((m) => { none(m); Object.assign(m, { COVARIANCE_DATA: ap.COVARIANCE_DATA, COV_PROPAGATION: ap.COV_PROPAGATION, COV_FLOOR: 2, COV_REALISM_ID: 1 }); });
  // one served window as the catalog's builder makes them: position only, 26 coefficients, 7 held as binary64
  const withRows = size((m) => { none(m); m.WINDOW_RECORD_CHECK = 0x0123456789abcdefn; m.WINDOWS = [new M.MORWindowT(0, 1440, 0, 26, 7, 0, 0)]; m.WINDOW_COEFF_HEADS = new Array(21).fill(1.5); m.WINDOW_COEFF_TAILS = new Array(57).fill(0.25); });
  const withFallback = size((m) => { const f = m.FALLBACK; none(m); m.FALLBACK = f; });
  assert.ok(base <= 300, `f: elements alone ${base} bytes`);
  assert.ok(withCov - base <= 430, `f: the covariance adds ${withCov - base} bytes`);
  assert.ok(withRows - base <= 490, `f: one window adds ${withRows - base} bytes`);
  assert.ok(withFallback - base <= 160, `f: the fallback set adds ${withFallback - base} bytes`);
  console.log(`PASS f: AP record ${base} bytes; with covariance ${withCov}; one window +${withRows - base}; fallback set +${withFallback - base}`);
  console.log('PASS mor-record');
} finally {
  cleanup();
}
