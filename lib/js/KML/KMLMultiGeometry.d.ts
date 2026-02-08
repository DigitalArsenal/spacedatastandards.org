import * as flatbuffers from 'flatbuffers';
import { KMLLineString, KMLLineStringT } from './KMLLineString.js';
import { KMLPoint, KMLPointT } from './KMLPoint.js';
import { KMLPolygon, KMLPolygonT } from './KMLPolygon.js';
/**
 * MultiGeometry
 */
export declare class KMLMultiGeometry implements flatbuffers.IUnpackableObject<KMLMultiGeometryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLMultiGeometry;
    static getRootAsKMLMultiGeometry(bb: flatbuffers.ByteBuffer, obj?: KMLMultiGeometry): KMLMultiGeometry;
    static getSizePrefixedRootAsKMLMultiGeometry(bb: flatbuffers.ByteBuffer, obj?: KMLMultiGeometry): KMLMultiGeometry;
    /**
     * Child points
     */
    POINTS(index: number, obj?: KMLPoint): KMLPoint | null;
    pointsLength(): number;
    /**
     * Child line strings
     */
    LINE_STRINGS(index: number, obj?: KMLLineString): KMLLineString | null;
    lineStringsLength(): number;
    /**
     * Child polygons
     */
    POLYGONS(index: number, obj?: KMLPolygon): KMLPolygon | null;
    polygonsLength(): number;
    /**
     * Nested multi-geometries
     */
    MULTI_GEOMETRIES(index: number, obj?: KMLMultiGeometry): KMLMultiGeometry | null;
    multiGeometriesLength(): number;
    static startKMLMultiGeometry(builder: flatbuffers.Builder): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLineStrings(builder: flatbuffers.Builder, LINE_STRINGSOffset: flatbuffers.Offset): void;
    static createLineStringsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLineStringsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolygons(builder: flatbuffers.Builder, POLYGONSOffset: flatbuffers.Offset): void;
    static createPolygonsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPolygonsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMultiGeometries(builder: flatbuffers.Builder, MULTI_GEOMETRIESOffset: flatbuffers.Offset): void;
    static createMultiGeometriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMultiGeometriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLMultiGeometry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLMultiGeometry(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset, LINE_STRINGSOffset: flatbuffers.Offset, POLYGONSOffset: flatbuffers.Offset, MULTI_GEOMETRIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLMultiGeometryT;
    unpackTo(_o: KMLMultiGeometryT): void;
}
export declare class KMLMultiGeometryT implements flatbuffers.IGeneratedObject {
    POINTS: (KMLPointT)[];
    LINE_STRINGS: (KMLLineStringT)[];
    POLYGONS: (KMLPolygonT)[];
    MULTI_GEOMETRIES: (KMLMultiGeometryT)[];
    constructor(POINTS?: (KMLPointT)[], LINE_STRINGS?: (KMLLineStringT)[], POLYGONS?: (KMLPolygonT)[], MULTI_GEOMETRIES?: (KMLMultiGeometryT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLMultiGeometry.d.ts.map