import * as flatbuffers from 'flatbuffers';
/**
 * Three-component vector in the request frame.
 */
export declare class lambertVector3 implements flatbuffers.IUnpackableObject<lambertVector3T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): lambertVector3;
    X(): number;
    Y(): number;
    Z(): number;
    static sizeOf(): number;
    static createlambertVector3(builder: flatbuffers.Builder, X: number, Y: number, Z: number): flatbuffers.Offset;
    unpack(): lambertVector3T;
    unpackTo(_o: lambertVector3T): void;
}
export declare class lambertVector3T implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    constructor(X?: number, Y?: number, Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=lambertVector3.d.ts.map