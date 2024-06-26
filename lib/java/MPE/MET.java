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
 * Mean Element Theory
 */
@SuppressWarnings("unused")
public final class MET extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static MET getRootAsMET(ByteBuffer _bb) { return getRootAsMET(_bb, new MET()); }
  public static MET getRootAsMET(ByteBuffer _bb, MET obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean METBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$MET"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public MET __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public byte MEAN_ELEMENT_THEORY() { int o = __offset(4); return o != 0 ? bb.get(o + bb_pos) : 0; }

  public static int createMET(FlatBufferBuilder builder,
      byte MEAN_ELEMENT_THEORY) {
    builder.startTable(1);
    MET.addMeanElementTheory(builder, MEAN_ELEMENT_THEORY);
    return MET.endMET(builder);
  }

  public static void startMET(FlatBufferBuilder builder) { builder.startTable(1); }
  public static void addMeanElementTheory(FlatBufferBuilder builder, byte MEAN_ELEMENT_THEORY) { builder.addByte(0, MEAN_ELEMENT_THEORY, 0); }
  public static int endMET(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishMETBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "$MET"); }
  public static void finishSizePrefixedMETBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "$MET"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public MET get(int j) { return get(new MET(), j); }
    public MET get(MET obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

