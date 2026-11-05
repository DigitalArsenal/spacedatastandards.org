import * as flatbuffers from 'flatbuffers';
/**
 * One covariance-producing build whose covariance realism was verified. A
 * collision probability uses AP covariance only when the covariance's PVN
 * names a listed build.
 */
export declare class CQRVerifiedCovarianceProducer implements flatbuffers.IUnpackableObject<CQRVerifiedCovarianceProducerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRVerifiedCovarianceProducer;
    static getRootAsCQRVerifiedCovarianceProducer(bb: flatbuffers.ByteBuffer, obj?: CQRVerifiedCovarianceProducer): CQRVerifiedCovarianceProducer;
    static getSizePrefixedRootAsCQRVerifiedCovarianceProducer(bb: flatbuffers.ByteBuffer, obj?: CQRVerifiedCovarianceProducer): CQRVerifiedCovarianceProducer;
    /**
     * PVN.PRODUCER verbatim: the module identifier and its version.
     */
    PRODUCER(): string;
    PRODUCER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * SHA-256 of the producing build's dist module.wasm, 64 lowercase
     * hexadecimal characters (PVN.PRODUCER_SHA256).
     */
    PRODUCER_SHA256(): string;
    PRODUCER_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identifier of the record whose covariance realism E2E verified the build.
     */
    VERIFICATION_REFERENCE(): string | null;
    VERIFICATION_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCQRVerifiedCovarianceProducer(builder: flatbuffers.Builder): void;
    static addProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset): void;
    static addProducerSha256(builder: flatbuffers.Builder, PRODUCER_SHA256Offset: flatbuffers.Offset): void;
    static addVerificationReference(builder: flatbuffers.Builder, VERIFICATION_REFERENCEOffset: flatbuffers.Offset): void;
    static endCQRVerifiedCovarianceProducer(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRVerifiedCovarianceProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset, PRODUCER_SHA256Offset: flatbuffers.Offset, VERIFICATION_REFERENCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CQRVerifiedCovarianceProducerT;
    unpackTo(_o: CQRVerifiedCovarianceProducerT): void;
}
export declare class CQRVerifiedCovarianceProducerT implements flatbuffers.IGeneratedObject {
    PRODUCER: string | Uint8Array | null;
    PRODUCER_SHA256: string | Uint8Array | null;
    VERIFICATION_REFERENCE: string | Uint8Array | null;
    constructor(PRODUCER?: string | Uint8Array | null, PRODUCER_SHA256?: string | Uint8Array | null, VERIFICATION_REFERENCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRVerifiedCovarianceProducer.d.ts.map