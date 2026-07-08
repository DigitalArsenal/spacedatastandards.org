import * as flatbuffers from 'flatbuffers';
import { GrantFieldStreamPolicy, GrantFieldStreamPolicyT } from './GrantFieldStreamPolicy.js';
import { accessCategory } from './accessCategory.js';
import { grantLifecycleStatus } from './grantLifecycleStatus.js';
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
    GRANT_ID(): string;
    GRANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * ID of the listing this grant applies to
     */
    LISTING_ID(): string;
    LISTING_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Peer ID of the buyer/grantee
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
     * Type of access granted
     */
    ACCESS_TYPE(): accessCategory;
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
    /**
     * Key algorithm for buyer encryption public key
     */
    KEY_ALGORITHM(): string | null;
    KEY_ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Request rate limit
     */
    RATE_LIMIT(): number;
    /**
     * Maximum records returned per request
     */
    MAX_RECORDS_PER_REQUEST(): number;
    /**
     * Provider-side grant status
     */
    STATUS(): grantLifecycleStatus;
    /**
     * Payment amount in smallest unit
     */
    PAYMENT_AMOUNT(): bigint;
    /**
     * Payment currency
     */
    PAYMENT_CURRENCY(): string | null;
    PAYMENT_CURRENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Payment chain or processor
     */
    PAYMENT_CHAIN(): string | null;
    PAYMENT_CHAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp of next renewal
     */
    NEXT_RENEWAL(): bigint;
    /**
     * Whether renewal is automatic
     */
    AUTO_RENEW(): boolean;
    /**
     * Renewal count
     */
    RENEWAL_COUNT(): number;
    /**
     * Total requests made under this grant
     */
    TOTAL_REQUESTS(): bigint;
    /**
     * Total records delivered under this grant
     */
    TOTAL_RECORDS(): bigint;
    /**
     * Unix timestamp of last access
     */
    LAST_ACCESS(): bigint;
    /**
     * PubSub or direct delivery topic
     */
    DELIVERY_TOPIC(): string | null;
    DELIVERY_TOPIC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp when the grant record was created
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp when the grant record was updated
     */
    UPDATED_AT(): bigint;
    /**
     * Provider notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider peer ID
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Base64-encoded signed grant response bytes
     */
    GRANT_RESPONSE_BASE64(): string | null;
    GRANT_RESPONSE_BASE64(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Field-level stream policy bound to this grant
     */
    FIELD_STREAM_POLICY(obj?: GrantFieldStreamPolicy): GrantFieldStreamPolicy | null;
    static startACL(builder: flatbuffers.Builder): void;
    static addGrantId(builder: flatbuffers.Builder, GRANT_IDOffset: flatbuffers.Offset): void;
    static addListingId(builder: flatbuffers.Builder, LISTING_IDOffset: flatbuffers.Offset): void;
    static addBuyerPeerId(builder: flatbuffers.Builder, BUYER_PEER_IDOffset: flatbuffers.Offset): void;
    static addBuyerEncryptionPubkey(builder: flatbuffers.Builder, BUYER_ENCRYPTION_PUBKEYOffset: flatbuffers.Offset): void;
    static createBuyerEncryptionPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBuyerEncryptionPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAccessType(builder: flatbuffers.Builder, ACCESS_TYPE: accessCategory): void;
    static addTierName(builder: flatbuffers.Builder, TIER_NAMEOffset: flatbuffers.Offset): void;
    static addGrantedAt(builder: flatbuffers.Builder, GRANTED_AT: bigint): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addPaymentTxHash(builder: flatbuffers.Builder, PAYMENT_TX_HASHOffset: flatbuffers.Offset): void;
    static addPaymentMethod(builder: flatbuffers.Builder, PAYMENT_METHOD: paymentMethod): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKeyAlgorithm(builder: flatbuffers.Builder, KEY_ALGORITHMOffset: flatbuffers.Offset): void;
    static addRateLimit(builder: flatbuffers.Builder, RATE_LIMIT: number): void;
    static addMaxRecordsPerRequest(builder: flatbuffers.Builder, MAX_RECORDS_PER_REQUEST: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: grantLifecycleStatus): void;
    static addPaymentAmount(builder: flatbuffers.Builder, PAYMENT_AMOUNT: bigint): void;
    static addPaymentCurrency(builder: flatbuffers.Builder, PAYMENT_CURRENCYOffset: flatbuffers.Offset): void;
    static addPaymentChain(builder: flatbuffers.Builder, PAYMENT_CHAINOffset: flatbuffers.Offset): void;
    static addNextRenewal(builder: flatbuffers.Builder, NEXT_RENEWAL: bigint): void;
    static addAutoRenew(builder: flatbuffers.Builder, AUTO_RENEW: boolean): void;
    static addRenewalCount(builder: flatbuffers.Builder, RENEWAL_COUNT: number): void;
    static addTotalRequests(builder: flatbuffers.Builder, TOTAL_REQUESTS: bigint): void;
    static addTotalRecords(builder: flatbuffers.Builder, TOTAL_RECORDS: bigint): void;
    static addLastAccess(builder: flatbuffers.Builder, LAST_ACCESS: bigint): void;
    static addDeliveryTopic(builder: flatbuffers.Builder, DELIVERY_TOPICOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addGrantResponseBase64(builder: flatbuffers.Builder, GRANT_RESPONSE_BASE64Offset: flatbuffers.Offset): void;
    static addFieldStreamPolicy(builder: flatbuffers.Builder, FIELD_STREAM_POLICYOffset: flatbuffers.Offset): void;
    static endACL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishACLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedACLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): ACLT;
    unpackTo(_o: ACLT): void;
}
export declare class ACLT implements flatbuffers.IGeneratedObject {
    GRANT_ID: string | Uint8Array | null;
    LISTING_ID: string | Uint8Array | null;
    BUYER_PEER_ID: string | Uint8Array | null;
    BUYER_ENCRYPTION_PUBKEY: (number)[];
    ACCESS_TYPE: accessCategory;
    TIER_NAME: string | Uint8Array | null;
    GRANTED_AT: bigint;
    EXPIRES_AT: bigint;
    PAYMENT_TX_HASH: string | Uint8Array | null;
    PAYMENT_METHOD: paymentMethod;
    PROVIDER_SIGNATURE: (number)[];
    KEY_ALGORITHM: string | Uint8Array | null;
    RATE_LIMIT: number;
    MAX_RECORDS_PER_REQUEST: number;
    STATUS: grantLifecycleStatus;
    PAYMENT_AMOUNT: bigint;
    PAYMENT_CURRENCY: string | Uint8Array | null;
    PAYMENT_CHAIN: string | Uint8Array | null;
    NEXT_RENEWAL: bigint;
    AUTO_RENEW: boolean;
    RENEWAL_COUNT: number;
    TOTAL_REQUESTS: bigint;
    TOTAL_RECORDS: bigint;
    LAST_ACCESS: bigint;
    DELIVERY_TOPIC: string | Uint8Array | null;
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    NOTES: string | Uint8Array | null;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    GRANT_RESPONSE_BASE64: string | Uint8Array | null;
    FIELD_STREAM_POLICY: GrantFieldStreamPolicyT | null;
    constructor(GRANT_ID?: string | Uint8Array | null, LISTING_ID?: string | Uint8Array | null, BUYER_PEER_ID?: string | Uint8Array | null, BUYER_ENCRYPTION_PUBKEY?: (number)[], ACCESS_TYPE?: accessCategory, TIER_NAME?: string | Uint8Array | null, GRANTED_AT?: bigint, EXPIRES_AT?: bigint, PAYMENT_TX_HASH?: string | Uint8Array | null, PAYMENT_METHOD?: paymentMethod, PROVIDER_SIGNATURE?: (number)[], KEY_ALGORITHM?: string | Uint8Array | null, RATE_LIMIT?: number, MAX_RECORDS_PER_REQUEST?: number, STATUS?: grantLifecycleStatus, PAYMENT_AMOUNT?: bigint, PAYMENT_CURRENCY?: string | Uint8Array | null, PAYMENT_CHAIN?: string | Uint8Array | null, NEXT_RENEWAL?: bigint, AUTO_RENEW?: boolean, RENEWAL_COUNT?: number, TOTAL_REQUESTS?: bigint, TOTAL_RECORDS?: bigint, LAST_ACCESS?: bigint, DELIVERY_TOPIC?: string | Uint8Array | null, CREATED_AT?: bigint, UPDATED_AT?: bigint, NOTES?: string | Uint8Array | null, PROVIDER_PEER_ID?: string | Uint8Array | null, GRANT_RESPONSE_BASE64?: string | Uint8Array | null, FIELD_STREAM_POLICY?: GrantFieldStreamPolicyT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACL.d.ts.map