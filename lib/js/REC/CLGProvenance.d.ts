import * as flatbuffers from 'flatbuffers';
import { clgAnalysisScope } from './clgAnalysisScope.js';
import { clgPropagationTiming } from './clgPropagationTiming.js';
/**
 * Module-known values only; host identity is separate PVN on CLGResult.
 */
export declare class CLGProvenance implements flatbuffers.IUnpackableObject<CLGProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGProvenance;
    static getRootAsCLGProvenance(bb: flatbuffers.ByteBuffer, obj?: CLGProvenance): CLGProvenance;
    static getSizePrefixedRootAsCLGProvenance(bb: flatbuffers.ByteBuffer, obj?: CLGProvenance): CLGProvenance;
    DEFINITION_SHA256(): string;
    DEFINITION_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * One 64-character lowercase hex digest per block in sequence order.
     */
    STATE_BLOCK_SHA256(index: number): string;
    STATE_BLOCK_SHA256(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    stateBlockSha256Length(): number;
    ALGORITHM_ID(): string;
    ALGORITHM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ROOT_ERROR_BOUND_S(): number;
    SOURCE_ERROR_BOUND_S(): number;
    FRAME_TIME_ERROR_BOUND_S(): number;
    RANGE_ERROR_BOUND_M(): number;
    /**
     * Mandatory, >= max compatible range/c for SIMULTANEOUS, and increased
     * when needed to bound actual model discrepancy; interbody simultaneous fails.
     */
    MODEL_ERROR_BOUND_S(): number;
    ANALYSIS_SCOPE(): clgAnalysisScope;
    TIMING(): clgPropagationTiming;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_ROOT_ERROR_BOUND_S(): boolean;
    HAS_SOURCE_ERROR_BOUND_S(): boolean;
    HAS_FRAME_TIME_ERROR_BOUND_S(): boolean;
    HAS_RANGE_ERROR_BOUND_M(): boolean;
    HAS_MODEL_ERROR_BOUND_S(): boolean;
    HAS_ANALYSIS_SCOPE(): boolean;
    HAS_TIMING(): boolean;
    static startCLGProvenance(builder: flatbuffers.Builder): void;
    static addDefinitionSha256(builder: flatbuffers.Builder, DEFINITION_SHA256Offset: flatbuffers.Offset): void;
    static addStateBlockSha256(builder: flatbuffers.Builder, STATE_BLOCK_SHA256Offset: flatbuffers.Offset): void;
    static createStateBlockSha256Vector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStateBlockSha256Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addAlgorithmId(builder: flatbuffers.Builder, ALGORITHM_IDOffset: flatbuffers.Offset): void;
    static addRootErrorBoundS(builder: flatbuffers.Builder, ROOT_ERROR_BOUND_S: number): void;
    static addSourceErrorBoundS(builder: flatbuffers.Builder, SOURCE_ERROR_BOUND_S: number): void;
    static addFrameTimeErrorBoundS(builder: flatbuffers.Builder, FRAME_TIME_ERROR_BOUND_S: number): void;
    static addRangeErrorBoundM(builder: flatbuffers.Builder, RANGE_ERROR_BOUND_M: number): void;
    static addModelErrorBoundS(builder: flatbuffers.Builder, MODEL_ERROR_BOUND_S: number): void;
    static addAnalysisScope(builder: flatbuffers.Builder, ANALYSIS_SCOPE: clgAnalysisScope): void;
    static addTiming(builder: flatbuffers.Builder, TIMING: clgPropagationTiming): void;
    static addHasRootErrorBoundS(builder: flatbuffers.Builder, HAS_ROOT_ERROR_BOUND_S: boolean): void;
    static addHasSourceErrorBoundS(builder: flatbuffers.Builder, HAS_SOURCE_ERROR_BOUND_S: boolean): void;
    static addHasFrameTimeErrorBoundS(builder: flatbuffers.Builder, HAS_FRAME_TIME_ERROR_BOUND_S: boolean): void;
    static addHasRangeErrorBoundM(builder: flatbuffers.Builder, HAS_RANGE_ERROR_BOUND_M: boolean): void;
    static addHasModelErrorBoundS(builder: flatbuffers.Builder, HAS_MODEL_ERROR_BOUND_S: boolean): void;
    static addHasAnalysisScope(builder: flatbuffers.Builder, HAS_ANALYSIS_SCOPE: boolean): void;
    static addHasTiming(builder: flatbuffers.Builder, HAS_TIMING: boolean): void;
    static endCLGProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCLGProvenance(builder: flatbuffers.Builder, DEFINITION_SHA256Offset: flatbuffers.Offset, STATE_BLOCK_SHA256Offset: flatbuffers.Offset, ALGORITHM_IDOffset: flatbuffers.Offset, ROOT_ERROR_BOUND_S: number, SOURCE_ERROR_BOUND_S: number, FRAME_TIME_ERROR_BOUND_S: number, RANGE_ERROR_BOUND_M: number, MODEL_ERROR_BOUND_S: number, ANALYSIS_SCOPE: clgAnalysisScope, TIMING: clgPropagationTiming, HAS_ROOT_ERROR_BOUND_S: boolean, HAS_SOURCE_ERROR_BOUND_S: boolean, HAS_FRAME_TIME_ERROR_BOUND_S: boolean, HAS_RANGE_ERROR_BOUND_M: boolean, HAS_MODEL_ERROR_BOUND_S: boolean, HAS_ANALYSIS_SCOPE: boolean, HAS_TIMING: boolean): flatbuffers.Offset;
    unpack(): CLGProvenanceT;
    unpackTo(_o: CLGProvenanceT): void;
}
export declare class CLGProvenanceT implements flatbuffers.IGeneratedObject {
    DEFINITION_SHA256: string | Uint8Array | null;
    STATE_BLOCK_SHA256: (string)[];
    ALGORITHM_ID: string | Uint8Array | null;
    ROOT_ERROR_BOUND_S: number;
    SOURCE_ERROR_BOUND_S: number;
    FRAME_TIME_ERROR_BOUND_S: number;
    RANGE_ERROR_BOUND_M: number;
    MODEL_ERROR_BOUND_S: number;
    ANALYSIS_SCOPE: clgAnalysisScope;
    TIMING: clgPropagationTiming;
    HAS_ROOT_ERROR_BOUND_S: boolean;
    HAS_SOURCE_ERROR_BOUND_S: boolean;
    HAS_FRAME_TIME_ERROR_BOUND_S: boolean;
    HAS_RANGE_ERROR_BOUND_M: boolean;
    HAS_MODEL_ERROR_BOUND_S: boolean;
    HAS_ANALYSIS_SCOPE: boolean;
    HAS_TIMING: boolean;
    constructor(DEFINITION_SHA256?: string | Uint8Array | null, STATE_BLOCK_SHA256?: (string)[], ALGORITHM_ID?: string | Uint8Array | null, ROOT_ERROR_BOUND_S?: number, SOURCE_ERROR_BOUND_S?: number, FRAME_TIME_ERROR_BOUND_S?: number, RANGE_ERROR_BOUND_M?: number, MODEL_ERROR_BOUND_S?: number, ANALYSIS_SCOPE?: clgAnalysisScope, TIMING?: clgPropagationTiming, HAS_ROOT_ERROR_BOUND_S?: boolean, HAS_SOURCE_ERROR_BOUND_S?: boolean, HAS_FRAME_TIME_ERROR_BOUND_S?: boolean, HAS_RANGE_ERROR_BOUND_M?: boolean, HAS_MODEL_ERROR_BOUND_S?: boolean, HAS_ANALYSIS_SCOPE?: boolean, HAS_TIMING?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGProvenance.d.ts.map