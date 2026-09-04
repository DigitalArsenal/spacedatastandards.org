import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as flatbuffers from "flatbuffers";

import * as CLM from "../lib/js/CLM/main.js";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function roundTrip(claim) {
  const builder = new flatbuffers.Builder(1024);
  CLM.CLM.finishSizePrefixedCLMBuffer(builder, claim.pack(builder));
  const bytes = builder.asUint8Array().slice();
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), "$CLM");
  return CLM.CLM.getSizePrefixedRootAsCLM(new flatbuffers.ByteBuffer(bytes)).unpack();
}

function countersignature({ peerId, profileCid, signedAt, signature }) {
  const cs = new CLM.CLMCountersignatureT();
  cs.PEER_ID = peerId;
  cs.PROFILE_CID = profileCid;
  cs.SIGNED_AT = BigInt(signedAt);
  cs.SIGNATURE = Array.from(signature);
  return cs;
}

describe("ownership claim records round-trip through the generated JS", () => {
  it("carries a satellite ownership claim with its signature and countersignature", () => {
    const claim = new CLM.CLMT();
    claim.CLAIM_ID = "12D3KooWClaimant:Satellite:25544";
    claim.CLAIMANT_PEER_ID = "12D3KooWClaimant";
    claim.CLAIMANT_PROFILE_CID = "bafyclaimantprofile";
    claim.OBJECT_KIND = CLM.clmObjectKind.Satellite;
    claim.OBJECT_ID = "25544";
    claim.OBJECT_NAME = "ISS (ZARYA)";
    claim.ROLE = CLM.clmClaimRole.Operator;
    claim.STATEMENT = "We operate this vehicle under a national licence.";
    claim.EVIDENCE_URL = "https://example.org/licence.pdf";
    claim.CREATED_AT = 1788489425555n;
    claim.UPDATED_AT = 1788489425555n;
    claim.SIGNATURE = [1, 2, 3, 4];
    claim.COUNTERSIGNATURES = [
      countersignature({
        peerId: "12D3KooWWitness",
        profileCid: "bafywitnessprofile",
        signedAt: 1788489500000,
        signature: [9, 8, 7],
      }),
    ];

    const decoded = roundTrip(claim);
    assert.equal(decoded.CLAIM_ID, "12D3KooWClaimant:Satellite:25544");
    assert.equal(decoded.CLAIMANT_PEER_ID, "12D3KooWClaimant");
    assert.equal(decoded.OBJECT_KIND, CLM.clmObjectKind.Satellite);
    assert.equal(decoded.OBJECT_ID, "25544");
    assert.equal(decoded.ROLE, CLM.clmClaimRole.Operator);
    assert.equal(decoded.CREATED_AT, 1788489425555n);
    assert.deepEqual(Array.from(decoded.SIGNATURE), [1, 2, 3, 4]);
    assert.equal(decoded.COUNTERSIGNATURES.length, 1);
    assert.equal(decoded.COUNTERSIGNATURES[0].PEER_ID, "12D3KooWWitness");
    assert.equal(decoded.COUNTERSIGNATURES[0].SIGNED_AT, 1788489500000n);
    assert.deepEqual(Array.from(decoded.COUNTERSIGNATURES[0].SIGNATURE), [9, 8, 7]);
  });

  it("defaults to an unspecified kind and role, no countersignatures and not deleted", () => {
    const claim = new CLM.CLMT();
    claim.CLAIM_ID = "12D3KooWClaimant:Service:bafylisting";
    claim.CLAIMANT_PEER_ID = "12D3KooWClaimant";
    claim.OBJECT_ID = "bafylisting";

    const decoded = roundTrip(claim);
    assert.equal(decoded.OBJECT_KIND, CLM.clmObjectKind.Unspecified);
    assert.equal(decoded.ROLE, CLM.clmClaimRole.Unspecified);
    assert.equal(decoded.DELETED, false);
    assert.equal(decoded.COUNTERSIGNATURES.length, 0);
  });

  it("tombstones a claim with DELETED and a later UPDATED_AT", () => {
    const claim = new CLM.CLMT();
    claim.CLAIM_ID = "12D3KooWClaimant:Site:SITE-42";
    claim.CLAIMANT_PEER_ID = "12D3KooWClaimant";
    claim.OBJECT_KIND = CLM.clmObjectKind.Site;
    claim.OBJECT_ID = "SITE-42";
    claim.ROLE = CLM.clmClaimRole.Owner;
    claim.CREATED_AT = 1788489425555n;
    claim.UPDATED_AT = 1788489999999n;
    claim.DELETED = true;

    const decoded = roundTrip(claim);
    assert.equal(decoded.DELETED, true);
    assert.ok(decoded.UPDATED_AT > decoded.CREATED_AT);
  });

  it("appends CLM to the RecordType union without moving any existing ordinal", () => {
    const ordinals = JSON.parse(
      readFileSync(path.join(REPO_ROOT, "schema", "REC", "RECORDTYPE_ORDINALS.json"), "utf8")
    );
    assert.equal(ordinals.ordinals.QRP, 243);
    assert.equal(ordinals.ordinals.TCT, 244);
    assert.equal(ordinals.ordinals.WXF, 245);
    assert.equal(ordinals.ordinals.CLM, 246);
    assert.equal(ordinals.frozen_through, 246);
  });
});
