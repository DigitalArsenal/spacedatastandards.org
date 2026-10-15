import * as flatbuffers from 'flatbuffers';
import { SITCitation, SITCitationT } from './SITCitation.js';
import { siteLifecycleStatus } from './siteLifecycleStatus.js';
/**
 * One source's assertion of one lifecycle step of a site.
 */
export declare class SITStatusEvidence implements flatbuffers.IUnpackableObject<SITStatusEvidenceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SITStatusEvidence;
    static getRootAsSITStatusEvidence(bb: flatbuffers.ByteBuffer, obj?: SITStatusEvidence): SITStatusEvidence;
    static getSizePrefixedRootAsSITStatusEvidence(bb: flatbuffers.ByteBuffer, obj?: SITStatusEvidence): SITStatusEvidence;
    /**
     * The status the source states
     */
    STATUS(): siteLifecycleStatus;
    /**
     * When that status took effect, ISO 8601 at the source's precision (YYYY, YYYY-MM or YYYY-MM-DD)
     */
    STATUS_DATE(): string | null;
    STATUS_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Where the statement was read
     */
    CITATION(obj?: SITCitation): SITCitation | null;
    static startSITStatusEvidence(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: siteLifecycleStatus): void;
    static addStatusDate(builder: flatbuffers.Builder, STATUS_DATEOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endSITStatusEvidence(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SITStatusEvidenceT;
    unpackTo(_o: SITStatusEvidenceT): void;
}
export declare class SITStatusEvidenceT implements flatbuffers.IGeneratedObject {
    STATUS: siteLifecycleStatus;
    STATUS_DATE: string | Uint8Array | null;
    CITATION: SITCitationT | null;
    constructor(STATUS?: siteLifecycleStatus, STATUS_DATE?: string | Uint8Array | null, CITATION?: SITCitationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SITStatusEvidence.d.ts.map