import * as flatbuffers from 'flatbuffers';
import { DataCoverage, DataCoverageT } from './DataCoverage.js';
import { PricingTier, PricingTierT } from './PricingTier.js';
import { accessType } from './accessType.js';
import { paymentMethod } from './paymentMethod.js';
/**
 * Storefront Listing - Data marketplace listing
 */
export declare class STF implements flatbuffers.IUnpackableObject<STFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): STF;
    static getRootAsSTF(bb: flatbuffers.ByteBuffer, obj?: STF): STF;
    static getSizePrefixedRootAsSTF(bb: flatbuffers.ByteBuffer, obj?: STF): STF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier for the listing
     */
    LISTING_ID(): string | null;
    LISTING_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer ID of the data provider
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CID of provider's EPM (Entity Profile Message)
     */
    PROVIDER_EPM_CID(): string | null;
    PROVIDER_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Title of the data listing
     */
    TITLE(): string | null;
    TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detailed description of the data offering
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SDS data types offered, e.g., ["OMM", "CDM", "TLE"]
     */
    DATA_TYPES(index: number): string;
    DATA_TYPES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    dataTypesLength(): number;
    /**
     * Coverage information (spatial and temporal)
     */
    COVERAGE(obj?: DataCoverage): DataCoverage | null;
    /**
     * IPFS CID of sample data
     */
    SAMPLE_CID(): string | null;
    SAMPLE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of access offered
     */
    ACCESS_TYPE(): accessType;
    /**
     * Whether encryption is required for data delivery
     */
    ENCRYPTION_REQUIRED(): boolean;
    /**
     * Available pricing tiers
     */
    PRICING(index: number, obj?: PricingTier): PricingTier | null;
    pricingLength(): number;
    /**
     * Payment methods accepted
     */
    ACCEPTED_PAYMENTS(index: number): paymentMethod | null;
    acceptedPaymentsLength(): number;
    acceptedPaymentsArray(): Int8Array | null;
    /**
     * Unix timestamp when listing was created
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp when listing was last updated
     */
    UPDATED_AT(): bigint;
    /**
     * Whether the listing is currently active
     */
    ACTIVE(): boolean;
    /**
     * Ed25519 signature from provider
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startSTF(builder: flatbuffers.Builder): void;
    static addListingId(builder: flatbuffers.Builder, LISTING_IDOffset: flatbuffers.Offset): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderEpmCid(builder: flatbuffers.Builder, PROVIDER_EPM_CIDOffset: flatbuffers.Offset): void;
    static addTitle(builder: flatbuffers.Builder, TITLEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addDataTypes(builder: flatbuffers.Builder, DATA_TYPESOffset: flatbuffers.Offset): void;
    static createDataTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDataTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoverage(builder: flatbuffers.Builder, COVERAGEOffset: flatbuffers.Offset): void;
    static addSampleCid(builder: flatbuffers.Builder, SAMPLE_CIDOffset: flatbuffers.Offset): void;
    static addAccessType(builder: flatbuffers.Builder, ACCESS_TYPE: accessType): void;
    static addEncryptionRequired(builder: flatbuffers.Builder, ENCRYPTION_REQUIRED: boolean): void;
    static addPricing(builder: flatbuffers.Builder, PRICINGOffset: flatbuffers.Offset): void;
    static createPricingVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPricingVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAcceptedPayments(builder: flatbuffers.Builder, ACCEPTED_PAYMENTSOffset: flatbuffers.Offset): void;
    static createAcceptedPaymentsVector(builder: flatbuffers.Builder, data: paymentMethod[]): flatbuffers.Offset;
    static startAcceptedPaymentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addActive(builder: flatbuffers.Builder, ACTIVE: boolean): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSTF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSTFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSTFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): STFT;
    unpackTo(_o: STFT): void;
}
export declare class STFT implements flatbuffers.IGeneratedObject {
    LISTING_ID: string | Uint8Array | null;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_EPM_CID: string | Uint8Array | null;
    TITLE: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    DATA_TYPES: (string)[];
    COVERAGE: DataCoverageT | null;
    SAMPLE_CID: string | Uint8Array | null;
    ACCESS_TYPE: accessType;
    ENCRYPTION_REQUIRED: boolean;
    PRICING: (PricingTierT)[];
    ACCEPTED_PAYMENTS: (paymentMethod)[];
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    ACTIVE: boolean;
    SIGNATURE: (number)[];
    constructor(LISTING_ID?: string | Uint8Array | null, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_EPM_CID?: string | Uint8Array | null, TITLE?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, DATA_TYPES?: (string)[], COVERAGE?: DataCoverageT | null, SAMPLE_CID?: string | Uint8Array | null, ACCESS_TYPE?: accessType, ENCRYPTION_REQUIRED?: boolean, PRICING?: (PricingTierT)[], ACCEPTED_PAYMENTS?: (paymentMethod)[], CREATED_AT?: bigint, UPDATED_AT?: bigint, ACTIVE?: boolean, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=STF.d.ts.map