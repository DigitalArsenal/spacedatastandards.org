import * as flatbuffers from 'flatbuffers';
/**
 * Command argument definition
 */
export declare class Argument implements flatbuffers.IUnpackableObject<ArgumentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Argument;
    static getRootAsArgument(bb: flatbuffers.ByteBuffer, obj?: Argument): Argument;
    static getSizePrefixedRootAsArgument(bb: flatbuffers.ByteBuffer, obj?: Argument): Argument;
    /**
     * Argument name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to argument type
     */
    ARGUMENT_TYPE_REF(): string | null;
    ARGUMENT_TYPE_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * Initial/default value
     */
    INITIAL_VALUE(): string | null;
    INITIAL_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startArgument(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addArgumentTypeRef(builder: flatbuffers.Builder, ARGUMENT_TYPE_REFOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUEOffset: flatbuffers.Offset): void;
    static endArgument(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createArgument(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, ARGUMENT_TYPE_REFOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset, LONG_DESCRIPTIONOffset: flatbuffers.Offset, INITIAL_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ArgumentT;
    unpackTo(_o: ArgumentT): void;
}
export declare class ArgumentT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    ARGUMENT_TYPE_REF: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    INITIAL_VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, ARGUMENT_TYPE_REF?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, INITIAL_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Argument.d.ts.map