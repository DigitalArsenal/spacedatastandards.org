// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

/// Legacy Country Code
public struct LCC : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_24_3_25(); }
  public static LCC GetRootAsLCC(ByteBuffer _bb) { return GetRootAsLCC(_bb, new LCC()); }
  public static LCC GetRootAsLCC(ByteBuffer _bb, LCC obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public static bool LCCBufferHasIdentifier(ByteBuffer _bb) { return Table.__has_identifier(_bb, "$LCC"); }
  public static bool VerifyLCC(ByteBuffer _bb) {Google.FlatBuffers.Verifier verifier = new Google.FlatBuffers.Verifier(_bb); return verifier.VerifyBuffer("$LCC", false, LCCVerify.Verify); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public LCC __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public legacyCountryCode OWNER { get { int o = __p.__offset(4); return o != 0 ? (legacyCountryCode)__p.bb.GetSbyte(o + __p.bb_pos) : legacyCountryCode.AB; } }

  public static Offset<LCC> CreateLCC(FlatBufferBuilder builder,
      legacyCountryCode OWNER = legacyCountryCode.AB) {
    builder.StartTable(1);
    LCC.AddOWNER(builder, OWNER);
    return LCC.EndLCC(builder);
  }

  public static void StartLCC(FlatBufferBuilder builder) { builder.StartTable(1); }
  public static void AddOWNER(FlatBufferBuilder builder, legacyCountryCode OWNER) { builder.AddSbyte(0, (sbyte)OWNER, 0); }
  public static Offset<LCC> EndLCC(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<LCC>(o);
  }
  public static void FinishLCCBuffer(FlatBufferBuilder builder, Offset<LCC> offset) { builder.Finish(offset.Value, "$LCC"); }
  public static void FinishSizePrefixedLCCBuffer(FlatBufferBuilder builder, Offset<LCC> offset) { builder.FinishSizePrefixed(offset.Value, "$LCC"); }
  public LCCT UnPack() {
    var _o = new LCCT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(LCCT _o) {
    _o.OWNER = this.OWNER;
  }
  public static Offset<LCC> Pack(FlatBufferBuilder builder, LCCT _o) {
    if (_o == null) return default(Offset<LCC>);
    return CreateLCC(
      builder,
      _o.OWNER);
  }
}

public class LCCT
{
  public legacyCountryCode OWNER { get; set; }

  public LCCT() {
    this.OWNER = legacyCountryCode.AB;
  }
  public static LCCT DeserializeFromBinary(byte[] fbBuffer) {
    return LCC.GetRootAsLCC(new ByteBuffer(fbBuffer)).UnPack();
  }
  public byte[] SerializeToBinary() {
    var fbb = new FlatBufferBuilder(0x10000);
    LCC.FinishLCCBuffer(fbb, LCC.Pack(fbb, this));
    return fbb.DataBuffer.ToSizedArray();
  }
}


static public class LCCVerify
{
  static public bool Verify(Google.FlatBuffers.Verifier verifier, uint tablePos)
  {
    return verifier.VerifyTableStart(tablePos)
      && verifier.VerifyField(tablePos, 4 /*OWNER*/, 1 /*legacyCountryCode*/, 1, false)
      && verifier.VerifyTableEnd(tablePos);
  }
}
