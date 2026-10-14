import * as flatbuffers from 'flatbuffers';
export declare class PRWTleLines implements flatbuffers.IUnpackableObject<PRWTleLinesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWTleLines;
    static getRootAsPRWTleLines(bb: flatbuffers.ByteBuffer, obj?: PRWTleLines): PRWTleLines;
    static getSizePrefixedRootAsPRWTleLines(bb: flatbuffers.ByteBuffer, obj?: PRWTleLines): PRWTleLines;
    /**
     * TLE line 1 (69 characters).
     */
    LINE1(): string | null;
    LINE1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TLE line 2 (69 characters).
     */
    LINE2(): string | null;
    LINE2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite name (optional, line 0 of 3LE).
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD catalog number parsed from the TLE.
     */
    NORAD_ID(): number;
    static startPRWTleLines(builder: flatbuffers.Builder): void;
    static addLine1(builder: flatbuffers.Builder, LINE1Offset: flatbuffers.Offset): void;
    static addLine2(builder: flatbuffers.Builder, LINE2Offset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addNoradId(builder: flatbuffers.Builder, NORAD_ID: number): void;
    static endPRWTleLines(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWTleLines(builder: flatbuffers.Builder, LINE1Offset: flatbuffers.Offset, LINE2Offset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, NORAD_ID: number): flatbuffers.Offset;
    unpack(): PRWTleLinesT;
    unpackTo(_o: PRWTleLinesT): void;
}
export declare class PRWTleLinesT implements flatbuffers.IGeneratedObject {
    LINE1: string | Uint8Array | null;
    LINE2: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    NORAD_ID: number;
    constructor(LINE1?: string | Uint8Array | null, LINE2?: string | Uint8Array | null, NAME?: string | Uint8Array | null, NORAD_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWTleLines.d.ts.map