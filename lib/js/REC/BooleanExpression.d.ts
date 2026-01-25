import * as flatbuffers from 'flatbuffers';
import { BooleanOperatorType } from './BooleanOperatorType.js';
import { ParameterComparison, ParameterComparisonT } from './ParameterComparison.js';
/**
 * Boolean expression combining comparisons
 */
export declare class BooleanExpression implements flatbuffers.IUnpackableObject<BooleanExpressionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BooleanExpression;
    static getRootAsBooleanExpression(bb: flatbuffers.ByteBuffer, obj?: BooleanExpression): BooleanExpression;
    static getSizePrefixedRootAsBooleanExpression(bb: flatbuffers.ByteBuffer, obj?: BooleanExpression): BooleanExpression;
    /**
     * Boolean operator
     */
    OPERATOR(): BooleanOperatorType;
    /**
     * Comparison conditions
     */
    CONDITIONS(index: number, obj?: ParameterComparison): ParameterComparison | null;
    conditionsLength(): number;
    /**
     * Nested expressions
     */
    EXPRESSIONS(index: number, obj?: BooleanExpression): BooleanExpression | null;
    expressionsLength(): number;
    static startBooleanExpression(builder: flatbuffers.Builder): void;
    static addOperator(builder: flatbuffers.Builder, OPERATOR: BooleanOperatorType): void;
    static addConditions(builder: flatbuffers.Builder, CONDITIONSOffset: flatbuffers.Offset): void;
    static createConditionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConditionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExpressions(builder: flatbuffers.Builder, EXPRESSIONSOffset: flatbuffers.Offset): void;
    static createExpressionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startExpressionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endBooleanExpression(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBooleanExpression(builder: flatbuffers.Builder, OPERATOR: BooleanOperatorType, CONDITIONSOffset: flatbuffers.Offset, EXPRESSIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BooleanExpressionT;
    unpackTo(_o: BooleanExpressionT): void;
}
export declare class BooleanExpressionT implements flatbuffers.IGeneratedObject {
    OPERATOR: BooleanOperatorType;
    CONDITIONS: (ParameterComparisonT)[];
    EXPRESSIONS: (BooleanExpressionT)[];
    constructor(OPERATOR?: BooleanOperatorType, CONDITIONS?: (ParameterComparisonT)[], EXPRESSIONS?: (BooleanExpressionT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BooleanExpression.d.ts.map