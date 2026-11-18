// Seeded cases over the edges of the $MOR COV_FACTOR validity domain and outside it (schema/MOR/COV_FACTOR.md
// section 3), and the outcome check every decoder must pass: a refusal (an error and no matrix), no covariance
// (encoding NONE or unknown), or a finite, exactly symmetric, positive semi-definite G G^T and P. Shared by
// scripts/e2e/mor-cov-factor-fuzz.mjs and by implementations in other repositories that fuzz their own decoder.

// Case i depends only on (seed, i).
function rng(seed, i) {
  let s = (Math.imul(seed ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(i + 1, 0xc2b2ae35)) >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const dv = new DataView(new ArrayBuffer(8));
const bitsDouble = (r) => { dv.setUint32(0, Math.floor(r() * 4294967296)); dv.setUint32(4, Math.floor(r() * 4294967296)); return dv.getFloat64(0); };
/// The neighboring binary64 value above (up) or below.
export function nextDouble(x, up) {
  if (Number.isNaN(x)) return x;
  if (x === 0) return up ? 5e-324 : -5e-324;
  dv.setFloat64(0, x);
  let b = dv.getBigUint64(0);
  b = ((x > 0) === up) ? b + 1n : b - 1n;
  dv.setBigUint64(0, b);
  return dv.getFloat64(0);
}
export const SPECIAL = [NaN, Infinity, -Infinity, 0, -0, 5e-324, -5e-324, 2.225073858507201e-308, -2.225073858507201e-308,
  2.2250738585072014e-308, -2.2250738585072014e-308, 1.7976931348623157e308, -1.7976931348623157e308, -1, 1, 0.5, 2,
  1e-159, 1e300, 0.0000152587890625, 256, 180, 360, -360, 0.999999999999, nextDouble(1, false), 68719476736, 4294967296];
export const FLOOR_KEYS = ['FLOOR_UU_KM2', 'FLOOR_VU_KM2', 'FLOOR_VV_KM2', 'FLOOR_WU_KM2', 'FLOOR_WV_KM2', 'FLOOR_WW_KM2'];
const SCALARS = ['MEAN_MOTION', 'ECCENTRICITY', 'INCLINATION', 'RA_OF_ASC_NODE', 'ARG_OF_PERICENTER', 'MEAN_ANOMALY', ...FLOOR_KEYS];
const BOUNDS = { MEAN_MOTION: [0.0000152587890625, 256], ECCENTRICITY: [0, 1], INCLINATION: [0, 0.0000000009313225746154785, 180],
  RA_OF_ASC_NODE: [-360, 360], ARG_OF_PERICENTER: [-360, 360], MEAN_ANOMALY: [-360, 360], FLOOR_UU_KM2: [0, 3.054936363499605e-151, 68719476736] };

/// One case: { rec, what }. rec carries the elements, OD_SOLVED_FOR, COV_FLOOR, COV_PROPAGATION (floor scalars),
/// COV_FACTOR (Uint8Array) and COV_FACTOR_ENCODING, with COVARIANCE_DATA empty.
export function makeCase(vectors, seed, i) {
  const r = rng(seed, i);
  const pick = (a) => a[Math.floor(r() * a.length)];
  const v = vectors[i % vectors.length];
  const prop = {};
  for (const k of FLOOR_KEYS) prop[k] = v.input.COV_PROPAGATION[k];
  const rec = { MEAN_MOTION: v.input.MEAN_MOTION, ECCENTRICITY: v.input.ECCENTRICITY, INCLINATION: v.input.INCLINATION,
    RA_OF_ASC_NODE: v.input.RA_OF_ASC_NODE, ARG_OF_PERICENTER: v.input.ARG_OF_PERICENTER, MEAN_ANOMALY: v.input.MEAN_ANOMALY,
    OD_SOLVED_FOR: v.input.OD_SOLVED_FOR, COV_FLOOR: v.input.COV_FLOOR, COV_PROPAGATION: prop, COVARIANCE_DATA: [], COV_FACTOR_ENCODING: 1 };
  let factor = Buffer.from(v.factorHex, 'hex');
  const set = (k, x) => { if (k.startsWith('FLOOR_')) rec.COV_PROPAGATION[k] = x; else rec[k] = x; };
  const kind = i % 10;
  let what;
  if (kind === 0) { // one scalar at a special value
    const k = pick(SCALARS), x = pick(SPECIAL); set(k, x); what = `${k}=${x}`;
  } else if (kind === 1) { // one scalar at a domain bound or a neighbor of it
    const k = pick(Object.keys(BOUNDS)), b = pick(BOUNDS[k]), x = r() < 0.34 ? b : nextDouble(b, r() < 0.5); set(k, x); what = `${k}=${x}`;
  } else if (kind === 2) { // random bit patterns in several scalars
    for (const k of SCALARS) if (r() < 0.3) set(k, bitsDouble(r));
    what = 'random scalar bits';
  } else if (kind === 3) { // one bit flipped anywhere in a valid factor
    factor = Buffer.from(factor); const bit = Math.floor(r() * factor.length * 8); factor[bit >> 3] ^= 0x80 >> (bit & 7); what = `flip bit ${bit}`;
  } else if (kind === 4) { // truncated or over-long
    if (r() < 0.5) { factor = factor.subarray(0, Math.floor(r() * factor.length)); what = `truncated to ${factor.length}`; }
    else { const extra = Buffer.alloc(1 + Math.floor(r() * 16)); for (let k = 0; k < extra.length; k++) extra[k] = Math.floor(r() * 256); factor = Buffer.concat([factor, extra]); what = `+${extra.length} bytes`; }
  } else if (kind === 5) { // random bytes, random length, any mode
    factor = Buffer.alloc(Math.floor(r() * 300)); for (let k = 0; k < factor.length; k++) factor[k] = Math.floor(r() * 256); what = `random ${factor.length} bytes`;
  } else if (kind === 6) { // random bytes behind a valid compressed header (mode 0..20, code < 120)
    factor = Buffer.alloc(2 + Math.floor(r() * 160)); for (let k = 0; k < factor.length; k++) factor[k] = Math.floor(r() * 256);
    const mode = Math.floor(r() * 21), code = Math.floor(r() * 120);
    factor[0] = (mode << 3) | (code >> 4); factor[1] = ((code & 15) << 4) | (factor[1] & 15); what = `mode ${mode} code ${code} random body`;
  } else if (kind === 7) { // escape factors of every rank, special or random values
    const N = 6 + (((rec.OD_SOLVED_FOR >>> 1) & 1) + ((rec.OD_SOLVED_FOR >>> 3) & 1)), rank = 1 + Math.floor(r() * N);
    factor = Buffer.alloc(1 + 8 * (rank * (2 * N - rank + 1)) / 2); factor[0] = (31 << 3) | (rank - 1);
    for (let k = 1; k + 8 <= factor.length; k += 8) factor.writeDoubleLE(r() < 0.1 ? pick(SPECIAL) : (r() - 0.5) * Math.pow(2, Math.floor(r() * 80) - 40), k);
    what = `escape rank ${rank}`;
  } else if (kind === 8) { // masks, floor kinds, encodings
    const c = Math.floor(r() * 3);
    if (c === 0) { rec.OD_SOLVED_FOR = r() < 0.5 ? pick([0, 2, 8, 10, 64, 66, 72, 74, 4, 16, 0xffffffff]) : Math.floor(r() * 4294967296); what = `OD_SOLVED_FOR=${rec.OD_SOLVED_FOR}`; }
    else if (c === 1) { rec.COV_FLOOR = Math.floor(r() * 256); what = `COV_FLOOR=${rec.COV_FLOOR}`; }
    else { rec.COV_FACTOR_ENCODING = Math.floor(r() * 256); what = `COV_FACTOR_ENCODING=${rec.COV_FACTOR_ENCODING}`; }
  } else { // valid elements anywhere in the domain, random PSD floors
    rec.MEAN_MOTION = Math.pow(2, -16 + 24 * r()); rec.ECCENTRICITY = r() < 0.2 ? nextDouble(1, false) : r();
    rec.INCLINATION = 180 * r(); rec.RA_OF_ASC_NODE = 720 * r() - 360; rec.ARG_OF_PERICENTER = 720 * r() - 360; rec.MEAN_ANOMALY = 720 * r() - 360;
    const s = Math.pow(2, 36 * r() - 30);
    Object.assign(rec.COV_PROPAGATION, { FLOOR_UU_KM2: s, FLOOR_VU_KM2: 0, FLOOR_VV_KM2: s * r(), FLOOR_WU_KM2: 0, FLOOR_WV_KM2: 0, FLOOR_WW_KM2: s * r() });
    what = 'random in-domain elements and floor';
  }
  rec.COV_FACTOR = Uint8Array.from(factor);
  return { rec, what };
}

/// A + 1e-9 I positive definite after scaling to unit diagonal; a zero diagonal needs a zero row.
export function isPsd(A, N) {
  const d = new Float64Array(N);
  for (let i = 0; i < N; i++) d[i] = A[i * N + i];
  const C = new Float64Array(N * N);
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    if (d[i] === 0 || d[j] === 0) { if (A[i * N + j] !== 0) return false; C[i * N + j] = i === j ? 1 : 0; continue; }
    if (d[i] < 0 || d[j] < 0) return false;
    C[i * N + j] = A[i * N + j] / Math.sqrt(d[i] * d[j]);
  }
  for (let i = 0; i < N; i++) C[i * N + i] += 1e-9;
  for (let j = 0; j < N; j++) {
    let s = C[j * N + j];
    for (let k = 0; k < j; k++) s -= C[j * N + k] * C[j * N + k];
    if (!(s > 0)) return false;
    const l = Math.sqrt(s);
    C[j * N + j] = l;
    for (let i = j + 1; i < N; i++) {
      let t = C[i * N + j];
      for (let k = 0; k < j; k++) t -= C[i * N + k] * C[j * N + k];
      C[i * N + j] = t / l;
    }
  }
  return true;
}

/// 'decoded' when every matrix is finite, exactly symmetric and PSD; otherwise the defect.
export function checkMatrices(G, Pfit, P, N) {
  if (!G.every(Number.isFinite)) return 'non-finite';
  for (const M of [Pfit, P].filter(Boolean)) {
    if (!M.every(Number.isFinite)) return 'non-finite';
    for (let i = 0; i < N; i++) for (let j = 0; j < i; j++) if (M[i * N + j] !== M[j * N + i]) return 'asymmetric';
    if (!isPsd(M, N)) return 'not PSD';
  }
  return 'decoded';
}

/// The outcome of the reference decoder on one case: refused, ignored, none, decoded, or a defect.
export function outcome(decode, rec) {
  let d;
  try { d = decode(rec); } catch (e) { return `throw: ${e.message}`; }
  if (d.error) return d.present || d.G !== undefined || d.Pfit !== undefined || d.P !== undefined || d.ltm !== undefined ? 'partial result with an error' : 'refused';
  if (!d.present) return d.ignored ? 'ignored' : 'none';
  return checkMatrices(d.G, d.Pfit, d.P, d.N);
}
export const DEFINED_OUTCOMES = ['refused', 'ignored', 'none', 'decoded'];
