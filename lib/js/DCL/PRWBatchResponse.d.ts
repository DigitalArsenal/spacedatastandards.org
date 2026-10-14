import * as flatbuffers from 'flatbuffers';
import { propagatorErrorCode } from './propagatorErrorCode.js';
import { propagatorStateFlags } from './propagatorStateFlags.js';
/**
 * Batch propagation response header — describes the stream written to
 * OUTPUT_OFFSET and reports errors. The stream itself is
 * `STATE_VECTOR_SIZE`-tuple rows in the SDS `OCM` STATE_DATA layout.
 */
export declare class PRWBatchResponse implements flatbuffers.IUnpackableObject<PRWBatchResponseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWBatchResponse;
    static getRootAsPRWBatchResponse(bb: flatbuffers.ByteBuffer, obj?: PRWBatchResponse): PRWBatchResponse;
    static getSizePrefixedRootAsPRWBatchResponse(bb: flatbuffers.ByteBuffer, obj?: PRWBatchResponse): PRWBatchResponse;
    /**
     * Number of state vectors written.
     */
    COUNT(): number;
    /**
     * Offset in the arena where the state-vector stream begins.
     */
    OUTPUT_OFFSET(): number;
    /**
     * Components per state vector (6 = PV, 9 = PVA). Mirrors OCM.STATE_VECTOR_SIZE.
     */
    STATE_VECTOR_SIZE(): number;
    /**
     * Reference frame for the stream (SDS `RFM`-compatible string tag).
     */
    REFERENCE_FRAME(): string | null;
    REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Per-entity status flags (same cardinality as COUNT).
     */
    FLAGS(index: number): propagatorStateFlags | null;
    flagsLength(): number;
    flagsArray(): Uint32Array | null;
    /**
     * Error code (0 == OK).
     */
    ERROR_CODE(): propagatorErrorCode;
    /**
     * Optional error message when ERROR_CODE != OK.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPRWBatchResponse(builder: flatbuffers.Builder): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addOutputOffset(builder: flatbuffers.Builder, OUTPUT_OFFSET: number): void;
    static addStateVectorSize(builder: flatbuffers.Builder, STATE_VECTOR_SIZE: number): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addFlags(builder: flatbuffers.Builder, FLAGSOffset: flatbuffers.Offset): void;
    static createFlagsVector(builder: flatbuffers.Builder, data: propagatorStateFlags[]): flatbuffers.Offset;
    static startFlagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODE: propagatorErrorCode): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static endPRWBatchResponse(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWBatchResponse(builder: flatbuffers.Builder, COUNT: number, OUTPUT_OFFSET: number, STATE_VECTOR_SIZE: number, REFERENCE_FRAMEOffset: flatbuffers.Offset, FLAGSOffset: flatbuffers.Offset, ERROR_CODE: propagatorErrorCode, ERROR_MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWBatchResponseT;
    unpackTo(_o: PRWBatchResponseT): void;
}
export declare class PRWBatchResponseT implements flatbuffers.IGeneratedObject {
    COUNT: number;
    OUTPUT_OFFSET: number;
    STATE_VECTOR_SIZE: number;
    REFERENCE_FRAME: string | Uint8Array | null;
    FLAGS: (propagatorStateFlags)[];
    ERROR_CODE: propagatorErrorCode;
    ERROR_MESSAGE: string | Uint8Array | null;
    constructor(COUNT?: number, OUTPUT_OFFSET?: number, STATE_VECTOR_SIZE?: number, REFERENCE_FRAME?: string | Uint8Array | null, FLAGS?: (propagatorStateFlags)[], ERROR_CODE?: propagatorErrorCode, ERROR_MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWBatchResponse.d.ts.map