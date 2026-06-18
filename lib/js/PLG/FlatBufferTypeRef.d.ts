import * as flatbuffers from 'flatbuffers';
import { payloadWireFormat } from './payloadWireFormat.js';
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
    /**
     * Optional schema hash bytes for stronger compatibility checks.
     */
    SCHEMA_HASH(index: number): number | null;
    schemaHashLength(): number;
    schemaHashArray(): Uint8Array | null;
    /**
     * True when this port/type set accepts any FlatBuffer frame.
     */
    ACCEPTS_ANY_FLATBUFFER(): boolean;
    /**
     * Logical wire format for this accepted type.
     */
    WIRE_FORMAT(): payloadWireFormat;
    /**
     * Fixed string length for aligned-binary string fields, when applicable.
     */
    FIXED_STRING_LENGTH(): number;
    /**
     * Byte length for fixed-size aligned-binary records, when applicable.
     */
    BYTE_LENGTH(): number;
    /**
     * Required start alignment for aligned-binary records, when applicable.
     */
    REQUIRED_ALIGNMENT(): number;
    static startFlatBufferTypeRef(builder: flatbuffers.Builder): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addFileIdentifier(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset): void;
    static addSchemaVersion(builder: flatbuffers.Builder, SCHEMA_VERSIONOffset: flatbuffers.Offset): void;
    static addRootType(builder: flatbuffers.Builder, ROOT_TYPEOffset: flatbuffers.Offset): void;
    static addSchemaHash(builder: flatbuffers.Builder, SCHEMA_HASHOffset: flatbuffers.Offset): void;
    static createSchemaHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSchemaHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAcceptsAnyFlatbuffer(builder: flatbuffers.Builder, ACCEPTS_ANY_FLATBUFFER: boolean): void;
    static addWireFormat(builder: flatbuffers.Builder, WIRE_FORMAT: payloadWireFormat): void;
    static addFixedStringLength(builder: flatbuffers.Builder, FIXED_STRING_LENGTH: number): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: number): void;
    static addRequiredAlignment(builder: flatbuffers.Builder, REQUIRED_ALIGNMENT: number): void;
    static endFlatBufferTypeRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFlatBufferTypeRef(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset, FILE_IDENTIFIEROffset: flatbuffers.Offset, SCHEMA_VERSIONOffset: flatbuffers.Offset, ROOT_TYPEOffset: flatbuffers.Offset, SCHEMA_HASHOffset: flatbuffers.Offset, ACCEPTS_ANY_FLATBUFFER: boolean, WIRE_FORMAT: payloadWireFormat, FIXED_STRING_LENGTH: number, BYTE_LENGTH: number, REQUIRED_ALIGNMENT: number): flatbuffers.Offset;
    unpack(): FlatBufferTypeRefT;
    unpackTo(_o: FlatBufferTypeRefT): void;
}
export declare class FlatBufferTypeRefT implements flatbuffers.IGeneratedObject {
    SCHEMA_NAME: string | Uint8Array | null;
    FILE_IDENTIFIER: string | Uint8Array | null;
    SCHEMA_VERSION: string | Uint8Array | null;
    ROOT_TYPE: string | Uint8Array | null;
    SCHEMA_HASH: (number)[];
    ACCEPTS_ANY_FLATBUFFER: boolean;
    WIRE_FORMAT: payloadWireFormat;
    FIXED_STRING_LENGTH: number;
    BYTE_LENGTH: number;
    REQUIRED_ALIGNMENT: number;
    constructor(SCHEMA_NAME?: string | Uint8Array | null, FILE_IDENTIFIER?: string | Uint8Array | null, SCHEMA_VERSION?: string | Uint8Array | null, ROOT_TYPE?: string | Uint8Array | null, SCHEMA_HASH?: (number)[], ACCEPTS_ANY_FLATBUFFER?: boolean, WIRE_FORMAT?: payloadWireFormat, FIXED_STRING_LENGTH?: number, BYTE_LENGTH?: number, REQUIRED_ALIGNMENT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FlatBufferTypeRef.d.ts.map