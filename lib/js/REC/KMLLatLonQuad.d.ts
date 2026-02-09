import * as flatbuffers from 'flatbuffers';
import { KMLCoordinate, KMLCoordinateT } from './KMLCoordinate.js';
/**
 * LatLonQuad — four corner coordinates for ground overlay
 */
export declare class KMLLatLonQuad implements flatbuffers.IUnpackableObject<KMLLatLonQuadT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLLatLonQuad;
    static getRootAsKMLLatLonQuad(bb: flatbuffers.ByteBuffer, obj?: KMLLatLonQuad): KMLLatLonQuad;
    static getSizePrefixedRootAsKMLLatLonQuad(bb: flatbuffers.ByteBuffer, obj?: KMLLatLonQuad): KMLLatLonQuad;
    /**
     * Four corner coordinates
     */
    COORDINATES(index: number, obj?: KMLCoordinate): KMLCoordinate | null;
    coordinatesLength(): number;
    static startKMLLatLonQuad(builder: flatbuffers.Builder): void;
    static addCoordinates(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset): void;
    static createCoordinatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCoordinatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLLatLonQuad(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLatLonQuad(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLLatLonQuadT;
    unpackTo(_o: KMLLatLonQuadT): void;
}
export declare class KMLLatLonQuadT implements flatbuffers.IGeneratedObject {
    COORDINATES: (KMLCoordinateT)[];
    constructor(COORDINATES?: (KMLCoordinateT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLatLonQuad.d.ts.map