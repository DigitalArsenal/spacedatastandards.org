import * as flatbuffers from 'flatbuffers';
import { paymentMethod } from './paymentMethod.js';
import { purchaseLifecycleStatus } from './purchaseLifecycleStatus.js';
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
    REQUEST_ID(): string;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * ID of the listing being purchased
     */
    LISTING_ID(): string;
    LISTING_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Name of the pricing tier selected
     */
    TIER_NAME(): string;
    TIER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Peer ID of the buyer
     */
    BUYER_PEER_ID(): string;
    BUYER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
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
    /**
     * Key algorithm for buyer encryption public key
     */
    KEY_ALGORITHM(): string | null;
    KEY_ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Buyer contact email
     */
    BUYER_EMAIL(): string | null;
    BUYER_EMAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-chain sender address or fiat payment source reference
     */
    SENDER_ADDRESS(): string | null;
    SENDER_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Confirmation block for on-chain payments
     */
    CONFIRMATION_BLOCK(): bigint;
    /**
     * Fiat processor payment intent identifier
     */
    PAYMENT_INTENT_ID(): string | null;
    PAYMENT_INTENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SDN credits transaction identifier
     */
    CREDITS_TRANSACTION_ID(): string | null;
    CREDITS_TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider-side purchase status
     */
    STATUS(): purchaseLifecycleStatus;
    /**
     * Human-readable status message
     */
    STATUS_MESSAGE(): string | null;
    STATUS_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp when the purchase record was created
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp when the purchase record was updated
     */
    UPDATED_AT(): bigint;
    /**
     * Unix timestamp when payment must be received
     */
    PAYMENT_DEADLINE(): bigint;
    /**
     * Unix timestamp when payment was confirmed
     */
    PAYMENT_CONFIRMED_AT(): bigint;
    /**
     * Unix timestamp when the grant was issued
     */
    GRANT_ISSUED_AT(): bigint;
    /**
     * Issued grant identifier
     */
    GRANT_ID(): string | null;
    GRANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider peer ID
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp when provider acknowledged the request
     */
    PROVIDER_ACKNOWLEDGED_AT(): bigint;
    /**
     * Preferred delivery method
     */
    PREFERRED_DELIVERY_METHOD(): string | null;
    PREFERRED_DELIVERY_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Buyer webhook URL for delivery callbacks
     */
    WEBHOOK_URL(): string | null;
    WEBHOOK_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature from provider
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
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
    static addKeyAlgorithm(builder: flatbuffers.Builder, KEY_ALGORITHMOffset: flatbuffers.Offset): void;
    static addBuyerEmail(builder: flatbuffers.Builder, BUYER_EMAILOffset: flatbuffers.Offset): void;
    static addSenderAddress(builder: flatbuffers.Builder, SENDER_ADDRESSOffset: flatbuffers.Offset): void;
    static addConfirmationBlock(builder: flatbuffers.Builder, CONFIRMATION_BLOCK: bigint): void;
    static addPaymentIntentId(builder: flatbuffers.Builder, PAYMENT_INTENT_IDOffset: flatbuffers.Offset): void;
    static addCreditsTransactionId(builder: flatbuffers.Builder, CREDITS_TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: purchaseLifecycleStatus): void;
    static addStatusMessage(builder: flatbuffers.Builder, STATUS_MESSAGEOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addPaymentDeadline(builder: flatbuffers.Builder, PAYMENT_DEADLINE: bigint): void;
    static addPaymentConfirmedAt(builder: flatbuffers.Builder, PAYMENT_CONFIRMED_AT: bigint): void;
    static addGrantIssuedAt(builder: flatbuffers.Builder, GRANT_ISSUED_AT: bigint): void;
    static addGrantId(builder: flatbuffers.Builder, GRANT_IDOffset: flatbuffers.Offset): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderAcknowledgedAt(builder: flatbuffers.Builder, PROVIDER_ACKNOWLEDGED_AT: bigint): void;
    static addPreferredDeliveryMethod(builder: flatbuffers.Builder, PREFERRED_DELIVERY_METHODOffset: flatbuffers.Offset): void;
    static addWebhookUrl(builder: flatbuffers.Builder, WEBHOOK_URLOffset: flatbuffers.Offset): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPUR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPURBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPURBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPUR(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset, LISTING_IDOffset: flatbuffers.Offset, TIER_NAMEOffset: flatbuffers.Offset, BUYER_PEER_IDOffset: flatbuffers.Offset, BUYER_ENCRYPTION_PUBKEYOffset: flatbuffers.Offset, PAYMENT_METHOD: paymentMethod, PAYMENT_AMOUNT: bigint, PAYMENT_CURRENCYOffset: flatbuffers.Offset, PAYMENT_TX_HASHOffset: flatbuffers.Offset, PAYMENT_CHAINOffset: flatbuffers.Offset, PAYMENT_REFERENCEOffset: flatbuffers.Offset, BUYER_SIGNATUREOffset: flatbuffers.Offset, TIMESTAMP: bigint, KEY_ALGORITHMOffset: flatbuffers.Offset, BUYER_EMAILOffset: flatbuffers.Offset, SENDER_ADDRESSOffset: flatbuffers.Offset, CONFIRMATION_BLOCK: bigint, PAYMENT_INTENT_IDOffset: flatbuffers.Offset, CREDITS_TRANSACTION_IDOffset: flatbuffers.Offset, STATUS: purchaseLifecycleStatus, STATUS_MESSAGEOffset: flatbuffers.Offset, CREATED_AT: bigint, UPDATED_AT: bigint, PAYMENT_DEADLINE: bigint, PAYMENT_CONFIRMED_AT: bigint, GRANT_ISSUED_AT: bigint, GRANT_IDOffset: flatbuffers.Offset, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_ACKNOWLEDGED_AT: bigint, PREFERRED_DELIVERY_METHODOffset: flatbuffers.Offset, WEBHOOK_URLOffset: flatbuffers.Offset, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
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
    KEY_ALGORITHM: string | Uint8Array | null;
    BUYER_EMAIL: string | Uint8Array | null;
    SENDER_ADDRESS: string | Uint8Array | null;
    CONFIRMATION_BLOCK: bigint;
    PAYMENT_INTENT_ID: string | Uint8Array | null;
    CREDITS_TRANSACTION_ID: string | Uint8Array | null;
    STATUS: purchaseLifecycleStatus;
    STATUS_MESSAGE: string | Uint8Array | null;
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    PAYMENT_DEADLINE: bigint;
    PAYMENT_CONFIRMED_AT: bigint;
    GRANT_ISSUED_AT: bigint;
    GRANT_ID: string | Uint8Array | null;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_ACKNOWLEDGED_AT: bigint;
    PREFERRED_DELIVERY_METHOD: string | Uint8Array | null;
    WEBHOOK_URL: string | Uint8Array | null;
    PROVIDER_SIGNATURE: (number)[];
    constructor(REQUEST_ID?: string | Uint8Array | null, LISTING_ID?: string | Uint8Array | null, TIER_NAME?: string | Uint8Array | null, BUYER_PEER_ID?: string | Uint8Array | null, BUYER_ENCRYPTION_PUBKEY?: (number)[], PAYMENT_METHOD?: paymentMethod, PAYMENT_AMOUNT?: bigint, PAYMENT_CURRENCY?: string | Uint8Array | null, PAYMENT_TX_HASH?: string | Uint8Array | null, PAYMENT_CHAIN?: string | Uint8Array | null, PAYMENT_REFERENCE?: string | Uint8Array | null, BUYER_SIGNATURE?: (number)[], TIMESTAMP?: bigint, KEY_ALGORITHM?: string | Uint8Array | null, BUYER_EMAIL?: string | Uint8Array | null, SENDER_ADDRESS?: string | Uint8Array | null, CONFIRMATION_BLOCK?: bigint, PAYMENT_INTENT_ID?: string | Uint8Array | null, CREDITS_TRANSACTION_ID?: string | Uint8Array | null, STATUS?: purchaseLifecycleStatus, STATUS_MESSAGE?: string | Uint8Array | null, CREATED_AT?: bigint, UPDATED_AT?: bigint, PAYMENT_DEADLINE?: bigint, PAYMENT_CONFIRMED_AT?: bigint, GRANT_ISSUED_AT?: bigint, GRANT_ID?: string | Uint8Array | null, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_ACKNOWLEDGED_AT?: bigint, PREFERRED_DELIVERY_METHOD?: string | Uint8Array | null, WEBHOOK_URL?: string | Uint8Array | null, PROVIDER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PUR.d.ts.map