import * as flatbuffers from 'flatbuffers';
import { txsMergeMethod } from './txsMergeMethod.js';
/**
 * How one facility's independent source reports were reduced to the single
 * published position, and how strongly those reports agreed.
 *
 * Agreement is CORROBORATION and is never authority: five compilations that
 * copied one another agree perfectly and establish nothing. Read this table
 * beside POSITION_AUTHORITY, never instead of it.
 */
export declare class TXSConsensus implements flatbuffers.IUnpackableObject<TXSConsensusT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TXSConsensus;
    static getRootAsTXSConsensus(bb: flatbuffers.ByteBuffer, obj?: TXSConsensus): TXSConsensus;
    static getSizePrefixedRootAsTXSConsensus(bb: flatbuffers.ByteBuffer, obj?: TXSConsensus): TXSConsensus;
    METHOD(): txsMergeMethod;
    /**
     * Sources queried for this facility, including those that returned nothing.
     * Never fewer than the number of SOURCES entries.
     */
    PROVIDERS_CONSULTED(): number;
    /**
     * Sources whose reported position fell within the publisher's agreement
     * threshold. A value of 1 means the published position rests on a single
     * report and was never independently corroborated.
     */
    PROVIDERS_AGREEING(): number;
    /**
     * Sources whose reported position fell OUTSIDE that threshold and were not
     * reconciled. Non-zero is the machine-readable form of a contested
     * position and is published alongside POSITION_DISPUTED.
     */
    PROVIDERS_DISAGREEING(): number;
    /**
     * PROVIDER_ID of the report the merge selected, copied verbatim from the
     * matching SOURCES entry. Absent when METHOD is CENTROID: a computed
     * position belongs to no single source.
     */
    WINNING_PROVIDER_ID(): string | null;
    WINNING_PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Greatest surface distance in metres between any two agreeing reported
     * positions. Zero is meaningful only when PROVIDERS_AGREEING is 1.
     */
    POSITION_SPREAD_M(): number;
    /**
     * The publisher's own confidence in the merged position, on [0,1]. Never a
     * source's figure and never a probability from a model this standard does
     * not name.
     */
    CONFIDENCE(): number;
    /**
     * RFC 3339 UTC fixed-millisecond instant at which the merge was performed.
     */
    MERGED_AT(): string | null;
    MERGED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTXSConsensus(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: txsMergeMethod): void;
    static addProvidersConsulted(builder: flatbuffers.Builder, PROVIDERS_CONSULTED: number): void;
    static addProvidersAgreeing(builder: flatbuffers.Builder, PROVIDERS_AGREEING: number): void;
    static addProvidersDisagreeing(builder: flatbuffers.Builder, PROVIDERS_DISAGREEING: number): void;
    static addWinningProviderId(builder: flatbuffers.Builder, WINNING_PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addPositionSpreadM(builder: flatbuffers.Builder, POSITION_SPREAD_M: number): void;
    static addConfidence(builder: flatbuffers.Builder, CONFIDENCE: number): void;
    static addMergedAt(builder: flatbuffers.Builder, MERGED_ATOffset: flatbuffers.Offset): void;
    static endTXSConsensus(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTXSConsensus(builder: flatbuffers.Builder, METHOD: txsMergeMethod, PROVIDERS_CONSULTED: number, PROVIDERS_AGREEING: number, PROVIDERS_DISAGREEING: number, WINNING_PROVIDER_IDOffset: flatbuffers.Offset, POSITION_SPREAD_M: number, CONFIDENCE: number, MERGED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TXSConsensusT;
    unpackTo(_o: TXSConsensusT): void;
}
export declare class TXSConsensusT implements flatbuffers.IGeneratedObject {
    METHOD: txsMergeMethod;
    PROVIDERS_CONSULTED: number;
    PROVIDERS_AGREEING: number;
    PROVIDERS_DISAGREEING: number;
    WINNING_PROVIDER_ID: string | Uint8Array | null;
    POSITION_SPREAD_M: number;
    CONFIDENCE: number;
    MERGED_AT: string | Uint8Array | null;
    constructor(METHOD?: txsMergeMethod, PROVIDERS_CONSULTED?: number, PROVIDERS_AGREEING?: number, PROVIDERS_DISAGREEING?: number, WINNING_PROVIDER_ID?: string | Uint8Array | null, POSITION_SPREAD_M?: number, CONFIDENCE?: number, MERGED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TXSConsensus.d.ts.map