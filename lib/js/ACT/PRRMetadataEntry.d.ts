import * as flatbuffers from 'flatbuffers';
/**
 * String metadata key/value attached to a peer registry entry.
 */
export declare class PRRMetadataEntry implements flatbuffers.IUnpackableObject<PRRMetadataEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRRMetadataEntry;
    static getRootAsPRRMetadataEntry(bb: flatbuffers.ByteBuffer, obj?: PRRMetadataEntry): PRRMetadataEntry;
    static getSizePrefixedRootAsPRRMetadataEntry(bb: flatbuffers.ByteBuffer, obj?: PRRMetadataEntry): PRRMetadataEntry;
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
    static startPRRMetadataEntry(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endPRRMetadataEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRRMetadataEntry(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRRMetadataEntryT;
    unpackTo(_o: PRRMetadataEntryT): void;
}
export declare class PRRMetadataEntryT implements flatbuffers.IGeneratedObject {
    KEY: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(KEY?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRRMetadataEntry.d.ts.map