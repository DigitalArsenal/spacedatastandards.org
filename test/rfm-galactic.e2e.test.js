import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as flatbuffers from 'flatbuffers';
import {
  RFM, RFMCoordinateSystem, RFMCoordinateSystemWrapper, RFMOrigin,
  RFMUnion, rfmAxisType, rfmOriginKind,
} from '../lib/js/RFM/main.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const scalarFields = ['GALCEN_RA_DEG', 'GALCEN_DEC_DEG', 'GALCEN_DISTANCE_PC', 'Z_SUN_PC', 'ROLL_DEG'];
const scalarWriters = ['addGalcenRaDeg', 'addGalcenDecDeg', 'addGalcenDistancePc', 'addZSunPc', 'addRollDeg'];
const cpp = String.raw`
#include "main_generated.h"
#include <cmath>
#include <fstream>
#include <iostream>
#include <iterator>
#include <stdexcept>
#include <string>
#include <vector>

static_assert(rfmAxisType_UNSPECIFIED == 0 && rfmAxisType_ICRF == 3);
static_assert(rfmAxisType_ORBITAL_LOCAL_VERTICAL_LOCAL_HORIZONTAL == 32);
static_assert(rfmAxisType_GALACTIC == 33 && rfmOriginKind_GALACTIC_CENTER == 6);
static_assert(rfmOriginKind_BARYCENTRE == 2 && rfmOriginKind_GROUND_SITE == 5);
static_assert(RFMUnion_CelestialFrameWrapper == 1 && RFMUnion_SpacecraftFrameWrapper == 2);
static_assert(RFMUnion_OrbitFrameWrapper == 3 && RFMUnion_CustomFrameWrapper == 4);
static_assert(RFMUnion_RFMCoordinateSystemWrapper == 5);
static_assert(RFMCoordinateSystem::VT_NAME == 4 && RFMCoordinateSystem::VT_AXIS_TYPE == 6);
static_assert(RFMCoordinateSystem::VT_ORIGIN == 8 && RFMCoordinateSystem::VT_AXIS_REFERENCE_BODY_ID == 10);
static_assert(RFMCoordinateSystem::VT_EPOCH == 12 && RFMCoordinateSystem::VT_EPOCH_TIME_SYSTEM == 14);
static_assert(RFMCoordinateSystem::VT_OBJECT_REFERENCED_AXES == 16);
static_assert(RFMCoordinateSystem::VT_LOCAL_ALIGNED_CONSTRAINED_AXES == 18);
static_assert(RFMCoordinateSystem::VT_KERNEL_FRAME_NAME == 20 && RFMCoordinateSystem::VT_KERNEL_FRAME_ID == 22);
static_assert(RFMCoordinateSystem::VT_EOP_DATA_SET_CID == 24);
static_assert(RFMCoordinateSystem::VT_GALCEN_RA_DEG == 26 && RFMCoordinateSystem::VT_GALCEN_DEC_DEG == 28);
static_assert(RFMCoordinateSystem::VT_GALCEN_DISTANCE_PC == 30 && RFMCoordinateSystem::VT_Z_SUN_PC == 32);
static_assert(RFMCoordinateSystem::VT_ROLL_DEG == 34 && RFMCoordinateSystem::VT_V_SUN_KMS == 36);

void require(bool ok, const std::string &message) {
  if (!ok) throw std::runtime_error(message);
}
void close(double actual, double expected, double tolerance, const char *label) {
  require(std::isfinite(actual) && std::abs(actual - expected) <= tolerance, label);
}
std::string text(const flatbuffers::String *value) { return value ? value->str() : ""; }

void evidence(const char *path) {
  std::ifstream input(path);
  double ra, dec, omega, referenceRa, referenceDec, referenceLongitude;
  std::string source;
  require(bool(input >> ra >> dec >> omega >> referenceRa >> referenceDec >> referenceLongitude >> source),
          "independent evidence input");
  // Astropy reports the longitude of the equatorial north pole (l_Omega + 90).
  // Its FK5/J2000 realization differs below the precision printed by Hipparcos.
  const double referenceOmega = source == "astropy" ? referenceLongitude - 90.0 : referenceLongitude;
  const double tolerance = source == "astropy" ? 0.000005 : 1e-12;
  close(ra, referenceRa, tolerance, "schema NGP RA disagrees with independent source");
  close(dec, referenceDec, tolerance, "schema NGP Dec disagrees with independent source");
  close(omega, referenceOmega, tolerance, "schema l_Omega disagrees with independent source");
  std::cout << "PASS C++: schema NGP RA/Dec and l_Omega independently verified (" << source << ")\n";
}

void roundtrip(const char *source, const char *destination, bool centered) {
  std::ifstream input(source, std::ios::binary);
  std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(input)), {});
  require(!bytes.empty(), "read RFM input");
  flatbuffers::Verifier verifier(bytes.data(), bytes.size());
  require(VerifyRFMBuffer(verifier), "C++ verifies $RFM buffer");
  const auto *record = GetRFM(bytes.data());
  require(record->REFERENCE_FRAME_type() == RFMUnion_RFMCoordinateSystemWrapper, "union ordinal 5");
  const auto *wrapper = record->REFERENCE_FRAME_as_RFMCoordinateSystemWrapper();
  require(wrapper && wrapper->COORDINATE_SYSTEM(), "coordinate system wrapper");
  const auto *frame = wrapper->COORDINATE_SYSTEM();
  const auto *origin = frame->ORIGIN();
  require(origin, "origin is present");
  require(frame->AXIS_TYPE() == rfmAxisType_GALACTIC, "Galactic axis ordinal");
  require(record->INDEX() == (centered ? 42 : 41), "existing INDEX survives");
  require(text(record->NAME()) == (centered ? "Galactocentric" : "Galactic"), "existing RFM NAME survives");
  require(text(frame->NAME()) == (centered ? "Sgr A* adopted parameters" : "IAU 1958 Hipparcos"), "frame NAME survives");
  require(text(frame->EPOCH()) == "2000-01-01T12:00:00" && text(frame->EPOCH_TIME_SYSTEM()) == "TT", "epoch fields survive");
  require(frame->AXIS_REFERENCE_BODY_ID() == 0 && frame->KERNEL_FRAME_ID() == 0, "existing scalar defaults survive");
  require(!frame->OBJECT_REFERENCED_AXES() && !frame->LOCAL_ALIGNED_CONSTRAINED_AXES() &&
          !frame->KERNEL_FRAME_NAME() && !frame->EOP_DATA_SET_CID(), "existing optional fields remain absent");
  const double parameters[] = {frame->GALCEN_RA_DEG(), frame->GALCEN_DEC_DEG(),
    frame->GALCEN_DISTANCE_PC(), frame->Z_SUN_PC(), frame->ROLL_DEG()};
  if (centered) {
    require(origin->KIND() == rfmOriginKind_GALACTIC_CENTER && text(origin->NAME()) == "Sgr A*", "Galactic-center origin");
    const double expected[] = {266.416837083333, -29.007810555556, 8178.0, 20.8, 0.0};
    for (size_t i = 0; i < 5; ++i) close(parameters[i], expected[i], 1e-12, "Galactocentric parameter survives");
    require(frame->V_SUN_KMS() && frame->V_SUN_KMS()->size() == 3, "three solar velocity components");
    const double velocity[] = {12.9, 245.6, 7.78};
    for (size_t i = 0; i < 3; ++i) close(frame->V_SUN_KMS()->Get(i), velocity[i], 1e-12, "solar velocity survives");
  } else {
    require(origin->KIND() == rfmOriginKind_BARYCENTRE && origin->BARYCENTRE_ID() == 0 &&
            text(origin->NAME()) == "Solar System barycenter", "Galactic axes combine with an independent origin");
    for (const auto value : parameters) require(std::isnan(value), "omitted parameter reads as NaN");
    require(!frame->V_SUN_KMS(), "unknown solar velocity remains absent");
  }
  flatbuffers::FlatBufferBuilder builder;
  const auto recordName = builder.CreateString(record->NAME());
  const auto frameName = builder.CreateString(frame->NAME());
  const auto originName = builder.CreateString(origin->NAME());
  const auto epoch = builder.CreateString(frame->EPOCH());
  const auto timeSystem = builder.CreateString(frame->EPOCH_TIME_SYSTEM());
  flatbuffers::Offset<flatbuffers::Vector<double>> velocity;
  if (frame->V_SUN_KMS()) velocity = builder.CreateVector(frame->V_SUN_KMS()->data(), frame->V_SUN_KMS()->size());
  RFMOriginBuilder originBuilder(builder);
  originBuilder.add_KIND(origin->KIND());
  originBuilder.add_BARYCENTRE_ID(origin->BARYCENTRE_ID());
  originBuilder.add_NAME(originName);
  const auto originOffset = originBuilder.Finish();
  RFMCoordinateSystemBuilder frameBuilder(builder);
  frameBuilder.add_NAME(frameName);
  frameBuilder.add_AXIS_TYPE(frame->AXIS_TYPE());
  frameBuilder.add_ORIGIN(originOffset);
  frameBuilder.add_EPOCH(epoch);
  frameBuilder.add_EPOCH_TIME_SYSTEM(timeSystem);
  if (centered) {
    frameBuilder.add_GALCEN_RA_DEG(frame->GALCEN_RA_DEG());
    frameBuilder.add_GALCEN_DEC_DEG(frame->GALCEN_DEC_DEG());
    frameBuilder.add_GALCEN_DISTANCE_PC(frame->GALCEN_DISTANCE_PC());
    frameBuilder.add_Z_SUN_PC(frame->Z_SUN_PC());
    frameBuilder.add_ROLL_DEG(frame->ROLL_DEG());
    frameBuilder.add_V_SUN_KMS(velocity);
  }
  const auto frameOffset = frameBuilder.Finish();
  const auto wrapperOffset = CreateRFMCoordinateSystemWrapper(builder, frameOffset);
  const auto output = CreateRFM(builder, RFMUnion_RFMCoordinateSystemWrapper, wrapperOffset.Union(), record->INDEX(), recordName);
  FinishRFMBuffer(builder, output);
  std::ofstream file(destination, std::ios::binary);
  file.write(reinterpret_cast<const char *>(builder.GetBufferPointer()), builder.GetSize());
  require(bool(file), "write C++ RFM output");
}
int main(int argc, char **argv) {
  try {
    if (argc == 3 && std::string(argv[1]) == "evidence") evidence(argv[2]);
    else if (argc == 5 && std::string(argv[1]) == "roundtrip") roundtrip(argv[2], argv[3], std::string(argv[4]) == "centered");
    else throw std::runtime_error("invalid E2E arguments");
  } catch (const std::exception &error) { std::cerr << error.what() << '\n'; return 1; }
}
`;

function run(command, args, env) {
  const result = spawnSync(command, args, { cwd: root, env, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
  assert.ifError(result.error);
  assert.equal(result.status, 0, `${command} failed\n${result.stdout}${result.stderr}`);
  return result.stdout.trim();
}

function matchingHeaders() {
  const generated = readFileSync(join(root, 'lib/cpp/RFM/main_generated.h'), 'utf8');
  const parts = ['MAJOR', 'MINOR', 'REVISION'];
  const version = parts.map((part) => generated.match(new RegExp(`FLATBUFFERS_VERSION_${part} == (\\d+)`))?.[1]);
  const candidates = [process.env.SDS_FLATBUFFERS_INCLUDE,
    join(root, 'vendor/flatbuffers/include'), join(root, 'node_modules/flatbuffers/include'),
    resolve(root, '../../spacedatanetwork-stack/repos/main-packages/flatbuffers/include'),
    resolve(root, '../flatbuffers/include'), '/opt/homebrew/include', '/usr/local/include', '/usr/include'].filter(Boolean);
  for (const directory of candidates) {
    if (!existsSync(join(directory, 'flatbuffers/base.h'))) continue;
    const header = readFileSync(join(directory, 'flatbuffers/base.h'), 'utf8');
    if (parts.every((part, index) => header.match(new RegExp(`#define FLATBUFFERS_VERSION_${part} (\\d+)`))?.[1] === version[index])) return directory;
  }
  assert.fail(`Matching FlatBuffers ${version.join('.')} C++ headers required; set SDS_FLATBUFFERS_INCLUDE (no download is attempted)`);
}

function encode(record) {
  const builder = new flatbuffers.Builder(512);
  const name = builder.createString(record.name);
  const frameName = builder.createString(record.frameName);
  const originName = builder.createString(record.originName);
  const epoch = builder.createString(record.epoch);
  const timeSystem = builder.createString(record.timeSystem);
  const velocity = record.velocity === null ? 0 : RFMCoordinateSystem.createVSunKmsVector(builder, record.velocity);
  RFMOrigin.startRFMOrigin(builder);
  RFMOrigin.addKind(builder, record.origin);
  RFMOrigin.addName(builder, originName);
  const origin = RFMOrigin.endRFMOrigin(builder);
  // The Galactic case uses the original eleven-field table shape: a new reader
  // must supply NaN for the appended scalars that were never written to wire.
  if (record.velocity === null) builder.startObject(11);
  else RFMCoordinateSystem.startRFMCoordinateSystem(builder);
  RFMCoordinateSystem.addName(builder, frameName);
  RFMCoordinateSystem.addAxisType(builder, rfmAxisType.GALACTIC);
  RFMCoordinateSystem.addOrigin(builder, origin);
  RFMCoordinateSystem.addEpoch(builder, epoch);
  RFMCoordinateSystem.addEpochTimeSystem(builder, timeSystem);
  if (record.velocity !== null) {
    scalarWriters.forEach((writer, index) => RFMCoordinateSystem[writer](builder, record.parameters[index]));
    RFMCoordinateSystem.addVSunKms(builder, velocity);
  }
  const frame = RFMCoordinateSystem.endRFMCoordinateSystem(builder);
  const wrapper = RFMCoordinateSystemWrapper.createRFMCoordinateSystemWrapper(builder, frame);
  const output = RFM.createRFM(builder, RFMUnion.RFMCoordinateSystemWrapper, wrapper, record.index, name);
  RFM.finishRFMBuffer(builder, output);
  return builder.asUint8Array();
}

function decode(bytes) {
  const bb = new flatbuffers.ByteBuffer(new Uint8Array(bytes));
  assert.equal(RFM.bufferHasIdentifier(bb), true);
  const record = RFM.getRootAsRFM(bb);
  assert.equal(record.REFERENCE_FRAME_type(), 5);
  const frame = record.REFERENCE_FRAME(new RFMCoordinateSystemWrapper()).COORDINATE_SYSTEM();
  assert.equal(frame.AXIS_TYPE(), 33);
  const velocity = frame.vSunKmsArray();
  return { name: record.NAME(), index: record.INDEX(), frameName: frame.NAME(),
    origin: frame.ORIGIN().KIND(), originName: frame.ORIGIN().NAME(),
    epoch: frame.EPOCH(), timeSystem: frame.EPOCH_TIME_SYSTEM(),
    parameters: scalarFields.map((field) => frame[field]()), velocity: velocity === null ? null : Array.from(velocity) };
}

describe('RFM Galactic and Galactocentric cross-language E2E', function () {
  this.timeout(120000);
  it('round-trips both frames JS -> C++ -> JS -> C++ with independent Galactic constants', function () {
    const scratch = mkdtempSync(join(root, '.rfm-galactic-e2e-'));
    const env = { ...process.env, TMPDIR: scratch, TMP: scratch, TEMP: scratch,
      CLANG_MODULE_CACHE_PATH: join(scratch, 'clang-module-cache'), PYTHONDONTWRITEBYTECODE: '1' };
    try {
      assert.equal(rfmAxisType.ORBITAL_LOCAL_VERTICAL_LOCAL_HORIZONTAL, 32);
      assert.equal(rfmAxisType.GALACTIC, 33);
      assert.equal(rfmOriginKind.GROUND_SITE, 5);
      assert.equal(rfmOriginKind.GALACTIC_CENTER, 6);
      const schema = readFileSync(join(root, 'schema/RFM/main.fbs'), 'utf8');
      const constants = schema.match(/NGP RA\s*=\s*([\d.]+) deg, Dec\s*=\s*([+\d.]+) deg; l_Omega\s*=\s*([\d.]+) deg/);
      assert.ok(constants, 'Galactic constants are documented in the authoritative schema');
      // Independent published evidence, not values copied from generated bindings:
      // ESA SP-1200 (1997), The Hipparcos and Tycho Catalogues, Vol. 1,
      // Section 1.5.3: alpha_NGP=192.85948 deg, delta_NGP=27.12825 deg,
      // l_Omega=32.93192 deg. https://www.cosmos.esa.int/web/hipparcos/catalogues
      let evidence = ['192.85948', '27.12825', '32.93192', 'ESA-SP-1200-Vol1-1.5.3'];
      const astropy = spawnSync('python3', ['-c', 'import astropy'], { cwd: root, env, encoding: 'utf8' });
      assert.ifError(astropy.error);
      if (astropy.status === 0) {
        evidence = [...JSON.parse(run('python3', ['-c',
          'import json; from astropy.coordinates import Galactic; print(json.dumps([Galactic._ngp_J2000.ra.degree, Galactic._ngp_J2000.dec.degree, Galactic._lon0_J2000.degree]))'], env)), 'astropy'];
      }
      const evidencePath = join(scratch, 'evidence.txt');
      writeFileSync(evidencePath, [...constants.slice(1), ...evidence].join(' '));
      const source = join(scratch, 'roundtrip.cpp');
      const executable = join(scratch, 'roundtrip');
      writeFileSync(source, cpp);
      run(process.env.CXX || 'c++', ['-std=c++17', '-O2', '-I', matchingHeaders(),
        '-I', join(root, 'lib/cpp/RFM'), source, '-o', executable], env);
      console.log(run(executable, ['evidence', evidencePath], env));
      // These Galactocentric values are an explicit producer adoption for wire
      // coverage, including the total solar velocity; they are not defaults.
      const records = [
        { name: 'Galactic', index: 41, frameName: 'IAU 1958 Hipparcos', origin: rfmOriginKind.BARYCENTRE,
          originName: 'Solar System barycenter', parameters: [NaN, NaN, NaN, NaN, NaN], velocity: null },
        { name: 'Galactocentric', index: 42, frameName: 'Sgr A* adopted parameters', origin: rfmOriginKind.GALACTIC_CENTER,
          originName: 'Sgr A*', parameters: [266.416837083333, -29.007810555556, 8178, 20.8, 0], velocity: [12.9, 245.6, 7.78] },
      ];
      for (const fields of records) {
        const record = { ...fields, epoch: '2000-01-01T12:00:00', timeSystem: 'TT' };
        const input = join(scratch, `${record.name}.js.rfm`);
        const output = join(scratch, `${record.name}.cpp.rfm`);
        const repeated = join(scratch, `${record.name}.js-again.rfm`);
        const final = join(scratch, `${record.name}.cpp-again.rfm`);
        const kind = record.velocity === null ? 'galactic' : 'centered';
        writeFileSync(input, encode(record));
        assert.deepEqual(decode(readFileSync(input)), record, 'JS reads its generated record');
        run(executable, ['roundtrip', input, output, kind], env);
        const decoded = decode(readFileSync(output));
        assert.deepEqual(decoded, record, 'JS reads the record rebuilt by generated C++ bindings');
        writeFileSync(repeated, encode(decoded));
        run(executable, ['roundtrip', repeated, final, kind], env);
        assert.deepEqual(decode(readFileSync(final)), record, 'C++ reads the JS reconstruction');
        console.log(`PASS ${record.name}: JS -> C++ -> JS -> C++; ${record.velocity === null ? 'absent parameters stay NaN; velocity absent' : 'five scalars and three velocity components preserved'}`);
      }
      console.log('PASS append-only RFM enum/union ordinals and all eleven existing field offsets');
    } finally {
      rmSync(scratch, { recursive: true, force: true });
    }
  });
});
