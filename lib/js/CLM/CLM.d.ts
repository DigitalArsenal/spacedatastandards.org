import * as flatbuffers from 'flatbuffers';
import { CLMCountersignature, CLMCountersignatureT } from './CLMCountersignature.js';
import { clmClaimRole } from './clmClaimRole.js';
import { clmObjectKind } from './clmObjectKind.js';
/**
 * Ownership Claim Record - one claimant's signed statement over one object.
 */
export declare class CLM implements flatbuffers.IUnpackableObject<CLMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLM;
    static getRootAsCLM(bb: flatbuffers.ByteBuffer, obj?: CLM): CLM;
    static getSizePrefixedRootAsCLM(bb: flatbuffers.ByteBuffer, obj?: CLM): CLM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable claim identifier, normally
     * "<CLAIMANT_PEER_ID>:<OBJECT_KIND>:<OBJECT_ID>".
     */
    CLAIM_ID(): string;
    CLAIM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Peer identifier of the claiming party.
     */
    CLAIMANT_PEER_ID(): string;
    CLAIMANT_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Content identifier of the claiming party's identity record.
     */
    CLAIMANT_PROFILE_CID(): string | null;
    CLAIMANT_PROFILE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Class of object being claimed.
     */
    OBJECT_KIND(): clmObjectKind;
    /**
     * Identifier of the claimed object, in the form its own standard publishes:
     * the catalog number or international designator for a space object, the
     * site identifier for a site, the sensor identifier for a sensor, the
     * listing content identifier for a service.
     */
    OBJECT_ID(): string;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable name of the claimed object at the time of the claim.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Relationship asserted over the object.
     */
    ROLE(): clmClaimRole;
    /**
     * Free-text statement by the claimant, in the claimant's own words.
     */
    STATEMENT(): string | null;
    STATEMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Locator of publicly checkable evidence supporting the claim.
     */
    EVIDENCE_URL(): string | null;
    EVIDENCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp in milliseconds when the claim was first made.
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp in milliseconds when this record was last updated.
     */
    UPDATED_AT(): bigint;
    /**
     * True when this record tombstones the claim from the current set.
     */
    DELETED(): boolean;
    /**
     * Claimant signature over the canonical claim form with SIGNATURE and
     * COUNTERSIGNATURES cleared.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    /**
     * Attestations to this claim by other parties.
     */
    COUNTERSIGNATURES(index: number, obj?: CLMCountersignature): CLMCountersignature | null;
    countersignaturesLength(): number;
    static startCLM(builder: flatbuffers.Builder): void;
    static addClaimId(builder: flatbuffers.Builder, CLAIM_IDOffset: flatbuffers.Offset): void;
    static addClaimantPeerId(builder: flatbuffers.Builder, CLAIMANT_PEER_IDOffset: flatbuffers.Offset): void;
    static addClaimantProfileCid(builder: flatbuffers.Builder, CLAIMANT_PROFILE_CIDOffset: flatbuffers.Offset): void;
    static addObjectKind(builder: flatbuffers.Builder, OBJECT_KIND: clmObjectKind): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLE: clmClaimRole): void;
    static addStatement(builder: flatbuffers.Builder, STATEMENTOffset: flatbuffers.Offset): void;
    static addEvidenceUrl(builder: flatbuffers.Builder, EVIDENCE_URLOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addDeleted(builder: flatbuffers.Builder, DELETED: boolean): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCountersignatures(builder: flatbuffers.Builder, COUNTERSIGNATURESOffset: flatbuffers.Offset): void;
    static createCountersignaturesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCountersignaturesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCLM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCLMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCLMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCLM(builder: flatbuffers.Builder, CLAIM_IDOffset: flatbuffers.Offset, CLAIMANT_PEER_IDOffset: flatbuffers.Offset, CLAIMANT_PROFILE_CIDOffset: flatbuffers.Offset, OBJECT_KIND: clmObjectKind, OBJECT_IDOffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, ROLE: clmClaimRole, STATEMENTOffset: flatbuffers.Offset, EVIDENCE_URLOffset: flatbuffers.Offset, CREATED_AT: bigint, UPDATED_AT: bigint, DELETED: boolean, SIGNATUREOffset: flatbuffers.Offset, COUNTERSIGNATURESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CLMT;
    unpackTo(_o: CLMT): void;
}
export declare class CLMT implements flatbuffers.IGeneratedObject {
    CLAIM_ID: string | Uint8Array | null;
    CLAIMANT_PEER_ID: string | Uint8Array | null;
    CLAIMANT_PROFILE_CID: string | Uint8Array | null;
    OBJECT_KIND: clmObjectKind;
    OBJECT_ID: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    ROLE: clmClaimRole;
    STATEMENT: string | Uint8Array | null;
    EVIDENCE_URL: string | Uint8Array | null;
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    DELETED: boolean;
    SIGNATURE: (number)[];
    COUNTERSIGNATURES: (CLMCountersignatureT)[];
    constructor(CLAIM_ID?: string | Uint8Array | null, CLAIMANT_PEER_ID?: string | Uint8Array | null, CLAIMANT_PROFILE_CID?: string | Uint8Array | null, OBJECT_KIND?: clmObjectKind, OBJECT_ID?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, ROLE?: clmClaimRole, STATEMENT?: string | Uint8Array | null, EVIDENCE_URL?: string | Uint8Array | null, CREATED_AT?: bigint, UPDATED_AT?: bigint, DELETED?: boolean, SIGNATURE?: (number)[], COUNTERSIGNATURES?: (CLMCountersignatureT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLM.d.ts.map