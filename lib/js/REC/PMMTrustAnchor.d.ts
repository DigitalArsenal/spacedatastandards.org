import * as flatbuffers from 'flatbuffers';
import { ChainProof, ChainProofT } from './ChainProof.js';
/**
 * The single key identity every signature in this manifest resolves to, and
 * the two external anchors that give that key its weight: the DNS proof that
 * binds it to the domain, and the Adversarial-Security bond that prices
 * trust in it.
 */
export declare class PMMTrustAnchor implements flatbuffers.IUnpackableObject<PMMTrustAnchorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PMMTrustAnchor;
    static getRootAsPMMTrustAnchor(bb: flatbuffers.ByteBuffer, obj?: PMMTrustAnchor): PMMTrustAnchor;
    static getSizePrefixedRootAsPMMTrustAnchor(bb: flatbuffers.ByteBuffer, obj?: PMMTrustAnchor): PMMTrustAnchor;
    /**
     * Domain the node key is bound to. MUST equal `PMM.PROVIDER_DOMAIN` and
     * MUST equal the origin the manifest was fetched from.
     */
    PROVIDER_DOMAIN(): string | null;
    PROVIDER_DOMAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * libp2p peer id of the provider node.
     */
    NODE_PEER_ID(): string | null;
    NODE_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * BIP-32 account xpub of the node identity, verbatim as advertised in the
     * node's `$EPM`.
     */
    NODE_XPUB(): string | null;
    NODE_XPUB(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Hex-encoded public key that verifies `PMM.SIGNATURE` and every
     * `PMMModuleEntry.ARTIFACT_SIGNATURE`, derived from the node key.
     */
    SIGNING_PUBLIC_KEY(): string | null;
    SIGNING_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * HD derivation path of `SIGNING_PUBLIC_KEY` under `NODE_XPUB`.
     */
    SIGNING_KEY_PATH(): string | null;
    SIGNING_KEY_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature algorithm identifier, e.g. "ed25519",
     * "secp256k1-compact-ethereum". Empty means "ed25519".
     */
    SIGNATURE_ALGORITHM(): string | null;
    SIGNATURE_ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CID of the provider node's `$EPM`.
     */
    EPM_CID(): string | null;
    EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fully-qualified DNS name of the TXT record carrying the signed
     * domain-to-nodekey proof, e.g. "_sdnkey.example.org". A verifying client
     * resolves this itself (DNS-over-HTTPS) rather than trusting the copy
     * below.
     */
    DNS_PROOF_RECORD_NAME(): string | null;
    DNS_PROOF_RECORD_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Verbatim TXT value of that proof, carried only so a client can detect
     * disagreement with what DNS returns. The resolved record always wins.
     */
    DNS_PROOF_TXT(): string | null;
    DNS_PROOF_TXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The canonical statement the DNS proof signs, verbatim, when the proof
     * format keeps it out of the TXT value.
     */
    DNS_PROOF_STATEMENT(): string | null;
    DNS_PROOF_STATEMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Chain addresses derived from this same node key that hold the provider's
     * Adversarial-Security bond. Each entry proves, through `ChainProof`, that
     * the address derives from the key that signed this manifest.
     */
    BOND_ADDRESSES(index: number, obj?: ChainProof): ChainProof | null;
    bondAddressesLength(): number;
    /**
     * Optional URL of a machine-readable bond attestation (bonded value,
     * duration unspent) for clients that price trust rather than gate on it.
     */
    BOND_ATTESTATION_URL(): string | null;
    BOND_ATTESTATION_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPMMTrustAnchor(builder: flatbuffers.Builder): void;
    static addProviderDomain(builder: flatbuffers.Builder, PROVIDER_DOMAINOffset: flatbuffers.Offset): void;
    static addNodePeerId(builder: flatbuffers.Builder, NODE_PEER_IDOffset: flatbuffers.Offset): void;
    static addNodeXpub(builder: flatbuffers.Builder, NODE_XPUBOffset: flatbuffers.Offset): void;
    static addSigningPublicKey(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addSigningKeyPath(builder: flatbuffers.Builder, SIGNING_KEY_PATHOffset: flatbuffers.Offset): void;
    static addSignatureAlgorithm(builder: flatbuffers.Builder, SIGNATURE_ALGORITHMOffset: flatbuffers.Offset): void;
    static addEpmCid(builder: flatbuffers.Builder, EPM_CIDOffset: flatbuffers.Offset): void;
    static addDnsProofRecordName(builder: flatbuffers.Builder, DNS_PROOF_RECORD_NAMEOffset: flatbuffers.Offset): void;
    static addDnsProofTxt(builder: flatbuffers.Builder, DNS_PROOF_TXTOffset: flatbuffers.Offset): void;
    static addDnsProofStatement(builder: flatbuffers.Builder, DNS_PROOF_STATEMENTOffset: flatbuffers.Offset): void;
    static addBondAddresses(builder: flatbuffers.Builder, BOND_ADDRESSESOffset: flatbuffers.Offset): void;
    static createBondAddressesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBondAddressesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBondAttestationUrl(builder: flatbuffers.Builder, BOND_ATTESTATION_URLOffset: flatbuffers.Offset): void;
    static endPMMTrustAnchor(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPMMTrustAnchor(builder: flatbuffers.Builder, PROVIDER_DOMAINOffset: flatbuffers.Offset, NODE_PEER_IDOffset: flatbuffers.Offset, NODE_XPUBOffset: flatbuffers.Offset, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset, SIGNING_KEY_PATHOffset: flatbuffers.Offset, SIGNATURE_ALGORITHMOffset: flatbuffers.Offset, EPM_CIDOffset: flatbuffers.Offset, DNS_PROOF_RECORD_NAMEOffset: flatbuffers.Offset, DNS_PROOF_TXTOffset: flatbuffers.Offset, DNS_PROOF_STATEMENTOffset: flatbuffers.Offset, BOND_ADDRESSESOffset: flatbuffers.Offset, BOND_ATTESTATION_URLOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PMMTrustAnchorT;
    unpackTo(_o: PMMTrustAnchorT): void;
}
export declare class PMMTrustAnchorT implements flatbuffers.IGeneratedObject {
    PROVIDER_DOMAIN: string | Uint8Array | null;
    NODE_PEER_ID: string | Uint8Array | null;
    NODE_XPUB: string | Uint8Array | null;
    SIGNING_PUBLIC_KEY: string | Uint8Array | null;
    SIGNING_KEY_PATH: string | Uint8Array | null;
    SIGNATURE_ALGORITHM: string | Uint8Array | null;
    EPM_CID: string | Uint8Array | null;
    DNS_PROOF_RECORD_NAME: string | Uint8Array | null;
    DNS_PROOF_TXT: string | Uint8Array | null;
    DNS_PROOF_STATEMENT: string | Uint8Array | null;
    BOND_ADDRESSES: (ChainProofT)[];
    BOND_ATTESTATION_URL: string | Uint8Array | null;
    constructor(PROVIDER_DOMAIN?: string | Uint8Array | null, NODE_PEER_ID?: string | Uint8Array | null, NODE_XPUB?: string | Uint8Array | null, SIGNING_PUBLIC_KEY?: string | Uint8Array | null, SIGNING_KEY_PATH?: string | Uint8Array | null, SIGNATURE_ALGORITHM?: string | Uint8Array | null, EPM_CID?: string | Uint8Array | null, DNS_PROOF_RECORD_NAME?: string | Uint8Array | null, DNS_PROOF_TXT?: string | Uint8Array | null, DNS_PROOF_STATEMENT?: string | Uint8Array | null, BOND_ADDRESSES?: (ChainProofT)[], BOND_ATTESTATION_URL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PMMTrustAnchor.d.ts.map