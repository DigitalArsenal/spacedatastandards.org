import * as flatbuffers from 'flatbuffers';
import { ENC, ENCT } from './ENC.js';
import { rpcDirection } from './rpcDirection.js';
/**
 * Sealed Remote Procedure Call envelope (outer, plaintext, signed).
 */
export declare class RPC implements flatbuffers.IUnpackableObject<RPCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RPC;
    static getRootAsRPC(bb: flatbuffers.ByteBuffer, obj?: RPC): RPC;
    static getSizePrefixedRootAsRPC(bb: flatbuffers.ByteBuffer, obj?: RPC): RPC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Envelope version. This document defines version 1.
     */
    VERSION(): number;
    /**
     * Request or response.
     */
    DIRECTION(): rpcDirection;
    /**
     * Encryption header for CIPHERTEXT. CONTEXT is "RPC/1|request" or
     * "RPC/1|response" matching DIRECTION.
     */
    ENCRYPTION(obj?: ENC): ENC | null;
    /**
     * Optional session identifier established by a prior sign-in.
     */
    SESSION_ID(): string | null;
    SESSION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional identifier of the sender's key (routing hint only; the binding
     * identity is SIGNER_PUBLIC_KEY checked against RPCBody.SIGNER_KEY_ID).
     */
    SENDER_KEY_ID(index: number): number | null;
    senderKeyIdLength(): number;
    senderKeyIdArray(): Uint8Array | null;
    /**
     * Sender clock at signing, milliseconds since the Unix epoch (UTC).
     */
    TIMESTAMP(): bigint;
    /**
     * Random 16-byte nonce, unique per envelope.
     */
    NONCE(index: number): number | null;
    nonceLength(): number;
    nonceArray(): Uint8Array | null;
    /**
     * Encrypted size-prefixed RPCBody.
     */
    CIPHERTEXT(index: number): number | null;
    ciphertextLength(): number;
    ciphertextArray(): Uint8Array;
    /**
     * Ed25519 public key (32 bytes) that verifies both signatures.
     */
    SIGNER_PUBLIC_KEY(index: number): number | null;
    signerPublicKeyLength(): number;
    signerPublicKeyArray(): Uint8Array;
    /**
     * Signature algorithm name. Version 1 defines "Ed25519".
     */
    SIGNATURE_TYPE(): string | null;
    SIGNATURE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature over the size-prefixed FlatBuffer with both 64-byte
     * signature payloads zeroed while preserving their vectors and offsets.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array;
    /**
     * Ed25519 signature over canonical JSON with IDL field order and
     * capitalization, no insignificant whitespace, and both signature fields
     * omitted.
     */
    CANONICAL_JSON_SIGNATURE(index: number): number | null;
    canonicalJsonSignatureLength(): number;
    canonicalJsonSignatureArray(): Uint8Array;
    static startRPC(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: rpcDirection): void;
    static addEncryption(builder: flatbuffers.Builder, ENCRYPTIONOffset: flatbuffers.Offset): void;
    static addSessionId(builder: flatbuffers.Builder, SESSION_IDOffset: flatbuffers.Offset): void;
    static addSenderKeyId(builder: flatbuffers.Builder, SENDER_KEY_IDOffset: flatbuffers.Offset): void;
    static createSenderKeyIdVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSenderKeyIdVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimestamp(builder: flatbuffers.Builder, TIMESTAMP: bigint): void;
    static addNonce(builder: flatbuffers.Builder, NONCEOffset: flatbuffers.Offset): void;
    static createNonceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNonceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCiphertext(builder: flatbuffers.Builder, CIPHERTEXTOffset: flatbuffers.Offset): void;
    static createCiphertextVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCiphertextVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignerPublicKey(builder: flatbuffers.Builder, SIGNER_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static createSignerPublicKeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignerPublicKeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignatureType(builder: flatbuffers.Builder, SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRPC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRPCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRPCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): RPCT;
    unpackTo(_o: RPCT): void;
}
export declare class RPCT implements flatbuffers.IGeneratedObject {
    VERSION: number;
    DIRECTION: rpcDirection;
    ENCRYPTION: ENCT | null;
    SESSION_ID: string | Uint8Array | null;
    SENDER_KEY_ID: (number)[];
    TIMESTAMP: bigint;
    NONCE: (number)[];
    CIPHERTEXT: (number)[];
    SIGNER_PUBLIC_KEY: (number)[];
    SIGNATURE_TYPE: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(VERSION?: number, DIRECTION?: rpcDirection, ENCRYPTION?: ENCT | null, SESSION_ID?: string | Uint8Array | null, SENDER_KEY_ID?: (number)[], TIMESTAMP?: bigint, NONCE?: (number)[], CIPHERTEXT?: (number)[], SIGNER_PUBLIC_KEY?: (number)[], SIGNATURE_TYPE?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RPC.d.ts.map