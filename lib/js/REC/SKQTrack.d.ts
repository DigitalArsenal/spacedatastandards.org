import * as flatbuffers from 'flatbuffers';
/**
 * A body's apparent path across the sky over an interval, and its disc.
 */
export declare class SKQTrack implements flatbuffers.IUnpackableObject<SKQTrackT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKQTrack;
    /**
     * Direction of the body's centre at the start of the interval.
     */
    START_RA_DEG(): number;
    START_DEC_DEG(): number;
    /**
     * Direction at the end; equal to the start for an instant.
     */
    END_RA_DEG(): number;
    END_DEC_DEG(): number;
    /**
     * Angular radius of the body's disc.
     */
    RADIUS_DEG(): number;
    /**
     * Caller's identifier for the body, echoed in the result.
     */
    BODY_ID(): number;
    RESERVED(): number;
    static sizeOf(): number;
    static createSKQTrack(builder: flatbuffers.Builder, START_RA_DEG: number, START_DEC_DEG: number, END_RA_DEG: number, END_DEC_DEG: number, RADIUS_DEG: number, BODY_ID: number, RESERVED: number): flatbuffers.Offset;
    unpack(): SKQTrackT;
    unpackTo(_o: SKQTrackT): void;
}
export declare class SKQTrackT implements flatbuffers.IGeneratedObject {
    START_RA_DEG: number;
    START_DEC_DEG: number;
    END_RA_DEG: number;
    END_DEC_DEG: number;
    RADIUS_DEG: number;
    BODY_ID: number;
    RESERVED: number;
    constructor(START_RA_DEG?: number, START_DEC_DEG?: number, END_RA_DEG?: number, END_DEC_DEG?: number, RADIUS_DEG?: number, BODY_ID?: number, RESERVED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKQTrack.d.ts.map