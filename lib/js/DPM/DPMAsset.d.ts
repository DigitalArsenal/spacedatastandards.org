import * as flatbuffers from 'flatbuffers';
import { publicationAssetKind } from './publicationAssetKind.js';
/**
 * One immutable content-addressed object published for a dataset update.
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
     * IPFS CIDv1/multihash content identifier.
     */
    CID(): string;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Multiformat address, usually /ipfs/{CID}.
     */
    MULTIFORMAT_ADDRESS(): string | null;
    MULTIFORMAT_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File name or logical artifact name.
     */
    FILE_NAME(): string | null;
    FILE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static addFileName(builder: flatbuffers.Builder, FILE_NAMEOffset: flatbuffers.Offset): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addByteSha256(builder: flatbuffers.Builder, BYTE_SHA256Offset: flatbuffers.Offset): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addSchemaHash(builder: flatbuffers.Builder, SCHEMA_HASHOffset: flatbuffers.Offset): void;
    static addContentKeyId(builder: flatbuffers.Builder, CONTENT_KEY_IDOffset: flatbuffers.Offset): void;
    static endDPMAsset(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDPMAsset(builder: flatbuffers.Builder, ASSET_KIND: publicationAssetKind, CIDOffset: flatbuffers.Offset, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, FILE_NAMEOffset: flatbuffers.Offset, BYTE_LENGTH: bigint, BYTE_SHA256Offset: flatbuffers.Offset, SCHEMA_NAMEOffset: flatbuffers.Offset, SCHEMA_HASHOffset: flatbuffers.Offset, CONTENT_KEY_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DPMAssetT;
    unpackTo(_o: DPMAssetT): void;
}
export declare class DPMAssetT implements flatbuffers.IGeneratedObject {
    ASSET_KIND: publicationAssetKind;
    CID: string | Uint8Array | null;
    MULTIFORMAT_ADDRESS: string | Uint8Array | null;
    FILE_NAME: string | Uint8Array | null;
    BYTE_LENGTH: bigint;
    BYTE_SHA256: string | Uint8Array | null;
    SCHEMA_NAME: string | Uint8Array | null;
    SCHEMA_HASH: string | Uint8Array | null;
    CONTENT_KEY_ID: string | Uint8Array | null;
    constructor(ASSET_KIND?: publicationAssetKind, CID?: string | Uint8Array | null, MULTIFORMAT_ADDRESS?: string | Uint8Array | null, FILE_NAME?: string | Uint8Array | null, BYTE_LENGTH?: bigint, BYTE_SHA256?: string | Uint8Array | null, SCHEMA_NAME?: string | Uint8Array | null, SCHEMA_HASH?: string | Uint8Array | null, CONTENT_KEY_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DPMAsset.d.ts.map