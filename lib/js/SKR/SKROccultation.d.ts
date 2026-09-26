import * as flatbuffers from 'flatbuffers';
/**
 * A row a body's disc passes over.
 */
export declare class SKROccultation implements flatbuffers.IUnpackableObject<SKROccultationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKROccultation;
    BODY_ID(): number;
    ROW(): number;
    /**
     * Closest approach of the body's centre to the row.
     */
    MIN_SEPARATION_DEG(): number;
    /**
     * Where along the track the closest approach falls, from 0 (start) to 1
     * (end).
     */
    TRACK_FRACTION(): number;
    MAG(): number;
    RESERVED(): number;
    static sizeOf(): number;
    static createSKROccultation(builder: flatbuffers.Builder, BODY_ID: number, ROW: number, MIN_SEPARATION_DEG: number, TRACK_FRACTION: number, MAG: number, RESERVED: number): flatbuffers.Offset;
    unpack(): SKROccultationT;
    unpackTo(_o: SKROccultationT): void;
}
export declare class SKROccultationT implements flatbuffers.IGeneratedObject {
    BODY_ID: number;
    ROW: number;
    MIN_SEPARATION_DEG: number;
    TRACK_FRACTION: number;
    MAG: number;
    RESERVED: number;
    constructor(BODY_ID?: number, ROW?: number, MIN_SEPARATION_DEG?: number, TRACK_FRACTION?: number, MAG?: number, RESERVED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKROccultation.d.ts.map