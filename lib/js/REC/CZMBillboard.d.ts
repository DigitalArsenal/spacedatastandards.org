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
    constructor(SHOW?: boolean, IMAGE?: string | Uint8Array | null, SCALE?: number, COLOR?: CZMColorT | null, HEIGHT_REFERENCE?: CZMHeightReference, PIXEL_OFFSET_X?: number, PIXEL_OFFSET_Y?: number, HORIZONTAL_ORIGIN?: CZMHorizontalOrigin, VERTICAL_ORIGIN?: CZMVerticalOrigin, TRANSLUCENCY_BY_DISTANCE?: CZMNearFarScalarT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMBillboard.d.ts.map