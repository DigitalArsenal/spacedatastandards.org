#!/usr/bin/env node
// One E2E for the $SNR sensor definition (1.278.0).
//   a. the IDL: SensorType keeps its 16 members of 1.277.0 and appends 13 kinds and UNSPECIFIED (29), TYPE defaults to
//      UNSPECIFIED; SNR.FIELD_OF_VIEW is the SCVSensorShapeContract that SCVSensor.SHAPE_CONTRACT is (one shape table, no
//      second shape type); SCVSensorShapeContract keeps its 16 fields and gains AZ_EL_MASK last; scvSensorShapeKind is
//      unchanged; oppDeterminationMethod keeps 7 members and appends USER_DEFINED; no field or enum name overlap;
//   b. four records built with the generated TS/JS bindings and read back: (1) a UHF phased-array early-warning radar on
//      a $SIT site, (2) an X-band SAR payload on a satellite, (3) a 3-band multispectral imager, (4) a user-defined
//      sensor; every set field round-trips (accessors and unpack), every unset field reads absent, bands are in Hz.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseIdl } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
const B = await import(pathToFileURL(path.join(root, 'lib/js/SNR/main.js')));
const C = 299792458;

// ---- a. The IDL.
const snr = parseIdl(schemaRoot, 'SNR');
const scv = parseIdl(schemaRoot, 'SCV');
const members = (m, e) => m.enums.get(e).members.map((x) => `${x.name}=${x.value}`);
const SENSOR_TYPE_0 = ['RADAR_PULSE', 'RADAR_DOPPLER', 'RADAR_CW', 'RADAR_AESA', 'RADAR_PESA', 'IR_SEARCH', 'IR_IMAGING', 'EO_TV', 'EO_LLLTV', 'LASER_DESIGNATOR', 'LASER_RANGEFINDER', 'RWR', 'MAW', 'SONAR_ACTIVE', 'SONAR_PASSIVE', 'ACOUSTIC'].map((n, i) => `${n}=${i}`);
assert.deepEqual(members(snr, 'SensorType').slice(0, 16), SENSOR_TYPE_0, 'SensorType: the 1.277.0 members are untouched');
assert.deepEqual(members(snr, 'SensorType').slice(16), ['OPTICAL_TELESCOPE', 'MULTISPECTRAL_IMAGER', 'HYPERSPECTRAL_IMAGER', 'SAR', 'ALTIMETER', 'SCATTEROMETER', 'RADIOMETER', 'LIDAR', 'PASSIVE_RF_ESM', 'SIGINT', 'COMMS_ANTENNA', 'TT_AND_C_ANTENNA', 'PHASED_ARRAY_EARLY_WARNING', 'UNSPECIFIED'].map((n, i) => `${n}=${16 + i}`), 'SensorType: appended, in order');
assert.equal(snr.tables.get('SNR').fields.find((f) => f.name === 'TYPE').def, 'UNSPECIFIED', 'TYPE defaults to UNSPECIFIED');
assert.equal(snr.tables.get('SNR').fields.find((f) => f.name === 'FIELD_OF_VIEW').elem, 'SCVSensorShapeContract');
assert.equal(scv.tables.get('SCVSensor').fields.find((f) => f.name === 'SHAPE_CONTRACT').elem, 'SCVSensorShapeContract');
assert.deepEqual([...snr.tables.keys()].filter((t) => /Shape|Fov|FieldOfView/i.test(t) && t !== 'SCVSensorShapeContract'), [], 'no second shape type');
const shape = scv.tables.get('SCVSensorShapeContract').fields.map((f) => f.name);
assert.equal(shape.length, 17, 'SCVSensorShapeContract: 16 fields and one added');
assert.equal(shape[16], 'AZ_EL_MASK', 'AZ_EL_MASK is last');
assert.equal(scv.tables.get('SCVAzElMaskPoint').fields.map((f) => f.name).join(), 'AZIMUTH_DEG,MIN_ELEVATION_DEG');
assert.deepEqual(members(scv, 'scvSensorShapeKind'), ['CONIC=0', 'RECTANGULAR=1', 'CUSTOM_POLYGON=2', 'SAR_ANNULAR_SECTOR=3'], 'scvSensorShapeKind is unchanged');
assert.deepEqual(members(snr, 'oppDeterminationMethod').slice(5), ['MODEL_DERIVED=5', 'INFERRED_FROM_FAMILY=6', 'USER_DEFINED=7'], 'USER_DEFINED appended');
const camel = (s) => s.toLowerCase().replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
const enumNames = new Set([...snr.enums.keys()].map((n) => n.toLowerCase()));
for (const [t, tbl] of snr.tables) for (const f of tbl.fields) if (t.startsWith('SNR')) assert.ok(!enumNames.has(camel(f.name).toLowerCase()), `${t}.${f.name} shares a name with an enum`);
for (const e of ['SensorType', 'snrEmissionMode', 'snrBandDirection', 'snrMountingFrame', 'snrPointingMode', 'snrAntennaPattern']) assert.ok(!members(snr, e).some((m) => /^(MIN|MAX)=/.test(m)), `${e}: no MIN/MAX member`);

// ---- b. Four records through the generated bindings.
const T = (cls, v) => Object.assign(new cls(), v);
const prov = (v) => T(B.OPPProvenanceT, { METHOD: B.oppDeterminationMethod.OPERATOR_STATED, ...v });
const hz = (um) => C / (um * 1e-6);
const band = (NAME, DESIGNATION, lowUm, highUm) => T(B.SNRSpectralBandT, { NAME, DESIGNATION, FREQ_LOW_HZ: hz(highUm), FREQ_HIGH_HZ: hz(lowUm), DIRECTION: B.snrBandDirection.RECEIVE });

const early = T(B.SNRT, {
  SENSOR_ID: 'e2e-ewr-uhf-1', NAME: 'UHF phased-array early-warning radar', SITE_ID: 'e2e-site-001', ENTITY_ID: 'e2e/ground/ewr-1',
  TYPE: B.SensorType.PHASED_ARRAY_EARLY_WARNING, EMISSION: B.snrEmissionMode.ACTIVE,
  SPECTRAL_BANDS: [T(B.SNRSpectralBandT, { NAME: 'UHF', DESIGNATION: 'UHF', FREQ_LOW_HZ: 420e6, FREQ_HIGH_HZ: 450e6, DIRECTION: B.snrBandDirection.TRANSCEIVE })],
  FIELD_OF_VIEW: T(B.SCVSensorShapeContractT, {
    SHAPE_KIND: B.scvSensorShapeKind.CONIC, OUTER_HALF_ANGLE_DEG: 60, MIN_RANGE_M: 500e3, MAX_RANGE_M: 5555e3,
    AZ_EL_MASK: [T(B.SCVAzElMaskPointT, { AZIMUTH_DEG: 0, MIN_ELEVATION_DEG: 3 }), T(B.SCVAzElMaskPointT, { AZIMUTH_DEG: 120, MIN_ELEVATION_DEG: 0 }), T(B.SCVAzElMaskPointT, { AZIMUTH_DEG: 240, MIN_ELEVATION_DEG: 7.5 })],
  }),
  FIELD_OF_VIEW_PROVENANCE: prov({ SOURCE: 'e2e fixture' }),
  MOUNTING: T(B.SNRMountingT, { FRAME: B.snrMountingFrame.LOCAL_ENU, BORESIGHT_AZIMUTH_DEG: 0, BORESIGHT_ELEVATION_DEG: 90, ROLL_DEG: 0, POINTING: B.snrPointingMode.FIXED, ELEVATION_LIMIT_MIN_DEG: 3, ELEVATION_LIMIT_MAX_DEG: 85 }),
  RF: T(B.SNRRfParametersT, { ANTENNA_PATTERN: B.snrAntennaPattern.PENCIL, PEAK_POWER_W: 580e3, ANTENNA_GAIN_DBI: 0, BEAMWIDTH_AZIMUTH_DEG: 2.2, BEAMWIDTH_ELEVATION_DEG: 2.2, BANDWIDTH_HZ: 5e6, POLARIZATION: B.rfPolarization.LINEAR_H, PRF_HZ: 200, PULSE_WIDTH_S: 16e-3 }),
  PROVENANCE: prov({ SOURCE: 'e2e fixture', RETRIEVED_AT: '2026-11-05T00:00:00.000Z', LICENSE: 'CC0-1.0', METHOD: B.oppDeterminationMethod.OPERATOR_STATED }),
});
const sar = T(B.SNRT, {
  SENSOR_ID: 'e2e-sar-x-1', NAME: 'X-band SAR payload', NORAD_CAT_ID: 25544, OBJECT_ID: '1998-067A',
  TYPE: B.SensorType.SAR, EMISSION: B.snrEmissionMode.ACTIVE,
  SPECTRAL_BANDS: [T(B.SNRSpectralBandT, { NAME: 'X-band', DESIGNATION: 'X', FREQ_LOW_HZ: 9.3e9, FREQ_HIGH_HZ: 9.9e9, DIRECTION: B.snrBandDirection.TRANSCEIVE })],
  FIELD_OF_VIEW: T(B.SCVSensorShapeContractT, { SHAPE_KIND: B.scvSensorShapeKind.SAR_ANNULAR_SECTOR, INNER_LOOK_ANGLE_DEG: 20, OUTER_LOOK_ANGLE_DEG: 45, MIN_CLOCK_ANGLE_DEG: 80, MAX_CLOCK_ANGLE_DEG: 100, SAR_SAMPLING_DENSITY: 2 }),
  MOUNTING: T(B.SNRMountingT, { FRAME: B.snrMountingFrame.LVLH, BORESIGHT_AZIMUTH_DEG: 90, BORESIGHT_ELEVATION_DEG: -35, ROLL_DEG: 0, POINTING: B.snrPointingMode.NADIR }),
  RF: T(B.SNRRfParametersT, { ANTENNA_PATTERN: B.snrAntennaPattern.GAUSSIAN, PEAK_POWER_W: 5000, ANTENNA_GAIN_DBI: 40.5, BANDWIDTH_HZ: 300e6, POLARIZATION: B.rfPolarization.DUAL, PRF_HZ: 4500, PULSE_WIDTH_S: 40e-6 }),
  PROVENANCE: prov({ SOURCE: 'e2e fixture', SOURCE_URL: 'https://example.invalid/sar', METHOD: B.oppDeterminationMethod.ESTIMATED }),
});
const msi = T(B.SNRT, {
  SENSOR_ID: 'e2e-msi-3', NAME: '3-band multispectral imager', NORAD_CAT_ID: 39084,
  TYPE: B.SensorType.MULTISPECTRAL_IMAGER, EMISSION: B.snrEmissionMode.PASSIVE,
  SPECTRAL_BANDS: [band('Green', 'G', 0.53, 0.59), band('Red', 'R', 0.64, 0.67), band('NIR', 'NIR', 0.85, 0.88)],
  FIELD_OF_VIEW: T(B.SCVSensorShapeContractT, { SHAPE_KIND: B.scvSensorShapeKind.RECTANGULAR, X_HALF_ANGLE_DEG: 3.8, Y_HALF_ANGLE_DEG: 0.01, MAX_RANGE_M: 705e3 }),
  MOUNTING: T(B.SNRMountingT, { FRAME: B.snrMountingFrame.PLATFORM_BODY, POINTING: B.snrPointingMode.NADIR }),
  OPTICAL: T(B.SNROpticalParametersT, { APERTURE_M: 0.135, FOCAL_LENGTH_M: 0.9, IFOV_RAD: 33e-6, GSD_M: 30, LIMITING_MAGNITUDE: -1.5, DETECTOR: 'CCD' }),
  PROVENANCE: prov({ SOURCE: 'e2e fixture', METHOD: B.oppDeterminationMethod.MEASURED }),
});
const user = T(B.SNRT, {
  SENSOR_ID: 'e2e-user-1', NAME: 'My sensor', TYPE: B.SensorType.RADAR_PULSE,
  PROVENANCE: T(B.OPPProvenanceT, { SOURCE: 'user', METHOD: B.oppDeterminationMethod.USER_DEFINED }),
});

const encode = (o) => { const b = new fb.Builder(1024); B.SNR.finishSNRBuffer(b, o.pack(b)); return b.asUint8Array(); };
const decode = (bytes) => B.SNR.getRootAsSNR(new fb.ByteBuffer(bytes));
const absent = (v) => v === 0 || Number.isNaN(v);
const back = {};
for (const [name, o] of Object.entries({ early, sar, msi, user })) {
  const bytes = encode(o);
  assert.ok(B.SNR.bufferHasIdentifier(new fb.ByteBuffer(bytes)), `${name}: file identifier $SNR`);
  const r = decode(bytes);
  assert.deepStrictEqual(r.unpack(), o, `${name}: every set field round-trips`);
  back[name] = r;
}

// (1) early-warning radar on a site
const e = back.early;
assert.equal(e.SITE_ID(), 'e2e-site-001'); assert.equal(e.NORAD_CAT_ID(), 0); assert.equal(e.OBJECT_ID(), null);
assert.equal(e.TYPE(), B.SensorType.PHASED_ARRAY_EARLY_WARNING); assert.equal(e.spectralBandsLength(), 1);
assert.equal(e.SPECTRAL_BANDS(0).FREQ_LOW_HZ(), 420e6); assert.equal(e.SPECTRAL_BANDS(0).FREQ_HIGH_HZ(), 450e6);
assert.equal(e.FIELD_OF_VIEW().azElMaskLength(), 3); assert.equal(e.FIELD_OF_VIEW().AZ_EL_MASK(2).MIN_ELEVATION_DEG(), 7.5);
assert.equal(e.MOUNTING().ELEVATION_LIMIT_MIN_DEG(), 3); assert.ok(Number.isNaN(e.MOUNTING().AZIMUTH_LIMIT_MIN_DEG()), 'unset signed angle is NaN');
assert.equal(e.RF().ANTENNA_GAIN_DBI(), 0, 'an explicit 0 dBi is a value, not absent');
assert.equal(e.OPTICAL(), null, 'a radar has no optical section');
assert.equal(e.PROVENANCE().LICENSE(), 'CC0-1.0');
// (2) SAR on a satellite
const s = back.sar;
assert.equal(s.NORAD_CAT_ID(), 25544); assert.equal(s.SITE_ID(), null); assert.equal(s.TYPE(), B.SensorType.SAR);
assert.equal(s.SPECTRAL_BANDS(0).FREQ_LOW_HZ(), 9.3e9); assert.equal(s.FIELD_OF_VIEW().SHAPE_KIND(), B.scvSensorShapeKind.SAR_ANNULAR_SECTOR);
assert.equal(s.FIELD_OF_VIEW().azElMaskLength(), 0); assert.equal(s.FIELD_OF_VIEW_PROVENANCE(), null);
assert.equal(s.RF().PRF_HZ(), 4500); assert.equal(s.RF().BEAMWIDTH_AZIMUTH_DEG(), 0, 'unset positive quantity reads 0');
assert.equal(s.MOUNTING().POINTING(), B.snrPointingMode.NADIR);
// (3) multispectral imager: bands in Hz, each low < high, ordered green > red > NIR in frequency
const m = back.msi;
assert.equal(m.spectralBandsLength(), 3);
const mb = [0, 1, 2].map((i) => m.SPECTRAL_BANDS(i));
for (const x of mb) { assert.ok(x.FREQ_LOW_HZ() > 1e14 && x.FREQ_HIGH_HZ() < 1e15 && x.FREQ_LOW_HZ() < x.FREQ_HIGH_HZ(), `${x.NAME()} is in Hz`); }
assert.ok(mb[0].FREQ_LOW_HZ() > mb[1].FREQ_HIGH_HZ() && mb[1].FREQ_LOW_HZ() > mb[2].FREQ_HIGH_HZ(), 'green above red above NIR');
assert.ok(Math.abs(C / mb[0].FREQ_HIGH_HZ() - 0.53e-6) < 1e-12, 'a consumer converts Hz to wavelength');
assert.equal(m.OPTICAL().APERTURE_M(), 0.135); assert.equal(m.OPTICAL().LIMITING_MAGNITUDE(), -1.5); assert.equal(m.RF(), null);
assert.equal(m.EMISSION(), B.snrEmissionMode.PASSIVE);
// (4) user-defined sensor: everything but identity and USER_DEFINED provenance is absent
const u = back.user;
assert.equal(u.SENSOR_ID(), 'e2e-user-1'); assert.equal(u.PROVENANCE().METHOD(), B.oppDeterminationMethod.USER_DEFINED);
assert.equal(u.PROVENANCE().RETRIEVED_AT(), null); assert.equal(u.PROVENANCE().LICENSE(), null);
assert.equal(u.NORAD_CAT_ID(), 0); assert.equal(u.OBJECT_ID(), null); assert.equal(u.SITE_ID(), null); assert.equal(u.ENTITY_ID(), null);
assert.equal(u.spectralBandsLength(), 0);
for (const k of ['FIELD_OF_VIEW', 'FIELD_OF_VIEW_PROVENANCE', 'MOUNTING', 'RF', 'OPTICAL']) assert.equal(u[k](), null, `user sensor: ${k} absent`);
assert.equal(u.EMISSION(), B.snrEmissionMode.UNSPECIFIED);
const unsetType = decode(encode(T(B.SNRT, { SENSOR_ID: 'x' })));
assert.equal(unsetType.TYPE(), B.SensorType.UNSPECIFIED, 'an unset TYPE is UNSPECIFIED, not RADAR_PULSE');
assert.ok(absent(unsetType.NORAD_CAT_ID()));

console.log('PASS sensor-definition: SNR 4 records (UHF early-warning on $SIT, X-band SAR, 3-band multispectral, user-defined) round-trip through the generated bindings; bands in Hz; unset absent; one shared shape table SCVSensorShapeContract');
