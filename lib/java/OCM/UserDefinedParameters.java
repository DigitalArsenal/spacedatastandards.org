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
public final class UserDefinedParameters extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static UserDefinedParameters getRootAsUserDefinedParameters(ByteBuffer _bb) { return getRootAsUserDefinedParameters(_bb, new UserDefinedParameters()); }
  public static UserDefinedParameters getRootAsUserDefinedParameters(ByteBuffer _bb, UserDefinedParameters obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public UserDefinedParameters __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * Name of the user-defined parameter.
   */
  public String PARAM_NAME() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer PARAM_NAMEAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer PARAM_NAMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  /**
   * Value of the user-defined parameter.
   */
  public String PARAM_VALUE() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer PARAM_VALUEAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer PARAM_VALUEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }

  public static int createUserDefinedParameters(FlatBufferBuilder builder,
      int PARAM_NAMEOffset,
      int PARAM_VALUEOffset) {
    builder.startTable(2);
    UserDefinedParameters.addParamValue(builder, PARAM_VALUEOffset);
    UserDefinedParameters.addParamName(builder, PARAM_NAMEOffset);
    return UserDefinedParameters.endUserDefinedParameters(builder);
  }

  public static void startUserDefinedParameters(FlatBufferBuilder builder) { builder.startTable(2); }
  public static void addParamName(FlatBufferBuilder builder, int PARAM_NAMEOffset) { builder.addOffset(0, PARAM_NAMEOffset, 0); }
  public static void addParamValue(FlatBufferBuilder builder, int PARAM_VALUEOffset) { builder.addOffset(1, PARAM_VALUEOffset, 0); }
  public static int endUserDefinedParameters(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public UserDefinedParameters get(int j) { return get(new UserDefinedParameters(), j); }
    public UserDefinedParameters get(UserDefinedParameters obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

