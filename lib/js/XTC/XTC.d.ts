import * as flatbuffers from 'flatbuffers';
import { CommandMetaData, CommandMetaDataT } from './CommandMetaData.js';
import { ServiceSet, ServiceSetT } from './ServiceSet.js';
import { TelemetryMetaData, TelemetryMetaDataT } from './TelemetryMetaData.js';
import { XTCHeader, XTCHeaderT } from './XTCHeader.js';
/**
 * SpaceSystem - Root element for XTCE document
 * A SpaceSystem defines the telemetry and command configuration for a space
 * vehicle or subsystem. SpaceSystems can be nested hierarchically to represent
 * the structure of a spacecraft (e.g., spacecraft -> subsystem -> payload).
 */
export declare class XTC implements flatbuffers.IUnpackableObject<XTCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XTC;
    static getRootAsXTC(bb: flatbuffers.ByteBuffer, obj?: XTC): XTC;
    static getSizePrefixedRootAsXTC(bb: flatbuffers.ByteBuffer, obj?: XTC): XTC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Name of this space system
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
     * Operational status
     */
    OPERATIONAL_STATUS(): string | null;
    OPERATIONAL_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Document header
     */
    HEADER(obj?: XTCHeader): XTCHeader | null;
    /**
     * Telemetry metadata
     */
    TELEMETRY_META_DATA(obj?: TelemetryMetaData): TelemetryMetaData | null;
    /**
     * Command metadata
     */
    COMMAND_META_DATA(obj?: CommandMetaData): CommandMetaData | null;
    /**
     * Service definitions
     */
    SERVICE_SET(obj?: ServiceSet): ServiceSet | null;
    /**
     * Child space systems (hierarchical structure)
     */
    CHILD_SYSTEMS(index: number, obj?: XTC): XTC | null;
    childSystemsLength(): number;
    static startXTC(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addOperationalStatus(builder: flatbuffers.Builder, OPERATIONAL_STATUSOffset: flatbuffers.Offset): void;
    static addHeader(builder: flatbuffers.Builder, HEADEROffset: flatbuffers.Offset): void;
    static addTelemetryMetaData(builder: flatbuffers.Builder, TELEMETRY_META_DATAOffset: flatbuffers.Offset): void;
    static addCommandMetaData(builder: flatbuffers.Builder, COMMAND_META_DATAOffset: flatbuffers.Offset): void;
    static addServiceSet(builder: flatbuffers.Builder, SERVICE_SETOffset: flatbuffers.Offset): void;
    static addChildSystems(builder: flatbuffers.Builder, CHILD_SYSTEMSOffset: flatbuffers.Offset): void;
    static createChildSystemsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startChildSystemsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXTC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishXTCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedXTCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): XTCT;
    unpackTo(_o: XTCT): void;
}
export declare class XTCT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    OPERATIONAL_STATUS: string | Uint8Array | null;
    HEADER: XTCHeaderT | null;
    TELEMETRY_META_DATA: TelemetryMetaDataT | null;
    COMMAND_META_DATA: CommandMetaDataT | null;
    SERVICE_SET: ServiceSetT | null;
    CHILD_SYSTEMS: (XTCT)[];
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, OPERATIONAL_STATUS?: string | Uint8Array | null, HEADER?: XTCHeaderT | null, TELEMETRY_META_DATA?: TelemetryMetaDataT | null, COMMAND_META_DATA?: CommandMetaDataT | null, SERVICE_SET?: ServiceSetT | null, CHILD_SYSTEMS?: (XTCT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XTC.d.ts.map