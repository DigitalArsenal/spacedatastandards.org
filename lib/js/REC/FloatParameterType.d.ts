import * as flatbuffers from 'flatbuffers';
import { ContextAlarm, ContextAlarmT } from './ContextAlarm.js';
import { DefaultAlarm, DefaultAlarmT } from './DefaultAlarm.js';
import { FloatDataEncoding, FloatDataEncodingT } from './FloatDataEncoding.js';
import { Unit, UnitT } from './Unit.js';
/**
 * Float parameter type
 */
export declare class FloatParameterType implements flatbuffers.IUnpackableObject<FloatParameterTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FloatParameterType;
    static getRootAsFloatParameterType(bb: flatbuffers.ByteBuffer, obj?: FloatParameterType): FloatParameterType;
    static getSizePrefixedRootAsFloatParameterType(bb: flatbuffers.ByteBuffer, obj?: FloatParameterType): FloatParameterType;
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
    DATA_ENCODING(obj?: FloatDataEncoding): FloatDataEncoding | null;
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
     * Minimum valid value
     */
    VALID_MIN(): number;
    /**
     * Maximum valid value
     */
    VALID_MAX(): number;
    /**
     * Size in bits (32 or 64)
     */
    SIZE_IN_BITS(): number;
    /**
     * Initial/default value
     */
    INITIAL_VALUE(): number;
    static startFloatParameterType(builder: flatbuffers.Builder): void;
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
    static addValidMin(builder: flatbuffers.Builder, VALID_MIN: number): void;
    static addValidMax(builder: flatbuffers.Builder, VALID_MAX: number): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUE: number): void;
    static endFloatParameterType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): FloatParameterTypeT;
    unpackTo(_o: FloatParameterTypeT): void;
}
export declare class FloatParameterTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    UNITS: (UnitT)[];
    DATA_ENCODING: FloatDataEncodingT | null;
    DEFAULT_ALARM: DefaultAlarmT | null;
    CONTEXT_ALARMS: (ContextAlarmT)[];
    VALID_MIN: number;
    VALID_MAX: number;
    SIZE_IN_BITS: number;
    INITIAL_VALUE: number;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, UNITS?: (UnitT)[], DATA_ENCODING?: FloatDataEncodingT | null, DEFAULT_ALARM?: DefaultAlarmT | null, CONTEXT_ALARMS?: (ContextAlarmT)[], VALID_MIN?: number, VALID_MAX?: number, SIZE_IN_BITS?: number, INITIAL_VALUE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FloatParameterType.d.ts.map