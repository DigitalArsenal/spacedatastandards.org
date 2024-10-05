import * as flatbuffers from 'flatbuffers';
/**
 * OPM Covariance Matrix Line
 */
export declare class opmCovarianceMatrixLine implements flatbuffers.IUnpackableObject<opmCovarianceMatrixLineT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): opmCovarianceMatrixLine;
    static getRootAsopmCovarianceMatrixLine(bb: flatbuffers.ByteBuffer, obj?: opmCovarianceMatrixLine): opmCovarianceMatrixLine;
    static getSizePrefixedRootAsopmCovarianceMatrixLine(bb: flatbuffers.ByteBuffer, obj?: opmCovarianceMatrixLine): opmCovarianceMatrixLine;
    CX_X(): number;
    CY_X(): number;
    CZ_X(): number;
    CX_DOT_X(): number;
    static startopmCovarianceMatrixLine(builder: flatbuffers.Builder): void;
    static addCxX(builder: flatbuffers.Builder, CX_X: number): void;
    static addCyX(builder: flatbuffers.Builder, CY_X: number): void;
    static addCzX(builder: flatbuffers.Builder, CZ_X: number): void;
    static addCxDotX(builder: flatbuffers.Builder, CX_DOT_X: number): void;
    static endopmCovarianceMatrixLine(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createopmCovarianceMatrixLine(builder: flatbuffers.Builder, CX_X: number, CY_X: number, CZ_X: number, CX_DOT_X: number): flatbuffers.Offset;
    unpack(): opmCovarianceMatrixLineT;
    unpackTo(_o: opmCovarianceMatrixLineT): void;
}
export declare class opmCovarianceMatrixLineT implements flatbuffers.IGeneratedObject {
    CX_X: number;
    CY_X: number;
    CZ_X: number;
    CX_DOT_X: number;
    constructor(CX_X?: number, CY_X?: number, CZ_X?: number, CX_DOT_X?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=opmCovarianceMatrixLine.d.ts.map