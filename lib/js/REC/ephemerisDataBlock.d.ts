import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './CAT.js';
import { covarianceMatrixLine, covarianceMatrixLineT } from './covarianceMatrixLine.js';
import { ephemerisDataLine, ephemerisDataLineT } from './ephemerisDataLine.js';
import { refFrame } from './refFrame.js';
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
     * Satellite name for the first object
     */
    OBJECT(obj?: CAT): CAT | null;
    /**
     * Origin of reference frame (EARTH, MARS, MOON, etc.)
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the reference frame (TEME, EME2000, etc.)
     */
    REFERENCE_FRAME(): refFrame;
    /**
     * Epoch of reference frame, if not intrinsic to the definition of the reference frame
     */
    REFERENCE_FRAME_EPOCH(): string | null;
    REFERENCE_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for the covariance matrix
     */
    COV_REFERENCE_FRAME(): refFrame;
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
     * Step size in seconds separating the epochs of each ephemeris data row
     */
    STEP_SIZE(): number;
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
    static addObject(builder: flatbuffers.Builder, OBJECTOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAME: refFrame): void;
    static addReferenceFrameEpoch(builder: flatbuffers.Builder, REFERENCE_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addCovReferenceFrame(builder: flatbuffers.Builder, COV_REFERENCE_FRAME: refFrame): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timeSystem): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addUseableStartTime(builder: flatbuffers.Builder, USEABLE_START_TIMEOffset: flatbuffers.Offset): void;
    static addUseableStopTime(builder: flatbuffers.Builder, USEABLE_STOP_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addStepSize(builder: flatbuffers.Builder, STEP_SIZE: number): void;
    static addInterpolation(builder: flatbuffers.Builder, INTERPOLATIONOffset: flatbuffers.Offset): void;
    static addInterpolationDegree(builder: flatbuffers.Builder, INTERPOLATION_DEGREE: number): void;
    static addEphemerisDataLines(builder: flatbuffers.Builder, EPHEMERIS_DATA_LINESOffset: flatbuffers.Offset): void;
    static createEphemerisDataLinesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEphemerisDataLinesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceMatrixLines(builder: flatbuffers.Builder, COVARIANCE_MATRIX_LINESOffset: flatbuffers.Offset): void;
    static createCovarianceMatrixLinesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCovarianceMatrixLinesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endephemerisDataBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ephemerisDataBlockT;
    unpackTo(_o: ephemerisDataBlockT): void;
}
export declare class ephemerisDataBlockT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    OBJECT: CATT | null;
    CENTER_NAME: string | Uint8Array | null;
    REFERENCE_FRAME: refFrame;
    REFERENCE_FRAME_EPOCH: string | Uint8Array | null;
    COV_REFERENCE_FRAME: refFrame;
    TIME_SYSTEM: timeSystem;
    START_TIME: string | Uint8Array | null;
    USEABLE_START_TIME: string | Uint8Array | null;
    USEABLE_STOP_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    STEP_SIZE: number;
    INTERPOLATION: string | Uint8Array | null;
    INTERPOLATION_DEGREE: number;
    EPHEMERIS_DATA_LINES: (ephemerisDataLineT)[];
    COVARIANCE_MATRIX_LINES: (covarianceMatrixLineT)[];
    constructor(COMMENT?: string | Uint8Array | null, OBJECT?: CATT | null, CENTER_NAME?: string | Uint8Array | null, REFERENCE_FRAME?: refFrame, REFERENCE_FRAME_EPOCH?: string | Uint8Array | null, COV_REFERENCE_FRAME?: refFrame, TIME_SYSTEM?: timeSystem, START_TIME?: string | Uint8Array | null, USEABLE_START_TIME?: string | Uint8Array | null, USEABLE_STOP_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, STEP_SIZE?: number, INTERPOLATION?: string | Uint8Array | null, INTERPOLATION_DEGREE?: number, EPHEMERIS_DATA_LINES?: (ephemerisDataLineT)[], COVARIANCE_MATRIX_LINES?: (covarianceMatrixLineT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ephemerisDataBlock.d.ts.map