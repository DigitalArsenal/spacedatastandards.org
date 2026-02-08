import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
import { KMLCoordinate, KMLCoordinateT } from './KMLCoordinate.js';
/**
 * Point geometry
 */
export declare class KMLPoint implements flatbuffers.IUnpackableObject<KMLPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLPoint;
    static getRootAsKMLPoint(bb: flatbuffers.ByteBuffer, obj?: KMLPoint): KMLPoint;
    static getSizePrefixedRootAsKMLPoint(bb: flatbuffers.ByteBuffer, obj?: KMLPoint): KMLPoint;
    /**
     * Coordinate
     */
    COORDINATES(obj?: KMLCoordinate): KMLCoordinate | null;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    /**
     * Whether to extrude to ground
     */
    EXTRUDE(): boolean;
    static startKMLPoint(builder: flatbuffers.Builder): void;
    static addCoordinates(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static addExtrude(builder: flatbuffers.Builder, EXTRUDE: boolean): void;
    static endKMLPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLPoint(builder: flatbuffers.Builder, COORDINATESOffset: flatbuffers.Offset, ALTITUDE_MODE: KMLAltitudeMode, EXTRUDE: boolean): flatbuffers.Offset;
    unpack(): KMLPointT;
    unpackTo(_o: KMLPointT): void;
}
export declare class KMLPointT implements flatbuffers.IGeneratedObject {
    COORDINATES: KMLCoordinateT | null;
    ALTITUDE_MODE: KMLAltitudeMode;
    EXTRUDE: boolean;
    constructor(COORDINATES?: KMLCoordinateT | null, ALTITUDE_MODE?: KMLAltitudeMode, EXTRUDE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLPoint.d.ts.map