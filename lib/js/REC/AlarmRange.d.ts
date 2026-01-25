import * as flatbuffers from 'flatbuffers';
/**
 * Numeric alarm range
 */
export declare class AlarmRange implements flatbuffers.IUnpackableObject<AlarmRangeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AlarmRange;
    static getRootAsAlarmRange(bb: flatbuffers.ByteBuffer, obj?: AlarmRange): AlarmRange;
    static getSizePrefixedRootAsAlarmRange(bb: flatbuffers.ByteBuffer, obj?: AlarmRange): AlarmRange;
    /**
     * Minimum value (inclusive)
     */
    MIN_INCLUSIVE(): number;
    /**
     * Maximum value (inclusive)
     */
    MAX_INCLUSIVE(): number;
    /**
     * Minimum value (exclusive)
     */
    MIN_EXCLUSIVE(): number;
    /**
     * Maximum value (exclusive)
     */
    MAX_EXCLUSIVE(): number;
    static startAlarmRange(builder: flatbuffers.Builder): void;
    static addMinInclusive(builder: flatbuffers.Builder, MIN_INCLUSIVE: number): void;
    static addMaxInclusive(builder: flatbuffers.Builder, MAX_INCLUSIVE: number): void;
    static addMinExclusive(builder: flatbuffers.Builder, MIN_EXCLUSIVE: number): void;
    static addMaxExclusive(builder: flatbuffers.Builder, MAX_EXCLUSIVE: number): void;
    static endAlarmRange(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAlarmRange(builder: flatbuffers.Builder, MIN_INCLUSIVE: number, MAX_INCLUSIVE: number, MIN_EXCLUSIVE: number, MAX_EXCLUSIVE: number): flatbuffers.Offset;
    unpack(): AlarmRangeT;
    unpackTo(_o: AlarmRangeT): void;
}
export declare class AlarmRangeT implements flatbuffers.IGeneratedObject {
    MIN_INCLUSIVE: number;
    MAX_INCLUSIVE: number;
    MIN_EXCLUSIVE: number;
    MAX_EXCLUSIVE: number;
    constructor(MIN_INCLUSIVE?: number, MAX_INCLUSIVE?: number, MIN_EXCLUSIVE?: number, MAX_EXCLUSIVE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AlarmRange.d.ts.map