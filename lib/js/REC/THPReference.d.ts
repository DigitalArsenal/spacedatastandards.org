import * as flatbuffers from 'flatbuffers';
/**
 * Typed reference to an existing SDS record without duplicating its fields.
 */
export declare class THPReference implements flatbuffers.IUnpackableObject<THPReferenceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): THPReference;
    static getRootAsTHPReference(bb: flatbuffers.ByteBuffer, obj?: THPReference): THPReference;
    static getSizePrefixedRootAsTHPReference(bb: flatbuffers.ByteBuffer, obj?: THPReference): THPReference;
    /**
     * Four-character SDS file identifier including "$", e.g. "$OMM", "$RFB", "$SIT".
     */
    SCHEMA_FILE_ID(): string;
    SCHEMA_FILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Canonical identifier of the referenced record within that standard.
     */
    RECORD_ID(): string;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional catalog number when the referenced record targets a cataloged object.
     */
    NORAD_CAT_ID(): number;
    /**
     * Optional content identifier pinning exact immutable record bytes.
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Role of the referenced record in this threat profile (e.g. "PLATFORM", "EMITTER", "SITE").
     */
    ROLE(): string | null;
    ROLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTHPReference(builder: flatbuffers.Builder): void;
    static addSchemaFileId(builder: flatbuffers.Builder, SCHEMA_FILE_IDOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLEOffset: flatbuffers.Offset): void;
    static endTHPReference(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTHPReference(builder: flatbuffers.Builder, SCHEMA_FILE_IDOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, CIDOffset: flatbuffers.Offset, ROLEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): THPReferenceT;
    unpackTo(_o: THPReferenceT): void;
}
export declare class THPReferenceT implements flatbuffers.IGeneratedObject {
    SCHEMA_FILE_ID: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    CID: string | Uint8Array | null;
    ROLE: string | Uint8Array | null;
    constructor(SCHEMA_FILE_ID?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, CID?: string | Uint8Array | null, ROLE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=THPReference.d.ts.map