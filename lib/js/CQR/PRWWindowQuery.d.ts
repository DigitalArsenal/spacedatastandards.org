import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * One propagation window: propagate one source (an element set, an
 * initialized entity or a resident handle) from START to STOP, sampling at
 * most STEP_SECONDS apart with the last sample exactly at STOP. The answer is
 * one $OEM data block per query, in SEQUENCE order, covering [START, STOP];
 * a provider that cannot answer returns an empty block whose COMMENT begins
 * "REFUSED" and reports the reason in PRWWindowReport.
 */
export declare class PRWWindowQuery implements flatbuffers.IUnpackableObject<PRWWindowQueryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWWindowQuery;
    static getRootAsPRWWindowQuery(bb: flatbuffers.ByteBuffer, obj?: PRWWindowQuery): PRWWindowQuery;
    static getSizePrefixedRootAsPRWWindowQuery(bb: flatbuffers.ByteBuffer, obj?: PRWWindowQuery): PRWWindowQuery;
    /**
     * Position of the query in the request, 0-based; answers keep this order.
     */
    SEQUENCE(): number;
    /**
     * 0-based index of the source record among the source records passed
     * with the request (e.g. the $OMM element sets, across all frames, in input
     * order). Ignored when ENTITY_HANDLE is used.
     */
    SET_INDEX(): number;
    /**
     * Entity handle of an initialized or resident source; 0 = use SET_INDEX.
     */
    ENTITY_HANDLE(): number;
    /**
     * Object key of the source as the requester names it (e.g. "NORAD:25544");
     * the answer block must be of this object.
     */
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD catalog number of the object; 0 = none (then OBJECT_ID identifies
     * it).
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator or provider object identifier; empty = none.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the source record, for reference; absent = not stated.
     */
    SOURCE_EPOCH(obj?: TIMInstant): TIMInstant | null;
    /**
     * First and last instants of the window (UTC unless TIME_SYSTEM says
     * otherwise).
     */
    START(obj?: TIMInstant): TIMInstant | null;
    STOP(obj?: TIMInstant): TIMInstant | null;
    /**
     * Largest sample spacing, seconds (> 0).
     */
    STEP_SECONDS(): number;
    static startPRWWindowQuery(builder: flatbuffers.Builder): void;
    static addSequence(builder: flatbuffers.Builder, SEQUENCE: number): void;
    static addSetIndex(builder: flatbuffers.Builder, SET_INDEX: number): void;
    static addEntityHandle(builder: flatbuffers.Builder, ENTITY_HANDLE: number): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSourceEpoch(builder: flatbuffers.Builder, SOURCE_EPOCHOffset: flatbuffers.Offset): void;
    static addStart(builder: flatbuffers.Builder, STARTOffset: flatbuffers.Offset): void;
    static addStop(builder: flatbuffers.Builder, STOPOffset: flatbuffers.Offset): void;
    static addStepSeconds(builder: flatbuffers.Builder, STEP_SECONDS: number): void;
    static endPRWWindowQuery(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWWindowQueryT;
    unpackTo(_o: PRWWindowQueryT): void;
}
export declare class PRWWindowQueryT implements flatbuffers.IGeneratedObject {
    SEQUENCE: number;
    SET_INDEX: number;
    ENTITY_HANDLE: number;
    OBJECT_KEY: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    SOURCE_EPOCH: TIMInstantT | null;
    START: TIMInstantT | null;
    STOP: TIMInstantT | null;
    STEP_SECONDS: number;
    constructor(SEQUENCE?: number, SET_INDEX?: number, ENTITY_HANDLE?: number, OBJECT_KEY?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, SOURCE_EPOCH?: TIMInstantT | null, START?: TIMInstantT | null, STOP?: TIMInstantT | null, STEP_SECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWWindowQuery.d.ts.map