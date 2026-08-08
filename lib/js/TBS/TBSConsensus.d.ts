import * as flatbuffers from 'flatbuffers';
import { tbsMergeMethod } from './tbsMergeMethod.js';
/**
 * How one site's independent provider reports were reduced to the single
 * published position, and how strongly those reports agreed.
 */
export declare class TBSConsensus implements flatbuffers.IUnpackableObject<TBSConsensusT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TBSConsensus;
    static getRootAsTBSConsensus(bb: flatbuffers.ByteBuffer, obj?: TBSConsensus): TBSConsensus;
    static getSizePrefixedRootAsTBSConsensus(bb: flatbuffers.ByteBuffer, obj?: TBSConsensus): TBSConsensus;
    METHOD(): tbsMergeMethod;
    /**
     * Providers queried for this site, including those that returned nothing.
     * Never fewer than the number of SOURCES entries.
     */
    PROVIDERS_CONSULTED(): number;
    /**
     * Providers whose reported position fell within the publisher's agreement
     * threshold. A value of 1 means the published position rests on a single
     * report and was never independently corroborated.
     */
    PROVIDERS_AGREEING(): number;
    /**
     * PROVIDER_ID of the report the merge selected, copied verbatim from the
     * matching SOURCES entry. Absent when METHOD is CENTROID: a computed
     * position belongs to no single provider.
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
     * provider's figure and never a probability from a model this standard does
     * not name.
     */
    CONFIDENCE(): number;
    /**
     * RFC 3339 UTC fixed-millisecond instant at which the merge was performed.
     */
    MERGED_AT(): string | null;
    MERGED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTBSConsensus(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: tbsMergeMethod): void;
    static addProvidersConsulted(builder: flatbuffers.Builder, PROVIDERS_CONSULTED: number): void;
    static addProvidersAgreeing(builder: flatbuffers.Builder, PROVIDERS_AGREEING: number): void;
    static addWinningProviderId(builder: flatbuffers.Builder, WINNING_PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addPositionSpreadM(builder: flatbuffers.Builder, POSITION_SPREAD_M: number): void;
    static addConfidence(builder: flatbuffers.Builder, CONFIDENCE: number): void;
    static addMergedAt(builder: flatbuffers.Builder, MERGED_ATOffset: flatbuffers.Offset): void;
    static endTBSConsensus(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTBSConsensus(builder: flatbuffers.Builder, METHOD: tbsMergeMethod, PROVIDERS_CONSULTED: number, PROVIDERS_AGREEING: number, WINNING_PROVIDER_IDOffset: flatbuffers.Offset, POSITION_SPREAD_M: number, CONFIDENCE: number, MERGED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TBSConsensusT;
    unpackTo(_o: TBSConsensusT): void;
}
export declare class TBSConsensusT implements flatbuffers.IGeneratedObject {
    METHOD: tbsMergeMethod;
    PROVIDERS_CONSULTED: number;
    PROVIDERS_AGREEING: number;
    WINNING_PROVIDER_ID: string | Uint8Array | null;
    POSITION_SPREAD_M: number;
    CONFIDENCE: number;
    MERGED_AT: string | Uint8Array | null;
    constructor(METHOD?: tbsMergeMethod, PROVIDERS_CONSULTED?: number, PROVIDERS_AGREEING?: number, WINNING_PROVIDER_ID?: string | Uint8Array | null, POSITION_SPREAD_M?: number, CONFIDENCE?: number, MERGED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TBSConsensus.d.ts.map