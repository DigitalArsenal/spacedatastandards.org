import * as flatbuffers from 'flatbuffers';
import { MDEDistribution, MDEDistributionT } from './MDEDistribution.js';
import { MDERecallBin, MDERecallBinT } from './MDERecallBin.js';
/**
 * Scoring summary.
 */
export declare class MDEScoreSummary implements flatbuffers.IUnpackableObject<MDEScoreSummaryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEScoreSummary;
    static getRootAsMDEScoreSummary(bb: flatbuffers.ByteBuffer, obj?: MDEScoreSummary): MDEScoreSummary;
    static getSizePrefixedRootAsMDEScoreSummary(bb: flatbuffers.ByteBuffer, obj?: MDEScoreSummary): MDEScoreSummary;
    /**
     * Known maneuvers.
     */
    TRUTH(): number;
    /**
     * Detections scored.
     */
    EVENTS(): number;
    /**
     * Known maneuvers detected.
     */
    DETECTED(): number;
    RECALL(): number;
    WILSON95_LOW(): number;
    WILSON95_HIGH(): number;
    BY_DELTA_V(index: number, obj?: MDERecallBin): MDERecallBin | null;
    byDeltaVLength(): number;
    /**
     * Absolute time error of matches, s; absent when none.
     */
    TIME_ERROR_ABS_S(obj?: MDEDistribution): MDEDistribution | null;
    /**
     * Detected over known delta-v; absent when none.
     */
    DV_RATIO(obj?: MDEDistribution): MDEDistribution | null;
    /**
     * Detected over known in-track delta-v; absent when none.
     */
    IN_TRACK_RATIO(obj?: MDEDistribution): MDEDistribution | null;
    UNMATCHED_EVENTS(): number;
    /**
     * Unmatched detections inside explained spans.
     */
    EXPLAINED(): number;
    FALSE_ALARMS(): number;
    /**
     * Object-years assessed.
     */
    OBJECT_YEARS(): number;
    FALSE_ALARMS_PER_OBJECT_YEAR(): number;
    static startMDEScoreSummary(builder: flatbuffers.Builder): void;
    static addTruth(builder: flatbuffers.Builder, TRUTH: number): void;
    static addEvents(builder: flatbuffers.Builder, EVENTS: number): void;
    static addDetected(builder: flatbuffers.Builder, DETECTED: number): void;
    static addRecall(builder: flatbuffers.Builder, RECALL: number): void;
    static addWilson95Low(builder: flatbuffers.Builder, WILSON95_LOW: number): void;
    static addWilson95High(builder: flatbuffers.Builder, WILSON95_HIGH: number): void;
    static addByDeltaV(builder: flatbuffers.Builder, BY_DELTA_VOffset: flatbuffers.Offset): void;
    static createByDeltaVVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startByDeltaVVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimeErrorAbsS(builder: flatbuffers.Builder, TIME_ERROR_ABS_SOffset: flatbuffers.Offset): void;
    static addDvRatio(builder: flatbuffers.Builder, DV_RATIOOffset: flatbuffers.Offset): void;
    static addInTrackRatio(builder: flatbuffers.Builder, IN_TRACK_RATIOOffset: flatbuffers.Offset): void;
    static addUnmatchedEvents(builder: flatbuffers.Builder, UNMATCHED_EVENTS: number): void;
    static addExplained(builder: flatbuffers.Builder, EXPLAINED: number): void;
    static addFalseAlarms(builder: flatbuffers.Builder, FALSE_ALARMS: number): void;
    static addObjectYears(builder: flatbuffers.Builder, OBJECT_YEARS: number): void;
    static addFalseAlarmsPerObjectYear(builder: flatbuffers.Builder, FALSE_ALARMS_PER_OBJECT_YEAR: number): void;
    static endMDEScoreSummary(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): MDEScoreSummaryT;
    unpackTo(_o: MDEScoreSummaryT): void;
}
export declare class MDEScoreSummaryT implements flatbuffers.IGeneratedObject {
    TRUTH: number;
    EVENTS: number;
    DETECTED: number;
    RECALL: number;
    WILSON95_LOW: number;
    WILSON95_HIGH: number;
    BY_DELTA_V: (MDERecallBinT)[];
    TIME_ERROR_ABS_S: MDEDistributionT | null;
    DV_RATIO: MDEDistributionT | null;
    IN_TRACK_RATIO: MDEDistributionT | null;
    UNMATCHED_EVENTS: number;
    EXPLAINED: number;
    FALSE_ALARMS: number;
    OBJECT_YEARS: number;
    FALSE_ALARMS_PER_OBJECT_YEAR: number;
    constructor(TRUTH?: number, EVENTS?: number, DETECTED?: number, RECALL?: number, WILSON95_LOW?: number, WILSON95_HIGH?: number, BY_DELTA_V?: (MDERecallBinT)[], TIME_ERROR_ABS_S?: MDEDistributionT | null, DV_RATIO?: MDEDistributionT | null, IN_TRACK_RATIO?: MDEDistributionT | null, UNMATCHED_EVENTS?: number, EXPLAINED?: number, FALSE_ALARMS?: number, OBJECT_YEARS?: number, FALSE_ALARMS_PER_OBJECT_YEAR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEScoreSummary.d.ts.map