import * as flatbuffers from 'flatbuffers';
import { PRWWindowQuery, PRWWindowQueryT } from './PRWWindowQuery.js';
/**
 * A batch of propagation windows. Existing BATCH_REQUEST propagates every
 * entity to one EPOCH; a window request propagates each query's source over
 * its own [START, STOP] at STEP_SECONDS.
 */
export declare class PRWWindowRequest implements flatbuffers.IUnpackableObject<PRWWindowRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWWindowRequest;
    static getRootAsPRWWindowRequest(bb: flatbuffers.ByteBuffer, obj?: PRWWindowRequest): PRWWindowRequest;
    static getSizePrefixedRootAsPRWWindowRequest(bb: flatbuffers.ByteBuffer, obj?: PRWWindowRequest): PRWWindowRequest;
    QUERIES(index: number, obj?: PRWWindowQuery): PRWWindowQuery | null;
    queriesLength(): number;
    /**
     * Port of the propagator expected to answer; empty = the host's default.
     */
    PROPAGATOR_PORT_ID(): string | null;
    PROPAGATOR_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Neighbouring source records each window spans on either side (context
     * for the requester's replay); 0 = not stated.
     */
    NEIGHBOUR_SETS(): number;
    /**
     * Frame the answers should be in, as an RFM name (e.g. "TEME", "GCRF");
     * empty = the provider's native frame.
     */
    TARGET_FRAME(): string | null;
    TARGET_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * How to answer, human-readable.
     */
    INSTRUCTIONS(): string | null;
    INSTRUCTIONS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPRWWindowRequest(builder: flatbuffers.Builder): void;
    static addQueries(builder: flatbuffers.Builder, QUERIESOffset: flatbuffers.Offset): void;
    static createQueriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startQueriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPropagatorPortId(builder: flatbuffers.Builder, PROPAGATOR_PORT_IDOffset: flatbuffers.Offset): void;
    static addNeighbourSets(builder: flatbuffers.Builder, NEIGHBOUR_SETS: number): void;
    static addTargetFrame(builder: flatbuffers.Builder, TARGET_FRAMEOffset: flatbuffers.Offset): void;
    static addInstructions(builder: flatbuffers.Builder, INSTRUCTIONSOffset: flatbuffers.Offset): void;
    static endPRWWindowRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWWindowRequest(builder: flatbuffers.Builder, QUERIESOffset: flatbuffers.Offset, PROPAGATOR_PORT_IDOffset: flatbuffers.Offset, NEIGHBOUR_SETS: number, TARGET_FRAMEOffset: flatbuffers.Offset, INSTRUCTIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWWindowRequestT;
    unpackTo(_o: PRWWindowRequestT): void;
}
export declare class PRWWindowRequestT implements flatbuffers.IGeneratedObject {
    QUERIES: (PRWWindowQueryT)[];
    PROPAGATOR_PORT_ID: string | Uint8Array | null;
    NEIGHBOUR_SETS: number;
    TARGET_FRAME: string | Uint8Array | null;
    INSTRUCTIONS: string | Uint8Array | null;
    constructor(QUERIES?: (PRWWindowQueryT)[], PROPAGATOR_PORT_ID?: string | Uint8Array | null, NEIGHBOUR_SETS?: number, TARGET_FRAME?: string | Uint8Array | null, INSTRUCTIONS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWWindowRequest.d.ts.map