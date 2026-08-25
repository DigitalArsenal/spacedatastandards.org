import * as flatbuffers from 'flatbuffers';
/**
 * The last unrecovered error, carried so a resumed run can refuse to loop.
 */
export declare class IRMFault implements flatbuffers.IUnpackableObject<IRMFaultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IRMFault;
    static getRootAsIRMFault(bb: flatbuffers.ByteBuffer, obj?: IRMFault): IRMFault;
    static getSizePrefixedRootAsIRMFault(bb: flatbuffers.ByteBuffer, obj?: IRMFault): IRMFault;
    /**
     * Publisher-stable error code verbatim.
     */
    CODE(): string;
    CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable message verbatim; never a substitute for CODE.
     */
    MESSAGE(): string | null;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Zero-based index of the chunk the fault occurred on.
     */
    CHUNK_INDEX(): number;
    /**
     * Consecutive failed attempts at that chunk.
     */
    CONSECUTIVE_FAILURES(): number;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp of the fault.
     */
    OCCURRED_AT(): string | null;
    OCCURRED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp before which a consumer must not
     * retry. Empty means the publisher states no backoff.
     */
    RETRY_NOT_BEFORE(): string | null;
    RETRY_NOT_BEFORE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIRMFault(builder: flatbuffers.Builder): void;
    static addCode(builder: flatbuffers.Builder, CODEOffset: flatbuffers.Offset): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static addChunkIndex(builder: flatbuffers.Builder, CHUNK_INDEX: number): void;
    static addConsecutiveFailures(builder: flatbuffers.Builder, CONSECUTIVE_FAILURES: number): void;
    static addOccurredAt(builder: flatbuffers.Builder, OCCURRED_ATOffset: flatbuffers.Offset): void;
    static addRetryNotBefore(builder: flatbuffers.Builder, RETRY_NOT_BEFOREOffset: flatbuffers.Offset): void;
    static endIRMFault(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIRMFault(builder: flatbuffers.Builder, CODEOffset: flatbuffers.Offset, MESSAGEOffset: flatbuffers.Offset, CHUNK_INDEX: number, CONSECUTIVE_FAILURES: number, OCCURRED_ATOffset: flatbuffers.Offset, RETRY_NOT_BEFOREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IRMFaultT;
    unpackTo(_o: IRMFaultT): void;
}
export declare class IRMFaultT implements flatbuffers.IGeneratedObject {
    CODE: string | Uint8Array | null;
    MESSAGE: string | Uint8Array | null;
    CHUNK_INDEX: number;
    CONSECUTIVE_FAILURES: number;
    OCCURRED_AT: string | Uint8Array | null;
    RETRY_NOT_BEFORE: string | Uint8Array | null;
    constructor(CODE?: string | Uint8Array | null, MESSAGE?: string | Uint8Array | null, CHUNK_INDEX?: number, CONSECUTIVE_FAILURES?: number, OCCURRED_AT?: string | Uint8Array | null, RETRY_NOT_BEFORE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IRMFault.d.ts.map