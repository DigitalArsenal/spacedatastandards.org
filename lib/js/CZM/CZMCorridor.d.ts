import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMMaterial, CZMMaterialT } from './CZMMaterial.js';
/**
 * Corridor (centerline + width shape)
 */
export declare class CZMCorridor implements flatbuffers.IUnpackableObject<CZMCorridorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMCorridor;
    static getRootAsCZMCorridor(bb: flatbuffers.ByteBuffer, obj?: CZMCorridor): CZMCorridor;
    static getSizePrefixedRootAsCZMCorridor(bb: flatbuffers.ByteBuffer, obj?: CZMCorridor): CZMCorridor;
    /**
     * Whether the corridor is displayed
     */
    SHOW(): boolean;
    /**
     * Positions as cartographic degrees
     */
    POSITIONS_CARTOGRAPHIC_DEGREES(index: number): number | null;
    positionsCartographicDegreesLength(): number;
    positionsCartographicDegreesArray(): Float64Array | null;
    /**
     * Positions as Cartesian
     */
    POSITIONS_CARTESIAN(index: number): number | null;
    positionsCartesianLength(): number;
    positionsCartesianArray(): Float64Array | null;
    /**
     * Width in meters
     */
    WIDTH(): number;
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
     * Corner type
     */
    CORNER_TYPE(): string | null;
    CORNER_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static startCZMCorridor(builder: flatbuffers.Builder): void;
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
    static addWidth(builder: flatbuffers.Builder, WIDTH: number): void;
    static addHeight(builder: flatbuffers.Builder, HEIGHT: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCEOffset: flatbuffers.Offset): void;
    static addExtrudedHeight(builder: flatbuffers.Builder, EXTRUDED_HEIGHT: number): void;
    static addExtrudedHeightReference(builder: flatbuffers.Builder, EXTRUDED_HEIGHT_REFERENCEOffset: flatbuffers.Offset): void;
    static addCornerType(builder: flatbuffers.Builder, CORNER_TYPEOffset: flatbuffers.Offset): void;
    static addGranularity(builder: flatbuffers.Builder, GRANULARITY: number): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addShadows(builder: flatbuffers.Builder, SHADOWSOffset: flatbuffers.Offset): void;
    static addClassificationType(builder: flatbuffers.Builder, CLASSIFICATION_TYPEOffset: flatbuffers.Offset): void;
    static addZIndex(builder: flatbuffers.Builder, Z_INDEX: number): void;
    static endCZMCorridor(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMCorridorT;
    unpackTo(_o: CZMCorridorT): void;
}
export declare class CZMCorridorT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    POSITIONS_CARTOGRAPHIC_DEGREES: (number)[];
    POSITIONS_CARTESIAN: (number)[];
    WIDTH: number;
    HEIGHT: number;
    HEIGHT_REFERENCE: string | Uint8Array | null;
    EXTRUDED_HEIGHT: number;
    EXTRUDED_HEIGHT_REFERENCE: string | Uint8Array | null;
    CORNER_TYPE: string | Uint8Array | null;
    GRANULARITY: number;
    FILL: boolean;
    MATERIAL: CZMMaterialT | null;
    OUTLINE: boolean;
    OUTLINE_COLOR: CZMColorT | null;
    OUTLINE_WIDTH: number;
    SHADOWS: string | Uint8Array | null;
    CLASSIFICATION_TYPE: string | Uint8Array | null;
    Z_INDEX: number;
    constructor(SHOW?: boolean, POSITIONS_CARTOGRAPHIC_DEGREES?: (number)[], POSITIONS_CARTESIAN?: (number)[], WIDTH?: number, HEIGHT?: number, HEIGHT_REFERENCE?: string | Uint8Array | null, EXTRUDED_HEIGHT?: number, EXTRUDED_HEIGHT_REFERENCE?: string | Uint8Array | null, CORNER_TYPE?: string | Uint8Array | null, GRANULARITY?: number, FILL?: boolean, MATERIAL?: CZMMaterialT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number, SHADOWS?: string | Uint8Array | null, CLASSIFICATION_TYPE?: string | Uint8Array | null, Z_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMCorridor.d.ts.map