import * as flatbuffers from 'flatbuffers';
import { entitlementLifecycleStatus } from './entitlementLifecycleStatus.js';
/**
 * Entitlement - Provider subscription or account entitlement state.
 *
 * This is durable operational state for a provider account, not a plugin
 * license key. It records the current authoritative entitlement for an SDN
 * account identity and can be projected into subscription, billing, and
 * access-control surfaces.
 */
export declare class ENT implements flatbuffers.IUnpackableObject<ENTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ENT;
    static getRootAsENT(bb: flatbuffers.ByteBuffer, obj?: ENT): ENT;
    static getSizePrefixedRootAsENT(bb: flatbuffers.ByteBuffer, obj?: ENT): ENT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable entitlement identifier.
     */
    ENTITLEMENT_ID(): string | null;
    ENTITLEMENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Account identity or wallet xpub.
     */
    XPUB(): string;
    XPUB(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Current SDN peer ID bound to the entitlement.
     */
    PEER_ID(): string | null;
    PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider plan code, e.g. "free", "explorer", or "enterprise".
     */
    PLAN(): string | null;
    PLAN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Structured entitlement lifecycle status.
     */
    STATUS(): entitlementLifecycleStatus;
    /**
     * Original provider status string when finer detail is needed.
     */
    STATUS_TEXT(): string | null;
    STATUS_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fiat processor customer identifier.
     */
    STRIPE_CUSTOMER_ID(): string | null;
    STRIPE_CUSTOMER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fiat processor subscription identifier.
     */
    STRIPE_SUBSCRIPTION_ID(): string | null;
    STRIPE_SUBSCRIPTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp when the entitlement expires (0 = no expiry).
     */
    EXPIRES_AT(): bigint;
    /**
     * Unix timestamp when the entitlement was created.
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp when the entitlement was last updated.
     */
    UPDATED_AT(): bigint;
    /**
     * Peer ID of the entitlement issuer/provider.
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider signature over the entitlement record.
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
    static startENT(builder: flatbuffers.Builder): void;
    static addEntitlementId(builder: flatbuffers.Builder, ENTITLEMENT_IDOffset: flatbuffers.Offset): void;
    static addXpub(builder: flatbuffers.Builder, XPUBOffset: flatbuffers.Offset): void;
    static addPeerId(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset): void;
    static addPlan(builder: flatbuffers.Builder, PLANOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: entitlementLifecycleStatus): void;
    static addStatusText(builder: flatbuffers.Builder, STATUS_TEXTOffset: flatbuffers.Offset): void;
    static addStripeCustomerId(builder: flatbuffers.Builder, STRIPE_CUSTOMER_IDOffset: flatbuffers.Offset): void;
    static addStripeSubscriptionId(builder: flatbuffers.Builder, STRIPE_SUBSCRIPTION_IDOffset: flatbuffers.Offset): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endENT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishENTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedENTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createENT(builder: flatbuffers.Builder, ENTITLEMENT_IDOffset: flatbuffers.Offset, XPUBOffset: flatbuffers.Offset, PEER_IDOffset: flatbuffers.Offset, PLANOffset: flatbuffers.Offset, STATUS: entitlementLifecycleStatus, STATUS_TEXTOffset: flatbuffers.Offset, STRIPE_CUSTOMER_IDOffset: flatbuffers.Offset, STRIPE_SUBSCRIPTION_IDOffset: flatbuffers.Offset, EXPIRES_AT: bigint, CREATED_AT: bigint, UPDATED_AT: bigint, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ENTT;
    unpackTo(_o: ENTT): void;
}
export declare class ENTT implements flatbuffers.IGeneratedObject {
    ENTITLEMENT_ID: string | Uint8Array | null;
    XPUB: string | Uint8Array | null;
    PEER_ID: string | Uint8Array | null;
    PLAN: string | Uint8Array | null;
    STATUS: entitlementLifecycleStatus;
    STATUS_TEXT: string | Uint8Array | null;
    STRIPE_CUSTOMER_ID: string | Uint8Array | null;
    STRIPE_SUBSCRIPTION_ID: string | Uint8Array | null;
    EXPIRES_AT: bigint;
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_SIGNATURE: (number)[];
    constructor(ENTITLEMENT_ID?: string | Uint8Array | null, XPUB?: string | Uint8Array | null, PEER_ID?: string | Uint8Array | null, PLAN?: string | Uint8Array | null, STATUS?: entitlementLifecycleStatus, STATUS_TEXT?: string | Uint8Array | null, STRIPE_CUSTOMER_ID?: string | Uint8Array | null, STRIPE_SUBSCRIPTION_ID?: string | Uint8Array | null, EXPIRES_AT?: bigint, CREATED_AT?: bigint, UPDATED_AT?: bigint, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ENT.d.ts.map