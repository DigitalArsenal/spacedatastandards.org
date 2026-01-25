import * as flatbuffers from 'flatbuffers';
import { BinaryDataEncoding, BinaryDataEncodingT } from './BinaryDataEncoding.js';
/**
 * Binary argument type
 */
export declare class BinaryArgumentType implements flatbuffers.IUnpackableObject<BinaryArgumentTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BinaryArgumentType;
    static getRootAsBinaryArgumentType(bb: flatbuffers.ByteBuffer, obj?: BinaryArgumentType): BinaryArgumentType;
    static getSizePrefixedRootAsBinaryArgumentType(bb: flatbuffers.ByteBuffer, obj?: BinaryArgumentType): BinaryArgumentType;
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
    DATA_ENCODING(obj?: BinaryDataEncoding): BinaryDataEncoding | null;
    /**
     * Initial/default value (hex string)
     */
    INITIAL_VALUE(): string | null;
    INITIAL_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startBinaryArgumentType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addDataEncoding(builder: flatbuffers.Builder, DATA_ENCODINGOffset: flatbuffers.Offset): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUEOffset: flatbuffers.Offset): void;
    static endBinaryArgumentType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BinaryArgumentTypeT;
    unpackTo(_o: BinaryArgumentTypeT): void;
}
export declare class BinaryArgumentTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    DATA_ENCODING: BinaryDataEncodingT | null;
    INITIAL_VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, DATA_ENCODING?: BinaryDataEncodingT | null, INITIAL_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BinaryArgumentType.d.ts.map