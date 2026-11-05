import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import * as OCM from '../lib/js/OCM/main.js';
import * as PROD from '../lib/js/PROD/main.js';
import { elsetTwoLine, elsetElementFile, twoLineChecksum, ELSET_REFUSAL_CODES } from '../lib/js/PROD/elset.js';
import { stmEphemeris, stmEphemerisText, STM_EPHEMERIS_REFUSAL_CODES } from '../lib/js/PROD/stmephemeris.js';
import { EPOCH, GM, PARAMETERS, STEP_SECONDS, ltm, ocmWith } from './fixtures/prod/records.mjs';

const expected = (name) => readFileSync(new URL(`./fixtures/prod/expected/${name}`, import.meta.url), 'utf8');
const must = (result) => { assert.ok(result.ok, result.ok ? '' : `${result.refusal.code}: ${result.refusal.message}`); return result.value; };
const code = (result) => { assert.ok(!result.ok, 'expected a refusal'); assert.equal('value' in result, false, 'a refusal carries no output'); return result.refusal.code; };
const T = (cls, v) => Object.assign(new cls(), v);
/** The text of a token's field in a line, by the token table's start column and width. */
const field = (line, product, token) => { const t = PROD.tokenOf(product, token); return line.slice(t.startColumn - 1, PROD.endColumn(t)); };
const lines = (text) => { assert.ok(text.endsWith('\n'), 'every line ends with a line feed'); return text.slice(0, -1).split('\n'); };

// ---- synthetic Records ------------------------------------------------------------------------------------

const SET_EPOCH = '2026-11-01T06:31:12.345Z';
/** A Record carrying a mean element set of `theory` at EPOCH_TZERO (and the fixture's states). */
function elementRecord(theory = OCM.meanElementSource.SGP4, overrides = {}, edit = () => {}) {
  const ocm = ocmWith([]);
  ocm.METADATA.EPOCH_TZERO = SET_EPOCH; ocm.METADATA.START_TIME = SET_EPOCH;
  ocm.MEAN_ELEMENTS = T(OCM.OCMMeanElementsT, {
    MEAN_ELEMENT_THEORY: theory, EPOCH: SET_EPOCH, MEAN_MOTION: 15.49876543, ECCENTRICITY: 0.0004567, INCLINATION: 51.6412,
    RA_OF_ASC_NODE: 123.4567, ARG_OF_PERICENTER: 89.0123, MEAN_ANOMALY: 270.9876, BSTAR: 2.3456e-4, MEAN_MOTION_DOT: 1.234e-5, MEAN_MOTION_DDOT: 0,
    ...overrides,
  });
  edit(ocm);
  return must(PROD.fromOcm(ocm));
}

/** A chosen state transition matrix at grid epoch e over n rows: state block, parameter columns, identity parameter rows. */
function phi(e, n) {
  const t = e * STEP_SECONDS;
  return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => {
    if (i >= 6) return i === j ? 1 : 0;
    if (j >= 6) return (1e-3 * t * (i + 1)) / (j - 4);
    if (i === j) return 1 + (1e-4 * t * ((i % 3) + 1)) / 60;
    if (i < 3 && j === i + 3) return t;
    if (i >= 3 && j === i - 3) return -1.2e-6 * t;
    return 1e-6 * t * (((i + 2 * j) % 5) - 2);
  }));
}
/** A Record whose per-epoch covariance is Phi(t) P0 Phi(t)^T and whose sensitivities are those Phi(t). */
function sensitivityRecord(names, { epochs = 3, edit = () => {}, stm = phi } = {}) {
  const n = 6 + names.length;
  const ocm = ocmWith(names, { epochs });
  const p0 = must(PROD.ltmToFull(ltm(n, 0), n));
  const phis = Array.from({ length: epochs }, (_, e) => phi(e, n));
  ocm.COVARIANCE_DATA = phis.map((f) => PROD.fullToLtm(PROD.transformCovariance(p0, f), n)).flat();
  edit(ocm);
  const matrices = Array.from({ length: epochs }, (_, e) => stm(e, n)).map((f) => T(OCM.PRWStateMatrixT, { DIMENSION: f.length, VALUES: f.flat() }));
  return must(PROD.fromOcm(ocm, null, matrices));
}
const B_AND_AGOM = ['DRAG_AREA_OVER_MASS', 'SRP_AREA_OVER_MASS'];

// ---- P7, two-line form --------------------------------------------------------------------------------------

describe('PROD P7 element set: two-line form', () => {
  const record = elementRecord();

  it('writes two lines of the token table\'s length, byte-identical to the expected file and on every run', () => {
    const text = must(elsetTwoLine(record));
    assert.equal(text, expected('p7-tle.txt'));
    assert.equal(must(elsetTwoLine(record)), text, 'byte-identical on a repeated run');
    const [one, two, ...rest] = lines(text);
    assert.equal(rest.length, 0, 'two lines');
    assert.equal(one.length, PROD.TLE_LINE_LENGTH);
    assert.equal(two.length, PROD.TLE_LINE_LENGTH);
    assert.equal(PROD.endColumn(PROD.tokenOf('P7', 'TLE1_CHECKSUM')), PROD.TLE_LINE_LENGTH);
  });

  it('carries every field at its token column in the SGP4 conventions', () => {
    const [one, two] = lines(must(elsetTwoLine(record)));
    const f1 = (t) => field(one, 'P7', t), f2 = (t) => field(two, 'P7', t);
    assert.deepEqual(
      PROD.P7_LINES.TLE1.map(f1),
      ['1', '25544', 'U', '98067A  ', '26', '305.27167066', ' .00001234', ' 00000+0', ' 23456-3', '0', '    ', f1('TLE1_CHECKSUM')],
    );
    assert.deepEqual(
      PROD.P7_LINES.TLE2.map(f2),
      ['2', '25544', ' 51.6412', '123.4567', '0004567', ' 89.0123', '270.9876', '15.49876543', '48170', f2('TLE2_CHECKSUM')],
    );
    // Decoded back: the epoch day is 06:31:12.345 of day 305 of 2026 on the 1e-8 day grid; B* 0.23456e-3.
    assert.equal(Number(f1('TLE1_EPOCH_DAY')), 305 + Math.round(((6 * 3600 + 31 * 60 + 12.345) / 86400) * 1e8) / 1e8);
    assert.equal(Number(`0.${f1('TLE1_BSTAR').slice(1, 6)}e${f1('TLE1_BSTAR').slice(6)}`), 2.3456e-4);
    assert.equal(Number(f2('TLE2_MEAN_MOTION')), 15.49876543, 'mean motion in rev/day');
    assert.equal(Number(`0.${f2('TLE2_ECCENTRICITY')}`), 0.0004567, 'eccentricity with an assumed leading point');
  });

  it('closes each line with the modulo-10 checksum of columns 1-68, a minus counting one', () => {
    for (const line of lines(must(elsetTwoLine(record)))) {
      let sum = 0;
      for (const c of line.slice(0, -1)) sum += c === '-' ? 1 : /\d/.test(c) ? Number(c) : 0;
      assert.equal(Number(line.at(-1)), sum % 10);
      assert.equal(twoLineChecksum(line), sum % 10);
    }
    assert.equal(twoLineChecksum('1 00005U'.padEnd(68, ' ')), 1 + 5);
    assert.equal(twoLineChecksum('-'.repeat(68)), 68 % 10);
  });

  it('encodes negative values, small exponents and day 366 in the fixed fields', () => {
    const negative = elementRecord(OCM.meanElementSource.SGP4, { MEAN_MOTION_DOT: -1.234e-5, BSTAR: -1.2e-6, MEAN_MOTION_DDOT: 3.4567e-13 });
    const [one] = lines(must(elsetTwoLine(negative)));
    assert.deepEqual(['TLE1_MEAN_MOTION_DOT', 'TLE1_MEAN_MOTION_DDOT', 'TLE1_BSTAR'].map((t) => field(one, 'P7', t)), ['-.00001234', ' 00035-9', '-12000-5']);
    const late = elementRecord(OCM.meanElementSource.SGP4, { EPOCH: '2024-12-31T12:00:00.000Z' });
    const [lateOne, lateTwo] = lines(must(elsetTwoLine(late)));
    assert.deepEqual([field(lateOne, 'P7', 'TLE1_EPOCH_YEAR'), field(lateOne, 'P7', 'TLE1_EPOCH_DAY')], ['24', '366.50000000'], 'day 366 of a leap year');
    assert.equal(field(lateTwo, 'P7', 'TLE2_REV_AT_EPOCH'), '     ', 'no revolution number off EPOCH_TZERO');
  });

  it('refuses a theory that does not produce SGP4 elements, and fields that do not fit', () => {
    for (const theory of ['SGP4XP', 'DSST', 'AP']) {
      assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource[theory]))), `theory-not-exportable:${theory}`);
    }
    assert.equal(code(elsetTwoLine(must(PROD.fromOcm(ocmWith([]))))), 'theory-not-exportable:OSCULATING', 'osculating states carry no SGP4 set');
    assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource.SGP4, {}, (o) => { o.METADATA.NORAD_CAT_ID = 0; }))), 'record-missing:NORAD_CAT_ID');
    assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource.SGP4, {}, (o) => { o.METADATA.NORAD_CAT_ID = 100000; }))), 'field-overflow:TLE1_CATALOG_NUMBER');
    assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource.SGP4, { INCLINATION: 181 }))), 'field-range:TLE2_INCLINATION');
    assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource.SGP4, { ECCENTRICITY: 0.99999999 }))), 'field-range:TLE2_ECCENTRICITY');
    assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource.SGP4, { MEAN_MOTION_DOT: 1.5 }))), 'field-overflow:TLE1_MEAN_MOTION_DOT');
    assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource.SGP4, { BSTAR: 2e9 }))), 'field-overflow:TLE1_BSTAR');
    assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource.SGP4, {}, (o) => { o.HEADER.CLASSIFICATION = 'UNCLASSIFIED'; }))), 'field-overflow:TLE1_CLASSIFICATION');
    assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource.SGP4, {}, (o) => { o.METADATA.INTERNATIONAL_DESIGNATOR = '98067A'; }))), 'field-form:TLE1_INTERNATIONAL_DESIGNATOR');
    assert.equal(code(elsetTwoLine(elementRecord(OCM.meanElementSource.SGP4, { EPOCH: '2057-01-01T00:00:00Z' }))), 'field-overflow:TLE1_EPOCH_YEAR');
  });
});

// ---- P7, element-file form ----------------------------------------------------------------------------------

describe('PROD P7 element set: element-file form', () => {
  const record = must(PROD.fromOcm(ocmWith(B_AND_AGOM)));

  it('writes one line at the token columns, byte-identical to the expected file and on every run', () => {
    const text = must(elsetElementFile(record));
    assert.equal(text, expected('p7-elements.txt'));
    assert.equal(must(elsetElementFile(record)), text);
    const [line, ...rest] = lines(text);
    assert.equal(rest.length, 0);
    assert.equal(line.length, PROD.endColumn(PROD.tokenOf('P7', 'ELF_OUTGASSING')));
  });

  it('prints the equinoctial set of the first state and every parameter the Record carries in its unit', () => {
    const [line] = lines(must(elsetElementFile(record)));
    const eq = must(PROD.cartesianToEquinoctial(record.epochs[0].state, GM));
    const tokens = ['ELF_SEMI_MAJOR_AXIS', 'ELF_AF', 'ELF_AG', 'ELF_MEAN_LONGITUDE', 'ELF_CHI', 'ELF_PSI', 'ELF_RETROGRADE_FACTOR'];
    tokens.forEach((t, i) => assert.equal(field(line, 'P7', t), PROD.formatToken(PROD.tokenOf('P7', t), eq[i]), t));
    assert.equal(field(line, 'P7', 'ELF_EPOCH'), PROD.formatCalendar(Date.parse(EPOCH)));
    PARAMETERS.forEach(([, , , value], i) => {
      const t = `ELF_${PROD.PARAMETERS[i].symbol}`;
      assert.equal(field(line, 'P7', t), PROD.formatToken(PROD.tokenOf('P7', t), value), t);
      assert.ok(Math.abs(Number(field(line, 'P7', t)) - value) <= 5e-7 * Math.abs(value), `${t} within print precision`);
    });
    assert.ok(Math.abs(Number(field(line, 'P7', 'ELF_SEMI_MAJOR_AXIS')) - 6878.137) <= 5e-7);
  });

  it('leaves the columns of a parameter the Record does not carry blank', () => {
    const ocm = ocmWith(['DRAG_AREA_OVER_MASS']);
    ocm.ORBIT_DETERMINATION.OD_DYNAMIC_PARAMETERS = ocm.ORBIT_DETERMINATION.OD_DYNAMIC_PARAMETERS.filter((p) => p.PARAMETER === OCM.prwDynamicParameter.DRAG_AREA_OVER_MASS);
    const [line] = lines(must(elsetElementFile(must(PROD.fromOcm(ocm)))));
    assert.equal(line.length, PROD.endColumn(PROD.tokenOf('P7', 'ELF_B')));
    assert.equal(field(line, 'P7', 'ELF_AGOM').trim(), '');
  });

  it('refuses without a state or the gravitational parameter', () => {
    const noGm = ocmWith([]); noGm.PERTURBATIONS = null;
    assert.equal(code(elsetElementFile(must(PROD.fromOcm(noGm)))), 'record-missing:GM');
    const noStates = ocmWith([]); noStates.STATE_DATA = []; noStates.COVARIANCE_DATA = [];
    noStates.MEAN_ELEMENTS = T(OCM.OCMMeanElementsT, { MEAN_ELEMENT_THEORY: OCM.meanElementSource.SGP4, EPOCH, MEAN_MOTION: 15.5 });
    assert.equal(code(elsetElementFile(must(PROD.fromOcm(noStates)))), 'record-missing:STATE_DATA');
    assert.deepEqual(ELSET_REFUSAL_CODES.slice(0, 4), ['theory-not-exportable:<THEORY>', 'record-missing:NORAD_CAT_ID', 'record-missing:STATE_DATA', 'record-missing:GM']);
  });
});

// ---- P8 -----------------------------------------------------------------------------------------------------

describe('PROD P8 state-transition-matrix ephemeris', () => {
  const record = sensitivityRecord(B_AND_AGOM);
  const n = 8;

  it('writes the header, the equinoctial LTM rows and twelve rows per epoch, byte-identical to the expected file', () => {
    const text = must(stmEphemerisText(record));
    assert.equal(text, expected('p8.txt'));
    assert.equal(must(stmEphemerisText(record)), text, 'byte-identical on a repeated run');
    assert.equal(lines(text).length, 1 + n + 3 * 12);
    const six = sensitivityRecord([]);
    assert.equal(lines(must(stmEphemerisText(six))).length, 1 + 6 + 3 * 6, 'six rows per epoch with no parameter solved');
  });

  it('prints every value at its token column as the content it was computed from', () => {
    const content = must(stmEphemeris(record));
    const all = lines(must(stmEphemerisText(record)));
    const fmt = (product, token, v) => PROD.formatToken(PROD.tokenOf(product, token), v);
    assert.equal(field(all[0], 'P8', 'EPOCH'), PROD.formatCalendar(Date.parse(EPOCH)));
    assert.equal(field(all[0], 'P8', 'WTD_RMS'), fmt('P8', 'WTD_RMS', 1.09));
    let at = 0;
    for (let i = 0; i < n; i++) {
      const row = all[1 + i];
      assert.ok(row.startsWith(PROD.P3_ROW_INDENT));
      const width = PROD.formatWidth(PROD.tokenOf('P8', 'COV').format), step = width + PROD.P3_VALUE_SEPARATOR.length;
      const body = row.slice(PROD.P3_ROW_INDENT.length);
      assert.equal(body.length, (i + 1) * step - PROD.P3_VALUE_SEPARATOR.length, `covariance row ${i + 1} carries ${i + 1} values`);
      for (let j = 0; j <= i; j++) {
        assert.equal(body.slice(j * step, j * step + width), fmt('P8', 'COV', content.ltm[at++]));
        if (j < i) assert.equal(body.slice(j * step + width, (j + 1) * step), PROD.P3_VALUE_SEPARATOR);
      }
    }
    const [mse, ...columns] = PROD.P8_EPOCH_ROW;
    content.epochs.forEach((epoch, k) => {
      const block = all.slice(1 + n + 12 * k, 1 + n + 12 * (k + 1));
      block.forEach((line, r) => {
        const from = r < 6 ? 0 : 6, row = epoch.sensitivities[r % 6].slice(from, r < 6 ? 6 : n);
        assert.equal(field(line, 'P8', mse), fmt('P8', mse, k * STEP_SECONDS / 60));
        row.forEach((v, c) => assert.equal(field(line, 'P8', columns[c]), fmt('P8', columns[c], v)));
        assert.equal(line.length, PROD.endColumn(PROD.tokenOf('P8', columns[row.length - 1])));
      });
    });
  });

  for (const names of [[], B_AND_AGOM, PARAMETERS.map((p) => p[0])]) {
    it(`reconstructs a symmetric P(t) = J P J^T equal to the Record's covariance within 1e-12 relative (COV_SIZE ${6 + names.length})`, () => {
      const r = sensitivityRecord(names);
      const size = 6 + names.length;
      const content = must(stmEphemeris(r));
      const p = must(PROD.ltmToFull(content.ltm, size));
      let worst = 0, asymmetry = 0;
      content.epochs.forEach((epoch, k) => {
        const j = [...epoch.sensitivities.map((row) => [...row]), ...Array.from({ length: size - 6 }, (_, i) => Array.from({ length: size }, (_, c) => (c === 6 + i ? 1 : 0)))];
        const pt = PROD.transformCovariance(p, j);
        const want = must(PROD.ltmToFull(r.covariance.perEpoch[k].ltm, size));
        const scale = Math.max(...want.flat().map(Math.abs));
        for (let a = 0; a < size; a++) for (let b = 0; b < size; b++) {
          asymmetry = Math.max(asymmetry, Math.abs(pt[a][b] - pt[b][a]) / scale);
          worst = Math.max(worst, Math.abs(pt[a][b] - want[a][b]) / Math.abs(want[a][b]));
        }
      });
      assert.ok(asymmetry <= 4 * Number.EPSILON, `symmetric to machine precision (${asymmetry})`);
      assert.ok(worst <= 1e-12, `every entry within 1e-12 relative (${worst})`);
    });
  }

  it('refuses with the typed codes and writes nothing', () => {
    assert.equal(code(stmEphemerisText(must(PROD.fromOcm(ocmWith(B_AND_AGOM))))), 'sensitivities-missing');
    assert.equal(code(stmEphemerisText(sensitivityRecord(B_AND_AGOM, { stm: (e) => phi(e, 6) }))), 'stm-shape');
    assert.equal(code(stmEphemerisText(sensitivityRecord(B_AND_AGOM, { edit: (o) => { o.ORBIT_DETERMINATION.WEIGHTED_RMS = 0; } }))), 'record-missing:WEIGHTED_RMS');
    assert.equal(code(stmEphemerisText(sensitivityRecord(B_AND_AGOM, { edit: (o) => { o.PERTURBATIONS = null; } }))), 'record-missing:GM');
    assert.equal(code(stmEphemerisText(sensitivityRecord(B_AND_AGOM, { edit: (o) => { o.COV_REF_FRAME = T(OCM.RFMT, { NAME: 'GCRF' }); } }))), 'cov-frame:GCRF');
    assert.equal(code(stmEphemerisText(sensitivityRecord(B_AND_AGOM, { edit: (o) => { o.COV_TYPE = 'KEPLERIAN'; } }))), 'cov-type:KEPLERIAN');
    assert.equal(code(stmEphemerisText(sensitivityRecord(B_AND_AGOM, { edit: (o) => { o.METADATA.START_TIME = '2026-11-01T00:01:00.000Z'; } }))), 'epoch-origin');
    assert.equal(code(stmEphemerisText(sensitivityRecord(B_AND_AGOM, { edit: (o) => { o.COVARIANCE_DATA = []; } }))), 'record-missing:COVARIANCE_DATA');
    assert.equal(STM_EPHEMERIS_REFUSAL_CODES[0], 'sensitivities-missing');
  });
});
