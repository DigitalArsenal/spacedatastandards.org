import * as flatbuffers from 'flatbuffers';
/**
 * Row-major 3x3 direction cosine matrix, matching Basilisk C matrix ordering.
 */
export declare class RBKMatrix3 implements flatbuffers.IUnpackableObject<RBKMatrix3T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RBKMatrix3;
    static getRootAsRBKMatrix3(bb: flatbuffers.ByteBuffer, obj?: RBKMatrix3): RBKMatrix3;
    static getSizePrefixedRootAsRBKMatrix3(bb: flatbuffers.ByteBuffer, obj?: RBKMatrix3): RBKMatrix3;
    M11(): number;
    M12(): number;
    M13(): number;
    M21(): number;
    M22(): number;
    M23(): number;
    M31(): number;
    M32(): number;
    M33(): number;
    static startRBKMatrix3(builder: flatbuffers.Builder): void;
    static addM11(builder: flatbuffers.Builder, M11: number): void;
    static addM12(builder: flatbuffers.Builder, M12: number): void;
    static addM13(builder: flatbuffers.Builder, M13: number): void;
    static addM21(builder: flatbuffers.Builder, M21: number): void;
    static addM22(builder: flatbuffers.Builder, M22: number): void;
    static addM23(builder: flatbuffers.Builder, M23: number): void;
    static addM31(builder: flatbuffers.Builder, M31: number): void;
    static addM32(builder: flatbuffers.Builder, M32: number): void;
    static addM33(builder: flatbuffers.Builder, M33: number): void;
    static endRBKMatrix3(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRBKMatrix3(builder: flatbuffers.Builder, M11: number, M12: number, M13: number, M21: number, M22: number, M23: number, M31: number, M32: number, M33: number): flatbuffers.Offset;
    unpack(): RBKMatrix3T;
    unpackTo(_o: RBKMatrix3T): void;
}
export declare class RBKMatrix3T implements flatbuffers.IGeneratedObject {
    M11: number;
    M12: number;
    M13: number;
    M21: number;
    M22: number;
    M23: number;
    M31: number;
    M32: number;
    M33: number;
    constructor(M11?: number, M12?: number, M13?: number, M21?: number, M22?: number, M23?: number, M31?: number, M32?: number, M33?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RBKMatrix3.d.ts.map