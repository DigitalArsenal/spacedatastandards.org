import * as flatbuffers from 'flatbuffers';
import { paymentMethod } from './paymentMethod.js';
/**
 * Purchase Request - Request to purchase data from a storefront listing
 */
export declare class PUR implements flatbuffers.IUnpackableObject<PURT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PUR;
    static getRootAsPUR(bb: flatbuffers.ByteBuffer, obj?: PUR): PUR;
    static getSizePrefixedRootAsPUR(bb: flatbuffers.ByteBuffer, obj?: PUR): PUR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier for this purchase request
     */
    REQUEST_ID(): string | null;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID of the listing being purchased
     */
    LISTING_ID(): string | null;
    LISTING_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the pricing tier selected
     */
    TIER_NAME(): string | null;
    TIER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer ID of the buyer
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
     * Payment method used
     */
    PAYMENT_METHOD(): paymentMethod;
    /**
     * Payment amount in smallest unit
     */
    PAYMENT_AMOUNT(): bigint;
    /**
     * Currency of payment
     */
    PAYMENT_CURRENCY(): string | null;
    PAYMENT_CURRENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transaction hash for cryptocurrency payments
     */
    PAYMENT_TX_HASH(): string | null;
    PAYMENT_TX_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Blockchain network: "ethereum", "solana", "bitcoin"
     */
    PAYMENT_CHAIN(): string | null;
    PAYMENT_CHAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference ID for credit/fiat payments
     */
    PAYMENT_REFERENCE(): string | null;
    PAYMENT_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature from buyer
     */
    BUYER_SIGNATURE(index: number): number | null;
    buyerSignatureLength(): number;
    buyerSignatureArray(): Uint8Array | null;
    /**
     * Unix timestamp of the request
     */
    TIMESTAMP(): bigint;
    static startPUR(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addListingId(builder: flatbuffers.Builder, LISTING_IDOffset: flatbuffers.Offset): void;
    static addTierName(builder: flatbuffers.Builder, TIER_NAMEOffset: flatbuffers.Offset): void;
    static addBuyerPeerId(builder: flatbuffers.Builder, BUYER_PEER_IDOffset: flatbuffers.Offset): void;
    static addBuyerEncryptionPubkey(builder: flatbuffers.Builder, BUYER_ENCRYPTION_PUBKEYOffset: flatbuffers.Offset): void;
    static createBuyerEncryptionPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBuyerEncryptionPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPaymentMethod(builder: flatbuffers.Builder, PAYMENT_METHOD: paymentMethod): void;
    static addPaymentAmount(builder: flatbuffers.Builder, PAYMENT_AMOUNT: bigint): void;
    static addPaymentCurrency(builder: flatbuffers.Builder, PAYMENT_CURRENCYOffset: flatbuffers.Offset): void;
    static addPaymentTxHash(builder: flatbuffers.Builder, PAYMENT_TX_HASHOffset: flatbuffers.Offset): void;
    static addPaymentChain(builder: flatbuffers.Builder, PAYMENT_CHAINOffset: flatbuffers.Offset): void;
    static addPaymentReference(builder: flatbuffers.Builder, PAYMENT_REFERENCEOffset: flatbuffers.Offset): void;
    static addBuyerSignature(builder: flatbuffers.Builder, BUYER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createBuyerSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBuyerSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimestamp(builder: flatbuffers.Builder, TIMESTAMP: bigint): void;
    static endPUR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPURBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPURBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPUR(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset, LISTING_IDOffset: flatbuffers.Offset, TIER_NAMEOffset: flatbuffers.Offset, BUYER_PEER_IDOffset: flatbuffers.Offset, BUYER_ENCRYPTION_PUBKEYOffset: flatbuffers.Offset, PAYMENT_METHOD: paymentMethod, PAYMENT_AMOUNT: bigint, PAYMENT_CURRENCYOffset: flatbuffers.Offset, PAYMENT_TX_HASHOffset: flatbuffers.Offset, PAYMENT_CHAINOffset: flatbuffers.Offset, PAYMENT_REFERENCEOffset: flatbuffers.Offset, BUYER_SIGNATUREOffset: flatbuffers.Offset, TIMESTAMP: bigint): flatbuffers.Offset;
    unpack(): PURT;
    unpackTo(_o: PURT): void;
}
export declare class PURT implements flatbuffers.IGeneratedObject {
    REQUEST_ID: string | Uint8Array | null;
    LISTING_ID: string | Uint8Array | null;
    TIER_NAME: string | Uint8Array | null;
    BUYER_PEER_ID: string | Uint8Array | null;
    BUYER_ENCRYPTION_PUBKEY: (number)[];
    PAYMENT_METHOD: paymentMethod;
    PAYMENT_AMOUNT: bigint;
    PAYMENT_CURRENCY: string | Uint8Array | null;
    PAYMENT_TX_HASH: string | Uint8Array | null;
    PAYMENT_CHAIN: string | Uint8Array | null;
    PAYMENT_REFERENCE: string | Uint8Array | null;
    BUYER_SIGNATURE: (number)[];
    TIMESTAMP: bigint;
    constructor(REQUEST_ID?: string | Uint8Array | null, LISTING_ID?: string | Uint8Array | null, TIER_NAME?: string | Uint8Array | null, BUYER_PEER_ID?: string | Uint8Array | null, BUYER_ENCRYPTION_PUBKEY?: (number)[], PAYMENT_METHOD?: paymentMethod, PAYMENT_AMOUNT?: bigint, PAYMENT_CURRENCY?: string | Uint8Array | null, PAYMENT_TX_HASH?: string | Uint8Array | null, PAYMENT_CHAIN?: string | Uint8Array | null, PAYMENT_REFERENCE?: string | Uint8Array | null, BUYER_SIGNATURE?: (number)[], TIMESTAMP?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PUR.d.ts.map