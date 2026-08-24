import * as flatbuffers from 'flatbuffers';
/**
 * Provenance of an emitter descriptor or emission mask. Capability schemas
 * carry model names and citations as data so the IDL remains provider-neutral.
 */
export declare class RFEProvenance implements flatbuffers.IUnpackableObject<RFEProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFEProvenance;
    static getRootAsRFEProvenance(bb: flatbuffers.ByteBuffer, obj?: RFEProvenance): RFEProvenance;
    static getSizePrefixedRootAsRFEProvenance(bb: flatbuffers.ByteBuffer, obj?: RFEProvenance): RFEProvenance;
    SOURCE(): string;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODEL_NAME(): string | null;
    MODEL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODEL_VERSION(): string | null;
    MODEL_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_CONTENT_HASH(): string | null;
    MODULE_CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COMPUTED_AT(): bigint;
    static startRFEProvenance(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static addModelName(builder: flatbuffers.Builder, MODEL_NAMEOffset: flatbuffers.Offset): void;
    static addModelVersion(builder: flatbuffers.Builder, MODEL_VERSIONOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleContentHash(builder: flatbuffers.Builder, MODULE_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static endRFEProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFEProvenance(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, MODEL_NAMEOffset: flatbuffers.Offset, MODEL_VERSIONOffset: flatbuffers.Offset, CITATIONOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, MODULE_CONTENT_HASHOffset: flatbuffers.Offset, COMPUTED_AT: bigint): flatbuffers.Offset;
    unpack(): RFEProvenanceT;
    unpackTo(_o: RFEProvenanceT): void;
}
export declare class RFEProvenanceT implements flatbuffers.IGeneratedObject {
    SOURCE: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    MODEL_NAME: string | Uint8Array | null;
    MODEL_VERSION: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    MODULE_CONTENT_HASH: string | Uint8Array | null;
    COMPUTED_AT: bigint;
    constructor(SOURCE?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, MODEL_NAME?: string | Uint8Array | null, MODEL_VERSION?: string | Uint8Array | null, CITATION?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, MODULE_CONTENT_HASH?: string | Uint8Array | null, COMPUTED_AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFEProvenance.d.ts.map