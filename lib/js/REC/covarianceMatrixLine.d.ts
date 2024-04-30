import * as flatbuffers from 'flatbuffers';
import { referenceFrame } from './referenceFrame.js';
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
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for the covariance matrix
     */
    COV_REFERENCE_FRAME(): referenceFrame;
    /**
     * Covariance matrix [1,1] km**2
     */
    CX_X(): number;
    /**
     * Covariance matrix [2,1] km**2
     */
    CY_X(): number;
    /**
     * Covariance matrix [2,2] km**2
     */
    CY_Y(): number;
    /**
     * Covariance matrix [3,1] km**2
     */
    CZ_X(): number;
    /**
     * Covariance matrix [3,2] km**2
     */
    CZ_Y(): number;
    /**
     * Covariance matrix [3,3] km**2
     */
    CZ_Z(): number;
    /**
     * Covariance matrix [4,1] km**2/s
     */
    CX_DOT_X(): number;
    /**
     * Covariance matrix [4,2] km**2/s
     */
    CX_DOT_Y(): number;
    /**
     * Covariance matrix [4,3] km**2/s
     */
    CX_DOT_Z(): number;
    /**
     * Covariance matrix [4,4] km**2/s**2
     */
    CX_DOT_X_DOT(): number;
    /**
     * Covariance matrix [5,1] km**2/s
     */
    CY_DOT_X(): number;
    /**
     * Covariance matrix [5,2] km**2/s
     */
    CY_DOT_Y(): number;
    /**
     * Covariance matrix [5,3] km**2/s
     */
    CY_DOT_Z(): number;
    /**
     * Covariance matrix [5,4] km**2/s**2
     */
    CY_DOT_X_DOT(): number;
    /**
     * Covariance matrix [5,5] km**2/s**2
     */
    CY_DOT_Y_DOT(): number;
    /**
     * Covariance matrix [6,1] km**2/s
     */
    CZ_DOT_X(): number;
    /**
     * Covariance matrix [6,2] km**2/s
     */
    CZ_DOT_Y(): number;
    /**
     * Covariance matrix [6,3] km**2/s
     */
    CZ_DOT_Z(): number;
    /**
     * Covariance matrix [6,4] km**2/s**2
     */
    CZ_DOT_X_DOT(): number;
    /**
     * Covariance matrix [6,5] km**2/s**2
     */
    CZ_DOT_Y_DOT(): number;
    /**
     * Covariance matrix [6,6] km**2/s**2
     */
    CZ_DOT_Z_DOT(): number;
    static startcovarianceMatrixLine(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addCovReferenceFrame(builder: flatbuffers.Builder, COV_REFERENCE_FRAME: referenceFrame): void;
    static addCxX(builder: flatbuffers.Builder, CX_X: number): void;
    static addCyX(builder: flatbuffers.Builder, CY_X: number): void;
    static addCyY(builder: flatbuffers.Builder, CY_Y: number): void;
    static addCzX(builder: flatbuffers.Builder, CZ_X: number): void;
    static addCzY(builder: flatbuffers.Builder, CZ_Y: number): void;
    static addCzZ(builder: flatbuffers.Builder, CZ_Z: number): void;
    static addCxDotX(builder: flatbuffers.Builder, CX_DOT_X: number): void;
    static addCxDotY(builder: flatbuffers.Builder, CX_DOT_Y: number): void;
    static addCxDotZ(builder: flatbuffers.Builder, CX_DOT_Z: number): void;
    static addCxDotXDot(builder: flatbuffers.Builder, CX_DOT_X_DOT: number): void;
    static addCyDotX(builder: flatbuffers.Builder, CY_DOT_X: number): void;
    static addCyDotY(builder: flatbuffers.Builder, CY_DOT_Y: number): void;
    static addCyDotZ(builder: flatbuffers.Builder, CY_DOT_Z: number): void;
    static addCyDotXDot(builder: flatbuffers.Builder, CY_DOT_X_DOT: number): void;
    static addCyDotYDot(builder: flatbuffers.Builder, CY_DOT_Y_DOT: number): void;
    static addCzDotX(builder: flatbuffers.Builder, CZ_DOT_X: number): void;
    static addCzDotY(builder: flatbuffers.Builder, CZ_DOT_Y: number): void;
    static addCzDotZ(builder: flatbuffers.Builder, CZ_DOT_Z: number): void;
    static addCzDotXDot(builder: flatbuffers.Builder, CZ_DOT_X_DOT: number): void;
    static addCzDotYDot(builder: flatbuffers.Builder, CZ_DOT_Y_DOT: number): void;
    static addCzDotZDot(builder: flatbuffers.Builder, CZ_DOT_Z_DOT: number): void;
    static endcovarianceMatrixLine(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createcovarianceMatrixLine(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, COV_REFERENCE_FRAME: referenceFrame, CX_X: number, CY_X: number, CY_Y: number, CZ_X: number, CZ_Y: number, CZ_Z: number, CX_DOT_X: number, CX_DOT_Y: number, CX_DOT_Z: number, CX_DOT_X_DOT: number, CY_DOT_X: number, CY_DOT_Y: number, CY_DOT_Z: number, CY_DOT_X_DOT: number, CY_DOT_Y_DOT: number, CZ_DOT_X: number, CZ_DOT_Y: number, CZ_DOT_Z: number, CZ_DOT_X_DOT: number, CZ_DOT_Y_DOT: number, CZ_DOT_Z_DOT: number): flatbuffers.Offset;
    unpack(): covarianceMatrixLineT;
    unpackTo(_o: covarianceMatrixLineT): void;
}
export declare class covarianceMatrixLineT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    COV_REFERENCE_FRAME: referenceFrame;
    CX_X: number;
    CY_X: number;
    CY_Y: number;
    CZ_X: number;
    CZ_Y: number;
    CZ_Z: number;
    CX_DOT_X: number;
    CX_DOT_Y: number;
    CX_DOT_Z: number;
    CX_DOT_X_DOT: number;
    CY_DOT_X: number;
    CY_DOT_Y: number;
    CY_DOT_Z: number;
    CY_DOT_X_DOT: number;
    CY_DOT_Y_DOT: number;
    CZ_DOT_X: number;
    CZ_DOT_Y: number;
    CZ_DOT_Z: number;
    CZ_DOT_X_DOT: number;
    CZ_DOT_Y_DOT: number;
    CZ_DOT_Z_DOT: number;
    constructor(EPOCH?: string | Uint8Array | null, COV_REFERENCE_FRAME?: referenceFrame, CX_X?: number, CY_X?: number, CY_Y?: number, CZ_X?: number, CZ_Y?: number, CZ_Z?: number, CX_DOT_X?: number, CX_DOT_Y?: number, CX_DOT_Z?: number, CX_DOT_X_DOT?: number, CY_DOT_X?: number, CY_DOT_Y?: number, CY_DOT_Z?: number, CY_DOT_X_DOT?: number, CY_DOT_Y_DOT?: number, CZ_DOT_X?: number, CZ_DOT_Y?: number, CZ_DOT_Z?: number, CZ_DOT_X_DOT?: number, CZ_DOT_Y_DOT?: number, CZ_DOT_Z_DOT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=covarianceMatrixLine.d.ts.map