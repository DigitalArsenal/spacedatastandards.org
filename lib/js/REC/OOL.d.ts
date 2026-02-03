import * as flatbuffers from 'flatbuffers';
/**
 * On-Orbit Object List
 */
export declare class OOL implements flatbuffers.IUnpackableObject<OOLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OOL;
    static getRootAsOOL(bb: flatbuffers.ByteBuffer, obj?: OOL): OOL;
    static getSizePrefixedRootAsOOL(bb: flatbuffers.ByteBuffer, obj?: OOL): OOL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ONORBITS(index: number): string;
    ONORBITS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    onorbitsLength(): number;
    static startOOL(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addOnorbits(builder: flatbuffers.Builder, ONORBITSOffset: flatbuffers.Offset): void;
    static createOnorbitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOnorbitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOOL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOOLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOOLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOOL(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, ONORBITSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OOLT;
    unpackTo(_o: OOLT): void;
}
export declare class OOLT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    ONORBITS: (string)[];
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, ONORBITS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OOL.d.ts.map