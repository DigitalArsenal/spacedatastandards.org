import * as flatbuffers from 'flatbuffers';
/**
 * Canonical query metadata that can replay the dataset selection.
 */
export declare class DPMQueryBinding implements flatbuffers.IUnpackableObject<DPMQueryBindingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DPMQueryBinding;
    static getRootAsDPMQueryBinding(bb: flatbuffers.ByteBuffer, obj?: DPMQueryBinding): DPMQueryBinding;
    static getSizePrefixedRootAsDPMQueryBinding(bb: flatbuffers.ByteBuffer, obj?: DPMQueryBinding): DPMQueryBinding;
    /**
     * Canonical query text or canonical JSON representation.
     */
    CANONICAL_QUERY(): string;
    CANONICAL_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * SHA-256 hash of CANONICAL_QUERY, lowercase hex.
     */
    QUERY_SHA256(): string;
    QUERY_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * SHA-256 hash of the ordered result bytes, lowercase hex.
     */
    RESULT_SHA256(): string;
    RESULT_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Query engine or profile name, e.g. FlatSQL.
     */
    QUERY_ENGINE(): string | null;
    QUERY_ENGINE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Query engine version or profile version.
     */
    QUERY_ENGINE_VERSION(): string | null;
    QUERY_ENGINE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Canonical ordering of result records before RESULT_SHA256 or DATA_ROOT is
     * computed. Providers MUST stream records in this order unless each chunk
     * includes enough proof material to restore and verify the canonical order.
     */
    CANONICAL_ORDER(): string | null;
    CANONICAL_ORDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Query protocol name/version for provider-mediated retrieval, e.g.
     * /sdn/dataset-query/1.0.0. A subscriber verifies the PNM and DPM, opens this
     * protocol to the provider, submits the signed query or a permitted subset,
     * and imports only responses that verify against the signed roots.
     */
    QUERY_PROTOCOL(): string | null;
    QUERY_PROTOCOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SDS schema names selected by the query.
     */
    SCHEMA_NAMES(index: number): string;
    SCHEMA_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    schemaNamesLength(): number;
    /**
     * Provider peer IDs selected by the query.
     */
    PROVIDER_IDS(index: number): string;
    PROVIDER_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    providerIdsLength(): number;
    /**
     * Source names selected by the query.
     */
    SOURCE_NAMES(index: number): string;
    SOURCE_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourceNamesLength(): number;
    /**
     * Batch IDs selected by the query.
     */
    BATCH_IDS(index: number): string;
    BATCH_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    batchIdsLength(): number;
    /**
     * Inclusive query window start in ISO 8601 UTC.
     */
    WINDOW_START(): string | null;
    WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inclusive query window end in ISO 8601 UTC.
     */
    WINDOW_END(): string | null;
    WINDOW_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDPMQueryBinding(builder: flatbuffers.Builder): void;
    static addCanonicalQuery(builder: flatbuffers.Builder, CANONICAL_QUERYOffset: flatbuffers.Offset): void;
    static addQuerySha256(builder: flatbuffers.Builder, QUERY_SHA256Offset: flatbuffers.Offset): void;
    static addResultSha256(builder: flatbuffers.Builder, RESULT_SHA256Offset: flatbuffers.Offset): void;
    static addQueryEngine(builder: flatbuffers.Builder, QUERY_ENGINEOffset: flatbuffers.Offset): void;
    static addQueryEngineVersion(builder: flatbuffers.Builder, QUERY_ENGINE_VERSIONOffset: flatbuffers.Offset): void;
    static addCanonicalOrder(builder: flatbuffers.Builder, CANONICAL_ORDEROffset: flatbuffers.Offset): void;
    static addQueryProtocol(builder: flatbuffers.Builder, QUERY_PROTOCOLOffset: flatbuffers.Offset): void;
    static addSchemaNames(builder: flatbuffers.Builder, SCHEMA_NAMESOffset: flatbuffers.Offset): void;
    static createSchemaNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSchemaNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProviderIds(builder: flatbuffers.Builder, PROVIDER_IDSOffset: flatbuffers.Offset): void;
    static createProviderIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProviderIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSourceNames(builder: flatbuffers.Builder, SOURCE_NAMESOffset: flatbuffers.Offset): void;
    static createSourceNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourceNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBatchIds(builder: flatbuffers.Builder, BATCH_IDSOffset: flatbuffers.Offset): void;
    static createBatchIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBatchIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addWindowEnd(builder: flatbuffers.Builder, WINDOW_ENDOffset: flatbuffers.Offset): void;
    static endDPMQueryBinding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDPMQueryBinding(builder: flatbuffers.Builder, CANONICAL_QUERYOffset: flatbuffers.Offset, QUERY_SHA256Offset: flatbuffers.Offset, RESULT_SHA256Offset: flatbuffers.Offset, QUERY_ENGINEOffset: flatbuffers.Offset, QUERY_ENGINE_VERSIONOffset: flatbuffers.Offset, CANONICAL_ORDEROffset: flatbuffers.Offset, QUERY_PROTOCOLOffset: flatbuffers.Offset, SCHEMA_NAMESOffset: flatbuffers.Offset, PROVIDER_IDSOffset: flatbuffers.Offset, SOURCE_NAMESOffset: flatbuffers.Offset, BATCH_IDSOffset: flatbuffers.Offset, WINDOW_STARTOffset: flatbuffers.Offset, WINDOW_ENDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DPMQueryBindingT;
    unpackTo(_o: DPMQueryBindingT): void;
}
export declare class DPMQueryBindingT implements flatbuffers.IGeneratedObject {
    CANONICAL_QUERY: string | Uint8Array | null;
    QUERY_SHA256: string | Uint8Array | null;
    RESULT_SHA256: string | Uint8Array | null;
    QUERY_ENGINE: string | Uint8Array | null;
    QUERY_ENGINE_VERSION: string | Uint8Array | null;
    CANONICAL_ORDER: string | Uint8Array | null;
    QUERY_PROTOCOL: string | Uint8Array | null;
    SCHEMA_NAMES: (string)[];
    PROVIDER_IDS: (string)[];
    SOURCE_NAMES: (string)[];
    BATCH_IDS: (string)[];
    WINDOW_START: string | Uint8Array | null;
    WINDOW_END: string | Uint8Array | null;
    constructor(CANONICAL_QUERY?: string | Uint8Array | null, QUERY_SHA256?: string | Uint8Array | null, RESULT_SHA256?: string | Uint8Array | null, QUERY_ENGINE?: string | Uint8Array | null, QUERY_ENGINE_VERSION?: string | Uint8Array | null, CANONICAL_ORDER?: string | Uint8Array | null, QUERY_PROTOCOL?: string | Uint8Array | null, SCHEMA_NAMES?: (string)[], PROVIDER_IDS?: (string)[], SOURCE_NAMES?: (string)[], BATCH_IDS?: (string)[], WINDOW_START?: string | Uint8Array | null, WINDOW_END?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DPMQueryBinding.d.ts.map