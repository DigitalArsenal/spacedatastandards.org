import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
import { timConversionStatus } from './timConversionStatus.js';
/**
 * Result of a time conversion request.
 */
export declare class TIMConversionResult implements flatbuffers.IUnpackableObject<TIMConversionResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TIMConversionResult;
    static getRootAsTIMConversionResult(bb: flatbuffers.ByteBuffer, obj?: TIMConversionResult): TIMConversionResult;
    static getSizePrefixedRootAsTIMConversionResult(bb: flatbuffers.ByteBuffer, obj?: TIMConversionResult): TIMConversionResult;
    /**
     * Original source instant.
     */
    SOURCE(obj?: TIMInstant): TIMInstant | null;
    /**
     * Converted target instant.
     */
    TARGET(obj?: TIMInstant): TIMInstant | null;
    /**
     * Target minus source offset in SI seconds for the requested conversion.
     */
    DELTA_SECONDS(): number;
    /**
     * Conversion status.
     */
    STATUS(): timConversionStatus;
    /**
     * Optional error detail when STATUS is not OK.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Caller trace/correlation identifier copied from the request when present.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTIMConversionResult(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addTarget(builder: flatbuffers.Builder, TARGETOffset: flatbuffers.Offset): void;
    static addDeltaSeconds(builder: flatbuffers.Builder, DELTA_SECONDS: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: timConversionStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endTIMConversionResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): TIMConversionResultT;
    unpackTo(_o: TIMConversionResultT): void;
}
export declare class TIMConversionResultT implements flatbuffers.IGeneratedObject {
    SOURCE: TIMInstantT | null;
    TARGET: TIMInstantT | null;
    DELTA_SECONDS: number;
    STATUS: timConversionStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    TRACE_ID: string | Uint8Array | null;
    constructor(SOURCE?: TIMInstantT | null, TARGET?: TIMInstantT | null, DELTA_SECONDS?: number, STATUS?: timConversionStatus, ERROR_MESSAGE?: string | Uint8Array | null, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TIMConversionResult.d.ts.map