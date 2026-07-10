import * as flatbuffers from 'flatbuffers';
/**
 * Scale with identity defaults for every component.
 */
export declare class VAMScale3 implements flatbuffers.IUnpackableObject<VAMScale3T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMScale3;
    static getRootAsVAMScale3(bb: flatbuffers.ByteBuffer, obj?: VAMScale3): VAMScale3;
    static getSizePrefixedRootAsVAMScale3(bb: flatbuffers.ByteBuffer, obj?: VAMScale3): VAMScale3;
    X(): number;
    Y(): number;
    Z(): number;
    static startVAMScale3(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static endVAMScale3(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVAMScale3(builder: flatbuffers.Builder, X: number, Y: number, Z: number): flatbuffers.Offset;
    unpack(): VAMScale3T;
    unpackTo(_o: VAMScale3T): void;
}
export declare class VAMScale3T implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    constructor(X?: number, Y?: number, Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMScale3.d.ts.map