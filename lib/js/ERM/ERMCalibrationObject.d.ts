import * as flatbuffers from 'flatbuffers';
import { ermCovarianceAxes } from './ermCovarianceAxes.js';
/**
 * An object to give a calibrated covariance.
 */
export declare class ERMCalibrationObject implements flatbuffers.IUnpackableObject<ERMCalibrationObjectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCalibrationObject;
    static getRootAsERMCalibrationObject(bb: flatbuffers.ByteBuffer, obj?: ERMCalibrationObject): ERMCalibrationObject;
    static getSizePrefixedRootAsERMCalibrationObject(bb: flatbuffers.ByteBuffer, obj?: ERMCalibrationObject): ERMCalibrationObject;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Regime ID, when known.
     */
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Element set placing it in a regime: NORAD number and epoch.
     */
    SET_NORAD_CAT_ID(): number;
    SET_EPOCH(): string | null;
    SET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inertial state, m and m/s (3 values each); empty = none.
     */
    POSITION_M(index: number): number | null;
    positionMLength(): number;
    positionMArray(): Float64Array | null;
    VELOCITY_M_S(index: number): number | null;
    velocityMSLength(): number;
    velocityMSArray(): Float64Array | null;
    OBJECT_FACTOR(): number;
    /**
     * Element-set age, days (set models); NaN = none.
     */
    AGE_DAYS(): number;
    /**
     * Prediction horizon, days (factor models); NaN = none.
     */
    HORIZON_DAYS(): number;
    /**
     * Covariance to scale: 6, 9, 21 or 36 values, SI.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    COVARIANCE_AXES(): ermCovarianceAxes;
    static startERMCalibrationObject(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addSetNoradCatId(builder: flatbuffers.Builder, SET_NORAD_CAT_ID: number): void;
    static addSetEpoch(builder: flatbuffers.Builder, SET_EPOCHOffset: flatbuffers.Offset): void;
    static addPositionM(builder: flatbuffers.Builder, POSITION_MOffset: flatbuffers.Offset): void;
    static createPositionMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocityMS(builder: flatbuffers.Builder, VELOCITY_M_SOffset: flatbuffers.Offset): void;
    static createVelocityMSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocityMSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocityMSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjectFactor(builder: flatbuffers.Builder, OBJECT_FACTOR: number): void;
    static addAgeDays(builder: flatbuffers.Builder, AGE_DAYS: number): void;
    static addHorizonDays(builder: flatbuffers.Builder, HORIZON_DAYS: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceAxes(builder: flatbuffers.Builder, COVARIANCE_AXES: ermCovarianceAxes): void;
    static endERMCalibrationObject(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCalibrationObject(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, REGIMEOffset: flatbuffers.Offset, SET_NORAD_CAT_ID: number, SET_EPOCHOffset: flatbuffers.Offset, POSITION_MOffset: flatbuffers.Offset, VELOCITY_M_SOffset: flatbuffers.Offset, OBJECT_FACTOR: number, AGE_DAYS: number, HORIZON_DAYS: number, COVARIANCEOffset: flatbuffers.Offset, COVARIANCE_AXES: ermCovarianceAxes): flatbuffers.Offset;
    unpack(): ERMCalibrationObjectT;
    unpackTo(_o: ERMCalibrationObjectT): void;
}
export declare class ERMCalibrationObjectT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    REGIME: string | Uint8Array | null;
    SET_NORAD_CAT_ID: number;
    SET_EPOCH: string | Uint8Array | null;
    POSITION_M: (number)[];
    VELOCITY_M_S: (number)[];
    OBJECT_FACTOR: number;
    AGE_DAYS: number;
    HORIZON_DAYS: number;
    COVARIANCE: (number)[];
    COVARIANCE_AXES: ermCovarianceAxes;
    constructor(ID?: string | Uint8Array | null, REGIME?: string | Uint8Array | null, SET_NORAD_CAT_ID?: number, SET_EPOCH?: string | Uint8Array | null, POSITION_M?: (number)[], VELOCITY_M_S?: (number)[], OBJECT_FACTOR?: number, AGE_DAYS?: number, HORIZON_DAYS?: number, COVARIANCE?: (number)[], COVARIANCE_AXES?: ermCovarianceAxes);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCalibrationObject.d.ts.map