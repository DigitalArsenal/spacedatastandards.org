import * as flatbuffers from 'flatbuffers';
import { TRVBondEvidence, TRVBondEvidenceT } from './TRVBondEvidence.js';
import { trpPredicateKind } from './trpPredicateKind.js';
/**
 * Outcome and evidence for one policy predicate.
 */
export declare class TRVPredicateResult implements flatbuffers.IUnpackableObject<TRVPredicateResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRVPredicateResult;
    static getRootAsTRVPredicateResult(bb: flatbuffers.ByteBuffer, obj?: TRVPredicateResult): TRVPredicateResult;
    static getSizePrefixedRootAsTRVPredicateResult(bb: flatbuffers.ByteBuffer, obj?: TRVPredicateResult): TRVPredicateResult;
    /**
     * Identifier of the evaluated `$TRP` predicate.
     */
    PREDICATE_ID(): string | null;
    PREDICATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Predicate operation copied from the evaluated policy.
     */
    KIND(): trpPredicateKind;
    /**
     * Whether this predicate passed.
     */
    PASSED(): boolean;
    /**
     * Value measured by the evaluator.
     */
    MEASURED_VALUE(): number;
    /**
     * Threshold required by the evaluated predicate.
     */
    REQUIRED_VALUE(): number;
    /**
     * Chain evidence used by value and duration predicates.
     */
    BOND_EVIDENCE(index: number, obj?: TRVBondEvidence): TRVBondEvidence | null;
    bondEvidenceLength(): number;
    /**
     * Named `$TRE` trusters whose qualifying edges matched.
     */
    TRUSTER_IDS_MATCHED(index: number): string;
    TRUSTER_IDS_MATCHED(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    trusterIdsMatchedLength(): number;
    /**
     * Human-readable evidence summary.
     */
    EVIDENCE_TEXT(): string | null;
    EVIDENCE_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTRVPredicateResult(builder: flatbuffers.Builder): void;
    static addPredicateId(builder: flatbuffers.Builder, PREDICATE_IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: trpPredicateKind): void;
    static addPassed(builder: flatbuffers.Builder, PASSED: boolean): void;
    static addMeasuredValue(builder: flatbuffers.Builder, MEASURED_VALUE: number): void;
    static addRequiredValue(builder: flatbuffers.Builder, REQUIRED_VALUE: number): void;
    static addBondEvidence(builder: flatbuffers.Builder, BOND_EVIDENCEOffset: flatbuffers.Offset): void;
    static createBondEvidenceVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBondEvidenceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrusterIdsMatched(builder: flatbuffers.Builder, TRUSTER_IDS_MATCHEDOffset: flatbuffers.Offset): void;
    static createTrusterIdsMatchedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTrusterIdsMatchedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEvidenceText(builder: flatbuffers.Builder, EVIDENCE_TEXTOffset: flatbuffers.Offset): void;
    static endTRVPredicateResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRVPredicateResult(builder: flatbuffers.Builder, PREDICATE_IDOffset: flatbuffers.Offset, KIND: trpPredicateKind, PASSED: boolean, MEASURED_VALUE: number, REQUIRED_VALUE: number, BOND_EVIDENCEOffset: flatbuffers.Offset, TRUSTER_IDS_MATCHEDOffset: flatbuffers.Offset, EVIDENCE_TEXTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRVPredicateResultT;
    unpackTo(_o: TRVPredicateResultT): void;
}
export declare class TRVPredicateResultT implements flatbuffers.IGeneratedObject {
    PREDICATE_ID: string | Uint8Array | null;
    KIND: trpPredicateKind;
    PASSED: boolean;
    MEASURED_VALUE: number;
    REQUIRED_VALUE: number;
    BOND_EVIDENCE: (TRVBondEvidenceT)[];
    TRUSTER_IDS_MATCHED: (string)[];
    EVIDENCE_TEXT: string | Uint8Array | null;
    constructor(PREDICATE_ID?: string | Uint8Array | null, KIND?: trpPredicateKind, PASSED?: boolean, MEASURED_VALUE?: number, REQUIRED_VALUE?: number, BOND_EVIDENCE?: (TRVBondEvidenceT)[], TRUSTER_IDS_MATCHED?: (string)[], EVIDENCE_TEXT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRVPredicateResult.d.ts.map