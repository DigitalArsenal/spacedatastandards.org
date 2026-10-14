import * as flatbuffers from 'flatbuffers';
/**
 * One pair of consecutive element sets, compared at the crossing of their
 * predictions.
 */
export declare class MDECrossingPair implements flatbuffers.IUnpackableObject<MDECrossingPairT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDECrossingPair;
    static getRootAsMDECrossingPair(bb: flatbuffers.ByteBuffer, obj?: MDECrossingPair): MDECrossingPair;
    static getSizePrefixedRootAsMDECrossingPair(bb: flatbuffers.ByteBuffer, obj?: MDECrossingPair): MDECrossingPair;
    /**
     * Epoch of the earlier set, Unix ms.
     */
    SPAN_START_MS(): bigint;
    /**
     * Epoch of the later set, Unix ms.
     */
    SPAN_STOP_MS(): bigint;
    /**
     * Time of closest approach of the two predictions, Unix ms.
     */
    CROSSING_MS(): bigint;
    /**
     * True when the crossing is at an end of the span (no interior minimum).
     */
    CROSSING_AT_EDGE(): boolean;
    /**
     * Separation at the crossing, km.
     */
    SEPARATION_KM(): number;
    /**
     * Semi-major axis change, km.
     */
    DELTA_SMA_KM(): number;
    /**
     * In-track velocity change at the crossing, m/s.
     */
    IN_TRACK_M_S(): number;
    /**
     * Plane (cross-track) velocity change, m/s.
     */
    PLANE_M_S(): number;
    /**
     * D1 in-track step after the running median, m/s; NaN = not screened.
     */
    STEP_IN_TRACK_M_S(): number;
    /**
     * D1 plane step, m/s; NaN = not screened.
     */
    STEP_PLANE_M_S(): number;
    /**
     * D1 in-track threshold, m/s; NaN = not screened.
     */
    THRESHOLD_IN_TRACK_M_S(): number;
    /**
     * D1 plane threshold, m/s; NaN = not screened.
     */
    THRESHOLD_PLANE_M_S(): number;
    /**
     * True when D1 found a candidate here.
     */
    CANDIDATE(): boolean;
    static startMDECrossingPair(builder: flatbuffers.Builder): void;
    static addSpanStartMs(builder: flatbuffers.Builder, SPAN_START_MS: bigint): void;
    static addSpanStopMs(builder: flatbuffers.Builder, SPAN_STOP_MS: bigint): void;
    static addCrossingMs(builder: flatbuffers.Builder, CROSSING_MS: bigint): void;
    static addCrossingAtEdge(builder: flatbuffers.Builder, CROSSING_AT_EDGE: boolean): void;
    static addSeparationKm(builder: flatbuffers.Builder, SEPARATION_KM: number): void;
    static addDeltaSmaKm(builder: flatbuffers.Builder, DELTA_SMA_KM: number): void;
    static addInTrackMS(builder: flatbuffers.Builder, IN_TRACK_M_S: number): void;
    static addPlaneMS(builder: flatbuffers.Builder, PLANE_M_S: number): void;
    static addStepInTrackMS(builder: flatbuffers.Builder, STEP_IN_TRACK_M_S: number): void;
    static addStepPlaneMS(builder: flatbuffers.Builder, STEP_PLANE_M_S: number): void;
    static addThresholdInTrackMS(builder: flatbuffers.Builder, THRESHOLD_IN_TRACK_M_S: number): void;
    static addThresholdPlaneMS(builder: flatbuffers.Builder, THRESHOLD_PLANE_M_S: number): void;
    static addCandidate(builder: flatbuffers.Builder, CANDIDATE: boolean): void;
    static endMDECrossingPair(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDECrossingPair(builder: flatbuffers.Builder, SPAN_START_MS: bigint, SPAN_STOP_MS: bigint, CROSSING_MS: bigint, CROSSING_AT_EDGE: boolean, SEPARATION_KM: number, DELTA_SMA_KM: number, IN_TRACK_M_S: number, PLANE_M_S: number, STEP_IN_TRACK_M_S: number, STEP_PLANE_M_S: number, THRESHOLD_IN_TRACK_M_S: number, THRESHOLD_PLANE_M_S: number, CANDIDATE: boolean): flatbuffers.Offset;
    unpack(): MDECrossingPairT;
    unpackTo(_o: MDECrossingPairT): void;
}
export declare class MDECrossingPairT implements flatbuffers.IGeneratedObject {
    SPAN_START_MS: bigint;
    SPAN_STOP_MS: bigint;
    CROSSING_MS: bigint;
    CROSSING_AT_EDGE: boolean;
    SEPARATION_KM: number;
    DELTA_SMA_KM: number;
    IN_TRACK_M_S: number;
    PLANE_M_S: number;
    STEP_IN_TRACK_M_S: number;
    STEP_PLANE_M_S: number;
    THRESHOLD_IN_TRACK_M_S: number;
    THRESHOLD_PLANE_M_S: number;
    CANDIDATE: boolean;
    constructor(SPAN_START_MS?: bigint, SPAN_STOP_MS?: bigint, CROSSING_MS?: bigint, CROSSING_AT_EDGE?: boolean, SEPARATION_KM?: number, DELTA_SMA_KM?: number, IN_TRACK_M_S?: number, PLANE_M_S?: number, STEP_IN_TRACK_M_S?: number, STEP_PLANE_M_S?: number, THRESHOLD_IN_TRACK_M_S?: number, THRESHOLD_PLANE_M_S?: number, CANDIDATE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDECrossingPair.d.ts.map