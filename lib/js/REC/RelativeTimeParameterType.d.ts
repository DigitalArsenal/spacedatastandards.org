import * as flatbuffers from 'flatbuffers';
import { ContextAlarm, ContextAlarmT } from './ContextAlarm.js';
import { DefaultAlarm, DefaultAlarmT } from './DefaultAlarm.js';
import { IntegerDataEncoding, IntegerDataEncodingT } from './IntegerDataEncoding.js';
import { Unit, UnitT } from './Unit.js';
/**
 * Relative time parameter type
 */
export declare class RelativeTimeParameterType implements flatbuffers.IUnpackableObject<RelativeTimeParameterTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RelativeTimeParameterType;
    static getRootAsRelativeTimeParameterType(bb: flatbuffers.ByteBuffer, obj?: RelativeTimeParameterType): RelativeTimeParameterType;
    static getSizePrefixedRootAsRelativeTimeParameterType(bb: flatbuffers.ByteBuffer, obj?: RelativeTimeParameterType): RelativeTimeParameterType;
    /**
     * Type name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Long description
     */
    LONG_DESCRIPTION(): string | null;
    LONG_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Units
     */
    UNITS(index: number, obj?: Unit): Unit | null;
    unitsLength(): number;
    /**
     * Data encoding
     */
    DATA_ENCODING(obj?: IntegerDataEncoding): IntegerDataEncoding | null;
    /**
     * Default alarm
     */
    DEFAULT_ALARM(obj?: DefaultAlarm): DefaultAlarm | null;
    /**
     * Context alarms
     */
    CONTEXT_ALARMS(index: number, obj?: ContextAlarm): ContextAlarm | null;
    contextAlarmsLength(): number;
    static startRelativeTimeParameterType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static createUnitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUnitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDataEncoding(builder: flatbuffers.Builder, DATA_ENCODINGOffset: flatbuffers.Offset): void;
    static addDefaultAlarm(builder: flatbuffers.Builder, DEFAULT_ALARMOffset: flatbuffers.Offset): void;
    static addContextAlarms(builder: flatbuffers.Builder, CONTEXT_ALARMSOffset: flatbuffers.Offset): void;
    static createContextAlarmsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContextAlarmsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRelativeTimeParameterType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RelativeTimeParameterTypeT;
    unpackTo(_o: RelativeTimeParameterTypeT): void;
}
export declare class RelativeTimeParameterTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    UNITS: (UnitT)[];
    DATA_ENCODING: IntegerDataEncodingT | null;
    DEFAULT_ALARM: DefaultAlarmT | null;
    CONTEXT_ALARMS: (ContextAlarmT)[];
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, UNITS?: (UnitT)[], DATA_ENCODING?: IntegerDataEncodingT | null, DEFAULT_ALARM?: DefaultAlarmT | null, CONTEXT_ALARMS?: (ContextAlarmT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RelativeTimeParameterType.d.ts.map