import * as flatbuffers from 'flatbuffers';
import { ComparisonOperator } from './ComparisonOperator.js';
/**
 * Interlock constraint
 */
export declare class Interlock implements flatbuffers.IUnpackableObject<InterlockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Interlock;
    static getRootAsInterlock(bb: flatbuffers.ByteBuffer, obj?: Interlock): Interlock;
    static getSizePrefixedRootAsInterlock(bb: flatbuffers.ByteBuffer, obj?: Interlock): Interlock;
    /**
     * Parameter reference
     */
    PARAMETER_REF(): string | null;
    PARAMETER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Required value
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operator for comparison
     */
    OPERATOR(): ComparisonOperator;
    static startInterlock(builder: flatbuffers.Builder): void;
    static addParameterRef(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static addOperator(builder: flatbuffers.Builder, OPERATOR: ComparisonOperator): void;
    static endInterlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createInterlock(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset, OPERATOR: ComparisonOperator): flatbuffers.Offset;
    unpack(): InterlockT;
    unpackTo(_o: InterlockT): void;
}
export declare class InterlockT implements flatbuffers.IGeneratedObject {
    PARAMETER_REF: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    OPERATOR: ComparisonOperator;
    constructor(PARAMETER_REF?: string | Uint8Array | null, VALUE?: string | Uint8Array | null, OPERATOR?: ComparisonOperator);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Interlock.d.ts.map