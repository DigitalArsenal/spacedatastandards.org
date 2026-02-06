import * as flatbuffers from 'flatbuffers';
/**
 * Reentry State Vector
 */
export declare class reentryStateVector implements flatbuffers.IUnpackableObject<reentryStateVectorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): reentryStateVector;
    static getRootAsreentryStateVector(bb: flatbuffers.ByteBuffer, obj?: reentryStateVector): reentryStateVector;
    static getSizePrefixedRootAsreentryStateVector(bb: flatbuffers.ByteBuffer, obj?: reentryStateVector): reentryStateVector;
    /**
     * Epoch (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position X in km
     */
    X(): number;
    /**
     * Position Y in km
     */
    Y(): number;
    /**
     * Position Z in km
     */
    Z(): number;
    /**
     * Velocity X in km/s
     */
    X_DOT(): number;
    /**
     * Velocity Y in km/s
     */
    Y_DOT(): number;
    /**
     * Velocity Z in km/s
     */
    Z_DOT(): number;
    static startreentryStateVector(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXDot(builder: flatbuffers.Builder, X_DOT: number): void;
    static addYDot(builder: flatbuffers.Builder, Y_DOT: number): void;
    static addZDot(builder: flatbuffers.Builder, Z_DOT: number): void;
    static endreentryStateVector(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createreentryStateVector(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, REF_FRAMEOffset: flatbuffers.Offset, X: number, Y: number, Z: number, X_DOT: number, Y_DOT: number, Z_DOT: number): flatbuffers.Offset;
    unpack(): reentryStateVectorT;
    unpackTo(_o: reentryStateVectorT): void;
}
export declare class reentryStateVectorT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    X: number;
    Y: number;
    Z: number;
    X_DOT: number;
    Y_DOT: number;
    Z_DOT: number;
    constructor(EPOCH?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, X?: number, Y?: number, Z?: number, X_DOT?: number, Y_DOT?: number, Z_DOT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=reentryStateVector.d.ts.map