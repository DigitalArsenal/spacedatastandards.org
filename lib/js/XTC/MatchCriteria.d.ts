import * as flatbuffers from 'flatbuffers';
import { BooleanExpression, BooleanExpressionT } from './BooleanExpression.js';
import { ParameterComparison, ParameterComparisonT } from './ParameterComparison.js';
/**
 * Match criteria for conditional logic
 */
export declare class MatchCriteria implements flatbuffers.IUnpackableObject<MatchCriteriaT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MatchCriteria;
    static getRootAsMatchCriteria(bb: flatbuffers.ByteBuffer, obj?: MatchCriteria): MatchCriteria;
    static getSizePrefixedRootAsMatchCriteria(bb: flatbuffers.ByteBuffer, obj?: MatchCriteria): MatchCriteria;
    /**
     * Single comparison
     */
    COMPARISON(obj?: ParameterComparison): ParameterComparison | null;
    /**
     * List of comparisons (implicit AND)
     */
    COMPARISON_LIST(index: number, obj?: ParameterComparison): ParameterComparison | null;
    comparisonListLength(): number;
    /**
     * Boolean expression
     */
    BOOLEAN_EXPRESSION(obj?: BooleanExpression): BooleanExpression | null;
    /**
     * Custom algorithm reference
     */
    CUSTOM_ALGORITHM(): string | null;
    CUSTOM_ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMatchCriteria(builder: flatbuffers.Builder): void;
    static addComparison(builder: flatbuffers.Builder, COMPARISONOffset: flatbuffers.Offset): void;
    static addComparisonList(builder: flatbuffers.Builder, COMPARISON_LISTOffset: flatbuffers.Offset): void;
    static createComparisonListVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startComparisonListVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBooleanExpression(builder: flatbuffers.Builder, BOOLEAN_EXPRESSIONOffset: flatbuffers.Offset): void;
    static addCustomAlgorithm(builder: flatbuffers.Builder, CUSTOM_ALGORITHMOffset: flatbuffers.Offset): void;
    static endMatchCriteria(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): MatchCriteriaT;
    unpackTo(_o: MatchCriteriaT): void;
}
export declare class MatchCriteriaT implements flatbuffers.IGeneratedObject {
    COMPARISON: ParameterComparisonT | null;
    COMPARISON_LIST: (ParameterComparisonT)[];
    BOOLEAN_EXPRESSION: BooleanExpressionT | null;
    CUSTOM_ALGORITHM: string | Uint8Array | null;
    constructor(COMPARISON?: ParameterComparisonT | null, COMPARISON_LIST?: (ParameterComparisonT)[], BOOLEAN_EXPRESSION?: BooleanExpressionT | null, CUSTOM_ALGORITHM?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MatchCriteria.d.ts.map