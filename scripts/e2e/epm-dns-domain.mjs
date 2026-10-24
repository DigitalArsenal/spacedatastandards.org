#!/usr/bin/env node
// One E2E for the rename of $EPM DomainProof.DOMAIN to DNS_DOMAIN (owner
// 2026-10-24). libc's <math.h> defines a DOMAIN macro, so the generated C++
// accessor DOMAIN() broke every translation unit that included the $EPM header,
// and the headers of the standards that include it. The field keeps its wire
// slot, so only generated names and JSON keys change. This run proves:
//   1. the generated C++ headers of $EPM and of every standard that includes
//      it ($LDM, $LAM, $CQR) compile after <math.h> with no #undef, and the
//      header of 1.264.0's shape (DOMAIN) does not, so the check can fail;
//   2. an $EPM with every table and field populated, DomainProof included,
//      round-trips JS -> C++ -> Go -> JS, and JS re-encoding reproduces the
//      first buffer byte for byte;
//   3. a buffer written under the old name (fixtures/epm-1264.fb, written by
//      the generated JS of SDS 1.264.0, the last release whose DomainProof field
//      is DOMAIN) decodes under the new name in JS, C++ and Go to exactly the
//      value 1.264.0 decoded (fixtures/epm-1264.json), the one difference being
//      the key DOMAIN -> DNS_DOMAIN, and JS re-encoding reproduces its bytes;
//   4. nothing keeps the old name alive: no DOMAIN field in the IDL, the
//      generated JS or the JSON schema.
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
if (process.argv.length > 2) assert.match(published ?? '', /^\d+\.\d+\.\d+$/, 'usage: epm-dns-domain.mjs [--published VERSION]');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-epm-dns-domain-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
const attempt = (cmd, args, cwd = tmp) => { try { run(cmd, args, cwd); return null; } catch (error) { return error.stderr?.toString() ?? String(error); } };
const CXX = process.env.CXX || 'c++';
// The golden buffer SDS 1.264.0 wrote, pinned so it cannot be regenerated under the new name by accident.
const GOLDEN_SHA256 = 'db4f3462f21afacd85ae3b42e765e4178a76da5fc701327f5ded17b6e4d556c8';
const DOMAIN_PROOF_FIELDS = ['DNS_DOMAIN', 'PUBLIC_KEY', 'KEY_PATH', 'SIGNATURE', 'SIGNED_PAYLOAD', 'ALGORITHM', 'ENCODING'];
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
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsepmdnsdomaine2e\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const schemaRoot = path.join(artifact, 'schema');

  // ---- 4 (IDL part). The field is DNS_DOMAIN, first in DomainProof (slot 0 as before), and no $EPM table has a field DOMAIN.
  const model = parseIdl(schemaRoot, 'EPM');
  assert.equal(model.root, 'EPM');
  assert.deepEqual(model.tables.get('DomainProof').fields.map((f) => f.name), DOMAIN_PROOF_FIELDS, 'DomainProof keeps its seven fields in their slots, the first renamed');
  assert.equal(model.tables.get('DomainProof').fields[0].elem, 'string');
  for (const [name, table] of model.tables) assert.ok(!table.fields.some((f) => f.name === 'DOMAIN'), `${name} must not declare a field named DOMAIN`);

  // ---- 1. C++ headers after <math.h>, with no #undef.
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
  const probe = (name, source, extra = []) => {
    const file = path.join(tmp, `${name}.cpp`);
    fs.writeFileSync(file, source);
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
  if (macro) {
    // Negative control: the same $EPM header with the field named DOMAIN again must fail after <math.h>.
    const oldRoot = path.join(tmp, 'cpp-old');
    fs.cpSync(cppRoot, oldRoot, { recursive: true });
    const headerPath = path.join(oldRoot, 'EPM/main_generated.h');
    const current = fs.readFileSync(headerPath, 'utf8');
    assert.ok(current.includes('DNS_DOMAIN()'), 'the $EPM header must carry the DNS_DOMAIN() accessor');
    fs.writeFileSync(headerPath, current.replaceAll('DNS_DOMAIN', 'DOMAIN'));
    const failure = probe('control-old-name', '#include <math.h>\n#include "EPM/main_generated.h"\nint main() { return 0; }\n', ['-I', oldRoot]);
    assert.notEqual(failure, null, 'a $EPM header whose field is named DOMAIN must fail after <math.h>');
    assert.match(failure, /DOMAIN/, 'the failure must be the DOMAIN macro');
    control = 'a header named DOMAIN fails after <math.h>';
  }
  summary.push(`C++ after <math.h> (libc DOMAIN macro ${macro ? 'present' : 'absent'}; ${control}): ${headers.filter((c) => !blocked.some((b) => b.startsWith(`${c} `))).join(', ')} compile${blocked.length ? `; blocked by other standards: ${blocked.join('; ')}` : ''}`);

  // ---- 2 and 3. Round trips: the populated value, then the buffer written under the old name.
  const M = await import(pathToFileURL(path.join(artifact, 'lib/js/EPM/main.js')));
  const Type = M.EPM;
  const reachable = closure(model, 'EPM');
  assert.deepEqual([...reachable].sort(), ['Address', 'ChainProof', 'CryptoKey', 'DomainProof', 'EPM'], 'the populated closure of $EPM');
  const visited = new Set();
  const value = populate(model, M, 'EPM', visited);
  assert.deepEqual([...visited].sort(), [...reachable].sort(), 'every reachable table must be populated');
  assert.ok(value.DOMAIN_PROOFS.length > 0 && value.DOMAIN_PROOFS.every((p) => p instanceof M.DomainProofT && typeof p.DNS_DOMAIN === 'string' && p.DNS_DOMAIN.length > 0));
  const fieldCount = reachable.reduce((n, t) => n + model.tables.get(t).fields.length, 0);

  const goldenBytes = fs.readFileSync(path.join(root, 'scripts/e2e/fixtures/epm-1264.fb'));
  assert.equal(crypto.createHash('sha256').update(goldenBytes).digest('hex'), GOLDEN_SHA256, 'the 1.264.0 golden buffer is pinned');
  const goldenBb = () => new fb.ByteBuffer(new Uint8Array(goldenBytes));
  assert.ok(Type.bufferHasIdentifier(goldenBb()), 'the golden buffer carries the $EPM identifier');
  const golden = Type.getRootAsEPM(goldenBb()).unpack();

  const dir = path.join(tmp, 'work');
  fs.mkdirSync(dir);
  const jobs = [['populated', value], ['old-name', golden]];
  for (const [name, object] of jobs) {
    if (name === 'old-name') { fs.writeFileSync(path.join(dir, `${name}.js.fb`), goldenBytes); continue; }
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
  fs.writeFileSync(path.join(tmp, 'runEPM', 'main.go'), 'package main\nimport (\n "os"\n p "sdsepmdnsdomaine2e/EPM"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n');
  run('go', ['run', '-mod=mod', './runEPM', ...jobs.flatMap(([name]) => [path.join(dir, `${name}.cpp.fb`), path.join(dir, `${name}.go.fb`)])]);

  for (const [name, expected] of jobs) {
    const original = fs.readFileSync(path.join(dir, `${name}.js.fb`));
    for (const rt of ['js', 'cpp', 'go']) {
      const bytes = fs.readFileSync(path.join(dir, `${name}.${rt}.fb`));
      const bb = new fb.ByteBuffer(new Uint8Array(bytes));
      assert.ok(Type.bufferHasIdentifier(bb), `${name}: file identifier after ${rt}`);
      const back = Type.getRootAsEPM(bb).unpack();
      assert.deepStrictEqual(back, expected, `${name}: ${rt} changed a field`);
      if (rt === 'go') {
        // byte for byte: re-encoding what Go wrote reproduces the first buffer exactly
        const again = new fb.Builder(1024);
        Type.finishEPMBuffer(again, back.pack(again));
        assert.equal(Buffer.compare(Buffer.from(again.asUint8Array()), original), 0, `${name}: JS re-encoding differs from the original bytes`);
      }
    }
  }

  // Negative control: a copy that drops DNS_DOMAIN, the renamed field, must be caught by the same comparison.
  const decode = (file) => Type.getRootAsEPM(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(path.join(dir, file))))).unpack();
  const cppSource = fs.readFileSync(path.join(dir, 'copy.cpp'), 'utf8');
  const cppControl = cppSource.replace('x.add_DNS_DOMAIN(v_DNS_DOMAIN);', '');
  assert.notEqual(cppControl, cppSource, 'control mutation must apply to the C++ copy');
  fs.writeFileSync(path.join(dir, 'control.cpp'), cppControl);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'control.cpp', '-o', 'control'], dir);
  run(path.join(dir, 'control'), ['populated.js.fb', 'control.cpp.fb'], dir);
  assert.throws(() => assert.deepStrictEqual(decode('control.cpp.fb'), value), 'a C++ copy that drops DomainProof.DNS_DOMAIN must differ');
  const goSource = fs.readFileSync(path.join(goDir, 'wire_e2e.go'), 'utf8');
  const goControl = goSource.replace('DomainProofAddDNS_DOMAIN(b, v_DNS_DOMAIN)', '');
  assert.notEqual(goControl, goSource, 'control mutation must apply to the Go copy');
  fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goControl);
  run('go', ['run', '-mod=mod', './runEPM', path.join(dir, 'populated.cpp.fb'), path.join(dir, 'control.go.fb')]);
  assert.throws(() => assert.deepStrictEqual(decode('control.go.fb'), value), 'a Go copy that drops DomainProof.DNS_DOMAIN must differ');

  // The old-name buffer decodes to exactly what 1.264.0 decoded, the one key renamed.
  const replacer = (_key, v) => (typeof v === 'bigint' ? { $int64: v.toString() } : v);
  const reviver = (_key, v) => (v && typeof v === 'object' && typeof v.$int64 === 'string' ? BigInt(v.$int64) : v);
  const before = JSON.parse(fs.readFileSync(path.join(root, 'scripts/e2e/fixtures/epm-1264.json'), 'utf8'), reviver);
  assert.ok(before.DOMAIN_PROOFS.length >= 2 && before.DOMAIN_PROOFS.every((p) => 'DOMAIN' in p && !('DNS_DOMAIN' in p)), '1.264.0 decoded DomainProof under the key DOMAIN');
  assert.equal(before.DOMAIN_PROOFS[0].DOMAIN, 'node.example.org');
  const renamed = structuredClone(before);
  renamed.DOMAIN_PROOFS = before.DOMAIN_PROOFS.map((p) => Object.fromEntries(Object.entries(p).map(([k, v]) => [k === 'DOMAIN' ? 'DNS_DOMAIN' : k, v])));
  assert.deepStrictEqual(JSON.parse(JSON.stringify(golden, replacer), reviver), renamed, 'the old-name buffer decodes identically under the new name');
  assert.equal(golden.DOMAIN_PROOFS[0].DNS_DOMAIN, 'node.example.org');

  // ---- 4 (generated names). Nothing keeps the old name alive: no alias in JS, none in the JSON schema.
  assert.ok(!('DOMAIN' in new M.DomainProofT()) && typeof M.DomainProof.prototype.DOMAIN === 'undefined' && typeof M.DomainProof.prototype.DNS_DOMAIN === 'function', 'generated JS has DNS_DOMAIN and no DOMAIN');
  const fbjson = JSON.parse(fs.readFileSync(path.join(artifact, 'lib/fbjson/EPM/main.fb.schema.json'), 'utf8'));
  const proofSchema = fbjson.definitions?.DomainProof;
  assert.ok(proofSchema?.properties, 'the JSON schema defines DomainProof');
  assert.deepEqual(Object.keys(proofSchema.properties), DOMAIN_PROOF_FIELDS, 'the JSON schema names the DomainProof key DNS_DOMAIN, in slot order, and has no DOMAIN');
  for (const t of reachable) for (const f of model.tables.get(t).fields) assert.ok(JSON.stringify(fbjson).includes(`"${f.name}"`), `fbjson schema lacks ${t}.${f.name}`);

  const full = fs.readFileSync(path.join(dir, 'populated.js.fb'));
  summary.push(`EPM: ${reachable.length} tables, ${fieldCount} fields, ${full.length} bytes sha256 ${crypto.createHash('sha256').update(full).digest('hex').slice(0, 16)}`);
  summary.push(`old-name buffer (SDS 1.264.0): ${goldenBytes.length} bytes decode identically in JS, C++ and Go, DOMAIN -> DNS_DOMAIN`);
  console.log(`PASS: ${published ? 'published' : 'candidate'} SDS ${version}; JS -> C++ -> Go -> JS, byte for byte; ${summary.join('; ')}`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
