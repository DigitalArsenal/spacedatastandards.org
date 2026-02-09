import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMHeightReference } from './CZMHeightReference.js';
import { CZMNearFarScalar, CZMNearFarScalarT } from './CZMNearFarScalar.js';
/**
 * Point properties
 */
export declare class CZMPoint implements flatbuffers.IUnpackableObject<CZMPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPoint;
    static getRootAsCZMPoint(bb: flatbuffers.ByteBuffer, obj?: CZMPoint): CZMPoint;
    static getSizePrefixedRootAsCZMPoint(bb: flatbuffers.ByteBuffer, obj?: CZMPoint): CZMPoint;
    /**
     * Whether the point is displayed
     */
    SHOW(): boolean;
    /**
     * Point color
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline color
     */
    OUTLINE_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline width in pixels
     */
    OUTLINE_WIDTH(): number;
    /**
     * Pixel size
     */
    PIXEL_SIZE(): number;
    /**
     * Height reference
     */
    HEIGHT_REFERENCE(): CZMHeightReference;
    /**
     * Scale by distance
     */
    SCALE_BY_DISTANCE(obj?: CZMNearFarScalar): CZMNearFarScalar | null;
    /**
     * Translucency by distance
     */
    TRANSLUCENCY_BY_DISTANCE(obj?: CZMNearFarScalar): CZMNearFarScalar | null;
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
    static startCZMPoint(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addPixelSize(builder: flatbuffers.Builder, PIXEL_SIZE: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCE: CZMHeightReference): void;
    static addScaleByDistance(builder: flatbuffers.Builder, SCALE_BY_DISTANCEOffset: flatbuffers.Offset): void;
    static addTranslucencyByDistance(builder: flatbuffers.Builder, TRANSLUCENCY_BY_DISTANCEOffset: flatbuffers.Offset): void;
    static addDistanceDisplayConditionNear(builder: flatbuffers.Builder, DISTANCE_DISPLAY_CONDITION_NEAR: number): void;
    static addDistanceDisplayConditionFar(builder: flatbuffers.Builder, DISTANCE_DISPLAY_CONDITION_FAR: number): void;
    static addDisableDepthTestDistance(builder: flatbuffers.Builder, DISABLE_DEPTH_TEST_DISTANCE: number): void;
    static endCZMPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMPointT;
    unpackTo(_o: CZMPointT): void;
}
export declare class CZMPointT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    COLOR: CZMColorT | null;
    OUTLINE_COLOR: CZMColorT | null;
    OUTLINE_WIDTH: number;
    PIXEL_SIZE: number;
    HEIGHT_REFERENCE: CZMHeightReference;
    SCALE_BY_DISTANCE: CZMNearFarScalarT | null;
    TRANSLUCENCY_BY_DISTANCE: CZMNearFarScalarT | null;
    DISTANCE_DISPLAY_CONDITION_NEAR: number;
    DISTANCE_DISPLAY_CONDITION_FAR: number;
    DISABLE_DEPTH_TEST_DISTANCE: number;
    constructor(SHOW?: boolean, COLOR?: CZMColorT | null, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number, PIXEL_SIZE?: number, HEIGHT_REFERENCE?: CZMHeightReference, SCALE_BY_DISTANCE?: CZMNearFarScalarT | null, TRANSLUCENCY_BY_DISTANCE?: CZMNearFarScalarT | null, DISTANCE_DISPLAY_CONDITION_NEAR?: number, DISTANCE_DISPLAY_CONDITION_FAR?: number, DISABLE_DEPTH_TEST_DISTANCE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPoint.d.ts.map