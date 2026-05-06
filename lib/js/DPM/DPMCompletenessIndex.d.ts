import * as flatbuffers from 'flatbuffers';
/**
 * Completeness-capable signed index over a dataset update.
 */
export declare class DPMCompletenessIndex implements flatbuffers.IUnpackableObject<DPMCompletenessIndexT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DPMCompletenessIndex;
    static getRootAsDPMCompletenessIndex(bb: flatbuffers.ByteBuffer, obj?: DPMCompletenessIndex): DPMCompletenessIndex;
    static getSizePrefixedRootAsDPMCompletenessIndex(bb: flatbuffers.ByteBuffer, obj?: DPMCompletenessIndex): DPMCompletenessIndex;
    /**
     * Stable index name, e.g. file_id, norad_cat_id, epoch, source_batch.
     */
    INDEX_NAME(): string | null;
    INDEX_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Deterministic ordering expression for the index. Providers and
     * subscribers MUST use this ordering when building or verifying range
     * proofs. A query is completeness-verifiable only when its predicate can be
     * expressed against one or more declared indexes.
     */
    CANONICAL_ORDER(): string | null;
    CANONICAL_ORDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 or Merkle root of the ordered index, lowercase hex. This root is
     * signed by the DPM provider signature and is the verifier's commitment for
     * inclusion and range-completeness proofs.
     */
    INDEX_ROOT(): string | null;
    INDEX_ROOT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Hash profile for leaves and internal nodes, e.g.
     * SDN-MERKLE-SHA256-v1. Profiles define domain separators, leaf material,
     * pair ordering, duplicate handling, and odd-leaf promotion.
     */
    MERKLE_PROFILE(): string | null;
    MERKLE_PROFILE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether this index can prove that no matching records were omitted for a
     * supported range query. Inclusion proofs alone prove authenticity, not
     * completeness.
     */
    SUPPORTS_RANGE_COMPLETENESS(): boolean;
    static startDPMCompletenessIndex(builder: flatbuffers.Builder): void;
    static addIndexName(builder: flatbuffers.Builder, INDEX_NAMEOffset: flatbuffers.Offset): void;
    static addCanonicalOrder(builder: flatbuffers.Builder, CANONICAL_ORDEROffset: flatbuffers.Offset): void;
    static addIndexRoot(builder: flatbuffers.Builder, INDEX_ROOTOffset: flatbuffers.Offset): void;
    static addMerkleProfile(builder: flatbuffers.Builder, MERKLE_PROFILEOffset: flatbuffers.Offset): void;
    static addSupportsRangeCompleteness(builder: flatbuffers.Builder, SUPPORTS_RANGE_COMPLETENESS: boolean): void;
    static endDPMCompletenessIndex(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDPMCompletenessIndex(builder: flatbuffers.Builder, INDEX_NAMEOffset: flatbuffers.Offset, CANONICAL_ORDEROffset: flatbuffers.Offset, INDEX_ROOTOffset: flatbuffers.Offset, MERKLE_PROFILEOffset: flatbuffers.Offset, SUPPORTS_RANGE_COMPLETENESS: boolean): flatbuffers.Offset;
    unpack(): DPMCompletenessIndexT;
    unpackTo(_o: DPMCompletenessIndexT): void;
}
export declare class DPMCompletenessIndexT implements flatbuffers.IGeneratedObject {
    INDEX_NAME: string | Uint8Array | null;
    CANONICAL_ORDER: string | Uint8Array | null;
    INDEX_ROOT: string | Uint8Array | null;
    MERKLE_PROFILE: string | Uint8Array | null;
    SUPPORTS_RANGE_COMPLETENESS: boolean;
    constructor(INDEX_NAME?: string | Uint8Array | null, CANONICAL_ORDER?: string | Uint8Array | null, INDEX_ROOT?: string | Uint8Array | null, MERKLE_PROFILE?: string | Uint8Array | null, SUPPORTS_RANGE_COMPLETENESS?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DPMCompletenessIndex.d.ts.map