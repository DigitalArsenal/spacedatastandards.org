import * as flatbuffers from 'flatbuffers';
/**
 * Fixed frame stream
 */
export declare class FixedFrameStream implements flatbuffers.IUnpackableObject<FixedFrameStreamT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FixedFrameStream;
    static getRootAsFixedFrameStream(bb: flatbuffers.ByteBuffer, obj?: FixedFrameStream): FixedFrameStream;
    static getSizePrefixedRootAsFixedFrameStream(bb: flatbuffers.ByteBuffer, obj?: FixedFrameStream): FixedFrameStream;
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
     * Frame size in bits
     */
    FRAME_SIZE_IN_BITS(): number;
    /**
     * Sync pattern (hex string)
     */
    SYNC_PATTERN(): string | null;
    SYNC_PATTERN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startFixedFrameStream(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addFrameSizeInBits(builder: flatbuffers.Builder, FRAME_SIZE_IN_BITS: number): void;
    static addSyncPattern(builder: flatbuffers.Builder, SYNC_PATTERNOffset: flatbuffers.Offset): void;
    static endFixedFrameStream(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFixedFrameStream(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset, FRAME_SIZE_IN_BITS: number, SYNC_PATTERNOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FixedFrameStreamT;
    unpackTo(_o: FixedFrameStreamT): void;
}
export declare class FixedFrameStreamT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    FRAME_SIZE_IN_BITS: number;
    SYNC_PATTERN: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, FRAME_SIZE_IN_BITS?: number, SYNC_PATTERN?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FixedFrameStream.d.ts.map