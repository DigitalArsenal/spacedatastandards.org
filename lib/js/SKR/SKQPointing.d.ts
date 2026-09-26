import * as flatbuffers from 'flatbuffers';
/**
 * A sensor pointing to check for bright stars.
 */
export declare class SKQPointing implements flatbuffers.IUnpackableObject<SKQPointingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKQPointing;
    RA_DEG(): number;
    DEC_DEG(): number;
    /**
     * Caller's identifier for the pointing, echoed in the result.
     */
    POINTING_ID(): number;
    RESERVED(): number;
    static sizeOf(): number;
    static createSKQPointing(builder: flatbuffers.Builder, RA_DEG: number, DEC_DEG: number, POINTING_ID: number, RESERVED: number): flatbuffers.Offset;
    unpack(): SKQPointingT;
    unpackTo(_o: SKQPointingT): void;
}
export declare class SKQPointingT implements flatbuffers.IGeneratedObject {
    RA_DEG: number;
    DEC_DEG: number;
    POINTING_ID: number;
    RESERVED: number;
    constructor(RA_DEG?: number, DEC_DEG?: number, POINTING_ID?: number, RESERVED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKQPointing.d.ts.map