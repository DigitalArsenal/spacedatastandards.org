import * as flatbuffers from 'flatbuffers';
/**
 * Entity / Standards Link — join-table row connecting a host-local entity
 * metadata record to a standards record index row, enabling cascade-safe
 * mutation and cross-plugin query ownership.
 */
export declare class ESL implements flatbuffers.IUnpackableObject<ESLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ESL;
    static getRootAsESL(bb: flatbuffers.ByteBuffer, obj?: ESL): ESL;
    static getSizePrefixedRootAsESL(bb: flatbuffers.ByteBuffer, obj?: ESL): ESL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable local link key for one entity / record association.
     */
    LINK_KEY(): string | null;
    LINK_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stable host-local entity id on the entity side of the association.
     */
    ENTITY_ID(): string | null;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stable local entity metadata record key (for example `ENTITY:<id>`).
     */
    ENTITY_RECORD_KEY(): string | null;
    ENTITY_RECORD_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FlatSQL row id for the linked entity metadata row when known.
     */
    ENTITY_ROWID(): number;
    /**
     * Stable local standards record key on the record side of the association.
     */
    RECORD_KEY(): string | null;
    RECORD_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SDS schema family for the linked record (`OMM`, `CAT`, `OEM`, `CDM`, etc.).
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FlatSQL row id for the linked standards record row when known.
     */
    RECORD_ROWID(): number;
    /**
     * Whether entity deletion should cascade to the linked standards record.
     */
    CASCADE_DELETE(): boolean;
    /**
     * Milliseconds since epoch when the association was last refreshed.
     */
    UPDATED_AT_MS(): number;
    /**
     * Reserved for forward-compatible growth.
     */
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startESL(builder: flatbuffers.Builder): void;
    static addLinkKey(builder: flatbuffers.Builder, LINK_KEYOffset: flatbuffers.Offset): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addEntityRecordKey(builder: flatbuffers.Builder, ENTITY_RECORD_KEYOffset: flatbuffers.Offset): void;
    static addEntityRowid(builder: flatbuffers.Builder, ENTITY_ROWID: number): void;
    static addRecordKey(builder: flatbuffers.Builder, RECORD_KEYOffset: flatbuffers.Offset): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addRecordRowid(builder: flatbuffers.Builder, RECORD_ROWID: number): void;
    static addCascadeDelete(builder: flatbuffers.Builder, CASCADE_DELETE: boolean): void;
    static addUpdatedAtMs(builder: flatbuffers.Builder, UPDATED_AT_MS: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endESL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishESLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedESLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createESL(builder: flatbuffers.Builder, LINK_KEYOffset: flatbuffers.Offset, ENTITY_IDOffset: flatbuffers.Offset, ENTITY_RECORD_KEYOffset: flatbuffers.Offset, ENTITY_ROWID: number, RECORD_KEYOffset: flatbuffers.Offset, SCHEMA_NAMEOffset: flatbuffers.Offset, RECORD_ROWID: number, CASCADE_DELETE: boolean, UPDATED_AT_MS: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ESLT;
    unpackTo(_o: ESLT): void;
}
export declare class ESLT implements flatbuffers.IGeneratedObject {
    LINK_KEY: string | Uint8Array | null;
    ENTITY_ID: string | Uint8Array | null;
    ENTITY_RECORD_KEY: string | Uint8Array | null;
    ENTITY_ROWID: number;
    RECORD_KEY: string | Uint8Array | null;
    SCHEMA_NAME: string | Uint8Array | null;
    RECORD_ROWID: number;
    CASCADE_DELETE: boolean;
    UPDATED_AT_MS: number;
    RESERVED: (number)[];
    constructor(LINK_KEY?: string | Uint8Array | null, ENTITY_ID?: string | Uint8Array | null, ENTITY_RECORD_KEY?: string | Uint8Array | null, ENTITY_ROWID?: number, RECORD_KEY?: string | Uint8Array | null, SCHEMA_NAME?: string | Uint8Array | null, RECORD_ROWID?: number, CASCADE_DELETE?: boolean, UPDATED_AT_MS?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ESL.d.ts.map