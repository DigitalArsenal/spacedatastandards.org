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
    static startPVN(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addSourceKind(builder: flatbuffers.Builder, SOURCE_KIND: pvnSourceKind): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset): void;
    static addLicenseClass(builder: flatbuffers.Builder, LICENSE_CLASS: pvnLicenseClass): void;
    static addLicenseId(builder: flatbuffers.Builder, LICENSE_IDOffset: flatbuffers.Offset): void;
    static addLineage(builder: flatbuffers.Builder, LINEAGEOffset: flatbuffers.Offset): void;
    static endPVN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPVNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPVNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPVN(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset, SOURCE_KIND: pvnSourceKind, ORIGINATOROffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset, PRODUCEROffset: flatbuffers.Offset, LICENSE_CLASS: pvnLicenseClass, LICENSE_IDOffset: flatbuffers.Offset, LINEAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
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
    constructor(SOURCE_ID?: string | Uint8Array | null, SOURCE_KIND?: pvnSourceKind, ORIGINATOR?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, PRODUCER?: string | Uint8Array | null, LICENSE_CLASS?: pvnLicenseClass, LICENSE_ID?: string | Uint8Array | null, LINEAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PVN.d.ts.map