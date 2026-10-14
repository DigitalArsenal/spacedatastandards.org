import * as flatbuffers from 'flatbuffers';
import { SCRAlphaCut, SCRAlphaCutT } from './SCRAlphaCut.js';
/**
 * Result of a possibility-of-collision assessment.
 */
export declare class SCRPossibilityResult implements flatbuffers.IUnpackableObject<SCRPossibilityResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRPossibilityResult;
    static getRootAsSCRPossibilityResult(bb: flatbuffers.ByteBuffer, obj?: SCRPossibilityResult): SCRPossibilityResult;
    static getSizePrefixedRootAsSCRPossibilityResult(bb: flatbuffers.ByteBuffer, obj?: SCRPossibilityResult): SCRPossibilityResult;
    /**
     * Possibility of collision, 0 to 1.
     */
    POSSIBILITY_COLLISION(): number;
    /**
     * Necessity of collision, 1 - possibility of no collision.
     */
    NECESSITY_COLLISION(): number;
    /**
     * Necessity of no collision, 1 - POSSIBILITY_COLLISION.
     */
    NECESSITY_NO_COLLISION(): number;
    /**
     * Smallest and largest miss distance over all pairs, m.
     */
    MIN_MISS_M(): number;
    MAX_MISS_M(): number;
    /**
     * Earliest and latest closest approach, s from the common epoch (clamped
     * to the half window).
     */
    TCA_MIN_S(): number;
    TCA_MAX_S(): number;
    /**
     * State pairs evaluated, and those with miss <= the combined radius.
     */
    PAIRS(): bigint;
    COLLIDING_PAIRS(): bigint;
    /**
     * One per requested alpha level, in order.
     */
    ALPHA_CUTS(index: number, obj?: SCRAlphaCut): SCRAlphaCut | null;
    alphaCutsLength(): number;
    static startSCRPossibilityResult(builder: flatbuffers.Builder): void;
    static addPossibilityCollision(builder: flatbuffers.Builder, POSSIBILITY_COLLISION: number): void;
    static addNecessityCollision(builder: flatbuffers.Builder, NECESSITY_COLLISION: number): void;
    static addNecessityNoCollision(builder: flatbuffers.Builder, NECESSITY_NO_COLLISION: number): void;
    static addMinMissM(builder: flatbuffers.Builder, MIN_MISS_M: number): void;
    static addMaxMissM(builder: flatbuffers.Builder, MAX_MISS_M: number): void;
    static addTcaMinS(builder: flatbuffers.Builder, TCA_MIN_S: number): void;
    static addTcaMaxS(builder: flatbuffers.Builder, TCA_MAX_S: number): void;
    static addPairs(builder: flatbuffers.Builder, PAIRS: bigint): void;
    static addCollidingPairs(builder: flatbuffers.Builder, COLLIDING_PAIRS: bigint): void;
    static addAlphaCuts(builder: flatbuffers.Builder, ALPHA_CUTSOffset: flatbuffers.Offset): void;
    static createAlphaCutsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlphaCutsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCRPossibilityResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRPossibilityResult(builder: flatbuffers.Builder, POSSIBILITY_COLLISION: number, NECESSITY_COLLISION: number, NECESSITY_NO_COLLISION: number, MIN_MISS_M: number, MAX_MISS_M: number, TCA_MIN_S: number, TCA_MAX_S: number, PAIRS: bigint, COLLIDING_PAIRS: bigint, ALPHA_CUTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCRPossibilityResultT;
    unpackTo(_o: SCRPossibilityResultT): void;
}
export declare class SCRPossibilityResultT implements flatbuffers.IGeneratedObject {
    POSSIBILITY_COLLISION: number;
    NECESSITY_COLLISION: number;
    NECESSITY_NO_COLLISION: number;
    MIN_MISS_M: number;
    MAX_MISS_M: number;
    TCA_MIN_S: number;
    TCA_MAX_S: number;
    PAIRS: bigint;
    COLLIDING_PAIRS: bigint;
    ALPHA_CUTS: (SCRAlphaCutT)[];
    constructor(POSSIBILITY_COLLISION?: number, NECESSITY_COLLISION?: number, NECESSITY_NO_COLLISION?: number, MIN_MISS_M?: number, MAX_MISS_M?: number, TCA_MIN_S?: number, TCA_MAX_S?: number, PAIRS?: bigint, COLLIDING_PAIRS?: bigint, ALPHA_CUTS?: (SCRAlphaCutT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRPossibilityResult.d.ts.map