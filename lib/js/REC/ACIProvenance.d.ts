import * as flatbuffers from 'flatbuffers';
import { rflMethod } from './rflMethod.js';
/**
 * Where this interval set came from.
 */
export declare class ACIProvenance implements flatbuffers.IUnpackableObject<ACIProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACIProvenance;
    static getRootAsACIProvenance(bb: flatbuffers.ByteBuffer, obj?: ACIProvenance): ACIProvenance;
    static getSizePrefixedRootAsACIProvenance(bb: flatbuffers.ByteBuffer, obj?: ACIProvenance): ACIProvenance;
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
     * Propagator that produced the geometry the boundaries were found in. A
     * MODELED or HYBRID interval set MUST name it: the propagator is a
     * pluggable choice and never an assumed default.
     */
    PROPAGATOR_ID(): string | null;
    PROPAGATOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATOR_VERSION(): string | null;
    PROPAGATOR_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATOR_CONFIGURATION(): string | null;
    PROPAGATOR_CONFIGURATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$PLG.PLUGIN_ID` / `$PMM.MODULE_ID` that computed the intervals.
     */
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_CONTENT_HASH(): string | null;
    MODULE_CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sampling step of the underlying grid, seconds.
     */
    SAMPLING_STEP_S(): number;
    /**
     * How a boundary between two samples was refined (e.g. "none", "linear",
     * "bisection", "brent"). "none" means the boundary IS a grid epoch.
     */
    BOUNDARY_REFINEMENT(): string | null;
    BOUNDARY_REFINEMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Worst-case uncertainty of every boundary in this record, seconds. With
     * no refinement this equals SAMPLING_STEP_S.
     */
    BOUNDARY_TOLERANCE_S(): number;
    /**
     * Minimum elevation applied, degrees, when a single mask governed the set.
     */
    MIN_ELEVATION_DEG(): number;
    /**
     * Unix ms computed and retrieved.
     */
    COMPUTED_AT(): bigint;
    RETRIEVED_AT(): bigint;
    /**
     * Licence terms. Empty means UNKNOWN TERMS — never a grant to
     * redistribute.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NON_COMMERCIAL_ONLY(): boolean;
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startACIProvenance(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: rflMethod): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static addPropagatorId(builder: flatbuffers.Builder, PROPAGATOR_IDOffset: flatbuffers.Offset): void;
    static addPropagatorVersion(builder: flatbuffers.Builder, PROPAGATOR_VERSIONOffset: flatbuffers.Offset): void;
    static addPropagatorConfiguration(builder: flatbuffers.Builder, PROPAGATOR_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleContentHash(builder: flatbuffers.Builder, MODULE_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addSamplingStepS(builder: flatbuffers.Builder, SAMPLING_STEP_S: number): void;
    static addBoundaryRefinement(builder: flatbuffers.Builder, BOUNDARY_REFINEMENTOffset: flatbuffers.Offset): void;
    static addBoundaryToleranceS(builder: flatbuffers.Builder, BOUNDARY_TOLERANCE_S: number): void;
    static addMinElevationDeg(builder: flatbuffers.Builder, MIN_ELEVATION_DEG: number): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_AT: bigint): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addNonCommercialOnly(builder: flatbuffers.Builder, NON_COMMERCIAL_ONLY: boolean): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endACIProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACIProvenance(builder: flatbuffers.Builder, METHOD: rflMethod, SOURCEOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, PROPAGATOR_IDOffset: flatbuffers.Offset, PROPAGATOR_VERSIONOffset: flatbuffers.Offset, PROPAGATOR_CONFIGURATIONOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, MODULE_CONTENT_HASHOffset: flatbuffers.Offset, SAMPLING_STEP_S: number, BOUNDARY_REFINEMENTOffset: flatbuffers.Offset, BOUNDARY_TOLERANCE_S: number, MIN_ELEVATION_DEG: number, COMPUTED_AT: bigint, RETRIEVED_AT: bigint, LICENSEOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, CITATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACIProvenanceT;
    unpackTo(_o: ACIProvenanceT): void;
}
export declare class ACIProvenanceT implements flatbuffers.IGeneratedObject {
    METHOD: rflMethod;
    SOURCE: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    PROPAGATOR_ID: string | Uint8Array | null;
    PROPAGATOR_VERSION: string | Uint8Array | null;
    PROPAGATOR_CONFIGURATION: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    MODULE_CONTENT_HASH: string | Uint8Array | null;
    SAMPLING_STEP_S: number;
    BOUNDARY_REFINEMENT: string | Uint8Array | null;
    BOUNDARY_TOLERANCE_S: number;
    MIN_ELEVATION_DEG: number;
    COMPUTED_AT: bigint;
    RETRIEVED_AT: bigint;
    LICENSE: string | Uint8Array | null;
    NON_COMMERCIAL_ONLY: boolean;
    CITATION: string | Uint8Array | null;
    constructor(METHOD?: rflMethod, SOURCE?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, PROPAGATOR_ID?: string | Uint8Array | null, PROPAGATOR_VERSION?: string | Uint8Array | null, PROPAGATOR_CONFIGURATION?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, MODULE_CONTENT_HASH?: string | Uint8Array | null, SAMPLING_STEP_S?: number, BOUNDARY_REFINEMENT?: string | Uint8Array | null, BOUNDARY_TOLERANCE_S?: number, MIN_ELEVATION_DEG?: number, COMPUTED_AT?: bigint, RETRIEVED_AT?: bigint, LICENSE?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean, CITATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACIProvenance.d.ts.map