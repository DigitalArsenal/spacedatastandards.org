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

@SuppressWarnings("unused")
public final class CSM extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_23_3_3(); }
  public static CSM getRootAsCSM(ByteBuffer _bb) { return getRootAsCSM(_bb, new CSM()); }
  public static CSM getRootAsCSM(ByteBuffer _bb, CSM obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean CSMBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$CSM"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public CSM __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * NORAD Catalog Number for the first object
   */
  public long NORAD_CAT_ID_1() { int o = __offset(4); return o != 0 ? (long)bb.getInt(o + bb_pos) & 0xFFFFFFFFL : 0L; }
  /**
   * Satellite name for the first object
   */
  public String OBJECT_NAME_1() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer OBJECT_NAME_1AsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer OBJECT_NAME_1InByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  /**
   * Days since epoch for the first object
   */
  public double DSE_1() { int o = __offset(8); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * NORAD Catalog Number for the second object
   */
  public long NORAD_CAT_ID_2() { int o = __offset(10); return o != 0 ? (long)bb.getInt(o + bb_pos) & 0xFFFFFFFFL : 0L; }
  /**
   * Satellite name for the second object
   */
  public String OBJECT_NAME_2() { int o = __offset(12); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer OBJECT_NAME_2AsByteBuffer() { return __vector_as_bytebuffer(12, 1); }
  public ByteBuffer OBJECT_NAME_2InByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 12, 1); }
  /**
   * Days since epoch for the second object
   */
  public double DSE_2() { int o = __offset(14); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Time of closest approach as a Unix timestamp
   */
  public double TCA() { int o = __offset(16); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * The distance or range between the two objects at TCA
   */
  public double TCA_RANGE() { int o = __offset(18); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * The magnitude of the relative velocity at TCA
   */
  public double TCA_RELATIVE_SPEED() { int o = __offset(20); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Maximum probability
   */
  public double MAX_PROB() { int o = __offset(22); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Standard deviation that produces the maximum probability
   */
  public double DILUTION() { int o = __offset(24); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }

  public static int createCSM(FlatBufferBuilder builder,
      long NORAD_CAT_ID_1,
      int OBJECT_NAME_1Offset,
      double DSE_1,
      long NORAD_CAT_ID_2,
      int OBJECT_NAME_2Offset,
      double DSE_2,
      double TCA,
      double TCA_RANGE,
      double TCA_RELATIVE_SPEED,
      double MAX_PROB,
      double DILUTION) {
    builder.startTable(11);
    CSM.addDilution(builder, DILUTION);
    CSM.addMaxProb(builder, MAX_PROB);
    CSM.addTcaRelativeSpeed(builder, TCA_RELATIVE_SPEED);
    CSM.addTcaRange(builder, TCA_RANGE);
    CSM.addTca(builder, TCA);
    CSM.addDse2(builder, DSE_2);
    CSM.addDse1(builder, DSE_1);
    CSM.addObjectName2(builder, OBJECT_NAME_2Offset);
    CSM.addNoradCatId2(builder, NORAD_CAT_ID_2);
    CSM.addObjectName1(builder, OBJECT_NAME_1Offset);
    CSM.addNoradCatId1(builder, NORAD_CAT_ID_1);
    return CSM.endCSM(builder);
  }

  public static void startCSM(FlatBufferBuilder builder) { builder.startTable(11); }
  public static void addNoradCatId1(FlatBufferBuilder builder, long NORAD_CAT_ID_1) { builder.addInt(0, (int) NORAD_CAT_ID_1, (int) 0L); }
  public static void addObjectName1(FlatBufferBuilder builder, int OBJECT_NAME_1Offset) { builder.addOffset(1, OBJECT_NAME_1Offset, 0); }
  public static void addDse1(FlatBufferBuilder builder, double DSE_1) { builder.addDouble(2, DSE_1, 0.0); }
  public static void addNoradCatId2(FlatBufferBuilder builder, long NORAD_CAT_ID_2) { builder.addInt(3, (int) NORAD_CAT_ID_2, (int) 0L); }
  public static void addObjectName2(FlatBufferBuilder builder, int OBJECT_NAME_2Offset) { builder.addOffset(4, OBJECT_NAME_2Offset, 0); }
  public static void addDse2(FlatBufferBuilder builder, double DSE_2) { builder.addDouble(5, DSE_2, 0.0); }
  public static void addTca(FlatBufferBuilder builder, double TCA) { builder.addDouble(6, TCA, 0.0); }
  public static void addTcaRange(FlatBufferBuilder builder, double TCA_RANGE) { builder.addDouble(7, TCA_RANGE, 0.0); }
  public static void addTcaRelativeSpeed(FlatBufferBuilder builder, double TCA_RELATIVE_SPEED) { builder.addDouble(8, TCA_RELATIVE_SPEED, 0.0); }
  public static void addMaxProb(FlatBufferBuilder builder, double MAX_PROB) { builder.addDouble(9, MAX_PROB, 0.0); }
  public static void addDilution(FlatBufferBuilder builder, double DILUTION) { builder.addDouble(10, DILUTION, 0.0); }
  public static int endCSM(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishCSMBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "$CSM"); }
  public static void finishSizePrefixedCSMBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "$CSM"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public CSM get(int j) { return get(new CSM(), j); }
    public CSM get(CSM obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
