#!/usr/bin/env node
// One E2E: generated JS -> generated C++ -> generated Go -> generated JS.
// Default: candidate. --published VERSION: immutable npm archives and Go module.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const published = process.argv[2] === '--published' ? process.argv[3] : null;
if (process.argv.length > 2) assert.match(published ?? '', /^\d+\.\d+\.\d+$/);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-ppe-eop-e2e-'));
const run = (cmd, args) => execFileSync(cmd, args, { cwd: tmp, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 32 * 1024 * 1024 });
const pvStrings = ['SOURCE_ID', 'ORIGINATOR', 'PROVIDER_ID', 'PRODUCER', 'LICENSE_ID', 'LINEAGE'];
const pvScalars = ['SOURCE_KIND', 'LICENSE_CLASS'];
const fields = {
  PPE: { strings: ['CENTER_NAME', 'START_TIME', 'STOP_TIME', 'EPHEMERIS_SOURCE'], scalars: ['TIME_SYSTEM', 'DEFAULT_BASIS_TYPE', 'NOMINAL_SEGMENT_SPAN', 'NOMINAL_NUM_COEFFICIENTS'] },
  EOP: { strings: ['DATE', 'DATA_SET_EPOCH', 'DATA_SET_CID'], scalars: ['MJD', 'SERIES', 'IAU_CONVENTION', 'UT1_MINUS_UTC_SECONDS_HP', 'X_POLE_WANDER_RADIANS_HP', 'Y_POLE_WANDER_RADIANS_HP'] },
};
const segScalars = ['EPOCH_HALF_SPAN', 'NUM_COEFFICIENTS', 'BASIS_TYPE', 'MAX_POSITION_RESIDUAL'];
const axes = ['X', 'Y', 'Z'];
try {
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  let artifact = root, goRoot = path.join(root, 'lib/go');
  if (published) {
    const packed = JSON.parse(run('npm', ['pack', `spacedatastandards.org@${published}`, '--json', '--ignore-scripts', '--pack-destination', tmp]));
    assert.equal(packed[0].version, published);
    run('tar', ['-xzf', path.join(tmp, packed[0].filename), '-C', tmp]);
    artifact = path.join(tmp, 'package');
    const mod = JSON.parse(run('go', ['mod', 'download', '-json', `github.com/DigitalArsenal/spacedatastandards.org/lib/go@v${published}`]));
    assert.equal(mod.Version, `v${published}`); assert.ok(mod.Dir, mod.Error); goRoot = mod.Dir;
  }
  const version = JSON.parse(fs.readFileSync(path.join(artifact, 'package.json'))).version;
  assert.equal(version.split('+')[0], published || '1.262.0');
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  assert.ok(runtime.Dir, runtime.Error);
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.mkdirSync(path.join(tmp, 'cpp'));
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsppeeope2e\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  for (const code of ['PPE', 'EOP']) {
    const M = await import(pathToFileURL(path.join(artifact, `lib/js/${code}/main.js`)));
    const Type = M[code];
    // Synthetic data and synthetic licence identifiers; no operator records or licence grants.
    const provenance = Object.assign(new M.PVNT(), {
      SOURCE_ID: `fixture-${code.toLowerCase()}`, SOURCE_KIND: code === 'PPE' ? M.pvnSourceKind.Ephemeris : M.pvnSourceKind.Reference,
      ORIGINATOR: 'Synthetic source', PROVIDER_ID: 'fixture-provider', PRODUCER: 'wire-e2e/1',
      LICENSE_CLASS: M.pvnLicenseClass.Reproducible, LICENSE_ID: 'fixture-terms-only', LINEAGE: `fixture-lineage-${code}`,
    });
    const value = code === 'PPE' ? Object.assign(new M.PPET(), {
      CENTER_NAME: 'EARTH', TIME_SYSTEM: M.timingStandard.UTC,
      START_TIME: '2026-10-23T00:00:00Z', STOP_TIME: '2026-10-23T00:02:00Z',
      EPHEMERIS_SOURCE: 'Synthetic operator forecast / fixture-001', NOMINAL_SEGMENT_SPAN: 120, NOMINAL_NUM_COEFFICIENTS: 3,
      POSITION_RECORDS: [Object.assign(new M.PPEPositionRecordT(), {
        EPOCH_MID: '2026-10-23T00:01:00Z', EPOCH_HALF_SPAN: 60, NUM_COEFFICIENTS: 3,
        BASIS_TYPE: M.polynomialBasisType.CHEBYSHEV, POS_COEFF_X: [7000, 0.25, -0.125],
        POS_COEFF_Y: [10, -0.5, 0.125], POS_COEFF_Z: [-20, 0.75, -0.25], MAX_POSITION_RESIDUAL: 0.001,
      })],
    }) : Object.assign(new M.EOPT(), {
      DATE: '2026-10-23', MJD: 61336, SERIES: M.eopSeries.IERS_C04_20, IAU_CONVENTION: M.iauPrecessionNutationModel.IAU_2006,
      DATA_SET_EPOCH: '2026-10-23T00:00:00Z', DATA_SET_CID: 'synthetic-fixture-id',
      UT1_MINUS_UTC_SECONDS_HP: 0.1234567890123, X_POLE_WANDER_RADIANS_HP: 1.23456789e-7, Y_POLE_WANDER_RADIANS_HP: -2.34567891e-7,
    });
    value.PROVENANCE = provenance;
    const absent = Object.assign(new M[`${code}T`](), value, { PROVENANCE: null });
    const cases = [[code, value], [`${code}-absent`, absent]];
    for (const [name, object] of cases) {
      const b = new fb.Builder(1024); Type[`finish${code}Buffer`](b, object.pack(b));
      fs.writeFileSync(path.join(tmp, `${name}.js.fb`), b.asUint8Array());
    }
    run('tar', ['-xzf', path.join(artifact, `dist/${code}/${code}.cpp.tar.gz`), '-C', path.join(tmp, 'cpp')]);
    fs.writeFileSync(path.join(tmp, 'roundtrip.cpp'), cpp(code));
    run(process.env.CXX || 'c++', ['-std=c++17', '-I', include, '-I', path.join(tmp, 'cpp'), 'roundtrip.cpp', '-o', 'roundtrip']);
    run(path.join(tmp, 'roundtrip'), []);
    fs.cpSync(path.join(goRoot, code), path.join(tmp, code), { recursive: true });
    fs.writeFileSync(path.join(tmp, code, 'wire_e2e.go'), go(code));
    fs.writeFileSync(path.join(tmp, 'main.go'), `package main\nimport p "sdsppeeope2e/${code}"\nfunc main(){p.WireE2E()}\n`);
    run('go', ['run', '-mod=mod', 'main.go']);
    for (const [name, expected] of cases) for (const runtime of ['js', 'cpp', 'go']) {
      const bb = new fb.ByteBuffer(fs.readFileSync(path.join(tmp, `${name}.${runtime}.fb`)));
      assert.ok(Type.bufferHasIdentifier(bb));
      assert.deepEqual(Type[`getRootAs${code}`](bb).unpack(), expected, `${name}: ${runtime} changed fields`);
    }
    assert.match(fs.readFileSync(path.join(artifact, `schema/${code}/main.fbs`), 'utf8'), /PROVENANCE:\s*PVN;/);
    assert.ok(fs.readFileSync(path.join(artifact, `lib/fbjson/${code}/main.fb.schema.json`), 'utf8').includes('PROVENANCE'));
  }
  console.log(`PASS: ${published ? 'published' : 'candidate'} SDS ${version}; PPE/EOP JS -> C++ -> Go -> JS; all eight PVN fields, Chebyshev coefficients, EOP binary64 fields, optional absence`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error); process.exitCode = 1;
} finally { fs.rmSync(tmp, { recursive: true, force: true }); }

function cpp(code) {
  const { strings, scalars } = fields[code];
  return `#include "${code}/main_generated.h"
#include <fstream>
#include <iterator>
#include <vector>
#include <cassert>
using namespace flatbuffers;
int main() { for (auto name : {"${code}", "${code}-absent"}) {
 std::ifstream in(std::string(name)+".js.fb",std::ios::binary); std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(in)), {});
 Verifier v(bytes.data(),bytes.size()); assert(Verify${code}Buffer(v)); auto p=Get${code}(bytes.data()); FlatBufferBuilder b;
 Offset<PVN> pv; if(auto q=p->PROVENANCE()) {
 ${pvStrings.map(k=>`auto v_${k}=b.CreateString(q->${k}()->str());`).join('\n')}
 PVNBuilder x(b); ${pvStrings.map(k=>`x.add_${k}(v_${k});`).join(' ')} ${pvScalars.map(k=>`x.add_${k}(q->${k}());`).join(' ')} pv=x.Finish(); }
 ${strings.map(k=>`auto v_${k}=b.CreateString(p->${k}()->str());`).join('\n')}
 ${code === 'PPE' ? `std::vector<Offset<PPEPositionRecord>> segments;
 for(auto s:*p->POSITION_RECORDS()) { auto epoch=b.CreateString(s->EPOCH_MID()->str());
 ${axes.map(a=>`auto v_${a}=b.CreateVector(s->POS_COEFF_${a}()->data(),s->POS_COEFF_${a}()->size());`).join('\n')}
 PPEPositionRecordBuilder sb(b); sb.add_EPOCH_MID(epoch); ${axes.map(a=>`sb.add_POS_COEFF_${a}(v_${a});`).join(' ')} ${segScalars.map(k=>`sb.add_${k}(s->${k}());`).join(' ')} segments.push_back(sb.Finish()); }
 auto records=b.CreateVector(segments);` : ''}
 ${code}Builder x(b); x.add_PROVENANCE(pv); ${strings.map(k=>`x.add_${k}(v_${k});`).join(' ')} ${scalars.map(k=>`x.add_${k}(p->${k}());`).join(' ')}
 ${code === 'PPE' ? 'x.add_POSITION_RECORDS(records);' : ''} Finish${code}Buffer(b,x.Finish());
 std::ofstream out(std::string(name)+".cpp.fb",std::ios::binary); out.write(reinterpret_cast<const char*>(b.GetBufferPointer()),b.GetSize());
} }
`;
}
function go(code) {
  const { strings, scalars } = fields[code];
  return `package ${code}
import ("os"; "github.com/google/flatbuffers/go")
func WireE2E(){ for _,name:=range []string{"${code}","${code}-absent"} {
 data,err:=os.ReadFile(name+".cpp.fb");if err!=nil{panic(err)}; if !${code}BufferHasIdentifier(data){panic("identifier")}; p:=GetRootAs${code}(data,0); b:=flatbuffers.NewBuilder(1024)
 var pv flatbuffers.UOffsetT; if q:=p.PROVENANCE(nil);q!=nil {
 ${pvStrings.map(k=>`v_${k}:=b.CreateByteString(q.${k}())`).join('\n')}
 PVNStart(b); ${pvStrings.map(k=>`PVNAdd${k}(b,v_${k})`).join('; ')}; ${pvScalars.map(k=>`PVNAdd${k}(b,q.${k}())`).join('; ')}; pv=PVNEnd(b) }
 ${strings.map(k=>`v_${k}:=b.CreateByteString(p.${k}())`).join('\n')}
 ${code === 'PPE' ? `segments:=make([]flatbuffers.UOffsetT,p.POSITION_RECORDSLength())
 for i:=range segments { var s PPEPositionRecord; if !p.POSITION_RECORDS(&s,i){panic("segment")}; epoch:=b.CreateByteString(s.EPOCH_MID())
 ${axes.map(a=>`PPEPositionRecordStartPOS_COEFF_${a}Vector(b,s.POS_COEFF_${a}Length());for j:=s.POS_COEFF_${a}Length()-1;j>=0;j--{b.PrependFloat64(s.POS_COEFF_${a}(j))};v_${a}:=b.EndVector(s.POS_COEFF_${a}Length())`).join('\n')}
 PPEPositionRecordStart(b); PPEPositionRecordAddEPOCH_MID(b,epoch); ${axes.map(a=>`PPEPositionRecordAddPOS_COEFF_${a}(b,v_${a})`).join('; ')}; ${segScalars.map(k=>`PPEPositionRecordAdd${k}(b,s.${k}())`).join('; ')}; segments[i]=PPEPositionRecordEnd(b) }
 PPEStartPOSITION_RECORDSVector(b,len(segments)); for i:=len(segments)-1;i>=0;i--{b.PrependUOffsetT(segments[i])}; records:=b.EndVector(len(segments))` : ''}
 ${code}Start(b); ${code}AddPROVENANCE(b,pv); ${strings.map(k=>`${code}Add${k}(b,v_${k})`).join('; ')}; ${scalars.map(k=>`${code}Add${k}(b,p.${k}())`).join('; ')}
 ${code === 'PPE' ? 'PPEAddPOSITION_RECORDS(b,records)' : ''}
 Finish${code}Buffer(b,${code}End(b)); if err:=os.WriteFile(name+".go.fb",b.FinishedBytes(),0600);err!=nil{panic(err)}
} }
`;
}
