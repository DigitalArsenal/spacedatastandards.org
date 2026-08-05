import * as flatbuffers from 'flatbuffers';
import { cmrEvidenceRole } from './cmrEvidenceRole.js';
/**
 * Replayable provenance for one fact used by a $CMR.
 *
 * Each source gets its own entry. A publisher never merges CelesTrak group
 * membership, GCAT ownership, and $CAT/$BUS joins into one ambiguous citation.
 */
export declare class CMRProvenance implements flatbuffers.IUnpackableObject<CMRProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CMRProvenance;
    static getRootAsCMRProvenance(bb: flatbuffers.ByteBuffer, obj?: CMRProvenance): CMRProvenance;
    static getSizePrefixedRootAsCMRProvenance(bb: flatbuffers.ByteBuffer, obj?: CMRProvenance): CMRProvenance;
    ROLE(): cmrEvidenceRole;
    /**
     * Publisher name verbatim, such as "CelesTrak", "GCAT", or the SDN
     * provider that published the joined $CAT record.
     */
    SOURCE(): string;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Source dataset or product name verbatim, such as "active Starlink group"
     * or "GCAT satcat".
     */
    SOURCE_DATASET(): string;
    SOURCE_DATASET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Source-native row, group, object, or catalogue identifier.
     */
    SOURCE_RECORD_ID(): string | null;
    SOURCE_RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable URL or provider query identifying the source material.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source revision, edition, or upstream update marker verbatim.
     */
    SOURCE_VERSION(): string | null;
    SOURCE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond retrieval timestamp.
     */
    RETRIEVED_AT(): string;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * SHA-256 of the exact source payload bytes, as 64 lowercase hexadecimal
     * characters. Empty only when the source cannot expose replayable bytes.
     */
    SOURCE_SHA256(): string | null;
    SOURCE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Redistribution terms verbatim. Empty means unknown terms, never public
     * domain and never an implied grant.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attribution text required by the source.
     */
    ATTRIBUTION(): string | null;
    ATTRIBUTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source caveats or reconciliation notes; never a substitute for a field.
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCMRProvenance(builder: flatbuffers.Builder): void;
    static addRole(builder: flatbuffers.Builder, ROLE: cmrEvidenceRole): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addSourceDataset(builder: flatbuffers.Builder, SOURCE_DATASETOffset: flatbuffers.Offset): void;
    static addSourceRecordId(builder: flatbuffers.Builder, SOURCE_RECORD_IDOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceVersion(builder: flatbuffers.Builder, SOURCE_VERSIONOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static addSourceSha256(builder: flatbuffers.Builder, SOURCE_SHA256Offset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addAttribution(builder: flatbuffers.Builder, ATTRIBUTIONOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endCMRProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCMRProvenance(builder: flatbuffers.Builder, ROLE: cmrEvidenceRole, SOURCEOffset: flatbuffers.Offset, SOURCE_DATASETOffset: flatbuffers.Offset, SOURCE_RECORD_IDOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_VERSIONOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, SOURCE_SHA256Offset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, ATTRIBUTIONOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CMRProvenanceT;
    unpackTo(_o: CMRProvenanceT): void;
}
export declare class CMRProvenanceT implements flatbuffers.IGeneratedObject {
    ROLE: cmrEvidenceRole;
    SOURCE: string | Uint8Array | null;
    SOURCE_DATASET: string | Uint8Array | null;
    SOURCE_RECORD_ID: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_VERSION: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    SOURCE_SHA256: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    ATTRIBUTION: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(ROLE?: cmrEvidenceRole, SOURCE?: string | Uint8Array | null, SOURCE_DATASET?: string | Uint8Array | null, SOURCE_RECORD_ID?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_VERSION?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, SOURCE_SHA256?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, ATTRIBUTION?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CMRProvenance.d.ts.map