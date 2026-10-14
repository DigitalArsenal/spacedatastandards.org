import * as flatbuffers from 'flatbuffers';
import { nevEventKind } from './nevEventKind.js';
/**
 * One event.
 */
export declare class NEVEvent implements flatbuffers.IUnpackableObject<NEVEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NEVEvent;
    static getRootAsNEVEvent(bb: flatbuffers.ByteBuffer, obj?: NEVEvent): NEVEvent;
    static getSizePrefixedRootAsNEVEvent(bb: flatbuffers.ByteBuffer, obj?: NEVEvent): NEVEvent;
    /**
     * Unix milliseconds when the event happened.
     */
    TIME_MS(): bigint;
    KIND(): nevEventKind;
    /**
     * Peer the event concerns, when it concerns one.
     */
    PEER_ID(): string | null;
    PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Subject the event concerns, when it is not a peer: a standard code, a
     * module identifier, a grant identifier or a content identifier.
     */
    SUBJECT(): string | null;
    SUBJECT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * How many items the event covers (records stored, records deleted); 0 =
     * not a count.
     */
    COUNT(): bigint;
    /**
     * Short human-readable detail.
     */
    DETAIL(): string | null;
    DETAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNEVEvent(builder: flatbuffers.Builder): void;
    static addTimeMs(builder: flatbuffers.Builder, TIME_MS: bigint): void;
    static addKind(builder: flatbuffers.Builder, KIND: nevEventKind): void;
    static addPeerId(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset): void;
    static addSubject(builder: flatbuffers.Builder, SUBJECTOffset: flatbuffers.Offset): void;
    static addCount(builder: flatbuffers.Builder, COUNT: bigint): void;
    static addDetail(builder: flatbuffers.Builder, DETAILOffset: flatbuffers.Offset): void;
    static endNEVEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNEVEvent(builder: flatbuffers.Builder, TIME_MS: bigint, KIND: nevEventKind, PEER_IDOffset: flatbuffers.Offset, SUBJECTOffset: flatbuffers.Offset, COUNT: bigint, DETAILOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NEVEventT;
    unpackTo(_o: NEVEventT): void;
}
export declare class NEVEventT implements flatbuffers.IGeneratedObject {
    TIME_MS: bigint;
    KIND: nevEventKind;
    PEER_ID: string | Uint8Array | null;
    SUBJECT: string | Uint8Array | null;
    COUNT: bigint;
    DETAIL: string | Uint8Array | null;
    constructor(TIME_MS?: bigint, KIND?: nevEventKind, PEER_ID?: string | Uint8Array | null, SUBJECT?: string | Uint8Array | null, COUNT?: bigint, DETAIL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NEVEvent.d.ts.map