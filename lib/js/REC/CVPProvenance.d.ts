import * as flatbuffers from 'flatbuffers';
import { RFLModelBinding, RFLModelBindingT } from './RFLModelBinding.js';
import { rflMethod } from './rflMethod.js';
/**
 * Where this geometry came from.
 */
export declare class CVPProvenance implements flatbuffers.IUnpackableObject<CVPProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CVPProvenance;
    static getRootAsCVPProvenance(bb: flatbuffers.ByteBuffer, obj?: CVPProvenance): CVPProvenance;
    static getSizePrefixedRootAsCVPProvenance(bb: flatbuffers.ByteBuffer, obj?: CVPProvenance): CVPProvenance;
    METHOD(): rflMethod;
    /**
     * Producing system, dataset or campaign. Required.
     */
    SOURCE(): string;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Replayable query or scenario reference.
     */
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Propagator that produced the emitter geometry. A MODELED or HYBRID
     * product MUST name it.
     */
    PROPAGATOR_ID(): string | null;
    PROPAGATOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATOR_VERSION(): string | null;
    PROPAGATOR_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATOR_CONFIGURATION(): string | null;
    PROPAGATOR_CONFIGURATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$PLG.PLUGIN_ID` / `$PMM.MODULE_ID` that produced the rings.
     */
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_CONTENT_HASH(): string | null;
    MODULE_CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Per-term model bindings for the metric that was contoured, reusing the
     * `$RFL` binding so a footprint and the samples behind it cite the same
     * models.
     */
    MODELS(index: number, obj?: RFLModelBinding): RFLModelBinding | null;
    modelsLength(): number;
    /**
     * Algorithm that turned the sampled field into rings (e.g. "marching
     * squares", "alpha shape", "H3 cell union").
     */
    CONTOUR_ALGORITHM(): string | null;
    CONTOUR_ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Environment and terrain datasets the evaluation used.
     */
    ENVIRONMENT_DATASET(): string | null;
    ENVIRONMENT_DATASET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TERRAIN_DATASET(): string | null;
    TERRAIN_DATASET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dataset the 3D obstacles and their materials were drawn from.
     */
    OBSTACLE_DATASET(): string | null;
    OBSTACLE_DATASET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix ms computed and retrieved.
     */
    COMPUTED_AT(): bigint;
    RETRIEVED_AT(): bigint;
    /**
     * Licence terms. Empty means UNKNOWN TERMS.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NON_COMMERCIAL_ONLY(): boolean;
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCVPProvenance(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: rflMethod): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static addPropagatorId(builder: flatbuffers.Builder, PROPAGATOR_IDOffset: flatbuffers.Offset): void;
    static addPropagatorVersion(builder: flatbuffers.Builder, PROPAGATOR_VERSIONOffset: flatbuffers.Offset): void;
    static addPropagatorConfiguration(builder: flatbuffers.Builder, PROPAGATOR_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleContentHash(builder: flatbuffers.Builder, MODULE_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addModels(builder: flatbuffers.Builder, MODELSOffset: flatbuffers.Offset): void;
    static createModelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startModelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addContourAlgorithm(builder: flatbuffers.Builder, CONTOUR_ALGORITHMOffset: flatbuffers.Offset): void;
    static addEnvironmentDataset(builder: flatbuffers.Builder, ENVIRONMENT_DATASETOffset: flatbuffers.Offset): void;
    static addTerrainDataset(builder: flatbuffers.Builder, TERRAIN_DATASETOffset: flatbuffers.Offset): void;
    static addObstacleDataset(builder: flatbuffers.Builder, OBSTACLE_DATASETOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_AT: bigint): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addNonCommercialOnly(builder: flatbuffers.Builder, NON_COMMERCIAL_ONLY: boolean): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endCVPProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCVPProvenance(builder: flatbuffers.Builder, METHOD: rflMethod, SOURCEOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, PROPAGATOR_IDOffset: flatbuffers.Offset, PROPAGATOR_VERSIONOffset: flatbuffers.Offset, PROPAGATOR_CONFIGURATIONOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, MODULE_CONTENT_HASHOffset: flatbuffers.Offset, MODELSOffset: flatbuffers.Offset, CONTOUR_ALGORITHMOffset: flatbuffers.Offset, ENVIRONMENT_DATASETOffset: flatbuffers.Offset, TERRAIN_DATASETOffset: flatbuffers.Offset, OBSTACLE_DATASETOffset: flatbuffers.Offset, COMPUTED_AT: bigint, RETRIEVED_AT: bigint, LICENSEOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, CITATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CVPProvenanceT;
    unpackTo(_o: CVPProvenanceT): void;
}
export declare class CVPProvenanceT implements flatbuffers.IGeneratedObject {
    METHOD: rflMethod;
    SOURCE: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    PROPAGATOR_ID: string | Uint8Array | null;
    PROPAGATOR_VERSION: string | Uint8Array | null;
    PROPAGATOR_CONFIGURATION: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    MODULE_CONTENT_HASH: string | Uint8Array | null;
    MODELS: (RFLModelBindingT)[];
    CONTOUR_ALGORITHM: string | Uint8Array | null;
    ENVIRONMENT_DATASET: string | Uint8Array | null;
    TERRAIN_DATASET: string | Uint8Array | null;
    OBSTACLE_DATASET: string | Uint8Array | null;
    COMPUTED_AT: bigint;
    RETRIEVED_AT: bigint;
    LICENSE: string | Uint8Array | null;
    NON_COMMERCIAL_ONLY: boolean;
    CITATION: string | Uint8Array | null;
    constructor(METHOD?: rflMethod, SOURCE?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, PROPAGATOR_ID?: string | Uint8Array | null, PROPAGATOR_VERSION?: string | Uint8Array | null, PROPAGATOR_CONFIGURATION?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, MODULE_CONTENT_HASH?: string | Uint8Array | null, MODELS?: (RFLModelBindingT)[], CONTOUR_ALGORITHM?: string | Uint8Array | null, ENVIRONMENT_DATASET?: string | Uint8Array | null, TERRAIN_DATASET?: string | Uint8Array | null, OBSTACLE_DATASET?: string | Uint8Array | null, COMPUTED_AT?: bigint, RETRIEVED_AT?: bigint, LICENSE?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean, CITATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CVPProvenance.d.ts.map