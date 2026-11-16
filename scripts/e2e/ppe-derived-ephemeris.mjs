#!/usr/bin/env node
// A derived polynomial ephemeris ($PPE, 1.285.0) standalone and embedded in an $OCM as DERIVED_EPHEMERIS.
//   a. a $PPE with REFERENCE_EPOCH, BUILD, two served records (offsets, head counts; one with velocity, its
//      position series padded with a zero coefficient) and one unserved window is written and read back with the
//      new bindings: every value equal, every tail coefficient an exact binary32 value, every head non-trivially
//      binary64;
//   b. the same $PPE embedded in an $OCM beside MEAN_ELEMENTS is written and read back: every value equal;
//   c. both byte streams, and an $OEM block carrying the same records, are read with the committed bindings of
//      1.284.0: every field that existed reads exactly as the 1.284.0 writer's own bytes of the same values, the C++
//      Verifier of the committed 1.284.0 and new headers accepts each buffer and refuses a corrupt copy, and the old
//      reader evaluates every served record (ISO EPOCH_MID) to the same bits as the new reader (EPOCH_MID_SECONDS);
//   d. the records of the standalone $PPE and of the embedded table are identical.
// The comparison with a builder's own rows comes when a builder writes the section.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import * as fb from 'flatbuffers';

const root = fileURLToPath(new URL('../../', import.meta.url));
const baseline = 'd1b6ac17b1'; // 1.284.0
// Inside the repository, so the old bindings resolve its flatbuffers package; removed at the end.
const tmp = fs.mkdtempSync(path.join(root, '.ppe-derived-'));
const run = (cmd, args, cwd = root) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const sha = (s) => [...crypto.createHash('sha256').update(s).digest()];
const NEW_RECORD_FIELDS = ['EPOCH_MID_SECONDS', 'POS_COEFF_HEAD_COUNT', 'VEL_COEFF_HEAD_COUNT'];

// Clenshaw, from the highest index down, as a builder's evaluator runs it.
const cheb = (c, tau) => {
  let b1 = 0, b2 = 0;
  for (let k = c.length - 1; k >= 1; --k) { const t = 2 * tau * b1 - b2 + c[k]; b2 = b1; b1 = t; }
  return tau * b1 - b2 + c[0];
};
const bundle = async (base, code, tag) => {
  const out = path.join(tmp, `${tag}-${code}.mjs`);
  await build({ entryPoints: [path.join(base, `lib/ts/${code}/main.ts`)], bundle: true, platform: 'node',
    format: 'esm', outfile: out, logLevel: 'silent' });
  return import(pathToFileURL(out));
};
const write = (name, bytes) => { const f = path.join(tmp, name); fs.writeFileSync(f, bytes); return f; };
const finish = (value, id) => { const b = new fb.Builder(4096); b.finish(value.pack(b), id); return b.asUint8Array(); };
// The same values without the classes of a binding (two bindings carry their own copies of the PPE classes).
const plain = (v) => structuredClone(v);

try {
  const old = path.join(tmp, 'old');
  for (const code of ['PPE', 'OCM', 'OEM']) {
    for (const file of run('git', ['ls-tree', '-r', '--name-only', baseline, '--', `schema/${code}`, `lib/ts/${code}`]).trim().split('\n')) {
      fs.mkdirSync(path.dirname(path.join(old, file)), { recursive: true });
      fs.writeFileSync(path.join(old, file), execFileSync('git', ['show', `${baseline}:${file}`], { cwd: root }));
    }
  }
  for (const dep of run('git', ['ls-tree', '-d', '--name-only', `${baseline}:schema`]).trim().split('\n')) {
    const file = `schema/${dep}/main.fbs`;
    if (fs.existsSync(path.join(old, file))) continue;
    fs.mkdirSync(path.dirname(path.join(old, file)), { recursive: true });
    fs.writeFileSync(path.join(old, file), execFileSync('git', ['show', `${baseline}:${file}`], { cwd: root }));
  }
  const N = { PPE: await bundle(root, 'PPE', 'new'), OCM: await bundle(root, 'OCM', 'new'), OEM: await bundle(root, 'OEM', 'new') };
  const O = { PPE: await bundle(old, 'PPE', 'old'), OCM: await bundle(old, 'OCM', 'old'), OEM: await bundle(old, 'OEM', 'old') };

  // ---- the values -------------------------------------------------------------------------------------------
  const REF = '2026-11-16T00:00:00.000Z';
  const iso = (s) => new Date(Date.parse(REF) + s * 1000).toISOString();
  const f32 = (v) => Math.fround(v);
  // Record A: position only, 6 coefficients, head 4. Record B: position 5 (padded to 6 with a zero), velocity 6,
  // position head 3, velocity head 4.
  const A = {
    EPOCH_MID: iso(1440), EPOCH_HALF_SPAN: 1440, NUM_COEFFICIENTS: 6, EPOCH_MID_SECONDS: 1440,
    POS_COEFF_HEAD_COUNT: 4, VEL_COEFF_HEAD_COUNT: 65535, HAS_VELOCITY_COEFFICIENTS: false,
    POS_COEFF_X: [-4021.123456789012, 2671.0987654321, 33.10000000000001, -1.2345678901234, f32(3.3e-3), f32(-1.7e-5)],
    POS_COEFF_Y: [5112.987654321098, 1530.1234567890, -21.70000000000002, 0.98765432109876, f32(-2.1e-3), f32(4.4e-6)],
    POS_COEFF_Z: [1180.555555555555, -6011.4444444444, 9.300000000000004, -0.31415926535898, f32(1.2e-3), f32(-9.9e-7)],
    VEL_COEFF_X: [], VEL_COEFF_Y: [], VEL_COEFF_Z: [],
  };
  const B = {
    EPOCH_MID: iso(4320), EPOCH_HALF_SPAN: 1440, NUM_COEFFICIENTS: 6, EPOCH_MID_SECONDS: 4320,
    POS_COEFF_HEAD_COUNT: 3, VEL_COEFF_HEAD_COUNT: 4, HAS_VELOCITY_COEFFICIENTS: true,
    POS_COEFF_X: [1534.2718281828459, -6620.161803398875, 12.345678901234567, f32(2.5e-2), f32(-3.75e-4), 0],
    POS_COEFF_Y: [-4377.7071067811865, -1903.732050807569, -7.654321098765432, f32(-1.25e-2), f32(6.1e-5), 0],
    POS_COEFF_Z: [5023.3141592653589, 2088.0577215664901, 3.1415926535897931, f32(8.0e-3), f32(-2.0e-5), 0],
    VEL_COEFF_X: [6.123456789012345, 1.4142135623730951, -0.0123456789012345, 0.00045678901234567, f32(-7.0e-6), f32(1.1e-7)],
    VEL_COEFF_Y: [-2.718281828459045, 3.1622776601683795, 0.0234567890123456, -0.00034567890123456, f32(5.0e-6), f32(-2.2e-7)],
    VEL_COEFF_Z: [-5.432109876543210, -0.5772156649015329, 0.0034567890123456, 0.00012345678901234, f32(-1.5e-6), f32(3.3e-8)],
  };
  const records = [A, B];
  for (const r of records) {
    for (const [axes, h] of [[['POS_COEFF_X', 'POS_COEFF_Y', 'POS_COEFF_Z'], r.POS_COEFF_HEAD_COUNT],
      [['VEL_COEFF_X', 'VEL_COEFF_Y', 'VEL_COEFF_Z'], r.VEL_COEFF_HEAD_COUNT]]) {
      for (const a of axes) {
        r[a].forEach((c, k) => {
          if (k >= h) assert.ok(Object.is(f32(c), c), `${a}[${k}] is binary32`);
        });
        if (r[a].length) assert.ok(r[a].slice(0, Math.min(h, r[a].length)).some((c) => !Object.is(f32(c), c)), `${a} head is binary64`);
      }
    }
  }
  const frame = (M) => Object.assign(new M.RFMT(), { REFERENCE_FRAME_type: M.RFMUnion.CelestialFrameWrapper,
    REFERENCE_FRAME: Object.assign(new M.CelestialFrameWrapperT(), { frame: M.CelestialFrame.TEMEOFDATE }) });
  const record = (M, r, withNew) => {
    const t = Object.assign(new M.PPEPositionRecordT(), r);
    if (!withNew) for (const k of NEW_RECORD_FIELDS) delete t[k];
    return t;
  };
  const ppe = (M, withNew) => {
    const t = Object.assign(new M.PPET(), {
      CENTER_NAME: 'EARTH', REFERENCE_FRAME: frame(M), TIME_SYSTEM: M.timingStandard.UTC,
      START_TIME: iso(0), STOP_TIME: iso(8640), EPHEMERIS_SOURCE: 'ppe-derived-ephemeris E2E',
      NOMINAL_SEGMENT_SPAN: 2880, NOMINAL_NUM_COEFFICIENTS: 6,
      POSITION_RECORDS: records.map((r) => record(M, r, withNew)),
    });
    if (withNew) Object.assign(t, {
      REFERENCE_EPOCH: REF,
      BUILD: Object.assign(new M.PPEBuildT(), { BUILDER_NAME: 'e2e-builder', BUILDER_VERSION: '1.0.0',
        BUILDER_DIGEST: sha('builder'), RECORD_DIGEST: sha('record'), ENVIRONMENT_DIGEST: sha('environment'),
        TOL_POSITION: 5e-6, TOL_VELOCITY: 5e-8 }),
      UNSERVED_MID_SECONDS: [7200], UNSERVED_HALF_SPAN: [1440], UNSERVED_STATUS: [M.ppeWindowStatus.THEORY_REFUSED],
    });
    return t;
  };
  const ocm = (M, withNew) => {
    const t = Object.assign(new M.OCMT(), {
      CENTER_NAME: 'EARTH', TRAJ_REF_FRAME: frame(M), ORB_AVERAGING: 'AP',
      MEAN_ELEMENTS: Object.assign(new M.OCMMeanElementsT(), { MEAN_ELEMENT_THEORY: M.meanElementSource.AP,
        EPOCH: REF, MEAN_MOTION: 15.5, ECCENTRICITY: 0.0007, INCLINATION: 51.64, RA_OF_ASC_NODE: 120.5,
        ARG_OF_PERICENTER: 80.25, MEAN_ANOMALY: 279.9, BTERM: 0.0123, AGOM: 0.0045 }),
    });
    if (withNew) t.DERIVED_EPHEMERIS = ppe(M, true);
    return t;
  };
  const oem = (M, withNew) => Object.assign(new M.OEMT(), {
    EPHEMERIS_DATA_BLOCK: [Object.assign(new M.ephemerisDataBlockT(), { CENTER_NAME: 'EARTH', REFERENCE_FRAME: frame(M),
      START_TIME: iso(0), STOP_TIME: iso(5760), INTERPOLATION: 'Chebyshev',
      POLYNOMIAL_POSITION_RECORDS: records.map((r) => record(M, r, withNew)) })],
  });

  // ---- a, b: write and read back with the new bindings ------------------------------------------------------------
  const bytes = { PPE: finish(ppe(N.PPE, true), '$PPE'), OCM: finish(ocm(N.OCM, true), '$OCM'), OEM: finish(oem(N.OEM, true), '$OEM') };
  const readNew = {
    PPE: N.PPE.PPE.getRootAsPPE(new fb.ByteBuffer(bytes.PPE)).unpack(),
    OCM: N.OCM.OCM.getRootAsOCM(new fb.ByteBuffer(bytes.OCM)).unpack(),
    OEM: N.OEM.OEM.getRootAsOEM(new fb.ByteBuffer(bytes.OEM)).unpack(),
  };
  assert.ok(N.PPE.PPE.bufferHasIdentifier(new fb.ByteBuffer(bytes.PPE)));
  assert.ok(N.OCM.OCM.bufferHasIdentifier(new fb.ByteBuffer(bytes.OCM)));
  assert.deepStrictEqual(readNew.PPE, ppe(N.PPE, true), 'a: $PPE reads back every value');
  assert.deepStrictEqual(readNew.OCM, ocm(N.OCM, true), 'b: $OCM with DERIVED_EPHEMERIS reads back every value');
  assert.deepStrictEqual(readNew.OEM, oem(N.OEM, true), '$OEM records read back every value');
  for (const r of readNew.PPE.POSITION_RECORDS) {
    for (const a of ['POS_COEFF_X', 'POS_COEFF_Y', 'POS_COEFF_Z']) {
      const tail = r[a].slice(r.POS_COEFF_HEAD_COUNT);
      assert.deepStrictEqual([...new Uint32Array(Float32Array.from(tail).buffer)],
        [...new Uint32Array(Float32Array.from(records.find((x) => x.EPOCH_MID === r.EPOCH_MID)[a].slice(r.POS_COEFF_HEAD_COUNT)).buffer)],
        `a: ${a} tail bits`);
    }
  }
  console.log('PASS a: standalone $PPE: REFERENCE_EPOCH, BUILD, 2 served records, 1 unserved window, binary32 tails');
  console.log('PASS b: $OCM MEAN_ELEMENTS + DERIVED_EPHEMERIS');

  // ---- c: the 1.284.0 readers --------------------------------------------------------------------------------------
  const oldBytes = { PPE: finish(ppe(O.PPE, false), '$PPE'), OCM: finish(ocm(O.OCM, false), '$OCM'), OEM: finish(oem(O.OEM, false), '$OEM') };
  const readOld = (code, b) => O[code][code][`getRootAs${code}`](new fb.ByteBuffer(b)).unpack();
  // The flatbuffers C++ Verifier of the committed 1.284.0 and new headers; a corrupt buffer must be refused.
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  const verifiers = {};
  for (const [tag, base] of [['old', old], ['new', root]]) {
    const copyHeader = (code) => {
      const header = path.join(tmp, `cpp-${tag}`, code, 'main_generated.h');
      if (fs.existsSync(header)) return header;
      fs.mkdirSync(path.dirname(header), { recursive: true });
      const text = tag === 'old' ? execFileSync('git', ['show', `${baseline}:lib/cpp/${code}/main_generated.h`], { cwd: root, encoding: 'utf8' })
        : fs.readFileSync(path.join(base, `lib/cpp/${code}/main_generated.h`), 'utf8');
      fs.writeFileSync(header, text);
      for (const m of text.matchAll(/^#include "\.\.\/([A-Z0-9]+)\/main_generated\.h"/gm)) copyHeader(m[1]);
      return header;
    };
    for (const code of ['PPE', 'OCM', 'OEM']) {
      const header = copyHeader(code);
      const src = write(`verify-${tag}-${code}.cpp`, `#include <fstream>\n#include <iterator>\n#include <vector>\n#include "${header}"\n`
        + `int main(int c, char** v) { for (int i = 1; i < c; ++i) { std::ifstream f(v[i], std::ios::binary);\n`
        + `  std::vector<uint8_t> b((std::istreambuf_iterator<char>(f)), std::istreambuf_iterator<char>());\n`
        + `  flatbuffers::Verifier ver(b.data(), b.size()); if (!Verify${code}Buffer(ver)) return 1; } return 0; }\n`);
      verifiers[`${tag}-${code}`] = path.join(tmp, `verify-${tag}-${code}`);
      run(process.env.CXX || 'c++', ['-std=c++17', '-O0', '-I', include, src, '-o', verifiers[`${tag}-${code}`]], tmp);
    }
  }
  for (const code of ['PPE', 'OCM', 'OEM']) {
    assert.deepStrictEqual(readOld(code, bytes[code]), readOld(code, oldBytes[code]), `c: 1.284.0 reads every existing ${code} field unchanged`);
    const files = [write(`new-${code}.bin`, bytes[code]), write(`old-${code}.bin`, oldBytes[code])];
    for (const tag of ['old', 'new']) run(verifiers[`${tag}-${code}`], files, tmp);
    const corrupt = Uint8Array.from(bytes[code]); new DataView(corrupt.buffer).setUint32(0, corrupt.length + 64, true);
    for (const tag of ['old', 'new']) {
      assert.throws(() => run(verifiers[`${tag}-${code}`], [write(`corrupt-${code}.bin`, corrupt)], tmp), `c: the ${tag} verifier refuses a corrupt ${code}`);
    }
  }
  const oldRecords = readOld('PPE', bytes.PPE).POSITION_RECORDS;
  const newRecords = readNew.PPE.POSITION_RECORDS;
  let evaluations = 0;
  for (let i = 0; i < newRecords.length; ++i) {
    const o = oldRecords[i], n = newRecords[i];
    const oldMid = (Date.parse(o.EPOCH_MID) - Date.parse(REF)) / 1000;
    assert.ok(Object.is(oldMid, n.EPOCH_MID_SECONDS), 'c: EPOCH_MID states the instant EPOCH_MID_SECONDS gives');
    for (let j = 0; j <= 16; ++j) {
      const t = n.EPOCH_MID_SECONDS + n.EPOCH_HALF_SPAN * (-1 + j / 8);
      const tauNew = (t - n.EPOCH_MID_SECONDS) / n.EPOCH_HALF_SPAN;
      const tauOld = (t - oldMid) / o.EPOCH_HALF_SPAN;
      const axes = ['X', 'Y', 'Z'].flatMap((a) => (n.HAS_VELOCITY_COEFFICIENTS ? [`POS_COEFF_${a}`, `VEL_COEFF_${a}`] : [`POS_COEFF_${a}`]));
      for (const a of axes) {
        assert.ok(Object.is(cheb(o[a], tauOld), cheb(n[a], tauNew)), `c: ${a} evaluates to the same bits`);
        // The zero padding of record B leaves the evaluation unchanged.
        const trimmed = n[a].slice(0, n[a].length - (n[a][n[a].length - 1] === 0 ? 1 : 0));
        assert.ok(Object.is(cheb(trimmed, tauNew), cheb(n[a], tauNew)), `c: ${a} zero padding is inert`);
        evaluations += 1;
      }
    }
  }
  console.log(`PASS c: 1.284.0 TypeScript reads $PPE, $OCM and $OEM unchanged; 1.284.0 and new C++ Verifiers accept them and refuse corrupt copies; ${evaluations} evaluations bit-equal`);

  // ---- d: standalone and embedded carry the same records -----------------------------------------------------------
  assert.deepStrictEqual(plain(readNew.OCM.DERIVED_EPHEMERIS), plain(readNew.PPE), 'd: embedded and standalone $PPE are identical');
  assert.deepStrictEqual(plain(readNew.OEM.EPHEMERIS_DATA_BLOCK[0].POLYNOMIAL_POSITION_RECORDS), plain(readNew.PPE.POSITION_RECORDS),
    'd: the $OEM block carries the same records');
  console.log('PASS d: standalone $PPE, embedded DERIVED_EPHEMERIS and $OEM records identical');
  console.log('PASS ppe-derived-ephemeris');
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
