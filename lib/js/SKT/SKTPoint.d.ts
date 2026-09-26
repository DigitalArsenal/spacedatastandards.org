import * as flatbuffers from 'flatbuffers';
/**
 * One point source packed for drawing (24 bytes).
 */
export declare class SKTPoint implements flatbuffers.IUnpackableObject<SKTPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKTPoint;
    /**
     * Right ascension (or longitude in FRAME) as a fraction of a full turn:
     * degrees = RA_FIXED * 360 / 2^32.
     */
    RA_FIXED(): number;
    /**
     * Declination (or latitude in FRAME): degrees = DEC_FIXED * 90 / 2^31.
     */
    DEC_FIXED(): number;
    /**
     * Proper motion in RA times cos(DEC), milliarcseconds per year. -32768
     * when unknown or out of range (FLAGS bit 2).
     */
    PMRA(): number;
    /**
     * Proper motion in DEC, milliarcseconds per year. -32768 when unknown or
     * out of range (FLAGS bit 2).
     */
    PMDEC(): number;
    /**
     * Parallax in units of 0.02 milliarcseconds. 0 when unknown, not
     * positive or out of range (FLAGS bit 3).
     */
    PARALLAX(): number;
    /**
     * Magnitude in the tile's band, millimagnitudes. -32768 when unknown.
     */
    MAG(): number;
    /**
     * Colour, encoded as the tile's COLOR_ENCODING states.
     */
    COLOR(): number;
    /**
     * Bit flags. 0: variable. 1: member of a multiple system. 2: PMRA/PMDEC
     * not usable. 3: PARALLAX not usable. 4: MAG is modelled, not measured.
     * 5: ROW refers to a `$CSO` rather than a `$STR`. 6: a neighbour lies
     * within the confusion radius. 7: extended source. 8-15: reserved, 0.
     */
    FLAGS(): number;
    /**
     * Index of the source's full record in the tile's row collection
     * (ROW_COLLECTION_CID), from 0. 0xFFFFFFFF when the tile has none.
     */
    ROW(): number;
    static sizeOf(): number;
    static createSKTPoint(builder: flatbuffers.Builder, RA_FIXED: number, DEC_FIXED: number, PMRA: number, PMDEC: number, PARALLAX: number, MAG: number, COLOR: number, FLAGS: number, ROW: number): flatbuffers.Offset;
    unpack(): SKTPointT;
    unpackTo(_o: SKTPointT): void;
}
export declare class SKTPointT implements flatbuffers.IGeneratedObject {
    RA_FIXED: number;
    DEC_FIXED: number;
    PMRA: number;
    PMDEC: number;
    PARALLAX: number;
    MAG: number;
    COLOR: number;
    FLAGS: number;
    ROW: number;
    constructor(RA_FIXED?: number, DEC_FIXED?: number, PMRA?: number, PMDEC?: number, PARALLAX?: number, MAG?: number, COLOR?: number, FLAGS?: number, ROW?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKTPoint.d.ts.map