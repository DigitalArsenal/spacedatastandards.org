// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

/// Country Identity Message
public struct CTR : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_23_3_3(); }
  public static CTR GetRootAsCTR(ByteBuffer _bb) { return GetRootAsCTR(_bb, new CTR()); }
  public static CTR GetRootAsCTR(ByteBuffer _bb, CTR obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public static bool CTRBufferHasIdentifier(ByteBuffer _bb) { return Table.__has_identifier(_bb, "$CTR"); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public CTR __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /// ISO 3166 Numeric code
  public string ID { get { int o = __p.__offset(4); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetIDBytes() { return __p.__vector_as_span<byte>(4, 1); }
#else
  public ArraySegment<byte>? GetIDBytes() { return __p.__vector_as_arraysegment(4); }
#endif
  public byte[] GetIDArray() { return __p.__vector_as_array<byte>(4); }
  /// Country name
  public string NAME { get { int o = __p.__offset(6); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetNAMEBytes() { return __p.__vector_as_span<byte>(6, 1); }
#else
  public ArraySegment<byte>? GetNAMEBytes() { return __p.__vector_as_arraysegment(6); }
#endif
  public byte[] GetNAMEArray() { return __p.__vector_as_array<byte>(6); }
  /// GENC code
  public string GENC_CODE { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetGENC_CODEBytes() { return __p.__vector_as_span<byte>(8, 1); }
#else
  public ArraySegment<byte>? GetGENC_CODEBytes() { return __p.__vector_as_arraysegment(8); }
#endif
  public byte[] GetGENC_CODEArray() { return __p.__vector_as_array<byte>(8); }
  /// ISO 3166 Alpha-2 code
  public string ALPHA_2_CODE { get { int o = __p.__offset(10); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetALPHA_2_CODEBytes() { return __p.__vector_as_span<byte>(10, 1); }
#else
  public ArraySegment<byte>? GetALPHA_2_CODEBytes() { return __p.__vector_as_arraysegment(10); }
#endif
  public byte[] GetALPHA_2_CODEArray() { return __p.__vector_as_array<byte>(10); }
  /// ISO 3166 Alpha-3 code
  public string ALPHA_3_CODE { get { int o = __p.__offset(12); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetALPHA_3_CODEBytes() { return __p.__vector_as_span<byte>(12, 1); }
#else
  public ArraySegment<byte>? GetALPHA_3_CODEBytes() { return __p.__vector_as_arraysegment(12); }
#endif
  public byte[] GetALPHA_3_CODEArray() { return __p.__vector_as_array<byte>(12); }
  /// Stanag code
  public string STANAG_CODE { get { int o = __p.__offset(14); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetSTANAG_CODEBytes() { return __p.__vector_as_span<byte>(14, 1); }
#else
  public ArraySegment<byte>? GetSTANAG_CODEBytes() { return __p.__vector_as_arraysegment(14); }
#endif
  public byte[] GetSTANAG_CODEArray() { return __p.__vector_as_array<byte>(14); }
  /// Internet country code top-level domain (ccTLD)
  public string INTERNET_CCTLD { get { int o = __p.__offset(16); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetINTERNET_CCTLDBytes() { return __p.__vector_as_span<byte>(16, 1); }
#else
  public ArraySegment<byte>? GetINTERNET_CCTLDBytes() { return __p.__vector_as_arraysegment(16); }
#endif
  public byte[] GetINTERNET_CCTLDArray() { return __p.__vector_as_array<byte>(16); }
  /// Additional comments
  public string COMMENT { get { int o = __p.__offset(18); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCOMMENTBytes() { return __p.__vector_as_span<byte>(18, 1); }
#else
  public ArraySegment<byte>? GetCOMMENTBytes() { return __p.__vector_as_arraysegment(18); }
#endif
  public byte[] GetCOMMENTArray() { return __p.__vector_as_array<byte>(18); }

  public static Offset<CTR> CreateCTR(FlatBufferBuilder builder,
      StringOffset IDOffset = default(StringOffset),
      StringOffset NAMEOffset = default(StringOffset),
      StringOffset GENC_CODEOffset = default(StringOffset),
      StringOffset ALPHA_2_CODEOffset = default(StringOffset),
      StringOffset ALPHA_3_CODEOffset = default(StringOffset),
      StringOffset STANAG_CODEOffset = default(StringOffset),
      StringOffset INTERNET_CCTLDOffset = default(StringOffset),
      StringOffset COMMENTOffset = default(StringOffset)) {
    builder.StartTable(8);
    CTR.AddCOMMENT(builder, COMMENTOffset);
    CTR.AddINTERNET_CCTLD(builder, INTERNET_CCTLDOffset);
    CTR.AddSTANAG_CODE(builder, STANAG_CODEOffset);
    CTR.AddALPHA_3_CODE(builder, ALPHA_3_CODEOffset);
    CTR.AddALPHA_2_CODE(builder, ALPHA_2_CODEOffset);
    CTR.AddGENC_CODE(builder, GENC_CODEOffset);
    CTR.AddNAME(builder, NAMEOffset);
    CTR.AddID(builder, IDOffset);
    return CTR.EndCTR(builder);
  }

  public static void StartCTR(FlatBufferBuilder builder) { builder.StartTable(8); }
  public static void AddID(FlatBufferBuilder builder, StringOffset IDOffset) { builder.AddOffset(0, IDOffset.Value, 0); }
  public static void AddNAME(FlatBufferBuilder builder, StringOffset NAMEOffset) { builder.AddOffset(1, NAMEOffset.Value, 0); }
  public static void AddGENC_CODE(FlatBufferBuilder builder, StringOffset GENC_CODEOffset) { builder.AddOffset(2, GENC_CODEOffset.Value, 0); }
  public static void AddALPHA_2_CODE(FlatBufferBuilder builder, StringOffset ALPHA_2_CODEOffset) { builder.AddOffset(3, ALPHA_2_CODEOffset.Value, 0); }
  public static void AddALPHA_3_CODE(FlatBufferBuilder builder, StringOffset ALPHA_3_CODEOffset) { builder.AddOffset(4, ALPHA_3_CODEOffset.Value, 0); }
  public static void AddSTANAG_CODE(FlatBufferBuilder builder, StringOffset STANAG_CODEOffset) { builder.AddOffset(5, STANAG_CODEOffset.Value, 0); }
  public static void AddINTERNET_CCTLD(FlatBufferBuilder builder, StringOffset INTERNET_CCTLDOffset) { builder.AddOffset(6, INTERNET_CCTLDOffset.Value, 0); }
  public static void AddCOMMENT(FlatBufferBuilder builder, StringOffset COMMENTOffset) { builder.AddOffset(7, COMMENTOffset.Value, 0); }
  public static Offset<CTR> EndCTR(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<CTR>(o);
  }
  public static void FinishCTRBuffer(FlatBufferBuilder builder, Offset<CTR> offset) { builder.Finish(offset.Value, "$CTR"); }
  public static void FinishSizePrefixedCTRBuffer(FlatBufferBuilder builder, Offset<CTR> offset) { builder.FinishSizePrefixed(offset.Value, "$CTR"); }
  public CTRT UnPack() {
    var _o = new CTRT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(CTRT _o) {
    _o.ID = this.ID;
    _o.NAME = this.NAME;
    _o.GENC_CODE = this.GENC_CODE;
    _o.ALPHA_2_CODE = this.ALPHA_2_CODE;
    _o.ALPHA_3_CODE = this.ALPHA_3_CODE;
    _o.STANAG_CODE = this.STANAG_CODE;
    _o.INTERNET_CCTLD = this.INTERNET_CCTLD;
    _o.COMMENT = this.COMMENT;
  }
  public static Offset<CTR> Pack(FlatBufferBuilder builder, CTRT _o) {
    if (_o == null) return default(Offset<CTR>);
    var _ID = _o.ID == null ? default(StringOffset) : builder.CreateString(_o.ID);
    var _NAME = _o.NAME == null ? default(StringOffset) : builder.CreateString(_o.NAME);
    var _GENC_CODE = _o.GENC_CODE == null ? default(StringOffset) : builder.CreateString(_o.GENC_CODE);
    var _ALPHA_2_CODE = _o.ALPHA_2_CODE == null ? default(StringOffset) : builder.CreateString(_o.ALPHA_2_CODE);
    var _ALPHA_3_CODE = _o.ALPHA_3_CODE == null ? default(StringOffset) : builder.CreateString(_o.ALPHA_3_CODE);
    var _STANAG_CODE = _o.STANAG_CODE == null ? default(StringOffset) : builder.CreateString(_o.STANAG_CODE);
    var _INTERNET_CCTLD = _o.INTERNET_CCTLD == null ? default(StringOffset) : builder.CreateString(_o.INTERNET_CCTLD);
    var _COMMENT = _o.COMMENT == null ? default(StringOffset) : builder.CreateString(_o.COMMENT);
    return CreateCTR(
      builder,
      _ID,
      _NAME,
      _GENC_CODE,
      _ALPHA_2_CODE,
      _ALPHA_3_CODE,
      _STANAG_CODE,
      _INTERNET_CCTLD,
      _COMMENT);
  }
}

public class CTRT
{
  public string ID { get; set; }
  public string NAME { get; set; }
  public string GENC_CODE { get; set; }
  public string ALPHA_2_CODE { get; set; }
  public string ALPHA_3_CODE { get; set; }
  public string STANAG_CODE { get; set; }
  public string INTERNET_CCTLD { get; set; }
  public string COMMENT { get; set; }

  public CTRT() {
    this.ID = null;
    this.NAME = null;
    this.GENC_CODE = null;
    this.ALPHA_2_CODE = null;
    this.ALPHA_3_CODE = null;
    this.STANAG_CODE = null;
    this.INTERNET_CCTLD = null;
    this.COMMENT = null;
  }
  public static CTRT DeserializeFromBinary(byte[] fbBuffer) {
    return CTR.GetRootAsCTR(new ByteBuffer(fbBuffer)).UnPack();
  }
  public byte[] SerializeToBinary() {
    var fbb = new FlatBufferBuilder(0x10000);
    CTR.FinishCTRBuffer(fbb, CTR.Pack(fbb, this));
    return fbb.DataBuffer.ToSizedArray();
  }
}
