import * as flatbuffers from 'flatbuffers';
import { SCVMemoryRegion, SCVMemoryRegionT } from './SCVMemoryRegion.js';
import { SCVSwathSegment, SCVSwathSegmentT } from './SCVSwathSegment.js';
import { scvCoordinateFrame } from './scvCoordinateFrame.js';
import { scvGeometryDomain } from './scvGeometryDomain.js';
import { scvGeometryEncoding } from './scvGeometryEncoding.js';
export declare class SCVPackedGeometryChunk implements flatbuffers.IUnpackableObject<SCVPackedGeometryChunkT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVPackedGeometryChunk;
    static getRootAsSCVPackedGeometryChunk(bb: flatbuffers.ByteBuffer, obj?: SCVPackedGeometryChunk): SCVPackedGeometryChunk;
    static getSizePrefixedRootAsSCVPackedGeometryChunk(bb: flatbuffers.ByteBuffer, obj?: SCVPackedGeometryChunk): SCVPackedGeometryChunk;
    JOB_ID(): string | null;
    JOB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRACE_ID(): bigint;
    CHUNK_INDEX(): number;
    WINDOW_START_INDEX(): number;
    WINDOW_COUNT(): number;
    DOMAIN(): scvGeometryDomain;
    FRAME(): scvCoordinateFrame;
    ENCODING(): scvGeometryEncoding;
    TIME_START_OFFSET_SEC(): number;
    TIME_STOP_OFFSET_SEC(): number;
    MEMORY_REGIONS(index: number, obj?: SCVMemoryRegion): SCVMemoryRegion | null;
    memoryRegionsLength(): number;
    POSITIONS_REGION_ID(): number;
    POSITIONS_RECORD_INDEX(): number;
    NORMALS_REGION_ID(): number;
    NORMALS_RECORD_INDEX(): number;
    ST_REGION_ID(): number;
    ST_RECORD_INDEX(): number;
    REVEAL_COORDS_REGION_ID(): number;
    REVEAL_COORDS_RECORD_INDEX(): number;
    INDICES_REGION_ID(): number;
    INDICES_RECORD_INDEX(): number;
    POSITIONS(index: number): number | null;
    positionsLength(): number;
    positionsArray(): Float32Array | null;
    NORMALS(index: number): number | null;
    normalsLength(): number;
    normalsArray(): Float32Array | null;
    ST(index: number): number | null;
    stLength(): number;
    stArray(): Float32Array | null;
    REVEAL_COORDS(index: number): number | null;
    revealCoordsLength(): number;
    revealCoordsArray(): Float32Array | null;
    INDICES(index: number): number | null;
    indicesLength(): number;
    indicesArray(): Uint32Array | null;
    SEGMENT_IDS(index: number): number | null;
    segmentIdsLength(): number;
    segmentIdsArray(): Uint32Array | null;
    SENSOR_IDS(index: number): number | null;
    sensorIdsLength(): number;
    sensorIdsArray(): Uint32Array | null;
    SEGMENTS(index: number, obj?: SCVSwathSegment): SCVSwathSegment | null;
    segmentsLength(): number;
    static startSCVPackedGeometryChunk(builder: flatbuffers.Builder): void;
    static addJobId(builder: flatbuffers.Builder, JOB_IDOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_ID: bigint): void;
    static addChunkIndex(builder: flatbuffers.Builder, CHUNK_INDEX: number): void;
    static addWindowStartIndex(builder: flatbuffers.Builder, WINDOW_START_INDEX: number): void;
    static addWindowCount(builder: flatbuffers.Builder, WINDOW_COUNT: number): void;
    static addDomain(builder: flatbuffers.Builder, DOMAIN: scvGeometryDomain): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: scvCoordinateFrame): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: scvGeometryEncoding): void;
    static addTimeStartOffsetSec(builder: flatbuffers.Builder, TIME_START_OFFSET_SEC: number): void;
    static addTimeStopOffsetSec(builder: flatbuffers.Builder, TIME_STOP_OFFSET_SEC: number): void;
    static addMemoryRegions(builder: flatbuffers.Builder, MEMORY_REGIONSOffset: flatbuffers.Offset): void;
    static createMemoryRegionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMemoryRegionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositionsRegionId(builder: flatbuffers.Builder, POSITIONS_REGION_ID: number): void;
    static addPositionsRecordIndex(builder: flatbuffers.Builder, POSITIONS_RECORD_INDEX: number): void;
    static addNormalsRegionId(builder: flatbuffers.Builder, NORMALS_REGION_ID: number): void;
    static addNormalsRecordIndex(builder: flatbuffers.Builder, NORMALS_RECORD_INDEX: number): void;
    static addStRegionId(builder: flatbuffers.Builder, ST_REGION_ID: number): void;
    static addStRecordIndex(builder: flatbuffers.Builder, ST_RECORD_INDEX: number): void;
    static addRevealCoordsRegionId(builder: flatbuffers.Builder, REVEAL_COORDS_REGION_ID: number): void;
    static addRevealCoordsRecordIndex(builder: flatbuffers.Builder, REVEAL_COORDS_RECORD_INDEX: number): void;
    static addIndicesRegionId(builder: flatbuffers.Builder, INDICES_REGION_ID: number): void;
    static addIndicesRecordIndex(builder: flatbuffers.Builder, INDICES_RECORD_INDEX: number): void;
    static addPositions(builder: flatbuffers.Builder, POSITIONSOffset: flatbuffers.Offset): void;
    static createPositionsVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNormals(builder: flatbuffers.Builder, NORMALSOffset: flatbuffers.Offset): void;
    static createNormalsVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNormalsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNormalsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSt(builder: flatbuffers.Builder, STOffset: flatbuffers.Offset): void;
    static createStVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRevealCoords(builder: flatbuffers.Builder, REVEAL_COORDSOffset: flatbuffers.Offset): void;
    static createRevealCoordsVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRevealCoordsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRevealCoordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIndices(builder: flatbuffers.Builder, INDICESOffset: flatbuffers.Offset): void;
    static createIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIndicesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegmentIds(builder: flatbuffers.Builder, SEGMENT_IDSOffset: flatbuffers.Offset): void;
    static createSegmentIdsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSegmentIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSegmentIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSensorIds(builder: flatbuffers.Builder, SENSOR_IDSOffset: flatbuffers.Offset): void;
    static createSensorIdsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSensorIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSensorIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static createSegmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCVPackedGeometryChunk(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVPackedGeometryChunk(builder: flatbuffers.Builder, JOB_IDOffset: flatbuffers.Offset, TRACE_ID: bigint, CHUNK_INDEX: number, WINDOW_START_INDEX: number, WINDOW_COUNT: number, DOMAIN: scvGeometryDomain, FRAME: scvCoordinateFrame, ENCODING: scvGeometryEncoding, TIME_START_OFFSET_SEC: number, TIME_STOP_OFFSET_SEC: number, MEMORY_REGIONSOffset: flatbuffers.Offset, POSITIONS_REGION_ID: number, POSITIONS_RECORD_INDEX: number, NORMALS_REGION_ID: number, NORMALS_RECORD_INDEX: number, ST_REGION_ID: number, ST_RECORD_INDEX: number, REVEAL_COORDS_REGION_ID: number, REVEAL_COORDS_RECORD_INDEX: number, INDICES_REGION_ID: number, INDICES_RECORD_INDEX: number, POSITIONSOffset: flatbuffers.Offset, NORMALSOffset: flatbuffers.Offset, STOffset: flatbuffers.Offset, REVEAL_COORDSOffset: flatbuffers.Offset, INDICESOffset: flatbuffers.Offset, SEGMENT_IDSOffset: flatbuffers.Offset, SENSOR_IDSOffset: flatbuffers.Offset, SEGMENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCVPackedGeometryChunkT;
    unpackTo(_o: SCVPackedGeometryChunkT): void;
}
export declare class SCVPackedGeometryChunkT implements flatbuffers.IGeneratedObject {
    JOB_ID: string | Uint8Array | null;
    TRACE_ID: bigint;
    CHUNK_INDEX: number;
    WINDOW_START_INDEX: number;
    WINDOW_COUNT: number;
    DOMAIN: scvGeometryDomain;
    FRAME: scvCoordinateFrame;
    ENCODING: scvGeometryEncoding;
    TIME_START_OFFSET_SEC: number;
    TIME_STOP_OFFSET_SEC: number;
    MEMORY_REGIONS: (SCVMemoryRegionT)[];
    POSITIONS_REGION_ID: number;
    POSITIONS_RECORD_INDEX: number;
    NORMALS_REGION_ID: number;
    NORMALS_RECORD_INDEX: number;
    ST_REGION_ID: number;
    ST_RECORD_INDEX: number;
    REVEAL_COORDS_REGION_ID: number;
    REVEAL_COORDS_RECORD_INDEX: number;
    INDICES_REGION_ID: number;
    INDICES_RECORD_INDEX: number;
    POSITIONS: (number)[];
    NORMALS: (number)[];
    ST: (number)[];
    REVEAL_COORDS: (number)[];
    INDICES: (number)[];
    SEGMENT_IDS: (number)[];
    SENSOR_IDS: (number)[];
    SEGMENTS: (SCVSwathSegmentT)[];
    constructor(JOB_ID?: string | Uint8Array | null, TRACE_ID?: bigint, CHUNK_INDEX?: number, WINDOW_START_INDEX?: number, WINDOW_COUNT?: number, DOMAIN?: scvGeometryDomain, FRAME?: scvCoordinateFrame, ENCODING?: scvGeometryEncoding, TIME_START_OFFSET_SEC?: number, TIME_STOP_OFFSET_SEC?: number, MEMORY_REGIONS?: (SCVMemoryRegionT)[], POSITIONS_REGION_ID?: number, POSITIONS_RECORD_INDEX?: number, NORMALS_REGION_ID?: number, NORMALS_RECORD_INDEX?: number, ST_REGION_ID?: number, ST_RECORD_INDEX?: number, REVEAL_COORDS_REGION_ID?: number, REVEAL_COORDS_RECORD_INDEX?: number, INDICES_REGION_ID?: number, INDICES_RECORD_INDEX?: number, POSITIONS?: (number)[], NORMALS?: (number)[], ST?: (number)[], REVEAL_COORDS?: (number)[], INDICES?: (number)[], SEGMENT_IDS?: (number)[], SENSOR_IDS?: (number)[], SEGMENTS?: (SCVSwathSegmentT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVPackedGeometryChunk.d.ts.map