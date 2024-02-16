import * as flatbuffers from 'flatbuffers';
import { Score, ScoreT } from './Score.js';
/**
 * Hypothesis Message
 */
export declare class HYP implements flatbuffers.IUnpackableObject<HYPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): HYP;
    static getRootAsHYP(bb: flatbuffers.ByteBuffer, obj?: HYP): HYP;
    static getSizePrefixedRootAsHYP(bb: flatbuffers.ByteBuffer, obj?: HYP): HYP;
    /**
     * Space Objects Involved
     */
    CAT_IDS(index: number): string;
    CAT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    catIdsLength(): number;
    /**
     * Space Objects Involved
     */
    SIT_IDS(index: number): string;
    SIT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sitIdsLength(): number;
    /**
     * Name of the hypothesis
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Category of the hypothesis
     */
    CATEGORY(): string | null;
    CATEGORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Row indicators for the hypothesis matrix
     */
    ROW_INDICATORS(index: number): string;
    ROW_INDICATORS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rowIndicatorsLength(): number;
    /**
     * Column indicators for the hypothesis matrix
     */
    COL_INDICATORS(index: number): string;
    COL_INDICATORS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    colIndicatorsLength(): number;
    /**
     * Matrix data as a boolean array in row major format; if overflow, adds additional rows
     */
    MATRIX(index: number): boolean | null;
    matrixLength(): number;
    matrixArray(): Int8Array | null;
    /**
     * Scores for objects
     */
    SCORE(index: number, obj?: Score): Score | null;
    scoreLength(): number;
    /**
     * Analysis methodology used to form the hypothesis
     */
    ANALYSIS_METHOD(): string | null;
    ANALYSIS_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EVENT_START_TIME(): string | null;
    EVENT_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EVENT_END_TIME(): string | null;
    EVENT_END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startHYP(builder: flatbuffers.Builder): void;
    static addCatIds(builder: flatbuffers.Builder, CAT_IDSOffset: flatbuffers.Offset): void;
    static createCatIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCatIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSitIds(builder: flatbuffers.Builder, SIT_IDSOffset: flatbuffers.Offset): void;
    static createSitIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSitIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addCategory(builder: flatbuffers.Builder, CATEGORYOffset: flatbuffers.Offset): void;
    static addRowIndicators(builder: flatbuffers.Builder, ROW_INDICATORSOffset: flatbuffers.Offset): void;
    static createRowIndicatorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowIndicatorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColIndicators(builder: flatbuffers.Builder, COL_INDICATORSOffset: flatbuffers.Offset): void;
    static createColIndicatorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startColIndicatorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMatrix(builder: flatbuffers.Builder, MATRIXOffset: flatbuffers.Offset): void;
    static createMatrixVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset;
    static startMatrixVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScore(builder: flatbuffers.Builder, SCOREOffset: flatbuffers.Offset): void;
    static createScoreVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startScoreVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAnalysisMethod(builder: flatbuffers.Builder, ANALYSIS_METHODOffset: flatbuffers.Offset): void;
    static addEventStartTime(builder: flatbuffers.Builder, EVENT_START_TIMEOffset: flatbuffers.Offset): void;
    static addEventEndTime(builder: flatbuffers.Builder, EVENT_END_TIMEOffset: flatbuffers.Offset): void;
    static endHYP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createHYP(builder: flatbuffers.Builder, CAT_IDSOffset: flatbuffers.Offset, SIT_IDSOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, CATEGORYOffset: flatbuffers.Offset, ROW_INDICATORSOffset: flatbuffers.Offset, COL_INDICATORSOffset: flatbuffers.Offset, MATRIXOffset: flatbuffers.Offset, SCOREOffset: flatbuffers.Offset, ANALYSIS_METHODOffset: flatbuffers.Offset, EVENT_START_TIMEOffset: flatbuffers.Offset, EVENT_END_TIMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): HYPT;
    unpackTo(_o: HYPT): void;
}
export declare class HYPT implements flatbuffers.IGeneratedObject {
    CAT_IDS: (string)[];
    SIT_IDS: (string)[];
    NAME: string | Uint8Array | null;
    CATEGORY: string | Uint8Array | null;
    ROW_INDICATORS: (string)[];
    COL_INDICATORS: (string)[];
    MATRIX: (boolean)[];
    SCORE: (ScoreT)[];
    ANALYSIS_METHOD: string | Uint8Array | null;
    EVENT_START_TIME: string | Uint8Array | null;
    EVENT_END_TIME: string | Uint8Array | null;
    constructor(CAT_IDS?: (string)[], SIT_IDS?: (string)[], NAME?: string | Uint8Array | null, CATEGORY?: string | Uint8Array | null, ROW_INDICATORS?: (string)[], COL_INDICATORS?: (string)[], MATRIX?: (boolean)[], SCORE?: (ScoreT)[], ANALYSIS_METHOD?: string | Uint8Array | null, EVENT_START_TIME?: string | Uint8Array | null, EVENT_END_TIME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=HYP.d.ts.map