// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { Score } from './Score.js';
/**
 * Hypothesis Message
 */
export class HYP {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsHYP(bb, obj) {
        return (obj || new HYP()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsHYP(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new HYP()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static bufferHasIdentifier(bb) {
        return bb.__has_identifier('$HYP');
    }
    CAT_IDS(index, optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
    }
    catIdsLength() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    SIT_IDS(index, optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
    }
    sitIdsLength() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    NAME(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    CATEGORY(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    ROW_INDICATORS(index, optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
    }
    rowIndicatorsLength() {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    COL_INDICATORS(index, optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
    }
    colIndicatorsLength() {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    /**
     * Matrix data as a boolean array in row major format; if overflow, adds additional rows
     */
    MATRIX(index) {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? !!this.bb.readInt8(this.bb.__vector(this.bb_pos + offset) + index) : false;
    }
    matrixLength() {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    matrixArray() {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? new Int8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    }
    /**
     * Scores for objects
     */
    SCORE(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? (obj || new Score()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    scoreLength() {
        const offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    ANALYSIS_METHOD(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    EVENT_START_TIME(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    EVENT_END_TIME(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 24);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    static startHYP(builder) {
        builder.startObject(11);
    }
    static addCatIds(builder, CAT_IDSOffset) {
        builder.addFieldOffset(0, CAT_IDSOffset, 0);
    }
    static createCatIdsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startCatIdsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addSitIds(builder, SIT_IDSOffset) {
        builder.addFieldOffset(1, SIT_IDSOffset, 0);
    }
    static createSitIdsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startSitIdsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addName(builder, NAMEOffset) {
        builder.addFieldOffset(2, NAMEOffset, 0);
    }
    static addCategory(builder, CATEGORYOffset) {
        builder.addFieldOffset(3, CATEGORYOffset, 0);
    }
    static addRowIndicators(builder, ROW_INDICATORSOffset) {
        builder.addFieldOffset(4, ROW_INDICATORSOffset, 0);
    }
    static createRowIndicatorsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startRowIndicatorsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addColIndicators(builder, COL_INDICATORSOffset) {
        builder.addFieldOffset(5, COL_INDICATORSOffset, 0);
    }
    static createColIndicatorsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startColIndicatorsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addMatrix(builder, MATRIXOffset) {
        builder.addFieldOffset(6, MATRIXOffset, 0);
    }
    static createMatrixVector(builder, data) {
        builder.startVector(1, data.length, 1);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addInt8(+data[i]);
        }
        return builder.endVector();
    }
    static startMatrixVector(builder, numElems) {
        builder.startVector(1, numElems, 1);
    }
    static addScore(builder, SCOREOffset) {
        builder.addFieldOffset(7, SCOREOffset, 0);
    }
    static createScoreVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startScoreVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addAnalysisMethod(builder, ANALYSIS_METHODOffset) {
        builder.addFieldOffset(8, ANALYSIS_METHODOffset, 0);
    }
    static addEventStartTime(builder, EVENT_START_TIMEOffset) {
        builder.addFieldOffset(9, EVENT_START_TIMEOffset, 0);
    }
    static addEventEndTime(builder, EVENT_END_TIMEOffset) {
        builder.addFieldOffset(10, EVENT_END_TIMEOffset, 0);
    }
    static endHYP(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static finishHYPBuffer(builder, offset) {
        builder.finish(offset, '$HYP');
    }
    static finishSizePrefixedHYPBuffer(builder, offset) {
        builder.finish(offset, '$HYP', true);
    }
    static createHYP(builder, CAT_IDSOffset, SIT_IDSOffset, NAMEOffset, CATEGORYOffset, ROW_INDICATORSOffset, COL_INDICATORSOffset, MATRIXOffset, SCOREOffset, ANALYSIS_METHODOffset, EVENT_START_TIMEOffset, EVENT_END_TIMEOffset) {
        HYP.startHYP(builder);
        HYP.addCatIds(builder, CAT_IDSOffset);
        HYP.addSitIds(builder, SIT_IDSOffset);
        HYP.addName(builder, NAMEOffset);
        HYP.addCategory(builder, CATEGORYOffset);
        HYP.addRowIndicators(builder, ROW_INDICATORSOffset);
        HYP.addColIndicators(builder, COL_INDICATORSOffset);
        HYP.addMatrix(builder, MATRIXOffset);
        HYP.addScore(builder, SCOREOffset);
        HYP.addAnalysisMethod(builder, ANALYSIS_METHODOffset);
        HYP.addEventStartTime(builder, EVENT_START_TIMEOffset);
        HYP.addEventEndTime(builder, EVENT_END_TIMEOffset);
        return HYP.endHYP(builder);
    }
    unpack() {
        return new HYPT(this.bb.createScalarList(this.CAT_IDS.bind(this), this.catIdsLength()), this.bb.createScalarList(this.SIT_IDS.bind(this), this.sitIdsLength()), this.NAME(), this.CATEGORY(), this.bb.createScalarList(this.ROW_INDICATORS.bind(this), this.rowIndicatorsLength()), this.bb.createScalarList(this.COL_INDICATORS.bind(this), this.colIndicatorsLength()), this.bb.createScalarList(this.MATRIX.bind(this), this.matrixLength()), this.bb.createObjList(this.SCORE.bind(this), this.scoreLength()), this.ANALYSIS_METHOD(), this.EVENT_START_TIME(), this.EVENT_END_TIME());
    }
    unpackTo(_o) {
        _o.CAT_IDS = this.bb.createScalarList(this.CAT_IDS.bind(this), this.catIdsLength());
        _o.SIT_IDS = this.bb.createScalarList(this.SIT_IDS.bind(this), this.sitIdsLength());
        _o.NAME = this.NAME();
        _o.CATEGORY = this.CATEGORY();
        _o.ROW_INDICATORS = this.bb.createScalarList(this.ROW_INDICATORS.bind(this), this.rowIndicatorsLength());
        _o.COL_INDICATORS = this.bb.createScalarList(this.COL_INDICATORS.bind(this), this.colIndicatorsLength());
        _o.MATRIX = this.bb.createScalarList(this.MATRIX.bind(this), this.matrixLength());
        _o.SCORE = this.bb.createObjList(this.SCORE.bind(this), this.scoreLength());
        _o.ANALYSIS_METHOD = this.ANALYSIS_METHOD();
        _o.EVENT_START_TIME = this.EVENT_START_TIME();
        _o.EVENT_END_TIME = this.EVENT_END_TIME();
    }
}
export class HYPT {
    constructor(CAT_IDS = [], SIT_IDS = [], NAME = null, CATEGORY = null, ROW_INDICATORS = [], COL_INDICATORS = [], MATRIX = [], SCORE = [], ANALYSIS_METHOD = null, EVENT_START_TIME = null, EVENT_END_TIME = null) {
        this.CAT_IDS = CAT_IDS;
        this.SIT_IDS = SIT_IDS;
        this.NAME = NAME;
        this.CATEGORY = CATEGORY;
        this.ROW_INDICATORS = ROW_INDICATORS;
        this.COL_INDICATORS = COL_INDICATORS;
        this.MATRIX = MATRIX;
        this.SCORE = SCORE;
        this.ANALYSIS_METHOD = ANALYSIS_METHOD;
        this.EVENT_START_TIME = EVENT_START_TIME;
        this.EVENT_END_TIME = EVENT_END_TIME;
    }
    pack(builder) {
        const CAT_IDS = HYP.createCatIdsVector(builder, builder.createObjectOffsetList(this.CAT_IDS));
        const SIT_IDS = HYP.createSitIdsVector(builder, builder.createObjectOffsetList(this.SIT_IDS));
        const NAME = (this.NAME !== null ? builder.createString(this.NAME) : 0);
        const CATEGORY = (this.CATEGORY !== null ? builder.createString(this.CATEGORY) : 0);
        const ROW_INDICATORS = HYP.createRowIndicatorsVector(builder, builder.createObjectOffsetList(this.ROW_INDICATORS));
        const COL_INDICATORS = HYP.createColIndicatorsVector(builder, builder.createObjectOffsetList(this.COL_INDICATORS));
        const MATRIX = HYP.createMatrixVector(builder, this.MATRIX);
        const SCORE = HYP.createScoreVector(builder, builder.createObjectOffsetList(this.SCORE));
        const ANALYSIS_METHOD = (this.ANALYSIS_METHOD !== null ? builder.createString(this.ANALYSIS_METHOD) : 0);
        const EVENT_START_TIME = (this.EVENT_START_TIME !== null ? builder.createString(this.EVENT_START_TIME) : 0);
        const EVENT_END_TIME = (this.EVENT_END_TIME !== null ? builder.createString(this.EVENT_END_TIME) : 0);
        return HYP.createHYP(builder, CAT_IDS, SIT_IDS, NAME, CATEGORY, ROW_INDICATORS, COL_INDICATORS, MATRIX, SCORE, ANALYSIS_METHOD, EVENT_START_TIME, EVENT_END_TIME);
    }
}
