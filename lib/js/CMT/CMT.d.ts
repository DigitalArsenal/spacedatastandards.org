import * as flatbuffers from 'flatbuffers';
import { RevenueSplit, RevenueSplitT } from './RevenueSplit.js';
import { SCX, SCXT } from './SCX.js';
import { SplitRecipient, SplitRecipientT } from './SplitRecipient.js';
import { commissionEnforcement } from './commissionEnforcement.js';
import { commissionScope } from './commissionScope.js';
/**
 * Commission Terms / Revenue Split. Binds a listing, store, or publisher to a
 * platform commission and the on-chain split that enforces it. This record
 * makes "the platform earns on every transaction" auditable and portable
 * across store deployments. Commission is realized purely by the buyer's
 * payment routing through the on-chain splitter contract described in
 * CONTRACTS — never by a manual or off-chain settlement step.
 */
export declare class CMT implements flatbuffers.IUnpackableObject<CMTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CMT;
    static getRootAsCMT(bb: flatbuffers.ByteBuffer, obj?: CMT): CMT;
    static getSizePrefixedRootAsCMT(bb: flatbuffers.ByteBuffer, obj?: CMT): CMT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable terms identifier, referenced by `$PUR`/`$ACL`/listings
     */
    TERMS_ID(): string;
    TERMS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * What these terms cover
     */
    SCOPE(): commissionScope;
    /**
     * The `$PLG.PLUGIN_ID` / store id / publisher xpub the terms apply to
     */
    TARGET_ID(): string | null;
    TARGET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Platform commission in basis points (e.g. 500 = 5%)
     */
    COMMISSION_BPS(): number;
    /**
     * Recipient splits; each in basis points, summing with the commission to 10000
     */
    SPLITS(index: number, obj?: RevenueSplit): RevenueSplit | null;
    splitsLength(): number;
    /**
     * The platform's per-chain payout identity (the commission recipient)
     */
    PLATFORM_RECIPIENT(obj?: SplitRecipient): SplitRecipient | null;
    /**
     * How the split is enforced (on-chain splitter vs provider-attested)
     */
    ENFORCEMENT(): commissionEnforcement;
    /**
     * The established splitter contract(s)/program(s) that perform the split,
     * one per accepted chain/asset
     */
    CONTRACTS(index: number, obj?: SCX): SCX | null;
    contractsLength(): number;
    /**
     * Unix ms when these terms take effect
     */
    EFFECTIVE_AT(): bigint;
    /**
     * Unix ms when these terms expire, or 0 for no expiry
     */
    EXPIRES_AT(): bigint;
    /**
     * Ed25519 signature by the store operator `$EPM`
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startCMT(builder: flatbuffers.Builder): void;
    static addTermsId(builder: flatbuffers.Builder, TERMS_IDOffset: flatbuffers.Offset): void;
    static addScope(builder: flatbuffers.Builder, SCOPE: commissionScope): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_IDOffset: flatbuffers.Offset): void;
    static addCommissionBps(builder: flatbuffers.Builder, COMMISSION_BPS: number): void;
    static addSplits(builder: flatbuffers.Builder, SPLITSOffset: flatbuffers.Offset): void;
    static createSplitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSplitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPlatformRecipient(builder: flatbuffers.Builder, PLATFORM_RECIPIENTOffset: flatbuffers.Offset): void;
    static addEnforcement(builder: flatbuffers.Builder, ENFORCEMENT: commissionEnforcement): void;
    static addContracts(builder: flatbuffers.Builder, CONTRACTSOffset: flatbuffers.Offset): void;
    static createContractsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContractsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEffectiveAt(builder: flatbuffers.Builder, EFFECTIVE_AT: bigint): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCMT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCMTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCMTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CMTT;
    unpackTo(_o: CMTT): void;
}
export declare class CMTT implements flatbuffers.IGeneratedObject {
    TERMS_ID: string | Uint8Array | null;
    SCOPE: commissionScope;
    TARGET_ID: string | Uint8Array | null;
    COMMISSION_BPS: number;
    SPLITS: (RevenueSplitT)[];
    PLATFORM_RECIPIENT: SplitRecipientT | null;
    ENFORCEMENT: commissionEnforcement;
    CONTRACTS: (SCXT)[];
    EFFECTIVE_AT: bigint;
    EXPIRES_AT: bigint;
    SIGNATURE: (number)[];
    constructor(TERMS_ID?: string | Uint8Array | null, SCOPE?: commissionScope, TARGET_ID?: string | Uint8Array | null, COMMISSION_BPS?: number, SPLITS?: (RevenueSplitT)[], PLATFORM_RECIPIENT?: SplitRecipientT | null, ENFORCEMENT?: commissionEnforcement, CONTRACTS?: (SCXT)[], EFFECTIVE_AT?: bigint, EXPIRES_AT?: bigint, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CMT.d.ts.map