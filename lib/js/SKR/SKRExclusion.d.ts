import * as flatbuffers from 'flatbuffers';
/**
 * Bright rows near one pointing.
 */
export declare class SKRExclusion implements flatbuffers.IUnpackableObject<SKRExclusionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKRExclusion;
    POINTING_ID(): number;
    /**
     * Rows within the radius at least as bright as the threshold.
     */
    VIOLATING_COUNT(): number;
    /**
     * The brightest of them; 4294967295 when there are none.
     */
    BRIGHTEST_ROW(): number;
    RESERVED(): number;
    BRIGHTEST_SEPARATION_DEG(): number;
    BRIGHTEST_MAG(): number;
    RESERVED2(): number;
    static sizeOf(): number;
    static createSKRExclusion(builder: flatbuffers.Builder, POINTING_ID: number, VIOLATING_COUNT: number, BRIGHTEST_ROW: number, RESERVED: number, BRIGHTEST_SEPARATION_DEG: number, BRIGHTEST_MAG: number, RESERVED2: number): flatbuffers.Offset;
    unpack(): SKRExclusionT;
    unpackTo(_o: SKRExclusionT): void;
}
export declare class SKRExclusionT implements flatbuffers.IGeneratedObject {
    POINTING_ID: number;
    VIOLATING_COUNT: number;
    BRIGHTEST_ROW: number;
    RESERVED: number;
    BRIGHTEST_SEPARATION_DEG: number;
    BRIGHTEST_MAG: number;
    RESERVED2: number;
    constructor(POINTING_ID?: number, VIOLATING_COUNT?: number, BRIGHTEST_ROW?: number, RESERVED?: number, BRIGHTEST_SEPARATION_DEG?: number, BRIGHTEST_MAG?: number, RESERVED2?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKRExclusion.d.ts.map