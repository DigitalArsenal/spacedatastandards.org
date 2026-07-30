import * as flatbuffers from 'flatbuffers';
import { pluginCategory } from './pluginCategory.js';
import { pmmAccessPolicy } from './pmmAccessPolicy.js';
import { pmmEntryState } from './pmmEntryState.js';
import { pmmTrustTier } from './pmmTrustTier.js';
/**
 * One module the provider offers.
 */
export declare class PMMModuleEntry implements flatbuffers.IUnpackableObject<PMMModuleEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PMMModuleEntry;
    static getRootAsPMMModuleEntry(bb: flatbuffers.ByteBuffer, obj?: PMMModuleEntry): PMMModuleEntry;
    static getSizePrefixedRootAsPMMModuleEntry(bb: flatbuffers.ByteBuffer, obj?: PMMModuleEntry): PMMModuleEntry;
    /**
     * Reverse-DNS module identity, e.g. "com.orbpro.sgp4-propagator". Stable
     * across versions. Required and unique within the manifest.
     */
    MODULE_ID(): string;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * `$PLG.PLUGIN_ID` of the full listing for this module, when one is
     * published.
     */
    PLUGIN_ID(): string | null;
    PLUGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CID of that `$PLG` record.
     */
    PLG_CID(): string | null;
    PLG_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable summary.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SemVer 2.0.0 version of the offered artifact.
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Monotonic publication counter for this MODULE_ID. Increases on every
     * re-publication, including a rebuild at the same VERSION.
     */
    EPOCH(): bigint;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the module's
     * portable (pre-AOT, publication-trailer-stripped) WASM bytes. Identical
     * in meaning to `$APP.APPModuleRef.CONTENT_HASH`: this is the identity
     * capability and signature policies key on.
     */
    CONTENT_HASH(): string | null;
    CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Size of those portable WASM bytes.
     */
    ARTIFACT_SIZE_BYTES(): bigint;
    /**
     * Path, relative to the provider origin, from which the artifact is
     * fetched. Relative on purpose: the bytes must come from the same origin
     * whose domain the DNS proof binds.
     */
    ARTIFACT_PATH(): string | null;
    ARTIFACT_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CID of the artifact, for content-addressed retrieval.
     */
    ARTIFACT_CID(): string | null;
    ARTIFACT_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detached signature by the key in `PMMTrustAnchor.SIGNING_PUBLIC_KEY`
     * over the 32 raw bytes of `CONTENT_HASH`. Lets a client reject an entry
     * before spending a byte of bandwidth. The artifact's own publication
     * trailer remains authoritative after download.
     */
    ARTIFACT_SIGNATURE(index: number): number | null;
    artifactSignatureLength(): number;
    artifactSignatureArray(): Uint8Array | null;
    /**
     * Provider-declared standing. Gates anonymous loading.
     */
    TRUST_TIER(): pmmTrustTier;
    /**
     * True when the provider ships this module enabled by default. A recorded
     * user choice overrides it permanently.
     */
    DEFAULT_ENABLED(): boolean;
    /**
     * What the client must hold to fetch and run it.
     */
    ACCESS_POLICY(): pmmAccessPolicy;
    /**
     * Entry lifecycle.
     */
    ENTRY_STATE(): pmmEntryState;
    /**
     * Opaque runtime-target tags this artifact is built for, e.g. "browser",
     * "wasmedge". Same vocabulary as `$PLG.RUNTIME_TARGETS`.
     */
    RUNTIME_TARGETS(index: number): string;
    RUNTIME_TARGETS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    runtimeTargetsLength(): number;
    /**
     * SDS schema codes at this module's invoke surface, e.g. "OMM", "OEM".
     */
    REQUIRED_SCHEMAS(index: number): string;
    REQUIRED_SCHEMAS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    requiredSchemasLength(): number;
    /**
     * Minimum host permissions the module needs, same vocabulary as
     * `$PLG.MIN_PERMISSIONS`. Surfaced so a client can show what an
     * anonymously-loaded CORE module is allowed to do.
     */
    MIN_PERMISSIONS(index: number): string;
    MIN_PERMISSIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    minPermissionsLength(): number;
    /**
     * SPDX license identifier of the module.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL to the module's documentation.
     */
    DOCUMENTATION_URL(): string | null;
    DOCUMENTATION_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL to the module's icon.
     */
    ICON_URL(): string | null;
    ICON_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `CONTENT_HASH` this entry replaces, when it supersedes an earlier build.
     */
    SUPERSEDES_CONTENT_HASH(): string | null;
    SUPERSEDES_CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) of
     * the last change to this entry.
     */
    UPDATED_AT(): string | null;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Family this module belongs to. Mirrors `$PLG.PLUGIN_TYPE` verbatim and
     * is the ONLY sanctioned way to group an offering: a client grouping a
     * catalogue MUST read this field and MUST NOT infer family from the shape
     * of `MODULE_ID`, which carries no normative structure. Defaults to
     * `Unspecified`, which a client MUST render as ungrouped — never silently
     * as `Sensor`. Present here, rather than only on
     * the linked `$PLG`, so an anonymous client can section the catalogue at
     * boot without fetching one `$PLG` per module.
     */
    PLUGIN_TYPE(): pluginCategory;
    static startPMMModuleEntry(builder: flatbuffers.Builder): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addPluginId(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset): void;
    static addPlgCid(builder: flatbuffers.Builder, PLG_CIDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: bigint): void;
    static addContentHash(builder: flatbuffers.Builder, CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addArtifactSizeBytes(builder: flatbuffers.Builder, ARTIFACT_SIZE_BYTES: bigint): void;
    static addArtifactPath(builder: flatbuffers.Builder, ARTIFACT_PATHOffset: flatbuffers.Offset): void;
    static addArtifactCid(builder: flatbuffers.Builder, ARTIFACT_CIDOffset: flatbuffers.Offset): void;
    static addArtifactSignature(builder: flatbuffers.Builder, ARTIFACT_SIGNATUREOffset: flatbuffers.Offset): void;
    static createArtifactSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startArtifactSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrustTier(builder: flatbuffers.Builder, TRUST_TIER: pmmTrustTier): void;
    static addDefaultEnabled(builder: flatbuffers.Builder, DEFAULT_ENABLED: boolean): void;
    static addAccessPolicy(builder: flatbuffers.Builder, ACCESS_POLICY: pmmAccessPolicy): void;
    static addEntryState(builder: flatbuffers.Builder, ENTRY_STATE: pmmEntryState): void;
    static addRuntimeTargets(builder: flatbuffers.Builder, RUNTIME_TARGETSOffset: flatbuffers.Offset): void;
    static createRuntimeTargetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRuntimeTargetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRequiredSchemas(builder: flatbuffers.Builder, REQUIRED_SCHEMASOffset: flatbuffers.Offset): void;
    static createRequiredSchemasVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRequiredSchemasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMinPermissions(builder: flatbuffers.Builder, MIN_PERMISSIONSOffset: flatbuffers.Offset): void;
    static createMinPermissionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMinPermissionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addDocumentationUrl(builder: flatbuffers.Builder, DOCUMENTATION_URLOffset: flatbuffers.Offset): void;
    static addIconUrl(builder: flatbuffers.Builder, ICON_URLOffset: flatbuffers.Offset): void;
    static addSupersedesContentHash(builder: flatbuffers.Builder, SUPERSEDES_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addPluginType(builder: flatbuffers.Builder, PLUGIN_TYPE: pluginCategory): void;
    static endPMMModuleEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPMMModuleEntry(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset, PLUGIN_IDOffset: flatbuffers.Offset, PLG_CIDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, EPOCH: bigint, CONTENT_HASHOffset: flatbuffers.Offset, ARTIFACT_SIZE_BYTES: bigint, ARTIFACT_PATHOffset: flatbuffers.Offset, ARTIFACT_CIDOffset: flatbuffers.Offset, ARTIFACT_SIGNATUREOffset: flatbuffers.Offset, TRUST_TIER: pmmTrustTier, DEFAULT_ENABLED: boolean, ACCESS_POLICY: pmmAccessPolicy, ENTRY_STATE: pmmEntryState, RUNTIME_TARGETSOffset: flatbuffers.Offset, REQUIRED_SCHEMASOffset: flatbuffers.Offset, MIN_PERMISSIONSOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, DOCUMENTATION_URLOffset: flatbuffers.Offset, ICON_URLOffset: flatbuffers.Offset, SUPERSEDES_CONTENT_HASHOffset: flatbuffers.Offset, UPDATED_ATOffset: flatbuffers.Offset, PLUGIN_TYPE: pluginCategory): flatbuffers.Offset;
    unpack(): PMMModuleEntryT;
    unpackTo(_o: PMMModuleEntryT): void;
}
export declare class PMMModuleEntryT implements flatbuffers.IGeneratedObject {
    MODULE_ID: string | Uint8Array | null;
    PLUGIN_ID: string | Uint8Array | null;
    PLG_CID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    EPOCH: bigint;
    CONTENT_HASH: string | Uint8Array | null;
    ARTIFACT_SIZE_BYTES: bigint;
    ARTIFACT_PATH: string | Uint8Array | null;
    ARTIFACT_CID: string | Uint8Array | null;
    ARTIFACT_SIGNATURE: (number)[];
    TRUST_TIER: pmmTrustTier;
    DEFAULT_ENABLED: boolean;
    ACCESS_POLICY: pmmAccessPolicy;
    ENTRY_STATE: pmmEntryState;
    RUNTIME_TARGETS: (string)[];
    REQUIRED_SCHEMAS: (string)[];
    MIN_PERMISSIONS: (string)[];
    LICENSE: string | Uint8Array | null;
    DOCUMENTATION_URL: string | Uint8Array | null;
    ICON_URL: string | Uint8Array | null;
    SUPERSEDES_CONTENT_HASH: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    PLUGIN_TYPE: pluginCategory;
    constructor(MODULE_ID?: string | Uint8Array | null, PLUGIN_ID?: string | Uint8Array | null, PLG_CID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, EPOCH?: bigint, CONTENT_HASH?: string | Uint8Array | null, ARTIFACT_SIZE_BYTES?: bigint, ARTIFACT_PATH?: string | Uint8Array | null, ARTIFACT_CID?: string | Uint8Array | null, ARTIFACT_SIGNATURE?: (number)[], TRUST_TIER?: pmmTrustTier, DEFAULT_ENABLED?: boolean, ACCESS_POLICY?: pmmAccessPolicy, ENTRY_STATE?: pmmEntryState, RUNTIME_TARGETS?: (string)[], REQUIRED_SCHEMAS?: (string)[], MIN_PERMISSIONS?: (string)[], LICENSE?: string | Uint8Array | null, DOCUMENTATION_URL?: string | Uint8Array | null, ICON_URL?: string | Uint8Array | null, SUPERSEDES_CONTENT_HASH?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, PLUGIN_TYPE?: pluginCategory);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PMMModuleEntry.d.ts.map