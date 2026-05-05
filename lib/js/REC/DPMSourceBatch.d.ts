import * as flatbuffers from 'flatbuffers';
/**
 * Source batch metadata bound into the dataset publication.
 */
export declare class DPMSourceBatch implements flatbuffers.IUnpackableObject<DPMSourceBatchT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DPMSourceBatch;
    static getRootAsDPMSourceBatch(bb: flatbuffers.ByteBuffer, obj?: DPMSourceBatch): DPMSourceBatch;
    static getSizePrefixedRootAsDPMSourceBatch(bb: flatbuffers.ByteBuffer, obj?: DPMSourceBatch): DPMSourceBatch;
    /**
     * Provider-controlled source name.
     */
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original source URL.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 hash of raw source bytes, lowercase hex.
     */
    SOURCE_SHA256(): string | null;
    SOURCE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * HTTP ETag observed during retrieval.
     */
    HTTP_ETAG(): string | null;
    HTTP_ETAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * HTTP Last-Modified value observed during retrieval.
     */
    HTTP_LAST_MODIFIED(): string | null;
    HTTP_LAST_MODIFIED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Retrieval timestamp in ISO 8601 UTC.
     */
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parser or transform version.
     */
    PARSER_VERSION(): string | null;
    PARSER_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of normalized records emitted from this source.
     */
    RECORD_COUNT(): bigint;
    /**
     * Warnings or policy notes produced during normalization.
     */
    WARNINGS(index: number): string;
    WARNINGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    warningsLength(): number;
    static startDPMSourceBatch(builder: flatbuffers.Builder): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceSha256(builder: flatbuffers.Builder, SOURCE_SHA256Offset: flatbuffers.Offset): void;
    static addHttpEtag(builder: flatbuffers.Builder, HTTP_ETAGOffset: flatbuffers.Offset): void;
    static addHttpLastModified(builder: flatbuffers.Builder, HTTP_LAST_MODIFIEDOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static addParserVersion(builder: flatbuffers.Builder, PARSER_VERSIONOffset: flatbuffers.Offset): void;
    static addRecordCount(builder: flatbuffers.Builder, RECORD_COUNT: bigint): void;
    static addWarnings(builder: flatbuffers.Builder, WARNINGSOffset: flatbuffers.Offset): void;
    static createWarningsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWarningsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endDPMSourceBatch(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDPMSourceBatch(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_SHA256Offset: flatbuffers.Offset, HTTP_ETAGOffset: flatbuffers.Offset, HTTP_LAST_MODIFIEDOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, PARSER_VERSIONOffset: flatbuffers.Offset, RECORD_COUNT: bigint, WARNINGSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DPMSourceBatchT;
    unpackTo(_o: DPMSourceBatchT): void;
}
export declare class DPMSourceBatchT implements flatbuffers.IGeneratedObject {
    SOURCE_NAME: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_SHA256: string | Uint8Array | null;
    HTTP_ETAG: string | Uint8Array | null;
    HTTP_LAST_MODIFIED: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    PARSER_VERSION: string | Uint8Array | null;
    RECORD_COUNT: bigint;
    WARNINGS: (string)[];
    constructor(SOURCE_NAME?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_SHA256?: string | Uint8Array | null, HTTP_ETAG?: string | Uint8Array | null, HTTP_LAST_MODIFIED?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, PARSER_VERSION?: string | Uint8Array | null, RECORD_COUNT?: bigint, WARNINGS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DPMSourceBatch.d.ts.map