import * as flatbuffers from 'flatbuffers';
/**
 * Verifiable Report descriptor
 */
export declare class RPT implements flatbuffers.IUnpackableObject<RPTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RPT;
    static getRootAsRPT(bb: flatbuffers.ByteBuffer, obj?: RPT): RPT;
    static getSizePrefixedRootAsRPT(bb: flatbuffers.ByteBuffer, obj?: RPT): RPT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable report identifier
     */
    REPORT_ID(): string;
    REPORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identifier of the report template used to render
     */
    TEMPLATE_ID(): string | null;
    TEMPLATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version of the report template
     */
    TEMPLATE_VERSION(): string | null;
    TEMPLATE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display title of the report
     */
    TITLE(): string | null;
    TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FlatSQL source query the report renders from
     */
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 over the canonical source-query result stream, so the data the
     * report was rendered from can be re-derived and verified
     */
    SOURCE_DATA_HASH(index: number): number | null;
    sourceDataHashLength(): number;
    sourceDataHashArray(): Uint8Array | null;
    /**
     * SHA-256 of the rendered report artifact
     */
    CONTENT_HASH(index: number): number | null;
    contentHashLength(): number;
    contentHashArray(): Uint8Array | null;
    /**
     * MIME type of the rendered artifact, e.g. "application/pdf", "text/html",
     * "text/csv"
     */
    CONTENT_TYPE(): string | null;
    CONTENT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional IPFS CID of the rendered artifact
     */
    CONTENT_CID(): string | null;
    CONTENT_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix ms the report was generated
     */
    GENERATED_AT(): bigint;
    /**
     * `$PLG.PLUGIN_ID` of the generator module
     */
    GENERATOR_MODULE_ID(): string | null;
    GENERATOR_MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version of the generator module
     */
    GENERATOR_MODULE_VERSION(): string | null;
    GENERATOR_MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CID of the `$EPM` that generated the report
     */
    CREATOR_EPM_CID(): string | null;
    CREATOR_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature by the creator `$EPM` over the report descriptor
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startRPT(builder: flatbuffers.Builder): void;
    static addReportId(builder: flatbuffers.Builder, REPORT_IDOffset: flatbuffers.Offset): void;
    static addTemplateId(builder: flatbuffers.Builder, TEMPLATE_IDOffset: flatbuffers.Offset): void;
    static addTemplateVersion(builder: flatbuffers.Builder, TEMPLATE_VERSIONOffset: flatbuffers.Offset): void;
    static addTitle(builder: flatbuffers.Builder, TITLEOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static addSourceDataHash(builder: flatbuffers.Builder, SOURCE_DATA_HASHOffset: flatbuffers.Offset): void;
    static createSourceDataHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSourceDataHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static addContentHash(builder: flatbuffers.Builder, CONTENT_HASHOffset: flatbuffers.Offset): void;
    static createContentHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startContentHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static addContentType(builder: flatbuffers.Builder, CONTENT_TYPEOffset: flatbuffers.Offset): void;
    static addContentCid(builder: flatbuffers.Builder, CONTENT_CIDOffset: flatbuffers.Offset): void;
    static addGeneratedAt(builder: flatbuffers.Builder, GENERATED_AT: bigint): void;
    static addGeneratorModuleId(builder: flatbuffers.Builder, GENERATOR_MODULE_IDOffset: flatbuffers.Offset): void;
    static addGeneratorModuleVersion(builder: flatbuffers.Builder, GENERATOR_MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addCreatorEpmCid(builder: flatbuffers.Builder, CREATOR_EPM_CIDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRPT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRPTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRPTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRPT(builder: flatbuffers.Builder, REPORT_IDOffset: flatbuffers.Offset, TEMPLATE_IDOffset: flatbuffers.Offset, TEMPLATE_VERSIONOffset: flatbuffers.Offset, TITLEOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, SOURCE_DATA_HASHOffset: flatbuffers.Offset, CONTENT_HASHOffset: flatbuffers.Offset, CONTENT_TYPEOffset: flatbuffers.Offset, CONTENT_CIDOffset: flatbuffers.Offset, GENERATED_AT: bigint, GENERATOR_MODULE_IDOffset: flatbuffers.Offset, GENERATOR_MODULE_VERSIONOffset: flatbuffers.Offset, CREATOR_EPM_CIDOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RPTT;
    unpackTo(_o: RPTT): void;
}
export declare class RPTT implements flatbuffers.IGeneratedObject {
    REPORT_ID: string | Uint8Array | null;
    TEMPLATE_ID: string | Uint8Array | null;
    TEMPLATE_VERSION: string | Uint8Array | null;
    TITLE: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    SOURCE_DATA_HASH: (number)[];
    CONTENT_HASH: (number)[];
    CONTENT_TYPE: string | Uint8Array | null;
    CONTENT_CID: string | Uint8Array | null;
    GENERATED_AT: bigint;
    GENERATOR_MODULE_ID: string | Uint8Array | null;
    GENERATOR_MODULE_VERSION: string | Uint8Array | null;
    CREATOR_EPM_CID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(REPORT_ID?: string | Uint8Array | null, TEMPLATE_ID?: string | Uint8Array | null, TEMPLATE_VERSION?: string | Uint8Array | null, TITLE?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, SOURCE_DATA_HASH?: (number)[], CONTENT_HASH?: (number)[], CONTENT_TYPE?: string | Uint8Array | null, CONTENT_CID?: string | Uint8Array | null, GENERATED_AT?: bigint, GENERATOR_MODULE_ID?: string | Uint8Array | null, GENERATOR_MODULE_VERSION?: string | Uint8Array | null, CREATOR_EPM_CID?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RPT.d.ts.map