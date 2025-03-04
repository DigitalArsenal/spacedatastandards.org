import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './cat.js';
import { covarianceMatrixLine, covarianceMatrixLineT } from './covariance-matrix-line.js';
import { ephemerisDataLine, ephemerisDataLineT } from './ephemeris-data-line.js';
import { refFrame } from './ref-frame.js';
import { timeSystem } from './time-system.js';
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
    comment(): string | null;
    comment(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite name for the first object
     */
    object(obj?: CAT): CAT | null;
    /**
     * Origin of reference frame (EARTH, MARS, MOON, etc.)
     */
    centerName(): string | null;
    centerName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the reference frame (TEME, EME2000, etc.)
     */
    referenceFrame(): refFrame;
    /**
     * Epoch of reference frame, if not intrinsic to the definition of the reference frame
     */
    referenceFrameEpoch(): string | null;
    referenceFrameEpoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for the covariance matrix
     */
    covReferenceFrame(): refFrame;
    /**
     * Time system used for the orbit state and covariance matrix. (UTC)
     */
    timeSystem(): timeSystem;
    /**
     * Start of TOTAL time span covered by ephemeris data and covariance data (ISO 8601)
     */
    startTime(): string | null;
    startTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional start USEABLE time span covered by ephemeris data (ISO 8601)
     */
    useableStartTime(): string | null;
    useableStartTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional end of USEABLE time span covered by ephemeris data (ISO 8601)
     */
    useableStopTime(): string | null;
    useableStopTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of TOTAL time span covered by ephemeris data and covariance data (ISO 8601)
     */
    stopTime(): string | null;
    stopTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Step size in seconds separating the epochs of each ephemeris data row
     */
    stepSize(): number;
    /**
     * Recommended interpolation method for ephemeris data (Hermite, Linear, Lagrange, etc.)
     */
    interpolation(): string | null;
    interpolation(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recommended interpolation degree for ephemeris data
     */
    interpolationDegree(): number;
    /**
     * Array of ephemeris data lines
     */
    ephemerisDataLines(index: number, obj?: ephemerisDataLine): ephemerisDataLine | null;
    ephemerisDataLinesLength(): number;
    /**
     * Array of covariance matrix lines
     */
    covarianceMatrixLines(index: number, obj?: covarianceMatrixLine): covarianceMatrixLine | null;
    covarianceMatrixLinesLength(): number;
    static startephemerisDataBlock(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset): void;
    static addObject(builder: flatbuffers.Builder, objectOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, centerNameOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, referenceFrame: refFrame): void;
    static addReferenceFrameEpoch(builder: flatbuffers.Builder, referenceFrameEpochOffset: flatbuffers.Offset): void;
    static addCovReferenceFrame(builder: flatbuffers.Builder, covReferenceFrame: refFrame): void;
    static addTimeSystem(builder: flatbuffers.Builder, timeSystem: timeSystem): void;
    static addStartTime(builder: flatbuffers.Builder, startTimeOffset: flatbuffers.Offset): void;
    static addUseableStartTime(builder: flatbuffers.Builder, useableStartTimeOffset: flatbuffers.Offset): void;
    static addUseableStopTime(builder: flatbuffers.Builder, useableStopTimeOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, stopTimeOffset: flatbuffers.Offset): void;
    static addStepSize(builder: flatbuffers.Builder, stepSize: number): void;
    static addInterpolation(builder: flatbuffers.Builder, interpolationOffset: flatbuffers.Offset): void;
    static addInterpolationDegree(builder: flatbuffers.Builder, interpolationDegree: number): void;
    static addEphemerisDataLines(builder: flatbuffers.Builder, ephemerisDataLinesOffset: flatbuffers.Offset): void;
    static createEphemerisDataLinesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEphemerisDataLinesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceMatrixLines(builder: flatbuffers.Builder, covarianceMatrixLinesOffset: flatbuffers.Offset): void;
    static createCovarianceMatrixLinesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCovarianceMatrixLinesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endephemerisDataBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ephemerisDataBlockT;
    unpackTo(_o: ephemerisDataBlockT): void;
}
export declare class ephemerisDataBlockT implements flatbuffers.IGeneratedObject {
    comment: string | Uint8Array | null;
    object: CATT | null;
    centerName: string | Uint8Array | null;
    referenceFrame: refFrame;
    referenceFrameEpoch: string | Uint8Array | null;
    covReferenceFrame: refFrame;
    timeSystem: timeSystem;
    startTime: string | Uint8Array | null;
    useableStartTime: string | Uint8Array | null;
    useableStopTime: string | Uint8Array | null;
    stopTime: string | Uint8Array | null;
    stepSize: number;
    interpolation: string | Uint8Array | null;
    interpolationDegree: number;
    ephemerisDataLines: (ephemerisDataLineT)[];
    covarianceMatrixLines: (covarianceMatrixLineT)[];
    constructor(comment?: string | Uint8Array | null, object?: CATT | null, centerName?: string | Uint8Array | null, referenceFrame?: refFrame, referenceFrameEpoch?: string | Uint8Array | null, covReferenceFrame?: refFrame, timeSystem?: timeSystem, startTime?: string | Uint8Array | null, useableStartTime?: string | Uint8Array | null, useableStopTime?: string | Uint8Array | null, stopTime?: string | Uint8Array | null, stepSize?: number, interpolation?: string | Uint8Array | null, interpolationDegree?: number, ephemerisDataLines?: (ephemerisDataLineT)[], covarianceMatrixLines?: (covarianceMatrixLineT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ephemeris-data-block.d.ts.map