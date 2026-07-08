import * as flatbuffers from 'flatbuffers';
/**
 * String metadata key/value attached to a peer group.
 */
export declare class PGMMetadataEntry implements flatbuffers.IUnpackableObject<PGMMetadataEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PGMMetadataEntry;
    static getRootAsPGMMetadataEntry(bb: flatbuffers.ByteBuffer, obj?: PGMMetadataEntry): PGMMetadataEntry;
    static getSizePrefixedRootAsPGMMetadataEntry(bb: flatbuffers.ByteBuffer, obj?: PGMMetadataEntry): PGMMetadataEntry;
    /**
     * Metadata key.
     */
    KEY(): string | null;
    KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Metadata value.
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPGMMetadataEntry(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endPGMMetadataEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPGMMetadataEntry(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PGMMetadataEntryT;
    unpackTo(_o: PGMMetadataEntryT): void;
}
export declare class PGMMetadataEntryT implements flatbuffers.IGeneratedObject {
    KEY: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(KEY?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PGMMetadataEntry.d.ts.map