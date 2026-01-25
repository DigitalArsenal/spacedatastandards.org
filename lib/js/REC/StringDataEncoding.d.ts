import * as flatbuffers from 'flatbuffers';
import { StringEncodingType } from './StringEncodingType.js';
import { StringSizeType } from './StringSizeType.js';
/**
 * String data encoding specification
 */
export declare class StringDataEncoding implements flatbuffers.IUnpackableObject<StringDataEncodingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): StringDataEncoding;
    static getRootAsStringDataEncoding(bb: flatbuffers.ByteBuffer, obj?: StringDataEncoding): StringDataEncoding;
    static getSizePrefixedRootAsStringDataEncoding(bb: flatbuffers.ByteBuffer, obj?: StringDataEncoding): StringDataEncoding;
    /**
     * Character encoding
     */
    ENCODING(): StringEncodingType;
    /**
     * Size type specification
     */
    SIZE_TYPE(): StringSizeType;
    /**
     * Fixed size in bits (when SIZE_TYPE=FIXED)
     */
    SIZE_IN_BITS(): number;
    /**
     * Termination character (when SIZE_TYPE=TERMINATION_CHAR)
     */
    TERMINATION_CHAR(): number;
    /**
     * Maximum size in bits (for variable length)
     */
    MAX_SIZE_IN_BITS(): number;
    /**
     * Leading size field bits (when SIZE_TYPE=LEADING_SIZE)
     */
    LEADING_SIZE_BITS(): number;
    static startStringDataEncoding(builder: flatbuffers.Builder): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: StringEncodingType): void;
    static addSizeType(builder: flatbuffers.Builder, SIZE_TYPE: StringSizeType): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static addTerminationChar(builder: flatbuffers.Builder, TERMINATION_CHAR: number): void;
    static addMaxSizeInBits(builder: flatbuffers.Builder, MAX_SIZE_IN_BITS: number): void;
    static addLeadingSizeBits(builder: flatbuffers.Builder, LEADING_SIZE_BITS: number): void;
    static endStringDataEncoding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createStringDataEncoding(builder: flatbuffers.Builder, ENCODING: StringEncodingType, SIZE_TYPE: StringSizeType, SIZE_IN_BITS: number, TERMINATION_CHAR: number, MAX_SIZE_IN_BITS: number, LEADING_SIZE_BITS: number): flatbuffers.Offset;
    unpack(): StringDataEncodingT;
    unpackTo(_o: StringDataEncodingT): void;
}
export declare class StringDataEncodingT implements flatbuffers.IGeneratedObject {
    ENCODING: StringEncodingType;
    SIZE_TYPE: StringSizeType;
    SIZE_IN_BITS: number;
    TERMINATION_CHAR: number;
    MAX_SIZE_IN_BITS: number;
    LEADING_SIZE_BITS: number;
    constructor(ENCODING?: StringEncodingType, SIZE_TYPE?: StringSizeType, SIZE_IN_BITS?: number, TERMINATION_CHAR?: number, MAX_SIZE_IN_BITS?: number, LEADING_SIZE_BITS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=StringDataEncoding.d.ts.map