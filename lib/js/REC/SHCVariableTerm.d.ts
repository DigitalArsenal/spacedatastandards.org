import * as flatbuffers from 'flatbuffers';
/**
 * One time-variable coefficient term: a rate or a periodic variation applied
 * to the static coefficient at DEGREE/ORDER.
 */
export declare class SHCVariableTerm implements flatbuffers.IUnpackableObject<SHCVariableTermT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SHCVariableTerm;
    static getRootAsSHCVariableTerm(bb: flatbuffers.ByteBuffer, obj?: SHCVariableTerm): SHCVariableTerm;
    static getSizePrefixedRootAsSHCVariableTerm(bb: flatbuffers.ByteBuffer, obj?: SHCVariableTerm): SHCVariableTerm;
    DEGREE(): number;
    ORDER(): number;
    /**
     * Kind of variation: "TREND", "ASIN", "ACOS".
     */
    TERM_TYPE(): string | null;
    TERM_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coefficient of the variation for the cosine (C) and sine (S) terms.
     */
    C_VALUE(): number;
    S_VALUE(): number;
    /**
     * Period of a periodic term, years. Unused for a trend.
     */
    PERIOD_YEARS(): number;
    /**
     * Epoch the term is referenced to, ISO 8601.
     */
    REFERENCE_EPOCH(): string | null;
    REFERENCE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSHCVariableTerm(builder: flatbuffers.Builder): void;
    static addDegree(builder: flatbuffers.Builder, DEGREE: number): void;
    static addOrder(builder: flatbuffers.Builder, ORDER: number): void;
    static addTermType(builder: flatbuffers.Builder, TERM_TYPEOffset: flatbuffers.Offset): void;
    static addCValue(builder: flatbuffers.Builder, C_VALUE: number): void;
    static addSValue(builder: flatbuffers.Builder, S_VALUE: number): void;
    static addPeriodYears(builder: flatbuffers.Builder, PERIOD_YEARS: number): void;
    static addReferenceEpoch(builder: flatbuffers.Builder, REFERENCE_EPOCHOffset: flatbuffers.Offset): void;
    static endSHCVariableTerm(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSHCVariableTerm(builder: flatbuffers.Builder, DEGREE: number, ORDER: number, TERM_TYPEOffset: flatbuffers.Offset, C_VALUE: number, S_VALUE: number, PERIOD_YEARS: number, REFERENCE_EPOCHOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SHCVariableTermT;
    unpackTo(_o: SHCVariableTermT): void;
}
export declare class SHCVariableTermT implements flatbuffers.IGeneratedObject {
    DEGREE: number;
    ORDER: number;
    TERM_TYPE: string | Uint8Array | null;
    C_VALUE: number;
    S_VALUE: number;
    PERIOD_YEARS: number;
    REFERENCE_EPOCH: string | Uint8Array | null;
    constructor(DEGREE?: number, ORDER?: number, TERM_TYPE?: string | Uint8Array | null, C_VALUE?: number, S_VALUE?: number, PERIOD_YEARS?: number, REFERENCE_EPOCH?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SHCVariableTerm.d.ts.map