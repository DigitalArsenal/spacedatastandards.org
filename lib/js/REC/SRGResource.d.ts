import * as flatbuffers from 'flatbuffers';
import { DataCoverage, DataCoverageT } from './DataCoverage.js';
/**
 * One retrievable resource of a provider: a file or an endpoint that
 * returns one document.
 */
export declare class SRGResource implements flatbuffers.IUnpackableObject<SRGResourceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRGResource;
    static getRootAsSRGResource(bb: flatbuffers.ByteBuffer, obj?: SRGResource): SRGResource;
    static getSizePrefixedRootAsSRGResource(bb: flatbuffers.ByteBuffer, obj?: SRGResource): SRGResource;
    /**
     * SOURCE_ID of the provider the resource belongs to.
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the resource within its provider, stable across
     * discoveries (normally the file name), e.g. "ISS.OEM_J2K_EPH.txt".
     */
    RESOURCE_ID(): string | null;
    RESOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Absolute URL the resource is fetched from; it lies inside one of the
     * provider's ORIGINS. Never carries credentials.
     */
    URL(): string | null;
    URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Format token of the resource; empty = the provider's FORMAT.
     */
    FORMAT(): string | null;
    FORMAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * What the resource covers (objects, regions, time span), when the
     * provider states it or discovery can tell; absent = not known.
     */
    COVERAGE(obj?: DataCoverage): DataCoverage | null;
    /**
     * Size of the resource in bytes when the listing states it; 0 = unknown.
     */
    BYTE_LENGTH(): bigint;
    /**
     * Unix milliseconds the provider last modified the resource, when the
     * listing states it; 0 = unknown.
     */
    MODIFIED_AT_MS(): bigint;
    /**
     * Unix milliseconds the resource was discovered; 0 = unknown.
     */
    DISCOVERED_AT_MS(): bigint;
    static startSRGResource(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addResourceId(builder: flatbuffers.Builder, RESOURCE_IDOffset: flatbuffers.Offset): void;
    static addUrl(builder: flatbuffers.Builder, URLOffset: flatbuffers.Offset): void;
    static addFormat(builder: flatbuffers.Builder, FORMATOffset: flatbuffers.Offset): void;
    static addCoverage(builder: flatbuffers.Builder, COVERAGEOffset: flatbuffers.Offset): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addModifiedAtMs(builder: flatbuffers.Builder, MODIFIED_AT_MS: bigint): void;
    static addDiscoveredAtMs(builder: flatbuffers.Builder, DISCOVERED_AT_MS: bigint): void;
    static endSRGResource(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SRGResourceT;
    unpackTo(_o: SRGResourceT): void;
}
export declare class SRGResourceT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    RESOURCE_ID: string | Uint8Array | null;
    URL: string | Uint8Array | null;
    FORMAT: string | Uint8Array | null;
    COVERAGE: DataCoverageT | null;
    BYTE_LENGTH: bigint;
    MODIFIED_AT_MS: bigint;
    DISCOVERED_AT_MS: bigint;
    constructor(SOURCE_ID?: string | Uint8Array | null, RESOURCE_ID?: string | Uint8Array | null, URL?: string | Uint8Array | null, FORMAT?: string | Uint8Array | null, COVERAGE?: DataCoverageT | null, BYTE_LENGTH?: bigint, MODIFIED_AT_MS?: bigint, DISCOVERED_AT_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRGResource.d.ts.map