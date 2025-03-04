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
    cxX(): number;
    cyX(): number;
    czX(): number;
    cxDotX(): number;
    static startVCMCovarianceMatrixLine(builder: flatbuffers.Builder): void;
    static addCxX(builder: flatbuffers.Builder, cxX: number): void;
    static addCyX(builder: flatbuffers.Builder, cyX: number): void;
    static addCzX(builder: flatbuffers.Builder, czX: number): void;
    static addCxDotX(builder: flatbuffers.Builder, cxDotX: number): void;
    static endVCMCovarianceMatrixLine(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCMCovarianceMatrixLine(builder: flatbuffers.Builder, cxX: number, cyX: number, czX: number, cxDotX: number): flatbuffers.Offset;
    unpack(): VCMCovarianceMatrixLineT;
    unpackTo(_o: VCMCovarianceMatrixLineT): void;
}
export declare class VCMCovarianceMatrixLineT implements flatbuffers.IGeneratedObject {
    cxX: number;
    cyX: number;
    czX: number;
    cxDotX: number;
    constructor(cxX?: number, cyX?: number, czX?: number, cxDotX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=vcmcovariance-matrix-line.d.ts.map