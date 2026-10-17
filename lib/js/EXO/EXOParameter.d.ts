import * as flatbuffers from 'flatbuffers';
/**
 * A measured value, its asymmetric uncertainties, and its own provenance.
 * An absent table means no parameter was supplied. NaN means a missing numeric
 * cell, including when the archive supplies a reference or limit but no value.
 */
export declare class EXOParameter implements flatbuffers.IUnpackableObject<EXOParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EXOParameter;
    static getRootAsEXOParameter(bb: flatbuffers.ByteBuffer, obj?: EXOParameter): EXOParameter;
    static getSizePrefixedRootAsEXOParameter(bb: flatbuffers.ByteBuffer, obj?: EXOParameter): EXOParameter;
    VALUE(): number;
    /**
     * Archive ERR1 (positive) and ERR2 (negative), retained without symmetrizing.
     */
    ERR1(): number;
    ERR2(): number;
    /**
     * Archive limit flag: 0 measurement, +1 upper limit, -1 lower limit.
     * -128 means the source did not supply a flag; it is not a measurement.
     */
    LIMIT(): number;
    /**
     * Archive display string, if supplied, preserved without parsing/rounding.
     */
    DISPLAY(): string | null;
    DISPLAY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unit of VALUE/ERR1/ERR2, using IVOA VOUnits (d, deg, AU, K, or 1).
     * Earth radius/mass are archive units R_earth and M_earth, not SI estimates.
     */
    UNIT(): string;
    UNIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * ADS bibcode when provided or unambiguously present in the source link.
     * Absent means unknown; archive references are not always ADS publications.
     */
    REFERENCE_BIBCODE(): string | null;
    REFERENCE_BIBCODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REFERENCE_URL(): string | null;
    REFERENCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The complete source reference cell, including archive reflink markup.
     */
    REFERENCE_TEXT(): string | null;
    REFERENCE_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC retrieval time of this parameter's source.
     */
    RETRIEVED_AT(): string;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startEXOParameter(builder: flatbuffers.Builder): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addErr1(builder: flatbuffers.Builder, ERR1: number): void;
    static addErr2(builder: flatbuffers.Builder, ERR2: number): void;
    static addLimit(builder: flatbuffers.Builder, LIMIT: number): void;
    static addDisplay(builder: flatbuffers.Builder, DISPLAYOffset: flatbuffers.Offset): void;
    static addUnit(builder: flatbuffers.Builder, UNITOffset: flatbuffers.Offset): void;
    static addReferenceBibcode(builder: flatbuffers.Builder, REFERENCE_BIBCODEOffset: flatbuffers.Offset): void;
    static addReferenceUrl(builder: flatbuffers.Builder, REFERENCE_URLOffset: flatbuffers.Offset): void;
    static addReferenceText(builder: flatbuffers.Builder, REFERENCE_TEXTOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endEXOParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEXOParameter(builder: flatbuffers.Builder, VALUE: number, ERR1: number, ERR2: number, LIMIT: number, DISPLAYOffset: flatbuffers.Offset, UNITOffset: flatbuffers.Offset, REFERENCE_BIBCODEOffset: flatbuffers.Offset, REFERENCE_URLOffset: flatbuffers.Offset, REFERENCE_TEXTOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EXOParameterT;
    unpackTo(_o: EXOParameterT): void;
}
export declare class EXOParameterT implements flatbuffers.IGeneratedObject {
    VALUE: number;
    ERR1: number;
    ERR2: number;
    LIMIT: number;
    DISPLAY: string | Uint8Array | null;
    UNIT: string | Uint8Array | null;
    REFERENCE_BIBCODE: string | Uint8Array | null;
    REFERENCE_URL: string | Uint8Array | null;
    REFERENCE_TEXT: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(VALUE?: number, ERR1?: number, ERR2?: number, LIMIT?: number, DISPLAY?: string | Uint8Array | null, UNIT?: string | Uint8Array | null, REFERENCE_BIBCODE?: string | Uint8Array | null, REFERENCE_URL?: string | Uint8Array | null, REFERENCE_TEXT?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EXOParameter.d.ts.map