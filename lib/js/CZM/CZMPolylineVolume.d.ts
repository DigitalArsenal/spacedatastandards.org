import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMMaterial, CZMMaterialT } from './CZMMaterial.js';
/**
 * Polyline volume (extruded 2D shape)
 */
export declare class CZMPolylineVolume implements flatbuffers.IUnpackableObject<CZMPolylineVolumeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPolylineVolume;
    static getRootAsCZMPolylineVolume(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineVolume): CZMPolylineVolume;
    static getSizePrefixedRootAsCZMPolylineVolume(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineVolume): CZMPolylineVolume;
    /**
     * Whether displayed
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
     * 2D shape [x, y, x, y, ...]
     */
    SHAPE(index: number): number | null;
    shapeLength(): number;
    shapeArray(): Float64Array | null;
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
    static startCZMPolylineVolume(builder: flatbuffers.Builder): void;
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
    static addShape(builder: flatbuffers.Builder, SHAPEOffset: flatbuffers.Offset): void;
    static createShapeVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createShapeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startShapeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCornerType(builder: flatbuffers.Builder, CORNER_TYPEOffset: flatbuffers.Offset): void;
    static addGranularity(builder: flatbuffers.Builder, GRANULARITY: number): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addShadows(builder: flatbuffers.Builder, SHADOWSOffset: flatbuffers.Offset): void;
    static endCZMPolylineVolume(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMPolylineVolumeT;
    unpackTo(_o: CZMPolylineVolumeT): void;
}
export declare class CZMPolylineVolumeT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    POSITIONS_CARTOGRAPHIC_DEGREES: (number)[];
    POSITIONS_CARTESIAN: (number)[];
    SHAPE: (number)[];
    CORNER_TYPE: string | Uint8Array | null;
    GRANULARITY: number;
    FILL: boolean;
    MATERIAL: CZMMaterialT | null;
    OUTLINE: boolean;
    OUTLINE_COLOR: CZMColorT | null;
    OUTLINE_WIDTH: number;
    SHADOWS: string | Uint8Array | null;
    constructor(SHOW?: boolean, POSITIONS_CARTOGRAPHIC_DEGREES?: (number)[], POSITIONS_CARTESIAN?: (number)[], SHAPE?: (number)[], CORNER_TYPE?: string | Uint8Array | null, GRANULARITY?: number, FILL?: boolean, MATERIAL?: CZMMaterialT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number, SHADOWS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolylineVolume.d.ts.map