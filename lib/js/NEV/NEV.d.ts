import * as flatbuffers from 'flatbuffers';
import { NEVEvent, NEVEventT } from './NEVEvent.js';
/**
 * Node Event - one read of a node's event log.
 */
export declare class NEV implements flatbuffers.IUnpackableObject<NEVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NEV;
    static getRootAsNEV(bb: flatbuffers.ByteBuffer, obj?: NEV): NEV;
    static getSizePrefixedRootAsNEV(bb: flatbuffers.ByteBuffer, obj?: NEV): NEV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the node whose log this is.
     */
    NODE_ID(): string | null;
    NODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds when this set was read.
     */
    GENERATED_AT_MS(): bigint;
    /**
     * Events in this set, newest first.
     */
    EVENTS(index: number, obj?: NEVEvent): NEVEvent | null;
    eventsLength(): number;
    /**
     * Events the node holds in its log; 0 = unknown.
     */
    TOTAL_EVENTS(): bigint;
    /**
     * Unix milliseconds of the oldest event the node still holds; 0 = unknown.
     */
    OLDEST_TIME_MS(): bigint;
    static startNEV(builder: flatbuffers.Builder): void;
    static addNodeId(builder: flatbuffers.Builder, NODE_IDOffset: flatbuffers.Offset): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static addEvents(builder: flatbuffers.Builder, EVENTSOffset: flatbuffers.Offset): void;
    static createEventsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEventsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalEvents(builder: flatbuffers.Builder, TOTAL_EVENTS: bigint): void;
    static addOldestTimeMs(builder: flatbuffers.Builder, OLDEST_TIME_MS: bigint): void;
    static endNEV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishNEVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedNEVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createNEV(builder: flatbuffers.Builder, NODE_IDOffset: flatbuffers.Offset, GENERATED_AT_MS: bigint, EVENTSOffset: flatbuffers.Offset, TOTAL_EVENTS: bigint, OLDEST_TIME_MS: bigint): flatbuffers.Offset;
    unpack(): NEVT;
    unpackTo(_o: NEVT): void;
}
export declare class NEVT implements flatbuffers.IGeneratedObject {
    NODE_ID: string | Uint8Array | null;
    GENERATED_AT_MS: bigint;
    EVENTS: (NEVEventT)[];
    TOTAL_EVENTS: bigint;
    OLDEST_TIME_MS: bigint;
    constructor(NODE_ID?: string | Uint8Array | null, GENERATED_AT_MS?: bigint, EVENTS?: (NEVEventT)[], TOTAL_EVENTS?: bigint, OLDEST_TIME_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NEV.d.ts.map