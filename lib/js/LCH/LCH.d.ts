import * as flatbuffers from 'flatbuffers';
import { licensingChallengeMessageType } from './licensingChallengeMessageType.js';
import { licensingChallengeRole } from './licensingChallengeRole.js';
/**
 * Licensing challenge message
 */
export declare class LCH implements flatbuffers.IUnpackableObject<LCHT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LCH;
    static getRootAsLCH(bb: flatbuffers.ByteBuffer, obj?: LCH): LCH;
    static getSizePrefixedRootAsLCH(bb: flatbuffers.ByteBuffer, obj?: LCH): LCH;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Message type
     */
    MESSAGE_TYPE(): licensingChallengeMessageType;
    /**
     * Sender role
     */
    ROLE(): licensingChallengeRole;
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
     * Requester Ed25519 signing public key
     */
    REQUESTER_SIGNING_PUBKEY(index: number): number | null;
    requesterSigningPubkeyLength(): number;
    requesterSigningPubkeyArray(): Uint8Array | null;
    /**
     * Requester ephemeral X25519 public key
     */
    REQUESTER_EPHEMERAL_PUBKEY(index: number): number | null;
    requesterEphemeralPubkeyLength(): number;
    requesterEphemeralPubkeyArray(): Uint8Array | null;
    /**
     * Requested domain for policy evaluation
     */
    REQUESTED_DOMAIN(): string | null;
    REQUESTED_DOMAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requested timeout in milliseconds
     */
    REQUESTED_TIMEOUT_MS(): bigint;
    /**
     * Request timestamp in milliseconds since epoch
     */
    REQUESTED_AT(): bigint;
    /**
     * Provider-issued challenge nonce
     */
    CHALLENGE_NONCE(index: number): number | null;
    challengeNonceLength(): number;
    challengeNonceArray(): Uint8Array | null;
    /**
     * Challenge expiration time in milliseconds since epoch
     */
    EXPIRES_AT(): bigint;
    /**
     * Provider peer identifier
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Structured error code
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Structured error message
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startLCH(builder: flatbuffers.Builder): void;
    static addMessageType(builder: flatbuffers.Builder, MESSAGE_TYPE: licensingChallengeMessageType): void;
    static addRole(builder: flatbuffers.Builder, ROLE: licensingChallengeRole): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addRequesterPeerId(builder: flatbuffers.Builder, REQUESTER_PEER_IDOffset: flatbuffers.Offset): void;
    static addRequesterXpub(builder: flatbuffers.Builder, REQUESTER_XPUBOffset: flatbuffers.Offset): void;
    static addRequesterSigningPubkey(builder: flatbuffers.Builder, REQUESTER_SIGNING_PUBKEYOffset: flatbuffers.Offset): void;
    static createRequesterSigningPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRequesterSigningPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRequesterEphemeralPubkey(builder: flatbuffers.Builder, REQUESTER_EPHEMERAL_PUBKEYOffset: flatbuffers.Offset): void;
    static createRequesterEphemeralPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRequesterEphemeralPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRequestedDomain(builder: flatbuffers.Builder, REQUESTED_DOMAINOffset: flatbuffers.Offset): void;
    static addRequestedTimeoutMs(builder: flatbuffers.Builder, REQUESTED_TIMEOUT_MS: bigint): void;
    static addRequestedAt(builder: flatbuffers.Builder, REQUESTED_AT: bigint): void;
    static addChallengeNonce(builder: flatbuffers.Builder, CHALLENGE_NONCEOffset: flatbuffers.Offset): void;
    static createChallengeNonceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startChallengeNonceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static endLCH(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLCHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLCHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLCH(builder: flatbuffers.Builder, MESSAGE_TYPE: licensingChallengeMessageType, ROLE: licensingChallengeRole, REQUEST_IDOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, REQUESTER_PEER_IDOffset: flatbuffers.Offset, REQUESTER_XPUBOffset: flatbuffers.Offset, REQUESTER_SIGNING_PUBKEYOffset: flatbuffers.Offset, REQUESTER_EPHEMERAL_PUBKEYOffset: flatbuffers.Offset, REQUESTED_DOMAINOffset: flatbuffers.Offset, REQUESTED_TIMEOUT_MS: bigint, REQUESTED_AT: bigint, CHALLENGE_NONCEOffset: flatbuffers.Offset, EXPIRES_AT: bigint, PROVIDER_PEER_IDOffset: flatbuffers.Offset, ERROR_CODEOffset: flatbuffers.Offset, ERROR_MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LCHT;
    unpackTo(_o: LCHT): void;
}
export declare class LCHT implements flatbuffers.IGeneratedObject {
    MESSAGE_TYPE: licensingChallengeMessageType;
    ROLE: licensingChallengeRole;
    REQUEST_ID: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    REQUESTER_PEER_ID: string | Uint8Array | null;
    REQUESTER_XPUB: string | Uint8Array | null;
    REQUESTER_SIGNING_PUBKEY: (number)[];
    REQUESTER_EPHEMERAL_PUBKEY: (number)[];
    REQUESTED_DOMAIN: string | Uint8Array | null;
    REQUESTED_TIMEOUT_MS: bigint;
    REQUESTED_AT: bigint;
    CHALLENGE_NONCE: (number)[];
    EXPIRES_AT: bigint;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    constructor(MESSAGE_TYPE?: licensingChallengeMessageType, ROLE?: licensingChallengeRole, REQUEST_ID?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, REQUESTER_PEER_ID?: string | Uint8Array | null, REQUESTER_XPUB?: string | Uint8Array | null, REQUESTER_SIGNING_PUBKEY?: (number)[], REQUESTER_EPHEMERAL_PUBKEY?: (number)[], REQUESTED_DOMAIN?: string | Uint8Array | null, REQUESTED_TIMEOUT_MS?: bigint, REQUESTED_AT?: bigint, CHALLENGE_NONCE?: (number)[], EXPIRES_AT?: bigint, PROVIDER_PEER_ID?: string | Uint8Array | null, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LCH.d.ts.map