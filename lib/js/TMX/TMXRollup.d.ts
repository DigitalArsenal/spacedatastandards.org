import * as flatbuffers from 'flatbuffers';
import { TMXRecordRef, TMXRecordRefT } from './TMXRecordRef.js';
import { tmxSeverityLevel } from './tmxSeverityLevel.js';
/**
 * Deterministic composite rollup across all evaluated phenomenologies for a bucket.
 */
export declare class TMXRollup implements flatbuffers.IUnpackableObject<TMXRollupT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMXRollup;
    static getRootAsTMXRollup(bb: flatbuffers.ByteBuffer, obj?: TMXRollup): TMXRollup;
    static getSizePrefixedRootAsTMXRollup(bb: flatbuffers.ByteBuffer, obj?: TMXRollup): TMXRollup;
    /**
     * Target bucket identifier referencing TMXBucket.BUCKET_ID.
     */
    BUCKET_ID(): string;
    BUCKET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Worst severity tier observed across evaluated phenomenologies.
     */
    WORST_TIER(): tmxSeverityLevel;
    /**
     * Final composite score in basis points (0..10000).
     */
    COMPOSITE_SCORE(): number;
    /**
     * Pre-bonus weighted average score in basis points (0..10000).
     */
    BASE_WEIGHTED_SCORE(): number;
    /**
     * Compound overlap bonus applied in basis points.
     */
    COMPOUND_BONUS_APPLIED_BPS(): number;
    /**
     * Number of phenomenologies successfully evaluated for this bucket.
     */
    EVALUATED_COUNT(): number;
    /**
     * Total phenomenology axes configured in the matrix.
     */
    TOTAL_PHENOMENOLOGIES(): number;
    /**
     * Coverage string such as "7/7".
     */
    COVERAGE_RATIO(): string | null;
    COVERAGE_RATIO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Highest-severity underlying SDS event references for quick drill-down.
     */
    TOP_THREAT_REFS(index: number, obj?: TMXRecordRef): TMXRecordRef | null;
    topThreatRefsLength(): number;
    static startTMXRollup(builder: flatbuffers.Builder): void;
    static addBucketId(builder: flatbuffers.Builder, BUCKET_IDOffset: flatbuffers.Offset): void;
    static addWorstTier(builder: flatbuffers.Builder, WORST_TIER: tmxSeverityLevel): void;
    static addCompositeScore(builder: flatbuffers.Builder, COMPOSITE_SCORE: number): void;
    static addBaseWeightedScore(builder: flatbuffers.Builder, BASE_WEIGHTED_SCORE: number): void;
    static addCompoundBonusAppliedBps(builder: flatbuffers.Builder, COMPOUND_BONUS_APPLIED_BPS: number): void;
    static addEvaluatedCount(builder: flatbuffers.Builder, EVALUATED_COUNT: number): void;
    static addTotalPhenomenologies(builder: flatbuffers.Builder, TOTAL_PHENOMENOLOGIES: number): void;
    static addCoverageRatio(builder: flatbuffers.Builder, COVERAGE_RATIOOffset: flatbuffers.Offset): void;
    static addTopThreatRefs(builder: flatbuffers.Builder, TOP_THREAT_REFSOffset: flatbuffers.Offset): void;
    static createTopThreatRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTopThreatRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTMXRollup(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMXRollup(builder: flatbuffers.Builder, BUCKET_IDOffset: flatbuffers.Offset, WORST_TIER: tmxSeverityLevel, COMPOSITE_SCORE: number, BASE_WEIGHTED_SCORE: number, COMPOUND_BONUS_APPLIED_BPS: number, EVALUATED_COUNT: number, TOTAL_PHENOMENOLOGIES: number, COVERAGE_RATIOOffset: flatbuffers.Offset, TOP_THREAT_REFSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TMXRollupT;
    unpackTo(_o: TMXRollupT): void;
}
export declare class TMXRollupT implements flatbuffers.IGeneratedObject {
    BUCKET_ID: string | Uint8Array | null;
    WORST_TIER: tmxSeverityLevel;
    COMPOSITE_SCORE: number;
    BASE_WEIGHTED_SCORE: number;
    COMPOUND_BONUS_APPLIED_BPS: number;
    EVALUATED_COUNT: number;
    TOTAL_PHENOMENOLOGIES: number;
    COVERAGE_RATIO: string | Uint8Array | null;
    TOP_THREAT_REFS: (TMXRecordRefT)[];
    constructor(BUCKET_ID?: string | Uint8Array | null, WORST_TIER?: tmxSeverityLevel, COMPOSITE_SCORE?: number, BASE_WEIGHTED_SCORE?: number, COMPOUND_BONUS_APPLIED_BPS?: number, EVALUATED_COUNT?: number, TOTAL_PHENOMENOLOGIES?: number, COVERAGE_RATIO?: string | Uint8Array | null, TOP_THREAT_REFS?: (TMXRecordRefT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMXRollup.d.ts.map