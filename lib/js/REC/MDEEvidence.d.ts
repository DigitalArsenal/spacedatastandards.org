import * as flatbuffers from 'flatbuffers';
import { mdeDetector } from './mdeDetector.js';
import { mdeTimeBasis } from './mdeTimeBasis.js';
/**
 * The statistic behind one event. A combined event lists the evidence of
 * each detector in COMPONENTS.
 */
export declare class MDEEvidence implements flatbuffers.IUnpackableObject<MDEEvidenceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEEvidence;
    static getRootAsMDEEvidence(bb: flatbuffers.ByteBuffer, obj?: MDEEvidence): MDEEvidence;
    static getSizePrefixedRootAsMDEEvidence(bb: flatbuffers.ByteBuffer, obj?: MDEEvidence): MDEEvidence;
    DETECTOR(): mdeDetector;
    /**
     * Time the component detector gave, Unix ms (for a combined event's
     * components); 0 = the event's.
     */
    TIME_MS(): bigint;
    /**
     * D1: index of the crossing pair; -1 = none.
     */
    PAIR_INDEX(): number;
    /**
     * D1: step and threshold values, m/s; NaN = not computed.
     */
    STEP_IN_TRACK_M_S(): number;
    STEP_PLANE_M_S(): number;
    THRESHOLD_IN_TRACK_M_S(): number;
    THRESHOLD_PLANE_M_S(): number;
    /**
     * D1: crossing at an end of the span.
     */
    CROSSING_AT_EDGE(): boolean;
    /**
     * Span (D1) or gap (D2, D3) start and stop, Unix ms; 0 = none.
     */
    SPAN_START_MS(): bigint;
    SPAN_STOP_MS(): bigint;
    /**
     * D2/D3: GLR statistic of the in-track (or rate) test; NaN = not computed.
     */
    GLR_STATISTIC(): number;
    /**
     * D2: level step, m/s, and its standard deviation.
     */
    STEP_M_S(): number;
    STEP_SD_M_S(): number;
    /**
     * D2: sigma of the levels, m/s.
     */
    SIGMA_M_S(): number;
    /**
     * D2: level trend removed, m/s per day.
     */
    TREND_M_S_PER_DAY(): number;
    /**
     * D2: epochs of the last old-level and first new-level sets, Unix ms.
     */
    OLD_LEVEL_SET_MS(): bigint;
    NEW_LEVEL_SET_MS(): bigint;
    TIME_BASIS(): mdeTimeBasis;
    /**
     * D2: GLR statistic of the plane test; NaN = not computed.
     */
    PLANE_GLR_STATISTIC(): number;
    /**
     * D2: plane step, m/s.
     */
    PLANE_STEP_M_S(): number;
    /**
     * D3: change of the level rate, m/s per day, and its standard deviation.
     */
    RATE_CHANGE_M_S_PER_DAY(): number;
    RATE_CHANGE_SD(): number;
    /**
     * D3: rate before the change, m/s per day.
     */
    TREND_BEFORE_M_S_PER_DAY(): number;
    /**
     * C: the evidence of each component detector.
     */
    COMPONENTS(index: number, obj?: MDEEvidence): MDEEvidence | null;
    componentsLength(): number;
    /**
     * C: the component whose time and size were kept.
     */
    KEPT(): mdeDetector;
    static startMDEEvidence(builder: flatbuffers.Builder): void;
    static addDetector(builder: flatbuffers.Builder, DETECTOR: mdeDetector): void;
    static addTimeMs(builder: flatbuffers.Builder, TIME_MS: bigint): void;
    static addPairIndex(builder: flatbuffers.Builder, PAIR_INDEX: number): void;
    static addStepInTrackMS(builder: flatbuffers.Builder, STEP_IN_TRACK_M_S: number): void;
    static addStepPlaneMS(builder: flatbuffers.Builder, STEP_PLANE_M_S: number): void;
    static addThresholdInTrackMS(builder: flatbuffers.Builder, THRESHOLD_IN_TRACK_M_S: number): void;
    static addThresholdPlaneMS(builder: flatbuffers.Builder, THRESHOLD_PLANE_M_S: number): void;
    static addCrossingAtEdge(builder: flatbuffers.Builder, CROSSING_AT_EDGE: boolean): void;
    static addSpanStartMs(builder: flatbuffers.Builder, SPAN_START_MS: bigint): void;
    static addSpanStopMs(builder: flatbuffers.Builder, SPAN_STOP_MS: bigint): void;
    static addGlrStatistic(builder: flatbuffers.Builder, GLR_STATISTIC: number): void;
    static addStepMS(builder: flatbuffers.Builder, STEP_M_S: number): void;
    static addStepSdMS(builder: flatbuffers.Builder, STEP_SD_M_S: number): void;
    static addSigmaMS(builder: flatbuffers.Builder, SIGMA_M_S: number): void;
    static addTrendMSPerDay(builder: flatbuffers.Builder, TREND_M_S_PER_DAY: number): void;
    static addOldLevelSetMs(builder: flatbuffers.Builder, OLD_LEVEL_SET_MS: bigint): void;
    static addNewLevelSetMs(builder: flatbuffers.Builder, NEW_LEVEL_SET_MS: bigint): void;
    static addTimeBasis(builder: flatbuffers.Builder, TIME_BASIS: mdeTimeBasis): void;
    static addPlaneGlrStatistic(builder: flatbuffers.Builder, PLANE_GLR_STATISTIC: number): void;
    static addPlaneStepMS(builder: flatbuffers.Builder, PLANE_STEP_M_S: number): void;
    static addRateChangeMSPerDay(builder: flatbuffers.Builder, RATE_CHANGE_M_S_PER_DAY: number): void;
    static addRateChangeSd(builder: flatbuffers.Builder, RATE_CHANGE_SD: number): void;
    static addTrendBeforeMSPerDay(builder: flatbuffers.Builder, TREND_BEFORE_M_S_PER_DAY: number): void;
    static addComponents(builder: flatbuffers.Builder, COMPONENTSOffset: flatbuffers.Offset): void;
    static createComponentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startComponentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKept(builder: flatbuffers.Builder, KEPT: mdeDetector): void;
    static endMDEEvidence(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEEvidence(builder: flatbuffers.Builder, DETECTOR: mdeDetector, TIME_MS: bigint, PAIR_INDEX: number, STEP_IN_TRACK_M_S: number, STEP_PLANE_M_S: number, THRESHOLD_IN_TRACK_M_S: number, THRESHOLD_PLANE_M_S: number, CROSSING_AT_EDGE: boolean, SPAN_START_MS: bigint, SPAN_STOP_MS: bigint, GLR_STATISTIC: number, STEP_M_S: number, STEP_SD_M_S: number, SIGMA_M_S: number, TREND_M_S_PER_DAY: number, OLD_LEVEL_SET_MS: bigint, NEW_LEVEL_SET_MS: bigint, TIME_BASIS: mdeTimeBasis, PLANE_GLR_STATISTIC: number, PLANE_STEP_M_S: number, RATE_CHANGE_M_S_PER_DAY: number, RATE_CHANGE_SD: number, TREND_BEFORE_M_S_PER_DAY: number, COMPONENTSOffset: flatbuffers.Offset, KEPT: mdeDetector): flatbuffers.Offset;
    unpack(): MDEEvidenceT;
    unpackTo(_o: MDEEvidenceT): void;
}
export declare class MDEEvidenceT implements flatbuffers.IGeneratedObject {
    DETECTOR: mdeDetector;
    TIME_MS: bigint;
    PAIR_INDEX: number;
    STEP_IN_TRACK_M_S: number;
    STEP_PLANE_M_S: number;
    THRESHOLD_IN_TRACK_M_S: number;
    THRESHOLD_PLANE_M_S: number;
    CROSSING_AT_EDGE: boolean;
    SPAN_START_MS: bigint;
    SPAN_STOP_MS: bigint;
    GLR_STATISTIC: number;
    STEP_M_S: number;
    STEP_SD_M_S: number;
    SIGMA_M_S: number;
    TREND_M_S_PER_DAY: number;
    OLD_LEVEL_SET_MS: bigint;
    NEW_LEVEL_SET_MS: bigint;
    TIME_BASIS: mdeTimeBasis;
    PLANE_GLR_STATISTIC: number;
    PLANE_STEP_M_S: number;
    RATE_CHANGE_M_S_PER_DAY: number;
    RATE_CHANGE_SD: number;
    TREND_BEFORE_M_S_PER_DAY: number;
    COMPONENTS: (MDEEvidenceT)[];
    KEPT: mdeDetector;
    constructor(DETECTOR?: mdeDetector, TIME_MS?: bigint, PAIR_INDEX?: number, STEP_IN_TRACK_M_S?: number, STEP_PLANE_M_S?: number, THRESHOLD_IN_TRACK_M_S?: number, THRESHOLD_PLANE_M_S?: number, CROSSING_AT_EDGE?: boolean, SPAN_START_MS?: bigint, SPAN_STOP_MS?: bigint, GLR_STATISTIC?: number, STEP_M_S?: number, STEP_SD_M_S?: number, SIGMA_M_S?: number, TREND_M_S_PER_DAY?: number, OLD_LEVEL_SET_MS?: bigint, NEW_LEVEL_SET_MS?: bigint, TIME_BASIS?: mdeTimeBasis, PLANE_GLR_STATISTIC?: number, PLANE_STEP_M_S?: number, RATE_CHANGE_M_S_PER_DAY?: number, RATE_CHANGE_SD?: number, TREND_BEFORE_M_S_PER_DAY?: number, COMPONENTS?: (MDEEvidenceT)[], KEPT?: mdeDetector);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEEvidence.d.ts.map