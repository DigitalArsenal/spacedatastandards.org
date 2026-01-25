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
     * Size of WASM binary in bytes
     */
    WASM_SIZE(): bigint;
    /**
     * IPFS CID of the encrypted WASM binary
     */
    WASM_CID(): string | null;
    WASM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static createPLG(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, PLUGIN_TYPE: pluginType, ABI_VERSION: number, WASM_HASHOffset: flatbuffers.Offset, WASM_SIZE: bigint, WASM_CIDOffset: flatbuffers.Offset, ENTRY_FUNCTIONSOffset: flatbuffers.Offset, REQUIRED_SCHEMASOffset: flatbuffers.Offset, DEPENDENCIESOffset: flatbuffers.Offset, CAPABILITIESOffset: flatbuffers.Offset, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_EPM_CIDOffset: flatbuffers.Offset, ENCRYPTED: boolean, MIN_PERMISSIONSOffset: flatbuffers.Offset, CREATED_AT: bigint, UPDATED_AT: bigint, DOCUMENTATION_URLOffset: flatbuffers.Offset, ICON_URLOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
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
    ENTRY_FUNCTIONS: (EntryFunctionT)[];
    REQUIRED_SCHEMAS: (string)[];
    DEPENDENCIES: (PluginDependencyT)[];
    CAPABILITIES: (PluginCapabilityT)[];
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_EPM_CID: string | Uint8Array | null;
    ENCRYPTED: boolean;
    MIN_PERMISSIONS: (string)[];
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    DOCUMENTATION_URL: string | Uint8Array | null;
    ICON_URL: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(PLUGIN_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, PLUGIN_TYPE?: pluginType, ABI_VERSION?: number, WASM_HASH?: (number)[], WASM_SIZE?: bigint, WASM_CID?: string | Uint8Array | null, ENTRY_FUNCTIONS?: (EntryFunctionT)[], REQUIRED_SCHEMAS?: (string)[], DEPENDENCIES?: (PluginDependencyT)[], CAPABILITIES?: (PluginCapabilityT)[], PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_EPM_CID?: string | Uint8Array | null, ENCRYPTED?: boolean, MIN_PERMISSIONS?: (string)[], CREATED_AT?: bigint, UPDATED_AT?: bigint, DOCUMENTATION_URL?: string | Uint8Array | null, ICON_URL?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLG.d.ts.map