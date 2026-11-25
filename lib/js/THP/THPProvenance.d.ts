import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
import { thpAccessTier } from './thpAccessTier.js';
import { thpCertaintyLevel } from './thpCertaintyLevel.js';
/**
 * Provenance and classification metadata for a threat parameter.
 */
export declare class THPProvenance implements flatbuffers.IUnpackableObject<THPProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): THPProvenance;
    static getRootAsTHPProvenance(bb: flatbuffers.ByteBuffer, obj?: THPProvenance): THPProvenance;
    static getSizePrefixedRootAsTHPProvenance(bb: flatbuffers.ByteBuffer, obj?: THPProvenance): THPProvenance;
    /**
     * URI or canonical source identifier for this parameter.
     */
    SOURCE_URI(): string;
    SOURCE_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Publication or revision date, ISO 8601 UTC.
     */
    PUBLISHED_DATE(): string | null;
    PUBLISHED_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epistemic certainty level of the parameter value.
     */
    CERTAINTY(): thpCertaintyLevel;
    /**
     * Access tier governing visibility of this parameter.
     */
    ACCESS_TIER(): thpAccessTier;
    /**
     * Optional full $PVN provenance block.
     */
    RECORD_PROVENANCE(obj?: PVN): PVN | null;
    /**
     * Explanatory analyst notes.
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTHPProvenance(builder: flatbuffers.Builder): void;
    static addSourceUri(builder: flatbuffers.Builder, SOURCE_URIOffset: flatbuffers.Offset): void;
    static addPublishedDate(builder: flatbuffers.Builder, PUBLISHED_DATEOffset: flatbuffers.Offset): void;
    static addCertainty(builder: flatbuffers.Builder, CERTAINTY: thpCertaintyLevel): void;
    static addAccessTier(builder: flatbuffers.Builder, ACCESS_TIER: thpAccessTier): void;
    static addRecordProvenance(builder: flatbuffers.Builder, RECORD_PROVENANCEOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endTHPProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): THPProvenanceT;
    unpackTo(_o: THPProvenanceT): void;
}
export declare class THPProvenanceT implements flatbuffers.IGeneratedObject {
    SOURCE_URI: string | Uint8Array | null;
    PUBLISHED_DATE: string | Uint8Array | null;
    CERTAINTY: thpCertaintyLevel;
    ACCESS_TIER: thpAccessTier;
    RECORD_PROVENANCE: PVNT | null;
    NOTES: string | Uint8Array | null;
    constructor(SOURCE_URI?: string | Uint8Array | null, PUBLISHED_DATE?: string | Uint8Array | null, CERTAINTY?: thpCertaintyLevel, ACCESS_TIER?: thpAccessTier, RECORD_PROVENANCE?: PVNT | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=THPProvenance.d.ts.map