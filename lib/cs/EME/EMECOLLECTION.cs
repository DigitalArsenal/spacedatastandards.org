// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

public struct EMECOLLECTION : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_24_3_25(); }
  public static EMECOLLECTION GetRootAsEMECOLLECTION(ByteBuffer _bb) { return GetRootAsEMECOLLECTION(_bb, new EMECOLLECTION()); }
  public static EMECOLLECTION GetRootAsEMECOLLECTION(ByteBuffer _bb, EMECOLLECTION obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public EMECOLLECTION __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public EME? RECORDS(int j) { int o = __p.__offset(4); return o != 0 ? (EME?)(new EME()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int RECORDSLength { get { int o = __p.__offset(4); return o != 0 ? __p.__vector_len(o) : 0; } }

  public static Offset<EMECOLLECTION> CreateEMECOLLECTION(FlatBufferBuilder builder,
      VectorOffset RECORDSOffset = default(VectorOffset)) {
    builder.StartTable(1);
    EMECOLLECTION.AddRECORDS(builder, RECORDSOffset);
    return EMECOLLECTION.EndEMECOLLECTION(builder);
  }

  public static void StartEMECOLLECTION(FlatBufferBuilder builder) { builder.StartTable(1); }
  public static void AddRECORDS(FlatBufferBuilder builder, VectorOffset RECORDSOffset) { builder.AddOffset(0, RECORDSOffset.Value, 0); }
  public static VectorOffset CreateRECORDSVector(FlatBufferBuilder builder, Offset<EME>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, Offset<EME>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<EME>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<EME>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartRECORDSVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static Offset<EMECOLLECTION> EndEMECOLLECTION(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<EMECOLLECTION>(o);
  }
  public EMECOLLECTIONT UnPack() {
    var _o = new EMECOLLECTIONT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(EMECOLLECTIONT _o) {
    _o.RECORDS = new List<EMET>();
    for (var _j = 0; _j < this.RECORDSLength; ++_j) {_o.RECORDS.Add(this.RECORDS(_j).HasValue ? this.RECORDS(_j).Value.UnPack() : null);}
  }
  public static Offset<EMECOLLECTION> Pack(FlatBufferBuilder builder, EMECOLLECTIONT _o) {
    if (_o == null) return default(Offset<EMECOLLECTION>);
    var _RECORDS = default(VectorOffset);
    if (_o.RECORDS != null) {
      var __RECORDS = new Offset<EME>[_o.RECORDS.Count];
      for (var _j = 0; _j < __RECORDS.Length; ++_j) { __RECORDS[_j] = EME.Pack(builder, _o.RECORDS[_j]); }
      _RECORDS = CreateRECORDSVector(builder, __RECORDS);
    }
    return CreateEMECOLLECTION(
      builder,
      _RECORDS);
  }
}

public class EMECOLLECTIONT
{
  public List<EMET> RECORDS { get; set; }

  public EMECOLLECTIONT() {
    this.RECORDS = null;
  }
}


static public class EMECOLLECTIONVerify
{
  static public bool Verify(Google.FlatBuffers.Verifier verifier, uint tablePos)
  {
    return verifier.VerifyTableStart(tablePos)
      && verifier.VerifyVectorOfTables(tablePos, 4 /*RECORDS*/, EMEVerify.Verify, false)
      && verifier.VerifyTableEnd(tablePos);
  }
}
