import * as flatbuffers from 'flatbuffers';
import { covarianceRule } from './covarianceRule.js';
/**
 * Why an earlier rule did not apply.
 */
export declare class ERMRuleNote implements flatbuffers.IUnpackableObject<ERMRuleNoteT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMRuleNote;
    static getRootAsERMRuleNote(bb: flatbuffers.ByteBuffer, obj?: ERMRuleNote): ERMRuleNote;
    static getSizePrefixedRootAsERMRuleNote(bb: flatbuffers.ByteBuffer, obj?: ERMRuleNote): ERMRuleNote;
    RULE(): covarianceRule;
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Row epoch; empty = whole product.
     */
    ROW(): string | null;
    ROW(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    AGE_DAYS(): number;
    static startERMRuleNote(builder: flatbuffers.Builder): void;
    static addRule(builder: flatbuffers.Builder, RULE: covarianceRule): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static addRow(builder: flatbuffers.Builder, ROWOffset: flatbuffers.Offset): void;
    static addAgeDays(builder: flatbuffers.Builder, AGE_DAYS: number): void;
    static endERMRuleNote(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMRuleNote(builder: flatbuffers.Builder, RULE: covarianceRule, REASONOffset: flatbuffers.Offset, ROWOffset: flatbuffers.Offset, AGE_DAYS: number): flatbuffers.Offset;
    unpack(): ERMRuleNoteT;
    unpackTo(_o: ERMRuleNoteT): void;
}
export declare class ERMRuleNoteT implements flatbuffers.IGeneratedObject {
    RULE: covarianceRule;
    REASON: string | Uint8Array | null;
    ROW: string | Uint8Array | null;
    AGE_DAYS: number;
    constructor(RULE?: covarianceRule, REASON?: string | Uint8Array | null, ROW?: string | Uint8Array | null, AGE_DAYS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMRuleNote.d.ts.map