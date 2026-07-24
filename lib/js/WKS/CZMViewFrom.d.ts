import * as flatbuffers from 'flatbuffers';
/**
 * Suggested camera offset from entity
 */
export declare class CZMViewFrom implements flatbuffers.IUnpackableObject<CZMViewFromT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMViewFrom;
    static getRootAsCZMViewFrom(bb: flatbuffers.ByteBuffer, obj?: CZMViewFrom): CZMViewFrom;
    static getSizePrefixedRootAsCZMViewFrom(bb: flatbuffers.ByteBuffer, obj?: CZMViewFrom): CZMViewFrom;
    /**
     * X offset in meters
     */
    X(): number;
    /**
     * Y offset in meters
     */
    Y(): number;
    /**
     * Z offset in meters
     */
    Z(): number;
    static startCZMViewFrom(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static endCZMViewFrom(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMViewFrom(builder: flatbuffers.Builder, X: number, Y: number, Z: number): flatbuffers.Offset;
    unpack(): CZMViewFromT;
    unpackTo(_o: CZMViewFromT): void;
}
export declare class CZMViewFromT implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    constructor(X?: number, Y?: number, Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMViewFrom.d.ts.map