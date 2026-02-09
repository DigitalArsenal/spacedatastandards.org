import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
import { KMLCoordinate, KMLCoordinateT } from './KMLCoordinate.js';
/**
 * LineString geometry
 */
export declare class KMLLineString implements flatbuffers.IUnpackableObject<KMLLineStringT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLLineString;
    static getRootAsKMLLineString(bb: flatbuffers.ByteBuffer, obj?: KMLLineString): KMLLineString;
    static getSizePrefixedRootAsKMLLineString(bb: flatbuffers.ByteBuffer, obj?: KMLLineString): KMLLineString;
    /**
     * Coordinates
     */
    COORDINATES(index: number, obj?: KMLCoordinate): KMLCoordinate | null;
    coordinatesLength(): number;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    /**
     * Whether to extrude to ground
     */
    EXTRUDE(): boolean;
    /**
     * Whether to tessellate (follow terrain)
     */
    TESSELLATE(): boolean;
    /**
     * gx:drawOrder
     */
    GX_DRAW_ORDER(): number;
    static startKMLLineString(builder: flatbuffers.Builder): void;
    static addCoordinates(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset): void;
    static createCoordinatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCoordinatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static addExtrude(builder: flatbuffers.Builder, EXTRUDE: boolean): void;
    static addTessellate(builder: flatbuffers.Builder, TESSELLATE: boolean): void;
    static addGxDrawOrder(builder: flatbuffers.Builder, GX_DRAW_ORDER: number): void;
    static endKMLLineString(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLineString(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset, ALTITUDE_MODE: KMLAltitudeMode, EXTRUDE: boolean, TESSELLATE: boolean, GX_DRAW_ORDER: number): flatbuffers.Offset;
    unpack(): KMLLineStringT;
    unpackTo(_o: KMLLineStringT): void;
}
export declare class KMLLineStringT implements flatbuffers.IGeneratedObject {
    COORDINATES: (KMLCoordinateT)[];
    ALTITUDE_MODE: KMLAltitudeMode;
    EXTRUDE: boolean;
    TESSELLATE: boolean;
    GX_DRAW_ORDER: number;
    constructor(COORDINATES?: (KMLCoordinateT)[], ALTITUDE_MODE?: KMLAltitudeMode, EXTRUDE?: boolean, TESSELLATE?: boolean, GX_DRAW_ORDER?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLineString.d.ts.map