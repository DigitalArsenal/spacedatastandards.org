import * as flatbuffers from 'flatbuffers';
/**
 * Numerical convergence diagnostics for the fused estimator.
 */
export declare class GELConvergenceDiagnostics implements flatbuffers.IUnpackableObject<GELConvergenceDiagnosticsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GELConvergenceDiagnostics;
    static getRootAsGELConvergenceDiagnostics(bb: flatbuffers.ByteBuffer, obj?: GELConvergenceDiagnostics): GELConvergenceDiagnostics;
    static getSizePrefixedRootAsGELConvergenceDiagnostics(bb: flatbuffers.ByteBuffer, obj?: GELConvergenceDiagnostics): GELConvergenceDiagnostics;
    CONVERGED(): boolean;
    ITERATION_COUNT(): number;
    OBJECTIVE_VALUE(): number;
    OBJECTIVE_CHANGE(): number;
    STEP_NORM_M(): number;
    GRADIENT_NORM(): number;
    NORMAL_MATRIX_CONDITION_NUMBER(): number;
    DEGREES_OF_FREEDOM(): number;
    TERMINATION_REASON(): string | null;
    TERMINATION_REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGELConvergenceDiagnostics(builder: flatbuffers.Builder): void;
    static addConverged(builder: flatbuffers.Builder, CONVERGED: boolean): void;
    static addIterationCount(builder: flatbuffers.Builder, ITERATION_COUNT: number): void;
    static addObjectiveValue(builder: flatbuffers.Builder, OBJECTIVE_VALUE: number): void;
    static addObjectiveChange(builder: flatbuffers.Builder, OBJECTIVE_CHANGE: number): void;
    static addStepNormM(builder: flatbuffers.Builder, STEP_NORM_M: number): void;
    static addGradientNorm(builder: flatbuffers.Builder, GRADIENT_NORM: number): void;
    static addNormalMatrixConditionNumber(builder: flatbuffers.Builder, NORMAL_MATRIX_CONDITION_NUMBER: number): void;
    static addDegreesOfFreedom(builder: flatbuffers.Builder, DEGREES_OF_FREEDOM: number): void;
    static addTerminationReason(builder: flatbuffers.Builder, TERMINATION_REASONOffset: flatbuffers.Offset): void;
    static endGELConvergenceDiagnostics(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGELConvergenceDiagnostics(builder: flatbuffers.Builder, CONVERGED: boolean, ITERATION_COUNT: number, OBJECTIVE_VALUE: number, OBJECTIVE_CHANGE: number, STEP_NORM_M: number, GRADIENT_NORM: number, NORMAL_MATRIX_CONDITION_NUMBER: number, DEGREES_OF_FREEDOM: number, TERMINATION_REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GELConvergenceDiagnosticsT;
    unpackTo(_o: GELConvergenceDiagnosticsT): void;
}
export declare class GELConvergenceDiagnosticsT implements flatbuffers.IGeneratedObject {
    CONVERGED: boolean;
    ITERATION_COUNT: number;
    OBJECTIVE_VALUE: number;
    OBJECTIVE_CHANGE: number;
    STEP_NORM_M: number;
    GRADIENT_NORM: number;
    NORMAL_MATRIX_CONDITION_NUMBER: number;
    DEGREES_OF_FREEDOM: number;
    TERMINATION_REASON: string | Uint8Array | null;
    constructor(CONVERGED?: boolean, ITERATION_COUNT?: number, OBJECTIVE_VALUE?: number, OBJECTIVE_CHANGE?: number, STEP_NORM_M?: number, GRADIENT_NORM?: number, NORMAL_MATRIX_CONDITION_NUMBER?: number, DEGREES_OF_FREEDOM?: number, TERMINATION_REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GELConvergenceDiagnostics.d.ts.map