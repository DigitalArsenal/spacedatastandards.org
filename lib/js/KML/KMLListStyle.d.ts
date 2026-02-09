import * as flatbuffers from 'flatbuffers';
import { KMLItemIcon, KMLItemIconT } from './KMLItemIcon.js';
import { KMLListItemType } from './KMLListItemType.js';
/**
 * List style
 */
export declare class KMLListStyle implements flatbuffers.IUnpackableObject<KMLListStyleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLListStyle;
    static getRootAsKMLListStyle(bb: flatbuffers.ByteBuffer, obj?: KMLListStyle): KMLListStyle;
    static getSizePrefixedRootAsKMLListStyle(bb: flatbuffers.ByteBuffer, obj?: KMLListStyle): KMLListStyle;
    /**
     * List item type
     */
    LIST_ITEM_TYPE(): KMLListItemType;
    /**
     * Background color
     */
    BG_COLOR(): string | null;
    BG_COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Item icons
     */
    ITEM_ICONS(index: number, obj?: KMLItemIcon): KMLItemIcon | null;
    itemIconsLength(): number;
    /**
     * Maximum snippet lines
     */
    MAX_SNIPPET_LINES(): number;
    static startKMLListStyle(builder: flatbuffers.Builder): void;
    static addListItemType(builder: flatbuffers.Builder, LIST_ITEM_TYPE: KMLListItemType): void;
    static addBgColor(builder: flatbuffers.Builder, BG_COLOROffset: flatbuffers.Offset): void;
    static addItemIcons(builder: flatbuffers.Builder, ITEM_ICONSOffset: flatbuffers.Offset): void;
    static createItemIconsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startItemIconsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxSnippetLines(builder: flatbuffers.Builder, MAX_SNIPPET_LINES: number): void;
    static endKMLListStyle(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLListStyle(builder: flatbuffers.Builder, LIST_ITEM_TYPE: KMLListItemType, BG_COLOROffset: flatbuffers.Offset, ITEM_ICONSOffset: flatbuffers.Offset, MAX_SNIPPET_LINES: number): flatbuffers.Offset;
    unpack(): KMLListStyleT;
    unpackTo(_o: KMLListStyleT): void;
}
export declare class KMLListStyleT implements flatbuffers.IGeneratedObject {
    LIST_ITEM_TYPE: KMLListItemType;
    BG_COLOR: string | Uint8Array | null;
    ITEM_ICONS: (KMLItemIconT)[];
    MAX_SNIPPET_LINES: number;
    constructor(LIST_ITEM_TYPE?: KMLListItemType, BG_COLOR?: string | Uint8Array | null, ITEM_ICONS?: (KMLItemIconT)[], MAX_SNIPPET_LINES?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLListStyle.d.ts.map