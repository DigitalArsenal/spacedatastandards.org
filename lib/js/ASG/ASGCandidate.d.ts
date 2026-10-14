import * as flatbuffers from 'flatbuffers';
import { ASGObjectRef, ASGObjectRefT } from './ASGObjectRef.js';
/**
 * One predicted object tested against an observation.
 */
export declare class ASGCandidate implements flatbuffers.IUnpackableObject<ASGCandidateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGCandidate;
    static getRootAsASGCandidate(bb: flatbuffers.ByteBuffer, obj?: ASGCandidate): ASGCandidate;
    static getSizePrefixedRootAsASGCandidate(bb: flatbuffers.ByteBuffer, obj?: ASGCandidate): ASGCandidate;
    OBJECT(obj?: ASGObjectRef): ASGObjectRef | null;
    /**
     * Mahalanobis distance squared of the residual on S = H P H' + R
     * (dimensionless, chi-square distributed with the observation's degrees
     * of freedom).
     */
    D2(): number;
    /**
     * Chi-square upper-tail probability of D2.
     */
    P_VALUE(): number;
    /**
     * Posterior association probability among the observation's candidates and
     * clutter, 0 to 1.
     */
    POSTERIOR(): number;
    /**
     * True when D2 is within the observation's gate.
     */
    IN_GATE(): boolean;
    /**
     * Natural logarithm of det(S), in the measurement units' product.
     */
    LOG_DET_S(): number;
    /**
     * Residuals, measured minus predicted, one per observation MEASUREMENTS
     * entry in the same order and unit (angles wrapped to +-180 degrees).
     */
    RESIDUAL(index: number): number | null;
    residualLength(): number;
    residualArray(): Float64Array | null;
    /**
     * Predicted values, one per observation MEASUREMENTS entry.
     */
    PREDICTED(index: number): number | null;
    predictedLength(): number;
    predictedArray(): Float64Array | null;
    /**
     * One-way light time applied, s; 0 = none.
     */
    LIGHT_TIME_S(): number;
    /**
     * Predicted position at the observation time, GCRF, km (3 values); empty
     * when geometry was not requested.
     */
    POSITION_GCRF_KM(index: number): number | null;
    positionGcrfKmLength(): number;
    positionGcrfKmArray(): Float64Array | null;
    /**
     * Predicted velocity, GCRF, km/s (3 values); empty when not requested.
     */
    VELOCITY_GCRF_KM_S(index: number): number | null;
    velocityGcrfKmSLength(): number;
    velocityGcrfKmSArray(): Float64Array | null;
    /**
     * Predicted position covariance, GCRF, km**2, 3x3 row-major (9 values);
     * empty when not requested.
     */
    POSITION_COVARIANCE_KM2(index: number): number | null;
    positionCovarianceKm2Length(): number;
    positionCovarianceKm2Array(): Float64Array | null;
    static startASGCandidate(builder: flatbuffers.Builder): void;
    static addObject(builder: flatbuffers.Builder, OBJECTOffset: flatbuffers.Offset): void;
    static addD2(builder: flatbuffers.Builder, D2: number): void;
    static addPValue(builder: flatbuffers.Builder, P_VALUE: number): void;
    static addPosterior(builder: flatbuffers.Builder, POSTERIOR: number): void;
    static addInGate(builder: flatbuffers.Builder, IN_GATE: boolean): void;
    static addLogDetS(builder: flatbuffers.Builder, LOG_DET_S: number): void;
    static addResidual(builder: flatbuffers.Builder, RESIDUALOffset: flatbuffers.Offset): void;
    static createResidualVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createResidualVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startResidualVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPredicted(builder: flatbuffers.Builder, PREDICTEDOffset: flatbuffers.Offset): void;
    static createPredictedVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPredictedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPredictedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLightTimeS(builder: flatbuffers.Builder, LIGHT_TIME_S: number): void;
    static addPositionGcrfKm(builder: flatbuffers.Builder, POSITION_GCRF_KMOffset: flatbuffers.Offset): void;
    static createPositionGcrfKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionGcrfKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionGcrfKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocityGcrfKmS(builder: flatbuffers.Builder, VELOCITY_GCRF_KM_SOffset: flatbuffers.Offset): void;
    static createVelocityGcrfKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocityGcrfKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocityGcrfKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositionCovarianceKm2(builder: flatbuffers.Builder, POSITION_COVARIANCE_KM2Offset: flatbuffers.Offset): void;
    static createPositionCovarianceKm2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionCovarianceKm2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionCovarianceKm2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static endASGCandidate(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createASGCandidate(builder: flatbuffers.Builder, OBJECTOffset: flatbuffers.Offset, D2: number, P_VALUE: number, POSTERIOR: number, IN_GATE: boolean, LOG_DET_S: number, RESIDUALOffset: flatbuffers.Offset, PREDICTEDOffset: flatbuffers.Offset, LIGHT_TIME_S: number, POSITION_GCRF_KMOffset: flatbuffers.Offset, VELOCITY_GCRF_KM_SOffset: flatbuffers.Offset, POSITION_COVARIANCE_KM2Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ASGCandidateT;
    unpackTo(_o: ASGCandidateT): void;
}
export declare class ASGCandidateT implements flatbuffers.IGeneratedObject {
    OBJECT: ASGObjectRefT | null;
    D2: number;
    P_VALUE: number;
    POSTERIOR: number;
    IN_GATE: boolean;
    LOG_DET_S: number;
    RESIDUAL: (number)[];
    PREDICTED: (number)[];
    LIGHT_TIME_S: number;
    POSITION_GCRF_KM: (number)[];
    VELOCITY_GCRF_KM_S: (number)[];
    POSITION_COVARIANCE_KM2: (number)[];
    constructor(OBJECT?: ASGObjectRefT | null, D2?: number, P_VALUE?: number, POSTERIOR?: number, IN_GATE?: boolean, LOG_DET_S?: number, RESIDUAL?: (number)[], PREDICTED?: (number)[], LIGHT_TIME_S?: number, POSITION_GCRF_KM?: (number)[], VELOCITY_GCRF_KM_S?: (number)[], POSITION_COVARIANCE_KM2?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGCandidate.d.ts.map