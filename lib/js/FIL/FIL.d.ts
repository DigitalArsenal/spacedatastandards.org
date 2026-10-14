import * as flatbuffers from 'flatbuffers';
import { FILEntry, FILEntryT } from './FILEntry.js';
import { filDigestAlgorithm } from './filDigestAlgorithm.js';
import { filEntryKind } from './filEntryKind.js';
/**
 * File - a file, its description and, when being moved, its content.
 */
export declare class FIL implements flatbuffers.IUnpackableObject<FILT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FIL;
    static getRootAsFIL(bb: flatbuffers.ByteBuffer, obj?: FIL): FIL;
    static getSizePrefixedRootAsFIL(bb: flatbuffers.ByteBuffer, obj?: FIL): FIL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Path of the file as the system holding it names it (relative paths are
     * relative to that system's root for the caller).
     */
    PATH(): string | null;
    PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File name (the last element of PATH), for display.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    KIND(): filEntryKind;
    /**
     * Media type, e.g. "text/csv", "application/octet-stream".
     */
    MEDIA_TYPE(): string | null;
    MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Size of the file in bytes.
     */
    SIZE(): bigint;
    /**
     * Unix milliseconds of creation; 0 = unknown.
     */
    CREATED_AT_MS(): bigint;
    /**
     * Unix milliseconds of the last modification; 0 = unknown.
     */
    MODIFIED_AT_MS(): bigint;
    /**
     * Digest of the content.
     */
    DIGEST_ALGORITHM(): filDigestAlgorithm;
    DIGEST(index: number): number | null;
    digestLength(): number;
    digestArray(): Uint8Array | null;
    /**
     * The content verbatim; empty when only the description travels.
     */
    CONTENT(index: number): number | null;
    contentLength(): number;
    contentArray(): Uint8Array | null;
    /**
     * Content was appended to the existing file rather than replacing it.
     */
    APPEND(): boolean;
    /**
     * Unix milliseconds when the content was written; set in the answer to a
     * write.
     */
    WRITTEN_AT_MS(): bigint;
    /**
     * Entries of a directory listing, sorted by NAME.
     */
    ENTRIES(index: number, obj?: FILEntry): FILEntry | null;
    entriesLength(): number;
    static startFIL(builder: flatbuffers.Builder): void;
    static addPath(builder: flatbuffers.Builder, PATHOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: filEntryKind): void;
    static addMediaType(builder: flatbuffers.Builder, MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addSize(builder: flatbuffers.Builder, SIZE: bigint): void;
    static addCreatedAtMs(builder: flatbuffers.Builder, CREATED_AT_MS: bigint): void;
    static addModifiedAtMs(builder: flatbuffers.Builder, MODIFIED_AT_MS: bigint): void;
    static addDigestAlgorithm(builder: flatbuffers.Builder, DIGEST_ALGORITHM: filDigestAlgorithm): void;
    static addDigest(builder: flatbuffers.Builder, DIGESTOffset: flatbuffers.Offset): void;
    static createDigestVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDigestVector(builder: flatbuffers.Builder, numElems: number): void;
    static addContent(builder: flatbuffers.Builder, CONTENTOffset: flatbuffers.Offset): void;
    static createContentVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startContentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAppend(builder: flatbuffers.Builder, APPEND: boolean): void;
    static addWrittenAtMs(builder: flatbuffers.Builder, WRITTEN_AT_MS: bigint): void;
    static addEntries(builder: flatbuffers.Builder, ENTRIESOffset: flatbuffers.Offset): void;
    static createEntriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEntriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFIL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFILBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFILBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createFIL(builder: flatbuffers.Builder, PATHOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, KIND: filEntryKind, MEDIA_TYPEOffset: flatbuffers.Offset, SIZE: bigint, CREATED_AT_MS: bigint, MODIFIED_AT_MS: bigint, DIGEST_ALGORITHM: filDigestAlgorithm, DIGESTOffset: flatbuffers.Offset, CONTENTOffset: flatbuffers.Offset, APPEND: boolean, WRITTEN_AT_MS: bigint, ENTRIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FILT;
    unpackTo(_o: FILT): void;
}
export declare class FILT implements flatbuffers.IGeneratedObject {
    PATH: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    KIND: filEntryKind;
    MEDIA_TYPE: string | Uint8Array | null;
    SIZE: bigint;
    CREATED_AT_MS: bigint;
    MODIFIED_AT_MS: bigint;
    DIGEST_ALGORITHM: filDigestAlgorithm;
    DIGEST: (number)[];
    CONTENT: (number)[];
    APPEND: boolean;
    WRITTEN_AT_MS: bigint;
    ENTRIES: (FILEntryT)[];
    constructor(PATH?: string | Uint8Array | null, NAME?: string | Uint8Array | null, KIND?: filEntryKind, MEDIA_TYPE?: string | Uint8Array | null, SIZE?: bigint, CREATED_AT_MS?: bigint, MODIFIED_AT_MS?: bigint, DIGEST_ALGORITHM?: filDigestAlgorithm, DIGEST?: (number)[], CONTENT?: (number)[], APPEND?: boolean, WRITTEN_AT_MS?: bigint, ENTRIES?: (FILEntryT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FIL.d.ts.map