import * as flatbuffers from 'flatbuffers';
import { bpfPartKind } from './bpfPartKind.js';
/**
 * One variable part of the build template and whether this profile embeds
 * it.
 */
export declare class BPFPart implements flatbuffers.IUnpackableObject<BPFPartT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BPFPart;
    static getRootAsBPFPart(bb: flatbuffers.ByteBuffer, obj?: BPFPart): BPFPart;
    static getSizePrefixedRootAsBPFPart(bb: flatbuffers.ByteBuffer, obj?: BPFPart): BPFPart;
    /**
     * Template slot identifier this entry configures, as published by the
     * template's part manifest. Required, unique within the profile.
     */
    PART_ID(): string;
    PART_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Capability class of the part.
     */
    KIND(): bpfPartKind;
    /**
     * True when the part is embedded in the produced artifact.
     */
    INCLUDED(): boolean;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the part's
     * bytes as published by the template, so a composed artifact can be
     * verified against the profile that produced it.
     */
    CONTENT_SHA256(): string | null;
    CONTENT_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Size of the part's bytes in octets, as published by the template.
     */
    BYTE_LENGTH(): bigint;
    /**
     * Human-readable summary.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startBPFPart(builder: flatbuffers.Builder): void;
    static addPartId(builder: flatbuffers.Builder, PART_IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: bpfPartKind): void;
    static addIncluded(builder: flatbuffers.Builder, INCLUDED: boolean): void;
    static addContentSha256(builder: flatbuffers.Builder, CONTENT_SHA256Offset: flatbuffers.Offset): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endBPFPart(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBPFPart(builder: flatbuffers.Builder, PART_IDOffset: flatbuffers.Offset, KIND: bpfPartKind, INCLUDED: boolean, CONTENT_SHA256Offset: flatbuffers.Offset, BYTE_LENGTH: bigint, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BPFPartT;
    unpackTo(_o: BPFPartT): void;
}
export declare class BPFPartT implements flatbuffers.IGeneratedObject {
    PART_ID: string | Uint8Array | null;
    KIND: bpfPartKind;
    INCLUDED: boolean;
    CONTENT_SHA256: string | Uint8Array | null;
    BYTE_LENGTH: bigint;
    DESCRIPTION: string | Uint8Array | null;
    constructor(PART_ID?: string | Uint8Array | null, KIND?: bpfPartKind, INCLUDED?: boolean, CONTENT_SHA256?: string | Uint8Array | null, BYTE_LENGTH?: bigint, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BPFPart.d.ts.map