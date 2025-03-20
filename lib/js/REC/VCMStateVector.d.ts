import * as flatbuffers from 'flatbuffers';
/**
 * VCM State Vector (position and velocity)
 */
export declare class VCMStateVector implements flatbuffers.IUnpackableObject<VCMStateVectorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCMStateVector;
    static getRootAsVCMStateVector(bb: flatbuffers.ByteBuffer, obj?: VCMStateVector): VCMStateVector;
    static getSizePrefixedRootAsVCMStateVector(bb: flatbuffers.ByteBuffer, obj?: VCMStateVector): VCMStateVector;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    X(): number;
    Y(): number;
    Z(): number;
    X_DOT(): number;
    Y_DOT(): number;
    Z_DOT(): number;
    static startVCMStateVector(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXDot(builder: flatbuffers.Builder, X_DOT: number): void;
    static addYDot(builder: flatbuffers.Builder, Y_DOT: number): void;
    static addZDot(builder: flatbuffers.Builder, Z_DOT: number): void;
    static endVCMStateVector(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCMStateVector(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, X: number, Y: number, Z: number, X_DOT: number, Y_DOT: number, Z_DOT: number): flatbuffers.Offset;
    unpack(): VCMStateVectorT;
    unpackTo(_o: VCMStateVectorT): void;
}
export declare class VCMStateVectorT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    X: number;
    Y: number;
    Z: number;
    X_DOT: number;
    Y_DOT: number;
    Z_DOT: number;
    constructor(EPOCH?: string | Uint8Array | null, X?: number, Y?: number, Z?: number, X_DOT?: number, Y_DOT?: number, Z_DOT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCMStateVector.d.ts.map