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
    epoch(): string | null;
    epoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * X component of position in the specified reference frame.
     */
    x(): number;
    /**
     * Y component of position.
     */
    y(): number;
    /**
     * Z component of position.
     */
    z(): number;
    /**
     * X component of velocity.
     */
    xDot(): number;
    /**
     * Y component of velocity.
     */
    yDot(): number;
    /**
     * Z component of velocity.
     */
    zDot(): number;
    /**
     * X component of acceleration.
     */
    xDdot(): number;
    /**
     * Y component of acceleration.
     */
    yDdot(): number;
    /**
     * Z component of acceleration.
     */
    zDdot(): number;
    static startStateVector(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, x: number): void;
    static addY(builder: flatbuffers.Builder, y: number): void;
    static addZ(builder: flatbuffers.Builder, z: number): void;
    static addXDot(builder: flatbuffers.Builder, xDot: number): void;
    static addYDot(builder: flatbuffers.Builder, yDot: number): void;
    static addZDot(builder: flatbuffers.Builder, zDot: number): void;
    static addXDdot(builder: flatbuffers.Builder, xDdot: number): void;
    static addYDdot(builder: flatbuffers.Builder, yDdot: number): void;
    static addZDdot(builder: flatbuffers.Builder, zDdot: number): void;
    static endStateVector(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createStateVector(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset, x: number, y: number, z: number, xDot: number, yDot: number, zDot: number, xDdot: number, yDdot: number, zDdot: number): flatbuffers.Offset;
    unpack(): StateVectorT;
    unpackTo(_o: StateVectorT): void;
}
export declare class StateVectorT implements flatbuffers.IGeneratedObject {
    epoch: string | Uint8Array | null;
    x: number;
    y: number;
    z: number;
    xDot: number;
    yDot: number;
    zDot: number;
    xDdot: number;
    yDdot: number;
    zDdot: number;
    constructor(epoch?: string | Uint8Array | null, x?: number, y?: number, z?: number, xDot?: number, yDot?: number, zDot?: number, xDdot?: number, yDdot?: number, zDdot?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=state-vector.d.ts.map