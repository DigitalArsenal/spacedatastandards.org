import * as flatbuffers from 'flatbuffers';
/**
 * Three-vector used for MRP, Gibbs, PRV, angular rate, and related attitude math values.
 */
export declare class RBKVector3 implements flatbuffers.IUnpackableObject<RBKVector3T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RBKVector3;
    static getRootAsRBKVector3(bb: flatbuffers.ByteBuffer, obj?: RBKVector3): RBKVector3;
    static getSizePrefixedRootAsRBKVector3(bb: flatbuffers.ByteBuffer, obj?: RBKVector3): RBKVector3;
    X(): number;
    Y(): number;
    Z(): number;
    static startRBKVector3(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static endRBKVector3(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRBKVector3(builder: flatbuffers.Builder, X: number, Y: number, Z: number): flatbuffers.Offset;
    unpack(): RBKVector3T;
    unpackTo(_o: RBKVector3T): void;
}
export declare class RBKVector3T implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    constructor(X?: number, Y?: number, Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RBKVector3.d.ts.map