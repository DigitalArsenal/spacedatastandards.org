import * as flatbuffers from 'flatbuffers';
import { TRVPredicateResult, TRVPredicateResultT } from './TRVPredicateResult.js';
/**
 * Trust Rule Verdict.
 *
 * A TRV records one reproducible evaluation of a `$TRP` policy for a subject.
 * This record replaces ad-hoc trust status events.
 */
export declare class TRV implements flatbuffers.IUnpackableObject<TRVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRV;
    static getRootAsTRV(bb: flatbuffers.ByteBuffer, obj?: TRV): TRV;
    static getSizePrefixedRootAsTRV(bb: flatbuffers.ByteBuffer, obj?: TRV): TRV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier for this evaluation.
     */
    VERDICT_ID(): string;
    VERDICT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identifier of the evaluated `$TRP` policy.
     */
    POLICY_ID(): string;
    POLICY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identifier of the subject evaluated by the policy.
     */
    SUBJECT_ID(): string;
    SUBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Whether the complete policy passed.
     */
    PASSED(): boolean;
    /**
     * Pass state produced by the immediately preceding evaluation.
     */
    PREVIOUS_PASSED(): boolean;
    /**
     * Score produced by this evaluation.
     */
    SCORE(): number;
    /**
     * Score produced by the immediately preceding evaluation.
     */
    PREVIOUS_SCORE(): number;
    /**
     * Per-predicate results and their evidence.
     */
    RESULTS(index: number, obj?: TRVPredicateResult): TRVPredicateResult | null;
    resultsLength(): number;
    /**
     * Evaluation trigger: "interval" or an event source name.
     */
    TRIGGER(): string | null;
    TRIGGER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp in milliseconds when the evaluation completed.
     */
    EVALUATED_AT(): bigint;
    /**
     * Peer identifier of the evaluator that issued this verdict.
     */
    EVALUATOR_PEER_ID(): string | null;
    EVALUATOR_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Evaluator signature over the verdict record.
     */
    EVALUATOR_SIGNATURE(index: number): number | null;
    evaluatorSignatureLength(): number;
    evaluatorSignatureArray(): Uint8Array | null;
    static startTRV(builder: flatbuffers.Builder): void;
    static addVerdictId(builder: flatbuffers.Builder, VERDICT_IDOffset: flatbuffers.Offset): void;
    static addPolicyId(builder: flatbuffers.Builder, POLICY_IDOffset: flatbuffers.Offset): void;
    static addSubjectId(builder: flatbuffers.Builder, SUBJECT_IDOffset: flatbuffers.Offset): void;
    static addPassed(builder: flatbuffers.Builder, PASSED: boolean): void;
    static addPreviousPassed(builder: flatbuffers.Builder, PREVIOUS_PASSED: boolean): void;
    static addScore(builder: flatbuffers.Builder, SCORE: number): void;
    static addPreviousScore(builder: flatbuffers.Builder, PREVIOUS_SCORE: number): void;
    static addResults(builder: flatbuffers.Builder, RESULTSOffset: flatbuffers.Offset): void;
    static createResultsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrigger(builder: flatbuffers.Builder, TRIGGEROffset: flatbuffers.Offset): void;
    static addEvaluatedAt(builder: flatbuffers.Builder, EVALUATED_AT: bigint): void;
    static addEvaluatorPeerId(builder: flatbuffers.Builder, EVALUATOR_PEER_IDOffset: flatbuffers.Offset): void;
    static addEvaluatorSignature(builder: flatbuffers.Builder, EVALUATOR_SIGNATUREOffset: flatbuffers.Offset): void;
    static createEvaluatorSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEvaluatorSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTRV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTRVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTRVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTRV(builder: flatbuffers.Builder, VERDICT_IDOffset: flatbuffers.Offset, POLICY_IDOffset: flatbuffers.Offset, SUBJECT_IDOffset: flatbuffers.Offset, PASSED: boolean, PREVIOUS_PASSED: boolean, SCORE: number, PREVIOUS_SCORE: number, RESULTSOffset: flatbuffers.Offset, TRIGGEROffset: flatbuffers.Offset, EVALUATED_AT: bigint, EVALUATOR_PEER_IDOffset: flatbuffers.Offset, EVALUATOR_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRVT;
    unpackTo(_o: TRVT): void;
}
export declare class TRVT implements flatbuffers.IGeneratedObject {
    VERDICT_ID: string | Uint8Array | null;
    POLICY_ID: string | Uint8Array | null;
    SUBJECT_ID: string | Uint8Array | null;
    PASSED: boolean;
    PREVIOUS_PASSED: boolean;
    SCORE: number;
    PREVIOUS_SCORE: number;
    RESULTS: (TRVPredicateResultT)[];
    TRIGGER: string | Uint8Array | null;
    EVALUATED_AT: bigint;
    EVALUATOR_PEER_ID: string | Uint8Array | null;
    EVALUATOR_SIGNATURE: (number)[];
    constructor(VERDICT_ID?: string | Uint8Array | null, POLICY_ID?: string | Uint8Array | null, SUBJECT_ID?: string | Uint8Array | null, PASSED?: boolean, PREVIOUS_PASSED?: boolean, SCORE?: number, PREVIOUS_SCORE?: number, RESULTS?: (TRVPredicateResultT)[], TRIGGER?: string | Uint8Array | null, EVALUATED_AT?: bigint, EVALUATOR_PEER_ID?: string | Uint8Array | null, EVALUATOR_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRV.d.ts.map