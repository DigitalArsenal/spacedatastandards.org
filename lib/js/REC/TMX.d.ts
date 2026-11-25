import * as flatbuffers from 'flatbuffers';
import { TMXBucket, TMXBucketT } from './TMXBucket.js';
import { TMXCell, TMXCellT } from './TMXCell.js';
import { TMXCompoundEvent, TMXCompoundEventT } from './TMXCompoundEvent.js';
import { TMXCompoundRule, TMXCompoundRuleT } from './TMXCompoundRule.js';
import { TMXModuleRun, TMXModuleRunT } from './TMXModuleRun.js';
import { TMXPhenomenologyWeight, TMXPhenomenologyWeightT } from './TMXPhenomenologyWeight.js';
import { TMXRequest, TMXRequestT } from './TMXRequest.js';
import { TMXRollup, TMXRollupT } from './TMXRollup.js';
import { tmxExecutionHostKind } from './tmxExecutionHostKind.js';
import { tmxPropagatorKind } from './tmxPropagatorKind.js';
/**
 * Multi-Phenomenology Threat Matrix
 */
export declare class TMX implements flatbuffers.IUnpackableObject<TMXT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMX;
    static getRootAsTMX(bb: flatbuffers.ByteBuffer, obj?: TMX): TMX;
    static getSizePrefixedRootAsTMX(bb: flatbuffers.ByteBuffer, obj?: TMX): TMX;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique run identifier for this threat matrix assessment.
     */
    RUN_ID(): string;
    RUN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Creation timestamp of this chunk/run, RFC 3339 UTC.
     */
    CREATED_UTC(): string;
    CREATED_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Inclusive analysis window start, RFC 3339 UTC.
     */
    WINDOW_START(): string;
    WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Exclusive analysis window end, RFC 3339 UTC.
     */
    WINDOW_END(): string;
    WINDOW_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Ephemeris propagator theory used for this run.
     */
    PROPAGATOR(): tmxPropagatorKind;
    /**
     * Canonical propagator module identifier.
     */
    PROPAGATOR_ID(): string | null;
    PROPAGATOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Execution host that computed this matrix.
     */
    EXECUTION_HOST(): tmxExecutionHostKind;
    /**
     * Deterministic scoring profile identifier.
     */
    SCORING_PROFILE_ID(): string | null;
    SCORING_PROFILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Zero-based streaming chunk index for progressive delivery.
     */
    CHUNK_INDEX(): number;
    /**
     * True on the final chunk of a streamed matrix run.
     */
    IS_FINAL_CHUNK(): boolean;
    /**
     * Originating TMXRequest configuration for reproducibility.
     */
    REQUEST(obj?: TMXRequest): TMXRequest | null;
    /**
     * Configured phenomenology weights and severity thresholds.
     */
    PHENOMENOLOGY_WEIGHTS(index: number, obj?: TMXPhenomenologyWeight): TMXPhenomenologyWeight | null;
    phenomenologyWeightsLength(): number;
    /**
     * Configured compound overlap multiplier/bonus rules.
     */
    COMPOUND_MULTIPLIERS(index: number, obj?: TMXCompoundRule): TMXCompoundRule | null;
    compoundMultipliersLength(): number;
    /**
     * Target aggregation buckets included in this run.
     */
    TARGET_BUCKETS(index: number, obj?: TMXBucket): TMXBucket | null;
    targetBucketsLength(): number;
    /**
     * Per-phenomenology module execution records.
     */
    PHENOMENOLOGIES_RUN(index: number, obj?: TMXModuleRun): TMXModuleRun | null;
    phenomenologiesRunLength(): number;
    /**
     * Evaluated matrix cells (bucket x phenomenology).
     */
    CELLS(index: number, obj?: TMXCell): TMXCell | null;
    cellsLength(): number;
    /**
     * Detected multi-phenomenology compound overlap events.
     */
    COMPOUND_EVENTS(index: number, obj?: TMXCompoundEvent): TMXCompoundEvent | null;
    compoundEventsLength(): number;
    /**
     * Deterministic composite rollups per bucket.
     */
    ROLLUPS(index: number, obj?: TMXRollup): TMXRollup | null;
    rollupsLength(): number;
    static startTMX(builder: flatbuffers.Builder): void;
    static addRunId(builder: flatbuffers.Builder, RUN_IDOffset: flatbuffers.Offset): void;
    static addCreatedUtc(builder: flatbuffers.Builder, CREATED_UTCOffset: flatbuffers.Offset): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addWindowEnd(builder: flatbuffers.Builder, WINDOW_ENDOffset: flatbuffers.Offset): void;
    static addPropagator(builder: flatbuffers.Builder, PROPAGATOR: tmxPropagatorKind): void;
    static addPropagatorId(builder: flatbuffers.Builder, PROPAGATOR_IDOffset: flatbuffers.Offset): void;
    static addExecutionHost(builder: flatbuffers.Builder, EXECUTION_HOST: tmxExecutionHostKind): void;
    static addScoringProfileId(builder: flatbuffers.Builder, SCORING_PROFILE_IDOffset: flatbuffers.Offset): void;
    static addChunkIndex(builder: flatbuffers.Builder, CHUNK_INDEX: number): void;
    static addIsFinalChunk(builder: flatbuffers.Builder, IS_FINAL_CHUNK: boolean): void;
    static addRequest(builder: flatbuffers.Builder, REQUESTOffset: flatbuffers.Offset): void;
    static addPhenomenologyWeights(builder: flatbuffers.Builder, PHENOMENOLOGY_WEIGHTSOffset: flatbuffers.Offset): void;
    static createPhenomenologyWeightsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPhenomenologyWeightsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCompoundMultipliers(builder: flatbuffers.Builder, COMPOUND_MULTIPLIERSOffset: flatbuffers.Offset): void;
    static createCompoundMultipliersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCompoundMultipliersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTargetBuckets(builder: flatbuffers.Builder, TARGET_BUCKETSOffset: flatbuffers.Offset): void;
    static createTargetBucketsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTargetBucketsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPhenomenologiesRun(builder: flatbuffers.Builder, PHENOMENOLOGIES_RUNOffset: flatbuffers.Offset): void;
    static createPhenomenologiesRunVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPhenomenologiesRunVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCells(builder: flatbuffers.Builder, CELLSOffset: flatbuffers.Offset): void;
    static createCellsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCellsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCompoundEvents(builder: flatbuffers.Builder, COMPOUND_EVENTSOffset: flatbuffers.Offset): void;
    static createCompoundEventsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCompoundEventsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRollups(builder: flatbuffers.Builder, ROLLUPSOffset: flatbuffers.Offset): void;
    static createRollupsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRollupsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTMX(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTMXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTMXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TMXT;
    unpackTo(_o: TMXT): void;
}
export declare class TMXT implements flatbuffers.IGeneratedObject {
    RUN_ID: string | Uint8Array | null;
    CREATED_UTC: string | Uint8Array | null;
    WINDOW_START: string | Uint8Array | null;
    WINDOW_END: string | Uint8Array | null;
    PROPAGATOR: tmxPropagatorKind;
    PROPAGATOR_ID: string | Uint8Array | null;
    EXECUTION_HOST: tmxExecutionHostKind;
    SCORING_PROFILE_ID: string | Uint8Array | null;
    CHUNK_INDEX: number;
    IS_FINAL_CHUNK: boolean;
    REQUEST: TMXRequestT | null;
    PHENOMENOLOGY_WEIGHTS: (TMXPhenomenologyWeightT)[];
    COMPOUND_MULTIPLIERS: (TMXCompoundRuleT)[];
    TARGET_BUCKETS: (TMXBucketT)[];
    PHENOMENOLOGIES_RUN: (TMXModuleRunT)[];
    CELLS: (TMXCellT)[];
    COMPOUND_EVENTS: (TMXCompoundEventT)[];
    ROLLUPS: (TMXRollupT)[];
    constructor(RUN_ID?: string | Uint8Array | null, CREATED_UTC?: string | Uint8Array | null, WINDOW_START?: string | Uint8Array | null, WINDOW_END?: string | Uint8Array | null, PROPAGATOR?: tmxPropagatorKind, PROPAGATOR_ID?: string | Uint8Array | null, EXECUTION_HOST?: tmxExecutionHostKind, SCORING_PROFILE_ID?: string | Uint8Array | null, CHUNK_INDEX?: number, IS_FINAL_CHUNK?: boolean, REQUEST?: TMXRequestT | null, PHENOMENOLOGY_WEIGHTS?: (TMXPhenomenologyWeightT)[], COMPOUND_MULTIPLIERS?: (TMXCompoundRuleT)[], TARGET_BUCKETS?: (TMXBucketT)[], PHENOMENOLOGIES_RUN?: (TMXModuleRunT)[], CELLS?: (TMXCellT)[], COMPOUND_EVENTS?: (TMXCompoundEventT)[], ROLLUPS?: (TMXRollupT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMX.d.ts.map