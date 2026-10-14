import * as flatbuffers from 'flatbuffers';
import { LFVRankProbability, LFVRankProbabilityT } from './LFVRankProbability.js';
/**
 * Rank of each real row within its own group, when groups have enough
 * decoys.
 */
export declare class LFVWithinGroup implements flatbuffers.IUnpackableObject<LFVWithinGroupT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LFVWithinGroup;
    static getRootAsLFVWithinGroup(bb: flatbuffers.ByteBuffer, obj?: LFVWithinGroup): LFVWithinGroup;
    static getSizePrefixedRootAsLFVWithinGroup(bb: flatbuffers.ByteBuffer, obj?: LFVWithinGroup): LFVWithinGroup;
    /**
     * Groups (targets) ranked.
     */
    GROUP_COUNT(): number;
    /**
     * Fewest decoys any ranked group has.
     */
    FEWEST_DECOYS(): number;
    /**
     * Decoy rows pooled for standardized scores.
     */
    POOLED_DECOYS(): number;
    /**
     * Histogram of the real row's normalized rank within its group, in equal
     * bins over 0..1 (uniform when indistinguishable).
     */
    RANK_HISTOGRAM(index: number): number | null;
    rankHistogramLength(): number;
    rankHistogramArray(): Uint32Array | null;
    /**
     * Kolmogorov-Smirnov distance of the normalized ranks from uniform, 0..1.
     */
    RANK_KS(): number;
    /**
     * P(real first of N) from the empirical within-group ranks.
     */
    RANK_PROBABILITIES(index: number, obj?: LFVRankProbability): LFVRankProbability | null;
    rankProbabilitiesLength(): number;
    /**
     * P(real first of N) from scores standardized per group and pooled.
     */
    STANDARDIZED_RANK_PROBABILITIES(index: number, obj?: LFVRankProbability): LFVRankProbability | null;
    standardizedRankProbabilitiesLength(): number;
    static startLFVWithinGroup(builder: flatbuffers.Builder): void;
    static addGroupCount(builder: flatbuffers.Builder, GROUP_COUNT: number): void;
    static addFewestDecoys(builder: flatbuffers.Builder, FEWEST_DECOYS: number): void;
    static addPooledDecoys(builder: flatbuffers.Builder, POOLED_DECOYS: number): void;
    static addRankHistogram(builder: flatbuffers.Builder, RANK_HISTOGRAMOffset: flatbuffers.Offset): void;
    static createRankHistogramVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRankHistogramVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRankHistogramVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRankKs(builder: flatbuffers.Builder, RANK_KS: number): void;
    static addRankProbabilities(builder: flatbuffers.Builder, RANK_PROBABILITIESOffset: flatbuffers.Offset): void;
    static createRankProbabilitiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRankProbabilitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStandardizedRankProbabilities(builder: flatbuffers.Builder, STANDARDIZED_RANK_PROBABILITIESOffset: flatbuffers.Offset): void;
    static createStandardizedRankProbabilitiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStandardizedRankProbabilitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endLFVWithinGroup(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLFVWithinGroup(builder: flatbuffers.Builder, GROUP_COUNT: number, FEWEST_DECOYS: number, POOLED_DECOYS: number, RANK_HISTOGRAMOffset: flatbuffers.Offset, RANK_KS: number, RANK_PROBABILITIESOffset: flatbuffers.Offset, STANDARDIZED_RANK_PROBABILITIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LFVWithinGroupT;
    unpackTo(_o: LFVWithinGroupT): void;
}
export declare class LFVWithinGroupT implements flatbuffers.IGeneratedObject {
    GROUP_COUNT: number;
    FEWEST_DECOYS: number;
    POOLED_DECOYS: number;
    RANK_HISTOGRAM: (number)[];
    RANK_KS: number;
    RANK_PROBABILITIES: (LFVRankProbabilityT)[];
    STANDARDIZED_RANK_PROBABILITIES: (LFVRankProbabilityT)[];
    constructor(GROUP_COUNT?: number, FEWEST_DECOYS?: number, POOLED_DECOYS?: number, RANK_HISTOGRAM?: (number)[], RANK_KS?: number, RANK_PROBABILITIES?: (LFVRankProbabilityT)[], STANDARDIZED_RANK_PROBABILITIES?: (LFVRankProbabilityT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LFVWithinGroup.d.ts.map