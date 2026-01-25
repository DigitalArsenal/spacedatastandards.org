import * as flatbuffers from 'flatbuffers';
/**
 * Custom stream
 */
export declare class CustomStream implements flatbuffers.IUnpackableObject<CustomStreamT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CustomStream;
    static getRootAsCustomStream(bb: flatbuffers.ByteBuffer, obj?: CustomStream): CustomStream;
    static getSizePrefixedRootAsCustomStream(bb: flatbuffers.ByteBuffer, obj?: CustomStream): CustomStream;
    /**
     * Stream name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Algorithm reference for parsing
     */
    ALGORITHM_REF(): string | null;
    ALGORITHM_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCustomStream(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addAlgorithmRef(builder: flatbuffers.Builder, ALGORITHM_REFOffset: flatbuffers.Offset): void;
    static endCustomStream(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCustomStream(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset, ALGORITHM_REFOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CustomStreamT;
    unpackTo(_o: CustomStreamT): void;
}
export declare class CustomStreamT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    ALGORITHM_REF: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, ALGORITHM_REF?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CustomStream.d.ts.map