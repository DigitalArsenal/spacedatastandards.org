import * as flatbuffers from 'flatbuffers';
import { DPMAsset, DPMAssetT } from './DPMAsset.js';
import { DPMCompletenessIndex, DPMCompletenessIndexT } from './DPMCompletenessIndex.js';
import { DPMEncryptionBinding, DPMEncryptionBindingT } from './DPMEncryptionBinding.js';
import { DPMQueryBinding, DPMQueryBindingT } from './DPMQueryBinding.js';
import { DPMSourceBatch, DPMSourceBatchT } from './DPMSourceBatch.js';
/**
 * Dataset Publication Manifest binding data/index CIDs, query replay,
 * source hashes, schema hashes, encryption metadata, provider-mediated query
 * protocols, completeness roots, and provider signature.
 */
export declare class DPM implements flatbuffers.IUnpackableObject<DPMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DPM;
    static getRootAsDPM(bb: flatbuffers.ByteBuffer, obj?: DPM): DPM;
    static getSizePrefixedRootAsDPM(bb: flatbuffers.ByteBuffer, obj?: DPM): DPM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Manifest format version.
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stable dataset identifier.
     */
    DATASET_ID(): string;
    DATASET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Dataset update or batch identifier.
     */
    UPDATE_ID(): string;
    UPDATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Canonical publication/update partition identity. FILE_ID is the key used
     * everywhere a subscriber, provider, PNM, entitlement, cache, audit log, or
     * query protocol refers to this exact update. It is not merely a human
     * filename and it is not the FlatBuffer file_identifier. For
     * completeness-verifiable streams, all returned records MUST belong to this
     * FILE_ID and prove inclusion under this DPM's signed roots, normally through
     * a declared file_id completeness index.
     */
    FILE_ID(): string | null;
    FILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider peer ID.
     */
    PROVIDER_PEER_ID(): string;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Provider EPM CID.
     */
    PROVIDER_EPM_CID(): string | null;
    PROVIDER_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Publication timestamp in ISO 8601 UTC.
     */
    PUBLISH_TIMESTAMP(): string;
    PUBLISH_TIMESTAMP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Published shard, index, and auxiliary artifacts.
     */
    ASSETS(index: number, obj?: DPMAsset): DPMAsset | null;
    assetsLength(): number;
    /**
     * Source batches used to build the dataset.
     */
    SOURCES(index: number, obj?: DPMSourceBatch): DPMSourceBatch | null;
    sourcesLength(): number;
    /**
     * Replayable query binding.
     */
    QUERY(obj?: DPMQueryBinding): DPMQueryBinding | null;
    /**
     * Signed completeness-capable indexes. Inclusion proofs prove that returned
     * records are authentic members of DATA_ROOT. Range-completeness proofs also
     * prove that no matching records were omitted, but only for predicates
     * expressible against these declared indexes.
     */
    INDEXES(index: number, obj?: DPMCompletenessIndex): DPMCompletenessIndex | null;
    indexesLength(): number;
    /**
     * Encryption/key metadata.
     */
    ENCRYPTION(obj?: DPMEncryptionBinding): DPMEncryptionBinding | null;
    /**
     * Provider signature over the canonical manifest bytes or manifest digest.
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
    /**
     * Signature algorithm, e.g. Ed25519.
     */
    SIGNATURE_TYPE(): string | null;
    SIGNATURE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDPM(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addDatasetId(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset): void;
    static addUpdateId(builder: flatbuffers.Builder, UPDATE_IDOffset: flatbuffers.Offset): void;
    static addFileId(builder: flatbuffers.Builder, FILE_IDOffset: flatbuffers.Offset): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderEpmCid(builder: flatbuffers.Builder, PROVIDER_EPM_CIDOffset: flatbuffers.Offset): void;
    static addPublishTimestamp(builder: flatbuffers.Builder, PUBLISH_TIMESTAMPOffset: flatbuffers.Offset): void;
    static addAssets(builder: flatbuffers.Builder, ASSETSOffset: flatbuffers.Offset): void;
    static createAssetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQuery(builder: flatbuffers.Builder, QUERYOffset: flatbuffers.Offset): void;
    static addIndexes(builder: flatbuffers.Builder, INDEXESOffset: flatbuffers.Offset): void;
    static createIndexesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIndexesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEncryption(builder: flatbuffers.Builder, ENCRYPTIONOffset: flatbuffers.Offset): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignatureType(builder: flatbuffers.Builder, SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static endDPM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): DPMT;
    unpackTo(_o: DPMT): void;
}
export declare class DPMT implements flatbuffers.IGeneratedObject {
    VERSION: string | Uint8Array | null;
    DATASET_ID: string | Uint8Array | null;
    UPDATE_ID: string | Uint8Array | null;
    FILE_ID: string | Uint8Array | null;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_EPM_CID: string | Uint8Array | null;
    PUBLISH_TIMESTAMP: string | Uint8Array | null;
    ASSETS: (DPMAssetT)[];
    SOURCES: (DPMSourceBatchT)[];
    QUERY: DPMQueryBindingT | null;
    INDEXES: (DPMCompletenessIndexT)[];
    ENCRYPTION: DPMEncryptionBindingT | null;
    PROVIDER_SIGNATURE: (number)[];
    SIGNATURE_TYPE: string | Uint8Array | null;
    constructor(VERSION?: string | Uint8Array | null, DATASET_ID?: string | Uint8Array | null, UPDATE_ID?: string | Uint8Array | null, FILE_ID?: string | Uint8Array | null, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_EPM_CID?: string | Uint8Array | null, PUBLISH_TIMESTAMP?: string | Uint8Array | null, ASSETS?: (DPMAssetT)[], SOURCES?: (DPMSourceBatchT)[], QUERY?: DPMQueryBindingT | null, INDEXES?: (DPMCompletenessIndexT)[], ENCRYPTION?: DPMEncryptionBindingT | null, PROVIDER_SIGNATURE?: (number)[], SIGNATURE_TYPE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DPM.d.ts.map