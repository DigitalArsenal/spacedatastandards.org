import * as flatbuffers from 'flatbuffers';
/**
 * Dataset lineage and redistribution terms for one terrain tile.
 *
 * Required on every record: a redistributed elevation tile whose dataset,
 * epoch, and licence are unstated is not publishable. Dataset identity is
 * DATA: DATASET_ID, DATASET_NAME, and ATTRIBUTION carry verbatim what the
 * source states about itself. The standard names no dataset, mission, agency,
 * or vendor.
 */
export declare class DTTProvenance implements flatbuffers.IUnpackableObject<DTTProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DTTProvenance;
    static getRootAsDTTProvenance(bb: flatbuffers.ByteBuffer, obj?: DTTProvenance): DTTProvenance;
    static getSizePrefixedRootAsDTTProvenance(bb: flatbuffers.ByteBuffer, obj?: DTTProvenance): DTTProvenance;
    /**
     * Publisher-stable, lowercase identifier for the elevation dataset this
     * tile was derived from, unique within the publisher's own dataset
     * registry. Never a display name and never a URL.
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
     * RFC 3339 UTC fixed-millisecond epoch of the dataset edition this tile was
     * derived from. The edition boundary, not the fetch: two tiles carrying the
     * same DATASET_ID and DATASET_EPOCH were cut from the same bytes.
     */
    DATASET_EPOCH(): string;
    DATASET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Content identifier of the exact dataset artifact, when the publisher
     * distributes one.
     */
    DATASET_CID(): string | null;
    DATASET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable URL identifying the source material within the dataset.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The exact tile, granule, or file selection used, so the same source
     * bytes can be recovered by repeating the fetch.
     */
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond retrieval timestamp.
     */
    RETRIEVED_AT(): string;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Redistribution terms verbatim. Required: unknown terms are never public
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
     * Attribution text the licence requires a redistributor to display,
     * carried verbatim so a surface can render it without composing its own
     * credit line.
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
     * The source's own identifier for the granule this tile was cut from,
     * verbatim. The join key back to the source dataset.
     */
    NATIVE_ID(): string | null;
    NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC timestamp at which this tile's bytes were produced by the
     * publisher, as distinct from the dataset edition they were cut from.
     */
    GENERATED_AT(): string | null;
    GENERATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the processing pipeline and its version that produced the
     * tile bytes, so two tiles from one edition but different pipelines are
     * distinguishable.
     */
    PROCESSOR(): string | null;
    PROCESSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDTTProvenance(builder: flatbuffers.Builder): void;
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
    static addGeneratedAt(builder: flatbuffers.Builder, GENERATED_ATOffset: flatbuffers.Offset): void;
    static addProcessor(builder: flatbuffers.Builder, PROCESSOROffset: flatbuffers.Offset): void;
    static endDTTProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDTTProvenance(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset, DATASET_NAMEOffset: flatbuffers.Offset, DATASET_URLOffset: flatbuffers.Offset, DATASET_EPOCHOffset: flatbuffers.Offset, DATASET_CIDOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, LICENSE_URLOffset: flatbuffers.Offset, ATTRIBUTIONOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, SHARE_ALIKE: boolean, NATIVE_IDOffset: flatbuffers.Offset, GENERATED_ATOffset: flatbuffers.Offset, PROCESSOROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DTTProvenanceT;
    unpackTo(_o: DTTProvenanceT): void;
}
export declare class DTTProvenanceT implements flatbuffers.IGeneratedObject {
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
    GENERATED_AT: string | Uint8Array | null;
    PROCESSOR: string | Uint8Array | null;
    constructor(DATASET_ID?: string | Uint8Array | null, DATASET_NAME?: string | Uint8Array | null, DATASET_URL?: string | Uint8Array | null, DATASET_EPOCH?: string | Uint8Array | null, DATASET_CID?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, LICENSE_URL?: string | Uint8Array | null, ATTRIBUTION?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean, SHARE_ALIKE?: boolean, NATIVE_ID?: string | Uint8Array | null, GENERATED_AT?: string | Uint8Array | null, PROCESSOR?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DTTProvenance.d.ts.map