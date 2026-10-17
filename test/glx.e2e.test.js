import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as flatbuffers from 'flatbuffers';
import { GLX, GLXT, glxDistanceTechnique, glxRedshiftTechnique,
  glxSpectralRestFrame, glxObjectCategory, glxTruthValue } from '../lib/js/GLX/main.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const encode = record => {
  const builder = new flatbuffers.Builder(1024);
  GLX.finishGLXBuffer(builder, record.pack(builder));
  return builder.asUint8Array();
};
const decode = bytes => {
  const bb = new flatbuffers.ByteBuffer(new Uint8Array(bytes));
  assert.ok(GLX.bufferHasIdentifier(bb));
  return GLX.getRootAsGLX(bb).unpack();
};
const run = (cmd, args) => {
  const result = spawnSync(cmd, args, { cwd: root, encoding: 'utf8' });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  return result.stdout;
};

// Rebuild every schema field with the shipped C++ accessors/builders. This also
// fails compilation if a newly added scalar is not present in generated C++.
function cppRoundtrip() {
  const idl = readFileSync(join(root, 'schema/GLX/main.fbs'), 'utf8');
  const fields = [...idl.matchAll(/^  ([A-Z_]+):\s*([^;= (]+)/gm)];
  const strings = fields.filter(([, , type]) => type === 'string');
  const declarations = strings.map(([, name]) =>
    `auto ${name} = r->${name}() ? b.CreateString(r->${name}()) : flatbuffers::Offset<flatbuffers::String>{};`);
  const additions = fields.map(([, name, type]) =>
    `out.add_${name}(${type === 'string' || type === '[string]' ? name : `r->${name}()`});`);
  return `
#include "main_generated.h"
#include <cassert>
#include <fstream>
#include <iterator>
#include <vector>
static_assert(glxDistanceTechnique_CEPHEID == 2 && glxDistanceTechnique_OTHER == 9);
static_assert(glxSpectralRestFrame_HELIOCENTER == 1 && glxSpectralRestFrame_CMB == 2);
int main(int argc, char **argv) {
  assert(argc == 3);
  std::ifstream in(argv[1], std::ios::binary);
  std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(in)), {});
  flatbuffers::Verifier verifier(bytes.data(), bytes.size());
  assert(VerifyGLXBuffer(verifier));
  const auto *r = GetGLX(bytes.data());
  flatbuffers::FlatBufferBuilder b;
  ${declarations.join('\n  ')}
  std::vector<flatbuffers::Offset<flatbuffers::String>> names;
  if (r->DESIGNATIONS()) for (auto name : *r->DESIGNATIONS()) names.push_back(b.CreateString(name));
  const auto DESIGNATIONS = b.CreateVector(names);
  GLXBuilder out(b);
  ${additions.join('\n  ')}
  auto record = out.Finish();
  FinishGLXBuffer(b, record);
  std::ofstream output(argv[2], std::ios::binary);
  output.write(reinterpret_cast<const char *>(b.GetBufferPointer()), b.GetSize());
  return output.good() ? 0 : 1;
}`;
}

describe('GLX catalog and redshift-survey cross-language E2E', function () {
  this.timeout(120000);
  it('round-trips M31, a survey target and unknown quantities JS -> C++ -> JS', function () {
    // Independent catalog evidence: NED's published M31 ObjectLookup example
    // https://ned.ipac.caltech.edu/Documents/Guides/Interface/ObjectLookup
    // and NED-1D's Cepheid entry (Freedman et al. 2001, 2001ApJ...553...47F)
    // https://ned.ipac.caltech.edu/level5/NED1D/ned1d.html .
    const m31 = Object.assign(new GLXT(), {
      ID: 'NED:MESSIER 031', NAME: 'M31', DESIGNATIONS: ['NGC 224', 'MESSIER 031'],
      RA_DEG: 10.68479292, DEC_DEG: 41.269065, DISTANCE_MPC: 0.790,
      DISTANCE_METHOD: glxDistanceTechnique.CEPHEID, DISTANCE_REF: '2001ApJ...553...47F',
      SOURCE_CATALOG: 'NED', CITATION: '2010ApJS..189...37E;2001ApJ...553...47F',
      SOURCE_CLASS: glxObjectCategory.GALAXY, LOCAL_GROUP_MEMBER: glxTruthValue.YES,
    });
    // Deliberately synthetic wire-coverage values, not a scientific catalog row.
    const survey = Object.assign(new GLXT(), {
      ID: 'fixture:survey-quasar', NAME: 'Wire fixture', DESIGNATIONS: ['fixture:alias'],
      RA_DEG: 123, DEC_DEG: -2, CSO_ID: 'fixture:CSO', DISTANCE_MPC: 600,
      DISTANCE_UNC_MPC: 10, DISTANCE_METHOD: glxDistanceTechnique.HUBBLE_FLOW,
      DISTANCE_REF: 'fixture:distance', HELIO_VELOCITY_KMS: 25000, REDSHIFT: 0.1,
      ISOPHOTAL_MAJOR_ARCMIN: 0.8, ISOPHOTE_BAND: 'Ks', ISOPHOTE_LEVEL: 20,
      AXIS_RATIO: 0.7, PA_DEG: 38, INCLINATION_DEG: 77, T_TYPE: 3,
      HUBBLE_CLASS: 'SAb', BAR: 'SA', B_TOTAL_MAG: 12, K_TOTAL_MAG: 9,
      GROUP_ID: 'fixture:group', LOCAL_GROUP_MEMBER: glxTruthValue.NO,
      SOURCE_CATALOG: 'fixture', CITATION: 'fixture only', LICENSE: 'CC0-1.0',
      REDSHIFT_UNC: 0.0002, REDSHIFT_KIND: glxRedshiftTechnique.SPECTROSCOPIC,
      REDSHIFT_FRAME: glxSpectralRestFrame.CMB, SOURCE_CLASS: glxObjectCategory.QUASAR,
      SURVEY: 'fixture-survey', RELEASE: 'fixture-release', TARGET_SAMPLE: 'fixture-QSO',
      COMOVING_DISTANCE_MPC: 420, LIGHT_TRAVEL_DISTANCE_MPC: 400, COSMOLOGY_ID: 'Planck18',
    });
    const unknown = Object.assign(new GLXT(), { ID: 'fixture:unknown' });
    const scratch = mkdtempSync(join(root, '.glx-e2e-'));
    try {
      const cpp = join(scratch, 'roundtrip.cpp'), executable = join(scratch, 'roundtrip');
      writeFileSync(cpp, cppRoundtrip());
      const headers = process.env.SDS_FLATBUFFERS_INCLUDE || resolve(root,
        '../../spacedatanetwork-stack/repos/main-packages/flatbuffers/include');
      run(process.env.CXX || 'c++', ['-std=c++17', '-O2', '-I', headers,
        '-I', join(root, 'lib/cpp/GLX'), cpp, '-o', executable]);
      for (const [index, record] of [m31, survey, unknown].entries()) {
        const input = join(scratch, `${index}.glx`), output = join(scratch, `${index}.cpp.glx`);
        writeFileSync(input, encode(record));
        run(executable, [input, output]);
        assert.deepEqual(decode(readFileSync(output)), record);
      }
      assert.ok(Number.isNaN(decode(encode(unknown)).DISTANCE_MPC));
      assert.equal(decode(encode(unknown)).LOCAL_GROUP_MEMBER, glxTruthValue.UNKNOWN);
      assert.equal(decode(encode(unknown)).REDSHIFT_FRAME, glxSpectralRestFrame.UNSPECIFIED);
      console.log(`PASS GLX: 3 records, ${Object.keys(survey).length} fields; JS -> C++ -> JS; NED M31 coordinates and Cepheid distance preserved`);
    } finally { rmSync(scratch, { recursive: true, force: true }); }
  });
});
