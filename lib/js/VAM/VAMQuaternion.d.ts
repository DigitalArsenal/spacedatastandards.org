import * as flatbuffers from 'flatbuffers';
/**
 * Rotation quaternion.
 */
export declare class VAMQuaternion implements flatbuffers.IUnpackableObject<VAMQuaternionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMQuaternion;
    static getRootAsVAMQuaternion(bb: flatbuffers.ByteBuffer, obj?: VAMQuaternion): VAMQuaternion;
    static getSizePrefixedRootAsVAMQuaternion(bb: flatbuffers.ByteBuffer, obj?: VAMQuaternion): VAMQuaternion;
    X(): number;
    Y(): number;
    Z(): number;
    W(): number;
    static startVAMQuaternion(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addW(builder: flatbuffers.Builder, W: number): void;
    static endVAMQuaternion(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVAMQuaternion(builder: flatbuffers.Builder, X: number, Y: number, Z: number, W: number): flatbuffers.Offset;
    unpack(): VAMQuaternionT;
    unpackTo(_o: VAMQuaternionT): void;
}
export declare class VAMQuaternionT implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    W: number;
    constructor(X?: number, Y?: number, Z?: number, W?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMQuaternion.d.ts.map