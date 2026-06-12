import * as flatbuffers from 'flatbuffers';
import { scvResultState } from './scvResultState.js';
export declare class SCVProgress implements flatbuffers.IUnpackableObject<SCVProgressT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVProgress;
    static getRootAsSCVProgress(bb: flatbuffers.ByteBuffer, obj?: SCVProgress): SCVProgress;
    static getSizePrefixedRootAsSCVProgress(bb: flatbuffers.ByteBuffer, obj?: SCVProgress): SCVProgress;
    JOB_ID(): string | null;
    JOB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRACE_ID(): bigint;
    STATUS(): scvResultState;
    COMPLETED_SENSORS(): number;
    TOTAL_SENSORS(): number;
    COMPLETED_WINDOWS(): number;
    TOTAL_WINDOWS(): number;
    BACKLOG_REMAINING(): number;
    COMPLETION_FRACTION(): number;
    MESSAGE(): string | null;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSCVProgress(builder: flatbuffers.Builder): void;
    static addJobId(builder: flatbuffers.Builder, JOB_IDOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_ID: bigint): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: scvResultState): void;
    static addCompletedSensors(builder: flatbuffers.Builder, COMPLETED_SENSORS: number): void;
    static addTotalSensors(builder: flatbuffers.Builder, TOTAL_SENSORS: number): void;
    static addCompletedWindows(builder: flatbuffers.Builder, COMPLETED_WINDOWS: number): void;
    static addTotalWindows(builder: flatbuffers.Builder, TOTAL_WINDOWS: number): void;
    static addBacklogRemaining(builder: flatbuffers.Builder, BACKLOG_REMAINING: number): void;
    static addCompletionFraction(builder: flatbuffers.Builder, COMPLETION_FRACTION: number): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static endSCVProgress(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVProgress(builder: flatbuffers.Builder, JOB_IDOffset: flatbuffers.Offset, TRACE_ID: bigint, STATUS: scvResultState, COMPLETED_SENSORS: number, TOTAL_SENSORS: number, COMPLETED_WINDOWS: number, TOTAL_WINDOWS: number, BACKLOG_REMAINING: number, COMPLETION_FRACTION: number, MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCVProgressT;
    unpackTo(_o: SCVProgressT): void;
}
export declare class SCVProgressT implements flatbuffers.IGeneratedObject {
    JOB_ID: string | Uint8Array | null;
    TRACE_ID: bigint;
    STATUS: scvResultState;
    COMPLETED_SENSORS: number;
    TOTAL_SENSORS: number;
    COMPLETED_WINDOWS: number;
    TOTAL_WINDOWS: number;
    BACKLOG_REMAINING: number;
    COMPLETION_FRACTION: number;
    MESSAGE: string | Uint8Array | null;
    constructor(JOB_ID?: string | Uint8Array | null, TRACE_ID?: bigint, STATUS?: scvResultState, COMPLETED_SENSORS?: number, TOTAL_SENSORS?: number, COMPLETED_WINDOWS?: number, TOTAL_WINDOWS?: number, BACKLOG_REMAINING?: number, COMPLETION_FRACTION?: number, MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVProgress.d.ts.map