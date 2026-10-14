import * as flatbuffers from 'flatbuffers';
/**
 * An error with its predicted covariance, for fitting calibration factors.
 */
export declare class ERMCalibrationSample implements flatbuffers.IUnpackableObject<ERMCalibrationSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCalibrationSample;
    static getRootAsERMCalibrationSample(bb: flatbuffers.ByteBuffer, obj?: ERMCalibrationSample): ERMCalibrationSample;
    static getSizePrefixedRootAsERMCalibrationSample(bb: flatbuffers.ByteBuffer, obj?: ERMCalibrationSample): ERMCalibrationSample;
    STRATUM(): string | null;
    STRATUM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object identifier; empty = unknown.
     */
    OBJECT(): string | null;
    OBJECT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position error (3 values).
     */
    ERROR(index: number): number | null;
    errorLength(): number;
    errorArray(): Float64Array | null;
    /**
     * Covariance: 6, 9, 21 or 36 values (position block used).
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    static startERMCalibrationSample(builder: flatbuffers.Builder): void;
    static addStratum(builder: flatbuffers.Builder, STRATUMOffset: flatbuffers.Offset): void;
    static addObject(builder: flatbuffers.Builder, OBJECTOffset: flatbuffers.Offset): void;
    static addError(builder: flatbuffers.Builder, ERROROffset: flatbuffers.Offset): void;
    static createErrorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createErrorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startErrorVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMCalibrationSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCalibrationSample(builder: flatbuffers.Builder, STRATUMOffset: flatbuffers.Offset, OBJECTOffset: flatbuffers.Offset, ERROROffset: flatbuffers.Offset, COVARIANCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMCalibrationSampleT;
    unpackTo(_o: ERMCalibrationSampleT): void;
}
export declare class ERMCalibrationSampleT implements flatbuffers.IGeneratedObject {
    STRATUM: string | Uint8Array | null;
    OBJECT: string | Uint8Array | null;
    ERROR: (number)[];
    COVARIANCE: (number)[];
    constructor(STRATUM?: string | Uint8Array | null, OBJECT?: string | Uint8Array | null, ERROR?: (number)[], COVARIANCE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCalibrationSample.d.ts.map