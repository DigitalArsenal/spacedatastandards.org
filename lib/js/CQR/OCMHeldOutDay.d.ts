import * as flatbuffers from 'flatbuffers';
/**
 * One day of held-out prediction error after the end of a fit arc.
 */
export declare class OCMHeldOutDay implements flatbuffers.IUnpackableObject<OCMHeldOutDayT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMHeldOutDay;
    static getRootAsOCMHeldOutDay(bb: flatbuffers.ByteBuffer, obj?: OCMHeldOutDay): OCMHeldOutDay;
    static getSizePrefixedRootAsOCMHeldOutDay(bb: flatbuffers.ByteBuffer, obj?: OCMHeldOutDay): OCMHeldOutDay;
    /**
     * The day after the end of the fit arc, from 1.
     */
    DAY(): number;
    /**
     * Reference states in the day.
     */
    STATES(): number;
    /**
     * Position RMS over the day, km.
     */
    RMS_KM(): number;
    static startOCMHeldOutDay(builder: flatbuffers.Builder): void;
    static addDay(builder: flatbuffers.Builder, DAY: number): void;
    static addStates(builder: flatbuffers.Builder, STATES: number): void;
    static addRmsKm(builder: flatbuffers.Builder, RMS_KM: number): void;
    static endOCMHeldOutDay(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMHeldOutDay(builder: flatbuffers.Builder, DAY: number, STATES: number, RMS_KM: number): flatbuffers.Offset;
    unpack(): OCMHeldOutDayT;
    unpackTo(_o: OCMHeldOutDayT): void;
}
export declare class OCMHeldOutDayT implements flatbuffers.IGeneratedObject {
    DAY: number;
    STATES: number;
    RMS_KM: number;
    constructor(DAY?: number, STATES?: number, RMS_KM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMHeldOutDay.d.ts.map