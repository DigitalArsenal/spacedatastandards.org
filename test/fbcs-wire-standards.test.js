import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as NDS from "../lib/js/NDS/main.js";
import * as NST from "../lib/js/NST/main.js";
import * as QRP from "../lib/js/QRP/main.js";
import * as AGR from "../lib/js/AGR/main.js";
import * as ACT from "../lib/js/ACT/main.js";
import * as ICN from "../lib/js/ICN/main.js";
import * as DSS from "../lib/js/DSS/main.js";
import * as SCM from "../lib/js/SCM/main.js";
import * as EOP from "../lib/js/EOP/main.js";
import * as LCC from "../lib/js/LCC/main.js";
import * as SRI from "../lib/js/SRI/main.js";

/**
 * Pack a native object through the size-prefixed finisher, prove the frame
 * carries the standard's file identifier at bytes 8..12 (after the size prefix and root offset), and unpack it again.
 */
function roundTrip(value, finish, readSizePrefixed, identifier) {
  const builder = new flatbuffers.Builder(1024);
  finish(builder, value.pack(builder));
  const bytes = builder.asUint8Array().slice();
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), identifier);
  return readSizePrefixed(new flatbuffers.ByteBuffer(bytes)).unpack();
}

describe("dashboard wire standards round-trip through the generated JS", () => {
  it("$NDS carries per-lane producer, origin and rung", () => {
    const source = new NDS.NDSSourceStatT();
    source.SCHEMA = "OMM";
    source.PROVIDER_ID = "provider-a";
    source.SOURCE_NAME = "gp-full-catalog";
    source.RECORD_COUNT = BigInt(32324);
    source.PRODUCER_PEER_ID = "12D3KooWproducer";
    source.ORIGIN_ID = "origin.example";
    source.PUBLISHER_RUNG = NDS.ndsPublisherRung.Signed;
    source.EVIDENCE = ["bafyepm"];
    const schema = new NDS.NDSSchemaStatT();
    schema.SCHEMA = "OMM";
    schema.RECORD_COUNT = BigInt(32324);
    schema.NEWEST_EPOCH_MS = BigInt(1788310719701);
    const trust = new NDS.NDSTrustEngineStatT();
    trust.MIN_INTERVAL_MS = BigInt(10000);
    trust.RUNS = BigInt(3);
    const set = new NDS.NDST();
    set.GENERATED_AT = BigInt(1788310719);
    set.SCHEMAS = [schema];
    set.SOURCES = [source];
    set.TOTAL_RECORDS = BigInt(32324);
    set.STALE = false;
    set.TRUST_ENGINE = trust;
    const back = roundTrip(set, NDS.NDS.finishSizePrefixedNDSBuffer, NDS.NDS.getSizePrefixedRootAsNDS, "$NDS");
    assert.equal(back.SOURCES[0].PUBLISHER_RUNG, NDS.ndsPublisherRung.Signed);
    assert.equal(back.SOURCES[0].ORIGIN_ID, "origin.example");
    assert.deepEqual(back.SOURCES[0].EVIDENCE, ["bafyepm"]);
    assert.equal(back.SCHEMAS[0].NEWEST_EPOCH_MS, BigInt(1788310719701));
    assert.equal(back.TRUST_ENGINE.RUNS, BigInt(3));
  });

  it("$NST carries row provenance and the connection graph", () => {
    const node = new NST.NSTNodeT();
    node.PEER_ID = "12D3KooWself";
    node.IS_SELF = true;
    node.SOURCE = "config";
    node.PINNED = true;
    node.CONNECTED_PEER_IDS = ["12D3KooWpeer1", "12D3KooWpeer2"];
    node.SIGNING_PUBLIC_KEY = "02abc";
    node.LATENCY_MS = 12.5;
    const set = new NST.NSTT();
    set.NODES = [node];
    set.GENERATED_AT = BigInt(1788310719701);
    set.SOURCE_PEER_ID = "12D3KooWself";
    const back = roundTrip(set, NST.NST.finishSizePrefixedNSTBuffer, NST.NST.getSizePrefixedRootAsNST, "$NST");
    assert.equal(back.NODES[0].SOURCE, "config");
    assert.deepEqual(back.NODES[0].CONNECTED_PEER_IDS, ["12D3KooWpeer1", "12D3KooWpeer2"]);
    assert.equal(back.NODES[0].LATENCY_MS, 12.5);
  });

  it("$QRP page header accounts for partial scans and columns", () => {
    const filter = new QRP.QRPFilterT();
    filter.FIELD = "NORAD_CAT_ID";
    filter.OP = QRP.qrpFilterOp.In;
    filter.VALUE = "25544,48274";
    const column = new QRP.QRPColumnT();
    column.NAME = "EPOCH";
    column.TYPE = "string";
    column.SORTABLE = true;
    column.INDEXED = true;
    const page = new QRP.QRPT();
    page.KIND = QRP.qrpKind.Page;
    page.STATUS = QRP.qrpStatus.Partial;
    page.SCHEMA_NAME = "OMM";
    page.FILE_IDENTIFIER = "$OMM";
    page.FILTERS = [filter];
    page.PAGE = 3;
    page.LIMIT = 200;
    page.NEXT_CURSOR = "r:12345";
    page.RECORD_COUNT = 200;
    page.STORED = BigInt(32324);
    page.SCANNED = BigInt(250000);
    page.PARTIAL = true;
    page.COLUMNS = [column];
    const back = roundTrip(page, QRP.QRP.finishSizePrefixedQRPBuffer, QRP.QRP.getSizePrefixedRootAsQRP, "$QRP");
    assert.equal(back.KIND, QRP.qrpKind.Page);
    assert.equal(back.STATUS, QRP.qrpStatus.Partial);
    assert.equal(back.PARTIAL, true);
    assert.equal(back.NEXT_CURSOR, "r:12345");
    assert.equal(back.FILTERS[0].OP, QRP.qrpFilterOp.In);
    assert.equal(back.COLUMNS[0].INDEXED, true);
    assert.equal(back.SCANNED, BigInt(250000));
  });

  it("$AGR carries histogram bins, series vectors and pivot cells", () => {
    const bin = new AGR.AGRBinT();
    bin.LOW = 90;
    bin.HIGH = 95;
    bin.COUNT = BigInt(1200);
    bin.MEAN = 92.4;
    const series = new AGR.AGRSeriesT();
    series.NAME = "MEAN_MOTION";
    series.X = [1, 2, 3];
    series.Y = [15.5, 15.4, 15.6];
    const cell = new AGR.AGRPivotCellT();
    cell.ROW_KEY = "LEO";
    cell.COL_KEY = "2024";
    cell.COUNT = BigInt(42);
    const agr = new AGR.AGRT();
    agr.KIND = AGR.agrKind.Histogram;
    agr.SCHEMA_NAME = "OMM";
    agr.X_FIELD = "PERIOD_MIN";
    agr.BINS = [bin];
    agr.SERIES = [series];
    agr.PIVOT = [cell];
    agr.ROW_KEYS = ["LEO"];
    agr.MATCHED = BigInt(32322);
    const back = roundTrip(agr, AGR.AGR.finishSizePrefixedAGRBuffer, AGR.AGR.getSizePrefixedRootAsAGR, "$AGR");
    assert.equal(back.BINS[0].COUNT, BigInt(1200));
    assert.equal(back.BINS[0].MEAN, 92.4);
    assert.deepEqual(back.SERIES[0].Y, [15.5, 15.4, 15.6]);
    assert.equal(back.PIVOT[0].ROW_KEY, "LEO");
    assert.equal(back.MATCHED, BigInt(32322));
  });

  it("$ACT carries a session with key slots and a signature", () => {
    const slot = new ACT.ACTKeySlotT();
    slot.SLOT = "signing";
    slot.KEY_PATH = "m/44'/60'/0'/0/0";
    slot.ROTATABLE = true;
    slot.ALGORITHM = "secp256k1";
    const act = new ACT.ACTT();
    act.ACCOUNT_ID = "acct-1";
    act.KIND = ACT.actKind.Session;
    act.XPUB = "xpub6C";
    act.EXPIRES_AT = BigInt(1788400000000);
    act.SIGNATURE = [1, 2, 3, 4];
    act.KEY_SLOTS = [slot];
    const back = roundTrip(act, ACT.ACT.finishSizePrefixedACTBuffer, ACT.ACT.getSizePrefixedRootAsACT, "$ACT");
    assert.equal(back.KIND, ACT.actKind.Session);
    assert.deepEqual(Array.from(back.SIGNATURE), [1, 2, 3, 4]);
    assert.equal(back.KEY_SLOTS[0].ALGORITHM, "secp256k1");
    assert.equal(back.EXPIRES_AT, BigInt(1788400000000));
  });

  it("extended standards keep their old fields and round-trip the new ones", () => {
    const icn = new ICN.ICNT();
    icn.CONNECTOR_ID = "gp-full-catalog";
    icn.ORIGIN_ID = "origin.example";
    icn.DATASET_ID = "gp-full-catalog";
    icn.MIN_FETCH_INTERVAL_MS = BigInt(10800000);
    icn.LAST_HTTP_STATUS = 304;
    icn.EMITS_SCHEMAS = ["OMM", "MPE"];
    const icnBack = roundTrip(icn, ICN.ICN.finishSizePrefixedICNBuffer, ICN.ICN.getSizePrefixedRootAsICN, "$ICN");
    assert.equal(icnBack.CONNECTOR_ID, "gp-full-catalog");
    assert.equal(icnBack.LAST_HTTP_STATUS, 304);
    assert.deepEqual(icnBack.EMITS_SCHEMAS, ["OMM", "MPE"]);

    const dss = new DSS.DSST();
    dss.STATUS = DSS.dssSyncState.SYNCING;
    dss.SCHEMA_NAME = "CAT";
    dss.SUBSCRIBED = true;
    dss.PIN_POLICY = DSS.dssPinPolicy.Archive;
    dss.REQUESTED_ACTION = DSS.dssAction.Sync;
    dss.DELTA_ROWS = BigInt(17);
    const dssBack = roundTrip(dss, DSS.DSS.finishSizePrefixedDSSBuffer, DSS.DSS.getSizePrefixedRootAsDSS, "$DSS");
    assert.equal(dssBack.STATUS, DSS.dssSyncState.SYNCING);
    assert.equal(dssBack.PIN_POLICY, DSS.dssPinPolicy.Archive);
    assert.equal(dssBack.REQUESTED_ACTION, DSS.dssAction.Sync);
    assert.equal(dssBack.DELTA_ROWS, BigInt(17));

    const std = new SCM.SCHEMA_STANDARDT();
    std.key = "OMM";
    std.NAME = "Orbit Mean-Elements Message";
    std.FILE_IDENTIFIER = "$OMM";
    std.ROUTED = true;
    std.RECORD_TYPE_ORDINAL = 3;
    const scm = new SCM.SCMT();
    scm.version = "1.208.0";
    scm.RECORDS = [std];
    scm.STANDARDS_VERSION = "1.208.0";
    const scmBack = roundTrip(scm, SCM.SCM.finishSizePrefixedSCMBuffer, SCM.SCM.getSizePrefixedRootAsSCM, "$SCM");
    assert.equal(scmBack.RECORDS[0].FILE_IDENTIFIER, "$OMM");
    assert.equal(scmBack.RECORDS[0].ROUTED, true);
    assert.equal(scmBack.STANDARDS_VERSION, "1.208.0");

    const eop = new EOP.EOPT();
    eop.MJD = 60000;
    eop.NUTATION_DPSI_RADIANS = -5.1e-7;
    eop.NUTATION_DEPS_RADIANS = 2.2e-8;
    const eopBack = roundTrip(eop, EOP.EOP.finishSizePrefixedEOPBuffer, EOP.EOP.getSizePrefixedRootAsEOP, "$EOP");
    assert.equal(eopBack.MJD, 60000);
    assert.equal(eopBack.NUTATION_DPSI_RADIANS, -5.1e-7);

    const lcc = new LCC.LCCT();
    lcc.OWNER = LCC.legacyCountryCode.ALG;
    lcc.NAME = "Algeria";
    lcc.ACTIVE = true;
    const lccBack = roundTrip(lcc, LCC.LCC.finishSizePrefixedLCCBuffer, LCC.LCC.getSizePrefixedRootAsLCC, "$LCC");
    assert.equal(lccBack.OWNER, LCC.legacyCountryCode.ALG);
    assert.equal(lccBack.NAME, "Algeria");

    const sri = new SRI.SRIT();
    sri.SCHEMA_NAME = "OMM";
    sri.CID = "bafyrecord";
    sri.BYTE_OFFSET = BigInt(4096);
    sri.BYTE_LENGTH = 512;
    sri.ENTITY_KEY = "25544";
    const sriBack = roundTrip(sri, SRI.SRI.finishSizePrefixedSRIBuffer, SRI.SRI.getSizePrefixedRootAsSRI, "$SRI");
    assert.equal(sriBack.CID, "bafyrecord");
    assert.equal(sriBack.BYTE_OFFSET, BigInt(4096));
    assert.equal(sriBack.BYTE_LENGTH, 512);
  });
});
