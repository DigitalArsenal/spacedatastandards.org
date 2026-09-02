import * as flatbuffers from 'flatbuffers';
import { TRPAsset, TRPAssetT } from './TRPAsset.js';
import { trpPredicateKind } from './trpPredicateKind.js';
/**
 * One independently measurable predicate in a trust rule policy.
 */
export declare class TRPPredicate implements flatbuffers.IUnpackableObject<TRPPredicateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRPPredicate;
    static getRootAsTRPPredicate(bb: flatbuffers.ByteBuffer, obj?: TRPPredicate): TRPPredicate;
    static getSizePrefixedRootAsTRPPredicate(bb: flatbuffers.ByteBuffer, obj?: TRPPredicate): TRPPredicate;
    /**
     * Stable identifier unique within the policy.
     */
    PREDICATE_ID(): string | null;
    PREDICATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Predicate operation to evaluate.
     */
    KIND(): trpPredicateKind;
    /**
     * Minimum qualifying value expressed as a uint64 in the smallest unit.
     */
    MIN_VALUE(): bigint;
    /**
     * Currency or unit used to compare normalized values.
     */
    VALUE_CURRENCY(): string | null;
    VALUE_CURRENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum continuous holding duration in seconds.
     */
    MIN_HELD_SECONDS(): bigint;
    /**
     * Assets admitted by this predicate.
     */
    ASSETS(index: number, obj?: TRPAsset): TRPAsset | null;
    assetsLength(): number;
    /**
     * X, the number of named trusters that must match.
     */
    REQUIRED_COUNT(): number;
    /**
     * The N named `$TRE` trusters considered by a trusted-connections predicate.
     */
    TRUSTER_IDS(index: number): string;
    TRUSTER_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    trusterIdsLength(): number;
    /**
     * Minimum accepted `$TRE.WEIGHT` for a matching trust edge.
     */
    MIN_EDGE_WEIGHT(): number;
    static startTRPPredicate(builder: flatbuffers.Builder): void;
    static addPredicateId(builder: flatbuffers.Builder, PREDICATE_IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: trpPredicateKind): void;
    static addMinValue(builder: flatbuffers.Builder, MIN_VALUE: bigint): void;
    static addValueCurrency(builder: flatbuffers.Builder, VALUE_CURRENCYOffset: flatbuffers.Offset): void;
    static addMinHeldSeconds(builder: flatbuffers.Builder, MIN_HELD_SECONDS: bigint): void;
    static addAssets(builder: flatbuffers.Builder, ASSETSOffset: flatbuffers.Offset): void;
    static createAssetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRequiredCount(builder: flatbuffers.Builder, REQUIRED_COUNT: number): void;
    static addTrusterIds(builder: flatbuffers.Builder, TRUSTER_IDSOffset: flatbuffers.Offset): void;
    static createTrusterIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTrusterIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMinEdgeWeight(builder: flatbuffers.Builder, MIN_EDGE_WEIGHT: number): void;
    static endTRPPredicate(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRPPredicate(builder: flatbuffers.Builder, PREDICATE_IDOffset: flatbuffers.Offset, KIND: trpPredicateKind, MIN_VALUE: bigint, VALUE_CURRENCYOffset: flatbuffers.Offset, MIN_HELD_SECONDS: bigint, ASSETSOffset: flatbuffers.Offset, REQUIRED_COUNT: number, TRUSTER_IDSOffset: flatbuffers.Offset, MIN_EDGE_WEIGHT: number): flatbuffers.Offset;
    unpack(): TRPPredicateT;
    unpackTo(_o: TRPPredicateT): void;
}
export declare class TRPPredicateT implements flatbuffers.IGeneratedObject {
    PREDICATE_ID: string | Uint8Array | null;
    KIND: trpPredicateKind;
    MIN_VALUE: bigint;
    VALUE_CURRENCY: string | Uint8Array | null;
    MIN_HELD_SECONDS: bigint;
    ASSETS: (TRPAssetT)[];
    REQUIRED_COUNT: number;
    TRUSTER_IDS: (string)[];
    MIN_EDGE_WEIGHT: number;
    constructor(PREDICATE_ID?: string | Uint8Array | null, KIND?: trpPredicateKind, MIN_VALUE?: bigint, VALUE_CURRENCY?: string | Uint8Array | null, MIN_HELD_SECONDS?: bigint, ASSETS?: (TRPAssetT)[], REQUIRED_COUNT?: number, TRUSTER_IDS?: (string)[], MIN_EDGE_WEIGHT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRPPredicate.d.ts.map