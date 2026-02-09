import * as flatbuffers from 'flatbuffers';
import { KMLLineString, KMLLineStringT } from './KMLLineString.js';
import { KMLLinearRing, KMLLinearRingT } from './KMLLinearRing.js';
import { KMLModel, KMLModelT } from './KMLModel.js';
import { KMLMultiTrack, KMLMultiTrackT } from './KMLMultiTrack.js';
import { KMLPoint, KMLPointT } from './KMLPoint.js';
import { KMLPolygon, KMLPolygonT } from './KMLPolygon.js';
import { KMLTrack, KMLTrackT } from './KMLTrack.js';
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
    /**
     * Child linear rings (standalone)
     */
    LINEAR_RINGS(index: number, obj?: KMLLinearRing): KMLLinearRing | null;
    linearRingsLength(): number;
    /**
     * Child 3D models
     */
    MODELS(index: number, obj?: KMLModel): KMLModel | null;
    modelsLength(): number;
    /**
     * Child tracks
     */
    TRACKS(index: number, obj?: KMLTrack): KMLTrack | null;
    tracksLength(): number;
    /**
     * Child multi-tracks
     */
    MULTI_TRACKS(index: number, obj?: KMLMultiTrack): KMLMultiTrack | null;
    multiTracksLength(): number;
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
    static addLinearRings(builder: flatbuffers.Builder, LINEAR_RINGSOffset: flatbuffers.Offset): void;
    static createLinearRingsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinearRingsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addModels(builder: flatbuffers.Builder, MODELSOffset: flatbuffers.Offset): void;
    static createModelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startModelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTracks(builder: flatbuffers.Builder, TRACKSOffset: flatbuffers.Offset): void;
    static createTracksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTracksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMultiTracks(builder: flatbuffers.Builder, MULTI_TRACKSOffset: flatbuffers.Offset): void;
    static createMultiTracksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMultiTracksVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLMultiGeometry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLMultiGeometry(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset, LINE_STRINGSOffset: flatbuffers.Offset, POLYGONSOffset: flatbuffers.Offset, MULTI_GEOMETRIESOffset: flatbuffers.Offset, LINEAR_RINGSOffset: flatbuffers.Offset, MODELSOffset: flatbuffers.Offset, TRACKSOffset: flatbuffers.Offset, MULTI_TRACKSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLMultiGeometryT;
    unpackTo(_o: KMLMultiGeometryT): void;
}
export declare class KMLMultiGeometryT implements flatbuffers.IGeneratedObject {
    POINTS: (KMLPointT)[];
    LINE_STRINGS: (KMLLineStringT)[];
    POLYGONS: (KMLPolygonT)[];
    MULTI_GEOMETRIES: (KMLMultiGeometryT)[];
    LINEAR_RINGS: (KMLLinearRingT)[];
    MODELS: (KMLModelT)[];
    TRACKS: (KMLTrackT)[];
    MULTI_TRACKS: (KMLMultiTrackT)[];
    constructor(POINTS?: (KMLPointT)[], LINE_STRINGS?: (KMLLineStringT)[], POLYGONS?: (KMLPolygonT)[], MULTI_GEOMETRIES?: (KMLMultiGeometryT)[], LINEAR_RINGS?: (KMLLinearRingT)[], MODELS?: (KMLModelT)[], TRACKS?: (KMLTrackT)[], MULTI_TRACKS?: (KMLMultiTrackT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLMultiGeometry.d.ts.map