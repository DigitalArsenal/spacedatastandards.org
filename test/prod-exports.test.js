import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

import * as PROD from '../lib/js/PROD/main.js';

// The PROD namespace re-exports every module of lib/js/PROD; a name two modules both exported would be dropped
// from it (an ambiguous star export), so each module's exports must reach the namespace as the same value, and
// the namespace holds nothing else.
const dir = new URL('../lib/js/PROD/', import.meta.url);
const modules = readdirSync(dir).filter((f) => f.endsWith('.js') && f !== 'main.js').sort();
const docs = new URL('../docs/products/', import.meta.url);
const pages = readdirSync(docs).filter((f) => f.endsWith('.md')).map((f) => readFileSync(new URL(f, docs), 'utf8'));

describe('PROD namespace', () => {
  const owners = new Map();

  before(async () => {
    for (const file of modules) {
      const mod = await import(new URL(file, dir));
      for (const name of Object.keys(mod)) {
        if (!owners.has(name)) owners.set(name, []);
        owners.get(name).push({ file, value: mod[name] });
      }
    }
  });

  it('re-exports every module of lib/js/PROD', () => {
    assert.deepEqual(modules, ['covmsg-binary.js', 'covmsg-text.js', 'covtext.js', 'elset.js', 'ephtrk.js', 'frames.js', 'record.js', 'residual.js', 'staterow.js', 'stmephemeris.js', 'tokens.js']);
  });

  it('exports every module export once: no name is exported by two modules', () => {
    for (const [name, list] of owners) assert.equal(list.length, 1, `${name} is exported by ${list.map((o) => o.file).join(', ')}`);
  });

  it('carries each module export as the same value, and nothing else', () => {
    for (const [name, [{ file, value }]] of owners) assert.equal(PROD[name], value, `PROD.${name} is ${file}'s`);
    assert.deepEqual(Object.keys(PROD).sort(), [...owners.keys()].sort());
  });

  it('exports every function the product pages document', () => {
    const documented = new Set();
    for (const page of pages) for (const m of page.matchAll(/`([a-z][A-Za-z0-9]*)\(/g)) documented.add(m[1]);
    assert.ok(documented.size >= 20, `${documented.size} documented functions`);
    for (const name of documented) assert.equal(typeof PROD[name], 'function', `PROD.${name} is a function`);
    for (const name of ['readTwoLine', 'readElementFile', 'readStmEphemeris', 'writeP1', 'writeP6', 'readP6', 'readP9']) assert.ok(documented.has(name), name);
  });

  it('exports every constant the product pages name', () => {
    const named = new Set();
    for (const page of pages) for (const m of page.matchAll(/`([A-Z][A-Z0-9_]+)`/g)) named.add(m[1]);
    for (const [name, [{ file, value }]] of owners) {
      if (typeof value === 'function' || !/^[A-Z][A-Z0-9_]+$/.test(name)) continue;
      if (named.has(name)) assert.equal(PROD[name], value, `${name} (${file})`);
    }
    for (const name of ['PARAMETERS', 'TOKENS', 'ELSET_REFUSAL_CODES', 'STM_EPHEMERIS_REFUSAL_CODES', 'TLE_LINE_LENGTH', 'P8_EPOCH_ROW']) assert.ok(name in PROD, name);
  });
});
