import * as flatbuffers from 'flatbuffers';
import { ComparisonOperator } from './ComparisonOperator.js';
/**
 * Parameter comparison for match criteria
 */
export declare class ParameterComparison implements flatbuffers.IUnpackableObject<ParameterComparisonT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ParameterComparison;
    static getRootAsParameterComparison(bb: flatbuffers.ByteBuffer, obj?: ParameterComparison): ParameterComparison;
    static getSizePrefixedRootAsParameterComparison(bb: flatbuffers.ByteBuffer, obj?: ParameterComparison): ParameterComparison;
    /**
     * Parameter reference path
     */
    PARAMETER_REF(): string | null;
    PARAMETER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Comparison operator
     */
    OPERATOR(): ComparisonOperator;
    /**
     * Value to compare against
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Use calibrated value (true) or raw value (false)
     */
    USE_CALIBRATED_VALUE(): boolean;
    static startParameterComparison(builder: flatbuffers.Builder): void;
    static addParameterRef(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset): void;
    static addOperator(builder: flatbuffers.Builder, OPERATOR: ComparisonOperator): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static addUseCalibratedValue(builder: flatbuffers.Builder, USE_CALIBRATED_VALUE: boolean): void;
    static endParameterComparison(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createParameterComparison(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset, OPERATOR: ComparisonOperator, VALUEOffset: flatbuffers.Offset, USE_CALIBRATED_VALUE: boolean): flatbuffers.Offset;
    unpack(): ParameterComparisonT;
    unpackTo(_o: ParameterComparisonT): void;
}
export declare class ParameterComparisonT implements flatbuffers.IGeneratedObject {
    PARAMETER_REF: string | Uint8Array | null;
    OPERATOR: ComparisonOperator;
    VALUE: string | Uint8Array | null;
    USE_CALIBRATED_VALUE: boolean;
    constructor(PARAMETER_REF?: string | Uint8Array | null, OPERATOR?: ComparisonOperator, VALUE?: string | Uint8Array | null, USE_CALIBRATED_VALUE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ParameterComparison.d.ts.map