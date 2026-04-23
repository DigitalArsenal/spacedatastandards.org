import * as flatbuffers from 'flatbuffers';
/**
 * Target state input (40 bytes, 8-byte aligned).
 */
export declare class targetState implements flatbuffers.IUnpackableObject<targetStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): targetState;
    /**
     * Target position X in ECEF (meters).
     */
    POS_X(): number;
    /**
     * Target position Y in ECEF (meters).
     */
    POS_Y(): number;
    /**
     * Target position Z in ECEF (meters).
     */
    POS_Z(): number;
    /**
     * Radar cross section (m^2).
     */
    RCS(): number;
    /**
     * Unique target identifier.
     */
    TARGET_ID(): number;
    /**
     * Target flags (reserved).
     */
    FLAGS(): number;
    static sizeOf(): number;
    static createtargetState(builder: flatbuffers.Builder, POS_X: number, POS_Y: number, POS_Z: number, RCS: number, TARGET_ID: number, FLAGS: number): flatbuffers.Offset;
    unpack(): targetStateT;
    unpackTo(_o: targetStateT): void;
}
export declare class targetStateT implements flatbuffers.IGeneratedObject {
    POS_X: number;
    POS_Y: number;
    POS_Z: number;
    RCS: number;
    TARGET_ID: number;
    FLAGS: number;
    constructor(POS_X?: number, POS_Y?: number, POS_Z?: number, RCS?: number, TARGET_ID?: number, FLAGS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=targetState.d.ts.map