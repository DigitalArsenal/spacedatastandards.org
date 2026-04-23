import * as flatbuffers from 'flatbuffers';
import { TAB, TABT } from './TAB.js';
import { pivStatus } from './pivStatus.js';
/**
 * Response envelope emitted by `plugin_invoke_stream`.
 */
export declare class PIVResponse implements flatbuffers.IUnpackableObject<PIVResponseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PIVResponse;
    static getRootAsPIVResponse(bb: flatbuffers.ByteBuffer, obj?: PIVResponse): PIVResponse;
    static getSizePrefixedRootAsPIVResponse(bb: flatbuffers.ByteBuffer, obj?: PIVResponse): PIVResponse;
    /**
     * Method-specific status code. Zero conventionally indicates success.
     */
    STATUS_CODE(): number;
    /**
     * Coarse envelope status.
     */
    STATUS(): pivStatus;
    /**
     * True when the method yielded before fully draining queued work.
     */
    YIELDED(): boolean;
    /**
     * Outstanding frame count remaining after this response. Non-zero
     * only when STATUS == YIELDED.
     */
    BACKLOG_REMAINING(): number;
    /**
     * Output frames. Each TAB carries schema identity and wire format.
     */
    OUTPUTS(index: number, obj?: TAB): TAB | null;
    outputsLength(): number;
    /**
     * Optional arena backing OUTPUTS payload bodies.
     */
    PAYLOAD_ARENA(index: number): number | null;
    payloadArenaLength(): number;
    payloadArenaArray(): Uint8Array | null;
    /**
     * Stable machine-readable error code when STATUS == FAILED.
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable diagnostic when STATUS == FAILED.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Echo of the request's TRACE_ID for correlation.
     */
    TRACE_ID(): bigint;
    static startPIVResponse(builder: flatbuffers.Builder): void;
    static addStatusCode(builder: flatbuffers.Builder, STATUS_CODE: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: pivStatus): void;
    static addYielded(builder: flatbuffers.Builder, YIELDED: boolean): void;
    static addBacklogRemaining(builder: flatbuffers.Builder, BACKLOG_REMAINING: number): void;
    static addOutputs(builder: flatbuffers.Builder, OUTPUTSOffset: flatbuffers.Offset): void;
    static createOutputsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOutputsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPayloadArena(builder: flatbuffers.Builder, PAYLOAD_ARENAOffset: flatbuffers.Offset): void;
    static createPayloadArenaVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPayloadArenaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_ID: bigint): void;
    static endPIVResponse(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPIVResponse(builder: flatbuffers.Builder, STATUS_CODE: number, STATUS: pivStatus, YIELDED: boolean, BACKLOG_REMAINING: number, OUTPUTSOffset: flatbuffers.Offset, PAYLOAD_ARENAOffset: flatbuffers.Offset, ERROR_CODEOffset: flatbuffers.Offset, ERROR_MESSAGEOffset: flatbuffers.Offset, TRACE_ID: bigint): flatbuffers.Offset;
    unpack(): PIVResponseT;
    unpackTo(_o: PIVResponseT): void;
}
export declare class PIVResponseT implements flatbuffers.IGeneratedObject {
    STATUS_CODE: number;
    STATUS: pivStatus;
    YIELDED: boolean;
    BACKLOG_REMAINING: number;
    OUTPUTS: (TABT)[];
    PAYLOAD_ARENA: (number)[];
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    TRACE_ID: bigint;
    constructor(STATUS_CODE?: number, STATUS?: pivStatus, YIELDED?: boolean, BACKLOG_REMAINING?: number, OUTPUTS?: (TABT)[], PAYLOAD_ARENA?: (number)[], ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null, TRACE_ID?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PIVResponse.d.ts.map