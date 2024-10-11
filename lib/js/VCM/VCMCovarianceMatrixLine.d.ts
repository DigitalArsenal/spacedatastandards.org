import * as flatbuffers from 'flatbuffers';
/**
 * VCM Covariance Matrix Line
 */
export declare class VCMCovarianceMatrixLine implements flatbuffers.IUnpackableObject<VCMCovarianceMatrixLineT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCMCovarianceMatrixLine;
    static getRootAsVCMCovarianceMatrixLine(bb: flatbuffers.ByteBuffer, obj?: VCMCovarianceMatrixLine): VCMCovarianceMatrixLine;
    static getSizePrefixedRootAsVCMCovarianceMatrixLine(bb: flatbuffers.ByteBuffer, obj?: VCMCovarianceMatrixLine): VCMCovarianceMatrixLine;
    CX_X(): number;
    CY_X(): number;
    CZ_X(): number;
    CX_DOT_X(): number;
    static startVCMCovarianceMatrixLine(builder: flatbuffers.Builder): void;
    static addCxX(builder: flatbuffers.Builder, CX_X: number): void;
    static addCyX(builder: flatbuffers.Builder, CY_X: number): void;
    static addCzX(builder: flatbuffers.Builder, CZ_X: number): void;
    static addCxDotX(builder: flatbuffers.Builder, CX_DOT_X: number): void;
    static endVCMCovarianceMatrixLine(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCMCovarianceMatrixLine(builder: flatbuffers.Builder, CX_X: number, CY_X: number, CZ_X: number, CX_DOT_X: number): flatbuffers.Offset;
    unpack(): VCMCovarianceMatrixLineT;
    unpackTo(_o: VCMCovarianceMatrixLineT): void;
}
export declare class VCMCovarianceMatrixLineT implements flatbuffers.IGeneratedObject {
    CX_X: number;
    CY_X: number;
    CZ_X: number;
    CX_DOT_X: number;
    constructor(CX_X?: number, CY_X?: number, CZ_X?: number, CX_DOT_X?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCMCovarianceMatrixLine.d.ts.map