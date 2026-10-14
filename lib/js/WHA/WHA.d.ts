import * as flatbuffers from 'flatbuffers';
import { WHAAccount, WHAAccountT } from './WHAAccount.js';
import { WHAChain, WHAChainT } from './WHAChain.js';
import { WHAHolding, WHAHoldingT } from './WHAHolding.js';
/**
 * Wallet Holdings Attestation - holdings of wallets across chains and their
 * value at one time.
 */
export declare class WHA implements flatbuffers.IUnpackableObject<WHAT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WHA;
    static getRootAsWHA(bb: flatbuffers.ByteBuffer, obj?: WHA): WHA;
    static getSizePrefixedRootAsWHA(bb: flatbuffers.ByteBuffer, obj?: WHA): WHA;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of this attestation; empty = not assigned.
     */
    ATTESTATION_ID(): string | null;
    ATTESTATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whose holdings these are: a peer identifier, an account or an
     * organization; empty = the attester's own.
     */
    SUBJECT_ID(): string | null;
    SUBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * What the attestation is for, e.g. "security-bond", "treasury",
     * "collateral"; empty = general.
     */
    PURPOSE(): string | null;
    PURPOSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Wallets read (in a request, the wallets to read).
     */
    ACCOUNTS(index: number, obj?: WHAAccount): WHAAccount | null;
    accountsLength(): number;
    HOLDINGS(index: number, obj?: WHAHolding): WHAHolding | null;
    holdingsLength(): number;
    CHAINS(index: number, obj?: WHAChain): WHAChain | null;
    chainsLength(): number;
    /**
     * Valuation currency, ISO 4217 code, e.g. "USD".
     */
    CURRENCY(): string | null;
    CURRENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when at least one chain was read, every chain is COMPLETE and
     * ERRORS is empty: TOTAL_VALUE is then the attested value.
     */
    ATTESTED(): boolean;
    /**
     * Sum of all priced holdings' values in CURRENCY. Meaningful as the
     * attested value only when ATTESTED; otherwise a partial sum.
     */
    TOTAL_VALUE(): number;
    /**
     * Problems met, one per line, e.g. "ETH: lookup incomplete"; empty when
     * ATTESTED.
     */
    ERRORS(index: number): string;
    ERRORS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    errorsLength(): number;
    /**
     * Unix milliseconds the holdings were read (the as-of time); 0 in a
     * request.
     */
    AS_OF_MS(): bigint;
    /**
     * Identifier of the attester (a peer identifier or module identifier).
     */
    ATTESTER_ID(): string | null;
    ATTESTER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attester's signature over the attestation, and its scheme (e.g.
     * "ed25519"); empty when unsigned.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    SIGNATURE_TYPE(): string | null;
    SIGNATURE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startWHA(builder: flatbuffers.Builder): void;
    static addAttestationId(builder: flatbuffers.Builder, ATTESTATION_IDOffset: flatbuffers.Offset): void;
    static addSubjectId(builder: flatbuffers.Builder, SUBJECT_IDOffset: flatbuffers.Offset): void;
    static addPurpose(builder: flatbuffers.Builder, PURPOSEOffset: flatbuffers.Offset): void;
    static addAccounts(builder: flatbuffers.Builder, ACCOUNTSOffset: flatbuffers.Offset): void;
    static createAccountsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAccountsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHoldings(builder: flatbuffers.Builder, HOLDINGSOffset: flatbuffers.Offset): void;
    static createHoldingsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHoldingsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChains(builder: flatbuffers.Builder, CHAINSOffset: flatbuffers.Offset): void;
    static createChainsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startChainsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCurrency(builder: flatbuffers.Builder, CURRENCYOffset: flatbuffers.Offset): void;
    static addAttested(builder: flatbuffers.Builder, ATTESTED: boolean): void;
    static addTotalValue(builder: flatbuffers.Builder, TOTAL_VALUE: number): void;
    static addErrors(builder: flatbuffers.Builder, ERRORSOffset: flatbuffers.Offset): void;
    static createErrorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startErrorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAsOfMs(builder: flatbuffers.Builder, AS_OF_MS: bigint): void;
    static addAttesterId(builder: flatbuffers.Builder, ATTESTER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignatureType(builder: flatbuffers.Builder, SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static endWHA(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishWHABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedWHABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createWHA(builder: flatbuffers.Builder, ATTESTATION_IDOffset: flatbuffers.Offset, SUBJECT_IDOffset: flatbuffers.Offset, PURPOSEOffset: flatbuffers.Offset, ACCOUNTSOffset: flatbuffers.Offset, HOLDINGSOffset: flatbuffers.Offset, CHAINSOffset: flatbuffers.Offset, CURRENCYOffset: flatbuffers.Offset, ATTESTED: boolean, TOTAL_VALUE: number, ERRORSOffset: flatbuffers.Offset, AS_OF_MS: bigint, ATTESTER_IDOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, SIGNATURE_TYPEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): WHAT;
    unpackTo(_o: WHAT): void;
}
export declare class WHAT implements flatbuffers.IGeneratedObject {
    ATTESTATION_ID: string | Uint8Array | null;
    SUBJECT_ID: string | Uint8Array | null;
    PURPOSE: string | Uint8Array | null;
    ACCOUNTS: (WHAAccountT)[];
    HOLDINGS: (WHAHoldingT)[];
    CHAINS: (WHAChainT)[];
    CURRENCY: string | Uint8Array | null;
    ATTESTED: boolean;
    TOTAL_VALUE: number;
    ERRORS: (string)[];
    AS_OF_MS: bigint;
    ATTESTER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    SIGNATURE_TYPE: string | Uint8Array | null;
    constructor(ATTESTATION_ID?: string | Uint8Array | null, SUBJECT_ID?: string | Uint8Array | null, PURPOSE?: string | Uint8Array | null, ACCOUNTS?: (WHAAccountT)[], HOLDINGS?: (WHAHoldingT)[], CHAINS?: (WHAChainT)[], CURRENCY?: string | Uint8Array | null, ATTESTED?: boolean, TOTAL_VALUE?: number, ERRORS?: (string)[], AS_OF_MS?: bigint, ATTESTER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[], SIGNATURE_TYPE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WHA.d.ts.map