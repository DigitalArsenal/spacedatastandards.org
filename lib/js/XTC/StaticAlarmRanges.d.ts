import * as flatbuffers from 'flatbuffers';
import { AlarmRange, AlarmRangeT } from './AlarmRange.js';
/**
 * Static numeric alarm levels
 */
export declare class StaticAlarmRanges implements flatbuffers.IUnpackableObject<StaticAlarmRangesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): StaticAlarmRanges;
    static getRootAsStaticAlarmRanges(bb: flatbuffers.ByteBuffer, obj?: StaticAlarmRanges): StaticAlarmRanges;
    static getSizePrefixedRootAsStaticAlarmRanges(bb: flatbuffers.ByteBuffer, obj?: StaticAlarmRanges): StaticAlarmRanges;
    /**
     * Watch range
     */
    WATCH_RANGE(obj?: AlarmRange): AlarmRange | null;
    /**
     * Warning range
     */
    WARNING_RANGE(obj?: AlarmRange): AlarmRange | null;
    /**
     * Distress range
     */
    DISTRESS_RANGE(obj?: AlarmRange): AlarmRange | null;
    /**
     * Critical range
     */
    CRITICAL_RANGE(obj?: AlarmRange): AlarmRange | null;
    /**
     * Severe range
     */
    SEVERE_RANGE(obj?: AlarmRange): AlarmRange | null;
    static startStaticAlarmRanges(builder: flatbuffers.Builder): void;
    static addWatchRange(builder: flatbuffers.Builder, WATCH_RANGEOffset: flatbuffers.Offset): void;
    static addWarningRange(builder: flatbuffers.Builder, WARNING_RANGEOffset: flatbuffers.Offset): void;
    static addDistressRange(builder: flatbuffers.Builder, DISTRESS_RANGEOffset: flatbuffers.Offset): void;
    static addCriticalRange(builder: flatbuffers.Builder, CRITICAL_RANGEOffset: flatbuffers.Offset): void;
    static addSevereRange(builder: flatbuffers.Builder, SEVERE_RANGEOffset: flatbuffers.Offset): void;
    static endStaticAlarmRanges(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): StaticAlarmRangesT;
    unpackTo(_o: StaticAlarmRangesT): void;
}
export declare class StaticAlarmRangesT implements flatbuffers.IGeneratedObject {
    WATCH_RANGE: AlarmRangeT | null;
    WARNING_RANGE: AlarmRangeT | null;
    DISTRESS_RANGE: AlarmRangeT | null;
    CRITICAL_RANGE: AlarmRangeT | null;
    SEVERE_RANGE: AlarmRangeT | null;
    constructor(WATCH_RANGE?: AlarmRangeT | null, WARNING_RANGE?: AlarmRangeT | null, DISTRESS_RANGE?: AlarmRangeT | null, CRITICAL_RANGE?: AlarmRangeT | null, SEVERE_RANGE?: AlarmRangeT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=StaticAlarmRanges.d.ts.map