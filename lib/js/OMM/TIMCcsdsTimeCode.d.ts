import * as flatbuffers from 'flatbuffers';
import { timCcsdsTimeCodeKind } from './timCcsdsTimeCodeKind.js';
/**
 * CCSDS time-code payload and preamble metadata.
 */
export declare class TIMCcsdsTimeCode implements flatbuffers.IUnpackableObject<TIMCcsdsTimeCodeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TIMCcsdsTimeCode;
    static getRootAsTIMCcsdsTimeCode(bb: flatbuffers.ByteBuffer, obj?: TIMCcsdsTimeCode): TIMCcsdsTimeCode;
    static getSizePrefixedRootAsTIMCcsdsTimeCode(bb: flatbuffers.ByteBuffer, obj?: TIMCcsdsTimeCode): TIMCcsdsTimeCode;
    /**
     * CCSDS time-code family.
     */
    CODE_KIND(): timCcsdsTimeCodeKind;
    /**
     * First CCSDS preamble field octet.
     */
    PREAMBLE_FIELD1(): number;
    /**
     * Second CCSDS preamble field octet; ignored when not signaled by preamble 1.
     */
    PREAMBLE_FIELD2(): number;
    /**
     * Raw CCSDS time field octets.
     */
    TIME_FIELD(index: number): number | null;
    timeFieldLength(): number;
    timeFieldArray(): Uint8Array | null;
    /**
     * Optional agency-defined epoch timestamp for agency epoch time codes.
     */
    AGENCY_DEFINED_EPOCH_ISO8601(): string | null;
    AGENCY_DEFINED_EPOCH_ISO8601(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional CCSDS epoch override timestamp; defaults to 1958-01-01T00:00:00 TAI.
     */
    CCSDS_EPOCH_ISO8601(): string | null;
    CCSDS_EPOCH_ISO8601(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTIMCcsdsTimeCode(builder: flatbuffers.Builder): void;
    static addCodeKind(builder: flatbuffers.Builder, CODE_KIND: timCcsdsTimeCodeKind): void;
    static addPreambleField1(builder: flatbuffers.Builder, PREAMBLE_FIELD1: number): void;
    static addPreambleField2(builder: flatbuffers.Builder, PREAMBLE_FIELD2: number): void;
    static addTimeField(builder: flatbuffers.Builder, TIME_FIELDOffset: flatbuffers.Offset): void;
    static createTimeFieldVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTimeFieldVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAgencyDefinedEpochIso8601(builder: flatbuffers.Builder, AGENCY_DEFINED_EPOCH_ISO8601Offset: flatbuffers.Offset): void;
    static addCcsdsEpochIso8601(builder: flatbuffers.Builder, CCSDS_EPOCH_ISO8601Offset: flatbuffers.Offset): void;
    static endTIMCcsdsTimeCode(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTIMCcsdsTimeCode(builder: flatbuffers.Builder, CODE_KIND: timCcsdsTimeCodeKind, PREAMBLE_FIELD1: number, PREAMBLE_FIELD2: number, TIME_FIELDOffset: flatbuffers.Offset, AGENCY_DEFINED_EPOCH_ISO8601Offset: flatbuffers.Offset, CCSDS_EPOCH_ISO8601Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TIMCcsdsTimeCodeT;
    unpackTo(_o: TIMCcsdsTimeCodeT): void;
}
export declare class TIMCcsdsTimeCodeT implements flatbuffers.IGeneratedObject {
    CODE_KIND: timCcsdsTimeCodeKind;
    PREAMBLE_FIELD1: number;
    PREAMBLE_FIELD2: number;
    TIME_FIELD: (number)[];
    AGENCY_DEFINED_EPOCH_ISO8601: string | Uint8Array | null;
    CCSDS_EPOCH_ISO8601: string | Uint8Array | null;
    constructor(CODE_KIND?: timCcsdsTimeCodeKind, PREAMBLE_FIELD1?: number, PREAMBLE_FIELD2?: number, TIME_FIELD?: (number)[], AGENCY_DEFINED_EPOCH_ISO8601?: string | Uint8Array | null, CCSDS_EPOCH_ISO8601?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TIMCcsdsTimeCode.d.ts.map