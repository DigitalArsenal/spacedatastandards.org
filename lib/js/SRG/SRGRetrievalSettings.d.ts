import * as flatbuffers from 'flatbuffers';
/**
 * Limits and choices a retriever runs under. A field left 0 or empty takes
 * the retriever's default.
 */
export declare class SRGRetrievalSettings implements flatbuffers.IUnpackableObject<SRGRetrievalSettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRGRetrievalSettings;
    static getRootAsSRGRetrievalSettings(bb: flatbuffers.ByteBuffer, obj?: SRGRetrievalSettings): SRGRetrievalSettings;
    static getSizePrefixedRootAsSRGRetrievalSettings(bb: flatbuffers.ByteBuffer, obj?: SRGRetrievalSettings): SRGRetrievalSettings;
    /**
     * True to retrieve on schedule; false leaves the retriever idle.
     */
    ENABLED(): boolean;
    /**
     * SOURCE_ID of the provider to retrieve from.
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Resources fetched per run at most.
     */
    MAX_RESOURCES(): number;
    /**
     * Largest single resource accepted, bytes; a larger one is refused, never
     * truncated.
     */
    MAX_BYTES(): bigint;
    /**
     * Time allowed for one request, milliseconds.
     */
    TIMEOUT_MS(): number;
    /**
     * Time allowed for one run, milliseconds.
     */
    MAX_RUNTIME_MS(): number;
    /**
     * Interval between discoveries, seconds (overrides the provider's
     * REFRESH_INTERVAL_S).
     */
    REFRESH_INTERVAL_S(): number;
    /**
     * Total bytes the retriever may store over its lifetime.
     */
    ARCHIVE_MAX_BYTES(): bigint;
    /**
     * Key of the credential in the host's credential store, resolved only at
     * retrieval time (as $ICN CREDENTIAL_REFERENCE). Never the secret itself.
     */
    CREDENTIAL_REFERENCE(): string | null;
    CREDENTIAL_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider API paths to read, for providers that expose several (absolute
     * paths without query strings, e.g. "/v2/ephemeris").
     */
    PATHS(index: number): string;
    PATHS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    pathsLength(): number;
    /**
     * Unix milliseconds of the retrieval epoch (selects dated products, e.g.
     * the GPS week); 0 = now.
     */
    EPOCH_MS(): bigint;
    static startSRGRetrievalSettings(builder: flatbuffers.Builder): void;
    static addEnabled(builder: flatbuffers.Builder, ENABLED: boolean): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addMaxResources(builder: flatbuffers.Builder, MAX_RESOURCES: number): void;
    static addMaxBytes(builder: flatbuffers.Builder, MAX_BYTES: bigint): void;
    static addTimeoutMs(builder: flatbuffers.Builder, TIMEOUT_MS: number): void;
    static addMaxRuntimeMs(builder: flatbuffers.Builder, MAX_RUNTIME_MS: number): void;
    static addRefreshIntervalS(builder: flatbuffers.Builder, REFRESH_INTERVAL_S: number): void;
    static addArchiveMaxBytes(builder: flatbuffers.Builder, ARCHIVE_MAX_BYTES: bigint): void;
    static addCredentialReference(builder: flatbuffers.Builder, CREDENTIAL_REFERENCEOffset: flatbuffers.Offset): void;
    static addPaths(builder: flatbuffers.Builder, PATHSOffset: flatbuffers.Offset): void;
    static createPathsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPathsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static endSRGRetrievalSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSRGRetrievalSettings(builder: flatbuffers.Builder, ENABLED: boolean, SOURCE_IDOffset: flatbuffers.Offset, MAX_RESOURCES: number, MAX_BYTES: bigint, TIMEOUT_MS: number, MAX_RUNTIME_MS: number, REFRESH_INTERVAL_S: number, ARCHIVE_MAX_BYTES: bigint, CREDENTIAL_REFERENCEOffset: flatbuffers.Offset, PATHSOffset: flatbuffers.Offset, EPOCH_MS: bigint): flatbuffers.Offset;
    unpack(): SRGRetrievalSettingsT;
    unpackTo(_o: SRGRetrievalSettingsT): void;
}
export declare class SRGRetrievalSettingsT implements flatbuffers.IGeneratedObject {
    ENABLED: boolean;
    SOURCE_ID: string | Uint8Array | null;
    MAX_RESOURCES: number;
    MAX_BYTES: bigint;
    TIMEOUT_MS: number;
    MAX_RUNTIME_MS: number;
    REFRESH_INTERVAL_S: number;
    ARCHIVE_MAX_BYTES: bigint;
    CREDENTIAL_REFERENCE: string | Uint8Array | null;
    PATHS: (string)[];
    EPOCH_MS: bigint;
    constructor(ENABLED?: boolean, SOURCE_ID?: string | Uint8Array | null, MAX_RESOURCES?: number, MAX_BYTES?: bigint, TIMEOUT_MS?: number, MAX_RUNTIME_MS?: number, REFRESH_INTERVAL_S?: number, ARCHIVE_MAX_BYTES?: bigint, CREDENTIAL_REFERENCE?: string | Uint8Array | null, PATHS?: (string)[], EPOCH_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRGRetrievalSettings.d.ts.map