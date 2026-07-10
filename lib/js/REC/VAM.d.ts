import * as flatbuffers from 'flatbuffers';
import { VAMMetadataOnlyReview, VAMMetadataOnlyReviewT } from './VAMMetadataOnlyReview.js';
import { VAMReview, VAMReviewT } from './VAMReview.js';
import { VAMVariant, VAMVariantT } from './VAMVariant.js';
import { visualAssetReviewState } from './visualAssetReviewState.js';
/**
 * Visual Asset Manifest — ranked visual representations for one stable entity.
 */
export declare class VAM implements flatbuffers.IUnpackableObject<VAMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAM;
    static getRootAsVAM(bb: flatbuffers.ByteBuffer, obj?: VAM): VAM;
    static getSizePrefixedRootAsVAM(bb: flatbuffers.ByteBuffer, obj?: VAM): VAM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * SemVer 2.0.0 manifest-format version, not a content revision.
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ENTITY_ID(): string;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ENTITY_KIND(): string | null;
    ENTITY_KIND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifies the approved canonical variant; alternate variants preserve their ranks.
     */
    CANONICAL_VARIANT_ID(): string | null;
    CANONICAL_VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ALTERNATE_VARIANT_IDS(index: number): string;
    ALTERNATE_VARIANT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    alternateVariantIdsLength(): number;
    /**
     * MUST be sorted ascending RANK. Ranks must be unique; tie-break bytewise ID only for invalid or legacy duplicate ranks.
     */
    VARIANTS(index: number, obj?: VAMVariant): VAMVariant | null;
    variantsLength(): number;
    REVIEW(obj?: VAMReview): VAMReview | null;
    REVIEW_STATE(): visualAssetReviewState;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) when the manifest was created.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) when the manifest was last updated.
     */
    UPDATED_AT(): string | null;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CIDv1 containing a multihash of the exact superseded VAM bytes.
     */
    SUPERSEDES_VAM_CID(): string | null;
    SUPERSEDES_VAM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CIDv1 containing a multihash of the exact referenced DPM bytes.
     */
    DPM_CID(): string | null;
    DPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mutually exclusive with REVIEW; metadata-only decisions use METADATA_REVIEW.
     */
    METADATA_REVIEW(obj?: VAMMetadataOnlyReview): VAMMetadataOnlyReview | null;
    static startVAM(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addEntityKind(builder: flatbuffers.Builder, ENTITY_KINDOffset: flatbuffers.Offset): void;
    static addCanonicalVariantId(builder: flatbuffers.Builder, CANONICAL_VARIANT_IDOffset: flatbuffers.Offset): void;
    static addAlternateVariantIds(builder: flatbuffers.Builder, ALTERNATE_VARIANT_IDSOffset: flatbuffers.Offset): void;
    static createAlternateVariantIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlternateVariantIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVariants(builder: flatbuffers.Builder, VARIANTSOffset: flatbuffers.Offset): void;
    static createVariantsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startVariantsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReview(builder: flatbuffers.Builder, REVIEWOffset: flatbuffers.Offset): void;
    static addReviewState(builder: flatbuffers.Builder, REVIEW_STATE: visualAssetReviewState): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addSupersedesVamCid(builder: flatbuffers.Builder, SUPERSEDES_VAM_CIDOffset: flatbuffers.Offset): void;
    static addDpmCid(builder: flatbuffers.Builder, DPM_CIDOffset: flatbuffers.Offset): void;
    static addMetadataReview(builder: flatbuffers.Builder, METADATA_REVIEWOffset: flatbuffers.Offset): void;
    static endVAM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishVAMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedVAMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): VAMT;
    unpackTo(_o: VAMT): void;
}
export declare class VAMT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    ENTITY_ID: string | Uint8Array | null;
    ENTITY_KIND: string | Uint8Array | null;
    CANONICAL_VARIANT_ID: string | Uint8Array | null;
    ALTERNATE_VARIANT_IDS: (string)[];
    VARIANTS: (VAMVariantT)[];
    REVIEW: VAMReviewT | null;
    REVIEW_STATE: visualAssetReviewState;
    CREATED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    SUPERSEDES_VAM_CID: string | Uint8Array | null;
    DPM_CID: string | Uint8Array | null;
    METADATA_REVIEW: VAMMetadataOnlyReviewT | null;
    constructor(ID?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, ENTITY_ID?: string | Uint8Array | null, ENTITY_KIND?: string | Uint8Array | null, CANONICAL_VARIANT_ID?: string | Uint8Array | null, ALTERNATE_VARIANT_IDS?: (string)[], VARIANTS?: (VAMVariantT)[], REVIEW?: VAMReviewT | null, REVIEW_STATE?: visualAssetReviewState, CREATED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, SUPERSEDES_VAM_CID?: string | Uint8Array | null, DPM_CID?: string | Uint8Array | null, METADATA_REVIEW?: VAMMetadataOnlyReviewT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAM.d.ts.map