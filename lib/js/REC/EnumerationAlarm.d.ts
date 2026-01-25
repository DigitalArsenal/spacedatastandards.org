import * as flatbuffers from 'flatbuffers';
import { AlarmSeverityType } from './AlarmSeverityType.js';
/**
 * Enumerated alarm
 */
export declare class EnumerationAlarm implements flatbuffers.IUnpackableObject<EnumerationAlarmT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EnumerationAlarm;
    static getRootAsEnumerationAlarm(bb: flatbuffers.ByteBuffer, obj?: EnumerationAlarm): EnumerationAlarm;
    static getSizePrefixedRootAsEnumerationAlarm(bb: flatbuffers.ByteBuffer, obj?: EnumerationAlarm): EnumerationAlarm;
    /**
     * Enumerated value label
     */
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Alarm level for this value
     */
    ALARM_LEVEL(): AlarmSeverityType;
    static startEnumerationAlarm(builder: flatbuffers.Builder): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static addAlarmLevel(builder: flatbuffers.Builder, ALARM_LEVEL: AlarmSeverityType): void;
    static endEnumerationAlarm(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEnumerationAlarm(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset, ALARM_LEVEL: AlarmSeverityType): flatbuffers.Offset;
    unpack(): EnumerationAlarmT;
    unpackTo(_o: EnumerationAlarmT): void;
}
export declare class EnumerationAlarmT implements flatbuffers.IGeneratedObject {
    LABEL: string | Uint8Array | null;
    ALARM_LEVEL: AlarmSeverityType;
    constructor(LABEL?: string | Uint8Array | null, ALARM_LEVEL?: AlarmSeverityType);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EnumerationAlarm.d.ts.map