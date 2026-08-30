import * as flatbuffers from 'flatbuffers';
export declare class SLPIteration implements flatbuffers.IUnpackableObject<SLPIterationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SLPIteration;
    static getRootAsSLPIteration(bb: flatbuffers.ByteBuffer, obj?: SLPIteration): SLPIteration;
    static getSizePrefixedRootAsSLPIteration(bb: flatbuffers.ByteBuffer, obj?: SLPIteration): SLPIteration;
    ITERATION(): number;
    VARIABLES(index: number): number | null;
    variablesLength(): number;
    variablesArray(): Float64Array | null;
    VALUES(index: number): number | null;
    valuesLength(): number;
    valuesArray(): Float64Array | null;
    RESIDUAL_NORM(): number;
    OBJECTIVE_VALUE(): number;
    MAXIMUM_CONSTRAINT_VIOLATION(): number;
    JACOBIAN_CONDITION_ESTIMATE(): number;
    KKT_RESIDUAL(): number;
    EVALUATION_COUNT(): number;
    static startSLPIteration(builder: flatbuffers.Builder): void;
    static addIteration(builder: flatbuffers.Builder, ITERATION: number): void;
    static addVariables(builder: flatbuffers.Builder, VARIABLESOffset: flatbuffers.Offset): void;
    static createVariablesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVariablesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVariablesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addValues(builder: flatbuffers.Builder, VALUESOffset: flatbuffers.Offset): void;
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResidualNorm(builder: flatbuffers.Builder, RESIDUAL_NORM: number): void;
    static addObjectiveValue(builder: flatbuffers.Builder, OBJECTIVE_VALUE: number): void;
    static addMaximumConstraintViolation(builder: flatbuffers.Builder, MAXIMUM_CONSTRAINT_VIOLATION: number): void;
    static addJacobianConditionEstimate(builder: flatbuffers.Builder, JACOBIAN_CONDITION_ESTIMATE: number): void;
    static addKktResidual(builder: flatbuffers.Builder, KKT_RESIDUAL: number): void;
    static addEvaluationCount(builder: flatbuffers.Builder, EVALUATION_COUNT: number): void;
    static endSLPIteration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSLPIteration(builder: flatbuffers.Builder, ITERATION: number, VARIABLESOffset: flatbuffers.Offset, VALUESOffset: flatbuffers.Offset, RESIDUAL_NORM: number, OBJECTIVE_VALUE: number, MAXIMUM_CONSTRAINT_VIOLATION: number, JACOBIAN_CONDITION_ESTIMATE: number, KKT_RESIDUAL: number, EVALUATION_COUNT: number): flatbuffers.Offset;
    unpack(): SLPIterationT;
    unpackTo(_o: SLPIterationT): void;
}
export declare class SLPIterationT implements flatbuffers.IGeneratedObject {
    ITERATION: number;
    VARIABLES: (number)[];
    VALUES: (number)[];
    RESIDUAL_NORM: number;
    OBJECTIVE_VALUE: number;
    MAXIMUM_CONSTRAINT_VIOLATION: number;
    JACOBIAN_CONDITION_ESTIMATE: number;
    KKT_RESIDUAL: number;
    EVALUATION_COUNT: number;
    constructor(ITERATION?: number, VARIABLES?: (number)[], VALUES?: (number)[], RESIDUAL_NORM?: number, OBJECTIVE_VALUE?: number, MAXIMUM_CONSTRAINT_VIOLATION?: number, JACOBIAN_CONDITION_ESTIMATE?: number, KKT_RESIDUAL?: number, EVALUATION_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SLPIteration.d.ts.map