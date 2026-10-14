import * as flatbuffers from 'flatbuffers';
import { whaAssetKind } from './whaAssetKind.js';
/**
 * One asset held at one address.
 */
export declare class WHAHolding implements flatbuffers.IUnpackableObject<WHAHoldingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WHAHolding;
    static getRootAsWHAHolding(bb: flatbuffers.ByteBuffer, obj?: WHAHolding): WHAHolding;
    static getSizePrefixedRootAsWHAHolding(bb: flatbuffers.ByteBuffer, obj?: WHAHolding): WHAHolding;
    CHAIN_ID(): string | null;
    CHAIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CHAIN_NAME(): string | null;
    CHAIN_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ADDRESS(): string | null;
    ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ASSET_KIND(): whaAssetKind;
    /**
     * Asset symbol as its issuer or quote source names it, e.g. "ETH",
     * "USDC"; a placeholder when it has none.
     */
    SYMBOL(): string | null;
    SYMBOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contract address or mint of a token; empty for a native coin. This, not
     * SYMBOL, identifies the asset.
     */
    CONTRACT(): string | null;
    CONTRACT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CAIP-19 asset identifier, when known, e.g.
     * "eip155:1/erc20:0xa0b8...".
     */
    ASSET_ID(): string | null;
    ASSET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Amount held, in whole units of the asset (base units / 10^DECIMALS).
     */
    AMOUNT(): number;
    /**
     * Amount held in base units, exact, as a decimal integer string; empty =
     * not reported.
     */
    AMOUNT_BASE_UNITS(): string | null;
    AMOUNT_BASE_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Decimal places between base units and whole units; 0 = not stated or
     * none.
     */
    DECIMALS(): number;
    /**
     * True when the holding was priced; VALUE and PRICE are meaningful only
     * then.
     */
    VALUED(): boolean;
    /**
     * Value of AMOUNT in the attestation's CURRENCY.
     */
    VALUE(): number;
    /**
     * Price of one whole unit in CURRENCY; 0 = not reported.
     */
    PRICE(): number;
    /**
     * Where the price came from, e.g. "coinbase", "dexscreener", or the
     * balance service's own rate.
     */
    PRICE_SOURCE(): string | null;
    PRICE_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Where the balance came from, e.g. "mempool.space", a public RPC host.
     */
    BALANCE_SOURCE(): string | null;
    BALANCE_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startWHAHolding(builder: flatbuffers.Builder): void;
    static addChainId(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset): void;
    static addChainName(builder: flatbuffers.Builder, CHAIN_NAMEOffset: flatbuffers.Offset): void;
    static addAddress(builder: flatbuffers.Builder, ADDRESSOffset: flatbuffers.Offset): void;
    static addAssetKind(builder: flatbuffers.Builder, ASSET_KIND: whaAssetKind): void;
    static addSymbol(builder: flatbuffers.Builder, SYMBOLOffset: flatbuffers.Offset): void;
    static addContract(builder: flatbuffers.Builder, CONTRACTOffset: flatbuffers.Offset): void;
    static addAssetId(builder: flatbuffers.Builder, ASSET_IDOffset: flatbuffers.Offset): void;
    static addAmount(builder: flatbuffers.Builder, AMOUNT: number): void;
    static addAmountBaseUnits(builder: flatbuffers.Builder, AMOUNT_BASE_UNITSOffset: flatbuffers.Offset): void;
    static addDecimals(builder: flatbuffers.Builder, DECIMALS: number): void;
    static addValued(builder: flatbuffers.Builder, VALUED: boolean): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addPrice(builder: flatbuffers.Builder, PRICE: number): void;
    static addPriceSource(builder: flatbuffers.Builder, PRICE_SOURCEOffset: flatbuffers.Offset): void;
    static addBalanceSource(builder: flatbuffers.Builder, BALANCE_SOURCEOffset: flatbuffers.Offset): void;
    static endWHAHolding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createWHAHolding(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset, CHAIN_NAMEOffset: flatbuffers.Offset, ADDRESSOffset: flatbuffers.Offset, ASSET_KIND: whaAssetKind, SYMBOLOffset: flatbuffers.Offset, CONTRACTOffset: flatbuffers.Offset, ASSET_IDOffset: flatbuffers.Offset, AMOUNT: number, AMOUNT_BASE_UNITSOffset: flatbuffers.Offset, DECIMALS: number, VALUED: boolean, VALUE: number, PRICE: number, PRICE_SOURCEOffset: flatbuffers.Offset, BALANCE_SOURCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): WHAHoldingT;
    unpackTo(_o: WHAHoldingT): void;
}
export declare class WHAHoldingT implements flatbuffers.IGeneratedObject {
    CHAIN_ID: string | Uint8Array | null;
    CHAIN_NAME: string | Uint8Array | null;
    ADDRESS: string | Uint8Array | null;
    ASSET_KIND: whaAssetKind;
    SYMBOL: string | Uint8Array | null;
    CONTRACT: string | Uint8Array | null;
    ASSET_ID: string | Uint8Array | null;
    AMOUNT: number;
    AMOUNT_BASE_UNITS: string | Uint8Array | null;
    DECIMALS: number;
    VALUED: boolean;
    VALUE: number;
    PRICE: number;
    PRICE_SOURCE: string | Uint8Array | null;
    BALANCE_SOURCE: string | Uint8Array | null;
    constructor(CHAIN_ID?: string | Uint8Array | null, CHAIN_NAME?: string | Uint8Array | null, ADDRESS?: string | Uint8Array | null, ASSET_KIND?: whaAssetKind, SYMBOL?: string | Uint8Array | null, CONTRACT?: string | Uint8Array | null, ASSET_ID?: string | Uint8Array | null, AMOUNT?: number, AMOUNT_BASE_UNITS?: string | Uint8Array | null, DECIMALS?: number, VALUED?: boolean, VALUE?: number, PRICE?: number, PRICE_SOURCE?: string | Uint8Array | null, BALANCE_SOURCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WHAHolding.d.ts.map