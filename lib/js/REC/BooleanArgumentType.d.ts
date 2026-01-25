import * as flatbuffers from 'flatbuffers';
import { IntegerDataEncoding, IntegerDataEncodingT } from './IntegerDataEncoding.js';
/**
 * Boolean argument type
 */
export declare class BooleanArgumentType implements flatbuffers.IUnpackableObject<BooleanArgumentTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BooleanArgumentType;
    static getRootAsBooleanArgumentType(bb: flatbuffers.ByteBuffer, obj?: BooleanArgumentType): BooleanArgumentType;
    static getSizePrefixedRootAsBooleanArgumentType(bb: flatbuffers.ByteBuffer, obj?: BooleanArgumentType): BooleanArgumentType;
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
    DATA_ENCODING(obj?: IntegerDataEncoding): IntegerDataEncoding | null;
    /**
     * String representation of true value
     */
    ONE_STRING_VALUE(): string | null;
    ONE_STRING_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * String representation of false value
     */
    ZERO_STRING_VALUE(): string | null;
    ZERO_STRING_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Initial/default value
     */
    INITIAL_VALUE(): boolean;
    static startBooleanArgumentType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addDataEncoding(builder: flatbuffers.Builder, DATA_ENCODINGOffset: flatbuffers.Offset): void;
    static addOneStringValue(builder: flatbuffers.Builder, ONE_STRING_VALUEOffset: flatbuffers.Offset): void;
    static addZeroStringValue(builder: flatbuffers.Builder, ZERO_STRING_VALUEOffset: flatbuffers.Offset): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUE: boolean): void;
    static endBooleanArgumentType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BooleanArgumentTypeT;
    unpackTo(_o: BooleanArgumentTypeT): void;
}
export declare class BooleanArgumentTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    DATA_ENCODING: IntegerDataEncodingT | null;
    ONE_STRING_VALUE: string | Uint8Array | null;
    ZERO_STRING_VALUE: string | Uint8Array | null;
    INITIAL_VALUE: boolean;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, DATA_ENCODING?: IntegerDataEncodingT | null, ONE_STRING_VALUE?: string | Uint8Array | null, ZERO_STRING_VALUE?: string | Uint8Array | null, INITIAL_VALUE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BooleanArgumentType.d.ts.map