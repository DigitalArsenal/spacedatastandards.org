import * as flatbuffers from 'flatbuffers';
/**
 * Position/Velocity Covariance Matrix Line
 */
export declare class covarianceMatrixLine implements flatbuffers.IUnpackableObject<covarianceMatrixLineT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): covarianceMatrixLine;
    static getRootAscovarianceMatrixLine(bb: flatbuffers.ByteBuffer, obj?: covarianceMatrixLine): covarianceMatrixLine;
    static getSizePrefixedRootAscovarianceMatrixLine(bb: flatbuffers.ByteBuffer, obj?: covarianceMatrixLine): covarianceMatrixLine;
    /**
     * Epoch
     */
    epoch(): string | null;
    epoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Covariance matrix [1,1] km**2
     */
    cxX(): number;
    /**
     * Covariance matrix [2,1] km**2
     */
    cyX(): number;
    /**
     * Covariance matrix [2,2] km**2
     */
    cyY(): number;
    /**
     * Covariance matrix [3,1] km**2
     */
    czX(): number;
    /**
     * Covariance matrix [3,2] km**2
     */
    czY(): number;
    /**
     * Covariance matrix [3,3] km**2
     */
    czZ(): number;
    /**
     * Covariance matrix [4,1] km**2/s
     */
    cxDotX(): number;
    /**
     * Covariance matrix [4,2] km**2/s
     */
    cxDotY(): number;
    /**
     * Covariance matrix [4,3] km**2/s
     */
    cxDotZ(): number;
    /**
     * Covariance matrix [4,4] km**2/s**2
     */
    cxDotXDot(): number;
    /**
     * Covariance matrix [5,1] km**2/s
     */
    cyDotX(): number;
    /**
     * Covariance matrix [5,2] km**2/s
     */
    cyDotY(): number;
    /**
     * Covariance matrix [5,3] km**2/s
     */
    cyDotZ(): number;
    /**
     * Covariance matrix [5,4] km**2/s**2
     */
    cyDotXDot(): number;
    /**
     * Covariance matrix [5,5] km**2/s**2
     */
    cyDotYDot(): number;
    /**
     * Covariance matrix [6,1] km**2/s
     */
    czDotX(): number;
    /**
     * Covariance matrix [6,2] km**2/s
     */
    czDotY(): number;
    /**
     * Covariance matrix [6,3] km**2/s
     */
    czDotZ(): number;
    /**
     * Covariance matrix [6,4] km**2/s**2
     */
    czDotXDot(): number;
    /**
     * Covariance matrix [6,5] km**2/s**2
     */
    czDotYDot(): number;
    /**
     * Covariance matrix [6,6] km**2/s**2
     */
    czDotZDot(): number;
    static startcovarianceMatrixLine(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset): void;
    static addCxX(builder: flatbuffers.Builder, cxX: number): void;
    static addCyX(builder: flatbuffers.Builder, cyX: number): void;
    static addCyY(builder: flatbuffers.Builder, cyY: number): void;
    static addCzX(builder: flatbuffers.Builder, czX: number): void;
    static addCzY(builder: flatbuffers.Builder, czY: number): void;
    static addCzZ(builder: flatbuffers.Builder, czZ: number): void;
    static addCxDotX(builder: flatbuffers.Builder, cxDotX: number): void;
    static addCxDotY(builder: flatbuffers.Builder, cxDotY: number): void;
    static addCxDotZ(builder: flatbuffers.Builder, cxDotZ: number): void;
    static addCxDotXDot(builder: flatbuffers.Builder, cxDotXDot: number): void;
    static addCyDotX(builder: flatbuffers.Builder, cyDotX: number): void;
    static addCyDotY(builder: flatbuffers.Builder, cyDotY: number): void;
    static addCyDotZ(builder: flatbuffers.Builder, cyDotZ: number): void;
    static addCyDotXDot(builder: flatbuffers.Builder, cyDotXDot: number): void;
    static addCyDotYDot(builder: flatbuffers.Builder, cyDotYDot: number): void;
    static addCzDotX(builder: flatbuffers.Builder, czDotX: number): void;
    static addCzDotY(builder: flatbuffers.Builder, czDotY: number): void;
    static addCzDotZ(builder: flatbuffers.Builder, czDotZ: number): void;
    static addCzDotXDot(builder: flatbuffers.Builder, czDotXDot: number): void;
    static addCzDotYDot(builder: flatbuffers.Builder, czDotYDot: number): void;
    static addCzDotZDot(builder: flatbuffers.Builder, czDotZDot: number): void;
    static endcovarianceMatrixLine(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createcovarianceMatrixLine(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset, cxX: number, cyX: number, cyY: number, czX: number, czY: number, czZ: number, cxDotX: number, cxDotY: number, cxDotZ: number, cxDotXDot: number, cyDotX: number, cyDotY: number, cyDotZ: number, cyDotXDot: number, cyDotYDot: number, czDotX: number, czDotY: number, czDotZ: number, czDotXDot: number, czDotYDot: number, czDotZDot: number): flatbuffers.Offset;
    unpack(): covarianceMatrixLineT;
    unpackTo(_o: covarianceMatrixLineT): void;
}
export declare class covarianceMatrixLineT implements flatbuffers.IGeneratedObject {
    epoch: string | Uint8Array | null;
    cxX: number;
    cyX: number;
    cyY: number;
    czX: number;
    czY: number;
    czZ: number;
    cxDotX: number;
    cxDotY: number;
    cxDotZ: number;
    cxDotXDot: number;
    cyDotX: number;
    cyDotY: number;
    cyDotZ: number;
    cyDotXDot: number;
    cyDotYDot: number;
    czDotX: number;
    czDotY: number;
    czDotZ: number;
    czDotXDot: number;
    czDotYDot: number;
    czDotZDot: number;
    constructor(epoch?: string | Uint8Array | null, cxX?: number, cyX?: number, cyY?: number, czX?: number, czY?: number, czZ?: number, cxDotX?: number, cxDotY?: number, cxDotZ?: number, cxDotXDot?: number, cyDotX?: number, cyDotY?: number, cyDotZ?: number, cyDotXDot?: number, cyDotYDot?: number, czDotX?: number, czDotY?: number, czDotZ?: number, czDotXDot?: number, czDotYDot?: number, czDotZDot?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=covariance-matrix-line.d.ts.map