import * as flatbuffers from 'flatbuffers';
export declare class FRMMatrix3 implements flatbuffers.IUnpackableObject<FRMMatrix3T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FRMMatrix3;
    static getRootAsFRMMatrix3(bb: flatbuffers.ByteBuffer, obj?: FRMMatrix3): FRMMatrix3;
    static getSizePrefixedRootAsFRMMatrix3(bb: flatbuffers.ByteBuffer, obj?: FRMMatrix3): FRMMatrix3;
    M11(): number;
    M12(): number;
    M13(): number;
    M21(): number;
    M22(): number;
    M23(): number;
    M31(): number;
    M32(): number;
    M33(): number;
    static startFRMMatrix3(builder: flatbuffers.Builder): void;
    static addM11(builder: flatbuffers.Builder, M11: number): void;
    static addM12(builder: flatbuffers.Builder, M12: number): void;
    static addM13(builder: flatbuffers.Builder, M13: number): void;
    static addM21(builder: flatbuffers.Builder, M21: number): void;
    static addM22(builder: flatbuffers.Builder, M22: number): void;
    static addM23(builder: flatbuffers.Builder, M23: number): void;
    static addM31(builder: flatbuffers.Builder, M31: number): void;
    static addM32(builder: flatbuffers.Builder, M32: number): void;
    static addM33(builder: flatbuffers.Builder, M33: number): void;
    static endFRMMatrix3(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFRMMatrix3(builder: flatbuffers.Builder, M11: number, M12: number, M13: number, M21: number, M22: number, M23: number, M31: number, M32: number, M33: number): flatbuffers.Offset;
    unpack(): FRMMatrix3T;
    unpackTo(_o: FRMMatrix3T): void;
}
export declare class FRMMatrix3T implements flatbuffers.IGeneratedObject {
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
//# sourceMappingURL=FRMMatrix3.d.ts.map