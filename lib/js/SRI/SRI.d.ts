import * as flatbuffers from 'flatbuffers';
/**
 * Standards Record Index — local wrapper for a standards payload's identity
 * and mutation metadata, participating in shared FlatSQL query and cascade
 * paths across plugins that read the same record universe.
 */
export declare class SRI implements flatbuffers.IUnpackableObject<SRIT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRI;
    static getRootAsSRI(bb: flatbuffers.ByteBuffer, obj?: SRI): SRI;
    static getSizePrefixedRootAsSRI(bb: flatbuffers.ByteBuffer, obj?: SRI): SRI;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable host-local record key for one standards payload.
     */
    RECORD_KEY(): string | null;
    RECORD_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SDS schema family for the record (`OMM`, `CAT`, `OEM`, `CDM`, etc.).
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attachment role when one standards message produces multiple entity records.
     */
    ROLE(): string | null;
    ROLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ingest path that registered this record (`stream-*`, `manual-api`, etc.).
     */
    ATTACHED_VIA(): string | null;
    ATTACHED_VIA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * High-level payload representation retained by the mutation registry.
     */
    PAYLOAD_KIND(): string | null;
    PAYLOAD_KIND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Milliseconds since epoch when the local mutation record was last refreshed.
     */
    UPDATED_AT_MS(): number;
    /**
     * Reserved for forward-compatible growth.
     */
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startSRI(builder: flatbuffers.Builder): void;
    static addRecordKey(builder: flatbuffers.Builder, RECORD_KEYOffset: flatbuffers.Offset): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLEOffset: flatbuffers.Offset): void;
    static addAttachedVia(builder: flatbuffers.Builder, ATTACHED_VIAOffset: flatbuffers.Offset): void;
    static addPayloadKind(builder: flatbuffers.Builder, PAYLOAD_KINDOffset: flatbuffers.Offset): void;
    static addUpdatedAtMs(builder: flatbuffers.Builder, UPDATED_AT_MS: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSRI(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSRIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSRIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSRI(builder: flatbuffers.Builder, RECORD_KEYOffset: flatbuffers.Offset, SCHEMA_NAMEOffset: flatbuffers.Offset, ROLEOffset: flatbuffers.Offset, ATTACHED_VIAOffset: flatbuffers.Offset, PAYLOAD_KINDOffset: flatbuffers.Offset, UPDATED_AT_MS: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SRIT;
    unpackTo(_o: SRIT): void;
}
export declare class SRIT implements flatbuffers.IGeneratedObject {
    RECORD_KEY: string | Uint8Array | null;
    SCHEMA_NAME: string | Uint8Array | null;
    ROLE: string | Uint8Array | null;
    ATTACHED_VIA: string | Uint8Array | null;
    PAYLOAD_KIND: string | Uint8Array | null;
    UPDATED_AT_MS: number;
    RESERVED: (number)[];
    constructor(RECORD_KEY?: string | Uint8Array | null, SCHEMA_NAME?: string | Uint8Array | null, ROLE?: string | Uint8Array | null, ATTACHED_VIA?: string | Uint8Array | null, PAYLOAD_KIND?: string | Uint8Array | null, UPDATED_AT_MS?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRI.d.ts.map