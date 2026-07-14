import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { writeFB, readFB } from "../index.js";
import { APP } from "../lib/js/index.js";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function escapedTokenRegex(token) {
  return new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
}

describe("APP schema generation", () => {
  it("declares the page dataflow contract and in-page module runtime target", async () => {
    const schemaSource = await fs.readFile(
      path.join(repoRoot, "schema", "APP", "main.fbs"),
      "utf8",
    );

    for (const token of [
      // page-relative dataflow direction enum
      "enum appFlowDirection : ubyte",
      "TO_PAGE = 0",
      "FROM_PAGE = 1",
      "BIDIRECTIONAL = 2",
      // transport enum (IPFS-first)
      "enum appFlowTransport : ubyte",
      "IPFS_CID = 0",
      "PUBSUB_TOPIC = 1",
      "GATEWAY_ROUTE = 2",
      // in-page module runtime target enum
      "enum appRuntimeTarget : ubyte",
      "NODE = 0",
      "PAGE = 1",
      "BOTH = 2",
      // dataflow table + fields
      "table APPDataflow",
      "NAME:string (required, key)",
      "DIRECTION:appFlowDirection = TO_PAGE",
      "SDS_SCHEMA:string (required)",
      "TRANSPORT:appFlowTransport = IPFS_CID",
      "LOCATOR:string",
      "MODULE_ID:string",
      "METHOD_ID:string",
      "PORT_ID:string",
      "CONTENT_ENCODING:appContentEncoding = UTF8",
      // module ref runtime target + APP vector
      "RUNTIME_TARGET:appRuntimeTarget = NODE",
      "DATAFLOW:[APPDataflow]",
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }

    // Standards-only + IPFS-first doc rules are stated in the schema.
    assert.match(schemaSource, /Standards-only rule/);
    assert.match(schemaSource, /content-addressed[\s\S]*IPFS-first/);
    assert.match(
      schemaSource,
      /SAME[\s\S]*module-sdk[\s\S]*ABI[\s\S]*SDN[\s\S]*nodes/,
    );
  });

  it("appends the new fields without disturbing existing field order", async () => {
    // Append-only discipline: pre-existing enum members keep their values and
    // the pre-existing APP vector fields keep their declaration order.
    assert.equal(APP.appDataDirection.PRODUCES, 0);
    assert.equal(APP.appDataDirection.CONSUMES, 1);
    assert.equal(APP.appDataDirection.BOTH, 2);
    assert.equal(APP.appContentEncoding.UTF8, 0);
    assert.equal(APP.appContentEncoding.BASE64_BROTLI, 3);
    // New enums carry the documented explicit values.
    assert.equal(APP.appFlowDirection.TO_PAGE, 0);
    assert.equal(APP.appFlowDirection.FROM_PAGE, 1);
    assert.equal(APP.appFlowDirection.BIDIRECTIONAL, 2);
    assert.equal(APP.appFlowTransport.IPFS_CID, 0);
    assert.equal(APP.appFlowTransport.PUBSUB_TOPIC, 1);
    assert.equal(APP.appFlowTransport.GATEWAY_ROUTE, 2);
    assert.equal(APP.appRuntimeTarget.NODE, 0);
    assert.equal(APP.appRuntimeTarget.PAGE, 1);
    assert.equal(APP.appRuntimeTarget.BOTH, 2);
  });

  it("round-trips an APP record carrying dataflow entries and a page-loaded module", () => {
    const app = new APP.APPT();
    app.ID = "org.spacedatastandards.demo.conjunction";
    app.NAME = "Conjunction Screening";
    app.VERSION = "1.0.0";
    app.DESCRIPTION = "Standards-only page fed over IPFS.";

    // A member module that loads IN THE PAGE through the shared harness ABI.
    const mod = new APP.APPModuleRefT();
    mod.ID = "screener";
    mod.PLUGIN_ID = "org.sdn.conjunction-screener";
    mod.CONTENT_HASH = "a".repeat(64);
    mod.VERSION = "2.3.1";
    mod.ROLE = "primary";
    mod.RUNTIME_TARGET = APP.appRuntimeTarget.PAGE;
    app.MODULES = [mod];

    // Inbound flow: OMM catalog fetched by CID over the IPFS gateway.
    const inFlow = new APP.APPDataflowT();
    inFlow.NAME = "catalog-in";
    inFlow.DIRECTION = APP.appFlowDirection.TO_PAGE;
    inFlow.SDS_SCHEMA = "OMM";
    inFlow.TRANSPORT = APP.appFlowTransport.IPFS_CID;
    inFlow.LOCATOR = "bafybeigdyrztktx5b3c3q7a5b6example000000000000000000000000";
    inFlow.MODULE_ID = "screener";
    inFlow.METHOD_ID = "screen";
    inFlow.PORT_ID = "catalog";
    inFlow.CONTENT_ENCODING = APP.appContentEncoding.UTF8;
    inFlow.DESCRIPTION = "Ephemeris catalog delivered to the page.";

    // Outbound flow: conjunction results emitted by the page on a pubsub topic.
    const outFlow = new APP.APPDataflowT();
    outFlow.NAME = "cdm-out";
    outFlow.DIRECTION = APP.appFlowDirection.FROM_PAGE;
    outFlow.SDS_SCHEMA = "CDM";
    outFlow.TRANSPORT = APP.appFlowTransport.PUBSUB_TOPIC;
    outFlow.LOCATOR = "/sdn/conjunctions/v1";
    outFlow.MODULE_ID = "screener";
    outFlow.METHOD_ID = "screen";
    outFlow.PORT_ID = "conjunctions";

    app.DATAFLOW = [inFlow, outFlow];

    const buffer = writeFB(app);
    const [decoded] = readFB(buffer);

    assert.equal(decoded.ID, app.ID);
    assert.equal(decoded.MODULES.length, 1);
    assert.equal(decoded.MODULES[0].RUNTIME_TARGET, APP.appRuntimeTarget.PAGE);
    assert.equal(decoded.MODULES[0].CONTENT_HASH, "a".repeat(64));

    assert.equal(decoded.DATAFLOW.length, 2);

    const decodedIn = decoded.DATAFLOW.find((f) => f.NAME === "catalog-in");
    assert.ok(decodedIn, "inbound flow survived the round trip");
    assert.equal(decodedIn.DIRECTION, APP.appFlowDirection.TO_PAGE);
    assert.equal(decodedIn.SDS_SCHEMA, "OMM");
    assert.equal(decodedIn.TRANSPORT, APP.appFlowTransport.IPFS_CID);
    assert.equal(decodedIn.LOCATOR, inFlow.LOCATOR);
    assert.equal(decodedIn.MODULE_ID, "screener");
    assert.equal(decodedIn.METHOD_ID, "screen");
    assert.equal(decodedIn.PORT_ID, "catalog");
    assert.equal(decodedIn.CONTENT_ENCODING, APP.appContentEncoding.UTF8);

    const decodedOut = decoded.DATAFLOW.find((f) => f.NAME === "cdm-out");
    assert.ok(decodedOut, "outbound flow survived the round trip");
    assert.equal(decodedOut.DIRECTION, APP.appFlowDirection.FROM_PAGE);
    assert.equal(decodedOut.SDS_SCHEMA, "CDM");
    assert.equal(decodedOut.TRANSPORT, APP.appFlowTransport.PUBSUB_TOPIC);
    assert.equal(decodedOut.PORT_ID, "conjunctions");
    // Unset transport-specific fields default correctly on decode.
    assert.equal(decodedOut.CONTENT_ENCODING, APP.appContentEncoding.UTF8);
  });
});
