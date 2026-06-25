import * as flatbuffers from 'flatbuffers';
import { fieldStreamAudienceCategory } from './fieldStreamAudienceCategory.js';
export declare class FieldStreamAudience implements flatbuffers.IUnpackableObject<FieldStreamAudienceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FieldStreamAudience;
    static getRootAsFieldStreamAudience(bb: flatbuffers.ByteBuffer, obj?: FieldStreamAudience): FieldStreamAudience;
    static getSizePrefixedRootAsFieldStreamAudience(bb: flatbuffers.ByteBuffer, obj?: FieldStreamAudience): FieldStreamAudience;
    AUDIENCE_TYPE(): fieldStreamAudienceCategory;
    SUBJECT_ID(): string | null;
    SUBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SUBJECT_EPM_CID(): string | null;
    SUBJECT_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SUBJECT_KEY_ID(): string | null;
    SUBJECT_KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startFieldStreamAudience(builder: flatbuffers.Builder): void;
    static addAudienceType(builder: flatbuffers.Builder, AUDIENCE_TYPE: fieldStreamAudienceCategory): void;
    static addSubjectId(builder: flatbuffers.Builder, SUBJECT_IDOffset: flatbuffers.Offset): void;
    static addSubjectEpmCid(builder: flatbuffers.Builder, SUBJECT_EPM_CIDOffset: flatbuffers.Offset): void;
    static addSubjectKeyId(builder: flatbuffers.Builder, SUBJECT_KEY_IDOffset: flatbuffers.Offset): void;
    static endFieldStreamAudience(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFieldStreamAudience(builder: flatbuffers.Builder, AUDIENCE_TYPE: fieldStreamAudienceCategory, SUBJECT_IDOffset: flatbuffers.Offset, SUBJECT_EPM_CIDOffset: flatbuffers.Offset, SUBJECT_KEY_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FieldStreamAudienceT;
    unpackTo(_o: FieldStreamAudienceT): void;
}
export declare class FieldStreamAudienceT implements flatbuffers.IGeneratedObject {
    AUDIENCE_TYPE: fieldStreamAudienceCategory;
    SUBJECT_ID: string | Uint8Array | null;
    SUBJECT_EPM_CID: string | Uint8Array | null;
    SUBJECT_KEY_ID: string | Uint8Array | null;
    constructor(AUDIENCE_TYPE?: fieldStreamAudienceCategory, SUBJECT_ID?: string | Uint8Array | null, SUBJECT_EPM_CID?: string | Uint8Array | null, SUBJECT_KEY_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FieldStreamAudience.d.ts.map