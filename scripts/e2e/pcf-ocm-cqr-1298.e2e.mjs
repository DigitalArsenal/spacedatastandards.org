#!/usr/bin/env node
// E2E for SDS v1.298.0 (#907, #455, C1.3):
// 1. pcfSolidTideModel has UNSPECIFIED = 0, NONE = 1, IERS_2010 = 2, and PCFForceModel.SOLID_TIDES defaults to UNSPECIFIED.
// 2. PCFFitPolicy carries neutral 0 defaults and scrubbed schema comments (no private span/prior policy text).
// 3. OCMCovarianceBlock carries DENSITY_SENSITIVITY_KM round-trip; CQR carries SHARED_DENSITY_SENSITIVITY,
//    CQRObjectSource.DENSITY_SENSITIVITY_KM, and CQRScreeningControls.{APPLY_DENSITY_CROSS_CORRELATION,DENSITY_LOG_SIGMA}.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as flatbuffers from 'flatbuffers';
import { PCF, PCFT, PCFForceModelT, PCFFitPolicyT, pcfSolidTideModel } from '../../lib/js/PCF/main.js';
import { OCM, OCMT, OCMCovarianceBlockT } from '../../lib/js/OCM/main.js';
import { CQR, CQRT, CQRPairRequestT, CQRObjectSourceT, CQRScreeningControlsT, cqrCovarianceCorrelation, TIMInstantT, RFMCoordinateSystemT } from '../../lib/js/CQR/main.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

// 1. #455 pcfSolidTideModel enum and default
assert.equal(pcfSolidTideModel.UNSPECIFIED, 0);
assert.equal(pcfSolidTideModel.NONE, 1);
assert.equal(pcfSolidTideModel.IERS_2010, 2);
{
  const b = new flatbuffers.Builder(512);
  const pcf = new PCFT();
  pcf.FORCES = new PCFForceModelT();
  pcf.FORCES.EPHEMERIS_SOURCE = 'test';
  pcf.FIT = new PCFFitPolicyT();
  PCF.finishPCFBuffer(b, pcf.pack(b));
  const out = PCF.getRootAsPCF(new flatbuffers.ByteBuffer(b.asUint8Array()));
  assert.equal(out.FORCES().SOLID_TIDES(), pcfSolidTideModel.UNSPECIFIED);
  assert.equal(out.FIT().DEFAULT_SPAN_HOURS(), 0);
  assert.equal(out.FIT().MINIMUM_SPAN_HOURS(), 0);
  assert.equal(out.FIT().MAXIMUM_SPAN_HOURS(), 0);
  assert.equal(out.FIT().EXTENSION_MARGIN(), 0);
  assert.equal(out.FIT().WEATHER_HORIZON_DAYS(), 0);
}

// 2. #907 scrubbed comments in schema/PCF/main.fbs and schema/OCM/main.fbs
const pcfFbs = fs.readFileSync(path.join(ROOT, 'schema/PCF/main.fbs'), 'utf8');
const ocmFbs = fs.readFileSync(path.join(ROOT, 'schema/OCM/main.fbs'), 'utf8');
for (const leaked of ['48, 72 and 120', 'fit-implausible', 'Default 48', 'Default 120', 'mean 0, sigma 0.05', 'its span rule, priors and holdout']) {
  assert.ok(!pcfFbs.includes(leaked) && !ocmFbs.includes(leaked), `private policy text leaked: ${leaked}`);
}

// 3. C1.3 OCMCovarianceBlock.DENSITY_SENSITIVITY_KM + CQR fields round-trip
{
  const b = new flatbuffers.Builder(1024);
  const ocm = new OCMT();
  const blk = new OCMCovarianceBlockT();
  blk.COV_ID = 'cov-1';
  blk.DENSITY_SENSITIVITY_KM = [0.012, -1.45, 0.003];
  ocm.COVARIANCE_BLOCKS = [blk];
  OCM.finishOCMBuffer(b, ocm.pack(b));
  const out = OCM.getRootAsOCM(new flatbuffers.ByteBuffer(b.asUint8Array())).unpack();
  assert.deepEqual(out.COVARIANCE_BLOCKS[0].DENSITY_SENSITIVITY_KM, [0.012, -1.45, 0.003]);
}
{
  assert.equal(cqrCovarianceCorrelation.SHARED_DENSITY_SENSITIVITY, 3);
  const b = new flatbuffers.Builder(1024);
  const cqr = new CQRT();
  const ctrl = new CQRScreeningControlsT();
  ctrl.START_EPOCH = new TIMInstantT();
  ctrl.APPLY_DENSITY_CROSS_CORRELATION = true;
  ctrl.DENSITY_LOG_SIGMA = 0.18;
  const s1 = new CQRObjectSourceT();
  s1.OBJECT_ID = 'SAT-1';
  s1.DENSITY_SENSITIVITY_KM = [0.01, -2.5, 0.002];
  const s2 = new CQRObjectSourceT();
  s2.OBJECT_ID = 'SAT-2';
  s2.DENSITY_SENSITIVITY_KM = [-0.02, -2.1, -0.001];
  const pair = new CQRPairRequestT();
  pair.PRIMARY = s1;
  pair.SECONDARY = s2;
  pair.CONTROLS = ctrl;
  pair.EVALUATION_FRAME = new RFMCoordinateSystemT();
  cqr.PAIR_REQUEST = pair;
  CQR.finishCQRBuffer(b, cqr.pack(b));
  const out = CQR.getRootAsCQR(new flatbuffers.ByteBuffer(b.asUint8Array())).unpack();
  assert.equal(out.PAIR_REQUEST.CONTROLS.APPLY_DENSITY_CROSS_CORRELATION, true);
  assert.equal(out.PAIR_REQUEST.CONTROLS.DENSITY_LOG_SIGMA, 0.18);
  assert.deepEqual(out.PAIR_REQUEST.PRIMARY.DENSITY_SENSITIVITY_KM, [0.01, -2.5, 0.002]);
  assert.deepEqual(out.PAIR_REQUEST.SECONDARY.DENSITY_SENSITIVITY_KM, [-0.02, -2.1, -0.001]);
}

console.log('SDS v1.298.0 PCF/OCM/CQR E2E: PASS');
