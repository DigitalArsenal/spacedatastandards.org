// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

/// Frequency range with lower and upper limits
public struct FrequencyRange : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_24_3_25(); }
  public static FrequencyRange GetRootAsFrequencyRange(ByteBuffer _bb) { return GetRootAsFrequencyRange(_bb, new FrequencyRange()); }
  public static FrequencyRange GetRootAsFrequencyRange(ByteBuffer _bb, FrequencyRange obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public FrequencyRange __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /// Lower frequency in MHz
  public double LOWER { get { int o = __p.__offset(4); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  /// Upper frequency in MHz
  public double UPPER { get { int o = __p.__offset(6); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }

  public static Offset<FrequencyRange> CreateFrequencyRange(FlatBufferBuilder builder,
      double LOWER = 0.0,
      double UPPER = 0.0) {
    builder.StartTable(2);
    FrequencyRange.AddUPPER(builder, UPPER);
    FrequencyRange.AddLOWER(builder, LOWER);
    return FrequencyRange.EndFrequencyRange(builder);
  }

  public static void StartFrequencyRange(FlatBufferBuilder builder) { builder.StartTable(2); }
  public static void AddLOWER(FlatBufferBuilder builder, double LOWER) { builder.AddDouble(0, LOWER, 0.0); }
  public static void AddUPPER(FlatBufferBuilder builder, double UPPER) { builder.AddDouble(1, UPPER, 0.0); }
  public static Offset<FrequencyRange> EndFrequencyRange(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<FrequencyRange>(o);
  }
  public FrequencyRangeT UnPack() {
    var _o = new FrequencyRangeT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(FrequencyRangeT _o) {
    _o.LOWER = this.LOWER;
    _o.UPPER = this.UPPER;
  }
  public static Offset<FrequencyRange> Pack(FlatBufferBuilder builder, FrequencyRangeT _o) {
    if (_o == null) return default(Offset<FrequencyRange>);
    return CreateFrequencyRange(
      builder,
      _o.LOWER,
      _o.UPPER);
  }
}

public class FrequencyRangeT
{
  public double LOWER { get; set; }
  public double UPPER { get; set; }

  public FrequencyRangeT() {
    this.LOWER = 0.0;
    this.UPPER = 0.0;
  }
}


static public class FrequencyRangeVerify
{
  static public bool Verify(Google.FlatBuffers.Verifier verifier, uint tablePos)
  {
    return verifier.VerifyTableStart(tablePos)
      && verifier.VerifyField(tablePos, 4 /*LOWER*/, 8 /*double*/, 8, false)
      && verifier.VerifyField(tablePos, 6 /*UPPER*/, 8 /*double*/, 8, false)
      && verifier.VerifyTableEnd(tablePos);
  }
}
