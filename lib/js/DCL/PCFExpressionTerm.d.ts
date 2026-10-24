import * as flatbuffers from 'flatbuffers';
import { pceParameter } from './pceParameter.js';
import { pcfExpressionOperation } from './pcfExpressionOperation.js';
/**
 * One term of an expression program.
 */
export declare class PCFExpressionTerm implements flatbuffers.IUnpackableObject<PCFExpressionTermT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFExpressionTerm;
    static getRootAsPCFExpressionTerm(bb: flatbuffers.ByteBuffer, obj?: PCFExpressionTerm): PCFExpressionTerm;
    static getSizePrefixedRootAsPCFExpressionTerm(bb: flatbuffers.ByteBuffer, obj?: PCFExpressionTerm): PCFExpressionTerm;
    /**
     * What the term does. Default UNSPECIFIED (refused).
     */
    OPERATION(): pcfExpressionOperation;
    /**
     * The constant pushed by CONSTANT. Default 0.
     */
    VALUE(): number;
    /**
     * The catalog parameter pushed by PARAMETER. Default UNSPECIFIED.
     */
    PARAMETER(): pceParameter;
    static startPCFExpressionTerm(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: pcfExpressionOperation): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETER: pceParameter): void;
    static endPCFExpressionTerm(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFExpressionTerm(builder: flatbuffers.Builder, OPERATION: pcfExpressionOperation, VALUE: number, PARAMETER: pceParameter): flatbuffers.Offset;
    unpack(): PCFExpressionTermT;
    unpackTo(_o: PCFExpressionTermT): void;
}
export declare class PCFExpressionTermT implements flatbuffers.IGeneratedObject {
    OPERATION: pcfExpressionOperation;
    VALUE: number;
    PARAMETER: pceParameter;
    constructor(OPERATION?: pcfExpressionOperation, VALUE?: number, PARAMETER?: pceParameter);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFExpressionTerm.d.ts.map