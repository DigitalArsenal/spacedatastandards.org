import * as flatbuffers from 'flatbuffers';
import { VAMAnnotation, VAMAnnotationT } from './VAMAnnotation.js';
import { VAMTransform, VAMTransformT } from './VAMTransform.js';
import { visualAssetDecisionKind } from './visualAssetDecisionKind.js';
import { visualAssetReviewerRole } from './visualAssetReviewerRole.js';
/**
 * Signed binary-backed review decision over a specific candidate. This table exists only for a submitted decision; DECISION NONE and APPROVE_METADATA_ONLY are not accepted VAMReview evidence.
 * The review-envelope projection contains these uppercase schema field names in schema declaration order: REVIEWER_ID; CAPABILITY_ID when present; DECISION encoded as its unsigned enum integer; CANDIDATE_ID; CANDIDATE_CID when present; CANDIDATE_SHA256; DECIDED_AT; REASONS; COMMENT when present; SIGNATURE_TYPE; PREVIOUS_DECISION_SHA256 when present; REVIEWER_ROLE encoded as its unsigned enum integer; REPOSITORY; ISSUE_NUMBER; ENTITY_ID; VAM_ID; NONCE; REVIEWED_TRANSFORM when present; CANONICAL_VARIANT_ID when present; ALTERNATE_VARIANT_IDS; and ANNOTATIONS.
 * Projection order is descriptive; RFC 8785 sorts object keys during canonicalization.
 * Absent optional fields are omitted and arrays preserve order; nested VAMTransform and VAMAnnotation use uppercase schema field names and numeric enums. A verifier reconstructs exactly this projection, applies RFC 8785 JSON Canonicalization Scheme (JCS), hashes the UTF-8 serialization bytes, compares the digest, then verifies SIGNATURE over the raw 32-byte digest.
 * Before trusting DECISION, a verifier must enforce binary decision invariants; repository, issue, entity, and VAM equality; nonce single use; role authorization; and exact candidate binding. CAPABILITY_ID, REPOSITORY, ISSUE_NUMBER, ENTITY_ID, VAM_ID, and NONCE MUST be present and nonempty for any new binary-backed signed decision and are required by the binary validation profile; their wire slots are optional only for backward compatibility.
 * Legacy buffers lacking those six fields remain decodable but are not valid new publication approvals. For these compatibility fields, the projection omits absent optionals only when decoding legacy records; the new validation profile rejects absence before signature trust. APPROVE requires CANDIDATE_CID; every binary decision requires exact CANDIDATE_SHA256.
 * Under the validation profile, when DECISION is APPROVE, CANDIDATE_CID MUST be present; REVIEWED_TRANSFORM and CANONICAL_VARIANT_ID MUST be present; and CANONICAL_VARIANT_ID MUST equal CANDIDATE_ID. These fields remain optional on the wire for compatibility.
 * The enclosing VAM.ID MUST equal VAM_ID; the enclosing VAM.ENTITY_ID MUST equal review ENTITY_ID; and the enclosing VAM.CANONICAL_VARIANT_ID MUST equal review CANONICAL_VARIANT_ID.
 * The referenced VAMVariant.ID MUST equal CANDIDATE_ID; that variant CID and BYTE_SHA256 MUST equal signed CANDIDATE_CID and CANDIDATE_SHA256; and its TRANSFORM MUST be field-for-field equal to REVIEWED_TRANSFORM after decoding schema defaults.
 * The publication validator rejects any omission or mismatch before signature trust or publication. Later transform or canonical-variant changes require a new signed review and envelope.
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
     * 64 lowercase hexadecimal SHA-256 of exact candidate bytes, required for every binary-backed decision.
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
    REVIEWER_ROLE(): visualAssetReviewerRole;
    /**
     * Canonical repository identifier in owner/name form.
     */
    REPOSITORY(): string | null;
    REPOSITORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Positive base-10 issue number digits with no leading zero.
     */
    ISSUE_NUMBER(): string | null;
    ISSUE_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ENTITY_ID(): string | null;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VAM_ID(): string | null;
    VAM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique opaque identifier containing at least 128 bits of entropy.
     */
    NONCE(): string | null;
    NONCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REVIEWED_TRANSFORM(obj?: VAMTransform): VAMTransform | null;
    CANONICAL_VARIANT_ID(): string | null;
    CANONICAL_VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ALTERNATE_VARIANT_IDS(index: number): string;
    ALTERNATE_VARIANT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    alternateVariantIdsLength(): number;
    ANNOTATIONS(index: number, obj?: VAMAnnotation): VAMAnnotation | null;
    annotationsLength(): number;
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
    static addReviewerRole(builder: flatbuffers.Builder, REVIEWER_ROLE: visualAssetReviewerRole): void;
    static addRepository(builder: flatbuffers.Builder, REPOSITORYOffset: flatbuffers.Offset): void;
    static addIssueNumber(builder: flatbuffers.Builder, ISSUE_NUMBEROffset: flatbuffers.Offset): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addVamId(builder: flatbuffers.Builder, VAM_IDOffset: flatbuffers.Offset): void;
    static addNonce(builder: flatbuffers.Builder, NONCEOffset: flatbuffers.Offset): void;
    static addReviewedTransform(builder: flatbuffers.Builder, REVIEWED_TRANSFORMOffset: flatbuffers.Offset): void;
    static addCanonicalVariantId(builder: flatbuffers.Builder, CANONICAL_VARIANT_IDOffset: flatbuffers.Offset): void;
    static addAlternateVariantIds(builder: flatbuffers.Builder, ALTERNATE_VARIANT_IDSOffset: flatbuffers.Offset): void;
    static createAlternateVariantIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlternateVariantIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAnnotations(builder: flatbuffers.Builder, ANNOTATIONSOffset: flatbuffers.Offset): void;
    static createAnnotationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAnnotationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endVAMReview(builder: flatbuffers.Builder): flatbuffers.Offset;
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
    REVIEWER_ROLE: visualAssetReviewerRole;
    REPOSITORY: string | Uint8Array | null;
    ISSUE_NUMBER: string | Uint8Array | null;
    ENTITY_ID: string | Uint8Array | null;
    VAM_ID: string | Uint8Array | null;
    NONCE: string | Uint8Array | null;
    REVIEWED_TRANSFORM: VAMTransformT | null;
    CANONICAL_VARIANT_ID: string | Uint8Array | null;
    ALTERNATE_VARIANT_IDS: (string)[];
    ANNOTATIONS: (VAMAnnotationT)[];
    constructor(REVIEWER_ID?: string | Uint8Array | null, CAPABILITY_ID?: string | Uint8Array | null, DECISION?: visualAssetDecisionKind, CANDIDATE_ID?: string | Uint8Array | null, CANDIDATE_CID?: string | Uint8Array | null, CANDIDATE_SHA256?: string | Uint8Array | null, DECIDED_AT?: string | Uint8Array | null, REASONS?: (string)[], COMMENT?: string | Uint8Array | null, ENVELOPE_SHA256?: string | Uint8Array | null, SIGNATURE?: (number)[], SIGNATURE_TYPE?: string | Uint8Array | null, PREVIOUS_DECISION_SHA256?: string | Uint8Array | null, REVIEWER_ROLE?: visualAssetReviewerRole, REPOSITORY?: string | Uint8Array | null, ISSUE_NUMBER?: string | Uint8Array | null, ENTITY_ID?: string | Uint8Array | null, VAM_ID?: string | Uint8Array | null, NONCE?: string | Uint8Array | null, REVIEWED_TRANSFORM?: VAMTransformT | null, CANONICAL_VARIANT_ID?: string | Uint8Array | null, ALTERNATE_VARIANT_IDS?: (string)[], ANNOTATIONS?: (VAMAnnotationT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMReview.d.ts.map