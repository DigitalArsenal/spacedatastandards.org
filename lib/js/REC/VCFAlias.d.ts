import * as flatbuffers from 'flatbuffers';
import { vcfAliasKind } from './vcfAliasKind.js';
/**
 * One identity address row: the machine-readable half of the card.
 */
export declare class VCFAlias implements flatbuffers.IUnpackableObject<VCFAliasT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCFAlias;
    static getRootAsVCFAlias(bb: flatbuffers.ByteBuffer, obj?: VCFAlias): VCFAlias;
    static getSizePrefixedRootAsVCFAlias(bb: flatbuffers.ByteBuffer, obj?: VCFAlias): VCFAlias;
    /**
     * What the row carries.
     */
    KIND(): vcfAliasKind;
    /**
     * The row's kind label verbatim as emitted — the leftmost domain label.
     * Authoritative when KIND is OTHER.
     */
    KIND_TOKEN(): string;
    KIND_TOKEN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Everything left of the separator in the emitted address, verbatim.
     */
    LOCAL_PART(): string;
    LOCAL_PART(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Everything right of the separator in the emitted address, verbatim. This
     * is publisher data: the identity domain of the deployment that produced the
     * card, never a value this standard fixes.
     */
    DOMAIN(): string;
    DOMAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The complete emitted address, `LOCAL_PART` then the separator then
     * `DOMAIN`, verbatim. Carried whole because it is what the importer stores
     * and what a consumer matches on.
     */
    ADDRESS(): string;
    ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Transport encoding of LOCAL_PART verbatim and lowercase. An address
     * local part has a hard octet cap, so raw hexadecimal key material does not
     * fit and a compact binary-to-text encoding is REQUIRED for key rows.
     */
    ENCODING(): string | null;
    ENCODING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cryptographic algorithm the row's key or signature belongs to, verbatim as
     * the profile states it. A key without a named algorithm is not verifiable.
     */
    ALGORITHM(): string | null;
    ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The profile's published public key value verbatim, for key rows. The SAME
     * bytes LOCAL_PART transport-encodes, carried in the profile's own spelling
     * so a consumer can join card to profile without decoding. NEVER an extended
     * public key and NEVER a derivation path.
     */
    PUBLIC_KEY(): string | null;
    PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ledger token verbatim for LEDGER_ACCOUNT rows.
     */
    CHAIN(): string | null;
    CHAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether this row survives into the COMPACT form.
     */
    ON_COMPACT_CARD(): boolean;
    /**
     * Octet length of the complete UNFOLDED row as emitted.
     */
    OCTET_LENGTH(): number;
    static startVCFAlias(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: vcfAliasKind): void;
    static addKindToken(builder: flatbuffers.Builder, KIND_TOKENOffset: flatbuffers.Offset): void;
    static addLocalPart(builder: flatbuffers.Builder, LOCAL_PARTOffset: flatbuffers.Offset): void;
    static addDomain(builder: flatbuffers.Builder, DOMAINOffset: flatbuffers.Offset): void;
    static addAddress(builder: flatbuffers.Builder, ADDRESSOffset: flatbuffers.Offset): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODINGOffset: flatbuffers.Offset): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset): void;
    static addPublicKey(builder: flatbuffers.Builder, PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addChain(builder: flatbuffers.Builder, CHAINOffset: flatbuffers.Offset): void;
    static addOnCompactCard(builder: flatbuffers.Builder, ON_COMPACT_CARD: boolean): void;
    static addOctetLength(builder: flatbuffers.Builder, OCTET_LENGTH: number): void;
    static endVCFAlias(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCFAlias(builder: flatbuffers.Builder, KIND: vcfAliasKind, KIND_TOKENOffset: flatbuffers.Offset, LOCAL_PARTOffset: flatbuffers.Offset, DOMAINOffset: flatbuffers.Offset, ADDRESSOffset: flatbuffers.Offset, ENCODINGOffset: flatbuffers.Offset, ALGORITHMOffset: flatbuffers.Offset, PUBLIC_KEYOffset: flatbuffers.Offset, CHAINOffset: flatbuffers.Offset, ON_COMPACT_CARD: boolean, OCTET_LENGTH: number): flatbuffers.Offset;
    unpack(): VCFAliasT;
    unpackTo(_o: VCFAliasT): void;
}
export declare class VCFAliasT implements flatbuffers.IGeneratedObject {
    KIND: vcfAliasKind;
    KIND_TOKEN: string | Uint8Array | null;
    LOCAL_PART: string | Uint8Array | null;
    DOMAIN: string | Uint8Array | null;
    ADDRESS: string | Uint8Array | null;
    ENCODING: string | Uint8Array | null;
    ALGORITHM: string | Uint8Array | null;
    PUBLIC_KEY: string | Uint8Array | null;
    CHAIN: string | Uint8Array | null;
    ON_COMPACT_CARD: boolean;
    OCTET_LENGTH: number;
    constructor(KIND?: vcfAliasKind, KIND_TOKEN?: string | Uint8Array | null, LOCAL_PART?: string | Uint8Array | null, DOMAIN?: string | Uint8Array | null, ADDRESS?: string | Uint8Array | null, ENCODING?: string | Uint8Array | null, ALGORITHM?: string | Uint8Array | null, PUBLIC_KEY?: string | Uint8Array | null, CHAIN?: string | Uint8Array | null, ON_COMPACT_CARD?: boolean, OCTET_LENGTH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCFAlias.d.ts.map