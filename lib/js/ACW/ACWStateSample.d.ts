import * as flatbuffers from 'flatbuffers';
/**
 * Target Cartesian state sample in an Earth-fixed frame.
 */
export declare class ACWStateSample implements flatbuffers.IUnpackableObject<ACWStateSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWStateSample;
    static getRootAsACWStateSample(bb: flatbuffers.ByteBuffer, obj?: ACWStateSample): ACWStateSample;
    static getSizePrefixedRootAsACWStateSample(bb: flatbuffers.ByteBuffer, obj?: ACWStateSample): ACWStateSample;
    /**
     * Sample epoch as Julian Date in TT.
     */
    JULIAN_DATE_TT(): number;
    /**
     * Earth-fixed X position, meters.
     */
    POSITION_X_M(): number;
    /**
     * Earth-fixed Y position, meters.
     */
    POSITION_Y_M(): number;
    /**
     * Earth-fixed Z position, meters.
     */
    POSITION_Z_M(): number;
    /**
     * Earth-fixed velocity, meters per second. Required for range-rate,
     * Doppler and frequency measurements (SIMULATE_OBSERVATIONS).
     */
    VELOCITY_X_MPS(): number;
    VELOCITY_Y_MPS(): number;
    VELOCITY_Z_MPS(): number;
    static startACWStateSample(builder: flatbuffers.Builder): void;
    static addJulianDateTt(builder: flatbuffers.Builder, JULIAN_DATE_TT: number): void;
    static addPositionXM(builder: flatbuffers.Builder, POSITION_X_M: number): void;
    static addPositionYM(builder: flatbuffers.Builder, POSITION_Y_M: number): void;
    static addPositionZM(builder: flatbuffers.Builder, POSITION_Z_M: number): void;
    static addVelocityXMps(builder: flatbuffers.Builder, VELOCITY_X_MPS: number): void;
    static addVelocityYMps(builder: flatbuffers.Builder, VELOCITY_Y_MPS: number): void;
    static addVelocityZMps(builder: flatbuffers.Builder, VELOCITY_Z_MPS: number): void;
    static endACWStateSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWStateSample(builder: flatbuffers.Builder, JULIAN_DATE_TT: number, POSITION_X_M: number, POSITION_Y_M: number, POSITION_Z_M: number, VELOCITY_X_MPS: number, VELOCITY_Y_MPS: number, VELOCITY_Z_MPS: number): flatbuffers.Offset;
    unpack(): ACWStateSampleT;
    unpackTo(_o: ACWStateSampleT): void;
}
export declare class ACWStateSampleT implements flatbuffers.IGeneratedObject {
    JULIAN_DATE_TT: number;
    POSITION_X_M: number;
    POSITION_Y_M: number;
    POSITION_Z_M: number;
    VELOCITY_X_MPS: number;
    VELOCITY_Y_MPS: number;
    VELOCITY_Z_MPS: number;
    constructor(JULIAN_DATE_TT?: number, POSITION_X_M?: number, POSITION_Y_M?: number, POSITION_Z_M?: number, VELOCITY_X_MPS?: number, VELOCITY_Y_MPS?: number, VELOCITY_Z_MPS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWStateSample.d.ts.map