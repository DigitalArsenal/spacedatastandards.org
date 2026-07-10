import * as flatbuffers from 'flatbuffers';
/**
 * Three-dimensional vector.
 */
export declare class VAMVector3 implements flatbuffers.IUnpackableObject<VAMVector3T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMVector3;
    static getRootAsVAMVector3(bb: flatbuffers.ByteBuffer, obj?: VAMVector3): VAMVector3;
    static getSizePrefixedRootAsVAMVector3(bb: flatbuffers.ByteBuffer, obj?: VAMVector3): VAMVector3;
    X(): number;
    Y(): number;
    Z(): number;
    static startVAMVector3(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static endVAMVector3(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVAMVector3(builder: flatbuffers.Builder, X: number, Y: number, Z: number): flatbuffers.Offset;
    unpack(): VAMVector3T;
    unpackTo(_o: VAMVector3T): void;
}
export declare class VAMVector3T implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    constructor(X?: number, Y?: number, Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMVector3.d.ts.map