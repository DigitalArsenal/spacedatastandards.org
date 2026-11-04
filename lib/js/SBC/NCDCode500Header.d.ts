import * as flatbuffers from 'flatbuffers';
/**
 * Header words of a fixed-record binary ephemeris container.
 */
export declare class NCDCode500Header implements flatbuffers.IUnpackableObject<NCDCode500HeaderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NCDCode500Header;
    static getRootAsNCDCode500Header(bb: flatbuffers.ByteBuffer, obj?: NCDCode500Header): NCDCode500Header;
    static getSizePrefixedRootAsNCDCode500Header(bb: flatbuffers.ByteBuffer, obj?: NCDCode500Header): NCDCode500Header;
    /**
     * Object name as recorded in the header.
     */
    SATELLITE_NAME(): string | null;
    SATELLITE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Container-internal tape or file identifier.
     */
    TAPE_ID(): string | null;
    TAPE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system indicator as recorded.
     */
    TIME_SYSTEM_INDICATOR(): string | null;
    TIME_SYSTEM_INDICATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coordinate system indicator as recorded.
     */
    COORDINATE_SYSTEM_INDICATOR(): number;
    /**
     * Coverage start, ISO 8601.
     */
    START_EPOCH(): string | null;
    START_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coverage stop, ISO 8601.
     */
    STOP_EPOCH(): string | null;
    STOP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uniform step between data records, seconds.
     */
    EPOCH_STEP_SECONDS(): number;
    /**
     * The header record's packed words in file order, undecoded. A reader that
     * understands a word decodes it; a rewriter reproduces the record exactly
     * without having to.
     */
    HEADER_WORDS(index: number): number | null;
    headerWordsLength(): number;
    headerWordsArray(): Float64Array | null;
    static startNCDCode500Header(builder: flatbuffers.Builder): void;
    static addSatelliteName(builder: flatbuffers.Builder, SATELLITE_NAMEOffset: flatbuffers.Offset): void;
    static addTapeId(builder: flatbuffers.Builder, TAPE_IDOffset: flatbuffers.Offset): void;
    static addTimeSystemIndicator(builder: flatbuffers.Builder, TIME_SYSTEM_INDICATOROffset: flatbuffers.Offset): void;
    static addCoordinateSystemIndicator(builder: flatbuffers.Builder, COORDINATE_SYSTEM_INDICATOR: number): void;
    static addStartEpoch(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset): void;
    static addStopEpoch(builder: flatbuffers.Builder, STOP_EPOCHOffset: flatbuffers.Offset): void;
    static addEpochStepSeconds(builder: flatbuffers.Builder, EPOCH_STEP_SECONDS: number): void;
    static addHeaderWords(builder: flatbuffers.Builder, HEADER_WORDSOffset: flatbuffers.Offset): void;
    static createHeaderWordsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createHeaderWordsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startHeaderWordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endNCDCode500Header(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNCDCode500Header(builder: flatbuffers.Builder, SATELLITE_NAMEOffset: flatbuffers.Offset, TAPE_IDOffset: flatbuffers.Offset, TIME_SYSTEM_INDICATOROffset: flatbuffers.Offset, COORDINATE_SYSTEM_INDICATOR: number, START_EPOCHOffset: flatbuffers.Offset, STOP_EPOCHOffset: flatbuffers.Offset, EPOCH_STEP_SECONDS: number, HEADER_WORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NCDCode500HeaderT;
    unpackTo(_o: NCDCode500HeaderT): void;
}
export declare class NCDCode500HeaderT implements flatbuffers.IGeneratedObject {
    SATELLITE_NAME: string | Uint8Array | null;
    TAPE_ID: string | Uint8Array | null;
    TIME_SYSTEM_INDICATOR: string | Uint8Array | null;
    COORDINATE_SYSTEM_INDICATOR: number;
    START_EPOCH: string | Uint8Array | null;
    STOP_EPOCH: string | Uint8Array | null;
    EPOCH_STEP_SECONDS: number;
    HEADER_WORDS: (number)[];
    constructor(SATELLITE_NAME?: string | Uint8Array | null, TAPE_ID?: string | Uint8Array | null, TIME_SYSTEM_INDICATOR?: string | Uint8Array | null, COORDINATE_SYSTEM_INDICATOR?: number, START_EPOCH?: string | Uint8Array | null, STOP_EPOCH?: string | Uint8Array | null, EPOCH_STEP_SECONDS?: number, HEADER_WORDS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NCDCode500Header.d.ts.map