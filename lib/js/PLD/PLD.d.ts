import * as flatbuffers from 'flatbuffers';
import { IDM, IDMT } from './IDM.js';
/**
 * Payload Information
 */
export declare class PLD implements flatbuffers.IUnpackableObject<PLDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLD;
    static getRootAsPLD(bb: flatbuffers.ByteBuffer, obj?: PLD): PLD;
    static getSizePrefixedRootAsPLD(bb: flatbuffers.ByteBuffer, obj?: PLD): PLD;
    PAYLOAD_DURATION(): string | null;
    PAYLOAD_DURATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MASS_AT_LAUNCH(): number;
    DIMENSIONS(): string | null;
    DIMENSIONS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOLAR_ARRAY_AREA(): number;
    SOLAR_ARRAY_DIMENSIONS(): string | null;
    SOLAR_ARRAY_DIMENSIONS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NOMINAL_OPERATIONAL_LIFETIME(): string | null;
    NOMINAL_OPERATIONAL_LIFETIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INSTRUMENTS(index: number, obj?: IDM): IDM | null;
    instrumentsLength(): number;
    static startPLD(builder: flatbuffers.Builder): void;
    static addPayloadDuration(builder: flatbuffers.Builder, PAYLOAD_DURATIONOffset: flatbuffers.Offset): void;
    static addMassAtLaunch(builder: flatbuffers.Builder, MASS_AT_LAUNCH: number): void;
    static addDimensions(builder: flatbuffers.Builder, DIMENSIONSOffset: flatbuffers.Offset): void;
    static addSolarArrayArea(builder: flatbuffers.Builder, SOLAR_ARRAY_AREA: number): void;
    static addSolarArrayDimensions(builder: flatbuffers.Builder, SOLAR_ARRAY_DIMENSIONSOffset: flatbuffers.Offset): void;
    static addNominalOperationalLifetime(builder: flatbuffers.Builder, NOMINAL_OPERATIONAL_LIFETIMEOffset: flatbuffers.Offset): void;
    static addInstruments(builder: flatbuffers.Builder, INSTRUMENTSOffset: flatbuffers.Offset): void;
    static createInstrumentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInstrumentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPLD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLD(builder: flatbuffers.Builder, PAYLOAD_DURATIONOffset: flatbuffers.Offset, MASS_AT_LAUNCH: number, DIMENSIONSOffset: flatbuffers.Offset, SOLAR_ARRAY_AREA: number, SOLAR_ARRAY_DIMENSIONSOffset: flatbuffers.Offset, NOMINAL_OPERATIONAL_LIFETIMEOffset: flatbuffers.Offset, INSTRUMENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLDT;
    unpackTo(_o: PLDT): void;
}
export declare class PLDT implements flatbuffers.IGeneratedObject {
    PAYLOAD_DURATION: string | Uint8Array | null;
    MASS_AT_LAUNCH: number;
    DIMENSIONS: string | Uint8Array | null;
    SOLAR_ARRAY_AREA: number;
    SOLAR_ARRAY_DIMENSIONS: string | Uint8Array | null;
    NOMINAL_OPERATIONAL_LIFETIME: string | Uint8Array | null;
    INSTRUMENTS: (IDMT)[];
    constructor(PAYLOAD_DURATION?: string | Uint8Array | null, MASS_AT_LAUNCH?: number, DIMENSIONS?: string | Uint8Array | null, SOLAR_ARRAY_AREA?: number, SOLAR_ARRAY_DIMENSIONS?: string | Uint8Array | null, NOMINAL_OPERATIONAL_LIFETIME?: string | Uint8Array | null, INSTRUMENTS?: (IDMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLD.d.ts.map