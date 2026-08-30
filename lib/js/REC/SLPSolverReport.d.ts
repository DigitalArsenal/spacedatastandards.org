import * as flatbuffers from 'flatbuffers';
import { SLPIteration, SLPIterationT } from './SLPIteration.js';
import { slpSolveStatus } from './slpSolveStatus.js';
export declare class SLPSolverReport implements flatbuffers.IUnpackableObject<SLPSolverReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SLPSolverReport;
    static getRootAsSLPSolverReport(bb: flatbuffers.ByteBuffer, obj?: SLPSolverReport): SLPSolverReport;
    static getSizePrefixedRootAsSLPSolverReport(bb: flatbuffers.ByteBuffer, obj?: SLPSolverReport): SLPSolverReport;
    STATUS(): slpSolveStatus;
    MESSAGE(): string | null;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ITERATIONS(index: number, obj?: SLPIteration): SLPIteration | null;
    iterationsLength(): number;
    FINAL_VARIABLES(index: number): number | null;
    finalVariablesLength(): number;
    finalVariablesArray(): Float64Array | null;
    FINAL_VALUES(index: number): number | null;
    finalValuesLength(): number;
    finalValuesArray(): Float64Array | null;
    OBJECTIVE_VALUE(): number;
    RESIDUAL_NORM(): number;
    MAXIMUM_CONSTRAINT_VIOLATION(): number;
    KKT_RESIDUAL(): number;
    EVALUATION_COUNT(): number;
    static startSLPSolverReport(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: slpSolveStatus): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONSOffset: flatbuffers.Offset): void;
    static createIterationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIterationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFinalVariables(builder: flatbuffers.Builder, FINAL_VARIABLESOffset: flatbuffers.Offset): void;
    static createFinalVariablesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFinalVariablesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFinalVariablesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFinalValues(builder: flatbuffers.Builder, FINAL_VALUESOffset: flatbuffers.Offset): void;
    static createFinalValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFinalValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFinalValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjectiveValue(builder: flatbuffers.Builder, OBJECTIVE_VALUE: number): void;
    static addResidualNorm(builder: flatbuffers.Builder, RESIDUAL_NORM: number): void;
    static addMaximumConstraintViolation(builder: flatbuffers.Builder, MAXIMUM_CONSTRAINT_VIOLATION: number): void;
    static addKktResidual(builder: flatbuffers.Builder, KKT_RESIDUAL: number): void;
    static addEvaluationCount(builder: flatbuffers.Builder, EVALUATION_COUNT: number): void;
    static endSLPSolverReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSLPSolverReport(builder: flatbuffers.Builder, STATUS: slpSolveStatus, MESSAGEOffset: flatbuffers.Offset, ITERATIONSOffset: flatbuffers.Offset, FINAL_VARIABLESOffset: flatbuffers.Offset, FINAL_VALUESOffset: flatbuffers.Offset, OBJECTIVE_VALUE: number, RESIDUAL_NORM: number, MAXIMUM_CONSTRAINT_VIOLATION: number, KKT_RESIDUAL: number, EVALUATION_COUNT: number): flatbuffers.Offset;
    unpack(): SLPSolverReportT;
    unpackTo(_o: SLPSolverReportT): void;
}
export declare class SLPSolverReportT implements flatbuffers.IGeneratedObject {
    STATUS: slpSolveStatus;
    MESSAGE: string | Uint8Array | null;
    ITERATIONS: (SLPIterationT)[];
    FINAL_VARIABLES: (number)[];
    FINAL_VALUES: (number)[];
    OBJECTIVE_VALUE: number;
    RESIDUAL_NORM: number;
    MAXIMUM_CONSTRAINT_VIOLATION: number;
    KKT_RESIDUAL: number;
    EVALUATION_COUNT: number;
    constructor(STATUS?: slpSolveStatus, MESSAGE?: string | Uint8Array | null, ITERATIONS?: (SLPIterationT)[], FINAL_VARIABLES?: (number)[], FINAL_VALUES?: (number)[], OBJECTIVE_VALUE?: number, RESIDUAL_NORM?: number, MAXIMUM_CONSTRAINT_VIOLATION?: number, KKT_RESIDUAL?: number, EVALUATION_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SLPSolverReport.d.ts.map