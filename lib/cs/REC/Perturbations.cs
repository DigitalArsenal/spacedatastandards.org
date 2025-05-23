// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

public struct Perturbations : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_24_3_25(); }
  public static Perturbations GetRootAsPerturbations(ByteBuffer _bb) { return GetRootAsPerturbations(_bb, new Perturbations()); }
  public static Perturbations GetRootAsPerturbations(ByteBuffer _bb, Perturbations obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public Perturbations __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /// Comments in the Perturbations section.
  public string COMMENT(int j) { int o = __p.__offset(4); return o != 0 ? __p.__string(__p.__vector(o) + j * 4) : null; }
  public int COMMENTLength { get { int o = __p.__offset(4); return o != 0 ? __p.__vector_len(o) : 0; } }
  /// Atmospheric model used.
  public ATM? ATMOSPHERIC_MODEL { get { int o = __p.__offset(6); return o != 0 ? (ATM?)(new ATM()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Gravity model used.
  public string GRAVITY_MODEL { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetGRAVITY_MODELBytes() { return __p.__vector_as_span<byte>(8, 1); }
#else
  public ArraySegment<byte>? GetGRAVITY_MODELBytes() { return __p.__vector_as_arraysegment(8); }
#endif
  public byte[] GetGRAVITY_MODELArray() { return __p.__vector_as_array<byte>(8); }
  /// Degree of the gravity model.
  public int GRAVITY_DEGREE { get { int o = __p.__offset(10); return o != 0 ? __p.bb.GetInt(o + __p.bb_pos) : (int)0; } }
  /// Order of the gravity model.
  public int GRAVITY_ORDER { get { int o = __p.__offset(12); return o != 0 ? __p.bb.GetInt(o + __p.bb_pos) : (int)0; } }
  /// Gravitational constant times the mass of the central body.
  public double GM { get { int o = __p.__offset(14); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// List of celestial bodies included in n-body perturbations.
  public string N_BODY_PERTURBATIONS(int j) { int o = __p.__offset(16); return o != 0 ? __p.__string(__p.__vector(o) + j * 4) : null; }
  public int N_BODY_PERTURBATIONSLength { get { int o = __p.__offset(16); return o != 0 ? __p.__vector_len(o) : 0; } }
  /// Ocean tides model used.
  public string OCEAN_TIDES_MODEL { get { int o = __p.__offset(18); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetOCEAN_TIDES_MODELBytes() { return __p.__vector_as_span<byte>(18, 1); }
#else
  public ArraySegment<byte>? GetOCEAN_TIDES_MODELBytes() { return __p.__vector_as_arraysegment(18); }
#endif
  public byte[] GetOCEAN_TIDES_MODELArray() { return __p.__vector_as_array<byte>(18); }
  /// Solid tides model used.
  public string SOLID_TIDES_MODEL { get { int o = __p.__offset(20); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetSOLID_TIDES_MODELBytes() { return __p.__vector_as_span<byte>(20, 1); }
#else
  public ArraySegment<byte>? GetSOLID_TIDES_MODELBytes() { return __p.__vector_as_arraysegment(20); }
#endif
  public byte[] GetSOLID_TIDES_MODELArray() { return __p.__vector_as_array<byte>(20); }
  /// Atmospheric tides model used.
  public string ATMOSPHERIC_TIDES_MODEL { get { int o = __p.__offset(22); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetATMOSPHERIC_TIDES_MODELBytes() { return __p.__vector_as_span<byte>(22, 1); }
#else
  public ArraySegment<byte>? GetATMOSPHERIC_TIDES_MODELBytes() { return __p.__vector_as_arraysegment(22); }
#endif
  public byte[] GetATMOSPHERIC_TIDES_MODELArray() { return __p.__vector_as_array<byte>(22); }
  /// Geopotential model used.
  public string GEOPOTENTIAL_MODEL { get { int o = __p.__offset(24); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetGEOPOTENTIAL_MODELBytes() { return __p.__vector_as_span<byte>(24, 1); }
#else
  public ArraySegment<byte>? GetGEOPOTENTIAL_MODELBytes() { return __p.__vector_as_arraysegment(24); }
#endif
  public byte[] GetGEOPOTENTIAL_MODELArray() { return __p.__vector_as_array<byte>(24); }
  /// Solar radiation pressure model used.
  public string SOLAR_RAD_PRESSURE { get { int o = __p.__offset(26); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetSOLAR_RAD_PRESSUREBytes() { return __p.__vector_as_span<byte>(26, 1); }
#else
  public ArraySegment<byte>? GetSOLAR_RAD_PRESSUREBytes() { return __p.__vector_as_arraysegment(26); }
#endif
  public byte[] GetSOLAR_RAD_PRESSUREArray() { return __p.__vector_as_array<byte>(26); }
  /// Albedo model used.
  public string ALBEDO { get { int o = __p.__offset(28); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetALBEDOBytes() { return __p.__vector_as_span<byte>(28, 1); }
#else
  public ArraySegment<byte>? GetALBEDOBytes() { return __p.__vector_as_arraysegment(28); }
#endif
  public byte[] GetALBEDOArray() { return __p.__vector_as_array<byte>(28); }
  /// Thermal model used.
  public string THERMAL { get { int o = __p.__offset(30); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetTHERMALBytes() { return __p.__vector_as_span<byte>(30, 1); }
#else
  public ArraySegment<byte>? GetTHERMALBytes() { return __p.__vector_as_arraysegment(30); }
#endif
  public byte[] GetTHERMALArray() { return __p.__vector_as_array<byte>(30); }
  /// Relativity model used.
  public string RELATIVITY { get { int o = __p.__offset(32); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetRELATIVITYBytes() { return __p.__vector_as_span<byte>(32, 1); }
#else
  public ArraySegment<byte>? GetRELATIVITYBytes() { return __p.__vector_as_arraysegment(32); }
#endif
  public byte[] GetRELATIVITYArray() { return __p.__vector_as_array<byte>(32); }
  /// Atmospheric drag model used.
  public string ATMOSPHERIC_DRAG { get { int o = __p.__offset(34); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetATMOSPHERIC_DRAGBytes() { return __p.__vector_as_span<byte>(34, 1); }
#else
  public ArraySegment<byte>? GetATMOSPHERIC_DRAGBytes() { return __p.__vector_as_arraysegment(34); }
#endif
  public byte[] GetATMOSPHERIC_DRAGArray() { return __p.__vector_as_array<byte>(34); }
  /// Fixed geomagnetic Kp index used.
  public double FIXED_GEOMAG_KP { get { int o = __p.__offset(36); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Fixed F10.7 solar flux value used.
  public double FIXED_F10P7 { get { int o = __p.__offset(38); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Fixed mean F10.7 solar flux value used.
  public double FIXED_F10P7_MEAN { get { int o = __p.__offset(40); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }

  public static Offset<Perturbations> CreatePerturbations(FlatBufferBuilder builder,
      VectorOffset COMMENTOffset = default(VectorOffset),
      Offset<ATM> ATMOSPHERIC_MODELOffset = default(Offset<ATM>),
      StringOffset GRAVITY_MODELOffset = default(StringOffset),
      int GRAVITY_DEGREE = 0,
      int GRAVITY_ORDER = 0,
      double GM = 0.0,
      VectorOffset N_BODY_PERTURBATIONSOffset = default(VectorOffset),
      StringOffset OCEAN_TIDES_MODELOffset = default(StringOffset),
      StringOffset SOLID_TIDES_MODELOffset = default(StringOffset),
      StringOffset ATMOSPHERIC_TIDES_MODELOffset = default(StringOffset),
      StringOffset GEOPOTENTIAL_MODELOffset = default(StringOffset),
      StringOffset SOLAR_RAD_PRESSUREOffset = default(StringOffset),
      StringOffset ALBEDOOffset = default(StringOffset),
      StringOffset THERMALOffset = default(StringOffset),
      StringOffset RELATIVITYOffset = default(StringOffset),
      StringOffset ATMOSPHERIC_DRAGOffset = default(StringOffset),
      double FIXED_GEOMAG_KP = 0.0,
      double FIXED_F10P7 = 0.0,
      double FIXED_F10P7_MEAN = 0.0) {
    builder.StartTable(19);
    Perturbations.AddFIXED_F10P7_MEAN(builder, FIXED_F10P7_MEAN);
    Perturbations.AddFIXED_F10P7(builder, FIXED_F10P7);
    Perturbations.AddFIXED_GEOMAG_KP(builder, FIXED_GEOMAG_KP);
    Perturbations.AddGM(builder, GM);
    Perturbations.AddATMOSPHERIC_DRAG(builder, ATMOSPHERIC_DRAGOffset);
    Perturbations.AddRELATIVITY(builder, RELATIVITYOffset);
    Perturbations.AddTHERMAL(builder, THERMALOffset);
    Perturbations.AddALBEDO(builder, ALBEDOOffset);
    Perturbations.AddSOLAR_RAD_PRESSURE(builder, SOLAR_RAD_PRESSUREOffset);
    Perturbations.AddGEOPOTENTIAL_MODEL(builder, GEOPOTENTIAL_MODELOffset);
    Perturbations.AddATMOSPHERIC_TIDES_MODEL(builder, ATMOSPHERIC_TIDES_MODELOffset);
    Perturbations.AddSOLID_TIDES_MODEL(builder, SOLID_TIDES_MODELOffset);
    Perturbations.AddOCEAN_TIDES_MODEL(builder, OCEAN_TIDES_MODELOffset);
    Perturbations.AddN_BODY_PERTURBATIONS(builder, N_BODY_PERTURBATIONSOffset);
    Perturbations.AddGRAVITY_ORDER(builder, GRAVITY_ORDER);
    Perturbations.AddGRAVITY_DEGREE(builder, GRAVITY_DEGREE);
    Perturbations.AddGRAVITY_MODEL(builder, GRAVITY_MODELOffset);
    Perturbations.AddATMOSPHERIC_MODEL(builder, ATMOSPHERIC_MODELOffset);
    Perturbations.AddCOMMENT(builder, COMMENTOffset);
    return Perturbations.EndPerturbations(builder);
  }

  public static void StartPerturbations(FlatBufferBuilder builder) { builder.StartTable(19); }
  public static void AddCOMMENT(FlatBufferBuilder builder, VectorOffset COMMENTOffset) { builder.AddOffset(0, COMMENTOffset.Value, 0); }
  public static VectorOffset CreateCOMMENTVector(FlatBufferBuilder builder, StringOffset[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateCOMMENTVectorBlock(FlatBufferBuilder builder, StringOffset[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateCOMMENTVectorBlock(FlatBufferBuilder builder, ArraySegment<StringOffset> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateCOMMENTVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<StringOffset>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartCOMMENTVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static void AddATMOSPHERIC_MODEL(FlatBufferBuilder builder, Offset<ATM> ATMOSPHERIC_MODELOffset) { builder.AddOffset(1, ATMOSPHERIC_MODELOffset.Value, 0); }
  public static void AddGRAVITY_MODEL(FlatBufferBuilder builder, StringOffset GRAVITY_MODELOffset) { builder.AddOffset(2, GRAVITY_MODELOffset.Value, 0); }
  public static void AddGRAVITY_DEGREE(FlatBufferBuilder builder, int GRAVITY_DEGREE) { builder.AddInt(3, GRAVITY_DEGREE, 0); }
  public static void AddGRAVITY_ORDER(FlatBufferBuilder builder, int GRAVITY_ORDER) { builder.AddInt(4, GRAVITY_ORDER, 0); }
  public static void AddGM(FlatBufferBuilder builder, double GM) { builder.AddDouble(5, GM, 0.0); }
  public static void AddN_BODY_PERTURBATIONS(FlatBufferBuilder builder, VectorOffset N_BODY_PERTURBATIONSOffset) { builder.AddOffset(6, N_BODY_PERTURBATIONSOffset.Value, 0); }
  public static VectorOffset CreateN_BODY_PERTURBATIONSVector(FlatBufferBuilder builder, StringOffset[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateN_BODY_PERTURBATIONSVectorBlock(FlatBufferBuilder builder, StringOffset[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateN_BODY_PERTURBATIONSVectorBlock(FlatBufferBuilder builder, ArraySegment<StringOffset> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateN_BODY_PERTURBATIONSVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<StringOffset>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartN_BODY_PERTURBATIONSVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static void AddOCEAN_TIDES_MODEL(FlatBufferBuilder builder, StringOffset OCEAN_TIDES_MODELOffset) { builder.AddOffset(7, OCEAN_TIDES_MODELOffset.Value, 0); }
  public static void AddSOLID_TIDES_MODEL(FlatBufferBuilder builder, StringOffset SOLID_TIDES_MODELOffset) { builder.AddOffset(8, SOLID_TIDES_MODELOffset.Value, 0); }
  public static void AddATMOSPHERIC_TIDES_MODEL(FlatBufferBuilder builder, StringOffset ATMOSPHERIC_TIDES_MODELOffset) { builder.AddOffset(9, ATMOSPHERIC_TIDES_MODELOffset.Value, 0); }
  public static void AddGEOPOTENTIAL_MODEL(FlatBufferBuilder builder, StringOffset GEOPOTENTIAL_MODELOffset) { builder.AddOffset(10, GEOPOTENTIAL_MODELOffset.Value, 0); }
  public static void AddSOLAR_RAD_PRESSURE(FlatBufferBuilder builder, StringOffset SOLAR_RAD_PRESSUREOffset) { builder.AddOffset(11, SOLAR_RAD_PRESSUREOffset.Value, 0); }
  public static void AddALBEDO(FlatBufferBuilder builder, StringOffset ALBEDOOffset) { builder.AddOffset(12, ALBEDOOffset.Value, 0); }
  public static void AddTHERMAL(FlatBufferBuilder builder, StringOffset THERMALOffset) { builder.AddOffset(13, THERMALOffset.Value, 0); }
  public static void AddRELATIVITY(FlatBufferBuilder builder, StringOffset RELATIVITYOffset) { builder.AddOffset(14, RELATIVITYOffset.Value, 0); }
  public static void AddATMOSPHERIC_DRAG(FlatBufferBuilder builder, StringOffset ATMOSPHERIC_DRAGOffset) { builder.AddOffset(15, ATMOSPHERIC_DRAGOffset.Value, 0); }
  public static void AddFIXED_GEOMAG_KP(FlatBufferBuilder builder, double FIXED_GEOMAG_KP) { builder.AddDouble(16, FIXED_GEOMAG_KP, 0.0); }
  public static void AddFIXED_F10P7(FlatBufferBuilder builder, double FIXED_F10P7) { builder.AddDouble(17, FIXED_F10P7, 0.0); }
  public static void AddFIXED_F10P7_MEAN(FlatBufferBuilder builder, double FIXED_F10P7_MEAN) { builder.AddDouble(18, FIXED_F10P7_MEAN, 0.0); }
  public static Offset<Perturbations> EndPerturbations(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<Perturbations>(o);
  }
  public PerturbationsT UnPack() {
    var _o = new PerturbationsT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(PerturbationsT _o) {
    _o.COMMENT = new List<string>();
    for (var _j = 0; _j < this.COMMENTLength; ++_j) {_o.COMMENT.Add(this.COMMENT(_j));}
    _o.ATMOSPHERIC_MODEL = this.ATMOSPHERIC_MODEL.HasValue ? this.ATMOSPHERIC_MODEL.Value.UnPack() : null;
    _o.GRAVITY_MODEL = this.GRAVITY_MODEL;
    _o.GRAVITY_DEGREE = this.GRAVITY_DEGREE;
    _o.GRAVITY_ORDER = this.GRAVITY_ORDER;
    _o.GM = this.GM;
    _o.N_BODY_PERTURBATIONS = new List<string>();
    for (var _j = 0; _j < this.N_BODY_PERTURBATIONSLength; ++_j) {_o.N_BODY_PERTURBATIONS.Add(this.N_BODY_PERTURBATIONS(_j));}
    _o.OCEAN_TIDES_MODEL = this.OCEAN_TIDES_MODEL;
    _o.SOLID_TIDES_MODEL = this.SOLID_TIDES_MODEL;
    _o.ATMOSPHERIC_TIDES_MODEL = this.ATMOSPHERIC_TIDES_MODEL;
    _o.GEOPOTENTIAL_MODEL = this.GEOPOTENTIAL_MODEL;
    _o.SOLAR_RAD_PRESSURE = this.SOLAR_RAD_PRESSURE;
    _o.ALBEDO = this.ALBEDO;
    _o.THERMAL = this.THERMAL;
    _o.RELATIVITY = this.RELATIVITY;
    _o.ATMOSPHERIC_DRAG = this.ATMOSPHERIC_DRAG;
    _o.FIXED_GEOMAG_KP = this.FIXED_GEOMAG_KP;
    _o.FIXED_F10P7 = this.FIXED_F10P7;
    _o.FIXED_F10P7_MEAN = this.FIXED_F10P7_MEAN;
  }
  public static Offset<Perturbations> Pack(FlatBufferBuilder builder, PerturbationsT _o) {
    if (_o == null) return default(Offset<Perturbations>);
    var _COMMENT = default(VectorOffset);
    if (_o.COMMENT != null) {
      var __COMMENT = new StringOffset[_o.COMMENT.Count];
      for (var _j = 0; _j < __COMMENT.Length; ++_j) { __COMMENT[_j] = builder.CreateString(_o.COMMENT[_j]); }
      _COMMENT = CreateCOMMENTVector(builder, __COMMENT);
    }
    var _ATMOSPHERIC_MODEL = _o.ATMOSPHERIC_MODEL == null ? default(Offset<ATM>) : ATM.Pack(builder, _o.ATMOSPHERIC_MODEL);
    var _GRAVITY_MODEL = _o.GRAVITY_MODEL == null ? default(StringOffset) : builder.CreateString(_o.GRAVITY_MODEL);
    var _N_BODY_PERTURBATIONS = default(VectorOffset);
    if (_o.N_BODY_PERTURBATIONS != null) {
      var __N_BODY_PERTURBATIONS = new StringOffset[_o.N_BODY_PERTURBATIONS.Count];
      for (var _j = 0; _j < __N_BODY_PERTURBATIONS.Length; ++_j) { __N_BODY_PERTURBATIONS[_j] = builder.CreateString(_o.N_BODY_PERTURBATIONS[_j]); }
      _N_BODY_PERTURBATIONS = CreateN_BODY_PERTURBATIONSVector(builder, __N_BODY_PERTURBATIONS);
    }
    var _OCEAN_TIDES_MODEL = _o.OCEAN_TIDES_MODEL == null ? default(StringOffset) : builder.CreateString(_o.OCEAN_TIDES_MODEL);
    var _SOLID_TIDES_MODEL = _o.SOLID_TIDES_MODEL == null ? default(StringOffset) : builder.CreateString(_o.SOLID_TIDES_MODEL);
    var _ATMOSPHERIC_TIDES_MODEL = _o.ATMOSPHERIC_TIDES_MODEL == null ? default(StringOffset) : builder.CreateString(_o.ATMOSPHERIC_TIDES_MODEL);
    var _GEOPOTENTIAL_MODEL = _o.GEOPOTENTIAL_MODEL == null ? default(StringOffset) : builder.CreateString(_o.GEOPOTENTIAL_MODEL);
    var _SOLAR_RAD_PRESSURE = _o.SOLAR_RAD_PRESSURE == null ? default(StringOffset) : builder.CreateString(_o.SOLAR_RAD_PRESSURE);
    var _ALBEDO = _o.ALBEDO == null ? default(StringOffset) : builder.CreateString(_o.ALBEDO);
    var _THERMAL = _o.THERMAL == null ? default(StringOffset) : builder.CreateString(_o.THERMAL);
    var _RELATIVITY = _o.RELATIVITY == null ? default(StringOffset) : builder.CreateString(_o.RELATIVITY);
    var _ATMOSPHERIC_DRAG = _o.ATMOSPHERIC_DRAG == null ? default(StringOffset) : builder.CreateString(_o.ATMOSPHERIC_DRAG);
    return CreatePerturbations(
      builder,
      _COMMENT,
      _ATMOSPHERIC_MODEL,
      _GRAVITY_MODEL,
      _o.GRAVITY_DEGREE,
      _o.GRAVITY_ORDER,
      _o.GM,
      _N_BODY_PERTURBATIONS,
      _OCEAN_TIDES_MODEL,
      _SOLID_TIDES_MODEL,
      _ATMOSPHERIC_TIDES_MODEL,
      _GEOPOTENTIAL_MODEL,
      _SOLAR_RAD_PRESSURE,
      _ALBEDO,
      _THERMAL,
      _RELATIVITY,
      _ATMOSPHERIC_DRAG,
      _o.FIXED_GEOMAG_KP,
      _o.FIXED_F10P7,
      _o.FIXED_F10P7_MEAN);
  }
}

public class PerturbationsT
{
  public List<string> COMMENT { get; set; }
  public ATMT ATMOSPHERIC_MODEL { get; set; }
  public string GRAVITY_MODEL { get; set; }
  public int GRAVITY_DEGREE { get; set; }
  public int GRAVITY_ORDER { get; set; }
  public double GM { get; set; }
  public List<string> N_BODY_PERTURBATIONS { get; set; }
  public string OCEAN_TIDES_MODEL { get; set; }
  public string SOLID_TIDES_MODEL { get; set; }
  public string ATMOSPHERIC_TIDES_MODEL { get; set; }
  public string GEOPOTENTIAL_MODEL { get; set; }
  public string SOLAR_RAD_PRESSURE { get; set; }
  public string ALBEDO { get; set; }
  public string THERMAL { get; set; }
  public string RELATIVITY { get; set; }
  public string ATMOSPHERIC_DRAG { get; set; }
  public double FIXED_GEOMAG_KP { get; set; }
  public double FIXED_F10P7 { get; set; }
  public double FIXED_F10P7_MEAN { get; set; }

  public PerturbationsT() {
    this.COMMENT = null;
    this.ATMOSPHERIC_MODEL = null;
    this.GRAVITY_MODEL = null;
    this.GRAVITY_DEGREE = 0;
    this.GRAVITY_ORDER = 0;
    this.GM = 0.0;
    this.N_BODY_PERTURBATIONS = null;
    this.OCEAN_TIDES_MODEL = null;
    this.SOLID_TIDES_MODEL = null;
    this.ATMOSPHERIC_TIDES_MODEL = null;
    this.GEOPOTENTIAL_MODEL = null;
    this.SOLAR_RAD_PRESSURE = null;
    this.ALBEDO = null;
    this.THERMAL = null;
    this.RELATIVITY = null;
    this.ATMOSPHERIC_DRAG = null;
    this.FIXED_GEOMAG_KP = 0.0;
    this.FIXED_F10P7 = 0.0;
    this.FIXED_F10P7_MEAN = 0.0;
  }
}


static public class PerturbationsVerify
{
  static public bool Verify(Google.FlatBuffers.Verifier verifier, uint tablePos)
  {
    return verifier.VerifyTableStart(tablePos)
      && verifier.VerifyVectorOfStrings(tablePos, 4 /*COMMENT*/, false)
      && verifier.VerifyTable(tablePos, 6 /*ATMOSPHERIC_MODEL*/, ATMVerify.Verify, false)
      && verifier.VerifyString(tablePos, 8 /*GRAVITY_MODEL*/, false)
      && verifier.VerifyField(tablePos, 10 /*GRAVITY_DEGREE*/, 4 /*int*/, 4, false)
      && verifier.VerifyField(tablePos, 12 /*GRAVITY_ORDER*/, 4 /*int*/, 4, false)
      && verifier.VerifyField(tablePos, 14 /*GM*/, 8 /*double*/, 8, false)
      && verifier.VerifyVectorOfStrings(tablePos, 16 /*N_BODY_PERTURBATIONS*/, false)
      && verifier.VerifyString(tablePos, 18 /*OCEAN_TIDES_MODEL*/, false)
      && verifier.VerifyString(tablePos, 20 /*SOLID_TIDES_MODEL*/, false)
      && verifier.VerifyString(tablePos, 22 /*ATMOSPHERIC_TIDES_MODEL*/, false)
      && verifier.VerifyString(tablePos, 24 /*GEOPOTENTIAL_MODEL*/, false)
      && verifier.VerifyString(tablePos, 26 /*SOLAR_RAD_PRESSURE*/, false)
      && verifier.VerifyString(tablePos, 28 /*ALBEDO*/, false)
      && verifier.VerifyString(tablePos, 30 /*THERMAL*/, false)
      && verifier.VerifyString(tablePos, 32 /*RELATIVITY*/, false)
      && verifier.VerifyString(tablePos, 34 /*ATMOSPHERIC_DRAG*/, false)
      && verifier.VerifyField(tablePos, 36 /*FIXED_GEOMAG_KP*/, 8 /*double*/, 8, false)
      && verifier.VerifyField(tablePos, 38 /*FIXED_F10P7*/, 8 /*double*/, 8, false)
      && verifier.VerifyField(tablePos, 40 /*FIXED_F10P7_MEAN*/, 8 /*double*/, 8, false)
      && verifier.VerifyTableEnd(tablePos);
  }
}
