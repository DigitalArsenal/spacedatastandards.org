import * as flatbuffers from 'flatbuffers';
import { DataQualityMetrics, DataQualityMetricsT } from './DataQualityMetrics.js';
import { reviewLifecycleStatus } from './reviewLifecycleStatus.js';
/**
 * Review - User review of a storefront listing
 */
export declare class REV implements flatbuffers.IUnpackableObject<REVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): REV;
    static getRootAsREV(bb: flatbuffers.ByteBuffer, obj?: REV): REV;
    static getSizePrefixedRootAsREV(bb: flatbuffers.ByteBuffer, obj?: REV): REV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier for this review
     */
    REVIEW_ID(): string;
    REVIEW_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * ID of the listing being reviewed
     */
    LISTING_ID(): string;
    LISTING_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Peer ID of the reviewer
     */
    REVIEWER_PEER_ID(): string;
    REVIEWER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Rating from 1-5 stars
     */
    RATING(): number;
    /**
     * Review title
     */
    TITLE(): string | null;
    TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Review content/body
     */
    CONTENT(): string | null;
    CONTENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ACL grant ID proving purchase (proof of purchase)
     */
    ACL_GRANT_ID(): string | null;
    ACL_GRANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp of the review
     */
    TIMESTAMP(): bigint;
    /**
     * Ed25519 signature from reviewer
     */
    REVIEWER_SIGNATURE(index: number): number | null;
    reviewerSignatureLength(): number;
    reviewerSignatureArray(): Uint8Array | null;
    /**
     * Data quality metrics supplied by reviewer
     */
    QUALITY_METRICS(obj?: DataQualityMetrics): DataQualityMetrics | null;
    /**
     * Whether the review is tied to a verified purchase
     */
    VERIFIED_PURCHASE(): boolean;
    /**
     * Unix timestamp when the review was last updated
     */
    UPDATED_AT(): bigint;
    /**
     * Review lifecycle status
     */
    STATUS(): reviewLifecycleStatus;
    /**
     * Helpful vote count
     */
    HELPFUL_COUNT(): number;
    /**
     * Not-helpful vote count
     */
    NOT_HELPFUL_COUNT(): number;
    /**
     * Provider response body
     */
    PROVIDER_RESPONSE(): string | null;
    PROVIDER_RESPONSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp when provider responded
     */
    PROVIDER_RESPONSE_AT(): bigint;
    /**
     * Number of moderation flags
     */
    FLAGGED_COUNT(): number;
    /**
     * Moderation notes
     */
    MODERATION_NOTES(): string | null;
    MODERATION_NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startREV(builder: flatbuffers.Builder): void;
    static addReviewId(builder: flatbuffers.Builder, REVIEW_IDOffset: flatbuffers.Offset): void;
    static addListingId(builder: flatbuffers.Builder, LISTING_IDOffset: flatbuffers.Offset): void;
    static addReviewerPeerId(builder: flatbuffers.Builder, REVIEWER_PEER_IDOffset: flatbuffers.Offset): void;
    static addRating(builder: flatbuffers.Builder, RATING: number): void;
    static addTitle(builder: flatbuffers.Builder, TITLEOffset: flatbuffers.Offset): void;
    static addContent(builder: flatbuffers.Builder, CONTENTOffset: flatbuffers.Offset): void;
    static addAclGrantId(builder: flatbuffers.Builder, ACL_GRANT_IDOffset: flatbuffers.Offset): void;
    static addTimestamp(builder: flatbuffers.Builder, TIMESTAMP: bigint): void;
    static addReviewerSignature(builder: flatbuffers.Builder, REVIEWER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createReviewerSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReviewerSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQualityMetrics(builder: flatbuffers.Builder, QUALITY_METRICSOffset: flatbuffers.Offset): void;
    static addVerifiedPurchase(builder: flatbuffers.Builder, VERIFIED_PURCHASE: boolean): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: reviewLifecycleStatus): void;
    static addHelpfulCount(builder: flatbuffers.Builder, HELPFUL_COUNT: number): void;
    static addNotHelpfulCount(builder: flatbuffers.Builder, NOT_HELPFUL_COUNT: number): void;
    static addProviderResponse(builder: flatbuffers.Builder, PROVIDER_RESPONSEOffset: flatbuffers.Offset): void;
    static addProviderResponseAt(builder: flatbuffers.Builder, PROVIDER_RESPONSE_AT: bigint): void;
    static addFlaggedCount(builder: flatbuffers.Builder, FLAGGED_COUNT: number): void;
    static addModerationNotes(builder: flatbuffers.Builder, MODERATION_NOTESOffset: flatbuffers.Offset): void;
    static endREV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishREVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedREVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): REVT;
    unpackTo(_o: REVT): void;
}
export declare class REVT implements flatbuffers.IGeneratedObject {
    REVIEW_ID: string | Uint8Array | null;
    LISTING_ID: string | Uint8Array | null;
    REVIEWER_PEER_ID: string | Uint8Array | null;
    RATING: number;
    TITLE: string | Uint8Array | null;
    CONTENT: string | Uint8Array | null;
    ACL_GRANT_ID: string | Uint8Array | null;
    TIMESTAMP: bigint;
    REVIEWER_SIGNATURE: (number)[];
    QUALITY_METRICS: DataQualityMetricsT | null;
    VERIFIED_PURCHASE: boolean;
    UPDATED_AT: bigint;
    STATUS: reviewLifecycleStatus;
    HELPFUL_COUNT: number;
    NOT_HELPFUL_COUNT: number;
    PROVIDER_RESPONSE: string | Uint8Array | null;
    PROVIDER_RESPONSE_AT: bigint;
    FLAGGED_COUNT: number;
    MODERATION_NOTES: string | Uint8Array | null;
    constructor(REVIEW_ID?: string | Uint8Array | null, LISTING_ID?: string | Uint8Array | null, REVIEWER_PEER_ID?: string | Uint8Array | null, RATING?: number, TITLE?: string | Uint8Array | null, CONTENT?: string | Uint8Array | null, ACL_GRANT_ID?: string | Uint8Array | null, TIMESTAMP?: bigint, REVIEWER_SIGNATURE?: (number)[], QUALITY_METRICS?: DataQualityMetricsT | null, VERIFIED_PURCHASE?: boolean, UPDATED_AT?: bigint, STATUS?: reviewLifecycleStatus, HELPFUL_COUNT?: number, NOT_HELPFUL_COUNT?: number, PROVIDER_RESPONSE?: string | Uint8Array | null, PROVIDER_RESPONSE_AT?: bigint, FLAGGED_COUNT?: number, MODERATION_NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=REV.d.ts.map