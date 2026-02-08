import * as flatbuffers from 'flatbuffers';
import { GPXWaypoint, GPXWaypointT } from './GPXWaypoint.js';
/**
 * Track segment (continuous span of track points)
 */
export declare class GPXTrackSegment implements flatbuffers.IUnpackableObject<GPXTrackSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GPXTrackSegment;
    static getRootAsGPXTrackSegment(bb: flatbuffers.ByteBuffer, obj?: GPXTrackSegment): GPXTrackSegment;
    static getSizePrefixedRootAsGPXTrackSegment(bb: flatbuffers.ByteBuffer, obj?: GPXTrackSegment): GPXTrackSegment;
    /**
     * Ordered track points in this segment
     */
    POINTS(index: number, obj?: GPXWaypoint): GPXWaypoint | null;
    pointsLength(): number;
    static startGPXTrackSegment(builder: flatbuffers.Builder): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGPXTrackSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGPXTrackSegment(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GPXTrackSegmentT;
    unpackTo(_o: GPXTrackSegmentT): void;
}
export declare class GPXTrackSegmentT implements flatbuffers.IGeneratedObject {
    POINTS: (GPXWaypointT)[];
    constructor(POINTS?: (GPXWaypointT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GPXTrackSegment.d.ts.map