import * as flatbuffers from 'flatbuffers';
import { visualAssetLicenseClass } from './visualAssetLicenseClass.js';
import { visualAssetPermissionDecision } from './visualAssetPermissionDecision.js';
/**
 * Provenance and license metadata for an asset source.
 */
export declare class VAMSource implements flatbuffers.IUnpackableObject<VAMSourceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMSource;
    static getRootAsVAMSource(bb: flatbuffers.ByteBuffer, obj?: VAMSource): VAMSource;
    static getSizePrefixedRootAsVAMSource(bb: flatbuffers.ByteBuffer, obj?: VAMSource): VAMSource;
    SOURCE_RECORD_ID(): string;
    SOURCE_RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_URL(): string;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) when the source was observed.
     */
    OBSERVED_AT(): string | null;
    OBSERVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LICENSE_CLASS(): visualAssetLicenseClass;
    LICENSE_NAME(): string | null;
    LICENSE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ATTRIBUTION(): string | null;
    ATTRIBUTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REDISTRIBUTION_PERMISSION(): visualAssetPermissionDecision;
    DERIVATIVE_PERMISSION(): visualAssetPermissionDecision;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of canonical UTF-8 JSON source-metadata bytes.
     */
    SOURCE_METADATA_SHA256(): string | null;
    SOURCE_METADATA_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startVAMSource(builder: flatbuffers.Builder): void;
    static addSourceRecordId(builder: flatbuffers.Builder, SOURCE_RECORD_IDOffset: flatbuffers.Offset): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addObservedAt(builder: flatbuffers.Builder, OBSERVED_ATOffset: flatbuffers.Offset): void;
    static addLicenseClass(builder: flatbuffers.Builder, LICENSE_CLASS: visualAssetLicenseClass): void;
    static addLicenseName(builder: flatbuffers.Builder, LICENSE_NAMEOffset: flatbuffers.Offset): void;
    static addAttribution(builder: flatbuffers.Builder, ATTRIBUTIONOffset: flatbuffers.Offset): void;
    static addRedistributionPermission(builder: flatbuffers.Builder, REDISTRIBUTION_PERMISSION: visualAssetPermissionDecision): void;
    static addDerivativePermission(builder: flatbuffers.Builder, DERIVATIVE_PERMISSION: visualAssetPermissionDecision): void;
    static addSourceMetadataSha256(builder: flatbuffers.Builder, SOURCE_METADATA_SHA256Offset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endVAMSource(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVAMSource(builder: flatbuffers.Builder, SOURCE_RECORD_IDOffset: flatbuffers.Offset, SOURCE_NAMEOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, OBSERVED_ATOffset: flatbuffers.Offset, LICENSE_CLASS: visualAssetLicenseClass, LICENSE_NAMEOffset: flatbuffers.Offset, ATTRIBUTIONOffset: flatbuffers.Offset, REDISTRIBUTION_PERMISSION: visualAssetPermissionDecision, DERIVATIVE_PERMISSION: visualAssetPermissionDecision, SOURCE_METADATA_SHA256Offset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): VAMSourceT;
    unpackTo(_o: VAMSourceT): void;
}
export declare class VAMSourceT implements flatbuffers.IGeneratedObject {
    SOURCE_RECORD_ID: string | Uint8Array | null;
    SOURCE_NAME: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    OBSERVED_AT: string | Uint8Array | null;
    LICENSE_CLASS: visualAssetLicenseClass;
    LICENSE_NAME: string | Uint8Array | null;
    ATTRIBUTION: string | Uint8Array | null;
    REDISTRIBUTION_PERMISSION: visualAssetPermissionDecision;
    DERIVATIVE_PERMISSION: visualAssetPermissionDecision;
    SOURCE_METADATA_SHA256: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(SOURCE_RECORD_ID?: string | Uint8Array | null, SOURCE_NAME?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, OBSERVED_AT?: string | Uint8Array | null, LICENSE_CLASS?: visualAssetLicenseClass, LICENSE_NAME?: string | Uint8Array | null, ATTRIBUTION?: string | Uint8Array | null, REDISTRIBUTION_PERMISSION?: visualAssetPermissionDecision, DERIVATIVE_PERMISSION?: visualAssetPermissionDecision, SOURCE_METADATA_SHA256?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMSource.d.ts.map