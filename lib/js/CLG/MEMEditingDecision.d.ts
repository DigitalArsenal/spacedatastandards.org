import * as flatbuffers from 'flatbuffers';
import { memEditingAction } from './memEditingAction.js';
import { memEditingReason } from './memEditingReason.js';
/**
 * One deterministic editing decision. The observation identity is carried
 * from the tracking-data input so rejected sets can be compared exactly.
 */
export declare class MEMEditingDecision implements flatbuffers.IUnpackableObject<MEMEditingDecisionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MEMEditingDecision;
    static getRootAsMEMEditingDecision(bb: flatbuffers.ByteBuffer, obj?: MEMEditingDecision): MEMEditingDecision;
    static getSizePrefixedRootAsMEMEditingDecision(bb: flatbuffers.ByteBuffer, obj?: MEMEditingDecision): MEMEditingDecision;
    OBSERVATION_ID(): string;
    OBSERVATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ACTION(): memEditingAction;
    REASON(): memEditingReason;
    PREFIT_RESIDUAL(): number;
    NORMALIZED_RESIDUAL(): number;
    ITERATION(): number;
    static startMEMEditingDecision(builder: flatbuffers.Builder): void;
    static addObservationId(builder: flatbuffers.Builder, OBSERVATION_IDOffset: flatbuffers.Offset): void;
    static addAction(builder: flatbuffers.Builder, ACTION: memEditingAction): void;
    static addReason(builder: flatbuffers.Builder, REASON: memEditingReason): void;
    static addPrefitResidual(builder: flatbuffers.Builder, PREFIT_RESIDUAL: number): void;
    static addNormalizedResidual(builder: flatbuffers.Builder, NORMALIZED_RESIDUAL: number): void;
    static addIteration(builder: flatbuffers.Builder, ITERATION: number): void;
    static endMEMEditingDecision(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMEMEditingDecision(builder: flatbuffers.Builder, OBSERVATION_IDOffset: flatbuffers.Offset, ACTION: memEditingAction, REASON: memEditingReason, PREFIT_RESIDUAL: number, NORMALIZED_RESIDUAL: number, ITERATION: number): flatbuffers.Offset;
    unpack(): MEMEditingDecisionT;
    unpackTo(_o: MEMEditingDecisionT): void;
}
export declare class MEMEditingDecisionT implements flatbuffers.IGeneratedObject {
    OBSERVATION_ID: string | Uint8Array | null;
    ACTION: memEditingAction;
    REASON: memEditingReason;
    PREFIT_RESIDUAL: number;
    NORMALIZED_RESIDUAL: number;
    ITERATION: number;
    constructor(OBSERVATION_ID?: string | Uint8Array | null, ACTION?: memEditingAction, REASON?: memEditingReason, PREFIT_RESIDUAL?: number, NORMALIZED_RESIDUAL?: number, ITERATION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MEMEditingDecision.d.ts.map