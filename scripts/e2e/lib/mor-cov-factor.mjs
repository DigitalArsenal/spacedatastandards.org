// Reference encoder and decoder for the Space Data Standards $MOR covariance
// factor (morCovFactorFormat = ROE_HYPERSPHERICAL_V1, ordinal 1).
//
// Zero external dependencies. Every floating-point operation on the decode path
// uses only IEEE-754 binary64 +, -, *, /, Math.sqrt, and Math.floor in a fixed
// parenthesized order so independent implementations decode the identical matrix
// to the last bit.

export const MOR_COV_FACTOR_FORMAT = {
  NONE: 0,
  ROE_HYPERSPHERICAL_V1: 1,
};

export const MODE_MAX_STEP = 20;
export const MODE_ESCAPE = 31;

// Exact IEEE-754 binary64 constants for the coordinate map and floor addition.
export const K_KE = 0.074366859954178854;
export const K_RE = 6378.1363;
export const K_MU_ER = K_KE * K_KE;
export const K_MU_KM = (((K_MU_ER * K_RE) * K_RE) * K_RE) / 3600.0;
export const PI = 3.141592653589793;
export const INV_PI = 0.3183098861837907;
export const LOG2_SIGMA_LO = -26.0;
export const LOG2_SIGMA_HI = 18.0;
export const LOG2_SIGMA_SPAN = 44.0;

// Validity domain (schema/MOR/COV_FACTOR.md section 3): every bound an exact binary64 value. A record outside it is
// refused: no covariance from COV_FACTOR, never a partial result.
export const DOMAIN = {
  MEAN_MOTION_MIN: 0.0000152587890625, // 2^-16 rev/day
  MEAN_MOTION_MAX: 256.0, // 2^8 rev/day
  INCLINATION_MIN: 0.0000000009313225746154785, // 2^-30 deg (or exactly 0)
  INCLINATION_MAX: 180.0,
  ANGLE_MIN: -360.0, // RA_OF_ASC_NODE, ARG_OF_PERICENTER, MEAN_ANOMALY
  ANGLE_MAX: 360.0,
  VALUE_ABS_MIN: 3.054936363499605e-151, // 2^-500: a floor scalar or escape value is 0 or at least this in magnitude
  FLOOR_ABS_MAX: 68719476736.0, // 2^36 km^2
  ESCAPE_ABS_MAX: 4294967296.0, // 2^32
  FACTOR_BYTES_MIN: 2,
  FACTOR_BYTES_MAX: 289,
  CBRT_REDUCTION_STEPS: 16,
};

// Only bits 1 (DRAG_AREA_OVER_MASS) and 3 (SRP_AREA_OVER_MASS) are covariance rows; bit 6 (ECOM2_Y0) is not.
const COV_PARAMETER_BITS = [1, 3];

// Odd Taylor coefficients of sin(pi * t) on t in [-0.5, 0.5], degrees 1..21.
const SIN_C1 = 3.141592653589793;
const SIN_C3 = -5.16771278004997;
const SIN_C5 = 2.5501640398773455;
const SIN_C7 = -0.5992645293207921;
const SIN_C9 = 0.08214588661112823;
const SIN_C11 = -0.0073704309457143504;
const SIN_C13 = 0.00046630280576761255;
const SIN_C15 = -2.1915353447830217e-5;
const SIN_C17 = 7.952054001475513e-7;
const SIN_C19 = -2.2948428997269873e-8;
const SIN_C21 = 5.392664662608129e-10;

// Even Taylor coefficients of cos(pi * t) - 1 on t in [-0.5, 0.5], degrees 2..20.
const COS_C2 = -4.934802200544679;
const COS_C4 = 4.0587121264167685;
const COS_C6 = -1.3352627688545895;
const COS_C8 = 0.2353306303588932;
const COS_C10 = -0.02580689139001406;
const COS_C12 = 0.0019295743094039231;
const COS_C14 = -0.0001046381049248457;
const COS_C16 = 4.303069587032947e-6;
const COS_C18 = -1.3878952462213771e-7;
const COS_C20 = 3.604730797462501e-9;

// Taylor coefficients of 2^f - 1 = exp(f * ln 2) - 1 on f in [-0.5, 0.5], degrees 1..15.
const EXP2_C1 = 0.6931471805599453;
const EXP2_C2 = 0.24022650695910072;
const EXP2_C3 = 0.05550410866482158;
const EXP2_C4 = 0.009618129107628477;
const EXP2_C5 = 0.0013333558146428443;
const EXP2_C6 = 0.0001540353039338161;
const EXP2_C7 = 1.5252733804059841e-5;
const EXP2_C8 = 1.321548679014431e-6;
const EXP2_C9 = 1.01780860092397e-7;
const EXP2_C10 = 7.054911620801123e-9;
const EXP2_C11 = 4.4455382718708116e-10;
const EXP2_C12 = 2.5678435993488206e-11;
const EXP2_C13 = 1.3691488853904128e-12;
const EXP2_C14 = 6.778726354822545e-14;
const EXP2_C15 = 3.1324367070884287e-15;

// Canonical lexicographic table of the 24 permutations of [2, 3, 4, 5].
export const TAIL_PERMUTATIONS = [
  [2, 3, 4, 5], [2, 3, 5, 4], [2, 4, 3, 5], [2, 4, 5, 3], [2, 5, 3, 4], [2, 5, 4, 3],
  [3, 2, 4, 5], [3, 2, 5, 4], [3, 4, 2, 5], [3, 4, 5, 2], [3, 5, 2, 4], [3, 5, 4, 2],
  [4, 2, 3, 5], [4, 2, 5, 3], [4, 3, 2, 5], [4, 3, 5, 2], [4, 5, 2, 3], [4, 5, 3, 2],
  [5, 2, 3, 4], [5, 2, 4, 3], [5, 3, 2, 4], [5, 3, 4, 2], [5, 4, 2, 3], [5, 4, 3, 2],
];

const canonZero = (x) => (x === 0.0 ? 0.0 : x);

/// Deterministic [sin(pi * x), cos(pi * x)] using only +, -, *, and Math.floor.
export function sincosPi(x) {
  const u = 2.0 * x;
  const q = Math.floor(u + 0.5);
  const z = 0.5 * (u - q);
  const z2 = z * z;
  const pSin =
    SIN_C1 + z2 * (SIN_C3 + z2 * (SIN_C5 + z2 * (SIN_C7 + z2 * (SIN_C9 +
    z2 * (SIN_C11 + z2 * (SIN_C13 + z2 * (SIN_C15 + z2 * (SIN_C17 + z2 * (SIN_C19 + z2 * SIN_C21)))))))));
  const s0 = z * pSin;
  const pCos =
    COS_C2 + z2 * (COS_C4 + z2 * (COS_C6 + z2 * (COS_C8 + z2 * (COS_C10 +
    z2 * (COS_C12 + z2 * (COS_C14 + z2 * (COS_C16 + z2 * (COS_C18 + z2 * COS_C20))))))));
  const c0 = 1.0 + (z2 * pCos);
  const quad = ((q % 4) + 4) % 4;
  if (quad === 0) return [canonZero(s0), canonZero(c0)];
  if (quad === 1) return [canonZero(c0), canonZero(-s0)];
  if (quad === 2) return [canonZero(-s0), canonZero(-c0)];
  return [canonZero(-c0), canonZero(s0)];
}

/// Deterministic cube root for x > 0 using exact power-of-8 scaling and 6 Newton steps. Each scaling loop runs at
/// most DOMAIN.CBRT_REDUCTION_STEPS times; an argument it cannot bring into [0.5, 4) returns NaN (refused). Inside
/// the mean-motion domain the argument is in [0.0044, 1.25e12]: at most 13 steps down or 3 up.
export function cbrtPos(x) {
  if (!(x > 0.0) || !Number.isFinite(x)) return NaN;
  let m = x;
  let s = 1.0;
  for (let it = 0; it < DOMAIN.CBRT_REDUCTION_STEPS && m >= 4.0; it++) {
    m = m * 0.125;
    s = s * 2.0;
  }
  for (let it = 0; it < DOMAIN.CBRT_REDUCTION_STEPS && m < 0.5; it++) {
    m = m * 8.0;
    s = s * 0.5;
  }
  if (!(m >= 0.5 && m < 4.0)) return NaN;
  let y = 0.55 + (0.3 * m);
  for (let it = 0; it < 6; it++) {
    y = ((2.0 * y) + (m / (y * y))) / 3.0;
  }
  return s * y;
}

/// Deterministic 2^x for x in [-26, 18] using exact binary scale and degree-15 Horner polynomial.
export function exp2Det(x) {
  const k = Math.floor(x + 0.5);
  const f = x - k;
  const poly =
    1.0 + f * (EXP2_C1 + f * (EXP2_C2 + f * (EXP2_C3 + f * (EXP2_C4 + f * (EXP2_C5 +
    f * (EXP2_C6 + f * (EXP2_C7 + f * (EXP2_C8 + f * (EXP2_C9 + f * (EXP2_C10 +
    f * (EXP2_C11 + f * (EXP2_C12 + f * (EXP2_C13 + f * (EXP2_C14 + f * EXP2_C15))))))))))))));
  const scale = k >= 0 ? Number(1 << k) : (1.0 / Number(1 << (-k)));
  return scale * poly;
}

/// Exact power of two 2^b for integer 0 <= b <= 52 as IEEE-754 binary64.
function pow2Int(b) {
  return b < 31 ? Number(1 << b) : Number(1 << 30) * Number(1 << (b - 30));
}

/// Count solved covariance dynamic parameters in OD_SOLVED_FOR; returns -1 if unsupported bits are set.
export function solvedCovParamCount(odSolvedFor) {
  const mask = (odSolvedFor >>> 0);
  // Bit 6 (ECOM2_Y0) is not a covariance row; only bits 1 and 3 are valid MOR covariance parameters.
  const allowed = (1 << 1) | (1 << 3) | (1 << 6);
  if ((mask & ~allowed) !== 0) return -1;
  let count = 0;
  for (const bit of COV_PARAMETER_BITS) {
    if (((mask >>> bit) & 1) !== 0) count++;
  }
  return count;
}

/// Deterministic two-body TEME state (km, km/s) from stated MOR mean elements at epoch; null outside the domain.
export function twoBodyState(m) {
  const inRange = (x, lo, hi) => x >= lo && x <= hi; // false for NaN
  if (
    !inRange(Number(m.MEAN_MOTION), DOMAIN.MEAN_MOTION_MIN, DOMAIN.MEAN_MOTION_MAX) ||
    !(Number(m.ECCENTRICITY) >= 0.0 && Number(m.ECCENTRICITY) < 1.0) ||
    !(Number(m.INCLINATION) === 0.0 || inRange(Number(m.INCLINATION), DOMAIN.INCLINATION_MIN, DOMAIN.INCLINATION_MAX)) ||
    !inRange(Number(m.RA_OF_ASC_NODE), DOMAIN.ANGLE_MIN, DOMAIN.ANGLE_MAX) ||
    !inRange(Number(m.ARG_OF_PERICENTER), DOMAIN.ANGLE_MIN, DOMAIN.ANGLE_MAX) ||
    !inRange(Number(m.MEAN_ANOMALY), DOMAIN.ANGLE_MIN, DOMAIN.ANGLE_MAX)
  ) {
    return null;
  }
  return twoBodyStateOf(m);
}

/// The same state without the record domain, for the writer's own perturbed and propagated elements (finite values
/// only; the cube root still refuses an argument it cannot reduce).
function twoBodyStateOf(m) {
  const nRev = Number(m.MEAN_MOTION);
  const e = Number(m.ECCENTRICITY);
  const incDeg = Number(m.INCLINATION);
  const raanDeg = Number(m.RA_OF_ASC_NODE);
  const argpDeg = Number(m.ARG_OF_PERICENTER);
  const maDeg = Number(m.MEAN_ANOMALY);
  if (
    !Number.isFinite(nRev) || !(nRev > 0.0) ||
    !Number.isFinite(e) || !(e >= 0.0) || !(e < 1.0) ||
    !Number.isFinite(incDeg) || !Number.isFinite(raanDeg) ||
    !Number.isFinite(argpDeg) || !Number.isFinite(maDeg)
  ) {
    return null;
  }
  const nMin = (nRev * (2.0 * PI)) / 1440.0;
  const a = cbrtPos(K_MU_ER / (nMin * nMin)) * K_RE;
  if (!Number.isFinite(a)) return null;
  const xM = maDeg / 180.0;
  const uM = xM - (2.0 * Math.floor((0.5 * xM) + 0.5));
  const mRad = PI * uM;
  const [sM] = sincosPi(uM);
  let E = mRad + (sM >= 0.0 ? (0.85 * e) : -(0.85 * e));
  for (let it = 0; it < 8; it++) {
    const [sE, cE] = sincosPi(E * INV_PI);
    const num = (E - (e * sE)) - mRad;
    const den = 1.0 - (e * cE);
    E = E - (num / den);
  }
  const [sE, cE] = sincosPi(E * INV_PI);
  const den = 1.0 - (e * cE);
  const oneMinusE2 = 1.0 - (e * e);
  const cnu = (cE - e) / den;
  const snu = (Math.sqrt(oneMinusE2) * sE) / den;
  const p = a * oneMinusE2;
  const rr = p / (1.0 + (e * cnu));
  const vs = Math.sqrt(K_MU_KM / p);
  const xp = rr * cnu;
  const yp = rr * snu;
  const vxp = -(vs * snu);
  const vyp = vs * (e + cnu);
  const [sO, cO] = sincosPi(raanDeg / 180.0);
  const [si, ci] = sincosPi(incDeg / 180.0);
  const [sw, cw] = sincosPi(argpDeg / 180.0);
  const P0 = (cO * cw) - ((sO * sw) * ci);
  const P1 = (sO * cw) + ((cO * sw) * ci);
  const P2 = sw * si;
  const Q0 = -(cO * sw) - ((sO * cw) * ci);
  const Q1 = -(sO * sw) + ((cO * cw) * ci);
  const Q2 = cw * si;
  const r = [
    canonZero((xp * P0) + (yp * Q0)),
    canonZero((xp * P1) + (yp * Q1)),
    canonZero((xp * P2) + (yp * Q2)),
  ];
  const v = [
    canonZero((vxp * P0) + (vyp * Q0)),
    canonZero((vxp * P1) + (vyp * Q1)),
    canonZero((vxp * P2) + (vyp * Q2)),
  ];
  if (!r.every(Number.isFinite) || !v.every(Number.isFinite)) return null;
  return { r, v };
}

/// Closed-form forward (tg) and inverse (ti) coordinate transforms for N = 6 + paramCount.
export function buildCoordinatePair(r, v, paramCount) {
  const N = 6 + paramCount;
  const rSq = ((r[0] * r[0]) + (r[1] * r[1])) + (r[2] * r[2]);
  const rNorm = Math.sqrt(rSq);
  const h0 = (r[1] * v[2]) - (r[2] * v[1]);
  const h1 = (r[2] * v[0]) - (r[0] * v[2]);
  const h2 = (r[0] * v[1]) - (r[1] * v[0]);
  const hSq = ((h0 * h0) + (h1 * h1)) + (h2 * h2);
  const hNorm = Math.sqrt(hSq);
  if (!(rNorm > 0.0) || !(hNorm > 0.0)) return null;

  const u = [r[0] / rNorm, r[1] / rNorm, r[2] / rNorm];
  const w = [h0 / hNorm, h1 / hNorm, h2 / hNorm];
  const ev = [
    (w[1] * u[2]) - (w[2] * u[1]),
    (w[2] * u[0]) - (w[0] * u[2]),
    (w[0] * u[1]) - (w[1] * u[0]),
  ];
  const n0 = Math.sqrt(K_MU_KM / ((rNorm * rNorm) * rNorm));
  const invN0 = 1.0 / n0;
  const twoInvN0 = 2.0 / n0;
  const negHalfN0 = -0.5 * n0;
  const negN0 = -n0;

  const ti = new Float64Array(N * N);
  for (let c = 0; c < 3; c++) {
    // Position rows 0..2
    ti[c * N + 0] = canonZero(u[c]);
    ti[c * N + 1] = canonZero(ev[c]);
    ti[c * N + 2] = canonZero(-u[c]);
    ti[c * N + 3] = canonZero(2.0 * ev[c]);
    ti[c * N + 4] = canonZero(w[c]);
    ti[c * N + 5] = 0.0;
    // Velocity rows 3..5
    ti[(3 + c) * N + 0] = canonZero(negHalfN0 * ev[c]);
    ti[(3 + c) * N + 1] = canonZero(negN0 * u[c]);
    ti[(3 + c) * N + 2] = canonZero(n0 * ev[c]);
    ti[(3 + c) * N + 3] = canonZero(negN0 * u[c]);
    ti[(3 + c) * N + 4] = 0.0;
    ti[(3 + c) * N + 5] = canonZero(n0 * w[c]);
  }

  const tg = new Float64Array(N * N);
  for (let c = 0; c < 3; c++) {
    tg[0 * N + c] = canonZero(2.0 * u[c]);
    tg[0 * N + (3 + c)] = canonZero(twoInvN0 * ev[c]);
    tg[1 * N + c] = canonZero(-ev[c]);
    tg[1 * N + (3 + c)] = canonZero(-twoInvN0 * u[c]);
    tg[2 * N + c] = canonZero(u[c]);
    tg[2 * N + (3 + c)] = canonZero(twoInvN0 * ev[c]);
    tg[3 * N + c] = canonZero(ev[c]);
    tg[3 * N + (3 + c)] = canonZero(invN0 * u[c]);
    tg[4 * N + c] = canonZero(w[c]);
    tg[4 * N + (3 + c)] = 0.0;
    tg[5 * N + c] = 0.0;
    tg[5 * N + (3 + c)] = canonZero(invN0 * w[c]);
  }

  for (let k = 0; k < paramCount; k++) {
    ti[(6 + k) * N + (6 + k)] = 1.0;
    tg[(6 + k) * N + (6 + k)] = 1.0;
  }
  return { tg, ti, rNorm, n0, u, ev, w };
}

/// Deterministic UVW floor covariance F (6x6 row-major) at state (r, v).
export function floorMatrixAtState(floor6, r, v) {
  const F = new Float64Array(36);
  const f0 = Number(floor6[0]), f1 = Number(floor6[1]), f2 = Number(floor6[2]);
  const f3 = Number(floor6[3]), f4 = Number(floor6[4]), f5 = Number(floor6[5]);
  if (![f0, f1, f2, f3, f4, f5].every(Number.isFinite)) return null;
  if (f0 === 0.0 && f1 === 0.0 && f2 === 0.0 && f3 === 0.0 && f4 === 0.0 && f5 === 0.0) return F;

  const rr = ((r[0] * r[0]) + (r[1] * r[1])) + (r[2] * r[2]);
  const invRn = 1.0 / Math.sqrt(rr);
  const U0 = r[0] * invRn, U1 = r[1] * invRn, U2 = r[2] * invRn;
  const h0 = (r[1] * v[2]) - (r[2] * v[1]);
  const h1 = (r[2] * v[0]) - (r[0] * v[2]);
  const h2 = (r[0] * v[1]) - (r[1] * v[0]);
  const hh = ((h0 * h0) + (h1 * h1)) + (h2 * h2);
  const invWn = 1.0 / Math.sqrt(hh);
  const W0 = h0 * invWn, W1 = h1 * invWn, W2 = h2 * invWn;
  const V0 = (W1 * U2) - (W2 * U1);
  const V1 = (W2 * U0) - (W0 * U2);
  const V2 = (W0 * U1) - (W1 * U0);
  const B = [
    [U0, U1, U2],
    [V0, V1, V2],
    [W0, W1, W2],
  ];
  const M = [
    [f0, f1, f3],
    [f1, f2, f4],
    [f3, f4, f5],
  ];
  const w2 = hh / (rr * rr);
  const BM = [
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
  ];
  for (let i = 0; i < 3; i++) {
    for (let c = 0; c < 3; c++) {
      BM[i][c] = ((B[0][i] * M[0][c]) + (B[1][i] * M[1][c])) + (B[2][i] * M[2][c]);
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= i; j++) {
      const s = canonZero(((BM[i][0] * B[0][j]) + (BM[i][1] * B[1][j])) + (BM[i][2] * B[2][j]));
      const ws = canonZero(w2 * s);
      F[i * 6 + j] = s;
      F[(3 + i) * 6 + (3 + j)] = ws;
      if (j !== i) {
        F[j * 6 + i] = s;
        F[(3 + j) * 6 + (3 + i)] = ws;
      }
    }
  }
  return F;
}

export function extractFloor6(covPropagation) {
  if (!covPropagation) return null;
  return [
    covPropagation.FLOOR_UU_KM2 ?? 0.0,
    covPropagation.FLOOR_VU_KM2 ?? 0.0,
    covPropagation.FLOOR_VV_KM2 ?? 0.0,
    covPropagation.FLOOR_WU_KM2 ?? 0.0,
    covPropagation.FLOOR_WV_KM2 ?? 0.0,
    covPropagation.FLOOR_WW_KM2 ?? 0.0,
  ];
}

/// A floor scalar or escape value: exactly 0, or a magnitude in [2^-64, max] (false for NaN and the infinities).
function valueInRange(x, max) {
  if (x === 0.0) return true;
  const a = Math.abs(x);
  return a >= DOMAIN.VALUE_ABS_MIN && a <= max;
}

/// The floor domain: six finite scalars of magnitude at most 2^36 km^2 forming a positive semi-definite UVW matrix,
/// tested by its principal minors in this exact order of binary64 operations.
export function floorInDomain(floor6) {
  if (!floor6 || floor6.length !== 6) return false;
  const [f0, f1, f2, f3, f4, f5] = floor6.map(Number);
  for (const f of [f0, f1, f2, f3, f4, f5]) if (!valueInRange(f, DOMAIN.FLOOR_ABS_MAX)) return false;
  if (!(f0 >= 0.0 && f2 >= 0.0 && f5 >= 0.0)) return false;
  if (!((f1 * f1) <= (f0 * f2))) return false;
  if (!((f3 * f3) <= (f0 * f5))) return false;
  if (!((f4 * f4) <= (f2 * f5))) return false;
  const det = ((f0 * ((f2 * f5) - (f4 * f4))) - (f1 * ((f1 * f5) - (f4 * f3)))) + (f3 * ((f1 * f4) - (f2 * f3)));
  return det >= 0.0;
}

class BitWriter {
  constructor() {
    this.bits = [];
  }
  write(value, width) {
    let v = Math.floor(value);
    const start = this.bits.length;
    for (let k = 0; k < width; k++) this.bits.push(0);
    for (let k = width - 1; k >= 0; k--) {
      this.bits[start + k] = v % 2;
      v = Math.floor(v / 2);
    }
  }
  toUint8Array() {
    const out = new Uint8Array(Math.ceil(this.bits.length / 8));
    for (let k = 0; k < this.bits.length; k++) {
      if (this.bits[k]) out[k >> 3] |= 1 << (7 - (k & 7));
    }
    return out;
  }
}

class BitReader {
  constructor(bytes) {
    this.bytes = bytes;
    this.pos = 0;
  }
  remaining() {
    return this.bytes.length * 8 - this.pos;
  }
  read(width) {
    if (width < 0 || this.pos + width > this.bytes.length * 8) return -1;
    let v = 0.0;
    for (let k = 0; k < width; k++, this.pos++) {
      const bit = (this.bytes[this.pos >> 3] >> (7 - (this.pos & 7))) & 1;
      v = (v * 2.0) + bit;
    }
    return v;
  }
}

export function stepPalettes(step) {
  return {
    B: [4 + step, 7 + step, 11 + step, 14 + step],
    S: [6 + step, 10 + step, 13 + step, 16 + step],
    DROP: step === 0 ? 0.036 : 0.008 * Math.pow(2.0, -0.5 * step),
    ZERO: step === 0 ? 1.5e-4 : 1.5e-5 * Math.pow(2.0, -step),
    paramAngle: Math.max(22, 14 + step),
    paramSigma: Math.max(24, 16 + step),
  };
}

/// Normative decoder: decodes a MOR record's COV_FACTOR into { G, N, rank, mode, Pfit, P, ltm }
/// or returns { ignored: true } for unknown encoding identifiers, or { error } if malformed.
export function decodeCovFactor(mor) {
  const encoding = Number(mor.COV_FACTOR_ENCODING ?? 0);
  const raw = mor.COV_FACTOR;
  if (encoding === MOR_COV_FACTOR_FORMAT.NONE) {
    if (raw && raw.length > 0) return { present: false, ignored: false, error: 'COV_FACTOR stated with COV_FACTOR_ENCODING NONE' };
    return { present: false, ignored: false, error: null };
  }
  if (encoding !== MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1) {
    // Normative rule: unknown encoding identifier or version is ignored without error.
    return { present: false, ignored: true, error: null };
  }
  if (!raw || raw.length === 0) {
    return { present: false, ignored: false, error: 'COV_FACTOR empty for ROE_HYPERSPHERICAL_V1' };
  }
  if (raw.length < DOMAIN.FACTOR_BYTES_MIN || raw.length > DOMAIN.FACTOR_BYTES_MAX) {
    return { present: false, ignored: false, error: 'COV_FACTOR length outside 2..289 bytes' };
  }
  const covFloor = Number(mor.COV_FLOOR ?? 0);
  if (covFloor !== 1 && covFloor !== 2) {
    return { present: false, ignored: false, error: 'COV_FACTOR needs COV_FLOOR WRITER_THEORY_STATE or MEAN_ELEMENTS_TWO_BODY' };
  }
  if (!mor.COV_PROPAGATION || !floorInDomain(extractFloor6(mor.COV_PROPAGATION))) {
    return { present: false, ignored: false, error: 'COV_PROPAGATION absent or its floor outside the domain' };
  }
  const bytes = raw instanceof Uint8Array ? raw : Uint8Array.from(raw);
  const paramCount = solvedCovParamCount(mor.OD_SOLVED_FOR ?? 0);
  if (paramCount < 0 || paramCount > 2) {
    return { present: false, ignored: false, error: 'Unsupported OD_SOLVED_FOR covariance parameters' };
  }
  const N = 6 + paramCount;
  const h = 2 + paramCount;
  const tb = twoBodyState(mor);
  if (!tb) {
    return { present: false, ignored: false, error: 'Invalid MOR two-body elements' };
  }

  const reader = new BitReader(bytes);
  const mode = reader.read(5);
  if (mode < 0) {
    return { present: false, ignored: false, error: 'Truncated COV_FACTOR header' };
  }

  let G;
  let rank;
  let perm = null;

  if (mode === MODE_ESCAPE) {
    const rCode = reader.read(3);
    if (rCode < 0) return { present: false, ignored: false, error: 'Truncated escape header' };
    rank = rCode + 1;
    if (rank < 1 || rank > N) {
      return { present: false, ignored: false, error: 'Escape rank exceeds covariance dimension' };
    }
    const expectedEntries = (rank * ((2 * N) - rank + 1)) / 2;
    const expectedBytes = 1 + (8 * expectedEntries);
    if (bytes.length !== expectedBytes) {
      return { present: false, ignored: false, error: 'Escape byte length mismatch' };
    }
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    G = new Float64Array(N * rank);
    let off = 1;
    for (let j = 0; j < rank; j++) {
      for (let i = j; i < N; i++) {
        const val = view.getFloat64(off, true);
        off += 8;
        if (!valueInRange(val, DOMAIN.ESCAPE_ABS_MAX)) {
          return { present: false, ignored: false, error: 'Escape factor value not 0 and not in magnitude [2^-64, 2^32]' };
        }
        G[i * rank + j] = canonZero(val);
      }
    }
  } else if (mode >= 0 && mode <= MODE_MAX_STEP) {
    const step = mode;
    const { B, S, paramAngle, paramSigma } = stepPalettes(step);
    const code = reader.read(7);
    if (code < 0 || code >= 120) {
      return { present: false, ignored: false, error: 'Invalid permutation/rank code' };
    }
    const piIdx = Math.floor(code / 5);
    rank = (code % 5) + h;
    const paramIndices = [];
    for (let k = 0; k < paramCount; k++) paramIndices.push(6 + k);
    perm = [0, 1, ...paramIndices, ...TAIL_PERMUTATIONS[piIdx]];

    const coords = buildCoordinatePair(tb.r, tb.v, paramCount);
    if (!coords) {
      return { present: false, ignored: false, error: 'Degenerate two-body coordinate basis' };
    }
    const { ti } = coords;

    const colCount = Math.min(rank, N - 1);
    const colBits = new Array(colCount);
    for (let j = 0; j < colCount; j++) {
      if (j < h) {
        colBits[j] = B[3];
      } else {
        const bi = reader.read(2);
        if (bi < 0) return { present: false, ignored: false, error: 'Truncated column palette index' };
        colBits[j] = B[bi];
      }
    }

    const used = new Array(N);
    for (let i = 0; i < N; i++) used[i] = i < rank;
    const flags = [];
    for (let i = 1; i < N; i++) {
      const isParamRow = i >= 2 && i < h;
      if (isParamRow) continue;
      const jMax = Math.min(i, rank);
      for (let j = 0; j < jMax; j++) {
        const f = reader.read(1);
        if (f < 0) return { present: false, ignored: false, error: 'Truncated zero-angle flag' };
        flags.push(f);
        if (f === 1 && i >= rank) used[i] = true;
      }
    }

    const LC = new Float64Array(N * rank);
    LC[0] = 1.0;
    let fIdx = 0;
    const denomParamAngle = pow2Int(paramAngle) - 1.0;
    for (let i = 1; i < N; i++) {
      let ps = 1.0;
      const isParamRow = i >= 2 && i < h;
      const jMax = Math.min(i, rank);
      for (let j = 0; j < jMax; j++) {
        let cTheta, sTheta;
        if (isParamRow) {
          const u = reader.read(paramAngle);
          if (u < 0) return { present: false, ignored: false, error: 'Truncated parameter angle' };
          [sTheta, cTheta] = sincosPi(u / denomParamAngle);
        } else {
          const flag = flags[fIdx++];
          if (flag === 0) {
            cTheta = 0.0;
            sTheta = 1.0;
          } else {
            const b = colBits[j];
            const u = reader.read(b);
            if (u < 0) return { present: false, ignored: false, error: 'Truncated state angle' };
            [sTheta, cTheta] = sincosPi(u / (pow2Int(b) - 1.0));
          }
        }
        LC[i * rank + j] = canonZero(ps * cTheta);
        ps = ps * sTheta;
      }
      if (i < rank) {
        LC[i * rank + i] = canonZero(ps);
      }
    }

    const sg = new Float64Array(N);
    for (let i = 0; i < N; i++) {
      if (!used[i]) {
        sg[i] = 0.0;
        continue;
      }
      let bSigma;
      if (i < 2) {
        bSigma = S[3];
      } else if (i < h) {
        bSigma = paramSigma;
      } else {
        const si = reader.read(2);
        if (si < 0) return { present: false, ignored: false, error: 'Truncated sigma palette index' };
        bSigma = S[si];
      }
      const u = reader.read(bSigma);
      if (u < 0) return { present: false, ignored: false, error: 'Truncated log-sigma value' };
      const logVal = LOG2_SIGMA_LO + ((u / (pow2Int(bSigma) - 1.0)) * LOG2_SIGMA_SPAN);
      sg[i] = exp2Det(logVal);
    }

    const rem = reader.remaining();
    if (rem < 0 || rem >= 8) {
      return { present: false, ignored: false, error: 'Trailing bytes in COV_FACTOR' };
    }
    if (rem > 0 && reader.read(rem) !== 0) {
      return { present: false, ignored: false, error: 'Non-zero padding bits in COV_FACTOR' };
    }

    // W[i, j] = LC[i, j] * sg[i] for j <= i; 0 for j > i.
    const W = new Float64Array(N * rank);
    for (let i = 0; i < N; i++) {
      const sgi = sg[i];
      const jMax = Math.min(i + 1, rank);
      for (let j = 0; j < jMax; j++) {
        W[i * rank + j] = canonZero(LC[i * rank + j] * sgi);
      }
    }

    // G[a, j] = sum_{i = j .. N - 1} ti[a, perm[i]] * W[i, j] in fixed index order.
    G = new Float64Array(N * rank);
    for (let a = 0; a < N; a++) {
      for (let j = 0; j < rank; j++) {
        let acc = 0.0;
        for (let i = j; i < N; i++) {
          acc = acc + (ti[a * N + perm[i]] * W[i * rank + j]);
        }
        G[a * rank + j] = canonZero(acc);
      }
    }
  } else {
    return { present: false, ignored: false, error: `Reserved COV_FACTOR mode ${mode}` };
  }

  // Pfit[a, b] = sum_{j = 0 .. rank - 1} G[a, j] * G[b, j], symmetric by lower-triangle copy.
  const Pfit = new Float64Array(N * N);
  for (let a = 0; a < N; a++) {
    for (let b = 0; b <= a; b++) {
      let acc = 0.0;
      for (let j = 0; j < rank; j++) {
        acc = acc + (G[a * rank + j] * G[b * rank + j]);
      }
      const val = canonZero(acc);
      Pfit[a * N + b] = val;
      Pfit[b * N + a] = val;
    }
  }

  let P = null;
  let ltm = null;
  if (Number(mor.COV_FLOOR ?? 0) === 2 && mor.COV_PROPAGATION) {
    const floor6 = extractFloor6(mor.COV_PROPAGATION);
    const F6 = floor6 ? floorMatrixAtState(floor6, tb.r, tb.v) : null;
    if (!F6) {
      return { present: false, ignored: false, error: 'Invalid COV_PROPAGATION floor scalars' };
    }
    P = new Float64Array(Pfit);
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j <= i; j++) {
        const sum = canonZero(P[i * N + j] + F6[i * 6 + j]);
        P[i * N + j] = sum;
        P[j * N + i] = sum;
      }
    }
    ltm = new Array((N * (N + 1)) / 2);
    let q = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j <= i; j++) {
        ltm[q++] = P[i * N + j];
      }
    }
  }
  // Inside the domain every output is finite; the check makes a refusal the only other outcome.
  if (!G.every(Number.isFinite) || !Pfit.every(Number.isFinite) || (P && !P.every(Number.isFinite))) {
    return { present: false, ignored: false, error: 'Decoded covariance not finite' };
  }

  return {
    present: true,
    ignored: false,
    error: null,
    mode,
    rank,
    N,
    perm,
    twoBody: tb,
    G,
    Pfit,
    P,
    ltm,
  };
}

// ============================================================================
// Zero-dependency reference encoder (writer policy)
// ============================================================================

function unpackLtm(ltm, N) {
  if (!ltm || ltm.length !== (N * (N + 1)) / 2) return null;
  const P = new Float64Array(N * N);
  let q = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      const v = Number(ltm[q++]);
      if (!Number.isFinite(v)) return null;
      P[i * N + j] = v;
      P[j * N + i] = v;
    }
  }
  return P;
}

/// Symmetric positive-semidefinite Cholesky / eigenvalue square-root factor G (N x N lower triangular).
export function psdFactor(A, N) {
  // Correlation-scaled Cholesky first (scale-invariant across 18+ orders of magnitude).
  const sdDiag = new Float64Array(N);
  let strictlyPos = true;
  for (let i = 0; i < N; i++) {
    if (!(A[i * N + i] > 0.0)) { strictlyPos = false; break; }
    sdDiag[i] = Math.sqrt(A[i * N + i]);
  }
  if (strictlyPos) {
    const Lc = new Float64Array(N * N);
    let ok = true;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j <= i; j++) {
        let s = i === j ? 1.0 : 0.5 * (A[i * N + j] + A[j * N + i]) / (sdDiag[i] * sdDiag[j]);
        for (let k = 0; k < j; k++) s -= Lc[i * N + k] * Lc[j * N + k];
        if (i === j) {
          if (s <= 0.0) { ok = false; break; }
          Lc[i * N + j] = Math.sqrt(s);
        } else {
          Lc[i * N + j] = s / Lc[j * N + j];
        }
      }
      if (!ok) break;
    }
    if (ok) {
      const L = new Float64Array(N * N);
      for (let i = 0; i < N; i++) {
        for (let j = 0; j <= i; j++) L[i * N + j] = Lc[i * N + j] * sdDiag[i];
      }
      return L;
    }
  }

  // Cyclic Jacobi eigendecomposition + QR lower-triangularization for rank-deficient / near-PSD inputs.
  const V = new Float64Array(N * N);
  const D = new Float64Array(A);
  for (let i = 0; i < N; i++) V[i * N + i] = 1.0;
  for (let sweep = 0; sweep < 40; sweep++) {
    let maxOff = 0.0;
    for (let p = 0; p < N; p++) {
      for (let q = p + 1; q < N; q++) {
        const apq = Math.abs(D[p * N + q]);
        if (apq > maxOff) maxOff = apq;
      }
    }
    if (maxOff <= 1e-30) break;
    for (let p = 0; p < N; p++) {
      for (let q = p + 1; q < N; q++) {
        const apq = D[p * N + q];
        if (Math.abs(apq) <= 1e-32) continue;
        const app = D[p * N + p], aqq = D[q * N + q];
        const tau = (aqq - app) / (2.0 * apq);
        const t = tau >= 0.0 ? 1.0 / (tau + Math.sqrt(1.0 + tau * tau)) : -1.0 / (-tau + Math.sqrt(1.0 + tau * tau));
        const c = 1.0 / Math.sqrt(1.0 + t * t);
        const s = t * c;
        for (let k = 0; k < N; k++) {
          if (k === p || k === q) continue;
          const dkp = D[k * N + p], dkq = D[k * N + q];
          D[k * N + p] = D[p * N + k] = c * dkp - s * dkq;
          D[k * N + q] = D[q * N + k] = s * dkp + c * dkq;
        }
        D[p * N + p] = c * c * app - 2.0 * s * c * apq + s * s * aqq;
        D[q * N + q] = s * s * app + 2.0 * s * c * apq + c * c * aqq;
        D[p * N + q] = D[q * N + p] = 0.0;
        for (let k = 0; k < N; k++) {
          const vkp = V[k * N + p], vkq = V[k * N + q];
          V[k * N + p] = c * vkp - s * vkq;
          V[k * N + q] = s * vkp + c * vkq;
        }
      }
    }
  }
  let maxEig = 0.0;
  for (let i = 0; i < N; i++) if (D[i * N + i] > maxEig) maxEig = D[i * N + i];
  if (!(maxEig > 0.0)) return null;
  let minEig = 0.0;
  for (let i = 0; i < N; i++) if (D[i * N + i] < minEig) minEig = D[i * N + i];
  if (minEig < -1e-6 * maxEig) return null;

  // M_T = diag(sqrt(max(d, 0))) * V^T (N rows x N cols); Householder QR gives R so G = R^T is lower triangular.
  const MT = new Float64Array(N * N);
  for (let row = 0; row < N; row++) {
    const sd = D[row * N + row] > 0.0 ? Math.sqrt(D[row * N + row]) : 0.0;
    for (let col = 0; col < N; col++) MT[row * N + col] = sd * V[col * N + row];
  }
  for (let col = 0; col < N; col++) {
    let norm2 = 0.0;
    for (let row = col; row < N; row++) norm2 += MT[row * N + col] * MT[row * N + col];
    const norm = Math.sqrt(norm2);
    if (norm === 0.0) continue;
    const sign = MT[col * N + col] >= 0.0 ? 1.0 : -1.0;
    const u0 = MT[col * N + col] + sign * norm;
    let vnorm2 = u0 * u0;
    for (let row = col + 1; row < N; row++) vnorm2 += MT[row * N + col] * MT[row * N + col];
    if (vnorm2 === 0.0) continue;
    const beta = 2.0 / vnorm2;
    MT[col * N + col] = -sign * norm;
    for (let c2 = col + 1; c2 < N; c2++) {
      let dot = u0 * MT[col * N + c2];
      for (let row = col + 1; row < N; row++) dot += MT[row * N + col] * MT[row * N + c2];
      const scale = beta * dot;
      MT[col * N + c2] -= scale * u0;
      for (let row = col + 1; row < N; row++) MT[row * N + c2] -= scale * MT[row * N + col];
    }
    for (let row = col + 1; row < N; row++) MT[row * N + col] = 0.0;
  }
  const G = new Float64Array(N * N);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      G[i * N + j] = MT[j * N + i];
    }
    if (G[i * N + i] < 0.0) {
      for (let r = i; r < N; r++) G[r * N + i] = -G[r * N + i];
    }
  }
  return G;
}

function invertSmall(A, n) {
  const M = new Float64Array(n * 2 * n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) M[i * 2 * n + j] = A[i * n + j];
    M[i * 2 * n + (n + i)] = 1.0;
  }
  for (let col = 0; col < n; col++) {
    let piv = col;
    for (let row = col + 1; row < n; row++) {
      if (Math.abs(M[row * 2 * n + col]) > Math.abs(M[piv * 2 * n + col])) piv = row;
    }
    const pv = M[piv * 2 * n + col];
    if (Math.abs(pv) <= 1e-30) return null;
    if (piv !== col) {
      for (let j = 0; j < 2 * n; j++) {
        const tmp = M[col * 2 * n + j];
        M[col * 2 * n + j] = M[piv * 2 * n + j];
        M[piv * 2 * n + j] = tmp;
      }
    }
    for (let j = 0; j < 2 * n; j++) M[col * 2 * n + j] /= pv;
    for (let row = 0; row < n; row++) {
      if (row === col) continue;
      const f = M[row * 2 * n + col];
      for (let j = 0; j < 2 * n; j++) M[row * 2 * n + j] -= f * M[col * 2 * n + j];
    }
  }
  const out = new Float64Array(n * n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) out[i * n + j] = M[i * 2 * n + (n + j)];
  }
  return out;
}

/// Whitening inverse L^{-1} (6x6 lower triangular) of a 6x6 SPD floor/reference covariance.
function whitening6(F6) {
  const S = new Float64Array(F6);
  let tr = 0.0;
  for (let i = 0; i < 6; i++) tr += Math.max(S[i * 6 + i], 0.0);
  const jitter = Math.max(1e-24, 1e-12 * (tr / 6.0));
  let L = null;
  for (let tries = 0; tries < 6; tries++) {
    const eps = tries === 0 ? 0.0 : jitter * Math.pow(10.0, tries - 1);
    const cand = new Float64Array(36);
    let ok = true;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j <= i; j++) {
        let s = S[i * 6 + j] + (i === j ? eps : 0.0);
        for (let k = 0; k < j; k++) s -= cand[i * 6 + k] * cand[j * 6 + k];
        if (i === j) {
          if (s <= 0.0) { ok = false; break; }
          cand[i * 6 + j] = Math.sqrt(s);
        } else {
          cand[i * 6 + j] = s / cand[j * 6 + j];
        }
      }
      if (!ok) break;
    }
    if (ok) { L = cand; break; }
  }
  if (!L) return null;
  return invertSmall(L, 6);
}

/// Analytical two-body + secular J2 + drag + SRP state at day d from equinoctial-safe orbital perturbations.
function propagatedModelState(base, d, dEquin, dDrag, dSrp) {
  // Equinoctial elements q = [nRev, af, ag, chi, psi, meanLonRad] so e=0 and i=0 have nonsingular finite differences!
  const nRev = base.nRev + dEquin[0];
  const af = base.af + dEquin[1];
  const ag = base.ag + dEquin[2];
  const chi = base.chi + dEquin[3];
  const psi = base.psi + dEquin[4];
  const lam0 = base.lam0 + dEquin[5];
  if (!(nRev > 0.0)) return null;

  let e = Math.hypot(af, ag);
  if (e >= 0.999) e = 0.999;
  const nDay = nRev * 2.0 * PI;
  const nMin = nDay / 1440.0;
  const aKm0 = cbrtPos(K_MU_ER / (nMin * nMin)) * K_RE;
  const incRad0 = 2.0 * Math.atan(Math.hypot(chi, psi));
  const raanRad0 = (chi === 0.0 && psi === 0.0) ? 0.0 : Math.atan2(chi, psi);
  const varpiRad0 = (af === 0.0 && ag === 0.0) ? raanRad0 : Math.atan2(ag, af);

  const ci = Math.cos(incRad0), si = Math.sin(incRad0);
  const oneMinusE2 = Math.max(1e-8, 1.0 - e * e);
  const pKm = aKm0 * oneMinusE2;
  const etaE = Math.sqrt(oneMinusE2);
  const J2 = 1.08262668e-3;
  const kappa = 1.5 * J2 * (K_RE / pKm) * (K_RE / pKm);
  const raanDot = -kappa * ci * nDay;
  const argpDot = 0.5 * kappa * (5.0 * ci * ci - 1.0) * nDay;
  const maDot = nDay * (1.0 + 0.5 * kappa * etaE * (3.0 * ci * ci - 1.0));

  // Drag perturbation (from stated ngRate / BTERM) + SRP perturbation over d days
  const bterm = base.bterm + dDrag;
  const agom = base.agom + dSrp;
  const ndotOverN = base.alphaDrag * bterm; // day^-1
  const nRevD = Math.max(1e-6, nRev * (1.0 + ndotOverN * d));
  const eDrag = Math.max(0.0, Math.min(0.999, e * (1.0 - (2.0 / 3.0) * (1.0 - e) * ndotOverN * d)));
  const dtSec = 86400.0 * d;
  const aSrp = 4.56e-9 * agom; // km/s^2
  const n0Sec = nDay / 86400.0;
  const deSrp = 1.5 * (aSrp / Math.max(n0Sec, 1e-9)) * (d / (1.0 + 0.2 * d)) * (dtSec / Math.max(d, 1.0) > 0 ? 1.0 : 0.0);
  const varpiD = varpiRad0 + (raanDot + argpDot) * d;
  const afD = eDrag * Math.cos(varpiD) + deSrp * Math.cos(varpiRad0);
  const agD = eDrag * Math.sin(varpiD) + deSrp * Math.sin(varpiRad0);
  const eFinal = Math.min(0.999, Math.hypot(afD, agD));
  const raanFinal = raanRad0 + raanDot * d;
  const varpiFinal = (afD === 0.0 && agD === 0.0) ? raanFinal : Math.atan2(agD, afD);
  const argpFinal = varpiFinal - raanFinal;
  const ma0 = lam0 - varpiRad0;
  const dLamDrag = 0.5 * nDay * ndotOverN * d * d;
  const dLamSrp = (1.5 * aSrp * dtSec * dtSec * Math.min(1.0, 0.25 + e)) / Math.max(aKm0, 1.0);
  const maFinal = ma0 + maDot * d + dLamDrag + dLamSrp;

  const rad2deg = 180.0 / PI;
  return twoBodyStateOf({
    MEAN_MOTION: nRevD,
    ECCENTRICITY: eFinal,
    INCLINATION: incRad0 * rad2deg,
    RA_OF_ASC_NODE: raanFinal * rad2deg,
    ARG_OF_PERICENTER: argpFinal * rad2deg,
    MEAN_ANOMALY: maFinal * rad2deg,
  });
}

/// Build zero-dependency analytical horizon model at days [0, 1, 3, 7] from MOR fields alone.
function buildAnalyticalHorizon(mor, tb, paramCount) {
  const N = 6 + paramCount;
  const nRev = Number(mor.MEAN_MOTION);
  const nDay = nRev * 2.0 * PI;
  const e = Number(mor.ECCENTRICITY);
  const deg2rad = PI / 180.0;
  const incRad = Number(mor.INCLINATION) * deg2rad;
  const raanRad = Number(mor.RA_OF_ASC_NODE) * deg2rad;
  const argpRad = Number(mor.ARG_OF_PERICENTER) * deg2rad;
  const maRad = Number(mor.MEAN_ANOMALY) * deg2rad;
  const varpi = raanRad + argpRad;
  const tanHalfI = Math.tan(0.5 * incRad);
  const nMin = nDay / 1440.0;
  const aKm = cbrtPos(K_MU_ER / (nMin * nMin)) * K_RE;

  const cp = mor.COV_PROPAGATION;
  const floor6 = extractFloor6(cp) ?? [1e-8, 0, 1e-8, 0, 0, 1e-8];
  const sE = Number(cp?.NOISE_ECCENTRICITY_PER_DAY ?? 0.0);
  const sI = Number(cp?.NOISE_INCLINATION_PER_DAY ?? 0.0);
  const sL = Number(cp?.NOISE_MEAN_MOTION_RELATIVE ?? 0.0);
  const sD = Number(cp?.NOISE_NON_GRAVITATIONAL_RAD_DAY2 ?? 0.0);
  const tStartDays = Number(cp?.NOISE_START_MINUTES ?? 0.0) / 1440.0;
  const ngRate = Number(cp?.NON_GRAVITATIONAL_RATE_PER_DAY ?? 0.0);
  const bterm = Number(mor.BTERM ?? 0.0);
  const agom = Number(mor.AGOM ?? 0.0);

  let alphaDrag = 0.0;
  if (Math.abs(bterm) > 1e-12 && Math.abs(ngRate) > 0.0) {
    alphaDrag = ngRate / bterm;
  } else {
    const hpKm = aKm * (1.0 - e) - K_RE;
    if (hpKm < 2500.0) {
      alphaDrag = 1e-3 * Math.exp(-Math.max(0.0, hpKm - 400.0) / 65.0);
    }
  }

  const base = {
    nRev,
    af: e * Math.cos(varpi),
    ag: e * Math.sin(varpi),
    chi: tanHalfI * Math.sin(raanRad),
    psi: tanHalfI * Math.cos(raanRad),
    lam0: maRad + varpi,
    bterm,
    agom,
    alphaDrag,
  };

  const mask = (mor.OD_SOLVED_FOR ?? 0) >>> 0;
  const hasDrag = ((mask >>> 1) & 1) !== 0;
  const hasSrp = ((mask >>> 3) & 1) !== 0;
  const dragCol = hasDrag ? 6 : -1;
  const srpCol = hasSrp ? (hasDrag ? 7 : 6) : -1;

  // Epoch Jacobian J0 = d(r0, v0)/d(q) via central differences in nonsingular equinoctial elements
  const stepsQ = [nRev * 1e-7, 1e-7, 1e-7, 1e-7, 1e-7, 1e-7];
  const zero6 = [0, 0, 0, 0, 0, 0];
  const J0 = new Float64Array(36);
  for (let j = 0; j < 6; j++) {
    const dqP = zero6.slice(); dqP[j] = stepsQ[j];
    const dqM = zero6.slice(); dqM[j] = -stepsQ[j];
    const stP = propagatedModelState(base, 0.0, dqP, 0.0, 0.0);
    const stM = propagatedModelState(base, 0.0, dqM, 0.0, 0.0);
    const inv2h = 0.5 / stepsQ[j];
    for (let i = 0; i < 3; i++) {
      J0[i * 6 + j] = (stP.r[i] - stM.r[i]) * inv2h;
      J0[(3 + i) * 6 + j] = (stP.v[i] - stM.v[i]) * inv2h;
    }
  }
  const invJ0 = invertSmall(J0, 6);

  // Include opposite apse near day 7 on eccentric orbits so perigee and apogee geometry are both sampled.
  const days = e > 0.03 ? [0.0, 1.0, 3.0, Math.max(1.5, 7.0 - (0.5 / nRev)), 7.0] : [0.0, 1.0, 3.0, 7.0];
  const phis = [];
  const states = [];
  const floors = [];
  const noises = [];
  const whites = [];

  const hDrag = Math.max(1e-7, 1e-4 * Math.abs(bterm));
  const hSrp = Math.max(1e-7, 1e-4 * Math.abs(agom));

  for (const d of days) {
    const st = d === 0.0 ? tb : (propagatedModelState(base, d, zero6, 0.0, 0.0) ?? tb);
    const cd = buildCoordinatePair(st.r, st.v, 0);
    const F6 = floorMatrixAtState(floor6, st.r, st.v);
    const phi = new Float64Array(6 * N);

    if (d === 0.0 || !invJ0) {
      for (let i = 0; i < 6; i++) phi[i * N + i] = 1.0;
    } else {
      const Jd = new Float64Array(36);
      for (let j = 0; j < 6; j++) {
        const dqP = zero6.slice(); dqP[j] = stepsQ[j];
        const dqM = zero6.slice(); dqM[j] = -stepsQ[j];
        const stP = propagatedModelState(base, d, dqP, 0.0, 0.0) ?? st;
        const stM = propagatedModelState(base, d, dqM, 0.0, 0.0) ?? st;
        const inv2h = 0.5 / stepsQ[j];
        for (let i = 0; i < 3; i++) {
          Jd[i * 6 + j] = (stP.r[i] - stM.r[i]) * inv2h;
          Jd[(3 + i) * 6 + j] = (stP.v[i] - stM.v[i]) * inv2h;
        }
      }
      // phi[:, 0..5] = Jd * invJ0 (exact eccentric two-body + secular J2 + drag state transition!)
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          let s = 0.0;
          for (let k = 0; k < 6; k++) s += Jd[i * 6 + k] * invJ0[k * 6 + j];
          phi[i * N + j] = s;
        }
      }
      if (dragCol >= 0) {
        const stP = propagatedModelState(base, d, zero6, hDrag, 0.0) ?? st;
        const stM = propagatedModelState(base, d, zero6, -hDrag, 0.0) ?? st;
        const inv2h = 0.5 / hDrag;
        for (let i = 0; i < 3; i++) {
          phi[i * N + dragCol] = (stP.r[i] - stM.r[i]) * inv2h;
          phi[(3 + i) * N + dragCol] = (stP.v[i] - stM.v[i]) * inv2h;
        }
      }
      if (srpCol >= 0) {
        const stP = propagatedModelState(base, d, zero6, 0.0, hSrp) ?? st;
        const stM = propagatedModelState(base, d, zero6, 0.0, -hSrp) ?? st;
        const inv2h = 0.5 / hSrp;
        for (let i = 0; i < 3; i++) {
          phi[i * N + srpCol] = (stP.r[i] - stM.r[i]) * inv2h;
          phi[(3 + i) * N + srpCol] = (stP.v[i] - stM.v[i]) * inv2h;
        }
      }
    }

    // Process noise Q_noise (6x6 in TEME) at day d mapped through exact equinoctial Jacobian where available
    const Q6 = new Float64Array(36);
    const dn = Math.max(0.0, d - tStartDays);
    if (dn > 0.0 && cd) {
      const sigE = cd.rNorm * sE * dn;
      const sigI = cd.rNorm * sI * dn;
      const vL0 = (-2.0 / 3.0) * cd.rNorm * sL;
      const vL1 = cd.rNorm * nDay * dn * sL;
      const vD0 = (-2.0 / 3.0) * cd.rNorm * ((sD * dn) / nDay);
      const vD1 = 0.5 * cd.rNorm * sD * dn * dn;
      const addRoeVec = (z) => {
        const x = new Float64Array(6);
        for (let i = 0; i < 6; i++) {
          let s = 0.0;
          for (let k = 0; k < 6; k++) s += cd.ti[i * 6 + k] * z[k];
          x[i] = s;
        }
        for (let i = 0; i < 6; i++) {
          for (let j = 0; j < 6; j++) Q6[i * 6 + j] += x[i] * x[j];
        }
      };
      if (sigE > 0.0) {
        addRoeVec([0, 0, sigE, 0, 0, 0]);
        addRoeVec([0, 0, 0, sigE, 0, 0]);
      }
      if (sigI > 0.0) {
        addRoeVec([0, 0, 0, 0, sigI, 0]);
        addRoeVec([0, 0, 0, 0, 0, sigI]);
      }
      if (sL > 0.0) addRoeVec([vL0, vL1, 0, 0, 0, 0]);
      if (sD > 0.0) addRoeVec([vD0, vD1, 0, 0, 0, 0]);
    }

    const BaseFloorNoise = new Float64Array(36);
    for (let q = 0; q < 36; q++) BaseFloorNoise[q] = F6[q] + Q6[q];

    phis.push(phi);
    states.push(st);
    floors.push(F6);
    noises.push(Q6);
    whites.push(whitening6(BaseFloorNoise) ?? whitening6(F6));
  }

  return { phis, states, floors, noises, whites };
}

function encodeAtStep(mor, nativeG, tb, paramCount, horizon, step) {
  const N = 6 + paramCount;
  const h = 2 + paramCount;
  const coords = buildCoordinatePair(tb.r, tb.v, paramCount);
  if (!coords) return null;
  const { tg, ti } = coords;

  // Gz = tg * nativeG (N x N), Pz = Gz * Gz^T
  const Gz = new Float64Array(N * N);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let s = 0.0;
      for (let k = 0; k < N; k++) s += tg[i * N + k] * nativeG[k * N + j];
      Gz[i * N + j] = s;
    }
  }
  const Pz = new Float64Array(N * N);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      let s = 0.0;
      for (let k = 0; k < N; k++) s += Gz[i * N + k] * Gz[j * N + k];
      Pz[i * N + j] = Pz[j * N + i] = s;
    }
  }

  const etaVec = (v) => {
    let best = 0.0;
    for (let t = 0; t < horizon.phis.length; t++) {
      const phi = horizon.phis[t];
      const W = horizon.whites[t];
      if (!W) continue;
      const pv = new Float64Array(6);
      for (let i = 0; i < 6; i++) {
        let s = 0.0;
        for (let k = 0; k < N; k++) s += phi[i * N + k] * v[k];
        pv[i] = s;
      }
      let norm2 = 0.0;
      for (let i = 0; i < 6; i++) {
        let s = 0.0;
        for (let k = 0; k <= i; k++) s += W[i * 6 + k] * pv[k];
        norm2 += s * s;
      }
      const val = Math.sqrt(norm2);
      if (val > best) best = val;
    }
    return best;
  };

  const paramIndices = [];
  for (let k = 0; k < paramCount; k++) paramIndices.push(6 + k);
  const head = [0, 1, ...paramIndices];
  const tail = [2, 3, 4, 5];

  const HH = new Float64Array(h * h);
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < h; j++) HH[i * h + j] = Pz[head[i] * N + head[j]];
  }
  const invHH = invertSmall(HH, h);
  const tailScores = tail.map((m) => {
    let res = Pz[m * N + m];
    if (invHH) {
      const cVec = head.map((idx) => Pz[m * N + idx]);
      for (let i = 0; i < h; i++) {
        let mc = 0.0;
        for (let j = 0; j < h; j++) mc += invHH[i * h + j] * cVec[j];
        res -= cVec[i] * mc;
      }
    }
    const sd = Math.sqrt(Math.max(res, 1e-30));
    const col = new Float64Array(N);
    for (let a = 0; a < N; a++) col[a] = ti[a * N + m] * sd;
    return [m, etaVec(col)];
  });
  tailScores.sort((a, b) => (b[1] !== a[1] ? b[1] - a[1] : a[0] - b[0]));
  const orderedTail = tailScores.map((x) => x[0]);
  const piIdx = TAIL_PERMUTATIONS.findIndex((p) => p.every((v, k) => v === orderedTail[k]));
  const perm = [...head, ...orderedTail];

  // Permuted covariance PP and correlation factor LC
  const PP = new Float64Array(N * N);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) PP[i * N + j] = Pz[perm[i] * N + perm[j]];
  }
  const sg = new Float64Array(N);
  for (let i = 0; i < N; i++) sg[i] = Math.sqrt(Math.max(PP[i * N + i], 1e-30));
  const Cmat = new Float64Array(N * N);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      const val = i === j ? 1.0 : Math.max(-1.0, Math.min(1.0, PP[i * N + j] / (sg[i] * sg[j])));
      Cmat[i * N + j] = Cmat[j * N + i] = val;
    }
  }
  const LC = psdFactor(Cmat, N);
  if (!LC) return null;
  // Normalize each row of LC to unit norm so hyperspherical parametrization is exact.
  for (let i = 0; i < N; i++) {
    let nr2 = 0.0;
    for (let j = 0; j <= i; j++) nr2 += LC[i * N + j] * LC[i * N + j];
    const nr = Math.sqrt(nr2);
    if (nr > 0.0) {
      for (let j = 0; j <= i; j++) LC[i * N + j] /= nr;
    } else {
      LC[i * N + i] = 1.0;
    }
    if (LC[i * N + i] < 0.0) {
      for (let r = i; r < N; r++) LC[r * N + i] = -LC[r * N + i];
    }
  }

  // Exact factor columns in native coordinates: gCol[k] = sum_i ti[:, perm[i]] * (LC[i, k] * sg[i])
  const etas = new Float64Array(N);
  for (let k = 0; k < N; k++) {
    const col = new Float64Array(N);
    for (let a = 0; a < N; a++) {
      let s = 0.0;
      for (let i = k; i < N; i++) s += ti[a * N + perm[i]] * (LC[i * N + k] * sg[i]);
      col[a] = s;
    }
    etas[k] = etaVec(col);
  }
  const rowEtas = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const col = new Float64Array(N);
    for (let a = 0; a < N; a++) col[a] = ti[a * N + perm[i]] * sg[i];
    rowEtas[i] = etaVec(col);
  }

  const { B, S, DROP, ZERO, paramAngle, paramSigma } = stepPalettes(step);
  let rank = N;
  let dropSum = 0.0;
  for (let k = N - 1; k >= h; k--) {
    if (dropSum + etas[k] * etas[k] <= DROP * DROP && etas[k] <= DROP) {
      dropSum += etas[k] * etas[k];
      rank = k;
    } else {
      break;
    }
  }

  const pickIdx = (wt, base, pal) => {
    const raw = Math.ceil(base + Math.log2(Math.max(wt, Math.pow(2.0, -12))));
    const idx = pal.findIndex((x) => x >= raw);
    return idx < 0 ? 3 : idx;
  };
  const quantizeUnit = (frac, bits) => {
    const clamped = Math.max(0.0, Math.min(1.0, frac));
    return Math.round(clamped * (pow2Int(bits) - 1.0));
  };

  const w = new BitWriter();
  w.write(step, 5);
  w.write(piIdx * 5 + (rank - h), 7);

  const colCount = Math.min(rank, N - 1);
  const colBits = new Array(colCount);
  for (let j = 0; j < colCount; j++) {
    if (j < h) {
      colBits[j] = B[3];
    } else {
      const bi = pickIdx((etas[j] * etas[j]) / (1.0 + etas[j] * etas[j]), 13 + step, B);
      w.write(bi, 2);
      colBits[j] = B[bi];
    }
  }

  const used = Array.from({ length: N }, (_, i) => i < rank);
  const angleQueue = [];
  for (let i = 1; i < N; i++) {
    let rem = 1.0;
    const isParamRow = i >= 2 && i < h;
    const jMax = Math.min(i, rank);
    for (let j = 0; j < jMax; j++) {
      const cv = Math.max(-1.0, Math.min(1.0, LC[i * N + j] / Math.max(Math.sqrt(rem), 1e-15)));
      if (isParamRow) {
        angleQueue.push([quantizeUnit(Math.acos(cv) / PI, paramAngle), paramAngle]);
      } else if (Math.abs(cv) <= ZERO) {
        w.write(0, 1);
      } else {
        w.write(1, 1);
        if (i >= rank) used[i] = true;
        angleQueue.push([quantizeUnit(Math.acos(cv) / PI, colBits[j]), colBits[j]]);
      }
      rem = Math.max(0.0, rem - LC[i * N + j] * LC[i * N + j]);
    }
  }
  for (const [val, bits] of angleQueue) w.write(val, bits);

  // A row scale above the palette's top (2^18) cannot be written; the caller falls back to the escape.
  for (let i = 0; i < N; i++) if (used[i] && !(sg[i] <= Math.pow(2.0, LOG2_SIGMA_HI))) return null;
  for (let i = 0; i < N; i++) {
    if (!used[i]) continue;
    let bSigma;
    if (i < 2) {
      bSigma = S[3];
    } else if (i < h) {
      bSigma = paramSigma;
    } else {
      const si = pickIdx((rowEtas[i] * rowEtas[i]) / (1.0 + rowEtas[i] * rowEtas[i]), 15 + step, S);
      w.write(si, 2);
      bSigma = S[si];
    }
    const logVal = Math.log2(Math.max(sg[i], Math.pow(2.0, LOG2_SIGMA_LO)));
    w.write(quantizeUnit((logVal - LOG2_SIGMA_LO) / LOG2_SIGMA_SPAN, bSigma), bSigma);
  }

  return w.toUint8Array();
}

function encodeEscape(nativeG, N) {
  // Determine effective column rank (keep trailing zero columns out if exact zero).
  let rank = N;
  while (rank > 1) {
    let nonZero = false;
    for (let i = rank - 1; i < N; i++) {
      if (nativeG[i * N + (rank - 1)] !== 0.0) { nonZero = true; break; }
    }
    if (nonZero) break;
    rank--;
  }
  const entries = (rank * ((2 * N) - rank + 1)) / 2;
  const out = new Uint8Array(1 + 8 * entries);
  out[0] = (MODE_ESCAPE << 3) | ((rank - 1) & 7);
  const view = new DataView(out.buffer);
  let off = 1;
  for (let j = 0; j < rank; j++) {
    for (let i = j; i < N; i++) {
      view.setFloat64(off, canonZero(nativeG[i * N + j]), true);
      off += 8;
    }
  }
  return out;
}

function rswBasis6(r, v) {
  const rn = Math.hypot(r[0], r[1], r[2]);
  const u = [r[0] / rn, r[1] / rn, r[2] / rn];
  const h = [
    r[1] * v[2] - r[2] * v[1],
    r[2] * v[0] - r[0] * v[2],
    r[0] * v[1] - r[1] * v[0],
  ];
  const hn = Math.hypot(h[0], h[1], h[2]);
  const w = [h[0] / hn, h[1] / hn, h[2] / hn];
  const ev = [
    w[1] * u[2] - w[2] * u[1],
    w[2] * u[0] - w[0] * u[2],
    w[0] * u[1] - w[1] * u[0],
  ];
  return [u, ev, w];
}

function checkCandidateAnalytical(P, Pfit, F0, decoded, horizon, strictMode, horizonMargin = 0.22) {
  const epochMargin = 0.85;
  const N = decoded.N;
  const Phat = new Float64Array(decoded.Pfit);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) Phat[i * N + j] += F0[i * 6 + j];
  }

  const sigRef = new Float64Array(N);
  const sigHat = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    if (!(P[i * N + i] > 0.0) || !(Phat[i * N + i] > 0.0)) return false;
    sigRef[i] = Math.sqrt(P[i * N + i]);
    sigHat[i] = Math.sqrt(Phat[i * N + i]);
    const rel = Math.abs(sigHat[i] / sigRef[i] - 1.0);
    const lim = i < 6 ? 0.001 * epochMargin : (strictMode ? 0.001 * epochMargin : 0.01 * epochMargin);
    if (rel > lim) return false;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      const cRef = P[i * N + j] / (sigRef[i] * sigRef[j]);
      const cHat = Phat[i * N + j] / (sigHat[i] * sigHat[j]);
      const diff = Math.abs(cHat - cRef);
      const lim = i < 6 ? 1e-4 * epochMargin : (strictMode ? 1e-4 * epochMargin : (j < 6 ? 1e-3 * epochMargin : 1.0));
      if (diff > lim) return false;
    }
  }
  if (!psdFactor(Phat, N)) return false;

  // Check analytical horizon covariance at days 0, 1, 3, 7 (all 6 TEME & RSW sigmas + 2x2 encounter bounds).
  for (let t = 0; t < horizon.phis.length; t++) {
    const m = t === 0 ? epochMargin : horizonMargin;
    const phi = horizon.phis[t];
    const F6 = horizon.floors[t];
    const Q6 = horizon.noises[t];
    const propCov = (FitMat) => {
      const tmp = new Float64Array(6 * N);
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < N; j++) {
          let s = 0.0;
          for (let k = 0; k < N; k++) s += phi[i * N + k] * FitMat[k * N + j];
          tmp[i * N + j] = s;
        }
      }
      const out = new Float64Array(36);
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j <= i; j++) {
          let s = F6[i * 6 + j] + Q6[i * 6 + j];
          for (let k = 0; k < N; k++) s += tmp[i * N + k] * phi[j * N + k];
          out[i * 6 + j] = out[j * 6 + i] = s;
        }
      }
      return out;
    };
    const rawRef = propCov(Pfit);
    const rawHat = propCov(decoded.Pfit);
    for (let i = 0; i < 6; i++) {
      if (!(rawRef[i * 6 + i] > 0.0) || !(rawHat[i * 6 + i] > 0.0)) return false;
      const zt = Math.abs(Math.sqrt(rawHat[i * 6 + i] / rawRef[i * 6 + i]) - 1.0);
      if (zt > 0.001 * m) return false;
    }
    const B3 = rswBasis6(horizon.states[t].r, horizon.states[t].v);
    const toRsw6 = (M6) => {
      const R = new Float64Array(36);
      for (let a = 0; a < 3; a++) {
        for (let c = 0; c < 3; c++) {
          R[a * 6 + c] = B3[a][c];
          R[(3 + a) * 6 + (3 + c)] = B3[a][c];
        }
      }
      const RM = new Float64Array(36);
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          let s = 0.0;
          for (let k = 0; k < 6; k++) s += R[i * 6 + k] * M6[k * 6 + j];
          RM[i * 6 + j] = s;
        }
      }
      const out = new Float64Array(36);
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j <= i; j++) {
          let s = 0.0;
          for (let k = 0; k < 6; k++) s += RM[i * 6 + k] * R[j * 6 + k];
          out[i * 6 + j] = out[j * 6 + i] = s;
        }
      }
      return out;
    };
    const rswRef = toRsw6(rawRef);
    const rswHat = toRsw6(rawHat);
    for (let i = 0; i < 6; i++) {
      const zr = Math.abs(Math.sqrt(rswHat[i * 6 + i] / rswRef[i * 6 + i]) - 1.0);
      if (zr > 0.001 * m) return false;
    }
    // Pointwise Gaussian log-density ratio bound across encounter planes (0,1), (1,2), (2,0) and miss [0.1, 1, 10] km.
    for (let ax0 = 0; ax0 < 3; ax0++) {
      const ax1 = (ax0 + 1) % 3;
      const aa = 2.0 * rswRef[ax0 * 6 + ax0], ab = 2.0 * rswRef[ax0 * 6 + ax1], ac = 2.0 * rswRef[ax1 * 6 + ax1];
      const ba = 2.0 * rswHat[ax0 * 6 + ax0], bb = 2.0 * rswHat[ax0 * 6 + ax1], bc = 2.0 * rswHat[ax1 * 6 + ax1];
      const da = aa * ac - ab * ab;
      const db = ba * bc - bb * bb;
      if (!(da > 0.0 && db > 0.0)) return false;
      const ia = ac / da, ib = -ab / da, ic = aa / da;
      const ja = bc / db, jb = -bb / db, jc = ba / db;
      const u = ja - ia, v = jb - ib, w = jc - ic;
      const op = 0.5 * Math.abs(u + w) + Math.hypot(0.5 * (u - w), v);
      if (Math.abs(ja / ia - 1.0) > 0.005 * m) return false;
      for (const miss of [0.1, 1.0, 10.0]) {
        const centerBound = 0.5 * Math.abs(Math.log(db / da)) + 0.5 * miss * miss * op;
        const variation = 0.01 * miss * op + 0.00005 * op;
        const upperLog10 = (centerBound + variation) / Math.LN10;
        if (strictMode) {
          if (upperLog10 > 0.01 * m) return false;
        } else {
          const d2Min = miss * miss * Math.min(ia, ic);
          const approxLog10p = (Math.log(Math.PI * 1e-4 / (2.0 * Math.PI * Math.sqrt(da))) - 0.5 * d2Min) / Math.LN10;
          if (approxLog10p >= -12.0 && upperLog10 > 0.01 * m) return false;
        }
      }
    }
  }
  return true;
}

const STRICT_STEPS = [2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20];
const OPERATIONAL_STEPS = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20];

/// Encode a MOR record's covariance fit part into COV_FACTOR bytes.
/// Policies:
///   - 'strict': adaptive per-record step selection for strict 7-day thresholds (with lossless escape fallback)
///   - 'fixed': single-pass fixed step 12 (~117 B mean on 8x8 catalog records)
///   - 'operational': adaptive per-record step selection for operational 7-day thresholds
///   - { step: number }: explicit step in 0..20
///   - { escape: true }: explicit lossless escape mode (31)
export function encodeCovFactor(mor, options = {}) {
  const policy = typeof options === 'string' ? options : (options.policy ?? 'strict');
  const paramCount = solvedCovParamCount(mor.OD_SOLVED_FOR ?? 0);
  if (paramCount < 0 || paramCount > 2) {
    throw new Error('Unsupported OD_SOLVED_FOR parameters for COV_FACTOR');
  }
  const N = 6 + paramCount;
  const P = unpackLtm(mor.COVARIANCE_DATA, N);
  if (!P) throw new Error('Invalid COVARIANCE_DATA length or non-finite entry');
  if (Number(mor.COV_FLOOR ?? 0) !== 2 || !mor.COV_PROPAGATION) {
    throw new Error('COV_FACTOR encoding requires COV_FLOOR = MEAN_ELEMENTS_TWO_BODY (2) and COV_PROPAGATION');
  }
  // A record a reader would refuse (outside the validity domain) gets no factor: null, and it keeps COVARIANCE_DATA.
  const tb = twoBodyState(mor);
  if (!tb) return null;
  const floor6 = extractFloor6(mor.COV_PROPAGATION);
  if (!floorInDomain(floor6)) return null;
  const F0 = floorMatrixAtState(floor6, tb.r, tb.v);
  if (!F0) throw new Error('Invalid COV_PROPAGATION floor');

  const Pfit = new Float64Array(P);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) Pfit[i * N + j] -= F0[i * 6 + j];
  }
  const nativeG = psdFactor(Pfit, N);
  if (!nativeG) throw new Error('Epoch covariance minus floor is not positive semidefinite');

  let escapeInDomain = true;
  for (let i = 0; i < N; i++) for (let j = 0; j <= i; j++) escapeInDomain = escapeInDomain && valueInRange(nativeG[i * N + j], DOMAIN.ESCAPE_ABS_MAX);
  // an escape a reader would refuse is not written: null, and the record keeps COVARIANCE_DATA
  const escape = () => (escapeInDomain ? { bytes: encodeEscape(nativeG, N), encoding: MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1, mode: MODE_ESCAPE, selection: 'escape' } : null);
  if (options.escape === true || policy === 'escape') return escape();

  // A compressed stream is kept only when it decodes; otherwise the writer falls back to the lossless escape.
  const decodes = (bytes) => bytes && !decodeCovFactor({
    MEAN_MOTION: mor.MEAN_MOTION, ECCENTRICITY: mor.ECCENTRICITY, INCLINATION: mor.INCLINATION,
    RA_OF_ASC_NODE: mor.RA_OF_ASC_NODE, ARG_OF_PERICENTER: mor.ARG_OF_PERICENTER, MEAN_ANOMALY: mor.MEAN_ANOMALY,
    OD_SOLVED_FOR: mor.OD_SOLVED_FOR, COV_FLOOR: mor.COV_FLOOR, COV_PROPAGATION: mor.COV_PROPAGATION,
    COV_FACTOR: bytes, COV_FACTOR_ENCODING: MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1,
  }).error;
  const horizon = buildAnalyticalHorizon(mor, tb, paramCount);
  if (typeof options.step === 'number') {
    const step = options.step;
    if (!Number.isInteger(step) || step < 0 || step > MODE_MAX_STEP) {
      throw new Error(`Invalid explicit step ${step}`);
    }
    const bytes = encodeAtStep(mor, nativeG, tb, paramCount, horizon, step);
    if (!decodes(bytes)) return escape();
    return { bytes, encoding: MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1, mode: step, selection: `step-${step}` };
  }

  if (policy === 'fixed') {
    const step = 12;
    const bytes = encodeAtStep(mor, nativeG, tb, paramCount, horizon, step);
    if (!decodes(bytes)) return escape();
    return { bytes, encoding: MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1, mode: step, selection: 'step-12' };
  }

  const strictMode = policy !== 'operational';
  const margin = options.margin ?? (strictMode ? 0.30 : 0.40);
  const ecc = Number(mor.ECCENTRICITY);
  const minStrictStep = ecc >= 0.3 ? 6 : (ecc >= 0.08 ? 4 : 2);
  const minOpStep = ecc >= 0.3 ? 5 : (ecc >= 0.08 ? 3 : 0);
  const candidateSteps = (strictMode ? STRICT_STEPS : OPERATIONAL_STEPS).filter((s) => s >= (strictMode ? minStrictStep : minOpStep));
  for (const step of candidateSteps) {
    const bytes = encodeAtStep(mor, nativeG, tb, paramCount, horizon, step);
    if (!bytes) continue;
    const probe = {
      MEAN_MOTION: mor.MEAN_MOTION,
      ECCENTRICITY: mor.ECCENTRICITY,
      INCLINATION: mor.INCLINATION,
      RA_OF_ASC_NODE: mor.RA_OF_ASC_NODE,
      ARG_OF_PERICENTER: mor.ARG_OF_PERICENTER,
      MEAN_ANOMALY: mor.MEAN_ANOMALY,
      OD_SOLVED_FOR: mor.OD_SOLVED_FOR,
      COV_FLOOR: mor.COV_FLOOR,
      COV_PROPAGATION: mor.COV_PROPAGATION,
      COV_FACTOR: bytes,
      COV_FACTOR_ENCODING: MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1,
    };
    const dec = decodeCovFactor(probe);
    if (dec.present && !dec.error && checkCandidateAnalytical(P, Pfit, F0, dec, horizon, strictMode, margin)) {
      return { bytes, encoding: MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1, mode: step, selection: `step-${step}` };
    }
  }

  return escape();
}
