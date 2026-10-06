import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { FlatcRunner } from 'flatc-wasm';
import * as flatbuffers from 'flatbuffers';
import * as CQR from '../lib/js/CQR/main.js';
import * as OCM from '../lib/js/OCM/main.js';

const frozen = JSON.parse(readFileSync(new URL('./fixtures/starlink-wire-1.234.0.json', import.meta.url)));
const read = name => readFileSync(new URL(`../schema/${name}/main.fbs`, import.meta.url), 'utf8');
function schema(code, root = code, legacy = false) {
  const files = {};
  function add(file) {
    if (files[file]) return;
    let source = readFileSync(new URL(`..${file}`, import.meta.url), 'utf8');
    if (legacy && file === `/schema/${code}/main.fbs`) {
      for (const [name, { kind, fields }] of Object.entries(frozen[code])) {
        if (kind !== 'table') continue;
        source = source.replace(new RegExp(`table\\s+${name}\\s*\\{[^}]*\\}`),
          `table ${name} { ${fields.join(';')}; }`);
      }
    }
    if (file === `/schema/${code}/main.fbs`) source = source.replace(/root_type\s+\w+;/, `root_type ${root};`);
    files[file] = source;
    for (const [, include] of source.matchAll(/include\s+"([^"]+)";/g)) add(path.posix.resolve(path.posix.dirname(file), include));
  }
  add(`/schema/${code}/main.fbs`);
  return { entry: `/schema/${code}/main.fbs`, files };
}
const epoch = { TIME_SYSTEM: 'UTC', EPOCH_FORMAT: 'JULIAN_DATE', JULIAN_DATE: 2461320.5 };
let flatc;
function encode(s, value) { return flatc.generateBinary(s, JSON.stringify(value), { unknownJson: false, strictJson: true }); }
function json(s, bytes) {
  // flatc spells absent NaN defaults as bare nan even with strictJson.
  // Map only those nonfinite default tokens to JSON null for the projection.
  const text = flatc.generateJSON(s, { path: '/record.bin', data: bytes }, { strictJson: true, defaultsJson: true });
  return JSON.parse(text.replace(/(:\s*)nan(?=\s*[,}])/g, '$1null'));
}
function generated(code, root, bytes) {
  return ({ CQR, OCM })[code][root][`getSizePrefixedRootAs${root}`](new flatbuffers.ByteBuffer(bytes)).unpack();
}
function assertSubset(actual, expected) {
  if (expected && typeof expected === 'object') {
    if (Array.isArray(expected)) assert.equal(actual.length, expected.length);
    for (const [key, value] of Object.entries(expected)) assertSubset(actual[key], value);
  } else assert.deepEqual(actual, expected);
}
function roundTrip(code, root, value) {
  const s = schema(code, root);
  const bytes = encode(s, value);
  const decoded = generated(code, root, bytes);
  const builder = new flatbuffers.Builder(1024);
  builder.finish(decoded.pack(builder), `$${code}`, true);
  const back = json(s, builder.asUint8Array());
  assertSubset(back, value);
  return decoded;
}

describe('Starlink CQR volumes and OCM time histories', function () {
  this.timeout(30000);
  before(async () => { flatc = await FlatcRunner.init(); });

  it('preserves every 1.234.0 CQR/OCM table slot, field type, default and enum ordinal', () => {
    for (const code of ['CQR', 'OCM']) {
      const source = read(code).replace(/\/\/[^\n]*/g, '');
      for (const [name, { kind, fields }] of Object.entries(frozen[code])) {
        const body = source.match(new RegExp(`${kind}\\s+${name}\\s*(?::[^\\{]+)?\\{([^}]+)\\}`))[1];
        const actual = body.split(kind === 'table' ? ';' : ',').filter(f => f.trim()).map(f => f.replace(/\s+/g, ''));
        assert.deepEqual(actual.slice(0, fields.length), fields, `${code}.${name}`);
      }
    }
  });

  it('reads legacy buffers as spheres, unspecified maneuver columns and uniform state epochs', () => {
    const controls = generated('CQR', 'CQRScreeningControls', encode(schema('CQR', 'CQRScreeningControls', true), { START_EPOCH: epoch }));
    assert.equal(controls.THRESHOLD_M, 5000);
    assert.equal(controls.SCREENING, CQR.cqrVolumeGeometry.SPHERICAL);
    assert.equal(controls.VOLUME_CENTER, CQR.cqrVolumeAnchor.PRIMARY);
    assert.deepEqual([controls.RADIAL_M, controls.IN_TRACK_M, controls.CROSS_TRACK_M], [0, 0, 0]);
    const event = generated('CQR', 'CQREvent', encode(schema('CQR', 'CQREvent', true), { PRIMARY_ID: 'A', SECONDARY_ID: 'B', TCA: epoch }));
    assert.equal(event.ADMITTED_BY, CQR.cqrVolumeAnchor.UNSPECIFIED);
    assert.equal(event.SCREENING, CQR.cqrVolumeGeometry.SPHERICAL);
    const old = { METADATA: { START_TIME: '2026-10-06T00:00:00', TIME_SYSTEM: 'UTC' }, STATE_STEP_SIZE: 60, STATE_DATA: Array(12).fill(1), MANEUVER_DATA: [{ DATA: ['legacy line'], MAN_UNITS: ['s'] }] };
    const ocm = generated('OCM', 'OCM', encode(schema('OCM', 'OCM', true), old));
    assert.deepEqual(ocm.STATE_EPOCHS, []);
    assert.equal(ocm.STATE_STEP_SIZE, 60);
    assert.deepEqual(ocm.MANEUVER_DATA[0].MAN_COMPOSITION, []);
    assert.equal(ocm.MANEUVER_DATA[0].DC_TYPE, null);
    for (const field of ['DC_TIME_PULSE_DURATION', 'DC_TIME_PULSE_PERIOD', 'DC_PA_START_ANGLE', 'DC_PA_STOP_ANGLE']) assert.ok(Number.isNaN(ocm.MANEUVER_DATA[0][field]), field);
    assert.equal(ocm.MANEUVER_DATA[0].HAS_DC_MIN_CYCLES, false);
    assert.equal(ocm.MANEUVER_DATA[0].HAS_DC_MAX_CYCLES, false);
    assert.deepEqual(ocm.MANEUVER_DATA[0].DATA, ['legacy line']);
  });

  it('round-trips sphere, RTN box and ellipsoid controls and each admission direction through JSON and generated bindings', () => {
    for (const SCREENING of ['SPHERICAL', 'BOX', 'ELLIPSOIDAL']) {
      for (const VOLUME_CENTER of ['PRIMARY', 'SECONDARY', 'BOTH']) {
        // Include nondefault sphere radius; flatc omits default enum values in JSON.
        const value = { START_EPOCH: epoch, THRESHOLD_M: 6000, RADIAL_M: 2000, IN_TRACK_M: 44000, CROSS_TRACK_M: 51000 };
        if (SCREENING !== 'SPHERICAL') value.SCREENING = SCREENING;
        if (VOLUME_CENTER !== 'PRIMARY') value.VOLUME_CENTER = VOLUME_CENTER;
        const decoded = roundTrip('CQR', 'CQRScreeningControls', value);
        assert.equal(decoded.SCREENING, CQR.cqrVolumeGeometry[SCREENING]);
        assert.equal(decoded.VOLUME_CENTER, CQR.cqrVolumeAnchor[VOLUME_CENTER]);
        roundTrip('CQR', 'CQREvent', { PRIMARY_ID: 'A', SECONDARY_ID: 'B', TCA: epoch, ...(SCREENING === 'SPHERICAL' ? {} : { SCREENING }), ADMITTED_BY: VOLUME_CENTER, RELATIVE_POSITION_RTN: { X: 1000, Y: 30000, Z: 40000 } });
      }
    }
  });

  it('round-trips all Table 6-7 additions, explicit zero optionals, Starlink columns and irregular epochs', () => {
    const maneuver = {
      MAN_BASIS: 'PLANNED', MAN_REF_FRAME: 'NTW_ROTATING', MAN_DEVICE_ID: 'ALL',
      MAN_COMPOSITION: ['TIME_ABSOLUTE', 'MAN_DURA', 'ACC_X', 'ACC_Y', 'ACC_Z'],
      MAN_UNITS: ['s', 'km/s**2', 'km/s**2', 'km/s**2'],
      DATA: ['2026-10-06T00:00:00 30 0.000001 0 0'],
      MAN_NEXT_ID: 'next', MAN_BASIS_ID: 'od-1', MAN_PREV_EPOCH: '-60.5', MAN_NEXT_EPOCH: '2026-10-07T00:00:00',
      MAN_PRED_SOURCE: 'traj-1', GRAV_ASSIST_NAME: 'EARTH', DC_TYPE: 'TIME_AND_ANGLE',
      DC_WIN_OPEN: '0', DC_WIN_CLOSE: '100', DC_MIN_CYCLES: 0, DC_MAX_CYCLES: 5, HAS_DC_MIN_CYCLES: true, HAS_DC_MAX_CYCLES: true,
      DC_EXEC_START: '0', DC_EXEC_STOP: '100', DC_REF_TIME: '0', DC_TIME_PULSE_DURATION: 5, DC_TIME_PULSE_PERIOD: 10,
      DC_REF_DIR: [1, 0, 0], DC_BODY_FRAME: 'SC_BODY_1', DC_BODY_TRIGGER: [0, 1, 0], DC_PA_START_ANGLE: 0, DC_PA_STOP_ANGLE: 90,
    };
    roundTrip('OCM', 'OCM', {
      METADATA: { TIME_SYSTEM: 'UTC', START_TIME: '2026-10-06T00:00:00', EPOCH_TZERO: '2026-10-06T00:00:00' },
      STATE_STEP_SIZE: 60, STATE_DATA: Array(18).fill(1),
      STATE_EPOCHS: ['2026-10-06T00:00:00', '2026-10-06T00:00:17.5', '2026-10-06T00:01:41'], MANEUVER_DATA: [maneuver],
    });
    roundTrip('OCM', 'OCM', { MANEUVER_DATA: [{ MAN_COMPOSITION: ['TIME_RELATIVE', 'MAN_DURA', 'ACC_X', 'ACC_Y', 'ACC_Z'], DATA: ['17.5 30 0.000001 0 0'], DC_TYPE: 'CONTINUOUS' }] });
  });
});
