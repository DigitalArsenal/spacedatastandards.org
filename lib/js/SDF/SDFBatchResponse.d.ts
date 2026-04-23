import * as flatbuffers from 'flatbuffers';
/**
 * Batch SDF evaluation response header.
 */
export declare class SDFBatchResponse implements flatbuffers.IUnpackableObject<SDFBatchResponseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFBatchResponse;
    static getRootAsSDFBatchResponse(bb: flatbuffers.ByteBuffer, obj?: SDFBatchResponse): SDFBatchResponse;
    static getSizePrefixedRootAsSDFBatchResponse(bb: flatbuffers.ByteBuffer, obj?: SDFBatchResponse): SDFBatchResponse;
    /**
     * Number of results written.
     */
    COUNT(): number;
    /**
     * Number of points inside the volume.
     */
    INSIDE_COUNT(): number;
    /**
     * Output offset where sdfResult[] starts.
     */
    OUTPUT_OFFSET(): number;
    /**
     * Error code (0 == success).
     */
    ERROR_CODE(): number;
    /**
     * Optional error message when ERROR_CODE != 0.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSDFBatchResponse(builder: flatbuffers.Builder): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addInsideCount(builder: flatbuffers.Builder, INSIDE_COUNT: number): void;
    static addOutputOffset(builder: flatbuffers.Builder, OUTPUT_OFFSET: number): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODE: number): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static endSDFBatchResponse(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDFBatchResponse(builder: flatbuffers.Builder, COUNT: number, INSIDE_COUNT: number, OUTPUT_OFFSET: number, ERROR_CODE: number, ERROR_MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SDFBatchResponseT;
    unpackTo(_o: SDFBatchResponseT): void;
}
export declare class SDFBatchResponseT implements flatbuffers.IGeneratedObject {
    COUNT: number;
    INSIDE_COUNT: number;
    OUTPUT_OFFSET: number;
    ERROR_CODE: number;
    ERROR_MESSAGE: string | Uint8Array | null;
    constructor(COUNT?: number, INSIDE_COUNT?: number, OUTPUT_OFFSET?: number, ERROR_CODE?: number, ERROR_MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFBatchResponse.d.ts.map