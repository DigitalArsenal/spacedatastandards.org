import * as flatbuffers from 'flatbuffers';
import { TAB, TABT } from './TAB.js';
/**
 * Request envelope carried by `plugin_invoke_stream`.
 */
export declare class PIVRequest implements flatbuffers.IUnpackableObject<PIVRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PIVRequest;
    static getRootAsPIVRequest(bb: flatbuffers.ByteBuffer, obj?: PIVRequest): PIVRequest;
    static getSizePrefixedRootAsPIVRequest(bb: flatbuffers.ByteBuffer, obj?: PIVRequest): PIVRequest;
    /**
     * Stable method identifier from PLG.METHODS[].METHOD_ID.
     */
    METHOD_ID(): string | null;
    METHOD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Input frames. Each TAB.TYPE_REF names the payload schema and each
     * TAB.WIRE_FORMAT selects FLATBUFFER or ALIGNED_BINARY. TAB.OFFSET
     * is arena-relative into PAYLOAD_ARENA (or an absolute pointer when
     * PAYLOAD_ARENA is empty).
     */
    INPUTS(index: number, obj?: TAB): TAB | null;
    inputsLength(): number;
    /**
     * Optional arena backing the INPUTS payload bodies. Empty means the
     * caller manages arena state out-of-band.
     */
    PAYLOAD_ARENA(index: number): number | null;
    payloadArenaLength(): number;
    payloadArenaArray(): Uint8Array | null;
    /**
     * Optional trace identifier for request correlation.
     */
    TRACE_ID(): bigint;
    /**
     * Optional yield-budget hint. Plugins MAY pause queued work after
     * draining this many output frames and return YIELDED for the caller
     * to resume. 0 = no hint.
     */
    OUTPUT_STREAM_CAP(): number;
    static startPIVRequest(builder: flatbuffers.Builder): void;
    static addMethodId(builder: flatbuffers.Builder, METHOD_IDOffset: flatbuffers.Offset): void;
    static addInputs(builder: flatbuffers.Builder, INPUTSOffset: flatbuffers.Offset): void;
    static createInputsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInputsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPayloadArena(builder: flatbuffers.Builder, PAYLOAD_ARENAOffset: flatbuffers.Offset): void;
    static createPayloadArenaVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPayloadArenaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_ID: bigint): void;
    static addOutputStreamCap(builder: flatbuffers.Builder, OUTPUT_STREAM_CAP: number): void;
    static endPIVRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPIVRequest(builder: flatbuffers.Builder, METHOD_IDOffset: flatbuffers.Offset, INPUTSOffset: flatbuffers.Offset, PAYLOAD_ARENAOffset: flatbuffers.Offset, TRACE_ID: bigint, OUTPUT_STREAM_CAP: number): flatbuffers.Offset;
    unpack(): PIVRequestT;
    unpackTo(_o: PIVRequestT): void;
}
export declare class PIVRequestT implements flatbuffers.IGeneratedObject {
    METHOD_ID: string | Uint8Array | null;
    INPUTS: (TABT)[];
    PAYLOAD_ARENA: (number)[];
    TRACE_ID: bigint;
    OUTPUT_STREAM_CAP: number;
    constructor(METHOD_ID?: string | Uint8Array | null, INPUTS?: (TABT)[], PAYLOAD_ARENA?: (number)[], TRACE_ID?: bigint, OUTPUT_STREAM_CAP?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PIVRequest.d.ts.map