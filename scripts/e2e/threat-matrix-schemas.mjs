#!/usr/bin/env node
// One E2E for Milestone M1 canonical SDS schemas (#1103, #700, #702):
//   a. IDL, ordinals & THEMIS rules: THP=301, TMX=302, DCO=303, RBF=304, RDE=305 in
//      RecordTypeExtended (union RecordType frozen at 255); $COA (298) preserves all 15
//      inputs-only fields and COAStep while appending coaKind 4..8; $PIV (110) unchanged;
//      no struct, no = nan, no MIN/MAX, no enum-vs-camelCase(field) shadow, no libc macros.
//   b. JS -> C++ -> Go -> JS byte-exact wire round-trips for populated and realistic stated
//      records across $THP, $TMX, $DCO, $RBF, $RDE, and $COA (including 1.287.0 backward
//      compatibility check).
//   c. Flatc JSON <-> binary round-trip verifying IDL-exact UPPER_SNAKE_CASE JSON keys and
//      fbjson schema root-type resolution.
//   d. $REC wide-record dispatch (EXTENDED_TYPE 301..305 and 298) and $PIV (TMXRequest)
//      transport envelope round-trip.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { FlatcRunner } from 'flatc-wasm';
import { closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-threat-matrix-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, {
  cwd,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
  maxBuffer: 256 * 1024 * 1024,
});
const CXX = process.env.CXX || 'c++';
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}${f.required ? '!' : ''}`;
const camel = (s) => s.toLowerCase().replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());

const diffPath = (a, b, at = '') => {
  if (Object.is(a, b)) return null;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return `${at || '.'}: ${String(a)} != ${String(b)}`;
  }
  if (a.constructor?.name !== b.constructor?.name) {
    return `${at || '.'}: ${a.constructor?.name} != ${b.constructor?.name}`;
  }
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
    const d = diffPath(a[k], b[k], `${at}.${k}`);
    if (d) return d;
  }
  return null;
};
const same = (a, b, msg) => {
  const d = diffPath(a, b);
  assert.ok(d === null, `${msg}: ${d}`);
};

const EXPECTED_ORDINALS = {
  COA: 298,
  SLO: 299,
  UST: 300,
  THP: 301,
  TMX: 302,
  DCO: 303,
  RBF: 304,
  RDE: 305,
};

const LIBC_MACROS = new Set(['DOMAIN', 'TIME_UTC', 'BYTE_ORDER', 'MIN', 'MAX', 'BIG_ENDIAN', 'LITTLE_ENDIAN']);

try {
  // ---- a. IDL, ordinals & THEMIS rules.
  const ordinalsDoc = JSON.parse(fs.readFileSync(path.join(schemaRoot, 'REC/RECORDTYPE_ORDINALS.json'), 'utf8'));
  assert.equal(ordinalsDoc.union_capacity, 255);
  assert.equal(ordinalsDoc.member_count, 255);
  assert.equal(ordinalsDoc.frozen_through, 255);
  for (const [code, want] of Object.entries(EXPECTED_ORDINALS)) {
    assert.equal(ordinalsDoc.extended_ordinals[code], want, `${code} must hold wide ordinal ${want}`);
    assert.equal(ordinalsDoc.ordinals[code], undefined, `${code} must not be in frozen union RecordType`);
    assert.deepEqual(
      Object.entries(ordinalsDoc.extended_ordinals).filter(([, v]) => v === want).map(([k]) => k),
      [code],
      `ordinal ${want} must belong solely to ${code}`,
    );
  }

  for (const code of ['THP', 'TMX', 'DCO', 'RBF', 'RDE', 'COA']) {
    const idlPath = path.join(schemaRoot, code, 'main.fbs');
    const rawIdl = fs.readFileSync(idlPath, 'utf8');
    assert.match(rawIdl, new RegExp(`file_identifier "\\$${code}";`), `${code}: file_identifier "$${code}"`);
    assert.match(rawIdl, new RegExp(`root_type ${code};`), `${code}: root_type ${code}`);
    assert.ok(!/=\s*[-+]?nan\b/i.test(rawIdl), `${code}: no = nan default`);

    const model = parseIdl(schemaRoot, code);
    assert.equal(model.root, code, `${code}: parsed root`);
    assert.equal(model.unsupported.size, 0, `${code}: no unsupported struct fields`);
    const enumNames = new Set([...model.enums.keys()].map((n) => n.toLowerCase()));
    for (const [enumName, e] of model.enums) {
      assert.ok(
        !e.members.some((m) => m.name.toUpperCase() === 'MIN' || m.name.toUpperCase() === 'MAX'),
        `${code}.${enumName}: no reserved MIN/MAX enum member`,
      );
    }
    for (const [tableName, t] of model.tables) {
      for (const f of t.fields) {
        assert.ok(!LIBC_MACROS.has(f.name), `${code}.${tableName}.${f.name}: no libc macro collision`);
        if (model.enums.has(f.elem)) {
          assert.notEqual(
            camel(f.name).toLowerCase(),
            f.elem.toLowerCase(),
            `${code}.${tableName}.${f.name}: enum ${f.elem} must not match camelCase(field)`,
          );
          assert.ok(
            !enumNames.has(camel(f.name).toLowerCase()) || f.elem.toLowerCase() !== camel(f.name).toLowerCase(),
            `${code}.${tableName}.${f.name}: enum-vs-field shadow check`,
          );
        }
      }
    }
  }

  // Verify $COA keeps all 15 fields & COAStep inputs-only contract and appends coaKind 4..8.
  const coaModel = parseIdl(schemaRoot, 'COA');
  assert.deepEqual(
    coaModel.tables.get('COAStep').fields.map(fieldSig),
    ['NAME:string=!', 'DURATION_SECONDS:double='],
    '$COA COAStep unchanged',
  );
  assert.deepEqual(
    coaModel.tables.get('COA').fields.map(fieldSig),
    [
      'ID:string=!', 'NAME:string=', 'KIND:coaKind=UNSPECIFIED', 'NORAD_CAT_ID:uint=', 'GROUP_ID:string=',
      'EVENT_STANDARD:string=', 'EVENT_ID:string=', 'EVENT_EPOCH:string=', 'LEAD_SECONDS:double=',
      'RETURN_WITHIN_SECONDS:double=', 'PREPARATION_SECONDS:double=', 'CHECKOUT_SECONDS:double=',
      'DELTA_V_BUDGET_M_S_PER_YEAR:double=', 'STEPS:[COAStep]=', 'PLAN_ID:string=',
    ],
    '$COA preserves all 15 inputs-only fields',
  );
  assert.deepEqual(
    coaModel.enums.get('coaKind').members.map((m) => `${m.name}=${m.value}`),
    [
      'UNSPECIFIED=0', 'MANEUVER=1', 'RIDE_OUT=2', 'RECOVERY=3',
      'RF_COUNTERMEASURE=4', 'GATEWAY_REROUTE=5', 'SENSOR_PROTECTION=6', 'SAFE_MODE=7', 'TRACK_TASKING=8',
    ],
    '$COA coaKind additive values 4..8',
  );

  // Verify $PIV needs zero edits for TMXRequest transport and chunked streaming.
  const pivModel = parseIdl(schemaRoot, 'PIV');
  const inputsField = pivModel.tables.get('PIVRequest').fields.find((f) => f.name === 'INPUTS');
  assert.deepEqual([inputsField.vector, inputsField.elem], [true, 'TAB'], '$PIV PIVRequest.INPUTS is [TAB]');
  assert.ok(pivModel.enums.get('pivStatus').members.some((m) => m.name === 'YIELDED'), '$PIV supports YIELDED streaming');

  // Verify fbjson root types.
  for (const code of ['THP', 'TMX', 'DCO', 'RBF', 'RDE', 'COA']) {
    const fbjson = JSON.parse(fs.readFileSync(path.join(root, `lib/fbjson/${code}/main.fb.schema.json`), 'utf8'));
    assert.equal(fbjson['x-flatbuffer-root-type'], code, `${code} fbjson x-flatbuffer-root-type`);
  }

  // ---- b. JS -> C++ -> Go -> JS wire round-trips.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const js = async (code) => import(pathToFileURL(path.join(root, `lib/js/${code}/main.js`)));
  const [R, THP, TMX, DCO, RBF, RDE, COA, PIV] = await Promise.all(['REC', 'THP', 'TMX', 'DCO', 'RBF', 'RDE', 'COA', 'PIV'].map(js));
  const T = (cls, v) => Object.assign(new cls(), v);

  const pvnStated = (PVNT, pvnSourceKind, pvnLicenseClass, sourceId) => T(PVNT, {
    SOURCE_ID: sourceId,
    SOURCE_KIND: pvnSourceKind.Reference,
    ORIGINATOR: 'DigitalArsenal',
    PROVIDER_ID: 'sdn-e2e-node',
    PRODUCER: 'threat-matrix-schemas-e2e/1.0.0',
    LICENSE_CLASS: pvnLicenseClass.Reproducible,
    LICENSE_ID: 'Apache-2.0',
    LINEAGE: 'e2e-test-lineage',
    SOURCE_URL: 'https://spacedatastandards.org/e2e',
    SOURCE_VERSION: '2026-11-25',
    RETRIEVED_AT: '2026-11-25T00:00:00.000Z',
    SOURCE_SHA256: '0'.repeat(64),
    SOURCE_BYTES: 1024n,
    PRODUCER_SHA256: 'a'.repeat(64),
  });

  const thpStated = T(THP.THPT, {
    THP_ID: 'thp-starlink-ka-jammer-01',
    NAME: 'Default Ka-band Uplink Jammer Threat Lane',
    DESCRIPTION: 'Open baseline RF jammer threat lane referencing $RFB and $SIT.',
    CATEGORY: THP.thpThreatCategory.RF_JAMMER,
    ACCESS_TIER: THP.thpAccessTier.OPEN,
    ACTIVE: true,
    LINKED_SCHEMA: '$RFB',
    LINKED_RECORD_ID: 'rfb-ka-uplink-01',
    LINKED_NORAD_CAT_ID: 44713,
    ADDITIONAL_REFS: [
      T(THP.THPReferenceT, { SCHEMA_FILE_ID: '$SIT', RECORD_ID: 'site-alpha', NORAD_CAT_ID: 0, CID: 'bafkreie2ethp', ROLE: 'JAMMER_SITE' }),
    ],
    PARAMETERS: [
      T(THP.THPParameterT, {
        PARAM_KEY: 'EIRP_DBW',
        VALUE_KIND: THP.thpParamValueKind.SCALAR_DOUBLE,
        NUMERIC_VALUE: 72.5,
        TEXT_VALUE: '',
        BOOL_VALUE: false,
        UNITS: 'dBW',
        PROVENANCE: T(THP.THPProvenanceT, {
          SOURCE_URI: 'https://spacedatastandards.org/lanes/rf-jammer-01',
          PUBLISHED_DATE: '2026-11-25T00:00:00Z',
          CERTAINTY: THP.thpCertaintyLevel.PUBLISHED,
          ACCESS_TIER: THP.thpAccessTier.OPEN,
          RECORD_PROVENANCE: pvnStated(THP.PVNT, THP.pvnSourceKind, THP.pvnLicenseClass, 'thp-param-eirp'),
          NOTES: 'Nominal mainlobe EIRP.',
        }),
      }),
    ],
    PROVENANCE: pvnStated(THP.PVNT, THP.pvnSourceKind, THP.pvnLicenseClass, 'thp-lane-open'),
    CREATED_AT: '2026-11-25T00:00:00.000Z',
    UPDATED_AT: '2026-11-25T00:00:00.000Z',
    SIGNATURE: new Array(64).fill(7),
  });

  const tmxRequestStated = T(TMX.TMXRequestT, {
    REQUEST_ID: 'tmx-req-starlink-7d',
    TARGET_SCOPE: 'STARLINK',
    TARGET_NORAD_CAT_IDS: [44713, 44714],
    GROUP_IDS: ['starlink-shell-1'],
    CATALOG_REVISION: 'cat-20261125T0000Z',
    WINDOW_START: '2026-11-25T00:00:00.000Z',
    WINDOW_END: '2026-12-02T00:00:00.000Z',
    PROPAGATOR: TMX.tmxPropagatorKind.SDN_AP,
    PROPAGATOR_ID: 'propagator/sdn-ap',
    EXECUTION_HOST: TMX.tmxExecutionHostKind.SDN_COMPUTE_NODE,
    PHENOMENOLOGIES_REQUESTED: [
      TMX.tmxPhenomenologyKind.ORBITAL_KINETIC,
      TMX.tmxPhenomenologyKind.RF_EW_GNSS,
      TMX.tmxPhenomenologyKind.SPACE_ENV_RADIATION,
    ],
    THP_IDS: ['thp-starlink-ka-jammer-01'],
    THP_CIDS: ['bafkreie2ethp'],
    SCORING_PROFILE_ID: 'default-v1',
    INCLUDE_COAS: true,
    WHAT_IF_OVERRIDES_JSON: '',
  });

  const tmxStated = T(TMX.TMXT, {
    RUN_ID: 'tmx-run-001',
    CREATED_UTC: '2026-11-25T00:05:00.000Z',
    WINDOW_START: '2026-11-25T00:00:00.000Z',
    WINDOW_END: '2026-12-02T00:00:00.000Z',
    PROPAGATOR: TMX.tmxPropagatorKind.SDN_AP,
    PROPAGATOR_ID: 'propagator/sdn-ap',
    EXECUTION_HOST: TMX.tmxExecutionHostKind.SDN_COMPUTE_NODE,
    SCORING_PROFILE_ID: 'default-v1',
    CHUNK_INDEX: 0,
    IS_FINAL_CHUNK: true,
    REQUEST: tmxRequestStated,
    PHENOMENOLOGY_WEIGHTS: [
      T(TMX.TMXPhenomenologyWeightT, {
        PHENOMENOLOGY: TMX.tmxPhenomenologyKind.RF_EW_GNSS,
        WEIGHT_BPS: 2000,
        CRITICAL_THRESHOLD_BPS: 8000,
        HIGH_THRESHOLD_BPS: 5000,
        WATCH_THRESHOLD_BPS: 2000,
      }),
    ],
    COMPOUND_MULTIPLIERS: [
      T(TMX.TMXCompoundRuleT, {
        RULE_ID: 'rf-plus-rad',
        PHENOMENOLOGIES: [TMX.tmxPhenomenologyKind.RF_EW_GNSS, TMX.tmxPhenomenologyKind.SPACE_ENV_RADIATION],
        BONUS_BPS: 750,
        MULTIPLIER_BPS: 12000,
      }),
    ],
    TARGET_BUCKETS: [
      T(TMX.TMXBucketT, {
        BUCKET_ID: 'starlink-550-53',
        PARENT_BUCKET_ID: 'starlink',
        BUCKET_KIND: TMX.tmxBucketKind.SHELL,
        LABEL: '550 km / 53 deg Shell',
        ASSET_COUNT: 1584,
        NORAD_CAT_IDS: [44713, 44714],
        ALTITUDE_MIN_KM: 540,
        ALTITUDE_MAX_KM: 560,
        INCLINATION_DEG: 53.2,
      }),
    ],
    PHENOMENOLOGIES_RUN: [
      T(TMX.TMXModuleRunT, {
        PHENOMENOLOGY: TMX.tmxPhenomenologyKind.SPACE_ENV_RADIATION,
        MODULE_ID: 'analysis/space-env-threat',
        MODULE_VERSION: '1.0.0',
        WASM_SHA256: 'b'.repeat(64),
        STATUS: TMX.tmxModuleRunStatus.OK,
        WALL_TIME_MS: 42,
        REFUSAL_REASON: '',
      }),
    ],
    CELLS: [
      T(TMX.TMXCellT, {
        BUCKET_ID: 'starlink-550-53',
        PHENOMENOLOGY: TMX.tmxPhenomenologyKind.SPACE_ENV_RADIATION,
        SEVERITY_TIER: TMX.tmxSeverityLevel.HIGH,
        PHENOMENOLOGY_SCORE: 6400,
        EXPOSED_ASSET_COUNT: 48,
        PEAK_SIMULTANEOUS_COUNT: 12,
        EARLIEST_ONSET_UTC: '2026-11-26T04:00:00.000Z',
        TOTAL_EXPOSURE_MIN: 185.5,
        WORST_METRIC_SUMMARY: 'SAA + SEP 42 mSv/h',
        CERTAINTY_FLOOR: TMX.tmxCertaintyLevel.PUBLISHED,
        EVENT_REFS: [
          T(TMX.TMXRecordRefT, {
            SCHEMA_FILE_ID: '$RDE',
            RECORD_ID: 'rde-starlink-44713-001',
            NORAD_CAT_ID: 44713,
            EPOCH: '2026-11-26T04:15:00.000Z',
            METRIC_LABEL: 'PEAK_DOSE_RATE_MSV_H',
            METRIC_VALUE: 42.0,
            METRIC_UNITS: 'mSv/h',
          }),
        ],
      }),
    ],
    COMPOUND_EVENTS: [
      T(TMX.TMXCompoundEventT, {
        COMPOUND_ID: 'cmp-44713-rf-rad',
        BUCKET_ID: 'starlink-550-53',
        NORAD_CAT_ID: 44713,
        SITE_ID: 'site-alpha',
        PHENOMENOLOGIES: [TMX.tmxPhenomenologyKind.RF_EW_GNSS, TMX.tmxPhenomenologyKind.SPACE_ENV_RADIATION],
        MEMBER_EVENT_REFS: [
          T(TMX.TMXRecordRefT, {
            SCHEMA_FILE_ID: '$RFL',
            RECORD_ID: 'rfl-jam-001',
            NORAD_CAT_ID: 44713,
            EPOCH: '2026-11-26T04:15:00.000Z',
            METRIC_LABEL: 'MARGIN_DB',
            METRIC_VALUE: -4.5,
            METRIC_UNITS: 'dB',
          }),
        ],
        OVERLAP_START_UTC: '2026-11-26T04:10:00.000Z',
        OVERLAP_END_UTC: '2026-11-26T04:30:00.000Z',
        COMPOUND_MULTIPLIER_BPS: 12000,
        COMPOUND_BONUS_BPS: 750,
        COMBINED_SCORE: 8430,
        SEVERITY_TIER: TMX.tmxSeverityLevel.CRITICAL,
      }),
    ],
    ROLLUPS: [
      T(TMX.TMXRollupT, {
        BUCKET_ID: 'starlink-550-53',
        WORST_TIER: TMX.tmxSeverityLevel.CRITICAL,
        COMPOSITE_SCORE: 8430,
        BASE_WEIGHTED_SCORE: 6400,
        COMPOUND_BONUS_APPLIED_BPS: 750,
        EVALUATED_COUNT: 7,
        TOTAL_PHENOMENOLOGIES: 7,
        COVERAGE_RATIO: '7/7',
        TOP_THREAT_REFS: [
          T(TMX.TMXRecordRefT, {
            SCHEMA_FILE_ID: '$RDE',
            RECORD_ID: 'rde-starlink-44713-001',
            NORAD_CAT_ID: 44713,
            EPOCH: '2026-11-26T04:15:00.000Z',
            METRIC_LABEL: 'PEAK_DOSE_RATE_MSV_H',
            METRIC_VALUE: 42.0,
            METRIC_UNITS: 'mSv/h',
          }),
        ],
      }),
    ],
  });

  const coaStated = T(COA.COAT, {
    ID: 'coa-rf-hop-44713',
    NAME: 'Frequency Hop & Gateway Reroute',
    KIND: COA.coaKind.RF_COUNTERMEASURE,
    NORAD_CAT_ID: 44713,
    GROUP_ID: '',
    EVENT_STANDARD: '$TMX',
    EVENT_ID: 'cmp-44713-rf-rad',
    EVENT_EPOCH: '2026-11-26T04:10:00.000Z',
    LEAD_SECONDS: 600,
    RETURN_WITHIN_SECONDS: 1800,
    PREPARATION_SECONDS: 60,
    CHECKOUT_SECONDS: 120,
    DELTA_V_BUDGET_M_S_PER_YEAR: 0,
    STEPS: [
      T(COA.COAStepT, { NAME: 'Command frequency hop', DURATION_SECONDS: 30 }),
      T(COA.COAStepT, { NAME: 'Verify BER nominal', DURATION_SECONDS: 90 }),
    ],
    PLAN_ID: '',
  });

  const dcoStated = T(DCO.DCOT, {
    DCO_ID: 'dco-coa-rf-hop-44713',
    COA_ID: 'coa-rf-hop-44713',
    TMX_RUN_ID: 'tmx-run-001',
    CREATED_UTC: '2026-11-25T00:05:05.000Z',
    THREAT_REF: T(DCO.DCOThreatRefT, {
      SCHEMA_FILE_ID: '$TMX',
      RECORD_ID: 'tmx-run-001',
      BUCKET_ID: 'starlink-550-53',
      COMPOUND_ID: 'cmp-44713-rf-rad',
      NORAD_CAT_ID: 44713,
    }),
    ACTION_KIND: DCO.dcoActionKind.RF_FREQ_HOP,
    NORAD_CAT_ID: 44713,
    GROUP_ID: '',
    DELTA_V_MPS: 0.0,
    PROPELLANT_KG: 0.0,
    MISSION_LIFE_DAYS: 0.0,
    OUTAGE_HOURS: 0.02,
    COVERAGE_IMPACT_PCT: 0.5,
    MARGIN_GAIN_DB: 9.2,
    EXPOSURE_REDUCED_MIN: 20.0,
    BASELINE_SCORE: 8430,
    RESIDUAL_SCORE: 2100,
    RESIDUAL_TIER: DCO.dcoSeverityLevel.WATCH,
    CONFLICTS_WITH_COA_IDS: [],
    SECONDARY_THREATS_INTRODUCED: [],
    RECHECKED: true,
    RECHECK_STATUS: DCO.dcoRecheckOutcome.CLEAR,
    RECHECK_NOTES: 'Zero secondary conjunction or coverage conflicts across 7d window.',
    ATTRIBUTIONS: [
      T(DCO.DCOModuleAttributionT, {
        METRIC_NAME: 'MARGIN_GAIN_DB',
        MODULE_ID: 'analysis/coa-synthesizer',
        MODULE_VERSION: '1.0.0',
        WASM_SHA256: 'c'.repeat(64),
      }),
    ],
  });

  const rbfStated = T(RBF.RBFT, {
    RBF_ID: 'rbf-earth-ae9-protons-01',
    BODY_NAME: 'EARTH',
    BODY_NAIF_ID: 399,
    MODEL: RBF.rbfModelKind.AE9_AP9_CLASS,
    MODEL_VERSION: '1.5.0',
    MAG_MODEL_ID: 'IGRF-14',
    REFERENCE_FRAME: 'ITRF',
    SPECIES: RBF.rbfParticleSpecies.PROTON,
    FLUX_TYPE: RBF.rbfFluxKind.OMNIDIRECTIONAL_INTEGRAL,
    UNITS: 'cm^-2 s^-1',
    EPOCH: '2026-11-25T00:00:00.000Z',
    KP: 5.33,
    HAS_KP: true,
    DST_NT: -85.0,
    HAS_DST_NT: true,
    F107: 165.0,
    HAS_F107: true,
    SOLAR_WIND_PRESSURE_NPA: 4.2,
    HAS_SOLAR_WIND_PRESSURE: true,
    QUANTILE_PCT: 95.0,
    L_SHELLS: [1.2, 2.0, 3.0],
    ENERGY_MEV: [10.0, 50.0],
    B_OVER_B0: [1.0, 2.0],
    FLUX_GRID: [1e4, 5e3, 2e3, 8e2, 4e2, 1e2, 50, 20, 10, 5, 2, 1],
    STRUCTURES: [
      T(RBF.RBFStructureFeatureT, {
        KIND: RBF.rbfStructureKind.SLOT_REGION,
        FEATURE_NAME: 'ELECTRON_SLOT_REGION',
        RADIAL_MIN_RB: 2.1,
        RADIAL_MAX_RB: 2.9,
        ATTENUATION_FACTOR: 0.15,
      }),
    ],
    SAA_CONTOURS: [
      T(RBF.RBFSaaContourT, {
        CONTOUR_ID: 'saa-550km-1000',
        ALTITUDE_KM: 550.0,
        FLUX_THRESHOLD: 1000.0,
        FLUX_UNITS: 'cm^-2 s^-1',
        LATITUDES_DEG: [-32.0, -20.0, -18.0, -35.0],
        LONGITUDES_DEG: [-65.0, -50.0, -30.0, -45.0],
        PEAK_FLUX: 4200.0,
        PEAK_LAT_DEG: -26.5,
        PEAK_LON_DEG: -47.0,
      }),
    ],
    SPACE_WEATHER_REFS: ['sws-kp-20261125'],
    PROVENANCE: pvnStated(RBF.PVNT, RBF.pvnSourceKind, RBF.pvnLicenseClass, 'rbf-earth-ae9'),
  });

  const rdeStated = T(RDE.RDET, {
    RDE_ID: 'rde-starlink-44713-001',
    BODY_NAME: 'EARTH',
    BODY_NAIF_ID: 399,
    NORAD_CAT_ID: 44713,
    OBJECT_ID: '2019-074A',
    WINDOW_START: '2026-11-25T00:00:00.000Z',
    WINDOW_END: '2026-12-02T00:00:00.000Z',
    RBF_RECORD_IDS: ['rbf-earth-ae9-protons-01'],
    SPACE_WEATHER_REFS: ['sws-kp-20261125', 'sfe-x24-20261124'],
    SHIELDING: T(RDE.RDEShieldingT, {
      MATERIAL: RDE.rdeShieldMaterial.ALUMINUM,
      MATERIAL_NAME: '6061-T6',
      GEOMETRY: RDE.rdeShieldGeometry.SOLID_SPHERE,
      THICKNESS_MM: 3.0,
      AREAL_DENSITY_G_CM2: 0.81,
    }),
    INSTANT_DOSE_RATE_MSV_H: 0.14,
    ORBIT_AVG_DOSE_RATE_MSV_H: 0.45,
    MISSION_DOSE_MSV: 75.6,
    TID_KRAD_SI: 1.85,
    EFFECT_SEVERITY: RDE.rdeEffectSeverity.WARNING,
    PASS_DOSES: [
      T(RDE.RDEPassDoseT, {
        PASS_ID: 'saa-pass-01',
        START_UTC: '2026-11-26T04:10:00.000Z',
        END_UTC: '2026-11-26T04:24:00.000Z',
        IN_SAA: true,
        IN_BELT_CORE: false,
        PEAK_DOSE_RATE_MSV_H: 42.0,
        INTEGRATED_DOSE_MSV: 6.4,
        PEAK_L_SHELL: 1.35,
      }),
    ],
    SHIELDING_CURVE: [
      T(RDE.RDEShieldCurvePointT, { THICKNESS_MM: 1.0, AREAL_DENSITY_G_CM2: 0.27, DOSE_RATE_MSV_H: 1.2, TID_KRAD_SI: 4.5 }),
      T(RDE.RDEShieldCurvePointT, { THICKNESS_MM: 3.0, AREAL_DENSITY_G_CM2: 0.81, DOSE_RATE_MSV_H: 0.45, TID_KRAD_SI: 1.85 }),
    ],
    ELECTRONICS: T(RDE.RDEElectronicsEffectT, {
      DEVICE_PROFILE_ID: 'commercial-sram-28nm',
      SEE_UPSET_RATE_PER_BIT_DAY: 1.2e-7,
      SEL_PROBABILITY: 0.002,
      SEB_SEGR_RISK: 0.0005,
      TID_KRAD_SI: 1.85,
      TID_MARGIN_PCT: 81.5,
      LET_THRESHOLD_MEV_CM2_MG: 15.0,
    }),
    CREW: T(RDE.RDECrewDoseT, {
      CREW_ID: 'crewed-eval-reference',
      EFFECTIVE_DOSE_MSV: 12.4,
      BLOOD_FORMING_ORGANS_MSV: 10.1,
      EYE_LENS_MSV: 18.2,
      SKIN_MSV: 35.0,
      CUMULATIVE_CAREER_MSV: 112.4,
      CAREER_LIMIT_FRACTION: 0.187,
    }),
    SEP_EFFECTS: [
      T(RDE.RDESepEffectT, {
        SFE_EVENT_ID: 'sfe-x24-20261124',
        NOAA_S_SCALE: 2,
        FLARE_CLASS: 'X2.4',
        SEP_DOSE_MSV: 9.8,
        SOLAR_CELL_DEGRADATION_PCT: 0.4,
        STAR_TRACKER_BLINDING_MIN: 18.0,
        SUMMARY: 'S2 solar radiation storm temporary star-tracker blinding.',
      }),
    ],
    PROVENANCE: pvnStated(RDE.PVNT, RDE.pvnSourceKind, RDE.pvnLicenseClass, 'rde-starlink-44713'),
  });

  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'FlatBuffers C++ headers present');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsthreatmatrix\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');

  const modules = { THP, TMX, DCO, RBF, RDE, COA };
  const stated = { THP: thpStated, TMX: tmxStated, DCO: dcoStated, RBF: rbfStated, RDE: rdeStated, COA: coaStated };
  const encodedStated = {};

  const flatc = await FlatcRunner.init();

  for (const code of Object.keys(modules)) {
    const M = modules[code];
    const model = parseIdl(schemaRoot, code);
    const encode = (o) => {
      const b = new fb.Builder(4096);
      M[code][`finish${code}Buffer`](b, o.pack(b));
      return Buffer.from(b.asUint8Array());
    };
    const decode = (f) => M[code][`getRootAs${code}`](new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();

    const visited = new Set();
    const populated = populate(model, M, code, visited);
    assert.deepEqual([...visited].sort(), closure(model, code).sort(), `${code}: every reachable table populated`);

    const dir = path.join(tmp, `wire-${code}`);
    fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
    const messages = [['populated', populated], ['stated', stated[code]]];
    for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));
    encodedStated[code] = fs.readFileSync(file('stated', 'js'));

    const copyTables = closure(model, code);
    fs.writeFileSync(
      path.join(dir, 'copy.cpp'),
      '#include <cmath>\n#include <ctime>\n#undef DOMAIN\n#undef TIME_UTC\n#undef BYTE_ORDER\n'
        + cppCopySource({ model, root: code, include: `${code}/main_generated.h`, populated: copyTables }),
    );
    run('tar', ['-xzf', path.join(root, `dist/${code}/${code}.cpp.tar.gz`), '-C', path.join(dir, 'cpp')]);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
    run(path.join(dir, 'copy'), messages.flatMap(([n]) => [file(n, 'js'), file(n, 'cpp')]), dir);

    const goDir = path.join(tmp, `go${code}`);
    run('cp', ['-R', path.join(root, 'lib/go', code), goDir]);
    run('chmod', ['-R', 'u+w', goDir]);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goCopySource({ model, root: code, pkg: code, populated: copyTables }));
    fs.mkdirSync(path.join(tmp, `run${code}`));
    fs.writeFileSync(
      path.join(tmp, `run${code}/main.go`),
      `package main\nimport (\n "os"\n p "sdsthreatmatrix/go${code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`,
    );
    run('go', ['run', '-mod=mod', `./run${code}`, ...messages.flatMap(([n]) => [file(n, 'cpp'), file(n, 'go')])]);

    for (const [name, o] of messages) {
      const bytes = fs.readFileSync(file(name, 'js'));
      same(decode(file(name, 'js')), o, `${code} ${name}: JS round-trip`);
      for (const leg of ['cpp', 'go']) {
        same(decode(file(name, leg)), o, `${code} ${name}: ${leg} round-trip`);
        assert.equal(
          Buffer.compare(encode(decode(file(name, leg))), bytes),
          0,
          `${code} ${name}: ${leg} leg re-encodes byte-identical to JS`,
        );
      }
    }

    // ---- c. Flatc JSON <-> binary round-trip with UPPER_SNAKE_CASE keys.
    const schemaInput = {
      entry: `/schema/${code}/main.fbs`,
      files: {
        [`/schema/${code}/main.fbs`]: fs.readFileSync(path.join(schemaRoot, code, 'main.fbs'), 'utf8'),
      },
    };
    if (fs.readFileSync(path.join(schemaRoot, code, 'main.fbs'), 'utf8').includes('../PVN/main.fbs')) {
      schemaInput.files['/schema/PVN/main.fbs'] = fs.readFileSync(path.join(schemaRoot, 'PVN/main.fbs'), 'utf8');
    }
    const bareBytes = encodedStated[code];
    const sizedBytes = new Uint8Array(4 + bareBytes.length);
    new DataView(sizedBytes.buffer).setUint32(0, bareBytes.length, true);
    sizedBytes.set(bareBytes, 4);
    const jsonText = flatc.generateJSON(schemaInput, { path: `/${code}.bin`, data: sizedBytes }, { strictJson: true });
    const parsedJson = JSON.parse(jsonText);
    for (const key of Object.keys(parsedJson)) {
      assert.equal(key, key.toUpperCase(), `${code}: JSON key ${key} preserves IDL UPPER_SNAKE_CASE`);
    }
    const backFromJsonSized = flatc.generateBinary(schemaInput, jsonText);
    const backFromJsonBare = backFromJsonSized.subarray(4);
    assert.ok(M[code][`bufferHasIdentifier`](new fb.ByteBuffer(backFromJsonBare)), `${code}: binary from JSON has $${code} identifier`);
    same(
      M[code][`getRootAs${code}`](new fb.ByteBuffer(backFromJsonBare)).unpack(),
      stated[code],
      `${code}: JSON <-> FlatBuffer binary round-trip matches stated object`,
    );
  }

  // ---- d. $REC wide-record dispatch (301..305 + 298) & $PIV TMXRequest transport.
  const wide = (type, bytes) => T(R.RecordT, {
    value_type: R.RecordType.NONE,
    standard: type,
    EXTENDED_TYPE: R.RecordTypeExtended[type],
    EXTENDED_VALUE: [...bytes],
  });

  // Also test a legacy 1.287.0-style $COA (MANEUVER=1) alongside RF_COUNTERMEASURE=4.
  const coaLegacy = T(COA.COAT, {
    ID: 'coa-legacy-1287',
    NAME: 'Legacy Maneuver',
    KIND: COA.coaKind.MANEUVER,
    NORAD_CAT_ID: 44713,
    EVENT_STANDARD: '$CDM',
    EVENT_EPOCH: '2026-11-26T04:10:00.000Z',
    LEAD_SECONDS: 21600,
    RETURN_WITHIN_SECONDS: 86400,
  });
  const coaLegacyBytes = (() => {
    const b = new fb.Builder(1024);
    COA.COA.finishCOABuffer(b, coaLegacy.pack(b));
    return Buffer.from(b.asUint8Array());
  })();

  const recBuilder = new fb.Builder(8192);
  const recInput = T(R.RECT, {
    version: 'threat-matrix-e2e',
    RECORDS: [
      wide('THP', encodedStated.THP),
      wide('TMX', encodedStated.TMX),
      wide('DCO', encodedStated.DCO),
      wide('RBF', encodedStated.RBF),
      wide('RDE', encodedStated.RDE),
      wide('COA', encodedStated.COA),
      wide('COA', coaLegacyBytes),
    ],
  });
  R.REC.finishRECBuffer(recBuilder, recInput.pack(recBuilder));
  const recBytes = recBuilder.asUint8Array();
  assert.ok(R.REC.bufferHasIdentifier(new fb.ByteBuffer(recBytes)), '$REC identifier present');
  const recRead = R.REC.getRootAsREC(new fb.ByteBuffer(recBytes)).unpack();
  assert.equal(recRead.RECORDS.length, 7);
  const expectedExt = [301, 302, 303, 304, 305, 298, 298];
  const expectedStd = ['THP', 'TMX', 'DCO', 'RBF', 'RDE', 'COA', 'COA'];
  for (let i = 0; i < recRead.RECORDS.length; i++) {
    const rec = recRead.RECORDS[i];
    assert.equal(rec.value_type, R.RecordType.NONE, `record ${i}: union stays NONE`);
    assert.equal(rec.standard, expectedStd[i], `record ${i}: standard`);
    assert.equal(rec.EXTENDED_TYPE, expectedExt[i], `record ${i}: EXTENDED_TYPE`);
    const std = rec.standard;
    const bb = new fb.ByteBuffer(new Uint8Array(rec.EXTENDED_VALUE));
    assert.ok(modules[std][std].bufferHasIdentifier(bb), `record ${i}: $${std} identifier`);
    const unpacked = modules[std][std][`getRootAs${std}`](bb).unpack();
    same(unpacked, i === 6 ? coaLegacy : stated[std], `record ${i}: $${std} wide unpack`);
  }

  // Pack TMX wrapped around TMXRequest inside PIVRequest.INPUTS[0] (TAB) + PAYLOAD_ARENA.
  const reqWrapper = T(TMX.TMXT, {
    RUN_ID: 'tmx-req-envelope-001',
    CREATED_UTC: '2026-11-25T00:00:00.000Z',
    WINDOW_START: tmxRequestStated.WINDOW_START,
    WINDOW_END: tmxRequestStated.WINDOW_END,
    REQUEST: tmxRequestStated,
  });
  const reqBuilder = new fb.Builder(2048);
  TMX.TMX.finishTMXBuffer(reqBuilder, reqWrapper.pack(reqBuilder));
  const reqArena = reqBuilder.asUint8Array();
  const pivEnv = T(PIV.PIVT, {
    REQUEST: T(PIV.PIVRequestT, {
      METHOD_ID: 'threat-matrix.assess',
      INPUTS: [
        T(PIV.TABT, {
          OFFSET: 0,
          SIZE: reqArena.length,
          ALIGNMENT: 8,
          WIRE_FORMAT: PIV.payloadWireFormat.FLATBUFFER,
          TYPE_REF: T(PIV.FlatBufferTypeRefT, {
            SCHEMA_NAME: 'TMX.fbs',
            FILE_IDENTIFIER: '$TMX',
            ROOT_TYPE: 'TMX',
            WIRE_FORMAT: PIV.payloadWireFormat.FLATBUFFER,
          }),
          MUTABILITY: PIV.bufferMutability.IMMUTABLE,
          OWNERSHIP: PIV.bufferOwnership.HOST_OWNED,
          FRAME_ID: 1n,
          PORT_ID: 'request',
        }),
      ],
      PAYLOAD_ARENA: [...reqArena],
      TRACE_ID: 42n,
      OUTPUT_STREAM_CAP: 16,
    }),
  });
  const pivBuilder = new fb.Builder(4096);
  PIV.PIV.finishPIVBuffer(pivBuilder, pivEnv.pack(pivBuilder));
  const pivBytes = pivBuilder.asUint8Array();
  assert.ok(PIV.PIV.bufferHasIdentifier(new fb.ByteBuffer(pivBytes)), '$PIV identifier present');
  const pivBack = PIV.PIV.getRootAsPIV(new fb.ByteBuffer(pivBytes)).unpack();
  const tab = pivBack.REQUEST.INPUTS[0];
  assert.equal(tab.TYPE_REF.FILE_IDENTIFIER, '$TMX');
  const arenaSlice = new Uint8Array(pivBack.REQUEST.PAYLOAD_ARENA.slice(tab.OFFSET, tab.OFFSET + tab.SIZE));
  assert.ok(TMX.TMX.bufferHasIdentifier(new fb.ByteBuffer(arenaSlice)), '$TMX request frame inside $PIV arena');
  same(TMX.TMX.getRootAsTMX(new fb.ByteBuffer(arenaSlice)).unpack().REQUEST, tmxRequestStated, '$PIV TMXRequest round-trip');

  console.log('PASS: $THP(301), $TMX(302), $DCO(303), $RBF(304), $RDE(305), $COA(298 additive 4..8) IDL/ordinals/THEMIS, JS<->C++<->Go wire parity, Flatc JSON<->binary, $REC wide dispatch, and $PIV TMXRequest transport verified.');
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
