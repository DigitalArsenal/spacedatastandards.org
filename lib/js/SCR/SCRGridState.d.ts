import * as flatbuffers from 'flatbuffers';
/**
 * One object's state at one coarse step, in the screen's evaluation frame.
 */
export declare class SCRGridState implements flatbuffers.IUnpackableObject<SCRGridStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRGridState;
    /**
     * Position, km.
     */
    X_KM(): number;
    Y_KM(): number;
    Z_KM(): number;
    /**
     * Deviation bound, km: how far the object's true path can stray from the
     * straight line r + v t over half a coarse step either side.
     */
    DEVIATION_KM(): number;
    /**
     * Velocity, km/s.
     */
    VX_KM_S(): number;
    VY_KM_S(): number;
    VZ_KM_S(): number;
    /**
     * Zero (keeps the row 32 bytes).
     */
    RESERVED(): number;
    static sizeOf(): number;
    static createSCRGridState(builder: flatbuffers.Builder, X_KM: number, Y_KM: number, Z_KM: number, DEVIATION_KM: number, VX_KM_S: number, VY_KM_S: number, VZ_KM_S: number, RESERVED: number): flatbuffers.Offset;
    unpack(): SCRGridStateT;
    unpackTo(_o: SCRGridStateT): void;
}
export declare class SCRGridStateT implements flatbuffers.IGeneratedObject {
    X_KM: number;
    Y_KM: number;
    Z_KM: number;
    DEVIATION_KM: number;
    VX_KM_S: number;
    VY_KM_S: number;
    VZ_KM_S: number;
    RESERVED: number;
    constructor(X_KM?: number, Y_KM?: number, Z_KM?: number, DEVIATION_KM?: number, VX_KM_S?: number, VY_KM_S?: number, VZ_KM_S?: number, RESERVED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRGridState.d.ts.map