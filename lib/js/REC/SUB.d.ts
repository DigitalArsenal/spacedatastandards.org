import * as flatbuffers from 'flatbuffers';
import { SCX, SCXT } from './SCX.js';
import { recurringChargeMethod } from './recurringChargeMethod.js';
import { subscriptionLifecycleStatus } from './subscriptionLifecycleStatus.js';
/**
 * Crypto-native Subscription Authorization
 */
export declare class SUB implements flatbuffers.IUnpackableObject<SUBT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SUB;
    static getRootAsSUB(bb: flatbuffers.ByteBuffer, obj?: SUB): SUB;
    static getSizePrefixedRootAsSUB(bb: flatbuffers.ByteBuffer, obj?: SUB): SUB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable subscription identifier
     */
    SUBSCRIPTION_ID(): string;
    SUBSCRIPTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Reference to the durable entitlement (`$ENT.ENTITLEMENT_ID`)
     */
    ENTITLEMENT_ID(): string | null;
    ENTITLEMENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Listing this subscription pays for (`$PLG.PLUGIN_ID` / `$STF.LISTING_ID`)
     */
    LISTING_ID(): string | null;
    LISTING_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-chain recurring mechanism
     */
    AUTH_KIND(): recurringChargeMethod;
    /**
     * Settlement descriptor (chain, splitter, token) that charges each period
     */
    CHAIN_SETTLEMENT(obj?: SCX): SCX | null;
    /**
     * Billing period length in days (mirrors `$PLG.SUBSCRIPTION_PERIOD_DAYS`)
     */
    PERIOD_DAYS(): number;
    /**
     * Charge per period in the smallest unit of CURRENCY
     */
    AMOUNT_PER_PERIOD(): bigint;
    /**
     * Currency / token symbol, e.g. "USDC"
     */
    CURRENCY(): string | null;
    CURRENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix ms of the next scheduled charge
     */
    NEXT_CHARGE_AT(): bigint;
    /**
     * Maximum number of periods; 0 = until cancelled
     */
    MAX_PERIODS(): number;
    /**
     * Subscription lifecycle status
     */
    STATUS(): subscriptionLifecycleStatus;
    /**
     * Buyer's Ed25519 authorization signature over the terms
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startSUB(builder: flatbuffers.Builder): void;
    static addSubscriptionId(builder: flatbuffers.Builder, SUBSCRIPTION_IDOffset: flatbuffers.Offset): void;
    static addEntitlementId(builder: flatbuffers.Builder, ENTITLEMENT_IDOffset: flatbuffers.Offset): void;
    static addListingId(builder: flatbuffers.Builder, LISTING_IDOffset: flatbuffers.Offset): void;
    static addAuthKind(builder: flatbuffers.Builder, AUTH_KIND: recurringChargeMethod): void;
    static addChainSettlement(builder: flatbuffers.Builder, CHAIN_SETTLEMENTOffset: flatbuffers.Offset): void;
    static addPeriodDays(builder: flatbuffers.Builder, PERIOD_DAYS: number): void;
    static addAmountPerPeriod(builder: flatbuffers.Builder, AMOUNT_PER_PERIOD: bigint): void;
    static addCurrency(builder: flatbuffers.Builder, CURRENCYOffset: flatbuffers.Offset): void;
    static addNextChargeAt(builder: flatbuffers.Builder, NEXT_CHARGE_AT: bigint): void;
    static addMaxPeriods(builder: flatbuffers.Builder, MAX_PERIODS: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: subscriptionLifecycleStatus): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSUB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSUBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSUBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SUBT;
    unpackTo(_o: SUBT): void;
}
export declare class SUBT implements flatbuffers.IGeneratedObject {
    SUBSCRIPTION_ID: string | Uint8Array | null;
    ENTITLEMENT_ID: string | Uint8Array | null;
    LISTING_ID: string | Uint8Array | null;
    AUTH_KIND: recurringChargeMethod;
    CHAIN_SETTLEMENT: SCXT | null;
    PERIOD_DAYS: number;
    AMOUNT_PER_PERIOD: bigint;
    CURRENCY: string | Uint8Array | null;
    NEXT_CHARGE_AT: bigint;
    MAX_PERIODS: number;
    STATUS: subscriptionLifecycleStatus;
    SIGNATURE: (number)[];
    constructor(SUBSCRIPTION_ID?: string | Uint8Array | null, ENTITLEMENT_ID?: string | Uint8Array | null, LISTING_ID?: string | Uint8Array | null, AUTH_KIND?: recurringChargeMethod, CHAIN_SETTLEMENT?: SCXT | null, PERIOD_DAYS?: number, AMOUNT_PER_PERIOD?: bigint, CURRENCY?: string | Uint8Array | null, NEXT_CHARGE_AT?: bigint, MAX_PERIODS?: number, STATUS?: subscriptionLifecycleStatus, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SUB.d.ts.map