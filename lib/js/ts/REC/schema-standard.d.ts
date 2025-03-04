import * as flatbuffers from 'flatbuffers';
/**
 * Schema Standard Definition
 */
export declare class SCHEMA_STANDARD implements flatbuffers.IUnpackableObject<SCHEMA_STANDARDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCHEMA_STANDARD;
    static getRootAsSCHEMA_STANDARD(bb: flatbuffers.ByteBuffer, obj?: SCHEMA_STANDARD): SCHEMA_STANDARD;
    static getSizePrefixedRootAsSCHEMA_STANDARD(bb: flatbuffers.ByteBuffer, obj?: SCHEMA_STANDARD): SCHEMA_STANDARD;
    /**
     * Unique identifier for the standard
     */
    key(): string | null;
    key(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IDL
     */
    idl(): string | null;
    idl(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * List Of File Paths
     */
    files(index: number): string;
    files(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    filesLength(): number;
    static startSCHEMA_STANDARD(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, keyOffset: flatbuffers.Offset): void;
    static addIdl(builder: flatbuffers.Builder, idlOffset: flatbuffers.Offset): void;
    static addFiles(builder: flatbuffers.Builder, filesOffset: flatbuffers.Offset): void;
    static createFilesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFilesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCHEMA_STANDARD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCHEMA_STANDARD(builder: flatbuffers.Builder, keyOffset: flatbuffers.Offset, idlOffset: flatbuffers.Offset, filesOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCHEMA_STANDARDT;
    unpackTo(_o: SCHEMA_STANDARDT): void;
}
export declare class SCHEMA_STANDARDT implements flatbuffers.IGeneratedObject {
    key: string | Uint8Array | null;
    idl: string | Uint8Array | null;
    files: (string)[];
    constructor(key?: string | Uint8Array | null, idl?: string | Uint8Array | null, files?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=schema-standard.d.ts.map