import assert from 'node:assert/strict';
import { randomInt, createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import * as flatbuffers from 'flatbuffers';
import { EXO, EXOT, EXOParameterT, exoDisposition } from '../../../lib/js/EXO/main.js';

// Source columns remain separate from the SDS adapter. Equality is checked
// against every requested source cell, not against self-generated goldens.
const units = {
  pl_orbper: 'd', pl_orbsmax: 'AU', pl_orbeccen: '1', pl_orblper: 'deg',
  pl_orbincl: 'deg', pl_tranmid: 'd', pl_orbtper: 'd', pl_projobliq: 'deg',
  pl_rade: 'R_earth', pl_bmasse: 'M_earth', pl_eqt: 'K',
};
const scalarColumns = ['pl_name', 'hostname', 'gaia_dr3_id', 'pl_tranmid_systemref',
  'pl_orbtper_systemref', 'pl_bmassprov', 'discoverymethod', 'disc_year',
  'disc_refname', 'pl_controv_flag'];
const suffixes = ['', 'err1', 'err2', 'lim', 'str', '_reflink'];
const columns = [...scalarColumns, ...Object.keys(units).flatMap(name => suffixes.map(suffix => name + suffix))];
const tap = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync';
async function query(sql) {
  const url = `${tap}?${new URLSearchParams({ query: sql, format: 'json' })}`;
  const response = await fetch(url, { signal: AbortSignal.timeout(120000) });
  assert.equal(response.status, 200, `NASA TAP HTTP ${response.status}`);
  const rows = await response.json();
  assert.ok(Array.isArray(rows), 'NASA TAP must return rows, not an error document');
  return { rows, url };
}
async function evidence() {
  if (process.env.EXO_ARCHIVE_FIXTURE) {
    return JSON.parse(readFileSync(process.env.EXO_ARCHIVE_FIXTURE, 'utf8'));
  }
  const { rows: names } = await query('select pl_name from pscomppars order by pl_name');
  assert.ok(names.length >= 100, 'at least 100 archive planets');
  // Uniform sampling without replacement. This is selection, not astronomy.
  for (let end = names.length - 1; end > 0; end--) {
    const index = randomInt(end + 1);
    [names[end], names[index]] = [names[index], names[end]];
  }
  const selected = names.slice(0, 100);
  const batches = [];
  for (let index = 0; index < selected.length; index += 20) {
    const literals = selected.slice(index, index + 20).map(({ pl_name }) => `'${pl_name.replaceAll("'", "''")}'`);
    batches.push(await query(`select ${columns.join(',')} from pscomppars where pl_name in (${literals.join(',')}) order by pl_name`));
  }
  const snapshot = { retrievedAt: new Date().toISOString(), population: names.length,
    queries: batches.map(batch => batch.url), rows: batches.flatMap(batch => batch.rows) };
  if (process.env.EXO_EVIDENCE_OUT) writeFileSync(process.env.EXO_EVIDENCE_OUT, JSON.stringify(snapshot));
  return snapshot;
}
function reference(raw) {
  if (!raw) return { url: null, bibcode: null };
  const url = raw.match(/href\s*=\s*["']?([^\s"'>]+)/i)?.[1] ?? null;
  const bibcode = url && /(?:adsabs\.harvard\.edu|ads\.harvard\.edu)\//.test(url)
    ? decodeURIComponent(url.match(/\/(?:abs|full)\/([^/#?]+)/)?.[1] ?? '') || null : null;
  return { url, bibcode };
}
function convert(row, snapshot) {
  const record = new EXOT();
  for (const name of scalarColumns) {
    record[name.toUpperCase()] = row[name] ?? (['disc_year', 'pl_controv_flag'].includes(name) ? -1 : null);
  }
  record.ARCHIVE_STATUS = row.pl_controv_flag === 1 ? exoDisposition.DISPUTED : exoDisposition.CONFIRMED;
  record.STATUS_REFERENCE = row.pl_controv_flag === 1 ? 'NASA PSCompPars pl_controv_flag=1' : null;
  record.RETRIEVED_AT = snapshot.retrievedAt;
  record.SOURCE_CATALOG = 'NASA Exoplanet Archive PSCompPars';
  record.SOURCE_QUERY = snapshot.queries.join('\n');
  for (const [name, unit] of Object.entries(units)) {
    const raw = row[name + '_reflink'], ref = reference(raw);
    record[name.toUpperCase()] = Object.assign(new EXOParameterT(), {
      VALUE: row[name] ?? NaN, ERR1: row[name + 'err1'] ?? NaN,
      ERR2: row[name + 'err2'] ?? NaN, LIMIT: row[name + 'lim'] ?? -128,
      DISPLAY: row[name + 'str'], UNIT: unit,
      REFERENCE_TEXT: raw, REFERENCE_URL: ref.url, REFERENCE_BIBCODE: ref.bibcode,
      RETRIEVED_AT: snapshot.retrievedAt,
    });
  }
  return record;
}
function backToArchive(record) {
  const row = {};
  for (const name of scalarColumns) {
    const value = record[name.toUpperCase()];
    row[name] = ['disc_year', 'pl_controv_flag'].includes(name) && value === -1 ? null : value;
  }
  for (const name of Object.keys(units)) {
    const value = record[name.toUpperCase()];
    for (const [suffix, field] of [['', 'VALUE'], ['err1', 'ERR1'], ['err2', 'ERR2']]) {
      row[name + suffix] = Number.isNaN(value[field]) ? null : value[field];
    }
    row[name + 'lim'] = value.LIMIT === -128 ? null : value.LIMIT;
    row[name + 'str'] = value.DISPLAY;
    row[name + '_reflink'] = value.REFERENCE_TEXT;
  }
  return row;
}
function roundtrip(record) {
  const builder = new flatbuffers.Builder(4096);
  EXO.finishEXOBuffer(builder, record.pack(builder));
  const bb = new flatbuffers.ByteBuffer(builder.asUint8Array());
  assert.ok(EXO.bufferHasIdentifier(bb));
  return EXO.getRootAsEXO(bb).unpack();
}

const snapshot = await evidence();
assert.equal(snapshot.rows.length, 100);
assert.equal(new Set(snapshot.rows.map(row => row.pl_name)).size, 100);
assert.ok(Number.isFinite(Date.parse(snapshot.retrievedAt)));
assert.ok(snapshot.queries.every(url => url.startsWith(tap + '?')));
let bibcodes = 0, missing = 0, unequalRefs = 0;
for (const row of snapshot.rows) {
  assert.deepEqual(Object.keys(row).sort(), [...columns].sort(), 'the requested archive projection is complete');
  const expected = convert(row, snapshot), actual = roundtrip(expected);
  assert.deepEqual(actual, expected, `${row.pl_name}: all EXO fields`);
  assert.deepEqual(backToArchive(actual), row, `${row.pl_name}: no loss in any of ${columns.length} NASA columns`);
  const refs = new Set();
  for (const name of Object.keys(units)) {
    const param = actual[name.toUpperCase()];
    if (param.REFERENCE_BIBCODE) bibcodes++;
    if (Number.isNaN(param.VALUE)) missing++;
    if (param.REFERENCE_TEXT) refs.add(param.REFERENCE_TEXT);
  }
  if (refs.size > 1) unequalRefs++;
}
assert.ok(bibcodes > 0, 'live publication references were exercised');
assert.ok(missing > 0, 'unpublished parameters stayed missing');
assert.ok(unequalRefs > 0, 'composite rows retained distinct parameter references');
// Archive-independent extension coverage: Omega=0 is known, absent Omega is
// explicitly unknown; geometric albedo is not Bond albedo; each status survives.
for (const status of [exoDisposition.CONFIRMED, exoDisposition.CANDIDATE,
  exoDisposition.DISPUTED, exoDisposition.RETRACTED]) {
  const record = Object.assign(new EXOT(), { PL_NAME: 'fixture:extensions', SIMBAD_ID: 'fixture:host',
    ARCHIVE_STATUS: status, RETRIEVED_AT: snapshot.retrievedAt });
  assert.equal(roundtrip(record).LONG_ASC_NODE_UNKNOWN, true);
  assert.equal(roundtrip(record).LONG_ASC_NODE, null);
  Object.assign(record, { LONG_ASC_NODE_UNKNOWN: false, LONG_ASC_NODE_FRAME: 'ICRS',
    LONG_ASC_NODE: Object.assign(new EXOParameterT(), { VALUE: 0, UNIT: 'deg', RETRIEVED_AT: snapshot.retrievedAt }),
    GEOMETRIC_ALBEDO: Object.assign(new EXOParameterT(), { VALUE: 0.2, UNIT: '1', RETRIEVED_AT: snapshot.retrievedAt,
      REFERENCE_TEXT: 'synthetic E2E fixture, not an astronomical measurement' }),
    GEOMETRIC_ALBEDO_BAND: 'fixture:V', STATUS_REFERENCE: 'synthetic status fixture' });
  assert.deepEqual(roundtrip(record), record);
}
const digest = createHash('sha256').update(JSON.stringify(snapshot.rows)).digest('hex');
console.log(`PASS EXO: 100 random planets from ${snapshot.population}; ${columns.length} NASA columns each; 0 lost cells`);
console.log(`Evidence: ${bibcodes} ADS parameter bibcodes, ${missing} absent values, ${unequalRefs} multi-reference planets; 4 status cases`);
console.log(`Archive as-of ${snapshot.retrievedAt}; sample SHA256 ${digest}`);
