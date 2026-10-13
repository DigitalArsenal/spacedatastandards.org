import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
/**
 * Where one statement about a site was read: the source, the record, the
 * version of the record and the field the statement came from.
 */
export declare class SITCitation implements flatbuffers.IUnpackableObject<SITCitationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SITCitation;
    static getRootAsSITCitation(bb: flatbuffers.ByteBuffer, obj?: SITCitation): SITCitation;
    static getSizePrefixedRootAsSITCitation(bb: flatbuffers.ByteBuffer, obj?: SITCitation): SITCitation;
    /**
     * The source, its originator and the terms the statement travels under
     */
    PROVENANCE(obj?: PVN): PVN | null;
    /**
     * The source's own identifier of the record (Wikidata QID, "de:Article
     * title", tracker unit ids, ROR id, docket number, register row)
     */
    SOURCE_RECORD_ID(): string | null;
    SOURCE_RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Where the record can be read
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The source's version of the record (revision id, release name)
     */
    SOURCE_VERSION(): string | null;
    SOURCE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The field of the record the statement was read from, from a closed
     * vocabulary: a Wikidata property ("P5817", "P576"), "infobox:<parameter>",
     * "description", "class:<QID>", "status" (a registry's status column),
     * "units" (a tracker's unit statuses), "register:<id>" (a row of the
     * provider's reviewed register). Never free text.
     */
    SOURCE_FIELD(): string | null;
    SOURCE_FIELD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When the record was read, RFC 3339 UTC
     */
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSITCitation(builder: flatbuffers.Builder): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addSourceRecordId(builder: flatbuffers.Builder, SOURCE_RECORD_IDOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceVersion(builder: flatbuffers.Builder, SOURCE_VERSIONOffset: flatbuffers.Offset): void;
    static addSourceField(builder: flatbuffers.Builder, SOURCE_FIELDOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endSITCitation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSITCitation(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset, SOURCE_RECORD_IDOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_VERSIONOffset: flatbuffers.Offset, SOURCE_FIELDOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SITCitationT;
    unpackTo(_o: SITCitationT): void;
}
export declare class SITCitationT implements flatbuffers.IGeneratedObject {
    PROVENANCE: PVNT | null;
    SOURCE_RECORD_ID: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_VERSION: string | Uint8Array | null;
    SOURCE_FIELD: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(PROVENANCE?: PVNT | null, SOURCE_RECORD_ID?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_VERSION?: string | Uint8Array | null, SOURCE_FIELD?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SITCitation.d.ts.map