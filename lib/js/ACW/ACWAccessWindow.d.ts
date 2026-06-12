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
    static startACWAccessWindow(builder: flatbuffers.Builder): void;
    static addStationId(builder: flatbuffers.Builder, STATION_IDOffset: flatbuffers.Offset): void;
    static addStartJulianDateTt(builder: flatbuffers.Builder, START_JULIAN_DATE_TT: number): void;
    static addEndJulianDateTt(builder: flatbuffers.Builder, END_JULIAN_DATE_TT: number): void;
    static addMaxElevationRad(builder: flatbuffers.Builder, MAX_ELEVATION_RAD: number): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static endACWAccessWindow(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWAccessWindow(builder: flatbuffers.Builder, STATION_IDOffset: flatbuffers.Offset, START_JULIAN_DATE_TT: number, END_JULIAN_DATE_TT: number, MAX_ELEVATION_RAD: number, SAMPLE_COUNT: number): flatbuffers.Offset;
    unpack(): ACWAccessWindowT;
    unpackTo(_o: ACWAccessWindowT): void;
}
export declare class ACWAccessWindowT implements flatbuffers.IGeneratedObject {
    STATION_ID: string | Uint8Array | null;
    START_JULIAN_DATE_TT: number;
    END_JULIAN_DATE_TT: number;
    MAX_ELEVATION_RAD: number;
    SAMPLE_COUNT: number;
    constructor(STATION_ID?: string | Uint8Array | null, START_JULIAN_DATE_TT?: number, END_JULIAN_DATE_TT?: number, MAX_ELEVATION_RAD?: number, SAMPLE_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWAccessWindow.d.ts.map