import * as flatbuffers from 'flatbuffers';
/**
 * Geodetic point in latitude, longitude, altitude order.
 */
export declare class SCNGeodeticPoint implements flatbuffers.IUnpackableObject<SCNGeodeticPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNGeodeticPoint;
    static getRootAsSCNGeodeticPoint(bb: flatbuffers.ByteBuffer, obj?: SCNGeodeticPoint): SCNGeodeticPoint;
    static getSizePrefixedRootAsSCNGeodeticPoint(bb: flatbuffers.ByteBuffer, obj?: SCNGeodeticPoint): SCNGeodeticPoint;
    /**
     * Latitude in degrees.
     */
    LATITUDE_DEG(): number;
    /**
     * Longitude in degrees.
     */
    LONGITUDE_DEG(): number;
    /**
     * Altitude above the reference ellipsoid in kilometers.
     */
    ALTITUDE_KM(): number;
    static startSCNGeodeticPoint(builder: flatbuffers.Builder): void;
    static addLatitudeDeg(builder: flatbuffers.Builder, LATITUDE_DEG: number): void;
    static addLongitudeDeg(builder: flatbuffers.Builder, LONGITUDE_DEG: number): void;
    static addAltitudeKm(builder: flatbuffers.Builder, ALTITUDE_KM: number): void;
    static endSCNGeodeticPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNGeodeticPoint(builder: flatbuffers.Builder, LATITUDE_DEG: number, LONGITUDE_DEG: number, ALTITUDE_KM: number): flatbuffers.Offset;
    unpack(): SCNGeodeticPointT;
    unpackTo(_o: SCNGeodeticPointT): void;
}
export declare class SCNGeodeticPointT implements flatbuffers.IGeneratedObject {
    LATITUDE_DEG: number;
    LONGITUDE_DEG: number;
    ALTITUDE_KM: number;
    constructor(LATITUDE_DEG?: number, LONGITUDE_DEG?: number, ALTITUDE_KM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNGeodeticPoint.d.ts.map