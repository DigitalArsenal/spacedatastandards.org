// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Score, ScoreT } from './Score.js';


/**
 * Hypothesis Message
 */
export class HYP implements flatbuffers.IUnpackableObject<HYPT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):HYP {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsHYP(bb:flatbuffers.ByteBuffer, obj?:HYP):HYP {
  return (obj || new HYP()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsHYP(bb:flatbuffers.ByteBuffer, obj?:HYP):HYP {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new HYP()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('$HYP');
}

/**
 * Space Objects Involved
 */
CAT_IDS(index: number):string
CAT_IDS(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
CAT_IDS(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

catIdsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Space Objects Involved
 */
SIT_IDS(index: number):string
SIT_IDS(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
SIT_IDS(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

sitIdsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Name of the hypothesis
 */
NAME():string|null
NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Category of the hypothesis
 */
CATEGORY():string|null
CATEGORY(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
CATEGORY(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Row indicators for the hypothesis matrix
 */
ROW_INDICATORS(index: number):string
ROW_INDICATORS(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
ROW_INDICATORS(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

rowIndicatorsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Column indicators for the hypothesis matrix
 */
COL_INDICATORS(index: number):string
COL_INDICATORS(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
COL_INDICATORS(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

colIndicatorsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Matrix data as a boolean array in row major format; if overflow, adds additional rows
 */
MATRIX(index: number):boolean|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? !!this.bb!.readInt8(this.bb!.__vector(this.bb_pos + offset) + index) : false;
}

matrixLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

matrixArray():Int8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? new Int8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

/**
 * Scores for objects
 */
SCORE(index: number, obj?:Score):Score|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new Score()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

scoreLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Analysis methodology used to form the hypothesis
 */
ANALYSIS_METHOD():string|null
ANALYSIS_METHOD(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ANALYSIS_METHOD(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

EVENT_START_TIME():string|null
EVENT_START_TIME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
EVENT_START_TIME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

EVENT_END_TIME():string|null
EVENT_END_TIME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
EVENT_END_TIME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startHYP(builder:flatbuffers.Builder) {
  builder.startObject(11);
}

static addCatIds(builder:flatbuffers.Builder, CAT_IDSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, CAT_IDSOffset, 0);
}

static createCatIdsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startCatIdsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addSitIds(builder:flatbuffers.Builder, SIT_IDSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, SIT_IDSOffset, 0);
}

static createSitIdsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startSitIdsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addName(builder:flatbuffers.Builder, NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, NAMEOffset, 0);
}

static addCategory(builder:flatbuffers.Builder, CATEGORYOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, CATEGORYOffset, 0);
}

static addRowIndicators(builder:flatbuffers.Builder, ROW_INDICATORSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, ROW_INDICATORSOffset, 0);
}

static createRowIndicatorsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startRowIndicatorsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addColIndicators(builder:flatbuffers.Builder, COL_INDICATORSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, COL_INDICATORSOffset, 0);
}

static createColIndicatorsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startColIndicatorsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addMatrix(builder:flatbuffers.Builder, MATRIXOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, MATRIXOffset, 0);
}

static createMatrixVector(builder:flatbuffers.Builder, data:boolean[]):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(+data[i]!);
  }
  return builder.endVector();
}

static startMatrixVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addScore(builder:flatbuffers.Builder, SCOREOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, SCOREOffset, 0);
}

static createScoreVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startScoreVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addAnalysisMethod(builder:flatbuffers.Builder, ANALYSIS_METHODOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, ANALYSIS_METHODOffset, 0);
}

static addEventStartTime(builder:flatbuffers.Builder, EVENT_START_TIMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, EVENT_START_TIMEOffset, 0);
}

static addEventEndTime(builder:flatbuffers.Builder, EVENT_END_TIMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, EVENT_END_TIMEOffset, 0);
}

static endHYP(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishHYPBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$HYP');
}

static finishSizePrefixedHYPBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$HYP', true);
}

static createHYP(builder:flatbuffers.Builder, CAT_IDSOffset:flatbuffers.Offset, SIT_IDSOffset:flatbuffers.Offset, NAMEOffset:flatbuffers.Offset, CATEGORYOffset:flatbuffers.Offset, ROW_INDICATORSOffset:flatbuffers.Offset, COL_INDICATORSOffset:flatbuffers.Offset, MATRIXOffset:flatbuffers.Offset, SCOREOffset:flatbuffers.Offset, ANALYSIS_METHODOffset:flatbuffers.Offset, EVENT_START_TIMEOffset:flatbuffers.Offset, EVENT_END_TIMEOffset:flatbuffers.Offset):flatbuffers.Offset {
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

unpack(): HYPT {
  return new HYPT(
    this.bb!.createScalarList<string>(this.CAT_IDS.bind(this), this.catIdsLength()),
    this.bb!.createScalarList<string>(this.SIT_IDS.bind(this), this.sitIdsLength()),
    this.NAME(),
    this.CATEGORY(),
    this.bb!.createScalarList<string>(this.ROW_INDICATORS.bind(this), this.rowIndicatorsLength()),
    this.bb!.createScalarList<string>(this.COL_INDICATORS.bind(this), this.colIndicatorsLength()),
    this.bb!.createScalarList<boolean>(this.MATRIX.bind(this), this.matrixLength()),
    this.bb!.createObjList<Score, ScoreT>(this.SCORE.bind(this), this.scoreLength()),
    this.ANALYSIS_METHOD(),
    this.EVENT_START_TIME(),
    this.EVENT_END_TIME()
  );
}


unpackTo(_o: HYPT): void {
  _o.CAT_IDS = this.bb!.createScalarList<string>(this.CAT_IDS.bind(this), this.catIdsLength());
  _o.SIT_IDS = this.bb!.createScalarList<string>(this.SIT_IDS.bind(this), this.sitIdsLength());
  _o.NAME = this.NAME();
  _o.CATEGORY = this.CATEGORY();
  _o.ROW_INDICATORS = this.bb!.createScalarList<string>(this.ROW_INDICATORS.bind(this), this.rowIndicatorsLength());
  _o.COL_INDICATORS = this.bb!.createScalarList<string>(this.COL_INDICATORS.bind(this), this.colIndicatorsLength());
  _o.MATRIX = this.bb!.createScalarList<boolean>(this.MATRIX.bind(this), this.matrixLength());
  _o.SCORE = this.bb!.createObjList<Score, ScoreT>(this.SCORE.bind(this), this.scoreLength());
  _o.ANALYSIS_METHOD = this.ANALYSIS_METHOD();
  _o.EVENT_START_TIME = this.EVENT_START_TIME();
  _o.EVENT_END_TIME = this.EVENT_END_TIME();
}
}

export class HYPT implements flatbuffers.IGeneratedObject {
constructor(
  public CAT_IDS: (string)[] = [],
  public SIT_IDS: (string)[] = [],
  public NAME: string|Uint8Array|null = null,
  public CATEGORY: string|Uint8Array|null = null,
  public ROW_INDICATORS: (string)[] = [],
  public COL_INDICATORS: (string)[] = [],
  public MATRIX: (boolean)[] = [],
  public SCORE: (ScoreT)[] = [],
  public ANALYSIS_METHOD: string|Uint8Array|null = null,
  public EVENT_START_TIME: string|Uint8Array|null = null,
  public EVENT_END_TIME: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const CAT_IDS = HYP.createCatIdsVector(builder, builder.createObjectOffsetList(this.CAT_IDS));
  const SIT_IDS = HYP.createSitIdsVector(builder, builder.createObjectOffsetList(this.SIT_IDS));
  const NAME = (this.NAME !== null ? builder.createString(this.NAME!) : 0);
  const CATEGORY = (this.CATEGORY !== null ? builder.createString(this.CATEGORY!) : 0);
  const ROW_INDICATORS = HYP.createRowIndicatorsVector(builder, builder.createObjectOffsetList(this.ROW_INDICATORS));
  const COL_INDICATORS = HYP.createColIndicatorsVector(builder, builder.createObjectOffsetList(this.COL_INDICATORS));
  const MATRIX = HYP.createMatrixVector(builder, this.MATRIX);
  const SCORE = HYP.createScoreVector(builder, builder.createObjectOffsetList(this.SCORE));
  const ANALYSIS_METHOD = (this.ANALYSIS_METHOD !== null ? builder.createString(this.ANALYSIS_METHOD!) : 0);
  const EVENT_START_TIME = (this.EVENT_START_TIME !== null ? builder.createString(this.EVENT_START_TIME!) : 0);
  const EVENT_END_TIME = (this.EVENT_END_TIME !== null ? builder.createString(this.EVENT_END_TIME!) : 0);

  return HYP.createHYP(builder,
    CAT_IDS,
    SIT_IDS,
    NAME,
    CATEGORY,
    ROW_INDICATORS,
    COL_INDICATORS,
    MATRIX,
    SCORE,
    ANALYSIS_METHOD,
    EVENT_START_TIME,
    EVENT_END_TIME
  );
}
}