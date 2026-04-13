import * as flatbuffers from 'flatbuffers';
import { EntryFunction, EntryFunctionT } from './EntryFunction.js';
import { PluginCapability, PluginCapabilityT } from './PluginCapability.js';
import { PluginDependency, PluginDependencyT } from './PluginDependency.js';
import { pluginType } from './pluginType.js';
/**
 * Plugin Manifest - WASM plugin distribution
 */
export declare class PLG implements flatbuffers.IUnpackableObject<PLGT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLG;
    static getRootAsPLG(bb: flatbuffers.ByteBuffer, obj?: PLG): PLG;
    static getSizePrefixedRootAsPLG(bb: flatbuffers.ByteBuffer, obj?: PLG): PLG;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier for the plugin
     */
    PLUGIN_ID(): string | null;
    PLUGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable plugin name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Plugin version (semver format)
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detailed description of plugin functionality
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type/category of the plugin
     */
    PLUGIN_TYPE(): pluginType;
    /**
     * ABI version for compatibility checking
     */
    ABI_VERSION(): number;
    /**
     * SHA256 hash of the decrypted WASM binary
     */
    WASM_HASH(index: number): number | null;
    wasmHashLength(): number;
    wasmHashArray(): Uint8Array | null;
    /**
     * Size of decrypted WASM binary in bytes
     */
    WASM_SIZE(): bigint;
    /**
     * IPFS CID of the encrypted WASM binary
     */
    WASM_CID(): string | null;
    WASM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA256 hash of the encrypted delivery artifact bytes
     */
    ENCRYPTED_WASM_HASH(index: number): number | null;
    encryptedWasmHashLength(): number;
    encryptedWasmHashArray(): Uint8Array | null;
    /**
     * Size of the encrypted delivery artifact in bytes
     */
    ENCRYPTED_WASM_SIZE(): bigint;
    /**
     * Entry point functions exported by the plugin
     */
    ENTRY_FUNCTIONS(index: number, obj?: EntryFunction): EntryFunction | null;
    entryFunctionsLength(): number;
    /**
     * FlatBuffer schemas required by this plugin
     */
    REQUIRED_SCHEMAS(index: number): string;
    REQUIRED_SCHEMAS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    requiredSchemasLength(): number;
    /**
     * Other plugins this depends on
     */
    DEPENDENCIES(index: number, obj?: PluginDependency): PluginDependency | null;
    dependenciesLength(): number;
    /**
     * Capabilities provided by this plugin
     */
    CAPABILITIES(index: number, obj?: PluginCapability): PluginCapability | null;
    capabilitiesLength(): number;
    /**
     * Peer ID of the plugin provider
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CID of provider's EPM (Entity Profile Message)
     */
    PROVIDER_EPM_CID(): string | null;
    PROVIDER_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether the WASM binary is encrypted
     */
    ENCRYPTED(): boolean;
    /**
     * Canonical required scope for grant issuance
     */
    REQUIRED_SCOPE(): string | null;
    REQUIRED_SCOPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider-local identifier for the module content key
     */
    KEY_ID(): string | null;
    KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Allowed requester domains for module grants
     */
    ALLOWED_DOMAINS(index: number): string;
    ALLOWED_DOMAINS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    allowedDomainsLength(): number;
    /**
     * Maximum grant timeout allowed for this module publication
     */
    MAX_GRANT_TIMEOUT_MS(): bigint;
    /**
     * Minimum permissions required to run
     */
    MIN_PERMISSIONS(index: number): string;
    MIN_PERMISSIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    minPermissionsLength(): number;
    /**
     * Unix timestamp when plugin was created
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp when plugin was last updated
     */
    UPDATED_AT(): bigint;
    /**
     * URL to plugin documentation
     */
    DOCUMENTATION_URL(): string | null;
    DOCUMENTATION_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL to plugin icon/logo
     */
    ICON_URL(): string | null;
    ICON_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * License identifier (SPDX format)
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature from provider over manifest
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startPLG(builder: flatbuffers.Builder): void;
    static addPluginId(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addPluginType(builder: flatbuffers.Builder, PLUGIN_TYPE: pluginType): void;
    static addAbiVersion(builder: flatbuffers.Builder, ABI_VERSION: number): void;
    static addWasmHash(builder: flatbuffers.Builder, WASM_HASHOffset: flatbuffers.Offset): void;
    static createWasmHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWasmHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWasmSize(builder: flatbuffers.Builder, WASM_SIZE: bigint): void;
    static addWasmCid(builder: flatbuffers.Builder, WASM_CIDOffset: flatbuffers.Offset): void;
    static addEncryptedWasmHash(builder: flatbuffers.Builder, ENCRYPTED_WASM_HASHOffset: flatbuffers.Offset): void;
    static createEncryptedWasmHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEncryptedWasmHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEncryptedWasmSize(builder: flatbuffers.Builder, ENCRYPTED_WASM_SIZE: bigint): void;
    static addEntryFunctions(builder: flatbuffers.Builder, ENTRY_FUNCTIONSOffset: flatbuffers.Offset): void;
    static createEntryFunctionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEntryFunctionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRequiredSchemas(builder: flatbuffers.Builder, REQUIRED_SCHEMASOffset: flatbuffers.Offset): void;
    static createRequiredSchemasVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRequiredSchemasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDependencies(builder: flatbuffers.Builder, DEPENDENCIESOffset: flatbuffers.Offset): void;
    static createDependenciesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDependenciesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCapabilities(builder: flatbuffers.Builder, CAPABILITIESOffset: flatbuffers.Offset): void;
    static createCapabilitiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCapabilitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderEpmCid(builder: flatbuffers.Builder, PROVIDER_EPM_CIDOffset: flatbuffers.Offset): void;
    static addEncrypted(builder: flatbuffers.Builder, ENCRYPTED: boolean): void;
    static addRequiredScope(builder: flatbuffers.Builder, REQUIRED_SCOPEOffset: flatbuffers.Offset): void;
    static addKeyId(builder: flatbuffers.Builder, KEY_IDOffset: flatbuffers.Offset): void;
    static addAllowedDomains(builder: flatbuffers.Builder, ALLOWED_DOMAINSOffset: flatbuffers.Offset): void;
    static createAllowedDomainsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAllowedDomainsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxGrantTimeoutMs(builder: flatbuffers.Builder, MAX_GRANT_TIMEOUT_MS: bigint): void;
    static addMinPermissions(builder: flatbuffers.Builder, MIN_PERMISSIONSOffset: flatbuffers.Offset): void;
    static createMinPermissionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMinPermissionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addDocumentationUrl(builder: flatbuffers.Builder, DOCUMENTATION_URLOffset: flatbuffers.Offset): void;
    static addIconUrl(builder: flatbuffers.Builder, ICON_URLOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPLG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPLGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPLGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPLG(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, PLUGIN_TYPE: pluginType, ABI_VERSION: number, WASM_HASHOffset: flatbuffers.Offset, WASM_SIZE: bigint, WASM_CIDOffset: flatbuffers.Offset, ENCRYPTED_WASM_HASHOffset: flatbuffers.Offset, ENCRYPTED_WASM_SIZE: bigint, ENTRY_FUNCTIONSOffset: flatbuffers.Offset, REQUIRED_SCHEMASOffset: flatbuffers.Offset, DEPENDENCIESOffset: flatbuffers.Offset, CAPABILITIESOffset: flatbuffers.Offset, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_EPM_CIDOffset: flatbuffers.Offset, ENCRYPTED: boolean, REQUIRED_SCOPEOffset: flatbuffers.Offset, KEY_IDOffset: flatbuffers.Offset, ALLOWED_DOMAINSOffset: flatbuffers.Offset, MAX_GRANT_TIMEOUT_MS: bigint, MIN_PERMISSIONSOffset: flatbuffers.Offset, CREATED_AT: bigint, UPDATED_AT: bigint, DOCUMENTATION_URLOffset: flatbuffers.Offset, ICON_URLOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGT;
    unpackTo(_o: PLGT): void;
}
export declare class PLGT implements flatbuffers.IGeneratedObject {
    PLUGIN_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    PLUGIN_TYPE: pluginType;
    ABI_VERSION: number;
    WASM_HASH: (number)[];
    WASM_SIZE: bigint;
    WASM_CID: string | Uint8Array | null;
    ENCRYPTED_WASM_HASH: (number)[];
    ENCRYPTED_WASM_SIZE: bigint;
    ENTRY_FUNCTIONS: (EntryFunctionT)[];
    REQUIRED_SCHEMAS: (string)[];
    DEPENDENCIES: (PluginDependencyT)[];
    CAPABILITIES: (PluginCapabilityT)[];
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_EPM_CID: string | Uint8Array | null;
    ENCRYPTED: boolean;
    REQUIRED_SCOPE: string | Uint8Array | null;
    KEY_ID: string | Uint8Array | null;
    ALLOWED_DOMAINS: (string)[];
    MAX_GRANT_TIMEOUT_MS: bigint;
    MIN_PERMISSIONS: (string)[];
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    DOCUMENTATION_URL: string | Uint8Array | null;
    ICON_URL: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(PLUGIN_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, PLUGIN_TYPE?: pluginType, ABI_VERSION?: number, WASM_HASH?: (number)[], WASM_SIZE?: bigint, WASM_CID?: string | Uint8Array | null, ENCRYPTED_WASM_HASH?: (number)[], ENCRYPTED_WASM_SIZE?: bigint, ENTRY_FUNCTIONS?: (EntryFunctionT)[], REQUIRED_SCHEMAS?: (string)[], DEPENDENCIES?: (PluginDependencyT)[], CAPABILITIES?: (PluginCapabilityT)[], PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_EPM_CID?: string | Uint8Array | null, ENCRYPTED?: boolean, REQUIRED_SCOPE?: string | Uint8Array | null, KEY_ID?: string | Uint8Array | null, ALLOWED_DOMAINS?: (string)[], MAX_GRANT_TIMEOUT_MS?: bigint, MIN_PERMISSIONS?: (string)[], CREATED_AT?: bigint, UPDATED_AT?: bigint, DOCUMENTATION_URL?: string | Uint8Array | null, ICON_URL?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLG.d.ts.map