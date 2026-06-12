import * as flatbuffers from 'flatbuffers';
import { ACWAccessWindow, ACWAccessWindowT } from './ACWAccessWindow.js';
import { acwResultStatus } from './acwResultStatus.js';
/**
 * Result for one access-window compute request.
 */
export declare class ACWResult implements flatbuffers.IUnpackableObject<ACWResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWResult;
    static getRootAsACWResult(bb: flatbuffers.ByteBuffer, obj?: ACWResult): ACWResult;
    static getSizePrefixedRootAsACWResult(bb: flatbuffers.ByteBuffer, obj?: ACWResult): ACWResult;
    STATUS(): acwResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WINDOWS(index: number, obj?: ACWAccessWindow): ACWAccessWindow | null;
    windowsLength(): number;
    /**
     * Caller trace/correlation identifier copied from the request when present.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startACWResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: acwResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addWindows(builder: flatbuffers.Builder, WINDOWSOffset: flatbuffers.Offset): void;
    static createWindowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWindowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endACWResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWResult(builder: flatbuffers.Builder, STATUS: acwResultStatus, ERROR_MESSAGEOffset: flatbuffers.Offset, WINDOWSOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACWResultT;
    unpackTo(_o: ACWResultT): void;
}
export declare class ACWResultT implements flatbuffers.IGeneratedObject {
    STATUS: acwResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    WINDOWS: (ACWAccessWindowT)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: acwResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, WINDOWS?: (ACWAccessWindowT)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWResult.d.ts.map