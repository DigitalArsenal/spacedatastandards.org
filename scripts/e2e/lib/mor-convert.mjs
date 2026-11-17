// The $MOR <-> $OCM conversion that schema/MOR/main.fbs states, written once for the E2E and for size
// measurements. `O` is a bundle of the generated OCM bindings (object API classes), `M` of the MOR bindings.
//
//   expand(M-object, asset, O)            -> { ocm: OCMT, fallback: MPET | null }
//   reduce(OCMT, asset, O, M)             -> { mor: MORT | null, dropped: [path], problems: [path] }
//   encode(fb, M, MORT)                   -> Uint8Array, size-prefixed $MOR, only stated fields written
//
// `asset` is the publication's statement for the asset that carries the record: { provenance: PVN object or
// null, build: DPMDerivedBuild-like object or null, recordDigest(mor) -> number[] (the builder's rule) }.

import { MOR_COV_FACTOR_FORMAT, decodeCovFactor, encodeCovFactor } from './mor-cov-factor.mjs';
export { MOR_COV_FACTOR_FORMAT, decodeCovFactor, encodeCovFactor };

export const THEORY = { SGP4: 0, SGP4XP: 1, AP: 5 };
const COV_KINDS = [1, 2, 3, 4, 16];
const OD_CARRIED = [1, 3, 6];
const KIND_NAME = { 1: 'DRAG_AREA_OVER_MASS', 2: 'DRAG_AREA_OVER_MASS_RATE', 3: 'SRP_AREA_OVER_MASS', 4: 'IN_TRACK_ACCELERATION', 6: 'ECOM2_Y0', 16: 'OUTGASSING_ACCELERATION' };
const KIND_UNITS = { 1: 'm**2/kg', 2: 'm**2/kg/s', 3: 'm**2/kg', 4: 'm/s**2', 6: 'm/s**2', 16: 'km/s**2' };
export const GRAVITY_TEXT = { 1: 'EGM2008', 2: 'EGM2008; slow tesseral terms to degree 70' };
export const SRP_TEXT = {
  1: "SPHERE (AGOM) AND ECOM2 Y0 (ARNOLD ET AL. 2015), SPHERE'S CYLINDRICAL SHADOW",
  2: 'SPHERE (AGOM) THROUGH THE OUTPUT MAP, CYLINDRICAL SHADOW OVER THE STEP',
  3: 'SPHERE (AGOM) THROUGH THE OUTPUT MAP, CYLINDRICAL SHADOW OVER THE STEP, AND ECOM2 Y0 (ARNOLD ET AL. 2015)',
};
export const TIDE_TEXT = { 1: 'IERS 2010' };
const DAY_US = 86400000000n;
export const NOT_STATED_US = -9223372036854775807n;
export const KIND = { FULL: 0, ROWS_ONLY: 1 };
export const FLOOR_PRODUCER = 'com.spacedatanetwork.sdn-ap-propagator 0.6.39';
/// COV_FLOOR of an $OCM covariance from its PROVENANCE.PRODUCER (morCovarianceFloor): 2 at the two-body state
/// of the mean elements, 1 at the writer's theory state.
export function floorOf(producer) {
  const t = /^com\.spacedatanetwork\.sdn-ap-propagator (\d+)\.(\d+)\.(\d+)$/.exec(producer ?? '');
  if (!t) return 1;
  const v = t.slice(1).map(Number), since = [0, 6, 39];
  for (let k = 0; k < 3; k++) if (v[k] !== since[k]) return v[k] > since[k] ? 2 : 1;
  return 2;
}
/// WINDOW_RECORD_CHECK of a 32-byte record digest: its first 8 bytes as a little-endian uint64.
export function recordCheck(digest) {
  let v = 0n;
  for (let k = 7; k >= 0; k--) v = (v << 8n) | BigInt(digest[k] ?? 0);
  return v;
}

// ---- the epoch ---------------------------------------------------------------------------------------------
const pad = (v, n) => String(v).padStart(n, '0');
/// UNIX microseconds -> "YYYY-MM-DDTHH:MM:SS.ffffff".
export function epochText(us) {
  us = BigInt(us);
  let days = us / DAY_US, rem = us % DAY_US;
  if (rem < 0n) { rem += DAY_US; days -= 1n; }
  // civil_from_days (H. Hinnant)
  const z = Number(days) + 719468, era = Math.floor(z / 146097), doe = z - era * 146097;
  const yoe = Math.floor((doe - Math.floor(doe / 1460) + Math.floor(doe / 36524) - Math.floor(doe / 146096)) / 365);
  const doy = doe - (365 * yoe + Math.floor(yoe / 4) - Math.floor(yoe / 100)), mp = Math.floor((5 * doy + 2) / 153);
  const d = doy - Math.floor((153 * mp + 2) / 5) + 1, m = mp < 10 ? mp + 3 : mp - 9, y = yoe + era * 400 + (m <= 2 ? 1 : 0);
  const sec = rem / 1000000n, frac = rem % 1000000n;
  return `${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)}T${pad(sec / 3600n, 2)}:${pad((sec / 60n) % 60n, 2)}:${pad(sec % 60n, 2)}.${pad(frac, 6)}`;
}
/// ISO 8601 UTC text -> UNIX microseconds, or null when it has no exact value (a leap second, finer than 1 us).
export function epochUs(text) {
  const t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?Z?$/.exec(text ?? '');
  if (!t) return null;
  const [y, mo, d, h, mi, s] = t.slice(1, 7).map(Number);
  const frac = t[7] ?? '';
  if (frac.length > 6 && !/^0+$/.test(frac.slice(6))) return null;
  if (mo < 1 || mo > 12 || d < 1 || h > 23 || mi > 59 || s > 59) return null;
  const yy = mo <= 2 ? y - 1 : y, era = Math.floor(yy / 400), yoe = yy - era * 400;
  const doy = Math.floor((153 * (mo > 2 ? mo - 3 : mo + 9) + 2) / 5) + d - 1;
  const days = era * 146097 + yoe * 365 + Math.floor(yoe / 4) - Math.floor(yoe / 100) + doy - 719468;
  const us = BigInt(days) * DAY_US + BigInt(h * 3600 + mi * 60 + s) * 1000000n + BigInt((frac + '000000').slice(0, 6));
  return epochText(us).slice(8, 10) === pad(d, 2) ? us : null; // a day past the month's end has no value
}

// ---- helpers ---------------------------------------------------------------------------------------------------
const bits = (mask) => { const out = []; for (let k = 0; k < 32; k++) if ((mask >>> k) & 1) out.push(k); return out; };
const copyInto = (target, source) => { if (source == null) return null; for (const k of Object.keys(target)) if (k in source) target[k] = clone(source[k]); return target; };
const clone = (v) => (Array.isArray(v) ? v.map(clone) : v && typeof v === 'object' ? Object.assign(Object.create(Object.getPrototypeOf(v)), Object.fromEntries(Object.entries(v).map(([k, x]) => [k, clone(x)]))) : v);
const ofEpochFrame = (m) => m.MEAN_ELEMENT_THEORY === THEORY.AP && (m.MAXIMUM_TESSERAL_DEGREE > 0 || m.MAXIMUM_ZONAL_DEGREE > 0);
function frame(O, ofEpoch) {
  const f = new O.RFMT();
  if (ofEpoch) { f.REFERENCE_FRAME_type = O.RFMUnion.CustomFrameWrapper; f.REFERENCE_FRAME = new O.CustomFrameWrapperT(O.CustomFrame.TEMEOFEPOCH); f.NAME = 'TEMEOFEPOCH'; }
  else { f.REFERENCE_FRAME_type = O.RFMUnion.CelestialFrameWrapper; f.REFERENCE_FRAME = new O.CelestialFrameWrapperT(O.CelestialFrame.TEMEOFDATE); f.NAME = 'TEMEOFDATE'; }
  return f;
}
const gravityText = (m) => GRAVITY_TEXT[m.GRAVITY_FIELD] ?? (m.MEAN_ELEMENT_THEORY === THEORY.SGP4 ? 'WGS-72' : 'EGM-96');

// ---- expansion ---------------------------------------------------------------------------------------------------
/// What a reader refuses in a record (schema/MOR/main.fbs "Validity"), and a ROWS_ONLY record's own rules.
export function invalid(m) {
  const out = [];
  if (m.COV_REALISM && m.COV_REALISM_ID > 0) out.push('COV_REALISM and COV_REALISM_ID both stated');
  const w = m.WINDOWS ?? [];
  for (let i = 0; i < w.length; i++) {
    if (!(w[i].EPOCH_HALF_SPAN > 0)) out.push(`WINDOWS[${i}] half-span not above 0`);
    if (i > 0 && !(w[i - 1].EPOCH_MID_SECONDS + w[i - 1].EPOCH_HALF_SPAN <= w[i].EPOCH_MID_SECONDS - w[i].EPOCH_HALF_SPAN)) out.push(`WINDOWS[${i}] out of order or overlapping`);
  }
  if (m.FALLBACK && (m.FALLBACK.ENTITY_ID != null || m.FALLBACK.TARGETER != null)) out.push('FALLBACK states an ENTITY_ID or a TARGETER');
  if (m.RECORD_KIND === KIND.ROWS_ONLY) {
    if (w.length === 0 || BigInt(m.WINDOW_RECORD_CHECK ?? 0) === 0n) out.push('ROWS_ONLY without WINDOWS or WINDOW_RECORD_CHECK');
    if (![THEORY.SGP4, THEORY.SGP4XP, THEORY.AP].includes(m.MEAN_ELEMENT_THEORY)) out.push('ROWS_ONLY without a theory');
    const keep = new Set(['NORAD_CAT_ID', 'INTERNATIONAL_DESIGNATOR', 'ORIGINATOR', 'MEAN_ELEMENT_THEORY', 'EPOCH_UNIX_US', 'WINDOWS', 'WINDOW_COEFF_HEADS', 'WINDOW_COEFF_TAILS', 'WINDOW_RECORD_CHECK', 'RECORD_KIND']);
    const fresh = new m.constructor();
    for (const k of Object.keys(fresh)) if (!keep.has(k) && !same(m[k], fresh[k])) out.push(`ROWS_ONLY states ${k}`);
  } else if ((m.COVARIANCE_DATA ?? []).length === 0) {
    const enc = m.COV_FACTOR_ENCODING ?? 0;
    const fac = m.COV_FACTOR ?? [];
    if (enc === 0 && fac.length > 0) out.push('COV_FACTOR stated with COV_FACTOR_ENCODING NONE');
    if (enc === MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1) {
      if (fac.length === 0) out.push('COV_FACTOR empty for ROE_HYPERSPHERICAL_V1');
      else if (!m.COV_PROPAGATION || (m.COV_FLOOR ?? 0) === 0) out.push('COV_FACTOR without COV_PROPAGATION or COV_FLOOR');
      else {
        const d = decodeCovFactor(m);
        if (d.error) out.push(d.error);
      }
    }
  }
  return out;
}
/// A ROWS_ONLY record carrying a set's new rows: its identity, theory and epoch, and nothing else of it.
export function rowsOnly(m, M, windows, heads, tails, check) {
  const r = new M.MORT();
  for (const k of ['NORAD_CAT_ID', 'INTERNATIONAL_DESIGNATOR', 'ORIGINATOR', 'MEAN_ELEMENT_THEORY', 'EPOCH_UNIX_US']) r[k] = m[k];
  Object.assign(r, { WINDOWS: windows, WINDOW_COEFF_HEADS: heads, WINDOW_COEFF_TAILS: tails, WINDOW_RECORD_CHECK: check, RECORD_KIND: KIND.ROWS_ONLY });
  return r;
}
export function expand(m, asset, O) {
  // a kind this reader does not know: ignore the record, change nothing
  if (m.RECORD_KIND !== KIND.FULL && m.RECORD_KIND !== KIND.ROWS_ONLY) return { ocm: null, fallback: null, refused: [`RECORD_KIND ${m.RECORD_KIND} unknown: ignored`], unresolved: [], ignored: true };
  const refused = invalid(m);
  if (m.RECORD_KIND === KIND.ROWS_ONLY) refused.push('ROWS_ONLY has no expansion');
  const fullCov = m.COVARIANCE_DATA ?? [];
  let cov = fullCov;
  if (fullCov.length === 0 && (m.COV_FACTOR_ENCODING ?? 0) === MOR_COV_FACTOR_FORMAT.ROE_HYPERSPHERICAL_V1 && refused.length === 0) {
    if (m.COV_FLOOR !== 2) refused.push('COV_FACTOR expansion requires COV_FLOOR MEAN_ELEMENTS_TWO_BODY');
    else cov = decodeCovFactor(m).ltm ?? [];
  }
  // COV_FLOOR governs; an $OCM can state the floor only through PRODUCER, so a contradicting asset text is refused
  if (cov.length > 0 && asset?.provenance && floorOf(asset.provenance.PRODUCER) !== m.COV_FLOOR) refused.push('COV_FLOOR differs from the asset PRODUCER');
  if (refused.length > 0) return { ocm: null, fallback: null, refused, unresolved: [] };
  const unresolved = [];
  const sgp4 = m.MEAN_ELEMENT_THEORY === THEORY.SGP4, ofEpoch = ofEpochFrame(m), text = epochText(m.EPOCH_UNIX_US);
  const o = new O.OCMT();
  o.HEADER = new O.HeaderT();
  o.HEADER.CCSDS_OCM_VERS = '3.0';
  o.HEADER.ORIGINATOR = m.ORIGINATOR ?? null;
  o.HEADER.MESSAGE_STATUS = m.MESSAGE_STATUS;
  o.METADATA = new O.MetadataT();
  o.METADATA.OBJECT_NAME = m.OBJECT_NAME ?? null;
  o.METADATA.INTERNATIONAL_DESIGNATOR = m.INTERNATIONAL_DESIGNATOR ?? null;
  if (m.NORAD_CAT_ID > 0) { o.METADATA.NORAD_CAT_ID = m.NORAD_CAT_ID; o.METADATA.CATALOG_NAME = 'NORAD'; o.METADATA.OBJECT_DESIGNATOR = String(m.NORAD_CAT_ID); }
  o.METADATA.TIME_SYSTEM = 'UTC';
  o.CENTER_NAME = 'EARTH';
  o.TRAJ_REF_FRAME = frame(O, ofEpoch);
  o.TRAJ_FRAME_EPOCH = ofEpoch ? text : null;
  o.ORB_AVERAGING = sgp4 ? 'KOZAI' : 'BROUWER';
  const me = (o.MEAN_ELEMENTS = new O.OCMMeanElementsT());
  me.MEAN_ELEMENT_THEORY = m.MEAN_ELEMENT_THEORY;
  me.EPOCH = text;
  for (const k of ['MEAN_MOTION', 'ECCENTRICITY', 'INCLINATION', 'RA_OF_ASC_NODE', 'ARG_OF_PERICENTER', 'MEAN_ANOMALY', 'BSTAR', 'MEAN_MOTION_DOT', 'MEAN_MOTION_DDOT', 'BTERM', 'AGOM']) me[k] = m[k];
  const pt = (o.PERTURBATIONS = new O.PerturbationsT());
  pt.GRAVITY_MODEL = gravityText(m);
  pt.SOLID_TIDES_MODEL = TIDE_TEXT[m.SOLID_TIDES_MODEL] ?? null;
  pt.SOLAR_RAD_PRESSURE = SRP_TEXT[m.SOLAR_RAD_PRESSURE] ?? null;
  pt.DENSITY_CORRECTION = O.pcfDensityCorrection.NONE;
  if (sgp4) pt.WEATHER_SOURCE = O.pcfWeatherSource.NONE;
  else {
    pt.ATMOSPHERIC_MODEL = new O.ATMT(O.AtmosphericModelFamily.JXX, 1970);
    pt.WEATHER_SOURCE = O.pcfWeatherSource.THEORY_FLUX_MODEL;
    pt.MAXIMUM_TESSERAL_DEGREE = m.MAXIMUM_TESSERAL_DEGREE;
    pt.MAXIMUM_ZONAL_DEGREE = m.MAXIMUM_ZONAL_DEGREE;
  }
  const odStated = m.OD_OBSERVATIONS_USED !== -1 || m.OD_TRACKS_USED !== -1 || !Number.isNaN(m.WEIGHTED_RMS) || BigInt(m.OD_EPOCH_UNIX_US) !== NOT_STATED_US || !Number.isNaN(m.DAYS_SINCE_LAST_OBS);
  if (!Number.isNaN(m.ACTUAL_OD_SPAN) || m.OD_PARAMETERS !== 0 || odStated) {
    const od = (o.ORBIT_DETERMINATION = new O.OrbitDeterminationT());
    od.ACTUAL_OD_SPAN = m.ACTUAL_OD_SPAN;
    od.OD_OBSERVATIONS_USED = m.OD_OBSERVATIONS_USED === -1 ? 0 : m.OD_OBSERVATIONS_USED;
    od.OD_TRACKS_USED = m.OD_TRACKS_USED === -1 ? 0 : m.OD_TRACKS_USED;
    od.WEIGHTED_RMS = Number.isNaN(m.WEIGHTED_RMS) ? 0 : m.WEIGHTED_RMS;
    od.OD_EPOCH = BigInt(m.OD_EPOCH_UNIX_US) === NOT_STATED_US ? null : epochText(m.OD_EPOCH_UNIX_US);
    od.DAYS_SINCE_LAST_OBS = m.DAYS_SINCE_LAST_OBS;
    od.OD_DYNAMIC_PARAMETERS = bits(m.OD_PARAMETERS).map((k) => {
      const p = new O.OCMDynamicParameterT();
      p.NAME = KIND_NAME[k] ?? null;
      p.PARAMETER = k;
      p.SOLVED_FOR = ((m.OD_SOLVED_FOR >>> k) & 1) === 1;
      p.VALUE = k === 1 ? m.BTERM : k === 3 ? m.AGOM : k === 6 ? m.ECOM2_Y0 : NaN;
      p.UNITS = KIND_UNITS[k] ?? null;
      return p;
    });
  }
  if (cov.length > 0) {
    const kinds = COV_KINDS.filter((k) => ((m.OD_SOLVED_FOR >>> k) & 1) === 1);
    o.COVARIANCE_DATA = [...cov];
    o.COV_TYPE = 'CARTPV';
    o.COV_ORDERING = O.covarianceOrdering.LTM;
    o.COV_SIZE = 6 + kinds.length;
    o.COV_PARAMETER_KINDS = kinds;
    o.COV_PARAMETERS = kinds.map((k) => KIND_NAME[k]);
    o.COV_UNITS = ['km', 'km', 'km', 'km/s', 'km/s', 'km/s', ...kinds.map((k) => KIND_UNITS[k])];
    o.COV_REF_FRAME = frame(O, ofEpoch);
    if (m.COV_PROPAGATION) o.COV_PROPAGATION = copyInto(new O.OCMCovariancePropagationT(), m.COV_PROPAGATION);
    if (m.COV_REALISM) o.COV_REALISM = [copyInto(new O.CVRT(), m.COV_REALISM)];
    else if (m.COV_REALISM_ID > 0) {
      const model = (asset?.realismModels ?? []).find((x) => x.ID === m.COV_REALISM_ID);
      if (model) o.COV_REALISM = [copyInto(new O.CVRT(), model.REALISM)];
      else unresolved.push(`COV_REALISM_ID ${m.COV_REALISM_ID}`);
    }
  }
  o.COV_CALIBRATION = m.COV_CALIBRATION;
  o.COV_CALIBRATION_REFERENCE = m.COV_CALIBRATION_REFERENCE ?? null;
  if (asset?.provenance) o.PROVENANCE = copyInto(new O.PVNT(), asset.provenance);
  else if (cov.length > 0 && m.COV_FLOOR === 2) { o.PROVENANCE = new O.PVNT(); o.PROVENANCE.PRODUCER = FLOOR_PRODUCER; }
  const windows = m.WINDOWS ?? [];
  const digest = windows.length > 0 && asset?.build && asset.recordDigest ? asset.recordDigest(m) : null;
  if (digest && recordCheck(digest) === BigInt(m.WINDOW_RECORD_CHECK)) {
    const d = (o.DERIVED_EPHEMERIS = new O.PPET());
    d.REFERENCE_EPOCH = text;
    d.CENTER_NAME = 'EARTH';
    d.REFERENCE_FRAME = new O.RFMT(O.RFMUnion.CelestialFrameWrapper, new O.CelestialFrameWrapperT(O.CelestialFrame.TEMEOFDATE), 0, null);
    d.TIME_SYSTEM = O.timingStandard.UTC;
    d.DEFAULT_BASIS_TYPE = O.polynomialBasisType.CHEBYSHEV;
    d.BUILD = copyInto(new O.PPEBuildT(), asset.build);
    d.BUILD.RECORD_DIGEST = [...digest];
    let h = 0, t = 0;
    const heads = m.WINDOW_COEFF_HEADS ?? [], tails = m.WINDOW_COEFF_TAILS ?? [];
    for (const w of windows) {
      if (w.STATUS !== 0) { d.UNSERVED_MID_SECONDS.push(w.EPOCH_MID_SECONDS); d.UNSERVED_HALF_SPAN.push(w.EPOCH_HALF_SPAN); d.UNSERVED_STATUS.push(w.STATUS); continue; }
      const r = new O.PPEPositionRecordT();
      const n = Math.max(w.POS_COEFF_COUNT, w.VEL_COEFF_COUNT), padTo = (s) => [...s, ...new Array(n - s.length).fill(0)];
      // heads of X, Y, Z then tails of X, Y, Z: split the per-axis runs back
      const hx = heads.slice(h, h + w.POS_COEFF_HEAD_COUNT), hy = heads.slice(h + w.POS_COEFF_HEAD_COUNT, h + 2 * w.POS_COEFF_HEAD_COUNT), hz = heads.slice(h + 2 * w.POS_COEFF_HEAD_COUNT, h + 3 * w.POS_COEFF_HEAD_COUNT);
      const pt_ = w.POS_COEFF_COUNT - w.POS_COEFF_HEAD_COUNT;
      const tx = tails.slice(t, t + pt_), ty = tails.slice(t + pt_, t + 2 * pt_), tz = tails.slice(t + 2 * pt_, t + 3 * pt_);
      h += 3 * w.POS_COEFF_HEAD_COUNT; t += 3 * pt_;
      r.EPOCH_MID_SECONDS = w.EPOCH_MID_SECONDS;
      r.EPOCH_MID = epochText(BigInt(m.EPOCH_UNIX_US) + BigInt(Math.round(w.EPOCH_MID_SECONDS * 1e6)));
      r.EPOCH_HALF_SPAN = w.EPOCH_HALF_SPAN;
      r.NUM_COEFFICIENTS = n;
      r.BASIS_TYPE = O.polynomialBasisType.CHEBYSHEV;
      r.POS_COEFF_X = padTo([...hx, ...tx]); r.POS_COEFF_Y = padTo([...hy, ...ty]); r.POS_COEFF_Z = padTo([...hz, ...tz]);
      r.POS_COEFF_HEAD_COUNT = w.POS_COEFF_HEAD_COUNT;
      r.VEL_COEFF_HEAD_COUNT = w.VEL_COEFF_HEAD_COUNT;
      if (w.VEL_COEFF_COUNT > 0) {
        const vh = w.VEL_COEFF_HEAD_COUNT, vt = w.VEL_COEFF_COUNT - vh;
        const vhx = heads.slice(h, h + vh), vhy = heads.slice(h + vh, h + 2 * vh), vhz = heads.slice(h + 2 * vh, h + 3 * vh);
        const vtx = tails.slice(t, t + vt), vty = tails.slice(t + vt, t + 2 * vt), vtz = tails.slice(t + 2 * vt, t + 3 * vt);
        h += 3 * vh; t += 3 * vt;
        r.HAS_VELOCITY_COEFFICIENTS = true;
        r.VEL_COEFF_X = padTo([...vhx, ...vtx]); r.VEL_COEFF_Y = padTo([...vhy, ...vty]); r.VEL_COEFF_Z = padTo([...vhz, ...vtz]);
      }
      d.POSITION_RECORDS.push(r);
    }
  }
  let fallback = null;
  if (m.FALLBACK) { fallback = clone(m.FALLBACK); fallback.ENTITY_ID = m.NORAD_CAT_ID > 0 ? String(m.NORAD_CAT_ID) : (m.INTERNATIONAL_DESIGNATOR ?? null); }
  return { ocm: o, fallback, refused: [], unresolved };
}

// ---- reduction ---------------------------------------------------------------------------------------------------
const OD_KEPT = new Set(['ACTUAL_OD_SPAN', 'OD_DYNAMIC_PARAMETERS', 'OD_OBSERVATIONS_USED', 'OD_TRACKS_USED', 'WEIGHTED_RMS', 'OD_EPOCH', 'DAYS_SINCE_LAST_OBS']);
/// The descriptive fields a reduction drops (schema/MOR/main.fbs), reset to their defaults on a copy.
function stripDescriptive(o, O, dropped) {
  const reset = (obj, keys, fresh, where) => {
    for (const k of keys) if (!same(obj[k], fresh[k])) { dropped.push(`${where}.${k}`); obj[k] = clone(fresh[k]); }
  };
  if (o.HEADER) reset(o.HEADER, ['COMMENT', 'CREATION_DATE', 'MESSAGE_ID'], new O.HeaderT(), 'HEADER');
  if (o.METADATA) reset(o.METADATA, ['COMMENT', 'ORIGINATOR_POC', 'ORIGINATOR_POSITION', 'ORIGINATOR_PHONE', 'ORIGINATOR_EMAIL', 'ORIGINATOR_ADDRESS'], new O.MetadataT(), 'METADATA');
  if (o.ORBIT_DETERMINATION) {
    const fresh = new O.OrbitDeterminationT();
    reset(o.ORBIT_DETERMINATION, Object.keys(fresh).filter((k) => !OD_KEPT.has(k)), fresh, 'ORBIT_DETERMINATION');
    if (same(o.ORBIT_DETERMINATION, fresh)) o.ORBIT_DETERMINATION = null;
  }
  const d = o.DERIVED_EPHEMERIS;
  if (d) {
    const fresh = new O.PPET();
    reset(d, ['NOMINAL_SEGMENT_SPAN', 'NOMINAL_NUM_COEFFICIENTS'], fresh, 'DERIVED_EPHEMERIS');
    const freshRecord = new O.PPEPositionRecordT();
    for (const r of d.POSITION_RECORDS) reset(r, ['MAX_POSITION_RESIDUAL', 'RMS_POSITION_RESIDUAL'], freshRecord, 'DERIVED_EPHEMERIS.POSITION_RECORDS');
  }
}
const text2enum = (table, text) => { if (text == null || text === '') return 0; const k = Object.keys(table).find((x) => table[x] === text); return k === undefined ? -1 : Number(k); };
const minimal = (axes, head) => {
  let n = axes[0].length;
  while (n > Math.max(head, 1) && axes.every((a) => Object.is(a[n - 1], 0))) n--;
  return n;
};
export function reduce(source, asset, O, M, options = {}) {
  const dropped = [], problems = [];
  const o = clone(source);
  stripDescriptive(o, O, dropped);
  const m = new M.MORT();
  const me = o.MEAN_ELEMENTS, pt = o.PERTURBATIONS, md = o.METADATA, od = o.ORBIT_DETERMINATION;
  if (!me) return { mor: null, dropped, problems: ['MEAN_ELEMENTS absent'] };
  m.NORAD_CAT_ID = md?.NORAD_CAT_ID ?? 0;
  m.INTERNATIONAL_DESIGNATOR = md?.INTERNATIONAL_DESIGNATOR ?? null;
  m.OBJECT_NAME = md?.OBJECT_NAME ?? null;
  m.ORIGINATOR = o.HEADER?.ORIGINATOR ?? null;
  m.MESSAGE_STATUS = o.HEADER?.MESSAGE_STATUS ?? 0;
  if (m.MESSAGE_STATUS > 2) problems.push('HEADER.MESSAGE_STATUS EXERCISE');
  const us = epochUs(me.EPOCH);
  if (us === null) problems.push('MEAN_ELEMENTS.EPOCH has no microsecond value');
  m.EPOCH_UNIX_US = us ?? 0n;
  m.MEAN_ELEMENT_THEORY = me.MEAN_ELEMENT_THEORY;
  if (![THEORY.SGP4, THEORY.SGP4XP, THEORY.AP].includes(me.MEAN_ELEMENT_THEORY)) problems.push('MEAN_ELEMENT_THEORY');
  for (const k of ['MEAN_MOTION', 'ECCENTRICITY', 'INCLINATION', 'RA_OF_ASC_NODE', 'ARG_OF_PERICENTER', 'MEAN_ANOMALY', 'BTERM', 'AGOM', 'BSTAR', 'MEAN_MOTION_DOT', 'MEAN_MOTION_DDOT']) m[k] = me[k];
  if (pt) {
    const g = pt.GRAVITY_MODEL === 'WGS-72' || pt.GRAVITY_MODEL === 'EGM-96' ? 0 : text2enum(GRAVITY_TEXT, pt.GRAVITY_MODEL);
    if (g < 0) problems.push('PERTURBATIONS.GRAVITY_MODEL'); else m.GRAVITY_FIELD = g;
    m.MAXIMUM_TESSERAL_DEGREE = pt.MAXIMUM_TESSERAL_DEGREE;
    m.MAXIMUM_ZONAL_DEGREE = pt.MAXIMUM_ZONAL_DEGREE;
    if (pt.MAXIMUM_TESSERAL_DEGREE > 255 || pt.MAXIMUM_ZONAL_DEGREE > 255) problems.push('PERTURBATIONS degree caps above 255');
    const tide = text2enum(TIDE_TEXT, pt.SOLID_TIDES_MODEL), srp = text2enum(SRP_TEXT, pt.SOLAR_RAD_PRESSURE);
    if (tide < 0) problems.push('PERTURBATIONS.SOLID_TIDES_MODEL'); else m.SOLID_TIDES_MODEL = tide;
    if (srp < 0) problems.push('PERTURBATIONS.SOLAR_RAD_PRESSURE'); else m.SOLAR_RAD_PRESSURE = srp;
  }
  if (od) {
    m.ACTUAL_OD_SPAN = od.ACTUAL_OD_SPAN;
    m.OD_OBSERVATIONS_USED = od.OD_OBSERVATIONS_USED === 0 ? -1 : od.OD_OBSERVATIONS_USED;
    m.OD_TRACKS_USED = od.OD_TRACKS_USED === 0 ? -1 : od.OD_TRACKS_USED;
    m.WEIGHTED_RMS = od.WEIGHTED_RMS === 0 ? NaN : od.WEIGHTED_RMS;
    m.DAYS_SINCE_LAST_OBS = od.DAYS_SINCE_LAST_OBS;
    if (od.OD_EPOCH) { const us = epochUs(od.OD_EPOCH); if (us === null) problems.push('ORBIT_DETERMINATION.OD_EPOCH has no microsecond value'); else m.OD_EPOCH_UNIX_US = us; }
    for (const p of od.OD_DYNAMIC_PARAMETERS) {
      if (!OD_CARRIED.includes(p.PARAMETER)) { problems.push(`OD_DYNAMIC_PARAMETERS ${p.PARAMETER}`); continue; }
      m.OD_PARAMETERS = (m.OD_PARAMETERS | (1 << p.PARAMETER)) >>> 0;
      if (p.SOLVED_FOR) m.OD_SOLVED_FOR = (m.OD_SOLVED_FOR | (1 << p.PARAMETER)) >>> 0;
      if (p.PARAMETER === 6) m.ECOM2_Y0 = p.VALUE;
    }
  }
  if (o.COVARIANCE_DATA.length > 0) {
    m.COVARIANCE_DATA = [...o.COVARIANCE_DATA];
    if (o.COV_PROPAGATION) m.COV_PROPAGATION = copyInto(new M.MORCovariancePropagationT(), o.COV_PROPAGATION);
    if (o.COV_REALISM.length > 1) problems.push('COV_REALISM has more than one entry');
    if (o.COV_REALISM.length === 1) {
      const model = (asset?.realismModels ?? []).find((x) => same(x.REALISM, o.COV_REALISM[0]));
      if (model) m.COV_REALISM_ID = model.ID; else m.COV_REALISM = copyInto(new M.CVRT(), o.COV_REALISM[0]);
    }
    m.COV_FLOOR = floorOf(o.PROVENANCE?.PRODUCER);
  }
  m.COV_CALIBRATION = o.COV_CALIBRATION;
  m.COV_CALIBRATION_REFERENCE = o.COV_CALIBRATION_REFERENCE ?? null;
  const d = o.DERIVED_EPHEMERIS;
  if (d) {
    const entries = []; // each window with its own coefficient runs, sorted together below
    for (const r of d.POSITION_RECORDS) {
      const hp = r.POS_COEFF_HEAD_COUNT, hv = r.VEL_COEFF_HEAD_COUNT;
      const pos = [r.POS_COEFF_X, r.POS_COEFF_Y, r.POS_COEFF_Z], vel = [r.VEL_COEFF_X, r.VEL_COEFF_Y, r.VEL_COEFF_Z];
      const np = minimal(pos, hp), nv = vel[0].length > 0 ? minimal(vel, hv) : 0;
      if (hp > np || hv > Math.max(nv, 0) || hp > 255 || np > 255) { problems.push('DERIVED_EPHEMERIS head counts'); continue; }
      const w = new M.MORWindowT(r.EPOCH_MID_SECONDS, r.EPOCH_HALF_SPAN, 0, np, hp, nv, nv > 0 ? hv : 0);
      const heads = [], tails = [];
      entries.push({ w, heads, tails });
      const runs = [[pos, np, hp], ...(nv > 0 ? [[vel, nv, hv]] : [])];
      for (const [axes, n, head] of runs) {
        for (const a of axes) heads.push(...a.slice(0, head));
        for (const a of axes) for (const v of a.slice(head, n)) { if (!Object.is(Math.fround(v), v)) problems.push('DERIVED_EPHEMERIS tail not binary32'); tails.push(v); }
      }
    }
    d.UNSERVED_MID_SECONDS.forEach((mid, i) => entries.push({ w: new M.MORWindowT(mid, d.UNSERVED_HALF_SPAN[i], d.UNSERVED_STATUS[i] ?? 0, 0, 0, 0, 0), heads: [], tails: [] }));
    if (d.UNSERVED_STATUS.some((s) => s === 0)) problems.push('DERIVED_EPHEMERIS unserved status UNSPECIFIED');
    entries.sort((a, b) => a.w.EPOCH_MID_SECONDS - b.w.EPOCH_MID_SECONDS);
    const windows = entries.map((e) => e.w), heads = entries.flatMap((e) => e.heads), tails = entries.flatMap((e) => e.tails);
    m.WINDOWS = windows; m.WINDOW_COEFF_HEADS = heads; m.WINDOW_COEFF_TAILS = tails;
    if (windows.length > 0) {
      if ((d.BUILD?.RECORD_DIGEST?.length ?? 0) < 8) problems.push('DERIVED_EPHEMERIS.BUILD.RECORD_DIGEST');
      else m.WINDOW_RECORD_CHECK = recordCheck(d.BUILD.RECORD_DIGEST);
    }
  }
  if (problems.length > 0) return { mor: null, dropped, problems };
  // Everything else must be what the expansion writes: expand the candidate and compare field by field.
  const { ocm, refused } = expand(m, { ...asset, recordDigest: () => d?.BUILD?.RECORD_DIGEST ?? [] }, O);
  if (!ocm) return { mor: null, dropped, problems: refused };
  diff(ocm, o, 'OCM', problems);
  if (problems.length > 0) return { mor: null, dropped, problems };
  if (options.covFactor && m.COVARIANCE_DATA.length > 0) {
    const encoded = encodeCovFactor(m, options.covFactor);
    m.COV_FACTOR = [...encoded.bytes];
    m.COV_FACTOR_ENCODING = encoded.encoding;
    if (!options.keepCovarianceData) m.COVARIANCE_DATA = [];
  }
  return { mor: m, dropped, problems };
}

// ---- comparison ---------------------------------------------------------------------------------------------------
export function same(a, b) { const p = []; diff(a, b, '', p); return p.length === 0; }
export function diff(a, b, where, out) {
  if (Array.isArray(a) || Array.isArray(b)) {
    const x = a ?? [], y = b ?? [];
    if (!Array.isArray(x) || !Array.isArray(y) || x.length !== y.length) { out.push(where); return; }
    x.forEach((v, i) => diff(v, y[i], `${where}[${i}]`, out));
    return;
  }
  if (a && typeof a === 'object' && b && typeof b === 'object') {
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) diff(a[k], b[k], `${where}.${k}`, out);
    return;
  }
  if (typeof a === 'bigint' || typeof b === 'bigint') { if (BigInt(a ?? 0) !== BigInt(b ?? 0)) out.push(where); return; }
  if (!Object.is(a ?? null, b ?? null)) out.push(where);
}

// ---- encoding ------------------------------------------------------------------------------------------------------
const camel = (k) => k.split('_').map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join('');
/// A table of strings and scalars with only its stated fields: the generated object-API pack() writes a field whose
/// default is NaN even when it is NaN (the JavaScript builder compares with !=), which a C++ builder does not.
function packStated(b, T, name, value, fresh) {
  const strings = {};
  for (const [k, v] of Object.entries(value)) if (typeof v === 'string') strings[k] = b.createString(v);
  T[`start${name}`](b);
  for (const [k, v] of Object.entries(value)) {
    if (k in strings) T[`add${camel(k)}`](b, strings[k]);
    else if ((typeof v === 'number' || typeof v === 'boolean') && !Object.is(v, fresh[k])) T[`add${camel(k)}`](b, v);
  }
  return T[`end${name}`](b);
}
/// A size-prefixed $MOR with only the fields the record states: absent vectors and tables are not written, scalars
/// at their defaults are not written, 8-byte fields go first so the table carries no padding between them.
export function encode(fb, M, m) {
  const b = new fb.Builder(1024);
  const str = (s) => (s == null ? 0 : b.createString(s));
  const intl = str(m.INTERNATIONAL_DESIGNATOR), orig = str(m.ORIGINATOR), name = str(m.OBJECT_NAME), calRef = str(m.COV_CALIBRATION_REFERENCE);
  const cov = m.COVARIANCE_DATA?.length ? M.MOR.createCovarianceDataVector(b, m.COVARIANCE_DATA) : 0;
  const covFactor = m.COV_FACTOR?.length ? M.MOR.createCovFactorVector(b, m.COV_FACTOR) : 0;
  const realism = m.COV_REALISM ? packStated(b, M.CVR, 'CVR', m.COV_REALISM, new M.CVRT()) : 0;
  let windows = 0, heads = 0, tails = 0;
  if (m.WINDOWS?.length) {
    M.MOR.startWindowsVector(b, m.WINDOWS.length);
    for (let i = m.WINDOWS.length - 1; i >= 0; i--) m.WINDOWS[i].pack(b);
    windows = b.endVector();
    if (m.WINDOW_COEFF_HEADS.length) heads = M.MOR.createWindowCoeffHeadsVector(b, m.WINDOW_COEFF_HEADS);
    if (m.WINDOW_COEFF_TAILS.length) tails = M.MOR.createWindowCoeffTailsVector(b, m.WINDOW_COEFF_TAILS);
  }
  const fallback = m.FALLBACK ? m.FALLBACK.pack(b) : 0;
  M.MOR.startMOR(b);
  if (m.COV_PROPAGATION) M.MOR.addCovPropagation(b, m.COV_PROPAGATION.pack(b));
  M.MOR.addEpochUnixUs(b, BigInt(m.EPOCH_UNIX_US));
  for (const [k, add] of [['MEAN_MOTION', 'addMeanMotion'], ['ECCENTRICITY', 'addEccentricity'], ['INCLINATION', 'addInclination'], ['RA_OF_ASC_NODE', 'addRaOfAscNode'], ['ARG_OF_PERICENTER', 'addArgOfPericenter'], ['MEAN_ANOMALY', 'addMeanAnomaly'], ['BTERM', 'addBterm'], ['AGOM', 'addAgom'], ['BSTAR', 'addBstar'], ['MEAN_MOTION_DOT', 'addMeanMotionDot'], ['MEAN_MOTION_DDOT', 'addMeanMotionDdot'], ['ECOM2_Y0', 'addEcom2Y0']]) M.MOR[add](b, m[k]);
  if (!Number.isNaN(m.ACTUAL_OD_SPAN)) M.MOR.addActualOdSpan(b, m.ACTUAL_OD_SPAN);
  if (!Number.isNaN(m.WEIGHTED_RMS)) M.MOR.addWeightedRms(b, m.WEIGHTED_RMS);
  if (!Number.isNaN(m.DAYS_SINCE_LAST_OBS)) M.MOR.addDaysSinceLastObs(b, m.DAYS_SINCE_LAST_OBS);
  M.MOR.addOdEpochUnixUs(b, BigInt(m.OD_EPOCH_UNIX_US));
  if (m.WINDOWS?.length) M.MOR.addWindowRecordCheck(b, BigInt(m.WINDOW_RECORD_CHECK));
  M.MOR.addOdObservationsUsed(b, m.OD_OBSERVATIONS_USED);
  M.MOR.addOdTracksUsed(b, m.OD_TRACKS_USED);
  M.MOR.addNoradCatId(b, m.NORAD_CAT_ID);
  M.MOR.addOdParameters(b, m.OD_PARAMETERS);
  M.MOR.addOdSolvedFor(b, m.OD_SOLVED_FOR);
  for (const [v, add] of [[intl, 'addInternationalDesignator'], [orig, 'addOriginator'], [name, "addObjectName"], [calRef, "addCovCalibrationReference"], [cov, 'addCovarianceData'], [covFactor, 'addCovFactor'], [realism, 'addCovRealism'], [windows, 'addWindows'], [heads, 'addWindowCoeffHeads'], [tails, 'addWindowCoeffTails'], [fallback, 'addFallback']]) if (v) M.MOR[add](b, v);
  M.MOR.addCovRealismId(b, m.COV_REALISM_ID);
  M.MOR.addMessageStatus(b, m.MESSAGE_STATUS);
  M.MOR.addMeanElementTheory(b, m.MEAN_ELEMENT_THEORY);
  M.MOR.addGravityField(b, m.GRAVITY_FIELD);
  M.MOR.addMaximumTesseralDegree(b, m.MAXIMUM_TESSERAL_DEGREE);
  M.MOR.addMaximumZonalDegree(b, m.MAXIMUM_ZONAL_DEGREE);
  M.MOR.addSolidTidesModel(b, m.SOLID_TIDES_MODEL);
  M.MOR.addSolarRadPressure(b, m.SOLAR_RAD_PRESSURE);
  M.MOR.addCovCalibration(b, m.COV_CALIBRATION);
  M.MOR.addCovFloor(b, m.COV_FLOOR);
  M.MOR.addCovFactorEncoding(b, m.COV_FACTOR_ENCODING ?? 0);
  M.MOR.addRecordKind(b, m.RECORD_KIND);
  M.MOR.finishSizePrefixedMORBuffer(b, M.MOR.endMOR(b));
  return b.asUint8Array();
}
