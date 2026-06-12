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
    static startACWStateSample(builder: flatbuffers.Builder): void;
    static addJulianDateTt(builder: flatbuffers.Builder, JULIAN_DATE_TT: number): void;
    static addPositionXM(builder: flatbuffers.Builder, POSITION_X_M: number): void;
    static addPositionYM(builder: flatbuffers.Builder, POSITION_Y_M: number): void;
    static addPositionZM(builder: flatbuffers.Builder, POSITION_Z_M: number): void;
    static endACWStateSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWStateSample(builder: flatbuffers.Builder, JULIAN_DATE_TT: number, POSITION_X_M: number, POSITION_Y_M: number, POSITION_Z_M: number): flatbuffers.Offset;
    unpack(): ACWStateSampleT;
    unpackTo(_o: ACWStateSampleT): void;
}
export declare class ACWStateSampleT implements flatbuffers.IGeneratedObject {
    JULIAN_DATE_TT: number;
    POSITION_X_M: number;
    POSITION_Y_M: number;
    POSITION_Z_M: number;
    constructor(JULIAN_DATE_TT?: number, POSITION_X_M?: number, POSITION_Y_M?: number, POSITION_Z_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWStateSample.d.ts.map