import * as flatbuffers from 'flatbuffers';
/**
 * One computed access interval.
 */
export declare class ACWAccessWindow implements flatbuffers.IUnpackableObject<ACWAccessWindowT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWAccessWindow;
    static getRootAsACWAccessWindow(bb: flatbuffers.ByteBuffer, obj?: ACWAccessWindow): ACWAccessWindow;
    static getSizePrefixedRootAsACWAccessWindow(bb: flatbuffers.ByteBuffer, obj?: ACWAccessWindow): ACWAccessWindow;
    STATION_ID(): string | null;
    STATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Access start as Julian Date in TT.
     */
    START_JULIAN_DATE_TT(): number;
    /**
     * Access end as Julian Date in TT.
     */
    END_JULIAN_DATE_TT(): number;
    /**
     * Maximum elevation sampled or interpolated during the pass, radians.
     */
    MAX_ELEVATION_RAD(): number;
    /**
     * Number of visible input samples contributing to the window.
     */
    SAMPLE_COUNT(): number;
    /**
     * Observer id when the observer is an ACWObserverTrajectory; empty for a
     * ground station (then STATION_ID names it).
     */
    OBSERVER_ID(): string | null;
    OBSERVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Index into the flattened, depth-first constraint list of the constraint
     * whose transition opens the window; -1 when the window starts at the
     * first sample.
     */
    START_LIMITING_CONSTRAINT_INDEX(): number;
    /**
     * Index of the constraint whose transition closes the window; -1 when the
     * window ends at the last sample.
     */
    END_LIMITING_CONSTRAINT_INDEX(): number;
    /**
     * Labels of those constraints, when the producer set them.
     */
    START_LIMITING_CONSTRAINT_LABEL(): string | null;
    START_LIMITING_CONSTRAINT_LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    END_LIMITING_CONSTRAINT_LABEL(): string | null;
    END_LIMITING_CONSTRAINT_LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Range extrema over the window, meters.
     */
    MIN_RANGE_M(): number;
    MAX_RANGE_M(): number;
    /**
     * True when edges were root-refined (CONTINUOUS); false when they are samples.
     */
    EDGES_REFINED(): boolean;
    static startACWAccessWindow(builder: flatbuffers.Builder): void;
    static addStationId(builder: flatbuffers.Builder, STATION_IDOffset: flatbuffers.Offset): void;
    static addStartJulianDateTt(builder: flatbuffers.Builder, START_JULIAN_DATE_TT: number): void;
    static addEndJulianDateTt(builder: flatbuffers.Builder, END_JULIAN_DATE_TT: number): void;
    static addMaxElevationRad(builder: flatbuffers.Builder, MAX_ELEVATION_RAD: number): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static addObserverId(builder: flatbuffers.Builder, OBSERVER_IDOffset: flatbuffers.Offset): void;
    static addStartLimitingConstraintIndex(builder: flatbuffers.Builder, START_LIMITING_CONSTRAINT_INDEX: number): void;
    static addEndLimitingConstraintIndex(builder: flatbuffers.Builder, END_LIMITING_CONSTRAINT_INDEX: number): void;
    static addStartLimitingConstraintLabel(builder: flatbuffers.Builder, START_LIMITING_CONSTRAINT_LABELOffset: flatbuffers.Offset): void;
    static addEndLimitingConstraintLabel(builder: flatbuffers.Builder, END_LIMITING_CONSTRAINT_LABELOffset: flatbuffers.Offset): void;
    static addMinRangeM(builder: flatbuffers.Builder, MIN_RANGE_M: number): void;
    static addMaxRangeM(builder: flatbuffers.Builder, MAX_RANGE_M: number): void;
    static addEdgesRefined(builder: flatbuffers.Builder, EDGES_REFINED: boolean): void;
    static endACWAccessWindow(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWAccessWindow(builder: flatbuffers.Builder, STATION_IDOffset: flatbuffers.Offset, START_JULIAN_DATE_TT: number, END_JULIAN_DATE_TT: number, MAX_ELEVATION_RAD: number, SAMPLE_COUNT: number, OBSERVER_IDOffset: flatbuffers.Offset, START_LIMITING_CONSTRAINT_INDEX: number, END_LIMITING_CONSTRAINT_INDEX: number, START_LIMITING_CONSTRAINT_LABELOffset: flatbuffers.Offset, END_LIMITING_CONSTRAINT_LABELOffset: flatbuffers.Offset, MIN_RANGE_M: number, MAX_RANGE_M: number, EDGES_REFINED: boolean): flatbuffers.Offset;
    unpack(): ACWAccessWindowT;
    unpackTo(_o: ACWAccessWindowT): void;
}
export declare class ACWAccessWindowT implements flatbuffers.IGeneratedObject {
    STATION_ID: string | Uint8Array | null;
    START_JULIAN_DATE_TT: number;
    END_JULIAN_DATE_TT: number;
    MAX_ELEVATION_RAD: number;
    SAMPLE_COUNT: number;
    OBSERVER_ID: string | Uint8Array | null;
    START_LIMITING_CONSTRAINT_INDEX: number;
    END_LIMITING_CONSTRAINT_INDEX: number;
    START_LIMITING_CONSTRAINT_LABEL: string | Uint8Array | null;
    END_LIMITING_CONSTRAINT_LABEL: string | Uint8Array | null;
    MIN_RANGE_M: number;
    MAX_RANGE_M: number;
    EDGES_REFINED: boolean;
    constructor(STATION_ID?: string | Uint8Array | null, START_JULIAN_DATE_TT?: number, END_JULIAN_DATE_TT?: number, MAX_ELEVATION_RAD?: number, SAMPLE_COUNT?: number, OBSERVER_ID?: string | Uint8Array | null, START_LIMITING_CONSTRAINT_INDEX?: number, END_LIMITING_CONSTRAINT_INDEX?: number, START_LIMITING_CONSTRAINT_LABEL?: string | Uint8Array | null, END_LIMITING_CONSTRAINT_LABEL?: string | Uint8Array | null, MIN_RANGE_M?: number, MAX_RANGE_M?: number, EDGES_REFINED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWAccessWindow.d.ts.map