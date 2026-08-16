import * as flatbuffers from 'flatbuffers';
/**
 * Dataset lineage and redistribution terms for one airspace volume.
 *
 * Required on every record: a redistributed volume whose dataset, epoch,
 * and licence are unstated is not publishable. Dataset identity is DATA;
 * the standard names no dataset, provider, or site.
 */
export declare class AVLProvenance implements flatbuffers.IUnpackableObject<AVLProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AVLProvenance;
    static getRootAsAVLProvenance(bb: flatbuffers.ByteBuffer, obj?: AVLProvenance): AVLProvenance;
    static getSizePrefixedRootAsAVLProvenance(bb: flatbuffers.ByteBuffer, obj?: AVLProvenance): AVLProvenance;
    /**
     * Publisher-stable, lowercase identifier for the aeronautical dataset
     * this volume was taken from, unique within the publisher's own dataset
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
     * RFC 3339 UTC fixed-millisecond epoch of the dataset edition this
     * volume was decoded from — the edition boundary (e.g. an AIRAC cycle
     * effective date), not the fetch.
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
     * The exact query, filter, or file selection used.
     */
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond retrieval timestamp.
     */
    RETRIEVED_AT(): string;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Redistribution terms verbatim. Unknown terms are never public domain
     * and never an implied grant.
     */
    LICENSE(): string;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * URL of the full licence text as the dataset publishes it.
     */
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attribution text the licence requires a redistributor to display.
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
     * The source dataset's own identifier for this volume, verbatim. The
     * join key back to the source; never re-minted by the publisher.
     */
    NATIVE_ID(): string;
    NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * RFC 3339 UTC date the source last modified this volume, as it states.
     */
    NATIVE_MODIFIED(): string | null;
    NATIVE_MODIFIED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAVLProvenance(builder: flatbuffers.Builder): void;
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
    static endAVLProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAVLProvenance(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset, DATASET_NAMEOffset: flatbuffers.Offset, DATASET_URLOffset: flatbuffers.Offset, DATASET_EPOCHOffset: flatbuffers.Offset, DATASET_CIDOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, LICENSE_URLOffset: flatbuffers.Offset, ATTRIBUTIONOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, SHARE_ALIKE: boolean, NATIVE_IDOffset: flatbuffers.Offset, NATIVE_MODIFIEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AVLProvenanceT;
    unpackTo(_o: AVLProvenanceT): void;
}
export declare class AVLProvenanceT implements flatbuffers.IGeneratedObject {
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
//# sourceMappingURL=AVLProvenance.d.ts.map