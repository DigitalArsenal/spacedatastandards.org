import * as flatbuffers from 'flatbuffers';
/**
 * Result of a time-range SDF query (40 bytes, 8-byte aligned).
 */
export declare class sdfTimeRangeResult implements flatbuffers.IUnpackableObject<sdfTimeRangeResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): sdfTimeRangeResult;
    /**
     * Entity identifier.
     */
    ENTITY_ID(): number;
    /**
     * Flags (reserved).
     */
    FLAGS(): number;
    /**
     * Julian date when the entity entered the volume (0 == never entered).
     */
    ENTRY_TIME(): number;
    /**
     * Julian date when the entity exited the volume (0 == still inside).
     */
    EXIT_TIME(): number;
    /**
     * Most negative signed distance (closest approach to center).
     */
    MIN_DISTANCE(): number;
    /**
     * Total time inside volume (seconds).
     */
    DWELL_TIME(): number;
    static sizeOf(): number;
    static createsdfTimeRangeResult(builder: flatbuffers.Builder, ENTITY_ID: number, FLAGS: number, ENTRY_TIME: number, EXIT_TIME: number, MIN_DISTANCE: number, DWELL_TIME: number): flatbuffers.Offset;
    unpack(): sdfTimeRangeResultT;
    unpackTo(_o: sdfTimeRangeResultT): void;
}
export declare class sdfTimeRangeResultT implements flatbuffers.IGeneratedObject {
    ENTITY_ID: number;
    FLAGS: number;
    ENTRY_TIME: number;
    EXIT_TIME: number;
    MIN_DISTANCE: number;
    DWELL_TIME: number;
    constructor(ENTITY_ID?: number, FLAGS?: number, ENTRY_TIME?: number, EXIT_TIME?: number, MIN_DISTANCE?: number, DWELL_TIME?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=sdfTimeRangeResult.d.ts.map