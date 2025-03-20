import * as flatbuffers from 'flatbuffers';
import { ScoreType } from './ScoreType.js';
export declare class Score implements flatbuffers.IUnpackableObject<ScoreT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Score;
    static getRootAsScore(bb: flatbuffers.ByteBuffer, obj?: Score): Score;
    static getSizePrefixedRootAsScore(bb: flatbuffers.ByteBuffer, obj?: Score): Score;
    NORAD_CAT_ID(): string | null;
    NORAD_CAT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TYPE(): ScoreType;
    TAG(): string | null;
    TAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCORE(): number;
    static startScore(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_IDOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPE: ScoreType): void;
    static addTag(builder: flatbuffers.Builder, TAGOffset: flatbuffers.Offset): void;
    static addScore(builder: flatbuffers.Builder, SCORE: number): void;
    static endScore(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createScore(builder: flatbuffers.Builder, NORAD_CAT_IDOffset: flatbuffers.Offset, TYPE: ScoreType, TAGOffset: flatbuffers.Offset, SCORE: number): flatbuffers.Offset;
    unpack(): ScoreT;
    unpackTo(_o: ScoreT): void;
}
export declare class ScoreT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: string | Uint8Array | null;
    TYPE: ScoreType;
    TAG: string | Uint8Array | null;
    SCORE: number;
    constructor(NORAD_CAT_ID?: string | Uint8Array | null, TYPE?: ScoreType, TAG?: string | Uint8Array | null, SCORE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Score.d.ts.map