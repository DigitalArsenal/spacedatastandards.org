import assert from 'node:assert/strict';

import * as PROD from '../lib/js/PROD/main.js';
import { GM, ltm, states } from './fixtures/prod/records.mjs';

const must = (result) => { assert.ok(result.ok, result.ok ? '' : `${result.refusal.code}: ${result.refusal.message}`); return result.value; };
const maxAbs = (a, b) => Math.max(...a.map((x, i) => Math.abs(x - b[i])));
// The (row, column) of an LTM index.
const rowColumn = (k) => { let i = 0; while (((i + 1) * (i + 2)) / 2 <= k) i++; return [i, k - (i * (i + 1)) / 2]; };
// The entries of an LTM whose row and column are both parameter rows (i, j >= 6).
const parameterBlock = (x) => x.filter((_, k) => rowColumn(k)[1] >= 6);
const SAMPLES = [
  ['LEO', states(1)[0]],
  ['LEO later', states(40)[39]],
  ['polar', states(1, { a: 7200, inclination: 97.8, raan: 200 })[0]],
  ['GEO', states(1, { a: 42164, inclination: 0.05, raan: 75 })[0]],
  ['eccentric', [-4042.3, 5108.2, 2760.4, -5.21, -2.89, 1.37]],
  ['retrograde', states(1, { a: 7000, inclination: 170, raan: 10 })[0]],
];

describe('PROD frames: CARTPV <-> UVW', () => {
  it('builds an orthogonal UVW basis to 1e-15 and rotates position onto U, velocity by the same matrix', () => {
    for (const [name, s] of SAMPLES) {
      const m = must(PROD.uvwBasis([s[0], s[1], s[2]], [s[3], s[4], s[5]]));
      assert.ok(PROD.orthogonalityError(m) <= 1e-15, `${name}: M M^T - I within 1e-15 (${PROD.orthogonalityError(m)})`);
      const rotated = PROD.rotateState(m, s);
      const rm = Math.hypot(s[0], s[1], s[2]);
      assert.ok(Math.abs(rotated[0] - rm) < 1e-9 && Math.abs(rotated[1]) < 1e-9 && Math.abs(rotated[2]) < 1e-9, `${name}: position is radial`);
      assert.ok(Math.abs(rotated[5]) < 1e-9, `${name}: velocity has no cross-track component`);
      assert.ok(Math.abs(Math.hypot(rotated[3], rotated[4]) - Math.hypot(s[3], s[4], s[5])) < 1e-9, `${name}: velocity magnitude is kept, no scaling`);
    }
    assert.equal(PROD.uvwBasis([7000, 0, 0], [7, 0, 0]).refusal.code, 'frame-degenerate');
  });

  it('round-trips an 11 x 11 covariance through UVW to print precision and leaves the parameter rows unchanged', () => {
    const n = 11;
    const p = ltm(n);
    for (const [name, s] of SAMPLES) {
      const r = [s[0], s[1], s[2]], v = [s[3], s[4], s[5]];
      const uvw = must(PROD.covarianceToUvw(p, n, r, v));
      const back = must(PROD.covarianceFromUvw(uvw, n, r, v));
      const scale = Math.max(...p.map(Math.abs));
      assert.ok(maxAbs(back, p) / scale < 1e-12, `${name}: covariance round trip within 1e-12 relative`);
      assert.deepEqual(parameterBlock(uvw), parameterBlock(p), `${name}: the parameter block is carried unchanged`);
      assert.equal(parameterBlock(p).length, 15, 'five parameter rows: 15 entries among themselves');
      const full = must(PROD.ltmToFull(uvw, n));
      for (let i = 0; i < 3; i++) assert.ok(full[i][i] > 0, `${name}: UVW position variances stay positive`);
    }
    assert.equal(PROD.ltmToFull([1, 2, 3], 3).refusal.code, 'cov-size');
  });
});

describe('PROD frames: CARTPV <-> EQUINOCTIAL (the $OCM EQUINOCTIAL set, D2)', () => {
  it('converts a state to the seven equinoctial values and back to 1e-8', () => {
    for (const [name, s] of SAMPLES) {
      const eq = must(PROD.cartesianToEquinoctial(s, GM));
      assert.equal(eq.length, 7);
      assert.ok(eq[6] === 1 || eq[6] === -1, `${name}: the retrograde factor is +1 or -1`);
      assert.ok(eq[3] >= 0 && eq[3] < 360, `${name}: the mean longitude is in degrees, [0, 360)`);
      const back = must(PROD.equinoctialToCartesian(eq, GM));
      assert.ok(maxAbs(back, s) < 1e-8, `${name}: state round trip within 1e-8 (${maxAbs(back, s)})`);
      const rm = Math.hypot(s[0], s[1], s[2]), v2 = s[3] ** 2 + s[4] ** 2 + s[5] ** 2;
      assert.ok(Math.abs(eq[0] - 1 / (2 / rm - v2 / GM)) < 1e-9, `${name}: the semi-major axis is the vis-viva one`);
    }
    assert.equal(must(PROD.cartesianToEquinoctial(SAMPLES[5][1], GM))[6], -1, 'a 170 degree inclination is retrograde');
    assert.equal(PROD.cartesianToEquinoctial(SAMPLES[0][1], 0).refusal.code, 'record-missing:GM');
    assert.equal(PROD.cartesianToEquinoctial([7000, 0, 0, 0, 20, 0], GM).refusal.code, 'frame-unbound');
  });

  it('matches central differences with its analytic Jacobian and round-trips through its inverse at the same point', () => {
    const steps = [1e-3, 1e-7, 1e-7, 1e-5, 1e-7, 1e-7];
    for (const [name, s] of SAMPLES) {
      const eq = must(PROD.cartesianToEquinoctial(s, GM));
      const j = must(PROD.equinoctialJacobian(eq, GM));
      for (let c = 0; c < 6; c++) {
        const plus = [...eq], minus = [...eq];
        plus[c] += steps[c]; minus[c] -= steps[c];
        const sp = must(PROD.equinoctialToCartesian(plus, GM)), sm = must(PROD.equinoctialToCartesian(minus, GM));
        const numeric = sp.map((x, r) => (x - sm[r]) / (2 * steps[c]));
        // Position rows and velocity rows each against the largest entry of their group in this column.
        for (const rows of [[0, 1, 2], [3, 4, 5]]) {
          const scale = Math.max(...rows.map((r) => Math.max(Math.abs(numeric[r]), Math.abs(j[r][c]))));
          for (const r of rows) assert.ok(Math.abs(j[r][c] - numeric[r]) <= 1e-6 * scale, `${name}: J[${r}][${c}] analytic ${j[r][c]} vs central ${numeric[r]} (scale ${scale})`);
        }
      }
      const inverse = must(PROD.invert(j));
      const product = PROD.multiply(j, inverse);
      let worst = 0;
      for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) worst = Math.max(worst, Math.abs(product[r][c] - (r === c ? 1 : 0)));
      assert.ok(worst < 1e-9, `${name}: J J^-1 = I within 1e-9 (${worst})`);
      const n = 8;
      const p = ltm(n);
      const eqCov = must(PROD.covarianceToEquinoctial(p, n, eq, GM));
      const back = must(PROD.covarianceFromEquinoctial(eqCov, n, eq, GM));
      const scale = Math.max(...p.map(Math.abs));
      assert.ok(maxAbs(back, p) / scale < 1e-9, `${name}: covariance round trip through the Jacobian within 1e-9 relative`);
      assert.deepEqual(eqCov.slice(21).filter((_, k) => k === 6 || k === 14), p.slice(21).filter((_, k) => k === 6 || k === 14), `${name}: parameter variances unchanged`);
    }
  });
});
