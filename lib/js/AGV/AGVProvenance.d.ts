import * as flatbuffers from 'flatbuffers';
import { agfSourceClass } from './agfSourceClass.js';
/**
 * Where this volume came from and how it was produced. Provenance is DATA:
 * specific models, products and producers are named here as strings, not in
 * an enumeration.
 */
export declare class AGVProvenance implements flatbuffers.IUnpackableObject<AGVProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGVProvenance;
    static getRootAsAGVProvenance(bb: flatbuffers.ByteBuffer, obj?: AGVProvenance): AGVProvenance;
    static getSizePrefixedRootAsAGVProvenance(bb: flatbuffers.ByteBuffer, obj?: AGVProvenance): AGVProvenance;
    /**
     * What kind of system produced the volume. Reuses the `$AGF` vocabulary.
     */
    SOURCE_CLASS(): agfSourceClass;
    /**
     * Identity of the specific model instance or platform, as its operator
     * states it. Required: an unattributed volume is not publishable.
     */
    SOURCE_ID(): string;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identity of the specific product or configuration within SOURCE_ID.
     */
    PRODUCT_ID(): string | null;
    PRODUCT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Organisation that produced and published the volume.
     */
    PRODUCER(): string | null;
    PRODUCER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable location the volume was retrieved from.
     */
    SOURCE_URI(): string | null;
    SOURCE_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version of the model or assimilation configuration.
     */
    ALGORITHM_VERSION(): string | null;
    ALGORITHM_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Horizontal resolution as the producer states it, for the record; the
     * authoritative geometry is PROJECTION_PARAMETERS.
     */
    NOMINAL_RESOLUTION(): string | null;
    NOMINAL_RESOLUTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static startAGVProvenance(builder: flatbuffers.Builder): void;
    static addSourceClass(builder: flatbuffers.Builder, SOURCE_CLASS: agfSourceClass): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addProductId(builder: flatbuffers.Builder, PRODUCT_IDOffset: flatbuffers.Offset): void;
    static addProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset): void;
    static addSourceUri(builder: flatbuffers.Builder, SOURCE_URIOffset: flatbuffers.Offset): void;
    static addAlgorithmVersion(builder: flatbuffers.Builder, ALGORITHM_VERSIONOffset: flatbuffers.Offset): void;
    static addNominalResolution(builder: flatbuffers.Builder, NOMINAL_RESOLUTIONOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleContentHash(builder: flatbuffers.Builder, MODULE_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addProducedAt(builder: flatbuffers.Builder, PRODUCED_AT: bigint): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_AT: bigint): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addNonCommercialOnly(builder: flatbuffers.Builder, NON_COMMERCIAL_ONLY: boolean): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endAGVProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAGVProvenance(builder: flatbuffers.Builder, SOURCE_CLASS: agfSourceClass, SOURCE_IDOffset: flatbuffers.Offset, PRODUCT_IDOffset: flatbuffers.Offset, PRODUCEROffset: flatbuffers.Offset, SOURCE_URIOffset: flatbuffers.Offset, ALGORITHM_VERSIONOffset: flatbuffers.Offset, NOMINAL_RESOLUTIONOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, MODULE_CONTENT_HASHOffset: flatbuffers.Offset, PRODUCED_AT: bigint, RETRIEVED_AT: bigint, LICENSEOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, CITATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AGVProvenanceT;
    unpackTo(_o: AGVProvenanceT): void;
}
export declare class AGVProvenanceT implements flatbuffers.IGeneratedObject {
    SOURCE_CLASS: agfSourceClass;
    SOURCE_ID: string | Uint8Array | null;
    PRODUCT_ID: string | Uint8Array | null;
    PRODUCER: string | Uint8Array | null;
    SOURCE_URI: string | Uint8Array | null;
    ALGORITHM_VERSION: string | Uint8Array | null;
    NOMINAL_RESOLUTION: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    MODULE_CONTENT_HASH: string | Uint8Array | null;
    PRODUCED_AT: bigint;
    RETRIEVED_AT: bigint;
    LICENSE: string | Uint8Array | null;
    NON_COMMERCIAL_ONLY: boolean;
    CITATION: string | Uint8Array | null;
    constructor(SOURCE_CLASS?: agfSourceClass, SOURCE_ID?: string | Uint8Array | null, PRODUCT_ID?: string | Uint8Array | null, PRODUCER?: string | Uint8Array | null, SOURCE_URI?: string | Uint8Array | null, ALGORITHM_VERSION?: string | Uint8Array | null, NOMINAL_RESOLUTION?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, MODULE_CONTENT_HASH?: string | Uint8Array | null, PRODUCED_AT?: bigint, RETRIEVED_AT?: bigint, LICENSE?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean, CITATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGVProvenance.d.ts.map