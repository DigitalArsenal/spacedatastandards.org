import * as flatbuffers from 'flatbuffers';
import { TRPGroup, TRPGroupT } from './TRPGroup.js';
/**
 * Trust Rule Policy - Signed compound criteria for evaluating one subject.
 */
export declare class TRP implements flatbuffers.IUnpackableObject<TRPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRP;
    static getRootAsTRP(bb: flatbuffers.ByteBuffer, obj?: TRP): TRP;
    static getSizePrefixedRootAsTRP(bb: flatbuffers.ByteBuffer, obj?: TRP): TRP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable policy identifier.
     */
    POLICY_ID(): string;
    POLICY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable policy name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable policy description.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Root of the compound rule tree.
     */
    ROOT(obj?: TRPGroup): TRPGroup | null;
    /**
     * Periodic evaluation cadence in milliseconds. The 10000 default is the
     * 0.1 Hz baseline and is configurable by the policy author.
     */
    EVALUATION_INTERVAL_MS(): number;
    /**
     * Event names that may trigger evaluation, e.g. "trust-edge", "trust-node",
     * "entity-profile", or "chain-balance".
     */
    EVENT_SOURCES(index: number): string;
    EVENT_SOURCES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    eventSourcesLength(): number;
    /**
     * Whether evaluators should currently apply this policy.
     */
    ACTIVE(): boolean;
    /**
     * Unix timestamp in milliseconds when this policy was created.
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp in milliseconds when this policy was last updated.
     */
    UPDATED_AT(): bigint;
    /**
     * Peer identifier of the evaluator that issued this policy record.
     */
    EVALUATOR_PEER_ID(): string | null;
    EVALUATOR_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Evaluator signature over the policy record.
     */
    EVALUATOR_SIGNATURE(index: number): number | null;
    evaluatorSignatureLength(): number;
    evaluatorSignatureArray(): Uint8Array | null;
    static startTRP(builder: flatbuffers.Builder): void;
    static addPolicyId(builder: flatbuffers.Builder, POLICY_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addRoot(builder: flatbuffers.Builder, ROOTOffset: flatbuffers.Offset): void;
    static addEvaluationIntervalMs(builder: flatbuffers.Builder, EVALUATION_INTERVAL_MS: number): void;
    static addEventSources(builder: flatbuffers.Builder, EVENT_SOURCESOffset: flatbuffers.Offset): void;
    static createEventSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEventSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addActive(builder: flatbuffers.Builder, ACTIVE: boolean): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addEvaluatorPeerId(builder: flatbuffers.Builder, EVALUATOR_PEER_IDOffset: flatbuffers.Offset): void;
    static addEvaluatorSignature(builder: flatbuffers.Builder, EVALUATOR_SIGNATUREOffset: flatbuffers.Offset): void;
    static createEvaluatorSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEvaluatorSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTRP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTRPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTRPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TRPT;
    unpackTo(_o: TRPT): void;
}
export declare class TRPT implements flatbuffers.IGeneratedObject {
    POLICY_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    ROOT: TRPGroupT | null;
    EVALUATION_INTERVAL_MS: number;
    EVENT_SOURCES: (string)[];
    ACTIVE: boolean;
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    EVALUATOR_PEER_ID: string | Uint8Array | null;
    EVALUATOR_SIGNATURE: (number)[];
    constructor(POLICY_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, ROOT?: TRPGroupT | null, EVALUATION_INTERVAL_MS?: number, EVENT_SOURCES?: (string)[], ACTIVE?: boolean, CREATED_AT?: bigint, UPDATED_AT?: bigint, EVALUATOR_PEER_ID?: string | Uint8Array | null, EVALUATOR_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRP.d.ts.map