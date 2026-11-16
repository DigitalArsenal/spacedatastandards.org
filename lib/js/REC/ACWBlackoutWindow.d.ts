import * as flatbuffers from 'flatbuffers';
/**
 * Ground-station blackout interval.
 */
export declare class ACWBlackoutWindow implements flatbuffers.IUnpackableObject<ACWBlackoutWindowT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWBlackoutWindow;
    static getRootAsACWBlackoutWindow(bb: flatbuffers.ByteBuffer, obj?: ACWBlackoutWindow): ACWBlackoutWindow;
    static getSizePrefixedRootAsACWBlackoutWindow(bb: flatbuffers.ByteBuffer, obj?: ACWBlackoutWindow): ACWBlackoutWindow;
    /**
     * Interval start as Julian Date in TT.
     */
    START_JULIAN_DATE_TT(): number;
    /**
     * Interval end as Julian Date in TT.
     */
    END_JULIAN_DATE_TT(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_START_JULIAN_DATE_TT(): boolean;
    HAS_END_JULIAN_DATE_TT(): boolean;
    static startACWBlackoutWindow(builder: flatbuffers.Builder): void;
    static addStartJulianDateTt(builder: flatbuffers.Builder, START_JULIAN_DATE_TT: number): void;
    static addEndJulianDateTt(builder: flatbuffers.Builder, END_JULIAN_DATE_TT: number): void;
    static addHasStartJulianDateTt(builder: flatbuffers.Builder, HAS_START_JULIAN_DATE_TT: boolean): void;
    static addHasEndJulianDateTt(builder: flatbuffers.Builder, HAS_END_JULIAN_DATE_TT: boolean): void;
    static endACWBlackoutWindow(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWBlackoutWindow(builder: flatbuffers.Builder, START_JULIAN_DATE_TT: number, END_JULIAN_DATE_TT: number, HAS_START_JULIAN_DATE_TT: boolean, HAS_END_JULIAN_DATE_TT: boolean): flatbuffers.Offset;
    unpack(): ACWBlackoutWindowT;
    unpackTo(_o: ACWBlackoutWindowT): void;
}
export declare class ACWBlackoutWindowT implements flatbuffers.IGeneratedObject {
    START_JULIAN_DATE_TT: number;
    END_JULIAN_DATE_TT: number;
    HAS_START_JULIAN_DATE_TT: boolean;
    HAS_END_JULIAN_DATE_TT: boolean;
    constructor(START_JULIAN_DATE_TT?: number, END_JULIAN_DATE_TT?: number, HAS_START_JULIAN_DATE_TT?: boolean, HAS_END_JULIAN_DATE_TT?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWBlackoutWindow.d.ts.map