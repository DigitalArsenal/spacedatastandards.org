import * as flatbuffers from 'flatbuffers';
import { pvnLicenseClass } from './pvnLicenseClass.js';
import { pvnSourceKind } from './pvnSourceKind.js';
/**
 * Product Provenance
 */
export declare class PVN implements flatbuffers.IUnpackableObject<PVNT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PVN;
    static getRootAsPVN(bb: flatbuffers.ByteBuffer, obj?: PVN): PVN;
    static getSizePrefixedRootAsPVN(bb: flatbuffers.ByteBuffer, obj?: PVN): PVN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable, lowercase identifier of the source in the provider's
     * registry of sources.
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * What kind of data the source supplies.
     */
    SOURCE_KIND(): pvnSourceKind;
    /**
     * Agency, operator or catalog that created the source data, as it names
     * itself. Not a message's CCSDS ORIGINATOR, which names who created the
     * message.
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the provider that published the product, as the provider
     * names itself: the module, node or service that retrieved the source data.
     */
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the software that made the product from the source data,
     * with its version when it has one.
     */
    PRODUCER(): string | null;
    PRODUCER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * What the source's terms permit for the product.
     */
    LICENSE_CLASS(): pvnLicenseClass;
    /**
     * Identifier of the terms LICENSE_CLASS was read from: an SPDX license
     * identifier where one applies, else the identifier of the terms in the
     * provider's licence register.
     */
    LICENSE_ID(): string | null;
    LICENSE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the lineage the source's data descends from. Sources that
     * republish one upstream share its lineage, so their products are not
     * independent of each other.
     */
    LINEAGE(): string | null;
    LINEAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable URL or provider query identifying the source material as it
     * was retrieved (the SOURCE_URL of $CMR and $AVL).
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source revision, edition or upstream update marker verbatim: for a file
     * its originator stamps, the stamp.
     */
    SOURCE_VERSION(): string | null;
    SOURCE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond time the source material was retrieved.
     */
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the exact source payload bytes as retrieved, 64 lowercase
     * hexadecimal characters. Empty when the source cannot expose replayable
     * bytes.
     */
    SOURCE_SHA256(): string | null;
    SOURCE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of source bytes SOURCE_SHA256 covers: the length of the prefix when
     * the source was fetched by range. 0 when not stated.
     */
    SOURCE_BYTES(): bigint;
    /**
     * SHA-256 of the build of PRODUCER that made the product (its dist
     * module.wasm), 64 lowercase hexadecimal characters. Stamped by the host
     * that loaded the producing module: a module cannot hash its own bytes.
     * Empty when not stated.
     */
    PRODUCER_SHA256(): string | null;
    PRODUCER_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPVN(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addSourceKind(builder: flatbuffers.Builder, SOURCE_KIND: pvnSourceKind): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset): void;
    static addLicenseClass(builder: flatbuffers.Builder, LICENSE_CLASS: pvnLicenseClass): void;
    static addLicenseId(builder: flatbuffers.Builder, LICENSE_IDOffset: flatbuffers.Offset): void;
    static addLineage(builder: flatbuffers.Builder, LINEAGEOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceVersion(builder: flatbuffers.Builder, SOURCE_VERSIONOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static addSourceSha256(builder: flatbuffers.Builder, SOURCE_SHA256Offset: flatbuffers.Offset): void;
    static addSourceBytes(builder: flatbuffers.Builder, SOURCE_BYTES: bigint): void;
    static addProducerSha256(builder: flatbuffers.Builder, PRODUCER_SHA256Offset: flatbuffers.Offset): void;
    static endPVN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPVNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPVNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPVN(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset, SOURCE_KIND: pvnSourceKind, ORIGINATOROffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset, PRODUCEROffset: flatbuffers.Offset, LICENSE_CLASS: pvnLicenseClass, LICENSE_IDOffset: flatbuffers.Offset, LINEAGEOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_VERSIONOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, SOURCE_SHA256Offset: flatbuffers.Offset, SOURCE_BYTES: bigint, PRODUCER_SHA256Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PVNT;
    unpackTo(_o: PVNT): void;
}
export declare class PVNT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    SOURCE_KIND: pvnSourceKind;
    ORIGINATOR: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    PRODUCER: string | Uint8Array | null;
    LICENSE_CLASS: pvnLicenseClass;
    LICENSE_ID: string | Uint8Array | null;
    LINEAGE: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_VERSION: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    SOURCE_SHA256: string | Uint8Array | null;
    SOURCE_BYTES: bigint;
    PRODUCER_SHA256: string | Uint8Array | null;
    constructor(SOURCE_ID?: string | Uint8Array | null, SOURCE_KIND?: pvnSourceKind, ORIGINATOR?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, PRODUCER?: string | Uint8Array | null, LICENSE_CLASS?: pvnLicenseClass, LICENSE_ID?: string | Uint8Array | null, LINEAGE?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_VERSION?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, SOURCE_SHA256?: string | Uint8Array | null, SOURCE_BYTES?: bigint, PRODUCER_SHA256?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PVN.d.ts.map