// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

public struct UPMCOLLECTION : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_23_3_3(); }
  public static UPMCOLLECTION GetRootAsUPMCOLLECTION(ByteBuffer _bb) { return GetRootAsUPMCOLLECTION(_bb, new UPMCOLLECTION()); }
  public static UPMCOLLECTION GetRootAsUPMCOLLECTION(ByteBuffer _bb, UPMCOLLECTION obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public UPMCOLLECTION __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public UPM? RECORDS(int j) { int o = __p.__offset(4); return o != 0 ? (UPM?)(new UPM()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int RECORDSLength { get { int o = __p.__offset(4); return o != 0 ? __p.__vector_len(o) : 0; } }

  public static Offset<UPMCOLLECTION> CreateUPMCOLLECTION(FlatBufferBuilder builder,
      VectorOffset RECORDSOffset = default(VectorOffset)) {
    builder.StartTable(1);
    UPMCOLLECTION.AddRECORDS(builder, RECORDSOffset);
    return UPMCOLLECTION.EndUPMCOLLECTION(builder);
  }

  public static void StartUPMCOLLECTION(FlatBufferBuilder builder) { builder.StartTable(1); }
  public static void AddRECORDS(FlatBufferBuilder builder, VectorOffset RECORDSOffset) { builder.AddOffset(0, RECORDSOffset.Value, 0); }
  public static VectorOffset CreateRECORDSVector(FlatBufferBuilder builder, Offset<UPM>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, Offset<UPM>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<UPM>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<UPM>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartRECORDSVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static Offset<UPMCOLLECTION> EndUPMCOLLECTION(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<UPMCOLLECTION>(o);
  }
  public UPMCOLLECTIONT UnPack() {
    var _o = new UPMCOLLECTIONT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(UPMCOLLECTIONT _o) {
    _o.RECORDS = new List<UPMT>();
    for (var _j = 0; _j < this.RECORDSLength; ++_j) {_o.RECORDS.Add(this.RECORDS(_j).HasValue ? this.RECORDS(_j).Value.UnPack() : null);}
  }
  public static Offset<UPMCOLLECTION> Pack(FlatBufferBuilder builder, UPMCOLLECTIONT _o) {
    if (_o == null) return default(Offset<UPMCOLLECTION>);
    var _RECORDS = default(VectorOffset);
    if (_o.RECORDS != null) {
      var __RECORDS = new Offset<UPM>[_o.RECORDS.Count];
      for (var _j = 0; _j < __RECORDS.Length; ++_j) { __RECORDS[_j] = UPM.Pack(builder, _o.RECORDS[_j]); }
      _RECORDS = CreateRECORDSVector(builder, __RECORDS);
    }
    return CreateUPMCOLLECTION(
      builder,
      _RECORDS);
  }
}

public class UPMCOLLECTIONT
{
  public List<UPMT> RECORDS { get; set; }

  public UPMCOLLECTIONT() {
    this.RECORDS = null;
  }
}
