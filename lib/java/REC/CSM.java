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
 * Conjunction Summary Message
 */
@SuppressWarnings("unused")
public final class CSM extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static CSM getRootAsCSM(ByteBuffer _bb) { return getRootAsCSM(_bb, new CSM()); }
  public static CSM getRootAsCSM(ByteBuffer _bb, CSM obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean CSMBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$CSM"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public CSM __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * Satellite name for the first object
   */
  public CAT OBJECT_1() { return OBJECT_1(new CAT()); }
  public CAT OBJECT_1(CAT obj) { int o = __offset(4); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  /**
   * Days since epoch for the first object
   */
  public double DSE_1() { int o = __offset(6); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Satellite name for the second object
   */
  public CAT OBJECT_2() { return OBJECT_2(new CAT()); }
  public CAT OBJECT_2(CAT obj) { int o = __offset(8); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  /**
   * Days since epoch for the second object
   */
  public double DSE_2() { int o = __offset(10); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Time of closest approach as a Unix timestamp
   */
  public double TCA() { int o = __offset(12); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * The distance or range between the two objects at TCA
   */
  public double TCA_RANGE() { int o = __offset(14); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * The magnitude of the relative velocity at TCA
   */
  public double TCA_RELATIVE_SPEED() { int o = __offset(16); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Maximum probability
   */
  public double MAX_PROB() { int o = __offset(18); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Standard deviation that produces the maximum probability
   */
  public double DILUTION() { int o = __offset(20); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }

  public static int createCSM(FlatBufferBuilder builder,
      int OBJECT_1Offset,
      double DSE_1,
      int OBJECT_2Offset,
      double DSE_2,
      double TCA,
      double TCA_RANGE,
      double TCA_RELATIVE_SPEED,
      double MAX_PROB,
      double DILUTION) {
    builder.startTable(9);
    CSM.addDilution(builder, DILUTION);
    CSM.addMaxProb(builder, MAX_PROB);
    CSM.addTcaRelativeSpeed(builder, TCA_RELATIVE_SPEED);
    CSM.addTcaRange(builder, TCA_RANGE);
    CSM.addTca(builder, TCA);
    CSM.addDse2(builder, DSE_2);
    CSM.addDse1(builder, DSE_1);
    CSM.addObject2(builder, OBJECT_2Offset);
    CSM.addObject1(builder, OBJECT_1Offset);
    return CSM.endCSM(builder);
  }

  public static void startCSM(FlatBufferBuilder builder) { builder.startTable(9); }
  public static void addObject1(FlatBufferBuilder builder, int OBJECT_1Offset) { builder.addOffset(0, OBJECT_1Offset, 0); }
  public static void addDse1(FlatBufferBuilder builder, double DSE_1) { builder.addDouble(1, DSE_1, 0.0); }
  public static void addObject2(FlatBufferBuilder builder, int OBJECT_2Offset) { builder.addOffset(2, OBJECT_2Offset, 0); }
  public static void addDse2(FlatBufferBuilder builder, double DSE_2) { builder.addDouble(3, DSE_2, 0.0); }
  public static void addTca(FlatBufferBuilder builder, double TCA) { builder.addDouble(4, TCA, 0.0); }
  public static void addTcaRange(FlatBufferBuilder builder, double TCA_RANGE) { builder.addDouble(5, TCA_RANGE, 0.0); }
  public static void addTcaRelativeSpeed(FlatBufferBuilder builder, double TCA_RELATIVE_SPEED) { builder.addDouble(6, TCA_RELATIVE_SPEED, 0.0); }
  public static void addMaxProb(FlatBufferBuilder builder, double MAX_PROB) { builder.addDouble(7, MAX_PROB, 0.0); }
  public static void addDilution(FlatBufferBuilder builder, double DILUTION) { builder.addDouble(8, DILUTION, 0.0); }
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

