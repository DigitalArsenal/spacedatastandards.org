import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMHeightReference } from './CZMHeightReference.js';
import { CZMHorizontalOrigin } from './CZMHorizontalOrigin.js';
import { CZMLabelStyle } from './CZMLabelStyle.js';
import { CZMVerticalOrigin } from './CZMVerticalOrigin.js';
/**
 * Label properties
 */
export declare class CZMLabel implements flatbuffers.IUnpackableObject<CZMLabelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMLabel;
    static getRootAsCZMLabel(bb: flatbuffers.ByteBuffer, obj?: CZMLabel): CZMLabel;
    static getSizePrefixedRootAsCZMLabel(bb: flatbuffers.ByteBuffer, obj?: CZMLabel): CZMLabel;
    /**
     * Whether the label is displayed
     */
    SHOW(): boolean;
    /**
     * Label text
     */
    TEXT(): string | null;
    TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Font CSS string (e.g. "12pt Lucida Console")
     */
    FONT(): string | null;
    FONT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Label style
     */
    STYLE(): CZMLabelStyle;
    /**
     * Fill color
     */
    FILL_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline color
     */
    OUTLINE_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline width in pixels
     */
    OUTLINE_WIDTH(): number;
    /**
     * Pixel offset X
     */
    PIXEL_OFFSET_X(): number;
    /**
     * Pixel offset Y
     */
    PIXEL_OFFSET_Y(): number;
    /**
     * Scale factor
     */
    SCALE(): number;
    /**
     * Horizontal origin
     */
    HORIZONTAL_ORIGIN(): CZMHorizontalOrigin;
    /**
     * Vertical origin
     */
    VERTICAL_ORIGIN(): CZMVerticalOrigin;
    /**
     * Height reference
     */
    HEIGHT_REFERENCE(): CZMHeightReference;
    static startCZMLabel(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addText(builder: flatbuffers.Builder, TEXTOffset: flatbuffers.Offset): void;
    static addFont(builder: flatbuffers.Builder, FONTOffset: flatbuffers.Offset): void;
    static addStyle(builder: flatbuffers.Builder, STYLE: CZMLabelStyle): void;
    static addFillColor(builder: flatbuffers.Builder, FILL_COLOROffset: flatbuffers.Offset): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addPixelOffsetX(builder: flatbuffers.Builder, PIXEL_OFFSET_X: number): void;
    static addPixelOffsetY(builder: flatbuffers.Builder, PIXEL_OFFSET_Y: number): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static addHorizontalOrigin(builder: flatbuffers.Builder, HORIZONTAL_ORIGIN: CZMHorizontalOrigin): void;
    static addVerticalOrigin(builder: flatbuffers.Builder, VERTICAL_ORIGIN: CZMVerticalOrigin): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCE: CZMHeightReference): void;
    static endCZMLabel(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMLabelT;
    unpackTo(_o: CZMLabelT): void;
}
export declare class CZMLabelT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    TEXT: string | Uint8Array | null;
    FONT: string | Uint8Array | null;
    STYLE: CZMLabelStyle;
    FILL_COLOR: CZMColorT | null;
    OUTLINE_COLOR: CZMColorT | null;
    OUTLINE_WIDTH: number;
    PIXEL_OFFSET_X: number;
    PIXEL_OFFSET_Y: number;
    SCALE: number;
    HORIZONTAL_ORIGIN: CZMHorizontalOrigin;
    VERTICAL_ORIGIN: CZMVerticalOrigin;
    HEIGHT_REFERENCE: CZMHeightReference;
    constructor(SHOW?: boolean, TEXT?: string | Uint8Array | null, FONT?: string | Uint8Array | null, STYLE?: CZMLabelStyle, FILL_COLOR?: CZMColorT | null, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number, PIXEL_OFFSET_X?: number, PIXEL_OFFSET_Y?: number, SCALE?: number, HORIZONTAL_ORIGIN?: CZMHorizontalOrigin, VERTICAL_ORIGIN?: CZMVerticalOrigin, HEIGHT_REFERENCE?: CZMHeightReference);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMLabel.d.ts.map