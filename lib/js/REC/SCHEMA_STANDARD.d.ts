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
    /**
     * Human-readable name of the standard.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * One-paragraph description of the standard.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Four-character file identifier, e.g. "$OMM".
     */
    FILE_IDENTIFIER(): string | null;
    FILE_IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Hash of the standard's schema text.
     */
    SCHEMA_HASH(): string | null;
    SCHEMA_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the reporting node routes the standard through its store.
     */
    ROUTED(): boolean;
    /**
     * Position of the standard in the record union; append-only forever.
     */
    RECORD_TYPE_ORDINAL(): number;
    static startSCHEMA_STANDARD(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, keyOffset: flatbuffers.Offset): void;
    static addIdl(builder: flatbuffers.Builder, idlOffset: flatbuffers.Offset): void;
    static addFiles(builder: flatbuffers.Builder, filesOffset: flatbuffers.Offset): void;
    static createFilesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFilesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addFileIdentifier(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset): void;
    static addSchemaHash(builder: flatbuffers.Builder, SCHEMA_HASHOffset: flatbuffers.Offset): void;
    static addRouted(builder: flatbuffers.Builder, ROUTED: boolean): void;
    static addRecordTypeOrdinal(builder: flatbuffers.Builder, RECORD_TYPE_ORDINAL: number): void;
    static endSCHEMA_STANDARD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCHEMA_STANDARD(builder: flatbuffers.Builder, keyOffset: flatbuffers.Offset, idlOffset: flatbuffers.Offset, filesOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, FILE_IDENTIFIEROffset: flatbuffers.Offset, SCHEMA_HASHOffset: flatbuffers.Offset, ROUTED: boolean, RECORD_TYPE_ORDINAL: number): flatbuffers.Offset;
    unpack(): SCHEMA_STANDARDT;
    unpackTo(_o: SCHEMA_STANDARDT): void;
}
export declare class SCHEMA_STANDARDT implements flatbuffers.IGeneratedObject {
    key: string | Uint8Array | null;
    idl: string | Uint8Array | null;
    files: (string)[];
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    FILE_IDENTIFIER: string | Uint8Array | null;
    SCHEMA_HASH: string | Uint8Array | null;
    ROUTED: boolean;
    RECORD_TYPE_ORDINAL: number;
    constructor(key?: string | Uint8Array | null, idl?: string | Uint8Array | null, files?: (string)[], NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, FILE_IDENTIFIER?: string | Uint8Array | null, SCHEMA_HASH?: string | Uint8Array | null, ROUTED?: boolean, RECORD_TYPE_ORDINAL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCHEMA_STANDARD.d.ts.map