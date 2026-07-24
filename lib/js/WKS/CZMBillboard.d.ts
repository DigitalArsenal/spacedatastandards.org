import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMHeightReference } from './CZMHeightReference.js';
import { CZMHorizontalOrigin } from './CZMHorizontalOrigin.js';
import { CZMNearFarScalar, CZMNearFarScalarT } from './CZMNearFarScalar.js';
import { CZMVerticalOrigin } from './CZMVerticalOrigin.js';
/**
 * Billboard (icon) properties
 */
export declare class CZMBillboard implements flatbuffers.IUnpackableObject<CZMBillboardT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMBillboard;
    static getRootAsCZMBillboard(bb: flatbuffers.ByteBuffer, obj?: CZMBillboard): CZMBillboard;
    static getSizePrefixedRootAsCZMBillboard(bb: flatbuffers.ByteBuffer, obj?: CZMBillboard): CZMBillboard;
    /**
     * Whether the billboard is displayed
     */
    SHOW(): boolean;
    /**
     * URI of the billboard image
     */
    IMAGE(): string | null;
    IMAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Scale factor
     */
    SCALE(): number;
    /**
     * Billboard color tint
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Height reference
     */
    HEIGHT_REFERENCE(): CZMHeightReference;
    /**
     * Pixel offset X
     */
    PIXEL_OFFSET_X(): number;
    /**
     * Pixel offset Y
     */
    PIXEL_OFFSET_Y(): number;
    /**
     * Horizontal origin
     */
    HORIZONTAL_ORIGIN(): CZMHorizontalOrigin;
    /**
     * Vertical origin
     */
    VERTICAL_ORIGIN(): CZMVerticalOrigin;
    /**
     * Translucency by distance
     */
    TRANSLUCENCY_BY_DISTANCE(obj?: CZMNearFarScalar): CZMNearFarScalar | null;
    /**
     * Rotation in radians
     */
    ROTATION(): number;
    /**
     * Whether size is in meters
     */
    SIZE_IN_METERS(): boolean;
    /**
     * Width in pixels
     */
    WIDTH(): number;
    /**
     * Height in pixels
     */
    HEIGHT(): number;
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
     * Scale by distance
     */
    SCALE_BY_DISTANCE(obj?: CZMNearFarScalar): CZMNearFarScalar | null;
    /**
     * Pixel offset scale by distance
     */
    PIXEL_OFFSET_SCALE_BY_DISTANCE(obj?: CZMNearFarScalar): CZMNearFarScalar | null;
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
    static startCZMBillboard(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addImage(builder: flatbuffers.Builder, IMAGEOffset: flatbuffers.Offset): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCE: CZMHeightReference): void;
    static addPixelOffsetX(builder: flatbuffers.Builder, PIXEL_OFFSET_X: number): void;
    static addPixelOffsetY(builder: flatbuffers.Builder, PIXEL_OFFSET_Y: number): void;
    static addHorizontalOrigin(builder: flatbuffers.Builder, HORIZONTAL_ORIGIN: CZMHorizontalOrigin): void;
    static addVerticalOrigin(builder: flatbuffers.Builder, VERTICAL_ORIGIN: CZMVerticalOrigin): void;
    static addTranslucencyByDistance(builder: flatbuffers.Builder, TRANSLUCENCY_BY_DISTANCEOffset: flatbuffers.Offset): void;
    static addRotation(builder: flatbuffers.Builder, ROTATION: number): void;
    static addSizeInMeters(builder: flatbuffers.Builder, SIZE_IN_METERS: boolean): void;
    static addWidth(builder: flatbuffers.Builder, WIDTH: number): void;
    static addHeight(builder: flatbuffers.Builder, HEIGHT: number): void;
    static addEyeOffsetX(builder: flatbuffers.Builder, EYE_OFFSET_X: number): void;
    static addEyeOffsetY(builder: flatbuffers.Builder, EYE_OFFSET_Y: number): void;
    static addEyeOffsetZ(builder: flatbuffers.Builder, EYE_OFFSET_Z: number): void;
    static addScaleByDistance(builder: flatbuffers.Builder, SCALE_BY_DISTANCEOffset: flatbuffers.Offset): void;
    static addPixelOffsetScaleByDistance(builder: flatbuffers.Builder, PIXEL_OFFSET_SCALE_BY_DISTANCEOffset: flatbuffers.Offset): void;
    static addDistanceDisplayConditionNear(builder: flatbuffers.Builder, DISTANCE_DISPLAY_CONDITION_NEAR: number): void;
    static addDistanceDisplayConditionFar(builder: flatbuffers.Builder, DISTANCE_DISPLAY_CONDITION_FAR: number): void;
    static addDisableDepthTestDistance(builder: flatbuffers.Builder, DISABLE_DEPTH_TEST_DISTANCE: number): void;
    static endCZMBillboard(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMBillboardT;
    unpackTo(_o: CZMBillboardT): void;
}
export declare class CZMBillboardT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    IMAGE: string | Uint8Array | null;
    SCALE: number;
    COLOR: CZMColorT | null;
    HEIGHT_REFERENCE: CZMHeightReference;
    PIXEL_OFFSET_X: number;
    PIXEL_OFFSET_Y: number;
    HORIZONTAL_ORIGIN: CZMHorizontalOrigin;
    VERTICAL_ORIGIN: CZMVerticalOrigin;
    TRANSLUCENCY_BY_DISTANCE: CZMNearFarScalarT | null;
    ROTATION: number;
    SIZE_IN_METERS: boolean;
    WIDTH: number;
    HEIGHT: number;
    EYE_OFFSET_X: number;
    EYE_OFFSET_Y: number;
    EYE_OFFSET_Z: number;
    SCALE_BY_DISTANCE: CZMNearFarScalarT | null;
    PIXEL_OFFSET_SCALE_BY_DISTANCE: CZMNearFarScalarT | null;
    DISTANCE_DISPLAY_CONDITION_NEAR: number;
    DISTANCE_DISPLAY_CONDITION_FAR: number;
    DISABLE_DEPTH_TEST_DISTANCE: number;
    constructor(SHOW?: boolean, IMAGE?: string | Uint8Array | null, SCALE?: number, COLOR?: CZMColorT | null, HEIGHT_REFERENCE?: CZMHeightReference, PIXEL_OFFSET_X?: number, PIXEL_OFFSET_Y?: number, HORIZONTAL_ORIGIN?: CZMHorizontalOrigin, VERTICAL_ORIGIN?: CZMVerticalOrigin, TRANSLUCENCY_BY_DISTANCE?: CZMNearFarScalarT | null, ROTATION?: number, SIZE_IN_METERS?: boolean, WIDTH?: number, HEIGHT?: number, EYE_OFFSET_X?: number, EYE_OFFSET_Y?: number, EYE_OFFSET_Z?: number, SCALE_BY_DISTANCE?: CZMNearFarScalarT | null, PIXEL_OFFSET_SCALE_BY_DISTANCE?: CZMNearFarScalarT | null, DISTANCE_DISPLAY_CONDITION_NEAR?: number, DISTANCE_DISPLAY_CONDITION_FAR?: number, DISABLE_DEPTH_TEST_DISTANCE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMBillboard.d.ts.map