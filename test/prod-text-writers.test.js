import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import * as ODR from '../lib/js/ODR/main.js';
import * as PROD from '../lib/js/PROD/main.js';
import { readP2, writeP2, writeStateRows } from '../lib/js/PROD/staterow.js';
import { writeP3, writeP4 } from '../lib/js/PROD/covtext.js';
import { writeP1 } from '../lib/js/PROD/ephtrk.js';
import { readP9, writeP9, writeResidualRows } from '../lib/js/PROD/residual.js';
import { PARAMETERS, ocmWith, odrWith, packOcm, packOdr, unpackOcm, unpackOdr } from './fixtures/prod/records.mjs';

const { tokenOf, formatWidth, endColumn, P1_HEADER_LINES, P1_EPOCH_BLOCK, P2_ROW, P3_LINES, P9_ROW } = PROD;
const expected = (name) => readFileSync(new URL(`./fixtures/prod/expected/${name}`, import.meta.url), 'utf8');
const must = (result) => { assert.ok(result.ok, result.ok ? '' : `${result.refusal.code}: ${result.refusal.message}`); return result.value; };
const refused = (result, code) => {
  assert.equal(result.ok, false, `expected the refusal ${code}`);
  assert.equal(result.refusal.code, code);
  assert.equal(typeof result.refusal.message, 'string');
  assert.equal('value' in result, false, 'a refusal carries no partial output');
};
const linesOf = (text) => { assert.ok(text.endsWith('\n')); return text.slice(0, -1).split('\n'); };
const field = (line, token) => line.slice(token.startColumn - 1, token.startColumn - 1 + formatWidth(token.format));
const triangle = (n) => (n * (n + 1)) / 2;

// The synthetic Records: COV_SIZE 8 (B and BDOT solved, so P3 shows only the 6 x 6 state block), three epochs a
// minute apart, four fit inputs (laser ranges and range rates).
const CHOSEN_PARAMETERS = PARAMETERS.slice(0, 2).map((p) => p[0]);
function residualOdr() {
  const odr = odrWith(4);
  for (const [i, o] of odr.EDITED_OBSERVATIONS.entries()) if (i % 2) o.OBSERVATION_TYPE = ODR.memMeasurementType.RANGE_RATE;
  return odr;
}
const baseRecord = () => must(PROD.fromOcm(unpackOcm(packOcm(ocmWith(CHOSEN_PARAMETERS))), unpackOdr(packOdr(residualOdr()))));
/** The base Record with chosen per-epoch geodetic coordinates, mean elements and revolution numbers (P1's lines 2 and 3). */
function trackingRecord(record = baseRecord()) {
  return {
    ...record,
    epochs: record.epochs.map((e, i) => ({
      ...e,
      rev: 48170 + i,
      geodetic: { latitude: 12.25 + 3.5 * i, longitude: -121.125 + 3.75 * i, height: 418.123456 + 0.0105 * i },
      meanElements: { meanMotion: 15.49512345, eccentricity: 0.0003421, inclination: 51.6416, raan: 30.0125, argOfPericenter: 88.5, meanAnomaly: 271.25 + 3.85 * i },
    })),
  };
}

/** The pattern a token's field must match, from its format in tokens.js. */
function formatPattern(format) {
  let m = /^F(\d+)\.(\d+)$/.exec(format);
  if (m) return new RegExp(`^ *-?\\d+\\.\\d{${m[2]}}$`);
  m = /^%\+(\d+)\.(\d+)E$/.exec(format);
  if (m) return new RegExp(`^ *[+-]\\d\\.\\d{${m[2]}}E[+-]\\d{2,}$`);
  if (/^I\d+$/.test(format)) return /^ *-?\d+$/;
  if (format === 'L1') return /^[YN]$/;
  if (format === 'S18') return /^\d{2}\/\d{3} \d{4} \d{2}\.\d{3}$/;
  if (/^A\d+$/.test(format)) return /^\S.*$/s;
  throw new Error(`no pattern for ${format}`);
}
/** Every token of a line: the field holds its format (width and precision) and starts at its column. */
function assertTokens(product, line, names, label) {
  for (const name of names) {
    const token = tokenOf(product, name);
    const text = field(line, token);
    const width = formatWidth(token.format);
    if (/^A/.test(token.format)) {
      assert.ok(text.length <= width && text.length > 0, `${label} ${name}: text within A${width}`);
      assert.match(text, formatPattern(token.format), `${label} ${name} starts at column ${token.startColumn}`);
    } else {
      assert.equal(text.length, width, `${label} ${name}: ${width} columns`);
      assert.match(text, formatPattern(token.format), `${label} ${name} ${token.format}: "${text}"`);
    }
  }
  const covered = new Set();
  for (const name of names) { const token = tokenOf(product, name); for (let c = token.startColumn; c <= endColumn(token); c++) covered.add(c); }
  [...line].forEach((ch, i) => { if (ch !== ' ') assert.ok(covered.has(i + 1), `${label}: column ${i + 1} lies outside every field (nothing wider than its field)`); });
}
const tokenValue = (product, line, name) => Number(field(line, tokenOf(product, name)));

describe('PROD text writers: P1, P2, P3, P4 and P9 from one Record', () => {
  const P1_HEAD = P1_HEADER_LINES.length + 2;

  it('P2: the header, one NLEXYZ row per epoch at the token columns, byte-equal to p2.txt', () => {
    const record = baseRecord();
    const text = must(writeP2(record));
    const lines = linesOf(text);
    assert.equal(lines.length, 1 + record.epochs.length);
    for (const [i, line] of lines.slice(1).entries()) {
      assertTokens('P2', line, P2_ROW, `P2 row ${i}`);
      assert.equal(field(line, tokenOf('P2', 'LABEL')), PROD.P2_LABEL);
      assert.equal(tokenValue('P2', line, 'MSE'), record.epochs[i].minutes);
    }
    assert.equal(text, expected('p2.txt'));
  });

  it('P2: reads back to its states within printed precision and rewrites byte for byte, a blank line between groups', () => {
    const record = baseRecord();
    const text = must(writeP2([record, record]));
    const lines = linesOf(text);
    assert.equal(lines.length, 1 + 2 * record.epochs.length + 1);
    assert.equal(lines[1 + record.epochs.length], '', 'one blank line between two groups');
    const back = must(readP2(text));
    assert.equal(back.groups.length, 2);
    for (const group of back.groups) {
      for (const [i, row] of group.entries()) {
        row.state.forEach((x, k) => assert.ok(Math.abs(x - record.epochs[i].state[k]) <= (k < 3 ? 5e-9 : 5e-10), `state ${i}.${k} within print precision`));
      }
    }
    assert.equal(must(writeStateRows(back.groups)), text, 'reader -> writer is byte-identical');
    refused(readP2(text.replace(PROD.P2_LABEL, 'XXXXXX')), 'p2-row:2');
  });

  it('P3: version, the epoch-0 state row, the two titles, six triangle rows of k values and the sigma row, byte-equal to p3.txt', () => {
    const text = must(writeP3(baseRecord()));
    const lines = linesOf(text);
    assert.equal(lines.length, P3_LINES.length);
    assert.equal(lines[0], baseRecord().meta.toolVersion);
    assertTokens('P3', lines[1], P2_ROW, 'P3 state row');
    assert.equal(lines[2], PROD.P3_TITLE);
    assert.equal(lines[3], PROD.P3_TRIANGLE_TITLE);
    const cov = tokenOf('P3', 'COV');
    const step = formatWidth(cov.format) + PROD.P3_VALUE_SEPARATOR.length;
    for (let k = 1; k <= 6; k++) {
      const row = lines[3 + k];
      assert.ok(row.startsWith(PROD.P3_ROW_INDENT));
      assert.equal(row.length, cov.startColumn - 1 + k * step - PROD.P3_VALUE_SEPARATOR.length, `row ${k} holds ${k} values`);
      for (let j = 0; j < k; j++) {
        const text = row.slice(cov.startColumn - 1 + j * step, cov.startColumn - 1 + j * step + formatWidth(cov.format));
        assert.match(text, formatPattern(cov.format), `row ${k} value ${j}`);
      }
    }
    assertTokens('P3', lines[10], ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'], 'P3 sigma row');
    assert.equal(text, expected('p3.txt'));
  });

  it('P4: version, one sigma row per epoch, byte-equal to p4.txt', () => {
    const record = baseRecord();
    const text = must(writeP4(record));
    const lines = linesOf(text);
    assert.equal(lines.length, 1 + record.epochs.length);
    for (const [i, line] of lines.slice(1).entries()) assertTokens('P4', line, ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'], `P4 row ${i}`);
    assert.equal(text, expected('p4.txt'));
  });

  it('P1: header block, two header rows, four lines per epoch and the trailer at the token columns, byte-equal to p1.txt', () => {
    const record = trackingRecord();
    const text = must(writeP1(record));
    const lines = linesOf(text);
    assert.equal(lines.length, P1_HEAD + 4 * record.epochs.length + 1);
    for (const [i, names] of P1_HEADER_LINES.entries()) assertTokens('P1', lines[i], names, `P1 header line ${i}`);
    for (let e = 0; e < record.epochs.length; e++) {
      for (let l = 0; l < 4; l++) assertTokens('P1', lines[P1_HEAD + 4 * e + l], P1_EPOCH_BLOCK[l], `P1 epoch ${e} line ${l + 1}`);
      assert.equal(tokenValue('P1', lines[P1_HEAD + 4 * e + 1], 'REV'), 48170 + e);
    }
    assert.equal(lines[lines.length - 1], PROD.P1_TRAILER);
    assert.equal(text, expected('p1.txt'));
  });

  it('P9: the sign convention header and one row per fit input, byte-equal to p9.txt; reads back and rewrites byte for byte', () => {
    const record = baseRecord();
    const text = must(writeP9(record));
    const lines = linesOf(text);
    assert.equal(lines.length, 1 + record.residuals.length);
    assert.equal(lines[0], PROD.P9_SIGN_CONVENTION);
    for (const [i, line] of lines.slice(1).entries()) {
      assertTokens('P9', line, P9_ROW, `P9 row ${i}`);
      const r = record.residuals[i];
      assert.ok(Math.abs(tokenValue('P9', line, 'RESIDUAL') - (r.observed - r.computed)) <= 5e-7 * Math.abs(r.residual), 'RESIDUAL is OBSERVED - COMPUTED');
    }
    assert.equal(text, expected('p9.txt'));
    const back = must(readP9(text));
    assert.deepEqual(back.rows.map((r) => [r.id, r.epochMs, r.type, r.accepted, r.code]), record.residuals.map((r) => [r.id, r.epochMs, r.type, r.accepted, r.code]));
    assert.equal(must(writeResidualRows(back.rows)), text, 'reader -> writer is byte-identical');
  });

  it('P9: every observation type name fits TYPE, AZIMUTH_ELEVATION and RIGHT_ASCENSION_DECLINATION among them; each writes and reads back', () => {
    const names = Object.keys(ODR.memMeasurementType).filter((k) => Number.isNaN(Number(k)));
    const odr = odrWith(names.length);
    for (const [i, o] of odr.EDITED_OBSERVATIONS.entries()) o.OBSERVATION_TYPE = ODR.memMeasurementType[names[i]];
    const record = must(PROD.fromOcm(ocmWith(CHOSEN_PARAMETERS), odr));
    const text = must(writeP9(record));
    const lines = linesOf(text);
    for (const [i, line] of lines.slice(1).entries()) {
      assertTokens('P9', line, P9_ROW, `P9 row ${i}`);
      assert.equal(field(line, tokenOf('P9', 'TYPE')).trimEnd(), names[i], `${names[i]} is printed whole`);
    }
    const back = must(readP9(text));
    assert.deepEqual(back.rows.map((r) => [r.typeName, r.type]), names.map((n) => [n, ODR.memMeasurementType[n]]));
    assert.ok(names.includes('AZIMUTH_ELEVATION') && names.includes('RIGHT_ASCENSION_DECLINATION'));
    assert.equal(must(writeResidualRows(back.rows)), text, 'reader -> writer is byte-identical');
  });

  it('cross-product: sigma is the root of the diagonal; P2 row i is P1 epoch i\'s state and P3\'s state row; P4 row i is P1 epoch i\'s and P3\'s sigma row', () => {
    const record = trackingRecord();
    const p1 = linesOf(must(writeP1(record)));
    const p2 = linesOf(must(writeP2(record)));
    const p3 = linesOf(must(writeP3(record)));
    const p4 = linesOf(must(writeP4(record)));
    const cov = tokenOf('P3', 'COV');
    const step = formatWidth(cov.format) + PROD.P3_VALUE_SEPARATOR.length;
    for (let k = 1; k <= 6; k++) {
      const diagonal = Number(p3[3 + k].slice(cov.startColumn - 1 + (k - 1) * step).trim());
      const sigma = tokenValue('P3', p3[10], `S${k}`);
      assert.ok(Math.abs(sigma - Math.sqrt(diagonal)) <= 1e-6 * sigma, `S${k} ${sigma} is sqrt(${diagonal}) within printed precision`);
    }
    assert.equal(p2[1], p3[1], 'P2 row 0 is P3\'s state row');
    assert.equal(p4[1], p3[10], 'P4 row 0 is P3\'s sigma row');
    const stateTokens = P2_ROW.filter((n) => n !== 'LABEL');
    for (let i = 0; i < record.epochs.length; i++) {
      for (const name of stateTokens) assert.equal(field(p2[1 + i], tokenOf('P2', name)), field(p1[P1_HEAD + 4 * i], tokenOf('P1', name)), `P2 row ${i} ${name} is P1 epoch ${i}'s`);
      assert.equal(p4[1 + i], p1[P1_HEAD + 4 * i + 3], `P4 row ${i} is P1 epoch ${i}'s sigma row`);
    }
  });

  it('is deterministic: two runs from two decodings of the same bytes are byte-identical', () => {
    for (const write of [(r) => writeP1(trackingRecord(r)), writeP2, writeP3, writeP4, writeP9]) {
      assert.equal(must(write(baseRecord())), must(write(baseRecord())));
    }
  });

  it('refuses, with no partial output, when a value a product prints is absent', () => {
    // P1 from a Record built by fromOcm: record.ts has no typed home for the per-epoch geodetic coordinates and mean elements.
    refused(writeP1(baseRecord()), 'record-missing:epochs[0].geodetic');
    const noRev = trackingRecord();
    refused(writeP1({ ...noRev, epochs: noRev.epochs.map((e, i) => ({ ...e, rev: i === 1 ? null : e.rev })) }), 'record-missing:epochs[1].rev');
    const noMean = trackingRecord();
    refused(writeP1({ ...noMean, epochs: noMean.epochs.map((e, i) => ({ ...e, meanElements: i === 2 ? null : e.meanElements })) }), 'record-missing:epochs[2].meanElements');
    const uneven = trackingRecord();
    refused(writeP1({ ...uneven, epochs: uneven.epochs.map((e, i) => ({ ...e, minutes: i === 2 ? 2.5 : e.minutes })) }), 'epoch-grid');
    // P9 without an $ODR (D6).
    refused(writeP9(must(PROD.fromOcm(ocmWith(CHOSEN_PARAMETERS)))), 'record-missing:EDITED_OBSERVATIONS');
    // P3 and P4 without a covariance or a tool version.
    const bare = ocmWith(CHOSEN_PARAMETERS);
    bare.COVARIANCE_DATA = [];
    for (const write of [writeP3, writeP4]) refused(write(must(PROD.fromOcm(bare))), 'record-missing:COVARIANCE_DATA');
    const anonymous = ocmWith(CHOSEN_PARAMETERS);
    anonymous.PROVENANCE = null;
    for (const write of [writeP3, writeP4]) refused(write(must(PROD.fromOcm(anonymous))), 'record-missing:PROVENANCE.PRODUCER');
    refused(writeP1(trackingRecord(must(PROD.fromOcm(anonymous)))), 'record-missing:PROVENANCE.PRODUCER');
    // A value wider than its field.
    const far = baseRecord();
    refused(writeP2({ ...far, epochs: far.epochs.map((e) => ({ ...e, state: [1e7, ...e.state.slice(1)] })) }), 'field-width:P2.POSX');
    // The readers refuse text that is not their layout.
    refused(readP9(must(writeP9(baseRecord())).replace('LASER_RANGE', 'LASER_RANGX')), 'p9-type:2');
    refused(readP2('NOT P2\n'), 'p2-header');
  });
});
