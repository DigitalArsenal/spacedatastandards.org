import * as flatbuffers from 'flatbuffers';
/**
 * A single position (longitude, latitude, optional altitude)
 */
export declare class GJNPosition implements flatbuffers.IUnpackableObject<GJNPositionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GJNPosition;
    static getRootAsGJNPosition(bb: flatbuffers.ByteBuffer, obj?: GJNPosition): GJNPosition;
    static getSizePrefixedRootAsGJNPosition(bb: flatbuffers.ByteBuffer, obj?: GJNPosition): GJNPosition;
    /**
     * Longitude in decimal degrees (WGS84)
     */
    LONGITUDE(): number;
    /**
     * Latitude in decimal degrees (WGS84)
     */
    LATITUDE(): number;
    /**
     * Altitude in meters above WGS84 ellipsoid (optional)
     */
    ALTITUDE(): number;
    static startGJNPosition(builder: flatbuffers.Builder): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static endGJNPosition(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGJNPosition(builder: flatbuffers.Builder, LONGITUDE: number, LATITUDE: number, ALTITUDE: number): flatbuffers.Offset;
    unpack(): GJNPositionT;
    unpackTo(_o: GJNPositionT): void;
}
export declare class GJNPositionT implements flatbuffers.IGeneratedObject {
    LONGITUDE: number;
    LATITUDE: number;
    ALTITUDE: number;
    constructor(LONGITUDE?: number, LATITUDE?: number, ALTITUDE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNPosition.d.ts.map