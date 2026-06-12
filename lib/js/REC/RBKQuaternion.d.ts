import * as flatbuffers from 'flatbuffers';
/**
 * Scalar-first Euler parameter/quaternion record, matching Basilisk EP ordering.
 */
export declare class RBKQuaternion implements flatbuffers.IUnpackableObject<RBKQuaternionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RBKQuaternion;
    static getRootAsRBKQuaternion(bb: flatbuffers.ByteBuffer, obj?: RBKQuaternion): RBKQuaternion;
    static getSizePrefixedRootAsRBKQuaternion(bb: flatbuffers.ByteBuffer, obj?: RBKQuaternion): RBKQuaternion;
    Q0(): number;
    Q1(): number;
    Q2(): number;
    Q3(): number;
    static startRBKQuaternion(builder: flatbuffers.Builder): void;
    static addQ0(builder: flatbuffers.Builder, Q0: number): void;
    static addQ1(builder: flatbuffers.Builder, Q1: number): void;
    static addQ2(builder: flatbuffers.Builder, Q2: number): void;
    static addQ3(builder: flatbuffers.Builder, Q3: number): void;
    static endRBKQuaternion(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRBKQuaternion(builder: flatbuffers.Builder, Q0: number, Q1: number, Q2: number, Q3: number): flatbuffers.Offset;
    unpack(): RBKQuaternionT;
    unpackTo(_o: RBKQuaternionT): void;
}
export declare class RBKQuaternionT implements flatbuffers.IGeneratedObject {
    Q0: number;
    Q1: number;
    Q2: number;
    Q3: number;
    constructor(Q0?: number, Q1?: number, Q2?: number, Q3?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RBKQuaternion.d.ts.map