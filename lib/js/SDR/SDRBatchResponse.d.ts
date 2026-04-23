import * as flatbuffers from 'flatbuffers';
/**
 * Batch detection response header.
 */
export declare class SDRBatchResponse implements flatbuffers.IUnpackableObject<SDRBatchResponseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDRBatchResponse;
    static getRootAsSDRBatchResponse(bb: flatbuffers.ByteBuffer, obj?: SDRBatchResponse): SDRBatchResponse;
    static getSizePrefixedRootAsSDRBatchResponse(bb: flatbuffers.ByteBuffer, obj?: SDRBatchResponse): SDRBatchResponse;
    /**
     * Number of detection results written.
     */
    COUNT(): number;
    /**
     * Number of targets detected (SNR >= threshold).
     */
    DETECTED_COUNT(): number;
    /**
     * Offset in arena where detectionResult[] starts.
     */
    OUTPUT_OFFSET(): number;
    /**
     * Error code (0 == success).
     */
    ERROR_CODE(): number;
    /**
     * Error message when ERROR_CODE != 0.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSDRBatchResponse(builder: flatbuffers.Builder): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addDetectedCount(builder: flatbuffers.Builder, DETECTED_COUNT: number): void;
    static addOutputOffset(builder: flatbuffers.Builder, OUTPUT_OFFSET: number): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODE: number): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static endSDRBatchResponse(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDRBatchResponse(builder: flatbuffers.Builder, COUNT: number, DETECTED_COUNT: number, OUTPUT_OFFSET: number, ERROR_CODE: number, ERROR_MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SDRBatchResponseT;
    unpackTo(_o: SDRBatchResponseT): void;
}
export declare class SDRBatchResponseT implements flatbuffers.IGeneratedObject {
    COUNT: number;
    DETECTED_COUNT: number;
    OUTPUT_OFFSET: number;
    ERROR_CODE: number;
    ERROR_MESSAGE: string | Uint8Array | null;
    constructor(COUNT?: number, DETECTED_COUNT?: number, OUTPUT_OFFSET?: number, ERROR_CODE?: number, ERROR_MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDRBatchResponse.d.ts.map