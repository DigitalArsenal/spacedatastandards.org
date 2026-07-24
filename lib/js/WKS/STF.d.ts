import * as flatbuffers from 'flatbuffers';
import { DataCoverage, DataCoverageT } from './DataCoverage.js';
import { PricingTier, PricingTierT } from './PricingTier.js';
import { ProtectedDeliveryBinding, ProtectedDeliveryBindingT } from './ProtectedDeliveryBinding.js';
import { ProviderReputation, ProviderReputationT } from './ProviderReputation.js';
import { accessCategory } from './accessCategory.js';
import { listingCategory } from './listingCategory.js';
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
    LISTING_ID(): string;
    LISTING_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Peer ID of the data provider
     */
    PROVIDER_PEER_ID(): string;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * IPFS CID of provider's EPM (Entity Profile Message)
     */
    PROVIDER_EPM_CID(): string | null;
    PROVIDER_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Title of the data listing
     */
    TITLE(): string;
    TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
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
    ACCESS_TYPE(): accessCategory;
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
    /**
     * Listing category: data stream or WASM module
     */
    LISTING_KIND(): listingCategory;
    /**
     * Search tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Number of records in sample data, when available
     */
    SAMPLE_RECORD_COUNT(): number;
    /**
     * Supported delivery methods
     */
    DELIVERY_METHODS(index: number): string;
    DELIVERY_METHODS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    deliveryMethodsLength(): number;
    /**
     * Protected delivery metadata for encrypted artifacts or streams
     */
    PROTECTED_DELIVERY(obj?: ProtectedDeliveryBinding): ProtectedDeliveryBinding | null;
    /**
     * Provider reputation summary
     */
    REPUTATION(obj?: ProviderReputation): ProviderReputation | null;
    /**
     * Listing version
     */
    VERSION(): number;
    /**
     * Unix timestamp when the listing expires, or 0 for no expiry
     */
    EXPIRES_AT(): bigint;
    /**
     * Terms document CID
     */
    TERMS_CID(): string | null;
    TERMS_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * License label or SPDX-style identifier
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer ID this listing was sourced from when discovered remotely
     */
    SOURCE_PEER_ID(): string | null;
    SOURCE_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static addAccessType(builder: flatbuffers.Builder, ACCESS_TYPE: accessCategory): void;
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
    static addListingKind(builder: flatbuffers.Builder, LISTING_KIND: listingCategory): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleRecordCount(builder: flatbuffers.Builder, SAMPLE_RECORD_COUNT: number): void;
    static addDeliveryMethods(builder: flatbuffers.Builder, DELIVERY_METHODSOffset: flatbuffers.Offset): void;
    static createDeliveryMethodsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDeliveryMethodsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProtectedDelivery(builder: flatbuffers.Builder, PROTECTED_DELIVERYOffset: flatbuffers.Offset): void;
    static addReputation(builder: flatbuffers.Builder, REPUTATIONOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addTermsCid(builder: flatbuffers.Builder, TERMS_CIDOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addSourcePeerId(builder: flatbuffers.Builder, SOURCE_PEER_IDOffset: flatbuffers.Offset): void;
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
    ACCESS_TYPE: accessCategory;
    ENCRYPTION_REQUIRED: boolean;
    PRICING: (PricingTierT)[];
    ACCEPTED_PAYMENTS: (paymentMethod)[];
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    ACTIVE: boolean;
    SIGNATURE: (number)[];
    LISTING_KIND: listingCategory;
    TAGS: (string)[];
    SAMPLE_RECORD_COUNT: number;
    DELIVERY_METHODS: (string)[];
    PROTECTED_DELIVERY: ProtectedDeliveryBindingT | null;
    REPUTATION: ProviderReputationT | null;
    VERSION: number;
    EXPIRES_AT: bigint;
    TERMS_CID: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    SOURCE_PEER_ID: string | Uint8Array | null;
    constructor(LISTING_ID?: string | Uint8Array | null, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_EPM_CID?: string | Uint8Array | null, TITLE?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, DATA_TYPES?: (string)[], COVERAGE?: DataCoverageT | null, SAMPLE_CID?: string | Uint8Array | null, ACCESS_TYPE?: accessCategory, ENCRYPTION_REQUIRED?: boolean, PRICING?: (PricingTierT)[], ACCEPTED_PAYMENTS?: (paymentMethod)[], CREATED_AT?: bigint, UPDATED_AT?: bigint, ACTIVE?: boolean, SIGNATURE?: (number)[], LISTING_KIND?: listingCategory, TAGS?: (string)[], SAMPLE_RECORD_COUNT?: number, DELIVERY_METHODS?: (string)[], PROTECTED_DELIVERY?: ProtectedDeliveryBindingT | null, REPUTATION?: ProviderReputationT | null, VERSION?: number, EXPIRES_AT?: bigint, TERMS_CID?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, SOURCE_PEER_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=STF.d.ts.map