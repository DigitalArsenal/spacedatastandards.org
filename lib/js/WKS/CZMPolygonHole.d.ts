import * as flatbuffers from 'flatbuffers';
/**
 * Polygon hole position list
 */
export declare class CZMPolygonHole implements flatbuffers.IUnpackableObject<CZMPolygonHoleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPolygonHole;
    static getRootAsCZMPolygonHole(bb: flatbuffers.ByteBuffer, obj?: CZMPolygonHole): CZMPolygonHole;
    static getSizePrefixedRootAsCZMPolygonHole(bb: flatbuffers.ByteBuffer, obj?: CZMPolygonHole): CZMPolygonHole;
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
    static startCZMPolygonHole(builder: flatbuffers.Builder): void;
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
    static endCZMPolygonHole(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMPolygonHole(builder: flatbuffers.Builder, POSITIONS_CARTOGRAPHIC_DEGREESOffset: flatbuffers.Offset, POSITIONS_CARTESIANOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CZMPolygonHoleT;
    unpackTo(_o: CZMPolygonHoleT): void;
}
export declare class CZMPolygonHoleT implements flatbuffers.IGeneratedObject {
    POSITIONS_CARTOGRAPHIC_DEGREES: (number)[];
    POSITIONS_CARTESIAN: (number)[];
    constructor(POSITIONS_CARTOGRAPHIC_DEGREES?: (number)[], POSITIONS_CARTESIAN?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolygonHole.d.ts.map