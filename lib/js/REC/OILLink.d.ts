import * as flatbuffers from 'flatbuffers';
import { OILEvidence, OILEvidenceT } from './OILEvidence.js';
import { OILIdentifier, OILIdentifierT } from './OILIdentifier.js';
import { oilLinkStatus } from './oilLinkStatus.js';
/**
 * One candidate link between two identifiers.
 */
export declare class OILLink implements flatbuffers.IUnpackableObject<OILLinkT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OILLink;
    static getRootAsOILLink(bb: flatbuffers.ByteBuffer, obj?: OILLink): OILLink;
    static getSizePrefixedRootAsOILLink(bb: flatbuffers.ByteBuffer, obj?: OILLink): OILLink;
    /**
     * The identifier being linked (typically the provider-native one).
     */
    LEFT(obj?: OILIdentifier): OILIdentifier | null;
    /**
     * The identifier it is linked to (typically the reference catalog's).
     */
    RIGHT(obj?: OILIdentifier): OILIdentifier | null;
    STATUS(): oilLinkStatus;
    /**
     * True when either side belongs to a group that is not one-to-one; such a
     * link never binds without review.
     */
    AMBIGUOUS(): boolean;
    EVIDENCE(obj?: OILEvidence): OILEvidence | null;
    /**
     * For a Duplicate, the LINE of the declaration it repeats; 0 = none.
     */
    DUPLICATE_OF(): number;
    /**
     * Why the link has its status (human-readable); empty when Candidate.
     */
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOILLink(builder: flatbuffers.Builder): void;
    static addLeft(builder: flatbuffers.Builder, LEFTOffset: flatbuffers.Offset): void;
    static addRight(builder: flatbuffers.Builder, RIGHTOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: oilLinkStatus): void;
    static addAmbiguous(builder: flatbuffers.Builder, AMBIGUOUS: boolean): void;
    static addEvidence(builder: flatbuffers.Builder, EVIDENCEOffset: flatbuffers.Offset): void;
    static addDuplicateOf(builder: flatbuffers.Builder, DUPLICATE_OF: number): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static endOILLink(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): OILLinkT;
    unpackTo(_o: OILLinkT): void;
}
export declare class OILLinkT implements flatbuffers.IGeneratedObject {
    LEFT: OILIdentifierT | null;
    RIGHT: OILIdentifierT | null;
    STATUS: oilLinkStatus;
    AMBIGUOUS: boolean;
    EVIDENCE: OILEvidenceT | null;
    DUPLICATE_OF: number;
    REASON: string | Uint8Array | null;
    constructor(LEFT?: OILIdentifierT | null, RIGHT?: OILIdentifierT | null, STATUS?: oilLinkStatus, AMBIGUOUS?: boolean, EVIDENCE?: OILEvidenceT | null, DUPLICATE_OF?: number, REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OILLink.d.ts.map