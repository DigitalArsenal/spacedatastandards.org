import * as flatbuffers from 'flatbuffers';
export declare class SCVCancel implements flatbuffers.IUnpackableObject<SCVCancelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVCancel;
    static getRootAsSCVCancel(bb: flatbuffers.ByteBuffer, obj?: SCVCancel): SCVCancel;
    static getSizePrefixedRootAsSCVCancel(bb: flatbuffers.ByteBuffer, obj?: SCVCancel): SCVCancel;
    JOB_ID(): string | null;
    JOB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRACE_ID(): bigint;
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CANCEL_AFTER_WINDOW_INDEX(): number;
    static startSCVCancel(builder: flatbuffers.Builder): void;
    static addJobId(builder: flatbuffers.Builder, JOB_IDOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_ID: bigint): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static addCancelAfterWindowIndex(builder: flatbuffers.Builder, CANCEL_AFTER_WINDOW_INDEX: number): void;
    static endSCVCancel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVCancel(builder: flatbuffers.Builder, JOB_IDOffset: flatbuffers.Offset, TRACE_ID: bigint, REASONOffset: flatbuffers.Offset, CANCEL_AFTER_WINDOW_INDEX: number): flatbuffers.Offset;
    unpack(): SCVCancelT;
    unpackTo(_o: SCVCancelT): void;
}
export declare class SCVCancelT implements flatbuffers.IGeneratedObject {
    JOB_ID: string | Uint8Array | null;
    TRACE_ID: bigint;
    REASON: string | Uint8Array | null;
    CANCEL_AFTER_WINDOW_INDEX: number;
    constructor(JOB_ID?: string | Uint8Array | null, TRACE_ID?: bigint, REASON?: string | Uint8Array | null, CANCEL_AFTER_WINDOW_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVCancel.d.ts.map