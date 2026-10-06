import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import * as flatbuffers from "flatbuffers";
import { generateKeyPair, publicKeyFromRaw } from "@libp2p/crypto/keys";
import { peerIdFromPublicKey, peerIdFromString } from "@libp2p/peer-id";
import * as ABA from "../lib/js/ABA/main.js";
import * as EPM from "../lib/js/EPM/main.js";
import { REC, RECT } from "../lib/js/REC/REC.js";
import { RecordT } from "../lib/js/REC/Record.js";
import { RecordType } from "../lib/js/REC/RecordType.js";
import { RecordTypeExtended } from "../lib/js/REC/RecordTypeExtended.js";

const hash = (bytes) => Array.from(createHash("sha256").update(Uint8Array.from(bytes)).digest());
function canonical(record) {
  const values = {
    ENTRY_ID: record.ENTRY_ID, NODE_PEER_ID: record.NODE_PEER_ID,
    PUBLIC_KEY: Array.from(record.PUBLIC_KEY), SIGNATURE_ALGORITHM: record.SIGNATURE_ALGORITHM,
    PROFILE_BYTES: Array.from(record.PROFILE_BYTES), PROFILE_SHA256: Array.from(record.PROFILE_SHA256),
    VISIBILITY: record.VISIBILITY, CREATED_AT: record.CREATED_AT.toString(),
    UPDATED_AT: record.UPDATED_AT.toString(), DELETED: record.DELETED,
    NOTE: record.NOTE ?? "", SIGNATURE: [],
  };
  return new TextEncoder().encode(JSON.stringify(Object.fromEntries(
    Object.keys(values).sort().map((key) => [key, values[key]]),
  )));
}
function encodeProfile(name) {
  const profile = new EPM.EPMT();
  profile.LEGAL_NAME = name;
  const builder = new flatbuffers.Builder(512);
  EPM.EPM.finishSizePrefixedEPMBuffer(builder, profile.pack(builder));
  return Array.from(builder.asUint8Array());
}
async function sign(record, key) {
  record.SIGNATURE = Array.from(await key.sign(canonical(record)));
  const builder = new flatbuffers.Builder(1024);
  ABA.ABA.finishSizePrefixedABABuffer(builder, record.pack(builder));
  const bytes = builder.asUint8Array().slice();
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), "$ABA");
  return ABA.ABA.getSizePrefixedRootAsABA(new flatbuffers.ByteBuffer(bytes)).unpack();
}
async function verify(record) {
  assert.equal(record.SIGNATURE_ALGORITHM, "secp256k1");
  assert.equal(record.PUBLIC_KEY.length, 33);
  const key = publicKeyFromRaw(Uint8Array.from(record.PUBLIC_KEY));
  assert.equal(peerIdFromPublicKey(key).toString(), record.NODE_PEER_ID);
  const peerKey = peerIdFromString(record.NODE_PEER_ID).publicKey;
  assert.ok(peerKey, "secp256k1 Peer ID supplies the verification key");
  assert.deepEqual(Array.from(peerKey.raw), Array.from(record.PUBLIC_KEY));
  assert.deepEqual(Array.from(record.PROFILE_SHA256), hash(record.PROFILE_BYTES));
  assert.ok(await peerKey.verify(canonical(record), Uint8Array.from(record.SIGNATURE)));
  assert.ok(record.UPDATED_AT >= record.CREATED_AT);
  return EPM.EPM.getSizePrefixedRootAsEPM(
    new flatbuffers.ByteBuffer(Uint8Array.from(record.PROFILE_BYTES)),
  ).unpack();
}

describe("ABA signed contact admission through generated bindings", function () {
  it("verifies from the peer ID and rejects substituted profile, digest, identity and signed flags", async () => {
    const key = await generateKeyPair("secp256k1");
    const record = new ABA.ABAT();
    record.ENTRY_ID = "contact-1";
    record.NODE_PEER_ID = peerIdFromPublicKey(key.publicKey).toString();
    record.PUBLIC_KEY = Array.from(key.publicKey.raw);
    record.SIGNATURE_ALGORITHM = "secp256k1";
    record.PROFILE_BYTES = encodeProfile("Attested Contact");
    record.PROFILE_SHA256 = hash(record.PROFILE_BYTES);
    record.CREATED_AT = 1791244800000n;
    record.UPDATED_AT = record.CREATED_AT;
    const decoded = await sign(record, key);
    assert.equal(decoded.VISIBILITY, ABA.abaDisclosure.PRIVATE);
    assert.equal((await verify(decoded)).LEGAL_NAME, "Attested Contact");
    assert.deepEqual(Array.from(decoded.PROFILE_BYTES), record.PROFILE_BYTES);

    // ABA is the first wide record after the frozen 255-member union.
    // Exercise the real REC transport and then verify the enclosed ABA.
    const abaBuilder = new flatbuffers.Builder(1024);
    ABA.ABA.finishSizePrefixedABABuffer(abaBuilder, decoded.pack(abaBuilder));
    const wrapper = new RecordT();
    wrapper.standard = "ABA";
    wrapper.EXTENDED_TYPE = RecordTypeExtended.ABA;
    wrapper.EXTENDED_VALUE = Array.from(abaBuilder.asUint8Array());
    const envelope = new RECT();
    envelope.RECORDS = [wrapper];
    const envelopeBuilder = new flatbuffers.Builder(2048);
    REC.finishSizePrefixedRECBuffer(envelopeBuilder, envelope.pack(envelopeBuilder));
    const transported = REC.getSizePrefixedRootAsREC(
      new flatbuffers.ByteBuffer(envelopeBuilder.asUint8Array()),
    ).unpack().RECORDS[0];
    assert.equal(transported.standard, "ABA");
    assert.equal(transported.value_type, RecordType.NONE);
    assert.equal(transported.EXTENDED_TYPE, 256);
    const enclosed = ABA.ABA.getSizePrefixedRootAsABA(
      new flatbuffers.ByteBuffer(Uint8Array.from(transported.EXTENDED_VALUE)),
    ).unpack();
    assert.equal((await verify(enclosed)).LEGAL_NAME, "Attested Contact");

    const changed = (overrides) => Object.assign(new ABA.ABAT(), decoded, overrides);
    await assert.rejects(verify(changed({ PROFILE_BYTES: encodeProfile("Swapped Contact") })));
    const wrongDigest = changed({ PROFILE_SHA256: Array(32).fill(0) });
    await assert.rejects(verify(await sign(wrongDigest, key)));
    const stranger = await generateKeyPair("secp256k1");
    await assert.rejects(verify(changed({ NODE_PEER_ID: peerIdFromPublicKey(stranger.publicKey).toString() })));
    await assert.rejects(verify(changed({ PUBLIC_KEY: Array.from(stranger.publicKey.raw) })));
    await assert.rejects(verify(changed({ VISIBILITY: ABA.abaDisclosure.PUBLIC })));
    await assert.rejects(verify(changed({ DELETED: true })));
    await assert.rejects(verify(changed({ NOTE: "Unsigned replacement" })));
    await assert.rejects(verify(changed({ SIGNATURE: [] })));

    const update = await sign(changed({ VISIBILITY: ABA.abaDisclosure.PUBLIC,
      UPDATED_AT: decoded.UPDATED_AT + 1n, NOTE: "Operator approved" }), key);
    const tombstone = await sign(Object.assign(new ABA.ABAT(), update, {
      UPDATED_AT: update.UPDATED_AT + 1n, DELETED: true,
    }), key);
    // Receive out of order, including replay after revocation. Retain the
    // latest signed record; a tombstone suppresses the projected contact.
    const latest = new Map();
    for (const revision of [update, tombstone, decoded, update]) {
      await verify(revision);
      const id = `${revision.NODE_PEER_ID}:${revision.ENTRY_ID}`;
      if (!latest.has(id) || latest.get(id).UPDATED_AT < revision.UPDATED_AT) latest.set(id, revision);
    }
    assert.equal(latest.size, 1);
    assert.equal([...latest.values()].filter((entry) => !entry.DELETED).length, 0);
    const retained = [...latest.values()][0];
    assert.equal(retained.CREATED_AT, decoded.CREATED_AT);
    assert.deepEqual(Array.from(retained.PROFILE_BYTES), record.PROFILE_BYTES);
    assert.equal((await verify(retained)).LEGAL_NAME, "Attested Contact");
  });
});
