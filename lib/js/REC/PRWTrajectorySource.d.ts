import * as flatbuffers from 'flatbuffers';
import { PPE, PPET } from './PPE.js';
import { PRWFitQuality, PRWFitQualityT } from './PRWFitQuality.js';
/**
 * Existing PPE retains km/km/s, midpoint/time-system and coefficient meaning.
 */
export declare class PRWTrajectorySource implements flatbuffers.IUnpackableObject<PRWTrajectorySourceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWTrajectorySource;
    static getRootAsPRWTrajectorySource(bb: flatbuffers.ByteBuffer, obj?: PRWTrajectorySource): PRWTrajectorySource;
    static getSizePrefixedRootAsPRWTrajectorySource(bb: flatbuffers.ByteBuffer, obj?: PRWTrajectorySource): PRWTrajectorySource;
    SOURCE_HANDLE(): number;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPHEMERIS(obj?: PPE): PPE | null;
    /**
     * One quality record per PPE.POSITION_RECORDS entry, same order.
     */
    SEGMENT_QUALITY(index: number, obj?: PRWFitQuality): PRWFitQuality | null;
    segmentQualityLength(): number;
    static startPRWTrajectorySource(builder: flatbuffers.Builder): void;
    static addSourceHandle(builder: flatbuffers.Builder, SOURCE_HANDLE: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addEphemeris(builder: flatbuffers.Builder, EPHEMERISOffset: flatbuffers.Offset): void;
    static addSegmentQuality(builder: flatbuffers.Builder, SEGMENT_QUALITYOffset: flatbuffers.Offset): void;
    static createSegmentQualityVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentQualityVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWTrajectorySource(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWTrajectorySourceT;
    unpackTo(_o: PRWTrajectorySourceT): void;
}
export declare class PRWTrajectorySourceT implements flatbuffers.IGeneratedObject {
    SOURCE_HANDLE: number;
    OBJECT_ID: string | Uint8Array | null;
    EPHEMERIS: PPET | null;
    SEGMENT_QUALITY: (PRWFitQualityT)[];
    constructor(SOURCE_HANDLE?: number, OBJECT_ID?: string | Uint8Array | null, EPHEMERIS?: PPET | null, SEGMENT_QUALITY?: (PRWFitQualityT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWTrajectorySource.d.ts.map