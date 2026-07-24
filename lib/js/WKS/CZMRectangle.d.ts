import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMMaterial, CZMMaterialT } from './CZMMaterial.js';
/**
 * Rectangle (cartographic rectangle)
 */
export declare class CZMRectangle implements flatbuffers.IUnpackableObject<CZMRectangleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMRectangle;
    static getRootAsCZMRectangle(bb: flatbuffers.ByteBuffer, obj?: CZMRectangle): CZMRectangle;
    static getSizePrefixedRootAsCZMRectangle(bb: flatbuffers.ByteBuffer, obj?: CZMRectangle): CZMRectangle;
    /**
     * Whether the rectangle is displayed
     */
    SHOW(): boolean;
    /**
     * Coordinates [west, south, east, north] in degrees
     */
    COORDINATES_WSEN_DEGREES(index: number): number | null;
    coordinatesWsenDegreesLength(): number;
    coordinatesWsenDegreesArray(): Float64Array | null;
    /**
     * Height in meters
     */
    HEIGHT(): number;
    /**
     * Height reference
     */
    HEIGHT_REFERENCE(): string | null;
    HEIGHT_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Extruded height
     */
    EXTRUDED_HEIGHT(): number;
    /**
     * Extruded height reference
     */
    EXTRUDED_HEIGHT_REFERENCE(): string | null;
    EXTRUDED_HEIGHT_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rotation in radians
     */
    ROTATION(): number;
    /**
     * Texture rotation in radians
     */
    ST_ROTATION(): number;
    /**
     * Granularity in radians
     */
    GRANULARITY(): number;
    /**
     * Fill flag
     */
    FILL(): boolean;
    /**
     * Surface material
     */
    MATERIAL(obj?: CZMMaterial): CZMMaterial | null;
    /**
     * Outline flag
     */
    OUTLINE(): boolean;
    /**
     * Outline color
     */
    OUTLINE_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline width
     */
    OUTLINE_WIDTH(): number;
    /**
     * Shadow mode
     */
    SHADOWS(): string | null;
    SHADOWS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Classification type
     */
    CLASSIFICATION_TYPE(): string | null;
    CLASSIFICATION_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Z-index for ordering
     */
    Z_INDEX(): number;
    static startCZMRectangle(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addCoordinatesWsenDegrees(builder: flatbuffers.Builder, COORDINATES_WSEN_DEGREESOffset: flatbuffers.Offset): void;
    static createCoordinatesWsenDegreesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoordinatesWsenDegreesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoordinatesWsenDegreesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHeight(builder: flatbuffers.Builder, HEIGHT: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCEOffset: flatbuffers.Offset): void;
    static addExtrudedHeight(builder: flatbuffers.Builder, EXTRUDED_HEIGHT: number): void;
    static addExtrudedHeightReference(builder: flatbuffers.Builder, EXTRUDED_HEIGHT_REFERENCEOffset: flatbuffers.Offset): void;
    static addRotation(builder: flatbuffers.Builder, ROTATION: number): void;
    static addStRotation(builder: flatbuffers.Builder, ST_ROTATION: number): void;
    static addGranularity(builder: flatbuffers.Builder, GRANULARITY: number): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addShadows(builder: flatbuffers.Builder, SHADOWSOffset: flatbuffers.Offset): void;
    static addClassificationType(builder: flatbuffers.Builder, CLASSIFICATION_TYPEOffset: flatbuffers.Offset): void;
    static addZIndex(builder: flatbuffers.Builder, Z_INDEX: number): void;
    static endCZMRectangle(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMRectangleT;
    unpackTo(_o: CZMRectangleT): void;
}
export declare class CZMRectangleT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    COORDINATES_WSEN_DEGREES: (number)[];
    HEIGHT: number;
    HEIGHT_REFERENCE: string | Uint8Array | null;
    EXTRUDED_HEIGHT: number;
    EXTRUDED_HEIGHT_REFERENCE: string | Uint8Array | null;
    ROTATION: number;
    ST_ROTATION: number;
    GRANULARITY: number;
    FILL: boolean;
    MATERIAL: CZMMaterialT | null;
    OUTLINE: boolean;
    OUTLINE_COLOR: CZMColorT | null;
    OUTLINE_WIDTH: number;
    SHADOWS: string | Uint8Array | null;
    CLASSIFICATION_TYPE: string | Uint8Array | null;
    Z_INDEX: number;
    constructor(SHOW?: boolean, COORDINATES_WSEN_DEGREES?: (number)[], HEIGHT?: number, HEIGHT_REFERENCE?: string | Uint8Array | null, EXTRUDED_HEIGHT?: number, EXTRUDED_HEIGHT_REFERENCE?: string | Uint8Array | null, ROTATION?: number, ST_ROTATION?: number, GRANULARITY?: number, FILL?: boolean, MATERIAL?: CZMMaterialT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number, SHADOWS?: string | Uint8Array | null, CLASSIFICATION_TYPE?: string | Uint8Array | null, Z_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMRectangle.d.ts.map