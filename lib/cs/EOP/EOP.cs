// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

/// Earth Orientation Parameters
public struct EOP : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_23_3_3(); }
  public static EOP GetRootAsEOP(ByteBuffer _bb) { return GetRootAsEOP(_bb, new EOP()); }
  public static EOP GetRootAsEOP(ByteBuffer _bb, EOP obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public static bool EOPBufferHasIdentifier(ByteBuffer _bb) { return Table.__has_identifier(_bb, "$EOP"); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public EOP __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  ///  Date in ISO 8601 format, e.g., "2018-01-01T00:00:00Z"
  public string DATE { get { int o = __p.__offset(4); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetDATEBytes() { return __p.__vector_as_span<byte>(4, 1); }
#else
  public ArraySegment<byte>? GetDATEBytes() { return __p.__vector_as_arraysegment(4); }
#endif
  public byte[] GetDATEArray() { return __p.__vector_as_array<byte>(4); }
  ///  Modified Julian Date in UTC, e.g., 58119
  public uint MJD { get { int o = __p.__offset(6); return o != 0 ? __p.bb.GetUint(o + __p.bb_pos) : (uint)0; } }
  ///  x component of Pole Wander in radians, e.g., 2.872908911518888E-7
  public float X_POLE_WANDER_RADIANS { get { int o = __p.__offset(8); return o != 0 ? __p.bb.GetFloat(o + __p.bb_pos) : (float)0.0f; } }
  ///  y component of Pole Wander in radians, e.g., 1.2003259523750447E-6
  public float Y_POLE_WANDER_RADIANS { get { int o = __p.__offset(10); return o != 0 ? __p.bb.GetFloat(o + __p.bb_pos) : (float)0.0f; } }
  ///  x component of Celestial Pole Offset in radians, e.g., 5.720801437092525E-10
  public float X_CELESTIAL_POLE_OFFSET_RADIANS { get { int o = __p.__offset(12); return o != 0 ? __p.bb.GetFloat(o + __p.bb_pos) : (float)0.0f; } }
  ///  y component of Celestial Pole Offset in radians, e.g., -8.484239419416879E-10
  public float Y_CELESTIAL_POLE_OFFSET_RADIANS { get { int o = __p.__offset(14); return o != 0 ? __p.bb.GetFloat(o + __p.bb_pos) : (float)0.0f; } }
  ///  UT1 minus UTC in seconds, e.g., 0.2163567
  public float UT1_MINUS_UTC_SECONDS { get { int o = __p.__offset(16); return o != 0 ? __p.bb.GetFloat(o + __p.bb_pos) : (float)0.0f; } }
  ///  TAI minus UTC in seconds, e.g., 37
  public ushort TAI_MINUS_UTC_SECONDS { get { int o = __p.__offset(18); return o != 0 ? __p.bb.GetUshort(o + __p.bb_pos) : (ushort)0; } }
  ///  Correction to Length of Day in seconds, e.g., 8.094E-4
  public float LENGTH_OF_DAY_CORRECTION_SECONDS { get { int o = __p.__offset(20); return o != 0 ? __p.bb.GetFloat(o + __p.bb_pos) : (float)0.0f; } }
  ///  Data type (O = Observed, P = Predicted)
  public DataType DATA_TYPE { get { int o = __p.__offset(22); return o != 0 ? (DataType)__p.bb.GetSbyte(o + __p.bb_pos) : DataType.OBSERVED; } }

  public static Offset<EOP> CreateEOP(FlatBufferBuilder builder,
      StringOffset DATEOffset = default(StringOffset),
      uint MJD = 0,
      float X_POLE_WANDER_RADIANS = 0.0f,
      float Y_POLE_WANDER_RADIANS = 0.0f,
      float X_CELESTIAL_POLE_OFFSET_RADIANS = 0.0f,
      float Y_CELESTIAL_POLE_OFFSET_RADIANS = 0.0f,
      float UT1_MINUS_UTC_SECONDS = 0.0f,
      ushort TAI_MINUS_UTC_SECONDS = 0,
      float LENGTH_OF_DAY_CORRECTION_SECONDS = 0.0f,
      DataType DATA_TYPE = DataType.OBSERVED) {
    builder.StartTable(10);
    EOP.AddLENGTH_OF_DAY_CORRECTION_SECONDS(builder, LENGTH_OF_DAY_CORRECTION_SECONDS);
    EOP.AddUT1_MINUS_UTC_SECONDS(builder, UT1_MINUS_UTC_SECONDS);
    EOP.AddY_CELESTIAL_POLE_OFFSET_RADIANS(builder, Y_CELESTIAL_POLE_OFFSET_RADIANS);
    EOP.AddX_CELESTIAL_POLE_OFFSET_RADIANS(builder, X_CELESTIAL_POLE_OFFSET_RADIANS);
    EOP.AddY_POLE_WANDER_RADIANS(builder, Y_POLE_WANDER_RADIANS);
    EOP.AddX_POLE_WANDER_RADIANS(builder, X_POLE_WANDER_RADIANS);
    EOP.AddMJD(builder, MJD);
    EOP.AddDATE(builder, DATEOffset);
    EOP.AddTAI_MINUS_UTC_SECONDS(builder, TAI_MINUS_UTC_SECONDS);
    EOP.AddDATA_TYPE(builder, DATA_TYPE);
    return EOP.EndEOP(builder);
  }

  public static void StartEOP(FlatBufferBuilder builder) { builder.StartTable(10); }
  public static void AddDATE(FlatBufferBuilder builder, StringOffset DATEOffset) { builder.AddOffset(0, DATEOffset.Value, 0); }
  public static void AddMJD(FlatBufferBuilder builder, uint MJD) { builder.AddUint(1, MJD, 0); }
  public static void AddX_POLE_WANDER_RADIANS(FlatBufferBuilder builder, float X_POLE_WANDER_RADIANS) { builder.AddFloat(2, X_POLE_WANDER_RADIANS, 0.0f); }
  public static void AddY_POLE_WANDER_RADIANS(FlatBufferBuilder builder, float Y_POLE_WANDER_RADIANS) { builder.AddFloat(3, Y_POLE_WANDER_RADIANS, 0.0f); }
  public static void AddX_CELESTIAL_POLE_OFFSET_RADIANS(FlatBufferBuilder builder, float X_CELESTIAL_POLE_OFFSET_RADIANS) { builder.AddFloat(4, X_CELESTIAL_POLE_OFFSET_RADIANS, 0.0f); }
  public static void AddY_CELESTIAL_POLE_OFFSET_RADIANS(FlatBufferBuilder builder, float Y_CELESTIAL_POLE_OFFSET_RADIANS) { builder.AddFloat(5, Y_CELESTIAL_POLE_OFFSET_RADIANS, 0.0f); }
  public static void AddUT1_MINUS_UTC_SECONDS(FlatBufferBuilder builder, float UT1_MINUS_UTC_SECONDS) { builder.AddFloat(6, UT1_MINUS_UTC_SECONDS, 0.0f); }
  public static void AddTAI_MINUS_UTC_SECONDS(FlatBufferBuilder builder, ushort TAI_MINUS_UTC_SECONDS) { builder.AddUshort(7, TAI_MINUS_UTC_SECONDS, 0); }
  public static void AddLENGTH_OF_DAY_CORRECTION_SECONDS(FlatBufferBuilder builder, float LENGTH_OF_DAY_CORRECTION_SECONDS) { builder.AddFloat(8, LENGTH_OF_DAY_CORRECTION_SECONDS, 0.0f); }
  public static void AddDATA_TYPE(FlatBufferBuilder builder, DataType DATA_TYPE) { builder.AddSbyte(9, (sbyte)DATA_TYPE, 0); }
  public static Offset<EOP> EndEOP(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<EOP>(o);
  }
  public static void FinishEOPBuffer(FlatBufferBuilder builder, Offset<EOP> offset) { builder.Finish(offset.Value, "$EOP"); }
  public static void FinishSizePrefixedEOPBuffer(FlatBufferBuilder builder, Offset<EOP> offset) { builder.FinishSizePrefixed(offset.Value, "$EOP"); }
  public EOPT UnPack() {
    var _o = new EOPT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(EOPT _o) {
    _o.DATE = this.DATE;
    _o.MJD = this.MJD;
    _o.X_POLE_WANDER_RADIANS = this.X_POLE_WANDER_RADIANS;
    _o.Y_POLE_WANDER_RADIANS = this.Y_POLE_WANDER_RADIANS;
    _o.X_CELESTIAL_POLE_OFFSET_RADIANS = this.X_CELESTIAL_POLE_OFFSET_RADIANS;
    _o.Y_CELESTIAL_POLE_OFFSET_RADIANS = this.Y_CELESTIAL_POLE_OFFSET_RADIANS;
    _o.UT1_MINUS_UTC_SECONDS = this.UT1_MINUS_UTC_SECONDS;
    _o.TAI_MINUS_UTC_SECONDS = this.TAI_MINUS_UTC_SECONDS;
    _o.LENGTH_OF_DAY_CORRECTION_SECONDS = this.LENGTH_OF_DAY_CORRECTION_SECONDS;
    _o.DATA_TYPE = this.DATA_TYPE;
  }
  public static Offset<EOP> Pack(FlatBufferBuilder builder, EOPT _o) {
    if (_o == null) return default(Offset<EOP>);
    var _DATE = _o.DATE == null ? default(StringOffset) : builder.CreateString(_o.DATE);
    return CreateEOP(
      builder,
      _DATE,
      _o.MJD,
      _o.X_POLE_WANDER_RADIANS,
      _o.Y_POLE_WANDER_RADIANS,
      _o.X_CELESTIAL_POLE_OFFSET_RADIANS,
      _o.Y_CELESTIAL_POLE_OFFSET_RADIANS,
      _o.UT1_MINUS_UTC_SECONDS,
      _o.TAI_MINUS_UTC_SECONDS,
      _o.LENGTH_OF_DAY_CORRECTION_SECONDS,
      _o.DATA_TYPE);
  }
}

public class EOPT
{
  public string DATE { get; set; }
  public uint MJD { get; set; }
  public float X_POLE_WANDER_RADIANS { get; set; }
  public float Y_POLE_WANDER_RADIANS { get; set; }
  public float X_CELESTIAL_POLE_OFFSET_RADIANS { get; set; }
  public float Y_CELESTIAL_POLE_OFFSET_RADIANS { get; set; }
  public float UT1_MINUS_UTC_SECONDS { get; set; }
  public ushort TAI_MINUS_UTC_SECONDS { get; set; }
  public float LENGTH_OF_DAY_CORRECTION_SECONDS { get; set; }
  public DataType DATA_TYPE { get; set; }

  public EOPT() {
    this.DATE = null;
    this.MJD = 0;
    this.X_POLE_WANDER_RADIANS = 0.0f;
    this.Y_POLE_WANDER_RADIANS = 0.0f;
    this.X_CELESTIAL_POLE_OFFSET_RADIANS = 0.0f;
    this.Y_CELESTIAL_POLE_OFFSET_RADIANS = 0.0f;
    this.UT1_MINUS_UTC_SECONDS = 0.0f;
    this.TAI_MINUS_UTC_SECONDS = 0;
    this.LENGTH_OF_DAY_CORRECTION_SECONDS = 0.0f;
    this.DATA_TYPE = DataType.OBSERVED;
  }
  public static EOPT DeserializeFromBinary(byte[] fbBuffer) {
    return EOP.GetRootAsEOP(new ByteBuffer(fbBuffer)).UnPack();
  }
  public byte[] SerializeToBinary() {
    var fbb = new FlatBufferBuilder(0x10000);
    EOP.FinishEOPBuffer(fbb, EOP.Pack(fbb, this));
    return fbb.DataBuffer.ToSizedArray();
  }
}
