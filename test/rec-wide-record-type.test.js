import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import * as flatbuffers from "flatbuffers";

import { planRecordTypes, UNION_CAPACITY, EXTENDED_FIRST } from "../scripts/createREC.mjs";
import { parseUnionOrdinals, parseExtendedOrdinals, structuralViolations } from "../scripts/checkRecordTypeOrdinals.mjs";
import * as REC from "../lib/js/REC/main.js";
import * as OMM from "../lib/js/OMM/main.js";

const code = (i) => `Z${String.fromCharCode(65 + Math.floor(i / 26))}${String.fromCharCode(65 + (i % 26))}`;

describe("REC wide record types (RecordTypeExtended)", () => {
  it("fills the union to 255 members, then numbers standards from 256", () => {
    const existing = Array.from({ length: 254 }, (_, i) => code(i));
    const catalog = [...existing, "ZZA", "ZZB", "ZZC"].sort();
    const plan = planRecordTypes(catalog, existing, {});
    assert.equal(UNION_CAPACITY, 255);
    assert.equal(plan.union.length, 255);
    assert.deepEqual(plan.union.slice(0, 254), existing, "existing members keep their positions");
    assert.equal(plan.union[254], "ZZA");
    assert.deepEqual(plan.extended, [["ZZB", EXTENDED_FIRST], ["ZZC", EXTENDED_FIRST + 1]]);
  });

  it("keeps wide ordinals append-only and never moves a union member", () => {
    const union = Array.from({ length: 255 }, (_, i) => code(i));
    const plan = planRecordTypes([...union, "ZZB", "ZZC", "AAA"], union, { ZZC: 256, ZZB: 257 });
    assert.deepEqual(plan.union, union);
    assert.deepEqual(plan.extended, [["ZZC", 256], ["ZZB", 257], ["AAA", 258]]);
  });

  it("refuses a union past one byte, a low wide ordinal, and a standard in both lists", () => {
    const union = Object.fromEntries(Array.from({ length: 256 }, (_, i) => [code(i), i + 1]));
    assert.match(structuralViolations(union, {}).join("\n"), /holds at most 255/);
    assert.match(structuralViolations({ OMM: 1 }, { CDM: 255 }).join("\n"), /below 256/);
    assert.match(structuralViolations({ OMM: 1 }, { OMM: 256 }).join("\n"), /in both/);
    assert.match(structuralViolations({}, { AAA: 256, BBB: 256 }).join("\n"), /shared/);
  });

  it("holds for the published schema and its contract", () => {
    const source = readFileSync(new URL("../schema/REC/main.fbs", import.meta.url), "utf8");
    const contract = JSON.parse(readFileSync(new URL("../schema/REC/RECORDTYPE_ORDINALS.json", import.meta.url), "utf8"));
    const union = parseUnionOrdinals(source);
    const extended = parseExtendedOrdinals(source);
    assert.deepEqual(structuralViolations(union, extended), []);
    assert.deepEqual(union, contract.ordinals);
    assert.deepEqual(extended, contract.extended_ordinals);
    assert.equal(contract.union_capacity, 255);
  });

  it("carries a record in EXTENDED_TYPE and EXTENDED_VALUE with value NONE", () => {
    const omm = new OMM.OMMT();
    omm.OBJECT_NAME = "WIDE TEST";
    omm.NORAD_CAT_ID = 25544;
    const inner = new flatbuffers.Builder(256);
    OMM.OMM.finishOMMBuffer(inner, omm.pack(inner));
    const bytes = Array.from(inner.asUint8Array());

    const record = new REC.RecordT();
    record.standard = "OMM";
    record.EXTENDED_TYPE = 256;
    record.EXTENDED_VALUE = bytes;
    const rec = new REC.RECT();
    rec.RECORDS = [record];
    const outer = new flatbuffers.Builder(1024);
    REC.REC.finishRECBuffer(outer, rec.pack(outer));
    const back = REC.REC.getRootAsREC(new flatbuffers.ByteBuffer(outer.asUint8Array())).unpack().RECORDS[0];

    assert.equal(back.value_type, REC.RecordType.NONE);
    assert.equal(back.EXTENDED_TYPE, 256);
    const payload = new Uint8Array(back.EXTENDED_VALUE);
    assert.equal(new TextDecoder().decode(payload.subarray(4, 8)), "$OMM");
    assert.equal(OMM.OMM.getRootAsOMM(new flatbuffers.ByteBuffer(payload)).NORAD_CAT_ID(), 25544);
  });

  it("reads a record written before the wide fields as EXTENDED_TYPE NONE", () => {
    const record = new REC.RecordT();
    record.standard = "OMM";
    const rec = new REC.RECT();
    rec.RECORDS = [record];
    const b = new flatbuffers.Builder(256);
    REC.REC.finishRECBuffer(b, rec.pack(b));
    const back = REC.REC.getRootAsREC(new flatbuffers.ByteBuffer(b.asUint8Array())).unpack().RECORDS[0];
    assert.equal(back.EXTENDED_TYPE, REC.RecordTypeExtended.NONE);
    assert.deepEqual(back.EXTENDED_VALUE, []);
  });
});
