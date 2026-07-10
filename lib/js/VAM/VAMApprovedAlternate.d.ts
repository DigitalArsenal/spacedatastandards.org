import * as flatbuffers from 'flatbuffers';
import { VAMTransform, VAMTransformT } from './VAMTransform.js';
/**
 * Exact approved alternate asset bytes and reviewed state.
 */
export declare class VAMApprovedAlternate implements flatbuffers.IUnpackableObject<VAMApprovedAlternateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMApprovedAlternate;
    static getRootAsVAMApprovedAlternate(bb: flatbuffers.ByteBuffer, obj?: VAMApprovedAlternate): VAMApprovedAlternate;
    static getSizePrefixedRootAsVAMApprovedAlternate(bb: flatbuffers.ByteBuffer, obj?: VAMApprovedAlternate): VAMApprovedAlternate;
    VARIANT_ID(): string;
    VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Nonempty CIDv1 identifying the exact approved alternate bytes.
     */
    CID(): string;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * SHA-256 of the exact approved alternate bytes as 64 lowercase hexadecimal characters.
     */
    BYTE_SHA256(): string;
    BYTE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    REVIEWED_TRANSFORM(obj?: VAMTransform): VAMTransform | null;
    RANK(): number;
    static startVAMApprovedAlternate(builder: flatbuffers.Builder): void;
    static addVariantId(builder: flatbuffers.Builder, VARIANT_IDOffset: flatbuffers.Offset): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addByteSha256(builder: flatbuffers.Builder, BYTE_SHA256Offset: flatbuffers.Offset): void;
    static addReviewedTransform(builder: flatbuffers.Builder, REVIEWED_TRANSFORMOffset: flatbuffers.Offset): void;
    static addRank(builder: flatbuffers.Builder, RANK: number): void;
    static endVAMApprovedAlternate(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): VAMApprovedAlternateT;
    unpackTo(_o: VAMApprovedAlternateT): void;
}
export declare class VAMApprovedAlternateT implements flatbuffers.IGeneratedObject {
    VARIANT_ID: string | Uint8Array | null;
    CID: string | Uint8Array | null;
    BYTE_SHA256: string | Uint8Array | null;
    REVIEWED_TRANSFORM: VAMTransformT | null;
    RANK: number;
    constructor(VARIANT_ID?: string | Uint8Array | null, CID?: string | Uint8Array | null, BYTE_SHA256?: string | Uint8Array | null, REVIEWED_TRANSFORM?: VAMTransformT | null, RANK?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMApprovedAlternate.d.ts.map