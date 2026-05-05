import * as flatbuffers from 'flatbuffers';
import { licensingWrappedKeyAlgorithm } from './licensingWrappedKeyAlgorithm.js';
/**
 * Wrapped module content key
 */
export declare class LWK implements flatbuffers.IUnpackableObject<LWKT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LWK;
    static getRootAsLWK(bb: flatbuffers.ByteBuffer, obj?: LWK): LWK;
    static getSizePrefixedRootAsLWK(bb: flatbuffers.ByteBuffer, obj?: LWK): LWK;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
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
     * Optional module version
     */
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider-local content key identifier
     */
    CONTENT_KEY_ID(): string | null;
    CONTENT_KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recipient key identifier or fingerprint
     */
    RECIPIENT_KEY_ID(): string | null;
    RECIPIENT_KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Wrapped-key algorithm
     */
    ALGORITHM(): licensingWrappedKeyAlgorithm;
    /**
     * Requester ephemeral X25519 public key
     */
    REQUESTER_EPHEMERAL_PUBKEY(index: number): number | null;
    requesterEphemeralPubkeyLength(): number;
    requesterEphemeralPubkeyArray(): Uint8Array | null;
    /**
     * Provider ephemeral X25519 public key
     */
    PROVIDER_EPHEMERAL_PUBKEY(index: number): number | null;
    providerEphemeralPubkeyLength(): number;
    providerEphemeralPubkeyArray(): Uint8Array | null;
    /**
     * HKDF salt
     */
    HKDF_SALT(index: number): number | null;
    hkdfSaltLength(): number;
    hkdfSaltArray(): Uint8Array | null;
    /**
     * AES-GCM IV
     */
    IV(index: number): number | null;
    ivLength(): number;
    ivArray(): Uint8Array | null;
    /**
     * Wrapped key ciphertext
     */
    CIPHERTEXT(index: number): number | null;
    ciphertextLength(): number;
    ciphertextArray(): Uint8Array | null;
    /**
     * AES-GCM authentication tag
     */
    TAG(index: number): number | null;
    tagLength(): number;
    tagArray(): Uint8Array | null;
    /**
     * Envelope expiration time in milliseconds since epoch
     */
    EXPIRES_AT(): bigint;
    static startLWK(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addContentKeyId(builder: flatbuffers.Builder, CONTENT_KEY_IDOffset: flatbuffers.Offset): void;
    static addRecipientKeyId(builder: flatbuffers.Builder, RECIPIENT_KEY_IDOffset: flatbuffers.Offset): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: licensingWrappedKeyAlgorithm): void;
    static addRequesterEphemeralPubkey(builder: flatbuffers.Builder, REQUESTER_EPHEMERAL_PUBKEYOffset: flatbuffers.Offset): void;
    static createRequesterEphemeralPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRequesterEphemeralPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProviderEphemeralPubkey(builder: flatbuffers.Builder, PROVIDER_EPHEMERAL_PUBKEYOffset: flatbuffers.Offset): void;
    static createProviderEphemeralPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderEphemeralPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHkdfSalt(builder: flatbuffers.Builder, HKDF_SALTOffset: flatbuffers.Offset): void;
    static createHkdfSaltVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startHkdfSaltVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIv(builder: flatbuffers.Builder, IVOffset: flatbuffers.Offset): void;
    static createIvVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIvVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCiphertext(builder: flatbuffers.Builder, CIPHERTEXTOffset: flatbuffers.Offset): void;
    static createCiphertextVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCiphertextVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTag(builder: flatbuffers.Builder, TAGOffset: flatbuffers.Offset): void;
    static createTagVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTagVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static endLWK(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLWKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLWKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLWK(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, CONTENT_KEY_IDOffset: flatbuffers.Offset, RECIPIENT_KEY_IDOffset: flatbuffers.Offset, ALGORITHM: licensingWrappedKeyAlgorithm, REQUESTER_EPHEMERAL_PUBKEYOffset: flatbuffers.Offset, PROVIDER_EPHEMERAL_PUBKEYOffset: flatbuffers.Offset, HKDF_SALTOffset: flatbuffers.Offset, IVOffset: flatbuffers.Offset, CIPHERTEXTOffset: flatbuffers.Offset, TAGOffset: flatbuffers.Offset, EXPIRES_AT: bigint): flatbuffers.Offset;
    unpack(): LWKT;
    unpackTo(_o: LWKT): void;
}
export declare class LWKT implements flatbuffers.IGeneratedObject {
    REQUEST_ID: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    CONTENT_KEY_ID: string | Uint8Array | null;
    RECIPIENT_KEY_ID: string | Uint8Array | null;
    ALGORITHM: licensingWrappedKeyAlgorithm;
    REQUESTER_EPHEMERAL_PUBKEY: (number)[];
    PROVIDER_EPHEMERAL_PUBKEY: (number)[];
    HKDF_SALT: (number)[];
    IV: (number)[];
    CIPHERTEXT: (number)[];
    TAG: (number)[];
    EXPIRES_AT: bigint;
    constructor(REQUEST_ID?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, CONTENT_KEY_ID?: string | Uint8Array | null, RECIPIENT_KEY_ID?: string | Uint8Array | null, ALGORITHM?: licensingWrappedKeyAlgorithm, REQUESTER_EPHEMERAL_PUBKEY?: (number)[], PROVIDER_EPHEMERAL_PUBKEY?: (number)[], HKDF_SALT?: (number)[], IV?: (number)[], CIPHERTEXT?: (number)[], TAG?: (number)[], EXPIRES_AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LWK.d.ts.map