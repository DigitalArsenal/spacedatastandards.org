import * as flatbuffers from 'flatbuffers';
import { capabilityClass } from './capabilityClass.js';
/**
 * An observed count of catalogue items in one category.
 *
 * Counts are VOLATILE and are never part of the ratified taxonomy itself. A
 * rollup exists only with COUNTED_AT and SOURCE_CATALOG_ID, so a published
 * count can never omit when it was taken or what it was taken over. A consumer
 * that needs a live number computes it from the items; a consumer rendering a
 * published rollup MUST show it as of COUNTED_AT.
 */
export declare class CCTCategoryRollup implements flatbuffers.IUnpackableObject<CCTCategoryRollupT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CCTCategoryRollup;
    static getRootAsCCTCategoryRollup(bb: flatbuffers.ByteBuffer, obj?: CCTCategoryRollup): CCTCategoryRollup;
    static getSizePrefixedRootAsCCTCategoryRollup(bb: flatbuffers.ByteBuffer, obj?: CCTCategoryRollup): CCTCategoryRollup;
    /**
     * Category being counted.
     */
    CODE(): capabilityClass;
    /**
     * Number of catalogue items whose PRIMARY_CATEGORY or CATEGORIES include
     * CODE, counted over SOURCE_CATALOG_ID at COUNTED_AT.
     */
    ITEM_COUNT(): number;
    /**
     * Identifier of the catalogue the count was taken over.
     */
    SOURCE_CATALOG_ID(): string;
    SOURCE_CATALOG_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Unix seconds when the count was taken.
     */
    COUNTED_AT(): bigint;
    static startCCTCategoryRollup(builder: flatbuffers.Builder): void;
    static addCode(builder: flatbuffers.Builder, CODE: capabilityClass): void;
    static addItemCount(builder: flatbuffers.Builder, ITEM_COUNT: number): void;
    static addSourceCatalogId(builder: flatbuffers.Builder, SOURCE_CATALOG_IDOffset: flatbuffers.Offset): void;
    static addCountedAt(builder: flatbuffers.Builder, COUNTED_AT: bigint): void;
    static endCCTCategoryRollup(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCCTCategoryRollup(builder: flatbuffers.Builder, CODE: capabilityClass, ITEM_COUNT: number, SOURCE_CATALOG_IDOffset: flatbuffers.Offset, COUNTED_AT: bigint): flatbuffers.Offset;
    unpack(): CCTCategoryRollupT;
    unpackTo(_o: CCTCategoryRollupT): void;
}
export declare class CCTCategoryRollupT implements flatbuffers.IGeneratedObject {
    CODE: capabilityClass;
    ITEM_COUNT: number;
    SOURCE_CATALOG_ID: string | Uint8Array | null;
    COUNTED_AT: bigint;
    constructor(CODE?: capabilityClass, ITEM_COUNT?: number, SOURCE_CATALOG_ID?: string | Uint8Array | null, COUNTED_AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CCTCategoryRollup.d.ts.map