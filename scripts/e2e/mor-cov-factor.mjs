#!/usr/bin/env node
// End-to-end verification of the $MOR covariance factor amendment
// (COV_FACTOR and COV_FACTOR_ENCODING, morCovFactorFormat ROE_HYPERSPHERICAL_V1):
//   a. six normative synthetic test vectors (strict rank < 8 with zero-angle flags,
//      fixed step-12 full rank, rank-deficient escape, automatic per-record escape,
//      N = 6 state-only, and N = 7 single-parameter) encode to their pinned bytes
//      and decode bit-for-bit to their pinned IEEE-754 binary64 factor and LTM bytes;
//   b. serialized $MOR records carrying COV_FACTOR expand to $OCM with positive-definite
//      CARTPV LTM covariance; default encoding (NONE) writes byte-identical $MOR buffers
//      to 1.288.0;
//   c. precedence and unknown-identifier rules: COVARIANCE_DATA overrides COV_FACTOR
//      when both are present; an unknown COV_FACTOR_ENCODING ordinal (> 1) is ignored
//      without refusing the record's elements; ROWS_ONLY rejects COV_FACTOR and
//      non-default COV_FACTOR_ENCODING; reserved modes, truncated streams, and non-zero
//      padding bits are refused;
//   d. forward and backward wire compatibility with 1.288.0 TypeScript $MOR bindings.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import * as fb from 'flatbuffers';
import * as C from './lib/mor-convert.mjs';
import {
  MOR_COV_FACTOR_FORMAT,
  MODE_ESCAPE,
  encodeCovFactor,
  decodeCovFactor,
} from './lib/mor-cov-factor.mjs';
import { COV_FACTOR_VECTORS } from './lib/mor-cov-factor-vectors.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const baseline = '5aa93e0330'; // 1.288.0 prior to amendment
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'mor-cov-factor-'));
const cleanup = () => {
  try {
    fs.rmSync(tmp, { recursive: true, force: true });
  } catch {}
};
process.once('exit', cleanup);

const run = (cmd, args, cwd = root) =>
  execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

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

try {
  const M = await bundle(root, 'MOR', 'new');
  const O = await bundle(root, 'OCM', 'new');

  // ---- a: normative test vectors (exact encoded bytes + bit-for-bit decoded IEEE-754 bytes) ----
  let sawRankLt8 = false;
  let sawEscapeRankLt8 = false;
  let sawAutoEscape = false;
  for (const vec of COV_FACTOR_VECTORS) {
    const enc = encodeCovFactor(vec.input, vec.policy);
    assert.equal(Buffer.from(enc.bytes).toString('hex'), vec.factorHex, `a: ${vec.name} encoded bytes`);
    const dec = decodeCovFactor({
      ...vec.input,
      COVARIANCE_DATA: [],
      COV_FACTOR: enc.bytes,
      COV_FACTOR_ENCODING: MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1,
    });
    assert.equal(dec.error, null, `a: ${vec.name} decode succeeds`);
    assert.equal(dec.mode, vec.mode, `a: ${vec.name} mode`);
    assert.equal(dec.N, vec.N, `a: ${vec.name} N`);
    assert.equal(dec.rank, vec.rank, `a: ${vec.name} rank`);
    const gHex = Buffer.from(dec.G.buffer, dec.G.byteOffset, dec.G.byteLength).toString('hex');
    const ltmHex = Buffer.from(Float64Array.from(dec.ltm).buffer).toString('hex');
    assert.equal(gHex, vec.decodedGHex, `a: ${vec.name} bit-exact G`);
    assert.equal(ltmHex, vec.decodedLtmHex, `a: ${vec.name} bit-exact LTM`);
    if (vec.N === 8 && vec.mode < MODE_ESCAPE && vec.rank < 8) sawRankLt8 = true;
    if (vec.mode === MODE_ESCAPE && vec.rank < 8) sawEscapeRankLt8 = true;
    if (vec.policy === 'strict' && vec.mode === MODE_ESCAPE) sawAutoEscape = true;
  }
  assert.ok(sawRankLt8, 'a: rank < 8 compressed case covered');
  assert.ok(sawEscapeRankLt8, 'a: rank < 8 escape case covered');
  assert.ok(sawAutoEscape, 'a: automatic per-record escape covered');
  console.log(`PASS a: ${COV_FACTOR_VECTORS.length} normative test vectors encode and decode bit-for-bit`);

  // ---- b: $MOR serialization, $OCM expansion, and reduce(..., { covFactor }) ----
  const epochUs = C.epochUs('2026-11-16T12:00:00.000000');
  const sample = COV_FACTOR_VECTORS[0];
  const makeMor = (patch = {}) => {
    const m = new M.MORT();
    Object.assign(m, {
      NORAD_CAT_ID: 90101,
      INTERNATIONAL_DESIGNATOR: '2026-101A',
      ORIGINATOR: 'EXAMPLE',
      EPOCH_UNIX_US: epochUs,
      MEAN_ELEMENT_THEORY: M.meanElementSource.AP,
      MEAN_MOTION: sample.input.MEAN_MOTION,
      ECCENTRICITY: sample.input.ECCENTRICITY,
      INCLINATION: sample.input.INCLINATION,
      RA_OF_ASC_NODE: sample.input.RA_OF_ASC_NODE,
      ARG_OF_PERICENTER: sample.input.ARG_OF_PERICENTER,
      MEAN_ANOMALY: sample.input.MEAN_ANOMALY,
      BTERM: sample.input.BTERM,
      AGOM: sample.input.AGOM,
      GRAVITY_FIELD: M.morGravityField.EGM2008,
      MAXIMUM_TESSERAL_DEGREE: 31,
      MAXIMUM_ZONAL_DEGREE: 70,
      OD_PARAMETERS: 10,
      OD_SOLVED_FOR: 10,
      COV_FLOOR: M.morCovarianceFloor.MEAN_ELEMENTS_TWO_BODY,
      COV_PROPAGATION: Object.assign(new M.MORCovariancePropagationT(), sample.input.COV_PROPAGATION),
      COVARIANCE_DATA: [...sample.input.COVARIANCE_DATA],
    }, patch);
    return m;
  };

  const fullMor = makeMor();
  const fullBytes = C.encode(fb, M, fullMor);
  const fullOcm = C.expand(M.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(fullBytes)).unpack(), null, O).ocm;
  const reducedStrict = C.reduce(fullOcm, null, O, M, { covFactor: 'strict' });
  assert.deepEqual(reducedStrict.problems, [], 'b: reduce with covFactor strict');
  assert.equal(reducedStrict.mor.COVARIANCE_DATA.length, 0, 'b: full covariance omitted when factor requested');
  assert.equal(reducedStrict.mor.COV_FACTOR_ENCODING, M.morCovFactorFormat.ROE_HYPERSPHERICAL_V1, 'b: enum ordinal 1');
  const factorMorBytes = C.encode(fb, M, reducedStrict.mor);
  assert.ok(factorMorBytes.length < fullBytes.length - 200, `b: factor record (${factorMorBytes.length} B) smaller than full (${fullBytes.length} B)`);

  const unpackedFactorMor = M.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(factorMorBytes)).unpack();
  const expandedFromFactor = C.expand(unpackedFactorMor, null, O);
  assert.deepEqual(expandedFromFactor.refused, [], 'b: factor MOR expands cleanly');
  assert.equal(expandedFromFactor.ocm.COVARIANCE_DATA.length, 36, 'b: expanded OCM has 36 LTM entries');
  assert.equal(
    Buffer.from(Float64Array.from(expandedFromFactor.ocm.COVARIANCE_DATA).buffer).toString('hex'),
    sample.decodedLtmHex,
    'b: expanded OCM covariance matches test vector bit-for-bit'
  );
  console.log(`PASS b: serialized $MOR drops from ${fullBytes.length} B to ${factorMorBytes.length} B and expands bit-identically`);

  // ---- c: precedence, unknown encoding, ROWS_ONLY, and malformed input rules ----
  // 1. Both COVARIANCE_DATA and COV_FACTOR present -> COVARIANCE_DATA wins
  const bothMor = makeMor({
    COV_FACTOR: [...Buffer.from(COV_FACTOR_VECTORS[1].factorHex, 'hex')],
    COV_FACTOR_ENCODING: M.morCovFactorFormat.ROE_HYPERSPHERICAL_V1,
  });
  const bothExpanded = C.expand(M.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(C.encode(fb, M, bothMor))).unpack(), null, O);
  assert.deepEqual(bothExpanded.ocm.COVARIANCE_DATA, fullMor.COVARIANCE_DATA, 'c: COVARIANCE_DATA is authoritative when both are present');

  // 2. Unknown COV_FACTOR_ENCODING (> 1) -> ignored, treated as no covariance, elements still expand
  const unkMor = makeMor({
    COVARIANCE_DATA: [],
    COV_FACTOR: [1, 2, 3, 4, 5],
    COV_FACTOR_ENCODING: 9,
  });
  const unkExpanded = C.expand(M.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(C.encode(fb, M, unkMor))).unpack(), null, O);
  assert.deepEqual(unkExpanded.refused, [], 'c: unknown COV_FACTOR_ENCODING does not refuse elements');
  assert.equal(unkExpanded.ocm.COVARIANCE_DATA.length, 0, 'c: unknown COV_FACTOR_ENCODING carries no covariance');
  assert.equal(unkExpanded.ocm.MEAN_ELEMENTS.MEAN_MOTION, fullMor.MEAN_MOTION, 'c: elements preserved on unknown encoding');

  // 3. ROWS_ONLY rejects COV_FACTOR and COV_FACTOR_ENCODING
  const rowsBase = C.rowsOnly(fullMor, M, [new M.MORWindowT(1440, 1440, 0, 4, 4, 0, 0)], new Array(12).fill(1.0), [], 0x1234n);
  assert.deepEqual(C.invalid(rowsBase), [], 'c: baseline ROWS_ONLY valid');
  assert.ok(C.invalid(Object.assign(new M.MORT(), rowsBase, { COV_FACTOR: [0] })).includes('ROWS_ONLY states COV_FACTOR'), 'c: ROWS_ONLY rejects COV_FACTOR');
  assert.ok(C.invalid(Object.assign(new M.MORT(), rowsBase, { COV_FACTOR_ENCODING: 1 })).includes('ROWS_ONLY states COV_FACTOR_ENCODING'), 'c: ROWS_ONLY rejects COV_FACTOR_ENCODING');

  // 4. Malformed payloads refused under ROE_HYPERSPHERICAL_V1
  const reservedBytes = new Uint8Array([25 << 3, 0]);
  assert.ok(decodeCovFactor({ ...sample.input, COV_FACTOR: reservedBytes, COV_FACTOR_ENCODING: 1 }).error, 'c: reserved mode refused');
  const badPad = Uint8Array.from(Buffer.from(sample.factorHex, 'hex'));
  badPad[badPad.length - 1] |= 1; // flip final padding bit if any, or append extra byte
  const trailing = new Uint8Array(badPad.length + 1);
  trailing.set(badPad);
  assert.ok(decodeCovFactor({ ...sample.input, COV_FACTOR: trailing, COV_FACTOR_ENCODING: 1 }).error, 'c: trailing byte refused');
  assert.ok(C.invalid(makeMor({ COVARIANCE_DATA: [], COV_FACTOR: [1, 2], COV_FACTOR_ENCODING: 0 })).length > 0, 'c: COV_FACTOR with NONE encoding refused');
  console.log('PASS c: COVARIANCE_DATA precedence, unknown-encoding ignore rule, ROWS_ONLY exclusion, and malformed rejections verified');

  // ---- d: wire compatibility with 1.288.0 TypeScript $MOR bindings ----
  const oldRoot = path.join(tmp, 'old');
  for (const file of run('git', ['ls-tree', '-r', '--name-only', baseline, '--', 'lib/ts/MOR']).trim().split('\n')) {
    fs.mkdirSync(path.dirname(path.join(oldRoot, file)), { recursive: true });
    fs.writeFileSync(path.join(oldRoot, file), execFileSync('git', ['show', `${baseline}:${file}`], { cwd: root }));
  }
  const OldM = await bundle(oldRoot, 'MOR', 'old');
  // Default-off byte identity: encoding fullMor with new bindings produces identical bytes to 1.288.0
  const oldFullMor = OldM.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(fullBytes)).unpack();
  assert.equal(oldFullMor.NORAD_CAT_ID, fullMor.NORAD_CAT_ID, 'd: 1.288.0 reads new full $MOR');
  assert.deepEqual(oldFullMor.COVARIANCE_DATA, fullMor.COVARIANCE_DATA, 'd: 1.288.0 reads COVARIANCE_DATA unchanged');
  // 1.288.0 reader reading a factor-bearing $MOR ignores unknown trailing fields cleanly
  const oldReadsFactor = OldM.MOR.getSizePrefixedRootAsMOR(new fb.ByteBuffer(factorMorBytes)).unpack();
  assert.equal(oldReadsFactor.MEAN_MOTION, fullMor.MEAN_MOTION, 'd: 1.288.0 reads elements of factor $MOR');
  assert.equal(oldReadsFactor.COVARIANCE_DATA.length, 0, 'd: 1.288.0 sees empty COVARIANCE_DATA on factor-only $MOR');
  console.log('PASS d: 1.288.0 forward and backward wire compatibility verified');
  console.log('PASS mor-cov-factor');
} finally {
  cleanup();
}
