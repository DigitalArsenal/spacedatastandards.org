import * as flatbuffers from 'flatbuffers';
/**
 * KML coordinate (longitude, latitude, optional altitude)
 */
export declare class KMLCoordinate implements flatbuffers.IUnpackableObject<KMLCoordinateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLCoordinate;
    static getRootAsKMLCoordinate(bb: flatbuffers.ByteBuffer, obj?: KMLCoordinate): KMLCoordinate;
    static getSizePrefixedRootAsKMLCoordinate(bb: flatbuffers.ByteBuffer, obj?: KMLCoordinate): KMLCoordinate;
    /**
     * Longitude in decimal degrees
     */
    LONGITUDE(): number;
    /**
     * Latitude in decimal degrees
     */
    LATITUDE(): number;
    /**
     * Altitude in meters
     */
    ALTITUDE(): number;
    static startKMLCoordinate(builder: flatbuffers.Builder): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static endKMLCoordinate(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLCoordinate(builder: flatbuffers.Builder, LONGITUDE: number, LATITUDE: number, ALTITUDE: number): flatbuffers.Offset;
    unpack(): KMLCoordinateT;
    unpackTo(_o: KMLCoordinateT): void;
}
export declare class KMLCoordinateT implements flatbuffers.IGeneratedObject {
    LONGITUDE: number;
    LATITUDE: number;
    ALTITUDE: number;
    constructor(LONGITUDE?: number, LATITUDE?: number, ALTITUDE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLCoordinate.d.ts.map