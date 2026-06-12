import * as flatbuffers from 'flatbuffers';
export declare class FRMVector3 implements flatbuffers.IUnpackableObject<FRMVector3T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FRMVector3;
    static getRootAsFRMVector3(bb: flatbuffers.ByteBuffer, obj?: FRMVector3): FRMVector3;
    static getSizePrefixedRootAsFRMVector3(bb: flatbuffers.ByteBuffer, obj?: FRMVector3): FRMVector3;
    X(): number;
    Y(): number;
    Z(): number;
    static startFRMVector3(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static endFRMVector3(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFRMVector3(builder: flatbuffers.Builder, X: number, Y: number, Z: number): flatbuffers.Offset;
    unpack(): FRMVector3T;
    unpackTo(_o: FRMVector3T): void;
}
export declare class FRMVector3T implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    constructor(X?: number, Y?: number, Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FRMVector3.d.ts.map