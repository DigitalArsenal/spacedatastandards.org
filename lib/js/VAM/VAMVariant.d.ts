import * as flatbuffers from 'flatbuffers';
import { VAMMetrics, VAMMetricsT } from './VAMMetrics.js';
import { VAMQualityDimension, VAMQualityDimensionT } from './VAMQualityDimension.js';
import { VAMSource, VAMSourceT } from './VAMSource.js';
import { VAMTransform, VAMTransformT } from './VAMTransform.js';
import { VAMValidation, VAMValidationT } from './VAMValidation.js';
import { visualAssetReviewState } from './visualAssetReviewState.js';
import { visualAssetVariantKind } from './visualAssetVariantKind.js';
/**
 * One source, optimized, LOD, or alternate visual representation.
 */
export declare class VAMVariant implements flatbuffers.IUnpackableObject<VAMVariantT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMVariant;
    static getRootAsVAMVariant(bb: flatbuffers.ByteBuffer, obj?: VAMVariant): VAMVariant;
    static getSizePrefixedRootAsVAMVariant(bb: flatbuffers.ByteBuffer, obj?: VAMVariant): VAMVariant;
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PARENT_VARIANT_ID(): string | null;
    PARENT_VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VARIANT_KIND(): visualAssetVariantKind;
    LOD_LEVEL(): number;
    FILE_NAME(): string | null;
    FILE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IANA media type of the exact variant bytes.
     */
    MEDIA_TYPE(): string | null;
    MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BYTE_LENGTH(): bigint;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the exact variant file bytes.
     */
    BYTE_SHA256(): string | null;
    BYTE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CIDv1 containing a multihash of the exact variant file bytes.
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MULTIFORMAT_ADDRESS(): string | null;
    MULTIFORMAT_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAJOR.MINOR glTF specification version, such as 2.0.
     */
    GLTF_VERSION(): string | null;
    GLTF_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GENERATOR(): string | null;
    GENERATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONVERSION_TOOL(): string | null;
    CONVERSION_TOOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CONVERSION_VERSION is the exact version identifier reported by CONVERSION_TOOL without normalization.
     */
    CONVERSION_VERSION(): string | null;
    CONVERSION_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONVERSION_PROFILE(): string | null;
    CONVERSION_PROFILE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the exact conversion input bytes.
     */
    INPUT_SHA256(): string | null;
    INPUT_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE(obj?: VAMSource): VAMSource | null;
    TRANSFORM(obj?: VAMTransform): VAMTransform | null;
    METRICS(obj?: VAMMetrics): VAMMetrics | null;
    VALIDATION(obj?: VAMValidation): VAMValidation | null;
    QUALITY(index: number, obj?: VAMQualityDimension): VAMQualityDimension | null;
    qualityLength(): number;
    REVIEW_STATE(): visualAssetReviewState;
    SUPERSEDES_VARIANT_ID(): string | null;
    SUPERSEDES_VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startVAMVariant(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addParentVariantId(builder: flatbuffers.Builder, PARENT_VARIANT_IDOffset: flatbuffers.Offset): void;
    static addVariantKind(builder: flatbuffers.Builder, VARIANT_KIND: visualAssetVariantKind): void;
    static addLodLevel(builder: flatbuffers.Builder, LOD_LEVEL: number): void;
    static addFileName(builder: flatbuffers.Builder, FILE_NAMEOffset: flatbuffers.Offset): void;
    static addMediaType(builder: flatbuffers.Builder, MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addByteSha256(builder: flatbuffers.Builder, BYTE_SHA256Offset: flatbuffers.Offset): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static addGltfVersion(builder: flatbuffers.Builder, GLTF_VERSIONOffset: flatbuffers.Offset): void;
    static addGenerator(builder: flatbuffers.Builder, GENERATOROffset: flatbuffers.Offset): void;
    static addConversionTool(builder: flatbuffers.Builder, CONVERSION_TOOLOffset: flatbuffers.Offset): void;
    static addConversionVersion(builder: flatbuffers.Builder, CONVERSION_VERSIONOffset: flatbuffers.Offset): void;
    static addConversionProfile(builder: flatbuffers.Builder, CONVERSION_PROFILEOffset: flatbuffers.Offset): void;
    static addInputSha256(builder: flatbuffers.Builder, INPUT_SHA256Offset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addTransform(builder: flatbuffers.Builder, TRANSFORMOffset: flatbuffers.Offset): void;
    static addMetrics(builder: flatbuffers.Builder, METRICSOffset: flatbuffers.Offset): void;
    static addValidation(builder: flatbuffers.Builder, VALIDATIONOffset: flatbuffers.Offset): void;
    static addQuality(builder: flatbuffers.Builder, QUALITYOffset: flatbuffers.Offset): void;
    static createQualityVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startQualityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReviewState(builder: flatbuffers.Builder, REVIEW_STATE: visualAssetReviewState): void;
    static addSupersedesVariantId(builder: flatbuffers.Builder, SUPERSEDES_VARIANT_IDOffset: flatbuffers.Offset): void;
    static endVAMVariant(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): VAMVariantT;
    unpackTo(_o: VAMVariantT): void;
}
export declare class VAMVariantT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    PARENT_VARIANT_ID: string | Uint8Array | null;
    VARIANT_KIND: visualAssetVariantKind;
    LOD_LEVEL: number;
    FILE_NAME: string | Uint8Array | null;
    MEDIA_TYPE: string | Uint8Array | null;
    BYTE_LENGTH: bigint;
    BYTE_SHA256: string | Uint8Array | null;
    CID: string | Uint8Array | null;
    MULTIFORMAT_ADDRESS: string | Uint8Array | null;
    GLTF_VERSION: string | Uint8Array | null;
    GENERATOR: string | Uint8Array | null;
    CONVERSION_TOOL: string | Uint8Array | null;
    CONVERSION_VERSION: string | Uint8Array | null;
    CONVERSION_PROFILE: string | Uint8Array | null;
    INPUT_SHA256: string | Uint8Array | null;
    SOURCE: VAMSourceT | null;
    TRANSFORM: VAMTransformT | null;
    METRICS: VAMMetricsT | null;
    VALIDATION: VAMValidationT | null;
    QUALITY: (VAMQualityDimensionT)[];
    REVIEW_STATE: visualAssetReviewState;
    SUPERSEDES_VARIANT_ID: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, PARENT_VARIANT_ID?: string | Uint8Array | null, VARIANT_KIND?: visualAssetVariantKind, LOD_LEVEL?: number, FILE_NAME?: string | Uint8Array | null, MEDIA_TYPE?: string | Uint8Array | null, BYTE_LENGTH?: bigint, BYTE_SHA256?: string | Uint8Array | null, CID?: string | Uint8Array | null, MULTIFORMAT_ADDRESS?: string | Uint8Array | null, GLTF_VERSION?: string | Uint8Array | null, GENERATOR?: string | Uint8Array | null, CONVERSION_TOOL?: string | Uint8Array | null, CONVERSION_VERSION?: string | Uint8Array | null, CONVERSION_PROFILE?: string | Uint8Array | null, INPUT_SHA256?: string | Uint8Array | null, SOURCE?: VAMSourceT | null, TRANSFORM?: VAMTransformT | null, METRICS?: VAMMetricsT | null, VALIDATION?: VAMValidationT | null, QUALITY?: (VAMQualityDimensionT)[], REVIEW_STATE?: visualAssetReviewState, SUPERSEDES_VARIANT_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMVariant.d.ts.map