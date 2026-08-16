import * as flatbuffers from 'flatbuffers';
/**
 * Provenance of the assertions behind a group. Field-for-field the
 * `$CMR` provenance shape, so one consumer parses both.
 */
export declare class EGPProvenance implements flatbuffers.IUnpackableObject<EGPProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EGPProvenance;
    static getRootAsEGPProvenance(bb: flatbuffers.ByteBuffer, obj?: EGPProvenance): EGPProvenance;
    static getSizePrefixedRootAsEGPProvenance(bb: flatbuffers.ByteBuffer, obj?: EGPProvenance): EGPProvenance;
    /**
     * Publisher name verbatim as that publisher states it.
     */
    SOURCE(): string;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Source dataset or product name verbatim.
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
    static startEGPProvenance(builder: flatbuffers.Builder): void;
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
    static endEGPProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEGPProvenance(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset, SOURCE_DATASETOffset: flatbuffers.Offset, SOURCE_RECORD_IDOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_VERSIONOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, SOURCE_SHA256Offset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, ATTRIBUTIONOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EGPProvenanceT;
    unpackTo(_o: EGPProvenanceT): void;
}
export declare class EGPProvenanceT implements flatbuffers.IGeneratedObject {
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
    constructor(SOURCE?: string | Uint8Array | null, SOURCE_DATASET?: string | Uint8Array | null, SOURCE_RECORD_ID?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_VERSION?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, SOURCE_SHA256?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, ATTRIBUTION?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EGPProvenance.d.ts.map