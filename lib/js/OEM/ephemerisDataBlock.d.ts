import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './CAT.js';
import { RFM, RFMT } from './RFM.js';
import { covarianceMatrixLine, covarianceMatrixLineT } from './covarianceMatrixLine.js';
import { ephemerisDataLine, ephemerisDataLineT } from './ephemerisDataLine.js';
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
    REFERENCE_FRAME(obj?: RFM): RFM | null;
    /**
     * Epoch of reference frame, if not intrinsic to the definition of the reference frame
     */
    REFERENCE_FRAME_EPOCH(): string | null;
    REFERENCE_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for the covariance matrix
     */
    COV_REFERENCE_FRAME(obj?: RFM): RFM | null;
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
     * Time interval between ephemeris states in seconds.
     * If > 0: Use compact EPHEMERIS_DATA array (times are implicit).
     * If 0 or omitted: Use EPHEMERIS_DATA_LINES with explicit epochs.
     */
    STEP_SIZE(): number;
    /**
     * Number of components per state vector in EPHEMERIS_DATA array.
     * 6 = position + velocity (X, Y, Z, X_DOT, Y_DOT, Z_DOT)
     * 9 = position + velocity + acceleration (adds X_DDOT, Y_DDOT, Z_DDOT)
     * Only used when STEP_SIZE > 0. Default is 6.
     */
    STATE_VECTOR_SIZE(): number;
    /**
     * Compact ephemeris data as row-major array of doubles.
     * Only used when STEP_SIZE > 0.
     * Layout: [x0,y0,z0,xdot0,ydot0,zdot0, x1,y1,z1,xdot1,ydot1,zdot1, ...]
     * Units: position in km, velocity in km/s, acceleration in km/s²
     * Length must be divisible by STATE_VECTOR_SIZE.
     * Number of states = length(EPHEMERIS_DATA) / STATE_VECTOR_SIZE
     */
    EPHEMERIS_DATA(index: number): number | null;
    ephemerisDataLength(): number;
    ephemerisDataArray(): Float64Array | null;
    /**
     * Array of ephemeris data lines with explicit epochs.
     * Only used when STEP_SIZE == 0 or omitted (non-uniform time steps).
     * Each line contains its own EPOCH timestamp.
     */
    EPHEMERIS_DATA_LINES(index: number, obj?: ephemerisDataLine): ephemerisDataLine | null;
    ephemerisDataLinesLength(): number;
    /**
     * Array of covariance matrix lines (optional)
     */
    COVARIANCE_MATRIX_LINES(index: number, obj?: covarianceMatrixLine): covarianceMatrixLine | null;
    covarianceMatrixLinesLength(): number;
    static startephemerisDataBlock(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addObject(builder: flatbuffers.Builder, OBJECTOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addReferenceFrameEpoch(builder: flatbuffers.Builder, REFERENCE_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addCovReferenceFrame(builder: flatbuffers.Builder, COV_REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timeSystem): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addUseableStartTime(builder: flatbuffers.Builder, USEABLE_START_TIMEOffset: flatbuffers.Offset): void;
    static addUseableStopTime(builder: flatbuffers.Builder, USEABLE_STOP_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addInterpolation(builder: flatbuffers.Builder, INTERPOLATIONOffset: flatbuffers.Offset): void;
    static addInterpolationDegree(builder: flatbuffers.Builder, INTERPOLATION_DEGREE: number): void;
    static addStepSize(builder: flatbuffers.Builder, STEP_SIZE: number): void;
    static addStateVectorSize(builder: flatbuffers.Builder, STATE_VECTOR_SIZE: number): void;
    static addEphemerisData(builder: flatbuffers.Builder, EPHEMERIS_DATAOffset: flatbuffers.Offset): void;
    static createEphemerisDataVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEphemerisDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEphemerisDataVector(builder: flatbuffers.Builder, numElems: number): void;
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
    REFERENCE_FRAME: RFMT | null;
    REFERENCE_FRAME_EPOCH: string | Uint8Array | null;
    COV_REFERENCE_FRAME: RFMT | null;
    TIME_SYSTEM: timeSystem;
    START_TIME: string | Uint8Array | null;
    USEABLE_START_TIME: string | Uint8Array | null;
    USEABLE_STOP_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    INTERPOLATION: string | Uint8Array | null;
    INTERPOLATION_DEGREE: number;
    STEP_SIZE: number;
    STATE_VECTOR_SIZE: number;
    EPHEMERIS_DATA: (number)[];
    EPHEMERIS_DATA_LINES: (ephemerisDataLineT)[];
    COVARIANCE_MATRIX_LINES: (covarianceMatrixLineT)[];
    constructor(COMMENT?: string | Uint8Array | null, OBJECT?: CATT | null, CENTER_NAME?: string | Uint8Array | null, REFERENCE_FRAME?: RFMT | null, REFERENCE_FRAME_EPOCH?: string | Uint8Array | null, COV_REFERENCE_FRAME?: RFMT | null, TIME_SYSTEM?: timeSystem, START_TIME?: string | Uint8Array | null, USEABLE_START_TIME?: string | Uint8Array | null, USEABLE_STOP_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, INTERPOLATION?: string | Uint8Array | null, INTERPOLATION_DEGREE?: number, STEP_SIZE?: number, STATE_VECTOR_SIZE?: number, EPHEMERIS_DATA?: (number)[], EPHEMERIS_DATA_LINES?: (ephemerisDataLineT)[], COVARIANCE_MATRIX_LINES?: (covarianceMatrixLineT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ephemerisDataBlock.d.ts.map