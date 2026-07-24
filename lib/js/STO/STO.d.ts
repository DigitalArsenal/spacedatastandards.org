import * as flatbuffers from 'flatbuffers';
import { CMT, CMTT } from './CMT.js';
import { SCX, SCXT } from './SCX.js';
import { STOModuleRef, STOModuleRefT } from './STOModuleRef.js';
/**
 * Store Descriptor — storefront identity
 */
export declare class STO implements flatbuffers.IUnpackableObject<STOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): STO;
    static getRootAsSTO(bb: flatbuffers.ByteBuffer, obj?: STO): STO;
    static getSizePrefixedRootAsSTO(bb: flatbuffers.ByteBuffer, obj?: STO): STO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable store identity
     */
    STORE_ID(): string;
    STORE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CID of the store operator's `$EPM`
     */
    OPERATOR_EPM_CID(): string | null;
    OPERATOR_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The (encrypted) store MODULE that runs this store
     */
    STORE_MODULE(obj?: STOModuleRef): STOModuleRef | null;
    /**
     * Optional `$APP.ID` when the store ships a UI app
     */
    APP_ID(): string | null;
    APP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True only for the platform-signed official store, verifiable against the
     * platform's well-known signing key
     */
    IS_OFFICIAL(): boolean;
    /**
     * Store-default commission terms, embedded
     */
    COMMISSION_TERMS(obj?: CMT): CMT | null;
    /**
     * Alternative reference to store-default terms by `$CMT.TERMS_ID`
     */
    COMMISSION_TERMS_ID(): string | null;
    COMMISSION_TERMS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Chains/tokens this store accepts, each with its splitter settlement
     */
    ACCEPTED_CHAINS(index: number, obj?: SCX): SCX | null;
    acceptedChainsLength(): number;
    /**
     * IPFS CID of the store's catalog (a `$REC` of `$PLG`/`$STF` listings)
     */
    CATALOG_ROOT_CID(): string | null;
    CATALOG_ROOT_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * libp2p advertise/discovery key for reachability
     */
    DISCOVERY_KEY(): string | null;
    DISCOVERY_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * libp2p protocol id the store answers on
     */
    PROTOCOL_ID(): string | null;
    PROTOCOL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature by the operator `$EPM`
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startSTO(builder: flatbuffers.Builder): void;
    static addStoreId(builder: flatbuffers.Builder, STORE_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addOperatorEpmCid(builder: flatbuffers.Builder, OPERATOR_EPM_CIDOffset: flatbuffers.Offset): void;
    static addStoreModule(builder: flatbuffers.Builder, STORE_MODULEOffset: flatbuffers.Offset): void;
    static addAppId(builder: flatbuffers.Builder, APP_IDOffset: flatbuffers.Offset): void;
    static addIsOfficial(builder: flatbuffers.Builder, IS_OFFICIAL: boolean): void;
    static addCommissionTerms(builder: flatbuffers.Builder, COMMISSION_TERMSOffset: flatbuffers.Offset): void;
    static addCommissionTermsId(builder: flatbuffers.Builder, COMMISSION_TERMS_IDOffset: flatbuffers.Offset): void;
    static addAcceptedChains(builder: flatbuffers.Builder, ACCEPTED_CHAINSOffset: flatbuffers.Offset): void;
    static createAcceptedChainsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAcceptedChainsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCatalogRootCid(builder: flatbuffers.Builder, CATALOG_ROOT_CIDOffset: flatbuffers.Offset): void;
    static addDiscoveryKey(builder: flatbuffers.Builder, DISCOVERY_KEYOffset: flatbuffers.Offset): void;
    static addProtocolId(builder: flatbuffers.Builder, PROTOCOL_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSTO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSTOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSTOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): STOT;
    unpackTo(_o: STOT): void;
}
export declare class STOT implements flatbuffers.IGeneratedObject {
    STORE_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    OPERATOR_EPM_CID: string | Uint8Array | null;
    STORE_MODULE: STOModuleRefT | null;
    APP_ID: string | Uint8Array | null;
    IS_OFFICIAL: boolean;
    COMMISSION_TERMS: CMTT | null;
    COMMISSION_TERMS_ID: string | Uint8Array | null;
    ACCEPTED_CHAINS: (SCXT)[];
    CATALOG_ROOT_CID: string | Uint8Array | null;
    DISCOVERY_KEY: string | Uint8Array | null;
    PROTOCOL_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(STORE_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, OPERATOR_EPM_CID?: string | Uint8Array | null, STORE_MODULE?: STOModuleRefT | null, APP_ID?: string | Uint8Array | null, IS_OFFICIAL?: boolean, COMMISSION_TERMS?: CMTT | null, COMMISSION_TERMS_ID?: string | Uint8Array | null, ACCEPTED_CHAINS?: (SCXT)[], CATALOG_ROOT_CID?: string | Uint8Array | null, DISCOVERY_KEY?: string | Uint8Array | null, PROTOCOL_ID?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=STO.d.ts.map