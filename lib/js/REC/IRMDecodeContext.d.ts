import * as flatbuffers from 'flatbuffers';
/**
 * Everything a resuming reader needs to decode a chunk that does not begin at
 * offset 0. Required whenever NEXT_OFFSET is past the source's own header.
 */
export declare class IRMDecodeContext implements flatbuffers.IUnpackableObject<IRMDecodeContextT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IRMDecodeContext;
    static getRootAsIRMDecodeContext(bb: flatbuffers.ByteBuffer, obj?: IRMDecodeContext): IRMDecodeContext;
    static getSizePrefixedRootAsIRMDecodeContext(bb: flatbuffers.ByteBuffer, obj?: IRMDecodeContext): IRMDecodeContext;
    /**
     * Format token the decoder dispatches on, verbatim and lowercase, e.g.
     * `text/csv`. A consumer that does not implement the format refuses the chunk
     * rather than guessing at a layout.
     */
    FORMAT(): string;
    FORMAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The source's header line verbatim, exactly as it appeared at offset 0 and
     * excluding its line terminator. This is the field that makes chunk N>0
     * decodable; without it a headerless chunk parses to zero rows and looks like
     * a clean tail.
     */
    HEADER_LINE(): string | null;
    HEADER_LINE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Byte length the header occupied at the start of the source, including its
     * terminator, so a reader can tell a header-bearing prefix from a data row.
     */
    HEADER_BYTE_LENGTH(): bigint;
    /**
     * Column names in source order, when the publisher parsed them. Advisory:
     * HEADER_LINE is authoritative and a disagreement is resolved in its favour.
     */
    COLUMN_NAMES(index: number): string;
    COLUMN_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    columnNamesLength(): number;
    /**
     * Field delimiter verbatim.
     */
    DELIMITER(): string | null;
    DELIMITER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quote character verbatim.
     */
    QUOTE(): string | null;
    QUOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Escape character verbatim.
     */
    ESCAPE(): string | null;
    ESCAPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Record terminator verbatim, e.g. `\n` or `\r\n`.
     */
    LINE_TERMINATOR(): string | null;
    LINE_TERMINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Character encoding label verbatim as the provider states it.
     */
    CHARSET(): string | null;
    CHARSET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stream-compression codec applied to the source bytes, verbatim and
     * lowercase. Empty means the ranged bytes are read as-is. Non-empty means
     * NEXT_OFFSET is a position in the COMPRESSED stream and DECODER_STATE,
     * WINDOW and PARTIAL_RECORD are all required to resume.
     */
    COMPRESSION(): string | null;
    COMPRESSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position in the DECODED stream corresponding to NEXT_OFFSET, when the
     * source is compressed. 0 with a non-empty COMPRESSION means the decoded
     * stream has not been advanced.
     */
    DECODED_OFFSET(): bigint;
    /**
     * Serialized, pointer-free image of the decoder at the seam — the state a
     * codec with no restart point needs in order to have one. Opaque to every
     * consumer but a decoder whose stamps match exactly. Never partially applied.
     */
    DECODER_STATE(index: number): number | null;
    decoderStateLength(): number;
    decoderStateArray(): Uint8Array | null;
    /**
     * Layout identifier of DECODER_STATE, verbatim, naming the decoder struct the
     * image was taken from. A consumer that does not know the token restarts.
     */
    DECODER_STATE_FORMAT(): string | null;
    DECODER_STATE_FORMAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version of that layout, verbatim. Any disagreement restarts the job.
     */
    DECODER_STATE_VERSION(): string | null;
    DECODER_STATE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Byte length DECODER_STATE is expected to have. Carried even though the
     * vector knows its own size, so a size disagreement is detectable BEFORE the
     * image is loaded into a differently shaped struct.
     */
    DECODER_STATE_BYTE_LENGTH(): bigint;
    /**
     * SHA-256 of DECODER_STATE as 64 lowercase hexadecimal characters.
     */
    DECODER_STATE_SHA256(): string | null;
    DECODER_STATE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Build identifier of the decoder that produced DECODER_STATE, verbatim, so
     * two builds of one codec version are still distinguishable.
     */
    DECODER_BUILD_ID(): string | null;
    DECODER_BUILD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Media type of DECODER_STATE, so an unrelated decoder refuses it instead of
     * misreading it.
     */
    DECODER_STATE_MEDIA_TYPE(): string | null;
    DECODER_STATE_MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The decoder's history window at the seam — the bytes that ARE the codec's
     * back-reference dictionary. Carried separately from DECODER_STATE because it
     * is bulk data of a size the codec fixes, not part of the struct image.
     */
    WINDOW(index: number): number | null;
    windowLength(): number;
    windowArray(): Uint8Array | null;
    /**
     * Byte length WINDOW is expected to have, for the same detect-before-load
     * reason as DECODER_STATE_BYTE_LENGTH.
     */
    WINDOW_BYTE_LENGTH(): bigint;
    /**
     * Offset into WINDOW at which the codec will next write, when the window is
     * a circular buffer whose contents cannot be interpreted without it.
     */
    WINDOW_POSITION(): bigint;
    /**
     * The bytes of the record that straddles the seam: everything the previous
     * chunk decoded of a record it could not finish. A resuming decoder prepends
     * these to the next chunk's decoded output before parsing. Carried as bytes,
     * not text, because a seam may fall inside a multi-byte character.
     */
    PARTIAL_RECORD(index: number): number | null;
    partialRecordLength(): number;
    partialRecordArray(): Uint8Array | null;
    static startIRMDecodeContext(builder: flatbuffers.Builder): void;
    static addFormat(builder: flatbuffers.Builder, FORMATOffset: flatbuffers.Offset): void;
    static addHeaderLine(builder: flatbuffers.Builder, HEADER_LINEOffset: flatbuffers.Offset): void;
    static addHeaderByteLength(builder: flatbuffers.Builder, HEADER_BYTE_LENGTH: bigint): void;
    static addColumnNames(builder: flatbuffers.Builder, COLUMN_NAMESOffset: flatbuffers.Offset): void;
    static createColumnNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startColumnNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDelimiter(builder: flatbuffers.Builder, DELIMITEROffset: flatbuffers.Offset): void;
    static addQuote(builder: flatbuffers.Builder, QUOTEOffset: flatbuffers.Offset): void;
    static addEscape(builder: flatbuffers.Builder, ESCAPEOffset: flatbuffers.Offset): void;
    static addLineTerminator(builder: flatbuffers.Builder, LINE_TERMINATOROffset: flatbuffers.Offset): void;
    static addCharset(builder: flatbuffers.Builder, CHARSETOffset: flatbuffers.Offset): void;
    static addCompression(builder: flatbuffers.Builder, COMPRESSIONOffset: flatbuffers.Offset): void;
    static addDecodedOffset(builder: flatbuffers.Builder, DECODED_OFFSET: bigint): void;
    static addDecoderState(builder: flatbuffers.Builder, DECODER_STATEOffset: flatbuffers.Offset): void;
    static createDecoderStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDecoderStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDecoderStateFormat(builder: flatbuffers.Builder, DECODER_STATE_FORMATOffset: flatbuffers.Offset): void;
    static addDecoderStateVersion(builder: flatbuffers.Builder, DECODER_STATE_VERSIONOffset: flatbuffers.Offset): void;
    static addDecoderStateByteLength(builder: flatbuffers.Builder, DECODER_STATE_BYTE_LENGTH: bigint): void;
    static addDecoderStateSha256(builder: flatbuffers.Builder, DECODER_STATE_SHA256Offset: flatbuffers.Offset): void;
    static addDecoderBuildId(builder: flatbuffers.Builder, DECODER_BUILD_IDOffset: flatbuffers.Offset): void;
    static addDecoderStateMediaType(builder: flatbuffers.Builder, DECODER_STATE_MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addWindow(builder: flatbuffers.Builder, WINDOWOffset: flatbuffers.Offset): void;
    static createWindowVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWindowVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWindowByteLength(builder: flatbuffers.Builder, WINDOW_BYTE_LENGTH: bigint): void;
    static addWindowPosition(builder: flatbuffers.Builder, WINDOW_POSITION: bigint): void;
    static addPartialRecord(builder: flatbuffers.Builder, PARTIAL_RECORDOffset: flatbuffers.Offset): void;
    static createPartialRecordVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPartialRecordVector(builder: flatbuffers.Builder, numElems: number): void;
    static endIRMDecodeContext(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIRMDecodeContext(builder: flatbuffers.Builder, FORMATOffset: flatbuffers.Offset, HEADER_LINEOffset: flatbuffers.Offset, HEADER_BYTE_LENGTH: bigint, COLUMN_NAMESOffset: flatbuffers.Offset, DELIMITEROffset: flatbuffers.Offset, QUOTEOffset: flatbuffers.Offset, ESCAPEOffset: flatbuffers.Offset, LINE_TERMINATOROffset: flatbuffers.Offset, CHARSETOffset: flatbuffers.Offset, COMPRESSIONOffset: flatbuffers.Offset, DECODED_OFFSET: bigint, DECODER_STATEOffset: flatbuffers.Offset, DECODER_STATE_FORMATOffset: flatbuffers.Offset, DECODER_STATE_VERSIONOffset: flatbuffers.Offset, DECODER_STATE_BYTE_LENGTH: bigint, DECODER_STATE_SHA256Offset: flatbuffers.Offset, DECODER_BUILD_IDOffset: flatbuffers.Offset, DECODER_STATE_MEDIA_TYPEOffset: flatbuffers.Offset, WINDOWOffset: flatbuffers.Offset, WINDOW_BYTE_LENGTH: bigint, WINDOW_POSITION: bigint, PARTIAL_RECORDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IRMDecodeContextT;
    unpackTo(_o: IRMDecodeContextT): void;
}
export declare class IRMDecodeContextT implements flatbuffers.IGeneratedObject {
    FORMAT: string | Uint8Array | null;
    HEADER_LINE: string | Uint8Array | null;
    HEADER_BYTE_LENGTH: bigint;
    COLUMN_NAMES: (string)[];
    DELIMITER: string | Uint8Array | null;
    QUOTE: string | Uint8Array | null;
    ESCAPE: string | Uint8Array | null;
    LINE_TERMINATOR: string | Uint8Array | null;
    CHARSET: string | Uint8Array | null;
    COMPRESSION: string | Uint8Array | null;
    DECODED_OFFSET: bigint;
    DECODER_STATE: (number)[];
    DECODER_STATE_FORMAT: string | Uint8Array | null;
    DECODER_STATE_VERSION: string | Uint8Array | null;
    DECODER_STATE_BYTE_LENGTH: bigint;
    DECODER_STATE_SHA256: string | Uint8Array | null;
    DECODER_BUILD_ID: string | Uint8Array | null;
    DECODER_STATE_MEDIA_TYPE: string | Uint8Array | null;
    WINDOW: (number)[];
    WINDOW_BYTE_LENGTH: bigint;
    WINDOW_POSITION: bigint;
    PARTIAL_RECORD: (number)[];
    constructor(FORMAT?: string | Uint8Array | null, HEADER_LINE?: string | Uint8Array | null, HEADER_BYTE_LENGTH?: bigint, COLUMN_NAMES?: (string)[], DELIMITER?: string | Uint8Array | null, QUOTE?: string | Uint8Array | null, ESCAPE?: string | Uint8Array | null, LINE_TERMINATOR?: string | Uint8Array | null, CHARSET?: string | Uint8Array | null, COMPRESSION?: string | Uint8Array | null, DECODED_OFFSET?: bigint, DECODER_STATE?: (number)[], DECODER_STATE_FORMAT?: string | Uint8Array | null, DECODER_STATE_VERSION?: string | Uint8Array | null, DECODER_STATE_BYTE_LENGTH?: bigint, DECODER_STATE_SHA256?: string | Uint8Array | null, DECODER_BUILD_ID?: string | Uint8Array | null, DECODER_STATE_MEDIA_TYPE?: string | Uint8Array | null, WINDOW?: (number)[], WINDOW_BYTE_LENGTH?: bigint, WINDOW_POSITION?: bigint, PARTIAL_RECORD?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IRMDecodeContext.d.ts.map