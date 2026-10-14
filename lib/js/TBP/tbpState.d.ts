import * as flatbuffers from 'flatbuffers';
/**
 * One synodic state, non-dimensional.
 */
export declare class tbpState implements flatbuffers.IUnpackableObject<tbpStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpState;
    static getRootAstbpState(bb: flatbuffers.ByteBuffer, obj?: tbpState): tbpState;
    static getSizePrefixedRootAstbpState(bb: flatbuffers.ByteBuffer, obj?: tbpState): tbpState;
    X(): number;
    Y(): number;
    Z(): number;
    VX(): number;
    VY(): number;
    VZ(): number;
    /**
     * Non-dimensional time of the state from the trajectory's start.
     */
    TIME(): number;
    static starttbpState(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addVx(builder: flatbuffers.Builder, VX: number): void;
    static addVy(builder: flatbuffers.Builder, VY: number): void;
    static addVz(builder: flatbuffers.Builder, VZ: number): void;
    static addTime(builder: flatbuffers.Builder, TIME: number): void;
    static endtbpState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createtbpState(builder: flatbuffers.Builder, X: number, Y: number, Z: number, VX: number, VY: number, VZ: number, TIME: number): flatbuffers.Offset;
    unpack(): tbpStateT;
    unpackTo(_o: tbpStateT): void;
}
export declare class tbpStateT implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    VX: number;
    VY: number;
    VZ: number;
    TIME: number;
    constructor(X?: number, Y?: number, Z?: number, VX?: number, VY?: number, VZ?: number, TIME?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpState.d.ts.map