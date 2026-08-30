import * as flatbuffers from 'flatbuffers';
import { BPFAttestation, BPFAttestationT } from './BPFAttestation.js';
import { BPFModule, BPFModuleT } from './BPFModule.js';
import { BPFPart, BPFPartT } from './BPFPart.js';
import { BPFRuntimeLock, BPFRuntimeLockT } from './BPFRuntimeLock.js';
import { bpfLicenseMode } from './bpfLicenseMode.js';
/**
 * Build Profile — one saved, portable build configuration.
 *
 * PORTABILITY. The export unit is a `$REC` collection carrying this record
 * and, optionally, an `$APP` manifest that names it through an `APPDataRef`
 * with `SDS_TYPE: "BPF"`. The `$APP` wrapper is launcher metadata and
 * carries no authority; all authority over a profile lives in
 * `ATTESTATION`. A bare size-prefixed `$BPF` buffer is also a complete,
 * valid export.
 */
export declare class BPF implements flatbuffers.IUnpackableObject<BPFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BPF;
    static getRootAsBPF(bb: flatbuffers.ByteBuffer, obj?: BPF): BPF;
    static getSizePrefixedRootAsBPF(bb: flatbuffers.ByteBuffer, obj?: BPF): BPF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable profile identity, unique per author. Required.
     */
    PROFILE_ID(): string;
    PROFILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name of the profile. Required.
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable summary.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * when the profile was created.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * when the profile was last updated.
     */
    UPDATED_AT(): string | null;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the build
     * template this profile was authored against. Required: a profile that
     * does not say which template it configures cannot be validated against
     * one. A consumer holding a different template MAY still import the
     * profile but MUST mark it as authored against another template and MUST
     * NOT silently re-map its parts.
     */
    TEMPLATE_SHA256(): string;
    TEMPLATE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Template slots and their inclusion decisions. A slot the template
     * exposes and this vector omits is NOT included.
     */
    PARTS(index: number, obj?: BPFPart): BPFPart | null;
    partsLength(): number;
    /**
     * Modules selected into the build and their protection tiers.
     */
    MODULES(index: number, obj?: BPFModule): BPFModule | null;
    modulesLength(): number;
    /**
     * The runtime restriction the produced artifact enforces. Required, so
     * that an unlocked build is a stated configuration rather than a missing
     * one.
     */
    RUNTIME_LOCK(obj?: BPFRuntimeLock): BPFRuntimeLock | null;
    /**
     * Distribution-control mode of the produced artifact.
     */
    LICENSE_MODE(): bpfLicenseMode;
    /**
     * Publisher attestation. Absent means the profile is unsigned; see
     * `BPFAttestation` for the fail-closed rule when it is present.
     */
    ATTESTATION(obj?: BPFAttestation): BPFAttestation | null;
    static startBPF(builder: flatbuffers.Builder): void;
    static addProfileId(builder: flatbuffers.Builder, PROFILE_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addTemplateSha256(builder: flatbuffers.Builder, TEMPLATE_SHA256Offset: flatbuffers.Offset): void;
    static addParts(builder: flatbuffers.Builder, PARTSOffset: flatbuffers.Offset): void;
    static createPartsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPartsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addModules(builder: flatbuffers.Builder, MODULESOffset: flatbuffers.Offset): void;
    static createModulesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startModulesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRuntimeLock(builder: flatbuffers.Builder, RUNTIME_LOCKOffset: flatbuffers.Offset): void;
    static addLicenseMode(builder: flatbuffers.Builder, LICENSE_MODE: bpfLicenseMode): void;
    static addAttestation(builder: flatbuffers.Builder, ATTESTATIONOffset: flatbuffers.Offset): void;
    static endBPF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBPFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBPFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): BPFT;
    unpackTo(_o: BPFT): void;
}
export declare class BPFT implements flatbuffers.IGeneratedObject {
    PROFILE_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    CREATED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    TEMPLATE_SHA256: string | Uint8Array | null;
    PARTS: (BPFPartT)[];
    MODULES: (BPFModuleT)[];
    RUNTIME_LOCK: BPFRuntimeLockT | null;
    LICENSE_MODE: bpfLicenseMode;
    ATTESTATION: BPFAttestationT | null;
    constructor(PROFILE_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, CREATED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, TEMPLATE_SHA256?: string | Uint8Array | null, PARTS?: (BPFPartT)[], MODULES?: (BPFModuleT)[], RUNTIME_LOCK?: BPFRuntimeLockT | null, LICENSE_MODE?: bpfLicenseMode, ATTESTATION?: BPFAttestationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BPF.d.ts.map