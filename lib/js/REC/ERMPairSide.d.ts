import * as flatbuffers from 'flatbuffers';
import { ERMStateSample, ERMStateSampleT } from './ERMStateSample.js';
import { ERMWeightedCovariance, ERMWeightedCovarianceT } from './ERMWeightedCovariance.js';
import { ermCovarianceAxes } from './ermCovarianceAxes.js';
/**
 * One side of a predicted-versus-truth pair.
 */
export declare class ERMPairSide implements flatbuffers.IUnpackableObject<ERMPairSideT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMPairSide;
    static getRootAsERMPairSide(bb: flatbuffers.ByteBuffer, obj?: ERMPairSide): ERMPairSide;
    static getSizePrefixedRootAsERMPairSide(bb: flatbuffers.ByteBuffer, obj?: ERMPairSide): ERMPairSide;
    /**
     * Epoch (sampled form).
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position, m, and velocity, m/s, inertial (3 values each).
     */
    POSITION_M(index: number): number | null;
    positionMLength(): number;
    positionMArray(): Float64Array | null;
    VELOCITY_M_S(index: number): number | null;
    velocityMSLength(): number;
    velocityMSArray(): Float64Array | null;
    /**
     * Covariance: Lower6, 3x3 (9), Lower21 or 6x6 (36), SI; empty = none.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    /**
     * Summed covariance terms, instead of COVARIANCE.
     */
    COVARIANCE_TERMS(index: number, obj?: ERMWeightedCovariance): ERMWeightedCovariance | null;
    covarianceTermsLength(): number;
    COVARIANCE_AXES(): ermCovarianceAxes;
    /**
     * Samples to interpolate at EPOCH (sampled form).
     */
    SAMPLES(index: number, obj?: ERMStateSample): ERMStateSample | null;
    samplesLength(): number;
    INTERPOLATION_DEGREE(): number;
    static startERMPairSide(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
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
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceTerms(builder: flatbuffers.Builder, COVARIANCE_TERMSOffset: flatbuffers.Offset): void;
    static createCovarianceTermsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCovarianceTermsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceAxes(builder: flatbuffers.Builder, COVARIANCE_AXES: ermCovarianceAxes): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterpolationDegree(builder: flatbuffers.Builder, INTERPOLATION_DEGREE: number): void;
    static endERMPairSide(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMPairSide(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, POSITION_MOffset: flatbuffers.Offset, VELOCITY_M_SOffset: flatbuffers.Offset, COVARIANCEOffset: flatbuffers.Offset, COVARIANCE_TERMSOffset: flatbuffers.Offset, COVARIANCE_AXES: ermCovarianceAxes, SAMPLESOffset: flatbuffers.Offset, INTERPOLATION_DEGREE: number): flatbuffers.Offset;
    unpack(): ERMPairSideT;
    unpackTo(_o: ERMPairSideT): void;
}
export declare class ERMPairSideT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    POSITION_M: (number)[];
    VELOCITY_M_S: (number)[];
    COVARIANCE: (number)[];
    COVARIANCE_TERMS: (ERMWeightedCovarianceT)[];
    COVARIANCE_AXES: ermCovarianceAxes;
    SAMPLES: (ERMStateSampleT)[];
    INTERPOLATION_DEGREE: number;
    constructor(EPOCH?: string | Uint8Array | null, POSITION_M?: (number)[], VELOCITY_M_S?: (number)[], COVARIANCE?: (number)[], COVARIANCE_TERMS?: (ERMWeightedCovarianceT)[], COVARIANCE_AXES?: ermCovarianceAxes, SAMPLES?: (ERMStateSampleT)[], INTERPOLATION_DEGREE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMPairSide.d.ts.map