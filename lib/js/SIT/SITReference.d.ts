import * as flatbuffers from 'flatbuffers';
import { sitReferenceRole } from './sitReferenceRole.js';
/**
 * A reference to another record about the site or a party.
 */
export declare class SITReference implements flatbuffers.IUnpackableObject<SITReferenceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SITReference;
    static getRootAsSITReference(bb: flatbuffers.ByteBuffer, obj?: SITReference): SITReference;
    static getSizePrefixedRootAsSITReference(bb: flatbuffers.ByteBuffer, obj?: SITReference): SITReference;
    /**
     * What the referenced record is
     */
    ROLE(): sitReferenceRole;
    /**
     * Publisher-stable, lowercase identifier of the registry in the provider's
     * register of sources (wikidata, geonames, enwiki, gem-gnpt, ror, us-nrc)
     */
    REGISTRY(): string | null;
    REGISTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The registry's identifier of the record
     */
    RECORD_ID(): string | null;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Where the record can be read
     */
    URL(): string | null;
    URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The record's title as the registry states it (for an encyclopedia, the
     * article title only, never its text)
     */
    TITLE(): string | null;
    TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Language of the record, BCP 47
     */
    LANGUAGE(): string | null;
    LANGUAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSITReference(builder: flatbuffers.Builder): void;
    static addRole(builder: flatbuffers.Builder, ROLE: sitReferenceRole): void;
    static addRegistry(builder: flatbuffers.Builder, REGISTRYOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addUrl(builder: flatbuffers.Builder, URLOffset: flatbuffers.Offset): void;
    static addTitle(builder: flatbuffers.Builder, TITLEOffset: flatbuffers.Offset): void;
    static addLanguage(builder: flatbuffers.Builder, LANGUAGEOffset: flatbuffers.Offset): void;
    static endSITReference(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSITReference(builder: flatbuffers.Builder, ROLE: sitReferenceRole, REGISTRYOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, URLOffset: flatbuffers.Offset, TITLEOffset: flatbuffers.Offset, LANGUAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SITReferenceT;
    unpackTo(_o: SITReferenceT): void;
}
export declare class SITReferenceT implements flatbuffers.IGeneratedObject {
    ROLE: sitReferenceRole;
    REGISTRY: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    URL: string | Uint8Array | null;
    TITLE: string | Uint8Array | null;
    LANGUAGE: string | Uint8Array | null;
    constructor(ROLE?: sitReferenceRole, REGISTRY?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, URL?: string | Uint8Array | null, TITLE?: string | Uint8Array | null, LANGUAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SITReference.d.ts.map