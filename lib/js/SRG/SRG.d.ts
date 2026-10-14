import * as flatbuffers from 'flatbuffers';
import { SRGContentReceipt, SRGContentReceiptT } from './SRGContentReceipt.js';
import { SRGProvider, SRGProviderT } from './SRGProvider.js';
import { SRGResource, SRGResourceT } from './SRGResource.js';
import { SRGRetrievalSettings, SRGRetrievalSettingsT } from './SRGRetrievalSettings.js';
import { SRGRetrievalStatus, SRGRetrievalStatusT } from './SRGRetrievalStatus.js';
/**
 * Data Source Registry - providers, their resources, storage receipts and
 * retrieval progress.
 */
export declare class SRG implements flatbuffers.IUnpackableObject<SRGT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRG;
    static getRootAsSRG(bb: flatbuffers.ByteBuffer, obj?: SRG): SRG;
    static getSizePrefixedRootAsSRG(bb: flatbuffers.ByteBuffer, obj?: SRG): SRG;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the registry, e.g. a repository name or a node's registry
     * name; empty = not named.
     */
    REGISTRY_ID(): string | null;
    REGISTRY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Where the registry's provider list comes from, when it mirrors an
     * upstream list: the repository URL, the revision mirrored and the path of
     * the list inside it.
     */
    UPSTREAM_REPOSITORY(): string | null;
    UPSTREAM_REPOSITORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    UPSTREAM_REVISION(): string | null;
    UPSTREAM_REVISION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REGISTRY_PATH(): string | null;
    REGISTRY_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds this record was generated (for a discovery queue, the
     * time of discovery); 0 = not stated.
     */
    GENERATED_AT_MS(): bigint;
    PROVIDERS(index: number, obj?: SRGProvider): SRGProvider | null;
    providersLength(): number;
    /**
     * Resources, in retrieval order. A single job carries one.
     */
    RESOURCES(index: number, obj?: SRGResource): SRGResource | null;
    resourcesLength(): number;
    RECEIPTS(index: number, obj?: SRGContentReceipt): SRGContentReceipt | null;
    receiptsLength(): number;
    STATUS(obj?: SRGRetrievalStatus): SRGRetrievalStatus | null;
    SETTINGS(obj?: SRGRetrievalSettings): SRGRetrievalSettings | null;
    static startSRG(builder: flatbuffers.Builder): void;
    static addRegistryId(builder: flatbuffers.Builder, REGISTRY_IDOffset: flatbuffers.Offset): void;
    static addUpstreamRepository(builder: flatbuffers.Builder, UPSTREAM_REPOSITORYOffset: flatbuffers.Offset): void;
    static addUpstreamRevision(builder: flatbuffers.Builder, UPSTREAM_REVISIONOffset: flatbuffers.Offset): void;
    static addRegistryPath(builder: flatbuffers.Builder, REGISTRY_PATHOffset: flatbuffers.Offset): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static addProviders(builder: flatbuffers.Builder, PROVIDERSOffset: flatbuffers.Offset): void;
    static createProvidersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProvidersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResources(builder: flatbuffers.Builder, RESOURCESOffset: flatbuffers.Offset): void;
    static createResourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReceipts(builder: flatbuffers.Builder, RECEIPTSOffset: flatbuffers.Offset): void;
    static createReceiptsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReceiptsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static addSettings(builder: flatbuffers.Builder, SETTINGSOffset: flatbuffers.Offset): void;
    static endSRG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSRGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSRGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SRGT;
    unpackTo(_o: SRGT): void;
}
export declare class SRGT implements flatbuffers.IGeneratedObject {
    REGISTRY_ID: string | Uint8Array | null;
    UPSTREAM_REPOSITORY: string | Uint8Array | null;
    UPSTREAM_REVISION: string | Uint8Array | null;
    REGISTRY_PATH: string | Uint8Array | null;
    GENERATED_AT_MS: bigint;
    PROVIDERS: (SRGProviderT)[];
    RESOURCES: (SRGResourceT)[];
    RECEIPTS: (SRGContentReceiptT)[];
    STATUS: SRGRetrievalStatusT | null;
    SETTINGS: SRGRetrievalSettingsT | null;
    constructor(REGISTRY_ID?: string | Uint8Array | null, UPSTREAM_REPOSITORY?: string | Uint8Array | null, UPSTREAM_REVISION?: string | Uint8Array | null, REGISTRY_PATH?: string | Uint8Array | null, GENERATED_AT_MS?: bigint, PROVIDERS?: (SRGProviderT)[], RESOURCES?: (SRGResourceT)[], RECEIPTS?: (SRGContentReceiptT)[], STATUS?: SRGRetrievalStatusT | null, SETTINGS?: SRGRetrievalSettingsT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRG.d.ts.map