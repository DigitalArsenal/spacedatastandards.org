import * as flatbuffers from 'flatbuffers';
/**
 * Azimuth-dependent minimum elevation mask point.
 */
export declare class ACWElevationMaskPoint implements flatbuffers.IUnpackableObject<ACWElevationMaskPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWElevationMaskPoint;
    static getRootAsACWElevationMaskPoint(bb: flatbuffers.ByteBuffer, obj?: ACWElevationMaskPoint): ACWElevationMaskPoint;
    static getSizePrefixedRootAsACWElevationMaskPoint(bb: flatbuffers.ByteBuffer, obj?: ACWElevationMaskPoint): ACWElevationMaskPoint;
    /**
     * Azimuth, radians in the TopocentricFrame convention.
     */
    AZIMUTH_RAD(): number;
    /**
     * Minimum visible elevation at the azimuth, radians.
     */
    ELEVATION_RAD(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_AZIMUTH_RAD(): boolean;
    HAS_ELEVATION_RAD(): boolean;
    static startACWElevationMaskPoint(builder: flatbuffers.Builder): void;
    static addAzimuthRad(builder: flatbuffers.Builder, AZIMUTH_RAD: number): void;
    static addElevationRad(builder: flatbuffers.Builder, ELEVATION_RAD: number): void;
    static addHasAzimuthRad(builder: flatbuffers.Builder, HAS_AZIMUTH_RAD: boolean): void;
    static addHasElevationRad(builder: flatbuffers.Builder, HAS_ELEVATION_RAD: boolean): void;
    static endACWElevationMaskPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWElevationMaskPoint(builder: flatbuffers.Builder, AZIMUTH_RAD: number, ELEVATION_RAD: number, HAS_AZIMUTH_RAD: boolean, HAS_ELEVATION_RAD: boolean): flatbuffers.Offset;
    unpack(): ACWElevationMaskPointT;
    unpackTo(_o: ACWElevationMaskPointT): void;
}
export declare class ACWElevationMaskPointT implements flatbuffers.IGeneratedObject {
    AZIMUTH_RAD: number;
    ELEVATION_RAD: number;
    HAS_AZIMUTH_RAD: boolean;
    HAS_ELEVATION_RAD: boolean;
    constructor(AZIMUTH_RAD?: number, ELEVATION_RAD?: number, HAS_AZIMUTH_RAD?: boolean, HAS_ELEVATION_RAD?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWElevationMaskPoint.d.ts.map