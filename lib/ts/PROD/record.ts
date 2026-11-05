// The canonical Record of the product codec family (requirement baseline, section 4): the $OCM, kept whole as
// the single source of truth, plus the views every product writer reads from it, and the $ODR the fit's
// per-input residuals live in (program decision D11). fromOcm(ocm[, odr[, sensitivities]]) validates the
// $OCM and derives the views; toOcm(record) returns the $OCM it was born from, so $OCM -> Record -> $OCM is
// byte-identical by construction. No second in-memory type carries the data: the views are read-only
// projections of the $OCM.
//
// Fixed here, in one place (baseline 1.1 and 1.2): the five dynamical-model parameters in their order, their
// product symbols, their units and their typed keys; the state units; COV_UNITS has COV_SIZE entries and
// COV_PARAMETERS COV_SIZE - 6 of them (D10); COV_ORDERING LTM is the only ordering accepted; the equinoctial
// set is the $OCM EQUINOCTIAL order (frames.ts, D2). Every reader keys a parameter on its typed PARAMETER,
// never on its NAME. Absent data is absent (null), never zero-filled: a product that needs it is refused.
//
// Residuals: $ODR carries OBSERVED_VALUE and COMPUTED_VALUE and no residual column; the P9 residual is
// derived here as OBSERVED_VALUE minus COMPUTED_VALUE. A fit without per-observation inputs yields no
// residuals and P9 is refused by its writer (D6). Sensitivities (D12): a typed $PRW state matrix of STM rows
// per epoch, given to fromOcm as its third argument where the module exposes them; without one the Record's
// sensitivities are absent and P8 is refused by its writer.
//
// Refusals, as {code, message}: record-missing:<field>, parameter-unknown:<name>, parameter-order, cov-size,
// cov-ordering:<ordering>, units-length, and the ones this module adds: units-mismatch:<row>,
// parameter-not-solved:<name>, solved-set-mismatch:<name>, traj-type:<type>, epoch-form:<field>,
// state-epochs, stm-shape.
//
// Without a typed home in $OCM 2.1.10 and therefore always absent here until a schema record adds one: the
// UT1 rate and the polar motion (the P5 header's), the per-epoch geodetic coordinates and mean elements
// (P1 lines 2 and 3), the revolution number past the first state.
import {
  OCMT, type OrbitDeterminationT, type OCMDynamicParameterT, type PRWStateMatrixT, type RFMT,
  covarianceOrdering, prwDynamicParameter, trajectoryType, meanElementSource,
} from '../OCM/main.js';
import { type ODRT, memMeasurementType } from '../ODR/main.js';
import { ok, refuse, type Result } from './tokens.js';
import { cartesianToEquinoctial, type Equinoctial, type Matrix, type State } from './frames.js';

export interface ParameterDefinition {
  readonly name: string;
  /** The product symbol: B, BDOT, AGOM, T, OUTGASSING. */
  readonly symbol: string;
  readonly kind: prwDynamicParameter;
  readonly units: string;
}
/** The five dynamical-model parameters a covariance may carry after the state, in their fixed order. */
export const PARAMETERS: readonly ParameterDefinition[] = [
  { name: 'DRAG_AREA_OVER_MASS', symbol: 'B', kind: prwDynamicParameter.DRAG_AREA_OVER_MASS, units: 'm**2/kg' },
  { name: 'DRAG_AREA_OVER_MASS_RATE', symbol: 'BDOT', kind: prwDynamicParameter.DRAG_AREA_OVER_MASS_RATE, units: 'm**2/kg/s' },
  { name: 'SRP_AREA_OVER_MASS', symbol: 'AGOM', kind: prwDynamicParameter.SRP_AREA_OVER_MASS, units: 'm**2/kg' },
  { name: 'IN_TRACK_ACCELERATION', symbol: 'T', kind: prwDynamicParameter.IN_TRACK_ACCELERATION, units: 'm/s**2' },
  { name: 'OUTGASSING_ACCELERATION', symbol: 'OUTGASSING', kind: prwDynamicParameter.OUTGASSING_ACCELERATION, units: 'km/s**2' },
];
export const STATE_UNITS: readonly string[] = ['km', 'km', 'km', 'km/s', 'km/s', 'km/s'];
export const STATE_ROWS = 6;
export const COVARIANCE_ORDERING = covarianceOrdering.LTM;
export const REFUSAL_CODES: readonly string[] = [
  'record-missing:<field>', 'parameter-unknown:<name>', 'parameter-order', 'cov-size', 'cov-ordering:<ordering>', 'units-length',
  'units-mismatch:<row>', 'parameter-not-solved:<name>', 'solved-set-mismatch:<name>', 'traj-type:<type>', 'epoch-form:<field>', 'state-epochs', 'stm-shape',
];

export function parameterByKind(kind: prwDynamicParameter): ParameterDefinition | undefined {
  return PARAMETERS.find((p) => p.kind === kind);
}
export function parameterByName(name: string): ParameterDefinition | undefined {
  return PARAMETERS.find((p) => p.name === name);
}
/** The COV_UNITS of a covariance over the state and the named parameters (COV_SIZE entries, D10). */
export function covarianceUnits(parameters: readonly string[]): string[] {
  return [...STATE_UNITS, ...parameters.map((name) => parameterByName(name)?.units ?? 'n/a')];
}

export interface RecordForceModel {
  readonly gravityModel: string | null; readonly gravityDegree: number; readonly gravityOrder: number;
  readonly atmosphericDrag: string | null; readonly atmosphericModel: string | null; readonly solarRadiationPressure: string | null;
  readonly nBody: readonly string[]; readonly solidTides: string | null; readonly oceanTides: string | null;
  readonly fixedF107: number; readonly fixedF107Mean: number; readonly fixedGeomagneticAp: number;
}
export interface RecordIntegrator {
  readonly mode: number; readonly coordinateSystem: number; readonly partials: number; readonly stepMode: number;
  readonly fixedStep: boolean; readonly stepSizeSelection: number; readonly initialStepSeconds: number; readonly errorControl: number;
}
export interface RecordMeta {
  readonly objectName: string | null; readonly objectDesignator: string | null; readonly internationalDesignator: string | null; readonly noradCatId: number;
  readonly originator: string | null; readonly creationDate: string | null; readonly messageId: string | null;
  /** ORB_AVERAGING, else the mean element set's theory name. */
  readonly theory: string | null;
  readonly frame: string | null; readonly covarianceFrame: string | null; readonly centerName: string | null;
  readonly timeSystem: string | null; readonly epoch: string; readonly epochMs: number;
  readonly taiMinusUtc: number | null; readonly ut1MinusUtc: number | null; readonly ut1Rate: number | null;
  readonly polarMotionX: number | null; readonly polarMotionY: number | null;
  readonly leapSecondEpoch: string | null; readonly leapSecondTaiMinusUtc: number | null;
  readonly nutationTag: string | null; readonly eopSource: string | null;
  /** km**3/s**2, PERTURBATIONS.GM; null when not stated. */
  readonly gm: number | null;
  readonly forceModel: RecordForceModel | null; readonly integrator: RecordIntegrator | null; readonly toolVersion: string | null;
}
export interface RecordParameter extends ParameterDefinition { readonly value: number; readonly solvedFor: boolean }
export interface RecordMeanElements {
  readonly theory: meanElementSource; readonly epoch: string; readonly meanMotion: number; readonly eccentricity: number; readonly inclination: number;
  readonly raan: number; readonly argOfPericenter: number; readonly meanAnomaly: number;
  readonly bstar: number; readonly meanMotionDot: number; readonly meanMotionDdot: number; readonly bterm: number; readonly agom: number;
}
export interface RecordElements {
  readonly meanElements: RecordMeanElements | null;
  /** The $OCM EQUINOCTIAL set at the first state (D2); null without a state or GM. */
  readonly equinoctial: Equinoctial | null;
  /** Every dynamical-model parameter the solution carries, solved for or held, in the fixed order. */
  readonly parameters: readonly RecordParameter[];
}
export interface RecordFit {
  readonly observations: number | null; readonly tracks: number | null; readonly iterations: number | null; readonly converged: boolean | null;
  readonly rmsKm: number | null; readonly weightedRms: number | null; readonly sedr: number | null;
  readonly solvedFor: readonly string[]; readonly method: string | null; readonly arcStart: string | null; readonly arcStop: string | null;
}
export interface RecordEpoch {
  readonly minutes: number; readonly epochMs: number; readonly state: State; readonly rev: number | null;
  readonly geodetic: null; readonly meanElements: null;
}
export interface RecordCovariance {
  readonly frame: string | null; readonly type: string; readonly ordering: covarianceOrdering; readonly size: number;
  readonly parameters: readonly string[]; readonly kinds: readonly prwDynamicParameter[]; readonly units: readonly string[];
  readonly perEpoch: readonly { readonly ltm: readonly number[]; readonly sigma: readonly number[] }[];
  readonly sensitivities: readonly Matrix[] | null;
}
export interface RecordResidual {
  readonly id: string; readonly epoch: string | null; readonly epochMs: number | null; readonly type: memMeasurementType; readonly typeName: string;
  readonly observed: number; readonly computed: number;
  /** OBSERVED_VALUE - COMPUTED_VALUE. */
  readonly residual: number;
  readonly weight: number; readonly accepted: boolean; readonly code: string | null;
  readonly iteration: number; readonly prefitResidual: number; readonly normalizedResidual: number; readonly reason: string | null;
}
export interface Record {
  readonly ocm: OCMT; readonly odr: ODRT | null;
  readonly meta: RecordMeta; readonly elements: RecordElements; readonly fit: RecordFit;
  readonly epochs: readonly RecordEpoch[]; readonly covariance: RecordCovariance; readonly residuals: readonly RecordResidual[];
}

const text = (v: string | Uint8Array | null | undefined): string | null =>
  v === null || v === undefined ? null : typeof v === 'string' ? v : new TextDecoder().decode(v);
const nonEmpty = (v: string | Uint8Array | null | undefined): string | null => { const s = text(v); return s === '' ? null : s; };
const finite = (v: number): number | null => (Number.isFinite(v) ? v : null);
const frameName = (f: RFMT | null): string | null => (f ? nonEmpty(f.NAME) : null);
const parseEpoch = (field: string, value: string | null): Result<number> => {
  if (value === null) return refuse(`record-missing:${field}`, `${field} is not stated`);
  const ms = Date.parse(value);
  if (!Number.isFinite(ms)) return refuse(`epoch-form:${field}`, `${field} is not an ISO 8601 instant: ${value}`);
  return ok(ms);
};
const triangle = (n: number) => (n * (n + 1)) / 2;

function parameters(od: OrbitDeterminationT | null): Result<RecordParameter[]> {
  const out: RecordParameter[] = [];
  for (const entry of od?.OD_DYNAMIC_PARAMETERS ?? []) {
    const definition = parameterByKind(entry.PARAMETER);
    const name = nonEmpty(entry.NAME) ?? prwDynamicParameter[entry.PARAMETER] ?? String(entry.PARAMETER);
    if (!definition) return refuse(`parameter-unknown:${name}`, `OD_DYNAMIC_PARAMETERS names ${name}, not one of the five parameters (typed PARAMETER ${entry.PARAMETER})`);
    if (out.some((p) => p.kind === definition.kind)) return refuse('parameter-order', `OD_DYNAMIC_PARAMETERS carries ${definition.name} twice`);
    const units = nonEmpty(entry.UNITS);
    if (units !== null && units !== definition.units) return refuse(`units-mismatch:${definition.name}`, `${definition.name} is in ${definition.units}, not ${units}`);
    out.push({ ...definition, value: entry.VALUE, solvedFor: entry.SOLVED_FOR });
  }
  out.sort((a, b) => PARAMETERS.findIndex((p) => p.kind === a.kind) - PARAMETERS.findIndex((p) => p.kind === b.kind));
  return ok(out);
}

function covarianceOf(ocm: OCMT, epochCount: number, solved: readonly RecordParameter[], sensitivities: readonly PRWStateMatrixT[] | undefined): Result<RecordCovariance> {
  if (ocm.COV_ORDERING !== covarianceOrdering.LTM) {
    return refuse(`cov-ordering:${covarianceOrdering[ocm.COV_ORDERING] ?? ocm.COV_ORDERING}`, 'the product writers accept COV_ORDERING LTM only');
  }
  const names = ocm.COV_PARAMETERS.map((s) => text(s) ?? '');
  const definitions: ParameterDefinition[] = [];
  for (const name of names) {
    const definition = parameterByName(name);
    if (!definition) return refuse(`parameter-unknown:${name}`, `COV_PARAMETERS names ${name}, not one of the five parameters`);
    definitions.push(definition);
  }
  const order = definitions.map((d) => PARAMETERS.indexOf(d));
  if (order.some((o, i) => i > 0 && o <= order[i - 1])) {
    return refuse('parameter-order', `COV_PARAMETERS ${names.join(', ')} is not in the fixed order ${PARAMETERS.map((p) => p.name).join(', ')}`);
  }
  if (ocm.COV_PARAMETER_KINDS.length && (ocm.COV_PARAMETER_KINDS.length !== definitions.length || ocm.COV_PARAMETER_KINDS.some((k, i) => k !== definitions[i].kind))) {
    return refuse(`parameter-unknown:${ocm.COV_PARAMETER_KINDS.map((k) => prwDynamicParameter[k] ?? k).join(',')}`, 'COV_PARAMETER_KINDS does not key the COV_PARAMETERS rows');
  }
  const size = ocm.COV_SIZE;
  if (size !== STATE_ROWS + definitions.length) return refuse('cov-size', `COV_SIZE ${size} is not 6 plus the ${definitions.length} parameter rows`);
  const present = ocm.COVARIANCE_DATA.length > 0;
  const perEpoch: { ltm: number[]; sigma: number[] }[] = [];
  const units = ocm.COV_UNITS.map((s) => text(s) ?? '');
  if (present) {
    if (ocm.COVARIANCE_DATA.length !== epochCount * triangle(size)) {
      return refuse('cov-size', `COVARIANCE_DATA has ${ocm.COVARIANCE_DATA.length} values, not ${epochCount} epochs x ${triangle(size)}`);
    }
    if (units.length !== size) return refuse('units-length', `COV_UNITS has ${units.length} entries, not COV_SIZE ${size}`);
    const expected = covarianceUnits(names);
    const wrong = units.findIndex((u, i) => u !== expected[i]);
    if (wrong >= 0) return refuse(`units-mismatch:${wrong + 1}`, `COV_UNITS row ${wrong + 1} is ${units[wrong]}, not ${expected[wrong]}`);
    for (const definition of definitions) {
      const row = solved.find((p) => p.kind === definition.kind);
      if (!row || !row.solvedFor) return refuse(`parameter-not-solved:${definition.name}`, `${definition.name} is a covariance row but OD_DYNAMIC_PARAMETERS does not solve for it`);
    }
    for (const row of solved) {
      if (row.solvedFor && !definitions.some((d) => d.kind === row.kind)) return refuse(`solved-set-mismatch:${row.name}`, `${row.name} is solved for but is not a covariance row`);
    }
    for (let e = 0; e < epochCount; e++) {
      const ltm = ocm.COVARIANCE_DATA.slice(e * triangle(size), (e + 1) * triangle(size));
      const sigma: number[] = [];
      for (let i = 0; i < size; i++) sigma.push(Math.sqrt(ltm[triangle(i + 1) - 1]));
      perEpoch.push({ ltm, sigma });
    }
  }
  let stm: Matrix[] | null = null;
  if (sensitivities) {
    if (sensitivities.length !== epochCount) return refuse('stm-shape', `${sensitivities.length} state matrices for ${epochCount} epochs`);
    stm = [];
    for (const m of sensitivities) {
      if (m.DIMENSION < STATE_ROWS || m.VALUES.length !== m.DIMENSION * m.DIMENSION) return refuse('stm-shape', `a state matrix of dimension ${m.DIMENSION} with ${m.VALUES.length} values`);
      stm.push(Array.from({ length: m.DIMENSION }, (_, i) => m.VALUES.slice(i * m.DIMENSION, (i + 1) * m.DIMENSION)));
    }
  }
  return ok({
    frame: frameName(ocm.COV_REF_FRAME), type: nonEmpty(ocm.COV_TYPE) ?? 'CARTPV', ordering: ocm.COV_ORDERING, size,
    parameters: names, kinds: definitions.map((d) => d.kind), units, perEpoch, sensitivities: stm,
  });
}

/** The Record of an $OCM (and the $ODR of its fit's residuals, and the module's STM rows per epoch, where given). */
export function fromOcm(ocm: OCMT, odr: ODRT | null = null, sensitivities?: readonly PRWStateMatrixT[]): Result<Record> {
  const md = ocm.METADATA;
  if (!md) return refuse('record-missing:METADATA', 'the $OCM has no METADATA');
  const epoch = nonEmpty(md.EPOCH_TZERO);
  const epochMs = parseEpoch('METADATA.EPOCH_TZERO', epoch);
  if (!epochMs.ok) return epochMs;
  const od = ocm.ORBIT_DETERMINATION;
  const pert = ocm.PERTURBATIONS;
  const gm = pert ? finite(pert.GM) : null;

  // States: cartesian rows of STATE_DATA, or the equinoctial rows converted at the record's GM.
  const vectorSize = ocm.STATE_VECTOR_SIZE;
  const rows = vectorSize > 0 ? ocm.STATE_DATA.length / vectorSize : 0;
  if (ocm.STATE_DATA.length && (vectorSize <= 0 || !Number.isInteger(rows))) return refuse('cov-size', `STATE_DATA has ${ocm.STATE_DATA.length} values, not a multiple of STATE_VECTOR_SIZE ${vectorSize}`);
  if (!ocm.STATE_DATA.length && !ocm.MEAN_ELEMENTS) return refuse('record-missing:STATE_DATA', 'the $OCM carries neither states nor a mean element set');
  const states: State[] = [];
  if (rows) {
    if (ocm.TRAJ_TYPE !== trajectoryType.CARTESIAN_PV && ocm.TRAJ_TYPE !== trajectoryType.CARTESIAN_PVA) {
      return refuse(`traj-type:${trajectoryType[ocm.TRAJ_TYPE] ?? ocm.TRAJ_TYPE}`, 'the Record reads cartesian position and velocity rows');
    }
    if (vectorSize < STATE_ROWS) return refuse('cov-size', `STATE_VECTOR_SIZE ${vectorSize} is below 6`);
    for (let i = 0; i < rows; i++) {
      const row = ocm.STATE_DATA.slice(i * vectorSize, i * vectorSize + STATE_ROWS);
      states.push([row[0], row[1], row[2], row[3], row[4], row[5]]);
    }
  }
  // The epoch axis: STATE_EPOCHS, else START_TIME + i * STATE_STEP_SIZE; minutes from EPOCH_TZERO.
  const times: number[] = [];
  if (rows) {
    if (ocm.STATE_EPOCHS.length) {
      if (ocm.STATE_EPOCHS.length !== rows) return refuse('state-epochs', `${ocm.STATE_EPOCHS.length} STATE_EPOCHS for ${rows} states`);
      for (const [i, s] of ocm.STATE_EPOCHS.entries()) {
        const ms = parseEpoch(`STATE_EPOCHS[${i}]`, nonEmpty(s));
        if (!ms.ok) return ms;
        times.push(ms.value);
      }
    } else {
      const start = parseEpoch('METADATA.START_TIME', nonEmpty(md.START_TIME));
      if (!start.ok) return start;
      if (rows > 1 && !(ocm.STATE_STEP_SIZE > 0)) return refuse('record-missing:STATE_STEP_SIZE', `${rows} states on a grid need STATE_STEP_SIZE`);
      for (let i = 0; i < rows; i++) times.push(start.value + i * ocm.STATE_STEP_SIZE * 1000);
    }
  }
  const solved = parameters(od);
  if (!solved.ok) return solved;
  const covariance = covarianceOf(ocm, rows, solved.value, sensitivities);
  if (!covariance.ok) return covariance;

  const me = ocm.MEAN_ELEMENTS;
  const meanElements: RecordMeanElements | null = me ? {
    theory: me.MEAN_ELEMENT_THEORY, epoch: text(me.EPOCH) ?? '', meanMotion: me.MEAN_MOTION, eccentricity: me.ECCENTRICITY, inclination: me.INCLINATION,
    raan: me.RA_OF_ASC_NODE, argOfPericenter: me.ARG_OF_PERICENTER, meanAnomaly: me.MEAN_ANOMALY,
    bstar: me.BSTAR, meanMotionDot: me.MEAN_MOTION_DOT, meanMotionDdot: me.MEAN_MOTION_DDOT, bterm: me.BTERM, agom: me.AGOM,
  } : null;
  let equinoctial: Equinoctial | null = null;
  if (states.length && gm !== null) {
    const eq = cartesianToEquinoctial(states[0], gm);
    if (eq.ok) equinoctial = eq.value;
  }
  const stats = od?.FIT_STATISTICS ?? null;
  const fit: RecordFit = {
    observations: od && od.OD_OBSERVATIONS_USED > 0 ? od.OD_OBSERVATIONS_USED : null,
    tracks: od && od.OD_TRACKS_USED > 0 ? od.OD_TRACKS_USED : null,
    iterations: stats ? stats.ITERATIONS : null, converged: stats ? stats.CONVERGED : null,
    rmsKm: stats ? finite(stats.FIT_RMS_KM) : null,
    weightedRms: od && od.WEIGHTED_RMS !== 0 ? od.WEIGHTED_RMS : null, sedr: od && od.SEDR !== 0 ? od.SEDR : null,
    solvedFor: solved.value.filter((p) => p.solvedFor).map((p) => p.name),
    method: od ? nonEmpty(od.OD_METHOD) : null,
    arcStart: stats ? nonEmpty(stats.FIT_START) : null, arcStop: stats ? nonEmpty(stats.FIT_STOP) : null,
  };
  const residuals: RecordResidual[] = (odr?.EDITED_OBSERVATIONS ?? []).map((o) => {
    const e = nonEmpty(o.EPOCH);
    const ms = e === null ? NaN : Date.parse(e);
    return {
      id: text(o.OBSERVATION_ID) ?? '', epoch: e, epochMs: Number.isFinite(ms) ? ms : null, type: o.OBSERVATION_TYPE,
      typeName: memMeasurementType[o.OBSERVATION_TYPE] ?? String(o.OBSERVATION_TYPE),
      observed: o.OBSERVED_VALUE, computed: o.COMPUTED_VALUE, residual: o.OBSERVED_VALUE - o.COMPUTED_VALUE,
      weight: o.WEIGHT, accepted: o.ACCEPTED, code: nonEmpty(o.PERTURBATION_MODEL_CODE),
      iteration: o.ITERATION, prefitResidual: o.PREFIT_RESIDUAL, normalizedResidual: o.NORMALIZED_RESIDUAL, reason: nonEmpty(o.REASON),
    };
  });
  const integrator = ocm.INTEGRATOR;
  const meta: RecordMeta = {
    objectName: nonEmpty(md.OBJECT_NAME), objectDesignator: nonEmpty(md.OBJECT_DESIGNATOR), internationalDesignator: nonEmpty(md.INTERNATIONAL_DESIGNATOR),
    noradCatId: md.NORAD_CAT_ID,
    originator: ocm.HEADER ? nonEmpty(ocm.HEADER.ORIGINATOR) : null, creationDate: ocm.HEADER ? nonEmpty(ocm.HEADER.CREATION_DATE) : null,
    messageId: ocm.HEADER ? nonEmpty(ocm.HEADER.MESSAGE_ID) : null,
    theory: nonEmpty(ocm.ORB_AVERAGING) ?? (me ? meanElementSource[me.MEAN_ELEMENT_THEORY] ?? null : null),
    frame: frameName(ocm.TRAJ_REF_FRAME), covarianceFrame: frameName(ocm.COV_REF_FRAME), centerName: nonEmpty(ocm.CENTER_NAME),
    timeSystem: nonEmpty(md.TIME_SYSTEM), epoch: epoch as string, epochMs: epochMs.value,
    taiMinusUtc: md.TAIMUTC_AT_TZERO !== 0 ? md.TAIMUTC_AT_TZERO : null, ut1MinusUtc: md.UT1MUTC_AT_TZERO !== 0 ? md.UT1MUTC_AT_TZERO : null,
    ut1Rate: null, polarMotionX: null, polarMotionY: null,
    leapSecondEpoch: nonEmpty(md.NEXT_LEAP_EPOCH), leapSecondTaiMinusUtc: md.NEXT_LEAP_TAIMUTC !== 0 ? md.NEXT_LEAP_TAIMUTC : null,
    nutationTag: pert ? nonEmpty(pert.REDUCTION_THEORY) : null, eopSource: nonEmpty(md.EOP_SOURCE), gm,
    forceModel: pert ? {
      gravityModel: nonEmpty(pert.GRAVITY_MODEL), gravityDegree: pert.GRAVITY_DEGREE, gravityOrder: pert.GRAVITY_ORDER,
      atmosphericDrag: nonEmpty(pert.ATMOSPHERIC_DRAG), atmosphericModel: nonEmpty(pert.ATMOSPHERIC_MODEL_NAME), solarRadiationPressure: nonEmpty(pert.SOLAR_RAD_PRESSURE),
      nBody: pert.N_BODY_PERTURBATIONS.map((s) => text(s) ?? ''), solidTides: nonEmpty(pert.SOLID_TIDES_MODEL), oceanTides: nonEmpty(pert.OCEAN_TIDES_MODEL),
      fixedF107: pert.FIXED_F10P7, fixedF107Mean: pert.FIXED_F10P7_MEAN, fixedGeomagneticAp: pert.FIXED_GEOMAG_AP,
    } : null,
    integrator: integrator ? {
      mode: integrator.MODE, coordinateSystem: integrator.COORDINATE_SYSTEM, partials: integrator.PARTIALS, stepMode: integrator.STEP_MODE,
      fixedStep: integrator.FIXED_STEP, stepSizeSelection: integrator.STEP_SIZE_SELECTION, initialStepSeconds: integrator.INITIAL_STEP_SECONDS, errorControl: integrator.ERROR_CONTROL,
    } : null,
    toolVersion: ocm.PROVENANCE ? nonEmpty(ocm.PROVENANCE.PRODUCER) : null,
  };
  const epochs: RecordEpoch[] = states.map((state, i) => ({
    minutes: (times[i] - epochMs.value) / 60000, epochMs: times[i], state, rev: i === 0 && ocm.ORB_REVNUM > 0 ? ocm.ORB_REVNUM : null,
    geodetic: null, meanElements: null,
  }));
  return ok({ ocm, odr, meta, elements: { meanElements, equinoctial, parameters: solved.value }, fit, epochs, covariance: covariance.value, residuals });
}

/** The $OCM of a Record: the one it was born from, validated again, so the bytes are the ones that came in. */
export function toOcm(record: Record): Result<OCMT> {
  const check = fromOcm(record.ocm, record.odr, undefined);
  if (!check.ok) return check;
  return ok(record.ocm);
}
