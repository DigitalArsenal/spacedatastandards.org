import * as flatbuffers from 'flatbuffers';
import { Score, ScoreT } from './score.js';
/**
 * Hypothesis Message
 */
export declare class HYP implements flatbuffers.IUnpackableObject<HYPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): HYP;
    static getRootAsHYP(bb: flatbuffers.ByteBuffer, obj?: HYP): HYP;
    static getSizePrefixedRootAsHYP(bb: flatbuffers.ByteBuffer, obj?: HYP): HYP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Space Objects Involved
     */
    catIds(index: number): string;
    catIds(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    catIdsLength(): number;
    /**
     * Space Objects Involved
     */
    sitIds(index: number): string;
    sitIds(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sitIdsLength(): number;
    /**
     * Name of the hypothesis
     */
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Category of the hypothesis
     */
    category(): string | null;
    category(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Row indicators for the hypothesis matrix
     */
    rowIndicators(index: number): string;
    rowIndicators(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rowIndicatorsLength(): number;
    /**
     * Column indicators for the hypothesis matrix
     */
    colIndicators(index: number): string;
    colIndicators(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    colIndicatorsLength(): number;
    /**
     * Matrix data as a boolean array in row major format; if overflow, adds additional rows
     */
    matrix(index: number): boolean | null;
    matrixLength(): number;
    matrixArray(): Int8Array | null;
    /**
     * Scores for objects
     */
    score(index: number, obj?: Score): Score | null;
    scoreLength(): number;
    /**
     * Analysis methodology used to form the hypothesis
     */
    analysisMethod(): string | null;
    analysisMethod(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    eventStartTime(): string | null;
    eventStartTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    eventEndTime(): string | null;
    eventEndTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startHYP(builder: flatbuffers.Builder): void;
    static addCatIds(builder: flatbuffers.Builder, catIdsOffset: flatbuffers.Offset): void;
    static createCatIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCatIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSitIds(builder: flatbuffers.Builder, sitIdsOffset: flatbuffers.Offset): void;
    static createSitIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSitIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addCategory(builder: flatbuffers.Builder, categoryOffset: flatbuffers.Offset): void;
    static addRowIndicators(builder: flatbuffers.Builder, rowIndicatorsOffset: flatbuffers.Offset): void;
    static createRowIndicatorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowIndicatorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColIndicators(builder: flatbuffers.Builder, colIndicatorsOffset: flatbuffers.Offset): void;
    static createColIndicatorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startColIndicatorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMatrix(builder: flatbuffers.Builder, matrixOffset: flatbuffers.Offset): void;
    static createMatrixVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset;
    static startMatrixVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScore(builder: flatbuffers.Builder, scoreOffset: flatbuffers.Offset): void;
    static createScoreVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startScoreVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAnalysisMethod(builder: flatbuffers.Builder, analysisMethodOffset: flatbuffers.Offset): void;
    static addEventStartTime(builder: flatbuffers.Builder, eventStartTimeOffset: flatbuffers.Offset): void;
    static addEventEndTime(builder: flatbuffers.Builder, eventEndTimeOffset: flatbuffers.Offset): void;
    static endHYP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishHYPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedHYPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createHYP(builder: flatbuffers.Builder, catIdsOffset: flatbuffers.Offset, sitIdsOffset: flatbuffers.Offset, nameOffset: flatbuffers.Offset, categoryOffset: flatbuffers.Offset, rowIndicatorsOffset: flatbuffers.Offset, colIndicatorsOffset: flatbuffers.Offset, matrixOffset: flatbuffers.Offset, scoreOffset: flatbuffers.Offset, analysisMethodOffset: flatbuffers.Offset, eventStartTimeOffset: flatbuffers.Offset, eventEndTimeOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): HYPT;
    unpackTo(_o: HYPT): void;
}
export declare class HYPT implements flatbuffers.IGeneratedObject {
    catIds: (string)[];
    sitIds: (string)[];
    name: string | Uint8Array | null;
    category: string | Uint8Array | null;
    rowIndicators: (string)[];
    colIndicators: (string)[];
    matrix: (boolean)[];
    score: (ScoreT)[];
    analysisMethod: string | Uint8Array | null;
    eventStartTime: string | Uint8Array | null;
    eventEndTime: string | Uint8Array | null;
    constructor(catIds?: (string)[], sitIds?: (string)[], name?: string | Uint8Array | null, category?: string | Uint8Array | null, rowIndicators?: (string)[], colIndicators?: (string)[], matrix?: (boolean)[], score?: (ScoreT)[], analysisMethod?: string | Uint8Array | null, eventStartTime?: string | Uint8Array | null, eventEndTime?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=hyp.d.ts.map