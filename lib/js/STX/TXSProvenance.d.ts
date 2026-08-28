import * as flatbuffers from 'flatbuffers';
import { txsPositionAuthorityClass } from './txsPositionAuthorityClass.js';
/**
 * Replayable provenance for ONE source's report of ONE facility, emission, or
 * scheduled transmission.
 *
 * Every source consulted gets its own entry, including sources that returned
 * nothing, so a consumer can tell "not looked for" from "looked for and
 * returned nothing". Source identity is DATA: PROVIDER_ID and AUTHORITY carry
 * verbatim what that source states about itself.
 */
export declare class TXSProvenance implements flatbuffers.IUnpackableObject<TXSProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TXSProvenance;
    static getRootAsTXSProvenance(bb: flatbuffers.ByteBuffer, obj?: TXSProvenance): TXSProvenance;
    static getSizePrefixedRootAsTXSProvenance(bb: flatbuffers.ByteBuffer, obj?: TXSProvenance): TXSProvenance;
    /**
     * Publisher-stable, lowercase identifier for the consulted source, unique
     * within the publisher's own source registry. Never a display name and
     * never a URL.
     */
    PROVIDER_ID(): string;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The authority under which that source publishes, verbatim as the source
     * states it: a spectrum regulator, an international coordination register,
     * a licensee, a monitoring service, or an observer compilation. Never
     * inferred by the publisher.
     */
    AUTHORITY(): string | null;
    AUTHORITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable URL identifying the source material.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The exact query, filter, or request parameters used, so the same rows can
     * be recovered by repeating the fetch.
     */
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond retrieval timestamp.
     */
    RETRIEVED_AT(): string;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Redistribution terms verbatim. Required: there is no encoding for a
     * redistributed record whose terms are unstated. A source that publishes no
     * terms is recorded as publishing no terms; unknown terms are never public
     * domain and never an implied grant.
     */
    LICENSE(): string;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * URL of the full licence text as that source publishes it.
     */
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attribution text the licence requires a redistributor to display.
     */
    ATTRIBUTION(): string | null;
    ATTRIBUTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The licence forbids commercial use. Rides PER SOURCE because one record
     * may merge an open-terms lane beside a non-commercial cross-check, and the
     * strictest consulted lane governs any derived product.
     */
    NON_COMMERCIAL_ONLY(): boolean;
    /**
     * This source's own row, record, licence or file identifier, verbatim.
     */
    NATIVE_ID(): string | null;
    NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The class of authority this particular source speaks with about position.
     * Published per source because a record may merge a regulator lane with a
     * community lane; the record-level POSITION_AUTHORITY states which class the
     * PUBLISHED coordinate came from.
     */
    POSITION_AUTHORITY(): txsPositionAuthorityClass;
    /**
     * Position this source reported, in decimal degrees on WGS 84, before
     * reconciliation. Retained unrounded so the merge stays auditable. Absent
     * when the source was consulted and reported no position.
     */
    REPORTED_LATITUDE(): number;
    REPORTED_LONGITUDE(): number;
    /**
     * This source's report materially contributed to the published record.
     * False marks a source that was consulted and either returned nothing or
     * was outvoted; its entry is published either way.
     */
    CONTRIBUTED(): boolean;
    static startTXSProvenance(builder: flatbuffers.Builder): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addAuthority(builder: flatbuffers.Builder, AUTHORITYOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static addAttribution(builder: flatbuffers.Builder, ATTRIBUTIONOffset: flatbuffers.Offset): void;
    static addNonCommercialOnly(builder: flatbuffers.Builder, NON_COMMERCIAL_ONLY: boolean): void;
    static addNativeId(builder: flatbuffers.Builder, NATIVE_IDOffset: flatbuffers.Offset): void;
    static addPositionAuthority(builder: flatbuffers.Builder, POSITION_AUTHORITY: txsPositionAuthorityClass): void;
    static addReportedLatitude(builder: flatbuffers.Builder, REPORTED_LATITUDE: number): void;
    static addReportedLongitude(builder: flatbuffers.Builder, REPORTED_LONGITUDE: number): void;
    static addContributed(builder: flatbuffers.Builder, CONTRIBUTED: boolean): void;
    static endTXSProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTXSProvenance(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset, AUTHORITYOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, LICENSE_URLOffset: flatbuffers.Offset, ATTRIBUTIONOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, NATIVE_IDOffset: flatbuffers.Offset, POSITION_AUTHORITY: txsPositionAuthorityClass, REPORTED_LATITUDE: number, REPORTED_LONGITUDE: number, CONTRIBUTED: boolean): flatbuffers.Offset;
    unpack(): TXSProvenanceT;
    unpackTo(_o: TXSProvenanceT): void;
}
export declare class TXSProvenanceT implements flatbuffers.IGeneratedObject {
    PROVIDER_ID: string | Uint8Array | null;
    AUTHORITY: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    LICENSE_URL: string | Uint8Array | null;
    ATTRIBUTION: string | Uint8Array | null;
    NON_COMMERCIAL_ONLY: boolean;
    NATIVE_ID: string | Uint8Array | null;
    POSITION_AUTHORITY: txsPositionAuthorityClass;
    REPORTED_LATITUDE: number;
    REPORTED_LONGITUDE: number;
    CONTRIBUTED: boolean;
    constructor(PROVIDER_ID?: string | Uint8Array | null, AUTHORITY?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, LICENSE_URL?: string | Uint8Array | null, ATTRIBUTION?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean, NATIVE_ID?: string | Uint8Array | null, POSITION_AUTHORITY?: txsPositionAuthorityClass, REPORTED_LATITUDE?: number, REPORTED_LONGITUDE?: number, CONTRIBUTED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TXSProvenance.d.ts.map