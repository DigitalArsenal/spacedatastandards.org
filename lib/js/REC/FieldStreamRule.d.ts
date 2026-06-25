import * as flatbuffers from 'flatbuffers';
import { fieldStreamDecisionCategory } from './fieldStreamDecisionCategory.js';
export declare class FieldStreamRule implements flatbuffers.IUnpackableObject<FieldStreamRuleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FieldStreamRule;
    static getRootAsFieldStreamRule(bb: flatbuffers.ByteBuffer, obj?: FieldStreamRule): FieldStreamRule;
    static getSizePrefixedRootAsFieldStreamRule(bb: flatbuffers.ByteBuffer, obj?: FieldStreamRule): FieldStreamRule;
    FIELD_PATH(): string;
    FIELD_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    FIELD_ID_PATH(index: number): number | null;
    fieldIdPathLength(): number;
    fieldIdPathArray(): Uint32Array | null;
    DECISION(): fieldStreamDecisionCategory;
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    REQUIRED_ATTRIBUTES(index: number): string;
    REQUIRED_ATTRIBUTES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    requiredAttributesLength(): number;
    KEY_ID(): string | null;
    KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startFieldStreamRule(builder: flatbuffers.Builder): void;
    static addFieldPath(builder: flatbuffers.Builder, FIELD_PATHOffset: flatbuffers.Offset): void;
    static addFieldIdPath(builder: flatbuffers.Builder, FIELD_ID_PATHOffset: flatbuffers.Offset): void;
    static createFieldIdPathVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFieldIdPathVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFieldIdPathVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDecision(builder: flatbuffers.Builder, DECISION: fieldStreamDecisionCategory): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRequiredAttributes(builder: flatbuffers.Builder, REQUIRED_ATTRIBUTESOffset: flatbuffers.Offset): void;
    static createRequiredAttributesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRequiredAttributesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKeyId(builder: flatbuffers.Builder, KEY_IDOffset: flatbuffers.Offset): void;
    static endFieldStreamRule(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFieldStreamRule(builder: flatbuffers.Builder, FIELD_PATHOffset: flatbuffers.Offset, FIELD_ID_PATHOffset: flatbuffers.Offset, DECISION: fieldStreamDecisionCategory, TAGSOffset: flatbuffers.Offset, REQUIRED_ATTRIBUTESOffset: flatbuffers.Offset, KEY_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FieldStreamRuleT;
    unpackTo(_o: FieldStreamRuleT): void;
}
export declare class FieldStreamRuleT implements flatbuffers.IGeneratedObject {
    FIELD_PATH: string | Uint8Array | null;
    FIELD_ID_PATH: (number)[];
    DECISION: fieldStreamDecisionCategory;
    TAGS: (string)[];
    REQUIRED_ATTRIBUTES: (string)[];
    KEY_ID: string | Uint8Array | null;
    constructor(FIELD_PATH?: string | Uint8Array | null, FIELD_ID_PATH?: (number)[], DECISION?: fieldStreamDecisionCategory, TAGS?: (string)[], REQUIRED_ATTRIBUTES?: (string)[], KEY_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FieldStreamRule.d.ts.map