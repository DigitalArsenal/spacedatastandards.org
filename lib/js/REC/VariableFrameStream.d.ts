import * as flatbuffers from 'flatbuffers';
/**
 * Variable frame stream
 */
export declare class VariableFrameStream implements flatbuffers.IUnpackableObject<VariableFrameStreamT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VariableFrameStream;
    static getRootAsVariableFrameStream(bb: flatbuffers.ByteBuffer, obj?: VariableFrameStream): VariableFrameStream;
    static getSizePrefixedRootAsVariableFrameStream(bb: flatbuffers.ByteBuffer, obj?: VariableFrameStream): VariableFrameStream;
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
     * Minimum frame size in bits
     */
    MIN_FRAME_SIZE_IN_BITS(): number;
    /**
     * Maximum frame size in bits
     */
    MAX_FRAME_SIZE_IN_BITS(): number;
    /**
     * Size field location in bits
     */
    SIZE_FIELD_OFFSET(): number;
    /**
     * Size field size in bits
     */
    SIZE_FIELD_SIZE(): number;
    static startVariableFrameStream(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addMinFrameSizeInBits(builder: flatbuffers.Builder, MIN_FRAME_SIZE_IN_BITS: number): void;
    static addMaxFrameSizeInBits(builder: flatbuffers.Builder, MAX_FRAME_SIZE_IN_BITS: number): void;
    static addSizeFieldOffset(builder: flatbuffers.Builder, SIZE_FIELD_OFFSET: number): void;
    static addSizeFieldSize(builder: flatbuffers.Builder, SIZE_FIELD_SIZE: number): void;
    static endVariableFrameStream(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVariableFrameStream(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset, MIN_FRAME_SIZE_IN_BITS: number, MAX_FRAME_SIZE_IN_BITS: number, SIZE_FIELD_OFFSET: number, SIZE_FIELD_SIZE: number): flatbuffers.Offset;
    unpack(): VariableFrameStreamT;
    unpackTo(_o: VariableFrameStreamT): void;
}
export declare class VariableFrameStreamT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    MIN_FRAME_SIZE_IN_BITS: number;
    MAX_FRAME_SIZE_IN_BITS: number;
    SIZE_FIELD_OFFSET: number;
    SIZE_FIELD_SIZE: number;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, MIN_FRAME_SIZE_IN_BITS?: number, MAX_FRAME_SIZE_IN_BITS?: number, SIZE_FIELD_OFFSET?: number, SIZE_FIELD_SIZE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VariableFrameStream.d.ts.map