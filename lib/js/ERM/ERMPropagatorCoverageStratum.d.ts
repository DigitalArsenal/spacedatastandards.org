import * as flatbuffers from 'flatbuffers';
import { ERMCoverage, ERMCoverageT } from './ERMCoverage.js';
/**
 * Coverage of one stratum of a propagator covariance.
 */
export declare class ERMPropagatorCoverageStratum implements flatbuffers.IUnpackableObject<ERMPropagatorCoverageStratumT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMPropagatorCoverageStratum;
    static getRootAsERMPropagatorCoverageStratum(bb: flatbuffers.ByteBuffer, obj?: ERMPropagatorCoverageStratum): ERMPropagatorCoverageStratum;
    static getSizePrefixedRootAsERMPropagatorCoverageStratum(bb: flatbuffers.ByteBuffer, obj?: ERMPropagatorCoverageStratum): ERMPropagatorCoverageStratum;
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REGIME_INDEX(): number;
    AGE_INDEX(): number;
    AGE_MIN_DAYS(): number;
    AGE_MAX_DAYS(): number;
    /**
     * RMS errors and sigmas, km (3 values each).
     */
    RMS_ERROR_RTN_KM(index: number): number | null;
    rmsErrorRtnKmLength(): number;
    rmsErrorRtnKmArray(): Float64Array | null;
    RMS_SIGMA_RTN_KM(index: number): number | null;
    rmsSigmaRtnKmLength(): number;
    rmsSigmaRtnKmArray(): Float64Array | null;
    RMS_SIGMA_P0_ONLY_RTN_KM(index: number): number | null;
    rmsSigmaP0OnlyRtnKmLength(): number;
    rmsSigmaP0OnlyRtnKmArray(): Float64Array | null;
    SPECTRAL_DENSITY_M2_S3(index: number): number | null;
    spectralDensityM2S3Length(): number;
    spectralDensityM2S3Array(): Float64Array | null;
    COVERAGE(obj?: ERMCoverage): ERMCoverage | null;
    COVERAGE_P0_ONLY(obj?: ERMCoverage): ERMCoverage | null;
    static startERMPropagatorCoverageStratum(builder: flatbuffers.Builder): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addRegimeIndex(builder: flatbuffers.Builder, REGIME_INDEX: number): void;
    static addAgeIndex(builder: flatbuffers.Builder, AGE_INDEX: number): void;
    static addAgeMinDays(builder: flatbuffers.Builder, AGE_MIN_DAYS: number): void;
    static addAgeMaxDays(builder: flatbuffers.Builder, AGE_MAX_DAYS: number): void;
    static addRmsErrorRtnKm(builder: flatbuffers.Builder, RMS_ERROR_RTN_KMOffset: flatbuffers.Offset): void;
    static createRmsErrorRtnKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRmsErrorRtnKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRmsErrorRtnKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRmsSigmaRtnKm(builder: flatbuffers.Builder, RMS_SIGMA_RTN_KMOffset: flatbuffers.Offset): void;
    static createRmsSigmaRtnKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRmsSigmaRtnKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRmsSigmaRtnKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRmsSigmaP0OnlyRtnKm(builder: flatbuffers.Builder, RMS_SIGMA_P0_ONLY_RTN_KMOffset: flatbuffers.Offset): void;
    static createRmsSigmaP0OnlyRtnKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRmsSigmaP0OnlyRtnKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRmsSigmaP0OnlyRtnKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpectralDensityM2S3(builder: flatbuffers.Builder, SPECTRAL_DENSITY_M2_S3Offset: flatbuffers.Offset): void;
    static createSpectralDensityM2S3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpectralDensityM2S3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpectralDensityM2S3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoverage(builder: flatbuffers.Builder, COVERAGEOffset: flatbuffers.Offset): void;
    static addCoverageP0Only(builder: flatbuffers.Builder, COVERAGE_P0_ONLYOffset: flatbuffers.Offset): void;
    static endERMPropagatorCoverageStratum(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMPropagatorCoverageStratumT;
    unpackTo(_o: ERMPropagatorCoverageStratumT): void;
}
export declare class ERMPropagatorCoverageStratumT implements flatbuffers.IGeneratedObject {
    REGIME: string | Uint8Array | null;
    REGIME_INDEX: number;
    AGE_INDEX: number;
    AGE_MIN_DAYS: number;
    AGE_MAX_DAYS: number;
    RMS_ERROR_RTN_KM: (number)[];
    RMS_SIGMA_RTN_KM: (number)[];
    RMS_SIGMA_P0_ONLY_RTN_KM: (number)[];
    SPECTRAL_DENSITY_M2_S3: (number)[];
    COVERAGE: ERMCoverageT | null;
    COVERAGE_P0_ONLY: ERMCoverageT | null;
    constructor(REGIME?: string | Uint8Array | null, REGIME_INDEX?: number, AGE_INDEX?: number, AGE_MIN_DAYS?: number, AGE_MAX_DAYS?: number, RMS_ERROR_RTN_KM?: (number)[], RMS_SIGMA_RTN_KM?: (number)[], RMS_SIGMA_P0_ONLY_RTN_KM?: (number)[], SPECTRAL_DENSITY_M2_S3?: (number)[], COVERAGE?: ERMCoverageT | null, COVERAGE_P0_ONLY?: ERMCoverageT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMPropagatorCoverageStratum.d.ts.map