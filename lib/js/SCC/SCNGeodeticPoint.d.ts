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
    LATITUDE(): number;
    /**
     * Longitude in degrees.
     */
    LONGITUDE(): number;
    /**
     * Altitude above the reference ellipsoid in kilometers.
     */
    ALTITUDE(): number;
    static startSCNGeodeticPoint(builder: flatbuffers.Builder): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static endSCNGeodeticPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNGeodeticPoint(builder: flatbuffers.Builder, LATITUDE: number, LONGITUDE: number, ALTITUDE: number): flatbuffers.Offset;
    unpack(): SCNGeodeticPointT;
    unpackTo(_o: SCNGeodeticPointT): void;
}
export declare class SCNGeodeticPointT implements flatbuffers.IGeneratedObject {
    LATITUDE: number;
    LONGITUDE: number;
    ALTITUDE: number;
    constructor(LATITUDE?: number, LONGITUDE?: number, ALTITUDE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNGeodeticPoint.d.ts.map