import * as flatbuffers from 'flatbuffers';
/**
 * Binding to the exact 3D asset bytes this record accompanies.
 *
 * Every field is copied verbatim from the $VAM that governs the asset, so an
 * $OPP is valid for exactly one reviewed variant. Different bytes are a
 * different asset: mint a new $OPP and set SUPERSEDES_OPP_CID rather than
 * repointing an existing one.
 */
export declare class OPPAssetRef implements flatbuffers.IUnpackableObject<OPPAssetRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPPAssetRef;
    static getRootAsOPPAssetRef(bb: flatbuffers.ByteBuffer, obj?: OPPAssetRef): OPPAssetRef;
    static getSizePrefixedRootAsOPPAssetRef(bb: flatbuffers.ByteBuffer, obj?: OPPAssetRef): OPPAssetRef;
    /**
     * $VAM.ID verbatim.
     */
    VAM_ID(): string;
    VAM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * $VAM.VERSION verbatim.
     */
    VAM_VERSION(): string | null;
    VAM_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CIDv1 containing a multihash of the exact $VAM bytes.
     */
    VAM_CID(): string | null;
    VAM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $VAMVariant.ID verbatim: the specific glTF or GLB this record describes.
     */
    VARIANT_ID(): string;
    VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * $VAMVariant.BYTE_SHA256 verbatim: 64 lowercase hexadecimal characters
     * encoding SHA-256 of the exact asset file bytes.
     */
    ASSET_SHA256(): string;
    ASSET_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * $VAMVariant.CID verbatim.
     */
    ASSET_CID(): string | null;
    ASSET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $VAMVariant.FILE_NAME verbatim.
     */
    ASSET_FILE_NAME(): string | null;
    ASSET_FILE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $VAMVariant.MEDIA_TYPE verbatim.
     */
    ASSET_MEDIA_TYPE(): string | null;
    ASSET_MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $VAMVariant.GLTF_VERSION verbatim.
     */
    GLTF_VERSION(): string | null;
    GLTF_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $VAM.ENTITY_ID verbatim. MUST equal OPP.ENTITY_ID.
     */
    ENTITY_ID(): string | null;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True only when the asset geometry was authored or rescaled to the physical
     * dimensions in this record. False, the default, means the asset is
     * representative and its geometry is not a source of physical dimensions.
     */
    GEOMETRY_MATCHES_PHYSICAL(): boolean;
    /**
     * Metres per asset unit for the named variant. Restates
     * $VAMTransform.METERS_PER_SOURCE_UNIT for consumers that read only $OPP.
     */
    METERS_PER_ASSET_UNIT(): number;
    static startOPPAssetRef(builder: flatbuffers.Builder): void;
    static addVamId(builder: flatbuffers.Builder, VAM_IDOffset: flatbuffers.Offset): void;
    static addVamVersion(builder: flatbuffers.Builder, VAM_VERSIONOffset: flatbuffers.Offset): void;
    static addVamCid(builder: flatbuffers.Builder, VAM_CIDOffset: flatbuffers.Offset): void;
    static addVariantId(builder: flatbuffers.Builder, VARIANT_IDOffset: flatbuffers.Offset): void;
    static addAssetSha256(builder: flatbuffers.Builder, ASSET_SHA256Offset: flatbuffers.Offset): void;
    static addAssetCid(builder: flatbuffers.Builder, ASSET_CIDOffset: flatbuffers.Offset): void;
    static addAssetFileName(builder: flatbuffers.Builder, ASSET_FILE_NAMEOffset: flatbuffers.Offset): void;
    static addAssetMediaType(builder: flatbuffers.Builder, ASSET_MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addGltfVersion(builder: flatbuffers.Builder, GLTF_VERSIONOffset: flatbuffers.Offset): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addGeometryMatchesPhysical(builder: flatbuffers.Builder, GEOMETRY_MATCHES_PHYSICAL: boolean): void;
    static addMetersPerAssetUnit(builder: flatbuffers.Builder, METERS_PER_ASSET_UNIT: number): void;
    static endOPPAssetRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOPPAssetRef(builder: flatbuffers.Builder, VAM_IDOffset: flatbuffers.Offset, VAM_VERSIONOffset: flatbuffers.Offset, VAM_CIDOffset: flatbuffers.Offset, VARIANT_IDOffset: flatbuffers.Offset, ASSET_SHA256Offset: flatbuffers.Offset, ASSET_CIDOffset: flatbuffers.Offset, ASSET_FILE_NAMEOffset: flatbuffers.Offset, ASSET_MEDIA_TYPEOffset: flatbuffers.Offset, GLTF_VERSIONOffset: flatbuffers.Offset, ENTITY_IDOffset: flatbuffers.Offset, GEOMETRY_MATCHES_PHYSICAL: boolean, METERS_PER_ASSET_UNIT: number): flatbuffers.Offset;
    unpack(): OPPAssetRefT;
    unpackTo(_o: OPPAssetRefT): void;
}
export declare class OPPAssetRefT implements flatbuffers.IGeneratedObject {
    VAM_ID: string | Uint8Array | null;
    VAM_VERSION: string | Uint8Array | null;
    VAM_CID: string | Uint8Array | null;
    VARIANT_ID: string | Uint8Array | null;
    ASSET_SHA256: string | Uint8Array | null;
    ASSET_CID: string | Uint8Array | null;
    ASSET_FILE_NAME: string | Uint8Array | null;
    ASSET_MEDIA_TYPE: string | Uint8Array | null;
    GLTF_VERSION: string | Uint8Array | null;
    ENTITY_ID: string | Uint8Array | null;
    GEOMETRY_MATCHES_PHYSICAL: boolean;
    METERS_PER_ASSET_UNIT: number;
    constructor(VAM_ID?: string | Uint8Array | null, VAM_VERSION?: string | Uint8Array | null, VAM_CID?: string | Uint8Array | null, VARIANT_ID?: string | Uint8Array | null, ASSET_SHA256?: string | Uint8Array | null, ASSET_CID?: string | Uint8Array | null, ASSET_FILE_NAME?: string | Uint8Array | null, ASSET_MEDIA_TYPE?: string | Uint8Array | null, GLTF_VERSION?: string | Uint8Array | null, ENTITY_ID?: string | Uint8Array | null, GEOMETRY_MATCHES_PHYSICAL?: boolean, METERS_PER_ASSET_UNIT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPPAssetRef.d.ts.map