import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import * as OCM from '../lib/js/OCM/main.js';
import * as PROD from '../lib/js/PROD/main.js';
import {
  elsetTwoLine, elsetElementFile, twoLineElements, elementFileSet, writeTwoLine, writeElementFile, readTwoLine, readElementFile, ELSET_REFUSAL_CODES,
} from '../lib/js/PROD/elset.js';
import { stmEphemeris, stmEphemerisText, writeStmEphemeris, readStmEphemeris, STM_EPHEMERIS_REFUSAL_CODES } from '../lib/js/PROD/stmephemeris.js';
import { STEP_SECONDS, ltm, ocmWith } from './fixtures/prod/records.mjs';

const expected = (name) => readFileSync(new URL(`./fixtures/prod/expected/${name}`, import.meta.url), 'utf8');
const must = (result) => { assert.ok(result.ok, result.ok ? '' : `${result.refusal.code}: ${result.refusal.message}`); return result.value; };
const refused = (result, code) => {
  assert.equal(result.ok, false, `expected the refusal ${code}`);
  assert.equal(result.refusal.code, code, result.refusal.message);
  assert.equal(typeof result.refusal.message, 'string');
  assert.equal('value' in result, false, 'a refusal carries no partial output');
};
const T = (cls, v) => Object.assign(new cls(), v);
const lines = (text) => text.slice(0, -1).split('\n');
/** A line with a token's columns replaced by `text` (padded to the token's width). */
const put = (line, product, token, text) => {
  const t = PROD.tokenOf(product, token);
  const width = PROD.formatWidth(t.format);
  return line.slice(0, t.startColumn - 1) + text.padEnd(width).slice(0, width) + line.slice(t.startColumn - 1 + width);
};
/** The modulo-10 checksum, computed here independently of the module. */
const checksum = (body) => [...body].reduce((s, c) => s + (c === '-' ? 1 : /\d/.test(c) ? Number(c) : 0), 0) % 10;
const resum = (line) => line.slice(0, -1) + String(checksum(line.slice(0, -1)));
/** Within 1e-12 relative (exact for zero). */
const close = (actual, want, what) => {
  if (want === 0) assert.equal(actual, 0, what);
  else assert.ok(Math.abs(actual - want) <= 1e-12 * Math.abs(want), `${what}: ${actual} vs ${want}`);
};
// A Record value as its field prints it: F w.d to d decimals, %+14.6E to seven significant digits.
const fixed = (v, d) => Number(v.toFixed(d));
const sig = (v, d) => Number(v.toExponential(d));
/** The two-line exponent fields: five significant digits, the exponent held at -9 below 0.1e-9 (fixed 1e-14 steps). */
const tleExponent = (v) => {
  if (v === 0) return 0;
  const e = Number(Math.abs(v).toExponential(4).split('e')[1]) + 1;
  return e >= -9 ? sig(v, 4) : Math.sign(v) * Number(`${Math.round(Math.abs(v) * 1e14)}e-14`);
};
const decimals = (product, token) => Number(/^F\d+\.(\d+)$/.exec(PROD.tokenOf(product, token).format)[1]);
const mantissa = (product, token) => Number(/^%\+\d*\.(\d+)E$/.exec(PROD.tokenOf(product, token).format)[1]);

// ---- synthetic Records (WP4's) ------------------------------------------------------------------------------

const SET_EPOCH = '2026-11-01T06:31:12.345Z';
function elementRecord(overrides = {}, edit = () => {}) {
  const ocm = ocmWith([]);
  ocm.METADATA.EPOCH_TZERO = SET_EPOCH; ocm.METADATA.START_TIME = SET_EPOCH;
  ocm.MEAN_ELEMENTS = T(OCM.OCMMeanElementsT, {
    MEAN_ELEMENT_THEORY: OCM.meanElementSource.SGP4, EPOCH: SET_EPOCH, MEAN_MOTION: 15.49876543, ECCENTRICITY: 0.0004567, INCLINATION: 51.6412,
    RA_OF_ASC_NODE: 123.4567, ARG_OF_PERICENTER: 89.0123, MEAN_ANOMALY: 270.9876, BSTAR: 2.3456e-4, MEAN_MOTION_DOT: 1.234e-5, MEAN_MOTION_DDOT: 0,
    ...overrides,
  });
  edit(ocm);
  return must(PROD.fromOcm(ocm));
}
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
function sensitivityRecord(names, epochs = 3) {
  const n = 6 + names.length;
  const ocm = ocmWith(names, { epochs });
  const p0 = must(PROD.ltmToFull(ltm(n, 0), n));
  const phis = Array.from({ length: epochs }, (_, e) => phi(e, n));
  ocm.COVARIANCE_DATA = phis.map((f) => PROD.fullToLtm(PROD.transformCovariance(p0, f), n)).flat();
  return must(PROD.fromOcm(ocm, null, phis.map((f) => T(OCM.PRWStateMatrixT, { DIMENSION: n, VALUES: f.flat() }))));
}
const B_AND_AGOM = ['DRAG_AREA_OVER_MASS', 'SRP_AREA_OVER_MASS'];
const ALL = PROD.PARAMETERS.map((p) => p.name);

// ---- P7, two-line form --------------------------------------------------------------------------------------

/** The read fragment against the Record's: flags and strings exact, continuous fields within 1e-12 of the printed value. */
function sameTwoLine(read, want) {
  for (const k of ['noradCatId', 'classification', 'internationalDesignator', 'epochYear', 'ephemerisType', 'elementSetNumber', 'revAtEpoch']) {
    assert.equal(read[k], want[k], k);
  }
  assert.equal(read.meanElements.theory, want.meanElements.theory, 'theory');
  close(read.epochDay, 1 + Math.round((want.epochDay - 1) * 1e8) / 1e8, 'epochDay');
  const me = read.meanElements, w = want.meanElements;
  for (const [k, token] of [['inclination', 'TLE2_INCLINATION'], ['raan', 'TLE2_RA_OF_ASC_NODE'], ['argOfPericenter', 'TLE2_ARG_OF_PERICENTER'], ['meanAnomaly', 'TLE2_MEAN_ANOMALY']]) {
    close(me[k], fixed(w[k], 4), `${k} (${token})`);
  }
  close(me.meanMotion, fixed(w.meanMotion, 8), 'meanMotion');
  close(me.eccentricity, Math.round(w.eccentricity * 1e7) / 1e7, 'eccentricity');
  close(me.meanMotionDot, fixed(w.meanMotionDot, 8), 'meanMotionDot');
  close(me.meanMotionDdot, tleExponent(w.meanMotionDdot), 'meanMotionDdot');
  close(me.bstar, tleExponent(w.bstar), 'bstar');
  assert.equal(Math.abs(Date.parse(me.epoch) - Date.parse(w.epoch)) <= 1, true, 'MEAN_ELEMENTS.EPOCH within the 1e-8 day grid');
}

describe('PROD P7 reader: two-line form', () => {
  const record = elementRecord();

  it('reads the WP4 expected file back to the Record fragment and writes it again byte for byte', () => {
    const text = expected('p7-tle.txt');
    assert.equal(must(elsetTwoLine(record)), text);
    const read = must(readTwoLine(text));
    const want = must(twoLineElements(record));
    sameTwoLine(read, want);
    assert.equal(read.meanElements.epoch, SET_EPOCH, 'this epoch survives to the millisecond');
    assert.equal(must(writeTwoLine(read)), text, 'writer -> reader -> writer is byte-identical');
  });

  it('round-trips negative fields, small exponents, day 366, a blank designator and an off-epoch set', () => {
    const cases = [
      elementRecord({ MEAN_MOTION_DOT: -1.234e-5, BSTAR: -1.2e-6, MEAN_MOTION_DDOT: 3.4567e-13 }),
      elementRecord({ EPOCH: '2024-12-31T12:00:00.000Z' }),
      elementRecord({ INCLINATION: 180, RA_OF_ASC_NODE: 359.99994, ECCENTRICITY: 0.9876543, MEAN_ANOMALY: 0 }, (o) => { o.METADATA.INTERNATIONAL_DESIGNATOR = ''; }),
      elementRecord({ EPOCH: '1957-10-04T19:28:34.000Z', MEAN_MOTION: 14.2, BSTAR: 0.99999e9 }, (o) => { o.METADATA.NORAD_CAT_ID = 2; o.HEADER.CLASSIFICATION = 'S'; }),
    ];
    for (const r of cases) {
      const text = must(elsetTwoLine(r));
      const read = must(readTwoLine(text));
      sameTwoLine(read, must(twoLineElements(r)));
      assert.equal(must(writeTwoLine(read)), text);
    }
    assert.equal(must(readTwoLine(must(elsetTwoLine(cases[1])))).epochDay, 366.5);
    assert.equal(must(readTwoLine(must(elsetTwoLine(cases[2])))).internationalDesignator, null);
  });

  it('reads the element set number and the revolution number, which the Record has no typed home for', () => {
    const [one, two] = lines(expected('p7-tle.txt'));
    const text = `${resum(put(one, 'P7', 'TLE1_ELEMENT_SET_NUMBER', ' 999'))}\n${resum(put(two, 'P7', 'TLE2_REV_AT_EPOCH', '    7'))}\n`;
    const read = must(readTwoLine(text));
    assert.equal(read.elementSetNumber, 999);
    assert.equal(read.revAtEpoch, 7);
    assert.equal(must(writeTwoLine(read)), text);
  });

  it('refuses malformed lines, fields and checksums with typed codes', () => {
    const text = expected('p7-tle.txt');
    const [one, two] = lines(text);
    const both = (a, b) => `${a}\n${b}\n`;
    refused(readTwoLine(text.slice(0, -1)), 'p7-empty');
    refused(readTwoLine(`${one}\n`), 'p7-line-count');
    refused(readTwoLine(both(resum(one.slice(0, 1) + 'X' + one.slice(2)), two)), 'p7-line:1');
    refused(readTwoLine(both(`${one}0`, two)), 'field-overflow:TLE1_CHECKSUM');
    refused(readTwoLine(both(one, two.slice(0, -2))), 'field-form:TLE2_CHECKSUM');
    refused(readTwoLine(both(one, two.slice(0, -1) + String((Number(two.at(-1)) + 1) % 10))), 'checksum-mismatch:TLE2_CHECKSUM');
    refused(readTwoLine(both(resum(put(one, 'P7', 'TLE1_LINE_NUMBER', '3')), two)), 'field-form:TLE1_LINE_NUMBER');
    refused(readTwoLine(both(two, one)), 'p7-line:1');
    refused(readTwoLine(both(one, resum(put(two, 'P7', 'TLE2_CATALOG_NUMBER', '25545')))), 'field-form:TLE2_CATALOG_NUMBER');
    refused(readTwoLine(both(resum(put(one, 'P7', 'TLE1_CATALOG_NUMBER', '2554A')), two)), 'field-form:TLE1_CATALOG_NUMBER');
    refused(readTwoLine(both(resum(put(one, 'P7', 'TLE1_BSTAR', ' 23456*3')), two)), 'field-form:TLE1_BSTAR');
    refused(readTwoLine(both(resum(put(one, 'P7', 'TLE1_MEAN_MOTION_DOT', ' 0.0000123')), two)), 'field-form:TLE1_MEAN_MOTION_DOT');
    refused(readTwoLine(both(resum(put(one, 'P7', 'TLE1_INTERNATIONAL_DESIGNATOR', '98-067A')), two)), 'field-form:TLE1_INTERNATIONAL_DESIGNATOR');
    refused(readTwoLine(both(resum(put(one, 'P7', 'TLE1_EPOCH_DAY', '366.00000000')), two)), 'field-range:TLE1_EPOCH_DAY');
    refused(readTwoLine(both(one, resum(put(two, 'P7', 'TLE2_INCLINATION', '180.0001')))), 'field-range:TLE2_INCLINATION');
    refused(readTwoLine(both(one, resum(put(two, 'P7', 'TLE2_MEAN_ANOMALY', '360.0000')))), 'field-range:TLE2_MEAN_ANOMALY');
    refused(readTwoLine(both(one, resum(put(two, 'P7', 'TLE2_ECCENTRICITY', '.004567')))), 'field-form:TLE2_ECCENTRICITY');
    for (const c of ['p7-empty', 'p7-line-count', 'p7-line:<n>', 'checksum-mismatch:<token>']) assert.ok(ELSET_REFUSAL_CODES.includes(c), c);
  });
});

// ---- P7, element-file form ----------------------------------------------------------------------------------

function sameElementFile(read, want) {
  assert.equal(read.epochMs, want.epochMs, 'epoch');
  const tokens = PROD.P7_LINES.ELF.slice(1, 8);
  tokens.forEach((token, i) => {
    const t = PROD.tokenOf('P7', token);
    if (t.format.startsWith('I')) assert.equal(read.equinoctial[i], want.equinoctial[i], token);
    else close(read.equinoctial[i], fixed(want.equinoctial[i], decimals('P7', token)), token);
  });
  assert.deepEqual(read.parameters.map((p) => [p.name, p.symbol, p.kind, p.units]), want.parameters.map((p) => [p.name, p.symbol, p.kind, p.units]));
  read.parameters.forEach((p, i) => close(p.value, sig(want.parameters[i].value, mantissa('P7', `ELF_${p.symbol}`)), p.name));
}

describe('PROD P7 reader: element-file form', () => {
  const record = must(PROD.fromOcm(ocmWith(B_AND_AGOM)));

  it('reads the WP4 expected file back to the Record fragment and writes it again byte for byte', () => {
    const text = expected('p7-elements.txt');
    assert.equal(must(elsetElementFile(record)), text);
    const read = must(readElementFile(text));
    sameElementFile(read, must(elementFileSet(record)));
    assert.equal(must(writeElementFile(read)), text);
  });

  it('reads a parameter the line leaves blank as absent and keeps the others', () => {
    const ocm = ocmWith(['DRAG_AREA_OVER_MASS']);
    ocm.ORBIT_DETERMINATION.OD_DYNAMIC_PARAMETERS = ocm.ORBIT_DETERMINATION.OD_DYNAMIC_PARAMETERS.filter((p) => p.PARAMETER !== OCM.prwDynamicParameter.DRAG_AREA_OVER_MASS_RATE);
    const r = must(PROD.fromOcm(ocm));
    const text = must(elsetElementFile(r));
    const read = must(readElementFile(text));
    assert.deepEqual(read.parameters.map((p) => p.symbol), ['B', 'AGOM', 'T', 'OUTGASSING']);
    sameElementFile(read, must(elementFileSet(r)));
    assert.equal(must(writeElementFile(read)), text);
    const none = ocmWith([]); none.ORBIT_DETERMINATION.OD_DYNAMIC_PARAMETERS = [];
    const bare = must(elsetElementFile(must(PROD.fromOcm(none))));
    assert.deepEqual(must(readElementFile(bare)).parameters, []);
    assert.equal(must(writeElementFile(must(readElementFile(bare)))), bare);
  });

  it('refuses malformed lines and fields with typed codes', () => {
    const text = expected('p7-elements.txt');
    const [line] = lines(text);
    refused(readElementFile(line), 'p7-empty');
    refused(readElementFile(`${line}\n${line}\n`), 'p7-line-count');
    refused(readElementFile(`${line.slice(0, PROD.tokenOf('P7', 'ELF_OUTGASSING').startColumn - 1)}\n`), 'p7-line:1');
    refused(readElementFile(`X${line.slice(1)}\n`), 'p7-line:1');
    refused(readElementFile(`${line}${'1'.repeat(3)}\n`), 'field-overflow:ELF_OUTGASSING');
    refused(readElementFile(`${put(line, 'P7', 'ELF_EPOCH', '26/366 0000 00.000')}\n`), 'field-form:ELF_EPOCH');
    refused(readElementFile(`${put(line, 'P7', 'ELF_AF', '    0.00000000x')}\n`), 'field-form:ELF_AF');
    refused(readElementFile(`${put(line, 'P7', 'ELF_RETROGRADE_FACTOR', '  0')}\n`), 'field-range:ELF_RETROGRADE_FACTOR');
    refused(readElementFile(`${put(line, 'P7', 'ELF_BDOT', '  +1.5000E-09')}\n`), 'field-form:ELF_BDOT');
    refused(readElementFile(`${line.slice(0, -3)}\n`), 'field-form:ELF_OUTGASSING');
  });
});

// ---- P8 -----------------------------------------------------------------------------------------------------

function sameStm(read, want) {
  assert.equal(read.epochMs, want.epochMs, 'EPOCH');
  assert.equal(read.size, want.size, 'COV_SIZE');
  close(read.weightedRms, sig(want.weightedRms, mantissa('P8', 'WTD_RMS')), 'WTD_RMS');
  assert.equal(read.ltm.length, want.ltm.length);
  read.ltm.forEach((v, i) => close(v, sig(want.ltm[i], mantissa('P8', 'COV')), `COV ${i}`));
  assert.equal(read.epochs.length, want.epochs.length);
  read.epochs.forEach((e, k) => {
    const w = want.epochs[k];
    close(e.minutes, fixed(w.minutes, decimals('P8', 'MSE')), `MSE ${k}`);
    assert.equal(e.epochMs, w.epochMs, `epoch ${k}`);
    e.sensitivities.forEach((row, i) => row.forEach((v, c) => close(v, sig(w.sensitivities[i][c], mantissa('P8', 'SENS1')), `epoch ${k} row ${i} column ${c}`)));
  });
}

describe('PROD P8 reader', () => {
  it('reads the WP4 expected file back to the Record fragment and writes it again byte for byte', () => {
    const record = sensitivityRecord(B_AND_AGOM);
    const text = expected('p8.txt');
    assert.equal(must(stmEphemerisText(record)), text);
    const read = must(readStmEphemeris(text));
    sameStm(read, must(stmEphemeris(record)));
    assert.equal(must(writeStmEphemeris(read)), text);
  });

  for (const names of [[], ALL]) {
    it(`round-trips COV_SIZE ${6 + names.length} over four epochs`, () => {
      const record = sensitivityRecord(names, 4);
      const text = must(stmEphemerisText(record));
      const read = must(readStmEphemeris(text));
      sameStm(read, must(stmEphemeris(record)));
      assert.equal(must(writeStmEphemeris(read)), text);
    });
  }

  it('refuses malformed headers, covariance rows, epoch lines and blocks with typed codes', () => {
    const text = expected('p8.txt');
    const all = lines(text);
    const n = 8, at = 1 + n; // the first epoch line, 0-based
    const join = (ls) => `${ls.join('\n')}\n`;
    const edit = (i, f) => join(all.map((l, k) => (k === i ? f(l) : l)));
    refused(readStmEphemeris(text.slice(0, -1)), 'p8-empty');
    refused(readStmEphemeris(edit(0, (l) => `${l} `)), 'p8-header');
    refused(readStmEphemeris(edit(0, (l) => put(l, 'P8', 'EPOCH', '26/366 0000 00.000'))), 'field-form:EPOCH');
    refused(readStmEphemeris(edit(0, (l) => put(l, 'P8', 'WTD_RMS', ' +1.09E+00'))), 'field-form:WTD_RMS');
    refused(readStmEphemeris(edit(3, (l) => l.slice(0, -15))), 'p8-cov-row:3');
    refused(readStmEphemeris(join([all[0], ...all.slice(1, 4), ...all.slice(at)])), 'p8-cov-row:4');
    refused(readStmEphemeris(edit(2, (l) => l.replace('E-06', 'E-0X'))), 'field-form:COV');
    refused(readStmEphemeris(edit(at, (l) => `X${l.slice(1)}`)), `p8-line:${at + 1}`);
    refused(readStmEphemeris(edit(at, (l) => `${l} `)), `p8-line:${at + 1}`);
    refused(readStmEphemeris(edit(at + 6, (l) => `${l}${l.slice(-16)}`)), `p8-line:${at + 7}`);
    refused(readStmEphemeris(edit(at + 1, (l) => put(l, 'P8', 'MSE', '0.500000'.padStart(PROD.formatWidth(PROD.tokenOf('P8', 'MSE').format))))), `p8-line:${at + 2}`);
    refused(readStmEphemeris(edit(at + 2, (l) => put(l, 'P8', 'SENS2', '+5.390351E+0'))), 'field-form:SENS2');
    refused(readStmEphemeris(join(all.slice(0, -1))), 'stm-shape');
    refused(readStmEphemeris(join([...all.slice(0, at), ...all.slice(at + 12)])), 'epoch-origin');
    for (const c of ['p8-empty', 'p8-header', 'p8-cov-row:<row>', 'p8-line:<n>', 'field-form:<token>']) assert.ok(STM_EPHEMERIS_REFUSAL_CODES.includes(c), c);
  });
});
