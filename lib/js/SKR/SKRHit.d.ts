import * as flatbuffers from 'flatbuffers';
/**
 * A row that answers a CONE or FIELD_OF_VIEW query.
 */
export declare class SKRHit implements flatbuffers.IUnpackableObject<SKRHitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKRHit;
    ROW(): number;
    /**
     * SKTPoint FLAGS bits for the row.
     */
    FLAGS(): number;
    RA_DEG(): number;
    DEC_DEG(): number;
    /**
     * Angle from the centre or boresight.
     */
    SEPARATION_DEG(): number;
    /**
     * Field coordinates: angles along the field's x and y axes (the
     * standard coordinates of a cone query). NaN behind the tangent plane.
     */
    FIELD_X_DEG(): number;
    FIELD_Y_DEG(): number;
    /**
     * Magnitude in the query's band; NaN when unknown.
     */
    MAG(): number;
    RESERVED(): number;
    static sizeOf(): number;
    static createSKRHit(builder: flatbuffers.Builder, ROW: number, FLAGS: number, RA_DEG: number, DEC_DEG: number, SEPARATION_DEG: number, FIELD_X_DEG: number, FIELD_Y_DEG: number, MAG: number, RESERVED: number): flatbuffers.Offset;
    unpack(): SKRHitT;
    unpackTo(_o: SKRHitT): void;
}
export declare class SKRHitT implements flatbuffers.IGeneratedObject {
    ROW: number;
    FLAGS: number;
    RA_DEG: number;
    DEC_DEG: number;
    SEPARATION_DEG: number;
    FIELD_X_DEG: number;
    FIELD_Y_DEG: number;
    MAG: number;
    RESERVED: number;
    constructor(ROW?: number, FLAGS?: number, RA_DEG?: number, DEC_DEG?: number, SEPARATION_DEG?: number, FIELD_X_DEG?: number, FIELD_Y_DEG?: number, MAG?: number, RESERVED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKRHit.d.ts.map