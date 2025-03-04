import * as flatbuffers from 'flatbuffers';
import { IDM, IDMT } from './idm.js';
/**
 * Payload Information
 */
export declare class PLD implements flatbuffers.IUnpackableObject<PLDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLD;
    static getRootAsPLD(bb: flatbuffers.ByteBuffer, obj?: PLD): PLD;
    static getSizePrefixedRootAsPLD(bb: flatbuffers.ByteBuffer, obj?: PLD): PLD;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    payloadDuration(): string | null;
    payloadDuration(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    massAtLaunch(): number;
    dimensions(): string | null;
    dimensions(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    solarArrayArea(): number;
    solarArrayDimensions(): string | null;
    solarArrayDimensions(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    nominalOperationalLifetime(): string | null;
    nominalOperationalLifetime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    instruments(index: number, obj?: IDM): IDM | null;
    instrumentsLength(): number;
    static startPLD(builder: flatbuffers.Builder): void;
    static addPayloadDuration(builder: flatbuffers.Builder, payloadDurationOffset: flatbuffers.Offset): void;
    static addMassAtLaunch(builder: flatbuffers.Builder, massAtLaunch: number): void;
    static addDimensions(builder: flatbuffers.Builder, dimensionsOffset: flatbuffers.Offset): void;
    static addSolarArrayArea(builder: flatbuffers.Builder, solarArrayArea: number): void;
    static addSolarArrayDimensions(builder: flatbuffers.Builder, solarArrayDimensionsOffset: flatbuffers.Offset): void;
    static addNominalOperationalLifetime(builder: flatbuffers.Builder, nominalOperationalLifetimeOffset: flatbuffers.Offset): void;
    static addInstruments(builder: flatbuffers.Builder, instrumentsOffset: flatbuffers.Offset): void;
    static createInstrumentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInstrumentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPLD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPLDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPLDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPLD(builder: flatbuffers.Builder, payloadDurationOffset: flatbuffers.Offset, massAtLaunch: number, dimensionsOffset: flatbuffers.Offset, solarArrayArea: number, solarArrayDimensionsOffset: flatbuffers.Offset, nominalOperationalLifetimeOffset: flatbuffers.Offset, instrumentsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLDT;
    unpackTo(_o: PLDT): void;
}
export declare class PLDT implements flatbuffers.IGeneratedObject {
    payloadDuration: string | Uint8Array | null;
    massAtLaunch: number;
    dimensions: string | Uint8Array | null;
    solarArrayArea: number;
    solarArrayDimensions: string | Uint8Array | null;
    nominalOperationalLifetime: string | Uint8Array | null;
    instruments: (IDMT)[];
    constructor(payloadDuration?: string | Uint8Array | null, massAtLaunch?: number, dimensions?: string | Uint8Array | null, solarArrayArea?: number, solarArrayDimensions?: string | Uint8Array | null, nominalOperationalLifetime?: string | Uint8Array | null, instruments?: (IDMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=pld.d.ts.map