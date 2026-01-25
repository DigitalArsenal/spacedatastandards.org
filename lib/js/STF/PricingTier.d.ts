import * as flatbuffers from 'flatbuffers';
/**
 * Pricing tier for a listing
 */
export declare class PricingTier implements flatbuffers.IUnpackableObject<PricingTierT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PricingTier;
    static getRootAsPricingTier(bb: flatbuffers.ByteBuffer, obj?: PricingTier): PricingTier;
    static getSizePrefixedRootAsPricingTier(bb: flatbuffers.ByteBuffer, obj?: PricingTier): PricingTier;
    /**
     * Tier name, e.g., "Basic", "Pro", "Enterprise"
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Price in smallest unit (cents, satoshis, etc.)
     */
    PRICE_AMOUNT(): bigint;
    /**
     * Currency code: "USD", "ETH", "SOL", "SDN_CREDITS"
     */
    PRICE_CURRENCY(): string | null;
    PRICE_CURRENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duration in days (0 = one-time purchase)
     */
    DURATION_DAYS(): number;
    /**
     * Rate limit in requests per hour
     */
    RATE_LIMIT(): number;
    /**
     * List of features included in this tier
     */
    FEATURES(index: number): string;
    FEATURES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    featuresLength(): number;
    static startPricingTier(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addPriceAmount(builder: flatbuffers.Builder, PRICE_AMOUNT: bigint): void;
    static addPriceCurrency(builder: flatbuffers.Builder, PRICE_CURRENCYOffset: flatbuffers.Offset): void;
    static addDurationDays(builder: flatbuffers.Builder, DURATION_DAYS: number): void;
    static addRateLimit(builder: flatbuffers.Builder, RATE_LIMIT: number): void;
    static addFeatures(builder: flatbuffers.Builder, FEATURESOffset: flatbuffers.Offset): void;
    static createFeaturesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFeaturesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPricingTier(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPricingTier(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, PRICE_AMOUNT: bigint, PRICE_CURRENCYOffset: flatbuffers.Offset, DURATION_DAYS: number, RATE_LIMIT: number, FEATURESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PricingTierT;
    unpackTo(_o: PricingTierT): void;
}
export declare class PricingTierT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    PRICE_AMOUNT: bigint;
    PRICE_CURRENCY: string | Uint8Array | null;
    DURATION_DAYS: number;
    RATE_LIMIT: number;
    FEATURES: (string)[];
    constructor(NAME?: string | Uint8Array | null, PRICE_AMOUNT?: bigint, PRICE_CURRENCY?: string | Uint8Array | null, DURATION_DAYS?: number, RATE_LIMIT?: number, FEATURES?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PricingTier.d.ts.map