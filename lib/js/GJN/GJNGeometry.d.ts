import * as flatbuffers from 'flatbuffers';
import { GJNGeometryType } from './GJNGeometryType.js';
import { GJNLinearRing, GJNLinearRingT } from './GJNLinearRing.js';
import { GJNPolygonRings, GJNPolygonRingsT } from './GJNPolygonRings.js';
import { GJNPosition, GJNPositionT } from './GJNPosition.js';
/**
 * GeoJSON Geometry object
 */
export declare class GJNGeometry implements flatbuffers.IUnpackableObject<GJNGeometryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GJNGeometry;
    static getRootAsGJNGeometry(bb: flatbuffers.ByteBuffer, obj?: GJNGeometry): GJNGeometry;
    static getSizePrefixedRootAsGJNGeometry(bb: flatbuffers.ByteBuffer, obj?: GJNGeometry): GJNGeometry;
    /**
     * Geometry type
     */
    TYPE(): GJNGeometryType;
    /**
     * Single position (for Point)
     */
    POINT(obj?: GJNPosition): GJNPosition | null;
    /**
     * Array of positions (for MultiPoint, LineString)
     */
    POSITIONS(index: number, obj?: GJNPosition): GJNPosition | null;
    positionsLength(): number;
    /**
     * Array of position arrays (for MultiLineString, Polygon rings)
     */
    RINGS(index: number, obj?: GJNLinearRing): GJNLinearRing | null;
    ringsLength(): number;
    /**
     * Array of polygons each as array of rings (for MultiPolygon)
     */
    POLYGON_RINGS(index: number, obj?: GJNPolygonRings): GJNPolygonRings | null;
    polygonRingsLength(): number;
    /**
     * Child geometries (for GeometryCollection)
     */
    GEOMETRIES(index: number, obj?: GJNGeometry): GJNGeometry | null;
    geometriesLength(): number;
    static startGJNGeometry(builder: flatbuffers.Builder): void;
    static addType(builder: flatbuffers.Builder, TYPE: GJNGeometryType): void;
    static addPoint(builder: flatbuffers.Builder, POINTOffset: flatbuffers.Offset): void;
    static addPositions(builder: flatbuffers.Builder, POSITIONSOffset: flatbuffers.Offset): void;
    static createPositionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPositionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRings(builder: flatbuffers.Builder, RINGSOffset: flatbuffers.Offset): void;
    static createRingsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRingsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolygonRings(builder: flatbuffers.Builder, POLYGON_RINGSOffset: flatbuffers.Offset): void;
    static createPolygonRingsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPolygonRingsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGeometries(builder: flatbuffers.Builder, GEOMETRIESOffset: flatbuffers.Offset): void;
    static createGeometriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGeometriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGJNGeometry(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): GJNGeometryT;
    unpackTo(_o: GJNGeometryT): void;
}
export declare class GJNGeometryT implements flatbuffers.IGeneratedObject {
    TYPE: GJNGeometryType;
    POINT: GJNPositionT | null;
    POSITIONS: (GJNPositionT)[];
    RINGS: (GJNLinearRingT)[];
    POLYGON_RINGS: (GJNPolygonRingsT)[];
    GEOMETRIES: (GJNGeometryT)[];
    constructor(TYPE?: GJNGeometryType, POINT?: GJNPositionT | null, POSITIONS?: (GJNPositionT)[], RINGS?: (GJNLinearRingT)[], POLYGON_RINGS?: (GJNPolygonRingsT)[], GEOMETRIES?: (GJNGeometryT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNGeometry.d.ts.map