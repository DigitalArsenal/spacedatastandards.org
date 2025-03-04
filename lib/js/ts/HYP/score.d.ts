import * as flatbuffers from 'flatbuffers';
import { ScoreType } from './score-type.js';
export declare class Score implements flatbuffers.IUnpackableObject<ScoreT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Score;
    static getRootAsScore(bb: flatbuffers.ByteBuffer, obj?: Score): Score;
    static getSizePrefixedRootAsScore(bb: flatbuffers.ByteBuffer, obj?: Score): Score;
    noradCatId(): string | null;
    noradCatId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    type(): ScoreType;
    tag(): string | null;
    tag(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    score(): number;
    static startScore(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, noradCatIdOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, type: ScoreType): void;
    static addTag(builder: flatbuffers.Builder, tagOffset: flatbuffers.Offset): void;
    static addScore(builder: flatbuffers.Builder, score: number): void;
    static endScore(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createScore(builder: flatbuffers.Builder, noradCatIdOffset: flatbuffers.Offset, type: ScoreType, tagOffset: flatbuffers.Offset, score: number): flatbuffers.Offset;
    unpack(): ScoreT;
    unpackTo(_o: ScoreT): void;
}
export declare class ScoreT implements flatbuffers.IGeneratedObject {
    noradCatId: string | Uint8Array | null;
    type: ScoreType;
    tag: string | Uint8Array | null;
    score: number;
    constructor(noradCatId?: string | Uint8Array | null, type?: ScoreType, tag?: string | Uint8Array | null, score?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=score.d.ts.map