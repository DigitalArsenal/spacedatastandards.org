import * as flatbuffers from 'flatbuffers';
import { capabilityClass } from './capabilityClass.js';
/**
 * One ratified category in the taxonomy.
 *
 * DISPLAY_NAME, SUMMARY and SLUG are required: a category cannot be published
 * without the label a surface will render, the sentence a browse row will
 * show, and the route a link will target. This is what stops each consumer
 * from inventing its own wording for the same code.
 */
export declare class CCTCategory implements flatbuffers.IUnpackableObject<CCTCategoryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CCTCategory;
    static getRootAsCCTCategory(bb: flatbuffers.ByteBuffer, obj?: CCTCategory): CCTCategory;
    static getSizePrefixedRootAsCCTCategory(bb: flatbuffers.ByteBuffer, obj?: CCTCategory): CCTCategory;
    /**
     * The ratified category code. This is the join key every consumer uses.
     */
    CODE(): capabilityClass;
    /**
     * Canonical human-readable label, rendered verbatim. MUST equal the display
     * name stated in the CODE member's doc comment.
     */
    DISPLAY_NAME(): string;
    DISPLAY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * One-sentence description shown on browse rows and category headers.
     */
    SUMMARY(): string;
    SUMMARY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Route-safe identifier: the CODE identifier lowercased with `_` replaced by
     * `-`. Published explicitly rather than derived so every surface routes
     * identically.
     */
    SLUG(): string;
    SLUG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Longer editorial description for a category landing page.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parent category for hierarchical browse. UNSPECIFIED means this is a
     * top-level category. A category MUST NOT name itself as its parent.
     */
    PARENT(): capabilityClass;
    /**
     * Presentation order within its parent, ascending. Ties break on
     * DISPLAY_NAME.
     */
    SORT_ORDER(): number;
    /**
     * Search synonyms and alternate phrasings that resolve to this category.
     * Feeds type-ahead; never rendered as the category label.
     */
    KEYWORDS(index: number): string;
    KEYWORDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    keywordsLength(): number;
    /**
     * Key of a self-hosted icon or capsule asset for this category. A KEY, not a
     * URL: consuming node surfaces load zero external-origin bytes, so the
     * consumer resolves this against its own local asset set.
     */
    ICON_KEY(): string | null;
    ICON_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCCTCategory(builder: flatbuffers.Builder): void;
    static addCode(builder: flatbuffers.Builder, CODE: capabilityClass): void;
    static addDisplayName(builder: flatbuffers.Builder, DISPLAY_NAMEOffset: flatbuffers.Offset): void;
    static addSummary(builder: flatbuffers.Builder, SUMMARYOffset: flatbuffers.Offset): void;
    static addSlug(builder: flatbuffers.Builder, SLUGOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addParent(builder: flatbuffers.Builder, PARENT: capabilityClass): void;
    static addSortOrder(builder: flatbuffers.Builder, SORT_ORDER: number): void;
    static addKeywords(builder: flatbuffers.Builder, KEYWORDSOffset: flatbuffers.Offset): void;
    static createKeywordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startKeywordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIconKey(builder: flatbuffers.Builder, ICON_KEYOffset: flatbuffers.Offset): void;
    static endCCTCategory(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCCTCategory(builder: flatbuffers.Builder, CODE: capabilityClass, DISPLAY_NAMEOffset: flatbuffers.Offset, SUMMARYOffset: flatbuffers.Offset, SLUGOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, PARENT: capabilityClass, SORT_ORDER: number, KEYWORDSOffset: flatbuffers.Offset, ICON_KEYOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CCTCategoryT;
    unpackTo(_o: CCTCategoryT): void;
}
export declare class CCTCategoryT implements flatbuffers.IGeneratedObject {
    CODE: capabilityClass;
    DISPLAY_NAME: string | Uint8Array | null;
    SUMMARY: string | Uint8Array | null;
    SLUG: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    PARENT: capabilityClass;
    SORT_ORDER: number;
    KEYWORDS: (string)[];
    ICON_KEY: string | Uint8Array | null;
    constructor(CODE?: capabilityClass, DISPLAY_NAME?: string | Uint8Array | null, SUMMARY?: string | Uint8Array | null, SLUG?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, PARENT?: capabilityClass, SORT_ORDER?: number, KEYWORDS?: (string)[], ICON_KEY?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CCTCategory.d.ts.map