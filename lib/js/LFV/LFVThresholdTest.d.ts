import * as flatbuffers from 'flatbuffers';
import { lfvRegionSide } from './lfvRegionSide.js';
import { lfvRole } from './lfvRole.js';
/**
 * One threshold test on the scores, decided on one part of the data and
 * counted on another (held out).
 */
export declare class LFVThresholdTest implements flatbuffers.IUnpackableObject<LFVThresholdTestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LFVThresholdTest;
    static getRootAsLFVThresholdTest(bb: flatbuffers.ByteBuffer, obj?: LFVThresholdTest): LFVThresholdTest;
    static getSizePrefixedRootAsLFVThresholdTest(bb: flatbuffers.ByteBuffer, obj?: LFVThresholdTest): LFVThresholdTest;
    /**
     * Score threshold of the decision region.
     */
    THRESHOLD(): number;
    SIDE(): lfvRegionSide;
    /**
     * Role the region indicates: Real (real rows are more likely inside) or
     * Decoy (decoy rows are).
     */
    REGION_ROLE(): lfvRole;
    /**
     * Confusion counts on the held-out data: real rows inside the region and
     * in all, decoy rows inside the region and in all.
     */
    REAL_IN_REGION(): number;
    REAL_TOTAL(): number;
    DECOY_IN_REGION(): number;
    DECOY_TOTAL(): number;
    /**
     * Lower confidence bound on the privacy loss epsilon = ln(P(region | one
     * role) / P(region | the other)), from one-sided Clopper-Pearson limits;
     * 0 = no evidence the roles differ.
     */
    EPSILON_LOWER_BOUND(): number;
    /**
     * Confidence level of the bound, 0..1, e.g. 0.95.
     */
    CONFIDENCE(): number;
    static startLFVThresholdTest(builder: flatbuffers.Builder): void;
    static addThreshold(builder: flatbuffers.Builder, THRESHOLD: number): void;
    static addSide(builder: flatbuffers.Builder, SIDE: lfvRegionSide): void;
    static addRegionRole(builder: flatbuffers.Builder, REGION_ROLE: lfvRole): void;
    static addRealInRegion(builder: flatbuffers.Builder, REAL_IN_REGION: number): void;
    static addRealTotal(builder: flatbuffers.Builder, REAL_TOTAL: number): void;
    static addDecoyInRegion(builder: flatbuffers.Builder, DECOY_IN_REGION: number): void;
    static addDecoyTotal(builder: flatbuffers.Builder, DECOY_TOTAL: number): void;
    static addEpsilonLowerBound(builder: flatbuffers.Builder, EPSILON_LOWER_BOUND: number): void;
    static addConfidence(builder: flatbuffers.Builder, CONFIDENCE: number): void;
    static endLFVThresholdTest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLFVThresholdTest(builder: flatbuffers.Builder, THRESHOLD: number, SIDE: lfvRegionSide, REGION_ROLE: lfvRole, REAL_IN_REGION: number, REAL_TOTAL: number, DECOY_IN_REGION: number, DECOY_TOTAL: number, EPSILON_LOWER_BOUND: number, CONFIDENCE: number): flatbuffers.Offset;
    unpack(): LFVThresholdTestT;
    unpackTo(_o: LFVThresholdTestT): void;
}
export declare class LFVThresholdTestT implements flatbuffers.IGeneratedObject {
    THRESHOLD: number;
    SIDE: lfvRegionSide;
    REGION_ROLE: lfvRole;
    REAL_IN_REGION: number;
    REAL_TOTAL: number;
    DECOY_IN_REGION: number;
    DECOY_TOTAL: number;
    EPSILON_LOWER_BOUND: number;
    CONFIDENCE: number;
    constructor(THRESHOLD?: number, SIDE?: lfvRegionSide, REGION_ROLE?: lfvRole, REAL_IN_REGION?: number, REAL_TOTAL?: number, DECOY_IN_REGION?: number, DECOY_TOTAL?: number, EPSILON_LOWER_BOUND?: number, CONFIDENCE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LFVThresholdTest.d.ts.map