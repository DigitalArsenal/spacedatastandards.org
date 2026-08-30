import * as flatbuffers from 'flatbuffers';
import { PCEParameterDescriptor, PCEParameterDescriptorT } from './PCEParameterDescriptor.js';
/**
 * The roster a named publisher offers, resolved as a whole. A consumer
 * caches this and resolves every later name against it.
 */
export declare class PCEParameterCatalog implements flatbuffers.IUnpackableObject<PCEParameterCatalogT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEParameterCatalog;
    static getRootAsPCEParameterCatalog(bb: flatbuffers.ByteBuffer, obj?: PCEParameterCatalog): PCEParameterCatalog;
    static getSizePrefixedRootAsPCEParameterCatalog(bb: flatbuffers.ByteBuffer, obj?: PCEParameterCatalog): PCEParameterCatalog;
    /**
     * Identifier of the catalog itself.
     */
    CATALOG_ID(): string | null;
    CATALOG_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the publisher that evaluates these parameters.
     */
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 instant this catalog was published.
     */
    PUBLISHED_AT(): string | null;
    PUBLISHED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ENTRIES(index: number, obj?: PCEParameterDescriptor): PCEParameterDescriptor | null;
    entriesLength(): number;
    static startPCEParameterCatalog(builder: flatbuffers.Builder): void;
    static addCatalogId(builder: flatbuffers.Builder, CATALOG_IDOffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addPublishedAt(builder: flatbuffers.Builder, PUBLISHED_ATOffset: flatbuffers.Offset): void;
    static addEntries(builder: flatbuffers.Builder, ENTRIESOffset: flatbuffers.Offset): void;
    static createEntriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEntriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPCEParameterCatalog(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCEParameterCatalog(builder: flatbuffers.Builder, CATALOG_IDOffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset, PUBLISHED_ATOffset: flatbuffers.Offset, ENTRIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCEParameterCatalogT;
    unpackTo(_o: PCEParameterCatalogT): void;
}
export declare class PCEParameterCatalogT implements flatbuffers.IGeneratedObject {
    CATALOG_ID: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    PUBLISHED_AT: string | Uint8Array | null;
    ENTRIES: (PCEParameterDescriptorT)[];
    constructor(CATALOG_ID?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, PUBLISHED_AT?: string | Uint8Array | null, ENTRIES?: (PCEParameterDescriptorT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEParameterCatalog.d.ts.map