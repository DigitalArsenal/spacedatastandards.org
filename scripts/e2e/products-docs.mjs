#!/usr/bin/env node
// One E2E for docs/products: the README and the nine product pages exist; the refusal codes on each page are the
// codes its lib/ts/PROD module exports, parsed from the sources (the first argument of every refuse(...) call and
// every exported *REFUSAL_CODES array); every worked example equals the committed expected fixture byte for byte;
// the pages use American spelling.
//
// Pages and the modules whose codes they state: README record, tokens and frames (the shared codes); P1 ephtrk;
// P2 staterow; P3 and P4 covtext; P5 covmsg-text; P6 covmsg-binary; P7 elset; P8 stmephemeris; P9 residual.
// A code is a backticked span on a page shaped like `word-word[:detail]`; `<name>` in it is a placeholder.
//   Required: every code of the page's own module appears on the page (a code naming another product's token,
//     such as field-width:P3.COV on the P4 page, belongs to that product's page only).
//   Allowed: every code on the page is a code of its module or of a PROD module it imports; a placeholder the
//     page fills with a name must take that name from the text of those sources.
// Examples: `<!-- example: <fixture> -->` before a fenced block (the fixture's text), or `<!-- example-hex:
// <fixture> -->` before a fenced hex dump (`oooooooo: hh hh ...`, the fixture's bytes); every file under
// test/fixtures/prod/expected is the example of exactly one page, the page of its product.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DOCS = 'docs/products';
const SOURCES = 'lib/ts/PROD';
const EXPECTED = 'test/fixtures/prod/expected';
const HOLE = '\u0000';
const PAGES = new Map([
  ['README', ['record', 'tokens', 'frames']],
  ['P1', ['ephtrk']], ['P2', ['staterow']], ['P3', ['covtext']], ['P4', ['covtext']], ['P5', ['covmsg-text']],
  ['P6', ['covmsg-binary']], ['P7', ['elset']], ['P8', ['stmephemeris']], ['P9', ['residual']],
]);
const BRITISH = [
  /\b(colour|behaviour|favour|honour|labour|neighbour|centre|metre|litre|fibre|licence|defence|offence|catalogue|dialogue|programme|artefact|aluminium|judgement|whilst|amongst|grey|analyse|analysed|analysing)(s|ed|ing)?\b/gi,
  /\b(organis|recognis|optimis|normalis|initialis|serialis|minimis|maximis|parameteris|standardis|synchronis|summaris|characteris|finalis|utilis)(e|es|ed|ing|ation|ations|er|ers)\b/gi,
  /\b(model|label|travel|cancel|signal|channel|fuel|total)l(ed|ing|er|ers)\b/gi,
];
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// ---- codes in the sources -----------------------------------------------------------------------------------

/** A code with every `${...}` and `<name>` replaced by one placeholder character. */
function normalize(text) {
  let out = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$' && text[i + 1] === '{') {
      let depth = 1, j = i + 2;
      while (j < text.length && depth) { if (text[j] === '{') depth++; else if (text[j] === '}') depth--; j++; }
      out += HOLE;
      i = j - 1;
    } else out += text[i];
  }
  return out.replace(/<[^<>\s]+>/g, HOLE);
}
/** The string literal ('...' or `...`) starting at text[at] and the index after it, or null. */
function literalAt(text, at) {
  const quote = text[at];
  if (quote !== "'" && quote !== '`') return null;
  let depth = 0;
  for (let j = at + 1; j < text.length; j++) {
    if (text[j] === '\\') { j++; continue; }
    if (quote === '`' && text[j] === '$' && text[j + 1] === '{') { depth++; j++; continue; }
    if (depth && text[j] === '}') { depth--; continue; }
    if (!depth && text[j] === quote) return { value: text.slice(at + 1, j), end: j + 1 };
  }
  return null;
}
/** Every string literal of the call argument starting at text[at] (up to its top-level comma): a code, or each
 * branch of a conditional code. */
function argumentLiterals(text, at) {
  const out = [];
  let depth = 0;
  for (let j = at; j < text.length; j++) {
    const c = text[j];
    const literal = literalAt(text, j);
    if (literal) { out.push(literal.value); j = literal.end - 1; continue; }
    if ('([{'.includes(c)) depth++;
    else if (')]}'.includes(c)) { if (!depth) break; depth--; }
    else if (c === ',' && !depth) break;
  }
  return out;
}
const sourceCache = new Map();
function moduleOf(name) {
  if (sourceCache.has(name)) return sourceCache.get(name);
  const text = read(`${SOURCES}/${name}.ts`);
  const codes = new Set();
  for (const m of text.matchAll(/\brefuse(?:<[^>(]*>)?\(\s*/g)) {
    for (const literal of argumentLiterals(text, m.index + m[0].length)) codes.add(normalize(literal));
  }
  for (const m of text.matchAll(/export const \w*REFUSAL_CODES\b[^=]*=\s*\[([\s\S]*?)\];/g)) {
    for (const s of m[1].matchAll(/'([^']*)'/g)) codes.add(normalize(s[1]));
  }
  const imports = [...text.matchAll(/from '\.\/([\w-]+)\.js'/g)].map((m) => m[1]);
  const mod = { name, text, codes: [...codes], imports };
  sourceCache.set(name, mod);
  return mod;
}
function closure(names) {
  const seen = new Set();
  const walk = (n) => { if (seen.has(n)) return; seen.add(n); for (const i of moduleOf(n).imports) walk(i); };
  names.forEach(walk);
  return [...seen].map(moduleOf);
}
const patternOf = (code) => new RegExp(`^${code.split(HOLE).map(escape).join('(.+?)')}$`, 's');
const namesProduct = (code) => /\bP([1-9])\./.exec(code)?.[1] ?? null;

// ---- the pages ----------------------------------------------------------------------------------------------

const CODE_SPAN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)+(?::\S+)?$/;
function pageCodes(text) {
  const out = new Set();
  for (const m of text.matchAll(/`([^`\n]+)`/g)) if (CODE_SPAN.test(m[1])) out.add(m[1]);
  return [...out];
}
function examples(page, text) {
  const out = [];
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const m = /^<!-- (example|example-hex): (\S+) -->$/.exec(lines[i]);
    if (!m) continue;
    assert.match(lines[i + 1] ?? '', /^```text$/, `${page}: the example ${m[2]} opens a fenced text block on the next line`);
    const end = lines.indexOf('```', i + 2);
    assert.ok(end > i + 1, `${page}: the example ${m[2]} block is closed`);
    out.push({ kind: m[1], fixture: m[2], body: lines.slice(i + 2, end) });
    i = end;
  }
  return out;
}
function hexBytes(page, body) {
  const bytes = [];
  for (const line of body) {
    const m = /^([0-9a-f]{8}):((?: [0-9a-f]{2})+)$/.exec(line);
    assert.ok(m, `${page}: hex dump line "${line}"`);
    assert.equal(parseInt(m[1], 16), bytes.length, `${page}: hex dump offset ${m[1]}`);
    bytes.push(...m[2].trim().split(' ').map((h) => parseInt(h, 16)));
  }
  return Buffer.from(bytes);
}

const fixtures = fs.readdirSync(path.join(root, EXPECTED)).sort();
const used = new Map();
let required = 0, listed = 0;
for (const [page, modules] of PAGES) {
  const file = `${DOCS}/${page}.md`;
  assert.ok(fs.existsSync(path.join(root, file)), `${file} exists`);
  const text = read(file);

  for (const pattern of BRITISH) for (const m of text.matchAll(pattern)) assert.fail(`${file}: British spelling "${m[0]}"`);

  const codes = pageCodes(text);
  const own = [...new Set(modules.flatMap((n) => moduleOf(n).codes))];
  for (const code of own) {
    const product = namesProduct(code);
    if (page !== 'README' && product !== null && `P${product}` !== page) continue;
    const re = patternOf(code);
    assert.ok(codes.some((c) => re.test(normalize(c))), `${file} states the code ${code.replaceAll(HOLE, '<>')} of ${modules.join(', ')}`);
    required++;
  }
  const reach = closure(modules);
  const sourceText = reach.map((m) => m.text).join('\n');
  for (const c of codes) {
    const n = normalize(c);
    const ok = reach.some((m) => m.codes.some((code) => {
      const hit = patternOf(code).exec(n);
      return hit !== null && hit.slice(1).every((fill) => fill.split(HOLE).every((piece) => piece === '' || sourceText.includes(piece)));
    }));
    assert.ok(ok, `${file} names ${c}, which ${reach.map((m) => m.name).join(', ')} do not export`);
    listed++;
  }

  const blocks = examples(page, text);
  if (page !== 'README') assert.ok(blocks.length >= 1, `${file} has a worked example`);
  for (const b of blocks) {
    const name = path.posix.basename(b.fixture);
    assert.equal(b.fixture, `${EXPECTED}/${name}`, `${file}: the example names a committed expected fixture`);
    assert.ok(fixtures.includes(name), `${file}: ${b.fixture} exists`);
    assert.equal(name.split(/[-.]/)[0].toUpperCase(), page, `${file}: ${name} is its own product's fixture`);
    assert.ok(!used.has(name), `${name} is the example of one page only`);
    used.set(name, page);
    const expected = fs.readFileSync(path.join(root, b.fixture));
    if (b.kind === 'example-hex') {
      assert.equal(Buffer.compare(hexBytes(page, b.body), expected), 0, `${file}: the hex dump equals ${b.fixture} byte for byte`);
    } else {
      assert.equal(Buffer.compare(Buffer.from(`${b.body.join('\n')}\n`, 'utf8'), expected), 0, `${file}: the example equals ${b.fixture} byte for byte`);
    }
  }
}
for (const name of fixtures) assert.ok(used.has(name), `${EXPECTED}/${name} is a page's worked example`);
console.log(`products-docs: PASS ${PAGES.size} pages; ${required} module codes stated, ${listed} page codes exported; ${used.size} examples byte-equal to ${EXPECTED}`);
