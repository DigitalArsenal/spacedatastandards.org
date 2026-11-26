#!/usr/bin/env node
// One E2E for the additive Pumpkyn CR3BP extensions on $TBP (#1139):
//   a. IDL check: all pre-existing 1.248.0 $TBP enums and tables keep their
//      exact prefix fields/ordinals unchanged; every new enum member and table
//      field is appended at the end.
//   b. JS -> C++ -> Go -> JS byte-equal round trip covering:
//      - Tulip/Pumpkin constellation + lunar surface GDOP/gap analysis
//      - Pseudo-arclength continuation + invariant manifolds
//      - Low-thrust minimum-time transfer (PMP) + J2000 frame conversion
//      - Linear-stability station-keeping bounds
//      - Fully populated $TBP across every reachable table
//      - Dropped-field negative controls in C++ and Go (PETALS, GDOP)
//   c. fbjson schema exposes all new tables and appended fields.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { allArms, closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-tbp-pumpkyn-e2e-'));
const run = (cmd, args, cwd = tmp) =>
  execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';

try {
  // ---- a. IDL additive-only verification.
  const tbp = parseIdl(schemaRoot, 'TBP');
  const enumNames = (name) => tbp.enums.get(name).members.map((m) => m.name);
  assert.deepEqual(
    enumNames('tbpProblem'),
    [
      'Unspecified', 'Propagation', 'LibrationPoints', 'JacobiConstant',
      'PeriodicOrbit', 'HaloFirstGuess', 'NearRectilinearHalo', 'Transfer',
      'StationKeeping', 'FrameConversion', 'Family',
      'Continuation', 'Manifolds', 'OrbitProperties', 'Constellation', 'SurfaceAnalysis',
    ],
    'tbpProblem keeps 0..10 verbatim and appends 11..15',
  );
  assert.deepEqual(
    enumNames('tbpOrbitFamily').slice(0, 10),
    [
      'Unspecified', 'HaloNorthern', 'HaloSouthern', 'PlanarLyapunov',
      'VerticalLyapunov', 'NearRectilinearHalo', 'DistantRetrograde',
      'Butterfly', 'Axial', 'LongShortPeriod',
    ],
    'tbpOrbitFamily keeps 0..9 verbatim',
  );
  assert.deepEqual(
    enumNames('tbpOrbitFamily').slice(10),
    ['TulipNorthern', 'TulipSouthern', 'PumpkinNorthern', 'PumpkinSouthern'],
    'tbpOrbitFamily appends Tulip/Pumpkin families',
  );
  assert.deepEqual(
    enumNames('tbpTransferKind').slice(8),
    ['MinEnergy', 'DirectLambert', 'MinLambert', 'LowThrustMinTime'],
    'tbpTransferKind appends Pumpkyn transfer kinds',
  );
  assert.deepEqual(
    enumNames('tbpStationKeepingStrategy'),
    ['PlaneCrossing', 'TargetPoint', 'FloquetMode', 'LinearStabilityBounds'],
    'tbpStationKeepingStrategy appends LinearStabilityBounds',
  );
  assert.deepEqual(
    tbp.tables.get('TBP').fields.slice(0, 17).map((f) => f.name),
    [
      'ID', 'CREATED_AT_MS', 'PRODUCER', 'PROBLEM', 'SYSTEM', 'STATUS',
      'ERROR_CODE', 'ERROR_MESSAGE', 'PROPAGATION', 'TRAJECTORY',
      'LIBRATION_POINTS', 'STATE', 'JACOBI', 'ORBITS', 'TRANSFER',
      'STATION_KEEPING', 'FRAME_CONVERSION',
    ],
    'TBP keeps its original 17 fields unchanged',
  );
  assert.deepEqual(
    tbp.tables.get('TBP').fields.slice(17).map((f) => f.name),
    ['CONTINUATION', 'MANIFOLDS', 'CONSTELLATION', 'SURFACE_ANALYSIS'],
    'TBP appends CONTINUATION, MANIFOLDS, CONSTELLATION, SURFACE_ANALYSIS',
  );

  // ---- b. JS -> C++ -> Go -> JS byte-equal wire round trip.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const M = await import(pathToFileURL(path.join(root, 'lib/js/TBP/main.js')));
  const T = (cls, v) => Object.assign(new cls(), v);

  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'missing C++ flatbuffers headers');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdstbppumpkyn\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');

  const encode = (o) => {
    const b = new fb.Builder(8192);
    M.TBP.finishTBPBuffer(b, o.pack(b));
    return Buffer.from(b.asUint8Array());
  };
  const decode = (f) => M.TBP.getRootAsTBP(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();

  const wire = (messages, { cppDrop = null, goDrop = null } = {}) => {
    const tag = cppDrop ? 'controlcpp' : goDrop ? 'controlgo' : 'wire';
    const dir = path.join(tmp, `${tag}-TBP`);
    fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
    for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));

    const copyTables = [...new Set(['TBP', ...closure(tbp, 'TBP', { arms: allArms })])];
    let cppSource = cppCopySource({ model: tbp, root: 'TBP', include: 'TBP/main_generated.h', populated: copyTables });
    let goSource = goCopySource({ model: tbp, root: 'TBP', pkg: 'TBP', populated: copyTables });
    if (cppDrop) {
      assert.ok(cppSource.includes(cppDrop), `C++ control must match: ${cppDrop}`);
      cppSource = cppSource.replace(cppDrop, '');
    }
    if (goDrop) {
      assert.ok(goSource.includes(goDrop), `Go control must match: ${goDrop}`);
      goSource = goSource.replace(goDrop, '');
    }
    run('tar', ['-xzf', path.join(root, 'dist/TBP/TBP.cpp.tar.gz'), '-C', path.join(dir, 'cpp')]);
    fs.writeFileSync(path.join(dir, 'copy.cpp'), cppSource);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
    run(path.join(dir, 'copy'), messages.flatMap(([n]) => [file(n, 'js'), file(n, 'cpp')]), dir);

    const goDir = path.join(tmp, `${tag}TBP`);
    run('cp', ['-R', path.join(root, 'lib/go/TBP'), goDir]);
    run('chmod', ['-R', 'u+w', goDir]);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goSource);
    fs.mkdirSync(path.join(tmp, `run${tag}TBP`));
    fs.writeFileSync(
      path.join(tmp, `run${tag}TBP/main.go`),
      `package main\nimport (\n "os"\n p "sdstbppumpkyn/${tag}TBP"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`,
    );
    run('go', ['run', '-mod=mod', `./run${tag}TBP`, ...messages.flatMap(([n]) => [file(n, 'cpp'), file(n, 'go')])]);

    const back = {};
    for (const [name, o, checkExact] of messages) {
      const js = fs.readFileSync(file(name, 'js'));
      const first = decode(file(name, 'js'));
      if (checkExact) assert.deepStrictEqual(first, o, `${name}: JS changed a field`);
      back[name] = { cpp: decode(file(name, 'cpp')), go: decode(file(name, 'go')) };
      if (tag === 'wire') {
        for (const leg of ['cpp', 'go']) {
          assert.deepStrictEqual(back[name][leg], first, `${name}: ${leg} changed a field`);
          assert.equal(Buffer.compare(encode(back[name][leg]), js), 0, `${name}: ${leg} not byte-equal to JS`);
        }
      }
    }
    return back;
  };

  const earthMoon = () =>
    T(M.tbpSystemT, {
      NAME: 'Earth-Moon',
      PRIMARY_BODY_ID: 399,
      SECONDARY_BODY_ID: 301,
      MASS_RATIO: 0.01215058560962404,
      CHARACTERISTIC_LENGTH_KM: 384400.0,
      CHARACTERISTIC_TIME_S: 375190.258663027,
    });

  const tulipConstellation = T(M.TBPT, {
    ID: 'tulip-7p-6-5-gdop',
    PRODUCER: 'cislunar-propagator',
    PROBLEM: M.tbpProblem.SurfaceAnalysis,
    SYSTEM: earthMoon(),
    STATUS: M.tbpStatus.Solved,
    CONSTELLATION: T(M.tbpConstellationT, {
      ORBIT: T(M.tbpPeriodicOrbitT, {
        FAMILY: M.tbpOrbitFamily.TulipSouthern,
        PETALS: 7,
        RESONANCE_P: 6,
        RESONANCE_Q: 5,
        PERIOD: (5 / 6) * 2 * Math.PI,
        JACOBI: 3.1777,
        STABILITY_INDEX: 1.42,
      }),
      SATELLITE_COUNT: 7,
      REVOLUTIONS: 1,
      PHASE_OFFSETS: [0, 0.747998, 1.495996],
    }),
    SURFACE_ANALYSIS: T(M.tbpSurfaceAnalysisT, {
      REFERENCE_PRIMARY: 2,
      PRIMARY_RADIUS_KM: 1738.1,
      MIN_ELEVATION_DEG: 5.0,
      MIN_SATELLITES: 4,
      SURFACE_LAT_LON_DEG: [-90.0, 0.0],
      SAMPLE_TIMES: [0.0, 0.5, 1.0],
      MAX_GAP_S: [0.0],
      GDOP: [3.12, 4.45, 3.88],
      PDOP: [2.61, 3.74, 3.21],
      TDOP: [1.71, 2.41, 2.18],
    }),
  });

  const lowThrust = T(M.TBPT, {
    ID: 'pmp-geo-tulip',
    PRODUCER: 'cislunar-propagator',
    PROBLEM: M.tbpProblem.Transfer,
    SYSTEM: earthMoon(),
    STATUS: M.tbpStatus.Solved,
    TRANSFER: T(M.tbpTransferT, {
      KIND: M.tbpTransferKind.LowThrustMinTime,
      INITIAL_STATE: T(M.tbpStateT, { X: 0.1, Y: 0, Z: 0, VX: 0, VY: 2.9, VZ: 0, TIME: 0 }),
      FINAL_STATE: T(M.tbpStateT, { X: 0.92, Y: 0, Z: 0.21, VX: 0, VY: 0.13, VZ: 0, TIME: 2.5 }),
      MAX_THRUST_N: 0.5,
      SPECIFIC_IMPULSE_S: 3000.0,
      INITIAL_MASS_KG: 1000.0,
      FINAL_MASS_KG: 912.4,
      PROPELLANT_MASS_KG: 87.6,
      INITIAL_COSTATES: [0.1, -0.2, 0.05, 0.3, -0.1, 0.02, 0.01],
      THROTTLE_HISTORY: [1.0, 1.0, 1.0],
      MIN_ENERGY_DELTA_V_KM_S: 0.84,
      CONVERGED: true,
    }),
  });

  const visited = new Set();
  const populated = populate(tbp, M, 'TBP', visited);
  assert.deepEqual([...visited].sort(), closure(tbp, 'TBP').sort(), '$TBP: every reachable table populated');

  const back = wire([
    ['tulipConstellation', tulipConstellation],
    ['lowThrust', lowThrust],
    ['populated', populated, true],
  ]);
  assert.equal(back.tulipConstellation.go.CONSTELLATION.ORBIT.PETALS, 7);
  assert.deepEqual(back.tulipConstellation.go.SURFACE_ANALYSIS.GDOP, [3.12, 4.45, 3.88]);
  assert.equal(back.lowThrust.go.TRANSFER.KIND, M.tbpTransferKind.LowThrustMinTime);
  assert.equal(back.lowThrust.go.TRANSFER.PROPELLANT_MASS_KG, 87.6);

  // Negative controls: dropping PETALS in C++ or MAX_THRUST_N in Go must be caught.
  const cppControl = wire([['tulipConstellation', tulipConstellation]], {
    cppDrop: 'x.add_PETALS(s->PETALS());',
  });
  assert.equal(cppControl.tulipConstellation.cpp.CONSTELLATION.ORBIT.PETALS, 0);
  assert.throws(() => assert.deepStrictEqual(cppControl.tulipConstellation.cpp, back.tulipConstellation.go));

  const goControl = wire([['lowThrust', lowThrust]], {
    goDrop: 'tbpTransferAddMAX_THRUST_N(b, s.MAX_THRUST_N())',
  });
  assert.equal(goControl.lowThrust.go.TRANSFER.MAX_THRUST_N, 0);
  assert.throws(() => assert.deepStrictEqual(goControl.lowThrust.go, back.lowThrust.go));

  // ---- c. fbjson schema check.
  const fbjson = JSON.parse(fs.readFileSync(path.join(root, 'lib/fbjson/TBP/main.fb.schema.json'), 'utf8'));
  for (const tbl of ['tbpContinuationRequest', 'tbpManifoldBranch', 'tbpManifolds', 'tbpConstellation', 'tbpSurfaceAnalysis']) {
    assert.ok(fbjson.definitions[tbl], `fbjson defines ${tbl}`);
  }
  const tbpProps = Object.keys(fbjson.definitions.TBP.properties);
  assert.deepEqual(
    tbpProps.slice(17),
    ['CONTINUATION', 'MANIFOLDS', 'CONSTELLATION', 'SURFACE_ANALYSIS'],
    'fbjson TBP ends with the 4 appended tables',
  );

  const version = fs.readFileSync(path.join(schemaRoot, 'TBP/main.fbs'), 'utf8').match(/^\/\/ Version: (\S+)$/m)[1];
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version.split('+')[0];
  console.log(`PASS: SDS ${pkg} $TBP ${version} Pumpkyn extensions: additive IDL verified, byte-equal JS -> C++ -> Go -> JS, C++/Go negative controls caught, fbjson verified`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
