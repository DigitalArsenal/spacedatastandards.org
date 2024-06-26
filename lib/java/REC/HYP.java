// automatically generated by the FlatBuffers compiler, do not modify

import com.google.flatbuffers.BaseVector;
import com.google.flatbuffers.BooleanVector;
import com.google.flatbuffers.ByteVector;
import com.google.flatbuffers.Constants;
import com.google.flatbuffers.DoubleVector;
import com.google.flatbuffers.FlatBufferBuilder;
import com.google.flatbuffers.FloatVector;
import com.google.flatbuffers.IntVector;
import com.google.flatbuffers.LongVector;
import com.google.flatbuffers.ShortVector;
import com.google.flatbuffers.StringVector;
import com.google.flatbuffers.Struct;
import com.google.flatbuffers.Table;
import com.google.flatbuffers.UnionVector;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

/**
 * Hypothesis Message
 */
@SuppressWarnings("unused")
public final class HYP extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static HYP getRootAsHYP(ByteBuffer _bb) { return getRootAsHYP(_bb, new HYP()); }
  public static HYP getRootAsHYP(ByteBuffer _bb, HYP obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean HYPBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$HYP"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public HYP __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * Space Objects Involved
   */
  public String CAT_IDS(int j) { int o = __offset(4); return o != 0 ? __string(__vector(o) + j * 4) : null; }
  public int CAT_IDSLength() { int o = __offset(4); return o != 0 ? __vector_len(o) : 0; }
  public StringVector catIdsVector() { return catIdsVector(new StringVector()); }
  public StringVector catIdsVector(StringVector obj) { int o = __offset(4); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  /**
   * Space Objects Involved
   */
  public String SIT_IDS(int j) { int o = __offset(6); return o != 0 ? __string(__vector(o) + j * 4) : null; }
  public int SIT_IDSLength() { int o = __offset(6); return o != 0 ? __vector_len(o) : 0; }
  public StringVector sitIdsVector() { return sitIdsVector(new StringVector()); }
  public StringVector sitIdsVector(StringVector obj) { int o = __offset(6); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  /**
   * Name of the hypothesis
   */
  public String NAME() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer NAMEAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }
  public ByteBuffer NAMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 8, 1); }
  /**
   * Category of the hypothesis
   */
  public String CATEGORY() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer CATEGORYAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public ByteBuffer CATEGORYInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 10, 1); }
  /**
   * Row indicators for the hypothesis matrix
   */
  public String ROW_INDICATORS(int j) { int o = __offset(12); return o != 0 ? __string(__vector(o) + j * 4) : null; }
  public int ROW_INDICATORSLength() { int o = __offset(12); return o != 0 ? __vector_len(o) : 0; }
  public StringVector rowIndicatorsVector() { return rowIndicatorsVector(new StringVector()); }
  public StringVector rowIndicatorsVector(StringVector obj) { int o = __offset(12); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  /**
   * Column indicators for the hypothesis matrix
   */
  public String COL_INDICATORS(int j) { int o = __offset(14); return o != 0 ? __string(__vector(o) + j * 4) : null; }
  public int COL_INDICATORSLength() { int o = __offset(14); return o != 0 ? __vector_len(o) : 0; }
  public StringVector colIndicatorsVector() { return colIndicatorsVector(new StringVector()); }
  public StringVector colIndicatorsVector(StringVector obj) { int o = __offset(14); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  /**
   * Matrix data as a boolean array in row major format; if overflow, adds additional rows
   */
  public boolean MATRIX(int j) { int o = __offset(16); return o != 0 ? 0!=bb.get(__vector(o) + j * 1) : false; }
  public int MATRIXLength() { int o = __offset(16); return o != 0 ? __vector_len(o) : 0; }
  public BooleanVector matrixVector() { return matrixVector(new BooleanVector()); }
  public BooleanVector matrixVector(BooleanVector obj) { int o = __offset(16); return o != 0 ? obj.__assign(__vector(o), bb) : null; }
  public ByteBuffer MATRIXAsByteBuffer() { return __vector_as_bytebuffer(16, 1); }
  public ByteBuffer MATRIXInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 16, 1); }
  /**
   * Scores for objects
   */
  public Score SCORE(int j) { return SCORE(new Score(), j); }
  public Score SCORE(Score obj, int j) { int o = __offset(18); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int SCORELength() { int o = __offset(18); return o != 0 ? __vector_len(o) : 0; }
  public Score.Vector scoreVector() { return scoreVector(new Score.Vector()); }
  public Score.Vector scoreVector(Score.Vector obj) { int o = __offset(18); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  /**
   * Analysis methodology used to form the hypothesis
   */
  public String ANALYSIS_METHOD() { int o = __offset(20); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ANALYSIS_METHODAsByteBuffer() { return __vector_as_bytebuffer(20, 1); }
  public ByteBuffer ANALYSIS_METHODInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 20, 1); }
  public String EVENT_START_TIME() { int o = __offset(22); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer EVENT_START_TIMEAsByteBuffer() { return __vector_as_bytebuffer(22, 1); }
  public ByteBuffer EVENT_START_TIMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 22, 1); }
  public String EVENT_END_TIME() { int o = __offset(24); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer EVENT_END_TIMEAsByteBuffer() { return __vector_as_bytebuffer(24, 1); }
  public ByteBuffer EVENT_END_TIMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 24, 1); }

  public static int createHYP(FlatBufferBuilder builder,
      int CAT_IDSOffset,
      int SIT_IDSOffset,
      int NAMEOffset,
      int CATEGORYOffset,
      int ROW_INDICATORSOffset,
      int COL_INDICATORSOffset,
      int MATRIXOffset,
      int SCOREOffset,
      int ANALYSIS_METHODOffset,
      int EVENT_START_TIMEOffset,
      int EVENT_END_TIMEOffset) {
    builder.startTable(11);
    HYP.addEventEndTime(builder, EVENT_END_TIMEOffset);
    HYP.addEventStartTime(builder, EVENT_START_TIMEOffset);
    HYP.addAnalysisMethod(builder, ANALYSIS_METHODOffset);
    HYP.addScore(builder, SCOREOffset);
    HYP.addMatrix(builder, MATRIXOffset);
    HYP.addColIndicators(builder, COL_INDICATORSOffset);
    HYP.addRowIndicators(builder, ROW_INDICATORSOffset);
    HYP.addCategory(builder, CATEGORYOffset);
    HYP.addName(builder, NAMEOffset);
    HYP.addSitIds(builder, SIT_IDSOffset);
    HYP.addCatIds(builder, CAT_IDSOffset);
    return HYP.endHYP(builder);
  }

  public static void startHYP(FlatBufferBuilder builder) { builder.startTable(11); }
  public static void addCatIds(FlatBufferBuilder builder, int CAT_IDSOffset) { builder.addOffset(0, CAT_IDSOffset, 0); }
  public static int createCatIdsVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startCatIdsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addSitIds(FlatBufferBuilder builder, int SIT_IDSOffset) { builder.addOffset(1, SIT_IDSOffset, 0); }
  public static int createSitIdsVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startSitIdsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addName(FlatBufferBuilder builder, int NAMEOffset) { builder.addOffset(2, NAMEOffset, 0); }
  public static void addCategory(FlatBufferBuilder builder, int CATEGORYOffset) { builder.addOffset(3, CATEGORYOffset, 0); }
  public static void addRowIndicators(FlatBufferBuilder builder, int ROW_INDICATORSOffset) { builder.addOffset(4, ROW_INDICATORSOffset, 0); }
  public static int createRowIndicatorsVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startRowIndicatorsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addColIndicators(FlatBufferBuilder builder, int COL_INDICATORSOffset) { builder.addOffset(5, COL_INDICATORSOffset, 0); }
  public static int createColIndicatorsVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startColIndicatorsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addMatrix(FlatBufferBuilder builder, int MATRIXOffset) { builder.addOffset(6, MATRIXOffset, 0); }
  public static int createMatrixVector(FlatBufferBuilder builder, boolean[] data) { builder.startVector(1, data.length, 1); for (int i = data.length - 1; i >= 0; i--) builder.addBoolean(data[i]); return builder.endVector(); }
  public static void startMatrixVector(FlatBufferBuilder builder, int numElems) { builder.startVector(1, numElems, 1); }
  public static void addScore(FlatBufferBuilder builder, int SCOREOffset) { builder.addOffset(7, SCOREOffset, 0); }
  public static int createScoreVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startScoreVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addAnalysisMethod(FlatBufferBuilder builder, int ANALYSIS_METHODOffset) { builder.addOffset(8, ANALYSIS_METHODOffset, 0); }
  public static void addEventStartTime(FlatBufferBuilder builder, int EVENT_START_TIMEOffset) { builder.addOffset(9, EVENT_START_TIMEOffset, 0); }
  public static void addEventEndTime(FlatBufferBuilder builder, int EVENT_END_TIMEOffset) { builder.addOffset(10, EVENT_END_TIMEOffset, 0); }
  public static int endHYP(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishHYPBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "$HYP"); }
  public static void finishSizePrefixedHYPBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "$HYP"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public HYP get(int j) { return get(new HYP(), j); }
    public HYP get(HYP obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

