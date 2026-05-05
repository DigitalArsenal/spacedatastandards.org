import * as flatbuffers from 'flatbuffers';
import { EntryFunction, EntryFunctionT } from './EntryFunction.js';
import { FlatBufferTypeRef, FlatBufferTypeRefT } from './FlatBufferTypeRef.js';
import { PLGBuildArtifact, PLGBuildArtifactT } from './PLGBuildArtifact.js';
import { PLGHostCapability, PLGHostCapabilityT } from './PLGHostCapability.js';
import { PLGMethodManifest, PLGMethodManifestT } from './PLGMethodManifest.js';
import { PLGProtocolSpec, PLGProtocolSpecT } from './PLGProtocolSpec.js';
import { PLGTimerSpec, PLGTimerSpecT } from './PLGTimerSpec.js';
import { PluginCapability, PluginCapabilityT } from './PluginCapability.js';
import { PluginDependency, PluginDependencyT } from './PluginDependency.js';
import { invokeSurfaceKind } from './invokeSurfaceKind.js';
import { pluginCategory } from './pluginCategory.js';
import { publicationState } from './publicationState.js';
import { purchaseTier } from './purchaseTier.js';
/**
 * Plugin Manifest - canonical signed storefront and WASM distribution record
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
    PLUGIN_ID(): string;
    PLUGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable plugin name
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Plugin version (semver format)
     */
    VERSION(): string;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Detailed description of plugin functionality
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short marketing summary shown in storefront listings
     */
    TAGLINE(): string | null;
    TAGLINE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type/category of the plugin
     */
    PLUGIN_TYPE(): pluginCategory;
    /**
     * Human-readable publisher or organization name
     */
    PUBLISHER_NAME(): string | null;
    PUBLISHER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Publisher handle or username
     */
    PUBLISHER_HANDLE(): string | null;
    PUBLISHER_HANDLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Canonical publisher website
     */
    PUBLISHER_URL(): string | null;
    PUBLISHER_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Support or helpdesk URL for this plugin
     */
    SUPPORT_URL(): string | null;
    SUPPORT_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Search and categorization tags for discovery
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Short feature bullets highlighted in storefront listings
     */
    FEATURES(index: number): string;
    FEATURES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    featuresLength(): number;
    /**
     * Screenshot URLs showing the plugin in use
     */
    SCREENSHOT_URLS(index: number): string;
    SCREENSHOT_URLS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    screenshotUrlsLength(): number;
    /**
     * Optional hero/banner image URL for the listing
     */
    BANNER_URL(): string | null;
    BANNER_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * URL to plugin changelog or release notes
     */
    CHANGELOG_URL(): string | null;
    CHANGELOG_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * Commercial model used for storefront purchase flows
     */
    PAYMENT_MODEL(): purchaseTier;
    /**
     * Price in USD cents for one-time purchase or subscription period
     */
    PRICE_USD_CENTS(): number;
    /**
     * Subscription billing period length in days
     */
    SUBSCRIPTION_PERIOD_DAYS(): number;
    /**
     * Accepted payment methods, e.g. "stripe", "sol", "usdc"
     */
    ACCEPTED_PAYMENT_METHODS(index: number): string;
    ACCEPTED_PAYMENT_METHODS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    acceptedPaymentMethodsLength(): number;
    /**
     * Storefront publication state for this manifest version
     */
    LISTING_STATUS(): publicationState;
    /**
     * Ed25519 signature from provider over manifest
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    /**
     * Canonical invoke surfaces this artifact exposes. A single plugin
     * MAY list both DIRECT and COMMAND when it supports both.
     */
    INVOKE_SURFACES(index: number): invokeSurfaceKind | null;
    invokeSurfacesLength(): number;
    invokeSurfacesArray(): Uint8Array | null;
    /**
     * Rich per-method invoke manifests (port shape, drain semantics,
     * accepted wire formats). ENTRY_FUNCTIONS retains the slim
     * name+input_schemas+output_schema summary; METHODS carries the full
     * invoke-surface detail including aligned-binary advertisement.
     */
    METHODS(index: number, obj?: PLGMethodManifest): PLGMethodManifest | null;
    methodsLength(): number;
    /**
     * Enum-typed host capability dependencies (richer than CAPABILITIES,
     * which is string-tagged metadata).
     */
    HOST_CAPABILITIES(index: number, obj?: PLGHostCapability): PLGHostCapability | null;
    hostCapabilitiesLength(): number;
    /**
     * Timer declarations for scheduled invocations.
     */
    TIMERS(index: number, obj?: PLGTimerSpec): PLGTimerSpec | null;
    timersLength(): number;
    /**
     * Protocol handler declarations.
     */
    PROTOCOLS(index: number, obj?: PLGProtocolSpec): PLGProtocolSpec | null;
    protocolsLength(): number;
    /**
     * FlatBuffer schemas this plugin depends on at the invoke surface.
     */
    SCHEMAS_USED(index: number, obj?: FlatBufferTypeRef): FlatBufferTypeRef | null;
    schemasUsedLength(): number;
    /**
     * Build artifacts emitted by the toolchain (WASM, bindings, etc.).
     */
    BUILD_ARTIFACTS(index: number, obj?: PLGBuildArtifact): PLGBuildArtifact | null;
    buildArtifactsLength(): number;
    /**
     * Opaque runtime-target tags (e.g. "wasmtime", "wasmedge", "browser").
     */
    RUNTIME_TARGETS(index: number): string;
    RUNTIME_TARGETS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    runtimeTargetsLength(): number;
    static startPLG(builder: flatbuffers.Builder): void;
    static addPluginId(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addTagline(builder: flatbuffers.Builder, TAGLINEOffset: flatbuffers.Offset): void;
    static addPluginType(builder: flatbuffers.Builder, PLUGIN_TYPE: pluginCategory): void;
    static addPublisherName(builder: flatbuffers.Builder, PUBLISHER_NAMEOffset: flatbuffers.Offset): void;
    static addPublisherHandle(builder: flatbuffers.Builder, PUBLISHER_HANDLEOffset: flatbuffers.Offset): void;
    static addPublisherUrl(builder: flatbuffers.Builder, PUBLISHER_URLOffset: flatbuffers.Offset): void;
    static addSupportUrl(builder: flatbuffers.Builder, SUPPORT_URLOffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFeatures(builder: flatbuffers.Builder, FEATURESOffset: flatbuffers.Offset): void;
    static createFeaturesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFeaturesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScreenshotUrls(builder: flatbuffers.Builder, SCREENSHOT_URLSOffset: flatbuffers.Offset): void;
    static createScreenshotUrlsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startScreenshotUrlsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBannerUrl(builder: flatbuffers.Builder, BANNER_URLOffset: flatbuffers.Offset): void;
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
    static addChangelogUrl(builder: flatbuffers.Builder, CHANGELOG_URLOffset: flatbuffers.Offset): void;
    static addIconUrl(builder: flatbuffers.Builder, ICON_URLOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addPaymentModel(builder: flatbuffers.Builder, PAYMENT_MODEL: purchaseTier): void;
    static addPriceUsdCents(builder: flatbuffers.Builder, PRICE_USD_CENTS: number): void;
    static addSubscriptionPeriodDays(builder: flatbuffers.Builder, SUBSCRIPTION_PERIOD_DAYS: number): void;
    static addAcceptedPaymentMethods(builder: flatbuffers.Builder, ACCEPTED_PAYMENT_METHODSOffset: flatbuffers.Offset): void;
    static createAcceptedPaymentMethodsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAcceptedPaymentMethodsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addListingStatus(builder: flatbuffers.Builder, LISTING_STATUS: publicationState): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInvokeSurfaces(builder: flatbuffers.Builder, INVOKE_SURFACESOffset: flatbuffers.Offset): void;
    static createInvokeSurfacesVector(builder: flatbuffers.Builder, data: invokeSurfaceKind[]): flatbuffers.Offset;
    static startInvokeSurfacesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMethods(builder: flatbuffers.Builder, METHODSOffset: flatbuffers.Offset): void;
    static createMethodsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMethodsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHostCapabilities(builder: flatbuffers.Builder, HOST_CAPABILITIESOffset: flatbuffers.Offset): void;
    static createHostCapabilitiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHostCapabilitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimers(builder: flatbuffers.Builder, TIMERSOffset: flatbuffers.Offset): void;
    static createTimersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTimersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProtocols(builder: flatbuffers.Builder, PROTOCOLSOffset: flatbuffers.Offset): void;
    static createProtocolsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProtocolsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSchemasUsed(builder: flatbuffers.Builder, SCHEMAS_USEDOffset: flatbuffers.Offset): void;
    static createSchemasUsedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSchemasUsedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBuildArtifacts(builder: flatbuffers.Builder, BUILD_ARTIFACTSOffset: flatbuffers.Offset): void;
    static createBuildArtifactsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBuildArtifactsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRuntimeTargets(builder: flatbuffers.Builder, RUNTIME_TARGETSOffset: flatbuffers.Offset): void;
    static createRuntimeTargetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRuntimeTargetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPLG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPLGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPLGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPLG(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, TAGLINEOffset: flatbuffers.Offset, PLUGIN_TYPE: pluginCategory, PUBLISHER_NAMEOffset: flatbuffers.Offset, PUBLISHER_HANDLEOffset: flatbuffers.Offset, PUBLISHER_URLOffset: flatbuffers.Offset, SUPPORT_URLOffset: flatbuffers.Offset, TAGSOffset: flatbuffers.Offset, FEATURESOffset: flatbuffers.Offset, SCREENSHOT_URLSOffset: flatbuffers.Offset, BANNER_URLOffset: flatbuffers.Offset, ABI_VERSION: number, WASM_HASHOffset: flatbuffers.Offset, WASM_SIZE: bigint, WASM_CIDOffset: flatbuffers.Offset, ENCRYPTED_WASM_HASHOffset: flatbuffers.Offset, ENCRYPTED_WASM_SIZE: bigint, ENTRY_FUNCTIONSOffset: flatbuffers.Offset, REQUIRED_SCHEMASOffset: flatbuffers.Offset, DEPENDENCIESOffset: flatbuffers.Offset, CAPABILITIESOffset: flatbuffers.Offset, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_EPM_CIDOffset: flatbuffers.Offset, ENCRYPTED: boolean, REQUIRED_SCOPEOffset: flatbuffers.Offset, KEY_IDOffset: flatbuffers.Offset, ALLOWED_DOMAINSOffset: flatbuffers.Offset, MAX_GRANT_TIMEOUT_MS: bigint, MIN_PERMISSIONSOffset: flatbuffers.Offset, CREATED_AT: bigint, UPDATED_AT: bigint, DOCUMENTATION_URLOffset: flatbuffers.Offset, CHANGELOG_URLOffset: flatbuffers.Offset, ICON_URLOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, PAYMENT_MODEL: purchaseTier, PRICE_USD_CENTS: number, SUBSCRIPTION_PERIOD_DAYS: number, ACCEPTED_PAYMENT_METHODSOffset: flatbuffers.Offset, LISTING_STATUS: publicationState, SIGNATUREOffset: flatbuffers.Offset, INVOKE_SURFACESOffset: flatbuffers.Offset, METHODSOffset: flatbuffers.Offset, HOST_CAPABILITIESOffset: flatbuffers.Offset, TIMERSOffset: flatbuffers.Offset, PROTOCOLSOffset: flatbuffers.Offset, SCHEMAS_USEDOffset: flatbuffers.Offset, BUILD_ARTIFACTSOffset: flatbuffers.Offset, RUNTIME_TARGETSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGT;
    unpackTo(_o: PLGT): void;
}
export declare class PLGT implements flatbuffers.IGeneratedObject {
    PLUGIN_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    TAGLINE: string | Uint8Array | null;
    PLUGIN_TYPE: pluginCategory;
    PUBLISHER_NAME: string | Uint8Array | null;
    PUBLISHER_HANDLE: string | Uint8Array | null;
    PUBLISHER_URL: string | Uint8Array | null;
    SUPPORT_URL: string | Uint8Array | null;
    TAGS: (string)[];
    FEATURES: (string)[];
    SCREENSHOT_URLS: (string)[];
    BANNER_URL: string | Uint8Array | null;
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
    CHANGELOG_URL: string | Uint8Array | null;
    ICON_URL: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    PAYMENT_MODEL: purchaseTier;
    PRICE_USD_CENTS: number;
    SUBSCRIPTION_PERIOD_DAYS: number;
    ACCEPTED_PAYMENT_METHODS: (string)[];
    LISTING_STATUS: publicationState;
    SIGNATURE: (number)[];
    INVOKE_SURFACES: (invokeSurfaceKind)[];
    METHODS: (PLGMethodManifestT)[];
    HOST_CAPABILITIES: (PLGHostCapabilityT)[];
    TIMERS: (PLGTimerSpecT)[];
    PROTOCOLS: (PLGProtocolSpecT)[];
    SCHEMAS_USED: (FlatBufferTypeRefT)[];
    BUILD_ARTIFACTS: (PLGBuildArtifactT)[];
    RUNTIME_TARGETS: (string)[];
    constructor(PLUGIN_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, TAGLINE?: string | Uint8Array | null, PLUGIN_TYPE?: pluginCategory, PUBLISHER_NAME?: string | Uint8Array | null, PUBLISHER_HANDLE?: string | Uint8Array | null, PUBLISHER_URL?: string | Uint8Array | null, SUPPORT_URL?: string | Uint8Array | null, TAGS?: (string)[], FEATURES?: (string)[], SCREENSHOT_URLS?: (string)[], BANNER_URL?: string | Uint8Array | null, ABI_VERSION?: number, WASM_HASH?: (number)[], WASM_SIZE?: bigint, WASM_CID?: string | Uint8Array | null, ENCRYPTED_WASM_HASH?: (number)[], ENCRYPTED_WASM_SIZE?: bigint, ENTRY_FUNCTIONS?: (EntryFunctionT)[], REQUIRED_SCHEMAS?: (string)[], DEPENDENCIES?: (PluginDependencyT)[], CAPABILITIES?: (PluginCapabilityT)[], PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_EPM_CID?: string | Uint8Array | null, ENCRYPTED?: boolean, REQUIRED_SCOPE?: string | Uint8Array | null, KEY_ID?: string | Uint8Array | null, ALLOWED_DOMAINS?: (string)[], MAX_GRANT_TIMEOUT_MS?: bigint, MIN_PERMISSIONS?: (string)[], CREATED_AT?: bigint, UPDATED_AT?: bigint, DOCUMENTATION_URL?: string | Uint8Array | null, CHANGELOG_URL?: string | Uint8Array | null, ICON_URL?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, PAYMENT_MODEL?: purchaseTier, PRICE_USD_CENTS?: number, SUBSCRIPTION_PERIOD_DAYS?: number, ACCEPTED_PAYMENT_METHODS?: (string)[], LISTING_STATUS?: publicationState, SIGNATURE?: (number)[], INVOKE_SURFACES?: (invokeSurfaceKind)[], METHODS?: (PLGMethodManifestT)[], HOST_CAPABILITIES?: (PLGHostCapabilityT)[], TIMERS?: (PLGTimerSpecT)[], PROTOCOLS?: (PLGProtocolSpecT)[], SCHEMAS_USED?: (FlatBufferTypeRefT)[], BUILD_ARTIFACTS?: (PLGBuildArtifactT)[], RUNTIME_TARGETS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLG.d.ts.map