import * as flatbuffers from 'flatbuffers';
import { accessType } from './accessType.js';
import { paymentMethod } from './paymentMethod.js';
/**
 * Access Control Grant - Permission to access purchased data
 */
export declare class ACL implements flatbuffers.IUnpackableObject<ACLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACL;
    static getRootAsACL(bb: flatbuffers.ByteBuffer, obj?: ACL): ACL;
    static getSizePrefixedRootAsACL(bb: flatbuffers.ByteBuffer, obj?: ACL): ACL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier for this grant
     */
    GRANT_ID(): string | null;
    GRANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID of the listing this grant applies to
     */
    LISTING_ID(): string | null;
    LISTING_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer ID of the buyer/grantee
     */
    BUYER_PEER_ID(): string | null;
    BUYER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Buyer's encryption public key for encrypted delivery
     */
    BUYER_ENCRYPTION_PUBKEY(index: number): number | null;
    buyerEncryptionPubkeyLength(): number;
    buyerEncryptionPubkeyArray(): Uint8Array | null;
    /**
     * Type of access granted
     */
    ACCESS_TYPE(): accessType;
    /**
     * Name of the pricing tier purchased
     */
    TIER_NAME(): string | null;
    TIER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp when access was granted
     */
    GRANTED_AT(): bigint;
    /**
     * Unix timestamp when access expires (0 = never expires)
     */
    EXPIRES_AT(): bigint;
    /**
     * Transaction hash or reference proving payment
     */
    PAYMENT_TX_HASH(): string | null;
    PAYMENT_TX_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Payment method used
     */
    PAYMENT_METHOD(): paymentMethod;
    /**
     * Ed25519 signature from provider
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
    static startACL(builder: flatbuffers.Builder): void;
    static addGrantId(builder: flatbuffers.Builder, GRANT_IDOffset: flatbuffers.Offset): void;
    static addListingId(builder: flatbuffers.Builder, LISTING_IDOffset: flatbuffers.Offset): void;
    static addBuyerPeerId(builder: flatbuffers.Builder, BUYER_PEER_IDOffset: flatbuffers.Offset): void;
    static addBuyerEncryptionPubkey(builder: flatbuffers.Builder, BUYER_ENCRYPTION_PUBKEYOffset: flatbuffers.Offset): void;
    static createBuyerEncryptionPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBuyerEncryptionPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAccessType(builder: flatbuffers.Builder, ACCESS_TYPE: accessType): void;
    static addTierName(builder: flatbuffers.Builder, TIER_NAMEOffset: flatbuffers.Offset): void;
    static addGrantedAt(builder: flatbuffers.Builder, GRANTED_AT: bigint): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addPaymentTxHash(builder: flatbuffers.Builder, PAYMENT_TX_HASHOffset: flatbuffers.Offset): void;
    static addPaymentMethod(builder: flatbuffers.Builder, PAYMENT_METHOD: paymentMethod): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishACLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedACLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createACL(builder: flatbuffers.Builder, GRANT_IDOffset: flatbuffers.Offset, LISTING_IDOffset: flatbuffers.Offset, BUYER_PEER_IDOffset: flatbuffers.Offset, BUYER_ENCRYPTION_PUBKEYOffset: flatbuffers.Offset, ACCESS_TYPE: accessType, TIER_NAMEOffset: flatbuffers.Offset, GRANTED_AT: bigint, EXPIRES_AT: bigint, PAYMENT_TX_HASHOffset: flatbuffers.Offset, PAYMENT_METHOD: paymentMethod, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACLT;
    unpackTo(_o: ACLT): void;
}
export declare class ACLT implements flatbuffers.IGeneratedObject {
    GRANT_ID: string | Uint8Array | null;
    LISTING_ID: string | Uint8Array | null;
    BUYER_PEER_ID: string | Uint8Array | null;
    BUYER_ENCRYPTION_PUBKEY: (number)[];
    ACCESS_TYPE: accessType;
    TIER_NAME: string | Uint8Array | null;
    GRANTED_AT: bigint;
    EXPIRES_AT: bigint;
    PAYMENT_TX_HASH: string | Uint8Array | null;
    PAYMENT_METHOD: paymentMethod;
    PROVIDER_SIGNATURE: (number)[];
    constructor(GRANT_ID?: string | Uint8Array | null, LISTING_ID?: string | Uint8Array | null, BUYER_PEER_ID?: string | Uint8Array | null, BUYER_ENCRYPTION_PUBKEY?: (number)[], ACCESS_TYPE?: accessType, TIER_NAME?: string | Uint8Array | null, GRANTED_AT?: bigint, EXPIRES_AT?: bigint, PAYMENT_TX_HASH?: string | Uint8Array | null, PAYMENT_METHOD?: paymentMethod, PROVIDER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACL.d.ts.map