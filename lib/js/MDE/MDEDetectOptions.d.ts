import * as flatbuffers from 'flatbuffers';
import { mdeDetector } from './mdeDetector.js';
/**
 * Detection settings. Every field has its default.
 */
export declare class MDEDetectOptions implements flatbuffers.IUnpackableObject<MDEDetectOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEDetectOptions;
    static getRootAsMDEDetectOptions(bb: flatbuffers.ByteBuffer, obj?: MDEDetectOptions): MDEDetectOptions;
    static getSizePrefixedRootAsMDEDetectOptions(bb: flatbuffers.ByteBuffer, obj?: MDEDetectOptions): MDEDetectOptions;
    /**
     * Detectors enabled; empty = Crossing and LevelShift, combined.
     */
    DETECTORS(index: number): mdeDetector | null;
    detectorsLength(): number;
    detectorsArray(): Uint8Array | null;
    /**
     * Report time of the emitted maneuvers, Unix ms; 0 = the ephemeris
     * creation date.
     */
    REPORT_TIME_MS(): bigint;
    /**
     * Port of the propagator that answers window requests; empty = default.
     */
    PROPAGATOR_PORT_ID(): string | null;
    PROPAGATOR_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Report every crossing pair.
     */
    REPORT_PAIRS(): boolean;
    /**
     * Report the level series.
     */
    REPORT_LEVELS(): boolean;
    /**
     * D1 threshold multiple of the robust scale.
     */
    K(): number;
    /**
     * D1 in-track threshold floor, m/s.
     */
    FLOOR_IN_TRACK_M_S(): number;
    /**
     * D1 cross-track threshold floor, m/s.
     */
    FLOOR_CROSS_TRACK_M_S(): number;
    /**
     * Element sets in the running median.
     */
    MEDIAN_SETS(): number;
    /**
     * Pairs in the robust scale window.
     */
    SCALE_WINDOW_PAIRS(): number;
    /**
     * Sampling step of the crossing search, s.
     */
    GRID_STEP_S(): number;
    /**
     * Neighbouring element sets each set is propagated across.
     */
    NEIGHBOUR_SETS(): number;
    /**
     * D2 element sets per GLR window.
     */
    GLR_SETS(): number;
    /**
     * D2 GLR window span, days.
     */
    GLR_SPAN_DAYS(): number;
    /**
     * D2 GLR threshold.
     */
    GLR_H(): number;
    /**
     * D2 in-track sigma floor, m/s.
     */
    GLR_FLOOR_IN_TRACK_M_S(): number;
    /**
     * D2 plane sigma floor, rad.
     */
    GLR_FLOOR_PLANE_RAD(): number;
    /**
     * D3 GLR threshold.
     */
    LT_H(): number;
    /**
     * D3 rate sigma floor, m/s per day.
     */
    LT_FLOOR_M_S_PER_DAY(): number;
    /**
     * D3 window span, days.
     */
    LT_SPAN_DAYS(): number;
    /**
     * D3 element sets per window.
     */
    LT_SETS(): number;
    /**
     * Events of different detectors within this time merge, hours.
     */
    MERGE_HOURS(): number;
    static startMDEDetectOptions(builder: flatbuffers.Builder): void;
    static addDetectors(builder: flatbuffers.Builder, DETECTORSOffset: flatbuffers.Offset): void;
    static createDetectorsVector(builder: flatbuffers.Builder, data: mdeDetector[]): flatbuffers.Offset;
    static startDetectorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReportTimeMs(builder: flatbuffers.Builder, REPORT_TIME_MS: bigint): void;
    static addPropagatorPortId(builder: flatbuffers.Builder, PROPAGATOR_PORT_IDOffset: flatbuffers.Offset): void;
    static addReportPairs(builder: flatbuffers.Builder, REPORT_PAIRS: boolean): void;
    static addReportLevels(builder: flatbuffers.Builder, REPORT_LEVELS: boolean): void;
    static addK(builder: flatbuffers.Builder, K: number): void;
    static addFloorInTrackMS(builder: flatbuffers.Builder, FLOOR_IN_TRACK_M_S: number): void;
    static addFloorCrossTrackMS(builder: flatbuffers.Builder, FLOOR_CROSS_TRACK_M_S: number): void;
    static addMedianSets(builder: flatbuffers.Builder, MEDIAN_SETS: number): void;
    static addScaleWindowPairs(builder: flatbuffers.Builder, SCALE_WINDOW_PAIRS: number): void;
    static addGridStepS(builder: flatbuffers.Builder, GRID_STEP_S: number): void;
    static addNeighbourSets(builder: flatbuffers.Builder, NEIGHBOUR_SETS: number): void;
    static addGlrSets(builder: flatbuffers.Builder, GLR_SETS: number): void;
    static addGlrSpanDays(builder: flatbuffers.Builder, GLR_SPAN_DAYS: number): void;
    static addGlrH(builder: flatbuffers.Builder, GLR_H: number): void;
    static addGlrFloorInTrackMS(builder: flatbuffers.Builder, GLR_FLOOR_IN_TRACK_M_S: number): void;
    static addGlrFloorPlaneRad(builder: flatbuffers.Builder, GLR_FLOOR_PLANE_RAD: number): void;
    static addLtH(builder: flatbuffers.Builder, LT_H: number): void;
    static addLtFloorMSPerDay(builder: flatbuffers.Builder, LT_FLOOR_M_S_PER_DAY: number): void;
    static addLtSpanDays(builder: flatbuffers.Builder, LT_SPAN_DAYS: number): void;
    static addLtSets(builder: flatbuffers.Builder, LT_SETS: number): void;
    static addMergeHours(builder: flatbuffers.Builder, MERGE_HOURS: number): void;
    static endMDEDetectOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEDetectOptions(builder: flatbuffers.Builder, DETECTORSOffset: flatbuffers.Offset, REPORT_TIME_MS: bigint, PROPAGATOR_PORT_IDOffset: flatbuffers.Offset, REPORT_PAIRS: boolean, REPORT_LEVELS: boolean, K: number, FLOOR_IN_TRACK_M_S: number, FLOOR_CROSS_TRACK_M_S: number, MEDIAN_SETS: number, SCALE_WINDOW_PAIRS: number, GRID_STEP_S: number, NEIGHBOUR_SETS: number, GLR_SETS: number, GLR_SPAN_DAYS: number, GLR_H: number, GLR_FLOOR_IN_TRACK_M_S: number, GLR_FLOOR_PLANE_RAD: number, LT_H: number, LT_FLOOR_M_S_PER_DAY: number, LT_SPAN_DAYS: number, LT_SETS: number, MERGE_HOURS: number): flatbuffers.Offset;
    unpack(): MDEDetectOptionsT;
    unpackTo(_o: MDEDetectOptionsT): void;
}
export declare class MDEDetectOptionsT implements flatbuffers.IGeneratedObject {
    DETECTORS: (mdeDetector)[];
    REPORT_TIME_MS: bigint;
    PROPAGATOR_PORT_ID: string | Uint8Array | null;
    REPORT_PAIRS: boolean;
    REPORT_LEVELS: boolean;
    K: number;
    FLOOR_IN_TRACK_M_S: number;
    FLOOR_CROSS_TRACK_M_S: number;
    MEDIAN_SETS: number;
    SCALE_WINDOW_PAIRS: number;
    GRID_STEP_S: number;
    NEIGHBOUR_SETS: number;
    GLR_SETS: number;
    GLR_SPAN_DAYS: number;
    GLR_H: number;
    GLR_FLOOR_IN_TRACK_M_S: number;
    GLR_FLOOR_PLANE_RAD: number;
    LT_H: number;
    LT_FLOOR_M_S_PER_DAY: number;
    LT_SPAN_DAYS: number;
    LT_SETS: number;
    MERGE_HOURS: number;
    constructor(DETECTORS?: (mdeDetector)[], REPORT_TIME_MS?: bigint, PROPAGATOR_PORT_ID?: string | Uint8Array | null, REPORT_PAIRS?: boolean, REPORT_LEVELS?: boolean, K?: number, FLOOR_IN_TRACK_M_S?: number, FLOOR_CROSS_TRACK_M_S?: number, MEDIAN_SETS?: number, SCALE_WINDOW_PAIRS?: number, GRID_STEP_S?: number, NEIGHBOUR_SETS?: number, GLR_SETS?: number, GLR_SPAN_DAYS?: number, GLR_H?: number, GLR_FLOOR_IN_TRACK_M_S?: number, GLR_FLOOR_PLANE_RAD?: number, LT_H?: number, LT_FLOOR_M_S_PER_DAY?: number, LT_SPAN_DAYS?: number, LT_SETS?: number, MERGE_HOURS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEDetectOptions.d.ts.map