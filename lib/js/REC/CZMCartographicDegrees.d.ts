import * as flatbuffers from 'flatbuffers';
/**
 * Cartographic position (longitude, latitude, height in radians/meters)
 */
export declare class CZMCartographicDegrees implements flatbuffers.IUnpackableObject<CZMCartographicDegreesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMCartographicDegrees;
    static getRootAsCZMCartographicDegrees(bb: flatbuffers.ByteBuffer, obj?: CZMCartographicDegrees): CZMCartographicDegrees;
    static getSizePrefixedRootAsCZMCartographicDegrees(bb: flatbuffers.ByteBuffer, obj?: CZMCartographicDegrees): CZMCartographicDegrees;
    /**
     * Longitude in degrees
     */
    LONGITUDE(): number;
    /**
     * Latitude in degrees
     */
    LATITUDE(): number;
    /**
     * Height in meters above WGS84 ellipsoid
     */
    HEIGHT(): number;
    static startCZMCartographicDegrees(builder: flatbuffers.Builder): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addHeight(builder: flatbuffers.Builder, HEIGHT: number): void;
    static endCZMCartographicDegrees(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMCartographicDegrees(builder: flatbuffers.Builder, LONGITUDE: number, LATITUDE: number, HEIGHT: number): flatbuffers.Offset;
    unpack(): CZMCartographicDegreesT;
    unpackTo(_o: CZMCartographicDegreesT): void;
}
export declare class CZMCartographicDegreesT implements flatbuffers.IGeneratedObject {
    LONGITUDE: number;
    LATITUDE: number;
    HEIGHT: number;
    constructor(LONGITUDE?: number, LATITUDE?: number, HEIGHT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMCartographicDegrees.d.ts.map