import * as flatbuffers from 'flatbuffers';
/**
 * Target Cartesian state sample in the required CENTRAL_BODY.FIXED_FRAME.
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
     * Fixed-frame X position, meters.
     */
    POSITION_X_M(): number;
    /**
     * Fixed-frame Y position, meters.
     */
    POSITION_Y_M(): number;
    /**
     * Fixed-frame Z position, meters.
     */
    POSITION_Z_M(): number;
    /**
     * Fixed-frame velocity, meters per second. Required for range-rate,
     * Doppler and frequency measurements (SIMULATE_OBSERVATIONS).
     */
    VELOCITY_X_MPS(): number;
    VELOCITY_Y_MPS(): number;
    VELOCITY_Z_MPS(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_JULIAN_DATE_TT(): boolean;
    HAS_POSITION_X_M(): boolean;
    HAS_POSITION_Y_M(): boolean;
    HAS_POSITION_Z_M(): boolean;
    HAS_VELOCITY_X_MPS(): boolean;
    HAS_VELOCITY_Y_MPS(): boolean;
    HAS_VELOCITY_Z_MPS(): boolean;
    static startACWStateSample(builder: flatbuffers.Builder): void;
    static addJulianDateTt(builder: flatbuffers.Builder, JULIAN_DATE_TT: number): void;
    static addPositionXM(builder: flatbuffers.Builder, POSITION_X_M: number): void;
    static addPositionYM(builder: flatbuffers.Builder, POSITION_Y_M: number): void;
    static addPositionZM(builder: flatbuffers.Builder, POSITION_Z_M: number): void;
    static addVelocityXMps(builder: flatbuffers.Builder, VELOCITY_X_MPS: number): void;
    static addVelocityYMps(builder: flatbuffers.Builder, VELOCITY_Y_MPS: number): void;
    static addVelocityZMps(builder: flatbuffers.Builder, VELOCITY_Z_MPS: number): void;
    static addHasJulianDateTt(builder: flatbuffers.Builder, HAS_JULIAN_DATE_TT: boolean): void;
    static addHasPositionXM(builder: flatbuffers.Builder, HAS_POSITION_X_M: boolean): void;
    static addHasPositionYM(builder: flatbuffers.Builder, HAS_POSITION_Y_M: boolean): void;
    static addHasPositionZM(builder: flatbuffers.Builder, HAS_POSITION_Z_M: boolean): void;
    static addHasVelocityXMps(builder: flatbuffers.Builder, HAS_VELOCITY_X_MPS: boolean): void;
    static addHasVelocityYMps(builder: flatbuffers.Builder, HAS_VELOCITY_Y_MPS: boolean): void;
    static addHasVelocityZMps(builder: flatbuffers.Builder, HAS_VELOCITY_Z_MPS: boolean): void;
    static endACWStateSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWStateSample(builder: flatbuffers.Builder, JULIAN_DATE_TT: number, POSITION_X_M: number, POSITION_Y_M: number, POSITION_Z_M: number, VELOCITY_X_MPS: number, VELOCITY_Y_MPS: number, VELOCITY_Z_MPS: number, HAS_JULIAN_DATE_TT: boolean, HAS_POSITION_X_M: boolean, HAS_POSITION_Y_M: boolean, HAS_POSITION_Z_M: boolean, HAS_VELOCITY_X_MPS: boolean, HAS_VELOCITY_Y_MPS: boolean, HAS_VELOCITY_Z_MPS: boolean): flatbuffers.Offset;
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
    HAS_JULIAN_DATE_TT: boolean;
    HAS_POSITION_X_M: boolean;
    HAS_POSITION_Y_M: boolean;
    HAS_POSITION_Z_M: boolean;
    HAS_VELOCITY_X_MPS: boolean;
    HAS_VELOCITY_Y_MPS: boolean;
    HAS_VELOCITY_Z_MPS: boolean;
    constructor(JULIAN_DATE_TT?: number, POSITION_X_M?: number, POSITION_Y_M?: number, POSITION_Z_M?: number, VELOCITY_X_MPS?: number, VELOCITY_Y_MPS?: number, VELOCITY_Z_MPS?: number, HAS_JULIAN_DATE_TT?: boolean, HAS_POSITION_X_M?: boolean, HAS_POSITION_Y_M?: boolean, HAS_POSITION_Z_M?: boolean, HAS_VELOCITY_X_MPS?: boolean, HAS_VELOCITY_Y_MPS?: boolean, HAS_VELOCITY_Z_MPS?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWStateSample.d.ts.map