import * as flatbuffers from 'flatbuffers';
import { ICN, ICNT } from './ICN.js';
/**
 * One data provider: a publisher a retriever may fetch from.
 */
export declare class SRGProvider implements flatbuffers.IUnpackableObject<SRGProviderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRGProvider;
    static getRootAsSRGProvider(bb: flatbuffers.ByteBuffer, obj?: SRGProvider): SRGProvider;
    static getSizePrefixedRootAsSRGProvider(bb: flatbuffers.ByteBuffer, obj?: SRGProvider): SRGProvider;
    /**
     * Stable identifier of the provider within the registry, lower-case, e.g.
     * "spacex-starlink", "iss", "gps-precise".
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display name, e.g. "NASA ISS".
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Organization that operates the provider, e.g. "NASA", "SES S.A.".
     */
    OPERATOR(): string | null;
    OPERATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Default format of the provider's resources, as a format token the
     * retriever and its parsers agree on, e.g. "ccsds-oem-kvn", "sp3-gzip",
     * "tle". A resource may state its own FORMAT. Containers with an SDS
     * format class are named by $NCD's container format.
     */
    FORMAT(): string | null;
    FORMAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Origins (scheme, host and optional port, no path, e.g.
     * "https://api.starlink.com") every resource URL of this provider must
     * start with. A URL outside these is refused. Empty = none allowed.
     */
    ORIGINS(index: number): string;
    ORIGINS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    originsLength(): number;
    /**
     * Interval at which the provider publishes new data, and so the shortest
     * useful interval between discoveries, seconds; 0 = not stated.
     */
    REFRESH_INTERVAL_S(): number;
    /**
     * True when retrieval needs credentials (an account, a token or a key).
     * The registry never carries the credentials themselves.
     */
    CREDENTIALED(): boolean;
    /**
     * Short description of what the provider publishes.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Home page or documentation of the provider's data.
     */
    INFO_URL(): string | null;
    INFO_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Licence under which the provider offers the data, and its URL.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The provider as configured as an ingest source on a node, when it is:
     * lifecycle, credential reference, polling and last-fetch figures.
     */
    CONNECTOR(obj?: ICN): ICN | null;
    static startSRGProvider(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addOperator(builder: flatbuffers.Builder, OPERATOROffset: flatbuffers.Offset): void;
    static addFormat(builder: flatbuffers.Builder, FORMATOffset: flatbuffers.Offset): void;
    static addOrigins(builder: flatbuffers.Builder, ORIGINSOffset: flatbuffers.Offset): void;
    static createOriginsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOriginsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRefreshIntervalS(builder: flatbuffers.Builder, REFRESH_INTERVAL_S: number): void;
    static addCredentialed(builder: flatbuffers.Builder, CREDENTIALED: boolean): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addInfoUrl(builder: flatbuffers.Builder, INFO_URLOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static addConnector(builder: flatbuffers.Builder, CONNECTOROffset: flatbuffers.Offset): void;
    static endSRGProvider(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SRGProviderT;
    unpackTo(_o: SRGProviderT): void;
}
export declare class SRGProviderT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    OPERATOR: string | Uint8Array | null;
    FORMAT: string | Uint8Array | null;
    ORIGINS: (string)[];
    REFRESH_INTERVAL_S: number;
    CREDENTIALED: boolean;
    DESCRIPTION: string | Uint8Array | null;
    INFO_URL: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    LICENSE_URL: string | Uint8Array | null;
    CONNECTOR: ICNT | null;
    constructor(SOURCE_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, OPERATOR?: string | Uint8Array | null, FORMAT?: string | Uint8Array | null, ORIGINS?: (string)[], REFRESH_INTERVAL_S?: number, CREDENTIALED?: boolean, DESCRIPTION?: string | Uint8Array | null, INFO_URL?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, LICENSE_URL?: string | Uint8Array | null, CONNECTOR?: ICNT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRGProvider.d.ts.map