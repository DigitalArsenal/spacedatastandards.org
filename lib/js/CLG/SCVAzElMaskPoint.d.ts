import * as flatbuffers from 'flatbuffers';
/**
 * One point of an azimuth/elevation mask: the lowest elevation at which the
 * sensor sees at that azimuth (a terrain or structure horizon). The mask is the
 * polyline through its points ordered by AZIMUTH_DEG, wrapping from the last
 * point to the first across 360 degrees, linearly interpolated in azimuth.
 */
export declare class SCVAzElMaskPoint implements flatbuffers.IUnpackableObject<SCVAzElMaskPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVAzElMaskPoint;
    static getRootAsSCVAzElMaskPoint(bb: flatbuffers.ByteBuffer, obj?: SCVAzElMaskPoint): SCVAzElMaskPoint;
    static getSizePrefixedRootAsSCVAzElMaskPoint(bb: flatbuffers.ByteBuffer, obj?: SCVAzElMaskPoint): SCVAzElMaskPoint;
    /**
     * Azimuth, degrees clockwise from north, in [0, 360).
     */
    AZIMUTH_DEG(): number;
    /**
     * Minimum visible elevation at AZIMUTH_DEG, degrees above the local horizontal.
     */
    MIN_ELEVATION_DEG(): number;
    static startSCVAzElMaskPoint(builder: flatbuffers.Builder): void;
    static addAzimuthDeg(builder: flatbuffers.Builder, AZIMUTH_DEG: number): void;
    static addMinElevationDeg(builder: flatbuffers.Builder, MIN_ELEVATION_DEG: number): void;
    static endSCVAzElMaskPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVAzElMaskPoint(builder: flatbuffers.Builder, AZIMUTH_DEG: number, MIN_ELEVATION_DEG: number): flatbuffers.Offset;
    unpack(): SCVAzElMaskPointT;
    unpackTo(_o: SCVAzElMaskPointT): void;
}
export declare class SCVAzElMaskPointT implements flatbuffers.IGeneratedObject {
    AZIMUTH_DEG: number;
    MIN_ELEVATION_DEG: number;
    constructor(AZIMUTH_DEG?: number, MIN_ELEVATION_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVAzElMaskPoint.d.ts.map