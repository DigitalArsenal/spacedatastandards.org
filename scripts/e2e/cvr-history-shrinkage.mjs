#!/usr/bin/env node
// One package wire E2E: generated JS -> generated C++ -> generated Go -> JS.
// --self exercises the candidate; --published VERSION uses registry artifacts.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-cvr-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, {
  cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 32 * 1024 * 1024,
});
const published = process.argv[2] === '--published' ? process.argv[3] : null;
assert.ok(process.argv[2] === '--self' || published, 'use --self or --published VERSION');
if (published) assert.match(published, /^\d+\.\d+\.\d+$/);
const strings = ['MODEL_ID', 'REGIME', 'MEASURED_LINEAGE', 'TEST_WINDOW', 'EVIDENCE', 'HISTORY_WINDOW'];
const scalars = ['RULE', 'AGE_DAYS', 'HORIZON_DAYS', 'MEAN_D2_OVER_3', 'COVERAGE_95',
  'SAMPLES', 'OBJECTS', 'SCALE_FACTOR', 'CALIBRATION', 'HISTORY_SAMPLES', 'HISTORY_SETS', 'SHRINKAGE_WEIGHT'];
try {
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  let artifact = root;
  let goBindings = path.join(root, 'lib/go/CVR');
  if (published) {
    const packed = JSON.parse(run('npm', ['pack', `spacedatastandards.org@${published}`, '--json', '--ignore-scripts', '--pack-destination', tmp]));
    assert.equal(packed[0].version, published);
    run('tar', ['-xzf', path.join(tmp, packed[0].filename), '-C', tmp]);
    artifact = path.join(tmp, 'package');
    const mod = JSON.parse(run('go', ['mod', 'download', '-json', `github.com/DigitalArsenal/spacedatastandards.org/lib/go@v${published}`]));
    assert.equal(mod.Version, `v${published}`);
    assert.ok(mod.Dir, mod.Error);
    goBindings = path.join(mod.Dir, 'CVR');
  }
  const version = JSON.parse(fs.readFileSync(path.join(artifact, 'package.json'))).version;
  assert.equal(version.split('+')[0], published || '1.261.0');
  const M = await import(pathToFileURL(path.join(artifact, 'lib/js/CVR/main.js')));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  ['Unspecified', 'Operator', 'ScaledFit', 'SourceModel', 'PooledModel', 'EmpiricalHistoryShrunk']
    .forEach((name, ordinal) => assert.equal(M.covarianceRule[name], ordinal));
  const history = Object.assign(new M.CVRT(), {
    RULE: M.covarianceRule.EmpiricalHistoryShrunk, MODEL_ID: 'population-prior-v7', REGIME: 'LEO',
    AGE_DAYS: 1.5, HORIZON_DAYS: 1.5, CALIBRATION: M.covarianceCalibration.Uncalibrated,
    HISTORY_SAMPLES: 93, HISTORY_SETS: 18, HISTORY_WINDOW: '2026-09-22T00:00:00Z/2026-10-22T00:00:00Z',
    SHRINKAGE_WEIGHT: 0.625,
    EVIDENCE: 'synthetic fixture: second-moment estimator; clipping=5 robust sigma; bin=[1,2) days; n=18; prior pseudo-count=30; alpha=30/(18+30); no interpolation',
  });
  const calibrated = Object.assign(new M.CVRT(), {
    RULE: M.covarianceRule.ScaledFit, MODEL_ID: 'realism-fit-v2', REGIME: 'LEO',
    AGE_DAYS: 1, HORIZON_DAYS: 1, MEASURED_LINEAGE: 'independent-reference',
    TEST_WINDOW: '2026-08-01T00:00:00Z/2026-09-01T00:00:00Z',
    MEAN_D2_OVER_3: 1.1, COVERAGE_95: 0.95, SAMPLES: 44, OBJECTS: 5, SCALE_FACTOR: 2.5,
    CALIBRATION: M.covarianceCalibration.Calibrated, EVIDENCE: 'synthetic calibration fixture',
  });
  const cases = [['history', history], ['calibrated', calibrated]];
  for (const [name, value] of cases) {
    const b = new fb.Builder(1024);
    M.CVR.finishCVRBuffer(b, value.pack(b));
    fs.writeFileSync(path.join(tmp, `${name}.js.fb`), b.asUint8Array());
  }
  fs.mkdirSync(path.join(tmp, 'cpp'));
  run('tar', ['-xzf', path.join(artifact, 'dist/CVR/CVR.cpp.tar.gz'), '-C', path.join(tmp, 'cpp')]);
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || '/Users/tj/software/spacedatanetwork-stack/repos/main-packages/flatbuffers/include';
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned FlatBuffers headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'roundtrip.cpp'), `
#include "CVR/main_generated.h"
#include <fstream>
#include <iterator>
#include <vector>
#include <cassert>
static_assert(covarianceRule_EmpiricalHistoryShrunk == 5);
static_assert(covarianceRule_ScaledFit == 2 && covarianceRule_PooledModel == 4);
int main() {
  for (auto name : {"history", "calibrated"}) {
    std::ifstream in(std::string(name)+".js.fb",std::ios::binary);
    std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(in)), {});
    flatbuffers::Verifier v(bytes.data(),bytes.size()); assert(VerifyCVRBuffer(v));
    auto p=GetCVR(bytes.data()); flatbuffers::FlatBufferBuilder b;
    ${strings.map(k => `auto s_${k}=p->${k}() ? b.CreateString(p->${k}()->str()) : flatbuffers::Offset<flatbuffers::String>{};`).join('\n    ')}
    CVRBuilder x(b);
    ${strings.map(k => `x.add_${k}(s_${k});`).join('\n    ')}
    ${scalars.map(k => `x.add_${k}(p->${k}());`).join('\n    ')}
    FinishCVRBuffer(b,x.Finish());
    std::ofstream out(std::string(name)+".cpp.fb",std::ios::binary);
    out.write(reinterpret_cast<const char*>(b.GetBufferPointer()),b.GetSize());
  }
}
`);
  run(process.env.CXX || 'c++', ['-std=c++17', '-I', include, '-I', path.join(tmp, 'cpp'), path.join(tmp, 'roundtrip.cpp'), '-o', path.join(tmp, 'roundtrip')]);
  run(path.join(tmp, 'roundtrip'), []);
  // Copy generated Go bindings unchanged; the package-local adapter accesses
  // the IDL's lower-case enum without modifying or replacing generated code.
  fs.cpSync(goBindings, path.join(tmp, 'bindings'), { recursive: true });
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdscvre2e\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  fs.writeFileSync(path.join(tmp, 'bindings/wire_e2e.go'), `package CVR
import ("os"; "github.com/google/flatbuffers/go")
func WireE2E() {
  if covarianceRuleEmpiricalHistoryShrunk != 5 || covarianceRuleScaledFit != 2 || covarianceRulePooledModel != 4 { panic("enum ordinals") }
  for _,name:=range []string{"history","calibrated"} {
    data,err:=os.ReadFile(name+".cpp.fb"); if err!=nil { panic(err) }
    if !CVRBufferHasIdentifier(data) { panic("CVR identifier") }; p:=GetRootAsCVR(data,0); b:=flatbuffers.NewBuilder(1024)
    ${strings.map(k => `var s_${k} flatbuffers.UOffsetT; if p.${k}()!=nil { s_${k}=b.CreateByteString(p.${k}()) }`).join('\n    ')}
    CVRStart(b)
    ${strings.map(k => `CVRAdd${k}(b,s_${k})`).join('\n    ')}
    ${scalars.map(k => `CVRAdd${k}(b,p.${k}())`).join('\n    ')}
    FinishCVRBuffer(b,CVREnd(b))
    if err:=os.WriteFile(name+".go.fb",b.FinishedBytes(),0600);err!=nil { panic(err) }
  }
}
`);
  fs.writeFileSync(path.join(tmp, 'main.go'), 'package main\nimport c "sdscvre2e/bindings"\nfunc main(){c.WireE2E()}\n');
  run('go', ['run', '-mod=mod', 'main.go']);
  for (const [name, expected] of cases) {
    for (const runtime of ['js', 'cpp', 'go']) {
      const bb = new fb.ByteBuffer(fs.readFileSync(path.join(tmp, `${name}.${runtime}.fb`)));
      assert.ok(M.CVR.bufferHasIdentifier(bb));
      assert.deepEqual(M.CVR.getRootAsCVR(bb).unpack(), expected, `${name}: ${runtime} changed evidence`);
    }
  }
  assert.equal(history.SAMPLES, 0);
  assert.equal(history.OBJECTS, 0);
  assert.ok(Number.isNaN(history.SCALE_FACTOR) && Number.isNaN(history.MEAN_D2_OVER_3));
  assert.ok(Number.isNaN(calibrated.SHRINKAGE_WEIGHT));
  console.log(`PASS: ${published ? 'published' : 'candidate'} SDS ${version}; CVR JS -> C++ -> Go -> JS; rule=5, four history/shrinkage fields, unchanged calibration evidence and ordinals`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
