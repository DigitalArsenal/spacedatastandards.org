import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import * as flatbuffers from "flatbuffers";
import { FlatcRunner } from "flatc-wasm";

import * as ETS from "../lib/js/ETS/main.js";
import * as REC from "../lib/js/REC/main.js";

// Fixture payloads are stubs: the codec magic "TRK2" followed by ASCII filler.
// They are never real codec bitstreams.

const read = (relative) => readFileSync(new URL(relative, import.meta.url), "utf8");
const fixture = (name) => JSON.parse(read(`./fixtures/ets/${name}`));

const SCHEMA = {
  entry: "/schema/ETS/main.fbs",
  files: {
    "/schema/ETS/main.fbs": read("../schema/ETS/main.fbs"),
    "/schema/TRK/main.fbs": read("../schema/TRK/main.fbs"),
  },
};

const NAN_DEFAULTS = [
  "SOUTH_DEG", "NORTH_DEG", "WEST_DEG", "EAST_DEG",
  "ALTITUDE_MIN_M", "ALTITUDE_MAX_M",
  "TOLERANCE_H_M", "TOLERANCE_V_M", "ACHIEVED_MAX_ERROR_H_M", "ACHIEVED_MAX_ERROR_V_M",
];

function tableFields(source, table) {
  const body = source.match(new RegExp(`table\\s+${table}\\s*\\{([^}]*)\\}`, "s"));
  assert.ok(body, `table ${table} not found`);
  return body[1]
    .split("\n")
    .map((line) => line.replace(/\/\/.*$/, "").trim())
    .filter(Boolean)
    .map((line) => line.replace(/\s+/g, ""));
}

function enumMembers(source, name) {
  const body = source.match(new RegExp(`enum\\s+${name}\\s*:\\s*ubyte\\s*\\{([^}]*)\\}`, "s"));
  assert.ok(body, `enum ${name} not found`);
  return body[1]
    .split("\n")
    .map((line) => line.replace(/\/\/.*$/, "").trim())
    .filter(Boolean)
    .join("")
    .split(",")
    .filter(Boolean)
    .map((member) => {
      const [key, value] = member.split("=").map((part) => part.trim());
      return [key, Number(value)];
    });
}

// flatc-wasm emits size-prefixed buffers ([u32 size][FlatBuffer]); the
// generated object API emits bare ones. Both carry the $ETS identifier.
function readBack(bytes) {
  const text = (from) => new TextDecoder().decode(bytes.subarray(from, from + 4));
  const bare = text(8) === "$ETS" ? bytes.subarray(4) : bytes;
  assert.equal(new TextDecoder().decode(bare.subarray(4, 8)), "$ETS");
  return ETS.ETS.getRootAsETS(new flatbuffers.ByteBuffer(bare)).unpack();
}

function repack(record) {
  const builder = new flatbuffers.Builder(1024);
  ETS.ETS.finishETSBuffer(builder, record.pack(builder));
  return builder.asUint8Array();
}

describe("ETS Encoded Track Segment", () => {
  let flatc;
  const toBinary = (json) => flatc.generateBinary(SCHEMA, JSON.stringify(json));
  const toJSON = (bytes) =>
    JSON.parse(flatc.generateJSON(SCHEMA, { path: "/ets.bin", data: bytes }, { strictJson: true }));

  before(async () => {
    flatc = await FlatcRunner.init();
  });

  it("holds RecordType ordinal 255, frozen in the wire contract", () => {
    const contract = JSON.parse(read("../schema/REC/RECORDTYPE_ORDINALS.json"));
    assert.equal(contract.ordinals.ETS, 255);
    assert.ok(contract.frozen_through >= 255);
    assert.equal(REC.RecordType.ETS, 255);
    assert.equal(REC.RecordType[255], "ETS");
  });

  it("puts UNSPECIFIED at ordinal 0 of both enums, and the rest append-only", () => {
    const source = read("../schema/ETS/main.fbs");
    assert.deepEqual(enumMembers(source, "etsCodec"), [["UNSPECIFIED", 0], ["TRK2", 1]]);
    assert.deepEqual(enumMembers(source, "etsAltitudeDatum"), [
      ["UNSPECIFIED", 0], ["NONE", 1], ["GEOMETRIC_WGS84", 2], ["BAROMETRIC_STANDARD", 3], ["UNSTATED_3D", 4],
    ]);
    assert.equal(ETS.etsCodec.UNSPECIFIED, 0);
    assert.equal(ETS.etsAltitudeDatum.UNSPECIFIED, 0);
  });

  it("names every codec member by its 4-byte ASCII payload magic", () => {
    const source = read("../schema/ETS/main.fbs");
    for (const [name] of enumMembers(source, "etsCodec").filter(([name]) => name !== "UNSPECIFIED")) {
      assert.match(name, /^[\x21-\x7e]{4}$/, `${name} is not a 4-byte ASCII magic`);
    }
    for (const name of ["aircraft-3d-exported.json", "vessel-2d-store.json"]) {
      const record = fixture(name);
      assert.equal(Buffer.from(record.PAYLOAD.slice(0, 4)).toString("ascii"), record.CODEC, name);
    }
  });

  it("copies ETSIdentifier and ETSProvenance field for field from TMS", () => {
    const ets = read("../schema/ETS/main.fbs");
    const tms = read("../schema/TMS/main.fbs");
    assert.deepEqual(tableFields(ets, "ETSIdentifier"), tableFields(tms, "TMSIdentifier"));
    assert.deepEqual(tableFields(ets, "ETSProvenance"), tableFields(tms, "TMSProvenance"));
  });

  it("reads absent numerics as NaN and absent enums as UNSPECIFIED / UNKNOWN", () => {
    const back = readBack(toBinary({
      TRACK_ID: "t", EPOCH: "2026-10-06T00:00:00.000Z", END_EPOCH: "2026-10-06T00:00:00.000Z", PAYLOAD: [84, 82, 75, 50],
    }));
    for (const field of NAN_DEFAULTS) assert.ok(Number.isNaN(back[field]), `${field} should default to NaN`);
    assert.equal(back.CODEC, ETS.etsCodec.UNSPECIFIED);
    assert.equal(back.ALTITUDE_REFERENCE, ETS.etsAltitudeDatum.UNSPECIFIED);
    assert.equal(back.ENVIRONMENT, ETS.trackEnvironment.UNKNOWN);
    assert.equal(back.CODEC_VERSION, 0);
    assert.equal(back.SEGMENT_SEQ, 0);
    assert.equal(back.TRACK_CLOSED, false);
    assert.equal(back.SOURCE, null);
  });

  for (const name of ["aircraft-3d-exported.json", "vessel-2d-store.json"]) {
    it(`round-trips ${name} JSON -> binary -> JSON and through the object API`, () => {
      const input = fixture(name);
      const bytes = toBinary(input);
      assert.deepEqual(toJSON(bytes), input);

      const back = readBack(bytes);
      assert.equal(back.TRACK_ID, input.TRACK_ID);
      assert.equal(back.EPOCH, input.EPOCH);
      assert.equal(back.END_EPOCH, input.END_EPOCH);
      assert.equal(back.CODEC, ETS.etsCodec[input.CODEC]);
      assert.deepEqual(back.PAYLOAD, input.PAYLOAD);
      assert.equal(back.IDENTIFIERS[0].SCHEME, input.IDENTIFIERS[0].SCHEME);

      assert.deepStrictEqual(readBack(repack(back)), back);
    });
  }

  it("keeps SOURCE optional: a store record omits it, an exported record carries it", () => {
    const store = fixture("vessel-2d-store.json");
    assert.equal("SOURCE" in store, false);
    assert.equal(readBack(toBinary(store)).SOURCE, null);
    const exported = readBack(toBinary(fixture("aircraft-3d-exported.json")));
    assert.equal(exported.SOURCE.DATASET_ID, "synthetic-track-generator");
    assert.equal(exported.SOURCE.LICENSE, "CC0-1.0");
  });

  it("rejects a record missing EPOCH, END_EPOCH, PAYLOAD or TRACK_ID", () => {
    for (const field of ["EPOCH", "END_EPOCH", "PAYLOAD", "TRACK_ID"]) {
      const record = fixture("vessel-2d-store.json");
      delete record[field];
      assert.throws(() => toBinary(record), new RegExp(`required field is missing: ${field} in ETS\\b`), `${field} must be required`);
    }
  });

  it("applies the ETSProvenance and ETSIdentifier required fields when present", () => {
    for (const field of ["DATASET_ID", "DATASET_EPOCH", "RETRIEVED_AT", "LICENSE", "NATIVE_ID"]) {
      const record = fixture("aircraft-3d-exported.json");
      delete record.SOURCE[field];
      assert.throws(() => toBinary(record), new RegExp(`required field is missing: ${field} in ETSProvenance`), `SOURCE.${field} must be required`);
    }
    for (const field of ["SCHEME", "VALUE"]) {
      const record = fixture("vessel-2d-store.json");
      delete record.IDENTIFIERS[0][field];
      assert.throws(() => toBinary(record), new RegExp(`required field is missing: ${field} in ETSIdentifier`), `IDENTIFIERS[].${field} must be required`);
    }
  });

  it("round-trips a CODEC ordinal this schema does not know", () => {
    const record = fixture("vessel-2d-store.json");
    record.CODEC = 200;
    record.PAYLOAD = [...Buffer.from("XYZ9-STUB")];
    const bytes = toBinary(record);
    assert.equal(toJSON(bytes).CODEC, 200);
    const back = readBack(bytes);
    assert.equal(back.CODEC, 200);
    assert.equal(back.TRACK_ID, record.TRACK_ID);
    assert.equal(readBack(repack(back)).CODEC, 200);
  });
});
