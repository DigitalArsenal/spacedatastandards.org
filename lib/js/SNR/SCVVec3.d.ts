import * as flatbuffers from 'flatbuffers';
export declare class SCVVec3 implements flatbuffers.IUnpackableObject<SCVVec3T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVVec3;
    static getRootAsSCVVec3(bb: flatbuffers.ByteBuffer, obj?: SCVVec3): SCVVec3;
    static getSizePrefixedRootAsSCVVec3(bb: flatbuffers.ByteBuffer, obj?: SCVVec3): SCVVec3;
    X(): number;
    Y(): number;
    Z(): number;
    static startSCVVec3(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static endSCVVec3(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVVec3(builder: flatbuffers.Builder, X: number, Y: number, Z: number): flatbuffers.Offset;
    unpack(): SCVVec3T;
    unpackTo(_o: SCVVec3T): void;
}
export declare class SCVVec3T implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    constructor(X?: number, Y?: number, Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVVec3.d.ts.map