import * as flatbuffers from 'flatbuffers';
/**
 * Repeat entry specification
 */
export declare class RepeatEntry implements flatbuffers.IUnpackableObject<RepeatEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RepeatEntry;
    static getRootAsRepeatEntry(bb: flatbuffers.ByteBuffer, obj?: RepeatEntry): RepeatEntry;
    static getSizePrefixedRootAsRepeatEntry(bb: flatbuffers.ByteBuffer, obj?: RepeatEntry): RepeatEntry;
    /**
     * Fixed repeat count
     */
    COUNT(): number;
    /**
     * Dynamic count from parameter reference
     */
    COUNT_PARAMETER_REF(): string | null;
    COUNT_PARAMETER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Offset in bits between repetitions
     */
    OFFSET_IN_BITS(): number;
    static startRepeatEntry(builder: flatbuffers.Builder): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addCountParameterRef(builder: flatbuffers.Builder, COUNT_PARAMETER_REFOffset: flatbuffers.Offset): void;
    static addOffsetInBits(builder: flatbuffers.Builder, OFFSET_IN_BITS: number): void;
    static endRepeatEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRepeatEntry(builder: flatbuffers.Builder, COUNT: number, COUNT_PARAMETER_REFOffset: flatbuffers.Offset, OFFSET_IN_BITS: number): flatbuffers.Offset;
    unpack(): RepeatEntryT;
    unpackTo(_o: RepeatEntryT): void;
}
export declare class RepeatEntryT implements flatbuffers.IGeneratedObject {
    COUNT: number;
    COUNT_PARAMETER_REF: string | Uint8Array | null;
    OFFSET_IN_BITS: number;
    constructor(COUNT?: number, COUNT_PARAMETER_REF?: string | Uint8Array | null, OFFSET_IN_BITS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RepeatEntry.d.ts.map