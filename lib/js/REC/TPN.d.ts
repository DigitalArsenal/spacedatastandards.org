import * as flatbuffers from 'flatbuffers';
/**
 * Transponder
 */
export declare class TPN implements flatbuffers.IUnpackableObject<TPNT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TPN;
    static getRootAsTPN(bb: flatbuffers.ByteBuffer, obj?: TPN): TPN;
    static getSizePrefixedRootAsTPN(bb: flatbuffers.ByteBuffer, obj?: TPN): TPN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NID(): string | null;
    NID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TID(): string | null;
    TID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TTF(): number;
    SYMBOL_RATE(): number;
    FEC(): number;
    MODULATION(): string | null;
    MODULATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FORMAT(): string | null;
    FORMAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SYSTEM(): string | null;
    SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CHANNELS(index: number): string;
    CHANNELS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    channelsLength(): number;
    static startTPN(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addNid(builder: flatbuffers.Builder, NIDOffset: flatbuffers.Offset): void;
    static addTid(builder: flatbuffers.Builder, TIDOffset: flatbuffers.Offset): void;
    static addTtf(builder: flatbuffers.Builder, TTF: number): void;
    static addSymbolRate(builder: flatbuffers.Builder, SYMBOL_RATE: number): void;
    static addFec(builder: flatbuffers.Builder, FEC: number): void;
    static addModulation(builder: flatbuffers.Builder, MODULATIONOffset: flatbuffers.Offset): void;
    static addFormat(builder: flatbuffers.Builder, FORMATOffset: flatbuffers.Offset): void;
    static addSystem(builder: flatbuffers.Builder, SYSTEMOffset: flatbuffers.Offset): void;
    static addChannels(builder: flatbuffers.Builder, CHANNELSOffset: flatbuffers.Offset): void;
    static createChannelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startChannelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTPN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTPNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTPNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTPN(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, NIDOffset: flatbuffers.Offset, TIDOffset: flatbuffers.Offset, TTF: number, SYMBOL_RATE: number, FEC: number, MODULATIONOffset: flatbuffers.Offset, FORMATOffset: flatbuffers.Offset, SYSTEMOffset: flatbuffers.Offset, CHANNELSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TPNT;
    unpackTo(_o: TPNT): void;
}
export declare class TPNT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    NID: string | Uint8Array | null;
    TID: string | Uint8Array | null;
    TTF: number;
    SYMBOL_RATE: number;
    FEC: number;
    MODULATION: string | Uint8Array | null;
    FORMAT: string | Uint8Array | null;
    SYSTEM: string | Uint8Array | null;
    CHANNELS: (string)[];
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, NID?: string | Uint8Array | null, TID?: string | Uint8Array | null, TTF?: number, SYMBOL_RATE?: number, FEC?: number, MODULATION?: string | Uint8Array | null, FORMAT?: string | Uint8Array | null, SYSTEM?: string | Uint8Array | null, CHANNELS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TPN.d.ts.map