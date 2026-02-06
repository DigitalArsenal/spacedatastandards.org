import * as flatbuffers from 'flatbuffers';
/**
 * Beam Contour Point (gain pattern boundary)
 */
export declare class beamContourPoint implements flatbuffers.IUnpackableObject<beamContourPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): beamContourPoint;
    static getRootAsbeamContourPoint(bb: flatbuffers.ByteBuffer, obj?: beamContourPoint): beamContourPoint;
    static getSizePrefixedRootAsbeamContourPoint(bb: flatbuffers.ByteBuffer, obj?: beamContourPoint): beamContourPoint;
    /**
     * Latitude in degrees
     */
    LATITUDE(): number;
    /**
     * Longitude in degrees
     */
    LONGITUDE(): number;
    /**
     * Gain level in dBi at this contour
     */
    GAIN(): number;
    static startbeamContourPoint(builder: flatbuffers.Builder): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addGain(builder: flatbuffers.Builder, GAIN: number): void;
    static endbeamContourPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createbeamContourPoint(builder: flatbuffers.Builder, LATITUDE: number, LONGITUDE: number, GAIN: number): flatbuffers.Offset;
    unpack(): beamContourPointT;
    unpackTo(_o: beamContourPointT): void;
}
export declare class beamContourPointT implements flatbuffers.IGeneratedObject {
    LATITUDE: number;
    LONGITUDE: number;
    GAIN: number;
    constructor(LATITUDE?: number, LONGITUDE?: number, GAIN?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=beamContourPoint.d.ts.map