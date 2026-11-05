// Synthetic fixtures for the lib/js/PROD tests: an $OCM with a cartesian state grid and a covariance over the
// state and a chosen parameter set, an $ODR of residuals, and $PRW state matrices. Nothing here is measured
// data; the values are chosen.
import * as flatbuffers from 'flatbuffers';
import * as OCM from '../../../lib/js/OCM/main.js';
import * as ODR from '../../../lib/js/ODR/main.js';

const T = (cls, v) => Object.assign(new cls(), v);
export const GM = 398600.4418;
export const EPOCH = '2026-11-01T00:00:00.000Z';
export const STEP_SECONDS = 60;
const DEG = Math.PI / 180;

export const PARAMETERS = [
  ['DRAG_AREA_OVER_MASS', OCM.prwDynamicParameter.DRAG_AREA_OVER_MASS, 'm**2/kg', 0.0123],
  ['DRAG_AREA_OVER_MASS_RATE', OCM.prwDynamicParameter.DRAG_AREA_OVER_MASS_RATE, 'm**2/kg/s', 1.5e-9],
  ['SRP_AREA_OVER_MASS', OCM.prwDynamicParameter.SRP_AREA_OVER_MASS, 'm**2/kg', 0.021],
  ['IN_TRACK_ACCELERATION', OCM.prwDynamicParameter.IN_TRACK_ACCELERATION, 'm/s**2', -3.2e-9],
  ['OUTGASSING_ACCELERATION', OCM.prwDynamicParameter.OUTGASSING_ACCELERATION, 'km/s**2', 4.4e-13],
];

/** A circular synthetic orbit (a km, inclination deg) sampled every STEP_SECONDS: one state per epoch, km and km/s. */
export function states(count, { a = 6878.137, inclination = 51.6, raan = 30 } = {}) {
  const n = Math.sqrt(GM / (a * a * a));
  const ci = Math.cos(inclination * DEG), si = Math.sin(inclination * DEG), cO = Math.cos(raan * DEG), sO = Math.sin(raan * DEG);
  const out = [];
  for (let k = 0; k < count; k++) {
    const th = n * k * STEP_SECONDS;
    const ip = [Math.cos(th), Math.sin(th) * ci, Math.sin(th) * si];
    const iv = [-Math.sin(th), Math.cos(th) * ci, Math.cos(th) * si];
    const rot = (p) => [cO * p[0] - sO * p[1], sO * p[0] + cO * p[1], p[2]];
    const r = rot(ip).map((x) => x * a), v = rot(iv).map((x) => x * a * n);
    out.push([...r, ...v]);
  }
  return out;
}

/** A symmetric positive-definite covariance over 6 state rows and the parameters, as an LTM; scales per row. */
export function ltm(size, epoch = 0) {
  const scales = [0.1, 0.12, 0.09, 1e-4, 1.1e-4, 0.9e-4, 1e-3, 1e-10, 2e-3, 1e-10, 1e-14];
  const values = [];
  for (let i = 0; i < size; i++) for (let j = 0; j <= i; j++) {
    const si = scales[i] * (1 + 0.05 * epoch), sj = scales[j] * (1 + 0.05 * epoch);
    values.push(i === j ? si * sj : 0.1 * si * sj);
  }
  return values;
}

/** An $OCM over `epochs` states with a covariance whose parameter rows are `parameterNames` (in the fixed order). */
export function ocmWith(parameterNames, { epochs = 3, solved = parameterNames, kinds = true } = {}) {
  const size = 6 + parameterNames.length;
  const grid = states(epochs);
  const units = ['km', 'km', 'km', 'km/s', 'km/s', 'km/s', ...parameterNames.map((n) => PARAMETERS.find((p) => p[0] === n)[2])];
  return T(OCM.OCMT, {
    HEADER: T(OCM.HeaderT, { CCSDS_OCM_VERS: '3.0', CREATION_DATE: '2026-11-01T01:00:00.000Z', ORIGINATOR: 'SDN', MESSAGE_ID: `fit-25544-${size}` }),
    METADATA: T(OCM.MetadataT, {
      OBJECT_NAME: 'ISS (ZARYA)', INTERNATIONAL_DESIGNATOR: '1998-067A', OBJECT_DESIGNATOR: '25544', TIME_SYSTEM: 'UTC', EPOCH_TZERO: EPOCH, START_TIME: EPOCH,
      TAIMUTC_AT_TZERO: 37, UT1MUTC_AT_TZERO: 0.0123, NEXT_LEAP_EPOCH: '2027-06-30T23:59:60.000Z', NEXT_LEAP_TAIMUTC: 38, EOP_SOURCE: 'finals2000A', NORAD_CAT_ID: 25544,
    }),
    CENTER_NAME: 'EARTH', TRAJ_REF_FRAME: T(OCM.RFMT, { NAME: 'TEME' }), COV_REF_FRAME: T(OCM.RFMT, { NAME: 'TEME' }), ORB_REVNUM: 48170, ORB_AVERAGING: 'OSCULATING',
    STATE_STEP_SIZE: STEP_SECONDS, STATE_VECTOR_SIZE: 6, STATE_DATA: grid.flat(),
    COV_TYPE: 'CARTPV', COV_ORDERING: OCM.covarianceOrdering.LTM, COV_SIZE: size, COV_PARAMETERS: [...parameterNames],
    COV_PARAMETER_KINDS: kinds ? parameterNames.map((n) => PARAMETERS.find((p) => p[0] === n)[1]) : [], COV_UNITS: units,
    COVARIANCE_DATA: Array.from({ length: epochs }, (_, e) => ltm(size, e)).flat(),
    PERTURBATIONS: T(OCM.PerturbationsT, { GM, GRAVITY_MODEL: 'EGM-96', GRAVITY_DEGREE: 36, GRAVITY_ORDER: 36, REDUCTION_THEORY: 'IAU 1980', ATMOSPHERIC_DRAG: 'NRLMSISE-00', SOLAR_RAD_PRESSURE: 'CANNONBALL', N_BODY_PERTURBATIONS: ['MOON', 'SUN'] }),
    ORBIT_DETERMINATION: T(OCM.OrbitDeterminationT, {
      OD_ID: 'fit-25544-1', OD_METHOD: 'BATCH_LEAST_SQUARES', OD_EPOCH: EPOCH, OD_OBSERVATIONS_USED: 412, OD_TRACKS_USED: 31, WEIGHTED_RMS: 1.09, SEDR: 2.5e-6,
      OD_DYNAMIC_PARAMETERS: PARAMETERS.map(([NAME, PARAMETER, UNITS, VALUE]) => T(OCM.OCMDynamicParameterT, { NAME, VALUE, UNITS, SOLVED_FOR: solved.includes(NAME), PARAMETER })),
      FIT_STATISTICS: T(OCM.OCMFitStatisticsT, { FIT_STATES: 2881, FIT_RMS_KM: 0.41, ITERATIONS: 7, CONVERGED: true, FIT_START: '2026-10-30T00:00:00.000Z', FIT_STOP: EPOCH }),
    }),
    PROVENANCE: T(OCM.PVNT, { SOURCE_ID: 'sdn-ap', PRODUCER: 'sdn-ap 0.6.0' }),
  });
}

/** An $ODR with `count` inputs: laser ranges and angle pairs, every other one edited out. */
export function odrWith(count) {
  return T(ODR.ODRT, {
    RUN_ID: 'fit-25544-1', OCM_CONTENT_ID: 'bafkreiocm', CONVERGENCE_REASON: ODR.odrConvergenceReason.CONVERGED, RESIDUAL_RMS: 0.0021,
    EDITED_OBSERVATIONS: Array.from({ length: count }, (_, i) => T(ODR.ODREditedObservationT, {
      OBSERVATION_ID: `station-7090:np:${String(i + 1).padStart(6, '0')}`, ITERATION: 3, PREFIT_RESIDUAL: 0.002 + i * 1e-4, NORMALIZED_RESIDUAL: 0.9 + i * 0.1,
      REASON: i % 2 ? 'SIGMA_EDIT' : '', EPOCH: new Date(Date.parse(EPOCH) + i * 30000).toISOString(),
      OBSERVATION_TYPE: i % 2 ? ODR.memMeasurementType.RIGHT_ASCENSION_DECLINATION : ODR.memMeasurementType.LASER_RANGE,
      OBSERVED_VALUE: 1234.5 + i, COMPUTED_VALUE: 1234.5 + i - 0.0021 * (i + 1), WEIGHT: i % 2 ? 2500 : 1e6, ACCEPTED: i % 2 === 0, PERTURBATION_MODEL_CODE: '4',
    })),
  });
}

/** `epochs` state matrices of `dimension` rows: the identity plus a small off-diagonal term. */
export function stmWith(epochs, dimension = 6) {
  return Array.from({ length: epochs }, (_, e) => T(OCM.PRWStateMatrixT, {
    DIMENSION: dimension,
    VALUES: Array.from({ length: dimension * dimension }, (_, k) => (Math.floor(k / dimension) === k % dimension ? 1 : 1e-3 * (e + 1))),
  }));
}

export function packOcm(ocm) {
  const b = new flatbuffers.Builder(4096);
  OCM.OCM.finishOCMBuffer(b, ocm.pack(b));
  return b.asUint8Array().slice();
}
export function unpackOcm(bytes) {
  return OCM.OCM.getRootAsOCM(new flatbuffers.ByteBuffer(bytes)).unpack();
}
export function packOdr(odr) {
  const b = new flatbuffers.Builder(1024);
  ODR.ODR.finishODRBuffer(b, odr.pack(b));
  return b.asUint8Array().slice();
}
export function unpackOdr(bytes) {
  return ODR.ODR.getRootAsODR(new flatbuffers.ByteBuffer(bytes)).unpack();
}
