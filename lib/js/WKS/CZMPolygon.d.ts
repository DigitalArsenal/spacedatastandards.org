import * as flatbuffers from 'flatbuffers';
import { CZMClassificationType } from './CZMClassificationType.js';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMHeightReference } from './CZMHeightReference.js';
import { CZMMaterial, CZMMaterialT } from './CZMMaterial.js';
import { CZMPolygonHole, CZMPolygonHoleT } from './CZMPolygonHole.js';
/**
 * Polygon properties
 */
export declare class CZMPolygon implements flatbuffers.IUnpackableObject<CZMPolygonT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPolygon;
    static getRootAsCZMPolygon(bb: flatbuffers.ByteBuffer, obj?: CZMPolygon): CZMPolygon;
    static getSizePrefixedRootAsCZMPolygon(bb: flatbuffers.ByteBuffer, obj?: CZMPolygon): CZMPolygon;
    /**
     * Whether the polygon is displayed
     */
    SHOW(): boolean;
    /**
     * Positions as cartographic degrees [lon, lat, height, ...]
     */
    POSITIONS_CARTOGRAPHIC_DEGREES(index: number): number | null;
    positionsCartographicDegreesLength(): number;
    positionsCartographicDegreesArray(): Float64Array | null;
    /**
     * Positions as Cartesian [X, Y, Z, ...]
     */
    POSITIONS_CARTESIAN(index: number): number | null;
    positionsCartesianLength(): number;
    positionsCartesianArray(): Float64Array | null;
    /**
     * Fill flag
     */
    FILL(): boolean;
    /**
     * Fill color (solid color material, legacy)
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
     * Extruded height in meters
     */
    EXTRUDED_HEIGHT(): number;
    /**
     * Height reference
     */
    HEIGHT_REFERENCE(): CZMHeightReference;
    /**
     * Classification type
     */
    CLASSIFICATION_TYPE(): CZMClassificationType;
    /**
     * Holes (position lists: each hole is [lon,lat,h,...])
     */
    HOLES(index: number, obj?: CZMPolygonHole): CZMPolygonHole | null;
    holesLength(): number;
    /**
     * Arc type
     */
    ARC_TYPE(): string | null;
    ARC_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Height in meters
     */
    HEIGHT(): number;
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
     * Whether to use per-position heights
     */
    PER_POSITION_HEIGHT(): boolean;
    /**
     * Whether to close the top of extruded polygon
     */
    CLOSE_TOP(): boolean;
    /**
     * Whether to close the bottom of extruded polygon
     */
    CLOSE_BOTTOM(): boolean;
    /**
     * Shadow mode
     */
    SHADOWS(): string | null;
    SHADOWS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Z-index for ordering
     */
    Z_INDEX(): number;
    static startCZMPolygon(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addPositionsCartographicDegrees(builder: flatbuffers.Builder, POSITIONS_CARTOGRAPHIC_DEGREESOffset: flatbuffers.Offset): void;
    static createPositionsCartographicDegreesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionsCartographicDegreesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionsCartographicDegreesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositionsCartesian(builder: flatbuffers.Builder, POSITIONS_CARTESIANOffset: flatbuffers.Offset): void;
    static createPositionsCartesianVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionsCartesianVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionsCartesianVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addExtrudedHeight(builder: flatbuffers.Builder, EXTRUDED_HEIGHT: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCE: CZMHeightReference): void;
    static addClassificationType(builder: flatbuffers.Builder, CLASSIFICATION_TYPE: CZMClassificationType): void;
    static addHoles(builder: flatbuffers.Builder, HOLESOffset: flatbuffers.Offset): void;
    static createHolesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHolesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addArcType(builder: flatbuffers.Builder, ARC_TYPEOffset: flatbuffers.Offset): void;
    static addHeight(builder: flatbuffers.Builder, HEIGHT: number): void;
    static addExtrudedHeightReference(builder: flatbuffers.Builder, EXTRUDED_HEIGHT_REFERENCEOffset: flatbuffers.Offset): void;
    static addStRotation(builder: flatbuffers.Builder, ST_ROTATION: number): void;
    static addGranularity(builder: flatbuffers.Builder, GRANULARITY: number): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addPerPositionHeight(builder: flatbuffers.Builder, PER_POSITION_HEIGHT: boolean): void;
    static addCloseTop(builder: flatbuffers.Builder, CLOSE_TOP: boolean): void;
    static addCloseBottom(builder: flatbuffers.Builder, CLOSE_BOTTOM: boolean): void;
    static addShadows(builder: flatbuffers.Builder, SHADOWSOffset: flatbuffers.Offset): void;
    static addZIndex(builder: flatbuffers.Builder, Z_INDEX: number): void;
    static endCZMPolygon(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMPolygonT;
    unpackTo(_o: CZMPolygonT): void;
}
export declare class CZMPolygonT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    POSITIONS_CARTOGRAPHIC_DEGREES: (number)[];
    POSITIONS_CARTESIAN: (number)[];
    FILL: boolean;
    COLOR: CZMColorT | null;
    OUTLINE: boolean;
    OUTLINE_COLOR: CZMColorT | null;
    EXTRUDED_HEIGHT: number;
    HEIGHT_REFERENCE: CZMHeightReference;
    CLASSIFICATION_TYPE: CZMClassificationType;
    HOLES: (CZMPolygonHoleT)[];
    ARC_TYPE: string | Uint8Array | null;
    HEIGHT: number;
    EXTRUDED_HEIGHT_REFERENCE: string | Uint8Array | null;
    ST_ROTATION: number;
    GRANULARITY: number;
    MATERIAL: CZMMaterialT | null;
    OUTLINE_WIDTH: number;
    PER_POSITION_HEIGHT: boolean;
    CLOSE_TOP: boolean;
    CLOSE_BOTTOM: boolean;
    SHADOWS: string | Uint8Array | null;
    Z_INDEX: number;
    constructor(SHOW?: boolean, POSITIONS_CARTOGRAPHIC_DEGREES?: (number)[], POSITIONS_CARTESIAN?: (number)[], FILL?: boolean, COLOR?: CZMColorT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, EXTRUDED_HEIGHT?: number, HEIGHT_REFERENCE?: CZMHeightReference, CLASSIFICATION_TYPE?: CZMClassificationType, HOLES?: (CZMPolygonHoleT)[], ARC_TYPE?: string | Uint8Array | null, HEIGHT?: number, EXTRUDED_HEIGHT_REFERENCE?: string | Uint8Array | null, ST_ROTATION?: number, GRANULARITY?: number, MATERIAL?: CZMMaterialT | null, OUTLINE_WIDTH?: number, PER_POSITION_HEIGHT?: boolean, CLOSE_TOP?: boolean, CLOSE_BOTTOM?: boolean, SHADOWS?: string | Uint8Array | null, Z_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolygon.d.ts.map