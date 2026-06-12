import * as flatbuffers from 'flatbuffers';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { frmResultStatus } from './frmResultStatus.js';
export declare class FRMFrameTransformResult implements flatbuffers.IUnpackableObject<FRMFrameTransformResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FRMFrameTransformResult;
    static getRootAsFRMFrameTransformResult(bb: flatbuffers.ByteBuffer, obj?: FRMFrameTransformResult): FRMFrameTransformResult;
    static getSizePrefixedRootAsFRMFrameTransformResult(bb: flatbuffers.ByteBuffer, obj?: FRMFrameTransformResult): FRMFrameTransformResult;
    STATUS(): frmResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    POSITION(obj?: FRMVector3): FRMVector3 | null;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startFRMFrameTransformResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: frmResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addPosition(builder: flatbuffers.Builder, POSITIONOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endFRMFrameTransformResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): FRMFrameTransformResultT;
    unpackTo(_o: FRMFrameTransformResultT): void;
}
export declare class FRMFrameTransformResultT implements flatbuffers.IGeneratedObject {
    STATUS: frmResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    POSITION: FRMVector3T | null;
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: frmResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, POSITION?: FRMVector3T | null, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FRMFrameTransformResult.d.ts.map