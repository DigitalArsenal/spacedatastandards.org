import * as flatbuffers from 'flatbuffers';
/**
 * OPM State Vector (position and velocity)
 */
export declare class opmStateVector implements flatbuffers.IUnpackableObject<opmStateVectorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): opmStateVector;
    static getRootAsopmStateVector(bb: flatbuffers.ByteBuffer, obj?: opmStateVector): opmStateVector;
    static getSizePrefixedRootAsopmStateVector(bb: flatbuffers.ByteBuffer, obj?: opmStateVector): opmStateVector;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    X(): number;
    Y(): number;
    Z(): number;
    X_DOT(): number;
    Y_DOT(): number;
    Z_DOT(): number;
    static startopmStateVector(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXDot(builder: flatbuffers.Builder, X_DOT: number): void;
    static addYDot(builder: flatbuffers.Builder, Y_DOT: number): void;
    static addZDot(builder: flatbuffers.Builder, Z_DOT: number): void;
    static endopmStateVector(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createopmStateVector(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, X: number, Y: number, Z: number, X_DOT: number, Y_DOT: number, Z_DOT: number): flatbuffers.Offset;
    unpack(): opmStateVectorT;
    unpackTo(_o: opmStateVectorT): void;
}
export declare class opmStateVectorT implements flatbuffers.IGeneratedObject {
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
//# sourceMappingURL=opmStateVector.d.ts.map