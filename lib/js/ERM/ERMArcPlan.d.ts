import * as flatbuffers from 'flatbuffers';
import { ERMArc, ERMArcT } from './ERMArc.js';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
/**
 * Propagation arcs to run.
 */
export declare class ERMArcPlan implements flatbuffers.IUnpackableObject<ERMArcPlanT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMArcPlan;
    static getRootAsERMArcPlan(bb: flatbuffers.ByteBuffer, obj?: ERMArcPlan): ERMArcPlan;
    static getSizePrefixedRootAsERMArcPlan(bb: flatbuffers.ByteBuffer, obj?: ERMArcPlan): ERMArcPlan;
    TARGET_AGES_DAYS(index: number): number | null;
    targetAgesDaysLength(): number;
    targetAgesDaysArray(): Float64Array | null;
    EPOCH_TOLERANCE_S(): number;
    TARGET_TOLERANCE_S(): number;
    /**
     * How the covariance and the truth were formed, human-readable.
     */
    COVARIANCE_NOTE(): string | null;
    COVARIANCE_NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRUTH_NOTE(): string | null;
    TRUTH_NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    ARCS(index: number, obj?: ERMArc): ERMArc | null;
    arcsLength(): number;
    static startERMArcPlan(builder: flatbuffers.Builder): void;
    static addTargetAgesDays(builder: flatbuffers.Builder, TARGET_AGES_DAYSOffset: flatbuffers.Offset): void;
    static createTargetAgesDaysVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTargetAgesDaysVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTargetAgesDaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEpochToleranceS(builder: flatbuffers.Builder, EPOCH_TOLERANCE_S: number): void;
    static addTargetToleranceS(builder: flatbuffers.Builder, TARGET_TOLERANCE_S: number): void;
    static addCovarianceNote(builder: flatbuffers.Builder, COVARIANCE_NOTEOffset: flatbuffers.Offset): void;
    static addTruthNote(builder: flatbuffers.Builder, TRUTH_NOTEOffset: flatbuffers.Offset): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addArcs(builder: flatbuffers.Builder, ARCSOffset: flatbuffers.Offset): void;
    static createArcsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startArcsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMArcPlan(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMArcPlanT;
    unpackTo(_o: ERMArcPlanT): void;
}
export declare class ERMArcPlanT implements flatbuffers.IGeneratedObject {
    TARGET_AGES_DAYS: (number)[];
    EPOCH_TOLERANCE_S: number;
    TARGET_TOLERANCE_S: number;
    COVARIANCE_NOTE: string | Uint8Array | null;
    TRUTH_NOTE: string | Uint8Array | null;
    COUNTS: ERMCountsT | null;
    ARCS: (ERMArcT)[];
    constructor(TARGET_AGES_DAYS?: (number)[], EPOCH_TOLERANCE_S?: number, TARGET_TOLERANCE_S?: number, COVARIANCE_NOTE?: string | Uint8Array | null, TRUTH_NOTE?: string | Uint8Array | null, COUNTS?: ERMCountsT | null, ARCS?: (ERMArcT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMArcPlan.d.ts.map