import * as flatbuffers from 'flatbuffers';
import { tbpPeriodicOrbit, tbpPeriodicOrbitT } from './tbpPeriodicOrbit.js';
/**
 * Request parameters for pseudo-arclength or natural-parameter continuation.
 */
export declare class tbpContinuationRequest implements flatbuffers.IUnpackableObject<tbpContinuationRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpContinuationRequest;
    static getRootAstbpContinuationRequest(bb: flatbuffers.ByteBuffer, obj?: tbpContinuationRequest): tbpContinuationRequest;
    static getSizePrefixedRootAstbpContinuationRequest(bb: flatbuffers.ByteBuffer, obj?: tbpContinuationRequest): tbpContinuationRequest;
    /**
     * Seed periodic orbit (INITIAL_STATE and PERIOD required).
     */
    SEED_ORBIT(obj?: tbpPeriodicOrbit): tbpPeriodicOrbit | null;
    /**
     * Arclength step size ds (signed); 0 = natural-parameter fixed-period refinement.
     */
    STEP_SIZE(): number;
    /**
     * Number of continuation steps to generate; 0 = 1.
     */
    STEPS(): number;
    /**
     * True = fixed-period natural parameter continuation (cont_np); false = pseudo-arclength (cont).
     */
    FIXED_PERIOD(): boolean;
    /**
     * Optional 7-element previous null-vector tangent for directional continuation.
     */
    NULL_VECTOR(index: number): number | null;
    nullVectorLength(): number;
    nullVectorArray(): Float64Array | null;
    /**
     * Convergence tolerance on periodicity residual; 0 = default (1e-10).
     */
    TOLERANCE(): number;
    /**
     * Maximum corrector iterations per step; 0 = default.
     */
    MAX_ITERATIONS(): number;
    static starttbpContinuationRequest(builder: flatbuffers.Builder): void;
    static addSeedOrbit(builder: flatbuffers.Builder, SEED_ORBITOffset: flatbuffers.Offset): void;
    static addStepSize(builder: flatbuffers.Builder, STEP_SIZE: number): void;
    static addSteps(builder: flatbuffers.Builder, STEPS: number): void;
    static addFixedPeriod(builder: flatbuffers.Builder, FIXED_PERIOD: boolean): void;
    static addNullVector(builder: flatbuffers.Builder, NULL_VECTOROffset: flatbuffers.Offset): void;
    static createNullVectorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNullVectorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNullVectorVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTolerance(builder: flatbuffers.Builder, TOLERANCE: number): void;
    static addMaxIterations(builder: flatbuffers.Builder, MAX_ITERATIONS: number): void;
    static endtbpContinuationRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createtbpContinuationRequest(builder: flatbuffers.Builder, SEED_ORBITOffset: flatbuffers.Offset, STEP_SIZE: number, STEPS: number, FIXED_PERIOD: boolean, NULL_VECTOROffset: flatbuffers.Offset, TOLERANCE: number, MAX_ITERATIONS: number): flatbuffers.Offset;
    unpack(): tbpContinuationRequestT;
    unpackTo(_o: tbpContinuationRequestT): void;
}
export declare class tbpContinuationRequestT implements flatbuffers.IGeneratedObject {
    SEED_ORBIT: tbpPeriodicOrbitT | null;
    STEP_SIZE: number;
    STEPS: number;
    FIXED_PERIOD: boolean;
    NULL_VECTOR: (number)[];
    TOLERANCE: number;
    MAX_ITERATIONS: number;
    constructor(SEED_ORBIT?: tbpPeriodicOrbitT | null, STEP_SIZE?: number, STEPS?: number, FIXED_PERIOD?: boolean, NULL_VECTOR?: (number)[], TOLERANCE?: number, MAX_ITERATIONS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpContinuationRequest.d.ts.map