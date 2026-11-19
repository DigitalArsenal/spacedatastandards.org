import * as flatbuffers from 'flatbuffers';
import { scvCoordinateFrame } from './scvCoordinateFrame.js';
import { scvGeometryDomain } from './scvGeometryDomain.js';
export declare class SCVSwathSegment implements flatbuffers.IUnpackableObject<SCVSwathSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVSwathSegment;
    static getRootAsSCVSwathSegment(bb: flatbuffers.ByteBuffer, obj?: SCVSwathSegment): SCVSwathSegment;
    static getSizePrefixedRootAsSCVSwathSegment(bb: flatbuffers.ByteBuffer, obj?: SCVSwathSegment): SCVSwathSegment;
    SEGMENT_ID(): number;
    SENSOR_ID(): number;
    WINDOW_INDEX(): number;
    DOMAIN(): scvGeometryDomain;
    FRAME(): scvCoordinateFrame;
    START_OFFSET_SEC(): number;
    STOP_OFFSET_SEC(): number;
    VERTEX_OFFSET(): number;
    VERTEX_COUNT(): number;
    INDEX_OFFSET(): number;
    INDEX_COUNT(): number;
    SENSOR_IDS(index: number): number | null;
    sensorIdsLength(): number;
    sensorIdsArray(): Uint32Array | null;
    static startSCVSwathSegment(builder: flatbuffers.Builder): void;
    static addSegmentId(builder: flatbuffers.Builder, SEGMENT_ID: number): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_ID: number): void;
    static addWindowIndex(builder: flatbuffers.Builder, WINDOW_INDEX: number): void;
    static addDomain(builder: flatbuffers.Builder, DOMAIN: scvGeometryDomain): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: scvCoordinateFrame): void;
    static addStartOffsetSec(builder: flatbuffers.Builder, START_OFFSET_SEC: number): void;
    static addStopOffsetSec(builder: flatbuffers.Builder, STOP_OFFSET_SEC: number): void;
    static addVertexOffset(builder: flatbuffers.Builder, VERTEX_OFFSET: number): void;
    static addVertexCount(builder: flatbuffers.Builder, VERTEX_COUNT: number): void;
    static addIndexOffset(builder: flatbuffers.Builder, INDEX_OFFSET: number): void;
    static addIndexCount(builder: flatbuffers.Builder, INDEX_COUNT: number): void;
    static addSensorIds(builder: flatbuffers.Builder, SENSOR_IDSOffset: flatbuffers.Offset): void;
    static createSensorIdsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSensorIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSensorIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCVSwathSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVSwathSegment(builder: flatbuffers.Builder, SEGMENT_ID: number, SENSOR_ID: number, WINDOW_INDEX: number, DOMAIN: scvGeometryDomain, FRAME: scvCoordinateFrame, START_OFFSET_SEC: number, STOP_OFFSET_SEC: number, VERTEX_OFFSET: number, VERTEX_COUNT: number, INDEX_OFFSET: number, INDEX_COUNT: number, SENSOR_IDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCVSwathSegmentT;
    unpackTo(_o: SCVSwathSegmentT): void;
}
export declare class SCVSwathSegmentT implements flatbuffers.IGeneratedObject {
    SEGMENT_ID: number;
    SENSOR_ID: number;
    WINDOW_INDEX: number;
    DOMAIN: scvGeometryDomain;
    FRAME: scvCoordinateFrame;
    START_OFFSET_SEC: number;
    STOP_OFFSET_SEC: number;
    VERTEX_OFFSET: number;
    VERTEX_COUNT: number;
    INDEX_OFFSET: number;
    INDEX_COUNT: number;
    SENSOR_IDS: (number)[];
    constructor(SEGMENT_ID?: number, SENSOR_ID?: number, WINDOW_INDEX?: number, DOMAIN?: scvGeometryDomain, FRAME?: scvCoordinateFrame, START_OFFSET_SEC?: number, STOP_OFFSET_SEC?: number, VERTEX_OFFSET?: number, VERTEX_COUNT?: number, INDEX_OFFSET?: number, INDEX_COUNT?: number, SENSOR_IDS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVSwathSegment.d.ts.map