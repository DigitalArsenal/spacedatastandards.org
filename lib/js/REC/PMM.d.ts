import * as flatbuffers from 'flatbuffers';
import { PMMModuleEntry, PMMModuleEntryT } from './PMMModuleEntry.js';
import { PMMTrustAnchor, PMMTrustAnchorT } from './PMMTrustAnchor.js';
/**
 * Provider Module Manifest — what one provider node offers, signed by that
 * node's key.
 */
export declare class PMM implements flatbuffers.IUnpackableObject<PMMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PMM;
    static getRootAsPMM(bb: flatbuffers.ByteBuffer, obj?: PMM): PMM;
    static getSizePrefixedRootAsPMM(bb: flatbuffers.ByteBuffer, obj?: PMM): PMM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Domain of the provider, e.g. "node.example.org". Required. MUST equal
     * the origin the manifest was served from.
     */
    PROVIDER_DOMAIN(): string;
    PROVIDER_DOMAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name of the provider.
     */
    PROVIDER_NAME(): string | null;
    PROVIDER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable summary of what the provider serves.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Monotonic manifest epoch. A client MUST reject an epoch lower than the
     * highest it has already verified for `PROVIDER_DOMAIN`.
     */
    EPOCH(): bigint;
    /**
     * The key identity and its external anchors.
     */
    TRUST(obj?: PMMTrustAnchor): PMMTrustAnchor | null;
    /**
     * The offered modules.
     */
    MODULES(index: number, obj?: PMMModuleEntry): PMMModuleEntry | null;
    modulesLength(): number;
    /**
     * Canonical absolute URL this manifest is served from.
     */
    CANONICAL_URL(): string | null;
    CANONICAL_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * when the manifest was created.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * when the manifest was last signed.
     */
    UPDATED_AT(): string | null;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * after which a verifier MUST refuse anonymous CORE loading from this
     * manifest and re-fetch. Required in practice for anonymous trust: an
     * unexpiring signed manifest cannot be withdrawn.
     */
    EXPIRES_AT(): string | null;
    EXPIRES_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature by `TRUST.SIGNING_PUBLIC_KEY` over the canonical statement
     * defined in this file's header.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    /**
     * The canonical statement, verbatim. A verifier MUST rebuild it from this
     * record and reject any difference.
     */
    SIGNED_STATEMENT(): string | null;
    SIGNED_STATEMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPMM(builder: flatbuffers.Builder): void;
    static addProviderDomain(builder: flatbuffers.Builder, PROVIDER_DOMAINOffset: flatbuffers.Offset): void;
    static addProviderName(builder: flatbuffers.Builder, PROVIDER_NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: bigint): void;
    static addTrust(builder: flatbuffers.Builder, TRUSTOffset: flatbuffers.Offset): void;
    static addModules(builder: flatbuffers.Builder, MODULESOffset: flatbuffers.Offset): void;
    static createModulesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startModulesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalUrl(builder: flatbuffers.Builder, CANONICAL_URLOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_ATOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignedStatement(builder: flatbuffers.Builder, SIGNED_STATEMENTOffset: flatbuffers.Offset): void;
    static endPMM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPMMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPMMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PMMT;
    unpackTo(_o: PMMT): void;
}
export declare class PMMT implements flatbuffers.IGeneratedObject {
    PROVIDER_DOMAIN: string | Uint8Array | null;
    PROVIDER_NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    EPOCH: bigint;
    TRUST: PMMTrustAnchorT | null;
    MODULES: (PMMModuleEntryT)[];
    CANONICAL_URL: string | Uint8Array | null;
    CREATED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    EXPIRES_AT: string | Uint8Array | null;
    SIGNATURE: (number)[];
    SIGNED_STATEMENT: string | Uint8Array | null;
    constructor(PROVIDER_DOMAIN?: string | Uint8Array | null, PROVIDER_NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, EPOCH?: bigint, TRUST?: PMMTrustAnchorT | null, MODULES?: (PMMModuleEntryT)[], CANONICAL_URL?: string | Uint8Array | null, CREATED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, EXPIRES_AT?: string | Uint8Array | null, SIGNATURE?: (number)[], SIGNED_STATEMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PMM.d.ts.map