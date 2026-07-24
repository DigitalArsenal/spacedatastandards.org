import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMHeightReference } from './CZMHeightReference.js';
import { CZMMaterial, CZMMaterialT } from './CZMMaterial.js';
/**
 * Ellipse properties (for ground circles/ellipses)
 */
export declare class CZMEllipse implements flatbuffers.IUnpackableObject<CZMEllipseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMEllipse;
    static getRootAsCZMEllipse(bb: flatbuffers.ByteBuffer, obj?: CZMEllipse): CZMEllipse;
    static getSizePrefixedRootAsCZMEllipse(bb: flatbuffers.ByteBuffer, obj?: CZMEllipse): CZMEllipse;
    /**
     * Whether the ellipse is displayed
     */
    SHOW(): boolean;
    /**
     * Semi-major axis in meters
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * Semi-minor axis in meters
     */
    SEMI_MINOR_AXIS(): number;
    /**
     * Rotation from north in radians
     */
    ROTATION(): number;
    /**
     * Fill flag
     */
    FILL(): boolean;
    /**
     * Fill color (legacy solid color)
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline flag
     */
    OUTLINE(): boolean;
    /**
     * Outline color
     */
    OUTLINE_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Height in meters
     */
    HEIGHT(): number;
    /**
     * Height reference
     */
    HEIGHT_REFERENCE(): CZMHeightReference;
    /**
     * Extruded height in meters
     */
    EXTRUDED_HEIGHT(): number;
    /**
     * Extruded height reference
     */
    EXTRUDED_HEIGHT_REFERENCE(): string | null;
    EXTRUDED_HEIGHT_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Texture rotation in radians
     */
    ST_ROTATION(): number;
    /**
     * Granularity in radians
     */
    GRANULARITY(): number;
    /**
     * Full surface material
     */
    MATERIAL(obj?: CZMMaterial): CZMMaterial | null;
    /**
     * Outline width in pixels
     */
    OUTLINE_WIDTH(): number;
    /**
     * Number of vertical lines
     */
    NUMBER_OF_VERTICAL_LINES(): number;
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
    static startCZMEllipse(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addSemiMinorAxis(builder: flatbuffers.Builder, SEMI_MINOR_AXIS: number): void;
    static addRotation(builder: flatbuffers.Builder, ROTATION: number): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addHeight(builder: flatbuffers.Builder, HEIGHT: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCE: CZMHeightReference): void;
    static addExtrudedHeight(builder: flatbuffers.Builder, EXTRUDED_HEIGHT: number): void;
    static addExtrudedHeightReference(builder: flatbuffers.Builder, EXTRUDED_HEIGHT_REFERENCEOffset: flatbuffers.Offset): void;
    static addStRotation(builder: flatbuffers.Builder, ST_ROTATION: number): void;
    static addGranularity(builder: flatbuffers.Builder, GRANULARITY: number): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addNumberOfVerticalLines(builder: flatbuffers.Builder, NUMBER_OF_VERTICAL_LINES: number): void;
    static addShadows(builder: flatbuffers.Builder, SHADOWSOffset: flatbuffers.Offset): void;
    static addClassificationType(builder: flatbuffers.Builder, CLASSIFICATION_TYPEOffset: flatbuffers.Offset): void;
    static addZIndex(builder: flatbuffers.Builder, Z_INDEX: number): void;
    static endCZMEllipse(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMEllipseT;
    unpackTo(_o: CZMEllipseT): void;
}
export declare class CZMEllipseT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    SEMI_MAJOR_AXIS: number;
    SEMI_MINOR_AXIS: number;
    ROTATION: number;
    FILL: boolean;
    COLOR: CZMColorT | null;
    OUTLINE: boolean;
    OUTLINE_COLOR: CZMColorT | null;
    HEIGHT: number;
    HEIGHT_REFERENCE: CZMHeightReference;
    EXTRUDED_HEIGHT: number;
    EXTRUDED_HEIGHT_REFERENCE: string | Uint8Array | null;
    ST_ROTATION: number;
    GRANULARITY: number;
    MATERIAL: CZMMaterialT | null;
    OUTLINE_WIDTH: number;
    NUMBER_OF_VERTICAL_LINES: number;
    SHADOWS: string | Uint8Array | null;
    CLASSIFICATION_TYPE: string | Uint8Array | null;
    Z_INDEX: number;
    constructor(SHOW?: boolean, SEMI_MAJOR_AXIS?: number, SEMI_MINOR_AXIS?: number, ROTATION?: number, FILL?: boolean, COLOR?: CZMColorT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, HEIGHT?: number, HEIGHT_REFERENCE?: CZMHeightReference, EXTRUDED_HEIGHT?: number, EXTRUDED_HEIGHT_REFERENCE?: string | Uint8Array | null, ST_ROTATION?: number, GRANULARITY?: number, MATERIAL?: CZMMaterialT | null, OUTLINE_WIDTH?: number, NUMBER_OF_VERTICAL_LINES?: number, SHADOWS?: string | Uint8Array | null, CLASSIFICATION_TYPE?: string | Uint8Array | null, Z_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMEllipse.d.ts.map