import * as flatbuffers from 'flatbuffers';
import { ContextAlarm, ContextAlarmT } from './ContextAlarm.js';
import { DefaultAlarm, DefaultAlarmT } from './DefaultAlarm.js';
import { EnumerationValue, EnumerationValueT } from './EnumerationValue.js';
import { IntegerDataEncoding, IntegerDataEncodingT } from './IntegerDataEncoding.js';
/**
 * Enumerated parameter type
 */
export declare class EnumeratedParameterType implements flatbuffers.IUnpackableObject<EnumeratedParameterTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EnumeratedParameterType;
    static getRootAsEnumeratedParameterType(bb: flatbuffers.ByteBuffer, obj?: EnumeratedParameterType): EnumeratedParameterType;
    static getSizePrefixedRootAsEnumeratedParameterType(bb: flatbuffers.ByteBuffer, obj?: EnumeratedParameterType): EnumeratedParameterType;
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
    /**
     * Enumeration values list
     */
    ENUMERATION_LIST(index: number, obj?: EnumerationValue): EnumerationValue | null;
    enumerationListLength(): number;
    /**
     * Initial/default value label
     */
    INITIAL_VALUE(): string | null;
    INITIAL_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEnumeratedParameterType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addDataEncoding(builder: flatbuffers.Builder, DATA_ENCODINGOffset: flatbuffers.Offset): void;
    static addDefaultAlarm(builder: flatbuffers.Builder, DEFAULT_ALARMOffset: flatbuffers.Offset): void;
    static addContextAlarms(builder: flatbuffers.Builder, CONTEXT_ALARMSOffset: flatbuffers.Offset): void;
    static createContextAlarmsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContextAlarmsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnumerationList(builder: flatbuffers.Builder, ENUMERATION_LISTOffset: flatbuffers.Offset): void;
    static createEnumerationListVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEnumerationListVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUEOffset: flatbuffers.Offset): void;
    static endEnumeratedParameterType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): EnumeratedParameterTypeT;
    unpackTo(_o: EnumeratedParameterTypeT): void;
}
export declare class EnumeratedParameterTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    DATA_ENCODING: IntegerDataEncodingT | null;
    DEFAULT_ALARM: DefaultAlarmT | null;
    CONTEXT_ALARMS: (ContextAlarmT)[];
    ENUMERATION_LIST: (EnumerationValueT)[];
    INITIAL_VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, DATA_ENCODING?: IntegerDataEncodingT | null, DEFAULT_ALARM?: DefaultAlarmT | null, CONTEXT_ALARMS?: (ContextAlarmT)[], ENUMERATION_LIST?: (EnumerationValueT)[], INITIAL_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EnumeratedParameterType.d.ts.map