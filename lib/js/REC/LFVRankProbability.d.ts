import * as flatbuffers from 'flatbuffers';
/**
 * Probability that the real row of a group scores highest among N
 * candidates (one real, N - 1 decoys).
 */
export declare class LFVRankProbability implements flatbuffers.IUnpackableObject<LFVRankProbabilityT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LFVRankProbability;
    static getRootAsLFVRankProbability(bb: flatbuffers.ByteBuffer, obj?: LFVRankProbability): LFVRankProbability;
    static getSizePrefixedRootAsLFVRankProbability(bb: flatbuffers.ByteBuffer, obj?: LFVRankProbability): LFVRankProbability;
    /**
     * Candidates per group.
     */
    N(): number;
    /**
     * Probability that the real row scores highest; ties count as a uniform
     * draw among the tied.
     */
    P_REAL_FIRST(): number;
    /**
     * Effective number of candidates, 1 / P_REAL_FIRST (N when the classes
     * cannot be told apart, 1 when they always can); NaN when P_REAL_FIRST is
     * 0.
     */
    N_EFFECTIVE(): number;
    /**
     * The value for indistinguishable classes, 1 / N; NaN = not reported.
     */
    IDEAL(): number;
    static startLFVRankProbability(builder: flatbuffers.Builder): void;
    static addN(builder: flatbuffers.Builder, N: number): void;
    static addPRealFirst(builder: flatbuffers.Builder, P_REAL_FIRST: number): void;
    static addNEffective(builder: flatbuffers.Builder, N_EFFECTIVE: number): void;
    static addIdeal(builder: flatbuffers.Builder, IDEAL: number): void;
    static endLFVRankProbability(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLFVRankProbability(builder: flatbuffers.Builder, N: number, P_REAL_FIRST: number, N_EFFECTIVE: number, IDEAL: number): flatbuffers.Offset;
    unpack(): LFVRankProbabilityT;
    unpackTo(_o: LFVRankProbabilityT): void;
}
export declare class LFVRankProbabilityT implements flatbuffers.IGeneratedObject {
    N: number;
    P_REAL_FIRST: number;
    N_EFFECTIVE: number;
    IDEAL: number;
    constructor(N?: number, P_REAL_FIRST?: number, N_EFFECTIVE?: number, IDEAL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LFVRankProbability.d.ts.map