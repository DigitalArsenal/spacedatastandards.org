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
 * Country Identity Message
 */
@SuppressWarnings("unused")
public final class CTR extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_23_3_3(); }
  public static CTR getRootAsCTR(ByteBuffer _bb) { return getRootAsCTR(_bb, new CTR()); }
  public static CTR getRootAsCTR(ByteBuffer _bb, CTR obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean CTRBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$CTR"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public CTR __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * ISO 3166 Numeric code
   */
  public String ID() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer IDAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer IDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  /**
   * Country name
   */
  public String NAME() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer NAMEAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer NAMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  /**
   * GENC code
   */
  public String GENC_CODE() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer GENC_CODEAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }
  public ByteBuffer GENC_CODEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 8, 1); }
  /**
   * ISO 3166 Alpha-2 code
   */
  public String ALPHA_2_CODE() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ALPHA_2_CODEAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public ByteBuffer ALPHA_2_CODEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 10, 1); }
  /**
   * ISO 3166 Alpha-3 code
   */
  public String ALPHA_3_CODE() { int o = __offset(12); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ALPHA_3_CODEAsByteBuffer() { return __vector_as_bytebuffer(12, 1); }
  public ByteBuffer ALPHA_3_CODEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 12, 1); }
  /**
   * Stanag code
   */
  public String STANAG_CODE() { int o = __offset(14); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer STANAG_CODEAsByteBuffer() { return __vector_as_bytebuffer(14, 1); }
  public ByteBuffer STANAG_CODEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 14, 1); }
  /**
   * Internet country code top-level domain (ccTLD)
   */
  public String INTERNET_CCTLD() { int o = __offset(16); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer INTERNET_CCTLDAsByteBuffer() { return __vector_as_bytebuffer(16, 1); }
  public ByteBuffer INTERNET_CCTLDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 16, 1); }
  /**
   * Additional comments
   */
  public String COMMENT() { int o = __offset(18); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer COMMENTAsByteBuffer() { return __vector_as_bytebuffer(18, 1); }
  public ByteBuffer COMMENTInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 18, 1); }

  public static int createCTR(FlatBufferBuilder builder,
      int IDOffset,
      int NAMEOffset,
      int GENC_CODEOffset,
      int ALPHA_2_CODEOffset,
      int ALPHA_3_CODEOffset,
      int STANAG_CODEOffset,
      int INTERNET_CCTLDOffset,
      int COMMENTOffset) {
    builder.startTable(8);
    CTR.addComment(builder, COMMENTOffset);
    CTR.addInternetCctld(builder, INTERNET_CCTLDOffset);
    CTR.addStanagCode(builder, STANAG_CODEOffset);
    CTR.addAlpha3Code(builder, ALPHA_3_CODEOffset);
    CTR.addAlpha2Code(builder, ALPHA_2_CODEOffset);
    CTR.addGencCode(builder, GENC_CODEOffset);
    CTR.addName(builder, NAMEOffset);
    CTR.addId(builder, IDOffset);
    return CTR.endCTR(builder);
  }

  public static void startCTR(FlatBufferBuilder builder) { builder.startTable(8); }
  public static void addId(FlatBufferBuilder builder, int IDOffset) { builder.addOffset(0, IDOffset, 0); }
  public static void addName(FlatBufferBuilder builder, int NAMEOffset) { builder.addOffset(1, NAMEOffset, 0); }
  public static void addGencCode(FlatBufferBuilder builder, int GENC_CODEOffset) { builder.addOffset(2, GENC_CODEOffset, 0); }
  public static void addAlpha2Code(FlatBufferBuilder builder, int ALPHA_2_CODEOffset) { builder.addOffset(3, ALPHA_2_CODEOffset, 0); }
  public static void addAlpha3Code(FlatBufferBuilder builder, int ALPHA_3_CODEOffset) { builder.addOffset(4, ALPHA_3_CODEOffset, 0); }
  public static void addStanagCode(FlatBufferBuilder builder, int STANAG_CODEOffset) { builder.addOffset(5, STANAG_CODEOffset, 0); }
  public static void addInternetCctld(FlatBufferBuilder builder, int INTERNET_CCTLDOffset) { builder.addOffset(6, INTERNET_CCTLDOffset, 0); }
  public static void addComment(FlatBufferBuilder builder, int COMMENTOffset) { builder.addOffset(7, COMMENTOffset, 0); }
  public static int endCTR(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishCTRBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "$CTR"); }
  public static void finishSizePrefixedCTRBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "$CTR"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public CTR get(int j) { return get(new CTR(), j); }
    public CTR get(CTR obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
