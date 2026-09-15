import * as flatbuffers from 'flatbuffers';
import { cqrProbabilityAlgorithm } from './cqrProbabilityAlgorithm.js';
import { cqrUncertaintyOrigin } from './cqrUncertaintyOrigin.js';
/**
 * Report the actual algorithm and uncertainty origin. With
 * MAXIMUM_PROBABILITY_ONLY, MAXIMUM_PROBABILITY is present and PROBABILITY is
 * inapplicable: consumers must ignore its default zero. Never report a heuristic
 * maximum as probability computed from supplied covariance. Otherwise
 * PROBABILITY is unitless in [0,1]; supplied/synthesized covariance is explicit.
 */
export declare class CQRProbabilityResult implements flatbuffers.IUnpackableObject<CQRProbabilityResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRProbabilityResult;
    static getRootAsCQRProbabilityResult(bb: flatbuffers.ByteBuffer, obj?: CQRProbabilityResult): CQRProbabilityResult;
    static getSizePrefixedRootAsCQRProbabilityResult(bb: flatbuffers.ByteBuffer, obj?: CQRProbabilityResult): CQRProbabilityResult;
    PROBABILITY(): number;
    ALGORITHM(): cqrProbabilityAlgorithm;
    CONVERGED(): boolean;
    ITERATIONS(): bigint;
    MAXIMUM_PROBABILITY(): number;
    /**
     * True when MAXIMUM_PROBABILITY carries a value; false means absent.
     */
    HAS_MAXIMUM_PROBABILITY(): boolean;
    /**
     * Explicitly squared distance d^T C^-1 d, dimensionless.
     */
    MAHALANOBIS_SQUARED(): number;
    /**
     * True when MAHALANOBIS_SQUARED carries a value; false means absent.
     */
    HAS_MAHALANOBIS_SQUARED(): boolean;
    UNCERTAINTY_SOURCE(): cqrUncertaintyOrigin;
    static startCQRProbabilityResult(builder: flatbuffers.Builder): void;
    static addProbability(builder: flatbuffers.Builder, PROBABILITY: number): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: cqrProbabilityAlgorithm): void;
    static addConverged(builder: flatbuffers.Builder, CONVERGED: boolean): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: bigint): void;
    static addMaximumProbability(builder: flatbuffers.Builder, MAXIMUM_PROBABILITY: number): void;
    static addHasMaximumProbability(builder: flatbuffers.Builder, HAS_MAXIMUM_PROBABILITY: boolean): void;
    static addMahalanobisSquared(builder: flatbuffers.Builder, MAHALANOBIS_SQUARED: number): void;
    static addHasMahalanobisSquared(builder: flatbuffers.Builder, HAS_MAHALANOBIS_SQUARED: boolean): void;
    static addUncertaintySource(builder: flatbuffers.Builder, UNCERTAINTY_SOURCE: cqrUncertaintyOrigin): void;
    static endCQRProbabilityResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRProbabilityResult(builder: flatbuffers.Builder, PROBABILITY: number, ALGORITHM: cqrProbabilityAlgorithm, CONVERGED: boolean, ITERATIONS: bigint, MAXIMUM_PROBABILITY: number, HAS_MAXIMUM_PROBABILITY: boolean, MAHALANOBIS_SQUARED: number, HAS_MAHALANOBIS_SQUARED: boolean, UNCERTAINTY_SOURCE: cqrUncertaintyOrigin): flatbuffers.Offset;
    unpack(): CQRProbabilityResultT;
    unpackTo(_o: CQRProbabilityResultT): void;
}
export declare class CQRProbabilityResultT implements flatbuffers.IGeneratedObject {
    PROBABILITY: number;
    ALGORITHM: cqrProbabilityAlgorithm;
    CONVERGED: boolean;
    ITERATIONS: bigint;
    MAXIMUM_PROBABILITY: number;
    HAS_MAXIMUM_PROBABILITY: boolean;
    MAHALANOBIS_SQUARED: number;
    HAS_MAHALANOBIS_SQUARED: boolean;
    UNCERTAINTY_SOURCE: cqrUncertaintyOrigin;
    constructor(PROBABILITY?: number, ALGORITHM?: cqrProbabilityAlgorithm, CONVERGED?: boolean, ITERATIONS?: bigint, MAXIMUM_PROBABILITY?: number, HAS_MAXIMUM_PROBABILITY?: boolean, MAHALANOBIS_SQUARED?: number, HAS_MAHALANOBIS_SQUARED?: boolean, UNCERTAINTY_SOURCE?: cqrUncertaintyOrigin);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRProbabilityResult.d.ts.map