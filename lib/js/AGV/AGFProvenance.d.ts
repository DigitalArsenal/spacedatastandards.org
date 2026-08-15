import * as flatbuffers from 'flatbuffers';
import { agfSourceClass } from './agfSourceClass.js';
/**
 * Where this field came from and how it was produced. Provenance is DATA:
 * specific instruments, products and producers are named here as strings, not
 * in an enumeration.
 */
export declare class AGFProvenance implements flatbuffers.IUnpackableObject<AGFProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGFProvenance;
    static getRootAsAGFProvenance(bb: flatbuffers.ByteBuffer, obj?: AGFProvenance): AGFProvenance;
    static getSizePrefixedRootAsAGFProvenance(bb: flatbuffers.ByteBuffer, obj?: AGFProvenance): AGFProvenance;
    /**
     * What kind of system produced the field.
     */
    SOURCE_CLASS(): agfSourceClass;
    /**
     * Identity of the specific platform, instrument or model instance, as its
     * operator states it. Required: an unattributed field is not publishable.
     */
    SOURCE_ID(): string;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identity of the specific product or algorithm output within SOURCE_ID.
     */
    PRODUCT_ID(): string | null;
    PRODUCT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Organisation that produced and published the field.
     */
    PRODUCER(): string | null;
    PRODUCER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable location the field was retrieved from.
     */
    SOURCE_URI(): string | null;
    SOURCE_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version of the retrieval or model configuration.
     */
    ALGORITHM_VERSION(): string | null;
    ALGORITHM_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$PLG.PLUGIN_ID` / `$PMM.MODULE_ID` that produced or transformed it.
     */
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_CONTENT_HASH(): string | null;
    MODULE_CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds produced and retrieved.
     */
    PRODUCED_AT(): bigint;
    RETRIEVED_AT(): bigint;
    /**
     * Licence terms. Empty means UNKNOWN TERMS — never public domain, never a
     * grant to redistribute.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NON_COMMERCIAL_ONLY(): boolean;
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAGFProvenance(builder: flatbuffers.Builder): void;
    static addSourceClass(builder: flatbuffers.Builder, SOURCE_CLASS: agfSourceClass): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addProductId(builder: flatbuffers.Builder, PRODUCT_IDOffset: flatbuffers.Offset): void;
    static addProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset): void;
    static addSourceUri(builder: flatbuffers.Builder, SOURCE_URIOffset: flatbuffers.Offset): void;
    static addAlgorithmVersion(builder: flatbuffers.Builder, ALGORITHM_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleContentHash(builder: flatbuffers.Builder, MODULE_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addProducedAt(builder: flatbuffers.Builder, PRODUCED_AT: bigint): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_AT: bigint): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addNonCommercialOnly(builder: flatbuffers.Builder, NON_COMMERCIAL_ONLY: boolean): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endAGFProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAGFProvenance(builder: flatbuffers.Builder, SOURCE_CLASS: agfSourceClass, SOURCE_IDOffset: flatbuffers.Offset, PRODUCT_IDOffset: flatbuffers.Offset, PRODUCEROffset: flatbuffers.Offset, SOURCE_URIOffset: flatbuffers.Offset, ALGORITHM_VERSIONOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, MODULE_CONTENT_HASHOffset: flatbuffers.Offset, PRODUCED_AT: bigint, RETRIEVED_AT: bigint, LICENSEOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, CITATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AGFProvenanceT;
    unpackTo(_o: AGFProvenanceT): void;
}
export declare class AGFProvenanceT implements flatbuffers.IGeneratedObject {
    SOURCE_CLASS: agfSourceClass;
    SOURCE_ID: string | Uint8Array | null;
    PRODUCT_ID: string | Uint8Array | null;
    PRODUCER: string | Uint8Array | null;
    SOURCE_URI: string | Uint8Array | null;
    ALGORITHM_VERSION: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    MODULE_CONTENT_HASH: string | Uint8Array | null;
    PRODUCED_AT: bigint;
    RETRIEVED_AT: bigint;
    LICENSE: string | Uint8Array | null;
    NON_COMMERCIAL_ONLY: boolean;
    CITATION: string | Uint8Array | null;
    constructor(SOURCE_CLASS?: agfSourceClass, SOURCE_ID?: string | Uint8Array | null, PRODUCT_ID?: string | Uint8Array | null, PRODUCER?: string | Uint8Array | null, SOURCE_URI?: string | Uint8Array | null, ALGORITHM_VERSION?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, MODULE_CONTENT_HASH?: string | Uint8Array | null, PRODUCED_AT?: bigint, RETRIEVED_AT?: bigint, LICENSE?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean, CITATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGFProvenance.d.ts.map