#!/usr/bin/env node
// Release verification for one SDS version.
//
//   node scripts/verify-release.mjs 1.260.0            published artifacts
//   node scripts/verify-release.mjs 1.260.0 --local    this checkout's lib/
//   [--work DIR] scratch directory (default: os.tmpdir())
//
// 1. Registries (published mode): npm, crates.io and the Go module proxy must
//    serve VERSION; PyPI must too unless the PYPI_ENABLED repository variable
//    is not 'true' (owner decision 2026-09-22, see AGENTS.md); the publish
//    workflow run for tag vVERSION must have concluded success.
// 2. Bindings: one sample of each standard in SAMPLES is encoded in JS,
//    Python, Rust and Go with the same builder sequence. All four buffers must
//    be byte-identical. Every buffer is then decoded in every language, and
//    all sixteen field dumps per standard must be identical and must match the
//    sample. JS comes from the npm package, Python from the npm package's
//    dist/<CODE>/<CODE>.py.tar.gz (the published Python archive), Rust from
//    crates.io and Go from the module proxy.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FLATBUFFERS = '25.12.19';
const GO_MODULE = 'github.com/DigitalArsenal/spacedatastandards.org/lib/go';

// ---------------------------------------------------------------- samples
// Field order is IDL declaration order. Types: s string, d double, u32, i32,
// u64, i64, b bool, e:<enum> byte enum, vd [double], vu8 [ubyte],
// t:<Table> table, vt:<Table> [table]. A trailing '!' marks (required).
// A value of null leaves the field unset; it is still dumped (its default).
const PVN = (id) => ({
  table: 'PVN',
  fields: [
    ['SOURCE_ID', 's', id], ['SOURCE_KIND', 'e:pvnSourceKind', 1], ['ORIGINATOR', 's', 'NOAA SWPC'],
    ['PROVIDER_ID', 's', null], ['PRODUCER', 's', 'sds-verify-release'], ['LICENSE_CLASS', 'e:pvnLicenseClass', 1],
    ['LICENSE_ID', 's', 'US-PD'], ['LINEAGE', 's', null],
  ],
});
const SOURCE = [
  ['SOURCE_CID', 's', 'bafkreigh2akiscaildcqabsyg3dfr6chu3fgpregiymsck7e7aqa4s52zy'],
  ['SOURCE_DIGEST', 's', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'],
  ['RETRIEVED_AT', 's', '2024-05-14T18:00:00Z'],
];
export const SAMPLES = {
  SRO: {
    table: 'SRO',
    fields: [
      ['REGION_NUMBER', 'u32', 13664], ['REGION_AUTHORITY', 's', 'NOAA/SWPC'], ['ISSUED_AT', 's', '2024-05-10T00:30:00Z'],
      ['OBSERVED_DATE', 's', '2024 May 09'], ['POSITION_EPOCH', 's!', '2024-05-10T00:00:00Z'], ['REGION_KIND', 'e:sroRegionKind', 1],
      ['LOCATION_TOKEN', 's', 'S18W19'], ['HG_LATITUDE_DEG', 'd', -18], ['HG_LONGITUDE_DEG', 'd', 19],
      ['CARRINGTON_LONGITUDE_DEG', 'd', 350.25], ['AREA_MSH', 'd', 2400], ['LONGITUDINAL_EXTENT_DEG', 'd', null],
      ['SPOT_COUNT', 'u32', 75], ['HAS_SPOT_COUNT', 'b', true], ['MCINTOSH_CLASS', 's', 'Fkc'],
      ['MAGNETIC_CLASS', 's', 'Beta-Gamma-Delta'], ['PROVENANCE', 't:PVN!', PVN('swpc-srs-20240510')], ...SOURCE,
    ],
  },
  SFE: {
    table: 'SFE',
    fields: [
      ['EVENT_ID', 's!', '20240514-1640-XRA'], ['PRODUCT', 's', 'edited events'], ['OBSERVATORY', 's', 'G16'],
      ['PLATFORM', 's', 'GOES-16'], ['EVENT_KIND', 'e:sfeEventKind', 1], ['EVENT_TYPE_CODE', 's', 'XRA'],
      ['BEGIN_TIME', 's', '2024-05-14T16:46:00Z'], ['PEAK_TIME', 's', '2024-05-14T16:51:00Z'], ['END_TIME', 's', '2024-05-14T17:02:00Z'],
      ['BEGIN_QUALIFIER', 's', null], ['PEAK_QUALIFIER', 's', null], ['END_QUALIFIER', 's', 'A'],
      ['XRAY_CLASS', 's', 'X8.7'], ['OPTICAL_IMPORTANCE', 's', null], ['PEAK_FLUX_W_M2', 'd', 8.7e-4],
      ['INTEGRATED_FLUX_J_M2', 'd', 0.21], ['PASSBAND_MIN_NM', 'd', 0.1], ['PASSBAND_MAX_NM', 'd', 0.8],
      ['REGION_NUMBER', 'u32', 13664], ['HAS_REGION_NUMBER', 'b', true], ['HG_LATITUDE_DEG', 'd', null],
      ['HG_LONGITUDE_DEG', 'd', null], ['STATUS', 's', 'final'], ['REVISION', 's', '1'],
      ['PROVENANCE', 't:PVN!', PVN('swpc-events-20240514')], ...SOURCE,
    ],
  },
  SDI: {
    table: 'SDI',
    fields: [
      ['OBSERVATORY', 's', 'SDO'], ['INSTRUMENT', 's', 'AIA_3'], ['MEASUREMENT', 's', '171'],
      ['WAVELENGTH_NM', 'd', 17.1], ['IMAGE_ID', 's', '153090721'], ['REQUESTED_AT', 's', '2024-05-14T17:00:30Z'],
      ['OBSERVED_AT', 's!', '2024-05-14T16:51:09.35Z'], ['DATE_OBS', 's', '2024-05-14T16:51:09.35'], ['TIME_SCALE', 's', 'UTC'],
      ['CADENCE_S', 'd', 12], ['EXPOSURE_S', 'd', 1.999764], ['IMAGE_CID', 's', 'bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi'],
      ['IMAGE_MEDIA_TYPE', 's', 'image/jp2'], ['IMAGE_DIGEST', 's', '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'],
      ['IMAGE_SIZE_BYTES', 'u64', 3145728], ['HEADER_CID', 's', 'bafkreie5noelq6ffxy4ehwwd5xxfqdxaxd5jgkm3wjjvb3mcmwlkl2lwqy'],
      ['WIDTH', 'u32', 4096], ['HEIGHT', 'u32', 4096], ['CTYPE1', 's', 'HPLN-TAN'], ['CTYPE2', 's', 'HPLT-TAN'],
      ['CUNIT1', 's', 'arcsec'], ['CUNIT2', 's', 'arcsec'], ['CRPIX1', 'd', 2048.5], ['CRPIX2', 'd', 2048.5],
      ['CRVAL1', 'd', 0], ['CRVAL2', 'd', 0], ['CDELT1', 'd', 0.600714], ['CDELT2', 'd', 0.600714],
      ['CROTA2', 'd', null], ['PC', 'vd', [0.99999998, -0.000175, 0.000175, 0.99999998]],
      ['RSUN_OBS_ARCSEC', 'd', 948.9], ['RSUN_REF_M', 'd', 696000000], ['DSUN_OBS_M', 'd', 151320000000],
      ['CRLN_OBS_DEG', 'd', 123.4567], ['CRLT_OBS_DEG', 'd', -2.95], ['HGLN_OBS_DEG', 'd', -0.0081], ['HGLT_OBS_DEG', 'd', -2.95],
      ['QUALITY', 'i64', -2147483648], ['HAS_QUALITY', 'b', true], ['PROCESSING', 's', 'lev1.5'],
      ['PROVENANCE', 't:PVN!', PVN('helioviewer-153090721')], ...SOURCE,
    ],
  },
  SRT: {
    table: 'SRT',
    fields: [
      ['TILESET_ID', 's!', 'esa-worldcover-2021-v200'], ['TILESET_NAME', 's', 'ESA WorldCover 10 m 2021 v200'],
      ['QUANTITY', 'e:srtQuantity', 1], ['QUANTITY_NAME', 's', 'Map'], ['UNIT', 's', null], ['SAMPLE_TYPE', 'e:srtSampleType', 1],
      ['SCALE_FACTOR', 'd', null], ['ADD_OFFSET', 'd', null], ['NO_DATA_VALUE', 'd', 0],
      ['CLASS_LEGEND', 'vt:SRTClass', [[10, 'Tree cover', 0x006400ff], [80, 'Permanent water bodies', 0x0064c8ff], [95, 'Mangroves', 0x00cf75ff]]
        .map(([code, label, rgba]) => ({ table: 'SRTClass', fields: [['CODE', 'i32', code], ['LABEL', 's!', label], ['COLOR_RGBA', 'u32', rgba]] }))],
      ['CRS', 's!', 'EPSG:4326'], ['AFFINE_TRANSFORM', 'vd', [-75, 8.333333333333333e-5, 0, 42, 0, -8.333333333333333e-5]],
      ['PIXEL_REGISTRATION', 'e:srtPixelRegistration', 1], ['GRID_WIDTH', 'u32', 4], ['GRID_HEIGHT', 'u32', 4],
      ['TILING_SCHEME', 'e:dttTilingScheme', 1], ['LEVEL', 'u32', 13], ['X', 'u32', 2389], ['Y', 'u32', 1104],
      ['WEST_DEG', 'd', -75], ['SOUTH_DEG', 'd', 41.99966666666667], ['EAST_DEG', 'd', -74.99966666666667], ['NORTH_DEG', 'd', 42],
      ['HORIZONTAL_DATUM_NAME', 's', 'WGS 84'], ['PAYLOAD_FORMAT', 'e:srtPayloadFormat', 2],
      ['PAYLOAD', 't:DTTPayloadRef!', {
        table: 'DTTPayloadRef',
        fields: [['CID', 's', null], ['BYTES', 'vu8', [10, 10, 80, 80, 10, 95, 95, 80, 10, 10, 95, 0, 80, 80, 80, 10]],
          ['SIZE_BYTES', 'u64', 16], ['DIGEST', 's', null], ['CONTENT_ENCODING', 's', null], ['MEDIA_TYPE', 's', 'application/octet-stream']],
      }],
      ['MIN_VALUE', 'd', 10], ['MAX_VALUE', 'd', 95], ['DATA_COVERAGE_FRACTION', 'd', 0.9375], ['EPOCH', 's', '2021-01-01T00:00:00Z'],
      ['PROVENANCE', 't:DTTProvenance!', {
        table: 'DTTProvenance',
        fields: [['DATASET_ID', 's!', 'esa-worldcover-2021-v200'], ['DATASET_NAME', 's', 'ESA WorldCover 2021'],
          ['DATASET_URL', 's', 'https://esa-worldcover.org'], ['DATASET_EPOCH', 's!', '2021-01-01T00:00:00Z'],
          ['DATASET_CID', 's', null], ['SOURCE_URL', 's', 'https://esa-worldcover.s3.amazonaws.com/v200/2021/map/ESA_WorldCover_10m_2021_v200_N42W075_Map.tif'],
          ['SOURCE_QUERY', 's', null], ['RETRIEVED_AT', 's!', '2026-10-22T12:00:00Z'], ['LICENSE', 's!', 'CC-BY-4.0'],
          ['LICENSE_URL', 's', 'https://creativecommons.org/licenses/by/4.0/'], ['ATTRIBUTION', 's', 'ESA WorldCover project 2021 / Contains modified Copernicus Sentinel data (2021)']],
      }],
    ],
  },
};
// Rust module that defines each nested table.
const RUST_MODULE = { PVN: 'PVN', DTTPayloadRef: 'DTT', DTTProvenance: 'DTT', SRTClass: 'SRT', dttTilingScheme: 'DTT', pvnSourceKind: 'PVN', pvnLicenseClass: 'PVN' };
const LANGS = ['js', 'py', 'rs', 'go'];

// ---------------------------------------------------------------- helpers
const camel = (n) => n.split('_').map((w) => w.charAt(0) + w.slice(1).toLowerCase()).join('');
const lowerCamel = (n) => { const c = camel(n); return c.charAt(0).toLowerCase() + c.slice(1); };
const kind = (t) => t.replace(/!$/, '');
const required = (t) => t.endsWith('!');
const sub = (t) => kind(t).split(':')[1];
// Sample strings are printable ASCII without quote or backslash, so every
// language quotes them identically.
const str = (s) => { assert.match(s, /^[\x20-\x21\x23-\x5b\x5d-\x7e]*$/, s); return JSON.stringify(s); };
const num = (x) => String(x);
const rsNum = (x, ty) => `(${num(x)}${ty})`;
const hex = (x) => {
  if (Number.isNaN(x)) return 'NaN';
  const v = new DataView(new ArrayBuffer(8)); v.setFloat64(0, x); return v.getBigUint64(0).toString(16).padStart(16, '0');
};

function run(cmd, args, opts = {}) {
  return execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024, ...opts });
}

// Expected dump lines for set fields (unset fields are checked by cross-language equality only).
function expected(spec, prefix, out = new Map()) {
  for (const [name, type, value] of spec.fields) {
    if (value === null) continue;
    const p = `${prefix}.${name}`; const k = kind(type);
    if (k === 's') out.set(p, str(value));
    else if (k === 'd') out.set(p, hex(value));
    else if (k === 'b') out.set(p, String(value));
    else if (k === 'vd' || k === 'vu8') { out.set(`${p}#`, String(value.length)); value.forEach((x, i) => out.set(`${p}[${i}]`, k === 'vd' ? hex(x) : String(x))); }
    else if (k.startsWith('t:')) expected(value, p, out);
    else if (k.startsWith('vt:')) { out.set(`${p}#`, String(value.length)); value.forEach((x, i) => expected(x, `${p}[${i}]`, out)); }
    else out.set(p, String(value));
  }
  return out;
}

// ---------------------------------------------------------------- JS
async function jsCodec(pkgDir) {
  const req = createRequire(path.join(pkgDir, 'package.json'));
  const flatbuffers = await import(pathToFileURL(req.resolve('flatbuffers')));
  const fb = flatbuffers.default?.Builder ? flatbuffers.default : flatbuffers;
  const mods = {};
  for (const code of Object.keys(SAMPLES)) mods[code] = await import(pathToFileURL(path.join(pkgDir, 'lib/js', code, 'main.js')));
  const build = (b, M, spec) => {
    const T = M[spec.table]; const offs = {};
    for (const [name, type, value] of spec.fields) {
      if (value === null) continue; const k = kind(type);
      if (k === 's') offs[name] = b.createString(value);
      else if (k === 'vd' || k === 'vu8' || k.startsWith('vt:')) {
        const items = k.startsWith('vt:') ? value.map((x) => build(b, M, x)) : value;
        T[`start${camel(name)}Vector`](b, items.length);
        for (let i = items.length - 1; i >= 0; i--) {
          if (k === 'vd') b.addFloat64(items[i]); else if (k === 'vu8') b.addInt8(items[i]); else b.addOffset(items[i]);
        }
        offs[name] = b.endVector();
      } else if (k.startsWith('t:')) offs[name] = build(b, M, value);
    }
    T[`start${spec.table}`](b);
    for (const [name, type, value] of spec.fields) {
      if (value === null) continue; const k = kind(type);
      const v = name in offs ? offs[name] : (k === 'u64' || k === 'i64') ? BigInt(value) : value;
      T[`add${camel(name)}`](b, v);
    }
    return T[`end${spec.table}`](b);
  };
  const dump = (obj, spec, prefix, lines) => {
    for (const [name, type] of spec.fields) {
      const p = `${prefix}.${name}`; const k = kind(type);
      if (k === 's') { const v = obj[name](); lines.push(`${p}=${v === null ? 'null' : str(v)}`); }
      else if (k === 'd') lines.push(`${p}=${hex(obj[name]())}`);
      else if (k === 'b') lines.push(`${p}=${obj[name]()}`);
      else if (k === 'vd' || k === 'vu8') {
        const n = obj[`${lowerCamel(name)}Length`](); lines.push(`${p}#=${n}`);
        for (let i = 0; i < n; i++) lines.push(`${p}[${i}]=${k === 'vd' ? hex(obj[name](i)) : obj[name](i)}`);
      } else if (k.startsWith('t:')) {
        const v = obj[name](); const nested = spec.fields.find((f) => f[0] === name)[2];
        if (v === null) lines.push(`${p}=null`); else dump(v, nested ?? { fields: [] }, p, lines);
      } else if (k.startsWith('vt:')) {
        const n = obj[`${lowerCamel(name)}Length`](); lines.push(`${p}#=${n}`);
        const proto = spec.fields.find((f) => f[0] === name)[2][0];
        for (let i = 0; i < n; i++) dump(obj[name](i), proto, `${p}[${i}]`, lines);
      } else lines.push(`${p}=${String(obj[name]())}`);
    }
    return lines;
  };
  return {
    encode(code) {
      const b = new fb.Builder(1024); const spec = SAMPLES[code];
      b.finish(build(b, mods[code], spec), `$${code}`);
      return Buffer.from(b.asUint8Array());
    },
    decode(code, bytes) {
      const M = mods[code]; const bb = new fb.ByteBuffer(new Uint8Array(bytes));
      assert.ok(M[code].bufferHasIdentifier(bb), `JS: ${code} identifier`);
      return dump(M[code][`getRootAs${code}`](bb), SAMPLES[code], code, []).join('\n');
    },
  };
}

// ---------------------------------------------------------------- Python
function pyProgram(code) {
  const spec = SAMPLES[code]; let n = 0; const L = [];
  const build = (s, ind) => {
    const offs = {};
    for (const [name, type, value] of s.fields) {
      if (value === null) continue; const k = kind(type);
      if (k === 's') { offs[name] = `o${n++}`; L.push(`${ind}${offs[name]} = b.CreateString(${str(value)})`); }
      else if (k === 'vd' || k === 'vu8' || k.startsWith('vt:')) {
        const items = k.startsWith('vt:') ? value.map((x) => build(x, ind)) : value.map(num);
        L.push(`${ind}${s.table}.${s.table}Start${name}Vector(b, ${items.length})`);
        const prep = k === 'vd' ? 'PrependFloat64' : k === 'vu8' ? 'PrependUint8' : 'PrependUOffsetTRelative';
        for (const x of [...items].reverse()) L.push(`${ind}b.${prep}(${x})`);
        offs[name] = `o${n++}`; L.push(`${ind}${offs[name]} = b.EndVector()`);
      } else if (k.startsWith('t:')) offs[name] = build(value, ind);
    }
    L.push(`${ind}${s.table}.${s.table}Start(b)`);
    for (const [name, type, value] of s.fields) {
      if (value === null) continue; const k = kind(type);
      const v = name in offs ? offs[name] : k === 'b' ? (value ? 'True' : 'False') : num(value);
      L.push(`${ind}${s.table}.${s.table}Add${name}(b, ${v})`);
    }
    const o = `o${n++}`; L.push(`${ind}${o} = ${s.table}.${s.table}End(b)`); return o;
  };
  const tables = new Set(); const walk = (s) => { tables.add(s.table); for (const f of s.fields) { if (kind(f[1]).startsWith('t:')) walk(f[2]); if (kind(f[1]).startsWith('vt:')) walk(f[2][0]); } }; walk(spec);
  L.push('import sys, struct, json, flatbuffers', ...[...tables].map((t) => `import ${t}`));
  L.push('def H(x):', "    return 'NaN' if x != x else struct.pack('>d', x).hex()");
  L.push('def S(x):', "    return 'null' if x is None else json.dumps(x.decode('utf-8'))");
  L.push('def encode():', '    b = flatbuffers.Builder(1024)');
  const root = build(spec, '    ');
  L.push(`    b.Finish(${root}, file_identifier=b'$${code}')`, '    return bytes(b.Output())');
  let d = 0;
  const dump = (s, obj, prefix, ind) => {
    for (const [name, type, value] of s.fields) {
      const p = `${prefix}.${name}`; const k = kind(type); const q = (x) => `'${x}'`;
      if (k === 's') L.push(`${ind}out.append(${q(p + '=')} + S(${obj}.${name}()))`);
      else if (k === 'd') L.push(`${ind}out.append(${q(p + '=')} + H(${obj}.${name}()))`);
      else if (k === 'b') L.push(`${ind}out.append(${q(p + '=')} + ('true' if ${obj}.${name}() else 'false'))`);
      else if (k === 'vd' || k === 'vu8') {
        const i = `i${d++}`;
        L.push(`${ind}out.append(${q(p + '#=')} + str(${obj}.${name}Length()))`);
        L.push(`${ind}for ${i} in range(${obj}.${name}Length()):`);
        L.push(`${ind}    out.append(${q(p)} + '[' + str(${i}) + ']=' + ${k === 'vd' ? `H(${obj}.${name}(${i}))` : `str(${obj}.${name}(${i}))`})`);
      } else if (k.startsWith('t:')) {
        const v = `t${d++}`; L.push(`${ind}${v} = ${obj}.${name}()`, `${ind}if ${v} is None:`, `${ind}    out.append(${q(p + '=null')})`, `${ind}else:`);
        dump(value, v, p, ind + '    ');
      } else if (k.startsWith('vt:')) {
        const i = `i${d++}`; const v = `t${d++}`;
        L.push(`${ind}out.append(${q(p + '#=')} + str(${obj}.${name}Length()))`, `${ind}for ${i} in range(${obj}.${name}Length()):`, `${ind}    ${v} = ${obj}.${name}(${i})`);
        // Element paths carry the index; emit with a runtime prefix.
        const before = L.length; dump(value[0], v, `${p}[@]`, ind + '    ');
        for (let j = before; j < L.length; j++) L[j] = L[j].replace(`'${p}[@]`, `'${p}[' + str(${i}) + ']`);
      } else L.push(`${ind}out.append(${q(p + '=')} + str(int(${obj}.${name}())))`);
    }
  };
  L.push('def decode(buf):', `    assert ${code}.${code}.${code}BufferHasIdentifier(buf, 0), 'PY: ${code} identifier'`, `    r = ${code}.${code}.GetRootAs(buf, 0)`, '    out = []');
  dump(spec, 'r', code, '    ');
  L.push("    return '\\n'.join(out)");
  L.push("if sys.argv[1] == 'encode':", '    open(sys.argv[2], "wb").write(encode())', 'else:', '    sys.stdout.write(decode(open(sys.argv[2], "rb").read()))');
  return L.join('\n') + '\n';
}

// ---------------------------------------------------------------- Go
function goProgram() {
  const L = []; let n = 0;
  const build = (pkg, s) => {
    const offs = {};
    for (const [name, type, value] of s.fields) {
      if (value === null) continue; const k = kind(type);
      if (k === 's') { offs[name] = `o${n++}`; L.push(`${offs[name]} := b.CreateString(${str(value)})`); }
      else if (k === 'vd' || k === 'vu8' || k.startsWith('vt:')) {
        const items = k.startsWith('vt:') ? value.map((x) => build(pkg, x)) : value.map(num);
        L.push(`${pkg}.${s.table}Start${name}Vector(b, ${items.length})`);
        const prep = k === 'vd' ? 'PrependFloat64' : k === 'vu8' ? 'PrependByte' : 'PrependUOffsetT';
        for (const x of [...items].reverse()) L.push(`b.${prep}(${x})`);
        offs[name] = `o${n++}`; L.push(`${offs[name]} := b.EndVector(${items.length})`);
      } else if (k.startsWith('t:')) offs[name] = build(pkg, value);
    }
    L.push(`${pkg}.${s.table}Start(b)`);
    for (const [name, , value] of s.fields) {
      if (value === null) continue;
      L.push(`${pkg}.${s.table}Add${name}(b, ${name in offs ? offs[name] : num(value)})`);
    }
    const o = `o${n++}`; L.push(`${o} := ${pkg}.${s.table}End(b)`); return o;
  };
  const dump = (pkg, s, obj, prefix) => {
    for (const [name, type, value] of s.fields) {
      const p = `${prefix}.${name}`; const k = kind(type);
      if (k === 's') L.push(`out = append(out, ${str(p + '=')}+S(${obj}.${name}()))`);
      else if (k === 'd') L.push(`out = append(out, ${str(p + '=')}+H(${obj}.${name}()))`);
      else if (k === 'b') L.push(`out = append(out, ${str(p + '=')}+fmt.Sprint(${obj}.${name}()))`);
      else if (k === 'vd' || k === 'vu8') {
        L.push(`out = append(out, ${str(p + '#=')}+fmt.Sprint(${obj}.${name}Length()))`);
        L.push(`for i := 0; i < ${obj}.${name}Length(); i++ {`, `out = append(out, fmt.Sprintf(${str(p + '[%d]=%s')}, i, ${k === 'vd' ? `H(${obj}.${name}(i))` : `fmt.Sprint(${obj}.${name}(i))`}))`, '}');
      } else if (k.startsWith('t:')) {
        const v = `t${n++}`; L.push(`if ${v} := ${obj}.${name}(nil); ${v} == nil {`, `out = append(out, ${str(p + '=null')})`, '} else {');
        dump(pkg, value, v, p); L.push('}');
      } else if (k.startsWith('vt:')) {
        const v = `t${n++}`;
        L.push(`out = append(out, ${str(p + '#=')}+fmt.Sprint(${obj}.${name}Length()))`, `for i := 0; i < ${obj}.${name}Length(); i++ {`, `${v} := new(${pkg}.${sub(type)})`, `${obj}.${name}(${v}, i)`);
        const before = L.length; dump(pkg, value[0], v, `${p}[@]`);
        for (let j = before; j < L.length; j++) L[j] = L[j].replace(`"${p}[@]`, `fmt.Sprintf("${p}[%d]", i)+"`);
        L.push('}');
      } else L.push(`out = append(out, ${str(p + '=')}+fmt.Sprint(int64(${obj}.${name}())))`);
    }
  };
  L.push('package main', 'import (', '"encoding/json"', '"fmt"', '"math"', '"os"', '"strings"', `flatbuffers "github.com/google/flatbuffers/go"`,
    ...Object.keys(SAMPLES).map((c) => `"${GO_MODULE}/${c}"`), ')');
  L.push('func H(x float64) string { if math.IsNaN(x) { return "NaN" }; return fmt.Sprintf("%016x", math.Float64bits(x)) }');
  L.push('func S(x []byte) string { if x == nil { return "null" }; j, _ := json.Marshal(string(x)); return string(j) }');
  L.push('var _ = strings.Join');
  for (const code of Object.keys(SAMPLES)) {
    L.push(`func encode${code}() []byte {`, 'b := flatbuffers.NewBuilder(1024)');
    const root = build(code, SAMPLES[code]);
    L.push(`b.FinishWithFileIdentifier(${root}, []byte("$${code}"))`, 'return b.FinishedBytes()', '}');
    L.push(`func decode${code}(buf []byte) string {`, `if !${code}.${code}BufferHasIdentifier(buf) { panic("GO: ${code} identifier") }`,
      `r := ${code}.GetRootAs${code}(buf, 0)`, 'out := []string{}');
    dump(code, SAMPLES[code], 'r', code);
    L.push('return strings.Join(out, "\\n")', '}');
  }
  L.push('func main() {', 'code, path := os.Args[2], os.Args[3]', 'if os.Args[1] == "encode" {', 'var buf []byte', 'switch code {',
    ...Object.keys(SAMPLES).map((c) => `case "${c}": buf = encode${c}()`), '}', 'if err := os.WriteFile(path, buf, 0o644); err != nil { panic(err) }', 'return', '}',
    'buf, err := os.ReadFile(path)', 'if err != nil { panic(err) }', 'switch code {', ...Object.keys(SAMPLES).map((c) => `case "${c}": os.Stdout.WriteString(decode${c}(buf))`), '}', '}');
  return L.join('\n') + '\n';
}

// ---------------------------------------------------------------- Rust
function rsProgram() {
  const L = []; let n = 0;
  const mod = (code, t) => `spacedatastandards_org::${RUST_MODULE[t] ?? code}::main_generated`;
  const build = (code, s) => {
    const offs = {}; const M = mod(code, s.table);
    for (const [name, type, value] of s.fields) {
      if (value === null) continue; const k = kind(type);
      if (k === 's') { offs[name] = `o${n++}`; L.push(`let ${offs[name]} = b.create_string(${str(value)});`); }
      else if (k === 'vd' || k === 'vu8' || k.startsWith('vt:')) {
        const items = k.startsWith('vt:') ? value.map((x) => build(code, x)) : value.map((x) => rsNum(x, k === 'vd' ? 'f64' : 'u8'));
        offs[name] = `o${n++}`; L.push(`let ${offs[name]} = b.create_vector(&[${items.join(', ')}]);`);
      } else if (k.startsWith('t:')) offs[name] = build(code, value);
    }
    const tb = `tb${n++}`; L.push(`let mut ${tb} = ${M}::${s.table}Builder::new(&mut b);`);
    for (const [name, type, value] of s.fields) {
      if (value === null) continue; const k = kind(type);
      let v = offs[name];
      if (v === undefined) v = k.startsWith('e:') ? `${mod(code, sub(type))}::${sub(type)}(${value})` : k === 'b' ? String(value) : k === 'd' ? rsNum(value, 'f64') : rsNum(value, k);
      L.push(`${tb}.add_${name}(${v});`);
    }
    const o = `o${n++}`; L.push(`let ${o} = ${tb}.finish();`); return o;
  };
  const dump = (code, s, obj, prefix, idx) => {
    const P = (x) => idx ? `format!("${prefix.replace('[@]', '[{}]')}.${x}", ${idx})` : `"${prefix}.${x}".to_string()`;
    for (const [name, type, value] of s.fields) {
      const k = kind(type); const req = required(type); const p = P(name);
      if (k === 's') L.push(`out.push(format!("{}={}", ${p}, ${req ? `q(Some(${obj}.${name}()))` : `q(${obj}.${name}())`}));`);
      else if (k === 'd') L.push(`out.push(format!("{}={}", ${p}, h(${obj}.${name}())));`);
      else if (k === 'b') L.push(`out.push(format!("{}={}", ${p}, ${obj}.${name}()));`);
      else if (k === 'vd' || k === 'vu8') {
        const v = `v${n++}`;
        L.push(`let ${v}: Vec<${k === 'vd' ? 'f64' : 'u8'}> = ${obj}.${name}().map(|v| v.iter().collect()).unwrap_or_default();`,
          `out.push(format!("{}#={}", ${p}, ${v}.len()));`,
          `for (i, x) in ${v}.iter().enumerate() { out.push(format!("{}[{}]={}", ${p}, i, ${k === 'vd' ? 'h(*x)' : 'x'})); }`);
      } else if (k.startsWith('t:')) {
        const v = `t${n++}`;
        if (req) { L.push(`{ let ${v} = ${obj}.${name}();`); dump(code, value, v, idx ? `${prefix}.${name}` : `${prefix}.${name}`, idx); L.push('}'); }
        else { L.push(`match ${obj}.${name}() { None => out.push(format!("{}=null", ${p})), Some(${v}) => {`); dump(code, value, v, `${prefix}.${name}`, idx); L.push('} }'); }
      } else if (k.startsWith('vt:')) {
        const v = `v${n++}`; const i = `i${n++}`; const e = `t${n++}`;
        L.push(`let ${v} = ${obj}.${name}();`, `out.push(format!("{}#={}", ${p}, ${v}.map(|v| v.len()).unwrap_or(0)));`,
          `if let Some(${v}) = ${v} { for ${i} in 0..${v}.len() { let ${e} = ${v}.get(${i});`);
        dump(code, value[0], e, `${prefix}.${name}[@]`, i); L.push('} }');
      } else if (k.startsWith('e:')) L.push(`out.push(format!("{}={}", ${p}, ${obj}.${name}().0));`);
      else L.push(`out.push(format!("{}={}", ${p}, ${obj}.${name}()));`);
    }
  };
  L.push('#![allow(non_snake_case, unused_variables, unused_mut)]', 'extern crate flatbuffers;', 'use std::io::Write;');
  L.push('fn h(x: f64) -> String { if x.is_nan() { "NaN".to_string() } else { format!("{:016x}", x.to_bits()) } }');
  L.push('fn q(x: Option<&str>) -> String { match x { None => "null".to_string(), Some(s) => format!("\\"{}\\"", s) } }');
  for (const code of Object.keys(SAMPLES)) {
    L.push(`fn encode_${code}() -> Vec<u8> {`, 'let mut b = flatbuffers::FlatBufferBuilder::with_capacity(1024);');
    const root = build(code, SAMPLES[code]);
    L.push(`b.finish(${root}, Some("$${code}"));`, 'b.finished_data().to_vec()', '}');
    L.push(`fn decode_${code}(buf: &[u8]) -> String {`, `assert!(flatbuffers::buffer_has_identifier(buf, "$${code}", false), "RS: ${code} identifier");`,
      `let r = ${mod(code, code)}::root_as_${code.toLowerCase()}(buf).expect("RS: ${code} verifier");`, 'let mut out: Vec<String> = Vec::new();');
    dump(code, SAMPLES[code], 'r', code, null);
    L.push('out.join("\\n")', '}');
  }
  L.push('fn main() {', 'let a: Vec<String> = std::env::args().collect();', 'let (code, path) = (a[2].as_str(), a[3].as_str());',
    'if a[1] == "encode" {', 'let buf = match code {', ...Object.keys(SAMPLES).map((c) => `"${c}" => encode_${c}(),`), '_ => panic!("code") };',
    'std::fs::write(path, buf).unwrap(); return; }', 'let buf = std::fs::read(path).unwrap();',
    'let s = match code {', ...Object.keys(SAMPLES).map((c) => `"${c}" => decode_${c}(&buf),`), '_ => panic!("code") };',
    'std::io::stdout().write_all(s.as_bytes()).unwrap();', '}');
  return L.join('\n') + '\n';
}

// ---------------------------------------------------------------- registries
async function http(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'spacedatanetwork-stack-ci (+https://github.com/DigitalArsenal)' } });
  return { status: res.status, body: res.ok ? await res.text() : '' };
}

async function registries(version) {
  const report = [];
  const npmVersion = run('npm', ['view', `spacedatastandards.org@${version}`, 'version']).trim();
  assert.equal(npmVersion, version, 'npm does not serve the version'); report.push(`npm        spacedatastandards.org@${npmVersion}`);
  const crate = await http(`https://crates.io/api/v1/crates/spacedatastandards-org/${version}`);
  assert.equal(crate.status, 200, `crates.io: HTTP ${crate.status}`); report.push(`crates.io  spacedatastandards-org ${JSON.parse(crate.body).version.num}`);
  const goInfo = await http(`https://proxy.golang.org/github.com/!digital!arsenal/spacedatastandards.org/lib/go/@v/v${version}.info`);
  assert.equal(goInfo.status, 200, `Go proxy: HTTP ${goInfo.status}`); report.push(`Go proxy   ${GO_MODULE} ${JSON.parse(goInfo.body).Version}`);
  const pypi = await http(`https://pypi.org/pypi/spacedatastandards.org/${version}/json`);
  if (pypi.status === 200) report.push(`PyPI       spacedatastandards.org ${version}`);
  else {
    let enabled = '';
    try { enabled = run('gh', ['variable', 'get', 'PYPI_ENABLED', '-R', 'DigitalArsenal/spacedatastandards.org']).trim(); } catch { enabled = ''; }
    assert.notEqual(enabled, 'true', `PyPI is enabled but does not serve ${version} (HTTP ${pypi.status})`);
    report.push(`PyPI       not configured (PYPI_ENABLED is not 'true'; HTTP ${pypi.status}); Python verified from the npm-published dist/<CODE>/<CODE>.py.tar.gz`);
  }
  const runs = JSON.parse(run('gh', ['run', 'list', '-R', 'DigitalArsenal/spacedatastandards.org', '--workflow', 'publish.yml', '--branch', `v${version}`, '--json', 'conclusion,databaseId,status', '-L', '5']));
  const ok = runs.find((r) => r.status === 'completed' && r.conclusion === 'success');
  assert.ok(ok, `no successful publish.yml run for v${version}: ${JSON.stringify(runs)}`); report.push(`CI         publish.yml run ${ok.databaseId} success`);
  return report;
}

// ---------------------------------------------------------------- main
async function main() {
  const args = process.argv.slice(2);
  const version = args.find((a) => /^\d+\.\d+\.\d+$/.test(a));
  const local = args.includes('--local');
  const wi = args.indexOf('--work');
  assert.ok(version, 'usage: node scripts/verify-release.mjs <version> [--local] [--work DIR]');
  const work = path.resolve(wi >= 0 ? args[wi + 1] : path.join(os.tmpdir(), `sds-verify-release-${version}${local ? '-local' : ''}`));
  fs.mkdirSync(path.join(work, 'out'), { recursive: true });
  const say = (s) => process.stdout.write(`${s}\n`);

  if (!local) for (const line of await registries(version)) say(`ok  ${line}`);

  // JS + Python sources.
  let pkgDir = ROOT;
  if (local) {
    assert.equal(JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'))).version.split('+')[0], version, 'checkout version');
  } else {
    fs.mkdirSync(path.join(work, 'js'), { recursive: true });
    fs.writeFileSync(path.join(work, 'js/package.json'), '{"private":true}');
    run('npm', ['install', '--no-audit', '--no-fund', '--ignore-scripts', `spacedatastandards.org@${version}`], { cwd: path.join(work, 'js') });
    pkgDir = path.join(work, 'js/node_modules/spacedatastandards.org');
    assert.equal(JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'))).version.split('+')[0], version);
  }
  const pyDir = (code) => {
    if (local) return path.join(ROOT, 'lib/py', code);
    const dir = path.join(work, 'py'); fs.mkdirSync(dir, { recursive: true });
    run('tar', ['-xzf', path.join(pkgDir, 'dist', code, `${code}.py.tar.gz`), '-C', dir]);
    return path.join(dir, code);
  };
  const venv = path.join(work, 'venv');
  if (!fs.existsSync(path.join(venv, 'bin/python'))) {
    run('python3', ['-m', 'venv', venv]);
    run(path.join(venv, 'bin/pip'), ['install', '-q', `flatbuffers==${FLATBUFFERS}`]);
  }

  // Go.
  const goDir = path.join(work, 'go'); fs.mkdirSync(goDir, { recursive: true });
  fs.writeFileSync(path.join(goDir, 'go.mod'), `module sdsverify\n\ngo 1.21\n\nrequire ${GO_MODULE} v${version}\n${local ? `\nreplace ${GO_MODULE} => ${path.join(ROOT, 'lib/go')}\n` : ''}`);
  fs.writeFileSync(path.join(goDir, 'main.go'), goProgram());
  const goEnv = { ...process.env, GOFLAGS: '-mod=mod', GONOSUMDB: 'github.com/DigitalArsenal/*' };
  run('go', ['mod', 'tidy'], { cwd: goDir, env: goEnv });
  run('go', ['build', '-o', 'verify', '.'], { cwd: goDir, env: goEnv });

  // Rust.
  const rsDir = path.join(work, 'rs'); fs.mkdirSync(path.join(rsDir, 'src'), { recursive: true });
  let dep = `"=${version}"`;
  if (local) {
    const crateRoot = path.join(work, 'rs-crate'); fs.rmSync(crateRoot, { recursive: true, force: true });
    fs.mkdirSync(path.join(crateRoot, 'lib'), { recursive: true });
    fs.cpSync(path.join(ROOT, 'lib/rs'), path.join(crateRoot, 'lib/rs'), { recursive: true });
    run('node', [path.join(ROOT, 'scripts/generateCargoPackage.js')], { cwd: crateRoot });
    dep = `{ path = "${path.join(crateRoot, 'lib/rs')}" }`;
  }
  fs.writeFileSync(path.join(rsDir, 'Cargo.toml'), `[package]\nname = "sdsverify"\nversion = "0.0.0"\nedition = "2021"\n\n[dependencies]\nflatbuffers = "=${FLATBUFFERS}"\nspacedatastandards-org = ${dep}\n`);
  fs.writeFileSync(path.join(rsDir, 'src/main.rs'), rsProgram());
  run('cargo', ['build', '--release', '-q'], { cwd: rsDir, env: { ...process.env, CARGO_BUILD_JOBS: process.env.CARGO_BUILD_JOBS ?? '4' } });
  const rsBin = path.join(rsDir, 'target/release/sdsverify');

  // Encode and decode.
  const js = await jsCodec(pkgDir);
  for (const code of Object.keys(SAMPLES)) { pyDir(code); fs.writeFileSync(path.join(work, `py_${code}.py`), pyProgram(code)); }
  const PY = (mode, code, file) => run(path.join(venv, 'bin/python'), [path.join(work, `py_${code}.py`), mode, file], { cwd: work, env: { ...process.env, PYTHONPATH: local ? path.join(ROOT, 'lib/py', code) : path.join(work, 'py', code) } });
  const enc = {
    js: (code, file) => fs.writeFileSync(file, js.encode(code)),
    py: (code, file) => PY('encode', code, file),
    rs: (code, file) => run(rsBin, ['encode', code, file]),
    go: (code, file) => run(path.join(goDir, 'verify'), ['encode', code, file]),
  };
  const dec = {
    js: (code, file) => js.decode(code, fs.readFileSync(file)),
    py: (code, file) => PY('decode', code, file),
    rs: (code, file) => run(rsBin, ['decode', code, file]),
    go: (code, file) => run(path.join(goDir, 'verify'), ['decode', code, file]),
  };
  let failed = false;
  for (const code of Object.keys(SAMPLES)) {
    const files = Object.fromEntries(LANGS.map((l) => [l, path.join(work, 'out', `${code}.${l}.bin`)]));
    for (const l of LANGS) enc[l](code, files[l]);
    const sums = Object.fromEntries(LANGS.map((l) => [l, crypto.createHash('sha256').update(fs.readFileSync(files[l])).digest('hex')]));
    const bytesSame = new Set(Object.values(sums)).size === 1;
    const dumps = {};
    for (const d of LANGS) for (const e of LANGS) dumps[`${d}<-${e}`] = dec[d](code, files[e]);
    const ref = dumps['js<-js'];
    const dumpMismatch = Object.entries(dumps).filter(([, v]) => v !== ref).map(([k]) => k);
    const lines = new Map(ref.split('\n').map((l) => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1)]; }));
    const wrong = [...expected(SAMPLES[code], code)].filter(([k, v]) => lines.get(k) !== v).map(([k, v]) => `${k}: want ${v} got ${lines.get(k)}`);
    const size = fs.statSync(files.js).size;
    if (!bytesSame || dumpMismatch.length || wrong.length) {
      failed = true;
      say(`FAIL ${code}: bytes ${bytesSame ? 'identical' : JSON.stringify(sums)}; dump mismatches ${dumpMismatch.join(',') || 'none'}; ${wrong.join('; ')}`);
      for (const k of dumpMismatch) fs.writeFileSync(path.join(work, 'out', `${code}.${k.replace('<-', '_from_')}.txt`), dumps[k]);
      fs.writeFileSync(path.join(work, 'out', `${code}.reference.txt`), ref);
    } else {
      say(`ok  ${code}: js/py/rs/go encode ${size} identical bytes sha256=${sums.js.slice(0, 16)}; 16/16 cross-decodes identical (${lines.size} fields)`);
    }
  }
  if (failed) { say(`verify-release ${version}: FAIL (artifacts in ${work}/out)`); process.exit(1); }
  say(`verify-release ${version}${local ? ' --local' : ''}: PASS`);
}

main().catch((err) => { process.stderr.write(`${err.stack ?? err}\n${err.stderr ?? ''}\n`); process.exit(1); });
