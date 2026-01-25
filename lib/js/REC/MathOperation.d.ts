import * as flatbuffers from 'flatbuffers';
/**
 * Mathematical operation for math operation calibrator
 */
export declare class MathOperation implements flatbuffers.IUnpackableObject<MathOperationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MathOperation;
    static getRootAsMathOperation(bb: flatbuffers.ByteBuffer, obj?: MathOperation): MathOperation;
    static getSizePrefixedRootAsMathOperation(bb: flatbuffers.ByteBuffer, obj?: MathOperation): MathOperation;
    /**
     * Operation in Reverse Polish Notation (RPN)
     */
    RPN_EXPRESSION(): string | null;
    RPN_EXPRESSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMathOperation(builder: flatbuffers.Builder): void;
    static addRpnExpression(builder: flatbuffers.Builder, RPN_EXPRESSIONOffset: flatbuffers.Offset): void;
    static endMathOperation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMathOperation(builder: flatbuffers.Builder, RPN_EXPRESSIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MathOperationT;
    unpackTo(_o: MathOperationT): void;
}
export declare class MathOperationT implements flatbuffers.IGeneratedObject {
    RPN_EXPRESSION: string | Uint8Array | null;
    constructor(RPN_EXPRESSION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MathOperation.d.ts.map