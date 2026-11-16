import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import * as flatbuffers from "flatbuffers";
import createFlatc from "flatc-wasm/module";
import * as CLG from "../lib/js/CLG/main.js";
import * as ACW from "../lib/js/ACW/main.js";
import * as REC from "../lib/js/REC/main.js";

// Serialization/contract fixtures, not a native geometry or store implementation.
// Acceptance requirements: docs/clg-validation.md, sections 3, 4 and 7.
const BASE = "fcc0574f266da26d50eef83e863dbbf8e4342f04";
const root = new URL("../", import.meta.url);
const api = { ...ACW, ...CLG };
const digest = bytes => createHash("sha256").update(bytes).digest("hex");
const types = new Map(), enums = new Map(), sources = new Map();
function load(family) {
  if (sources.has(family)) return;
  const source = readFileSync(new URL(`schema/${family}/main.fbs`, root), "utf8");
  sources.set(family, source);
  for (const [, dependency] of source.matchAll(/include "\.\.\/([^/]+)\/main.fbs"/g)) load(dependency);
  const clean = source.replace(/\/\/[^\n]*/g, "");
  for (const [, name, body] of clean.matchAll(/enum (\w+)\s*:\s*\w+\s*\{([^}]+)\}/g)) {
    let value = -1;
    enums.set(name, body.split(",").filter(x => x.trim()).map(x => {
      const [key, explicit] = x.trim().split(/\s*=\s*/);
      value = explicit === undefined ? value + 1 : Number(explicit);
      return { key, value };
    }));
  }
  for (const [, kind, name, body] of clean.matchAll(/(table|struct) (\w+)\s*\{([^}]+)\}/g)) {
    const fields = [...body.matchAll(/(\w+)\s*:\s*(\[\w+\]|\w+)([^;]*);/g)]
      .map(([, name, type, rest]) => ({ name, type, required: rest.includes("required") }));
    types.set(name, { kind, fields, family });
  }
}
load("CLG");

function object(name, values = {}) { return Object.assign(new api[`${name}T`](), values); }
function supplied(name, values) {
  const result = object(name, values);
  for (const key of Object.keys(values)) if (`HAS_${key}` in result) result[`HAS_${key}`] = true;
  return result;
}
function bytesOf(name, value, module = api) {
  const b = new flatbuffers.Builder(1024);
  const offset = value.pack(b);
  const finish = module[name][`finish${name}Buffer`];
  if (finish) finish(b, offset); else b.finish(offset);
  return Uint8Array.from(b.asUint8Array());
}
function decode(name, bytes, module = api) {
  const bb = new flatbuffers.ByteBuffer(bytes);
  return new module[name]().__init(bb.readInt32(0), bb).unpack();
}
function roundTrip(name, value, module = api) { return decode(name, bytesOf(name, value, module), module); }
const index = value => object("CLGIndex", { VALUE: value, HAS_VALUE: true });
const vector = (X, Y, Z) => object("CLGVector3", { X, Y, Z, HAS_VALUES: true });
const quaternion = () => object("CLGQuaternion", { W: 1, HAS_VALUES: true });
function frame(bodyId) {
  return object("RFMCoordinateSystem", {
    NAME: `synthetic-fixed-${bodyId}`, AXIS_TYPE: CLG.rfmAxisType.BODY_FIXED,
    AXIS_REFERENCE_BODY_ID: bodyId,
    ORIGIN: object("RFMOrigin", { KIND: CLG.rfmOriginKind.CELESTIAL_BODY, CELESTIAL_BODY_ID: bodyId }),
  });
}
function body(bodyId) {
  const axes = bodyId === 399 ? [6378137, 6378137, 6356752.314245179] : [1737400, 1737400, 1737400];
  return supplied("BodyDescriptor", {
    NAIF_ID: bodyId, FIXED_FRAME: frame(bodyId), SEMI_AXIS_X_M: axes[0], SEMI_AXIS_Y_M: axes[1], SEMI_AXIS_Z_M: axes[2],
    MODEL_ID: `serialization-fixture-${bodyId}`, MODEL_SHA256: digest(`fixture-model-${bodyId}`), ATMOSPHERE_MODEL_ID: "NONE",
  });
}
const ref = (standard, bytes) => object("CLGRecordRef", { STANDARD: standard, RECORD_ID: "root", SHA256: digest(bytes) });
function definition(bodyId, direction) {
  const controls = supplied("CLGControls", {
    TIMING: CLG.clgPropagationTiming.RETARDED_VACUUM, DIRECTION: direction,
    MAX_LIGHT_TIME_S: 2, REQUESTED_TIME_ACCURACY_S: 1, ROOT_TOLERANCE_S: 0.00025,
    LIGHT_TIME_TOLERANCE_S: 1e-9, ISOLATION_FLOOR_S: 1e-9, RANGE_EXTREMUM_TOLERANCE_M: 0.001,
    ATTITUDE_JOIN_TOLERANCE_RAD: 1e-12, RATE_JOIN_TOLERANCE_RAD_S: 1e-12,
    ACCELERATION_JOIN_TOLERANCE_RAD_S2: 1e-12, POSITION_JOIN_TOLERANCE_M: 1e-6,
    VELOCITY_JOIN_TOLERANCE_MPS: 1e-8, ACCELERATION_JOIN_TOLERANCE_MPS2: 1e-10,
    POLICY: CLG.clgSelectionPolicy.RETAIN_THEN_GREEDY, MIN_HOLD_TIME_S: 0, MIN_ACTIVE_TIME_S: 0,
    DECISION_STEP_S: 1, OUTPUT_EPOCHS_S: [10, 20], EMIT_EVENT_SNAPSHOTS: false, THREAD_COUNT: 1,
    MAX_WORKING_BYTES: 1048576n, MAX_RESULT_BYTES: 1048576n, MAX_CANDIDATE_PAIRS: 10n,
    MAX_INPUT_BYTES: 1048576n, MAX_SPOOL_BYTES: 4194304n,
  });
  const source = supplied("CLGSource", {
    CATEGORY: CLG.clgSourceCategory.SAMPLED_STATES, RECORD: ref("MODEL", "synthetic poses"),
    THEORY: "serialization-fixture", INTERPOLATION_ID: "degree-zero", POSITION_ERROR_M: 0,
    VELOCITY_ERROR_MPS: 0, ACCELERATION_ERROR_MPS2: 0, JERK_ERROR_MPS3: 0,
    ATTITUDE_ERROR_RAD: 0, ANGULAR_RATE_ERROR_RAD_S: 0, ANGULAR_ACCELERATION_ERROR_RAD_S2: 0,
  });
  const profile = supplied("CLGTerminalProfile", {
    PROFILE_ID: "electronic", MEDIUM: CLG.clgTerminalMedium.RF,
    CAPABILITY: CLG.clgTerminalCapability.TRANSMIT_RECEIVE, COMPATIBILITY_CLASS: "fixture",
    DEFINITION_REFS: [ref("MODEL", "synthetic beam tolerance")], STEERING: CLG.clgSteeringClass.ELECTRONIC,
    REGARD: CLG.clgRegardGeometry.ALL_DIRECTIONS, MIN_RANGE_M: 0, MAX_RANGE_M: 5e8,
    BEAM_SWITCH_TIME_S: 0, MAX_SIMULTANEOUS_LINKS: 1, INDEPENDENT_BEAMS: false,
    POINTING: CLG.clgPointingArchitecture.COMMON_AXIS, MAX_POINT_AHEAD_RAD: 0.001,
  });
  return supplied("CLG", {
    GRAPH_ID: `serialization-${bodyId}-${direction}`, PAYLOAD: CLG.clgPayloadClass.DEFINITION,
    DEFINITION: supplied("CLGDefinition", {
      EPOCH_JD_TT_DAY: 2461041n, EPOCH_JD_TT_SECONDS: 43200, START_OFFSET_S: 10, STOP_OFFSET_S: 20,
      WORKING_FRAME: object("RFMCoordinateSystem", { NAME: "synthetic-inertial", AXIS_TYPE: CLG.rfmAxisType.ICRF }),
      BODIES: [supplied("CLGBody", { MODEL: body(bodyId), MOTION_SOURCE_INDEX: 0, FRAME_STATIONARY: false,
        CLEARANCE: CLG.clgClearanceMode.ELLIPSOID_AXIS_OFFSET, SPACE_SPACE_SKIM_MARGIN_M: 0 })],
      SOURCES: [source], NODES: ["alpha", "zeta", "zz"].map(NODE_ID => supplied("CLGNode", {
        NODE_ID, CATEGORY: CLG.clgNodeCategory.SPACECRAFT, BODY_INDEX: 0, STATE_SOURCE_INDEX: 0,
        MAX_SIMULTANEOUS_LINKS: 1, ELEVATION_GATE: CLG.clgElevationGate.NONE,
        ATTITUDE_LAW: CLG.clgAttitudeLaw.INERTIALLY_FIXED, FIXED_ATTITUDE: quaternion(),
        ATTITUDE_FRAME: object("RFMCoordinateSystem", { NAME: "synthetic-inertial", AXIS_TYPE: CLG.rfmAxisType.ICRF }),
      })), PROFILES: [profile], TERMINALS: ["tx", "rx"].map((TERMINAL_ID, NODE_INDEX) => supplied("CLGTerminal", {
        TERMINAL_ID, NODE_INDEX, PROFILE_INDEX: 0, MOUNT_TO_NODE: quaternion(),
      })), BLACKOUTS: [object("CLGBlackout", { TERMINAL_INDEX: index(0), START_S: 1, STOP_S: 2, HAS_TIMES: true })], CONTROLS: controls,
    }),
  });
}
function result(def, defBytes, stateBytes) {
  const direction = def.DEFINITION.CONTROLS.DIRECTION;
  const rays = direction === CLG.clgLinkDirection.BIDIRECTIONAL ? [2, 3] : [direction];
  const boundaries = [10, 20].map(t => supplied("CLGBoundary", {
    PAIR_INDEX: index(0), OFFSET_S: t, BRACKET_LO_S: t, BRACKET_HI_S: t,
    CAUSES: [object("CLGCause", { KIND: CLG.clgBoundaryCause.SPAN_BOUNDARY, DIRECTION: rays[0],
      HAS_KIND: true, HAS_DIRECTION: true }), object("CLGCause", {
      KIND: CLG.clgBoundaryCause.OCCULTATION, DIRECTION: rays[0], BODY_INDEX: index(0), HAS_KIND: true, HAS_DIRECTION: true,
    })],
    RAY_TIMES: rays.map(DIRECTION => object("CLGRayTimes", { DIRECTION, EMISSION_S: t, RECEPTION_S: t + 1,
      RECEPTION_BRACKET_LO_S: t + 1, RECEPTION_BRACKET_HI_S: t + 1, HAS_VALUES: true })),
  }));
  const adjacency = [10, 20].map(t => {
    const neighbors = t === 20 ? [] : rays.map(d => d === 2 ? 1 : 0);
    return supplied("CLGAdjacency", { EPOCH_S: t, ORIGIN: CLG.clgSnapshotOrigin.TOPOLOGY,
      ROW_OFFSETS: t === 20 ? [0, 0, 0, 0] : direction === 2 ? [0, 1, 1, 1] : direction === 3 ? [0, 0, 1, 1] : [0, 1, 2, 2],
      NEIGHBOR_NODE_INDEXES: neighbors, LINK_INDEXES: neighbors.map(() => 0), RANGES_M: neighbors.map(() => 299792458),
      LIGHT_TIMES_S: neighbors.map(() => 1), RECEPTION_EPOCHS_S: neighbors.map(() => 11),
    });
  });
  return supplied("CLG", { GRAPH_ID: def.GRAPH_ID, PAYLOAD: CLG.clgPayloadClass.RESULT,
    RESULT: supplied("CLGResult", { STATUS: CLG.clgComputationState.COMPLETE, CHUNK_INDEX: 0, CHUNK_COUNT: 1,
      DEFINITION_REF: ref("CLG", defBytes), PAIRS: [object("CLGPair", {
        TERMINAL_A: index(0), TERMINAL_B: index(1), DIRECTION: direction, HAS_DIRECTION: true,
      })], LINKS: [object("CLGLink", { PAIR_INDEX: index(0), SLOT_A: index(0), SLOT_B: index(0) })],
      BOUNDARIES: boundaries, INTERVALS: [object("CLGInterval", {
        START_S: 10, STOP_S: 20, MIN_RANGE_M: 299792458, MAX_RANGE_M: 299792458, READY_FROM_S: 10,
        PAIR_INDEX: index(0), START_BOUNDARY_INDEX: index(0), STOP_BOUNDARY_INDEX: index(1), HAS_VALUES: true, HAS_READY_FROM: true,
      })], TRANSITIONS: [[10, CLG.clgTransitionStage.ACTIVE], [20, CLG.clgTransitionStage.DRAIN],
        [21, CLG.clgTransitionStage.RELEASE]].map(([TIME_S, STAGE]) => object("CLGTransition", {
        TIME_S, LINK_INDEX: index(0), STAGE, CAUSE: CLG.clgBoundaryCause.SPAN_BOUNDARY,
        HAS_TIME: true, HAS_STAGE: true, HAS_CAUSE: true,
      })), ADJACENCY: adjacency, TOPOLOGY_CHANGE_EPOCHS_S: [10, 20],
      PROVENANCE: supplied("CLGProvenance", { DEFINITION_SHA256: digest(defBytes), STATE_BLOCK_SHA256: [digest(stateBytes)],
        ALGORITHM_ID: "serialization-fixture", ROOT_ERROR_BOUND_S: 0, SOURCE_ERROR_BOUND_S: 0,
        FRAME_TIME_ERROR_BOUND_S: 0, RANGE_ERROR_BOUND_M: 0, MODEL_ERROR_BOUND_S: 0,
        ANALYSIS_SCOPE: CLG.clgAnalysisScope.GEOMETRIC_TERMINAL_FEASIBILITY, TIMING: CLG.clgPropagationTiming.RETARDED_VACUUM,
      }), PRODUCER: object("PVN", { PRODUCER: "test-host", PRODUCER_SHA256: digest("throwaway test artifact") }),
    }),
  });
}

function reject(code) { throw new Error(code); }
function requireValue(value, field, flag = `HAS_${field}`) {
  if (value[flag] !== true) reject("missing-presence");
  const item = value[field];
  if (typeof item === "number" && !Number.isFinite(item)) reject("invalid-scalar");
  return item;
}
function enumValue(name, field, value, flag = `HAS_${field}`) {
  const n = requireValue(value, field, flag);
  const entry = enums.get(name).find(x => x.value === n);
  if (!entry || /^(UNSPECIFIED|UNKNOWN)$/.test(entry.key)) reject("clg-enum-unsupported");
  if (name === "acwOperationCode" && n < 3) reject("acw-operation-retired");
}
function enumTree(name, value) {
  if (!value) return;
  for (const field of types.get(name).fields) {
    const item = value[field.name];
    if (enums.has(field.type)) {
      const flag = `HAS_${field.name}`;
      if (flag in value) { if (value[flag]) enumValue(field.type, field.name, value); }
      else if (name === "CLGRayTimes") enumValue(field.type, field.name, value, "HAS_VALUES");
      else if (!enums.get(field.type).some(x => x.value === item)) reject("clg-enum-unsupported");
    } else if (types.has(field.type)) enumTree(field.type, item);
    else if (field.type.startsWith("[") && types.has(field.type.slice(1, -1)))
      for (const entry of item ?? []) enumTree(field.type.slice(1, -1), entry);
  }
}
function validateWindow(window, count, clippedStart, clippedEnd) {
  for (const [edge, clipped] of [["START", clippedStart], ["END", clippedEnd]]) {
    const key = `${edge}_LIMITING_CONSTRAINT_INDEX`;
    if (clipped) {
      if (window[`HAS_${key}`] || window[`${edge}_LIMITING_CONSTRAINT_LABEL`] != null) reject("acw-clipped-index");
    } else {
      const n = requireValue(window, key);
      if (!Number.isInteger(n) || n < 0 || n >= count) reject("acw-constraint-index");
    }
  }
}
function validateAccess(value) {
  enumValue("acwOperationCode", "OPERATION", value.REQUEST);
  if (!value.CENTRAL_BODY) reject("acw-body-required");
  for (const field of ["NAIF_ID", "SEMI_AXIS_X_M", "SEMI_AXIS_Y_M", "SEMI_AXIS_Z_M"])
    if (requireValue(value.CENTRAL_BODY, field) <= 0) reject("acw-body-invalid");
  enumTree("ACW", value);
}
const compare = (a, b) => Buffer.compare(Buffer.from(a), Buffer.from(b));
function validateDefinition(value) {
  enumValue("clgPayloadClass", "PAYLOAD", value);
  enumTree("CLG", value);
  const def = value.DEFINITION;
  for (const field of ["EPOCH_JD_TT_DAY", "EPOCH_JD_TT_SECONDS", "START_OFFSET_S", "STOP_OFFSET_S"]) requireValue(def, field);
  for (let i = 0; i < def.NODES.length; ++i) {
    const node = def.NODES[i];
    if (!node.NODE_ID || (i && compare(def.NODES[i - 1].NODE_ID, node.NODE_ID) >= 0)) reject("clg-noncanonical-order");
    if (requireValue(node, "BODY_INDEX") < 0 || node.BODY_INDEX >= def.BODIES.length) reject("clg-index");
    if (requireValue(node, "MAX_SIMULTANEOUS_LINKS") <= 0) reject("clg-capacity");
  }
  const terminalIds = new Set();
  for (let i = 0; i < def.TERMINALS.length; ++i) {
    const terminal = def.TERMINALS[i], previous = def.TERMINALS[i - 1];
    if (requireValue(terminal, "NODE_INDEX") < 0 || terminal.NODE_INDEX >= def.NODES.length) reject("clg-index");
    if (requireValue(terminal, "PROFILE_INDEX") < 0 || terminal.PROFILE_INDEX >= def.PROFILES.length) reject("clg-index");
    if (!terminal.TERMINAL_ID || terminalIds.has(terminal.TERMINAL_ID) || (previous &&
      (previous.NODE_INDEX > terminal.NODE_INDEX || (previous.NODE_INDEX === terminal.NODE_INDEX &&
      compare(previous.TERMINAL_ID, terminal.TERMINAL_ID) >= 0)))) reject("clg-noncanonical-order");
    terminalIds.add(terminal.TERMINAL_ID);
    requireValue(terminal.MOUNT_TO_NODE, "W", "HAS_VALUES");
  }
  for (const profile of def.PROFILES) {
    if (requireValue(profile, "MAX_SIMULTANEOUS_LINKS") <= 0) reject("clg-capacity");
    if (profile.STEERING === CLG.clgSteeringClass.MECHANICAL && requireValue(profile, "MAX_SLEW_RATE_RAD_S") <= 0)
      reject("clg-rate");
  }
}
function validateResult(message, definition, definitionBytes) {
  enumTree("CLG", message);
  const r = message.RESULT, def = definition.DEFINITION;
  for (const field of ["STATUS", "CHUNK_INDEX", "CHUNK_COUNT"]) requireValue(r, field);
  if (message.GRAPH_ID !== definition.GRAPH_ID || r.PROVENANCE.DEFINITION_SHA256 !== digest(definitionBytes)) reject("clg-definition-mismatch");
  if (!r.PRODUCER || !/^[0-9a-f]{64}$/.test(r.PRODUCER.PRODUCER_SHA256)) reject("clg-producer-required");
  if (r.PROVENANCE.TIMING !== def.CONTROLS.TIMING) reject("clg-timing-mismatch");
  for (const pair of r.PAIRS) {
    const a = requireValue(pair.TERMINAL_A, "VALUE"), b = requireValue(pair.TERMINAL_B, "VALUE");
    requireValue(pair, "DIRECTION");
    if (a >= b || b >= def.TERMINALS.length) reject("clg-noncanonical-order");
  }
  for (const boundary of r.BOUNDARIES) {
    requireValue(boundary.PAIR_INDEX, "VALUE");
    const q = requireValue(boundary, "OFFSET_S");
    for (const ray of boundary.RAY_TIMES) {
      requireValue(ray, "EMISSION_S", "HAS_VALUES");
      if (ray.EMISSION_S !== q || ray.RECEPTION_S < q || ray.RECEPTION_BRACKET_LO_S > ray.RECEPTION_S ||
        ray.RECEPTION_BRACKET_HI_S < ray.RECEPTION_S) reject("clg-clock");
    }
  }
  for (const a of r.ADJACENCY) {
    const count = a.NEIGHBOR_NODE_INDEXES.length;
    if (a.ROW_OFFSETS.length !== def.NODES.length + 1 || a.ROW_OFFSETS[0] !== 0 || a.ROW_OFFSETS.at(-1) !== count)
      reject("clg-csr");
    for (const key of ["LINK_INDEXES", "RANGES_M", "LIGHT_TIMES_S", "RECEPTION_EPOCHS_S"])
      if (a[key].length !== count) reject("clg-metric-length");
    for (const key of ["RANGES_M", "LIGHT_TIMES_S"])
      if (a[key].some(n => !Number.isFinite(n) || n <= 0)) reject("clg-metric");
  }
  if (r.TOPOLOGY_CHANGE_EPOCHS_S[0] !== def.START_OFFSET_S ||
    r.TOPOLOGY_CHANGE_EPOCHS_S.some((t, i, all) => (i && t <= all[i - 1]) || !r.ADJACENCY.some(a => a.EPOCH_S === t)))
    reject("clg-topology");
}
class FixtureStore {
  constructor(bindings = new Map()) { this.bindings = new Map(bindings); this.chunks = new Map(); }
  accept(bytes) {
    const value = decode("CLG", bytes);
    validateDefinition(value);
    const hash = digest(bytes), previous = this.bindings.get(value.GRAPH_ID);
    if (previous !== undefined && previous !== hash) reject("clg-graph-id-conflict");
    this.bindings.set(value.GRAPH_ID, hash);
    return hash;
  }
}

// Supply only the pointers needed to serialize an isolated field fixture.
function minimal(name) {
  const value = object(name);
  for (const f of types.get(name).fields) {
    if (f.type === "string" && f.required) value[f.name] = "fixture";
    if (types.has(f.type) && (f.required || types.get(name).kind === "struct")) value[f.name] = minimal(f.type);
  }
  return value;
}
function presenceFixtures() {
  let groups = 0;
  for (const [name, meta] of types) {
    if (!["ACW", "CLG"].includes(meta.family)) continue;
    for (const flag of meta.fields.filter(f => f.name.startsWith("HAS_"))) {
      const field = flag.name.slice(4);
      const targets = meta.fields.filter(f => !f.name.startsWith("HAS_") && !f.type.startsWith("[") &&
        !types.has(f.type) && f.type !== "string" && (f.name === field ||
        (field === "VALUES" && f.name !== "READY_FROM_S") ||
        (field === "TIMES" && ["START_S", "STOP_S"].includes(f.name)) ||
        (field === "TIME" && f.name === "TIME_S") || (field === "READY_FROM" && f.name === "READY_FROM_S")));
      assert.ok(targets.length, `${name}.${flag.name} gates a value`);
      ++groups;
      for (const present of [undefined, false, true]) for (const numeric of [0, 7]) {
        const value = minimal(name);
        if (present === undefined) delete value[flag.name]; else value[flag.name] = present;
        for (const target of targets) value[target.name] = target.type === "bool" ? !!numeric :
          /^(long|ulong|int64|uint64)$/.test(target.type) ? BigInt(numeric) : numeric;
        const back = roundTrip(name, value);
        assert.equal(back[flag.name], present === true, `${name}.${flag.name}`);
        for (const target of targets) {
          assert.equal(back[target.name], value[target.name], `${name}.${target.name}`);
          if (present !== true) assert.throws(() => requireValue(back, target.name, flag.name), /missing-presence/);
          else assert.equal(requireValue(back, target.name, flag.name), value[target.name]);
        }
      }
      for (const target of targets.filter(f => f.type === "double" || f.type === "float")) {
        const value = minimal(name); value[flag.name] = true; value[target.name] = NaN;
        assert.throws(() => requireValue(roundTrip(name, value), target.name, flag.name), /invalid-scalar/);
      }
    }
    for (const f of meta.fields.filter(f => enums.has(f.type))) {
      const flag = name === "CLGRayTimes" ? "HAS_VALUES" : `HAS_${f.name}`;
      for (const entry of enums.get(f.type)) {
        const value = minimal(name); value[flag] = true; value[f.name] = entry.value;
        const back = roundTrip(name, value);
        if (/^(UNSPECIFIED|UNKNOWN)$/.test(entry.key)) assert.throws(() => enumValue(f.type, f.name, back, flag), /clg-enum-unsupported/);
        else if (f.type === "acwOperationCode" && entry.value < 3) assert.throws(() => enumValue(f.type, f.name, back, flag), /acw-operation-retired/);
        else assert.doesNotThrow(() => enumValue(f.type, f.name, back, flag));
      }
      const unknown = minimal(name); unknown[flag] = true; unknown[f.name] = 127;
      assert.throws(() => enumValue(f.type, f.name, roundTrip(name, unknown), flag), /clg-enum-unsupported/);
    }
  }
  assert.ok(groups > 150, "exhaustive ACW and CLG presence groups exercised");
}

async function conformToBaseline() {
  const compiler = await createFlatc();
  for (const tree of ["/old", "/new"]) {
    compiler.FS.mkdir(tree);
    for (const [family, source] of sources) {
      compiler.FS.mkdir(`${tree}/${family}`);
      const text = tree === "/old" && family === "ACW" ? execFileSync("git", ["show", `${BASE}:schema/ACW/main.fbs`],
        { cwd: root, encoding: "utf8" }) : source;
      compiler.FS.writeFile(`${tree}/${family}/main.fbs`, text);
    }
  }
  compiler.FS.mkdir("/out");
  assert.equal(compiler.callMain(["--no-warnings", "--conform", "/old/ACW/main.fbs", "--cpp", "-o", "/out", "/new/ACW/main.fbs"]), 0);
  for (const language of ["cpp", "ts"]) assert.equal(compiler.callMain([
    `--${language}`, "--gen-object-api", "--preserve-case", "--no-warnings", "-o", "/out", "/new/CLG/main.fbs",
  ]), 0);
}
function oldAccessBytes() {
  // ACW 0.0.5 root slots 0/1 and request slot 0, with none of the appended fields.
  const b = new flatbuffers.Builder(256);
  b.startObject(21); b.addFieldInt8(0, 1, 0); const request = b.endObject();
  b.startObject(2); b.addFieldOffset(0, request, 0); const envelope = b.endObject();
  b.finish(envelope, "$ACW");
  return Uint8Array.from(b.asUint8Array());
}

describe("CLG explicit-body serialization contract", function () {
  this.timeout(120000);
  it("round-trips Earth/Moon directed graphs, all presence groups and archival ACW with explicit contract refusals", async () => {
    await conformToBaseline();
    presenceFixtures();
    assert.equal(ACW.acwOperationCode.COMPUTE_ACCESS_WINDOWS_EXPLICIT_BODY, 3);
    assert.equal(ACW.acwOperationCode.SIMULATE_OBSERVATIONS_EXPLICIT_BODY, 4);
    assert.equal(REC.RecordTypeExtended.CLG, 296);
    const frozen = JSON.parse(readFileSync(new URL("schema/REC/RECORDTYPE_ORDINALS.json", root)));
    const original = JSON.parse(execFileSync("git", ["show", `${BASE}:schema/REC/RECORDTYPE_ORDINALS.json`], { cwd: root }));
    assert.deepEqual(frozen.ordinals, original.ordinals);
    assert.deepEqual(frozen.extended_ordinals, { ...original.extended_ordinals, CLG: 296 });

    const archived = decode("ACW", oldAccessBytes(), ACW);
    assert.equal(archived.REQUEST.OPERATION, 1);
    assert.equal(archived.CENTRAL_BODY, null);
    assert.equal(archived.REQUEST.HAS_OPERATION, false);
    assert.equal(archived.REQUEST.ROOT_TOLERANCE_S, 0.1);
    assert.equal(archived.REQUEST.HAS_ROOT_TOLERANCE_S, false);
    assert.throws(() => validateAccess(archived), /missing-presence/);
    archived.REQUEST.HAS_OPERATION = true;
    assert.throws(() => validateAccess(archived), /acw-operation-retired/);

    for (const bodyId of [399, 301]) {
      for (const operation of [3, 4]) {
        const request = supplied("ACWRequest", { OPERATION: operation, EVALUATION_MODE: ACW.acwEvaluationMode.DISCRETE,
          ROOT_TOLERANCE_S: 0.1, MIN_ELEVATION_OVERRIDE_RAD: 0 });
        const value = object("ACW", { CENTRAL_BODY: body(bodyId), REQUEST: request });
        const back = roundTrip("ACW", value, ACW);
        assert.doesNotThrow(() => validateAccess(back));
        assert.equal(back.CENTRAL_BODY.NAIF_ID, bodyId);
        assert.equal(back.REQUEST.MIN_ELEVATION_OVERRIDE_RAD, 0);
        assert.equal(back.REQUEST.HAS_MIN_ELEVATION_OVERRIDE_RAD, true);
        back.CENTRAL_BODY = null;
        assert.throws(() => validateAccess(back), /acw-body-required/);
      }
      const clipped = roundTrip("ACWAccessWindow", object("ACWAccessWindow"));
      assert.doesNotThrow(() => validateWindow(clipped, 1, true, true));
      const attributed = roundTrip("ACWAccessWindow", supplied("ACWAccessWindow", {
        START_LIMITING_CONSTRAINT_INDEX: 0, END_LIMITING_CONSTRAINT_INDEX: 0,
      }));
      assert.doesNotThrow(() => validateWindow(attributed, 1, false, false));
      for (const invalid of [-1, 1]) {
        attributed.START_LIMITING_CONSTRAINT_INDEX = invalid;
        assert.throws(() => validateWindow(roundTrip("ACWAccessWindow", attributed), 1, false, false), /acw-constraint-index/);
      }
      clipped.START_LIMITING_CONSTRAINT_LABEL = "not a clipped label";
      assert.throws(() => validateWindow(roundTrip("ACWAccessWindow", clipped), 1, true, true), /acw-clipped-index/);

      for (const direction of [CLG.clgLinkDirection.A_TO_B, CLG.clgLinkDirection.B_TO_A, CLG.clgLinkDirection.BIDIRECTIONAL]) {
        const def = definition(bodyId, direction), defBytes = bytesOf("CLG", def);
        assert.equal(Buffer.from(defBytes.subarray(4, 8)).toString(), "$CLG");
        const back = decode("CLG", defBytes);
        assert.doesNotThrow(() => validateDefinition(back));
        assert.deepEqual(back.DEFINITION.NODES.map(n => n.NODE_ID), ["alpha", "zeta", "zz"]);
        assert.equal(back.DEFINITION.BODIES[0].MODEL.NAIF_ID, bodyId);
        assert.equal(back.DEFINITION.CONTROLS.EMIT_EVENT_SNAPSHOTS, false);
        assert.equal(back.DEFINITION.CONTROLS.HAS_EMIT_EVENT_SNAPSHOTS, true);
        assert.equal(back.DEFINITION.PROFILES[0].BEAM_SWITCH_TIME_S, 0);
        assert.equal(back.DEFINITION.PROFILES[0].HAS_BEAM_SWITCH_TIME_S, true);
        assert.equal(back.DEFINITION.TERMINALS[0].NODE_INDEX, 0);
        assert.equal(back.DEFINITION.BLACKOUTS[0].HAS_TIMES, true);
        for (const mutate of [d => d.NODES.reverse(), d => d.TERMINALS.reverse(), d => { d.NODES[1].NODE_ID = "alpha"; }]) {
          const invalid = decode("CLG", defBytes); mutate(invalid.DEFINITION);
          assert.throws(() => validateDefinition(roundTrip("CLG", invalid)), /clg-noncanonical-order/);
        }
        const omitted = decode("CLG", defBytes); omitted.DEFINITION.NODES[0].HAS_BODY_INDEX = false;
        assert.throws(() => validateDefinition(roundTrip("CLG", omitted)), /missing-presence/);
        const invalidEnum = decode("CLG", defBytes); invalidEnum.DEFINITION.BODIES[0].MODEL.FIXED_FRAME.AXIS_TYPE = 127;
        assert.throws(() => validateDefinition(roundTrip("CLG", invalidEnum)), /clg-enum-unsupported/);
        const zeroCapacity = decode("CLG", defBytes); zeroCapacity.DEFINITION.NODES[0].MAX_SIMULTANEOUS_LINKS = 0;
        assert.throws(() => validateDefinition(roundTrip("CLG", zeroCapacity)), /clg-capacity/);
        const zeroRate = decode("CLG", defBytes);
        Object.assign(zeroRate.DEFINITION.PROFILES[0], { STEERING: CLG.clgSteeringClass.MECHANICAL,
          MAX_SLEW_RATE_RAD_S: 0, HAS_MAX_SLEW_RATE_RAD_S: true });
        assert.throws(() => validateDefinition(roundTrip("CLG", zeroRate)), /clg-rate/);

        const state = supplied("CLG", { GRAPH_ID: def.GRAPH_ID, PAYLOAD: CLG.clgPayloadClass.STATE_BLOCK,
          STATE_BLOCK: supplied("CLGStateBlock", { SEQUENCE: 0, FINAL_BLOCK: true,
            SEGMENTS: [supplied("CLGPoseSegment", { OWNER: CLG.clgOwnerCategory.NODE, OWNER_INDEX: 0,
              START_S: 9, STOP_S: 22, DEGREE: 0, POSITION_COEFFICIENTS: [0, 0, 0] })] }),
        });
        const stateBytes = bytesOf("CLG", state), stateBack = decode("CLG", stateBytes);
        assert.equal(stateBack.STATE_BLOCK.SEGMENTS[0].OWNER_INDEX, 0);
        assert.deepEqual(stateBack.STATE_BLOCK.SEGMENTS[0].POSITION_COEFFICIENTS, [0, 0, 0]);
        assert.equal(stateBack.STATE_BLOCK.HAS_FINAL_BLOCK, true);
        const output = result(back, defBytes, stateBytes), outputBytes = bytesOf("CLG", output), decoded = decode("CLG", outputBytes);
        assert.doesNotThrow(() => validateResult(decoded, back, defBytes));
        const r = decoded.RESULT;
        assert.deepEqual(r.TOPOLOGY_CHANGE_EPOCHS_S, [10, 20]);
        assert.deepEqual(r.TRANSITIONS.map(t => [t.TIME_S, t.STAGE]), [[10, 3], [20, 4], [21, 5]]);
        assert.deepEqual(r.ADJACENCY[1].ROW_OFFSETS, [0, 0, 0, 0]);
        assert.deepEqual(r.ADJACENCY[1].RANGES_M, []);
        const active = r.ADJACENCY[0];
        assert.deepEqual(active.ROW_OFFSETS, direction === 2 ? [0, 1, 1, 1] : direction === 3 ? [0, 0, 1, 1] : [0, 1, 2, 2]);
        assert.deepEqual(active.NEIGHBOR_NODE_INDEXES, direction === 2 ? [1] : direction === 3 ? [0] : [1, 0]);
        assert.deepEqual(active.LIGHT_TIMES_S, direction === 1 ? [1, 1] : [1]);
        assert.deepEqual(active.RECEPTION_EPOCHS_S, direction === 1 ? [11, 11] : [11]);
        assert.equal(r.PRODUCER.PRODUCER_SHA256, digest("throwaway test artifact"));
        assert.equal(r.PROVENANCE.DEFINITION_SHA256, digest(defBytes));
        assert.deepEqual(r.PROVENANCE.STATE_BLOCK_SHA256, [digest(stateBytes)]);
        for (const boundary of r.BOUNDARIES) {
          assert.deepEqual(boundary.CAUSES.map(c => c.KIND), [1, 2]);
          assert.equal(boundary.CAUSES[0].BODY_INDEX.HAS_VALUE, false);
          assert.equal(boundary.CAUSES[1].BODY_INDEX.HAS_VALUE, true);
          assert.equal(boundary.CAUSES[1].BODY_INDEX.VALUE, 0);
          assert.deepEqual(boundary.RAY_TIMES.map(t => t.DIRECTION), direction === 1 ? [2, 3] : [direction]);
          for (const ray of boundary.RAY_TIMES) {
            assert.equal(ray.EMISSION_S, boundary.OFFSET_S);
            assert.equal(ray.RECEPTION_S, boundary.OFFSET_S === 10 ? 11 : 21);
          }
        }
        for (const [mutate, error] of [
          [x => { x.PAIRS[0].TERMINAL_A.VALUE = 1; x.PAIRS[0].TERMINAL_B.VALUE = 0; }, /clg-noncanonical-order/],
          [x => { x.PRODUCER = null; }, /clg-producer-required/],
          [x => { x.PROVENANCE.ANALYSIS_SCOPE = 127; }, /clg-enum-unsupported/],
          [x => { x.PROVENANCE.TIMING = CLG.clgPropagationTiming.SIMULTANEOUS; }, /clg-timing-mismatch/],
          [x => { x.ADJACENCY[0].LIGHT_TIMES_S = []; }, /clg-metric-length/],
          [x => { x.TOPOLOGY_CHANGE_EPOCHS_S = [10, 15, 20]; }, /clg-topology/],
          [x => { x.BOUNDARIES[0].RAY_TIMES[0].EMISSION_S = 11; }, /clg-clock/],
        ]) {
          const invalid = decode("CLG", outputBytes); mutate(invalid.RESULT);
          assert.throws(() => validateResult(roundTrip("CLG", invalid), back, defBytes), error);
        }
        const store = new FixtureStore();
        assert.equal(store.accept(defBytes), digest(defBytes));
        assert.equal(store.accept(defBytes), digest(defBytes));
        store.chunks.set(def.GRAPH_ID, outputBytes); store.chunks.delete(def.GRAPH_ID);
        const imported = new FixtureStore(store.bindings);
        for (const mutate of [d => { d.CONTROLS.DECISION_STEP_S = 2; }, d => { d.NODES[2].NODE_ID = "zzz"; }]) {
          const otherProducer = decode("CLG", defBytes); mutate(otherProducer.DEFINITION);
          assert.throws(() => store.accept(bytesOf("CLG", otherProducer)), /clg-graph-id-conflict/);
          assert.throws(() => imported.accept(bytesOf("CLG", otherProducer)), /clg-graph-id-conflict/);
          otherProducer.GRAPH_ID += "-changed";
          assert.doesNotThrow(() => new FixtureStore().accept(bytesOf("CLG", otherProducer)));
        }
        const record = Object.assign(new REC.RecordT(), { standard: "CLG", EXTENDED_TYPE: REC.RecordTypeExtended.CLG,
          EXTENDED_VALUE: Array.from(outputBytes) });
        const envelope = Object.assign(new REC.RECT(), { RECORDS: [record] });
        const received = roundTrip("REC", envelope, REC).RECORDS[0];
        assert.equal(received.value_type, REC.RecordType.NONE);
        assert.equal(received.EXTENDED_TYPE, 296);
        assert.equal(received.standard, "CLG");
        assert.deepEqual(Uint8Array.from(received.EXTENDED_VALUE), outputBytes);
        assert.equal(decode("CLG", Uint8Array.from(received.EXTENDED_VALUE)).GRAPH_ID, back.GRAPH_ID);
      }
    }
  });
});
