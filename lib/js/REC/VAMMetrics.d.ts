import * as flatbuffers from 'flatbuffers';
import { VAMVector3, VAMVector3T } from './VAMVector3.js';
/**
 * Geometry, material, texture, and bounds measurements.
 */
export declare class VAMMetrics implements flatbuffers.IUnpackableObject<VAMMetricsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMMetrics;
    static getRootAsVAMMetrics(bb: flatbuffers.ByteBuffer, obj?: VAMMetrics): VAMMetrics;
    static getSizePrefixedRootAsVAMMetrics(bb: flatbuffers.ByteBuffer, obj?: VAMMetrics): VAMMetrics;
    TRIANGLE_COUNT(): bigint;
    VERTEX_COUNT(): bigint;
    PRIMITIVE_COUNT(): number;
    DRAW_CALL_COUNT(): number;
    MATERIAL_COUNT(): number;
    TEXTURE_COUNT(): number;
    TEXTURE_BYTES(): bigint;
    ANIMATION_COUNT(): number;
    BOUNDING_BOX_MIN(obj?: VAMVector3): VAMVector3 | null;
    BOUNDING_BOX_MAX(obj?: VAMVector3): VAMVector3 | null;
    DIMENSIONS_METERS(obj?: VAMVector3): VAMVector3 | null;
    static startVAMMetrics(builder: flatbuffers.Builder): void;
    static addTriangleCount(builder: flatbuffers.Builder, TRIANGLE_COUNT: bigint): void;
    static addVertexCount(builder: flatbuffers.Builder, VERTEX_COUNT: bigint): void;
    static addPrimitiveCount(builder: flatbuffers.Builder, PRIMITIVE_COUNT: number): void;
    static addDrawCallCount(builder: flatbuffers.Builder, DRAW_CALL_COUNT: number): void;
    static addMaterialCount(builder: flatbuffers.Builder, MATERIAL_COUNT: number): void;
    static addTextureCount(builder: flatbuffers.Builder, TEXTURE_COUNT: number): void;
    static addTextureBytes(builder: flatbuffers.Builder, TEXTURE_BYTES: bigint): void;
    static addAnimationCount(builder: flatbuffers.Builder, ANIMATION_COUNT: number): void;
    static addBoundingBoxMin(builder: flatbuffers.Builder, BOUNDING_BOX_MINOffset: flatbuffers.Offset): void;
    static addBoundingBoxMax(builder: flatbuffers.Builder, BOUNDING_BOX_MAXOffset: flatbuffers.Offset): void;
    static addDimensionsMeters(builder: flatbuffers.Builder, DIMENSIONS_METERSOffset: flatbuffers.Offset): void;
    static endVAMMetrics(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): VAMMetricsT;
    unpackTo(_o: VAMMetricsT): void;
}
export declare class VAMMetricsT implements flatbuffers.IGeneratedObject {
    TRIANGLE_COUNT: bigint;
    VERTEX_COUNT: bigint;
    PRIMITIVE_COUNT: number;
    DRAW_CALL_COUNT: number;
    MATERIAL_COUNT: number;
    TEXTURE_COUNT: number;
    TEXTURE_BYTES: bigint;
    ANIMATION_COUNT: number;
    BOUNDING_BOX_MIN: VAMVector3T | null;
    BOUNDING_BOX_MAX: VAMVector3T | null;
    DIMENSIONS_METERS: VAMVector3T | null;
    constructor(TRIANGLE_COUNT?: bigint, VERTEX_COUNT?: bigint, PRIMITIVE_COUNT?: number, DRAW_CALL_COUNT?: number, MATERIAL_COUNT?: number, TEXTURE_COUNT?: number, TEXTURE_BYTES?: bigint, ANIMATION_COUNT?: number, BOUNDING_BOX_MIN?: VAMVector3T | null, BOUNDING_BOX_MAX?: VAMVector3T | null, DIMENSIONS_METERS?: VAMVector3T | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMMetrics.d.ts.map