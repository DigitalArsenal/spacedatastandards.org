import * as flatbuffers from 'flatbuffers';
/**
 * Geometry table with information about geometric properties
 */
export declare class Geometry implements flatbuffers.IUnpackableObject<GeometryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Geometry;
    static getRootAsGeometry(bb: flatbuffers.ByteBuffer, obj?: Geometry): Geometry;
    static getSizePrefixedRootAsGeometry(bb: flatbuffers.ByteBuffer, obj?: Geometry): Geometry;
    /**
     * Type of geometry
     */
    geometryType(): string | null;
    geometryType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coordinates of the geometry
     */
    coordinates(index: number): number | null;
    coordinatesLength(): number;
    coordinatesArray(): Float32Array | null;
    static startGeometry(builder: flatbuffers.Builder): void;
    static addGeometryType(builder: flatbuffers.Builder, geometryTypeOffset: flatbuffers.Offset): void;
    static addCoordinates(builder: flatbuffers.Builder, coordinatesOffset: flatbuffers.Offset): void;
    static createCoordinatesVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoordinatesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoordinatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGeometry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGeometry(builder: flatbuffers.Builder, geometryTypeOffset: flatbuffers.Offset, coordinatesOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GeometryT;
    unpackTo(_o: GeometryT): void;
}
export declare class GeometryT implements flatbuffers.IGeneratedObject {
    geometryType: string | Uint8Array | null;
    coordinates: (number)[];
    constructor(geometryType?: string | Uint8Array | null, coordinates?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=geometry.d.ts.map