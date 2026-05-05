import * as flatbuffers from 'flatbuffers';
import { ENC, ENCT } from './ENC.js';
import { PLG, PLGT } from './PLG.js';
import { licensingGrantMessageType } from './licensingGrantMessageType.js';
/**
 * Licensing grant message
 */
export declare class LGR implements flatbuffers.IUnpackableObject<LGRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LGR;
    static getRootAsLGR(bb: flatbuffers.ByteBuffer, obj?: LGR): LGR;
    static getSizePrefixedRootAsLGR(bb: flatbuffers.ByteBuffer, obj?: LGR): LGR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Message type
     */
    MESSAGE_TYPE(): licensingGrantMessageType;
    /**
     * Unique request identifier
     */
    REQUEST_ID(): string;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Canonical module identifier
     */
    MODULE_ID(): string;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional module version
     */
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requester peer identifier
     */
    REQUESTER_PEER_ID(): string | null;
    REQUESTER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requester account identity or wallet xpub
     */
    REQUESTER_XPUB(): string | null;
    REQUESTER_XPUB(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requested domain
     */
    REQUESTED_DOMAIN(): string | null;
    REQUESTED_DOMAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Requested timeout in milliseconds
     */
    REQUESTED_TIMEOUT_MS(): bigint;
    /**
     * Granted domain
     */
    GRANTED_DOMAIN(): string | null;
    GRANTED_DOMAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Granted timeout in milliseconds
     */
    GRANTED_TIMEOUT_MS(): bigint;
    /**
     * Grant expiration time in milliseconds since epoch
     */
    EXPIRES_AT(): bigint;
    /**
     * Required scope for the publication
     */
    REQUIRED_SCOPE(): string | null;
    REQUIRED_SCOPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Grant status string
     */
    GRANT_STATUS(): string | null;
    GRANT_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Structured denial reason
     */
    DENIAL_REASON(): string | null;
    DENIAL_REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Issued capability token bytes
     */
    CAPABILITY_TOKEN(index: number): number | null;
    capabilityTokenLength(): number;
    capabilityTokenArray(): Uint8Array | null;
    /**
     * Published module descriptor
     */
    MODULE_DESCRIPTOR(obj?: PLG): PLG | null;
    /**
     * Encryption header for the recipient-specific wrapped content-key payload.
     */
    WRAPPED_CONTENT_KEY_HEADER(obj?: ENC): ENC | null;
    /**
     * Encrypted FlatBuffer payload containing the recipient-specific content key
     * material. The payload currently uses `$KMF` semantics and is decrypted
     * using `WRAPPED_CONTENT_KEY_HEADER` before reading the key bytes.
     */
    WRAPPED_CONTENT_KEY_PAYLOAD(index: number): number | null;
    wrappedContentKeyPayloadLength(): number;
    wrappedContentKeyPayloadArray(): Uint8Array | null;
    /**
     * Provider public key used to verify the grant signature
     */
    GRANT_VERIFIER_PUBKEY(index: number): number | null;
    grantVerifierPubkeyLength(): number;
    grantVerifierPubkeyArray(): Uint8Array | null;
    /**
     * Provider signature over the grant
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
    static startLGR(builder: flatbuffers.Builder): void;
    static addMessageType(builder: flatbuffers.Builder, MESSAGE_TYPE: licensingGrantMessageType): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addRequesterPeerId(builder: flatbuffers.Builder, REQUESTER_PEER_IDOffset: flatbuffers.Offset): void;
    static addRequesterXpub(builder: flatbuffers.Builder, REQUESTER_XPUBOffset: flatbuffers.Offset): void;
    static addRequestedDomain(builder: flatbuffers.Builder, REQUESTED_DOMAINOffset: flatbuffers.Offset): void;
    static addRequestedTimeoutMs(builder: flatbuffers.Builder, REQUESTED_TIMEOUT_MS: bigint): void;
    static addGrantedDomain(builder: flatbuffers.Builder, GRANTED_DOMAINOffset: flatbuffers.Offset): void;
    static addGrantedTimeoutMs(builder: flatbuffers.Builder, GRANTED_TIMEOUT_MS: bigint): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addRequiredScope(builder: flatbuffers.Builder, REQUIRED_SCOPEOffset: flatbuffers.Offset): void;
    static addGrantStatus(builder: flatbuffers.Builder, GRANT_STATUSOffset: flatbuffers.Offset): void;
    static addDenialReason(builder: flatbuffers.Builder, DENIAL_REASONOffset: flatbuffers.Offset): void;
    static addCapabilityToken(builder: flatbuffers.Builder, CAPABILITY_TOKENOffset: flatbuffers.Offset): void;
    static createCapabilityTokenVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCapabilityTokenVector(builder: flatbuffers.Builder, numElems: number): void;
    static addModuleDescriptor(builder: flatbuffers.Builder, MODULE_DESCRIPTOROffset: flatbuffers.Offset): void;
    static addWrappedContentKeyHeader(builder: flatbuffers.Builder, WRAPPED_CONTENT_KEY_HEADEROffset: flatbuffers.Offset): void;
    static addWrappedContentKeyPayload(builder: flatbuffers.Builder, WRAPPED_CONTENT_KEY_PAYLOADOffset: flatbuffers.Offset): void;
    static createWrappedContentKeyPayloadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWrappedContentKeyPayloadVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGrantVerifierPubkey(builder: flatbuffers.Builder, GRANT_VERIFIER_PUBKEYOffset: flatbuffers.Offset): void;
    static createGrantVerifierPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGrantVerifierPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endLGR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLGRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLGRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): LGRT;
    unpackTo(_o: LGRT): void;
}
export declare class LGRT implements flatbuffers.IGeneratedObject {
    MESSAGE_TYPE: licensingGrantMessageType;
    REQUEST_ID: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    REQUESTER_PEER_ID: string | Uint8Array | null;
    REQUESTER_XPUB: string | Uint8Array | null;
    REQUESTED_DOMAIN: string | Uint8Array | null;
    REQUESTED_TIMEOUT_MS: bigint;
    GRANTED_DOMAIN: string | Uint8Array | null;
    GRANTED_TIMEOUT_MS: bigint;
    EXPIRES_AT: bigint;
    REQUIRED_SCOPE: string | Uint8Array | null;
    GRANT_STATUS: string | Uint8Array | null;
    DENIAL_REASON: string | Uint8Array | null;
    CAPABILITY_TOKEN: (number)[];
    MODULE_DESCRIPTOR: PLGT | null;
    WRAPPED_CONTENT_KEY_HEADER: ENCT | null;
    WRAPPED_CONTENT_KEY_PAYLOAD: (number)[];
    GRANT_VERIFIER_PUBKEY: (number)[];
    PROVIDER_SIGNATURE: (number)[];
    constructor(MESSAGE_TYPE?: licensingGrantMessageType, REQUEST_ID?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, REQUESTER_PEER_ID?: string | Uint8Array | null, REQUESTER_XPUB?: string | Uint8Array | null, REQUESTED_DOMAIN?: string | Uint8Array | null, REQUESTED_TIMEOUT_MS?: bigint, GRANTED_DOMAIN?: string | Uint8Array | null, GRANTED_TIMEOUT_MS?: bigint, EXPIRES_AT?: bigint, REQUIRED_SCOPE?: string | Uint8Array | null, GRANT_STATUS?: string | Uint8Array | null, DENIAL_REASON?: string | Uint8Array | null, CAPABILITY_TOKEN?: (number)[], MODULE_DESCRIPTOR?: PLGT | null, WRAPPED_CONTENT_KEY_HEADER?: ENCT | null, WRAPPED_CONTENT_KEY_PAYLOAD?: (number)[], GRANT_VERIFIER_PUBKEY?: (number)[], PROVIDER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LGR.d.ts.map