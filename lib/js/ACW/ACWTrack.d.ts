import * as flatbuffers from 'flatbuffers';
/**
 * One simulated track: a sensor's scheduled look at a target.
 */
export declare class ACWTrack implements flatbuffers.IUnpackableObject<ACWTrackT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWTrack;
    static getRootAsACWTrack(bb: flatbuffers.ByteBuffer, obj?: ACWTrack): ACWTrack;
    static getSizePrefixedRootAsACWTrack(bb: flatbuffers.ByteBuffer, obj?: ACWTrack): ACWTrack;
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGET_ID(): string | null;
    TARGET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    START_JULIAN_DATE_TT(): number;
    END_JULIAN_DATE_TT(): number;
    /**
     * Observations scheduled in the track.
     */
    SCHEDULED_COUNT(): number;
    /**
     * Observations that passed the detection test and were emitted.
     */
    DETECTED_COUNT(): number;
    /**
     * Why scheduled observations were not detected (for example "SNR",
     * "MAGNITUDE"); empty when all were.
     */
    LOSS_REASON(): string | null;
    LOSS_REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startACWTrack(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_IDOffset: flatbuffers.Offset): void;
    static addStartJulianDateTt(builder: flatbuffers.Builder, START_JULIAN_DATE_TT: number): void;
    static addEndJulianDateTt(builder: flatbuffers.Builder, END_JULIAN_DATE_TT: number): void;
    static addScheduledCount(builder: flatbuffers.Builder, SCHEDULED_COUNT: number): void;
    static addDetectedCount(builder: flatbuffers.Builder, DETECTED_COUNT: number): void;
    static addLossReason(builder: flatbuffers.Builder, LOSS_REASONOffset: flatbuffers.Offset): void;
    static endACWTrack(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWTrack(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset, TARGET_IDOffset: flatbuffers.Offset, START_JULIAN_DATE_TT: number, END_JULIAN_DATE_TT: number, SCHEDULED_COUNT: number, DETECTED_COUNT: number, LOSS_REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACWTrackT;
    unpackTo(_o: ACWTrackT): void;
}
export declare class ACWTrackT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: string | Uint8Array | null;
    TARGET_ID: string | Uint8Array | null;
    START_JULIAN_DATE_TT: number;
    END_JULIAN_DATE_TT: number;
    SCHEDULED_COUNT: number;
    DETECTED_COUNT: number;
    LOSS_REASON: string | Uint8Array | null;
    constructor(SENSOR_ID?: string | Uint8Array | null, TARGET_ID?: string | Uint8Array | null, START_JULIAN_DATE_TT?: number, END_JULIAN_DATE_TT?: number, SCHEDULED_COUNT?: number, DETECTED_COUNT?: number, LOSS_REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWTrack.d.ts.map