import * as flatbuffers from 'flatbuffers';
/**
 * The runtime restriction the produced artifact enforces on itself.
 *
 * AUTHORIZATION. A host is authorized when it equals an `ALLOWED_DOMAINS`
 * entry, OR ends with an `ALLOWED_TLDS` entry, OR equals a `DEV_DOMAINS`
 * entry. Suffix rules are DOT-ANCHORED: `.mil` admits `x.mil` and `a.b.mil`
 * and admits neither `mil` nor `evilmil`; a suffix rule never matches a
 * host that merely contains it (`x.mil.example` is refused).
 *
 * UNLOCKED IS EXPLICIT. `ALLOWED_DOMAINS` empty AND `ALLOWED_TLDS` empty
 * means every host is authorized. This is a stated, allowed configuration,
 * which is why this table is required on `BPF`: an absent lock is never
 * read as an unlocked one.
 *
 * EXPIRY IS INDEPENDENT of authorization: an unlocked profile still
 * expires. There is deliberately no stored expiry instant — expiry is
 * `COMPILED_AT_MS + TTL_DAYS * 86400000` and a second, storable copy of it
 * could disagree with the two values that produce it.
 */
export declare class BPFRuntimeLock implements flatbuffers.IUnpackableObject<BPFRuntimeLockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BPFRuntimeLock;
    static getRootAsBPFRuntimeLock(bb: flatbuffers.ByteBuffer, obj?: BPFRuntimeLock): BPFRuntimeLock;
    static getSizePrefixedRootAsBPFRuntimeLock(bb: flatbuffers.ByteBuffer, obj?: BPFRuntimeLock): BPFRuntimeLock;
    /**
     * Exact hostnames authorized to run the produced artifact. Empty
     * together with `ALLOWED_TLDS` means unrestricted.
     */
    ALLOWED_DOMAINS(index: number): string;
    ALLOWED_DOMAINS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    allowedDomainsLength(): number;
    /**
     * Dot-anchored hostname suffix rules, each written with its leading dot,
     * for example `.gov`. Empty together with `ALLOWED_DOMAINS` means
     * unrestricted.
     */
    ALLOWED_TLDS(index: number): string;
    ALLOWED_TLDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    allowedTldsLength(): number;
    /**
     * Development hosts authorized in addition to the rules above, so a
     * locked profile remains runnable in a development context. Kept
     * separate from `ALLOWED_DOMAINS` because a development exemption and a
     * deployment authorization are different facts: folded together, a
     * development host would be indistinguishable from a deployment grant
     * and would silently persist into a locked artifact.
     */
    DEV_DOMAINS(index: number): string;
    DEV_DOMAINS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    devDomainsLength(): number;
    /**
     * Lifetime of the produced artifact in days from `COMPILED_AT_MS`.
     * Normative range 1 through 365 inclusive; 180 when unstated. A value of
     * 0 or above 365 is invalid and MUST be rejected, never clamped.
     */
    TTL_DAYS(): number;
    /**
     * Milliseconds since the Unix epoch at which the artifact was composed.
     * 0 means the profile has not been used to compose an artifact yet and
     * carries no expiry; the composing step stamps it.
     */
    COMPILED_AT_MS(): bigint;
    static startBPFRuntimeLock(builder: flatbuffers.Builder): void;
    static addAllowedDomains(builder: flatbuffers.Builder, ALLOWED_DOMAINSOffset: flatbuffers.Offset): void;
    static createAllowedDomainsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAllowedDomainsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAllowedTlds(builder: flatbuffers.Builder, ALLOWED_TLDSOffset: flatbuffers.Offset): void;
    static createAllowedTldsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAllowedTldsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDevDomains(builder: flatbuffers.Builder, DEV_DOMAINSOffset: flatbuffers.Offset): void;
    static createDevDomainsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDevDomainsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTtlDays(builder: flatbuffers.Builder, TTL_DAYS: number): void;
    static addCompiledAtMs(builder: flatbuffers.Builder, COMPILED_AT_MS: bigint): void;
    static endBPFRuntimeLock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBPFRuntimeLock(builder: flatbuffers.Builder, ALLOWED_DOMAINSOffset: flatbuffers.Offset, ALLOWED_TLDSOffset: flatbuffers.Offset, DEV_DOMAINSOffset: flatbuffers.Offset, TTL_DAYS: number, COMPILED_AT_MS: bigint): flatbuffers.Offset;
    unpack(): BPFRuntimeLockT;
    unpackTo(_o: BPFRuntimeLockT): void;
}
export declare class BPFRuntimeLockT implements flatbuffers.IGeneratedObject {
    ALLOWED_DOMAINS: (string)[];
    ALLOWED_TLDS: (string)[];
    DEV_DOMAINS: (string)[];
    TTL_DAYS: number;
    COMPILED_AT_MS: bigint;
    constructor(ALLOWED_DOMAINS?: (string)[], ALLOWED_TLDS?: (string)[], DEV_DOMAINS?: (string)[], TTL_DAYS?: number, COMPILED_AT_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BPFRuntimeLock.d.ts.map