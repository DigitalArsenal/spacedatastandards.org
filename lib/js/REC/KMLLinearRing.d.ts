import * as flatbuffers from 'flatbuffers';
import { KMLCoordinate, KMLCoordinateT } from './KMLCoordinate.js';
/**
 * LinearRing geometry
 */
export declare class KMLLinearRing implements flatbuffers.IUnpackableObject<KMLLinearRingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLLinearRing;
    static getRootAsKMLLinearRing(bb: flatbuffers.ByteBuffer, obj?: KMLLinearRing): KMLLinearRing;
    static getSizePrefixedRootAsKMLLinearRing(bb: flatbuffers.ByteBuffer, obj?: KMLLinearRing): KMLLinearRing;
    /**
     * Coordinates (first = last to close the ring)
     */
    COORDINATES(index: number, obj?: KMLCoordinate): KMLCoordinate | null;
    coordinatesLength(): number;
    static startKMLLinearRing(builder: flatbuffers.Builder): void;
    static addCoordinates(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset): void;
    static createCoordinatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCoordinatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLLinearRing(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLinearRing(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLLinearRingT;
    unpackTo(_o: KMLLinearRingT): void;
}
export declare class KMLLinearRingT implements flatbuffers.IGeneratedObject {
    COORDINATES: (KMLCoordinateT)[];
    constructor(COORDINATES?: (KMLCoordinateT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLinearRing.d.ts.map