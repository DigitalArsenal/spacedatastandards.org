import * as flatbuffers from 'flatbuffers';
/**
 * Reference to a threat record, matrix bucket, or compound event addressed or introduced.
 */
export declare class DCOThreatRef implements flatbuffers.IUnpackableObject<DCOThreatRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DCOThreatRef;
    static getRootAsDCOThreatRef(bb: flatbuffers.ByteBuffer, obj?: DCOThreatRef): DCOThreatRef;
    static getSizePrefixedRootAsDCOThreatRef(bb: flatbuffers.ByteBuffer, obj?: DCOThreatRef): DCOThreatRef;
    /**
     * Four-character SDS file identifier including "$", e.g. "$TMX", "$CDM", "$RFL", "$RDE".
     */
    SCHEMA_FILE_ID(): string;
    SCHEMA_FILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Record identifier within the referenced standard.
     */
    RECORD_ID(): string;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional $TMX bucket identifier.
     */
    BUCKET_ID(): string | null;
    BUCKET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional $TMX compound event identifier.
     */
    COMPOUND_ID(): string | null;
    COMPOUND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional NORAD catalog number of the affected space object.
     */
    NORAD_CAT_ID(): number;
    static startDCOThreatRef(builder: flatbuffers.Builder): void;
    static addSchemaFileId(builder: flatbuffers.Builder, SCHEMA_FILE_IDOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addBucketId(builder: flatbuffers.Builder, BUCKET_IDOffset: flatbuffers.Offset): void;
    static addCompoundId(builder: flatbuffers.Builder, COMPOUND_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static endDCOThreatRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDCOThreatRef(builder: flatbuffers.Builder, SCHEMA_FILE_IDOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, BUCKET_IDOffset: flatbuffers.Offset, COMPOUND_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number): flatbuffers.Offset;
    unpack(): DCOThreatRefT;
    unpackTo(_o: DCOThreatRefT): void;
}
export declare class DCOThreatRefT implements flatbuffers.IGeneratedObject {
    SCHEMA_FILE_ID: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    BUCKET_ID: string | Uint8Array | null;
    COMPOUND_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    constructor(SCHEMA_FILE_ID?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, BUCKET_ID?: string | Uint8Array | null, COMPOUND_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DCOThreatRef.d.ts.map