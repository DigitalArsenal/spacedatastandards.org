import * as flatbuffers from 'flatbuffers';
import { VAMAnnotation, VAMAnnotationT } from './VAMAnnotation.js';
import { visualAssetDecisionKind } from './visualAssetDecisionKind.js';
import { visualAssetReviewerRole } from './visualAssetReviewerRole.js';
/**
 * Signed metadata-only review. DECISION validation MUST equal APPROVE_METADATA_ONLY; no candidate binary or CID fields exist.
 * The metadata-review signed projection contains uppercase schema field names in schema declaration order: REVIEWER_ID; CAPABILITY_ID; REVIEWER_ROLE encoded as its unsigned enum integer; REPOSITORY; ISSUE_NUMBER; ENTITY_ID; VAM_ID; NONCE; DECISION encoded as its unsigned enum integer; CANDIDATE_ID; CANDIDATE_METADATA_SHA256; DECIDED_AT; REASONS; COMMENT when present; ANNOTATIONS; SIGNATURE_TYPE; and PREVIOUS_DECISION_SHA256 when present.
 * Absent optional fields are omitted and arrays preserve order. A verifier reconstructs exactly this projection, applies RFC 8785 JCS, hashes the UTF-8 serialization bytes, compares ENVELOPE_SHA256, and verifies SIGNATURE over the raw 32-byte digest. ENVELOPE_SHA256 and SIGNATURE are excluded from the projection.
 * The verifier must also enforce repository, issue, entity, and VAM equality; nonce single use; role authorization; exact metadata binding; and DECISION equal to APPROVE_METADATA_ONLY before trusting the decision.
 */
export declare class VAMMetadataOnlyReview implements flatbuffers.IUnpackableObject<VAMMetadataOnlyReviewT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMMetadataOnlyReview;
    static getRootAsVAMMetadataOnlyReview(bb: flatbuffers.ByteBuffer, obj?: VAMMetadataOnlyReview): VAMMetadataOnlyReview;
    static getSizePrefixedRootAsVAMMetadataOnlyReview(bb: flatbuffers.ByteBuffer, obj?: VAMMetadataOnlyReview): VAMMetadataOnlyReview;
    REVIEWER_ID(): string;
    REVIEWER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    CAPABILITY_ID(): string;
    CAPABILITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    REVIEWER_ROLE(): visualAssetReviewerRole;
    REPOSITORY(): string;
    REPOSITORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ISSUE_NUMBER(): string;
    ISSUE_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ENTITY_ID(): string;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    VAM_ID(): string;
    VAM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NONCE(): string;
    NONCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    DECISION(): visualAssetDecisionKind;
    CANDIDATE_ID(): string;
    CANDIDATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * 64 lowercase hexadecimal SHA-256 of the RFC 8785 JCS canonical JSON VAMSource projection using uppercase field names.
     * The VAMSource projection always includes SOURCE_RECORD_ID and SOURCE_URL; includes SOURCE_NAME, OBSERVED_AT, LICENSE_NAME, ATTRIBUTION, SOURCE_METADATA_SHA256, and NOTES only when present; and always includes LICENSE_CLASS, REDISTRIBUTION_PERMISSION, and DERIVATIVE_PERMISSION as unsigned enum integers. It contains no other fields.
     * A verifier reconstructs this projection from the candidate SOURCE and compares the digest before trusting DECISION.
     */
    CANDIDATE_METADATA_SHA256(): string;
    CANDIDATE_METADATA_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    DECIDED_AT(): string;
    DECIDED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    REASONS(index: number): string;
    REASONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    reasonsLength(): number;
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ANNOTATIONS(index: number, obj?: VAMAnnotation): VAMAnnotation | null;
    annotationsLength(): number;
    ENVELOPE_SHA256(): string;
    ENVELOPE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array;
    SIGNATURE_TYPE(): string;
    SIGNATURE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PREVIOUS_DECISION_SHA256(): string | null;
    PREVIOUS_DECISION_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startVAMMetadataOnlyReview(builder: flatbuffers.Builder): void;
    static addReviewerId(builder: flatbuffers.Builder, REVIEWER_IDOffset: flatbuffers.Offset): void;
    static addCapabilityId(builder: flatbuffers.Builder, CAPABILITY_IDOffset: flatbuffers.Offset): void;
    static addReviewerRole(builder: flatbuffers.Builder, REVIEWER_ROLE: visualAssetReviewerRole): void;
    static addRepository(builder: flatbuffers.Builder, REPOSITORYOffset: flatbuffers.Offset): void;
    static addIssueNumber(builder: flatbuffers.Builder, ISSUE_NUMBEROffset: flatbuffers.Offset): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addVamId(builder: flatbuffers.Builder, VAM_IDOffset: flatbuffers.Offset): void;
    static addNonce(builder: flatbuffers.Builder, NONCEOffset: flatbuffers.Offset): void;
    static addDecision(builder: flatbuffers.Builder, DECISION: visualAssetDecisionKind): void;
    static addCandidateId(builder: flatbuffers.Builder, CANDIDATE_IDOffset: flatbuffers.Offset): void;
    static addCandidateMetadataSha256(builder: flatbuffers.Builder, CANDIDATE_METADATA_SHA256Offset: flatbuffers.Offset): void;
    static addDecidedAt(builder: flatbuffers.Builder, DECIDED_ATOffset: flatbuffers.Offset): void;
    static addReasons(builder: flatbuffers.Builder, REASONSOffset: flatbuffers.Offset): void;
    static createReasonsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReasonsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addAnnotations(builder: flatbuffers.Builder, ANNOTATIONSOffset: flatbuffers.Offset): void;
    static createAnnotationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAnnotationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnvelopeSha256(builder: flatbuffers.Builder, ENVELOPE_SHA256Offset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignatureType(builder: flatbuffers.Builder, SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static addPreviousDecisionSha256(builder: flatbuffers.Builder, PREVIOUS_DECISION_SHA256Offset: flatbuffers.Offset): void;
    static endVAMMetadataOnlyReview(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVAMMetadataOnlyReview(builder: flatbuffers.Builder, REVIEWER_IDOffset: flatbuffers.Offset, CAPABILITY_IDOffset: flatbuffers.Offset, REVIEWER_ROLE: visualAssetReviewerRole, REPOSITORYOffset: flatbuffers.Offset, ISSUE_NUMBEROffset: flatbuffers.Offset, ENTITY_IDOffset: flatbuffers.Offset, VAM_IDOffset: flatbuffers.Offset, NONCEOffset: flatbuffers.Offset, DECISION: visualAssetDecisionKind, CANDIDATE_IDOffset: flatbuffers.Offset, CANDIDATE_METADATA_SHA256Offset: flatbuffers.Offset, DECIDED_ATOffset: flatbuffers.Offset, REASONSOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, ANNOTATIONSOffset: flatbuffers.Offset, ENVELOPE_SHA256Offset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, SIGNATURE_TYPEOffset: flatbuffers.Offset, PREVIOUS_DECISION_SHA256Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): VAMMetadataOnlyReviewT;
    unpackTo(_o: VAMMetadataOnlyReviewT): void;
}
export declare class VAMMetadataOnlyReviewT implements flatbuffers.IGeneratedObject {
    REVIEWER_ID: string | Uint8Array | null;
    CAPABILITY_ID: string | Uint8Array | null;
    REVIEWER_ROLE: visualAssetReviewerRole;
    REPOSITORY: string | Uint8Array | null;
    ISSUE_NUMBER: string | Uint8Array | null;
    ENTITY_ID: string | Uint8Array | null;
    VAM_ID: string | Uint8Array | null;
    NONCE: string | Uint8Array | null;
    DECISION: visualAssetDecisionKind;
    CANDIDATE_ID: string | Uint8Array | null;
    CANDIDATE_METADATA_SHA256: string | Uint8Array | null;
    DECIDED_AT: string | Uint8Array | null;
    REASONS: (string)[];
    COMMENT: string | Uint8Array | null;
    ANNOTATIONS: (VAMAnnotationT)[];
    ENVELOPE_SHA256: string | Uint8Array | null;
    SIGNATURE: (number)[];
    SIGNATURE_TYPE: string | Uint8Array | null;
    PREVIOUS_DECISION_SHA256: string | Uint8Array | null;
    constructor(REVIEWER_ID?: string | Uint8Array | null, CAPABILITY_ID?: string | Uint8Array | null, REVIEWER_ROLE?: visualAssetReviewerRole, REPOSITORY?: string | Uint8Array | null, ISSUE_NUMBER?: string | Uint8Array | null, ENTITY_ID?: string | Uint8Array | null, VAM_ID?: string | Uint8Array | null, NONCE?: string | Uint8Array | null, DECISION?: visualAssetDecisionKind, CANDIDATE_ID?: string | Uint8Array | null, CANDIDATE_METADATA_SHA256?: string | Uint8Array | null, DECIDED_AT?: string | Uint8Array | null, REASONS?: (string)[], COMMENT?: string | Uint8Array | null, ANNOTATIONS?: (VAMAnnotationT)[], ENVELOPE_SHA256?: string | Uint8Array | null, SIGNATURE?: (number)[], SIGNATURE_TYPE?: string | Uint8Array | null, PREVIOUS_DECISION_SHA256?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMMetadataOnlyReview.d.ts.map