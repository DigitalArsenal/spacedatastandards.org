#!/usr/bin/env node
// One wire E2E: generated JS -> generated C++ -> generated Go -> generated JS.
// --published VERSION repeats it with the public npm archives and Go module.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

async function main() {
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-spw-dcl-e2e-'));
const run = (command, args, cwd = tmp) => execFileSync(command, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 32 * 1024 * 1024 });
const published = process.argv[2] === '--published' ? process.argv[3] : null;
if (process.argv.length > 2) assert.match(published ?? '', /^\d+\.\d+\.\d+$/);
let artifact = root;
let goBindings = path.join(root, 'lib/go/DCL');
try {
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  if (published) {
    const packed = JSON.parse(run('npm', ['pack', `spacedatastandards.org@${published}`, '--json', '--ignore-scripts', '--pack-destination', tmp]));
    run('tar', ['-xzf', path.join(tmp, packed[0].filename), '-C', tmp]);
    artifact = path.join(tmp, 'package');
    assert.equal(JSON.parse(fs.readFileSync(path.join(artifact, 'package.json'))).version, published);
    const mod = JSON.parse(run('go', ['mod', 'download', '-json', `github.com/DigitalArsenal/spacedatastandards.org/lib/go@v${published}`]));
    assert.ok(mod.Dir, mod.Error);
    goBindings = path.join(mod.Dir, 'DCL');
  }
  const M = await import(pathToFileURL(path.join(artifact, 'lib/js/DCL/main.js')));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const pvn = () => Object.assign(new M.PVNT(), {
    SOURCE_ID: 'gfz-f107-ap', SOURCE_KIND: M.pvnSourceKind.Observation,
    ORIGINATOR: 'GFZ', PROVIDER_ID: 'open-space-weather', PRODUCER: 'wire-e2e',
    LICENSE_CLASS: M.pvnLicenseClass.Reproducible, LICENSE_ID: 'CC-BY-4.0', LINEAGE: 'gfz',
  });
  const t0 = 1792627200000n;
  const solve = t0 + 3600000n;
  const weather = Object.assign(new M.SPWT(), { DATE: '2026-10-22', PROVENANCE: pvn() });
  const density = Object.assign(new M.DCLT(), {
    ID: 'fleet-log-density', PROVENANCE: pvn(),
    ATMOSPHERE: Object.assign(new M.ATMT(), { MODEL: M.AtmosphericModelFamily.NRLMSIS00E, YEAR: 2000 }),
    SETTINGS: Object.assign(new M.dclSettingsT(), { FROM_MS: t0, TO_MS: solve }),
    CORRECTION: Object.assign(new M.dclCorrectionT(), {
      FORM: M.dclCorrectionForm.LogDensityNodes,
      NODE_TIMES_MS: [t0, solve, solve + 86400000n, solve + 172800000n],
      NODE_LOG_DENSITY_SCALE_DIMENSIONLESS: [-0.2, 0.4, 0.1, 0],
    }),
  });
  const temperature = Object.assign(new M.DCLT(), {
    ID: 'temperature-kelvin', PROVENANCE: pvn(), ATMOSPHERE: density.ATMOSPHERE,
    SETTINGS: density.SETTINGS,
    CORRECTION: Object.assign(new M.dclCorrectionT(), {
      FORM: M.dclCorrectionForm.Nodes, NODE_TIMES_MS: [t0, solve], NODE_VALUES_K: [-20, 40],
    }),
  });
  assert.equal(M.dclCorrectionForm.LogDensityNodes, 3);
  assert.equal(M.dclCorrectionForm.Nodes, 2);
  const records = [['weather', M.SPW, weather], ['log-density', M.DCL, density], ['temperature', M.DCL, temperature]];
  for (const [name, Type, object] of records) {
    const b = new fb.Builder(1024);
    Type[`finish${Type.name}Buffer`](b, object.pack(b));
    fs.writeFileSync(path.join(tmp, `${name}.js.fb`), b.asUint8Array());
  }
  // The package's C++ archive contains DCL and all its transitive includes.
  fs.mkdirSync(path.join(tmp, 'cpp'));
  run('tar', ['-xzf', path.join(artifact, 'dist/DCL/DCL.cpp.tar.gz'), '-C', path.join(tmp, 'cpp')]);
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || '/Users/tj/software/spacedatanetwork-stack/repos/main-packages/flatbuffers/include';
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'set FLATBUFFERS_INCLUDE_DIR to the pinned C++ runtime headers');
  fs.writeFileSync(path.join(tmp, 'roundtrip.cpp'), cpp);
  run(process.env.CXX || 'c++', ['-std=c++17', '-I', include, '-I', path.join(tmp, 'cpp'), path.join(tmp, 'roundtrip.cpp'), '-o', path.join(tmp, 'roundtrip')]);
  run(path.join(tmp, 'roundtrip'), []);
  // Keep generated Go files byte-for-byte; a package-local E2E adapter can
  // exercise the IDL's lower-case helper table builders without exporting them.
  fs.cpSync(goBindings, path.join(tmp, 'bindings'), { recursive: true });
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdse2e\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  fs.writeFileSync(path.join(tmp, 'bindings/wire_e2e.go'), go);
  fs.writeFileSync(path.join(tmp, 'main.go'), 'package main\nimport d "sdse2e/bindings"\nfunc main() { d.WireE2E() }\n');
  run('go', ['run', '-mod=mod', '.']);
  for (const [name, Type] of records) {
    const decode = suffix => Type[`getRootAs${Type.name}`](new fb.ByteBuffer(fs.readFileSync(path.join(tmp, `${name}.${suffix}.fb`)))).unpack();
    const expected = decode('js');
    assert.deepEqual(decode('cpp'), expected, `${name}: C++ changed fields`);
    assert.deepEqual(decode('go'), expected, `${name}: Go changed fields`);
  }
  for (const code of ['SPW', 'DCL']) {
    assert.match(fs.readFileSync(path.join(artifact, `schema/${code}/main.fbs`), 'utf8'), /PROVENANCE:\s*PVN;/);
    const augmented = JSON.parse(fs.readFileSync(path.join(artifact, `lib/fbjson/${code}/main.fb.schema.json`)));
    assert.ok(JSON.stringify(augmented).includes('PROVENANCE'));
  }
  assert.equal(density.CORRECTION.NODE_TIMES_MS.at(-1) - solve, 172800000n);
  console.log(`PASS: ${published ? `published SDS ${published}` : 'candidate SDS'} SPW/DCL JS -> C++ -> Go -> JS; provenance, dimensionless nodes, 48-hour forecast span, unchanged kelvin nodes`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

}

// Native readers and writers compiled against the generated bindings.
const cpp = String.raw`
#include "DCL/main_generated.h"
#include <fstream>
#include <iterator>
#include <vector>
#include <cassert>
using namespace flatbuffers;
Offset<PVN> provenance(FlatBufferBuilder &b, const PVN *p) {
  assert(p && p->LICENSE_ID()->str() == "CC-BY-4.0");
  auto source=b.CreateString(p->SOURCE_ID()->str()), origin=b.CreateString(p->ORIGINATOR()->str());
  auto provider=b.CreateString(p->PROVIDER_ID()->str()), producer=b.CreateString(p->PRODUCER()->str());
  auto license=b.CreateString(p->LICENSE_ID()->str()), lineage=b.CreateString(p->LINEAGE()->str());
  PVNBuilder x(b); x.add_SOURCE_ID(source); x.add_SOURCE_KIND(p->SOURCE_KIND()); x.add_ORIGINATOR(origin);
  x.add_PROVIDER_ID(provider); x.add_PRODUCER(producer); x.add_LICENSE_CLASS(p->LICENSE_CLASS());
  x.add_LICENSE_ID(license); x.add_LINEAGE(lineage); return x.Finish();
}
template<class T> Offset<Vector<T>> vector(FlatBufferBuilder &b, const Vector<T> *v) {
  return v ? b.CreateVector(v->data(), v->size()) : Offset<Vector<T>>{};
}
int main() {
  for (auto name : {"weather", "log-density", "temperature"}) {
    std::ifstream in(std::string(name)+".js.fb", std::ios::binary);
    std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(in)), {});
    Verifier verifier(bytes.data(),bytes.size()); FlatBufferBuilder b;
    if (std::string(name)=="weather") {
      assert(VerifySPWBuffer(verifier)); auto p=GetSPW(bytes.data());
      auto pv=provenance(b,p->PROVENANCE()); auto date=b.CreateString(p->DATE()->str());
      SPWBuilder x(b); x.add_DATE(date); x.add_PROVENANCE(pv); FinishSPWBuffer(b,x.Finish());
    } else {
      assert(VerifyDCLBuffer(verifier)); auto p=GetDCL(bytes.data()); auto c=p->CORRECTION();
      auto id=b.CreateString(p->ID()->str()); auto pv=provenance(b,p->PROVENANCE());
      auto times=vector(b,c->NODE_TIMES_MS()); auto kelvin=vector(b,c->NODE_VALUES_K());
      auto scales=vector(b,c->NODE_LOG_DENSITY_SCALE_DIMENSIONLESS());
      dclCorrectionBuilder cb(b); cb.add_FORM(c->FORM()); cb.add_NODE_TIMES_MS(times);
      cb.add_NODE_VALUES_K(kelvin); cb.add_NODE_LOG_DENSITY_SCALE_DIMENSIONLESS(scales); auto corr=cb.Finish();
      auto a=p->ATMOSPHERE(); auto atm=CreateATM(b,a->MODEL(),a->YEAR());
      dclSettingsBuilder sb(b); sb.add_FROM_MS(p->SETTINGS()->FROM_MS()); sb.add_TO_MS(p->SETTINGS()->TO_MS()); auto settings=sb.Finish();
      DCLBuilder x(b); x.add_ID(id); x.add_PROVENANCE(pv); x.add_CORRECTION(corr); x.add_ATMOSPHERE(atm); x.add_SETTINGS(settings); FinishDCLBuffer(b,x.Finish());
    }
    std::ofstream out(std::string(name)+".cpp.fb",std::ios::binary); out.write(reinterpret_cast<const char*>(b.GetBufferPointer()),b.GetSize());
  }
}
`;
const go = String.raw`
package DCL
import (
 "os"
 "github.com/google/flatbuffers/go"
)
func pvCopy(b *flatbuffers.Builder,p *PVN) flatbuffers.UOffsetT {
 if p==nil || string(p.LICENSE_ID())!="CC-BY-4.0" { panic("provenance missing") }
 source:=b.CreateByteString(p.SOURCE_ID()); origin:=b.CreateByteString(p.ORIGINATOR()); provider:=b.CreateByteString(p.PROVIDER_ID())
 producer:=b.CreateByteString(p.PRODUCER()); license:=b.CreateByteString(p.LICENSE_ID()); lineage:=b.CreateByteString(p.LINEAGE())
 PVNStart(b); PVNAddSOURCE_ID(b,source); PVNAddSOURCE_KIND(b,p.SOURCE_KIND()); PVNAddORIGINATOR(b,origin)
 PVNAddPROVIDER_ID(b,provider); PVNAddPRODUCER(b,producer); PVNAddLICENSE_CLASS(b,p.LICENSE_CLASS()); PVNAddLICENSE_ID(b,license); PVNAddLINEAGE(b,lineage); return PVNEnd(b)
}
func WireE2E() {
 for _,name:=range []string{"weather","log-density","temperature"} {
  data,err:=os.ReadFile(name+".cpp.fb"); if err!=nil { panic(err) }; b:=flatbuffers.NewBuilder(1024)
  if name=="weather" {
   if !SPWBufferHasIdentifier(data) { panic("SPW identifier") }; p:=GetRootAsSPW(data,0)
   pv:=pvCopy(b,p.PROVENANCE(nil)); date:=b.CreateByteString(p.DATE()); SPWStart(b); SPWAddDATE(b,date); SPWAddPROVENANCE(b,pv); FinishSPWBuffer(b,SPWEnd(b))
  } else {
   if !DCLBufferHasIdentifier(data) { panic("DCL identifier") }; p:=GetRootAsDCL(data,0); c:=p.CORRECTION(nil)
   id:=b.CreateByteString(p.ID()); pv:=pvCopy(b,p.PROVENANCE(nil))
   dclCorrectionStartNODE_TIMES_MSVector(b,c.NODE_TIMES_MSLength()); for i:=c.NODE_TIMES_MSLength()-1;i>=0;i-- { b.PrependInt64(c.NODE_TIMES_MS(i)) }; times:=b.EndVector(c.NODE_TIMES_MSLength())
   dclCorrectionStartNODE_VALUES_KVector(b,c.NODE_VALUES_KLength()); for i:=c.NODE_VALUES_KLength()-1;i>=0;i-- { b.PrependFloat64(c.NODE_VALUES_K(i)) }; kelvin:=b.EndVector(c.NODE_VALUES_KLength())
   dclCorrectionStartNODE_LOG_DENSITY_SCALE_DIMENSIONLESSVector(b,c.NODE_LOG_DENSITY_SCALE_DIMENSIONLESSLength()); for i:=c.NODE_LOG_DENSITY_SCALE_DIMENSIONLESSLength()-1;i>=0;i-- { b.PrependFloat64(c.NODE_LOG_DENSITY_SCALE_DIMENSIONLESS(i)) }; scales:=b.EndVector(c.NODE_LOG_DENSITY_SCALE_DIMENSIONLESSLength())
   dclCorrectionStart(b); dclCorrectionAddFORM(b,c.FORM()); dclCorrectionAddNODE_TIMES_MS(b,times); dclCorrectionAddNODE_VALUES_K(b,kelvin); dclCorrectionAddNODE_LOG_DENSITY_SCALE_DIMENSIONLESS(b,scales); corr:=dclCorrectionEnd(b)
   a:=p.ATMOSPHERE(nil); ATMStart(b); ATMAddMODEL(b,a.MODEL()); ATMAddYEAR(b,a.YEAR()); atm:=ATMEnd(b)
   s:=p.SETTINGS(nil); dclSettingsStart(b); dclSettingsAddFROM_MS(b,s.FROM_MS()); dclSettingsAddTO_MS(b,s.TO_MS()); settings:=dclSettingsEnd(b)
   DCLStart(b); DCLAddID(b,id); DCLAddPROVENANCE(b,pv); DCLAddCORRECTION(b,corr); DCLAddATMOSPHERE(b,atm); DCLAddSETTINGS(b,settings); FinishDCLBuffer(b,DCLEnd(b))
  }
  if err:=os.WriteFile(name+".go.fb",b.FinishedBytes(),0600);err!=nil { panic(err) }
 }
}
`;

await main();
