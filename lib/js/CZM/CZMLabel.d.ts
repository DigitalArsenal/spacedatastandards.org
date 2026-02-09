import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMHeightReference } from './CZMHeightReference.js';
import { CZMHorizontalOrigin } from './CZMHorizontalOrigin.js';
import { CZMLabelStyle } from './CZMLabelStyle.js';
import { CZMNearFarScalar, CZMNearFarScalarT } from './CZMNearFarScalar.js';
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
    /**
     * Whether to show background
     */
    SHOW_BACKGROUND(): boolean;
    /**
     * Background color
     */
    BACKGROUND_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Background padding X
     */
    BACKGROUND_PADDING_X(): number;
    /**
     * Background padding Y
     */
    BACKGROUND_PADDING_Y(): number;
    /**
     * Eye offset X in meters
     */
    EYE_OFFSET_X(): number;
    /**
     * Eye offset Y in meters
     */
    EYE_OFFSET_Y(): number;
    /**
     * Eye offset Z in meters
     */
    EYE_OFFSET_Z(): number;
    /**
     * Translucency by distance
     */
    TRANSLUCENCY_BY_DISTANCE(obj?: CZMNearFarScalar): CZMNearFarScalar | null;
    /**
     * Pixel offset scale by distance
     */
    PIXEL_OFFSET_SCALE_BY_DISTANCE(obj?: CZMNearFarScalar): CZMNearFarScalar | null;
    /**
     * Scale by distance
     */
    SCALE_BY_DISTANCE(obj?: CZMNearFarScalar): CZMNearFarScalar | null;
    /**
     * Distance display condition near
     */
    DISTANCE_DISPLAY_CONDITION_NEAR(): number;
    /**
     * Distance display condition far
     */
    DISTANCE_DISPLAY_CONDITION_FAR(): number;
    /**
     * Disable depth test distance
     */
    DISABLE_DEPTH_TEST_DISTANCE(): number;
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
    static addShowBackground(builder: flatbuffers.Builder, SHOW_BACKGROUND: boolean): void;
    static addBackgroundColor(builder: flatbuffers.Builder, BACKGROUND_COLOROffset: flatbuffers.Offset): void;
    static addBackgroundPaddingX(builder: flatbuffers.Builder, BACKGROUND_PADDING_X: number): void;
    static addBackgroundPaddingY(builder: flatbuffers.Builder, BACKGROUND_PADDING_Y: number): void;
    static addEyeOffsetX(builder: flatbuffers.Builder, EYE_OFFSET_X: number): void;
    static addEyeOffsetY(builder: flatbuffers.Builder, EYE_OFFSET_Y: number): void;
    static addEyeOffsetZ(builder: flatbuffers.Builder, EYE_OFFSET_Z: number): void;
    static addTranslucencyByDistance(builder: flatbuffers.Builder, TRANSLUCENCY_BY_DISTANCEOffset: flatbuffers.Offset): void;
    static addPixelOffsetScaleByDistance(builder: flatbuffers.Builder, PIXEL_OFFSET_SCALE_BY_DISTANCEOffset: flatbuffers.Offset): void;
    static addScaleByDistance(builder: flatbuffers.Builder, SCALE_BY_DISTANCEOffset: flatbuffers.Offset): void;
    static addDistanceDisplayConditionNear(builder: flatbuffers.Builder, DISTANCE_DISPLAY_CONDITION_NEAR: number): void;
    static addDistanceDisplayConditionFar(builder: flatbuffers.Builder, DISTANCE_DISPLAY_CONDITION_FAR: number): void;
    static addDisableDepthTestDistance(builder: flatbuffers.Builder, DISABLE_DEPTH_TEST_DISTANCE: number): void;
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
    SHOW_BACKGROUND: boolean;
    BACKGROUND_COLOR: CZMColorT | null;
    BACKGROUND_PADDING_X: number;
    BACKGROUND_PADDING_Y: number;
    EYE_OFFSET_X: number;
    EYE_OFFSET_Y: number;
    EYE_OFFSET_Z: number;
    TRANSLUCENCY_BY_DISTANCE: CZMNearFarScalarT | null;
    PIXEL_OFFSET_SCALE_BY_DISTANCE: CZMNearFarScalarT | null;
    SCALE_BY_DISTANCE: CZMNearFarScalarT | null;
    DISTANCE_DISPLAY_CONDITION_NEAR: number;
    DISTANCE_DISPLAY_CONDITION_FAR: number;
    DISABLE_DEPTH_TEST_DISTANCE: number;
    constructor(SHOW?: boolean, TEXT?: string | Uint8Array | null, FONT?: string | Uint8Array | null, STYLE?: CZMLabelStyle, FILL_COLOR?: CZMColorT | null, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number, PIXEL_OFFSET_X?: number, PIXEL_OFFSET_Y?: number, SCALE?: number, HORIZONTAL_ORIGIN?: CZMHorizontalOrigin, VERTICAL_ORIGIN?: CZMVerticalOrigin, HEIGHT_REFERENCE?: CZMHeightReference, SHOW_BACKGROUND?: boolean, BACKGROUND_COLOR?: CZMColorT | null, BACKGROUND_PADDING_X?: number, BACKGROUND_PADDING_Y?: number, EYE_OFFSET_X?: number, EYE_OFFSET_Y?: number, EYE_OFFSET_Z?: number, TRANSLUCENCY_BY_DISTANCE?: CZMNearFarScalarT | null, PIXEL_OFFSET_SCALE_BY_DISTANCE?: CZMNearFarScalarT | null, SCALE_BY_DISTANCE?: CZMNearFarScalarT | null, DISTANCE_DISPLAY_CONDITION_NEAR?: number, DISTANCE_DISPLAY_CONDITION_FAR?: number, DISABLE_DEPTH_TEST_DISTANCE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMLabel.d.ts.map