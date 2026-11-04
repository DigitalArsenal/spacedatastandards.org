import * as flatbuffers from 'flatbuffers';
import { NCD, NCDT } from './NCD.js';
/**
 * Native container bytes wholly inside the FlatBuffer; not an NCD trailer.
 */
export declare class PRWNativeInput implements flatbuffers.IUnpackableObject<PRWNativeInputT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWNativeInput;
    static getRootAsPRWNativeInput(bb: flatbuffers.ByteBuffer, obj?: PRWNativeInput): PRWNativeInput;
    static getSizePrefixedRootAsPRWNativeInput(bb: flatbuffers.ByteBuffer, obj?: PRWNativeInput): PRWNativeInput;
    DESCRIPTOR(obj?: NCD): NCD | null;
    /**
     * Exactly DESCRIPTOR.SOURCE_BYTE_LENGTH bytes; verify declared hash.
     */
    CONTENT(index: number): number | null;
    contentLength(): number;
    contentArray(): Uint8Array;
    static startPRWNativeInput(builder: flatbuffers.Builder): void;
    static addDescriptor(builder: flatbuffers.Builder, DESCRIPTOROffset: flatbuffers.Offset): void;
    static addContent(builder: flatbuffers.Builder, CONTENTOffset: flatbuffers.Offset): void;
    static createContentVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startContentVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWNativeInput(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWNativeInput(builder: flatbuffers.Builder, DESCRIPTOROffset: flatbuffers.Offset, CONTENTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWNativeInputT;
    unpackTo(_o: PRWNativeInputT): void;
}
export declare class PRWNativeInputT implements flatbuffers.IGeneratedObject {
    DESCRIPTOR: NCDT | null;
    CONTENT: (number)[];
    constructor(DESCRIPTOR?: NCDT | null, CONTENT?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWNativeInput.d.ts.map