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
    /**
     * True if altitude was explicitly provided (distinguishes 0 from absent)
     */
    HAS_ALTITUDE(): boolean;
    static startGJNPosition(builder: flatbuffers.Builder): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static addHasAltitude(builder: flatbuffers.Builder, HAS_ALTITUDE: boolean): void;
    static endGJNPosition(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGJNPosition(builder: flatbuffers.Builder, LONGITUDE: number, LATITUDE: number, ALTITUDE: number, HAS_ALTITUDE: boolean): flatbuffers.Offset;
    unpack(): GJNPositionT;
    unpackTo(_o: GJNPositionT): void;
}
export declare class GJNPositionT implements flatbuffers.IGeneratedObject {
    LONGITUDE: number;
    LATITUDE: number;
    ALTITUDE: number;
    HAS_ALTITUDE: boolean;
    constructor(LONGITUDE?: number, LATITUDE?: number, ALTITUDE?: number, HAS_ALTITUDE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNPosition.d.ts.map