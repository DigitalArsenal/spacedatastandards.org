import * as flatbuffers from 'flatbuffers';
import { licensingProofMessageType } from './licensingProofMessageType.js';
/**
 * Licensing proof message
 */
export declare class LPF implements flatbuffers.IUnpackableObject<LPFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LPF;
    static getRootAsLPF(bb: flatbuffers.ByteBuffer, obj?: LPF): LPF;
    static getSizePrefixedRootAsLPF(bb: flatbuffers.ByteBuffer, obj?: LPF): LPF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Message type
     */
    MESSAGE_TYPE(): licensingProofMessageType;
    /**
     * Unique request identifier
     */
    REQUEST_ID(): string;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Canonical module identifier
     */
    MODULE_ID(): string;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional requested module version
     */
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requester peer identifier
     */
    REQUESTER_PEER_ID(): string | null;
    REQUESTER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requester account identity or wallet xpub
     */
    REQUESTER_XPUB(): string | null;
    REQUESTER_XPUB(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requested domain proved for policy evaluation
     */
    REQUESTED_DOMAIN(): string | null;
    REQUESTED_DOMAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requested timeout in milliseconds
     */
    REQUESTED_TIMEOUT_MS(): bigint;
    /**
     * Requester ephemeral X25519 public key
     */
    REQUESTER_EPHEMERAL_PUBKEY(index: number): number | null;
    requesterEphemeralPubkeyLength(): number;
    requesterEphemeralPubkeyArray(): Uint8Array | null;
    /**
     * Provider-issued challenge nonce being proved
     */
    CHALLENGE_NONCE(index: number): number | null;
    challengeNonceLength(): number;
    challengeNonceArray(): Uint8Array | null;
    /**
     * Challenge expiration time being acknowledged
     */
    CHALLENGE_EXPIRES_AT(): bigint;
    /**
     * Provider peer identifier that issued the challenge
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detached requester signature over the challenge payload
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    /**
     * Requester signing public key
     */
    SIGNING_PUBKEY(index: number): number | null;
    signingPubkeyLength(): number;
    signingPubkeyArray(): Uint8Array | null;
    /**
     * Proof timestamp in milliseconds since epoch
     */
    TIMESTAMP_MS(): bigint;
    /**
     * Structured rejection code
     */
    REJECTION_CODE(): string | null;
    REJECTION_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Structured rejection message
     */
    REJECTION_MESSAGE(): string | null;
    REJECTION_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startLPF(builder: flatbuffers.Builder): void;
    static addMessageType(builder: flatbuffers.Builder, MESSAGE_TYPE: licensingProofMessageType): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addRequesterPeerId(builder: flatbuffers.Builder, REQUESTER_PEER_IDOffset: flatbuffers.Offset): void;
    static addRequesterXpub(builder: flatbuffers.Builder, REQUESTER_XPUBOffset: flatbuffers.Offset): void;
    static addRequestedDomain(builder: flatbuffers.Builder, REQUESTED_DOMAINOffset: flatbuffers.Offset): void;
    static addRequestedTimeoutMs(builder: flatbuffers.Builder, REQUESTED_TIMEOUT_MS: bigint): void;
    static addRequesterEphemeralPubkey(builder: flatbuffers.Builder, REQUESTER_EPHEMERAL_PUBKEYOffset: flatbuffers.Offset): void;
    static createRequesterEphemeralPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRequesterEphemeralPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChallengeNonce(builder: flatbuffers.Builder, CHALLENGE_NONCEOffset: flatbuffers.Offset): void;
    static createChallengeNonceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startChallengeNonceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChallengeExpiresAt(builder: flatbuffers.Builder, CHALLENGE_EXPIRES_AT: bigint): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigningPubkey(builder: flatbuffers.Builder, SIGNING_PUBKEYOffset: flatbuffers.Offset): void;
    static createSigningPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigningPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimestampMs(builder: flatbuffers.Builder, TIMESTAMP_MS: bigint): void;
    static addRejectionCode(builder: flatbuffers.Builder, REJECTION_CODEOffset: flatbuffers.Offset): void;
    static addRejectionMessage(builder: flatbuffers.Builder, REJECTION_MESSAGEOffset: flatbuffers.Offset): void;
    static endLPF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLPFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLPFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLPF(builder: flatbuffers.Builder, MESSAGE_TYPE: licensingProofMessageType, REQUEST_IDOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, REQUESTER_PEER_IDOffset: flatbuffers.Offset, REQUESTER_XPUBOffset: flatbuffers.Offset, REQUESTED_DOMAINOffset: flatbuffers.Offset, REQUESTED_TIMEOUT_MS: bigint, REQUESTER_EPHEMERAL_PUBKEYOffset: flatbuffers.Offset, CHALLENGE_NONCEOffset: flatbuffers.Offset, CHALLENGE_EXPIRES_AT: bigint, PROVIDER_PEER_IDOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, SIGNING_PUBKEYOffset: flatbuffers.Offset, TIMESTAMP_MS: bigint, REJECTION_CODEOffset: flatbuffers.Offset, REJECTION_MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LPFT;
    unpackTo(_o: LPFT): void;
}
export declare class LPFT implements flatbuffers.IGeneratedObject {
    MESSAGE_TYPE: licensingProofMessageType;
    REQUEST_ID: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    REQUESTER_PEER_ID: string | Uint8Array | null;
    REQUESTER_XPUB: string | Uint8Array | null;
    REQUESTED_DOMAIN: string | Uint8Array | null;
    REQUESTED_TIMEOUT_MS: bigint;
    REQUESTER_EPHEMERAL_PUBKEY: (number)[];
    CHALLENGE_NONCE: (number)[];
    CHALLENGE_EXPIRES_AT: bigint;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    SIGNING_PUBKEY: (number)[];
    TIMESTAMP_MS: bigint;
    REJECTION_CODE: string | Uint8Array | null;
    REJECTION_MESSAGE: string | Uint8Array | null;
    constructor(MESSAGE_TYPE?: licensingProofMessageType, REQUEST_ID?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, REQUESTER_PEER_ID?: string | Uint8Array | null, REQUESTER_XPUB?: string | Uint8Array | null, REQUESTED_DOMAIN?: string | Uint8Array | null, REQUESTED_TIMEOUT_MS?: bigint, REQUESTER_EPHEMERAL_PUBKEY?: (number)[], CHALLENGE_NONCE?: (number)[], CHALLENGE_EXPIRES_AT?: bigint, PROVIDER_PEER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[], SIGNING_PUBKEY?: (number)[], TIMESTAMP_MS?: bigint, REJECTION_CODE?: string | Uint8Array | null, REJECTION_MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LPF.d.ts.map