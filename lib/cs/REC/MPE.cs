// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

/// Minimum Propagatable Element Set
public struct MPE : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_23_3_3(); }
  public static MPE GetRootAsMPE(ByteBuffer _bb) { return GetRootAsMPE(_bb, new MPE()); }
  public static MPE GetRootAsMPE(ByteBuffer _bb, MPE obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public static bool MPEBufferHasIdentifier(ByteBuffer _bb) { return Table.__has_identifier(_bb, "$MPE"); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public MPE __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /// Unique ID as a String
  public string ENTITY_ID { get { int o = __p.__offset(4); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetENTITY_IDBytes() { return __p.__vector_as_span<byte>(4, 1); }
#else
  public ArraySegment<byte>? GetENTITY_IDBytes() { return __p.__vector_as_arraysegment(4); }
#endif
  public byte[] GetENTITY_IDArray() { return __p.__vector_as_array<byte>(4); }
  /// Epoch of Mean Keplerian elements. (UNIX TimeStamp)
  public double EPOCH { get { int o = __p.__offset(6); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Semi-major axis in km or mean motion in rev/day
  public double MEAN_MOTION { get { int o = __p.__offset(8); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Eccentricity
  public double ECCENTRICITY { get { int o = __p.__offset(10); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Inclination
  public double INCLINATION { get { int o = __p.__offset(12); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Right ascension of ascending node
  public double RA_OF_ASC_NODE { get { int o = __p.__offset(14); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Argument of pericenter
  public double ARG_OF_PERICENTER { get { int o = __p.__offset(16); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Mean anomaly
  public double MEAN_ANOMALY { get { int o = __p.__offset(18); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// SGP/SGP4 drag-like coefficient (in units 1/[Earth radii])
  public double BSTAR { get { int o = __p.__offset(20); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Description of the Mean Element Theory. (SGP4,DSST,USM)
  public meanElementTheory MEAN_ELEMENT_THEORY { get { int o = __p.__offset(22); return o != 0 ? (meanElementTheory)__p.bb.GetSbyte(o + __p.bb_pos) : meanElementTheory.SGP4; } }

  public static Offset<MPE> CreateMPE(FlatBufferBuilder builder,
      StringOffset ENTITY_IDOffset = default(StringOffset),
      double EPOCH = 0.0,
      double MEAN_MOTION = 0.0,
      double ECCENTRICITY = 0.0,
      double INCLINATION = 0.0,
      double RA_OF_ASC_NODE = 0.0,
      double ARG_OF_PERICENTER = 0.0,
      double MEAN_ANOMALY = 0.0,
      double BSTAR = 0.0,
      meanElementTheory MEAN_ELEMENT_THEORY = meanElementTheory.SGP4) {
    builder.StartTable(10);
    MPE.AddBSTAR(builder, BSTAR);
    MPE.AddMEAN_ANOMALY(builder, MEAN_ANOMALY);
    MPE.AddARG_OF_PERICENTER(builder, ARG_OF_PERICENTER);
    MPE.AddRA_OF_ASC_NODE(builder, RA_OF_ASC_NODE);
    MPE.AddINCLINATION(builder, INCLINATION);
    MPE.AddECCENTRICITY(builder, ECCENTRICITY);
    MPE.AddMEAN_MOTION(builder, MEAN_MOTION);
    MPE.AddEPOCH(builder, EPOCH);
    MPE.AddENTITY_ID(builder, ENTITY_IDOffset);
    MPE.AddMEAN_ELEMENT_THEORY(builder, MEAN_ELEMENT_THEORY);
    return MPE.EndMPE(builder);
  }

  public static void StartMPE(FlatBufferBuilder builder) { builder.StartTable(10); }
  public static void AddENTITY_ID(FlatBufferBuilder builder, StringOffset ENTITY_IDOffset) { builder.AddOffset(0, ENTITY_IDOffset.Value, 0); }
  public static void AddEPOCH(FlatBufferBuilder builder, double EPOCH) { builder.AddDouble(1, EPOCH, 0.0); }
  public static void AddMEAN_MOTION(FlatBufferBuilder builder, double MEAN_MOTION) { builder.AddDouble(2, MEAN_MOTION, 0.0); }
  public static void AddECCENTRICITY(FlatBufferBuilder builder, double ECCENTRICITY) { builder.AddDouble(3, ECCENTRICITY, 0.0); }
  public static void AddINCLINATION(FlatBufferBuilder builder, double INCLINATION) { builder.AddDouble(4, INCLINATION, 0.0); }
  public static void AddRA_OF_ASC_NODE(FlatBufferBuilder builder, double RA_OF_ASC_NODE) { builder.AddDouble(5, RA_OF_ASC_NODE, 0.0); }
  public static void AddARG_OF_PERICENTER(FlatBufferBuilder builder, double ARG_OF_PERICENTER) { builder.AddDouble(6, ARG_OF_PERICENTER, 0.0); }
  public static void AddMEAN_ANOMALY(FlatBufferBuilder builder, double MEAN_ANOMALY) { builder.AddDouble(7, MEAN_ANOMALY, 0.0); }
  public static void AddBSTAR(FlatBufferBuilder builder, double BSTAR) { builder.AddDouble(8, BSTAR, 0.0); }
  public static void AddMEAN_ELEMENT_THEORY(FlatBufferBuilder builder, meanElementTheory MEAN_ELEMENT_THEORY) { builder.AddSbyte(9, (sbyte)MEAN_ELEMENT_THEORY, 0); }
  public static Offset<MPE> EndMPE(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<MPE>(o);
  }
  public static void FinishMPEBuffer(FlatBufferBuilder builder, Offset<MPE> offset) { builder.Finish(offset.Value, "$MPE"); }
  public static void FinishSizePrefixedMPEBuffer(FlatBufferBuilder builder, Offset<MPE> offset) { builder.FinishSizePrefixed(offset.Value, "$MPE"); }
  public MPET UnPack() {
    var _o = new MPET();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(MPET _o) {
    _o.ENTITY_ID = this.ENTITY_ID;
    _o.EPOCH = this.EPOCH;
    _o.MEAN_MOTION = this.MEAN_MOTION;
    _o.ECCENTRICITY = this.ECCENTRICITY;
    _o.INCLINATION = this.INCLINATION;
    _o.RA_OF_ASC_NODE = this.RA_OF_ASC_NODE;
    _o.ARG_OF_PERICENTER = this.ARG_OF_PERICENTER;
    _o.MEAN_ANOMALY = this.MEAN_ANOMALY;
    _o.BSTAR = this.BSTAR;
    _o.MEAN_ELEMENT_THEORY = this.MEAN_ELEMENT_THEORY;
  }
  public static Offset<MPE> Pack(FlatBufferBuilder builder, MPET _o) {
    if (_o == null) return default(Offset<MPE>);
    var _ENTITY_ID = _o.ENTITY_ID == null ? default(StringOffset) : builder.CreateString(_o.ENTITY_ID);
    return CreateMPE(
      builder,
      _ENTITY_ID,
      _o.EPOCH,
      _o.MEAN_MOTION,
      _o.ECCENTRICITY,
      _o.INCLINATION,
      _o.RA_OF_ASC_NODE,
      _o.ARG_OF_PERICENTER,
      _o.MEAN_ANOMALY,
      _o.BSTAR,
      _o.MEAN_ELEMENT_THEORY);
  }
}

public class MPET
{
  public string ENTITY_ID { get; set; }
  public double EPOCH { get; set; }
  public double MEAN_MOTION { get; set; }
  public double ECCENTRICITY { get; set; }
  public double INCLINATION { get; set; }
  public double RA_OF_ASC_NODE { get; set; }
  public double ARG_OF_PERICENTER { get; set; }
  public double MEAN_ANOMALY { get; set; }
  public double BSTAR { get; set; }
  public meanElementTheory MEAN_ELEMENT_THEORY { get; set; }

  public MPET() {
    this.ENTITY_ID = null;
    this.EPOCH = 0.0;
    this.MEAN_MOTION = 0.0;
    this.ECCENTRICITY = 0.0;
    this.INCLINATION = 0.0;
    this.RA_OF_ASC_NODE = 0.0;
    this.ARG_OF_PERICENTER = 0.0;
    this.MEAN_ANOMALY = 0.0;
    this.BSTAR = 0.0;
    this.MEAN_ELEMENT_THEORY = meanElementTheory.SGP4;
  }
  public static MPET DeserializeFromBinary(byte[] fbBuffer) {
    return MPE.GetRootAsMPE(new ByteBuffer(fbBuffer)).UnPack();
  }
  public byte[] SerializeToBinary() {
    var fbb = new FlatBufferBuilder(0x10000);
    MPE.FinishMPEBuffer(fbb, MPE.Pack(fbb, this));
    return fbb.DataBuffer.ToSizedArray();
  }
}
