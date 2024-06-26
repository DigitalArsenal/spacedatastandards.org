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
 * Schema Manifest
 */
@SuppressWarnings("unused")
public final class SCM extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static SCM getRootAsSCM(ByteBuffer _bb) { return getRootAsSCM(_bb, new SCM()); }
  public static SCM getRootAsSCM(ByteBuffer _bb, SCM obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean SCMBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$SCM"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public SCM __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * Version of Space Data Standards
   */
  public String version() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer versionAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer versionInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  /**
   * Standards Dictionary
   */
  public SCHEMA_STANDARD RECORDS(int j) { return RECORDS(new SCHEMA_STANDARD(), j); }
  public SCHEMA_STANDARD RECORDS(SCHEMA_STANDARD obj, int j) { int o = __offset(6); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int RECORDSLength() { int o = __offset(6); return o != 0 ? __vector_len(o) : 0; }
  public SCHEMA_STANDARD.Vector recordsVector() { return recordsVector(new SCHEMA_STANDARD.Vector()); }
  public SCHEMA_STANDARD.Vector recordsVector(SCHEMA_STANDARD.Vector obj) { int o = __offset(6); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }

  public static int createSCM(FlatBufferBuilder builder,
      int versionOffset,
      int RECORDSOffset) {
    builder.startTable(2);
    SCM.addRecords(builder, RECORDSOffset);
    SCM.addVersion(builder, versionOffset);
    return SCM.endSCM(builder);
  }

  public static void startSCM(FlatBufferBuilder builder) { builder.startTable(2); }
  public static void addVersion(FlatBufferBuilder builder, int versionOffset) { builder.addOffset(0, versionOffset, 0); }
  public static void addRecords(FlatBufferBuilder builder, int RECORDSOffset) { builder.addOffset(1, RECORDSOffset, 0); }
  public static int createRecordsVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startRecordsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static int endSCM(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishSCMBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "$SCM"); }
  public static void finishSizePrefixedSCMBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "$SCM"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public SCM get(int j) { return get(new SCM(), j); }
    public SCM get(SCM obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

