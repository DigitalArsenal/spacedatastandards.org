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
 * Atmospheric Model Message
 */
@SuppressWarnings("unused")
public final class ATM extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static ATM getRootAsATM(ByteBuffer _bb) { return getRootAsATM(_bb, new ATM()); }
  public static ATM getRootAsATM(ByteBuffer _bb, ATM obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean ATMBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$ATM"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public ATM __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * Canonical model family
   */
  public byte MODEL() { int o = __offset(4); return o != 0 ? bb.get(o + bb_pos) : 0; }
  /**
   * Four-digit year identifying the model version (e.g., 1970, 2008, 2020)
   */
  public int YEAR() { int o = __offset(6); return o != 0 ? bb.getInt(o + bb_pos) : 0; }

  public static int createATM(FlatBufferBuilder builder,
      byte MODEL,
      int YEAR) {
    builder.startTable(2);
    ATM.addYear(builder, YEAR);
    ATM.addModel(builder, MODEL);
    return ATM.endATM(builder);
  }

  public static void startATM(FlatBufferBuilder builder) { builder.startTable(2); }
  public static void addModel(FlatBufferBuilder builder, byte MODEL) { builder.addByte(0, MODEL, 0); }
  public static void addYear(FlatBufferBuilder builder, int YEAR) { builder.addInt(1, YEAR, 0); }
  public static int endATM(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishATMBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "$ATM"); }
  public static void finishSizePrefixedATMBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "$ATM"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public ATM get(int j) { return get(new ATM(), j); }
    public ATM get(ATM obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

