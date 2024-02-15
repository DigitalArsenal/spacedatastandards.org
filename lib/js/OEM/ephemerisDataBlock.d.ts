import * as flatbuffers from 'flatbuffers';
import { covarianceMatrixLine, covarianceMatrixLineT } from './covarianceMatrixLine.js';
import { ephemerisDataLine, ephemerisDataLineT } from './ephemerisDataLine.js';
import { referenceFrame } from './referenceFrame.js';
import { timeSystem } from './timeSystem.js';
/**
 * OEM Ephemeris Data Block
 */
export declare class ephemerisDataBlock implements flatbuffers.IUnpackableObject<ephemerisDataBlockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ephemerisDataBlock;
    static getRootAsephemerisDataBlock(bb: flatbuffers.ByteBuffer, obj?: ephemerisDataBlock): ephemerisDataBlock;
    static getSizePrefixedRootAsephemerisDataBlock(bb: flatbuffers.ByteBuffer, obj?: ephemerisDataBlock): ephemerisDataBlock;
    /**
     * Plain-Text Comment
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite Name(s)
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International Designator (YYYY-NNNAAA)
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Origin of reference frame (EARTH, MARS, MOON, etc.)
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the reference frame (TEME, EME2000, etc.)
     */
    REF_FRAME(): referenceFrame;
    /**
     * Epoch of reference frame, if not intrinsic to the definition of the reference frame
     */
    REF_FRAME_EPOCH(): string | null;
    REF_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system used for the orbit state and covariance matrix. (UTC)
     */
    TIME_SYSTEM(): timeSystem;
    /**
     * Start of TOTAL time span covered by ephemeris data and covariance data (ISO 8601)
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional start USEABLE time span covered by ephemeris data (ISO 8601)
     */
    USEABLE_START_TIME(): string | null;
    USEABLE_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional end of USEABLE time span covered by ephemeris data (ISO 8601)
     */
    USEABLE_STOP_TIME(): string | null;
    USEABLE_STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of TOTAL time span covered by ephemeris data and covariance data (ISO 8601)
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recommended interpolation method for ephemeris data (Hermite, Linear, Lagrange, etc.)
     */
    INTERPOLATION(): string | null;
    INTERPOLATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recommended interpolation degree for ephemeris data
     */
    INTERPOLATION_DEGREE(): number;
    /**
     * Array of ephemeris data lines
     */
    EPHEMERIS_DATA_LINES(index: number, obj?: ephemerisDataLine): ephemerisDataLine | null;
    ephemerisDataLinesLength(): number;
    /**
     * Array of covariance matrix lines
     */
    COVARIANCE_MATRIX_LINES(index: number, obj?: covarianceMatrixLine): covarianceMatrixLine | null;
    covarianceMatrixLinesLength(): number;
    static startephemerisDataBlock(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAME: referenceFrame): void;
    static addRefFrameEpoch(builder: flatbuffers.Builder, REF_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timeSystem): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addUseableStartTime(builder: flatbuffers.Builder, USEABLE_START_TIMEOffset: flatbuffers.Offset): void;
    static addUseableStopTime(builder: flatbuffers.Builder, USEABLE_STOP_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addInterpolation(builder: flatbuffers.Builder, INTERPOLATIONOffset: flatbuffers.Offset): void;
    static addInterpolationDegree(builder: flatbuffers.Builder, INTERPOLATION_DEGREE: number): void;
    static addEphemerisDataLines(builder: flatbuffers.Builder, EPHEMERIS_DATA_LINESOffset: flatbuffers.Offset): void;
    static createEphemerisDataLinesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEphemerisDataLinesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceMatrixLines(builder: flatbuffers.Builder, COVARIANCE_MATRIX_LINESOffset: flatbuffers.Offset): void;
    static createCovarianceMatrixLinesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCovarianceMatrixLinesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endephemerisDataBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createephemerisDataBlock(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, CENTER_NAMEOffset: flatbuffers.Offset, REF_FRAME: referenceFrame, REF_FRAME_EPOCHOffset: flatbuffers.Offset, TIME_SYSTEM: timeSystem, START_TIMEOffset: flatbuffers.Offset, USEABLE_START_TIMEOffset: flatbuffers.Offset, USEABLE_STOP_TIMEOffset: flatbuffers.Offset, STOP_TIMEOffset: flatbuffers.Offset, INTERPOLATIONOffset: flatbuffers.Offset, INTERPOLATION_DEGREE: number, EPHEMERIS_DATA_LINESOffset: flatbuffers.Offset, COVARIANCE_MATRIX_LINESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ephemerisDataBlockT;
    unpackTo(_o: ephemerisDataBlockT): void;
}
export declare class ephemerisDataBlockT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    CENTER_NAME: string | Uint8Array | null;
    REF_FRAME: referenceFrame;
    REF_FRAME_EPOCH: string | Uint8Array | null;
    TIME_SYSTEM: timeSystem;
    START_TIME: string | Uint8Array | null;
    USEABLE_START_TIME: string | Uint8Array | null;
    USEABLE_STOP_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    INTERPOLATION: string | Uint8Array | null;
    INTERPOLATION_DEGREE: number;
    EPHEMERIS_DATA_LINES: (ephemerisDataLineT)[];
    COVARIANCE_MATRIX_LINES: (covarianceMatrixLineT)[];
    constructor(COMMENT?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, CENTER_NAME?: string | Uint8Array | null, REF_FRAME?: referenceFrame, REF_FRAME_EPOCH?: string | Uint8Array | null, TIME_SYSTEM?: timeSystem, START_TIME?: string | Uint8Array | null, USEABLE_START_TIME?: string | Uint8Array | null, USEABLE_STOP_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, INTERPOLATION?: string | Uint8Array | null, INTERPOLATION_DEGREE?: number, EPHEMERIS_DATA_LINES?: (ephemerisDataLineT)[], COVARIANCE_MATRIX_LINES?: (covarianceMatrixLineT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ephemerisDataBlock.d.ts.map