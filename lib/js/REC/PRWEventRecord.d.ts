import * as flatbuffers from 'flatbuffers';
import { PRWResidentState, PRWResidentStateT } from './PRWResidentState.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
import { pcfEventDirection } from './pcfEventDirection.js';
import { pcfEventKind } from './pcfEventKind.js';
/**
 * A located event.
 */
export declare class PRWEventRecord implements flatbuffers.IUnpackableObject<PRWEventRecordT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWEventRecord;
    static getRootAsPRWEventRecord(bb: flatbuffers.ByteBuffer, obj?: PRWEventRecord): PRWEventRecord;
    static getSizePrefixedRootAsPRWEventRecord(bb: flatbuffers.ByteBuffer, obj?: PRWEventRecord): PRWEventRecord;
    /**
     * Index into the request's EVENTS.
     */
    EVENT_INDEX(): number;
    /**
     * The event function that crossed zero.
     */
    KIND(): pcfEventKind;
    /**
     * The way g crossed zero: INCREASING or DECREASING.
     */
    DIRECTION(): pcfEventDirection;
    /**
     * Epoch of the crossing.
     */
    EPOCH(obj?: TIMInstant): TIMInstant | null;
    /**
     * Seconds from the request's initial epoch, negative for a backward propagation.
     */
    ELAPSED_SECONDS(): number;
    /**
     * The state at EPOCH in the request's axes.
     */
    STATE(obj?: PRWResidentState): PRWResidentState | null;
    /**
     * g at EPOCH.
     */
    RESIDUAL(): number;
    /**
     * Refinement steps taken.
     */
    ITERATIONS(): number;
    static startPRWEventRecord(builder: flatbuffers.Builder): void;
    static addEventIndex(builder: flatbuffers.Builder, EVENT_INDEX: number): void;
    static addKind(builder: flatbuffers.Builder, KIND: pcfEventKind): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: pcfEventDirection): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addElapsedSeconds(builder: flatbuffers.Builder, ELAPSED_SECONDS: number): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addResidual(builder: flatbuffers.Builder, RESIDUAL: number): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static endPRWEventRecord(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWEventRecordT;
    unpackTo(_o: PRWEventRecordT): void;
}
export declare class PRWEventRecordT implements flatbuffers.IGeneratedObject {
    EVENT_INDEX: number;
    KIND: pcfEventKind;
    DIRECTION: pcfEventDirection;
    EPOCH: TIMInstantT | null;
    ELAPSED_SECONDS: number;
    STATE: PRWResidentStateT | null;
    RESIDUAL: number;
    ITERATIONS: number;
    constructor(EVENT_INDEX?: number, KIND?: pcfEventKind, DIRECTION?: pcfEventDirection, EPOCH?: TIMInstantT | null, ELAPSED_SECONDS?: number, STATE?: PRWResidentStateT | null, RESIDUAL?: number, ITERATIONS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWEventRecord.d.ts.map