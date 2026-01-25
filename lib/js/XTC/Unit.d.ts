import * as flatbuffers from 'flatbuffers';
/**
 * Unit specification
 */
export declare class Unit implements flatbuffers.IUnpackableObject<UnitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Unit;
    static getRootAsUnit(bb: flatbuffers.ByteBuffer, obj?: Unit): Unit;
    static getSizePrefixedRootAsUnit(bb: flatbuffers.ByteBuffer, obj?: Unit): Unit;
    /**
     * Unit description (e.g., "meters per second")
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unit symbol (e.g., "m/s")
     */
    SYMBOL(): string | null;
    SYMBOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Power/exponent for this unit
     */
    POWER(): number;
    /**
     * Factor multiplier
     */
    FACTOR(): number;
    static startUnit(builder: flatbuffers.Builder): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addSymbol(builder: flatbuffers.Builder, SYMBOLOffset: flatbuffers.Offset): void;
    static addPower(builder: flatbuffers.Builder, POWER: number): void;
    static addFactor(builder: flatbuffers.Builder, FACTOR: number): void;
    static endUnit(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createUnit(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset, SYMBOLOffset: flatbuffers.Offset, POWER: number, FACTOR: number): flatbuffers.Offset;
    unpack(): UnitT;
    unpackTo(_o: UnitT): void;
}
export declare class UnitT implements flatbuffers.IGeneratedObject {
    DESCRIPTION: string | Uint8Array | null;
    SYMBOL: string | Uint8Array | null;
    POWER: number;
    FACTOR: number;
    constructor(DESCRIPTION?: string | Uint8Array | null, SYMBOL?: string | Uint8Array | null, POWER?: number, FACTOR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Unit.d.ts.map