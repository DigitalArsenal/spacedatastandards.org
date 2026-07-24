import * as flatbuffers from 'flatbuffers';
import { GrantFieldStreamPolicy, GrantFieldStreamPolicyT } from './GrantFieldStreamPolicy.js';
/**
 * Immutable encrypted artifact/window metadata for protected delivery.
 */
export declare class ProtectedDeliveryBinding implements flatbuffers.IUnpackableObject<ProtectedDeliveryBindingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ProtectedDeliveryBinding;
    static getRootAsProtectedDeliveryBinding(bb: flatbuffers.ByteBuffer, obj?: ProtectedDeliveryBinding): ProtectedDeliveryBinding;
    static getSizePrefixedRootAsProtectedDeliveryBinding(bb: flatbuffers.ByteBuffer, obj?: ProtectedDeliveryBinding): ProtectedDeliveryBinding;
    ENCRYPTED_CID(): string | null;
    ENCRYPTED_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MANIFEST_CID(): string | null;
    MANIFEST_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONTENT_HASH(): string | null;
    CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONTENT_KEY_ID(): string | null;
    CONTENT_KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LICENSE_MODULE_ID(): string | null;
    LICENSE_MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REQUIRED_SCOPES(index: number): string;
    REQUIRED_SCOPES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    requiredScopesLength(): number;
    GRANT_SCOPE(): string | null;
    GRANT_SCOPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DELIVERY_PROTOCOL(): string | null;
    DELIVERY_PROTOCOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FIELD_STREAM_POLICY(obj?: GrantFieldStreamPolicy): GrantFieldStreamPolicy | null;
    static startProtectedDeliveryBinding(builder: flatbuffers.Builder): void;
    static addEncryptedCid(builder: flatbuffers.Builder, ENCRYPTED_CIDOffset: flatbuffers.Offset): void;
    static addManifestCid(builder: flatbuffers.Builder, MANIFEST_CIDOffset: flatbuffers.Offset): void;
    static addContentHash(builder: flatbuffers.Builder, CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addContentKeyId(builder: flatbuffers.Builder, CONTENT_KEY_IDOffset: flatbuffers.Offset): void;
    static addLicenseModuleId(builder: flatbuffers.Builder, LICENSE_MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addRequiredScopes(builder: flatbuffers.Builder, REQUIRED_SCOPESOffset: flatbuffers.Offset): void;
    static createRequiredScopesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRequiredScopesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGrantScope(builder: flatbuffers.Builder, GRANT_SCOPEOffset: flatbuffers.Offset): void;
    static addDeliveryProtocol(builder: flatbuffers.Builder, DELIVERY_PROTOCOLOffset: flatbuffers.Offset): void;
    static addFieldStreamPolicy(builder: flatbuffers.Builder, FIELD_STREAM_POLICYOffset: flatbuffers.Offset): void;
    static endProtectedDeliveryBinding(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ProtectedDeliveryBindingT;
    unpackTo(_o: ProtectedDeliveryBindingT): void;
}
export declare class ProtectedDeliveryBindingT implements flatbuffers.IGeneratedObject {
    ENCRYPTED_CID: string | Uint8Array | null;
    MANIFEST_CID: string | Uint8Array | null;
    CONTENT_HASH: string | Uint8Array | null;
    CONTENT_KEY_ID: string | Uint8Array | null;
    LICENSE_MODULE_ID: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    REQUIRED_SCOPES: (string)[];
    GRANT_SCOPE: string | Uint8Array | null;
    DELIVERY_PROTOCOL: string | Uint8Array | null;
    FIELD_STREAM_POLICY: GrantFieldStreamPolicyT | null;
    constructor(ENCRYPTED_CID?: string | Uint8Array | null, MANIFEST_CID?: string | Uint8Array | null, CONTENT_HASH?: string | Uint8Array | null, CONTENT_KEY_ID?: string | Uint8Array | null, LICENSE_MODULE_ID?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, REQUIRED_SCOPES?: (string)[], GRANT_SCOPE?: string | Uint8Array | null, DELIVERY_PROTOCOL?: string | Uint8Array | null, FIELD_STREAM_POLICY?: GrantFieldStreamPolicyT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ProtectedDeliveryBinding.d.ts.map