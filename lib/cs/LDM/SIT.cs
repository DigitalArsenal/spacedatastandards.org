// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

/// Site Information Message
public struct SIT : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_24_3_25(); }
  public static SIT GetRootAsSIT(ByteBuffer _bb) { return GetRootAsSIT(_bb, new SIT()); }
  public static SIT GetRootAsSIT(ByteBuffer _bb, SIT obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public static bool SITBufferHasIdentifier(ByteBuffer _bb) { return Table.__has_identifier(_bb, "$SIT"); }
  public static bool VerifySIT(ByteBuffer _bb) {Google.FlatBuffers.Verifier verifier = new Google.FlatBuffers.Verifier(_bb); return verifier.VerifyBuffer("$SIT", false, SITVerify.Verify); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public SIT __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /// Unique identifier for the site, BE_NUMBER
  public string ID { get { int o = __p.__offset(4); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetIDBytes() { return __p.__vector_as_span<byte>(4, 1); }
#else
  public ArraySegment<byte>? GetIDBytes() { return __p.__vector_as_arraysegment(4); }
#endif
  public byte[] GetIDArray() { return __p.__vector_as_array<byte>(4); }
  /// Name of the site
  public string NAME { get { int o = __p.__offset(6); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetNAMEBytes() { return __p.__vector_as_span<byte>(6, 1); }
#else
  public ArraySegment<byte>? GetNAMEBytes() { return __p.__vector_as_arraysegment(6); }
#endif
  public byte[] GetNAMEArray() { return __p.__vector_as_array<byte>(6); }
  /// Abbreviation
  public string ABBREVIATION { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetABBREVIATIONBytes() { return __p.__vector_as_span<byte>(8, 1); }
#else
  public ArraySegment<byte>? GetABBREVIATIONBytes() { return __p.__vector_as_arraysegment(8); }
#endif
  public byte[] GetABBREVIATIONArray() { return __p.__vector_as_array<byte>(8); }
  /// Site type as defined in SiteType enum
  public SiteType SITE_TYPE { get { int o = __p.__offset(10); return o != 0 ? (SiteType)__p.bb.GetSbyte(o + __p.bb_pos) : SiteType.LAUNCH_SITE; } }
  /// Site type CATCODE
  public string CATCODE { get { int o = __p.__offset(12); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCATCODEBytes() { return __p.__vector_as_span<byte>(12, 1); }
#else
  public ArraySegment<byte>? GetCATCODEBytes() { return __p.__vector_as_arraysegment(12); }
#endif
  public byte[] GetCATCODEArray() { return __p.__vector_as_array<byte>(12); }
  /// Network identifier
  public string NETWORK { get { int o = __p.__offset(14); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetNETWORKBytes() { return __p.__vector_as_span<byte>(14, 1); }
#else
  public ArraySegment<byte>? GetNETWORKBytes() { return __p.__vector_as_arraysegment(14); }
#endif
  public byte[] GetNETWORKArray() { return __p.__vector_as_array<byte>(14); }
  /// Latitude of the site
  public float LATITUDE { get { int o = __p.__offset(16); return o != 0 ? __p.bb.GetFloat(o + __p.bb_pos) : (float)0.0f; } }
  /// Longitude of the site
  public float LONGITUDE { get { int o = __p.__offset(18); return o != 0 ? __p.bb.GetFloat(o + __p.bb_pos) : (float)0.0f; } }
  /// Altitude of the site
  public float ALTITUDE { get { int o = __p.__offset(20); return o != 0 ? __p.bb.GetFloat(o + __p.bb_pos) : (float)0.0f; } }
  /// Geometry of the site
  public Geometry? GEOMETRY { get { int o = __p.__offset(22); return o != 0 ? (Geometry?)(new Geometry()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Center point geometry coordinates
  public float CENTER_POINT_GEOMETRY(int j) { int o = __p.__offset(24); return o != 0 ? __p.bb.GetFloat(__p.__vector(o) + j * 4) : (float)0; }
  public int CENTER_POINT_GEOMETRYLength { get { int o = __p.__offset(24); return o != 0 ? __p.__vector_len(o) : 0; } }
#if ENABLE_SPAN_T
  public Span<float> GetCENTER_POINT_GEOMETRYBytes() { return __p.__vector_as_span<float>(24, 4); }
#else
  public ArraySegment<byte>? GetCENTER_POINT_GEOMETRYBytes() { return __p.__vector_as_arraysegment(24); }
#endif
  public float[] GetCENTER_POINT_GEOMETRYArray() { return __p.__vector_as_array<float>(24); }
  /// Classification marking of the site
  public string CLASSIFICATION { get { int o = __p.__offset(26); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCLASSIFICATIONBytes() { return __p.__vector_as_span<byte>(26, 1); }
#else
  public ArraySegment<byte>? GetCLASSIFICATIONBytes() { return __p.__vector_as_arraysegment(26); }
#endif
  public byte[] GetCLASSIFICATIONArray() { return __p.__vector_as_array<byte>(26); }
  /// CTR ISO 3166 Numeric code as string
  public string CTR_ID { get { int o = __p.__offset(28); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCTR_IDBytes() { return __p.__vector_as_span<byte>(28, 1); }
#else
  public ArraySegment<byte>? GetCTR_IDBytes() { return __p.__vector_as_arraysegment(28); }
#endif
  public byte[] GetCTR_IDArray() { return __p.__vector_as_array<byte>(28); }
  /// Identifier of the user who created the site data
  public string CREATED_BY { get { int o = __p.__offset(30); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCREATED_BYBytes() { return __p.__vector_as_span<byte>(30, 1); }
#else
  public ArraySegment<byte>? GetCREATED_BYBytes() { return __p.__vector_as_arraysegment(30); }
#endif
  public byte[] GetCREATED_BYArray() { return __p.__vector_as_array<byte>(30); }
  /// Description of the site
  public string DESCRIPTION { get { int o = __p.__offset(32); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetDESCRIPTIONBytes() { return __p.__vector_as_span<byte>(32, 1); }
#else
  public ArraySegment<byte>? GetDESCRIPTIONBytes() { return __p.__vector_as_arraysegment(32); }
#endif
  public byte[] GetDESCRIPTIONArray() { return __p.__vector_as_array<byte>(32); }
  /// URL for the 3D model of the site
  public string MODEL_URL { get { int o = __p.__offset(34); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetMODEL_URLBytes() { return __p.__vector_as_span<byte>(34, 1); }
#else
  public ArraySegment<byte>? GetMODEL_URLBytes() { return __p.__vector_as_arraysegment(34); }
#endif
  public byte[] GetMODEL_URLArray() { return __p.__vector_as_array<byte>(34); }
  /// Source of the site data
  public string SOURCE { get { int o = __p.__offset(36); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetSOURCEBytes() { return __p.__vector_as_span<byte>(36, 1); }
#else
  public ArraySegment<byte>? GetSOURCEBytes() { return __p.__vector_as_arraysegment(36); }
#endif
  public byte[] GetSOURCEArray() { return __p.__vector_as_array<byte>(36); }
  /// Indicates if the site is taskable
  public bool TASKABLE { get { int o = __p.__offset(38); return o != 0 ? 0!=__p.bb.Get(o + __p.bb_pos) : (bool)false; } }
  /// Operational status of the site (e.g., active, inactive, under construction)
  public string OPERATIONAL_STATUS { get { int o = __p.__offset(40); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetOPERATIONAL_STATUSBytes() { return __p.__vector_as_span<byte>(40, 1); }
#else
  public ArraySegment<byte>? GetOPERATIONAL_STATUSBytes() { return __p.__vector_as_arraysegment(40); }
#endif
  public byte[] GetOPERATIONAL_STATUSArray() { return __p.__vector_as_array<byte>(40); }
  /// Date of establishment
  public string ESTABLISHMENT_DATE { get { int o = __p.__offset(42); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetESTABLISHMENT_DATEBytes() { return __p.__vector_as_span<byte>(42, 1); }
#else
  public ArraySegment<byte>? GetESTABLISHMENT_DATEBytes() { return __p.__vector_as_arraysegment(42); }
#endif
  public byte[] GetESTABLISHMENT_DATEArray() { return __p.__vector_as_array<byte>(42); }
  /// Contact information for the site
  public string CONTACT_INFO { get { int o = __p.__offset(44); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCONTACT_INFOBytes() { return __p.__vector_as_span<byte>(44, 1); }
#else
  public ArraySegment<byte>? GetCONTACT_INFOBytes() { return __p.__vector_as_arraysegment(44); }
#endif
  public byte[] GetCONTACT_INFOArray() { return __p.__vector_as_array<byte>(44); }
  /// Environmental impact or considerations
  public string ENVIRONMENTAL_IMPACT { get { int o = __p.__offset(46); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetENVIRONMENTAL_IMPACTBytes() { return __p.__vector_as_span<byte>(46, 1); }
#else
  public ArraySegment<byte>? GetENVIRONMENTAL_IMPACTBytes() { return __p.__vector_as_arraysegment(46); }
#endif
  public byte[] GetENVIRONMENTAL_IMPACTArray() { return __p.__vector_as_array<byte>(46); }
  /// Accessibility and infrastructure details
  public string ACCESSIBILITY_INFRA { get { int o = __p.__offset(48); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetACCESSIBILITY_INFRABytes() { return __p.__vector_as_span<byte>(48, 1); }
#else
  public ArraySegment<byte>? GetACCESSIBILITY_INFRABytes() { return __p.__vector_as_arraysegment(48); }
#endif
  public byte[] GetACCESSIBILITY_INFRAArray() { return __p.__vector_as_array<byte>(48); }
  /// Vector of Integrated Devices (IDM)
  public IDM? INTEGRATED_DEVICES(int j) { int o = __p.__offset(50); return o != 0 ? (IDM?)(new IDM()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int INTEGRATED_DEVICESLength { get { int o = __p.__offset(50); return o != 0 ? __p.__vector_len(o) : 0; } }

  public static Offset<SIT> CreateSIT(FlatBufferBuilder builder,
      StringOffset IDOffset = default(StringOffset),
      StringOffset NAMEOffset = default(StringOffset),
      StringOffset ABBREVIATIONOffset = default(StringOffset),
      SiteType SITE_TYPE = SiteType.LAUNCH_SITE,
      StringOffset CATCODEOffset = default(StringOffset),
      StringOffset NETWORKOffset = default(StringOffset),
      float LATITUDE = 0.0f,
      float LONGITUDE = 0.0f,
      float ALTITUDE = 0.0f,
      Offset<Geometry> GEOMETRYOffset = default(Offset<Geometry>),
      VectorOffset CENTER_POINT_GEOMETRYOffset = default(VectorOffset),
      StringOffset CLASSIFICATIONOffset = default(StringOffset),
      StringOffset CTR_IDOffset = default(StringOffset),
      StringOffset CREATED_BYOffset = default(StringOffset),
      StringOffset DESCRIPTIONOffset = default(StringOffset),
      StringOffset MODEL_URLOffset = default(StringOffset),
      StringOffset SOURCEOffset = default(StringOffset),
      bool TASKABLE = false,
      StringOffset OPERATIONAL_STATUSOffset = default(StringOffset),
      StringOffset ESTABLISHMENT_DATEOffset = default(StringOffset),
      StringOffset CONTACT_INFOOffset = default(StringOffset),
      StringOffset ENVIRONMENTAL_IMPACTOffset = default(StringOffset),
      StringOffset ACCESSIBILITY_INFRAOffset = default(StringOffset),
      VectorOffset INTEGRATED_DEVICESOffset = default(VectorOffset)) {
    builder.StartTable(24);
    SIT.AddINTEGRATED_DEVICES(builder, INTEGRATED_DEVICESOffset);
    SIT.AddACCESSIBILITY_INFRA(builder, ACCESSIBILITY_INFRAOffset);
    SIT.AddENVIRONMENTAL_IMPACT(builder, ENVIRONMENTAL_IMPACTOffset);
    SIT.AddCONTACT_INFO(builder, CONTACT_INFOOffset);
    SIT.AddESTABLISHMENT_DATE(builder, ESTABLISHMENT_DATEOffset);
    SIT.AddOPERATIONAL_STATUS(builder, OPERATIONAL_STATUSOffset);
    SIT.AddSOURCE(builder, SOURCEOffset);
    SIT.AddMODEL_URL(builder, MODEL_URLOffset);
    SIT.AddDESCRIPTION(builder, DESCRIPTIONOffset);
    SIT.AddCREATED_BY(builder, CREATED_BYOffset);
    SIT.AddCTR_ID(builder, CTR_IDOffset);
    SIT.AddCLASSIFICATION(builder, CLASSIFICATIONOffset);
    SIT.AddCENTER_POINT_GEOMETRY(builder, CENTER_POINT_GEOMETRYOffset);
    SIT.AddGEOMETRY(builder, GEOMETRYOffset);
    SIT.AddALTITUDE(builder, ALTITUDE);
    SIT.AddLONGITUDE(builder, LONGITUDE);
    SIT.AddLATITUDE(builder, LATITUDE);
    SIT.AddNETWORK(builder, NETWORKOffset);
    SIT.AddCATCODE(builder, CATCODEOffset);
    SIT.AddABBREVIATION(builder, ABBREVIATIONOffset);
    SIT.AddNAME(builder, NAMEOffset);
    SIT.AddID(builder, IDOffset);
    SIT.AddTASKABLE(builder, TASKABLE);
    SIT.AddSITE_TYPE(builder, SITE_TYPE);
    return SIT.EndSIT(builder);
  }

  public static void StartSIT(FlatBufferBuilder builder) { builder.StartTable(24); }
  public static void AddID(FlatBufferBuilder builder, StringOffset IDOffset) { builder.AddOffset(0, IDOffset.Value, 0); }
  public static void AddNAME(FlatBufferBuilder builder, StringOffset NAMEOffset) { builder.AddOffset(1, NAMEOffset.Value, 0); }
  public static void AddABBREVIATION(FlatBufferBuilder builder, StringOffset ABBREVIATIONOffset) { builder.AddOffset(2, ABBREVIATIONOffset.Value, 0); }
  public static void AddSITE_TYPE(FlatBufferBuilder builder, SiteType SITE_TYPE) { builder.AddSbyte(3, (sbyte)SITE_TYPE, 0); }
  public static void AddCATCODE(FlatBufferBuilder builder, StringOffset CATCODEOffset) { builder.AddOffset(4, CATCODEOffset.Value, 0); }
  public static void AddNETWORK(FlatBufferBuilder builder, StringOffset NETWORKOffset) { builder.AddOffset(5, NETWORKOffset.Value, 0); }
  public static void AddLATITUDE(FlatBufferBuilder builder, float LATITUDE) { builder.AddFloat(6, LATITUDE, 0.0f); }
  public static void AddLONGITUDE(FlatBufferBuilder builder, float LONGITUDE) { builder.AddFloat(7, LONGITUDE, 0.0f); }
  public static void AddALTITUDE(FlatBufferBuilder builder, float ALTITUDE) { builder.AddFloat(8, ALTITUDE, 0.0f); }
  public static void AddGEOMETRY(FlatBufferBuilder builder, Offset<Geometry> GEOMETRYOffset) { builder.AddOffset(9, GEOMETRYOffset.Value, 0); }
  public static void AddCENTER_POINT_GEOMETRY(FlatBufferBuilder builder, VectorOffset CENTER_POINT_GEOMETRYOffset) { builder.AddOffset(10, CENTER_POINT_GEOMETRYOffset.Value, 0); }
  public static VectorOffset CreateCENTER_POINT_GEOMETRYVector(FlatBufferBuilder builder, float[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddFloat(data[i]); return builder.EndVector(); }
  public static VectorOffset CreateCENTER_POINT_GEOMETRYVectorBlock(FlatBufferBuilder builder, float[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateCENTER_POINT_GEOMETRYVectorBlock(FlatBufferBuilder builder, ArraySegment<float> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateCENTER_POINT_GEOMETRYVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<float>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartCENTER_POINT_GEOMETRYVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static void AddCLASSIFICATION(FlatBufferBuilder builder, StringOffset CLASSIFICATIONOffset) { builder.AddOffset(11, CLASSIFICATIONOffset.Value, 0); }
  public static void AddCTR_ID(FlatBufferBuilder builder, StringOffset CTR_IDOffset) { builder.AddOffset(12, CTR_IDOffset.Value, 0); }
  public static void AddCREATED_BY(FlatBufferBuilder builder, StringOffset CREATED_BYOffset) { builder.AddOffset(13, CREATED_BYOffset.Value, 0); }
  public static void AddDESCRIPTION(FlatBufferBuilder builder, StringOffset DESCRIPTIONOffset) { builder.AddOffset(14, DESCRIPTIONOffset.Value, 0); }
  public static void AddMODEL_URL(FlatBufferBuilder builder, StringOffset MODEL_URLOffset) { builder.AddOffset(15, MODEL_URLOffset.Value, 0); }
  public static void AddSOURCE(FlatBufferBuilder builder, StringOffset SOURCEOffset) { builder.AddOffset(16, SOURCEOffset.Value, 0); }
  public static void AddTASKABLE(FlatBufferBuilder builder, bool TASKABLE) { builder.AddBool(17, TASKABLE, false); }
  public static void AddOPERATIONAL_STATUS(FlatBufferBuilder builder, StringOffset OPERATIONAL_STATUSOffset) { builder.AddOffset(18, OPERATIONAL_STATUSOffset.Value, 0); }
  public static void AddESTABLISHMENT_DATE(FlatBufferBuilder builder, StringOffset ESTABLISHMENT_DATEOffset) { builder.AddOffset(19, ESTABLISHMENT_DATEOffset.Value, 0); }
  public static void AddCONTACT_INFO(FlatBufferBuilder builder, StringOffset CONTACT_INFOOffset) { builder.AddOffset(20, CONTACT_INFOOffset.Value, 0); }
  public static void AddENVIRONMENTAL_IMPACT(FlatBufferBuilder builder, StringOffset ENVIRONMENTAL_IMPACTOffset) { builder.AddOffset(21, ENVIRONMENTAL_IMPACTOffset.Value, 0); }
  public static void AddACCESSIBILITY_INFRA(FlatBufferBuilder builder, StringOffset ACCESSIBILITY_INFRAOffset) { builder.AddOffset(22, ACCESSIBILITY_INFRAOffset.Value, 0); }
  public static void AddINTEGRATED_DEVICES(FlatBufferBuilder builder, VectorOffset INTEGRATED_DEVICESOffset) { builder.AddOffset(23, INTEGRATED_DEVICESOffset.Value, 0); }
  public static VectorOffset CreateINTEGRATED_DEVICESVector(FlatBufferBuilder builder, Offset<IDM>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateINTEGRATED_DEVICESVectorBlock(FlatBufferBuilder builder, Offset<IDM>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateINTEGRATED_DEVICESVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<IDM>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateINTEGRATED_DEVICESVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<IDM>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartINTEGRATED_DEVICESVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static Offset<SIT> EndSIT(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<SIT>(o);
  }
  public static void FinishSITBuffer(FlatBufferBuilder builder, Offset<SIT> offset) { builder.Finish(offset.Value, "$SIT"); }
  public static void FinishSizePrefixedSITBuffer(FlatBufferBuilder builder, Offset<SIT> offset) { builder.FinishSizePrefixed(offset.Value, "$SIT"); }
  public SITT UnPack() {
    var _o = new SITT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(SITT _o) {
    _o.ID = this.ID;
    _o.NAME = this.NAME;
    _o.ABBREVIATION = this.ABBREVIATION;
    _o.SITE_TYPE = this.SITE_TYPE;
    _o.CATCODE = this.CATCODE;
    _o.NETWORK = this.NETWORK;
    _o.LATITUDE = this.LATITUDE;
    _o.LONGITUDE = this.LONGITUDE;
    _o.ALTITUDE = this.ALTITUDE;
    _o.GEOMETRY = this.GEOMETRY.HasValue ? this.GEOMETRY.Value.UnPack() : null;
    _o.CENTER_POINT_GEOMETRY = new List<float>();
    for (var _j = 0; _j < this.CENTER_POINT_GEOMETRYLength; ++_j) {_o.CENTER_POINT_GEOMETRY.Add(this.CENTER_POINT_GEOMETRY(_j));}
    _o.CLASSIFICATION = this.CLASSIFICATION;
    _o.CTR_ID = this.CTR_ID;
    _o.CREATED_BY = this.CREATED_BY;
    _o.DESCRIPTION = this.DESCRIPTION;
    _o.MODEL_URL = this.MODEL_URL;
    _o.SOURCE = this.SOURCE;
    _o.TASKABLE = this.TASKABLE;
    _o.OPERATIONAL_STATUS = this.OPERATIONAL_STATUS;
    _o.ESTABLISHMENT_DATE = this.ESTABLISHMENT_DATE;
    _o.CONTACT_INFO = this.CONTACT_INFO;
    _o.ENVIRONMENTAL_IMPACT = this.ENVIRONMENTAL_IMPACT;
    _o.ACCESSIBILITY_INFRA = this.ACCESSIBILITY_INFRA;
    _o.INTEGRATED_DEVICES = new List<IDMT>();
    for (var _j = 0; _j < this.INTEGRATED_DEVICESLength; ++_j) {_o.INTEGRATED_DEVICES.Add(this.INTEGRATED_DEVICES(_j).HasValue ? this.INTEGRATED_DEVICES(_j).Value.UnPack() : null);}
  }
  public static Offset<SIT> Pack(FlatBufferBuilder builder, SITT _o) {
    if (_o == null) return default(Offset<SIT>);
    var _ID = _o.ID == null ? default(StringOffset) : builder.CreateString(_o.ID);
    var _NAME = _o.NAME == null ? default(StringOffset) : builder.CreateString(_o.NAME);
    var _ABBREVIATION = _o.ABBREVIATION == null ? default(StringOffset) : builder.CreateString(_o.ABBREVIATION);
    var _CATCODE = _o.CATCODE == null ? default(StringOffset) : builder.CreateString(_o.CATCODE);
    var _NETWORK = _o.NETWORK == null ? default(StringOffset) : builder.CreateString(_o.NETWORK);
    var _GEOMETRY = _o.GEOMETRY == null ? default(Offset<Geometry>) : Geometry.Pack(builder, _o.GEOMETRY);
    var _CENTER_POINT_GEOMETRY = default(VectorOffset);
    if (_o.CENTER_POINT_GEOMETRY != null) {
      var __CENTER_POINT_GEOMETRY = _o.CENTER_POINT_GEOMETRY.ToArray();
      _CENTER_POINT_GEOMETRY = CreateCENTER_POINT_GEOMETRYVector(builder, __CENTER_POINT_GEOMETRY);
    }
    var _CLASSIFICATION = _o.CLASSIFICATION == null ? default(StringOffset) : builder.CreateString(_o.CLASSIFICATION);
    var _CTR_ID = _o.CTR_ID == null ? default(StringOffset) : builder.CreateString(_o.CTR_ID);
    var _CREATED_BY = _o.CREATED_BY == null ? default(StringOffset) : builder.CreateString(_o.CREATED_BY);
    var _DESCRIPTION = _o.DESCRIPTION == null ? default(StringOffset) : builder.CreateString(_o.DESCRIPTION);
    var _MODEL_URL = _o.MODEL_URL == null ? default(StringOffset) : builder.CreateString(_o.MODEL_URL);
    var _SOURCE = _o.SOURCE == null ? default(StringOffset) : builder.CreateString(_o.SOURCE);
    var _OPERATIONAL_STATUS = _o.OPERATIONAL_STATUS == null ? default(StringOffset) : builder.CreateString(_o.OPERATIONAL_STATUS);
    var _ESTABLISHMENT_DATE = _o.ESTABLISHMENT_DATE == null ? default(StringOffset) : builder.CreateString(_o.ESTABLISHMENT_DATE);
    var _CONTACT_INFO = _o.CONTACT_INFO == null ? default(StringOffset) : builder.CreateString(_o.CONTACT_INFO);
    var _ENVIRONMENTAL_IMPACT = _o.ENVIRONMENTAL_IMPACT == null ? default(StringOffset) : builder.CreateString(_o.ENVIRONMENTAL_IMPACT);
    var _ACCESSIBILITY_INFRA = _o.ACCESSIBILITY_INFRA == null ? default(StringOffset) : builder.CreateString(_o.ACCESSIBILITY_INFRA);
    var _INTEGRATED_DEVICES = default(VectorOffset);
    if (_o.INTEGRATED_DEVICES != null) {
      var __INTEGRATED_DEVICES = new Offset<IDM>[_o.INTEGRATED_DEVICES.Count];
      for (var _j = 0; _j < __INTEGRATED_DEVICES.Length; ++_j) { __INTEGRATED_DEVICES[_j] = IDM.Pack(builder, _o.INTEGRATED_DEVICES[_j]); }
      _INTEGRATED_DEVICES = CreateINTEGRATED_DEVICESVector(builder, __INTEGRATED_DEVICES);
    }
    return CreateSIT(
      builder,
      _ID,
      _NAME,
      _ABBREVIATION,
      _o.SITE_TYPE,
      _CATCODE,
      _NETWORK,
      _o.LATITUDE,
      _o.LONGITUDE,
      _o.ALTITUDE,
      _GEOMETRY,
      _CENTER_POINT_GEOMETRY,
      _CLASSIFICATION,
      _CTR_ID,
      _CREATED_BY,
      _DESCRIPTION,
      _MODEL_URL,
      _SOURCE,
      _o.TASKABLE,
      _OPERATIONAL_STATUS,
      _ESTABLISHMENT_DATE,
      _CONTACT_INFO,
      _ENVIRONMENTAL_IMPACT,
      _ACCESSIBILITY_INFRA,
      _INTEGRATED_DEVICES);
  }
}

public class SITT
{
  public string ID { get; set; }
  public string NAME { get; set; }
  public string ABBREVIATION { get; set; }
  public SiteType SITE_TYPE { get; set; }
  public string CATCODE { get; set; }
  public string NETWORK { get; set; }
  public float LATITUDE { get; set; }
  public float LONGITUDE { get; set; }
  public float ALTITUDE { get; set; }
  public GeometryT GEOMETRY { get; set; }
  public List<float> CENTER_POINT_GEOMETRY { get; set; }
  public string CLASSIFICATION { get; set; }
  public string CTR_ID { get; set; }
  public string CREATED_BY { get; set; }
  public string DESCRIPTION { get; set; }
  public string MODEL_URL { get; set; }
  public string SOURCE { get; set; }
  public bool TASKABLE { get; set; }
  public string OPERATIONAL_STATUS { get; set; }
  public string ESTABLISHMENT_DATE { get; set; }
  public string CONTACT_INFO { get; set; }
  public string ENVIRONMENTAL_IMPACT { get; set; }
  public string ACCESSIBILITY_INFRA { get; set; }
  public List<IDMT> INTEGRATED_DEVICES { get; set; }

  public SITT() {
    this.ID = null;
    this.NAME = null;
    this.ABBREVIATION = null;
    this.SITE_TYPE = SiteType.LAUNCH_SITE;
    this.CATCODE = null;
    this.NETWORK = null;
    this.LATITUDE = 0.0f;
    this.LONGITUDE = 0.0f;
    this.ALTITUDE = 0.0f;
    this.GEOMETRY = null;
    this.CENTER_POINT_GEOMETRY = null;
    this.CLASSIFICATION = null;
    this.CTR_ID = null;
    this.CREATED_BY = null;
    this.DESCRIPTION = null;
    this.MODEL_URL = null;
    this.SOURCE = null;
    this.TASKABLE = false;
    this.OPERATIONAL_STATUS = null;
    this.ESTABLISHMENT_DATE = null;
    this.CONTACT_INFO = null;
    this.ENVIRONMENTAL_IMPACT = null;
    this.ACCESSIBILITY_INFRA = null;
    this.INTEGRATED_DEVICES = null;
  }
  public static SITT DeserializeFromBinary(byte[] fbBuffer) {
    return SIT.GetRootAsSIT(new ByteBuffer(fbBuffer)).UnPack();
  }
  public byte[] SerializeToBinary() {
    var fbb = new FlatBufferBuilder(0x10000);
    SIT.FinishSITBuffer(fbb, SIT.Pack(fbb, this));
    return fbb.DataBuffer.ToSizedArray();
  }
}


static public class SITVerify
{
  static public bool Verify(Google.FlatBuffers.Verifier verifier, uint tablePos)
  {
    return verifier.VerifyTableStart(tablePos)
      && verifier.VerifyString(tablePos, 4 /*ID*/, false)
      && verifier.VerifyString(tablePos, 6 /*NAME*/, false)
      && verifier.VerifyString(tablePos, 8 /*ABBREVIATION*/, false)
      && verifier.VerifyField(tablePos, 10 /*SITE_TYPE*/, 1 /*SiteType*/, 1, false)
      && verifier.VerifyString(tablePos, 12 /*CATCODE*/, false)
      && verifier.VerifyString(tablePos, 14 /*NETWORK*/, false)
      && verifier.VerifyField(tablePos, 16 /*LATITUDE*/, 4 /*float*/, 4, false)
      && verifier.VerifyField(tablePos, 18 /*LONGITUDE*/, 4 /*float*/, 4, false)
      && verifier.VerifyField(tablePos, 20 /*ALTITUDE*/, 4 /*float*/, 4, false)
      && verifier.VerifyTable(tablePos, 22 /*GEOMETRY*/, GeometryVerify.Verify, false)
      && verifier.VerifyVectorOfData(tablePos, 24 /*CENTER_POINT_GEOMETRY*/, 4 /*float*/, false)
      && verifier.VerifyString(tablePos, 26 /*CLASSIFICATION*/, false)
      && verifier.VerifyString(tablePos, 28 /*CTR_ID*/, false)
      && verifier.VerifyString(tablePos, 30 /*CREATED_BY*/, false)
      && verifier.VerifyString(tablePos, 32 /*DESCRIPTION*/, false)
      && verifier.VerifyString(tablePos, 34 /*MODEL_URL*/, false)
      && verifier.VerifyString(tablePos, 36 /*SOURCE*/, false)
      && verifier.VerifyField(tablePos, 38 /*TASKABLE*/, 1 /*bool*/, 1, false)
      && verifier.VerifyString(tablePos, 40 /*OPERATIONAL_STATUS*/, false)
      && verifier.VerifyString(tablePos, 42 /*ESTABLISHMENT_DATE*/, false)
      && verifier.VerifyString(tablePos, 44 /*CONTACT_INFO*/, false)
      && verifier.VerifyString(tablePos, 46 /*ENVIRONMENTAL_IMPACT*/, false)
      && verifier.VerifyString(tablePos, 48 /*ACCESSIBILITY_INFRA*/, false)
      && verifier.VerifyVectorOfTables(tablePos, 50 /*INTEGRATED_DEVICES*/, IDMVerify.Verify, false)
      && verifier.VerifyTableEnd(tablePos);
  }
}
