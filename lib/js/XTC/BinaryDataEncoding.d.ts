import * as flatbuffers from 'flatbuffers';
/**
 * Binary data encoding specification
 */
export declare class BinaryDataEncoding implements flatbuffers.IUnpackableObject<BinaryDataEncodingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BinaryDataEncoding;
    static getRootAsBinaryDataEncoding(bb: flatbuffers.ByteBuffer, obj?: BinaryDataEncoding): BinaryDataEncoding;
    static getSizePrefixedRootAsBinaryDataEncoding(bb: flatbuffers.ByteBuffer, obj?: BinaryDataEncoding): BinaryDataEncoding;
    /**
     * Fixed size in bits
     */
    SIZE_IN_BITS(): number;
    /**
     * Maximum size in bits (for variable length)
     */
    MAX_SIZE_IN_BITS(): number;
    /**
     * Leading size field bits (for variable length)
     */
    LEADING_SIZE_BITS(): number;
    static startBinaryDataEncoding(builder: flatbuffers.Builder): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static addMaxSizeInBits(builder: flatbuffers.Builder, MAX_SIZE_IN_BITS: number): void;
    static addLeadingSizeBits(builder: flatbuffers.Builder, LEADING_SIZE_BITS: number): void;
    static endBinaryDataEncoding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBinaryDataEncoding(builder: flatbuffers.Builder, SIZE_IN_BITS: number, MAX_SIZE_IN_BITS: number, LEADING_SIZE_BITS: number): flatbuffers.Offset;
    unpack(): BinaryDataEncodingT;
    unpackTo(_o: BinaryDataEncodingT): void;
}
export declare class BinaryDataEncodingT implements flatbuffers.IGeneratedObject {
    SIZE_IN_BITS: number;
    MAX_SIZE_IN_BITS: number;
    LEADING_SIZE_BITS: number;
    constructor(SIZE_IN_BITS?: number, MAX_SIZE_IN_BITS?: number, LEADING_SIZE_BITS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BinaryDataEncoding.d.ts.map