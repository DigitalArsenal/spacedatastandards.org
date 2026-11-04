#!/usr/bin/env node
// One E2E for the OCM record: an $OCM carries a mean element set, the force model and daily space weather it flies
// on, fit statistics and covariance propagation, typed, and the homes of the relative-motion, integrator and
// provenance fields; $MET, $PCF, $CAT, $CVR and $PVN gain the values and fields it names.
//   a. the IDL: every changed table and enum keeps its base fields and members byte for byte (the 1.275.0 signatures
//      below) and gains exactly the listed additions, last; every other type of the six families is unchanged; the
//      new tables and enums are exactly as listed; $MET AP = 5, UNSPECIFIED = 6 (4 unused); pcfTheory AP = 6
//      (3 unused); THEORY_FLUX_MODEL = 3, NONE = 4; JACCHIA70 last; no new name contains USER_DEFINED;
//   b. the cut of the earlier theory (owner 2026-10-25) stays cut: its tables, enums and spellings
//      are in no schema, no lib/ file and no archive of dist/{MET,OMM,OCM,PCF,PRW}; the kept $PCF tables read;
//   c. JS -> C++ -> Go -> JS: a full AP $OCM (MEAN_ELEMENTS, Perturbations with 34 SPACE_WEATHER rows of five
//      fields and density-correction nodes, FIT_STATISTICS with two HELD_OUT_DAYS and FIT_START/STOP, 8x8
//      COVARIANCE_DATA with COV_PARAMETER_KINDS, COV_PROPAGATION, COV_REALISM, NORAD_CAT_ID), an SGP4 $OCM whose
//      MEAN_ELEMENT_THEORY reads SGP4 (0) after the Go leg, a relative-motion $OCM (RPO_GEOMETRY with NaN,
//      RPO_INSPECTION with RADAR, SEED_SETS, INTEGRATOR, MESSAGE_STATUS EXERCISE, PVN retrieval fields), a $PCF
//      with WEATHER_HORIZON_DAYS and OUTPUT.EPOCHS, and an $OCM with every reachable table and field populated, are
//      byte-equal after each leg; copies that drop MEAN_ELEMENT_THEORY are caught;
//   d. fbjson: the JSON schemas name the new fields as the IDL does, and both element-set $OCMs render to JSON that
//      the $OCM JSON schema accepts and that parses back to the same record.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';
import { allArms, closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-ocm-record-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
const FLATC = path.join(root, 'bin', process.platform === 'darwin' ? 'flatc_osx' : 'flatc');
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}`;
const tableSig = (t) => t.fields.map(fieldSig).join(';');
const enumSig = (e) => `${e.base}|${e.members.map((m) => `${m.name}=${m.value}`).join(';')}`;

// 1.275.0 (278d9ed59b): [field or member count, first 16 hex of sha256 of the signature, additions in order].
const CHANGED_TABLES = {
  Header: [6, '30657783d0a38360', ['MESSAGE_STATUS:ocmMessageStatus=UNSPECIFIED', 'EXERCISE_NAME:string=']],
  Metadata: [48, '9882df08f0c6fa65', ['NORAD_CAT_ID:uint32=']],
  Perturbations: [38, '29a73d60525ec553', ['MAXIMUM_TESSERAL_DEGREE:ushort=', 'MAXIMUM_ZONAL_DEGREE:ushort=',
    'WEATHER_SOURCE:pcfWeatherSource=UNSPECIFIED', 'DENSITY_CORRECTION:pcfDensityCorrection=NONE', 'DENSITY_CORRECTION_CID:string=',
    'SPACE_WEATHER:[SPW]=', 'DENSITY_CORRECTION_NODE_TIMES_MS:[int64]=', 'DENSITY_CORRECTION_LOG_DENSITY_SCALE_DIMENSIONLESS:[double]=',
    'REDUCTION_THEORY_TERMS:ushort=']],
  Maneuver: [37, '87fa4b35962ca0f6', ['NORAD_CAT_ID:uint32=']],
  OCMDynamicParameter: [4, 'dd73d377c241deed', ['PARAMETER:prwDynamicParameter=UNSPECIFIED']],
  OrbitDetermination: [47, '245dc5864e8381c7', ['FIT_STATISTICS:OCMFitStatistics=']],
  OCM: [33, 'f861ac1130361534', ['MEAN_ELEMENTS:OCMMeanElements=', 'COV_PROPAGATION:OCMCovariancePropagation=',
    'COV_PARAMETER_KINDS:[prwDynamicParameter]=', 'TRAJ_BASIS:ocmTrajectoryBasis=UNSPECIFIED', 'SEED_SETS:[OCMSeedSet]=',
    'INTEGRATOR:OCMIntegrator=', 'RPO_GEOMETRY:OCMRelativeGeometry=', 'RPO_INSPECTION:OCMInspectionGeometry=']],
  PCFFitPolicy: [17, '8b169698906c3135', ['WEATHER_HORIZON_DAYS:ushort=30']],
  PCFOutput: [3, 'd9fed6a075087887', ['EPOCHS:[string]=', 'START_TIME:string=', 'STOP_TIME:string=']],
  CVR: [18, '47539c60ddc3d947', ['TRUTH_EPOCHS:uint=', ...['1', '3'].flatMap((s) => [1, 2, 3].map((a) => `COVERAGE_${s}_SIGMA_AXIS${a}:double=nan`))]],
  PVN: [8, '7ed6295d2d012013', ['SOURCE_URL:string=', 'SOURCE_VERSION:string=', 'RETRIEVED_AT:string=', 'SOURCE_SHA256:string=', 'SOURCE_BYTES:uint64=']],
};
const CHANGED_ENUMS = {
  meanElementSource: [4, '18bc06bd5df374c0', ['AP=5', 'UNSPECIFIED=6']],
  pcfTheory: [5, '7ed2129f9ad7ba09', ['AP=6']],
  pcfWeatherSource: [3, '182be689cb6ec3f1', ['THEORY_FLUX_MODEL=3', 'NONE=4']],
  pcfAtmosphereFamily: [8, '27b78dd28b1d8002', ['JACCHIA70=8']],
  catalogProductKind: [4, '491e8fe79f438737', ['ApElements=4']],
};
// Every other table (T) and enum (E) of the 1.275.0 closures of OCM, PCF, CAT, CVR, PVN and MET, and their digest.
const UNCHANGED = `EAtmosphericModelFamily ECelestialFrame ECustomFrame EDataMode EDeviceType EOrbitFrame EPolarizationType
ESimplePolarization ESpacecraftFrame EcovarianceCalibration EcovarianceOrdering EcovarianceRule EdataAvailability
EestimatorCategory EevlAberrationCorrection EevlEventType EevlFieldOfViewShape EevlLocatorClass EevlResultStatus
EevlSamplePoint EevlShadowModel EfrmOperationCode EfrmResultStatus EfrmStateRepresentation ElegacyCountryCode
EmassCategory EoperationalState EorbitRegime EpceAvailability EpceConditionDirection EpceDataType EpceFrameDependency
EpceOwnerClass EpceParameter EpcePropagationDirection EpceResultStatus EpceUnit EpcfBlendShape EpcfDensityCorrection
EpcfEarthRadiationModel EpcfEphemerisKind EpcfEpochSelection EpcfEventAction EpcfEventDirection EpcfEventKind
EpcfExpressionOperation EpcfGnssSpacecraftBlock EpcfGravitySelection EpcfIntegratorAlgorithm EpcfNeutralWind
EpcfOceanTideModel EpcfOutputFrame EpcfPriorForm EpcfRadiationPressureFamily EpcfRelativityTerms EpcfSolidTideModel
EpcfWeatherExtension EpolynomialBasisType EppeAnomalyType EpvnLicenseClass EpvnSourceKind ErfmAxisType
ErfmLibrationPoint ErfmOriginKind ErfmVectorSpecification EsizeShapeProfile EspaceObjectClass EtimCcsdsTimeCodeKind
EtimConversionStatus EtimEpochRepresentation EtimingStandard EtrajectoryType TATM TBand TCAT TCATProduct
TCelestialFrameWrapper TCustomFrameWrapper TEVL TEVLApsidesConfiguration TEVLContactConfiguration
TEVLEclipseConfiguration TEVLEvent TEVLEventLocationRequest TEVLEventReport TEVLEventSample
TEVLIntrusionConfiguration TEVLLatitudeExtremumConfiguration TEVLNodeCrossingConfiguration
TEVLParameterConditionConfiguration TFRM TFRMFrameTransformRequest TFRMFrameTransformResult TFRMMatrix3
TFRMStateVector TFRMVector3 TFrequencyRange TIDM TLCC TMET TOCMCovarianceBlock TOCMTrajectoryBlock TOrbitFrameWrapper
TPCE TPCEEvaluationContext TPCEEvaluationRequest TPCEEvaluationResult TPCEParameterCatalog TPCEParameterCondition
TPCEParameterDescriptor TPCEParameterRef TPCEParameterSample TPCEParameterValue TPCEStopReport TPCEStopRequest TPCF
TPCFEcom2 TPCFEpochStore TPCFEventDefinition TPCFExpression TPCFExpressionTerm TPCFForceModel TPCFGaussianPrior
TPCFIntegratorSettings TPCFSpaceWeather TPLD TPPE TPPEOrbitalElementRecord TPPEPositionRecord TPhysicalProperties
TRFM TRFMCoordinateSystem TRFMCoordinateSystemWrapper TRFMLocalAlignedConstrainedAxes TRFMObjectReferencedAxes
TRFMOrigin TSpacecraftFrameWrapper TStateVector TStokesParameters TTIM TTIMCcsdsTimeCode TTIMConversionRequest
TTIMConversionResult TTIMInstant TUserDefinedParameters`.split(/\s+/);
const UNCHANGED_DIGEST = 'e01d58b07826b8bf032cd56b54e20622fc00a817b6d556a2a148224543e760f9';
const NEW_TABLES = {
  OCMHeldOutDay: 'DAY:ushort=;STATES:uint=;RMS_KM:double=nan',
  OCMFitStatistics: 'FIT_STATES:uint=;FIT_RMS_KM:double=nan;FIT_MAX_KM:double=nan;FIT_RADIAL_RMS_KM:double=nan;FIT_IN_TRACK_RMS_KM:double=nan;'
    + 'FIT_CROSS_TRACK_RMS_KM:double=nan;ITERATIONS:uint=;CONVERGED:bool=false;HELD_OUT_STOP:string=;HELD_OUT_STATES:uint=;'
    + 'HELD_OUT_RMS_KM:double=nan;HELD_OUT_MAX_KM:double=nan;HELD_OUT_DAYS:[OCMHeldOutDay]=;PCF_CID:string=;FIT_START:string=;FIT_STOP:string=',
  OCMMeanElements: 'MEAN_ELEMENT_THEORY:meanElementSource=UNSPECIFIED;EPOCH:string=;MEAN_MOTION:double=;ECCENTRICITY:double=;INCLINATION:double=;'
    + 'RA_OF_ASC_NODE:double=;ARG_OF_PERICENTER:double=;MEAN_ANOMALY:double=;BSTAR:double=;MEAN_MOTION_DOT:double=;MEAN_MOTION_DDOT:double=;'
    + 'BTERM:double=;AGOM:double=',
  OCMCovariancePropagation: 'FLOOR_UU_KM2:double=;FLOOR_VU_KM2:double=;FLOOR_VV_KM2:double=;FLOOR_WU_KM2:double=;FLOOR_WV_KM2:double=;'
    + 'FLOOR_WW_KM2:double=;NOISE_ECCENTRICITY_PER_DAY:double=;NOISE_INCLINATION_PER_DAY:double=;NOISE_MEAN_MOTION_RELATIVE:double=;'
    + 'NOISE_NON_GRAVITATIONAL_RAD_DAY2:double=;NOISE_START_MINUTES:double=;NON_GRAVITATIONAL_SHARE:double=;NON_GRAVITATIONAL_RATE_PER_DAY:double=',
  OCMSeedSet: 'NORAD_CAT_ID:uint32=;EPOCH:string=;CREATION_DATE:string=;MESSAGE_ID:string=',
  OCMIntegrator: 'MODE:ocmIntegratorMode=UNSPECIFIED;COORDINATE_SYSTEM:ocmIntegrationFrame=UNSPECIFIED;PARTIALS:ocmPartialsMethod=UNSPECIFIED;'
    + 'STEP_MODE:ocmStepMode=UNSPECIFIED;FIXED_STEP:bool=false;STEP_SIZE_SELECTION:ocmStepSelection=UNSPECIFIED;INITIAL_STEP_SECONDS:double=nan;'
    + 'ERROR_CONTROL:double=nan',
  OCMRelativeGeometry: ['R_KM', 'I_KM', 'C_KM', 'I_UNWRAPPED_KM', 'SEPARATION_KM', 'RANGE_RATE_KM_S', 'PLANE_ANGLE_DEG', 'A_CHIEF_KM', 'DA',
    'DLAMBDA', 'DEX', 'DEY', 'DIX', 'DIY', 'SIGMA_R_KM', 'SIGMA_I_KM', 'SIGMA_C_KM', 'SIGMA_SEPARATION_KM', 'BAND3_R_KM', 'BAND3_I_KM',
    'BAND3_C_KM'].map((n) => `${n}:[double]=`).join(';'),
  OCMRadarInputs: 'SOURCE:string=;FREQUENCY_GHZ:double=nan;ANTENNA_LENGTH_M:double=nan;ANTENNA_HEIGHT_M:double=nan;INCIDENCE_MIN_DEG:double=nan;'
    + 'INCIDENCE_MAX_DEG:double=nan',
  OCMInspectionGeometry: 'PHASE_ANGLE_DEG:[double]=;TARGET_SUNLIT:[double]=;CHASER_SUNLIT:[double]=;LINE_OF_SIGHT:[bool]=;'
    + 'TARGET_LIT_FROM_CHASER:[double]=;SUN_FROM_LINE_OF_SIGHT_DEG:[double]=;RANGE_KM:[double]=;CHASER_OFF_NADIR_DEG:[double]=;'
    + 'CHASER_CLOCK_DEG:[double]=;IN_SAR_RIGHT:[bool]=;IN_SAR_LEFT:[bool]=;RADAR:OCMRadarInputs=',
};
const NEW_ENUMS = {
  ocmMessageStatus: 'ubyte|UNSPECIFIED=0;REAL=1;TEST=2;EXERCISE=3',
  ocmTrajectoryBasis: 'ubyte|UNSPECIFIED=0;PREDICTED=1;DETERMINED=2;TELEMETRY=3;SIMULATED=4;OTHER=5',
  ocmIntegratorMode: 'ubyte|UNSPECIFIED=0;SPADOC=1;ASW=2',
  ocmIntegrationFrame: 'ubyte|UNSPECIFIED=0;J2000=1;EPOCH=2',
  ocmPartialsMethod: 'ubyte|UNSPECIFIED=0;ANALYTIC=1;FULL_NUMERICAL=2;FAST_NUMERICAL=3',
  ocmStepMode: 'ubyte|UNSPECIFIED=0;AUTO=1;TIME=2;S=3',
  ocmStepSelection: 'ubyte|UNSPECIFIED=0;AUTO=1;MANUAL=2',
};
// The cut of the earlier theory (owner 2026-10-25), in every spelling a binding uses.
const REMOVED = 'sdnap|pcf_?empirical_?terms|pcf_?mean_?element_?options|pcf_?segment_?options|pcf_?maneuver_?detection|pcf_?reentry|pcf_?launch|pcf_?innovation_?correlation|innovation_?correlation|reentry_?window_?method|empirical_?terms';
const grepFiles = (args) => {
  const r = spawnSync('grep', ['-rIl', '-i', '-E', REMOVED, ...args], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  assert.ok(r.status === 0 || r.status === 1, `grep failed: ${r.stderr}`);
  return r.stdout.split('\n').filter(Boolean);
};

try {
  // ---- a. The IDL.
  const models = Object.fromEntries(['OCM', 'PCF', 'CAT', 'CVR', 'PVN', 'MET'].map((c) => [c, parseIdl(schemaRoot, c)]));
  const tables = new Map(); const enums = new Map();
  for (const m of Object.values(models)) { for (const [n, t] of m.tables) tables.set(n, t); for (const [n, e] of m.enums) enums.set(n, e); }
  for (const [name, [count, digest, added]] of Object.entries(CHANGED_TABLES)) {
    const fields = tables.get(name).fields;
    assert.equal(sha(tableSig({ fields: fields.slice(0, count) })).slice(0, 16), digest, `${name}: the 1.275.0 fields are untouched`);
    assert.deepEqual(fields.slice(count).map(fieldSig), added, `${name}: the additions, last`);
  }
  for (const [name, [count, digest, added]] of Object.entries(CHANGED_ENUMS)) {
    const e = enums.get(name);
    assert.equal(sha(enumSig({ base: e.base, members: e.members.slice(0, count) })).slice(0, 16), digest, `${name}: the 1.275.0 members are untouched`);
    assert.deepEqual(e.members.slice(count).map((m) => `${m.name}=${m.value}`), added, `${name}: the additions, last`);
  }
  const unchanged = UNCHANGED.map((k) => { const t = k[0] === 'T' ? tables.get(k.slice(1)) : enums.get(k.slice(1)); assert.ok(t, `${k} exists`); return `${k}:${sha(k[0] === 'T' ? tableSig(t) : enumSig(t))}`; });
  assert.equal(sha(unchanged.join('\n')), UNCHANGED_DIGEST, `the other ${UNCHANGED.length} types of the six families are unchanged`);
  for (const [name, s] of Object.entries(NEW_TABLES)) assert.equal(tableSig(tables.get(name)), s, `new table ${name}`);
  for (const [name, s] of Object.entries(NEW_ENUMS)) assert.equal(enumSig(enums.get(name)), s, `new enum ${name}`);
  assert.ok(tables.get('OCMMeanElements').fields.find((f) => f.name === 'EPOCH').required, 'OCMMeanElements.EPOCH is required');
  const newNames = [...Object.keys(NEW_TABLES), ...Object.keys(NEW_ENUMS), ...Object.values(NEW_TABLES).join(';').split(';').map((s) => s.split(':')[0]),
    ...Object.values(CHANGED_TABLES).flatMap(([, , a]) => a.map((s) => s.split(':')[0])), ...Object.values(CHANGED_ENUMS).flatMap(([, , a]) => a.map((s) => s.split('=')[0]))];
  assert.deepEqual(newNames.filter((n) => /USER_DEFINED/i.test(n)), [], 'no new type, field or member is named USER_DEFINED');
  const met = models.MET.enums.get('meanElementSource').members; const pcfTheory = models.PCF.enums.get('pcfTheory').members;
  assert.ok(!met.some((m) => m.value === 4) && !pcfTheory.some((m) => m.value === 3), '$MET leaves 4 unused and pcfTheory leaves 3 unused');
  const ocmText = fs.readFileSync(path.join(schemaRoot, 'OCM/main.fbs'), 'utf8');
  for (const inc of ['MET', 'PCF', 'PRW']) assert.match(ocmText, new RegExp(`^include "\\.\\./${inc}/main\\.fbs";$`, 'm'), `$OCM includes ${inc}`);

  // ---- b. The cut stays cut.
  const pcf = models.PCF;
  assert.deepEqual(pcf.tables.get('PCF').fields.map((f) => f.name), ['CONFIGURATION_ID', 'PROFILE', 'THEORY', 'INTEGRATOR', 'FORCES', 'FIT', 'EVENTS', 'OUTPUT', 'EPOCH_STORE']);
  const forces = pcf.tables.get('PCFForceModel').fields.map((f) => f.name);
  assert.ok(!forces.includes('EMPIRICAL_TERMS'));
  assert.deepEqual(forces.slice(-2), ['THIRD_BODY_MAXIMUM_DEGREE', 'THIRD_BODY_MAXIMUM_ORDER']);
  for (const table of ['PCFEmpiricalTerms', 'PCFMeanElementOptions', 'PCFSegmentOptions', 'PCFManeuverDetection', 'PCFReentry', 'PCFLaunch'])
    assert.ok(!pcf.tables.has(table), `${table} is cut`);
  for (const name of ['pcfInnovationCorrelation', 'pcfReentryWindowMethod']) assert.ok(!pcf.enums.has(name), `${name} is cut`);
  for (const table of ['PCFFitPolicy', 'PCFEpochStore', 'PCFEventDefinition', 'PCFOutput', 'PCFIntegratorSettings']) assert.ok(pcf.tables.has(table), `${table} stays`);
  assert.deepEqual(grepFiles([schemaRoot]), [], 'no schema names a removed identifier');
  assert.deepEqual(grepFiles([path.join(root, 'lib')]).map((f) => path.relative(root, f)), [], 'lib/ names no removed identifier');
  const names = execFileSync('find', [path.join(root, 'lib'), '-type', 'f'], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 }).split('\n')
    .filter((f) => new RegExp(`(^|/)[^/]*(${REMOVED})[^/]*$`, 'i').test(f));
  assert.deepEqual(names, [], 'no generated file is named for a removed table');
  let archives = 0;
  for (const code of ['MET', 'OMM', 'OCM', 'PCF', 'PRW']) {
    for (const file of fs.readdirSync(path.join(root, 'dist', code)).filter((f) => f.endsWith('.tar.gz'))) {
      const dir = path.join(tmp, 'archives', file);
      fs.mkdirSync(dir, { recursive: true });
      run('tar', ['-xzf', path.join(root, 'dist', code, file), '-C', dir]);
      assert.deepEqual(grepFiles([dir]), [], `dist/${code}/${file} names no removed identifier`);
      archives += 1;
    }
  }
  const metHeader = fs.readFileSync(path.join(tmp, 'archives/MET.cpp.tar.gz/MET/main_generated.h'), 'utf8');
  assert.match(metHeader, /meanElementSource_AP = 5/, 'the generated C++ $MET has AP = 5');
  assert.match(metHeader, /meanElementSource_MAX = meanElementSource_UNSPECIFIED/, 'the generated C++ $MET ends at UNSPECIFIED');

  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const O = await import(pathToFileURL(path.join(root, 'lib/js/OCM/main.js')));
  const P = await import(pathToFileURL(path.join(root, 'lib/js/PCF/main.js')));
  const OMM = await import(pathToFileURL(path.join(root, 'lib/js/OMM/main.js')));
  const M = await import(pathToFileURL(path.join(root, 'lib/js/MET/main.js')));
  const C = await import(pathToFileURL(path.join(root, 'lib/js/CAT/main.js')));
  assert.deepEqual(Object.entries(M.meanElementSource).filter(([k]) => Number.isNaN(Number(k))), [['SGP4', 0], ['SGP4XP', 1], ['DSST', 2], ['USM', 3], ['AP', 5], ['UNSPECIFIED', 6]], 'generated JS meanElementSource');
  assert.deepEqual([P.pcfTheory.AP, P.pcfWeatherSource.THEORY_FLUX_MODEL, P.pcfWeatherSource.NONE, P.pcfAtmosphereFamily.JACCHIA70, C.catalogProductKind.ApElements], [6, 3, 4, 8, 4], 'generated JS values');
  assert.deepEqual([O.ocmStepMode.S, O.ocmTrajectoryBasis.OTHER, new O.OCMMeanElementsT().MEAN_ELEMENT_THEORY, new P.PCFFitPolicyT().WEATHER_HORIZON_DAYS], [3, 5, 6, 30], 'generated JS enums and defaults');
  assert.equal(M.meanElementSource.SDNAP, undefined); assert.equal(P.pcfTheory.SDNAP, undefined);
  for (const [name, value] of Object.entries({ SGP4: 0, SGP4XP: 1, DSST: 2, USM: 3, AP: 5 })) {
    const b = new fb.Builder(256);
    OMM.OMM.finishOMMBuffer(b, Object.assign(new OMM.OMMT(), { OBJECT_NAME: 'PROBE', MEAN_ELEMENT_THEORY: value }).pack(b));
    assert.equal(OMM.OMM.getRootAsOMM(new fb.ByteBuffer(b.asUint8Array())).MEAN_ELEMENT_THEORY(), value, `OMM ${name}`);
  }

  // ---- c. JS -> C++ -> Go -> JS.
  const T = (cls, v) => Object.assign(new cls(), v);
  const day = (iso, n) => new Date(Date.parse(`${iso}T00:00:00Z`) + n * 86400e3).toISOString().slice(0, 10);
  const EPOCH = '2026-11-01T00:00:00.000Z', FIT_START = '2026-10-30T00:00:00.000Z';
  // Rows from day(FIT_START) - 1 through day(EPOCH) + WEATHER_HORIZON_DAYS (30): 2026-10-29 .. 2026-12-01.
  const rows = Array.from({ length: 34 }, (_, i) => T(O.SPWT, {
    DATE: day('2026-10-29', i), F107_OBS: 150 + i * 0.25, F107_OBS_CENTER81: 145.5 + i * 0.125, AP_AVG: 5 + (i % 7),
    F107_DATA_TYPE: i < 3 ? O.F107DataType.OBS : O.F107DataType.PRD,
  }));
  const nodeTimes = Array.from({ length: 21 }, (_, i) => BigInt(Date.parse('2026-10-29T00:00:00Z') + i * 6 * 3600e3));
  const apOcm = T(O.OCMT, {
    HEADER: T(O.HeaderT, { CCSDS_OCM_VERS: '3.0', CREATION_DATE: '2026-11-01T01:00:00.000Z', ORIGINATOR: 'SDN', MESSAGE_ID: 'ap-25544-1', MESSAGE_STATUS: O.ocmMessageStatus.REAL }),
    METADATA: T(O.MetadataT, { OBJECT_NAME: 'ISS (ZARYA)', INTERNATIONAL_DESIGNATOR: '1998-067A', TIME_SYSTEM: 'UTC', NORAD_CAT_ID: 25544 }),
    CENTER_NAME: 'EARTH', ORB_AVERAGING: 'BROUWER', TRAJ_FRAME_EPOCH: EPOCH, TRAJ_BASIS: O.ocmTrajectoryBasis.DETERMINED,
    MEAN_ELEMENTS: T(O.OCMMeanElementsT, { MEAN_ELEMENT_THEORY: O.meanElementSource.AP, EPOCH, MEAN_MOTION: 15.5, ECCENTRICITY: 0.0005, INCLINATION: 51.64,
      RA_OF_ASC_NODE: 120.5, ARG_OF_PERICENTER: 90.25, MEAN_ANOMALY: 270.75, BTERM: 0.0123, AGOM: 0.0045 }),
    PERTURBATIONS: T(O.PerturbationsT, {
      ATMOSPHERIC_MODEL: T(O.ATMT, { MODEL: O.AtmosphericModelFamily.NRLMSIS00E, YEAR: 2000 }), GRAVITY_MODEL: 'EGM-96',
      MAXIMUM_TESSERAL_DEGREE: 12, MAXIMUM_ZONAL_DEGREE: 31, WEATHER_SOURCE: O.pcfWeatherSource.RECORDS,
      DENSITY_CORRECTION: O.pcfDensityCorrection.DCA_COMMON_MODE, DENSITY_CORRECTION_CID: 'bafkreidclnodes', SPACE_WEATHER: rows,
      DENSITY_CORRECTION_NODE_TIMES_MS: nodeTimes, DENSITY_CORRECTION_LOG_DENSITY_SCALE_DIMENSIONLESS: nodeTimes.map((_, i) => (i - 8) / 64),
      SW_DATA_SOURCE: 'SW-All', SW_DATA_EPOCH: '2026-10-31',
      SW_INTERP_METHOD: 'DAILY: F10.7 OF THE PREVIOUS DAY, 81-DAY CENTERED MEAN AND DAILY AP OF THE DAY, NO INTERPOLATION' }),
    ORBIT_DETERMINATION: T(O.OrbitDeterminationT, {
      OD_ID: 'fit-25544-1', OD_EPOCH: EPOCH, OD_ESTIMATOR: O.estimatorCategory.BatchLeastSquares, ACTUAL_OD_SPAN: 2,
      OD_DYNAMIC_PARAMETERS: [
        T(O.OCMDynamicParameterT, { NAME: 'DRAG_AREA_OVER_MASS', VALUE: 0.0123, UNITS: 'm**2/kg', SOLVED_FOR: true, PARAMETER: O.prwDynamicParameter.DRAG_AREA_OVER_MASS }),
        T(O.OCMDynamicParameterT, { NAME: 'SRP_AREA_OVER_MASS', VALUE: 0.0045, UNITS: 'm**2/kg', SOLVED_FOR: true, PARAMETER: O.prwDynamicParameter.SRP_AREA_OVER_MASS })],
      FIT_STATISTICS: T(O.OCMFitStatisticsT, { FIT_STATES: 2881, FIT_RMS_KM: 0.41, FIT_MAX_KM: 1.2, FIT_RADIAL_RMS_KM: 0.05, FIT_IN_TRACK_RMS_KM: 0.4,
        FIT_CROSS_TRACK_RMS_KM: 0.07, ITERATIONS: 7, CONVERGED: true, HELD_OUT_STOP: '2026-11-03T00:00:00.000Z', HELD_OUT_STATES: 2880,
        HELD_OUT_RMS_KM: 1.6, HELD_OUT_MAX_KM: 4.1, PCF_CID: 'bafkreipcf',
        HELD_OUT_DAYS: [T(O.OCMHeldOutDayT, { DAY: 1, STATES: 1440, RMS_KM: 0.8 }), T(O.OCMHeldOutDayT, { DAY: 2, STATES: 1440, RMS_KM: 1.9 })],
        FIT_START, FIT_STOP: EPOCH }) }),
    COV_TYPE: 'CARTPV', COV_SIZE: 8, COVARIANCE_DATA: Array.from({ length: 36 }, (_, i) => (i + 1) / 64),
    COV_PARAMETERS: ['DRAG_AREA_OVER_MASS', 'SRP_AREA_OVER_MASS'],
    COV_PARAMETER_KINDS: [O.prwDynamicParameter.DRAG_AREA_OVER_MASS, O.prwDynamicParameter.SRP_AREA_OVER_MASS],
    COV_UNITS: ['km', 'km', 'km', 'km/s', 'km/s', 'km/s', 'm**2/kg', 'm**2/kg'],
    COV_PROPAGATION: T(O.OCMCovariancePropagationT, { FLOOR_UU_KM2: 0.01, FLOOR_VU_KM2: -0.002, FLOOR_VV_KM2: 0.16, FLOOR_WU_KM2: 0.0005, FLOOR_WV_KM2: -0.001,
      FLOOR_WW_KM2: 0.005, NOISE_ECCENTRICITY_PER_DAY: 1e-6, NOISE_INCLINATION_PER_DAY: 2e-6, NOISE_MEAN_MOTION_RELATIVE: 3e-7,
      NOISE_NON_GRAVITATIONAL_RAD_DAY2: 2.5e-5, NOISE_START_MINUTES: 0, NON_GRAVITATIONAL_SHARE: 0.25, NON_GRAVITATIONAL_RATE_PER_DAY: 1e-4 }),
    COV_REALISM: [T(O.CVRT, { REGIME: 'LEO', CALIBRATION: O.covarianceCalibration.Uncalibrated, SAMPLES: 900, TRUTH_EPOCHS: 300,
      COVERAGE_1_SIGMA_AXIS1: 0.66, COVERAGE_1_SIGMA_AXIS2: 0.7, COVERAGE_1_SIGMA_AXIS3: 0.69, COVERAGE_3_SIGMA_AXIS1: 0.99, COVERAGE_3_SIGMA_AXIS2: 0.995, COVERAGE_3_SIGMA_AXIS3: 0.997 })],
    PROVENANCE: T(O.PVNT, { SOURCE_ID: 'sdn-ap', PRODUCER: 'sdn-ap 0.4.18' }),
  });
  const sgp4Ocm = T(O.OCMT, {
    HEADER: T(O.HeaderT, { CCSDS_OCM_VERS: '3.0', ORIGINATOR: '18 SDS', MESSAGE_ID: '1234567' }),
    METADATA: T(O.MetadataT, { OBJECT_NAME: 'ISS (ZARYA)', TIME_SYSTEM: 'UTC', NORAD_CAT_ID: 25544 }),
    CENTER_NAME: 'EARTH', ORB_AVERAGING: 'KOZAI',
    MEAN_ELEMENTS: T(O.OCMMeanElementsT, { MEAN_ELEMENT_THEORY: O.meanElementSource.SGP4, EPOCH, MEAN_MOTION: 15.49, ECCENTRICITY: 0.0006, INCLINATION: 51.64,
      RA_OF_ASC_NODE: 120.5, ARG_OF_PERICENTER: 90.25, MEAN_ANOMALY: 270.75, BSTAR: 2.5e-4, MEAN_MOTION_DOT: 1.2e-4, MEAN_MOTION_DDOT: 0 }),
    PERTURBATIONS: T(O.PerturbationsT, { GRAVITY_MODEL: 'WGS-72', WEATHER_SOURCE: O.pcfWeatherSource.NONE }),
  });
  const grid = (n, f) => Array.from({ length: 4 }, (_, i) => (i === n ? NaN : f(i)));
  const rpoOcm = T(O.OCMT, {
    HEADER: T(O.HeaderT, { ORIGINATOR: 'SDN', MESSAGE_ID: 'rpo-1', MESSAGE_STATUS: O.ocmMessageStatus.EXERCISE, EXERCISE_NAME: 'GLOBAL SENTINEL' }),
    METADATA: T(O.MetadataT, { TIME_SYSTEM: 'UTC', NORAD_CAT_ID: 40000, START_TIME: EPOCH }),
    CENTER_NAME: 'TARGET', STATE_STEP_SIZE: 60, STATE_EPOCHS: [0, 1, 2, 3].map((i) => `2026-11-01T00:0${i}:00.000Z`), TRAJ_BASIS: O.ocmTrajectoryBasis.PREDICTED,
    SEED_SETS: [T(O.OCMSeedSetT, { NORAD_CAT_ID: 40000, EPOCH, CREATION_DATE: '2026-11-01T02:00:00.000Z', MESSAGE_ID: '987654321' }),
      T(O.OCMSeedSetT, { NORAD_CAT_ID: 40001, EPOCH: '2026-10-31T22:00:00.000Z', CREATION_DATE: '2026-11-01T01:00:00.000Z', MESSAGE_ID: '987654322' })],
    INTEGRATOR: T(O.OCMIntegratorT, { MODE: O.ocmIntegratorMode.ASW, COORDINATE_SYSTEM: O.ocmIntegrationFrame.J2000, PARTIALS: O.ocmPartialsMethod.FULL_NUMERICAL,
      STEP_MODE: O.ocmStepMode.S, FIXED_STEP: true, STEP_SIZE_SELECTION: O.ocmStepSelection.MANUAL, INITIAL_STEP_SECONDS: 20, ERROR_CONTROL: 1e-12 }),
    RPO_GEOMETRY: T(O.OCMRelativeGeometryT, Object.fromEntries(NEW_TABLES.OCMRelativeGeometry.split(';').map((s, k) => [s.split(':')[0], grid(k % 5 === 0 ? 2 : -1, (i) => k + i / 8)]))),
    RPO_INSPECTION: T(O.OCMInspectionGeometryT, { PHASE_ANGLE_DEG: [10, 20, 30, 40], TARGET_SUNLIT: [1, 1, 0.5, 0], CHASER_SUNLIT: [1, 0.75, 0, 0],
      LINE_OF_SIGHT: [true, true, false, true], TARGET_LIT_FROM_CHASER: [1, 1, 0, 0], SUN_FROM_LINE_OF_SIGHT_DEG: [5, 6, 7, 8], RANGE_KM: [1.5, 1.25, 1, 0.75],
      CHASER_OFF_NADIR_DEG: [30, 31, 32, 33], CHASER_CLOCK_DEG: [90, 91, 270, 271], IN_SAR_RIGHT: [true, true, false, false], IN_SAR_LEFT: [false, false, true, false],
      RADAR: T(O.OCMRadarInputsT, { SOURCE: 'published characteristics', FREQUENCY_GHZ: 9.65, ANTENNA_LENGTH_M: 4.8, ANTENNA_HEIGHT_M: 0.7, INCIDENCE_MIN_DEG: 20, INCIDENCE_MAX_DEG: 45 }) }),
    MANEUVER_DATA: [T(O.ManeuverT, { MAN_ID: 'burn-1', NORAD_CAT_ID: 40001 })],
    PROVENANCE: T(O.PVNT, { SOURCE_ID: 'spacetrack-gp', SOURCE_URL: 'https://example.invalid/gp?norad=40000', SOURCE_VERSION: '2026-11-01T02:00:00Z',
      RETRIEVED_AT: '2026-11-01T02:05:00.000Z', SOURCE_SHA256: 'a'.repeat(64), SOURCE_BYTES: 4096n }),
  });
  const ocmModel = models.OCM;
  const reachable = closure(ocmModel, 'OCM');
  const visited = new Set();
  const populated = populate(ocmModel, O, 'OCM', visited);
  assert.deepEqual([...visited].sort(), [...reachable].sort(), 'every reachable table populated');
  const messages = [['ap', apOcm], ['sgp4', sgp4Ocm], ['rpo', rpoOcm], ['populated', populated]];
  const encode = (o) => { const b = new fb.Builder(4096); O.OCM.finishOCMBuffer(b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
  const dir = path.join(tmp, 'work'); fs.mkdirSync(dir);
  const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
  for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));
  const decode = (f) => O.OCM.getRootAsOCM(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();

  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsocmrecord\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const cppRoot = path.join(tmp, 'cpp'); fs.mkdirSync(cppRoot);
  run('tar', ['-xzf', path.join(root, 'dist/OCM/OCM.cpp.tar.gz'), '-C', cppRoot]);
  const copyTables = [...new Set(['OCM', ...closure(ocmModel, 'OCM', { arms: allArms })])];
  const cppSource = cppCopySource({ model: ocmModel, root: 'OCM', include: 'OCM/main_generated.h', populated: copyTables });
  const goDir = path.join(tmp, 'OCM');
  run('cp', ['-R', path.join(root, 'lib/go/OCM'), goDir]); run('chmod', ['-R', 'u+w', goDir]);
  const goSource = goCopySource({ model: ocmModel, root: 'OCM', pkg: 'OCM', populated: copyTables });
  fs.mkdirSync(path.join(tmp, 'runOCM')); fs.writeFileSync(path.join(tmp, 'runOCM/main.go'), 'package main\nimport (\n "os"\n p "sdsocmrecord/OCM"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n');
  const legs = (cpp, go, cppLeg, goLeg) => {
    fs.writeFileSync(path.join(dir, 'copy.cpp'), cpp);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'copy.cpp', '-o', 'copy'], dir);
    run(path.join(dir, 'copy'), messages.flatMap(([n]) => [file(n, 'js'), file(n, cppLeg)]), dir);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), go);
    run('go', ['run', '-mod=mod', './runOCM', ...messages.flatMap(([n]) => [file(n, cppLeg), file(n, goLeg)])]);
  };
  legs(cppSource, goSource, 'cpp', 'go');
  for (const [name, o] of messages) {
    const js = fs.readFileSync(file(name, 'js'));
    const first = decode(file(name, 'js'));
    if (name === 'populated') assert.deepStrictEqual(first, o, 'populated: JS changed a field');
    for (const leg of ['cpp', 'go']) {
      const back = decode(file(name, leg));
      assert.deepStrictEqual(back, first, `${name}: ${leg} changed a field`);
      assert.equal(Buffer.compare(encode(back), js), 0, `${name}: the ${leg} leg re-encodes to the JS bytes`);
    }
  }
  const ap = decode(file('ap', 'go')), sgp4 = decode(file('sgp4', 'go')), rpo = decode(file('rpo', 'go'));
  const sw = ap.PERTURBATIONS.SPACE_WEATHER;
  assert.deepEqual([sw.length, sw[0].DATE, sw.at(-1).DATE, sw.filter((r) => r.F107_DATA_TYPE === O.F107DataType.OBS).length], [34, '2026-10-29', '2026-12-01', 3], 'AP: 34 daily rows');
  sw.forEach((r, i) => assert.deepStrictEqual(r, T(O.SPWT, { DATE: rows[i].DATE, F107_OBS: rows[i].F107_OBS, F107_OBS_CENTER81: rows[i].F107_OBS_CENTER81,
    AP_AVG: rows[i].AP_AVG, F107_DATA_TYPE: rows[i].F107_DATA_TYPE }), `AP row ${i}: five fields, the rest unwritten`));
  assert.deepEqual([ap.PERTURBATIONS.DENSITY_CORRECTION_NODE_TIMES_MS.length, ap.PERTURBATIONS.DENSITY_CORRECTION_LOG_DENSITY_SCALE_DIMENSIONLESS.length, ap.PERTURBATIONS.WEATHER_SOURCE, ap.PERTURBATIONS.DENSITY_CORRECTION], [21, 21, 2, 1], 'AP: DCA nodes');
  assert.deepEqual([ap.MEAN_ELEMENTS.MEAN_ELEMENT_THEORY, ap.METADATA.NORAD_CAT_ID, ap.COV_SIZE, ap.COVARIANCE_DATA.length, ap.COV_PARAMETER_KINDS, ap.ORBIT_DETERMINATION.FIT_STATISTICS.HELD_OUT_DAYS.length,
    ap.ORBIT_DETERMINATION.FIT_STATISTICS.FIT_START, ap.ORBIT_DETERMINATION.FIT_STATISTICS.FIT_STOP, ap.COV_PROPAGATION.FLOOR_WW_KM2, ap.COV_REALISM[0].COVERAGE_3_SIGMA_AXIS3],
  [5, 25544, 8, 36, [1, 3], 2, FIT_START, EPOCH, 0.005, 0.997], 'AP: the record after the Go leg');
  const sgp4Theory = O.OCM.getRootAsOCM(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(file('sgp4', 'go'))))).MEAN_ELEMENTS().MEAN_ELEMENT_THEORY();
  assert.deepEqual([sgp4Theory, sgp4.PERTURBATIONS.WEATHER_SOURCE, sgp4.MEAN_ELEMENTS.BSTAR], [0, 4, 2.5e-4], 'SGP4: MEAN_ELEMENT_THEORY reads SGP4 (0) after the Go leg');
  assert.deepEqual([rpo.HEADER.MESSAGE_STATUS, rpo.HEADER.EXERCISE_NAME, rpo.SEED_SETS.length, rpo.INTEGRATOR.STEP_MODE, rpo.RPO_INSPECTION.RADAR.FREQUENCY_GHZ,
    rpo.MANEUVER_DATA[0].NORAD_CAT_ID, rpo.PROVENANCE.SOURCE_BYTES, rpo.RPO_GEOMETRY.R_KM.filter(Number.isNaN).length, rpo.RPO_GEOMETRY.SIGMA_I_KM.filter(Number.isNaN).length],
  [3, 'GLOBAL SENTINEL', 2, 3, 9.65, 40001, 4096n, 1, 1], 'RPO: the record after the Go leg');
  // A copy that drops MEAN_ELEMENT_THEORY reads UNSPECIFIED, and the comparison catches it.
  const cppLine = 'x.add_MEAN_ELEMENT_THEORY(s->MEAN_ELEMENT_THEORY());', goLine = 'OCMMeanElementsAddMEAN_ELEMENT_THEORY(b, s.MEAN_ELEMENT_THEORY())';
  assert.ok(cppSource.includes(cppLine) && goSource.includes(goLine), 'the controls apply');
  legs(cppSource.replace(cppLine, ''), goSource, 'control-cpp', 'control-cpp-go');
  assert.equal(decode(file('sgp4', 'control-cpp')).MEAN_ELEMENTS.MEAN_ELEMENT_THEORY, 6, 'a C++ copy without the slot reads UNSPECIFIED');
  assert.throws(() => assert.deepStrictEqual(decode(file('sgp4', 'control-cpp')), decode(file('sgp4', 'js'))), 'a C++ copy that drops MEAN_ELEMENT_THEORY must differ');
  legs(cppSource, goSource.replace(goLine, ''), 'cpp', 'control-go');
  assert.equal(decode(file('sgp4', 'control-go')).MEAN_ELEMENTS.MEAN_ELEMENT_THEORY, 6, 'a Go copy without the slot reads UNSPECIFIED');
  assert.throws(() => assert.deepStrictEqual(decode(file('sgp4', 'control-go')), decode(file('sgp4', 'js'))), 'a Go copy that drops MEAN_ELEMENT_THEORY must differ');

  // $PCF: WEATHER_HORIZON_DAYS and the OUTPUT grid, JS -> C++ -> Go -> JS.
  const config = T(P.PCFT, { CONFIGURATION_ID: 'ap-fit', THEORY: P.pcfTheory.AP,
    FIT: T(P.PCFFitPolicyT, { WEATHER_HORIZON_DAYS: 45 }),
    OUTPUT: T(P.PCFOutputT, { EPOCHS: ['2026-11-01T00:00:00.000Z', '2026-11-01T00:10:00.000Z'], START_TIME: EPOCH, STOP_TIME: '2026-11-02T00:00:00.000Z' }) });
  const encodePcf = (o) => { const b = new fb.Builder(1024); P.PCF.finishPCFBuffer(b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
  const decodePcf = (f) => P.PCF.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();
  fs.writeFileSync(path.join(dir, 'pcf.js.fb'), encodePcf(config));
  const pcfReach = [...new Set(['PCF', ...closure(pcf, 'PCF', { arms: allArms })])];
  const pcfCpp = path.join(tmp, 'pcfcpp'); fs.mkdirSync(pcfCpp);
  run('tar', ['-xzf', path.join(root, 'dist/PCF/PCF.cpp.tar.gz'), '-C', pcfCpp]);
  fs.writeFileSync(path.join(dir, 'pcfcopy.cpp'), cppCopySource({ model: pcf, root: 'PCF', include: 'PCF/main_generated.h', populated: pcfReach }));
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', pcfCpp, 'pcfcopy.cpp', '-o', 'pcfcopy'], dir);
  run(path.join(dir, 'pcfcopy'), ['pcf.js.fb', 'pcf.cpp.fb'], dir);
  const pcfGo = path.join(tmp, 'PCF');
  run('cp', ['-R', path.join(root, 'lib/go/PCF'), pcfGo]); run('chmod', ['-R', 'u+w', pcfGo]);
  fs.writeFileSync(path.join(pcfGo, 'wire_e2e.go'), goCopySource({ model: pcf, root: 'PCF', pkg: 'PCF', populated: pcfReach }));
  fs.mkdirSync(path.join(tmp, 'runPCF')); fs.writeFileSync(path.join(tmp, 'runPCF/main.go'), 'package main\nimport (\n "os"\n p "sdsocmrecord/PCF"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n');
  run('go', ['run', '-mod=mod', './runPCF', path.join(dir, 'pcf.cpp.fb'), path.join(dir, 'pcf.go.fb')]);
  const pcfBack = decodePcf(path.join(dir, 'pcf.go.fb'));
  assert.deepStrictEqual(pcfBack, decodePcf(path.join(dir, 'pcf.js.fb')), '$PCF: the Go leg changed a field');
  assert.equal(Buffer.compare(encodePcf(pcfBack), fs.readFileSync(path.join(dir, 'pcf.js.fb'))), 0, '$PCF: the Go leg re-encodes to the JS bytes');
  assert.deepEqual([pcfBack.THEORY, pcfBack.FIT.WEATHER_HORIZON_DAYS, pcfBack.OUTPUT.EPOCHS.length, pcfBack.OUTPUT.STOP_TIME], [6, 45, 2, '2026-11-02T00:00:00.000Z'], '$PCF after the Go leg');

  // ---- d. fbjson.
  const ocmSchema = JSON.parse(fs.readFileSync(path.join(root, 'lib/fbjson/OCM/main.fb.schema.json'), 'utf8'));
  const pcfSchema = JSON.parse(fs.readFileSync(path.join(root, 'lib/fbjson/PCF/main.fb.schema.json'), 'utf8'));
  const props = (schema, table) => Object.keys(schema.definitions[table].properties);
  for (const [name, [count, , added]] of Object.entries(CHANGED_TABLES)) {
    const schema = name.startsWith('PCF') ? pcfSchema : ocmSchema;
    assert.deepEqual(props(schema, name).slice(count), added.map((s) => s.split(':')[0]), `fbjson ${name}: the additions, as the IDL names them`);
  }
  for (const name of Object.keys(NEW_TABLES)) assert.deepEqual(props(ocmSchema, name), NEW_TABLES[name].split(';').map((s) => s.split(':')[0]), `fbjson ${name}`);
  const { default: Ajv } = await import(pathToFileURL(path.join(root, 'node_modules/ajv/dist/2019.js')));
  const validate = new Ajv({ strict: false, allErrors: true }).compile(ocmSchema);
  for (const name of ['ap', 'sgp4']) {
    run(FLATC, ['--no-warnings', '--json', '--strict-json', '--raw-binary', '-o', dir, '-I', schemaRoot, path.join(schemaRoot, 'OCM/main.fbs'), '--', file(name, 'go')]);
    // flatc writes a NaN the JS builder stored for a NaN-default field as a bare nan, which JSON has no token for; such a
    // field equals its default, so the JSON leaves it out.
    const jsonFile = path.join(dir, `${name}.go.json`);
    const text = fs.readFileSync(jsonFile, 'utf8').replace(/^\s*"\w+": -?nan,?\r?\n/gm, '').replace(/,(\s*[}\]])/g, '$1');
    fs.writeFileSync(jsonFile, text);
    const json = JSON.parse(text);
    assert.ok(validate(json), `${name}: the $OCM JSON schema accepts the JSON: ${JSON.stringify(validate.errors?.slice(0, 3))}`);
    assert.equal(json.MEAN_ELEMENTS.MEAN_ELEMENT_THEORY, name === 'ap' ? 'AP' : 'SGP4', `${name}: JSON names the theory`);
    fs.mkdirSync(path.join(dir, `${name}-json`));
    run(FLATC, ['--no-warnings', '--binary', '-o', path.join(dir, `${name}-json`), '-I', schemaRoot, path.join(schemaRoot, 'OCM/main.fbs'), jsonFile]);
    assert.deepStrictEqual(decode(path.join(dir, `${name}-json`, `${name}.go.bin`)), decode(file(name, 'js')), `${name}: the JSON parses back to the same record`);
  }
  const apJson = JSON.parse(fs.readFileSync(path.join(dir, 'ap.go.json'), 'utf8'));
  assert.deepEqual([apJson.PERTURBATIONS.SPACE_WEATHER.length, Object.keys(apJson.PERTURBATIONS.SPACE_WEATHER[5]).sort(), apJson.PERTURBATIONS.DENSITY_CORRECTION_NODE_TIMES_MS.length],
    [34, ['AP_AVG', 'DATE', 'F107_DATA_TYPE', 'F107_OBS', 'F107_OBS_CENTER81'], 21], 'AP JSON: 34 rows of five fields and 21 nodes');

  const version = (code) => fs.readFileSync(path.join(schemaRoot, `${code}/main.fbs`), 'utf8').match(/^\/\/ Version: (\S+)$/m)[1];
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version.split('+')[0];
  console.log(`PASS: SDS ${pkg} OCM record ($OCM ${version('OCM')}, $MET ${version('MET')}, $PCF ${version('PCF')}, $CAT ${version('CAT')}, $CVR ${version('CVR')}, $PVN ${version('PVN')}): `
    + `${Object.keys(CHANGED_TABLES).length} tables and ${Object.keys(CHANGED_ENUMS).length} enums append only, ${UNCHANGED.length} types unchanged, ${Object.keys(NEW_TABLES).length} new tables and ${Object.keys(NEW_ENUMS).length} new enums; `
    + `the cut stays out of schema/, lib/ and ${archives} archives; AP (34 weather rows, 21 nodes, 8x8 covariance), SGP4 (theory 0 after Go), RPO and a populated $OCM (${reachable.length} tables) `
    + `and a $PCF are byte-equal JS -> C++ -> Go -> JS; dropped MEAN_ELEMENT_THEORY is caught in C++ and Go; fbjson names every addition and both element sets validate and parse back`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
