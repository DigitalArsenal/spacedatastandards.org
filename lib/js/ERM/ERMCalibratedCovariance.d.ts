import * as flatbuffers from 'flatbuffers';
/**
 * A calibrated covariance.
 */
export declare class ERMCalibratedCovariance implements flatbuffers.IUnpackableObject<ERMCalibratedCovarianceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCalibratedCovariance;
    static getRootAsERMCalibratedCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMCalibratedCovariance): ERMCalibratedCovariance;
    static getSizePrefixedRootAsERMCalibratedCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMCalibratedCovariance): ERMCalibratedCovariance;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * "OUTSIDE", "NO_MODEL", the cell's status, or "UNSTATED".
     */
    STATUS(): string | null;
    STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cell: age index (-1 outside) or horizon range.
     */
    AGE_INDEX(): number;
    AGE_DAYS(): number;
    HORIZON_MIN_DAYS(): number;
    HORIZON_MAX_DAYS(): number;
    FACTOR(): number;
    AXES_FACTORS(index: number): number | null;
    axesFactorsLength(): number;
    axesFactorsArray(): Float64Array | null;
    /**
     * Lower21 RTN, SI.
     */
    COVARIANCE_RTN(index: number): number | null;
    covarianceRtnLength(): number;
    covarianceRtnArray(): Float64Array | null;
    /**
     * 6x6 row-major inertial, SI; empty unless a state was given.
     */
    COVARIANCE_INERTIAL(index: number): number | null;
    covarianceInertialLength(): number;
    covarianceInertialArray(): Float64Array | null;
    static startERMCalibratedCovariance(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static addAgeIndex(builder: flatbuffers.Builder, AGE_INDEX: number): void;
    static addAgeDays(builder: flatbuffers.Builder, AGE_DAYS: number): void;
    static addHorizonMinDays(builder: flatbuffers.Builder, HORIZON_MIN_DAYS: number): void;
    static addHorizonMaxDays(builder: flatbuffers.Builder, HORIZON_MAX_DAYS: number): void;
    static addFactor(builder: flatbuffers.Builder, FACTOR: number): void;
    static addAxesFactors(builder: flatbuffers.Builder, AXES_FACTORSOffset: flatbuffers.Offset): void;
    static createAxesFactorsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAxesFactorsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAxesFactorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceRtn(builder: flatbuffers.Builder, COVARIANCE_RTNOffset: flatbuffers.Offset): void;
    static createCovarianceRtnVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceRtnVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceRtnVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceInertial(builder: flatbuffers.Builder, COVARIANCE_INERTIALOffset: flatbuffers.Offset): void;
    static createCovarianceInertialVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceInertialVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceInertialVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMCalibratedCovariance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCalibratedCovariance(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, REGIMEOffset: flatbuffers.Offset, STATUSOffset: flatbuffers.Offset, AGE_INDEX: number, AGE_DAYS: number, HORIZON_MIN_DAYS: number, HORIZON_MAX_DAYS: number, FACTOR: number, AXES_FACTORSOffset: flatbuffers.Offset, COVARIANCE_RTNOffset: flatbuffers.Offset, COVARIANCE_INERTIALOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMCalibratedCovarianceT;
    unpackTo(_o: ERMCalibratedCovarianceT): void;
}
export declare class ERMCalibratedCovarianceT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    REGIME: string | Uint8Array | null;
    STATUS: string | Uint8Array | null;
    AGE_INDEX: number;
    AGE_DAYS: number;
    HORIZON_MIN_DAYS: number;
    HORIZON_MAX_DAYS: number;
    FACTOR: number;
    AXES_FACTORS: (number)[];
    COVARIANCE_RTN: (number)[];
    COVARIANCE_INERTIAL: (number)[];
    constructor(ID?: string | Uint8Array | null, REGIME?: string | Uint8Array | null, STATUS?: string | Uint8Array | null, AGE_INDEX?: number, AGE_DAYS?: number, HORIZON_MIN_DAYS?: number, HORIZON_MAX_DAYS?: number, FACTOR?: number, AXES_FACTORS?: (number)[], COVARIANCE_RTN?: (number)[], COVARIANCE_INERTIAL?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCalibratedCovariance.d.ts.map