import * as flatbuffers from 'flatbuffers';
import { ContextAlarm, ContextAlarmT } from './ContextAlarm.js';
import { DefaultAlarm, DefaultAlarmT } from './DefaultAlarm.js';
import { EpochType } from './EpochType.js';
import { IntegerDataEncoding, IntegerDataEncodingT } from './IntegerDataEncoding.js';
/**
 * Absolute time parameter type
 */
export declare class AbsoluteTimeParameterType implements flatbuffers.IUnpackableObject<AbsoluteTimeParameterTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AbsoluteTimeParameterType;
    static getRootAsAbsoluteTimeParameterType(bb: flatbuffers.ByteBuffer, obj?: AbsoluteTimeParameterType): AbsoluteTimeParameterType;
    static getSizePrefixedRootAsAbsoluteTimeParameterType(bb: flatbuffers.ByteBuffer, obj?: AbsoluteTimeParameterType): AbsoluteTimeParameterType;
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
     * Reference epoch
     */
    EPOCH(): EpochType;
    /**
     * Custom epoch date (ISO 8601) when EPOCH=CUSTOM
     */
    EPOCH_DATE(): string | null;
    EPOCH_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Data encoding
     */
    DATA_ENCODING(obj?: IntegerDataEncoding): IntegerDataEncoding | null;
    /**
     * Time unit scale factor
     */
    SCALE(): number;
    /**
     * Time unit offset
     */
    OFFSET(): number;
    /**
     * Default alarm
     */
    DEFAULT_ALARM(obj?: DefaultAlarm): DefaultAlarm | null;
    /**
     * Context alarms
     */
    CONTEXT_ALARMS(index: number, obj?: ContextAlarm): ContextAlarm | null;
    contextAlarmsLength(): number;
    static startAbsoluteTimeParameterType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: EpochType): void;
    static addEpochDate(builder: flatbuffers.Builder, EPOCH_DATEOffset: flatbuffers.Offset): void;
    static addDataEncoding(builder: flatbuffers.Builder, DATA_ENCODINGOffset: flatbuffers.Offset): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static addOffset(builder: flatbuffers.Builder, OFFSET: number): void;
    static addDefaultAlarm(builder: flatbuffers.Builder, DEFAULT_ALARMOffset: flatbuffers.Offset): void;
    static addContextAlarms(builder: flatbuffers.Builder, CONTEXT_ALARMSOffset: flatbuffers.Offset): void;
    static createContextAlarmsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContextAlarmsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAbsoluteTimeParameterType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): AbsoluteTimeParameterTypeT;
    unpackTo(_o: AbsoluteTimeParameterTypeT): void;
}
export declare class AbsoluteTimeParameterTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    EPOCH: EpochType;
    EPOCH_DATE: string | Uint8Array | null;
    DATA_ENCODING: IntegerDataEncodingT | null;
    SCALE: number;
    OFFSET: number;
    DEFAULT_ALARM: DefaultAlarmT | null;
    CONTEXT_ALARMS: (ContextAlarmT)[];
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, EPOCH?: EpochType, EPOCH_DATE?: string | Uint8Array | null, DATA_ENCODING?: IntegerDataEncodingT | null, SCALE?: number, OFFSET?: number, DEFAULT_ALARM?: DefaultAlarmT | null, CONTEXT_ALARMS?: (ContextAlarmT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AbsoluteTimeParameterType.d.ts.map