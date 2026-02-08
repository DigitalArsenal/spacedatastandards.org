import * as flatbuffers from 'flatbuffers';
import { CZMClassificationType } from './CZMClassificationType.js';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMHeightReference } from './CZMHeightReference.js';
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
     * Fill color (solid color material)
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
    constructor(SHOW?: boolean, POSITIONS_CARTOGRAPHIC_DEGREES?: (number)[], POSITIONS_CARTESIAN?: (number)[], FILL?: boolean, COLOR?: CZMColorT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, EXTRUDED_HEIGHT?: number, HEIGHT_REFERENCE?: CZMHeightReference, CLASSIFICATION_TYPE?: CZMClassificationType);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolygon.d.ts.map