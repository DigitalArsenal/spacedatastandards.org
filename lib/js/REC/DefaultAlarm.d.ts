import * as flatbuffers from 'flatbuffers';
import { EnumerationAlarm, EnumerationAlarmT } from './EnumerationAlarm.js';
import { StaticAlarmRanges, StaticAlarmRangesT } from './StaticAlarmRanges.js';
/**
 * Default alarm definition
 */
export declare class DefaultAlarm implements flatbuffers.IUnpackableObject<DefaultAlarmT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DefaultAlarm;
    static getRootAsDefaultAlarm(bb: flatbuffers.ByteBuffer, obj?: DefaultAlarm): DefaultAlarm;
    static getSizePrefixedRootAsDefaultAlarm(bb: flatbuffers.ByteBuffer, obj?: DefaultAlarm): DefaultAlarm;
    /**
     * Minimum violations before alarm triggers
     */
    MIN_VIOLATIONS(): number;
    /**
     * Static numeric alarm ranges
     */
    STATIC_ALARM_RANGES(obj?: StaticAlarmRanges): StaticAlarmRanges | null;
    /**
     * Enumeration alarms for enumerated types
     */
    ENUMERATION_ALARMS(index: number, obj?: EnumerationAlarm): EnumerationAlarm | null;
    enumerationAlarmsLength(): number;
    static startDefaultAlarm(builder: flatbuffers.Builder): void;
    static addMinViolations(builder: flatbuffers.Builder, MIN_VIOLATIONS: number): void;
    static addStaticAlarmRanges(builder: flatbuffers.Builder, STATIC_ALARM_RANGESOffset: flatbuffers.Offset): void;
    static addEnumerationAlarms(builder: flatbuffers.Builder, ENUMERATION_ALARMSOffset: flatbuffers.Offset): void;
    static createEnumerationAlarmsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEnumerationAlarmsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endDefaultAlarm(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): DefaultAlarmT;
    unpackTo(_o: DefaultAlarmT): void;
}
export declare class DefaultAlarmT implements flatbuffers.IGeneratedObject {
    MIN_VIOLATIONS: number;
    STATIC_ALARM_RANGES: StaticAlarmRangesT | null;
    ENUMERATION_ALARMS: (EnumerationAlarmT)[];
    constructor(MIN_VIOLATIONS?: number, STATIC_ALARM_RANGES?: StaticAlarmRangesT | null, ENUMERATION_ALARMS?: (EnumerationAlarmT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DefaultAlarm.d.ts.map