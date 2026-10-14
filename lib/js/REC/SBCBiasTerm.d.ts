import * as flatbuffers from 'flatbuffers';
import { sbcBiasBasis } from './sbcBiasBasis.js';
import { sbcBiasNature } from './sbcBiasNature.js';
/**
 * One sensor's bias.
 */
export declare class SBCBiasTerm implements flatbuffers.IUnpackableObject<SBCBiasTermT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SBCBiasTerm;
    static getRootAsSBCBiasTerm(bb: flatbuffers.ByteBuffer, obj?: SBCBiasTerm): SBCBiasTerm;
    static getSizePrefixedRootAsSBCBiasTerm(bb: flatbuffers.ByteBuffer, obj?: SBCBiasTerm): SBCBiasTerm;
    /**
     * Sensor identifier.
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BASIS(): sbcBiasBasis;
    NATURE(): sbcBiasNature;
    /**
     * Radial bias (or its one-sigma), m; 0 = none.
     */
    RADIAL_M(): number;
    /**
     * In-track bias, m; 0 = none.
     */
    IN_TRACK_M(): number;
    /**
     * Cross-track bias, m; 0 = none.
     */
    CROSS_TRACK_M(): number;
    /**
     * Range bias, m; 0 = none (BASIS Measurement).
     */
    RANGE_M(): number;
    /**
     * Azimuth bias, degrees; 0 = none.
     */
    AZIMUTH_DEG(): number;
    /**
     * Elevation bias, degrees; 0 = none.
     */
    ELEVATION_DEG(): number;
    /**
     * Range-rate bias, m/s; 0 = none.
     */
    RANGE_RATE_M_S(): number;
    /**
     * Time-tag bias, s; 0 = none.
     */
    TIME_S(): number;
    /**
     * Number of the sensor's observations in the orbit; 0 = not stated.
     */
    OBSERVATIONS(): number;
    /**
     * Identifier of the calibration the bias comes from; empty = none.
     */
    CALIBRATION_REFERENCE(): string | null;
    CALIBRATION_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSBCBiasTerm(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addBasis(builder: flatbuffers.Builder, BASIS: sbcBiasBasis): void;
    static addNature(builder: flatbuffers.Builder, NATURE: sbcBiasNature): void;
    static addRadialM(builder: flatbuffers.Builder, RADIAL_M: number): void;
    static addInTrackM(builder: flatbuffers.Builder, IN_TRACK_M: number): void;
    static addCrossTrackM(builder: flatbuffers.Builder, CROSS_TRACK_M: number): void;
    static addRangeM(builder: flatbuffers.Builder, RANGE_M: number): void;
    static addAzimuthDeg(builder: flatbuffers.Builder, AZIMUTH_DEG: number): void;
    static addElevationDeg(builder: flatbuffers.Builder, ELEVATION_DEG: number): void;
    static addRangeRateMS(builder: flatbuffers.Builder, RANGE_RATE_M_S: number): void;
    static addTimeS(builder: flatbuffers.Builder, TIME_S: number): void;
    static addObservations(builder: flatbuffers.Builder, OBSERVATIONS: number): void;
    static addCalibrationReference(builder: flatbuffers.Builder, CALIBRATION_REFERENCEOffset: flatbuffers.Offset): void;
    static endSBCBiasTerm(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSBCBiasTerm(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset, BASIS: sbcBiasBasis, NATURE: sbcBiasNature, RADIAL_M: number, IN_TRACK_M: number, CROSS_TRACK_M: number, RANGE_M: number, AZIMUTH_DEG: number, ELEVATION_DEG: number, RANGE_RATE_M_S: number, TIME_S: number, OBSERVATIONS: number, CALIBRATION_REFERENCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SBCBiasTermT;
    unpackTo(_o: SBCBiasTermT): void;
}
export declare class SBCBiasTermT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: string | Uint8Array | null;
    BASIS: sbcBiasBasis;
    NATURE: sbcBiasNature;
    RADIAL_M: number;
    IN_TRACK_M: number;
    CROSS_TRACK_M: number;
    RANGE_M: number;
    AZIMUTH_DEG: number;
    ELEVATION_DEG: number;
    RANGE_RATE_M_S: number;
    TIME_S: number;
    OBSERVATIONS: number;
    CALIBRATION_REFERENCE: string | Uint8Array | null;
    constructor(SENSOR_ID?: string | Uint8Array | null, BASIS?: sbcBiasBasis, NATURE?: sbcBiasNature, RADIAL_M?: number, IN_TRACK_M?: number, CROSS_TRACK_M?: number, RANGE_M?: number, AZIMUTH_DEG?: number, ELEVATION_DEG?: number, RANGE_RATE_M_S?: number, TIME_S?: number, OBSERVATIONS?: number, CALIBRATION_REFERENCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SBCBiasTerm.d.ts.map