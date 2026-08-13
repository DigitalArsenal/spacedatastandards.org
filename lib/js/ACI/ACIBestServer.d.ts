import * as flatbuffers from 'flatbuffers';
import { rflBudgetTerm } from './rflBudgetTerm.js';
/**
 * The server that served an interval best, and what it beat. Publishing the
 * runner-up is what makes a best-server claim auditable rather than an
 * assertion.
 */
export declare class ACIBestServer implements flatbuffers.IUnpackableObject<ACIBestServerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACIBestServer;
    static getRootAsACIBestServer(bb: flatbuffers.ByteBuffer, obj?: ACIBestServer): ACIBestServer;
    static getSizePrefixedRootAsACIBestServer(bb: flatbuffers.ByteBuffer, obj?: ACIBestServer): ACIBestServer;
    /**
     * `$RFL.RFLEndpoint.ENDPOINT_ID` of the winning server.
     */
    ENDPOINT_ID(): string;
    ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * `$RFL.RFLLink.LINK_ID` of the winning link.
     */
    LINK_ID(): string | null;
    LINK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The metric the selection was made on.
     */
    SELECTION_TERM(): rflBudgetTerm;
    /**
     * Winning value of SELECTION_TERM.
     */
    SELECTION_VALUE(): number;
    /**
     * Units of SELECTION_VALUE. Required whenever a value is published: a
     * selection metric with no unit cannot be re-derived or compared.
     */
    SELECTION_UNITS(): string | null;
    SELECTION_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Endpoint that placed second.
     */
    RUNNER_UP_ENDPOINT_ID(): string | null;
    RUNNER_UP_ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Runner-up value of SELECTION_TERM, same units.
     */
    RUNNER_UP_VALUE(): number;
    /**
     * Rule applied when the metric tied (e.g. "lowest slant range").
     */
    TIE_BROKEN_BY(): string | null;
    TIE_BROKEN_BY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of candidate servers evaluated, including the winner.
     */
    CANDIDATES_EVALUATED(): number;
    static startACIBestServer(builder: flatbuffers.Builder): void;
    static addEndpointId(builder: flatbuffers.Builder, ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addLinkId(builder: flatbuffers.Builder, LINK_IDOffset: flatbuffers.Offset): void;
    static addSelectionTerm(builder: flatbuffers.Builder, SELECTION_TERM: rflBudgetTerm): void;
    static addSelectionValue(builder: flatbuffers.Builder, SELECTION_VALUE: number): void;
    static addSelectionUnits(builder: flatbuffers.Builder, SELECTION_UNITSOffset: flatbuffers.Offset): void;
    static addRunnerUpEndpointId(builder: flatbuffers.Builder, RUNNER_UP_ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addRunnerUpValue(builder: flatbuffers.Builder, RUNNER_UP_VALUE: number): void;
    static addTieBrokenBy(builder: flatbuffers.Builder, TIE_BROKEN_BYOffset: flatbuffers.Offset): void;
    static addCandidatesEvaluated(builder: flatbuffers.Builder, CANDIDATES_EVALUATED: number): void;
    static endACIBestServer(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACIBestServer(builder: flatbuffers.Builder, ENDPOINT_IDOffset: flatbuffers.Offset, LINK_IDOffset: flatbuffers.Offset, SELECTION_TERM: rflBudgetTerm, SELECTION_VALUE: number, SELECTION_UNITSOffset: flatbuffers.Offset, RUNNER_UP_ENDPOINT_IDOffset: flatbuffers.Offset, RUNNER_UP_VALUE: number, TIE_BROKEN_BYOffset: flatbuffers.Offset, CANDIDATES_EVALUATED: number): flatbuffers.Offset;
    unpack(): ACIBestServerT;
    unpackTo(_o: ACIBestServerT): void;
}
export declare class ACIBestServerT implements flatbuffers.IGeneratedObject {
    ENDPOINT_ID: string | Uint8Array | null;
    LINK_ID: string | Uint8Array | null;
    SELECTION_TERM: rflBudgetTerm;
    SELECTION_VALUE: number;
    SELECTION_UNITS: string | Uint8Array | null;
    RUNNER_UP_ENDPOINT_ID: string | Uint8Array | null;
    RUNNER_UP_VALUE: number;
    TIE_BROKEN_BY: string | Uint8Array | null;
    CANDIDATES_EVALUATED: number;
    constructor(ENDPOINT_ID?: string | Uint8Array | null, LINK_ID?: string | Uint8Array | null, SELECTION_TERM?: rflBudgetTerm, SELECTION_VALUE?: number, SELECTION_UNITS?: string | Uint8Array | null, RUNNER_UP_ENDPOINT_ID?: string | Uint8Array | null, RUNNER_UP_VALUE?: number, TIE_BROKEN_BY?: string | Uint8Array | null, CANDIDATES_EVALUATED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACIBestServer.d.ts.map