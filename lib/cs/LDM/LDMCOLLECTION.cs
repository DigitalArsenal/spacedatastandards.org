// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

public struct LDMCOLLECTION : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_23_3_3(); }
  public static LDMCOLLECTION GetRootAsLDMCOLLECTION(ByteBuffer _bb) { return GetRootAsLDMCOLLECTION(_bb, new LDMCOLLECTION()); }
  public static LDMCOLLECTION GetRootAsLDMCOLLECTION(ByteBuffer _bb, LDMCOLLECTION obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public LDMCOLLECTION __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /// Collection of LDM Records
  public LDM? RECORDS(int j) { int o = __p.__offset(4); return o != 0 ? (LDM?)(new LDM()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int RECORDSLength { get { int o = __p.__offset(4); return o != 0 ? __p.__vector_len(o) : 0; } }

  public static Offset<LDMCOLLECTION> CreateLDMCOLLECTION(FlatBufferBuilder builder,
      VectorOffset RECORDSOffset = default(VectorOffset)) {
    builder.StartTable(1);
    LDMCOLLECTION.AddRECORDS(builder, RECORDSOffset);
    return LDMCOLLECTION.EndLDMCOLLECTION(builder);
  }

  public static void StartLDMCOLLECTION(FlatBufferBuilder builder) { builder.StartTable(1); }
  public static void AddRECORDS(FlatBufferBuilder builder, VectorOffset RECORDSOffset) { builder.AddOffset(0, RECORDSOffset.Value, 0); }
  public static VectorOffset CreateRECORDSVector(FlatBufferBuilder builder, Offset<LDM>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, Offset<LDM>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<LDM>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<LDM>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartRECORDSVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static Offset<LDMCOLLECTION> EndLDMCOLLECTION(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<LDMCOLLECTION>(o);
  }
  public LDMCOLLECTIONT UnPack() {
    var _o = new LDMCOLLECTIONT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(LDMCOLLECTIONT _o) {
    _o.RECORDS = new List<LDMT>();
    for (var _j = 0; _j < this.RECORDSLength; ++_j) {_o.RECORDS.Add(this.RECORDS(_j).HasValue ? this.RECORDS(_j).Value.UnPack() : null);}
  }
  public static Offset<LDMCOLLECTION> Pack(FlatBufferBuilder builder, LDMCOLLECTIONT _o) {
    if (_o == null) return default(Offset<LDMCOLLECTION>);
    var _RECORDS = default(VectorOffset);
    if (_o.RECORDS != null) {
      var __RECORDS = new Offset<LDM>[_o.RECORDS.Count];
      for (var _j = 0; _j < __RECORDS.Length; ++_j) { __RECORDS[_j] = LDM.Pack(builder, _o.RECORDS[_j]); }
      _RECORDS = CreateRECORDSVector(builder, __RECORDS);
    }
    return CreateLDMCOLLECTION(
      builder,
      _RECORDS);
  }
}

public class LDMCOLLECTIONT
{
  public List<LDMT> RECORDS { get; set; }

  public LDMCOLLECTIONT() {
    this.RECORDS = null;
  }
}
