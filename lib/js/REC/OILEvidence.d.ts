import * as flatbuffers from 'flatbuffers';
/**
 * Where a declaration comes from.
 */
export declare class OILEvidence implements flatbuffers.IUnpackableObject<OILEvidenceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OILEvidence;
    static getRootAsOILEvidence(bb: flatbuffers.ByteBuffer, obj?: OILEvidence): OILEvidence;
    static getSizePrefixedRootAsOILEvidence(bb: flatbuffers.ByteBuffer, obj?: OILEvidence): OILEvidence;
    /**
     * Kind of source of the declaration, e.g. "datefirst", "satcat",
     * "operator", "analyst".
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Immutable identifier of the source edition: a SHA-256 hex digest or CID
     * of the file or record.
     */
    RECORD_ID(): string | null;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 1-based line of the declaration in the source edition; 0 = not stated.
     */
    LINE(): number;
    /**
     * Number of times the edition declares this pair (1 = once).
     */
    DECLARATIONS(): number;
    /**
     * True when repeated declarations of the pair give different dates.
     */
    DATES_DIFFER(): boolean;
    /**
     * The declaration's text as printed, when kept (for an Invalid link).
     */
    ORIGINAL(): string | null;
    ORIGINAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOILEvidence(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addLine(builder: flatbuffers.Builder, LINE: number): void;
    static addDeclarations(builder: flatbuffers.Builder, DECLARATIONS: number): void;
    static addDatesDiffer(builder: flatbuffers.Builder, DATES_DIFFER: boolean): void;
    static addOriginal(builder: flatbuffers.Builder, ORIGINALOffset: flatbuffers.Offset): void;
    static endOILEvidence(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOILEvidence(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, LINE: number, DECLARATIONS: number, DATES_DIFFER: boolean, ORIGINALOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OILEvidenceT;
    unpackTo(_o: OILEvidenceT): void;
}
export declare class OILEvidenceT implements flatbuffers.IGeneratedObject {
    SOURCE: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    LINE: number;
    DECLARATIONS: number;
    DATES_DIFFER: boolean;
    ORIGINAL: string | Uint8Array | null;
    constructor(SOURCE?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, LINE?: number, DECLARATIONS?: number, DATES_DIFFER?: boolean, ORIGINAL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OILEvidence.d.ts.map