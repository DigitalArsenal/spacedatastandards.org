import * as flatbuffers from 'flatbuffers';
import { snwErrorCode } from './snwErrorCode.js';
/**
 * Batch target detection response header.
 */
export declare class SNWBatchResponse implements flatbuffers.IUnpackableObject<SNWBatchResponseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SNWBatchResponse;
    static getRootAsSNWBatchResponse(bb: flatbuffers.ByteBuffer, obj?: SNWBatchResponse): SNWBatchResponse;
    static getSizePrefixedRootAsSNWBatchResponse(bb: flatbuffers.ByteBuffer, obj?: SNWBatchResponse): SNWBatchResponse;
    /**
     * Number of detection records written to OUTPUT_OFFSET.
     */
    COUNT(): number;
    /**
     * Number of targets whose SNR met the detection threshold.
     */
    DETECTED_COUNT(): number;
    /**
     * Byte offset where the detectionResult[] stream starts.
     */
    OUTPUT_OFFSET(): number;
    /**
     * Error code (0 == OK).
     */
    ERROR_CODE(): snwErrorCode;
    /**
     * Optional error message when ERROR_CODE != OK.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSNWBatchResponse(builder: flatbuffers.Builder): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addDetectedCount(builder: flatbuffers.Builder, DETECTED_COUNT: number): void;
    static addOutputOffset(builder: flatbuffers.Builder, OUTPUT_OFFSET: number): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODE: snwErrorCode): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static endSNWBatchResponse(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSNWBatchResponse(builder: flatbuffers.Builder, COUNT: number, DETECTED_COUNT: number, OUTPUT_OFFSET: number, ERROR_CODE: snwErrorCode, ERROR_MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SNWBatchResponseT;
    unpackTo(_o: SNWBatchResponseT): void;
}
export declare class SNWBatchResponseT implements flatbuffers.IGeneratedObject {
    COUNT: number;
    DETECTED_COUNT: number;
    OUTPUT_OFFSET: number;
    ERROR_CODE: snwErrorCode;
    ERROR_MESSAGE: string | Uint8Array | null;
    constructor(COUNT?: number, DETECTED_COUNT?: number, OUTPUT_OFFSET?: number, ERROR_CODE?: snwErrorCode, ERROR_MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SNWBatchResponse.d.ts.map