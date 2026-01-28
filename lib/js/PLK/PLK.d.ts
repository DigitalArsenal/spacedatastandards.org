import * as flatbuffers from 'flatbuffers';
import { licenseType } from './licenseType.js';
/**
 * Plugin License Key - Issued license for plugin access
 * Uses ECIES: both parties derive symmetric key via X25519 ECDH
 * Key derivation: X25519(private, peer_public) → HKDF-SHA256 → AES-256-GCM
 */
export declare class PLK implements flatbuffers.IUnpackableObject<PLKT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLK;
    static getRootAsPLK(bb: flatbuffers.ByteBuffer, obj?: PLK): PLK;
    static getSizePrefixedRootAsPLK(bb: flatbuffers.ByteBuffer, obj?: PLK): PLK;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique license key identifier
     */
    LICENSE_ID(): string | null;
    LICENSE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Plugin ID this license is for
     */
    PLUGIN_ID(): string | null;
    PLUGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Plugin version or version range (semver)
     */
    PLUGIN_VERSION(): string | null;
    PLUGIN_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Licensee organization name
     */
    LICENSEE_ORG(): string | null;
    LICENSEE_ORG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Licensee contact email
     */
    LICENSEE_EMAIL(): string | null;
    LICENSEE_EMAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Licensee's SDN Peer ID
     */
    LICENSEE_PEER_ID(): string | null;
    LICENSEE_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Licensee's X25519 public key (32 bytes)
     */
    LICENSEE_PUBKEY(index: number): number | null;
    licenseePubkeyLength(): number;
    licenseePubkeyArray(): Uint8Array | null;
    /**
     * Issuer's X25519 public key (32 bytes)
     * Used with licensee's private key to derive shared secret via ECDH
     */
    ISSUER_PUBKEY(index: number): number | null;
    issuerPubkeyLength(): number;
    issuerPubkeyArray(): Uint8Array | null;
    /**
     * Domain restrictions (empty = any domain allowed)
     */
    ALLOWED_DOMAINS(index: number): string;
    ALLOWED_DOMAINS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    allowedDomainsLength(): number;
    /**
     * TLD restrictions (e.g., ".gov", ".mil", ".edu")
     */
    ALLOWED_TLDS(index: number): string;
    ALLOWED_TLDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    allowedTldsLength(): number;
    /**
     * Type of license
     */
    LICENSE_TYPE(): licenseType;
    /**
     * Maximum concurrent activations (0 = unlimited)
     */
    MAX_ACTIVATIONS(): number;
    /**
     * Unix timestamp when license was issued
     */
    ISSUED_AT(): bigint;
    /**
     * Unix timestamp when license becomes valid
     */
    VALID_FROM(): bigint;
    /**
     * Unix timestamp when license expires (0 = never expires)
     */
    EXPIRES_AT(): bigint;
    /**
     * Peer ID of the license issuer (OrbPro)
     */
    ISSUER_PEER_ID(): string | null;
    ISSUER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature from issuer over all fields (except SIGNATURE)
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startPLK(builder: flatbuffers.Builder): void;
    static addLicenseId(builder: flatbuffers.Builder, LICENSE_IDOffset: flatbuffers.Offset): void;
    static addPluginId(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset): void;
    static addPluginVersion(builder: flatbuffers.Builder, PLUGIN_VERSIONOffset: flatbuffers.Offset): void;
    static addLicenseeOrg(builder: flatbuffers.Builder, LICENSEE_ORGOffset: flatbuffers.Offset): void;
    static addLicenseeEmail(builder: flatbuffers.Builder, LICENSEE_EMAILOffset: flatbuffers.Offset): void;
    static addLicenseePeerId(builder: flatbuffers.Builder, LICENSEE_PEER_IDOffset: flatbuffers.Offset): void;
    static addLicenseePubkey(builder: flatbuffers.Builder, LICENSEE_PUBKEYOffset: flatbuffers.Offset): void;
    static createLicenseePubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLicenseePubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIssuerPubkey(builder: flatbuffers.Builder, ISSUER_PUBKEYOffset: flatbuffers.Offset): void;
    static createIssuerPubkeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIssuerPubkeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAllowedDomains(builder: flatbuffers.Builder, ALLOWED_DOMAINSOffset: flatbuffers.Offset): void;
    static createAllowedDomainsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAllowedDomainsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAllowedTlds(builder: flatbuffers.Builder, ALLOWED_TLDSOffset: flatbuffers.Offset): void;
    static createAllowedTldsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAllowedTldsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLicenseType(builder: flatbuffers.Builder, LICENSE_TYPE: licenseType): void;
    static addMaxActivations(builder: flatbuffers.Builder, MAX_ACTIVATIONS: number): void;
    static addIssuedAt(builder: flatbuffers.Builder, ISSUED_AT: bigint): void;
    static addValidFrom(builder: flatbuffers.Builder, VALID_FROM: bigint): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addIssuerPeerId(builder: flatbuffers.Builder, ISSUER_PEER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPLK(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPLKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPLKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPLK(builder: flatbuffers.Builder, LICENSE_IDOffset: flatbuffers.Offset, PLUGIN_IDOffset: flatbuffers.Offset, PLUGIN_VERSIONOffset: flatbuffers.Offset, LICENSEE_ORGOffset: flatbuffers.Offset, LICENSEE_EMAILOffset: flatbuffers.Offset, LICENSEE_PEER_IDOffset: flatbuffers.Offset, LICENSEE_PUBKEYOffset: flatbuffers.Offset, ISSUER_PUBKEYOffset: flatbuffers.Offset, ALLOWED_DOMAINSOffset: flatbuffers.Offset, ALLOWED_TLDSOffset: flatbuffers.Offset, LICENSE_TYPE: licenseType, MAX_ACTIVATIONS: number, ISSUED_AT: bigint, VALID_FROM: bigint, EXPIRES_AT: bigint, ISSUER_PEER_IDOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLKT;
    unpackTo(_o: PLKT): void;
}
export declare class PLKT implements flatbuffers.IGeneratedObject {
    LICENSE_ID: string | Uint8Array | null;
    PLUGIN_ID: string | Uint8Array | null;
    PLUGIN_VERSION: string | Uint8Array | null;
    LICENSEE_ORG: string | Uint8Array | null;
    LICENSEE_EMAIL: string | Uint8Array | null;
    LICENSEE_PEER_ID: string | Uint8Array | null;
    LICENSEE_PUBKEY: (number)[];
    ISSUER_PUBKEY: (number)[];
    ALLOWED_DOMAINS: (string)[];
    ALLOWED_TLDS: (string)[];
    LICENSE_TYPE: licenseType;
    MAX_ACTIVATIONS: number;
    ISSUED_AT: bigint;
    VALID_FROM: bigint;
    EXPIRES_AT: bigint;
    ISSUER_PEER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(LICENSE_ID?: string | Uint8Array | null, PLUGIN_ID?: string | Uint8Array | null, PLUGIN_VERSION?: string | Uint8Array | null, LICENSEE_ORG?: string | Uint8Array | null, LICENSEE_EMAIL?: string | Uint8Array | null, LICENSEE_PEER_ID?: string | Uint8Array | null, LICENSEE_PUBKEY?: (number)[], ISSUER_PUBKEY?: (number)[], ALLOWED_DOMAINS?: (string)[], ALLOWED_TLDS?: (string)[], LICENSE_TYPE?: licenseType, MAX_ACTIVATIONS?: number, ISSUED_AT?: bigint, VALID_FROM?: bigint, EXPIRES_AT?: bigint, ISSUER_PEER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLK.d.ts.map