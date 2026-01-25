import * as flatbuffers from 'flatbuffers';
import { StringDataEncoding, StringDataEncodingT } from './StringDataEncoding.js';
/**
 * String argument type
 */
export declare class StringArgumentType implements flatbuffers.IUnpackableObject<StringArgumentTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): StringArgumentType;
    static getRootAsStringArgumentType(bb: flatbuffers.ByteBuffer, obj?: StringArgumentType): StringArgumentType;
    static getSizePrefixedRootAsStringArgumentType(bb: flatbuffers.ByteBuffer, obj?: StringArgumentType): StringArgumentType;
    /**
     * Type name
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
     * Data encoding
     */
    DATA_ENCODING(obj?: StringDataEncoding): StringDataEncoding | null;
    /**
     * Initial/default value
     */
    INITIAL_VALUE(): string | null;
    INITIAL_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Restriction pattern (regex)
     */
    RESTRICTION_PATTERN(): string | null;
    RESTRICTION_PATTERN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startStringArgumentType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addDataEncoding(builder: flatbuffers.Builder, DATA_ENCODINGOffset: flatbuffers.Offset): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUEOffset: flatbuffers.Offset): void;
    static addRestrictionPattern(builder: flatbuffers.Builder, RESTRICTION_PATTERNOffset: flatbuffers.Offset): void;
    static endStringArgumentType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): StringArgumentTypeT;
    unpackTo(_o: StringArgumentTypeT): void;
}
export declare class StringArgumentTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    DATA_ENCODING: StringDataEncodingT | null;
    INITIAL_VALUE: string | Uint8Array | null;
    RESTRICTION_PATTERN: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, DATA_ENCODING?: StringDataEncodingT | null, INITIAL_VALUE?: string | Uint8Array | null, RESTRICTION_PATTERN?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=StringArgumentType.d.ts.map