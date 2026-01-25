import * as flatbuffers from 'flatbuffers';
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
    REVIEW_ID(): string | null;
    REVIEW_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID of the listing being reviewed
     */
    LISTING_ID(): string | null;
    LISTING_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer ID of the reviewer
     */
    REVIEWER_PEER_ID(): string | null;
    REVIEWER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static endREV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishREVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedREVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createREV(builder: flatbuffers.Builder, REVIEW_IDOffset: flatbuffers.Offset, LISTING_IDOffset: flatbuffers.Offset, REVIEWER_PEER_IDOffset: flatbuffers.Offset, RATING: number, TITLEOffset: flatbuffers.Offset, CONTENTOffset: flatbuffers.Offset, ACL_GRANT_IDOffset: flatbuffers.Offset, TIMESTAMP: bigint, REVIEWER_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
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
    constructor(REVIEW_ID?: string | Uint8Array | null, LISTING_ID?: string | Uint8Array | null, REVIEWER_PEER_ID?: string | Uint8Array | null, RATING?: number, TITLE?: string | Uint8Array | null, CONTENT?: string | Uint8Array | null, ACL_GRANT_ID?: string | Uint8Array | null, TIMESTAMP?: bigint, REVIEWER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=REV.d.ts.map