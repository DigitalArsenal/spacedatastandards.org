import * as flatbuffers from 'flatbuffers';
import { ContextAlarm, ContextAlarmT } from './ContextAlarm.js';
import { DefaultAlarm, DefaultAlarmT } from './DefaultAlarm.js';
import { IntegerDataEncoding, IntegerDataEncodingT } from './IntegerDataEncoding.js';
import { Unit, UnitT } from './Unit.js';
/**
 * Integer parameter type
 */
export declare class IntegerParameterType implements flatbuffers.IUnpackableObject<IntegerParameterTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IntegerParameterType;
    static getRootAsIntegerParameterType(bb: flatbuffers.ByteBuffer, obj?: IntegerParameterType): IntegerParameterType;
    static getSizePrefixedRootAsIntegerParameterType(bb: flatbuffers.ByteBuffer, obj?: IntegerParameterType): IntegerParameterType;
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
    /**
     * Minimum valid value
     */
    VALID_MIN(): bigint;
    /**
     * Maximum valid value
     */
    VALID_MAX(): bigint;
    /**
     * Signed integer (true) or unsigned (false)
     */
    SIGNED(): boolean;
    /**
     * Size in bits
     */
    SIZE_IN_BITS(): number;
    /**
     * Initial/default value
     */
    INITIAL_VALUE(): bigint;
    static startIntegerParameterType(builder: flatbuffers.Builder): void;
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
    static addValidMin(builder: flatbuffers.Builder, VALID_MIN: bigint): void;
    static addValidMax(builder: flatbuffers.Builder, VALID_MAX: bigint): void;
    static addSigned(builder: flatbuffers.Builder, SIGNED: boolean): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUE: bigint): void;
    static endIntegerParameterType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): IntegerParameterTypeT;
    unpackTo(_o: IntegerParameterTypeT): void;
}
export declare class IntegerParameterTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    UNITS: (UnitT)[];
    DATA_ENCODING: IntegerDataEncodingT | null;
    DEFAULT_ALARM: DefaultAlarmT | null;
    CONTEXT_ALARMS: (ContextAlarmT)[];
    VALID_MIN: bigint;
    VALID_MAX: bigint;
    SIGNED: boolean;
    SIZE_IN_BITS: number;
    INITIAL_VALUE: bigint;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, UNITS?: (UnitT)[], DATA_ENCODING?: IntegerDataEncodingT | null, DEFAULT_ALARM?: DefaultAlarmT | null, CONTEXT_ALARMS?: (ContextAlarmT)[], VALID_MIN?: bigint, VALID_MAX?: bigint, SIGNED?: boolean, SIZE_IN_BITS?: number, INITIAL_VALUE?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IntegerParameterType.d.ts.map