import * as flatbuffers from 'flatbuffers';
/**
 * Payload-schema identity for a stream frame or an accepted port type.
 */
export declare class FlatBufferTypeRef implements flatbuffers.IUnpackableObject<FlatBufferTypeRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FlatBufferTypeRef;
    static getRootAsFlatBufferTypeRef(bb: flatbuffers.ByteBuffer, obj?: FlatBufferTypeRef): FlatBufferTypeRef;
    static getSizePrefixedRootAsFlatBufferTypeRef(bb: flatbuffers.ByteBuffer, obj?: FlatBufferTypeRef): FlatBufferTypeRef;
    /**
     * Logical schema name (for example `OMM.fbs` or `OCM.fbs`).
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional 4-byte FlatBuffer file identifier.
     */
    FILE_IDENTIFIER(): string | null;
    FILE_IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional semver or schema revision string.
     */
    SCHEMA_VERSION(): string | null;
    SCHEMA_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional root type name within the schema.
     */
    ROOT_TYPE(): string | null;
    ROOT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startFlatBufferTypeRef(builder: flatbuffers.Builder): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addFileIdentifier(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset): void;
    static addSchemaVersion(builder: flatbuffers.Builder, SCHEMA_VERSIONOffset: flatbuffers.Offset): void;
    static addRootType(builder: flatbuffers.Builder, ROOT_TYPEOffset: flatbuffers.Offset): void;
    static endFlatBufferTypeRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFlatBufferTypeRef(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset, FILE_IDENTIFIEROffset: flatbuffers.Offset, SCHEMA_VERSIONOffset: flatbuffers.Offset, ROOT_TYPEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FlatBufferTypeRefT;
    unpackTo(_o: FlatBufferTypeRefT): void;
}
export declare class FlatBufferTypeRefT implements flatbuffers.IGeneratedObject {
    SCHEMA_NAME: string | Uint8Array | null;
    FILE_IDENTIFIER: string | Uint8Array | null;
    SCHEMA_VERSION: string | Uint8Array | null;
    ROOT_TYPE: string | Uint8Array | null;
    constructor(SCHEMA_NAME?: string | Uint8Array | null, FILE_IDENTIFIER?: string | Uint8Array | null, SCHEMA_VERSION?: string | Uint8Array | null, ROOT_TYPE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FlatBufferTypeRef.d.ts.map