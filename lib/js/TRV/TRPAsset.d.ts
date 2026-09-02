import * as flatbuffers from 'flatbuffers';
/**
 * Asset admitted by a value or token predicate.
 */
export declare class TRPAsset implements flatbuffers.IUnpackableObject<TRPAssetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRPAsset;
    static getRootAsTRPAsset(bb: flatbuffers.ByteBuffer, obj?: TRPAsset): TRPAsset;
    static getSizePrefixedRootAsTRPAsset(bb: flatbuffers.ByteBuffer, obj?: TRPAsset): TRPAsset;
    /**
     * CAIP-2 style chain identifier, e.g. "eip155:1" or
     * "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp". Vendor and organization names
     * are forbidden; a chain is named only by its identifier.
     */
    CHAIN_ID(): string | null;
    CHAIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Chain-local token address, or empty for the chain's native asset.
     */
    TOKEN_ADDRESS(): string | null;
    TOKEN_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Published token symbol used for display and matching.
     */
    TOKEN_SYMBOL(): string | null;
    TOKEN_SYMBOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of decimal places used by the smallest-unit integer balance.
     */
    DECIMALS(): number;
    static startTRPAsset(builder: flatbuffers.Builder): void;
    static addChainId(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset): void;
    static addTokenAddress(builder: flatbuffers.Builder, TOKEN_ADDRESSOffset: flatbuffers.Offset): void;
    static addTokenSymbol(builder: flatbuffers.Builder, TOKEN_SYMBOLOffset: flatbuffers.Offset): void;
    static addDecimals(builder: flatbuffers.Builder, DECIMALS: number): void;
    static endTRPAsset(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRPAsset(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset, TOKEN_ADDRESSOffset: flatbuffers.Offset, TOKEN_SYMBOLOffset: flatbuffers.Offset, DECIMALS: number): flatbuffers.Offset;
    unpack(): TRPAssetT;
    unpackTo(_o: TRPAssetT): void;
}
export declare class TRPAssetT implements flatbuffers.IGeneratedObject {
    CHAIN_ID: string | Uint8Array | null;
    TOKEN_ADDRESS: string | Uint8Array | null;
    TOKEN_SYMBOL: string | Uint8Array | null;
    DECIMALS: number;
    constructor(CHAIN_ID?: string | Uint8Array | null, TOKEN_ADDRESS?: string | Uint8Array | null, TOKEN_SYMBOL?: string | Uint8Array | null, DECIMALS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRPAsset.d.ts.map