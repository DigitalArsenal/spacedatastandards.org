import * as flatbuffers from 'flatbuffers';
import { filEntryKind } from './filEntryKind.js';
/**
 * One entry of a directory listing.
 */
export declare class FILEntry implements flatbuffers.IUnpackableObject<FILEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FILEntry;
    static getRootAsFILEntry(bb: flatbuffers.ByteBuffer, obj?: FILEntry): FILEntry;
    static getSizePrefixedRootAsFILEntry(bb: flatbuffers.ByteBuffer, obj?: FILEntry): FILEntry;
    /**
     * Entry name within the directory.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    KIND(): filEntryKind;
    /**
     * Size in bytes; 0 for a directory.
     */
    SIZE(): bigint;
    /**
     * Unix milliseconds of the last modification; 0 = unknown.
     */
    MODIFIED_AT_MS(): bigint;
    static startFILEntry(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: filEntryKind): void;
    static addSize(builder: flatbuffers.Builder, SIZE: bigint): void;
    static addModifiedAtMs(builder: flatbuffers.Builder, MODIFIED_AT_MS: bigint): void;
    static endFILEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFILEntry(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, KIND: filEntryKind, SIZE: bigint, MODIFIED_AT_MS: bigint): flatbuffers.Offset;
    unpack(): FILEntryT;
    unpackTo(_o: FILEntryT): void;
}
export declare class FILEntryT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    KIND: filEntryKind;
    SIZE: bigint;
    MODIFIED_AT_MS: bigint;
    constructor(NAME?: string | Uint8Array | null, KIND?: filEntryKind, SIZE?: bigint, MODIFIED_AT_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FILEntry.d.ts.map