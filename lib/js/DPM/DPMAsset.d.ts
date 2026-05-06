import * as flatbuffers from 'flatbuffers';
import { dpmTransportKind } from './dpmTransportKind.js';
import { publicationAssetKind } from './publicationAssetKind.js';
/**
 * One immutable asset or provider-mediated query contract published for a
 * dataset update.
 */
export declare class DPMAsset implements flatbuffers.IUnpackableObject<DPMAssetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DPMAsset;
    static getRootAsDPMAsset(bb: flatbuffers.ByteBuffer, obj?: DPMAsset): DPMAsset;
    static getSizePrefixedRootAsDPMAsset(bb: flatbuffers.ByteBuffer, obj?: DPMAsset): DPMAsset;
    /**
     * Asset role.
     */
    ASSET_KIND(): publicationAssetKind;
    /**
     * Transport profile for this asset. CONTENT_ADDRESS assets use CID and
     * MULTIFORMAT_ADDRESS. SDN_QUERY assets use TRANSPORT_PROTOCOL plus the
     * signed DPM query and root fields; they are not required to be published as
     * discoverable IPFS files.
     */
    TRANSPORT_KIND(): dpmTransportKind;
    /**
     * Optional IPFS CIDv1/multihash content identifier. This field is required
     * for CONTENT_ADDRESS assets and SHOULD be empty for SDN_QUERY assets whose
     * bytes are retrieved through a provider protocol.
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Multiformat address. For CONTENT_ADDRESS this is usually /ipfs/{CID}. For
     * SDN_QUERY this MAY be a provider peer multiaddr, relay hint, or empty when
     * provider routing is resolved from the DPM provider identity.
     */
    MULTIFORMAT_ADDRESS(): string | null;
    MULTIFORMAT_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File name or logical artifact name.
     */
    FILE_NAME(): string | null;
    FILE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Canonical publication/update partition identity for this asset. FILE_ID is
     * not a display filename; it is the stable identifier used everywhere this
     * update is referenced: PNMs, DPMs, assets, manifests, entitlements, query
     * requests, subscriber caches, replay, audit, and completeness proofs.
     * Example:
     * celestrak:gp:OMM.fbs:2026-05-06T03:00:00Z.
     */
    FILE_ID(): string | null;
    FILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider protocol name/version used to fetch this asset when
     * TRANSPORT_KIND is SDN_QUERY, e.g. /sdn/dataset-query/1.0.0. The protocol
     * response MUST be verifiable against DATA_ROOT, INDEXES, QUERY, and the
     * provider signature in this DPM.
     */
    TRANSPORT_PROTOCOL(): string | null;
    TRANSPORT_PROTOCOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Byte length of the published object.
     */
    BYTE_LENGTH(): bigint;
    /**
     * SHA-256 hash of the exact published bytes, lowercase hex.
     */
    BYTE_SHA256(): string | null;
    BYTE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Merkle root over canonical records in this asset, lowercase hex. For
     * provider-mediated query delivery, subscribers verify returned records and
     * proof paths against this root before importing data. The proof material is
     * carried by the provider query response, not by the DPM itself; this field
     * is the signed root that makes those proofs meaningful.
     */
    DATA_ROOT(): string | null;
    DATA_ROOT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SDS schema name for data artifacts, e.g. OMM.fbs, CAT.fbs, SPW.fbs.
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Hash of the SDS schema used to encode this object.
     */
    SCHEMA_HASH(): string | null;
    SCHEMA_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional content-key identifier for encrypted artifacts.
     */
    CONTENT_KEY_ID(): string | null;
    CONTENT_KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDPMAsset(builder: flatbuffers.Builder): void;
    static addAssetKind(builder: flatbuffers.Builder, ASSET_KIND: publicationAssetKind): void;
    static addTransportKind(builder: flatbuffers.Builder, TRANSPORT_KIND: dpmTransportKind): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static addFileName(builder: flatbuffers.Builder, FILE_NAMEOffset: flatbuffers.Offset): void;
    static addFileId(builder: flatbuffers.Builder, FILE_IDOffset: flatbuffers.Offset): void;
    static addTransportProtocol(builder: flatbuffers.Builder, TRANSPORT_PROTOCOLOffset: flatbuffers.Offset): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addByteSha256(builder: flatbuffers.Builder, BYTE_SHA256Offset: flatbuffers.Offset): void;
    static addDataRoot(builder: flatbuffers.Builder, DATA_ROOTOffset: flatbuffers.Offset): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addSchemaHash(builder: flatbuffers.Builder, SCHEMA_HASHOffset: flatbuffers.Offset): void;
    static addContentKeyId(builder: flatbuffers.Builder, CONTENT_KEY_IDOffset: flatbuffers.Offset): void;
    static endDPMAsset(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDPMAsset(builder: flatbuffers.Builder, ASSET_KIND: publicationAssetKind, TRANSPORT_KIND: dpmTransportKind, CIDOffset: flatbuffers.Offset, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, FILE_NAMEOffset: flatbuffers.Offset, FILE_IDOffset: flatbuffers.Offset, TRANSPORT_PROTOCOLOffset: flatbuffers.Offset, BYTE_LENGTH: bigint, BYTE_SHA256Offset: flatbuffers.Offset, DATA_ROOTOffset: flatbuffers.Offset, SCHEMA_NAMEOffset: flatbuffers.Offset, SCHEMA_HASHOffset: flatbuffers.Offset, CONTENT_KEY_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DPMAssetT;
    unpackTo(_o: DPMAssetT): void;
}
export declare class DPMAssetT implements flatbuffers.IGeneratedObject {
    ASSET_KIND: publicationAssetKind;
    TRANSPORT_KIND: dpmTransportKind;
    CID: string | Uint8Array | null;
    MULTIFORMAT_ADDRESS: string | Uint8Array | null;
    FILE_NAME: string | Uint8Array | null;
    FILE_ID: string | Uint8Array | null;
    TRANSPORT_PROTOCOL: string | Uint8Array | null;
    BYTE_LENGTH: bigint;
    BYTE_SHA256: string | Uint8Array | null;
    DATA_ROOT: string | Uint8Array | null;
    SCHEMA_NAME: string | Uint8Array | null;
    SCHEMA_HASH: string | Uint8Array | null;
    CONTENT_KEY_ID: string | Uint8Array | null;
    constructor(ASSET_KIND?: publicationAssetKind, TRANSPORT_KIND?: dpmTransportKind, CID?: string | Uint8Array | null, MULTIFORMAT_ADDRESS?: string | Uint8Array | null, FILE_NAME?: string | Uint8Array | null, FILE_ID?: string | Uint8Array | null, TRANSPORT_PROTOCOL?: string | Uint8Array | null, BYTE_LENGTH?: bigint, BYTE_SHA256?: string | Uint8Array | null, DATA_ROOT?: string | Uint8Array | null, SCHEMA_NAME?: string | Uint8Array | null, SCHEMA_HASH?: string | Uint8Array | null, CONTENT_KEY_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DPMAsset.d.ts.map