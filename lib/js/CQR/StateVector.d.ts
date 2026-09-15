import * as flatbuffers from 'flatbuffers';
export declare class StateVector implements flatbuffers.IUnpackableObject<StateVectorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): StateVector;
    static getRootAsStateVector(bb: flatbuffers.ByteBuffer, obj?: StateVector): StateVector;
    static getSizePrefixedRootAsStateVector(bb: flatbuffers.ByteBuffer, obj?: StateVector): StateVector;
    /**
     * Epoch of the state vector.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * X component of position in the specified reference frame.
     */
    X(): number;
    /**
     * Y component of position.
     */
    Y(): number;
    /**
     * Z component of position.
     */
    Z(): number;
    /**
     * X component of velocity.
     */
    X_DOT(): number;
    /**
     * Y component of velocity.
     */
    Y_DOT(): number;
    /**
     * Z component of velocity.
     */
    Z_DOT(): number;
    /**
     * X component of acceleration.
     */
    X_DDOT(): number;
    /**
     * Y component of acceleration.
     */
    Y_DDOT(): number;
    /**
     * Z component of acceleration.
     */
    Z_DDOT(): number;
    static startStateVector(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXDot(builder: flatbuffers.Builder, X_DOT: number): void;
    static addYDot(builder: flatbuffers.Builder, Y_DOT: number): void;
    static addZDot(builder: flatbuffers.Builder, Z_DOT: number): void;
    static addXDdot(builder: flatbuffers.Builder, X_DDOT: number): void;
    static addYDdot(builder: flatbuffers.Builder, Y_DDOT: number): void;
    static addZDdot(builder: flatbuffers.Builder, Z_DDOT: number): void;
    static endStateVector(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createStateVector(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, X: number, Y: number, Z: number, X_DOT: number, Y_DOT: number, Z_DOT: number, X_DDOT: number, Y_DDOT: number, Z_DDOT: number): flatbuffers.Offset;
    unpack(): StateVectorT;
    unpackTo(_o: StateVectorT): void;
}
export declare class StateVectorT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    X: number;
    Y: number;
    Z: number;
    X_DOT: number;
    Y_DOT: number;
    Z_DOT: number;
    X_DDOT: number;
    Y_DDOT: number;
    Z_DDOT: number;
    constructor(EPOCH?: string | Uint8Array | null, X?: number, Y?: number, Z?: number, X_DOT?: number, Y_DOT?: number, Z_DOT?: number, X_DDOT?: number, Y_DDOT?: number, Z_DDOT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=StateVector.d.ts.map