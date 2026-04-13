import * as flatbuffers from 'flatbuffers';
import { KRF, KRFT } from './KRF.js';
import { licensingConfigMessageType } from './licensingConfigMessageType.js';
import { licensingConfigRole } from './licensingConfigRole.js';
/**
 * Licensing Configuration Frame
 */
export declare class LCF implements flatbuffers.IUnpackableObject<LCFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LCF;
    static getRootAsLCF(bb: flatbuffers.ByteBuffer, obj?: LCF): LCF;
    static getSizePrefixedRootAsLCF(bb: flatbuffers.ByteBuffer, obj?: LCF): LCF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Distinguishes configuration inputs from runtime status outputs.
     */
    MESSAGE_TYPE(): licensingConfigMessageType;
    /**
     * Indicates whether the configuration/status applies to server/provider or requester/client behavior.
     */
    ROLE(): licensingConfigRole;
    /**
     * Peer ID advertised by the licensing provider.
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Host-managed long-lived signing key used for grant signatures.
     */
    PROVIDER_SIGNING_KEY(obj?: KRF): KRF | null;
    /**
     * Host-managed wrapping key used to protect per-publication content keys for requesters.
     */
    PROVIDER_WRAPPING_KEY(obj?: KRF): KRF | null;
    /**
     * Optional requester signing key reference for requester-hosted flows.
     */
    REQUESTER_SIGNING_KEY(obj?: KRF): KRF | null;
    /**
     * Logical active publication/grant key version.
     */
    ACTIVE_KEY_VERSION(): number;
    /**
     * Runtime expiry in unix milliseconds, or 0 if unbounded.
     */
    EXPIRES_AT(): bigint;
    /**
     * Maximum accepted requester/provider clock skew in milliseconds.
     */
    MAX_CLOCK_SKEW_MS(): bigint;
    /**
     * Challenge time-to-live in milliseconds.
     */
    CHALLENGE_TTL_MS(): bigint;
    /**
     * Optional capability token bytes returned with successful grants.
     */
    CAPABILITY_TOKEN(index: number): number | null;
    capabilityTokenLength(): number;
    capabilityTokenArray(): Uint8Array | null;
    /**
     * Whether the runtime has been initialized successfully.
     */
    INITIALIZED(): boolean;
    /**
     * Whether the runtime needs issuer key rotation or refreshed configuration.
     */
    NEEDS_ROTATION(): boolean;
    /**
     * Optional machine-readable status code for status/error responses.
     */
    STATUS_CODE(): string | null;
    STATUS_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional human-readable status or error message.
     */
    STATUS_MESSAGE(): string | null;
    STATUS_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startLCF(builder: flatbuffers.Builder): void;
    static addMessageType(builder: flatbuffers.Builder, MESSAGE_TYPE: licensingConfigMessageType): void;
    static addRole(builder: flatbuffers.Builder, ROLE: licensingConfigRole): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderSigningKey(builder: flatbuffers.Builder, PROVIDER_SIGNING_KEYOffset: flatbuffers.Offset): void;
    static addProviderWrappingKey(builder: flatbuffers.Builder, PROVIDER_WRAPPING_KEYOffset: flatbuffers.Offset): void;
    static addRequesterSigningKey(builder: flatbuffers.Builder, REQUESTER_SIGNING_KEYOffset: flatbuffers.Offset): void;
    static addActiveKeyVersion(builder: flatbuffers.Builder, ACTIVE_KEY_VERSION: number): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addMaxClockSkewMs(builder: flatbuffers.Builder, MAX_CLOCK_SKEW_MS: bigint): void;
    static addChallengeTtlMs(builder: flatbuffers.Builder, CHALLENGE_TTL_MS: bigint): void;
    static addCapabilityToken(builder: flatbuffers.Builder, CAPABILITY_TOKENOffset: flatbuffers.Offset): void;
    static createCapabilityTokenVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCapabilityTokenVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInitialized(builder: flatbuffers.Builder, INITIALIZED: boolean): void;
    static addNeedsRotation(builder: flatbuffers.Builder, NEEDS_ROTATION: boolean): void;
    static addStatusCode(builder: flatbuffers.Builder, STATUS_CODEOffset: flatbuffers.Offset): void;
    static addStatusMessage(builder: flatbuffers.Builder, STATUS_MESSAGEOffset: flatbuffers.Offset): void;
    static endLCF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): LCFT;
    unpackTo(_o: LCFT): void;
}
export declare class LCFT implements flatbuffers.IGeneratedObject {
    MESSAGE_TYPE: licensingConfigMessageType;
    ROLE: licensingConfigRole;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_SIGNING_KEY: KRFT | null;
    PROVIDER_WRAPPING_KEY: KRFT | null;
    REQUESTER_SIGNING_KEY: KRFT | null;
    ACTIVE_KEY_VERSION: number;
    EXPIRES_AT: bigint;
    MAX_CLOCK_SKEW_MS: bigint;
    CHALLENGE_TTL_MS: bigint;
    CAPABILITY_TOKEN: (number)[];
    INITIALIZED: boolean;
    NEEDS_ROTATION: boolean;
    STATUS_CODE: string | Uint8Array | null;
    STATUS_MESSAGE: string | Uint8Array | null;
    constructor(MESSAGE_TYPE?: licensingConfigMessageType, ROLE?: licensingConfigRole, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_SIGNING_KEY?: KRFT | null, PROVIDER_WRAPPING_KEY?: KRFT | null, REQUESTER_SIGNING_KEY?: KRFT | null, ACTIVE_KEY_VERSION?: number, EXPIRES_AT?: bigint, MAX_CLOCK_SKEW_MS?: bigint, CHALLENGE_TTL_MS?: bigint, CAPABILITY_TOKEN?: (number)[], INITIALIZED?: boolean, NEEDS_ROTATION?: boolean, STATUS_CODE?: string | Uint8Array | null, STATUS_MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LCF.d.ts.map