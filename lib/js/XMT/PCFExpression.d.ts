import * as flatbuffers from 'flatbuffers';
import { PCFExpressionTerm, PCFExpressionTermT } from './PCFExpressionTerm.js';
/**
 * A reverse Polish program of at most 64 terms and stack depth 16 that leaves one
 * number.
 */
export declare class PCFExpression implements flatbuffers.IUnpackableObject<PCFExpressionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFExpression;
    static getRootAsPCFExpression(bb: flatbuffers.ByteBuffer, obj?: PCFExpression): PCFExpression;
    static getSizePrefixedRootAsPCFExpression(bb: flatbuffers.ByteBuffer, obj?: PCFExpression): PCFExpression;
    /**
     * The terms, in evaluation order. Default empty.
     */
    TERMS(index: number, obj?: PCFExpressionTerm): PCFExpressionTerm | null;
    termsLength(): number;
    static startPCFExpression(builder: flatbuffers.Builder): void;
    static addTerms(builder: flatbuffers.Builder, TERMSOffset: flatbuffers.Offset): void;
    static createTermsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTermsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPCFExpression(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFExpression(builder: flatbuffers.Builder, TERMSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCFExpressionT;
    unpackTo(_o: PCFExpressionT): void;
}
export declare class PCFExpressionT implements flatbuffers.IGeneratedObject {
    TERMS: (PCFExpressionTermT)[];
    constructor(TERMS?: (PCFExpressionTermT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFExpression.d.ts.map