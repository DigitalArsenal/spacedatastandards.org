import * as flatbuffers from 'flatbuffers';
/**
 * Encryption metadata for protected dataset artifacts.
 */
export declare class DPMEncryptionBinding implements flatbuffers.IUnpackableObject<DPMEncryptionBindingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DPMEncryptionBinding;
    static getRootAsDPMEncryptionBinding(bb: flatbuffers.ByteBuffer, obj?: DPMEncryptionBinding): DPMEncryptionBinding;
    static getSizePrefixedRootAsDPMEncryptionBinding(bb: flatbuffers.ByteBuffer, obj?: DPMEncryptionBinding): DPMEncryptionBinding;
    /**
     * Whether any artifact in this manifest is encrypted.
     */
    ENCRYPTED(): boolean;
    /**
     * Encryption algorithm, e.g. AES-256-GCM.
     */
    ALGORITHM(): string | null;
    ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content-key identifier.
     */
    CONTENT_KEY_ID(): string | null;
    CONTENT_KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Key epoch or rotation label.
     */
    KEY_EPOCH(): string | null;
    KEY_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Policy or listing identifier bound as AAD.
     */
    POLICY_ID(): string | null;
    POLICY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 hash of canonical encryption AAD, lowercase hex.
     */
    AAD_SHA256(): string | null;
    AAD_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDPMEncryptionBinding(builder: flatbuffers.Builder): void;
    static addEncrypted(builder: flatbuffers.Builder, ENCRYPTED: boolean): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset): void;
    static addContentKeyId(builder: flatbuffers.Builder, CONTENT_KEY_IDOffset: flatbuffers.Offset): void;
    static addKeyEpoch(builder: flatbuffers.Builder, KEY_EPOCHOffset: flatbuffers.Offset): void;
    static addPolicyId(builder: flatbuffers.Builder, POLICY_IDOffset: flatbuffers.Offset): void;
    static addAadSha256(builder: flatbuffers.Builder, AAD_SHA256Offset: flatbuffers.Offset): void;
    static endDPMEncryptionBinding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDPMEncryptionBinding(builder: flatbuffers.Builder, ENCRYPTED: boolean, ALGORITHMOffset: flatbuffers.Offset, CONTENT_KEY_IDOffset: flatbuffers.Offset, KEY_EPOCHOffset: flatbuffers.Offset, POLICY_IDOffset: flatbuffers.Offset, AAD_SHA256Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DPMEncryptionBindingT;
    unpackTo(_o: DPMEncryptionBindingT): void;
}
export declare class DPMEncryptionBindingT implements flatbuffers.IGeneratedObject {
    ENCRYPTED: boolean;
    ALGORITHM: string | Uint8Array | null;
    CONTENT_KEY_ID: string | Uint8Array | null;
    KEY_EPOCH: string | Uint8Array | null;
    POLICY_ID: string | Uint8Array | null;
    AAD_SHA256: string | Uint8Array | null;
    constructor(ENCRYPTED?: boolean, ALGORITHM?: string | Uint8Array | null, CONTENT_KEY_ID?: string | Uint8Array | null, KEY_EPOCH?: string | Uint8Array | null, POLICY_ID?: string | Uint8Array | null, AAD_SHA256?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DPMEncryptionBinding.d.ts.map