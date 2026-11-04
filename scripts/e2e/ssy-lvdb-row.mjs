#!/usr/bin/env node
// Release-pinned LVDB excerpt -> generated TS -> generated C++ decoder.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import * as fb from 'flatbuffers';
const root = fileURLToPath(new URL('../../', import.meta.url));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ssy-lvdb-'));
const run = (cmd, args) => execFileSync(cmd, args, { cwd: tmp, encoding: 'utf8' });
try {
  const bytes = fs.readFileSync(path.join(root, 'scripts/fixtures/ssy-lvdb-v1.1.1.json'));
  const fixture = JSON.parse(bytes);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), '57fc532ebaed4bafeb77f4bc8d1dff5926f55fd126e3d1a05460849f2bdfdbed');
  assert.deepEqual(fixture.rows.map(r => r.key), ['antlia_2', 'aquarius_3']);
  await build({ entryPoints: [path.join(root, 'lib/ts/SSY/main.ts')], bundle: true,
    platform: 'node', format: 'esm', outfile: path.join(tmp, 'bindings.mjs'), logLevel: 'silent' });
  const S = await import(pathToFileURL(path.join(tmp, 'bindings.mjs')));
  // This schema E2E exercises cited measurements; the production importer owns
  // the complete CSV/YAML join and value-added columns.
  const mapping = {
    distance_modulus: ['DISTANCE_MODULUS', 'mag', 'ref_distance'],
    rhalf: ['RHALF', 'arcmin', 'ref_structure'],
    ellipticity: ['ELLIPTICITY', '1', 'ref_structure'],
    position_angle: ['POSITION_ANGLE', 'deg', 'ref_structure'],
    apparent_magnitude_v: ['APPARENT_MAG_V', 'mag', 'ref_m_v'],
    vlos_systemic: ['VLOS_SYSTEMIC', 'km/s', 'ref_vlos'],
    vlos_sigma: ['VLOS_SIGMA', 'km/s', 'ref_vlos'],
    pmra: ['PMRA', 'mas/yr', 'ref_proper_motion'],
    pmdec: ['PMDEC', 'mas/yr', 'ref_proper_motion'],
    metallicity_spectroscopic: ['METALLICITY_SPECTROSCOPIC', 'dex', 'ref_metallicity_spectroscopic'],
    metallicity_spectroscopic_sigma: ['METALLICITY_SPECTROSCOPIC_SIGMA', 'dex', 'ref_metallicity_spectroscopic'],
    flux_HI: ['FLUX_HI', 'Jy km/s', 'ref_flux_HI'],
    age: ['AGE', 'Gyr', 'ref_age'],
  };
  const scalar = s => s === '' || s === undefined ? NaN : Number(s);
  const files = [], outputs = [];
  for (const row of fixture.rows) {
    const record = Object.assign(new S.SSYT(), { ID: `lvdb:${row.key}`, NAME: row.name,
      SYSTEM_CLASS: S.ssySystemKind.DWARF_GALAXY, HOST_ID: `lvdb:${row.host}`,
      SOURCE_CATALOG: 'Local Volume Database', SOURCE_RELEASE: 'v1.1.1', SOURCE_KEY: row.key,
      SOURCE_TABLE: row.table, SOURCE_URL: fixture.url, SOURCE_SHA256: [fixture.sha256],
      LICENSE: fixture.license, RETRIEVED_AT: fixture.retrieved_at,
      UNCERTAINTY_CONVENTION: 'ERR1/ERR2 = 84th/16th percentiles', LIMIT_CONFIDENCE: 0.95 });
    for (const [key, [field, unit, ref]] of Object.entries(mapping)) {
      const limit = row[key] === '' && row[`${key}_ul`] ? 1 : 0;
      const value = scalar(limit ? row[`${key}_ul`] : row[key]);
      if (Number.isNaN(value)) continue;
      const bibcode = row[ref].slice(-19);
      record[field] = Object.assign(new S.EXOParameterT(), { VALUE: value,
        ERR1: scalar(row[`${key}_ep`]), ERR2: -scalar(row[`${key}_em`]), LIMIT: limit, UNIT: unit,
        REFERENCE_BIBCODE: bibcode, REFERENCE_TEXT: row[ref],
        REFERENCE_URL: `https://ui.adsabs.harvard.edu/abs/${bibcode}`, RETRIEVED_AT: fixture.retrieved_at });
    }
    const builder = new fb.Builder(4096);
    S.SSY.finishSSYBuffer(builder, record.pack(builder));
    const encoded = builder.asUint8Array();
    assert.equal(Buffer.from(encoded.subarray(4, 8)).toString(), '$SSY');
    const output = S.SSY.getRootAsSSY(new fb.ByteBuffer(encoded)).unpack();
    assert.deepEqual(output, record, 'all populated fields and absent defaults survive TS decoding');
    const file = path.join(tmp, `${row.key}.fb`); fs.writeFileSync(file, encoded); files.push(file); outputs.push(output);
  }
  const d = outputs[0].DISTANCE_MODULUS, v = outputs[1].VLOS_SIGMA;
  assert.deepEqual([d.VALUE,d.ERR1,d.ERR2,d.LIMIT,d.UNIT,d.REFERENCE_BIBCODE], [20.47,0.09,-0.09,0,'mag','2022ApJ...926...78V']);
  assert.deepEqual([v.VALUE,v.LIMIT,v.UNIT,v.REFERENCE_BIBCODE], [3.5,1,'km/s','2025ApJ...979..164C']);
  assert.ok(Number.isNaN(v.ERR1) && Number.isNaN(v.ERR2));
  assert.equal(outputs[1].FLUX_HI, null);
  const runtime = JSON.parse(run('go', ['mod','download','-json','github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  const cpp = path.join(tmp, 'cpp'); fs.mkdirSync(cpp);
  run('tar', ['-xzf', path.join(root,'dist/SSY/SSY.cpp.tar.gz'), '-C', cpp]);
  fs.writeFileSync(path.join(tmp,'read.cpp'), `#include <cstdio>
#include <fstream>
#include <iterator>
#include <vector>
#include "SSY/main_generated.h"
void emit(const EXOParameter *p) {
  if (!p) { std::puts("absent"); return; }
  std::printf("%.17g\\t%.17g\\t%.17g\\t%d\\t%s\\t%s\\n",p->VALUE(),p->ERR1(),p->ERR2(),int(p->LIMIT()),p->UNIT()->c_str(),p->REFERENCE_BIBCODE()->c_str());
}
int main(int argc,char **argv) {
  for(int i=1;i<argc;i++) {
    std::ifstream in(argv[i],std::ios::binary); std::vector<uint8_t> b((std::istreambuf_iterator<char>(in)),{});
    flatbuffers::Verifier verifier(b.data(),b.size()); if(!VerifySSYBuffer(verifier)) return 2;
    auto s=GetSSY(b.data());
    ${Object.values(mapping).map(([field]) => `emit(s->${field}());`).join('\n    ')}
  }
}
`);
  run(process.env.CXX || 'c++', ['-std=c++17','-I',include,'-I',cpp,'read.cpp','-o','read']);
  const lines = run(path.join(tmp,'read'),files).trim().split('\n');
  const expected = outputs.flatMap(o => Object.values(mapping).map(([field]) => o[field]));
  assert.equal(lines.length,expected.length);
  lines.forEach((line,i) => {
    const p=expected[i]; if (!p) { assert.equal(line,'absent'); return; }
    const [value,ep,em,limit,unit,bibcode]=line.split('\t');
    assert.deepEqual([Number(value),Number(ep),Number(em),Number(limit),unit,bibcode],
      [p.VALUE,p.ERR1,p.ERR2,p.LIMIT,p.UNIT,p.REFERENCE_BIBCODE], `C++ parameter ${i}`);
  });
  console.log('PASS SSY LVDB v1.1.1: antlia_2 and aquarius_3 decoded in TS and C++; distance modulus 20.47/+0.09/-0.09 and sigma upper limit 3.5 km/s, LIMIT +1, bibcodes preserved');
} finally { fs.rmSync(tmp,{recursive:true,force:true}); }
