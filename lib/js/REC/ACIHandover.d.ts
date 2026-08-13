import * as flatbuffers from 'flatbuffers';
import { aciHandoverKind } from './aciHandoverKind.js';
import { rflConstraint } from './rflConstraint.js';
/**
 * A transition of service between two links.
 */
export declare class ACIHandover implements flatbuffers.IUnpackableObject<ACIHandoverT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACIHandover;
    static getRootAsACIHandover(bb: flatbuffers.ByteBuffer, obj?: ACIHandover): ACIHandover;
    static getSizePrefixedRootAsACIHandover(bb: flatbuffers.ByteBuffer, obj?: ACIHandover): ACIHandover;
    HANDOVER_KIND(): aciHandoverKind;
    /**
     * Link service moved FROM.
     */
    PREDECESSOR_LINK_ID(): string | null;
    PREDECESSOR_LINK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link service moved TO.
     */
    SUCCESSOR_LINK_ID(): string | null;
    SUCCESSOR_LINK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PREDECESSOR_ENDPOINT_ID(): string | null;
    PREDECESSOR_ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SUCCESSOR_ENDPOINT_ID(): string | null;
    SUCCESSOR_ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Seconds both links were usable together. Meaningful for
     * MAKE_BEFORE_BREAK and SOFT.
     */
    OVERLAP_S(): number;
    /**
     * Seconds neither link was usable. Meaningful for BREAK_BEFORE_MAKE.
     */
    GAP_S(): number;
    /**
     * Condition that triggered the handover.
     */
    TRIGGER(): rflConstraint;
    /**
     * Epoch of the transition, seconds since 1970-01-01T00:00:00 in the
     * record's TIME_SYSTEM.
     */
    EXECUTED_AT(): number;
    static startACIHandover(builder: flatbuffers.Builder): void;
    static addHandoverKind(builder: flatbuffers.Builder, HANDOVER_KIND: aciHandoverKind): void;
    static addPredecessorLinkId(builder: flatbuffers.Builder, PREDECESSOR_LINK_IDOffset: flatbuffers.Offset): void;
    static addSuccessorLinkId(builder: flatbuffers.Builder, SUCCESSOR_LINK_IDOffset: flatbuffers.Offset): void;
    static addPredecessorEndpointId(builder: flatbuffers.Builder, PREDECESSOR_ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addSuccessorEndpointId(builder: flatbuffers.Builder, SUCCESSOR_ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addOverlapS(builder: flatbuffers.Builder, OVERLAP_S: number): void;
    static addGapS(builder: flatbuffers.Builder, GAP_S: number): void;
    static addTrigger(builder: flatbuffers.Builder, TRIGGER: rflConstraint): void;
    static addExecutedAt(builder: flatbuffers.Builder, EXECUTED_AT: number): void;
    static endACIHandover(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACIHandover(builder: flatbuffers.Builder, HANDOVER_KIND: aciHandoverKind, PREDECESSOR_LINK_IDOffset: flatbuffers.Offset, SUCCESSOR_LINK_IDOffset: flatbuffers.Offset, PREDECESSOR_ENDPOINT_IDOffset: flatbuffers.Offset, SUCCESSOR_ENDPOINT_IDOffset: flatbuffers.Offset, OVERLAP_S: number, GAP_S: number, TRIGGER: rflConstraint, EXECUTED_AT: number): flatbuffers.Offset;
    unpack(): ACIHandoverT;
    unpackTo(_o: ACIHandoverT): void;
}
export declare class ACIHandoverT implements flatbuffers.IGeneratedObject {
    HANDOVER_KIND: aciHandoverKind;
    PREDECESSOR_LINK_ID: string | Uint8Array | null;
    SUCCESSOR_LINK_ID: string | Uint8Array | null;
    PREDECESSOR_ENDPOINT_ID: string | Uint8Array | null;
    SUCCESSOR_ENDPOINT_ID: string | Uint8Array | null;
    OVERLAP_S: number;
    GAP_S: number;
    TRIGGER: rflConstraint;
    EXECUTED_AT: number;
    constructor(HANDOVER_KIND?: aciHandoverKind, PREDECESSOR_LINK_ID?: string | Uint8Array | null, SUCCESSOR_LINK_ID?: string | Uint8Array | null, PREDECESSOR_ENDPOINT_ID?: string | Uint8Array | null, SUCCESSOR_ENDPOINT_ID?: string | Uint8Array | null, OVERLAP_S?: number, GAP_S?: number, TRIGGER?: rflConstraint, EXECUTED_AT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACIHandover.d.ts.map