import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import * as flatbuffers from 'flatbuffers';
// PHB types from the STR module: each standard's JS carries its own copy.
import { STR, STRT, strDistanceEstimator, PHBMeasurementT, phbSpectralRegime } from '../lib/js/STR/main.js';
import { SKT, SKTT, SKTPoint3D, SKTPoint3DT, sktPartitionScheme, sktPayloadKind,
  sktColorEncoding } from '../lib/js/SKT/main.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const ROOTS = { STR, SKT };
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
const CPP_SCALARS = { bool: 'bool', byte: 'int8_t', ubyte: 'uint8_t', int8: 'int8_t', uint8: 'uint8_t',
  short: 'int16_t', ushort: 'uint16_t', int16: 'int16_t', uint16: 'uint16_t', int: 'int32_t',
  uint: 'uint32_t', int32: 'int32_t', uint32: 'uint32_t', long: 'int64_t', ulong: 'uint64_t',
  int64: 'int64_t', uint64: 'uint64_t', float: 'float', double: 'double' };

function parseIdl(codes) {
  const tables = new Map(), structs = new Set();
  for (const code of codes) {
    const idl = readFileSync(join(root, `schema/${code}/main.fbs`), 'utf8').replace(/\/\/.*$/gm, '');
    for (const [, name] of idl.matchAll(/^struct\s+(\w+)/gm)) structs.add(name);
    for (const [, name, body] of idl.matchAll(/^table\s+(\w+)\s*\{([\s\S]*?)^\}/gm)) {
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
      if (type === 'string') {
        pre.push(`auto ${f} = r->${f}() ? b.CreateString(r->${f}()) : flatbuffers::Offset<flatbuffers::String>{};`);
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
      }
      adds.push(type === 'string' || element ? `if (!${f}.IsNull()) out.add_${f}(${f});` : `out.add_${f}(r->${f}());`);
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
  return `
#include "STR/main_generated.h"
#include "SKT/main_generated.h"
#include <cassert>
#include <cstring>
#include <fstream>
#include <iterator>
#include <vector>
static_assert(sizeof(SKTPoint3D) == 24 && alignof(SKTPoint3D) == 4, "SKTPoint3D is 24 bytes, 4-aligned");
static_assert(sizeof(SKTPoint) == 24, "SKTPoint is 24 bytes");
static_assert(sktPartitionScheme_HEALPIX == 0 && sktPartitionScheme_OCTREE_HELIO_ICRS == 1, "partition ordinals");
static_assert(strDistanceEstimator_UNSPECIFIED == 0 && strDistanceEstimator_BAILER_JONES_2021_GEO == 1 &&
  strDistanceEstimator_BAILER_JONES_2021_PHOTOGEO == 2 && strDistanceEstimator_EDSD_POSTERIOR == 3 &&
  strDistanceEstimator_PARALLAX_INVERSE == 4, "distance estimator ordinals");
${cppCopier(parseIdl(['PHB', 'STR', 'SKT']))}
int main(int argc, char **argv) {
  assert(argc == 4);
  std::ifstream in(argv[2], std::ios::binary);
  std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(in)), {});
  flatbuffers::Verifier verifier(bytes.data(), bytes.size());
  flatbuffers::FlatBufferBuilder b;
  if (std::strcmp(argv[1], "STR") == 0) {
    if (!VerifySTRBuffer(verifier)) return 2;
    FinishSTRBuffer(b, copy_STR(b, GetSTR(bytes.data())));
  } else {
    if (!VerifySKTBuffer(verifier)) return 2;
    FinishSKTBuffer(b, copy_SKT(b, GetSKT(bytes.data())));
  }
  std::ofstream output(argv[3], std::ios::binary);
  output.write(reinterpret_cast<const char *>(b.GetBufferPointer()), b.GetSize());
  return output.good() ? 0 : 1;
}`;
}

// --- Records ---------------------------------------------------------------
// Proxima Centauri and Barnard's Star as the ESA Gaia archive serves them
// (external.gaiaedr3_distance JOIN gaiadr3.gaia_source, queried 2026-10-18):
// Bailer-Jones et al. 2021, AJ 161, 147; Gaia Collaboration, Vallenari et al.
// 2023, A&A 674, A1.
const proxima = Object.assign(new STRT(), {
  ID: 'gaiadr3:5853498713190525696', GAIA_DR3_SOURCE_ID: 5853498713190525696n, HIP_CAT_ID: 70890,
  STAR_EPOCH: 2016.0, RA: 217.39232147200883, DEC: -62.67607511676666,
  PARALLAX: 768.0665391873573, PARALLAX_UNC: 0.049872905, GMAG: 8.984749, PROPER_NAME: 'Proxima Centauri',
  DISTANCE_PC: 1.3019346, DISTANCE_LO_PC: 1.3018495, DISTANCE_HI_PC: 1.3020064,
  DISTANCE_METHOD: strDistanceEstimator.BAILER_JONES_2021_PHOTOGEO, DISTANCE_REF: '2021AJ....161..147B',
  PHOTOMETRY: [Object.assign(new PHBMeasurementT(), {
    BAND_ID: 'G', SPECTRAL_REGIME: phbSpectralRegime.VISIBLE, VALUE: 8.984749 })],
});
const barnard = Object.assign(new STRT(), {
  ID: 'gaiadr3:4472832130942575872', GAIA_DR3_SOURCE_ID: 4472832130942575872n,
  STAR_EPOCH: 2016.0, RA: 269.44850252543836, DEC: 4.739420051112412, PARALLAX: 546.975939730948,
  DISTANCE_PC: 1.8281064, DISTANCE_LO_PC: 1.8279749, DISTANCE_HI_PC: 1.8282253,
  DISTANCE_METHOD: strDistanceEstimator.BAILER_JONES_2021_GEO, DISTANCE_REF: '2021AJ....161..147B',
});
// A star with no distance: NaN, never zero, and no estimator.
const unknownStar = Object.assign(new STRT(), { ID: 'fixture:no-distance' });

// The level-9 node that holds Proxima in a 1024 pc root cube: cell
// (255, 255, 255), so its key is octant 0 then octant 7 eight times,
// 0o077777777. Node-local position = the photogeometric distance along
// (RA, DEC), minus the center, computed offline; ABS_MAG = G + 5 log10(parallax / 100 mas).
const node = Object.assign(new SKTT(), {
  LAYER_ID: 'gaia-dr3-bj2021-octree-fixture', PAYLOAD_KIND: sktPayloadKind.POINT_SOURCES,
  PARTITION: sktPartitionScheme.OCTREE_HELIO_ICRS, OCTREE_LEVEL: 9, OCTREE_KEY: 0o077777777n,
  MAX_ORDER: 12, CHILD_MASK: 0b10000001, CENTER_X_PC: -2, CENTER_Y_PC: -2, CENTER_Z_PC: -2, HALF_SIZE_PC: 2,
  EPOCH: 2016.0, BAND_ID: 'G', POINT_COUNT: 1,
  ABS_MAG_BRIGHTEST: Math.fround(13.412), ABS_MAG_FAINTEST: Math.fround(13.412),
  COLOR_ENCODING: sktColorEncoding.COLOR_INDEX, COLOR_BLUE_BAND_ID: 'BP', COLOR_RED_BAND_ID: 'RP',
  POINTS_3D: [Object.assign(new SKTPoint3DT(), {
    X_PC: Math.fround(1.5251975059509277), Y_PC: Math.fround(1.6370868682861328),
    Z_PC: Math.fround(0.8433279395103455), ABS_MAG: 13412, COLOR: 3805 + 32768, DIST_FRAC_UNC: 1,
    FLAGS: 0, ROW: 0 })],
  ROW_COLLECTION_CID: 'fixture:rows', SOURCE_NAMES: ['Gaia DR3', 'Bailer-Jones et al. 2021'],
  CITATION: '2021AJ....161..147B; 2023A&A...674A...1G',
});
// A tile written before the octree: it reads as HEALPix with no octree geometry.
const healpix = Object.assign(new SKTT(), { LAYER_ID: 'fixture:healpix', ORDER: 2, PIXEL: 191n });

describe('SKT octree node and STR distance, JS -> C++ -> JS', function () {
  this.timeout(180000);
  it('round-trips star rows and an octree node through the released C++ and JS bindings', function () {
    assert.equal(SKTPoint3D.sizeOf(), 24);
    const scratch = mkdtempSync(join(root, '.skt-octree-e2e-'));
    try {
      const cpp = join(scratch, 'roundtrip.cpp'), executable = join(scratch, 'roundtrip');
      writeFileSync(cpp, cppRoundtrip());
      run(process.env.CXX || 'c++', ['-std=c++17', '-O1', '-I', flatbuffersInclude(),
        '-I', join(root, 'lib/cpp'), cpp, '-o', executable]);
      const cases = [['STR', proxima], ['STR', barnard], ['STR', unknownStar], ['SKT', node], ['SKT', healpix]];
      for (const [index, [code, record]] of cases.entries()) {
        const input = join(scratch, `${index}.in`), output = join(scratch, `${index}.out`);
        writeFileSync(input, encode(code, record));
        run(executable, [code, input, output]);
        const back = decode(code, readFileSync(output));
        const differs = Object.keys(record).filter((k) => !isDeepStrictEqual(back[k], record[k]));
        assert.deepEqual(differs, [], `${code} ${record.ID ?? record.LAYER_ID}: fields changed`);
        assert.deepEqual(back, record);
      }
      const star = decode('STR', encode('STR', unknownStar));
      assert.ok(Number.isNaN(star.DISTANCE_PC) && Number.isNaN(star.DISTANCE_LO_PC) && Number.isNaN(star.DISTANCE_HI_PC));
      assert.equal(star.DISTANCE_METHOD, strDistanceEstimator.UNSPECIFIED);
      assert.equal(star.GAIA_DR3_SOURCE_ID, 0n);
      const tile = decode('SKT', encode('SKT', healpix));
      assert.equal(tile.PARTITION, sktPartitionScheme.HEALPIX);
      assert.ok(Number.isNaN(tile.CENTER_X_PC) && Number.isNaN(tile.HALF_SIZE_PC) && Number.isNaN(tile.ABS_MAG_FAINTEST));
      assert.deepEqual(tile.POINTS_3D, []);
      // The octree key addresses the node: its parent is key >> 3 at level 8.
      assert.equal(node.OCTREE_KEY >> 3n, 0o07777777n);
      console.log(`PASS SKT/STR: ${cases.length} records JS -> C++ -> JS; Gaia DR3 ${proxima.GAIA_DR3_SOURCE_ID} at `
        + `${proxima.DISTANCE_PC} pc (BJ2021 photogeo) in octree node L${node.OCTREE_LEVEL} key ${node.OCTREE_KEY}`);
    } finally { rmSync(scratch, { recursive: true, force: true }); }
  });
});
