// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

public struct ContactPoint : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_23_3_3(); }
  public static ContactPoint GetRootAsContactPoint(ByteBuffer _bb) { return GetRootAsContactPoint(_bb, new ContactPoint()); }
  public static ContactPoint GetRootAsContactPoint(ByteBuffer _bb, ContactPoint obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public ContactPoint __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public string NAME { get { int o = __p.__offset(4); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetNAMEBytes() { return __p.__vector_as_span<byte>(4, 1); }
#else
  public ArraySegment<byte>? GetNAMEBytes() { return __p.__vector_as_arraysegment(4); }
#endif
  public byte[] GetNAMEArray() { return __p.__vector_as_array<byte>(4); }
  public string CONTACT_TYPE { get { int o = __p.__offset(6); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCONTACT_TYPEBytes() { return __p.__vector_as_span<byte>(6, 1); }
#else
  public ArraySegment<byte>? GetCONTACT_TYPEBytes() { return __p.__vector_as_arraysegment(6); }
#endif
  public byte[] GetCONTACT_TYPEArray() { return __p.__vector_as_array<byte>(6); }
  public string EMAIL { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetEMAILBytes() { return __p.__vector_as_span<byte>(8, 1); }
#else
  public ArraySegment<byte>? GetEMAILBytes() { return __p.__vector_as_arraysegment(8); }
#endif
  public byte[] GetEMAILArray() { return __p.__vector_as_array<byte>(8); }
  public string TELEPHONE { get { int o = __p.__offset(10); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetTELEPHONEBytes() { return __p.__vector_as_span<byte>(10, 1); }
#else
  public ArraySegment<byte>? GetTELEPHONEBytes() { return __p.__vector_as_arraysegment(10); }
#endif
  public byte[] GetTELEPHONEArray() { return __p.__vector_as_array<byte>(10); }
  public string CONTACT_OPTION { get { int o = __p.__offset(12); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCONTACT_OPTIONBytes() { return __p.__vector_as_span<byte>(12, 1); }
#else
  public ArraySegment<byte>? GetCONTACT_OPTIONBytes() { return __p.__vector_as_arraysegment(12); }
#endif
  public byte[] GetCONTACT_OPTIONArray() { return __p.__vector_as_array<byte>(12); }
  public string AREA_SERVED { get { int o = __p.__offset(14); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetAREA_SERVEDBytes() { return __p.__vector_as_span<byte>(14, 1); }
#else
  public ArraySegment<byte>? GetAREA_SERVEDBytes() { return __p.__vector_as_arraysegment(14); }
#endif
  public byte[] GetAREA_SERVEDArray() { return __p.__vector_as_array<byte>(14); }
  public string AVAILABLE_LANGUAGE { get { int o = __p.__offset(16); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetAVAILABLE_LANGUAGEBytes() { return __p.__vector_as_span<byte>(16, 1); }
#else
  public ArraySegment<byte>? GetAVAILABLE_LANGUAGEBytes() { return __p.__vector_as_arraysegment(16); }
#endif
  public byte[] GetAVAILABLE_LANGUAGEArray() { return __p.__vector_as_array<byte>(16); }
  public string ADDRESS_COUNTRY { get { int o = __p.__offset(18); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetADDRESS_COUNTRYBytes() { return __p.__vector_as_span<byte>(18, 1); }
#else
  public ArraySegment<byte>? GetADDRESS_COUNTRYBytes() { return __p.__vector_as_arraysegment(18); }
#endif
  public byte[] GetADDRESS_COUNTRYArray() { return __p.__vector_as_array<byte>(18); }
  public string ADDRESS_REGION { get { int o = __p.__offset(20); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetADDRESS_REGIONBytes() { return __p.__vector_as_span<byte>(20, 1); }
#else
  public ArraySegment<byte>? GetADDRESS_REGIONBytes() { return __p.__vector_as_arraysegment(20); }
#endif
  public byte[] GetADDRESS_REGIONArray() { return __p.__vector_as_array<byte>(20); }
  public string ADDRESS_LOCALITY { get { int o = __p.__offset(22); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetADDRESS_LOCALITYBytes() { return __p.__vector_as_span<byte>(22, 1); }
#else
  public ArraySegment<byte>? GetADDRESS_LOCALITYBytes() { return __p.__vector_as_arraysegment(22); }
#endif
  public byte[] GetADDRESS_LOCALITYArray() { return __p.__vector_as_array<byte>(22); }
  public string POSTAL_CODE { get { int o = __p.__offset(24); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetPOSTAL_CODEBytes() { return __p.__vector_as_span<byte>(24, 1); }
#else
  public ArraySegment<byte>? GetPOSTAL_CODEBytes() { return __p.__vector_as_arraysegment(24); }
#endif
  public byte[] GetPOSTAL_CODEArray() { return __p.__vector_as_array<byte>(24); }
  public string STREET_ADDRESS { get { int o = __p.__offset(26); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetSTREET_ADDRESSBytes() { return __p.__vector_as_span<byte>(26, 1); }
#else
  public ArraySegment<byte>? GetSTREET_ADDRESSBytes() { return __p.__vector_as_arraysegment(26); }
#endif
  public byte[] GetSTREET_ADDRESSArray() { return __p.__vector_as_array<byte>(26); }
  public string POST_OFFICE_BOX_NUMBER { get { int o = __p.__offset(28); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetPOST_OFFICE_BOX_NUMBERBytes() { return __p.__vector_as_span<byte>(28, 1); }
#else
  public ArraySegment<byte>? GetPOST_OFFICE_BOX_NUMBERBytes() { return __p.__vector_as_arraysegment(28); }
#endif
  public byte[] GetPOST_OFFICE_BOX_NUMBERArray() { return __p.__vector_as_array<byte>(28); }

  public static Offset<ContactPoint> CreateContactPoint(FlatBufferBuilder builder,
      StringOffset NAMEOffset = default(StringOffset),
      StringOffset CONTACT_TYPEOffset = default(StringOffset),
      StringOffset EMAILOffset = default(StringOffset),
      StringOffset TELEPHONEOffset = default(StringOffset),
      StringOffset CONTACT_OPTIONOffset = default(StringOffset),
      StringOffset AREA_SERVEDOffset = default(StringOffset),
      StringOffset AVAILABLE_LANGUAGEOffset = default(StringOffset),
      StringOffset ADDRESS_COUNTRYOffset = default(StringOffset),
      StringOffset ADDRESS_REGIONOffset = default(StringOffset),
      StringOffset ADDRESS_LOCALITYOffset = default(StringOffset),
      StringOffset POSTAL_CODEOffset = default(StringOffset),
      StringOffset STREET_ADDRESSOffset = default(StringOffset),
      StringOffset POST_OFFICE_BOX_NUMBEROffset = default(StringOffset)) {
    builder.StartTable(13);
    ContactPoint.AddPOST_OFFICE_BOX_NUMBER(builder, POST_OFFICE_BOX_NUMBEROffset);
    ContactPoint.AddSTREET_ADDRESS(builder, STREET_ADDRESSOffset);
    ContactPoint.AddPOSTAL_CODE(builder, POSTAL_CODEOffset);
    ContactPoint.AddADDRESS_LOCALITY(builder, ADDRESS_LOCALITYOffset);
    ContactPoint.AddADDRESS_REGION(builder, ADDRESS_REGIONOffset);
    ContactPoint.AddADDRESS_COUNTRY(builder, ADDRESS_COUNTRYOffset);
    ContactPoint.AddAVAILABLE_LANGUAGE(builder, AVAILABLE_LANGUAGEOffset);
    ContactPoint.AddAREA_SERVED(builder, AREA_SERVEDOffset);
    ContactPoint.AddCONTACT_OPTION(builder, CONTACT_OPTIONOffset);
    ContactPoint.AddTELEPHONE(builder, TELEPHONEOffset);
    ContactPoint.AddEMAIL(builder, EMAILOffset);
    ContactPoint.AddCONTACT_TYPE(builder, CONTACT_TYPEOffset);
    ContactPoint.AddNAME(builder, NAMEOffset);
    return ContactPoint.EndContactPoint(builder);
  }

  public static void StartContactPoint(FlatBufferBuilder builder) { builder.StartTable(13); }
  public static void AddNAME(FlatBufferBuilder builder, StringOffset NAMEOffset) { builder.AddOffset(0, NAMEOffset.Value, 0); }
  public static void AddCONTACT_TYPE(FlatBufferBuilder builder, StringOffset CONTACT_TYPEOffset) { builder.AddOffset(1, CONTACT_TYPEOffset.Value, 0); }
  public static void AddEMAIL(FlatBufferBuilder builder, StringOffset EMAILOffset) { builder.AddOffset(2, EMAILOffset.Value, 0); }
  public static void AddTELEPHONE(FlatBufferBuilder builder, StringOffset TELEPHONEOffset) { builder.AddOffset(3, TELEPHONEOffset.Value, 0); }
  public static void AddCONTACT_OPTION(FlatBufferBuilder builder, StringOffset CONTACT_OPTIONOffset) { builder.AddOffset(4, CONTACT_OPTIONOffset.Value, 0); }
  public static void AddAREA_SERVED(FlatBufferBuilder builder, StringOffset AREA_SERVEDOffset) { builder.AddOffset(5, AREA_SERVEDOffset.Value, 0); }
  public static void AddAVAILABLE_LANGUAGE(FlatBufferBuilder builder, StringOffset AVAILABLE_LANGUAGEOffset) { builder.AddOffset(6, AVAILABLE_LANGUAGEOffset.Value, 0); }
  public static void AddADDRESS_COUNTRY(FlatBufferBuilder builder, StringOffset ADDRESS_COUNTRYOffset) { builder.AddOffset(7, ADDRESS_COUNTRYOffset.Value, 0); }
  public static void AddADDRESS_REGION(FlatBufferBuilder builder, StringOffset ADDRESS_REGIONOffset) { builder.AddOffset(8, ADDRESS_REGIONOffset.Value, 0); }
  public static void AddADDRESS_LOCALITY(FlatBufferBuilder builder, StringOffset ADDRESS_LOCALITYOffset) { builder.AddOffset(9, ADDRESS_LOCALITYOffset.Value, 0); }
  public static void AddPOSTAL_CODE(FlatBufferBuilder builder, StringOffset POSTAL_CODEOffset) { builder.AddOffset(10, POSTAL_CODEOffset.Value, 0); }
  public static void AddSTREET_ADDRESS(FlatBufferBuilder builder, StringOffset STREET_ADDRESSOffset) { builder.AddOffset(11, STREET_ADDRESSOffset.Value, 0); }
  public static void AddPOST_OFFICE_BOX_NUMBER(FlatBufferBuilder builder, StringOffset POST_OFFICE_BOX_NUMBEROffset) { builder.AddOffset(12, POST_OFFICE_BOX_NUMBEROffset.Value, 0); }
  public static Offset<ContactPoint> EndContactPoint(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<ContactPoint>(o);
  }
  public ContactPointT UnPack() {
    var _o = new ContactPointT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(ContactPointT _o) {
    _o.NAME = this.NAME;
    _o.CONTACT_TYPE = this.CONTACT_TYPE;
    _o.EMAIL = this.EMAIL;
    _o.TELEPHONE = this.TELEPHONE;
    _o.CONTACT_OPTION = this.CONTACT_OPTION;
    _o.AREA_SERVED = this.AREA_SERVED;
    _o.AVAILABLE_LANGUAGE = this.AVAILABLE_LANGUAGE;
    _o.ADDRESS_COUNTRY = this.ADDRESS_COUNTRY;
    _o.ADDRESS_REGION = this.ADDRESS_REGION;
    _o.ADDRESS_LOCALITY = this.ADDRESS_LOCALITY;
    _o.POSTAL_CODE = this.POSTAL_CODE;
    _o.STREET_ADDRESS = this.STREET_ADDRESS;
    _o.POST_OFFICE_BOX_NUMBER = this.POST_OFFICE_BOX_NUMBER;
  }
  public static Offset<ContactPoint> Pack(FlatBufferBuilder builder, ContactPointT _o) {
    if (_o == null) return default(Offset<ContactPoint>);
    var _NAME = _o.NAME == null ? default(StringOffset) : builder.CreateString(_o.NAME);
    var _CONTACT_TYPE = _o.CONTACT_TYPE == null ? default(StringOffset) : builder.CreateString(_o.CONTACT_TYPE);
    var _EMAIL = _o.EMAIL == null ? default(StringOffset) : builder.CreateString(_o.EMAIL);
    var _TELEPHONE = _o.TELEPHONE == null ? default(StringOffset) : builder.CreateString(_o.TELEPHONE);
    var _CONTACT_OPTION = _o.CONTACT_OPTION == null ? default(StringOffset) : builder.CreateString(_o.CONTACT_OPTION);
    var _AREA_SERVED = _o.AREA_SERVED == null ? default(StringOffset) : builder.CreateString(_o.AREA_SERVED);
    var _AVAILABLE_LANGUAGE = _o.AVAILABLE_LANGUAGE == null ? default(StringOffset) : builder.CreateString(_o.AVAILABLE_LANGUAGE);
    var _ADDRESS_COUNTRY = _o.ADDRESS_COUNTRY == null ? default(StringOffset) : builder.CreateString(_o.ADDRESS_COUNTRY);
    var _ADDRESS_REGION = _o.ADDRESS_REGION == null ? default(StringOffset) : builder.CreateString(_o.ADDRESS_REGION);
    var _ADDRESS_LOCALITY = _o.ADDRESS_LOCALITY == null ? default(StringOffset) : builder.CreateString(_o.ADDRESS_LOCALITY);
    var _POSTAL_CODE = _o.POSTAL_CODE == null ? default(StringOffset) : builder.CreateString(_o.POSTAL_CODE);
    var _STREET_ADDRESS = _o.STREET_ADDRESS == null ? default(StringOffset) : builder.CreateString(_o.STREET_ADDRESS);
    var _POST_OFFICE_BOX_NUMBER = _o.POST_OFFICE_BOX_NUMBER == null ? default(StringOffset) : builder.CreateString(_o.POST_OFFICE_BOX_NUMBER);
    return CreateContactPoint(
      builder,
      _NAME,
      _CONTACT_TYPE,
      _EMAIL,
      _TELEPHONE,
      _CONTACT_OPTION,
      _AREA_SERVED,
      _AVAILABLE_LANGUAGE,
      _ADDRESS_COUNTRY,
      _ADDRESS_REGION,
      _ADDRESS_LOCALITY,
      _POSTAL_CODE,
      _STREET_ADDRESS,
      _POST_OFFICE_BOX_NUMBER);
  }
}

public class ContactPointT
{
  public string NAME { get; set; }
  public string CONTACT_TYPE { get; set; }
  public string EMAIL { get; set; }
  public string TELEPHONE { get; set; }
  public string CONTACT_OPTION { get; set; }
  public string AREA_SERVED { get; set; }
  public string AVAILABLE_LANGUAGE { get; set; }
  public string ADDRESS_COUNTRY { get; set; }
  public string ADDRESS_REGION { get; set; }
  public string ADDRESS_LOCALITY { get; set; }
  public string POSTAL_CODE { get; set; }
  public string STREET_ADDRESS { get; set; }
  public string POST_OFFICE_BOX_NUMBER { get; set; }

  public ContactPointT() {
    this.NAME = null;
    this.CONTACT_TYPE = null;
    this.EMAIL = null;
    this.TELEPHONE = null;
    this.CONTACT_OPTION = null;
    this.AREA_SERVED = null;
    this.AVAILABLE_LANGUAGE = null;
    this.ADDRESS_COUNTRY = null;
    this.ADDRESS_REGION = null;
    this.ADDRESS_LOCALITY = null;
    this.POSTAL_CODE = null;
    this.STREET_ADDRESS = null;
    this.POST_OFFICE_BOX_NUMBER = null;
  }
}
