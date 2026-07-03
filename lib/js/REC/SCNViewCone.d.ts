import * as flatbuffers from 'flatbuffers';
/**
 * Sensor or site view-cone overlay used by scenario tools.
 */
export declare class SCNViewCone implements flatbuffers.IUnpackableObject<SCNViewConeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNViewCone;
    static getRootAsSCNViewCone(bb: flatbuffers.ByteBuffer, obj?: SCNViewCone): SCNViewCone;
    static getSizePrefixedRootAsSCNViewCone(bb: flatbuffers.ByteBuffer, obj?: SCNViewCone): SCNViewCone;
    MIN_ELEVATION_DEG(): number;
    MAX_ELEVATION_DEG(): number;
    MIN_AZIMUTH_DEG(): number;
    MAX_AZIMUTH_DEG(): number;
    MAX_RANGE_KM(): number;
    HALF_ANGLE_DEG(): number;
    DYNAMIC_RANGE(): string | null;
    DYNAMIC_RANGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSCNViewCone(builder: flatbuffers.Builder): void;
    static addMinElevationDeg(builder: flatbuffers.Builder, MIN_ELEVATION_DEG: number): void;
    static addMaxElevationDeg(builder: flatbuffers.Builder, MAX_ELEVATION_DEG: number): void;
    static addMinAzimuthDeg(builder: flatbuffers.Builder, MIN_AZIMUTH_DEG: number): void;
    static addMaxAzimuthDeg(builder: flatbuffers.Builder, MAX_AZIMUTH_DEG: number): void;
    static addMaxRangeKm(builder: flatbuffers.Builder, MAX_RANGE_KM: number): void;
    static addHalfAngleDeg(builder: flatbuffers.Builder, HALF_ANGLE_DEG: number): void;
    static addDynamicRange(builder: flatbuffers.Builder, DYNAMIC_RANGEOffset: flatbuffers.Offset): void;
    static endSCNViewCone(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNViewCone(builder: flatbuffers.Builder, MIN_ELEVATION_DEG: number, MAX_ELEVATION_DEG: number, MIN_AZIMUTH_DEG: number, MAX_AZIMUTH_DEG: number, MAX_RANGE_KM: number, HALF_ANGLE_DEG: number, DYNAMIC_RANGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCNViewConeT;
    unpackTo(_o: SCNViewConeT): void;
}
export declare class SCNViewConeT implements flatbuffers.IGeneratedObject {
    MIN_ELEVATION_DEG: number;
    MAX_ELEVATION_DEG: number;
    MIN_AZIMUTH_DEG: number;
    MAX_AZIMUTH_DEG: number;
    MAX_RANGE_KM: number;
    HALF_ANGLE_DEG: number;
    DYNAMIC_RANGE: string | Uint8Array | null;
    constructor(MIN_ELEVATION_DEG?: number, MAX_ELEVATION_DEG?: number, MIN_AZIMUTH_DEG?: number, MAX_AZIMUTH_DEG?: number, MAX_RANGE_KM?: number, HALF_ANGLE_DEG?: number, DYNAMIC_RANGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNViewCone.d.ts.map