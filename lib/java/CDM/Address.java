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
 * Represents a geographic address
 */
@SuppressWarnings("unused")
public final class Address extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_23_3_3(); }
  public static Address getRootAsAddress(ByteBuffer _bb) { return getRootAsAddress(_bb, new Address()); }
  public static Address getRootAsAddress(ByteBuffer _bb, Address obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public Address __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * Country of the address
   */
  public String COUNTRY() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer COUNTRYAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer COUNTRYInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  /**
   * Region of the address (e.g., state or province)
   */
  public String REGION() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer REGIONAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer REGIONInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  /**
   * Locality of the address (e.g., city or town)
   */
  public String LOCALITY() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer LOCALITYAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }
  public ByteBuffer LOCALITYInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 8, 1); }
  /**
   * Postal code of the address
   */
  public String POSTAL_CODE() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer POSTAL_CODEAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public ByteBuffer POSTAL_CODEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 10, 1); }
  /**
   * Street address
   */
  public String STREET() { int o = __offset(12); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer STREETAsByteBuffer() { return __vector_as_bytebuffer(12, 1); }
  public ByteBuffer STREETInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 12, 1); }
  /**
   * Post office box number
   */
  public String POST_OFFICE_BOX_NUMBER() { int o = __offset(14); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer POST_OFFICE_BOX_NUMBERAsByteBuffer() { return __vector_as_bytebuffer(14, 1); }
  public ByteBuffer POST_OFFICE_BOX_NUMBERInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 14, 1); }

  public static int createAddress(FlatBufferBuilder builder,
      int COUNTRYOffset,
      int REGIONOffset,
      int LOCALITYOffset,
      int POSTAL_CODEOffset,
      int STREETOffset,
      int POST_OFFICE_BOX_NUMBEROffset) {
    builder.startTable(6);
    Address.addPostOfficeBoxNumber(builder, POST_OFFICE_BOX_NUMBEROffset);
    Address.addStreet(builder, STREETOffset);
    Address.addPostalCode(builder, POSTAL_CODEOffset);
    Address.addLocality(builder, LOCALITYOffset);
    Address.addRegion(builder, REGIONOffset);
    Address.addCountry(builder, COUNTRYOffset);
    return Address.endAddress(builder);
  }

  public static void startAddress(FlatBufferBuilder builder) { builder.startTable(6); }
  public static void addCountry(FlatBufferBuilder builder, int COUNTRYOffset) { builder.addOffset(0, COUNTRYOffset, 0); }
  public static void addRegion(FlatBufferBuilder builder, int REGIONOffset) { builder.addOffset(1, REGIONOffset, 0); }
  public static void addLocality(FlatBufferBuilder builder, int LOCALITYOffset) { builder.addOffset(2, LOCALITYOffset, 0); }
  public static void addPostalCode(FlatBufferBuilder builder, int POSTAL_CODEOffset) { builder.addOffset(3, POSTAL_CODEOffset, 0); }
  public static void addStreet(FlatBufferBuilder builder, int STREETOffset) { builder.addOffset(4, STREETOffset, 0); }
  public static void addPostOfficeBoxNumber(FlatBufferBuilder builder, int POST_OFFICE_BOX_NUMBEROffset) { builder.addOffset(5, POST_OFFICE_BOX_NUMBEROffset, 0); }
  public static int endAddress(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public Address get(int j) { return get(new Address(), j); }
    public Address get(Address obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
