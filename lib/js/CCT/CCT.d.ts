import * as flatbuffers from 'flatbuffers';
import { CCTCategory, CCTCategoryT } from './CCTCategory.js';
import { CCTCategoryRollup, CCTCategoryRollupT } from './CCTCategoryRollup.js';
/**
 * $CCT — Capability Category Taxonomy.
 *
 * The ratified set of capability classes that distributable units (modules,
 * applications, composed flows) are classified under, together with the labels
 * and routes every consuming surface renders. One published $CCT is the single
 * source of truth shared by a storefront, a library, a search index and the
 * unit manifests themselves.
 *
 * Division of labour: `$CCT` = the category vocabulary and its presentation;
 * `$PLG` = one module's listing, which cites categories by code; `$APP` = one
 * application's manifest, which cites categories by code; `$PMM` = which
 * modules a provider serves; `$STO`/`$STF` = commerce.
 */
export declare class CCT implements flatbuffers.IUnpackableObject<CCTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CCT;
    static getRootAsCCT(bb: flatbuffers.ByteBuffer, obj?: CCT): CCT;
    static getSizePrefixedRootAsCCT(bb: flatbuffers.ByteBuffer, obj?: CCT): CCT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this taxonomy publication.
     */
    TAXONOMY_ID(): string;
    TAXONOMY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * SemVer 2.0.0 version of the taxonomy content.
     */
    VERSION(): string;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Unix seconds when this taxonomy revision was issued.
     */
    ISSUED_AT(): bigint;
    /**
     * Human-readable title of the taxonomy.
     */
    TITLE(): string | null;
    TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The ratified categories. Every capabilityClass member a consumer may
     * encounter SHOULD appear exactly once; a code appearing twice is invalid.
     */
    CATEGORIES(index: number, obj?: CCTCategory): CCTCategory | null;
    categoriesLength(): number;
    /**
     * Optional per-category item counts as observed over a named catalogue.
     * Absent means counts are computed by the consumer.
     */
    ROLLUPS(index: number, obj?: CCTCategoryRollup): CCTCategoryRollup | null;
    rollupsLength(): number;
    /**
     * Signature from the publishing node key over the canonical taxonomy bytes.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startCCT(builder: flatbuffers.Builder): void;
    static addTaxonomyId(builder: flatbuffers.Builder, TAXONOMY_IDOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addIssuedAt(builder: flatbuffers.Builder, ISSUED_AT: bigint): void;
    static addTitle(builder: flatbuffers.Builder, TITLEOffset: flatbuffers.Offset): void;
    static addCategories(builder: flatbuffers.Builder, CATEGORIESOffset: flatbuffers.Offset): void;
    static createCategoriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCategoriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRollups(builder: flatbuffers.Builder, ROLLUPSOffset: flatbuffers.Offset): void;
    static createRollupsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRollupsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCCT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCCTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCCTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCCT(builder: flatbuffers.Builder, TAXONOMY_IDOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, ISSUED_AT: bigint, TITLEOffset: flatbuffers.Offset, CATEGORIESOffset: flatbuffers.Offset, ROLLUPSOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CCTT;
    unpackTo(_o: CCTT): void;
}
export declare class CCTT implements flatbuffers.IGeneratedObject {
    TAXONOMY_ID: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    ISSUED_AT: bigint;
    TITLE: string | Uint8Array | null;
    CATEGORIES: (CCTCategoryT)[];
    ROLLUPS: (CCTCategoryRollupT)[];
    SIGNATURE: (number)[];
    constructor(TAXONOMY_ID?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, ISSUED_AT?: bigint, TITLE?: string | Uint8Array | null, CATEGORIES?: (CCTCategoryT)[], ROLLUPS?: (CCTCategoryRollupT)[], SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CCT.d.ts.map