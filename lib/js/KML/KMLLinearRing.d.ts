import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
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
    /**
     * Whether to extrude to ground
     */
    EXTRUDE(): boolean;
    /**
     * Whether to tessellate
     */
    TESSELLATE(): boolean;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    static startKMLLinearRing(builder: flatbuffers.Builder): void;
    static addCoordinates(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset): void;
    static createCoordinatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCoordinatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExtrude(builder: flatbuffers.Builder, EXTRUDE: boolean): void;
    static addTessellate(builder: flatbuffers.Builder, TESSELLATE: boolean): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static endKMLLinearRing(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLinearRing(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset, EXTRUDE: boolean, TESSELLATE: boolean, ALTITUDE_MODE: KMLAltitudeMode): flatbuffers.Offset;
    unpack(): KMLLinearRingT;
    unpackTo(_o: KMLLinearRingT): void;
}
export declare class KMLLinearRingT implements flatbuffers.IGeneratedObject {
    COORDINATES: (KMLCoordinateT)[];
    EXTRUDE: boolean;
    TESSELLATE: boolean;
    ALTITUDE_MODE: KMLAltitudeMode;
    constructor(COORDINATES?: (KMLCoordinateT)[], EXTRUDE?: boolean, TESSELLATE?: boolean, ALTITUDE_MODE?: KMLAltitudeMode);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLinearRing.d.ts.map