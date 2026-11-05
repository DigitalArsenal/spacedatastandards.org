// Frame transforms of the product codec family (requirement baseline, sections 1.3 and 4): pure functions
// over a state and a covariance given by the Record; no propagation and no orbit determination.
//
// CARTPV <-> UVW: U is the unit position, W the unit orbit normal (r x v), V = W x U; a 6 x 6 state block
// rotates by blockdiag(M, M) with M the rows U, V, W, the velocity rows by the same matrix, no scaling;
// parameter rows after the state are carried unchanged. CARTPV <-> EQUINOCTIAL: the $OCM EQUINOCTIAL set
// (program decision D2), in the order a [km], af = e cos(w + fr RAAN), ag = e sin(w + fr RAAN),
// L = M + w + fr RAAN [deg], chi = tan(i/2)^fr sin RAAN, psi = tan(i/2)^fr cos RAAN and the retrograde
// factor fr (+1 or -1); the Jacobian d(cartesian)/d(a, af, ag, L, chi, psi) is analytic at the given
// elements (the eccentric longitude solved once, the partials taken through it by the chain rule) and the
// element covariance is P_eq = J^-1 P J^-T with J inverted exactly at that point. Covariance arrays are the
// $OCM's lower triangle row by row (LTM); units are the Record's: km, km/s, deg, and the parameter units.
import { ok, refuse, type Result } from './tokens.js';

export type Vec3 = readonly [number, number, number];
export type State = readonly [number, number, number, number, number, number];
/** Row-major square matrix. */
export type Matrix = number[][];
/** a km, af, ag, L deg, chi, psi, fr. */
export type Equinoctial = readonly [number, number, number, number, number, number, number];

export const EQUINOCTIAL_ORDER: readonly string[] = ['SEMI_MAJOR_AXIS', 'AF', 'AG', 'MEAN_LONGITUDE', 'CHI', 'PSI', 'RETROGRADE_FACTOR'];
export const EQUINOCTIAL_UNITS: readonly string[] = ['km', 'n/a', 'n/a', 'deg', 'n/a', 'n/a', 'n/a'];

const DEG = 180 / Math.PI;
const TWO_PI = 2 * Math.PI;

// ---- vectors and matrices -----------------------------------------------------------------------------------

export const cross = (a: Vec3, b: Vec3): Vec3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const dot = (a: Vec3, b: Vec3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const norm = (a: Vec3): number => Math.sqrt(dot(a, a));
const scale = (a: Vec3, s: number): Vec3 => [a[0] * s, a[1] * s, a[2] * s];
const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];

export function identity(n: number): Matrix {
  return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
}
export function multiply(a: Matrix, b: Matrix): Matrix {
  const n = a.length, m = b[0].length, k = b.length;
  const out: Matrix = Array.from({ length: n }, () => new Array<number>(m).fill(0));
  for (let i = 0; i < n; i++) for (let p = 0; p < k; p++) { const aip = a[i][p]; if (aip === 0) continue; for (let j = 0; j < m; j++) out[i][j] += aip * b[p][j]; }
  return out;
}
export function transpose(a: Matrix): Matrix {
  return a[0].map((_, j) => a.map((row) => row[j]));
}
/** T P T^T. */
export function transformCovariance(p: Matrix, t: Matrix): Matrix {
  return multiply(multiply(t, p), transpose(t));
}
/** The lower triangle, row by row, of an n x n matrix. */
export function fullToLtm(full: Matrix, n: number): number[] {
  const out: number[] = [];
  for (let i = 0; i < n; i++) for (let j = 0; j <= i; j++) out.push(full[i][j]);
  return out;
}
/** The symmetric n x n matrix of a lower triangle given row by row; refuses a wrong length. */
export function ltmToFull(ltm: readonly number[], n: number): Result<Matrix> {
  if (ltm.length !== (n * (n + 1)) / 2) return refuse('cov-size', `an LTM of dimension ${n} has ${(n * (n + 1)) / 2} values, not ${ltm.length}`);
  const full = identity(n);
  let at = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j <= i; j++) { full[i][j] = ltm[at]; full[j][i] = ltm[at]; at++; }
  return ok(full);
}
/** Gauss-Jordan inverse with partial pivoting; refuses a singular matrix. */
export function invert(a: Matrix): Result<Matrix> {
  const n = a.length;
  const m = a.map((row, i) => [...row, ...identity(n)[i]]);
  for (let c = 0; c < n; c++) {
    let pivot = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(m[r][c]) > Math.abs(m[pivot][c])) pivot = r;
    if (m[pivot][c] === 0) return refuse('frame-singular', `the ${n} x ${n} matrix is singular`);
    [m[c], m[pivot]] = [m[pivot], m[c]];
    const d = m[c][c];
    for (let j = 0; j < 2 * n; j++) m[c][j] /= d;
    for (let r = 0; r < n; r++) {
      if (r === c) continue;
      const f = m[r][c];
      if (f === 0) continue;
      for (let j = 0; j < 2 * n; j++) m[r][j] -= f * m[c][j];
    }
  }
  return ok(m.map((row) => row.slice(n)));
}
/** blockdiag(m, m, I_{n-6}) for a 3 x 3 rotation m and a covariance dimension n >= 6. */
export function blockRotation(m: Matrix, n: number): Matrix {
  const out = identity(n);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { out[i][j] = m[i][j]; out[i + 3][j + 3] = m[i][j]; }
  return out;
}

// ---- CARTPV <-> UVW -------------------------------------------------------------------------------------------

/** Rows U (radial), V (along-track), W (cross-track) from the position and velocity; refuses a degenerate pair. */
export function uvwBasis(r: Vec3, v: Vec3): Result<Matrix> {
  const rm = norm(r);
  if (rm === 0) return refuse('frame-degenerate', 'the position is zero');
  const w = cross(r, v);
  const wm = norm(w);
  if (wm === 0) return refuse('frame-degenerate', 'the position and velocity are parallel');
  const u = scale(r, 1 / rm);
  const wn = scale(w, 1 / wm);
  const vn = cross(wn, u);
  return ok([[...u], [...vn], [...wn]]);
}
/** A state rotated by m: position and velocity rows by the same matrix. */
export function rotateState(m: Matrix, s: State): State {
  const p: Vec3 = [s[0], s[1], s[2]], v: Vec3 = [s[3], s[4], s[5]];
  const rot = (x: Vec3): Vec3 => [dot(m[0] as unknown as Vec3, x), dot(m[1] as unknown as Vec3, x), dot(m[2] as unknown as Vec3, x)];
  const rp = rot(p), rv = rot(v);
  return [rp[0], rp[1], rp[2], rv[0], rv[1], rv[2]];
}
/** An LTM covariance of dimension n (6 state rows then parameters) rotated into the UVW frame of (r, v). */
export function covarianceToUvw(ltm: readonly number[], n: number, r: Vec3, v: Vec3): Result<number[]> {
  const basis = uvwBasis(r, v);
  if (!basis.ok) return basis;
  const full = ltmToFull(ltm, n);
  if (!full.ok) return full;
  return ok(fullToLtm(transformCovariance(full.value, blockRotation(basis.value, n)), n));
}
/** The inverse of covarianceToUvw (the rotation's transpose). */
export function covarianceFromUvw(ltm: readonly number[], n: number, r: Vec3, v: Vec3): Result<number[]> {
  const basis = uvwBasis(r, v);
  if (!basis.ok) return basis;
  const full = ltmToFull(ltm, n);
  if (!full.ok) return full;
  return ok(fullToLtm(transformCovariance(full.value, transpose(blockRotation(basis.value, n))), n));
}
/** max |M M^T - I| of a rotation. */
export function orthogonalityError(m: Matrix): number {
  const e = multiply(m, transpose(m));
  let worst = 0;
  for (let i = 0; i < m.length; i++) for (let j = 0; j < m.length; j++) worst = Math.max(worst, Math.abs(e[i][j] - (i === j ? 1 : 0)));
  return worst;
}

// ---- CARTPV <-> EQUINOCTIAL ----------------------------------------------------------------------------------

/** The equinoctial frame vectors f, g (and w) of chi = p, psi = q and the retrograde factor. */
function equinoctialFrame(p: number, q: number, fr: number): { f: Vec3; g: Vec3; w: Vec3; d: number } {
  const d = 1 + p * p + q * q;
  return {
    f: [(1 - p * p + q * q) / d, (2 * p * q) / d, (-2 * fr * p) / d],
    g: [(2 * fr * p * q) / d, ((1 + p * p - q * q) * fr) / d, (2 * q) / d],
    w: [(2 * p) / d, (-2 * q) / d, ((1 - p * p - q * q) * fr) / d],
    d,
  };
}

/** Solves lambda = F + h cos F - k sin F for the eccentric longitude F (Newton, to 1e-14). */
function eccentricLongitude(lambda: number, h: number, k: number): number {
  let f = lambda;
  for (let i = 0; i < 60; i++) {
    const g = f + h * Math.cos(f) - k * Math.sin(f) - lambda;
    const dg = 1 - h * Math.sin(f) - k * Math.cos(f);
    const step = g / dg;
    f -= step;
    if (Math.abs(step) < 1e-14) break;
  }
  return f;
}

/** The equinoctial set of a cartesian state (km, km/s) under mu (km**3/s**2); fr defaults to the orbit's sense. */
export function cartesianToEquinoctial(s: State, mu: number, fr?: number): Result<Equinoctial> {
  if (!(mu > 0)) return refuse('record-missing:GM', 'the gravitational parameter is required for an equinoctial set');
  const r: Vec3 = [s[0], s[1], s[2]], v: Vec3 = [s[3], s[4], s[5]];
  const rm = norm(r);
  const wv = cross(r, v);
  const wm = norm(wv);
  if (rm === 0 || wm === 0) return refuse('frame-degenerate', 'the position and velocity do not define an orbit plane');
  const w = scale(wv, 1 / wm);
  const sense = fr === undefined ? (w[2] >= 0 ? 1 : -1) : fr;
  if (sense !== 1 && sense !== -1) return refuse('frame-retrograde-factor', `the retrograde factor is +1 or -1, not ${fr}`);
  const denominator = 1 + sense * w[2];
  if (denominator === 0) return refuse('frame-degenerate', 'the orbit normal opposes the retrograde factor');
  const p = w[0] / denominator, q = -w[1] / denominator;
  const { f, g } = equinoctialFrame(p, q, sense);
  const energy = 2 / rm - dot(v, v) / mu;
  if (!(energy > 0)) return refuse('frame-unbound', 'the state is not an ellipse');
  const a = 1 / energy;
  const e = add(scale(cross(v, wv), 1 / mu), scale(r, -1 / rm));
  const k = dot(e, f), h = dot(e, g);
  const e2 = h * h + k * k;
  if (e2 >= 1) return refuse('frame-eccentricity', 'the eccentricity is not below one');
  const gee = Math.sqrt(1 - e2);
  const beta = 1 / (1 + gee);
  const x1 = dot(r, f) / a + k, y1 = dot(r, g) / a + h;
  const cosF = ((1 - k * k * beta) * x1 - h * k * beta * y1) / gee;
  const sinF = ((1 - h * h * beta) * y1 - h * k * beta * x1) / gee;
  const bigF = Math.atan2(sinF, cosF);
  let lambda = (bigF + h * Math.cos(bigF) - k * Math.sin(bigF)) % TWO_PI;
  if (lambda < 0) lambda += TWO_PI;
  return ok([a, k, h, lambda * DEG, p, q, sense]);
}

interface Position { a: number; h: number; k: number; p: number; q: number; fr: number; lambda: number; F: number; cF: number; sF: number; gee: number; beta: number; x1: number; y1: number; rho: number; n: number; x1d: number; y1d: number; f: Vec3; g: Vec3; d: number }

function evaluate(eq: Equinoctial, mu: number): Result<Position> {
  const [a, k, h, lDeg, p, q, fr] = eq;
  if (!(mu > 0)) return refuse('record-missing:GM', 'the gravitational parameter is required');
  if (!(a > 0)) return refuse('frame-unbound', 'the semi-major axis is not positive');
  if (fr !== 1 && fr !== -1) return refuse('frame-retrograde-factor', `the retrograde factor is +1 or -1, not ${fr}`);
  const e2 = h * h + k * k;
  if (e2 >= 1) return refuse('frame-eccentricity', 'the eccentricity is not below one');
  const lambda = lDeg / DEG;
  const F = eccentricLongitude(lambda, h, k);
  const cF = Math.cos(F), sF = Math.sin(F);
  const gee = Math.sqrt(1 - e2);
  const beta = 1 / (1 + gee);
  const x1 = a * ((1 - h * h * beta) * cF + h * k * beta * sF - k);
  const y1 = a * ((1 - k * k * beta) * sF + h * k * beta * cF - h);
  const rho = a * (1 - k * cF - h * sF);
  const n = Math.sqrt(mu / (a * a * a));
  const x1d = ((n * a * a) / rho) * (h * k * beta * cF - (1 - h * h * beta) * sF);
  const y1d = ((n * a * a) / rho) * ((1 - k * k * beta) * cF - h * k * beta * sF);
  const { f, g, d } = equinoctialFrame(p, q, fr);
  return ok({ a, h, k, p, q, fr, lambda, F, cF, sF, gee, beta, x1, y1, rho, n, x1d, y1d, f, g, d });
}

/** The cartesian state (km, km/s) of an equinoctial set under mu. */
export function equinoctialToCartesian(eq: Equinoctial, mu: number): Result<State> {
  const ev = evaluate(eq, mu);
  if (!ev.ok) return ev;
  const { x1, y1, x1d, y1d, f, g } = ev.value;
  const r = add(scale(f, x1), scale(g, y1)), v = add(scale(f, x1d), scale(g, y1d));
  return ok([r[0], r[1], r[2], v[0], v[1], v[2]]);
}

/**
 * d(x, y, z, vx, vy, vz) / d(a, af, ag, L[deg], chi, psi), analytic at the given elements: the 6 x 6 forward
 * Jacobian (fr is a discrete factor, not differentiated).
 */
export function equinoctialJacobian(eq: Equinoctial, mu: number): Result<Matrix> {
  const ev = evaluate(eq, mu);
  if (!ev.ok) return ev;
  const { a, h, k, p, q, fr, cF, sF, gee, beta, x1, y1, rho, n, x1d, y1d, f, g, d } = ev.value;
  const r = add(scale(f, x1), scale(g, y1)), v = add(scale(f, x1d), scale(g, y1d));
  const column = (dr: Vec3, dv: Vec3): number[] => [dr[0], dr[1], dr[2], dv[0], dv[1], dv[2]];
  // a: X1, Y1 scale with a at fixed F; the velocities with a^-1/2.
  const colA = column(scale(r, 1 / a), scale(v, -1 / (2 * a)));
  // lambda advances uniformly in time: d/dlambda = (d/dt)/n.
  const rm = norm(r);
  const colLambda = column(scale(v, 1 / n), scale(r, -mu / (n * rm * rm * rm)));
  // h and k at fixed lambda: F moves (dF/dh = -cos F a/rho, dF/dk = sin F a/rho).
  const betaH = (h / gee) * beta * beta, betaK = (k / gee) * beta * beta;
  const dFdh = (-cF * a) / rho, dFdk = (sF * a) / rho;
  const dX1dF = a * (-(1 - h * h * beta) * sF + h * k * beta * cF);
  const dY1dF = a * ((1 - k * k * beta) * cF - h * k * beta * sF);
  const dX1dhF = a * (-(2 * h * beta + h * h * betaH) * cF + (k * beta + h * k * betaH) * sF);
  const dX1dkF = a * (-h * h * betaK * cF + (h * beta + h * k * betaK) * sF - 1);
  const dY1dhF = a * (-k * k * betaH * sF + (k * beta + h * k * betaH) * cF - 1);
  const dY1dkF = a * (-(2 * k * beta + k * k * betaK) * sF + (h * beta + h * k * betaK) * cF);
  const A = n * a * a;
  const Px = h * k * beta * cF - (1 - h * h * beta) * sF, Py = (1 - k * k * beta) * cF - h * k * beta * sF;
  const dRhoDhF = -a * sF, dRhoDkF = -a * cF, dRhoDF = a * (k * sF - h * cF);
  const dPxDhF = (k * beta + h * k * betaH) * cF + (2 * h * beta + h * h * betaH) * sF;
  const dPxDkF = (h * beta + h * k * betaK) * cF + h * h * betaK * sF;
  const dPyDhF = -k * k * betaH * cF - (k * beta + h * k * betaH) * sF;
  const dPyDkF = -(2 * k * beta + k * k * betaK) * cF - (h * beta + h * k * betaK) * sF;
  const dPxDF = -h * k * beta * sF - (1 - h * h * beta) * cF, dPyDF = -(1 - k * k * beta) * sF - h * k * beta * cF;
  const velocity = (dP: number, dRho: number, P: number) => A * (dP / rho - (P * dRho) / (rho * rho));
  const dX1dDF = velocity(dPxDF, dRhoDF, Px), dY1dDF = velocity(dPyDF, dRhoDF, Py);
  const dX1dh = dX1dhF + dX1dF * dFdh, dY1dh = dY1dhF + dY1dF * dFdh;
  const dX1dk = dX1dkF + dX1dF * dFdk, dY1dk = dY1dkF + dY1dF * dFdk;
  const dX1ddh = velocity(dPxDhF, dRhoDhF, Px) + dX1dDF * dFdh, dY1ddh = velocity(dPyDhF, dRhoDhF, Py) + dY1dDF * dFdh;
  const dX1ddk = velocity(dPxDkF, dRhoDkF, Px) + dX1dDF * dFdk, dY1ddk = velocity(dPyDkF, dRhoDkF, Py) + dY1dDF * dFdk;
  const colH = column(add(scale(f, dX1dh), scale(g, dY1dh)), add(scale(f, dX1ddh), scale(g, dY1ddh)));
  const colK = column(add(scale(f, dX1dk), scale(g, dY1dk)), add(scale(f, dX1ddk), scale(g, dY1ddk)));
  // p and q move only the frame vectors.
  const dfdp: Vec3 = scale(add([-2 * p, 2 * q, -2 * fr], scale(f, -2 * p)), 1 / d);
  const dfdq: Vec3 = scale(add([2 * q, 2 * p, 0], scale(f, -2 * q)), 1 / d);
  const dgdp: Vec3 = scale(add([2 * fr * q, 2 * fr * p, 0], scale(g, -2 * p)), 1 / d);
  const dgdq: Vec3 = scale(add([2 * fr * p, -2 * fr * q, 2], scale(g, -2 * q)), 1 / d);
  const colP = column(add(scale(dfdp, x1), scale(dgdp, y1)), add(scale(dfdp, x1d), scale(dgdp, y1d)));
  const colQ = column(add(scale(dfdq, x1), scale(dgdq, y1)), add(scale(dfdq, x1d), scale(dgdq, y1d)));
  // Columns in the $OCM order a, af = k, ag = h, L (degrees), chi = p, psi = q.
  const columns = [colA, colK, colH, colLambda.map((x) => x / DEG), colP, colQ];
  return ok(Array.from({ length: 6 }, (_, i) => columns.map((c) => c[i])));
}

/** The 6 x 6 state block of an LTM covariance (dimension n) projected to equinoctial elements; parameter rows unchanged. */
export function covarianceToEquinoctial(ltm: readonly number[], n: number, eq: Equinoctial, mu: number): Result<number[]> {
  const j = equinoctialJacobian(eq, mu);
  if (!j.ok) return j;
  const inverse = invert(j.value);
  if (!inverse.ok) return inverse;
  const full = ltmToFull(ltm, n);
  if (!full.ok) return full;
  const t = identity(n);
  for (let i = 0; i < 6; i++) for (let c = 0; c < 6; c++) t[i][c] = inverse.value[i][c];
  return ok(fullToLtm(transformCovariance(full.value, t), n));
}
/** The inverse of covarianceToEquinoctial at the same elements. */
export function covarianceFromEquinoctial(ltm: readonly number[], n: number, eq: Equinoctial, mu: number): Result<number[]> {
  const j = equinoctialJacobian(eq, mu);
  if (!j.ok) return j;
  const full = ltmToFull(ltm, n);
  if (!full.ok) return full;
  const t = identity(n);
  for (let i = 0; i < 6; i++) for (let c = 0; c < 6; c++) t[i][c] = j.value[i][c];
  return ok(fullToLtm(transformCovariance(full.value, t), n));
}
