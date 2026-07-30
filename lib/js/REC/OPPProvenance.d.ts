import * as flatbuffers from 'flatbuffers';
import { oppDeterminationMethod } from './oppDeterminationMethod.js';
/**
 * Provenance for exactly one physical value.
 *
 * This table is the mechanism by which the never-invent-data law is enforced
 * in the IDL rather than in prose: no physical quantity in an $OPP can be
 * expressed without one of these attached, so a value with no admissible
 * source cannot be encoded at all. Unknown values are ABSENT. They are never
 * zero, never a placeholder, and never carried forward from a different
 * object.
 */
export declare class OPPProvenance implements flatbuffers.IUnpackableObject<OPPProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPPProvenance;
    static getRootAsOPPProvenance(bb: flatbuffers.ByteBuffer, obj?: OPPProvenance): OPPProvenance;
    static getSizePrefixedRootAsOPPProvenance(bb: flatbuffers.ByteBuffer, obj?: OPPProvenance): OPPProvenance;
    /**
     * Publisher of the value, named as the publisher names itself: "ESA DISCOS",
     * "CelesTrak SATCAT", "Gunter's Space Page", "NASA", the operator's name.
     */
    SOURCE(): string;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The source's own identifier for the record this value was read from, such
     * as a DISCOS object id. Verbatim, never normalized.
     */
    SOURCE_RECORD_ID(): string | null;
    SOURCE_RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Deep link to the exact source record when the source publishes one.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) of the
     * instant the value describes: the epoch at which the property held. A
     * design or as-built value that does not change over time omits EPOCH.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) when
     * this record retrieved the value from SOURCE.
     */
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The source's own revision, edition or publication marker, verbatim.
     */
    SOURCE_VERSION(): string | null;
    SOURCE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    METHOD(): oppDeterminationMethod;
    /**
     * Terms under which SOURCE permits redistribution of the value, verbatim.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attribution string the source requires be displayed with the value.
     */
    ATTRIBUTION(): string | null;
    ATTRIBUTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the exact source
     * payload bytes the value was parsed from.
     */
    SOURCE_SHA256(): string | null;
    SOURCE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free text qualifying the value, such as the source's own caveat.
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOPPProvenance(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addSourceRecordId(builder: flatbuffers.Builder, SOURCE_RECORD_IDOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static addSourceVersion(builder: flatbuffers.Builder, SOURCE_VERSIONOffset: flatbuffers.Offset): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: oppDeterminationMethod): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addAttribution(builder: flatbuffers.Builder, ATTRIBUTIONOffset: flatbuffers.Offset): void;
    static addSourceSha256(builder: flatbuffers.Builder, SOURCE_SHA256Offset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endOPPProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOPPProvenance(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset, SOURCE_RECORD_IDOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset, SOURCE_VERSIONOffset: flatbuffers.Offset, METHOD: oppDeterminationMethod, LICENSEOffset: flatbuffers.Offset, ATTRIBUTIONOffset: flatbuffers.Offset, SOURCE_SHA256Offset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OPPProvenanceT;
    unpackTo(_o: OPPProvenanceT): void;
}
export declare class OPPProvenanceT implements flatbuffers.IGeneratedObject {
    SOURCE: string | Uint8Array | null;
    SOURCE_RECORD_ID: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    SOURCE_VERSION: string | Uint8Array | null;
    METHOD: oppDeterminationMethod;
    LICENSE: string | Uint8Array | null;
    ATTRIBUTION: string | Uint8Array | null;
    SOURCE_SHA256: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(SOURCE?: string | Uint8Array | null, SOURCE_RECORD_ID?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, SOURCE_VERSION?: string | Uint8Array | null, METHOD?: oppDeterminationMethod, LICENSE?: string | Uint8Array | null, ATTRIBUTION?: string | Uint8Array | null, SOURCE_SHA256?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPPProvenance.d.ts.map