import * as flatbuffers from 'flatbuffers';
/**
 * One point source placed in 3D in an octree node, packed for drawing (24
 * bytes).
 */
export declare class SKTPoint3D implements flatbuffers.IUnpackableObject<SKTPoint3DT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKTPoint3D;
    /**
     * ICRS X of the star minus the node's CENTER_X_PC, parsecs.
     */
    X_PC(): number;
    /**
     * ICRS Y of the star minus the node's CENTER_Y_PC, parsecs.
     */
    Y_PC(): number;
    /**
     * ICRS Z of the star minus the node's CENTER_Z_PC, parsecs.
     */
    Z_PC(): number;
    /**
     * Absolute magnitude in the tile's band, the magnitude at 10 parsecs with
     * extinction removed, millimagnitudes. -32768 when unknown.
     */
    ABS_MAG(): number;
    /**
     * Color, encoded as the tile's COLOR_ENCODING states (for BP - RP:
     * COLOR_INDEX with COLOR_BLUE_BAND_ID BP and COLOR_RED_BAND_ID RP).
     */
    COLOR(): number;
    /**
     * Fractional distance uncertainty, the `$STR` (DISTANCE_HI_PC -
     * DISTANCE_LO_PC) / DISTANCE_PC, in units of 1/10000. 65535 when unknown
     * or 6.5535 or more.
     */
    DIST_FRAC_UNC(): number;
    /**
     * Bit flags, with SKTPoint's meanings. 0: variable. 1: member of a
     * multiple system. 4: ABS_MAG is modeled, not measured. 5: ROW refers to
     * a `$CSO` rather than a `$STR`. 6: a neighbor lies within the confusion
     * radius. 7: extended source. 2, 3 and 8-15: reserved, 0.
     */
    FLAGS(): number;
    /**
     * Index of the source's full record in the tile's row collection
     * (ROW_COLLECTION_CID), from 0. 0xFFFFFFFF when the tile has none.
     */
    ROW(): number;
    static sizeOf(): number;
    static createSKTPoint3D(builder: flatbuffers.Builder, X_PC: number, Y_PC: number, Z_PC: number, ABS_MAG: number, COLOR: number, DIST_FRAC_UNC: number, FLAGS: number, ROW: number): flatbuffers.Offset;
    unpack(): SKTPoint3DT;
    unpackTo(_o: SKTPoint3DT): void;
}
export declare class SKTPoint3DT implements flatbuffers.IGeneratedObject {
    X_PC: number;
    Y_PC: number;
    Z_PC: number;
    ABS_MAG: number;
    COLOR: number;
    DIST_FRAC_UNC: number;
    FLAGS: number;
    ROW: number;
    constructor(X_PC?: number, Y_PC?: number, Z_PC?: number, ABS_MAG?: number, COLOR?: number, DIST_FRAC_UNC?: number, FLAGS?: number, ROW?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKTPoint3D.d.ts.map