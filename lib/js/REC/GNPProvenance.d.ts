import * as flatbuffers from 'flatbuffers';
/**
 * Dataset lineage and redistribution terms for one gazetteer place.
 *
 * Required on every record: a redistributed place whose dataset, epoch, and
 * licence are unstated is not publishable. Dataset identity is DATA:
 * DATASET_ID, DATASET_NAME, and ATTRIBUTION carry verbatim what the gazetteer
 * states about itself. The standard names no gazetteer, dataset, or site.
 */
export declare class GNPProvenance implements flatbuffers.IUnpackableObject<GNPProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GNPProvenance;
    static getRootAsGNPProvenance(bb: flatbuffers.ByteBuffer, obj?: GNPProvenance): GNPProvenance;
    static getSizePrefixedRootAsGNPProvenance(bb: flatbuffers.ByteBuffer, obj?: GNPProvenance): GNPProvenance;
    /**
     * Publisher-stable, lowercase identifier for the gazetteer this place was
     * taken from, unique within the publisher's own dataset registry. Never a
     * display name and never a URL.
     */
    DATASET_ID(): string;
    DATASET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The dataset's own name, verbatim as its publisher states it.
     */
    DATASET_NAME(): string | null;
    DATASET_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable URL of the dataset as published.
     */
    DATASET_URL(): string | null;
    DATASET_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond epoch of the dataset edition this place
     * was decoded from. The edition boundary, not the fetch: two records
     * carrying the same DATASET_ID and DATASET_EPOCH were cut from the same
     * bytes and are directly comparable.
     */
    DATASET_EPOCH(): string;
    DATASET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Content identifier of the exact dataset artifact, when the publisher
     * distributes one, so an epoch can be verified rather than trusted.
     */
    DATASET_CID(): string | null;
    DATASET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable URL identifying the source material within the dataset.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The exact query, filter, or file selection used, so the same rows can be
     * recovered by repeating the fetch.
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
     * redistributed place whose terms are unstated. A dataset that publishes no
     * terms is recorded as publishing no terms; unknown terms are never public
     * domain and never an implied grant.
     */
    LICENSE(): string;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * URL of the full licence text as that dataset publishes it.
     */
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attribution text the licence requires a redistributor to display.
     * Required whenever the terms are attribution-bearing, which is the common
     * case for open gazetteers, and carried verbatim so a downstream surface
     * can render it without composing its own credit line.
     */
    ATTRIBUTION(): string | null;
    ATTRIBUTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The licence forbids commercial use.
     */
    NON_COMMERCIAL_ONLY(): boolean;
    /**
     * The licence obliges derived works to carry the same terms.
     */
    SHARE_ALIKE(): boolean;
    /**
     * This gazetteer's own row identifier for the place, verbatim. The join key
     * back to the source dataset; never re-minted by the publisher.
     */
    NATIVE_ID(): string;
    NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * RFC 3339 UTC date on which the gazetteer last modified this row, as the
     * gazetteer states it. Distinct from DATASET_EPOCH: an unchanged row keeps
     * its modification date across editions, which is what makes incremental
     * sync possible.
     */
    NATIVE_MODIFIED(): string | null;
    NATIVE_MODIFIED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGNPProvenance(builder: flatbuffers.Builder): void;
    static addDatasetId(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset): void;
    static addDatasetName(builder: flatbuffers.Builder, DATASET_NAMEOffset: flatbuffers.Offset): void;
    static addDatasetUrl(builder: flatbuffers.Builder, DATASET_URLOffset: flatbuffers.Offset): void;
    static addDatasetEpoch(builder: flatbuffers.Builder, DATASET_EPOCHOffset: flatbuffers.Offset): void;
    static addDatasetCid(builder: flatbuffers.Builder, DATASET_CIDOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static addAttribution(builder: flatbuffers.Builder, ATTRIBUTIONOffset: flatbuffers.Offset): void;
    static addNonCommercialOnly(builder: flatbuffers.Builder, NON_COMMERCIAL_ONLY: boolean): void;
    static addShareAlike(builder: flatbuffers.Builder, SHARE_ALIKE: boolean): void;
    static addNativeId(builder: flatbuffers.Builder, NATIVE_IDOffset: flatbuffers.Offset): void;
    static addNativeModified(builder: flatbuffers.Builder, NATIVE_MODIFIEDOffset: flatbuffers.Offset): void;
    static endGNPProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGNPProvenance(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset, DATASET_NAMEOffset: flatbuffers.Offset, DATASET_URLOffset: flatbuffers.Offset, DATASET_EPOCHOffset: flatbuffers.Offset, DATASET_CIDOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, LICENSE_URLOffset: flatbuffers.Offset, ATTRIBUTIONOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, SHARE_ALIKE: boolean, NATIVE_IDOffset: flatbuffers.Offset, NATIVE_MODIFIEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GNPProvenanceT;
    unpackTo(_o: GNPProvenanceT): void;
}
export declare class GNPProvenanceT implements flatbuffers.IGeneratedObject {
    DATASET_ID: string | Uint8Array | null;
    DATASET_NAME: string | Uint8Array | null;
    DATASET_URL: string | Uint8Array | null;
    DATASET_EPOCH: string | Uint8Array | null;
    DATASET_CID: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    LICENSE_URL: string | Uint8Array | null;
    ATTRIBUTION: string | Uint8Array | null;
    NON_COMMERCIAL_ONLY: boolean;
    SHARE_ALIKE: boolean;
    NATIVE_ID: string | Uint8Array | null;
    NATIVE_MODIFIED: string | Uint8Array | null;
    constructor(DATASET_ID?: string | Uint8Array | null, DATASET_NAME?: string | Uint8Array | null, DATASET_URL?: string | Uint8Array | null, DATASET_EPOCH?: string | Uint8Array | null, DATASET_CID?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, LICENSE_URL?: string | Uint8Array | null, ATTRIBUTION?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean, SHARE_ALIKE?: boolean, NATIVE_ID?: string | Uint8Array | null, NATIVE_MODIFIED?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GNPProvenance.d.ts.map