import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Polyline properties
 */
export declare class CZMPolyline implements flatbuffers.IUnpackableObject<CZMPolylineT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPolyline;
    static getRootAsCZMPolyline(bb: flatbuffers.ByteBuffer, obj?: CZMPolyline): CZMPolyline;
    static getSizePrefixedRootAsCZMPolyline(bb: flatbuffers.ByteBuffer, obj?: CZMPolyline): CZMPolyline;
    /**
     * Whether the polyline is displayed
     */
    SHOW(): boolean;
    /**
     * Positions as cartographic degrees [lon, lat, height, lon, lat, height, ...]
     */
    POSITIONS_CARTOGRAPHIC_DEGREES(index: number): number | null;
    positionsCartographicDegreesLength(): number;
    positionsCartographicDegreesArray(): Float64Array | null;
    /**
     * Positions as Cartesian [X, Y, Z, X, Y, Z, ...]
     */
    POSITIONS_CARTESIAN(index: number): number | null;
    positionsCartesianLength(): number;
    positionsCartesianArray(): Float64Array | null;
    /**
     * Line width in pixels
     */
    WIDTH(): number;
    /**
     * Line color (solid color material)
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Whether to clamp to ground
     */
    CLAMP_TO_GROUND(): boolean;
    static startCZMPolyline(builder: flatbuffers.Builder): void;
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
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addClampToGround(builder: flatbuffers.Builder, CLAMP_TO_GROUND: boolean): void;
    static endCZMPolyline(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMPolylineT;
    unpackTo(_o: CZMPolylineT): void;
}
export declare class CZMPolylineT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    POSITIONS_CARTOGRAPHIC_DEGREES: (number)[];
    POSITIONS_CARTESIAN: (number)[];
    WIDTH: number;
    COLOR: CZMColorT | null;
    CLAMP_TO_GROUND: boolean;
    constructor(SHOW?: boolean, POSITIONS_CARTOGRAPHIC_DEGREES?: (number)[], POSITIONS_CARTESIAN?: (number)[], WIDTH?: number, COLOR?: CZMColorT | null, CLAMP_TO_GROUND?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolyline.d.ts.map