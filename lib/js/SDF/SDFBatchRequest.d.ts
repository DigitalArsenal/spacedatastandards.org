import * as flatbuffers from 'flatbuffers';
/**
 * Batch SDF evaluation request (arena-addressed, zero-copy).
 */
export declare class SDFBatchRequest implements flatbuffers.IUnpackableObject<SDFBatchRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFBatchRequest;
    static getRootAsSDFBatchRequest(bb: flatbuffers.ByteBuffer, obj?: SDFBatchRequest): SDFBatchRequest;
    static getSizePrefixedRootAsSDFBatchRequest(bb: flatbuffers.ByteBuffer, obj?: SDFBatchRequest): SDFBatchRequest;
    /**
     * Input buffer offset (arena bytes) where the Vec3[] of world points begins.
     */
    INPUT_OFFSET(): number;
    /**
     * Number of points to evaluate.
     */
    POINT_COUNT(): number;
    /**
     * Entity-ids buffer offset corresponding to each point (optional).
     */
    ENTITY_IDS_OFFSET(): number;
    /**
     * Output buffer offset where sdfResult[] is written.
     */
    OUTPUT_OFFSET(): number;
    /**
     * Inverse-transform buffer offset (4x4 matrix, 128 bytes).
     */
    INVERSE_TRANSFORM_OFFSET(): number;
    static startSDFBatchRequest(builder: flatbuffers.Builder): void;
    static addInputOffset(builder: flatbuffers.Builder, INPUT_OFFSET: number): void;
    static addPointCount(builder: flatbuffers.Builder, POINT_COUNT: number): void;
    static addEntityIdsOffset(builder: flatbuffers.Builder, ENTITY_IDS_OFFSET: number): void;
    static addOutputOffset(builder: flatbuffers.Builder, OUTPUT_OFFSET: number): void;
    static addInverseTransformOffset(builder: flatbuffers.Builder, INVERSE_TRANSFORM_OFFSET: number): void;
    static endSDFBatchRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDFBatchRequest(builder: flatbuffers.Builder, INPUT_OFFSET: number, POINT_COUNT: number, ENTITY_IDS_OFFSET: number, OUTPUT_OFFSET: number, INVERSE_TRANSFORM_OFFSET: number): flatbuffers.Offset;
    unpack(): SDFBatchRequestT;
    unpackTo(_o: SDFBatchRequestT): void;
}
export declare class SDFBatchRequestT implements flatbuffers.IGeneratedObject {
    INPUT_OFFSET: number;
    POINT_COUNT: number;
    ENTITY_IDS_OFFSET: number;
    OUTPUT_OFFSET: number;
    INVERSE_TRANSFORM_OFFSET: number;
    constructor(INPUT_OFFSET?: number, POINT_COUNT?: number, ENTITY_IDS_OFFSET?: number, OUTPUT_OFFSET?: number, INVERSE_TRANSFORM_OFFSET?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFBatchRequest.d.ts.map