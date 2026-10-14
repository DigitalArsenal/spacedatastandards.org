import * as flatbuffers from 'flatbuffers';
import { ERMClippedStatistics, ERMClippedStatisticsT } from './ERMClippedStatistics.js';
import { ERMCoverage, ERMCoverageT } from './ERMCoverage.js';
import { ERMStratumScale, ERMStratumScaleT } from './ERMStratumScale.js';
import { covarianceCalibration } from './covarianceCalibration.js';
/**
 * One stratum of a model.
 */
export declare class ERMModelStratum implements flatbuffers.IUnpackableObject<ERMModelStratumT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMModelStratum;
    static getRootAsERMModelStratum(bb: flatbuffers.ByteBuffer, obj?: ERMModelStratum): ERMModelStratum;
    static getSizePrefixedRootAsERMModelStratum(bb: flatbuffers.ByteBuffer, obj?: ERMModelStratum): ERMModelStratum;
    /**
     * Regime ID.
     */
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REGIME_INDEX(): number;
    AGE_INDEX(): number;
    /**
     * Age bin, days.
     */
    AGE_MIN_DAYS(): number;
    AGE_MAX_DAYS(): number;
    /**
     * Samples.
     */
    N(): bigint;
    /**
     * Mean error, 6 values.
     */
    MEAN(index: number): number | null;
    meanLength(): number;
    meanArray(): Float64Array | null;
    /**
     * Sample covariance, Lower21; empty when N < 2.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    /**
     * Quantiles, per component at the model's QUANTILE_PROBABILITIES,
     * component-major (6 x 7 values).
     */
    QUANTILES(index: number): number | null;
    quantilesLength(): number;
    quantilesArray(): Float64Array | null;
    MEDIAN(index: number): number | null;
    medianLength(): number;
    medianArray(): Float64Array | null;
    /**
     * (q84 - q16) / 2 per component.
     */
    ROBUST_SIGMA(index: number): number | null;
    robustSigmaLength(): number;
    robustSigmaArray(): Float64Array | null;
    CLIPPED(obj?: ERMClippedStatistics): ERMClippedStatistics | null;
    COVERAGE(obj?: ERMCoverage): ERMCoverage | null;
    /**
     * Absent when unscaled.
     */
    SCALE(obj?: ERMStratumScale): ERMStratumScale | null;
    /**
     * Whether the stratum's covariance passed its realism test.
     */
    CALIBRATION(): covarianceCalibration;
    /**
     * Identifier of the realism evidence; empty unless calibrated.
     */
    CALIBRATION_REFERENCE(): string | null;
    CALIBRATION_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMModelStratum(builder: flatbuffers.Builder): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addRegimeIndex(builder: flatbuffers.Builder, REGIME_INDEX: number): void;
    static addAgeIndex(builder: flatbuffers.Builder, AGE_INDEX: number): void;
    static addAgeMinDays(builder: flatbuffers.Builder, AGE_MIN_DAYS: number): void;
    static addAgeMaxDays(builder: flatbuffers.Builder, AGE_MAX_DAYS: number): void;
    static addN(builder: flatbuffers.Builder, N: bigint): void;
    static addMean(builder: flatbuffers.Builder, MEANOffset: flatbuffers.Offset): void;
    static createMeanVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMeanVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMeanVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQuantiles(builder: flatbuffers.Builder, QUANTILESOffset: flatbuffers.Offset): void;
    static createQuantilesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createQuantilesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startQuantilesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMedian(builder: flatbuffers.Builder, MEDIANOffset: flatbuffers.Offset): void;
    static createMedianVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMedianVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMedianVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRobustSigma(builder: flatbuffers.Builder, ROBUST_SIGMAOffset: flatbuffers.Offset): void;
    static createRobustSigmaVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRobustSigmaVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRobustSigmaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClipped(builder: flatbuffers.Builder, CLIPPEDOffset: flatbuffers.Offset): void;
    static addCoverage(builder: flatbuffers.Builder, COVERAGEOffset: flatbuffers.Offset): void;
    static addScale(builder: flatbuffers.Builder, SCALEOffset: flatbuffers.Offset): void;
    static addCalibration(builder: flatbuffers.Builder, CALIBRATION: covarianceCalibration): void;
    static addCalibrationReference(builder: flatbuffers.Builder, CALIBRATION_REFERENCEOffset: flatbuffers.Offset): void;
    static endERMModelStratum(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMModelStratumT;
    unpackTo(_o: ERMModelStratumT): void;
}
export declare class ERMModelStratumT implements flatbuffers.IGeneratedObject {
    REGIME: string | Uint8Array | null;
    REGIME_INDEX: number;
    AGE_INDEX: number;
    AGE_MIN_DAYS: number;
    AGE_MAX_DAYS: number;
    N: bigint;
    MEAN: (number)[];
    COVARIANCE: (number)[];
    QUANTILES: (number)[];
    MEDIAN: (number)[];
    ROBUST_SIGMA: (number)[];
    CLIPPED: ERMClippedStatisticsT | null;
    COVERAGE: ERMCoverageT | null;
    SCALE: ERMStratumScaleT | null;
    CALIBRATION: covarianceCalibration;
    CALIBRATION_REFERENCE: string | Uint8Array | null;
    constructor(REGIME?: string | Uint8Array | null, REGIME_INDEX?: number, AGE_INDEX?: number, AGE_MIN_DAYS?: number, AGE_MAX_DAYS?: number, N?: bigint, MEAN?: (number)[], COVARIANCE?: (number)[], QUANTILES?: (number)[], MEDIAN?: (number)[], ROBUST_SIGMA?: (number)[], CLIPPED?: ERMClippedStatisticsT | null, COVERAGE?: ERMCoverageT | null, SCALE?: ERMStratumScaleT | null, CALIBRATION?: covarianceCalibration, CALIBRATION_REFERENCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMModelStratum.d.ts.map