// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

/// OEM Ephemeris Data Block
public struct ephemerisDataBlock : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_24_3_25(); }
  public static ephemerisDataBlock GetRootAsephemerisDataBlock(ByteBuffer _bb) { return GetRootAsephemerisDataBlock(_bb, new ephemerisDataBlock()); }
  public static ephemerisDataBlock GetRootAsephemerisDataBlock(ByteBuffer _bb, ephemerisDataBlock obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public ephemerisDataBlock __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /// Plain-Text Comment
  public string COMMENT { get { int o = __p.__offset(4); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCOMMENTBytes() { return __p.__vector_as_span<byte>(4, 1); }
#else
  public ArraySegment<byte>? GetCOMMENTBytes() { return __p.__vector_as_arraysegment(4); }
#endif
  public byte[] GetCOMMENTArray() { return __p.__vector_as_array<byte>(4); }
  /// Satellite name for the first object
  public CAT? OBJECT { get { int o = __p.__offset(6); return o != 0 ? (CAT?)(new CAT()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Origin of reference frame (EARTH, MARS, MOON, etc.)
  public string CENTER_NAME { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetCENTER_NAMEBytes() { return __p.__vector_as_span<byte>(8, 1); }
#else
  public ArraySegment<byte>? GetCENTER_NAMEBytes() { return __p.__vector_as_arraysegment(8); }
#endif
  public byte[] GetCENTER_NAMEArray() { return __p.__vector_as_array<byte>(8); }
  /// Name of the reference frame (TEME, EME2000, etc.)
  public RFM? REFERENCE_FRAME { get { int o = __p.__offset(10); return o != 0 ? (RFM?)(new RFM()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Epoch of reference frame, if not intrinsic to the definition of the reference frame
  public string REFERENCE_FRAME_EPOCH { get { int o = __p.__offset(12); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetREFERENCE_FRAME_EPOCHBytes() { return __p.__vector_as_span<byte>(12, 1); }
#else
  public ArraySegment<byte>? GetREFERENCE_FRAME_EPOCHBytes() { return __p.__vector_as_arraysegment(12); }
#endif
  public byte[] GetREFERENCE_FRAME_EPOCHArray() { return __p.__vector_as_array<byte>(12); }
  /// Reference frame for the covariance matrix
  public RFM? COV_REFERENCE_FRAME { get { int o = __p.__offset(14); return o != 0 ? (RFM?)(new RFM()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Time system used for the orbit state and covariance matrix. (UTC)
  public timeSystem TIME_SYSTEM { get { int o = __p.__offset(16); return o != 0 ? (timeSystem)__p.bb.GetSbyte(o + __p.bb_pos) : timeSystem.GMST; } }
  /// Start of TOTAL time span covered by ephemeris data and covariance data (ISO 8601)
  public string START_TIME { get { int o = __p.__offset(18); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetSTART_TIMEBytes() { return __p.__vector_as_span<byte>(18, 1); }
#else
  public ArraySegment<byte>? GetSTART_TIMEBytes() { return __p.__vector_as_arraysegment(18); }
#endif
  public byte[] GetSTART_TIMEArray() { return __p.__vector_as_array<byte>(18); }
  /// Optional start USEABLE time span covered by ephemeris data (ISO 8601)
  public string USEABLE_START_TIME { get { int o = __p.__offset(20); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetUSEABLE_START_TIMEBytes() { return __p.__vector_as_span<byte>(20, 1); }
#else
  public ArraySegment<byte>? GetUSEABLE_START_TIMEBytes() { return __p.__vector_as_arraysegment(20); }
#endif
  public byte[] GetUSEABLE_START_TIMEArray() { return __p.__vector_as_array<byte>(20); }
  /// Optional end of USEABLE time span covered by ephemeris data (ISO 8601)
  public string USEABLE_STOP_TIME { get { int o = __p.__offset(22); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetUSEABLE_STOP_TIMEBytes() { return __p.__vector_as_span<byte>(22, 1); }
#else
  public ArraySegment<byte>? GetUSEABLE_STOP_TIMEBytes() { return __p.__vector_as_arraysegment(22); }
#endif
  public byte[] GetUSEABLE_STOP_TIMEArray() { return __p.__vector_as_array<byte>(22); }
  /// End of TOTAL time span covered by ephemeris data and covariance data (ISO 8601)
  public string STOP_TIME { get { int o = __p.__offset(24); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetSTOP_TIMEBytes() { return __p.__vector_as_span<byte>(24, 1); }
#else
  public ArraySegment<byte>? GetSTOP_TIMEBytes() { return __p.__vector_as_arraysegment(24); }
#endif
  public byte[] GetSTOP_TIMEArray() { return __p.__vector_as_array<byte>(24); }
  /// Step size in seconds separating the epochs of each ephemeris data row
  public double STEP_SIZE { get { int o = __p.__offset(26); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Recommended interpolation method for ephemeris data (Hermite, Linear, Lagrange, etc.)
  public string INTERPOLATION { get { int o = __p.__offset(28); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetINTERPOLATIONBytes() { return __p.__vector_as_span<byte>(28, 1); }
#else
  public ArraySegment<byte>? GetINTERPOLATIONBytes() { return __p.__vector_as_arraysegment(28); }
#endif
  public byte[] GetINTERPOLATIONArray() { return __p.__vector_as_array<byte>(28); }
  /// Recommended interpolation degree for ephemeris data
  public uint INTERPOLATION_DEGREE { get { int o = __p.__offset(30); return o != 0 ? __p.bb.GetUint(o + __p.bb_pos) : (uint)0; } }
  /// Array of ephemeris data lines
  public ephemerisDataLine? EPHEMERIS_DATA_LINES(int j) { int o = __p.__offset(32); return o != 0 ? (ephemerisDataLine?)(new ephemerisDataLine()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int EPHEMERIS_DATA_LINESLength { get { int o = __p.__offset(32); return o != 0 ? __p.__vector_len(o) : 0; } }
  /// Array of covariance matrix lines
  public covarianceMatrixLine? COVARIANCE_MATRIX_LINES(int j) { int o = __p.__offset(34); return o != 0 ? (covarianceMatrixLine?)(new covarianceMatrixLine()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int COVARIANCE_MATRIX_LINESLength { get { int o = __p.__offset(34); return o != 0 ? __p.__vector_len(o) : 0; } }

  public static Offset<ephemerisDataBlock> CreateephemerisDataBlock(FlatBufferBuilder builder,
      StringOffset COMMENTOffset = default(StringOffset),
      Offset<CAT> OBJECTOffset = default(Offset<CAT>),
      StringOffset CENTER_NAMEOffset = default(StringOffset),
      Offset<RFM> REFERENCE_FRAMEOffset = default(Offset<RFM>),
      StringOffset REFERENCE_FRAME_EPOCHOffset = default(StringOffset),
      Offset<RFM> COV_REFERENCE_FRAMEOffset = default(Offset<RFM>),
      timeSystem TIME_SYSTEM = timeSystem.GMST,
      StringOffset START_TIMEOffset = default(StringOffset),
      StringOffset USEABLE_START_TIMEOffset = default(StringOffset),
      StringOffset USEABLE_STOP_TIMEOffset = default(StringOffset),
      StringOffset STOP_TIMEOffset = default(StringOffset),
      double STEP_SIZE = 0.0,
      StringOffset INTERPOLATIONOffset = default(StringOffset),
      uint INTERPOLATION_DEGREE = 0,
      VectorOffset EPHEMERIS_DATA_LINESOffset = default(VectorOffset),
      VectorOffset COVARIANCE_MATRIX_LINESOffset = default(VectorOffset)) {
    builder.StartTable(16);
    ephemerisDataBlock.AddSTEP_SIZE(builder, STEP_SIZE);
    ephemerisDataBlock.AddCOVARIANCE_MATRIX_LINES(builder, COVARIANCE_MATRIX_LINESOffset);
    ephemerisDataBlock.AddEPHEMERIS_DATA_LINES(builder, EPHEMERIS_DATA_LINESOffset);
    ephemerisDataBlock.AddINTERPOLATION_DEGREE(builder, INTERPOLATION_DEGREE);
    ephemerisDataBlock.AddINTERPOLATION(builder, INTERPOLATIONOffset);
    ephemerisDataBlock.AddSTOP_TIME(builder, STOP_TIMEOffset);
    ephemerisDataBlock.AddUSEABLE_STOP_TIME(builder, USEABLE_STOP_TIMEOffset);
    ephemerisDataBlock.AddUSEABLE_START_TIME(builder, USEABLE_START_TIMEOffset);
    ephemerisDataBlock.AddSTART_TIME(builder, START_TIMEOffset);
    ephemerisDataBlock.AddCOV_REFERENCE_FRAME(builder, COV_REFERENCE_FRAMEOffset);
    ephemerisDataBlock.AddREFERENCE_FRAME_EPOCH(builder, REFERENCE_FRAME_EPOCHOffset);
    ephemerisDataBlock.AddREFERENCE_FRAME(builder, REFERENCE_FRAMEOffset);
    ephemerisDataBlock.AddCENTER_NAME(builder, CENTER_NAMEOffset);
    ephemerisDataBlock.AddOBJECT(builder, OBJECTOffset);
    ephemerisDataBlock.AddCOMMENT(builder, COMMENTOffset);
    ephemerisDataBlock.AddTIME_SYSTEM(builder, TIME_SYSTEM);
    return ephemerisDataBlock.EndephemerisDataBlock(builder);
  }

  public static void StartephemerisDataBlock(FlatBufferBuilder builder) { builder.StartTable(16); }
  public static void AddCOMMENT(FlatBufferBuilder builder, StringOffset COMMENTOffset) { builder.AddOffset(0, COMMENTOffset.Value, 0); }
  public static void AddOBJECT(FlatBufferBuilder builder, Offset<CAT> OBJECTOffset) { builder.AddOffset(1, OBJECTOffset.Value, 0); }
  public static void AddCENTER_NAME(FlatBufferBuilder builder, StringOffset CENTER_NAMEOffset) { builder.AddOffset(2, CENTER_NAMEOffset.Value, 0); }
  public static void AddREFERENCE_FRAME(FlatBufferBuilder builder, Offset<RFM> REFERENCE_FRAMEOffset) { builder.AddOffset(3, REFERENCE_FRAMEOffset.Value, 0); }
  public static void AddREFERENCE_FRAME_EPOCH(FlatBufferBuilder builder, StringOffset REFERENCE_FRAME_EPOCHOffset) { builder.AddOffset(4, REFERENCE_FRAME_EPOCHOffset.Value, 0); }
  public static void AddCOV_REFERENCE_FRAME(FlatBufferBuilder builder, Offset<RFM> COV_REFERENCE_FRAMEOffset) { builder.AddOffset(5, COV_REFERENCE_FRAMEOffset.Value, 0); }
  public static void AddTIME_SYSTEM(FlatBufferBuilder builder, timeSystem TIME_SYSTEM) { builder.AddSbyte(6, (sbyte)TIME_SYSTEM, 0); }
  public static void AddSTART_TIME(FlatBufferBuilder builder, StringOffset START_TIMEOffset) { builder.AddOffset(7, START_TIMEOffset.Value, 0); }
  public static void AddUSEABLE_START_TIME(FlatBufferBuilder builder, StringOffset USEABLE_START_TIMEOffset) { builder.AddOffset(8, USEABLE_START_TIMEOffset.Value, 0); }
  public static void AddUSEABLE_STOP_TIME(FlatBufferBuilder builder, StringOffset USEABLE_STOP_TIMEOffset) { builder.AddOffset(9, USEABLE_STOP_TIMEOffset.Value, 0); }
  public static void AddSTOP_TIME(FlatBufferBuilder builder, StringOffset STOP_TIMEOffset) { builder.AddOffset(10, STOP_TIMEOffset.Value, 0); }
  public static void AddSTEP_SIZE(FlatBufferBuilder builder, double STEP_SIZE) { builder.AddDouble(11, STEP_SIZE, 0.0); }
  public static void AddINTERPOLATION(FlatBufferBuilder builder, StringOffset INTERPOLATIONOffset) { builder.AddOffset(12, INTERPOLATIONOffset.Value, 0); }
  public static void AddINTERPOLATION_DEGREE(FlatBufferBuilder builder, uint INTERPOLATION_DEGREE) { builder.AddUint(13, INTERPOLATION_DEGREE, 0); }
  public static void AddEPHEMERIS_DATA_LINES(FlatBufferBuilder builder, VectorOffset EPHEMERIS_DATA_LINESOffset) { builder.AddOffset(14, EPHEMERIS_DATA_LINESOffset.Value, 0); }
  public static VectorOffset CreateEPHEMERIS_DATA_LINESVector(FlatBufferBuilder builder, Offset<ephemerisDataLine>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateEPHEMERIS_DATA_LINESVectorBlock(FlatBufferBuilder builder, Offset<ephemerisDataLine>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateEPHEMERIS_DATA_LINESVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<ephemerisDataLine>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateEPHEMERIS_DATA_LINESVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<ephemerisDataLine>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartEPHEMERIS_DATA_LINESVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static void AddCOVARIANCE_MATRIX_LINES(FlatBufferBuilder builder, VectorOffset COVARIANCE_MATRIX_LINESOffset) { builder.AddOffset(15, COVARIANCE_MATRIX_LINESOffset.Value, 0); }
  public static VectorOffset CreateCOVARIANCE_MATRIX_LINESVector(FlatBufferBuilder builder, Offset<covarianceMatrixLine>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateCOVARIANCE_MATRIX_LINESVectorBlock(FlatBufferBuilder builder, Offset<covarianceMatrixLine>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateCOVARIANCE_MATRIX_LINESVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<covarianceMatrixLine>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateCOVARIANCE_MATRIX_LINESVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<covarianceMatrixLine>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartCOVARIANCE_MATRIX_LINESVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static Offset<ephemerisDataBlock> EndephemerisDataBlock(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<ephemerisDataBlock>(o);
  }
  public ephemerisDataBlockT UnPack() {
    var _o = new ephemerisDataBlockT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(ephemerisDataBlockT _o) {
    _o.COMMENT = this.COMMENT;
    _o.OBJECT = this.OBJECT.HasValue ? this.OBJECT.Value.UnPack() : null;
    _o.CENTER_NAME = this.CENTER_NAME;
    _o.REFERENCE_FRAME = this.REFERENCE_FRAME.HasValue ? this.REFERENCE_FRAME.Value.UnPack() : null;
    _o.REFERENCE_FRAME_EPOCH = this.REFERENCE_FRAME_EPOCH;
    _o.COV_REFERENCE_FRAME = this.COV_REFERENCE_FRAME.HasValue ? this.COV_REFERENCE_FRAME.Value.UnPack() : null;
    _o.TIME_SYSTEM = this.TIME_SYSTEM;
    _o.START_TIME = this.START_TIME;
    _o.USEABLE_START_TIME = this.USEABLE_START_TIME;
    _o.USEABLE_STOP_TIME = this.USEABLE_STOP_TIME;
    _o.STOP_TIME = this.STOP_TIME;
    _o.STEP_SIZE = this.STEP_SIZE;
    _o.INTERPOLATION = this.INTERPOLATION;
    _o.INTERPOLATION_DEGREE = this.INTERPOLATION_DEGREE;
    _o.EPHEMERIS_DATA_LINES = new List<ephemerisDataLineT>();
    for (var _j = 0; _j < this.EPHEMERIS_DATA_LINESLength; ++_j) {_o.EPHEMERIS_DATA_LINES.Add(this.EPHEMERIS_DATA_LINES(_j).HasValue ? this.EPHEMERIS_DATA_LINES(_j).Value.UnPack() : null);}
    _o.COVARIANCE_MATRIX_LINES = new List<covarianceMatrixLineT>();
    for (var _j = 0; _j < this.COVARIANCE_MATRIX_LINESLength; ++_j) {_o.COVARIANCE_MATRIX_LINES.Add(this.COVARIANCE_MATRIX_LINES(_j).HasValue ? this.COVARIANCE_MATRIX_LINES(_j).Value.UnPack() : null);}
  }
  public static Offset<ephemerisDataBlock> Pack(FlatBufferBuilder builder, ephemerisDataBlockT _o) {
    if (_o == null) return default(Offset<ephemerisDataBlock>);
    var _COMMENT = _o.COMMENT == null ? default(StringOffset) : builder.CreateString(_o.COMMENT);
    var _OBJECT = _o.OBJECT == null ? default(Offset<CAT>) : CAT.Pack(builder, _o.OBJECT);
    var _CENTER_NAME = _o.CENTER_NAME == null ? default(StringOffset) : builder.CreateString(_o.CENTER_NAME);
    var _REFERENCE_FRAME = _o.REFERENCE_FRAME == null ? default(Offset<RFM>) : RFM.Pack(builder, _o.REFERENCE_FRAME);
    var _REFERENCE_FRAME_EPOCH = _o.REFERENCE_FRAME_EPOCH == null ? default(StringOffset) : builder.CreateString(_o.REFERENCE_FRAME_EPOCH);
    var _COV_REFERENCE_FRAME = _o.COV_REFERENCE_FRAME == null ? default(Offset<RFM>) : RFM.Pack(builder, _o.COV_REFERENCE_FRAME);
    var _START_TIME = _o.START_TIME == null ? default(StringOffset) : builder.CreateString(_o.START_TIME);
    var _USEABLE_START_TIME = _o.USEABLE_START_TIME == null ? default(StringOffset) : builder.CreateString(_o.USEABLE_START_TIME);
    var _USEABLE_STOP_TIME = _o.USEABLE_STOP_TIME == null ? default(StringOffset) : builder.CreateString(_o.USEABLE_STOP_TIME);
    var _STOP_TIME = _o.STOP_TIME == null ? default(StringOffset) : builder.CreateString(_o.STOP_TIME);
    var _INTERPOLATION = _o.INTERPOLATION == null ? default(StringOffset) : builder.CreateString(_o.INTERPOLATION);
    var _EPHEMERIS_DATA_LINES = default(VectorOffset);
    if (_o.EPHEMERIS_DATA_LINES != null) {
      var __EPHEMERIS_DATA_LINES = new Offset<ephemerisDataLine>[_o.EPHEMERIS_DATA_LINES.Count];
      for (var _j = 0; _j < __EPHEMERIS_DATA_LINES.Length; ++_j) { __EPHEMERIS_DATA_LINES[_j] = ephemerisDataLine.Pack(builder, _o.EPHEMERIS_DATA_LINES[_j]); }
      _EPHEMERIS_DATA_LINES = CreateEPHEMERIS_DATA_LINESVector(builder, __EPHEMERIS_DATA_LINES);
    }
    var _COVARIANCE_MATRIX_LINES = default(VectorOffset);
    if (_o.COVARIANCE_MATRIX_LINES != null) {
      var __COVARIANCE_MATRIX_LINES = new Offset<covarianceMatrixLine>[_o.COVARIANCE_MATRIX_LINES.Count];
      for (var _j = 0; _j < __COVARIANCE_MATRIX_LINES.Length; ++_j) { __COVARIANCE_MATRIX_LINES[_j] = covarianceMatrixLine.Pack(builder, _o.COVARIANCE_MATRIX_LINES[_j]); }
      _COVARIANCE_MATRIX_LINES = CreateCOVARIANCE_MATRIX_LINESVector(builder, __COVARIANCE_MATRIX_LINES);
    }
    return CreateephemerisDataBlock(
      builder,
      _COMMENT,
      _OBJECT,
      _CENTER_NAME,
      _REFERENCE_FRAME,
      _REFERENCE_FRAME_EPOCH,
      _COV_REFERENCE_FRAME,
      _o.TIME_SYSTEM,
      _START_TIME,
      _USEABLE_START_TIME,
      _USEABLE_STOP_TIME,
      _STOP_TIME,
      _o.STEP_SIZE,
      _INTERPOLATION,
      _o.INTERPOLATION_DEGREE,
      _EPHEMERIS_DATA_LINES,
      _COVARIANCE_MATRIX_LINES);
  }
}

public class ephemerisDataBlockT
{
  public string COMMENT { get; set; }
  public CATT OBJECT { get; set; }
  public string CENTER_NAME { get; set; }
  public RFMT REFERENCE_FRAME { get; set; }
  public string REFERENCE_FRAME_EPOCH { get; set; }
  public RFMT COV_REFERENCE_FRAME { get; set; }
  public timeSystem TIME_SYSTEM { get; set; }
  public string START_TIME { get; set; }
  public string USEABLE_START_TIME { get; set; }
  public string USEABLE_STOP_TIME { get; set; }
  public string STOP_TIME { get; set; }
  public double STEP_SIZE { get; set; }
  public string INTERPOLATION { get; set; }
  public uint INTERPOLATION_DEGREE { get; set; }
  public List<ephemerisDataLineT> EPHEMERIS_DATA_LINES { get; set; }
  public List<covarianceMatrixLineT> COVARIANCE_MATRIX_LINES { get; set; }

  public ephemerisDataBlockT() {
    this.COMMENT = null;
    this.OBJECT = null;
    this.CENTER_NAME = null;
    this.REFERENCE_FRAME = null;
    this.REFERENCE_FRAME_EPOCH = null;
    this.COV_REFERENCE_FRAME = null;
    this.TIME_SYSTEM = timeSystem.GMST;
    this.START_TIME = null;
    this.USEABLE_START_TIME = null;
    this.USEABLE_STOP_TIME = null;
    this.STOP_TIME = null;
    this.STEP_SIZE = 0.0;
    this.INTERPOLATION = null;
    this.INTERPOLATION_DEGREE = 0;
    this.EPHEMERIS_DATA_LINES = null;
    this.COVARIANCE_MATRIX_LINES = null;
  }
}


static public class ephemerisDataBlockVerify
{
  static public bool Verify(Google.FlatBuffers.Verifier verifier, uint tablePos)
  {
    return verifier.VerifyTableStart(tablePos)
      && verifier.VerifyString(tablePos, 4 /*COMMENT*/, false)
      && verifier.VerifyTable(tablePos, 6 /*OBJECT*/, CATVerify.Verify, false)
      && verifier.VerifyString(tablePos, 8 /*CENTER_NAME*/, false)
      && verifier.VerifyTable(tablePos, 10 /*REFERENCE_FRAME*/, RFMVerify.Verify, false)
      && verifier.VerifyString(tablePos, 12 /*REFERENCE_FRAME_EPOCH*/, false)
      && verifier.VerifyTable(tablePos, 14 /*COV_REFERENCE_FRAME*/, RFMVerify.Verify, false)
      && verifier.VerifyField(tablePos, 16 /*TIME_SYSTEM*/, 1 /*timeSystem*/, 1, false)
      && verifier.VerifyString(tablePos, 18 /*START_TIME*/, false)
      && verifier.VerifyString(tablePos, 20 /*USEABLE_START_TIME*/, false)
      && verifier.VerifyString(tablePos, 22 /*USEABLE_STOP_TIME*/, false)
      && verifier.VerifyString(tablePos, 24 /*STOP_TIME*/, false)
      && verifier.VerifyField(tablePos, 26 /*STEP_SIZE*/, 8 /*double*/, 8, false)
      && verifier.VerifyString(tablePos, 28 /*INTERPOLATION*/, false)
      && verifier.VerifyField(tablePos, 30 /*INTERPOLATION_DEGREE*/, 4 /*uint*/, 4, false)
      && verifier.VerifyVectorOfTables(tablePos, 32 /*EPHEMERIS_DATA_LINES*/, ephemerisDataLineVerify.Verify, false)
      && verifier.VerifyVectorOfTables(tablePos, 34 /*COVARIANCE_MATRIX_LINES*/, covarianceMatrixLineVerify.Verify, false)
      && verifier.VerifyTableEnd(tablePos);
  }
}
