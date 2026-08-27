import * as flatbuffers from 'flatbuffers';
import { vcfLineEnding } from './vcfLineEnding.js';
/**
 * Everything needed to decide whether this card is servable, and whether two
 * implementations produced the same bytes.
 */
export declare class VCFConformance implements flatbuffers.IUnpackableObject<VCFConformanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCFConformance;
    static getRootAsVCFConformance(bb: flatbuffers.ByteBuffer, obj?: VCFConformance): VCFConformance;
    static getSizePrefixedRootAsVCFConformance(bb: flatbuffers.ByteBuffer, obj?: VCFConformance): VCFConformance;
    /**
     * Card format version token verbatim as emitted, e.g. `3.0`.
     */
    VERSION(): string;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identifier of the emission profile the card conforms to, verbatim, naming
     * the annex revision the publisher implemented.
     */
    PROFILE(): string | null;
    PROFILE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Line terminator the card text uses.
     */
    LINE_ENDING(): vcfLineEnding;
    /**
     * Octet width beyond which a content line is folded onto continuation lines.
     * 0 means the publisher folded nothing, which is non-canonical.
     */
    FOLD_OCTET_WIDTH(): number;
    /**
     * Octet length of `CARD` exactly as emitted, folding and terminators
     * included. This is the number a serving surface budgets against.
     */
    BYTE_LENGTH(): number;
    /**
     * Octet length the same card would have with folding removed. Carried so a
     * folding disagreement is detectable without unfolding the text.
     */
    UNFOLDED_BYTE_LENGTH(): number;
    /**
     * Octet ceiling of the surface this card was produced for. 0 means the
     * publisher states no ceiling; it never means a ceiling of zero.
     */
    BYTE_BUDGET(): number;
    /**
     * Whether BYTE_LENGTH is within BYTE_BUDGET. False with a non-zero budget
     * means the card is a valid record that is NOT servable on that surface.
     */
    WITHIN_BYTE_BUDGET(): boolean;
    /**
     * SHA-256 of `CARD` as 64 lowercase hexadecimal characters. This is the
     * value two implementations compare to prove byte-identical projection.
     */
    CARD_SHA256(): string | null;
    CARD_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of property rows emitted, unfolded. Carried so a truncated card is
     * detectable before parsing.
     */
    PROPERTY_COUNT(): number;
    /**
     * Whether the card carries a complete verification chain: a signing-key row,
     * an encryption-key row, and a profile-signature row, all present in the
     * UNFOLDED text. A card without all three cannot verify its own subject and
     * is not servable as an identity card.
     */
    CARRIES_VERIFICATION_CHAIN(): boolean;
    static startVCFConformance(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addProfile(builder: flatbuffers.Builder, PROFILEOffset: flatbuffers.Offset): void;
    static addLineEnding(builder: flatbuffers.Builder, LINE_ENDING: vcfLineEnding): void;
    static addFoldOctetWidth(builder: flatbuffers.Builder, FOLD_OCTET_WIDTH: number): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: number): void;
    static addUnfoldedByteLength(builder: flatbuffers.Builder, UNFOLDED_BYTE_LENGTH: number): void;
    static addByteBudget(builder: flatbuffers.Builder, BYTE_BUDGET: number): void;
    static addWithinByteBudget(builder: flatbuffers.Builder, WITHIN_BYTE_BUDGET: boolean): void;
    static addCardSha256(builder: flatbuffers.Builder, CARD_SHA256Offset: flatbuffers.Offset): void;
    static addPropertyCount(builder: flatbuffers.Builder, PROPERTY_COUNT: number): void;
    static addCarriesVerificationChain(builder: flatbuffers.Builder, CARRIES_VERIFICATION_CHAIN: boolean): void;
    static endVCFConformance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCFConformance(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset, PROFILEOffset: flatbuffers.Offset, LINE_ENDING: vcfLineEnding, FOLD_OCTET_WIDTH: number, BYTE_LENGTH: number, UNFOLDED_BYTE_LENGTH: number, BYTE_BUDGET: number, WITHIN_BYTE_BUDGET: boolean, CARD_SHA256Offset: flatbuffers.Offset, PROPERTY_COUNT: number, CARRIES_VERIFICATION_CHAIN: boolean): flatbuffers.Offset;
    unpack(): VCFConformanceT;
    unpackTo(_o: VCFConformanceT): void;
}
export declare class VCFConformanceT implements flatbuffers.IGeneratedObject {
    VERSION: string | Uint8Array | null;
    PROFILE: string | Uint8Array | null;
    LINE_ENDING: vcfLineEnding;
    FOLD_OCTET_WIDTH: number;
    BYTE_LENGTH: number;
    UNFOLDED_BYTE_LENGTH: number;
    BYTE_BUDGET: number;
    WITHIN_BYTE_BUDGET: boolean;
    CARD_SHA256: string | Uint8Array | null;
    PROPERTY_COUNT: number;
    CARRIES_VERIFICATION_CHAIN: boolean;
    constructor(VERSION?: string | Uint8Array | null, PROFILE?: string | Uint8Array | null, LINE_ENDING?: vcfLineEnding, FOLD_OCTET_WIDTH?: number, BYTE_LENGTH?: number, UNFOLDED_BYTE_LENGTH?: number, BYTE_BUDGET?: number, WITHIN_BYTE_BUDGET?: boolean, CARD_SHA256?: string | Uint8Array | null, PROPERTY_COUNT?: number, CARRIES_VERIFICATION_CHAIN?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCFConformance.d.ts.map