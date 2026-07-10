import * as flatbuffers from 'flatbuffers';
import { visualAssetDecisionKind } from './visualAssetDecisionKind.js';
/**
 * Signed review decision over a specific candidate. This table exists only for a submitted decision; DECISION NONE is not accepted publication evidence.
 * The review-envelope projection contains uppercase schema field names: REVIEWER_ID; CAPABILITY_ID when present; DECISION encoded as its unsigned enum integer; CANDIDATE_ID; CANDIDATE_CID when present; CANDIDATE_SHA256; DECIDED_AT; REASONS in original array order; COMMENT when present; SIGNATURE_TYPE; and PREVIOUS_DECISION_SHA256 when present.
 * Absent optional fields are omitted. A verifier reconstructs exactly this projection, applies RFC 8785 JSON Canonicalization Scheme (JCS), hashes the UTF-8 serialization bytes, compares the digest, then verifies SIGNATURE over the raw 32-byte digest before trusting DECISION.
 */
export declare class VAMReview implements flatbuffers.IUnpackableObject<VAMReviewT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMReview;
    static getRootAsVAMReview(bb: flatbuffers.ByteBuffer, obj?: VAMReview): VAMReview;
    static getSizePrefixedRootAsVAMReview(bb: flatbuffers.ByteBuffer, obj?: VAMReview): VAMReview;
    REVIEWER_ID(): string;
    REVIEWER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    CAPABILITY_ID(): string | null;
    CAPABILITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DECISION(): visualAssetDecisionKind;
    CANDIDATE_ID(): string;
    CANDIDATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional CIDv1 containing a multihash of exact candidate bytes; metadata-only candidates may not have a CID.
     */
    CANDIDATE_CID(): string | null;
    CANDIDATE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the exact candidate bytes.
     */
    CANDIDATE_SHA256(): string;
    CANDIDATE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) when the decision was made.
     */
    DECIDED_AT(): string;
    DECIDED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    REASONS(index: number): string;
    REASONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    reasonsLength(): number;
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the RFC 8785 JCS serialization of the projected review object, excluding ENVELOPE_SHA256 and SIGNATURE.
     */
    ENVELOPE_SHA256(): string;
    ENVELOPE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Signature over the raw 32-byte SHA-256 digest represented by ENVELOPE_SHA256.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array;
    /**
     * Signature algorithm and profile; initially Ed25519.
     */
    SIGNATURE_TYPE(): string;
    SIGNATURE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the prior projected review object's RFC 8785 JCS serialization, excluding its ENVELOPE_SHA256 and SIGNATURE.
     */
    PREVIOUS_DECISION_SHA256(): string | null;
    PREVIOUS_DECISION_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startVAMReview(builder: flatbuffers.Builder): void;
    static addReviewerId(builder: flatbuffers.Builder, REVIEWER_IDOffset: flatbuffers.Offset): void;
    static addCapabilityId(builder: flatbuffers.Builder, CAPABILITY_IDOffset: flatbuffers.Offset): void;
    static addDecision(builder: flatbuffers.Builder, DECISION: visualAssetDecisionKind): void;
    static addCandidateId(builder: flatbuffers.Builder, CANDIDATE_IDOffset: flatbuffers.Offset): void;
    static addCandidateCid(builder: flatbuffers.Builder, CANDIDATE_CIDOffset: flatbuffers.Offset): void;
    static addCandidateSha256(builder: flatbuffers.Builder, CANDIDATE_SHA256Offset: flatbuffers.Offset): void;
    static addDecidedAt(builder: flatbuffers.Builder, DECIDED_ATOffset: flatbuffers.Offset): void;
    static addReasons(builder: flatbuffers.Builder, REASONSOffset: flatbuffers.Offset): void;
    static createReasonsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReasonsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addEnvelopeSha256(builder: flatbuffers.Builder, ENVELOPE_SHA256Offset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignatureType(builder: flatbuffers.Builder, SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static addPreviousDecisionSha256(builder: flatbuffers.Builder, PREVIOUS_DECISION_SHA256Offset: flatbuffers.Offset): void;
    static endVAMReview(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVAMReview(builder: flatbuffers.Builder, REVIEWER_IDOffset: flatbuffers.Offset, CAPABILITY_IDOffset: flatbuffers.Offset, DECISION: visualAssetDecisionKind, CANDIDATE_IDOffset: flatbuffers.Offset, CANDIDATE_CIDOffset: flatbuffers.Offset, CANDIDATE_SHA256Offset: flatbuffers.Offset, DECIDED_ATOffset: flatbuffers.Offset, REASONSOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, ENVELOPE_SHA256Offset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, SIGNATURE_TYPEOffset: flatbuffers.Offset, PREVIOUS_DECISION_SHA256Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): VAMReviewT;
    unpackTo(_o: VAMReviewT): void;
}
export declare class VAMReviewT implements flatbuffers.IGeneratedObject {
    REVIEWER_ID: string | Uint8Array | null;
    CAPABILITY_ID: string | Uint8Array | null;
    DECISION: visualAssetDecisionKind;
    CANDIDATE_ID: string | Uint8Array | null;
    CANDIDATE_CID: string | Uint8Array | null;
    CANDIDATE_SHA256: string | Uint8Array | null;
    DECIDED_AT: string | Uint8Array | null;
    REASONS: (string)[];
    COMMENT: string | Uint8Array | null;
    ENVELOPE_SHA256: string | Uint8Array | null;
    SIGNATURE: (number)[];
    SIGNATURE_TYPE: string | Uint8Array | null;
    PREVIOUS_DECISION_SHA256: string | Uint8Array | null;
    constructor(REVIEWER_ID?: string | Uint8Array | null, CAPABILITY_ID?: string | Uint8Array | null, DECISION?: visualAssetDecisionKind, CANDIDATE_ID?: string | Uint8Array | null, CANDIDATE_CID?: string | Uint8Array | null, CANDIDATE_SHA256?: string | Uint8Array | null, DECIDED_AT?: string | Uint8Array | null, REASONS?: (string)[], COMMENT?: string | Uint8Array | null, ENVELOPE_SHA256?: string | Uint8Array | null, SIGNATURE?: (number)[], SIGNATURE_TYPE?: string | Uint8Array | null, PREVIOUS_DECISION_SHA256?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMReview.d.ts.map