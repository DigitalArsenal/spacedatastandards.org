// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

public struct RFMCOLLECTION : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_23_3_3(); }
  public static RFMCOLLECTION GetRootAsRFMCOLLECTION(ByteBuffer _bb) { return GetRootAsRFMCOLLECTION(_bb, new RFMCOLLECTION()); }
  public static RFMCOLLECTION GetRootAsRFMCOLLECTION(ByteBuffer _bb, RFMCOLLECTION obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public RFMCOLLECTION __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public RFM? RECORDS(int j) { int o = __p.__offset(4); return o != 0 ? (RFM?)(new RFM()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int RECORDSLength { get { int o = __p.__offset(4); return o != 0 ? __p.__vector_len(o) : 0; } }

  public static Offset<RFMCOLLECTION> CreateRFMCOLLECTION(FlatBufferBuilder builder,
      VectorOffset RECORDSOffset = default(VectorOffset)) {
    builder.StartTable(1);
    RFMCOLLECTION.AddRECORDS(builder, RECORDSOffset);
    return RFMCOLLECTION.EndRFMCOLLECTION(builder);
  }

  public static void StartRFMCOLLECTION(FlatBufferBuilder builder) { builder.StartTable(1); }
  public static void AddRECORDS(FlatBufferBuilder builder, VectorOffset RECORDSOffset) { builder.AddOffset(0, RECORDSOffset.Value, 0); }
  public static VectorOffset CreateRECORDSVector(FlatBufferBuilder builder, Offset<RFM>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, Offset<RFM>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<RFM>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateRECORDSVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<RFM>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartRECORDSVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static Offset<RFMCOLLECTION> EndRFMCOLLECTION(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<RFMCOLLECTION>(o);
  }
  public RFMCOLLECTIONT UnPack() {
    var _o = new RFMCOLLECTIONT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(RFMCOLLECTIONT _o) {
    _o.RECORDS = new List<RFMT>();
    for (var _j = 0; _j < this.RECORDSLength; ++_j) {_o.RECORDS.Add(this.RECORDS(_j).HasValue ? this.RECORDS(_j).Value.UnPack() : null);}
  }
  public static Offset<RFMCOLLECTION> Pack(FlatBufferBuilder builder, RFMCOLLECTIONT _o) {
    if (_o == null) return default(Offset<RFMCOLLECTION>);
    var _RECORDS = default(VectorOffset);
    if (_o.RECORDS != null) {
      var __RECORDS = new Offset<RFM>[_o.RECORDS.Count];
      for (var _j = 0; _j < __RECORDS.Length; ++_j) { __RECORDS[_j] = RFM.Pack(builder, _o.RECORDS[_j]); }
      _RECORDS = CreateRECORDSVector(builder, __RECORDS);
    }
    return CreateRFMCOLLECTION(
      builder,
      _RECORDS);
  }
}

public class RFMCOLLECTIONT
{
  public List<RFMT> RECORDS { get; set; }

  public RFMCOLLECTIONT() {
    this.RECORDS = null;
  }
}
