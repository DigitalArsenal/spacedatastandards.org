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
 * Propagator configuration structure to describe propagation settings
 */
@SuppressWarnings("unused")
public final class propagatorConfig extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static propagatorConfig getRootAspropagatorConfig(ByteBuffer _bb) { return getRootAspropagatorConfig(_bb, new propagatorConfig()); }
  public static propagatorConfig getRootAspropagatorConfig(ByteBuffer _bb, propagatorConfig obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public propagatorConfig __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public String PROPAGATOR_NAME() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer PROPAGATOR_NAMEAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer PROPAGATOR_NAMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  public byte PROPAGATOR_TYPE() { int o = __offset(6); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public String FORCE_MODELS(int j) { int o = __offset(8); return o != 0 ? __string(__vector(o) + j * 4) : null; }
  public int FORCE_MODELSLength() { int o = __offset(8); return o != 0 ? __vector_len(o) : 0; }
  public StringVector forceModelsVector() { return forceModelsVector(new StringVector()); }
  public StringVector forceModelsVector(StringVector obj) { int o = __offset(8); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  public String EPOCH() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer EPOCHAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public ByteBuffer EPOCHInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 10, 1); }
  public double TIME_STEP() { int o = __offset(12); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  public byte ZONAL_HARMONIC_TERMS(int j) { int o = __offset(14); return o != 0 ? bb.get(__vector(o) + j * 1) : 0; }
  public int ZONAL_HARMONIC_TERMSLength() { int o = __offset(14); return o != 0 ? __vector_len(o) : 0; }
  public ByteVector zonalHarmonicTermsVector() { return zonalHarmonicTermsVector(new ByteVector()); }
  public ByteVector zonalHarmonicTermsVector(ByteVector obj) { int o = __offset(14); return o != 0 ? obj.__assign(__vector(o), bb) : null; }
  public ByteBuffer ZONAL_HARMONIC_TERMSAsByteBuffer() { return __vector_as_bytebuffer(14, 1); }
  public ByteBuffer ZONAL_HARMONIC_TERMSInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 14, 1); }

  public static int createpropagatorConfig(FlatBufferBuilder builder,
      int PROPAGATOR_NAMEOffset,
      byte PROPAGATOR_TYPE,
      int FORCE_MODELSOffset,
      int EPOCHOffset,
      double TIME_STEP,
      int ZONAL_HARMONIC_TERMSOffset) {
    builder.startTable(6);
    propagatorConfig.addTimeStep(builder, TIME_STEP);
    propagatorConfig.addZonalHarmonicTerms(builder, ZONAL_HARMONIC_TERMSOffset);
    propagatorConfig.addEpoch(builder, EPOCHOffset);
    propagatorConfig.addForceModels(builder, FORCE_MODELSOffset);
    propagatorConfig.addPropagatorName(builder, PROPAGATOR_NAMEOffset);
    propagatorConfig.addPropagatorType(builder, PROPAGATOR_TYPE);
    return propagatorConfig.endpropagatorConfig(builder);
  }

  public static void startpropagatorConfig(FlatBufferBuilder builder) { builder.startTable(6); }
  public static void addPropagatorName(FlatBufferBuilder builder, int PROPAGATOR_NAMEOffset) { builder.addOffset(0, PROPAGATOR_NAMEOffset, 0); }
  public static void addPropagatorType(FlatBufferBuilder builder, byte PROPAGATOR_TYPE) { builder.addByte(1, PROPAGATOR_TYPE, 0); }
  public static void addForceModels(FlatBufferBuilder builder, int FORCE_MODELSOffset) { builder.addOffset(2, FORCE_MODELSOffset, 0); }
  public static int createForceModelsVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startForceModelsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addEpoch(FlatBufferBuilder builder, int EPOCHOffset) { builder.addOffset(3, EPOCHOffset, 0); }
  public static void addTimeStep(FlatBufferBuilder builder, double TIME_STEP) { builder.addDouble(4, TIME_STEP, 0.0); }
  public static void addZonalHarmonicTerms(FlatBufferBuilder builder, int ZONAL_HARMONIC_TERMSOffset) { builder.addOffset(5, ZONAL_HARMONIC_TERMSOffset, 0); }
  public static int createZonalHarmonicTermsVector(FlatBufferBuilder builder, byte[] data) { return builder.createByteVector(data); }
  public static int createZonalHarmonicTermsVector(FlatBufferBuilder builder, ByteBuffer data) { return builder.createByteVector(data); }
  public static void startZonalHarmonicTermsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(1, numElems, 1); }
  public static int endpropagatorConfig(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public propagatorConfig get(int j) { return get(new propagatorConfig(), j); }
    public propagatorConfig get(propagatorConfig obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
