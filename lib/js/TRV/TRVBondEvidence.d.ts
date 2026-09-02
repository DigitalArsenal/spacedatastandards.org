import * as flatbuffers from 'flatbuffers';
/**
 * Chain evidence supporting a value-based predicate result.
 */
export declare class TRVBondEvidence implements flatbuffers.IUnpackableObject<TRVBondEvidenceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRVBondEvidence;
    static getRootAsTRVBondEvidence(bb: flatbuffers.ByteBuffer, obj?: TRVBondEvidence): TRVBondEvidence;
    static getSizePrefixedRootAsTRVBondEvidence(bb: flatbuffers.ByteBuffer, obj?: TRVBondEvidence): TRVBondEvidence;
    /**
     * Chain identifier using the same identifier-only convention as TRPAsset.
     */
    CHAIN_ID(): string | null;
    CHAIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Chain-local address whose balance was evaluated.
     */
    ADDRESS(): string | null;
    ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Chain-local token address, or empty for the chain's native asset.
     */
    TOKEN_ADDRESS(): string | null;
    TOKEN_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observed uint64 balance expressed in the asset's smallest unit.
     */
    BALANCE(): bigint;
    /**
     * Number of decimal places used by BALANCE.
     */
    DECIMALS(): number;
    /**
     * Currency or unit used for normalized valuation.
     */
    VALUE_CURRENCY(): string | null;
    VALUE_CURRENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Balance normalized into VALUE_CURRENCY.
     */
    NORMALIZED_VALUE(): number;
    /**
     * Unix timestamp in milliseconds from which the balance is proven to have
     * been continuously held, established from chain history.
     */
    HELD_SINCE(): bigint;
    /**
     * Unix timestamp in milliseconds when the balance was observed.
     */
    OBSERVED_AT(): bigint;
    /**
     * Chain-specific block identifier anchoring the observation.
     */
    BLOCK_REFERENCE(): string | null;
    BLOCK_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable query or query description used to obtain the evidence.
     */
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTRVBondEvidence(builder: flatbuffers.Builder): void;
    static addChainId(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset): void;
    static addAddress(builder: flatbuffers.Builder, ADDRESSOffset: flatbuffers.Offset): void;
    static addTokenAddress(builder: flatbuffers.Builder, TOKEN_ADDRESSOffset: flatbuffers.Offset): void;
    static addBalance(builder: flatbuffers.Builder, BALANCE: bigint): void;
    static addDecimals(builder: flatbuffers.Builder, DECIMALS: number): void;
    static addValueCurrency(builder: flatbuffers.Builder, VALUE_CURRENCYOffset: flatbuffers.Offset): void;
    static addNormalizedValue(builder: flatbuffers.Builder, NORMALIZED_VALUE: number): void;
    static addHeldSince(builder: flatbuffers.Builder, HELD_SINCE: bigint): void;
    static addObservedAt(builder: flatbuffers.Builder, OBSERVED_AT: bigint): void;
    static addBlockReference(builder: flatbuffers.Builder, BLOCK_REFERENCEOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static endTRVBondEvidence(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRVBondEvidence(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset, ADDRESSOffset: flatbuffers.Offset, TOKEN_ADDRESSOffset: flatbuffers.Offset, BALANCE: bigint, DECIMALS: number, VALUE_CURRENCYOffset: flatbuffers.Offset, NORMALIZED_VALUE: number, HELD_SINCE: bigint, OBSERVED_AT: bigint, BLOCK_REFERENCEOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRVBondEvidenceT;
    unpackTo(_o: TRVBondEvidenceT): void;
}
export declare class TRVBondEvidenceT implements flatbuffers.IGeneratedObject {
    CHAIN_ID: string | Uint8Array | null;
    ADDRESS: string | Uint8Array | null;
    TOKEN_ADDRESS: string | Uint8Array | null;
    BALANCE: bigint;
    DECIMALS: number;
    VALUE_CURRENCY: string | Uint8Array | null;
    NORMALIZED_VALUE: number;
    HELD_SINCE: bigint;
    OBSERVED_AT: bigint;
    BLOCK_REFERENCE: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    constructor(CHAIN_ID?: string | Uint8Array | null, ADDRESS?: string | Uint8Array | null, TOKEN_ADDRESS?: string | Uint8Array | null, BALANCE?: bigint, DECIMALS?: number, VALUE_CURRENCY?: string | Uint8Array | null, NORMALIZED_VALUE?: number, HELD_SINCE?: bigint, OBSERVED_AT?: bigint, BLOCK_REFERENCE?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRVBondEvidence.d.ts.map