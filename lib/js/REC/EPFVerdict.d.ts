import * as flatbuffers from 'flatbuffers';
import { epfLimitCategory } from './epfLimitCategory.js';
/**
 * FlatSQL-queryable compliance verdict consumed directly by `$RPT`.
 */
export declare class EPFVerdict implements flatbuffers.IUnpackableObject<EPFVerdictT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EPFVerdict;
    static getRootAsEPFVerdict(bb: flatbuffers.ByteBuffer, obj?: EPFVerdict): EPFVerdict;
    static getSizePrefixedRootAsEPFVerdict(bb: flatbuffers.ByteBuffer, obj?: EPFVerdict): EPFVerdict;
    LIMIT_KIND(): epfLimitCategory;
    COMPLIANT(): boolean;
    /**
     * Worst margin to the applicable limit, dB. Positive means compliant.
     */
    MARGIN_DB(): number;
    PERCENT_TIME_EXCEEDED(): number;
    WORST_SAMPLE_INDEX(): number;
    NOTE(): string | null;
    NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEPFVerdict(builder: flatbuffers.Builder): void;
    static addLimitKind(builder: flatbuffers.Builder, LIMIT_KIND: epfLimitCategory): void;
    static addCompliant(builder: flatbuffers.Builder, COMPLIANT: boolean): void;
    static addMarginDb(builder: flatbuffers.Builder, MARGIN_DB: number): void;
    static addPercentTimeExceeded(builder: flatbuffers.Builder, PERCENT_TIME_EXCEEDED: number): void;
    static addWorstSampleIndex(builder: flatbuffers.Builder, WORST_SAMPLE_INDEX: number): void;
    static addNote(builder: flatbuffers.Builder, NOTEOffset: flatbuffers.Offset): void;
    static endEPFVerdict(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEPFVerdict(builder: flatbuffers.Builder, LIMIT_KIND: epfLimitCategory, COMPLIANT: boolean, MARGIN_DB: number, PERCENT_TIME_EXCEEDED: number, WORST_SAMPLE_INDEX: number, NOTEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EPFVerdictT;
    unpackTo(_o: EPFVerdictT): void;
}
export declare class EPFVerdictT implements flatbuffers.IGeneratedObject {
    LIMIT_KIND: epfLimitCategory;
    COMPLIANT: boolean;
    MARGIN_DB: number;
    PERCENT_TIME_EXCEEDED: number;
    WORST_SAMPLE_INDEX: number;
    NOTE: string | Uint8Array | null;
    constructor(LIMIT_KIND?: epfLimitCategory, COMPLIANT?: boolean, MARGIN_DB?: number, PERCENT_TIME_EXCEEDED?: number, WORST_SAMPLE_INDEX?: number, NOTE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EPFVerdict.d.ts.map