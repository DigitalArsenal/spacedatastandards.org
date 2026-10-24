#!/usr/bin/env node
// One E2E for $EPM DomainProof.DOMAINS (owner 2026-10-24: "it should be DOMAINS
// and a vector of strings"). The proof binds one or more fully-qualified domain
// names, so slot 0, which held one domain string (DOMAIN up to 1.264.0,
// DNS_DOMAIN in 1.265.0), is deprecated in place and DOMAINS: [string] is a new
// field appended after ENCODING. Retyping slot 0 would read a stored proof's
// string length as a vector count. This run proves:
//   1. the retired slot is deprecated, not retyped or reused, and nothing reads
//      it: the IDL keeps DNS_DOMAIN: string (deprecated) first and appends
//      DOMAINS: [string] last; the generated JS, Go and C++ have no accessor for
//      the old slot and write DOMAINS in slot 7; the JSON schema marks it deprecated and types DOMAINS as an array of strings;
//   2. the generated C++ headers of $EPM and of every standard that includes it
//      ($LDM, $LAM, $CQR) compile after <math.h> with no #undef, and a header
//      whose field is named DOMAIN does not, so the check can fail;
//   3. an $EPM whose DomainProof binds several domains (an internationalized one
//      in punycode among them) round-trips JS -> C++ -> Go -> JS, and JS
//      re-encoding reproduces the first buffer byte for byte;
//   4. buffers written by SDS 1.264.0 (DOMAIN) and 1.265.0 (DNS_DOMAIN) with the
//      domain string set (fixtures/epm-1264.fb, epm-1265.fb, written by the
//      generated JS of those releases) decode without error in JS, C++ and Go
//      with DOMAINS empty and every other field intact.
// Default: candidate (lib/ and dist/ of this tree). --published VERSION: the
// immutable npm archive and Go module of that release.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const published = process.argv[2] === '--published' ? process.argv[3] : null;
if (process.argv.length > 2) assert.match(published ?? '', /^\d+\.\d+\.\d+$/, 'usage: epm-domains.mjs [--published VERSION]');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-epm-domains-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
const attempt = (cmd, args, cwd = tmp) => { try { run(cmd, args, cwd); return null; } catch (error) { return error.stderr?.toString() ?? String(error); } };
const CXX = process.env.CXX || 'c++';
// The buffers earlier releases wrote, pinned so they cannot be regenerated under a new schema by accident.
const GOLDEN = [
  { release: '1.264.0', file: 'epm-1264', retired: 'DOMAIN', sha256: 'db4f3462f21afacd85ae3b42e765e4178a76da5fc701327f5ded17b6e4d556c8' },
  { release: '1.265.0', file: 'epm-1265', retired: 'DNS_DOMAIN', sha256: 'c95dc013312f753810c1cf4b13e01bc5eb67e98eeab461993b51f9419258dae4' },
];
// DomainProof as declared: slot 0 retired in place, the other six unchanged, DOMAINS appended as slot 7.
const DECLARED = ['DNS_DOMAIN', 'PUBLIC_KEY', 'KEY_PATH', 'SIGNATURE', 'SIGNED_PAYLOAD', 'ALGORITHM', 'ENCODING', 'DOMAINS'];
const READABLE = DECLARED.filter((name) => name !== 'DNS_DOMAIN');
const MANY = ['node.example.org', 'node.example.com', 'xn--bcher-kva.example'];
const summary = [];

try {
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  let artifact = root;
  let goRoot = path.join(root, 'lib/go');
  if (published) {
    const packed = JSON.parse(run('npm', ['pack', `spacedatastandards.org@${published}`, '--json', '--ignore-scripts', '--pack-destination', tmp]));
    assert.equal(packed[0].version, published);
    run('tar', ['-xzf', path.join(tmp, packed[0].filename), '-C', tmp]);
    artifact = path.join(tmp, 'package');
    const mod = JSON.parse(run('go', ['mod', 'download', '-json', `github.com/DigitalArsenal/spacedatastandards.org/lib/go@v${published}`]));
    assert.equal(mod.Version, `v${published}`);
    assert.ok(mod.Dir, mod.Error);
    goRoot = mod.Dir;
  }
  const version = JSON.parse(fs.readFileSync(path.join(artifact, 'package.json'))).version.split('+')[0];
  if (published) assert.equal(version, published);
  assert.match(version, /^1\.\d+\.\d+$/);

  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  assert.ok(runtime.Dir, runtime.Error);
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsepmdomainse2e\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const schemaRoot = path.join(artifact, 'schema');

  // ---- 1 (IDL). Slot 0 is still a string, deprecated; DOMAINS is the last field and a vector of strings; no field is named DOMAIN.
  const model = parseIdl(schemaRoot, 'EPM');
  assert.equal(model.root, 'EPM');
  const source = fs.readFileSync(path.join(schemaRoot, 'EPM/main.fbs'), 'utf8').replace(/\/\/[^\n]*/g, '');
  const body = source.match(/\btable\s+DomainProof\s*\{([^}]*)\}/)?.[1];
  assert.ok(body, 'the $EPM IDL declares DomainProof');
  const declared = body.split(';').map((f) => f.trim()).filter(Boolean).map((f) => {
    const m = f.match(/^(\w+)\s*:\s*(\[?\w+\]?)\s*(?:\(([^)]*)\))?$/);
    assert.ok(m, `cannot parse DomainProof field "${f}"`);
    return { name: m[1], type: m[2], attrs: m[3] ?? '' };
  });
  assert.deepEqual(declared.map((f) => f.name), DECLARED, 'DomainProof declares slot 0 retired, the six others unchanged, DOMAINS last');
  assert.deepEqual([declared[0].type, declared[0].attrs], ['string', 'deprecated'], 'slot 0 is still a string, deprecated in place, never retyped');
  assert.deepEqual(declared.slice(1, 7).map((f) => [f.type, f.attrs]), Array(6).fill(['string', '']), 'the six other fields keep their type');
  assert.deepEqual([declared[7].type, declared[7].attrs], ['[string]', ''], 'DOMAINS is [string], not required (a stored proof has no DOMAINS)');
  assert.deepEqual(model.tables.get('DomainProof').fields.map((f) => f.name), READABLE, 'the readable fields of DomainProof');
  assert.deepEqual(model.tables.get('DomainProof').fields.at(-1), { name: 'DOMAINS', vector: true, elem: 'string', def: null, required: false });
  for (const [name, table] of model.tables) assert.ok(!table.fields.some((f) => f.name === 'DOMAIN'), `${name} must not declare a field named DOMAIN`);

  // ---- 2. C++ headers after <math.h>, with no #undef.
  // $EPM and every standard whose IDL includes it, directly or through another.
  const includes = new Map();
  for (const code of fs.readdirSync(schemaRoot)) {
    const file = path.join(schemaRoot, code, 'main.fbs');
    if (!fs.existsSync(file)) continue;
    includes.set(code, [...fs.readFileSync(file, 'utf8').matchAll(/^\s*include\s+"\.\.\/([A-Z0-9]+)\/main\.fbs"\s*;/gm)].map((m) => m[1]));
  }
  const dependsOnEpm = (code, seen = new Set()) => {
    if (code === 'EPM') return true;
    if (seen.has(code)) return false;
    seen.add(code);
    return (includes.get(code) ?? []).some((c) => dependsOnEpm(c, seen));
  };
  const headers = [...includes.keys()].filter((code) => dependsOnEpm(code)).sort();
  for (const named of ['EPM', 'LDM', 'LAM', 'CQR']) assert.ok(headers.includes(named), `${named} must be among the standards that include $EPM`);
  const cppRoot = path.join(tmp, 'cpp');
  fs.mkdirSync(cppRoot);
  for (const code of headers) run('tar', ['-xzf', path.join(artifact, `dist/${code}/${code}.cpp.tar.gz`), '-C', cppRoot]);
  const probe = (name, text, extra = []) => {
    const file = path.join(tmp, `${name}.cpp`);
    fs.writeFileSync(file, text);
    return attempt(CXX, ['-std=c++17', '-fsyntax-only', '-ferror-limit=0', '-I', include, ...extra, file]);
  };
  // Does this platform's libc define the DOMAIN macro at all? (macOS and glibc with the SVID names do.)
  const macro = probe('libc-domain', '#include <math.h>\n#ifndef DOMAIN\n#error DOMAIN is not defined by <math.h>\n#endif\nint main() { return 0; }\n') === null;
  // The four the owner named must compile outright. The other standards that include $EPM must at least take no error from the $EPM
  // header; one that still fails because of a field another standard names like a libc macro is listed, never hidden.
  const NAMED = new Set(['EPM', 'LDM', 'LAM', 'CQR']);
  const blocked = [];
  for (const code of headers) {
    const failure = probe(`after-math-${code}`, `#include <math.h>\n#include <cmath>\n#include "${code}/main_generated.h"\nint main() { return 0; }\n`, ['-I', cppRoot]);
    if (failure === null) continue;
    assert.ok(!NAMED.has(code), `${code}: the generated C++ header must compile after <math.h> with no #undef\n${failure}`);
    const where = new Set([...failure.matchAll(/\/([A-Z0-9]+)\/main_generated\.h:\d+:\d+: error/g)].map((m) => m[1]));
    assert.ok(where.size > 0 && !where.has('EPM'), `${code}: the $EPM header must contribute no error after <math.h>\n${failure}`);
    blocked.push(`${code} (errors in ${[...where].sort().join(', ')})`);
  }
  let control = 'skipped, this libc does not define DOMAIN';
  const epmHeader = fs.readFileSync(path.join(cppRoot, 'EPM/main_generated.h'), 'utf8');
  if (macro) {
    // Negative control: the same $EPM header with the vector named DOMAIN must fail after <math.h>.
    const named = path.join(tmp, 'cpp-named-domain');
    fs.cpSync(cppRoot, named, { recursive: true });
    assert.ok(epmHeader.includes('DOMAINS()'), 'the $EPM header must carry the DOMAINS() accessor');
    fs.writeFileSync(path.join(named, 'EPM/main_generated.h'), epmHeader.replaceAll('DOMAINS', 'DOMAIN'));
    const failure = probe('control-named-domain', '#include <math.h>\n#include "EPM/main_generated.h"\nint main() { return 0; }\n', ['-I', named]);
    assert.notEqual(failure, null, 'a $EPM header with a field named DOMAIN must fail after <math.h>');
    assert.match(failure, /DOMAIN/, 'the failure must be the DOMAIN macro');
    control = 'a header with a field named DOMAIN fails after <math.h>';
  }
  summary.push(`C++ after <math.h> (libc DOMAIN macro ${macro ? 'present' : 'absent'}; ${control}): ${headers.filter((c) => !blocked.some((b) => b.startsWith(`${c} `))).join(', ')} compile${blocked.length ? `; blocked by other standards: ${blocked.join('; ')}` : ''}`);

  // ---- 1 (PHP). flatc's PHP generator leaves an empty parameter in createX() when the first field is deprecated, a parse error; the build repairs it.
  const phpFiles = headers.map((code) => path.join(artifact, `lib/php/${code}/DomainProof.php`));
  let phpNote = 'skipped, lib/php is not in the npm package';
  if (phpFiles.every((f) => fs.existsSync(f))) {
    phpNote = 'skipped, php is not installed';
    if (attempt('php', ['-v']) === null) {
      for (const f of phpFiles) {
        assert.ok(!/FlatBufferBuilder \$builder, ,/.test(fs.readFileSync(f, 'utf8')), `${f}: createDomainProof has an empty parameter`);
        assert.equal(attempt('php', ['-l', f]), null, `${f} must lint clean`);
      }
      phpNote = `${phpFiles.length} DomainProof.php files lint clean`;
    }
  }
  summary.push(`PHP: ${phpNote}`);

  // ---- 1 (generated code). No reader for the retired slot in JS, Go or C++; DOMAINS is written in slot 7 and nothing writes slot 0.
  const M = await import(pathToFileURL(path.join(artifact, 'lib/js/EPM/main.js')));
  const Type = M.EPM;
  for (const retired of ['DOMAIN', 'DNS_DOMAIN']) {
    assert.ok(!('DOMAIN' in new M.DomainProofT()) && !('DNS_DOMAIN' in new M.DomainProofT()), 'DomainProofT has no field for the retired slot');
    assert.equal(typeof M.DomainProof.prototype[retired], 'undefined', `generated JS has no ${retired}() reader`);
  }
  assert.equal(typeof M.DomainProof.prototype.DOMAINS, 'function');
  assert.equal(typeof M.DomainProof.prototype.domainsLength, 'function');
  assert.deepEqual(new M.DomainProofT().DOMAINS, [], 'DOMAINS defaults to empty');
  const proofJs = fs.readFileSync(path.join(artifact, 'lib/js/EPM/DomainProof.js'), 'utf8');
  assert.match(proofJs, /startObject\(8\)/, 'DomainProof has eight slots: the retired one and seven live');
  assert.deepEqual([...proofJs.matchAll(/addField\w+\((\d+),/g)].map((m) => Number(m[1])), [1, 2, 3, 4, 5, 6, 7], 'the builder writes slots 1 to 7 and never slot 0');
  assert.match(proofJs, /addFieldOffset\(7, DOMAINSOffset, 0\)/, 'DOMAINS is slot 7');
  const proofGo = fs.readFileSync(path.join(goRoot, 'EPM/DomainProof.go'), 'utf8');
  assert.ok(!/DNS_DOMAIN|\bDOMAIN\(|AddDOMAIN\b/.test(proofGo) && /DOMAINSLength\(\)/.test(proofGo), 'generated Go has DOMAINS and no reader for the retired slot');
  assert.ok(!/DNS_DOMAIN|\bDOMAIN\(\)|add_DOMAIN\b|VT_DOMAIN\b/.test(epmHeader) && /DOMAINS\(\)/.test(epmHeader), 'generated C++ has DOMAINS and no reader for the retired slot');
  const fbjson = JSON.parse(fs.readFileSync(path.join(artifact, 'lib/fbjson/EPM/main.fb.schema.json'), 'utf8'));
  const proofSchema = fbjson.definitions?.DomainProof;
  assert.ok(proofSchema?.properties, 'the JSON schema defines DomainProof');
  // flatc's JSON path (schema, printer, parser) still knows the deprecated slot, marked deprecated; typed readers do not.
  assert.deepEqual(Object.keys(proofSchema.properties), DECLARED, 'the JSON schema lists the slots in declaration order');
  assert.equal(proofSchema.properties.DNS_DOMAIN.deprecated, true, 'the retired slot is marked deprecated in the JSON schema');
  for (const name of READABLE) assert.ok(!proofSchema.properties[name].deprecated, `${name} is live in the JSON schema`);
  assert.deepEqual([proofSchema.properties.DOMAINS.type, proofSchema.properties.DOMAINS.items?.type], ['array', 'string'], 'DOMAINS is an array of strings in the JSON schema');
  assert.ok(!(proofSchema.required ?? []).includes('DOMAINS'), 'DOMAINS is not required: a stored proof has none');

  // ---- 3 and 4. Round trips: the multi-domain value, then the buffers earlier releases wrote.
  const reachable = closure(model, 'EPM');
  assert.deepEqual([...reachable].sort(), ['Address', 'ChainProof', 'CryptoKey', 'DomainProof', 'EPM'], 'the populated closure of $EPM');
  const visited = new Set();
  const value = populate(model, M, 'EPM', visited);
  assert.deepEqual([...visited].sort(), [...reachable].sort(), 'every reachable table must be populated');
  assert.ok(value.DOMAIN_PROOFS.length >= 2 && value.DOMAIN_PROOFS.every((p) => p instanceof M.DomainProofT && p.DOMAINS.length >= 2 && p.DOMAINS.every((d) => typeof d === 'string' && d.length > 0)));
  value.DOMAIN_PROOFS[0].DOMAINS = [...MANY];
  const fieldCount = reachable.reduce((n, t) => n + model.tables.get(t).fields.length, 0);

  const replacer = (_key, v) => (typeof v === 'bigint' ? { $int64: v.toString() } : v);
  const reviver = (_key, v) => (v && typeof v === 'object' && typeof v.$int64 === 'string' ? BigInt(v.$int64) : v);
  const dir = path.join(tmp, 'work');
  fs.mkdirSync(dir);
  const jobs = [['populated', value, null]];
  for (const g of GOLDEN) {
    const bytes = fs.readFileSync(path.join(root, `scripts/e2e/fixtures/${g.file}.fb`));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), g.sha256, `the ${g.release} golden buffer is pinned`);
    const bb = new fb.ByteBuffer(new Uint8Array(bytes));
    assert.ok(Type.bufferHasIdentifier(bb), `${g.release}: the golden buffer carries the $EPM identifier`);
    // What that release decoded, with the retired key gone and DOMAINS empty: every other field exactly as written.
    const before = JSON.parse(fs.readFileSync(path.join(root, `scripts/e2e/fixtures/${g.file}.json`), 'utf8'), reviver);
    assert.ok(before.DOMAIN_PROOFS.length >= 2 && before.DOMAIN_PROOFS.every((p) => g.retired in p && !('DOMAINS' in p)), `${g.release} decoded DomainProof under the key ${g.retired}`);
    assert.equal(before.DOMAIN_PROOFS[0][g.retired], 'node.example.org', `${g.release}: the buffer has its domain string set`);
    const expected = structuredClone(before);
    expected.DOMAIN_PROOFS = before.DOMAIN_PROOFS.map((p) => ({ ...Object.fromEntries(Object.entries(p).filter(([k]) => k !== g.retired)), DOMAINS: [] }));
    jobs.push([g.file, Type.getRootAsEPM(bb).unpack(), { bytes, expected, release: g.release }]);
  }
  for (const [name, object, golden] of jobs) {
    if (golden) { fs.writeFileSync(path.join(dir, `${name}.js.fb`), golden.bytes); continue; }
    const b = new fb.Builder(1024);
    Type.finishEPMBuffer(b, object.pack(b));
    fs.writeFileSync(path.join(dir, `${name}.js.fb`), b.asUint8Array());
  }

  const populatedTables = [...new Set(['EPM', ...reachable])];
  fs.writeFileSync(path.join(dir, 'copy.cpp'), `#include <math.h>\n${cppCopySource({ model, root: 'EPM', include: 'EPM/main_generated.h', populated: populatedTables })}`);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'copy.cpp', '-o', 'copy'], dir);
  run(path.join(dir, 'copy'), jobs.flatMap(([name]) => [`${name}.js.fb`, `${name}.cpp.fb`]), dir);

  const goDir = path.join(tmp, 'EPM');
  // The Go module cache is read-only: copy the package and make it writable so the harness file can be added.
  run('cp', ['-R', path.join(goRoot, 'EPM'), goDir]);
  run('chmod', ['-R', 'u+w', goDir]);
  fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goCopySource({ model, root: 'EPM', pkg: 'EPM', populated: populatedTables }));
  fs.mkdirSync(path.join(tmp, 'runEPM'), { recursive: true });
  fs.writeFileSync(path.join(tmp, 'runEPM', 'main.go'), 'package main\nimport (\n "os"\n p "sdsepmdomainse2e/EPM"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n');
  run('go', ['run', '-mod=mod', './runEPM', ...jobs.flatMap(([name]) => [path.join(dir, `${name}.cpp.fb`), path.join(dir, `${name}.go.fb`)])]);

  const plain = (object) => JSON.parse(JSON.stringify(object, replacer), reviver);
  for (const [name, expected, golden] of jobs) {
    const original = fs.readFileSync(path.join(dir, `${name}.js.fb`));
    for (const rt of ['js', 'cpp', 'go']) {
      const bytes = fs.readFileSync(path.join(dir, `${name}.${rt}.fb`));
      const bb = new fb.ByteBuffer(new Uint8Array(bytes));
      assert.ok(Type.bufferHasIdentifier(bb), `${name}: file identifier after ${rt}`);
      const back = Type.getRootAsEPM(bb).unpack();
      if (golden) {
        // An earlier release's buffer: it decodes, the retired string is not read, DOMAINS is empty, everything else is as written.
        assert.deepStrictEqual(plain(back), golden.expected, `${golden.release} buffer: ${rt} did not decode to what ${golden.release} wrote, minus the retired string`);
        assert.ok(back.DOMAIN_PROOFS.every((p) => Array.isArray(p.DOMAINS) && p.DOMAINS.length === 0), `${golden.release} buffer: DOMAINS is empty after ${rt}`);
        continue;
      }
      assert.deepStrictEqual(back, expected, `${name}: ${rt} changed a field`);
      assert.deepEqual(back.DOMAIN_PROOFS[0].DOMAINS, MANY, `${name}: the domains survive ${rt} in order`);
      if (rt === 'go') {
        // byte for byte: re-encoding what Go wrote reproduces the first buffer exactly
        const again = new fb.Builder(1024);
        Type.finishEPMBuffer(again, back.pack(again));
        assert.equal(Buffer.compare(Buffer.from(again.asUint8Array()), original), 0, `${name}: JS re-encoding differs from the original bytes`);
      }
    }
  }

  // Negative control: a copy that drops DOMAINS, the new field, must be caught by the same comparison.
  const decode = (file) => Type.getRootAsEPM(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(path.join(dir, file))))).unpack();
  const cppSource = fs.readFileSync(path.join(dir, 'copy.cpp'), 'utf8');
  const cppControl = cppSource.replace('x.add_DOMAINS(v_DOMAINS);', '');
  assert.notEqual(cppControl, cppSource, 'control mutation must apply to the C++ copy');
  fs.writeFileSync(path.join(dir, 'control.cpp'), cppControl);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'control.cpp', '-o', 'control'], dir);
  run(path.join(dir, 'control'), ['populated.js.fb', 'control.cpp.fb'], dir);
  assert.throws(() => assert.deepStrictEqual(decode('control.cpp.fb'), value), 'a C++ copy that drops DomainProof.DOMAINS must differ');
  const goSource = fs.readFileSync(path.join(goDir, 'wire_e2e.go'), 'utf8');
  const goControl = goSource.replace('DomainProofAddDOMAINS(b, v_DOMAINS)', '');
  assert.notEqual(goControl, goSource, 'control mutation must apply to the Go copy');
  fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goControl);
  run('go', ['run', '-mod=mod', './runEPM', path.join(dir, 'populated.cpp.fb'), path.join(dir, 'control.go.fb')]);
  assert.throws(() => assert.deepStrictEqual(decode('control.go.fb'), value), 'a Go copy that drops DomainProof.DOMAINS must differ');

  const full = fs.readFileSync(path.join(dir, 'populated.js.fb'));
  summary.push(`EPM: ${reachable.length} tables, ${fieldCount} fields, ${MANY.length} domains in the first proof, ${full.length} bytes sha256 ${crypto.createHash('sha256').update(full).digest('hex').slice(0, 16)}`);
  summary.push(`earlier buffers (${GOLDEN.map((g) => `${g.release} ${g.retired}`).join(', ')}): decode in JS, C++ and Go, DOMAINS empty, every other field intact`);
  console.log(`PASS: ${published ? 'published' : 'candidate'} SDS ${version}; JS -> C++ -> Go -> JS, byte for byte; ${summary.join('; ')}`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
