import * as flatbuffers from 'flatbuffers';
import { cqrDataOrigin } from './cqrDataOrigin.js';
/**
 * Host-resolved provenance. Strings are evidence, not commands to execute.
 */
export declare class CQRSourceProvenance implements flatbuffers.IUnpackableObject<CQRSourceProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRSourceProvenance;
    static getRootAsCQRSourceProvenance(bb: flatbuffers.ByteBuffer, obj?: CQRSourceProvenance): CQRSourceProvenance;
    static getSizePrefixedRootAsCQRSourceProvenance(bb: flatbuffers.ByteBuffer, obj?: CQRSourceProvenance): CQRSourceProvenance;
    ORIGIN_CLASS(): cqrDataOrigin;
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FILE_IDENTIFIER(): string | null;
    FILE_IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    QUERY(): string | null;
    QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    QUERY_HASH(): string | null;
    QUERY_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PNM_CID(): string | null;
    PNM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MANIFEST_CID(): string | null;
    MANIFEST_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TOPIC(): string | null;
    TOPIC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCQRSourceProvenance(builder: flatbuffers.Builder): void;
    static addOriginClass(builder: flatbuffers.Builder, ORIGIN_CLASS: cqrDataOrigin): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addFileIdentifier(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset): void;
    static addQuery(builder: flatbuffers.Builder, QUERYOffset: flatbuffers.Offset): void;
    static addQueryHash(builder: flatbuffers.Builder, QUERY_HASHOffset: flatbuffers.Offset): void;
    static addPnmCid(builder: flatbuffers.Builder, PNM_CIDOffset: flatbuffers.Offset): void;
    static addManifestCid(builder: flatbuffers.Builder, MANIFEST_CIDOffset: flatbuffers.Offset): void;
    static addTopic(builder: flatbuffers.Builder, TOPICOffset: flatbuffers.Offset): void;
    static endCQRSourceProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRSourceProvenance(builder: flatbuffers.Builder, ORIGIN_CLASS: cqrDataOrigin, SOURCE_IDOffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset, SCHEMA_NAMEOffset: flatbuffers.Offset, FILE_IDENTIFIEROffset: flatbuffers.Offset, QUERYOffset: flatbuffers.Offset, QUERY_HASHOffset: flatbuffers.Offset, PNM_CIDOffset: flatbuffers.Offset, MANIFEST_CIDOffset: flatbuffers.Offset, TOPICOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CQRSourceProvenanceT;
    unpackTo(_o: CQRSourceProvenanceT): void;
}
export declare class CQRSourceProvenanceT implements flatbuffers.IGeneratedObject {
    ORIGIN_CLASS: cqrDataOrigin;
    SOURCE_ID: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    SCHEMA_NAME: string | Uint8Array | null;
    FILE_IDENTIFIER: string | Uint8Array | null;
    QUERY: string | Uint8Array | null;
    QUERY_HASH: string | Uint8Array | null;
    PNM_CID: string | Uint8Array | null;
    MANIFEST_CID: string | Uint8Array | null;
    TOPIC: string | Uint8Array | null;
    constructor(ORIGIN_CLASS?: cqrDataOrigin, SOURCE_ID?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, SCHEMA_NAME?: string | Uint8Array | null, FILE_IDENTIFIER?: string | Uint8Array | null, QUERY?: string | Uint8Array | null, QUERY_HASH?: string | Uint8Array | null, PNM_CID?: string | Uint8Array | null, MANIFEST_CID?: string | Uint8Array | null, TOPIC?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRSourceProvenance.d.ts.map