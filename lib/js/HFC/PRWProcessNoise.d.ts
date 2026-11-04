import * as flatbuffers from 'flatbuffers';
import { prwProcessNoiseAxes } from './prwProcessNoiseAxes.js';
import { prwProcessNoiseModel } from './prwProcessNoiseModel.js';
/**
 * The process noise a propagated covariance includes: P(t) = Phi P0 Phi^T + Q.
 */
export declare class PRWProcessNoise implements flatbuffers.IUnpackableObject<PRWProcessNoiseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWProcessNoise;
    static getRootAsPRWProcessNoise(bb: flatbuffers.ByteBuffer, obj?: PRWProcessNoise): PRWProcessNoise;
    static getSizePrefixedRootAsPRWProcessNoise(bb: flatbuffers.ByteBuffer, obj?: PRWProcessNoise): PRWProcessNoise;
    MODEL(): prwProcessNoiseModel;
    AXES(): prwProcessNoiseAxes;
    /**
     * Acceleration power spectral density per axis (x, y, z or R, T, N), m^2/s^3.
     */
    SPECTRAL_DENSITY_M2_S3(index: number): number | null;
    spectralDensityM2S3Length(): number;
    spectralDensityM2S3Array(): Float64Array | null;
    /**
     * Interval over which each noise increment enters, seconds.
     */
    DISCRETIZATION_SECONDS(): number;
    static startPRWProcessNoise(builder: flatbuffers.Builder): void;
    static addModel(builder: flatbuffers.Builder, MODEL: prwProcessNoiseModel): void;
    static addAxes(builder: flatbuffers.Builder, AXES: prwProcessNoiseAxes): void;
    static addSpectralDensityM2S3(builder: flatbuffers.Builder, SPECTRAL_DENSITY_M2_S3Offset: flatbuffers.Offset): void;
    static createSpectralDensityM2S3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpectralDensityM2S3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpectralDensityM2S3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addDiscretizationSeconds(builder: flatbuffers.Builder, DISCRETIZATION_SECONDS: number): void;
    static endPRWProcessNoise(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWProcessNoise(builder: flatbuffers.Builder, MODEL: prwProcessNoiseModel, AXES: prwProcessNoiseAxes, SPECTRAL_DENSITY_M2_S3Offset: flatbuffers.Offset, DISCRETIZATION_SECONDS: number): flatbuffers.Offset;
    unpack(): PRWProcessNoiseT;
    unpackTo(_o: PRWProcessNoiseT): void;
}
export declare class PRWProcessNoiseT implements flatbuffers.IGeneratedObject {
    MODEL: prwProcessNoiseModel;
    AXES: prwProcessNoiseAxes;
    SPECTRAL_DENSITY_M2_S3: (number)[];
    DISCRETIZATION_SECONDS: number;
    constructor(MODEL?: prwProcessNoiseModel, AXES?: prwProcessNoiseAxes, SPECTRAL_DENSITY_M2_S3?: (number)[], DISCRETIZATION_SECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWProcessNoise.d.ts.map