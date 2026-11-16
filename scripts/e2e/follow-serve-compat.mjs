#!/usr/bin/env node
// Bidirectional QRP/DSS compatibility with the generated 1.282.0 TypeScript and Go bindings.
// All records are size-prefixed FlatBuffers. Every original field is populated.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import * as fb from 'flatbuffers';
import { parseIdl, populate, completeWithDefaults, goCopySource } from './lib/idl-wire.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const baseline = 'fcc0574f26';
const tmp = fs.mkdtempSync(path.join(root, '.follow-compat-'));
const run = (cmd, args, cwd = root) => execFileSync(cmd, args, { cwd, encoding: 'utf8' });
const plain = (v) => typeof v === 'bigint' ? v : Array.isArray(v) ? v.map(plain)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, plain(x)])) : v;
const additions = {
  QRP: { FOLLOW: true },
  DSS: { SUBSCRIBER_COUNT: 4294967295, SERVED_BYTES: 9007199254740993n, SERVE_SPEED_BYTES_PER_SECOND: 18446744073709551615n },
};
try {
  const oldRoot = path.join(tmp, 'old');
  // Retrieve committed bindings, not regenerated substitutes for the old release.
  for (const code of ['QRP', 'DSS']) {
    const files = run('git', ['ls-tree', '-r', '--name-only', baseline, '--',
      `schema/${code}`, `lib/ts/${code}`, `lib/go/${code}`]).trim().split('\n');
    for (const file of files) {
      const target = path.join(oldRoot, file);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, execFileSync('git', ['show', `${baseline}:${file}`], { cwd: root }));
    }
  }
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module followcompat\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  for (const code of ['QRP', 'DSS']) {
    const versions = {};
    for (const [version, base] of [['old', oldRoot], ['new', root]]) {
      const model = parseIdl(path.join(base, 'schema'), code);
      const bundle = path.join(tmp, `${version}-${code}.mjs`);
      await build({ entryPoints: [path.join(base, `lib/ts/${code}/main.ts`)], bundle: true,
        platform: 'node', format: 'esm', outfile: bundle, logLevel: 'silent' });
      const M = await import(pathToFileURL(bundle));
      versions[version] = { model, M };
    }
    const oldFields = versions.old.model.tables.get(code).fields;
    const newFields = versions.new.model.tables.get(code).fields;
    assert.deepEqual(newFields.slice(0, oldFields.length), oldFields, `${code}: existing fields retain their slots and types`);
    assert.deepEqual(newFields.slice(oldFields.length).map(f => f.name), Object.keys(additions[code]));
    const visited = new Set();
    const original = populate(versions.old.model, versions.old.M, code, visited);
    // Exercise 64-bit byte counts beyond JavaScript's exact Number range.
    if (code === 'DSS') original.DOWNLOADED_BYTES = 9007199254740995n;
    const expected = { old: plain(original), new: { ...plain(original), ...additions[code] } };
    const inputs = {};
    for (const version of ['old', 'new']) {
      const { M } = versions[version];
      const value = Object.assign(new M[`${code}T`](), original, version === 'new' ? additions[code] : {});
      const b = new fb.Builder(1024);
      b.finishSizePrefixed(value.pack(b), `$${code}`);
      inputs[version] = path.join(tmp, `ts-${version}-${code}.fb`);
      fs.writeFileSync(inputs[version], b.asUint8Array());
    }
    const check = (file, sourceVersion) => {
      const bytes = fs.readFileSync(file);
      assert.equal(bytes.readUInt32LE(0), bytes.length - 4);
      for (const targetVersion of ['old', 'new']) {
        const { M, model } = versions[targetVersion];
        const bb = new fb.ByteBuffer(bytes.subarray(4));
        assert.ok(M[code].bufferHasIdentifier(bb));
        const actual = plain(M[code][`getRootAs${code}`](bb).unpack());
        const wanted = targetVersion === 'old' ? expected.old
          : completeWithDefaults(model, M, code, expected[sourceVersion]);
        assert.deepEqual(actual, wanted, `${code}: ${path.basename(file)} read by ${targetVersion}`);
      }
    };
    for (const version of ['old', 'new']) check(inputs[version], version);
    for (const version of ['old', 'new']) {
      const base = version === 'old' ? oldRoot : root;
      const dir = path.join(tmp, `${version}${code}`);
      fs.cpSync(path.join(base, `lib/go/${code}`), dir, { recursive: true });
      const { model } = versions[version];
      let source = goCopySource({ model, root: code, pkg: code, populated: [...visited] });
      source = source.replaceAll(`${code}BufferHasIdentifier(data)`, `SizePrefixed${code}BufferHasIdentifier(data)`)
        .replaceAll(`Finish${code}Buffer(b,`, `FinishSizePrefixed${code}Buffer(b,`)
        .replaceAll(`GetRootAs${code}(data, 0)`, `GetSizePrefixedRootAs${code}(data, 0)`);
      fs.writeFileSync(path.join(dir, 'compat.go'), source);
      const main = path.join(tmp, `main-${version}-${code}.go`);
      fs.writeFileSync(main, `package main\nimport ("os"; binding "followcompat/${version}${code}")\nfunc main() { binding.WireE2E(os.Args[1:]) }\n`);
      const binary = path.join(tmp, `copy-${version}-${code}`);
      run('go', ['build', '-mod=mod', '-o', binary, main], tmp);
      const pairs = [];
      for (const inputVersion of ['old', 'new']) pairs.push(inputs[inputVersion], path.join(tmp, `go-${version}-from-${inputVersion}-${code}.fb`));
      run(binary, pairs, tmp);
      for (let i = 0; i < pairs.length; i += 2) {
        // Old Go deliberately drops the appended fields; new Go preserves them.
        check(pairs[i + 1], version === 'new' && i === 2 ? 'new' : 'old');
      }
    }
    console.log(`PASS ${code}: ${oldFields.length} original root fields, populated nested fields, old/new TypeScript and Go readers/builders, defaults and appended values`);
  }
  console.log('PASS follow-serve-compat: 24 cross-version decodes; no signatures or network fixtures');
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
