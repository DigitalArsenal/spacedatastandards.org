import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';

import * as OCM from '../lib/js/OCM/main.js';
import * as PROD from '../lib/js/PROD/main.js';
import * as P5 from '../lib/js/PROD/covmsg-text.js';
import * as P6 from '../lib/js/PROD/covmsg-binary.js';
import { GM, ocmWith, packOcm, unpackOcm } from './fixtures/prod/records.mjs';

// PROD_WRITE_EXPECTED=1 rewrites the expected files: p5.txt from the P5 writer, p6.bin from the independent
// fixture writer below (never from the codec).
const EXPECTED = new URL('./fixtures/prod/expected/', import.meta.url);
const WRITE = process.env.PROD_WRITE_EXPECTED === '1';
const must = (result) => { assert.ok(result.ok, result.ok ? '' : `${result.refusal.code}: ${result.refusal.message}`); return result.value; };
const code = (result) => { assert.ok(!result.ok, 'expected a refusal'); return result.refusal.code; };
const triangle = (n) => (n * (n + 1)) / 2;
const relative = (a, b) => (a === b ? 0 : Math.abs(a - b) / Math.max(Math.abs(a), Math.abs(b)));
const worstRelative = (a, b) => { assert.equal(a.length, b.length); return a.reduce((w, x, i) => Math.max(w, relative(x, b[i])), 0); };

// The synthetic record: drag and SRP area-over-mass solved (a solved set that is not a prefix of the fixed order),
// all five parameters carried, force-model echo, space weather and integrator settings stated.
const SOLVED = ['DRAG_AREA_OVER_MASS', 'SRP_AREA_OVER_MASS'];
function fixtureOcm() {
  const ocm = ocmWith(SOLVED);
  Object.assign(ocm.PERTURBATIONS, { SOLID_TIDES_MODEL: 'IERS 2010', FIXED_F10P7: 150.2, FIXED_F10P7_MEAN: 148.7, FIXED_GEOMAG_AP: 15 });
  ocm.INTEGRATOR = Object.assign(new OCM.OCMIntegratorT(), {
    COORDINATE_SYSTEM: OCM.ocmIntegrationFrame.J2000, PARTIALS: OCM.ocmPartialsMethod.ANALYTIC, STEP_MODE: OCM.ocmStepMode.TIME,
    INITIAL_STEP_SECONDS: 60, ERROR_CONTROL: 1e-12,
  });
  return unpackOcm(packOcm(ocm));
}
const fixtureRecord = () => must(PROD.fromOcm(fixtureOcm()));
const tagOf = (name) => P5.P5_TAGS.find((t) => t.token === name);
const parseLines = (text) => text.slice(0, -1).split('\n').map((line) => {
  const at = line.indexOf(PROD.P5_TAG_SEPARATOR);
  return { key: line.slice(0, at), value: line.slice(at + PROD.P5_TAG_SEPARATOR.length), line };
});
const covOf = (text) => parseLines(text).filter((l) => l.key === 'COV').flatMap((l) => l.value.split(' ').map(Number));
const valueOf = (text, key) => parseLines(text).find((l) => l.key === key)?.value;

// An independent P6 writer: the frozen layout's constants, Node's Buffer, and the UVW projection of frames.ts.
function fixtureP6(record) {
  const n = record.covariance.size;
  const s = record.epochs[0].state;
  const ltm = must(PROD.covarianceToUvw(record.covariance.perEpoch[0].ltm, n, s.slice(0, 3), s.slice(3, 6)));
  const chunks = [];
  const frame = (payload) => {
    const count = Buffer.alloc(P6.P6_MARKER_BYTES);
    count.writeUInt32LE(payload.length);
    chunks.push(count, payload, count);
  };
  const header = Buffer.alloc(P6.P6_HEADER_BYTES);
  const field = (name) => P6.P6_HEADER_FIELDS.find((f) => f.name === name).offset;
  header.writeDoubleLE(record.epochs[0].epochMs, field('EPOCH'));
  header.writeInt32LE(n, field('COV_SIZE'));
  header.writeDoubleLE(record.ocm.ORBIT_DETERMINATION.WEIGHTED_RMS, field('WTD_RMS'));
  frame(header);
  let k = 0;
  for (let row = 0; row < n; row++) {
    const width = row < 6 ? 0 : row + 1;
    if (row === 5) { const b = Buffer.alloc(8 * P6.P6_STATE_BLOCK_VALUES); for (let j = 0; j < P6.P6_STATE_BLOCK_VALUES; j++) b.writeDoubleLE(ltm[k++], 8 * j); frame(b); }
    if (width) { const b = Buffer.alloc(8 * width); for (let j = 0; j < width; j++) b.writeDoubleLE(ltm[k++], 8 * j); frame(b); }
  }
  assert.equal(k, triangle(n));
  return Buffer.concat(chunks);
}

describe('PROD covariance messages: P5 text and P6 binary', () => {
  const record = fixtureRecord();
  const text = must(P5.writeP5(record));
  const bytes = must(P6.writeP6(record));
  if (WRITE) {
    writeFileSync(new URL('p5.txt', EXPECTED), text);
    writeFileSync(new URL('p6.bin', EXPECTED), fixtureP6(record));
  }

  it('writes P5 byte for byte as the committed expected file, the same bytes on every run', () => {
    assert.equal(text, readFileSync(new URL('p5.txt', EXPECTED), 'utf8'));
    assert.equal(must(P5.writeP5(fixtureRecord())), text, 'byte-identical on a repeated run');
  });

  it('lays P5 out as tokens.ts says: KEY = value lines, tags in order, values in their formats and widths', () => {
    const lines = parseLines(text);
    const order = P5.P5_TAGS.map((t) => t.token);
    const n = record.covariance.size;
    assert.ok(text.endsWith('\n'));
    for (const t of PROD.tokensOf('P5')) assert.ok(order.includes(t.token), `${t.token} of tokens.ts is a P5 tag`);
    assert.equal(order.length, PROD.tokensOf('P5').length + P5.P5_ADDED_TAGS.length);
    let last = -1;
    for (const { key, value } of lines) {
      const index = order.indexOf(key);
      assert.ok(index >= 0, `${key} is a P5 tag`);
      assert.ok(index > last || (key === 'COV' && index === last), `${key} is in order`);
      last = index;
      const token = tagOf(key);
      const width = PROD.formatWidth(token.format);
      const parts = key === 'COV' ? value.split(' ') : [value];
      for (const part of parts) {
        if (width) assert.ok(part.length <= width, `${key} fits ${token.format}`);
        if (token.format === PROD.TAG_VALUE_FORMAT) {
          const decimals = Number(/\.(\d+)E$/.exec(token.format)[1]);
          assert.match(part, new RegExp(`^[+-]\\d\\.\\d{${decimals}}E[+-]\\d{2,}$`), `${key} prints as ${token.format}`);
        }
      }
    }
    const covLines = lines.filter((l) => l.key === 'COV');
    assert.equal(covLines.length, n, 'one COV line per row');
    covLines.forEach((l, k) => assert.equal(l.value.split(' ').length, k + 1, `COV row ${k + 1} holds ${k + 1} values`));
    assert.equal(covOf(text).length, triangle(n), 'N(N+1)/2 values');
    assert.deepEqual(lines.filter((l) => PROD.P5_COVARIANCE_SECTION.includes(l.key) || l.key === 'COV_PARAMETERS').map((l) => l.key).filter((k, i, a) => a.indexOf(k) === i), ['ELSET', 'COV_SIZE', 'COV_PARAMETERS', 'WTD_RMS', 'COV']);
    assert.equal(valueOf(text, 'ELSET'), P5.P5_ELSET);
    assert.equal(Number(valueOf(text, 'COV_SIZE')), 8);
    assert.equal(valueOf(text, 'COV_PARAMETERS'), SOLVED.join(' '));
    assert.equal(valueOf(text, 'EPOCH'), PROD.formatCalendar(record.epochs[0].epochMs));
    assert.equal(lines.filter((l) => l.key.startsWith('ECI_')).length, 6, 'the TEME state is the ECI triple');
    for (const absent of ['J2K_POS_X', 'EFG_POS_X', 'UT1_RATE', 'POLAR_X', 'POLAR_Y', 'CM_OFFSET', 'INTEGRATOR_MODE']) assert.equal(valueOf(text, absent), undefined, `${absent} is not written`);
    assert.deepEqual(['LUNISOLAR', 'SRP', 'TIDES', 'IN_TRACK_THRUST'].map((k) => valueOf(text, k)), ['Y', 'Y', 'Y', 'Y']);
  });

  it('round-trips P5: text -> Record -> text; tags, flags and untransformed values exact, covariance and sigmas within 1e-12 relative', () => {
    const back = must(P5.writeP5(must(P5.readP5(text, GM))));
    const a = parseLines(text), b = parseLines(back);
    assert.deepEqual(b.map((l) => l.key), a.map((l) => l.key), 'the same tags in the same order');
    const transformed = (key) => key === 'COV' || P5.P5_SIGMA_TAGS.includes(key);
    let worst = 0;
    for (const [i, l] of a.entries()) {
      if (!transformed(l.key)) { assert.equal(b[i].line, l.line, `${l.key} is byte-identical`); continue; }
      worst = Math.max(worst, worstRelative(l.value.split(' ').map(Number), b[i].value.split(' ').map(Number)));
    }
    assert.ok(worst < 1e-12, `covariance and sigma values round-trip to ${worst} relative`);
    assert.equal(must(P5.writeP5(must(P5.readP5(back, GM)))).split('\n').length, back.split('\n').length);
  });

  it('agrees across P5, P6 and the $OCM on every covariance value, COV_SIZE and the epoch', () => {
    const n = record.covariance.size;
    const ocmLtm = record.ocm.COVARIANCE_DATA.slice(0, triangle(n));
    const fromP5 = must(PROD.covarianceFromEquinoctial(covOf(text), n, record.elements.equinoctial, GM));
    const p6 = must(P6.readP6(bytes));
    const s = record.epochs[0].state;
    const fromP6 = must(PROD.covarianceFromUvw(p6.ltm, n, s.slice(0, 3), s.slice(3, 6)));
    const p5Worst = worstRelative(fromP5, ocmLtm), p6Worst = worstRelative(fromP6, ocmLtm);
    assert.ok(p5Worst < 1e-12, `P5 agrees with the $OCM to ${p5Worst}`);
    assert.ok(p6Worst < 1e-12, `P6 agrees with the $OCM to ${p6Worst}`);
    assert.ok(worstRelative(must(P5.readP5(text, GM)).covariance.perEpoch[0].ltm, ocmLtm) < 1e-12, 'the P5 reader recovers the $OCM block');
    assert.equal(p6.covSize, n);
    assert.equal(Number(valueOf(text, 'COV_SIZE')), n);
    assert.equal(p6.epochMs, record.epochs[0].epochMs);
    const uvw = must(PROD.covarianceToUvw(ocmLtm, n, s.slice(0, 3), s.slice(3, 6)));
    P5.P5_SIGMA_TAGS.forEach((tag, i) => assert.ok(relative(Number(valueOf(text, tag)), Math.sqrt(p6.ltm[triangle(i + 1) - 1])) < 1e-15 && relative(Math.sqrt(uvw[triangle(i + 1) - 1]), Math.sqrt(p6.ltm[triangle(i + 1) - 1])) === 0, `${tag} is the root of the P6 diagonal`));
  });

  it('carries WEIGHTED_RMS equal across the $OCM, P5, P6 and Record.fit', () => {
    const wrms = record.ocm.ORBIT_DETERMINATION.WEIGHTED_RMS;
    assert.equal(record.fit.weightedRms, wrms);
    assert.equal(Number(valueOf(text, 'WTD_RMS')), wrms);
    assert.equal(must(P5.readP5(text, GM)).fit.weightedRms, wrms);
    assert.equal(must(P6.readP6(bytes)).weightedRms, wrms);
  });

  it('writes P6 byte for byte as the independent fixture writer, the layout frozen in covmsg-binary', () => {
    const expected = readFileSync(new URL('p6.bin', EXPECTED));
    assert.equal(Buffer.compare(fixtureP6(record), expected), 0, 'the committed p6.bin is the fixture writer\'s');
    assert.equal(Buffer.compare(Buffer.from(bytes), expected), 0, 'the codec writes the committed bytes');
    assert.equal(bytes.length, P6.p6Length(record.covariance.size));
    assert.equal(expected.readUInt32LE(0), P6.P6_HEADER_BYTES, 'the header record count, little-endian');
    assert.deepEqual(P6.p6RowWidths(8), [21, 7, 8]);
    const parsed = must(P6.readP6(new Uint8Array(expected)));
    assert.deepEqual([parsed.epochMs, parsed.covSize, parsed.weightedRms, parsed.ltm.length], [record.epochs[0].epochMs, 8, 1.09, triangle(8)]);
  });

  for (const count of [0, 1, 5]) {
    it(`writes and reads both messages at COV_SIZE ${6 + count}`, () => {
      const names = PROD.PARAMETERS.slice(0, count).map((p) => p.name);
      const r = must(PROD.fromOcm(ocmWith(names)));
      const t = must(P5.writeP5(r));
      assert.equal(Number(valueOf(t, 'COV_SIZE')), 6 + count);
      assert.equal(valueOf(t, 'COV_PARAMETERS'), count ? names.join(' ') : undefined);
      assert.deepEqual(must(P5.readP5(t, GM)).covariance.parameters, names);
      const b = must(P6.writeP6(r));
      assert.equal(Buffer.compare(Buffer.from(b), fixtureP6(r)), 0);
      assert.equal(must(P6.readP6(b)).ltm.length, triangle(6 + count));
    });
  }

  it('refuses an unknown tag, a tag out of order, a malformed value and a short covariance', () => {
    const lines = text.split('\n');
    assert.equal(code(P5.readP5(text.replace('WTD_RMS = ', 'WTD_RMX = '), GM)), 'p5-unknown-tag:WTD_RMX');
    assert.equal(code(P5.readP5(['UNKNOWN_TAG = 1', ...lines].join('\n'), GM)), 'p5-unknown-tag:UNKNOWN_TAG');
    assert.equal(code(P5.readP5([lines[1], lines[0], ...lines.slice(2)].join('\n'), GM)), 'p5-tag-order:EPOCH');
    assert.equal(code(P5.readP5(text.replace(/^LUNISOLAR = Y$/m, 'LUNISOLAR = T'), GM)), 'p5-value:LUNISOLAR');
    assert.equal(code(P5.readP5(text.replace(/\nCOV = [^\n]*\n$/, '\n'), GM)), 'p5-cov-row:8');
    assert.equal(code(P5.readP5(text.replace(/^ELSET = .*$/m, 'ELSET = CARTPV'), GM)), 'p5-elset:CARTPV');
    assert.equal(code(P5.readP5(text, 0)), 'record-missing:GM');
    assert.equal(code(P5.readP5(text.replace(/^THRUST_ACCEL = .*\n/m, ''), GM)), 'p5-flag:IN_TRACK_THRUST');
  });

  it('refuses a P6 message off the frozen layout and a Record a writer cannot serve', () => {
    assert.equal(code(P6.readP6(bytes.slice(0, bytes.length - 1))), 'p6-framing');
    assert.equal(code(P6.readP6(new Uint8Array([...bytes, 0]))), 'p6-trailing');
    const wrongSize = Buffer.from(bytes); wrongSize.writeInt32LE(12, P6.P6_MARKER_BYTES + P6.P6_HEADER_FIELDS[1].offset);
    assert.equal(code(P6.readP6(new Uint8Array(wrongSize))), 'p6-cov-size');
    const gcrf = fixtureOcm(); gcrf.TRAJ_REF_FRAME.NAME = 'GCRF';
    assert.equal(code(P5.writeP5(must(PROD.fromOcm(gcrf)))), 'p5-frame:GCRF');
    const noRms = fixtureOcm(); noRms.ORBIT_DETERMINATION.WEIGHTED_RMS = 0;
    assert.equal(code(P5.writeP5(must(PROD.fromOcm(noRms)))), 'record-missing:WEIGHTED_RMS');
    assert.equal(code(P6.writeP6(must(PROD.fromOcm(noRms)))), 'record-missing:WEIGHTED_RMS');
    const noCov = fixtureOcm(); noCov.COVARIANCE_DATA = [];
    assert.equal(code(P5.writeP5(must(PROD.fromOcm(noCov)))), 'record-missing:COVARIANCE_DATA');
    assert.equal(code(P6.writeP6(must(PROD.fromOcm(noCov)))), 'record-missing:COVARIANCE_DATA');
  });
});
