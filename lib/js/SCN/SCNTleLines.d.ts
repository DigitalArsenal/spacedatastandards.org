import * as flatbuffers from 'flatbuffers';
/**
 * Raw TLE lines retained as import provenance for scenario setup.
 */
export declare class SCNTleLines implements flatbuffers.IUnpackableObject<SCNTleLinesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNTleLines;
    static getRootAsSCNTleLines(bb: flatbuffers.ByteBuffer, obj?: SCNTleLines): SCNTleLines;
    static getSizePrefixedRootAsSCNTleLines(bb: flatbuffers.ByteBuffer, obj?: SCNTleLines): SCNTleLines;
    LINE1(): string | null;
    LINE1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LINE2(): string | null;
    LINE2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSCNTleLines(builder: flatbuffers.Builder): void;
    static addLine1(builder: flatbuffers.Builder, LINE1Offset: flatbuffers.Offset): void;
    static addLine2(builder: flatbuffers.Builder, LINE2Offset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static endSCNTleLines(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNTleLines(builder: flatbuffers.Builder, LINE1Offset: flatbuffers.Offset, LINE2Offset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCNTleLinesT;
    unpackTo(_o: SCNTleLinesT): void;
}
export declare class SCNTleLinesT implements flatbuffers.IGeneratedObject {
    LINE1: string | Uint8Array | null;
    LINE2: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    constructor(LINE1?: string | Uint8Array | null, LINE2?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNTleLines.d.ts.map