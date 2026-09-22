import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

describe("RPC sealed envelope + KMF Secp256k1Public", () => {
  it("round-trips a size-prefixed RPC envelope carrying an RPCBody", async () => {
    const flatbuffers = await import("flatbuffers");
    const { RPC } = await import("../lib/js/RPC/RPC.js");
    const { RPCBody } = await import("../lib/js/RPC/RPCBody.js");
    const { rpcDirection } = await import("../lib/js/RPC/rpcDirection.js");
    const { ENC } = await import("../lib/js/RPC/ENC.js");
    const { KeyExchange } = await import("../lib/js/RPC/KeyExchange.js");

    const inner = new flatbuffers.Builder(256);
    const method = inner.createString("POST");
    const route = inner.createString("/api/admin/peers");
    const body = RPCBody.createBodyVector(inner, [1, 2, 3]);
    const signerKeyId = RPCBody.createSignerKeyIdVector(inner, new Uint8Array(32).fill(7));
    RPCBody.startRPCBody(inner);
    RPCBody.addMethod(inner, method);
    RPCBody.addRoute(inner, route);
    RPCBody.addBody(inner, body);
    RPCBody.addSignerKeyId(inner, signerKeyId);
    inner.finishSizePrefixed(RPCBody.endRPCBody(inner));
    const plaintext = inner.asUint8Array();

    const b = new flatbuffers.Builder(512);
    const eph = ENC.createEphemeralPublicKeyVector(b, new Uint8Array(33).fill(2));
    const nonceStart = ENC.createNonceStartVector(b, new Uint8Array(12));
    const context = b.createString("RPC/1|request");
    ENC.startENC(b);
    ENC.addKeyExchange(b, KeyExchange.Secp256k1);
    ENC.addEphemeralPublicKey(b, eph);
    ENC.addNonceStart(b, nonceStart);
    ENC.addContext(b, context);
    const enc = ENC.endENC(b);
    const nonce = RPC.createNonceVector(b, new Uint8Array(16).fill(9));
    const ct = RPC.createCiphertextVector(b, plaintext);
    const pk = RPC.createSignerPublicKeyVector(b, new Uint8Array(32).fill(5));
    const sig = RPC.createSignatureVector(b, new Uint8Array(64));
    const jsig = RPC.createCanonicalJsonSignatureVector(b, new Uint8Array(64));
    RPC.startRPC(b);
    RPC.addDirection(b, rpcDirection.Request);
    RPC.addEncryption(b, enc);
    RPC.addTimestamp(b, 1790000000000n);
    RPC.addNonce(b, nonce);
    RPC.addCiphertext(b, ct);
    RPC.addSignerPublicKey(b, pk);
    RPC.addSignature(b, sig);
    RPC.addCanonicalJsonSignature(b, jsig);
    RPC.finishSizePrefixedRPCBuffer(b, RPC.endRPC(b));

    const bytes = b.asUint8Array();
    assert.equal(String.fromCharCode(...bytes.slice(8, 12)), "$RPC");
    const env = RPC.getSizePrefixedRootAsRPC(new flatbuffers.ByteBuffer(bytes));
    assert.equal(env.VERSION(), 1);
    assert.equal(env.DIRECTION(), rpcDirection.Request);
    assert.equal(env.ENCRYPTION().CONTEXT(), "RPC/1|request");
    assert.equal(env.TIMESTAMP(), 1790000000000n);
    assert.equal(env.nonceLength(), 16);

    const opened = RPCBody.getSizePrefixedRootAsRPCBody(
      new flatbuffers.ByteBuffer(env.ciphertextArray()),
    );
    assert.equal(opened.METHOD(), "POST");
    assert.equal(opened.ROUTE(), "/api/admin/peers");
    assert.equal(opened.signerKeyIdLength(), 32);
  });

  it("registers RPC in REC and appends KMF Secp256k1Public without renumbering", async () => {
    const ordinals = JSON.parse(
      await fs.readFile(path.join(repoRoot, "schema/REC/RECORDTYPE_ORDINALS.json"), "utf8"),
    );
    assert.equal(ordinals.ordinals.RPC, 249);
    const { keyMaterialAlgorithm } = await import("../lib/js/KMF/keyMaterialAlgorithm.js");
    assert.equal(keyMaterialAlgorithm.Opaque, 6);
    assert.equal(keyMaterialAlgorithm.Secp256k1Public, 7);
  });
});
