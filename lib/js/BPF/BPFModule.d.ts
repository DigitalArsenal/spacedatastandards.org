import * as flatbuffers from 'flatbuffers';
import { PLG, PLGT } from './PLG.js';
import { bpfProtectionTier } from './bpfProtectionTier.js';
/**
 * One module selected into the build and the tier its payload is protected
 * at.
 */
export declare class BPFModule implements flatbuffers.IUnpackableObject<BPFModuleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BPFModule;
    static getRootAsBPFModule(bb: flatbuffers.ByteBuffer, obj?: BPFModule): BPFModule;
    static getSizePrefixedRootAsBPFModule(bb: flatbuffers.ByteBuffer, obj?: BPFModule): BPFModule;
    /**
     * Canonical module identifier. Required, unique within the profile.
     */
    MODULE_ID(): string;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Module version or version range.
     */
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the module is embedded in the produced artifact.
     */
    INCLUDED(): boolean;
    /**
     * Protection tier applied to this module's payload.
     */
    PROTECTION(): bpfProtectionTier;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the module's
     * portable (pre-AOT, publication-trailer-stripped) bytes. This is the
     * identity a capability or signature policy keys on.
     */
    CONTENT_HASH(): string | null;
    CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Published module descriptor, carried when the authoring context holds
     * it. Advisory: `MODULE_ID` and `CONTENT_HASH` are the identity, and a
     * consumer MUST NOT prefer a carried descriptor over the module's own
     * published manifest.
     */
    MODULE_DESCRIPTOR(obj?: PLG): PLG | null;
    static startBPFModule(builder: flatbuffers.Builder): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addIncluded(builder: flatbuffers.Builder, INCLUDED: boolean): void;
    static addProtection(builder: flatbuffers.Builder, PROTECTION: bpfProtectionTier): void;
    static addContentHash(builder: flatbuffers.Builder, CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addModuleDescriptor(builder: flatbuffers.Builder, MODULE_DESCRIPTOROffset: flatbuffers.Offset): void;
    static endBPFModule(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BPFModuleT;
    unpackTo(_o: BPFModuleT): void;
}
export declare class BPFModuleT implements flatbuffers.IGeneratedObject {
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    INCLUDED: boolean;
    PROTECTION: bpfProtectionTier;
    CONTENT_HASH: string | Uint8Array | null;
    MODULE_DESCRIPTOR: PLGT | null;
    constructor(MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, INCLUDED?: boolean, PROTECTION?: bpfProtectionTier, CONTENT_HASH?: string | Uint8Array | null, MODULE_DESCRIPTOR?: PLGT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BPFModule.d.ts.map