import * as flatbuffers from 'flatbuffers';
import { fmbDictKind } from './fmbDictKind.js';
/**
 * A dictionary entry first used by this round.
 */
export declare class FMBEntry implements flatbuffers.IUnpackableObject<FMBEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMBEntry;
    static getRootAsFMBEntry(bb: flatbuffers.ByteBuffer, obj?: FMBEntry): FMBEntry;
    static getSizePrefixedRootAsFMBEntry(bb: flatbuffers.ByteBuffer, obj?: FMBEntry): FMBEntry;
    KIND(): fmbDictKind;
    ID(): number;
    TEXT(index: number): string;
    TEXT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    textLength(): number;
    static startFMBEntry(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: fmbDictKind): void;
    static addId(builder: flatbuffers.Builder, ID: number): void;
    static addText(builder: flatbuffers.Builder, TEXTOffset: flatbuffers.Offset): void;
    static createTextVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTextVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFMBEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFMBEntry(builder: flatbuffers.Builder, KIND: fmbDictKind, ID: number, TEXTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FMBEntryT;
    unpackTo(_o: FMBEntryT): void;
}
export declare class FMBEntryT implements flatbuffers.IGeneratedObject {
    KIND: fmbDictKind;
    ID: number;
    TEXT: (string)[];
    constructor(KIND?: fmbDictKind, ID?: number, TEXT?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMBEntry.d.ts.map