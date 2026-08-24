import * as flatbuffers from 'flatbuffers';
import { RFLModelBinding, RFLModelBindingT } from './RFLModelBinding.js';
import { rflMethod } from './rflMethod.js';
/**
 * Where this sample set came from, stated once for the record.
 */
export declare class RFLProvenance implements flatbuffers.IUnpackableObject<RFLProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFLProvenance;
    static getRootAsRFLProvenance(bb: flatbuffers.ByteBuffer, obj?: RFLProvenance): RFLProvenance;
    static getSizePrefixedRootAsRFLProvenance(bb: flatbuffers.ByteBuffer, obj?: RFLProvenance): RFLProvenance;
    METHOD(): rflMethod;
    /**
     * The producing system, dataset or measurement campaign. Required: a
     * budget time series with no stated source is not publishable.
     */
    SOURCE(): string;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Replayable query or scenario reference that regenerates this set.
     */
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the propagator that produced the geometry columns. A record
     * whose METHOD is MODELED or HYBRID and which carries geometry columns MUST
     * name it: geometry is only as good as the propagator, and the propagator is
     * a pluggable choice, never an assumed default.
     */
    PROPAGATOR_ID(): string | null;
    PROPAGATOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATOR_VERSION(): string | null;
    PROPAGATOR_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Force model or configuration identifier handed to the propagator.
     */
    PROPAGATOR_CONFIGURATION(): string | null;
    PROPAGATOR_CONFIGURATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uniform sampling step, seconds. Absent when SAMPLE_EPOCHS are irregular.
     */
    SAMPLING_STEP_S(): number;
    /**
     * Per-term model bindings.
     */
    MODELS(index: number, obj?: RFLModelBinding): RFLModelBinding | null;
    modelsLength(): number;
    /**
     * Weather or environment dataset the atmospheric terms were evaluated
     * against, when they were not evaluated against a statistical model.
     */
    ENVIRONMENT_DATASET(): string | null;
    ENVIRONMENT_DATASET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Terrain or surface dataset the blockage terms were evaluated against.
     */
    TERRAIN_DATASET(): string | null;
    TERRAIN_DATASET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix ms this set was computed or recorded.
     */
    COMPUTED_AT(): bigint;
    /**
     * Unix ms the upstream inputs were retrieved.
     */
    RETRIEVED_AT(): bigint;
    /**
     * Licence the source imposes on redistribution. An empty LICENSE means
     * UNKNOWN TERMS — never public domain, never a grant to redistribute.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the licence forbids commercial use of this set.
     */
    NON_COMMERCIAL_ONLY(): boolean;
    /**
     * Attribution the licence requires this record to carry downstream.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Primary `$PLG.PLUGIN_ID` / `$PMM.MODULE_ID` that produced this record.
     * MODELS remains the per-budget-term attribution surface.
     */
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content hash of the exact producing WASM artifact.
     */
    MODULE_CONTENT_HASH(): string | null;
    MODULE_CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRFLProvenance(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: rflMethod): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static addPropagatorId(builder: flatbuffers.Builder, PROPAGATOR_IDOffset: flatbuffers.Offset): void;
    static addPropagatorVersion(builder: flatbuffers.Builder, PROPAGATOR_VERSIONOffset: flatbuffers.Offset): void;
    static addPropagatorConfiguration(builder: flatbuffers.Builder, PROPAGATOR_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addSamplingStepS(builder: flatbuffers.Builder, SAMPLING_STEP_S: number): void;
    static addModels(builder: flatbuffers.Builder, MODELSOffset: flatbuffers.Offset): void;
    static createModelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startModelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnvironmentDataset(builder: flatbuffers.Builder, ENVIRONMENT_DATASETOffset: flatbuffers.Offset): void;
    static addTerrainDataset(builder: flatbuffers.Builder, TERRAIN_DATASETOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_AT: bigint): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addNonCommercialOnly(builder: flatbuffers.Builder, NON_COMMERCIAL_ONLY: boolean): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleContentHash(builder: flatbuffers.Builder, MODULE_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static endRFLProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFLProvenance(builder: flatbuffers.Builder, METHOD: rflMethod, SOURCEOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, PROPAGATOR_IDOffset: flatbuffers.Offset, PROPAGATOR_VERSIONOffset: flatbuffers.Offset, PROPAGATOR_CONFIGURATIONOffset: flatbuffers.Offset, SAMPLING_STEP_S: number, MODELSOffset: flatbuffers.Offset, ENVIRONMENT_DATASETOffset: flatbuffers.Offset, TERRAIN_DATASETOffset: flatbuffers.Offset, COMPUTED_AT: bigint, RETRIEVED_AT: bigint, LICENSEOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, CITATIONOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, MODULE_CONTENT_HASHOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFLProvenanceT;
    unpackTo(_o: RFLProvenanceT): void;
}
export declare class RFLProvenanceT implements flatbuffers.IGeneratedObject {
    METHOD: rflMethod;
    SOURCE: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    PROPAGATOR_ID: string | Uint8Array | null;
    PROPAGATOR_VERSION: string | Uint8Array | null;
    PROPAGATOR_CONFIGURATION: string | Uint8Array | null;
    SAMPLING_STEP_S: number;
    MODELS: (RFLModelBindingT)[];
    ENVIRONMENT_DATASET: string | Uint8Array | null;
    TERRAIN_DATASET: string | Uint8Array | null;
    COMPUTED_AT: bigint;
    RETRIEVED_AT: bigint;
    LICENSE: string | Uint8Array | null;
    NON_COMMERCIAL_ONLY: boolean;
    CITATION: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    MODULE_CONTENT_HASH: string | Uint8Array | null;
    constructor(METHOD?: rflMethod, SOURCE?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, PROPAGATOR_ID?: string | Uint8Array | null, PROPAGATOR_VERSION?: string | Uint8Array | null, PROPAGATOR_CONFIGURATION?: string | Uint8Array | null, SAMPLING_STEP_S?: number, MODELS?: (RFLModelBindingT)[], ENVIRONMENT_DATASET?: string | Uint8Array | null, TERRAIN_DATASET?: string | Uint8Array | null, COMPUTED_AT?: bigint, RETRIEVED_AT?: bigint, LICENSE?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean, CITATION?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, MODULE_CONTENT_HASH?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFLProvenance.d.ts.map