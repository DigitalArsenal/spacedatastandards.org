// FlatSQL store format 5 frames ($FMB, $FCK, $FSG) and the DPM CAR_ARCHIVE
// amendment, end to end: a linear [u32 LE size][FlatBuffer] feed stream is built
// with lib/js (two OMM records, their sibling $FMB, a $FSG segment and a $FCK
// checkpoint), walked as a stock reader walks it, each record range is checked
// against its row's sha2-256 digest, and every frame (plus a backup-catalog DPM)
// round-trips JS -> C++ -> JS through lib/js and lib/cpp with a C++ copier
// generated from the IDL. Spec: flatsql cpp/src/p4/FORMAT.md sections 2, 3 and 8.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import * as flatbuffers from 'flatbuffers';
import { OMM, OMMT } from '../lib/js/OMM/main.js';
import { FMB, FMBT, FMBRow, FMBRowT, FMBGroup, FMBGroupT, FMBRemove, FMBRemoveT, FMBUrl, FMBUrlT,
  FMBEntryT, FMBSealedT, FMBSignatureT, FMBIdentityT, fmbDictKind, fmbRemoveReason } from '../lib/js/FMB/main.js';
import { FCK, FCKT, FCKCounters, FCKCountersT, FCKSegment, FCKSegmentT, fckSegmentKind } from '../lib/js/FCK/main.js';
import { FSG, FSGT, FSGPair, FSGPairT, FSGLatest, FSGLatestT, FSGInstance, FSGInstanceT } from '../lib/js/FSG/main.js';
import { DPM, DPMT, DPMAssetT, publicationAssetKind, dpmTransportKind } from '../lib/js/DPM/main.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const ROOTS = { OMM, FMB, FCK, FSG, DPM };
const encode = (code, record) => {
  const builder = new flatbuffers.Builder(1024);
  ROOTS[code][`finish${code}Buffer`](builder, record.pack(builder));
  return builder.asUint8Array();
};
const decode = (code, bytes) => {
  const bb = new flatbuffers.ByteBuffer(new Uint8Array(bytes));
  assert.ok(ROOTS[code].bufferHasIdentifier(bb), `${code} file identifier`);
  return ROOTS[code][`getRootAs${code}`](bb).unpack();
};
const run = (cmd, args) => {
  const result = spawnSync(cmd, args, { cwd: root, encoding: 'utf8' });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  return result.stdout;
};
const sha256 = (bytes) => createHash('sha256').update(bytes).digest();

function flatbuffersInclude() {
  const stack = process.env.GAUNTLET_STACK_ROOT;
  const candidates = [
    process.env.SDS_FLATBUFFERS_INCLUDE,
    resolve(root, '../flatbuffers/include'),
    stack && join(stack, 'repos/main-packages/flatbuffers/include'),
    resolve(root, '../../spacedatanetwork-stack/repos/main-packages/flatbuffers/include'),
  ].filter(Boolean);
  const found = candidates.find((dir) => existsSync(join(dir, 'flatbuffers/flatbuffers.h')));
  assert.ok(found, `flatbuffers C++ headers not found; set SDS_FLATBUFFERS_INCLUDE (tried ${candidates.join(', ')})`);
  return found;
}

// --- C++ deep copy, generated from the IDL so every field is exercised ------
const CPP_SCALARS = { bool: 'bool', byte: 'int8_t', ubyte: 'uint8_t', short: 'int16_t', ushort: 'uint16_t',
  int: 'int32_t', uint: 'uint32_t', long: 'int64_t', ulong: 'uint64_t', float: 'float', double: 'double' };

function parseIdl(codes) {
  const tables = new Map(), structs = new Set();
  for (const code of codes) {
    const idl = readFileSync(join(root, `schema/${code}/main.fbs`), 'utf8').replace(/\/\/.*$/gm, '');
    for (const [, name] of idl.matchAll(/^struct\s+(\w+)/gm)) structs.add(name);
    for (const [, name, body] of idl.matchAll(/^table\s+(\w+)\s*\{([\s\S]*?)^\}/gm)) {
      if (tables.has(name)) continue;
      tables.set(name, [...body.matchAll(/^\s+([A-Z][A-Z0-9_]*)\s*:\s*([^;=(\s]+)/gm)]
        .map(([, field, type]) => ({ field, type })));
    }
  }
  return { tables, structs };
}

function cppCopier({ tables, structs }) {
  const fn = [...tables.keys()].map((t) =>
    `flatbuffers::Offset<${t}> copy_${t}(flatbuffers::FlatBufferBuilder &b, const ${t} *r)`);
  const bodies = [...tables].map(([table, fields], index) => {
    const pre = [], adds = [];
    for (const { field: f, type } of fields) {
      const element = type.startsWith('[') ? type.slice(1, -1) : null;
      let offset = true;
      if (type === 'string') {
        pre.push(`auto ${f} = r->${f}() ? b.CreateString(r->${f}()) : flatbuffers::Offset<flatbuffers::String>{};`);
      } else if (!element && tables.has(type)) {
        pre.push(`auto ${f} = r->${f}() ? copy_${type}(b, r->${f}()) : flatbuffers::Offset<${type}>{};`);
      } else if (element === 'string') {
        pre.push(`flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>>> ${f}{};
  if (r->${f}()) { std::vector<flatbuffers::Offset<flatbuffers::String>> v; for (auto s : *r->${f}()) v.push_back(b.CreateString(s)); ${f} = b.CreateVector(v); }`);
      } else if (element && structs.has(element)) {
        pre.push(`flatbuffers::Offset<flatbuffers::Vector<const ${element} *>> ${f}{};
  if (r->${f}()) { std::vector<${element}> v; for (auto p : *r->${f}()) v.push_back(*p); ${f} = b.CreateVectorOfStructs(v); }`);
      } else if (element && CPP_SCALARS[element]) {
        pre.push(`flatbuffers::Offset<flatbuffers::Vector<${CPP_SCALARS[element]}>> ${f}{};
  if (r->${f}()) ${f} = b.CreateVector(r->${f}()->data(), r->${f}()->size());`);
      } else if (element && tables.has(element)) {
        pre.push(`flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<${element}>>> ${f}{};
  if (r->${f}()) { std::vector<flatbuffers::Offset<${element}>> v; for (auto t : *r->${f}()) v.push_back(copy_${element}(b, t)); ${f} = b.CreateVector(v); }`);
      } else if (element) {
        throw new Error(`${table}.${f}: the copier has no rule for [${element}]`);
      } else {
        offset = false;
      }
      adds.push(offset ? `if (!${f}.IsNull()) out.add_${f}(${f});` : `out.add_${f}(r->${f}());`);
    }
    return `${fn[index]} {
  ${pre.join('\n  ')}
  ${table}Builder out(b);
  ${adds.join('\n  ')}
  return out.Finish();
}`;
  });
  return `${fn.map((s) => `${s};`).join('\n')}\n${bodies.join('\n')}`;
}

function cppRoundtrip() {
  const codes = ['FMB', 'FCK', 'FSG', 'DPM'];
  return `
${codes.map((c) => `#include "${c}/main_generated.h"`).join('\n')}
#include <cassert>
#include <cstring>
#include <fstream>
#include <iterator>
#include <vector>
static_assert(sizeof(FMBRow) == 40 && alignof(FMBRow) == 8, "FMBRow is 40 bytes");
static_assert(sizeof(FMBGroup) == 24, "FMBGroup is 24 bytes");
static_assert(sizeof(FMBRemove) == 16 && sizeof(FMBUrl) == 16, "FMBRemove and FMBUrl are 16 bytes");
static_assert(sizeof(FCKSegment) == 48 && sizeof(FCKCounters) == 120, "FCKSegment 48, FCKCounters 120");
static_assert(sizeof(FSGPair) == 32 && sizeof(FSGLatest) == 32 && sizeof(FSGInstance) == 88, "FSG structs 32/32/88");
static_assert(fckSegmentKind_DICTIONARY == 0 && fckSegmentKind_ROWS_BY_AT == 9 && fckSegmentKind_COLUMN == 64 &&
  fckSegmentKind_ROLLUP == 66, "segment kind ordinals");
static_assert(fmbRemoveReason_MOVED_OUT == 5 && fmbDictKind_OBJECT_KEY == 5, "FMB enum ordinals");
static_assert(publicationAssetKind_CAR_ARCHIVE == 6, "CAR_ARCHIVE appended after QUERY_ENCODER_MODEL");
${cppCopier(parseIdl(['FMB', 'FCK', 'FSG', 'DPM']))}
int main(int argc, char **argv) {
  assert(argc == 4);
  std::ifstream in(argv[2], std::ios::binary);
  std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(in)), {});
  flatbuffers::Verifier verifier(bytes.data(), bytes.size());
  flatbuffers::FlatBufferBuilder b;
  const std::string code = argv[1];
${codes.map((c) => `  if (code == "${c}") { if (!Verify${c}Buffer(verifier)) return 2; Finish${c}Buffer(b, copy_${c}(b, Get${c}(bytes.data()))); }`).join('\n')}
  std::ofstream output(argv[3], std::ios::binary);
  output.write(reinterpret_cast<const char *>(b.GetBufferPointer()), b.GetSize());
  return output.good() ? 0 : 1;
}`;
}

// --- A feed stream ---------------------------------------------------------
const frame = (bytes) => {
  const out = new Uint8Array(4 + bytes.length);
  new DataView(out.buffer).setUint32(0, bytes.length, true);
  out.set(bytes, 4);
  return out;
};
const omm = (name, norad, epoch) => encode('OMM', Object.assign(new OMMT(), {
  OBJECT_NAME: name, OBJECT_ID: `fixture-${norad}`, NORAD_CAT_ID: norad, EPOCH: epoch,
  MEAN_MOTION: 15.5, ECCENTRICITY: 0.0005, INCLINATION: 51.64,
}));
const F0 = 0n; // genesis FCK at 0
const genesis = encode('FCK', Object.assign(new FCKT(), {
  SELF_OFFSET: F0, PREVIOUS: 0xFFFFFFFFFFFFFFFFn, FEED_ID: 1, TYPE: 'OMM', PROVIDER: 'space-track.org',
  SOURCE: 'gp_history', GENERATION: 0, COMMITTED_AT: 1792337000n,
  COUNTERS: Object.assign(new FCKCountersT(), { MIN_EPOCH: 0n, MAX_EPOCH: 0n }),
}));
const records = [omm('ISS (ZARYA)', 25544, '2026-10-18T12:00:00.000Z'), omm('HST', 20580, '2026-10-18T11:00:00.000Z')];
const parts = [frame(genesis)];
let end = BigInt(parts[0].length);
const rowsAt = [];
for (const r of records) { rowsAt.push(end); parts.push(frame(r)); end += BigInt(4 + r.length); }
const fmbOffset = end;
const digests = Buffer.concat(records.map(sha256));
const fmb = Object.assign(new FMBT(), {
  SELF_OFFSET: fmbOffset, PREVIOUS: F0, FEED_ID: 1, COMMITTED_AT: 1792337152n, TYPE_SEQ_HIGH: 101n,
  ROWS: [
    Object.assign(new FMBRowT(), { OFFSET: rowsAt[0], SEQ: 100n, SOURCE_TS: 1792337100n, LENGTH: records[0].length, GROUP: 0, ROW_J: 0, FLAGS: 1 }),
    Object.assign(new FMBRowT(), { OFFSET: rowsAt[1], SEQ: 101n, SOURCE_TS: 1792337101n, LENGTH: records[1].length, GROUP: 0, ROW_J: 0, FLAGS: 1 }),
    // A copy of the first record from a second producer: same frame, no new digest.
    Object.assign(new FMBRowT(), { OFFSET: rowsAt[0], SEQ: 100n, SOURCE_TS: 1792337100n, LENGTH: records[0].length, GROUP: 1, ROW_J: 1, FLAGS: 32 }),
  ],
  DIGESTS: [...digests],
  GROUPS: [
    Object.assign(new FMBGroupT(), { DELIVERED_AT: 1792337152n, NODE_ID: 1, BATCH_ID: 1, CONTENT_KEY_ID: 0, URL_ID: 1 }),
    Object.assign(new FMBGroupT(), { DELIVERED_AT: 1792337152n, NODE_ID: 2, BATCH_ID: 1, CONTENT_KEY_ID: 0, URL_ID: 1 }),
  ],
  DICTIONARY: [
    Object.assign(new FMBEntryT(), { KIND: fmbDictKind.TOKEN, ID: 1, TEXT: ['tok-a', '12D3KooWfixtureA'] }),
    Object.assign(new FMBEntryT(), { KIND: fmbDictKind.NODE, ID: 1, TEXT: ['tok-a', '12D3KooWfixtureA'] }),
    Object.assign(new FMBEntryT(), { KIND: fmbDictKind.NODE, ID: 2, TEXT: ['tok-b', '12D3KooWfixtureB'] }),
    Object.assign(new FMBEntryT(), { KIND: fmbDictKind.BATCH, ID: 1, TEXT: ['2026-10-18', '12D3KooWfixtureA', 'pk'] }),
    Object.assign(new FMBEntryT(), { KIND: fmbDictKind.URL, ID: 1, TEXT: ['https://www.space-track.org/basicspacedata/query/class/gp_history'] }),
  ],
  REMOVALS: [Object.assign(new FMBRemoveT(), { SEQ: 42n, ROW_J: 0xFFFFFFFF, REASON: fmbRemoveReason.RETENTION })],
  URLS: [Object.assign(new FMBUrlT(), { SEQ: 101n, ROW_J: 0, URL_ID: 1 })],
  SIGNATURES: [Object.assign(new FMBSignatureT(), { ROW: 0, BYTES: [...sha256(Buffer.from('signature'))] })],
  SEALED: [Object.assign(new FMBSealedT(), { ROW: 1, EPOCH: 1792335600n, OBJECT_KEY_ID: 3, LEAF_DIGEST: [...sha256(records[1])], COLUMNS: [1, 2, 3] })],
  IDENTITIES: [Object.assign(new FMBIdentityT(), { ROW: 0, HASH: [...sha256(Buffer.from('ident'))] })],
});
const fmbBytes = encode('FMB', fmb);
parts.push(frame(fmbBytes));
end += BigInt(4 + fmbBytes.length);
const fsgOffset = end;
const fsg = Object.assign(new FSGT(), {
  SELF_OFFSET: fsgOffset, PREVIOUS: fmbOffset, FEED_ID: 1, KIND: fckSegmentKind.ROWS_BY_SEQ, LEVEL: 0,
  MIN_SEQ: 100n, MAX_SEQ: 101n, COVERS_THROUGH: fsgOffset, REPLACES: [],
  PAIRS: [100n, 101n].map((seq, i) => Object.assign(new FSGPairT(), { KEY_HI: seq << 16n, KEY_LO: 0n, RID: seq << 16n, ROW_REF: (fmbOffset << 16n) | BigInt(i) })),
  LATEST: [Object.assign(new FSGLatestT(), { OBJECT_KEY_ID: 1, RESERVED: 0, EPOCH: 1792339200n, RID: 100n << 16n, ROW_REF: fmbOffset << 16n })],
  INSTANCES: [Object.assign(new FSGInstanceT(), { BATCH_ID: 1, CONTENT_KEY_ID: 0, RECORDS: 2n, BYTES: BigInt(records[0].length + records[1].length),
    MIN_W: 1792335600n, MAX_W: 1792339200n, MIN_SEQ: 100n, MAX_SEQ: 101n, FIRST: 1792337152n, UPDATED: 1792337152n, MAX_AT: 1792337152n, MAX_TS: 1792337101n })],
  INSTANCE_URL_IDS: [7],
});
const fsgBytes = encode('FSG', fsg);
parts.push(frame(fsgBytes));
end += BigInt(4 + fsgBytes.length);
const fck = Object.assign(new FCKT(), {
  SELF_OFFSET: end, PREVIOUS: fsgOffset, FEED_ID: 1, TYPE: 'OMM', PROVIDER: 'space-track.org', SOURCE: 'gp_history',
  GENERATION: 0, COMMITTED_AT: 1792337160n, APPLIED_THROUGH: fsgOffset, TYPE_SEQ_HIGH: 101n,
  COUNTERS: Object.assign(new FCKCountersT(), { ROWS: 3n, RECORDS: 2n, BYTES: BigInt(records[0].length + records[1].length), RECORDS_NO_EPOCH: 0n,
    COPIES: 3n, COPY_BYTES: BigInt(2 * records[0].length + records[1].length), LIVE_FRAME_BYTES: BigInt(8 + records[0].length + records[1].length),
    MIN_SEQ: 100n, MAX_SEQ: 101n, MIN_EPOCH: 1792335600n, MAX_EPOCH: 1792339200n, MIN_TS: 1792337100n, MAX_TS: 1792337101n,
    MIN_AT: 1792337152n, MAX_AT: 1792337152n }),
  SEGMENTS: [Object.assign(new FCKSegmentT(), { OFFSET: fsgOffset, LENGTH: fsgBytes.length, KIND: fckSegmentKind.ROWS_BY_SEQ, LEVEL: 0,
    RESERVED: 0, MIN_SEQ: 100n, MAX_SEQ: 101n, COVERS_THROUGH: fsgOffset, ENTRIES: 2n })],
  SEGMENT_DIGESTS: [...sha256(fsgBytes)],
  COMMITS_ROOT_CID: [0x01, 0x70, 0x12, 0x20, ...sha256(Buffer.from('commits'))],
  PREVIOUS_FEED_ROOT_CID: [],
  RECORD_BYTES: BigInt(records[0].length + records[1].length), MIN_W: 1792335600n, MAX_W: 1792339200n,
});
parts.push(frame(encode('FCK', fck)));
const stream = Buffer.concat(parts);

// A backup-catalog DPM: one CAR_ARCHIVE asset naming the feed root.
const feedRoot = 'bafybeifixturefeedrootcid';
const dpm = Object.assign(new DPMT(), {
  DATASET_ID: 'OMM/space-track.org@gp_history', UPDATE_ID: feedRoot, PROVIDER_PEER_ID: '12D3KooWfixtureA',
  PUBLISH_TIMESTAMP: '2026-10-18T17:46:00Z',
  ASSETS: [Object.assign(new DPMAssetT(), { ASSET_KIND: publicationAssetKind.CAR_ARCHIVE, TRANSPORT_KIND: dpmTransportKind.CONTENT_ADDRESS,
    CID: feedRoot, DATA_ROOT: feedRoot, FILE_NAME: 'OMM-gp_history.car', BYTE_LENGTH: 123456n, THROUGH_SEQ: 101n })],
});

// --- Checks ----------------------------------------------------------------
assert.equal(FMBRow.sizeOf(), 40);
assert.equal(FMBGroup.sizeOf(), 24);
assert.equal(FMBRemove.sizeOf(), 16);
assert.equal(FMBUrl.sizeOf(), 16);
assert.equal(FCKSegment.sizeOf(), 48);
assert.equal(FCKCounters.sizeOf(), 120);
assert.equal(FSGPair.sizeOf(), 32);
assert.equal(FSGLatest.sizeOf(), 32);
assert.equal(FSGInstance.sizeOf(), 88);

// A stock reader's walk: size prefix, identifier, root type; the file ends at a frame end.
const kinds = [];
const frames = [];
for (let off = 0; off < stream.length;) {
  const n = stream.readUInt32LE(off);
  const bytes = stream.subarray(off + 4, off + 4 + n);
  kinds.push(bytes.subarray(4, 8).toString('latin1'));
  frames.push({ off: BigInt(off), bytes });
  off += 4 + n;
  assert.ok(off <= stream.length, 'frame runs past the end');
}
assert.deepEqual(kinds, ['$FCK', '$OMM', '$OMM', '$FMB', '$FSG', '$FCK']);
// The commit chain: every non-record frame names itself and the one before it.
const meta = frames.filter((f, i) => kinds[i] !== '$OMM').map((f, i) => [f.off, decode(['FCK', 'FMB', 'FSG', 'FCK'][i], f.bytes)]);
meta.forEach(([off, t], i) => {
  assert.equal(t.SELF_OFFSET, off);
  assert.equal(t.PREVIOUS, i === 0 ? 0xFFFFFFFFFFFFFFFFn : meta[i - 1][0]);
});
// Each NEW_FRAME row's range hashes to its digest; the copy row names the same frame.
const back = meta[1][1];
let d = 0;
for (const row of back.ROWS) {
  const f = frames.find((x) => x.off === row.OFFSET);
  assert.ok(f && f.bytes.length === row.LENGTH, `row ${row.SEQ} names a whole frame`);
  if (row.FLAGS & 1) {
    assert.deepEqual(Buffer.from(back.DIGESTS.slice(32 * d, 32 * d + 32)), sha256(f.bytes), `row ${row.SEQ} digest`);
    d += 1;
  }
}
assert.equal(d * 32, back.DIGESTS.length);
assert.equal(decode('OMM', frames[1].bytes).NORAD_CAT_ID, 25544);
// Section 13 rebuild inputs: each instance's url id, and the feed's record bytes and w range.
const seg = meta[2][1], ck = meta[3][1], gen = meta[0][1];
assert.deepEqual(seg.INSTANCE_URL_IDS, [7]);
assert.equal(seg.INSTANCE_URL_IDS.length, seg.INSTANCES.length);
assert.deepEqual([ck.RECORD_BYTES, ck.MIN_W, ck.MAX_W], [BigInt(records[0].length + records[1].length), 1792335600n, 1792339200n]);
assert.deepEqual([gen.RECORD_BYTES, gen.MIN_W, gen.MAX_W], [0n, 0n, 0n]);

// JS -> C++ -> JS for every frame kind and the DPM.
const scratch = mkdtempSync(join(root, '.flatsql-format5-e2e-'));
try {
  const cpp = join(scratch, 'roundtrip.cpp'), executable = join(scratch, 'roundtrip');
  writeFileSync(cpp, cppRoundtrip());
  run(process.env.CXX || 'c++', ['-std=c++17', '-O1', '-I', flatbuffersInclude(), '-I', join(root, 'lib/cpp'), cpp, '-o', executable]);
  const cases = [['FCK', genesis], ['FMB', fmbBytes], ['FSG', fsgBytes], ['FCK', encode('FCK', fck)], ['DPM', encode('DPM', dpm)]];
  for (const [index, [code, bytes]] of cases.entries()) {
    const input = join(scratch, `${index}.in`), output = join(scratch, `${index}.out`);
    writeFileSync(input, bytes);
    run(executable, [code, input, output]);
    const want = decode(code, bytes), got = decode(code, readFileSync(output));
    const differs = Object.keys(want).filter((k) => !isDeepStrictEqual(got[k], want[k]));
    assert.deepEqual(differs, [], `${code}: fields changed in C++`);
  }
  const catalog = decode('DPM', encode('DPM', dpm));
  assert.equal(catalog.ASSETS[0].ASSET_KIND, publicationAssetKind.CAR_ARCHIVE);
  assert.equal(catalog.ASSETS[0].THROUGH_SEQ, 101n);
  console.log(`PASS FlatSQL format 5 frames: stream of ${frames.length} frames (${stream.length} B) walked by size prefix, `
    + `${d} record ranges hash to their FMB digests, commit chain of ${meta.length}, `
    + `${cases.length} tables JS -> C++ -> JS (FMBRow 40 B, FCKSegment 48 B, FSGPair 32 B), DPM CAR_ARCHIVE through seq 101, FSG instance url ids and FCK record bytes/w range`);
} finally { rmSync(scratch, { recursive: true, force: true }); }
