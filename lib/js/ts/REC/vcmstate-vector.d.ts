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
    epoch(): string | null;
    epoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    x(): number;
    y(): number;
    z(): number;
    xDot(): number;
    yDot(): number;
    zDot(): number;
    static startVCMStateVector(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, x: number): void;
    static addY(builder: flatbuffers.Builder, y: number): void;
    static addZ(builder: flatbuffers.Builder, z: number): void;
    static addXDot(builder: flatbuffers.Builder, xDot: number): void;
    static addYDot(builder: flatbuffers.Builder, yDot: number): void;
    static addZDot(builder: flatbuffers.Builder, zDot: number): void;
    static endVCMStateVector(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCMStateVector(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset, x: number, y: number, z: number, xDot: number, yDot: number, zDot: number): flatbuffers.Offset;
    unpack(): VCMStateVectorT;
    unpackTo(_o: VCMStateVectorT): void;
}
export declare class VCMStateVectorT implements flatbuffers.IGeneratedObject {
    epoch: string | Uint8Array | null;
    x: number;
    y: number;
    z: number;
    xDot: number;
    yDot: number;
    zDot: number;
    constructor(epoch?: string | Uint8Array | null, x?: number, y?: number, z?: number, xDot?: number, yDot?: number, zDot?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=vcmstate-vector.d.ts.map