import * as flatbuffers from 'flatbuffers';
import { cnpMethod } from './cnpMethod.js';
/**
 * Where one metric came from and under what terms it may be republished.
 */
export declare class CNPProvenance implements flatbuffers.IUnpackableObject<CNPProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CNPProvenance;
    static getRootAsCNPProvenance(bb: flatbuffers.ByteBuffer, obj?: CNPProvenance): CNPProvenance;
    static getSizePrefixedRootAsCNPProvenance(bb: flatbuffers.ByteBuffer, obj?: CNPProvenance): CNPProvenance;
    /**
     * Name of the organization or programme publishing the underlying
     * measurements, carried verbatim as that publisher states it.
     */
    SOURCE(): string;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * URL of the dataset, endpoint or landing page.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dataset, table or API path queried, verbatim, e.g. a fully qualified
     * warehouse table name or a REST route.
     */
    SOURCE_DATASET(): string | null;
    SOURCE_DATASET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The exact query or request that produced these numbers, so the
     * aggregate can be replayed rather than trusted.
     */
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source's own identifier for the returned batch, when it issues one.
     */
    SOURCE_RECORD_ID(): string | null;
    SOURCE_RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the raw source bytes this aggregate was computed from,
     * lowercase hex.
     */
    SOURCE_SHA256(): string | null;
    SOURCE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC time the source was queried.
     */
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * How the underlying observations were produced.
     */
    METHOD(): cnpMethod;
    /**
     * Measurement server, vantage point or probe set, when the source names
     * one. A throughput number without a vantage is not comparable to one
     * with a different vantage.
     */
    MEASUREMENT_SERVER(): string | null;
    MEASUREMENT_SERVER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SPDX identifier when the source states one, otherwise the licence name
     * verbatim. EMPTY MEANS UNKNOWN TERMS — never public domain, and never a
     * grant to republish.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL of the licence text.
     */
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attribution string the licence requires this record and every derived
     * product to carry downstream.
     */
    ATTRIBUTION(): string | null;
    ATTRIBUTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the licence forbids commercial use (e.g. CC BY-NC 4.0). A
     * consumer building a paid surface MUST honour this flag; it is carried
     * per-source because one $CNP may mix a CC0 lane with a CC BY-NC
     * cross-check.
     */
    NON_COMMERCIAL_ONLY(): boolean;
    static startCNPProvenance(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceDataset(builder: flatbuffers.Builder, SOURCE_DATASETOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static addSourceRecordId(builder: flatbuffers.Builder, SOURCE_RECORD_IDOffset: flatbuffers.Offset): void;
    static addSourceSha256(builder: flatbuffers.Builder, SOURCE_SHA256Offset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: cnpMethod): void;
    static addMeasurementServer(builder: flatbuffers.Builder, MEASUREMENT_SERVEROffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static addAttribution(builder: flatbuffers.Builder, ATTRIBUTIONOffset: flatbuffers.Offset): void;
    static addNonCommercialOnly(builder: flatbuffers.Builder, NON_COMMERCIAL_ONLY: boolean): void;
    static endCNPProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCNPProvenance(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_DATASETOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, SOURCE_RECORD_IDOffset: flatbuffers.Offset, SOURCE_SHA256Offset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, METHOD: cnpMethod, MEASUREMENT_SERVEROffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, LICENSE_URLOffset: flatbuffers.Offset, ATTRIBUTIONOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean): flatbuffers.Offset;
    unpack(): CNPProvenanceT;
    unpackTo(_o: CNPProvenanceT): void;
}
export declare class CNPProvenanceT implements flatbuffers.IGeneratedObject {
    SOURCE: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_DATASET: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    SOURCE_RECORD_ID: string | Uint8Array | null;
    SOURCE_SHA256: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    METHOD: cnpMethod;
    MEASUREMENT_SERVER: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    LICENSE_URL: string | Uint8Array | null;
    ATTRIBUTION: string | Uint8Array | null;
    NON_COMMERCIAL_ONLY: boolean;
    constructor(SOURCE?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_DATASET?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, SOURCE_RECORD_ID?: string | Uint8Array | null, SOURCE_SHA256?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, METHOD?: cnpMethod, MEASUREMENT_SERVER?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, LICENSE_URL?: string | Uint8Array | null, ATTRIBUTION?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CNPProvenance.d.ts.map