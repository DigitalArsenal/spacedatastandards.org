import * as flatbuffers from 'flatbuffers';
/**
 * Fire Control Systems
 */
export declare class FCS implements flatbuffers.IUnpackableObject<FCST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FCS;
    static getRootAsFCS(bb: flatbuffers.ByteBuffer, obj?: FCS): FCS;
    static getSizePrefixedRootAsFCS(bb: flatbuffers.ByteBuffer, obj?: FCS): FCS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    MODE(): number;
    LEAD_METHOD(): number;
    RANGEFINDER_TYPE(): number;
    AMMO_SELECTED(): number;
    TARGET(): string | null;
    TARGET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOLUTION(): string | null;
    SOLUTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LAST_RANGE(): number;
    RANGE_RATE(): number;
    ROUNDS_REMAINING(): number;
    TEMPERATURE(): number;
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startFCS(builder: flatbuffers.Builder): void;
    static addMode(builder: flatbuffers.Builder, MODE: number): void;
    static addLeadMethod(builder: flatbuffers.Builder, LEAD_METHOD: number): void;
    static addRangefinderType(builder: flatbuffers.Builder, RANGEFINDER_TYPE: number): void;
    static addAmmoSelected(builder: flatbuffers.Builder, AMMO_SELECTED: number): void;
    static addTarget(builder: flatbuffers.Builder, TARGETOffset: flatbuffers.Offset): void;
    static addSolution(builder: flatbuffers.Builder, SOLUTIONOffset: flatbuffers.Offset): void;
    static addLastRange(builder: flatbuffers.Builder, LAST_RANGE: number): void;
    static addRangeRate(builder: flatbuffers.Builder, RANGE_RATE: number): void;
    static addRoundsRemaining(builder: flatbuffers.Builder, ROUNDS_REMAINING: number): void;
    static addTemperature(builder: flatbuffers.Builder, TEMPERATURE: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFCS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFCSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFCSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createFCS(builder: flatbuffers.Builder, MODE: number, LEAD_METHOD: number, RANGEFINDER_TYPE: number, AMMO_SELECTED: number, TARGETOffset: flatbuffers.Offset, SOLUTIONOffset: flatbuffers.Offset, LAST_RANGE: number, RANGE_RATE: number, ROUNDS_REMAINING: number, TEMPERATURE: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FCST;
    unpackTo(_o: FCST): void;
}
export declare class FCST implements flatbuffers.IGeneratedObject {
    MODE: number;
    LEAD_METHOD: number;
    RANGEFINDER_TYPE: number;
    AMMO_SELECTED: number;
    TARGET: string | Uint8Array | null;
    SOLUTION: string | Uint8Array | null;
    LAST_RANGE: number;
    RANGE_RATE: number;
    ROUNDS_REMAINING: number;
    TEMPERATURE: number;
    RESERVED: (number)[];
    constructor(MODE?: number, LEAD_METHOD?: number, RANGEFINDER_TYPE?: number, AMMO_SELECTED?: number, TARGET?: string | Uint8Array | null, SOLUTION?: string | Uint8Array | null, LAST_RANGE?: number, RANGE_RATE?: number, ROUNDS_REMAINING?: number, TEMPERATURE?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FCS.d.ts.map