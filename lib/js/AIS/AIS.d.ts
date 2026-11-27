import * as flatbuffers from 'flatbuffers';
import { AISHeader, AISHeaderT } from './AISHeader.js';
import { AISMessage, AISMessageT } from './AISMessage.js';
import { AISToolCall, AISToolCallT } from './AISToolCall.js';
import { aisEventKind } from './aisEventKind.js';
import { aisEventStatus } from './aisEventStatus.js';
/**
 * AI Session Event record
 */
export declare class AIS implements flatbuffers.IUnpackableObject<AIST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AIS;
    static getRootAsAIS(bb: flatbuffers.ByteBuffer, obj?: AIS): AIS;
    static getSizePrefixedRootAsAIS(bb: flatbuffers.ByteBuffer, obj?: AIS): AIS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Globally unique event identifier (UUIDv4/ULID).
     */
    EVENT_ID(): string;
    EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Stable session identifier grouping all events in one AI conversation.
     */
    SESSION_ID(): string;
    SESSION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identifier correlating one user query with its model turns, tools, and answer.
     */
    REQUEST_ID(): string | null;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Monotonic 0-based sequence number within SESSION_ID.
     */
    SEQUENCE_NO(): number;
    /**
     * 0-based model loop turn index within REQUEST_ID.
     */
    TURN_INDEX(): number;
    /**
     * Lifecycle event kind.
     */
    EVENT_KIND(): aisEventKind;
    /**
     * Server-stamped RFC 3339 UTC timestamp when received by the SDN collector.
     */
    RECEIVED_UTC(): string | null;
    RECEIVED_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Server-stamped Unix epoch milliseconds when received by the SDN collector.
     */
    RECEIVED_UNIX_MS(): bigint;
    /**
     * Client-observed RFC 3339 UTC timestamp when the event occurred.
     */
    CLIENT_UTC(): string | null;
    CLIENT_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Client-observed Unix epoch milliseconds when the event occurred.
     */
    CLIENT_UNIX_MS(): bigint;
    /**
     * Authoritative client IP extracted server-side from edge headers or socket remote.
     */
    CLIENT_IP(): string | null;
    CLIENT_IP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unsalted lowercase hex SHA-256 hash of the normalized CLIENT_IP used as a
     * deterministic grouping key (not an anonymization barrier for IPv4).
     */
    CLIENT_IP_HASH(): string | null;
    CLIENT_IP_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Raw TCP remote ip:port observed by the SDN HTTP listener.
     */
    REMOTE_ADDR(): string | null;
    REMOTE_ADDR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Raw X-Forwarded-For chain observed by the SDN HTTP listener.
     */
    X_FORWARDED_FOR(): string | null;
    X_FORWARDED_FOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cloudflare CF-Ray edge trace identifier.
     */
    CF_RAY(): string | null;
    CF_RAY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cloudflare CF-IPCountry ISO-3166-1 alpha-2 country code.
     */
    CF_COUNTRY(): string | null;
    CF_COUNTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cloudflare edge region or subdivision code.
     */
    CF_REGION(): string | null;
    CF_REGION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cloudflare edge city name.
     */
    CF_CITY(): string | null;
    CF_CITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Edge-reported Autonomous System Number verbatim (e.g. "AS7922" or numeric ASN).
     */
    CF_ASN(): string | null;
    CF_ASN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Edge-reported TLS protocol version.
     */
    CF_TLS_VERSION(): string | null;
    CF_TLS_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Server-observed HTTP Origin header.
     */
    HTTP_ORIGIN(): string | null;
    HTTP_ORIGIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Server-observed HTTP Referer header (query string stripped by collector).
     */
    HTTP_REFERER(): string | null;
    HTTP_REFERER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Server-observed HTTP User-Agent header.
     */
    HTTP_USER_AGENT(): string | null;
    HTTP_USER_AGENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Server-observed HTTP Accept-Language header.
     */
    HTTP_ACCEPT_LANGUAGE(): string | null;
    HTTP_ACCEPT_LANGUAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Server-observed Sec-CH-UA client hint header.
     */
    SEC_CH_UA(): string | null;
    SEC_CH_UA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Server-observed Sec-CH-UA-Platform client hint header.
     */
    SEC_CH_UA_PLATFORM(): string | null;
    SEC_CH_UA_PLATFORM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Server-observed Sec-CH-UA-Mobile client hint header.
     */
    SEC_CH_UA_MOBILE(): string | null;
    SEC_CH_UA_MOBILE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the requester had an active signed-in SDN session at event time.
     */
    SDN_SIGNED_IN(): boolean;
    /**
     * Public identity scheme (e.g. hd-wallet, ed25519, secp256k1, external-wallet).
     */
    SDN_IDENTITY_SCHEME(): string | null;
    SDN_IDENTITY_SCHEME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sign-in method metadata (e.g. wallet-passkey, wallet-mnemonic, external-eip1193).
     */
    SDN_SIGN_IN_METHOD(): string | null;
    SDN_SIGN_IN_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requester public key in lowercase hex (never private key material).
     */
    SDN_PUBLIC_KEY_HEX(): string | null;
    SDN_PUBLIC_KEY_HEX(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requester public key identifier, fingerprint, or libp2p peer ID.
     */
    SDN_KEY_ID(): string | null;
    SDN_KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Non-secret BIP-32/SLIP-10 derivation path metadata when present.
     */
    SDN_DERIVATION_PATH(): string | null;
    SDN_DERIVATION_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Connected external wallet public address when present.
     */
    EXTERNAL_WALLET_ADDRESS(): string | null;
    EXTERNAL_WALLET_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Connected external wallet provider name (e.g. MetaMask, Phantom).
     */
    EXTERNAL_WALLET_NAME(): string | null;
    EXTERNAL_WALLET_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Connected external wallet chain identifier (e.g. eip155:1).
     */
    EXTERNAL_WALLET_CHAIN(): string | null;
    EXTERNAL_WALLET_CHAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Composite lowercase hex SHA-256 browser fingerprint hash.
     */
    FINGERPRINT_HASH(): string | null;
    FINGERPRINT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Persistent first-party browser installation UUID across sessions.
     */
    INSTALL_ID(): string | null;
    INSTALL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sanitized client page URL/route at event time.
     */
    PAGE_URL(): string | null;
    PAGE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Client application name (e.g. SpaceAware).
     */
    APP_NAME(): string | null;
    APP_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Client application build version or revision.
     */
    APP_VERSION(): string | null;
    APP_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Browser navigator platform string.
     */
    PLATFORM(): string | null;
    PLATFORM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IANA timezone name from Intl.DateTimeFormat.
     */
    TIMEZONE(): string | null;
    TIMEZONE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * UTC offset in minutes from Date.prototype.getTimezoneOffset() (meaningful when FINGERPRINT_HASH is set).
     */
    TZ_OFFSET_MIN(): number;
    /**
     * Comma-separated navigator.languages list.
     */
    LANGUAGES(): string | null;
    LANGUAGES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Physical display width in CSS pixels (screen.width).
     */
    SCREEN_WIDTH(): number;
    /**
     * Physical display height in CSS pixels (screen.height).
     */
    SCREEN_HEIGHT(): number;
    /**
     * Browser viewport width in CSS pixels (window.innerWidth).
     */
    VIEWPORT_WIDTH(): number;
    /**
     * Browser viewport height in CSS pixels (window.innerHeight).
     */
    VIEWPORT_HEIGHT(): number;
    /**
     * Display color depth in bits (screen.colorDepth).
     */
    COLOR_DEPTH(): number;
    /**
     * Device pixel ratio (window.devicePixelRatio).
     */
    DEVICE_PIXEL_RATIO(): number;
    /**
     * Logical CPU thread count (navigator.hardwareConcurrency).
     */
    HARDWARE_CONCURRENCY(): number;
    /**
     * Approximate device memory in GiB (navigator.deviceMemory, 0 if unavailable).
     */
    DEVICE_MEMORY_GB(): number;
    /**
     * Maximum simultaneous touch points (navigator.maxTouchPoints).
     */
    MAX_TOUCH_POINTS(): number;
    /**
     * WebGL unmasked vendor string.
     */
    WEBGL_VENDOR(): string | null;
    WEBGL_VENDOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * WebGL unmasked renderer string.
     */
    WEBGL_RENDERER(): string | null;
    WEBGL_RENDERER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lowercase hex SHA-256 hash of deterministic 2D canvas fingerprint.
     */
    CANVAS_HASH(): string | null;
    CANVAS_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lowercase hex SHA-256 hash of deterministic audio context fingerprint.
     */
    AUDIO_HASH(): string | null;
    AUDIO_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lowercase hex SHA-256 hash of deterministic browser font-metrics probe.
     */
    FONT_HASH(): string | null;
    FONT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when browser reports navigator.cookieEnabled (meaningful when FINGERPRINT_HASH is set).
     */
    COOKIES_ENABLED(): boolean;
    /**
     * Browser navigator.doNotTrack value verbatim.
     */
    DO_NOT_TRACK(): string | null;
    DO_NOT_TRACK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when browser reports navigator.webdriver (meaningful when FINGERPRINT_HASH is set).
     */
    WEBDRIVER(): boolean;
    /**
     * True when browser localStorage was writable at probe time (meaningful when FINGERPRINT_HASH is set).
     */
    LOCAL_STORAGE_WRITABLE(): boolean;
    /**
     * Configured AI provider identifier (e.g. spaceaware-proxy, anthropic, openai).
     */
    MODEL_PROVIDER(): string | null;
    MODEL_PROVIDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Model identifier used for this request or turn.
     */
    MODEL_ID(): string | null;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * User prompt or query text submitted to the AI.
     */
    PROMPT_TEXT(): string | null;
    PROMPT_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Assistant answer or turn output text.
     */
    ANSWER_TEXT(): string | null;
    ANSWER_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Concise summary or card title produced for the answer.
     */
    SUMMARY_TEXT(): string | null;
    SUMMARY_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Execution outcome status.
     */
    STATUS(): aisEventStatus;
    /**
     * Machine-readable error code when STATUS indicates failure.
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable error message when STATUS indicates failure.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Prompt/input token count reported by the provider.
     */
    INPUT_TOKENS(): number;
    /**
     * Completion/output token count reported by the provider.
     */
    OUTPUT_TOKENS(): number;
    /**
     * Total token count reported by the provider.
     */
    TOTAL_TOKENS(): number;
    /**
     * Provider-reported or estimated request cost in USD (0 when unreported).
     */
    COST_USD(): number;
    /**
     * Elapsed execution latency in milliseconds.
     */
    LATENCY_MS(): number;
    /**
     * Number of tool calls executed in this turn or request.
     */
    TOOL_CALL_COUNT(): number;
    /**
     * Server-stamped SDN collector node peer ID or hostname.
     */
    COLLECTOR_NODE_ID(): string | null;
    COLLECTOR_NODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Structured conversation messages captured with this event.
     */
    MESSAGES(index: number, obj?: AISMessage): AISMessage | null;
    messagesLength(): number;
    /**
     * Structured tool invocations and results captured with this event.
     */
    TOOL_CALLS(index: number, obj?: AISToolCall): AISToolCall | null;
    toolCallsLength(): number;
    /**
     * Non-credential HTTP headers observed by the collecting SDN node.
     */
    EDGE_HEADERS(index: number, obj?: AISHeader): AISHeader | null;
    edgeHeadersLength(): number;
    static startAIS(builder: flatbuffers.Builder): void;
    static addEventId(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset): void;
    static addSessionId(builder: flatbuffers.Builder, SESSION_IDOffset: flatbuffers.Offset): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addSequenceNo(builder: flatbuffers.Builder, SEQUENCE_NO: number): void;
    static addTurnIndex(builder: flatbuffers.Builder, TURN_INDEX: number): void;
    static addEventKind(builder: flatbuffers.Builder, EVENT_KIND: aisEventKind): void;
    static addReceivedUtc(builder: flatbuffers.Builder, RECEIVED_UTCOffset: flatbuffers.Offset): void;
    static addReceivedUnixMs(builder: flatbuffers.Builder, RECEIVED_UNIX_MS: bigint): void;
    static addClientUtc(builder: flatbuffers.Builder, CLIENT_UTCOffset: flatbuffers.Offset): void;
    static addClientUnixMs(builder: flatbuffers.Builder, CLIENT_UNIX_MS: bigint): void;
    static addClientIp(builder: flatbuffers.Builder, CLIENT_IPOffset: flatbuffers.Offset): void;
    static addClientIpHash(builder: flatbuffers.Builder, CLIENT_IP_HASHOffset: flatbuffers.Offset): void;
    static addRemoteAddr(builder: flatbuffers.Builder, REMOTE_ADDROffset: flatbuffers.Offset): void;
    static addXForwardedFor(builder: flatbuffers.Builder, X_FORWARDED_FOROffset: flatbuffers.Offset): void;
    static addCfRay(builder: flatbuffers.Builder, CF_RAYOffset: flatbuffers.Offset): void;
    static addCfCountry(builder: flatbuffers.Builder, CF_COUNTRYOffset: flatbuffers.Offset): void;
    static addCfRegion(builder: flatbuffers.Builder, CF_REGIONOffset: flatbuffers.Offset): void;
    static addCfCity(builder: flatbuffers.Builder, CF_CITYOffset: flatbuffers.Offset): void;
    static addCfAsn(builder: flatbuffers.Builder, CF_ASNOffset: flatbuffers.Offset): void;
    static addCfTlsVersion(builder: flatbuffers.Builder, CF_TLS_VERSIONOffset: flatbuffers.Offset): void;
    static addHttpOrigin(builder: flatbuffers.Builder, HTTP_ORIGINOffset: flatbuffers.Offset): void;
    static addHttpReferer(builder: flatbuffers.Builder, HTTP_REFEREROffset: flatbuffers.Offset): void;
    static addHttpUserAgent(builder: flatbuffers.Builder, HTTP_USER_AGENTOffset: flatbuffers.Offset): void;
    static addHttpAcceptLanguage(builder: flatbuffers.Builder, HTTP_ACCEPT_LANGUAGEOffset: flatbuffers.Offset): void;
    static addSecChUa(builder: flatbuffers.Builder, SEC_CH_UAOffset: flatbuffers.Offset): void;
    static addSecChUaPlatform(builder: flatbuffers.Builder, SEC_CH_UA_PLATFORMOffset: flatbuffers.Offset): void;
    static addSecChUaMobile(builder: flatbuffers.Builder, SEC_CH_UA_MOBILEOffset: flatbuffers.Offset): void;
    static addSdnSignedIn(builder: flatbuffers.Builder, SDN_SIGNED_IN: boolean): void;
    static addSdnIdentityScheme(builder: flatbuffers.Builder, SDN_IDENTITY_SCHEMEOffset: flatbuffers.Offset): void;
    static addSdnSignInMethod(builder: flatbuffers.Builder, SDN_SIGN_IN_METHODOffset: flatbuffers.Offset): void;
    static addSdnPublicKeyHex(builder: flatbuffers.Builder, SDN_PUBLIC_KEY_HEXOffset: flatbuffers.Offset): void;
    static addSdnKeyId(builder: flatbuffers.Builder, SDN_KEY_IDOffset: flatbuffers.Offset): void;
    static addSdnDerivationPath(builder: flatbuffers.Builder, SDN_DERIVATION_PATHOffset: flatbuffers.Offset): void;
    static addExternalWalletAddress(builder: flatbuffers.Builder, EXTERNAL_WALLET_ADDRESSOffset: flatbuffers.Offset): void;
    static addExternalWalletName(builder: flatbuffers.Builder, EXTERNAL_WALLET_NAMEOffset: flatbuffers.Offset): void;
    static addExternalWalletChain(builder: flatbuffers.Builder, EXTERNAL_WALLET_CHAINOffset: flatbuffers.Offset): void;
    static addFingerprintHash(builder: flatbuffers.Builder, FINGERPRINT_HASHOffset: flatbuffers.Offset): void;
    static addInstallId(builder: flatbuffers.Builder, INSTALL_IDOffset: flatbuffers.Offset): void;
    static addPageUrl(builder: flatbuffers.Builder, PAGE_URLOffset: flatbuffers.Offset): void;
    static addAppName(builder: flatbuffers.Builder, APP_NAMEOffset: flatbuffers.Offset): void;
    static addAppVersion(builder: flatbuffers.Builder, APP_VERSIONOffset: flatbuffers.Offset): void;
    static addPlatform(builder: flatbuffers.Builder, PLATFORMOffset: flatbuffers.Offset): void;
    static addTimezone(builder: flatbuffers.Builder, TIMEZONEOffset: flatbuffers.Offset): void;
    static addTzOffsetMin(builder: flatbuffers.Builder, TZ_OFFSET_MIN: number): void;
    static addLanguages(builder: flatbuffers.Builder, LANGUAGESOffset: flatbuffers.Offset): void;
    static addScreenWidth(builder: flatbuffers.Builder, SCREEN_WIDTH: number): void;
    static addScreenHeight(builder: flatbuffers.Builder, SCREEN_HEIGHT: number): void;
    static addViewportWidth(builder: flatbuffers.Builder, VIEWPORT_WIDTH: number): void;
    static addViewportHeight(builder: flatbuffers.Builder, VIEWPORT_HEIGHT: number): void;
    static addColorDepth(builder: flatbuffers.Builder, COLOR_DEPTH: number): void;
    static addDevicePixelRatio(builder: flatbuffers.Builder, DEVICE_PIXEL_RATIO: number): void;
    static addHardwareConcurrency(builder: flatbuffers.Builder, HARDWARE_CONCURRENCY: number): void;
    static addDeviceMemoryGb(builder: flatbuffers.Builder, DEVICE_MEMORY_GB: number): void;
    static addMaxTouchPoints(builder: flatbuffers.Builder, MAX_TOUCH_POINTS: number): void;
    static addWebglVendor(builder: flatbuffers.Builder, WEBGL_VENDOROffset: flatbuffers.Offset): void;
    static addWebglRenderer(builder: flatbuffers.Builder, WEBGL_RENDEREROffset: flatbuffers.Offset): void;
    static addCanvasHash(builder: flatbuffers.Builder, CANVAS_HASHOffset: flatbuffers.Offset): void;
    static addAudioHash(builder: flatbuffers.Builder, AUDIO_HASHOffset: flatbuffers.Offset): void;
    static addFontHash(builder: flatbuffers.Builder, FONT_HASHOffset: flatbuffers.Offset): void;
    static addCookiesEnabled(builder: flatbuffers.Builder, COOKIES_ENABLED: boolean): void;
    static addDoNotTrack(builder: flatbuffers.Builder, DO_NOT_TRACKOffset: flatbuffers.Offset): void;
    static addWebdriver(builder: flatbuffers.Builder, WEBDRIVER: boolean): void;
    static addLocalStorageWritable(builder: flatbuffers.Builder, LOCAL_STORAGE_WRITABLE: boolean): void;
    static addModelProvider(builder: flatbuffers.Builder, MODEL_PROVIDEROffset: flatbuffers.Offset): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addPromptText(builder: flatbuffers.Builder, PROMPT_TEXTOffset: flatbuffers.Offset): void;
    static addAnswerText(builder: flatbuffers.Builder, ANSWER_TEXTOffset: flatbuffers.Offset): void;
    static addSummaryText(builder: flatbuffers.Builder, SUMMARY_TEXTOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: aisEventStatus): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addInputTokens(builder: flatbuffers.Builder, INPUT_TOKENS: number): void;
    static addOutputTokens(builder: flatbuffers.Builder, OUTPUT_TOKENS: number): void;
    static addTotalTokens(builder: flatbuffers.Builder, TOTAL_TOKENS: number): void;
    static addCostUsd(builder: flatbuffers.Builder, COST_USD: number): void;
    static addLatencyMs(builder: flatbuffers.Builder, LATENCY_MS: number): void;
    static addToolCallCount(builder: flatbuffers.Builder, TOOL_CALL_COUNT: number): void;
    static addCollectorNodeId(builder: flatbuffers.Builder, COLLECTOR_NODE_IDOffset: flatbuffers.Offset): void;
    static addMessages(builder: flatbuffers.Builder, MESSAGESOffset: flatbuffers.Offset): void;
    static createMessagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMessagesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addToolCalls(builder: flatbuffers.Builder, TOOL_CALLSOffset: flatbuffers.Offset): void;
    static createToolCallsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startToolCallsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEdgeHeaders(builder: flatbuffers.Builder, EDGE_HEADERSOffset: flatbuffers.Offset): void;
    static createEdgeHeadersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEdgeHeadersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAIS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAISBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAISBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createAIS(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset, SESSION_IDOffset: flatbuffers.Offset, REQUEST_IDOffset: flatbuffers.Offset, SEQUENCE_NO: number, TURN_INDEX: number, EVENT_KIND: aisEventKind, RECEIVED_UTCOffset: flatbuffers.Offset, RECEIVED_UNIX_MS: bigint, CLIENT_UTCOffset: flatbuffers.Offset, CLIENT_UNIX_MS: bigint, CLIENT_IPOffset: flatbuffers.Offset, CLIENT_IP_HASHOffset: flatbuffers.Offset, REMOTE_ADDROffset: flatbuffers.Offset, X_FORWARDED_FOROffset: flatbuffers.Offset, CF_RAYOffset: flatbuffers.Offset, CF_COUNTRYOffset: flatbuffers.Offset, CF_REGIONOffset: flatbuffers.Offset, CF_CITYOffset: flatbuffers.Offset, CF_ASNOffset: flatbuffers.Offset, CF_TLS_VERSIONOffset: flatbuffers.Offset, HTTP_ORIGINOffset: flatbuffers.Offset, HTTP_REFEREROffset: flatbuffers.Offset, HTTP_USER_AGENTOffset: flatbuffers.Offset, HTTP_ACCEPT_LANGUAGEOffset: flatbuffers.Offset, SEC_CH_UAOffset: flatbuffers.Offset, SEC_CH_UA_PLATFORMOffset: flatbuffers.Offset, SEC_CH_UA_MOBILEOffset: flatbuffers.Offset, SDN_SIGNED_IN: boolean, SDN_IDENTITY_SCHEMEOffset: flatbuffers.Offset, SDN_SIGN_IN_METHODOffset: flatbuffers.Offset, SDN_PUBLIC_KEY_HEXOffset: flatbuffers.Offset, SDN_KEY_IDOffset: flatbuffers.Offset, SDN_DERIVATION_PATHOffset: flatbuffers.Offset, EXTERNAL_WALLET_ADDRESSOffset: flatbuffers.Offset, EXTERNAL_WALLET_NAMEOffset: flatbuffers.Offset, EXTERNAL_WALLET_CHAINOffset: flatbuffers.Offset, FINGERPRINT_HASHOffset: flatbuffers.Offset, INSTALL_IDOffset: flatbuffers.Offset, PAGE_URLOffset: flatbuffers.Offset, APP_NAMEOffset: flatbuffers.Offset, APP_VERSIONOffset: flatbuffers.Offset, PLATFORMOffset: flatbuffers.Offset, TIMEZONEOffset: flatbuffers.Offset, TZ_OFFSET_MIN: number, LANGUAGESOffset: flatbuffers.Offset, SCREEN_WIDTH: number, SCREEN_HEIGHT: number, VIEWPORT_WIDTH: number, VIEWPORT_HEIGHT: number, COLOR_DEPTH: number, DEVICE_PIXEL_RATIO: number, HARDWARE_CONCURRENCY: number, DEVICE_MEMORY_GB: number, MAX_TOUCH_POINTS: number, WEBGL_VENDOROffset: flatbuffers.Offset, WEBGL_RENDEREROffset: flatbuffers.Offset, CANVAS_HASHOffset: flatbuffers.Offset, AUDIO_HASHOffset: flatbuffers.Offset, FONT_HASHOffset: flatbuffers.Offset, COOKIES_ENABLED: boolean, DO_NOT_TRACKOffset: flatbuffers.Offset, WEBDRIVER: boolean, LOCAL_STORAGE_WRITABLE: boolean, MODEL_PROVIDEROffset: flatbuffers.Offset, MODEL_IDOffset: flatbuffers.Offset, PROMPT_TEXTOffset: flatbuffers.Offset, ANSWER_TEXTOffset: flatbuffers.Offset, SUMMARY_TEXTOffset: flatbuffers.Offset, STATUS: aisEventStatus, ERROR_CODEOffset: flatbuffers.Offset, ERROR_MESSAGEOffset: flatbuffers.Offset, INPUT_TOKENS: number, OUTPUT_TOKENS: number, TOTAL_TOKENS: number, COST_USD: number, LATENCY_MS: number, TOOL_CALL_COUNT: number, COLLECTOR_NODE_IDOffset: flatbuffers.Offset, MESSAGESOffset: flatbuffers.Offset, TOOL_CALLSOffset: flatbuffers.Offset, EDGE_HEADERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AIST;
    unpackTo(_o: AIST): void;
}
export declare class AIST implements flatbuffers.IGeneratedObject {
    EVENT_ID: string | Uint8Array | null;
    SESSION_ID: string | Uint8Array | null;
    REQUEST_ID: string | Uint8Array | null;
    SEQUENCE_NO: number;
    TURN_INDEX: number;
    EVENT_KIND: aisEventKind;
    RECEIVED_UTC: string | Uint8Array | null;
    RECEIVED_UNIX_MS: bigint;
    CLIENT_UTC: string | Uint8Array | null;
    CLIENT_UNIX_MS: bigint;
    CLIENT_IP: string | Uint8Array | null;
    CLIENT_IP_HASH: string | Uint8Array | null;
    REMOTE_ADDR: string | Uint8Array | null;
    X_FORWARDED_FOR: string | Uint8Array | null;
    CF_RAY: string | Uint8Array | null;
    CF_COUNTRY: string | Uint8Array | null;
    CF_REGION: string | Uint8Array | null;
    CF_CITY: string | Uint8Array | null;
    CF_ASN: string | Uint8Array | null;
    CF_TLS_VERSION: string | Uint8Array | null;
    HTTP_ORIGIN: string | Uint8Array | null;
    HTTP_REFERER: string | Uint8Array | null;
    HTTP_USER_AGENT: string | Uint8Array | null;
    HTTP_ACCEPT_LANGUAGE: string | Uint8Array | null;
    SEC_CH_UA: string | Uint8Array | null;
    SEC_CH_UA_PLATFORM: string | Uint8Array | null;
    SEC_CH_UA_MOBILE: string | Uint8Array | null;
    SDN_SIGNED_IN: boolean;
    SDN_IDENTITY_SCHEME: string | Uint8Array | null;
    SDN_SIGN_IN_METHOD: string | Uint8Array | null;
    SDN_PUBLIC_KEY_HEX: string | Uint8Array | null;
    SDN_KEY_ID: string | Uint8Array | null;
    SDN_DERIVATION_PATH: string | Uint8Array | null;
    EXTERNAL_WALLET_ADDRESS: string | Uint8Array | null;
    EXTERNAL_WALLET_NAME: string | Uint8Array | null;
    EXTERNAL_WALLET_CHAIN: string | Uint8Array | null;
    FINGERPRINT_HASH: string | Uint8Array | null;
    INSTALL_ID: string | Uint8Array | null;
    PAGE_URL: string | Uint8Array | null;
    APP_NAME: string | Uint8Array | null;
    APP_VERSION: string | Uint8Array | null;
    PLATFORM: string | Uint8Array | null;
    TIMEZONE: string | Uint8Array | null;
    TZ_OFFSET_MIN: number;
    LANGUAGES: string | Uint8Array | null;
    SCREEN_WIDTH: number;
    SCREEN_HEIGHT: number;
    VIEWPORT_WIDTH: number;
    VIEWPORT_HEIGHT: number;
    COLOR_DEPTH: number;
    DEVICE_PIXEL_RATIO: number;
    HARDWARE_CONCURRENCY: number;
    DEVICE_MEMORY_GB: number;
    MAX_TOUCH_POINTS: number;
    WEBGL_VENDOR: string | Uint8Array | null;
    WEBGL_RENDERER: string | Uint8Array | null;
    CANVAS_HASH: string | Uint8Array | null;
    AUDIO_HASH: string | Uint8Array | null;
    FONT_HASH: string | Uint8Array | null;
    COOKIES_ENABLED: boolean;
    DO_NOT_TRACK: string | Uint8Array | null;
    WEBDRIVER: boolean;
    LOCAL_STORAGE_WRITABLE: boolean;
    MODEL_PROVIDER: string | Uint8Array | null;
    MODEL_ID: string | Uint8Array | null;
    PROMPT_TEXT: string | Uint8Array | null;
    ANSWER_TEXT: string | Uint8Array | null;
    SUMMARY_TEXT: string | Uint8Array | null;
    STATUS: aisEventStatus;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    INPUT_TOKENS: number;
    OUTPUT_TOKENS: number;
    TOTAL_TOKENS: number;
    COST_USD: number;
    LATENCY_MS: number;
    TOOL_CALL_COUNT: number;
    COLLECTOR_NODE_ID: string | Uint8Array | null;
    MESSAGES: (AISMessageT)[];
    TOOL_CALLS: (AISToolCallT)[];
    EDGE_HEADERS: (AISHeaderT)[];
    constructor(EVENT_ID?: string | Uint8Array | null, SESSION_ID?: string | Uint8Array | null, REQUEST_ID?: string | Uint8Array | null, SEQUENCE_NO?: number, TURN_INDEX?: number, EVENT_KIND?: aisEventKind, RECEIVED_UTC?: string | Uint8Array | null, RECEIVED_UNIX_MS?: bigint, CLIENT_UTC?: string | Uint8Array | null, CLIENT_UNIX_MS?: bigint, CLIENT_IP?: string | Uint8Array | null, CLIENT_IP_HASH?: string | Uint8Array | null, REMOTE_ADDR?: string | Uint8Array | null, X_FORWARDED_FOR?: string | Uint8Array | null, CF_RAY?: string | Uint8Array | null, CF_COUNTRY?: string | Uint8Array | null, CF_REGION?: string | Uint8Array | null, CF_CITY?: string | Uint8Array | null, CF_ASN?: string | Uint8Array | null, CF_TLS_VERSION?: string | Uint8Array | null, HTTP_ORIGIN?: string | Uint8Array | null, HTTP_REFERER?: string | Uint8Array | null, HTTP_USER_AGENT?: string | Uint8Array | null, HTTP_ACCEPT_LANGUAGE?: string | Uint8Array | null, SEC_CH_UA?: string | Uint8Array | null, SEC_CH_UA_PLATFORM?: string | Uint8Array | null, SEC_CH_UA_MOBILE?: string | Uint8Array | null, SDN_SIGNED_IN?: boolean, SDN_IDENTITY_SCHEME?: string | Uint8Array | null, SDN_SIGN_IN_METHOD?: string | Uint8Array | null, SDN_PUBLIC_KEY_HEX?: string | Uint8Array | null, SDN_KEY_ID?: string | Uint8Array | null, SDN_DERIVATION_PATH?: string | Uint8Array | null, EXTERNAL_WALLET_ADDRESS?: string | Uint8Array | null, EXTERNAL_WALLET_NAME?: string | Uint8Array | null, EXTERNAL_WALLET_CHAIN?: string | Uint8Array | null, FINGERPRINT_HASH?: string | Uint8Array | null, INSTALL_ID?: string | Uint8Array | null, PAGE_URL?: string | Uint8Array | null, APP_NAME?: string | Uint8Array | null, APP_VERSION?: string | Uint8Array | null, PLATFORM?: string | Uint8Array | null, TIMEZONE?: string | Uint8Array | null, TZ_OFFSET_MIN?: number, LANGUAGES?: string | Uint8Array | null, SCREEN_WIDTH?: number, SCREEN_HEIGHT?: number, VIEWPORT_WIDTH?: number, VIEWPORT_HEIGHT?: number, COLOR_DEPTH?: number, DEVICE_PIXEL_RATIO?: number, HARDWARE_CONCURRENCY?: number, DEVICE_MEMORY_GB?: number, MAX_TOUCH_POINTS?: number, WEBGL_VENDOR?: string | Uint8Array | null, WEBGL_RENDERER?: string | Uint8Array | null, CANVAS_HASH?: string | Uint8Array | null, AUDIO_HASH?: string | Uint8Array | null, FONT_HASH?: string | Uint8Array | null, COOKIES_ENABLED?: boolean, DO_NOT_TRACK?: string | Uint8Array | null, WEBDRIVER?: boolean, LOCAL_STORAGE_WRITABLE?: boolean, MODEL_PROVIDER?: string | Uint8Array | null, MODEL_ID?: string | Uint8Array | null, PROMPT_TEXT?: string | Uint8Array | null, ANSWER_TEXT?: string | Uint8Array | null, SUMMARY_TEXT?: string | Uint8Array | null, STATUS?: aisEventStatus, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null, INPUT_TOKENS?: number, OUTPUT_TOKENS?: number, TOTAL_TOKENS?: number, COST_USD?: number, LATENCY_MS?: number, TOOL_CALL_COUNT?: number, COLLECTOR_NODE_ID?: string | Uint8Array | null, MESSAGES?: (AISMessageT)[], TOOL_CALLS?: (AISToolCallT)[], EDGE_HEADERS?: (AISHeaderT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AIS.d.ts.map