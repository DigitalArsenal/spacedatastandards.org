// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

/// Entity Profile Message
public struct EPM : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_24_3_25(); }
  public static EPM GetRootAsEPM(ByteBuffer _bb) { return GetRootAsEPM(_bb, new EPM()); }
  public static EPM GetRootAsEPM(ByteBuffer _bb, EPM obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public static bool EPMBufferHasIdentifier(ByteBuffer _bb) { return Table.__has_identifier(_bb, "$EPM"); }
  public static bool VerifyEPM(ByteBuffer _bb) {Google.FlatBuffers.Verifier verifier = new Google.FlatBuffers.Verifier(_bb); return verifier.VerifyBuffer("$EPM", false, EPMVerify.Verify); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public EPM __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /// Distinguished Name of the entity
  public string DN { get { int o = __p.__offset(4); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetDNBytes() { return __p.__vector_as_span<byte>(4, 1); }
#else
  public ArraySegment<byte>? GetDNBytes() { return __p.__vector_as_arraysegment(4); }
#endif
  public byte[] GetDNArray() { return __p.__vector_as_array<byte>(4); }
  /// Common name of the entity (person or organization)
  public string LEGAL_NAME { get { int o = __p.__offset(6); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetLEGAL_NAMEBytes() { return __p.__vector_as_span<byte>(6, 1); }
#else
  public ArraySegment<byte>? GetLEGAL_NAMEBytes() { return __p.__vector_as_arraysegment(6); }
#endif
  public byte[] GetLEGAL_NAMEArray() { return __p.__vector_as_array<byte>(6); }
  /// Family name or surname of the person
  public string FAMILY_NAME { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetFAMILY_NAMEBytes() { return __p.__vector_as_span<byte>(8, 1); }
#else
  public ArraySegment<byte>? GetFAMILY_NAMEBytes() { return __p.__vector_as_arraysegment(8); }
#endif
  public byte[] GetFAMILY_NAMEArray() { return __p.__vector_as_array<byte>(8); }
  /// Given name or first name of the person
  public string GIVEN_NAME { get { int o = __p.__offset(10); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetGIVEN_NAMEBytes() { return __p.__vector_as_span<byte>(10, 1); }
#else
  public ArraySegment<byte>? GetGIVEN_NAMEBytes() { return __p.__vector_as_arraysegment(10); }
#endif
  public byte[] GetGIVEN_NAMEArray() { return __p.__vector_as_array<byte>(10); }
  /// Additional name or middle name of the person
  public string ADDITIONAL_NAME { get { int o = __p.__offset(12); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetADDITIONAL_NAMEBytes() { return __p.__vector_as_span<byte>(12, 1); }
#else
  public ArraySegment<byte>? GetADDITIONAL_NAMEBytes() { return __p.__vector_as_arraysegment(12); }
#endif
  public byte[] GetADDITIONAL_NAMEArray() { return __p.__vector_as_array<byte>(12); }
  /// Honorific prefix preceding the person's name (e.g., Mr., Dr.)
  public string HONORIFIC_PREFIX { get { int o = __p.__offset(14); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetHONORIFIC_PREFIXBytes() { return __p.__vector_as_span<byte>(14, 1); }
#else
  public ArraySegment<byte>? GetHONORIFIC_PREFIXBytes() { return __p.__vector_as_arraysegment(14); }
#endif
  public byte[] GetHONORIFIC_PREFIXArray() { return __p.__vector_as_array<byte>(14); }
  /// Honorific suffix following the person's name (e.g., Jr., Sr.)
  public string HONORIFIC_SUFFIX { get { int o = __p.__offset(16); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetHONORIFIC_SUFFIXBytes() { return __p.__vector_as_span<byte>(16, 1); }
#else
  public ArraySegment<byte>? GetHONORIFIC_SUFFIXBytes() { return __p.__vector_as_arraysegment(16); }
#endif
  public byte[] GetHONORIFIC_SUFFIXArray() { return __p.__vector_as_array<byte>(16); }
  /// Job title of the person
  public string JOB_TITLE { get { int o = __p.__offset(18); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetJOB_TITLEBytes() { return __p.__vector_as_span<byte>(18, 1); }
#else
  public ArraySegment<byte>? GetJOB_TITLEBytes() { return __p.__vector_as_arraysegment(18); }
#endif
  public byte[] GetJOB_TITLEArray() { return __p.__vector_as_array<byte>(18); }
  /// Occupation of the person
  public string OCCUPATION { get { int o = __p.__offset(20); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetOCCUPATIONBytes() { return __p.__vector_as_span<byte>(20, 1); }
#else
  public ArraySegment<byte>? GetOCCUPATIONBytes() { return __p.__vector_as_arraysegment(20); }
#endif
  public byte[] GetOCCUPATIONArray() { return __p.__vector_as_array<byte>(20); }
  /// Physical Address
  public Address? ADDRESS { get { int o = __p.__offset(22); return o != 0 ? (Address?)(new Address()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Alternate names for the entity
  public string ALTERNATE_NAMES(int j) { int o = __p.__offset(24); return o != 0 ? __p.__string(__p.__vector(o) + j * 4) : null; }
  public int ALTERNATE_NAMESLength { get { int o = __p.__offset(24); return o != 0 ? __p.__vector_len(o) : 0; } }
  /// Email address of the entity
  public string EMAIL { get { int o = __p.__offset(26); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetEMAILBytes() { return __p.__vector_as_span<byte>(26, 1); }
#else
  public ArraySegment<byte>? GetEMAILBytes() { return __p.__vector_as_arraysegment(26); }
#endif
  public byte[] GetEMAILArray() { return __p.__vector_as_array<byte>(26); }
  /// Telephone number of the entity
  public string TELEPHONE { get { int o = __p.__offset(28); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetTELEPHONEBytes() { return __p.__vector_as_span<byte>(28, 1); }
#else
  public ArraySegment<byte>? GetTELEPHONEBytes() { return __p.__vector_as_arraysegment(28); }
#endif
  public byte[] GetTELEPHONEArray() { return __p.__vector_as_array<byte>(28); }
  /// Cryptographic keys associated with the entity
  public CryptoKey? KEYS(int j) { int o = __p.__offset(30); return o != 0 ? (CryptoKey?)(new CryptoKey()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int KEYSLength { get { int o = __p.__offset(30); return o != 0 ? __p.__vector_len(o) : 0; } }
  /// Multiformat addresses associated with the entity
  public string MULTIFORMAT_ADDRESS(int j) { int o = __p.__offset(32); return o != 0 ? __p.__string(__p.__vector(o) + j * 4) : null; }
  public int MULTIFORMAT_ADDRESSLength { get { int o = __p.__offset(32); return o != 0 ? __p.__vector_len(o) : 0; } }

  public static Offset<EPM> CreateEPM(FlatBufferBuilder builder,
      StringOffset DNOffset = default(StringOffset),
      StringOffset LEGAL_NAMEOffset = default(StringOffset),
      StringOffset FAMILY_NAMEOffset = default(StringOffset),
      StringOffset GIVEN_NAMEOffset = default(StringOffset),
      StringOffset ADDITIONAL_NAMEOffset = default(StringOffset),
      StringOffset HONORIFIC_PREFIXOffset = default(StringOffset),
      StringOffset HONORIFIC_SUFFIXOffset = default(StringOffset),
      StringOffset JOB_TITLEOffset = default(StringOffset),
      StringOffset OCCUPATIONOffset = default(StringOffset),
      Offset<Address> ADDRESSOffset = default(Offset<Address>),
      VectorOffset ALTERNATE_NAMESOffset = default(VectorOffset),
      StringOffset EMAILOffset = default(StringOffset),
      StringOffset TELEPHONEOffset = default(StringOffset),
      VectorOffset KEYSOffset = default(VectorOffset),
      VectorOffset MULTIFORMAT_ADDRESSOffset = default(VectorOffset)) {
    builder.StartTable(15);
    EPM.AddMULTIFORMAT_ADDRESS(builder, MULTIFORMAT_ADDRESSOffset);
    EPM.AddKEYS(builder, KEYSOffset);
    EPM.AddTELEPHONE(builder, TELEPHONEOffset);
    EPM.AddEMAIL(builder, EMAILOffset);
    EPM.AddALTERNATE_NAMES(builder, ALTERNATE_NAMESOffset);
    EPM.AddADDRESS(builder, ADDRESSOffset);
    EPM.AddOCCUPATION(builder, OCCUPATIONOffset);
    EPM.AddJOB_TITLE(builder, JOB_TITLEOffset);
    EPM.AddHONORIFIC_SUFFIX(builder, HONORIFIC_SUFFIXOffset);
    EPM.AddHONORIFIC_PREFIX(builder, HONORIFIC_PREFIXOffset);
    EPM.AddADDITIONAL_NAME(builder, ADDITIONAL_NAMEOffset);
    EPM.AddGIVEN_NAME(builder, GIVEN_NAMEOffset);
    EPM.AddFAMILY_NAME(builder, FAMILY_NAMEOffset);
    EPM.AddLEGAL_NAME(builder, LEGAL_NAMEOffset);
    EPM.AddDN(builder, DNOffset);
    return EPM.EndEPM(builder);
  }

  public static void StartEPM(FlatBufferBuilder builder) { builder.StartTable(15); }
  public static void AddDN(FlatBufferBuilder builder, StringOffset DNOffset) { builder.AddOffset(0, DNOffset.Value, 0); }
  public static void AddLEGAL_NAME(FlatBufferBuilder builder, StringOffset LEGAL_NAMEOffset) { builder.AddOffset(1, LEGAL_NAMEOffset.Value, 0); }
  public static void AddFAMILY_NAME(FlatBufferBuilder builder, StringOffset FAMILY_NAMEOffset) { builder.AddOffset(2, FAMILY_NAMEOffset.Value, 0); }
  public static void AddGIVEN_NAME(FlatBufferBuilder builder, StringOffset GIVEN_NAMEOffset) { builder.AddOffset(3, GIVEN_NAMEOffset.Value, 0); }
  public static void AddADDITIONAL_NAME(FlatBufferBuilder builder, StringOffset ADDITIONAL_NAMEOffset) { builder.AddOffset(4, ADDITIONAL_NAMEOffset.Value, 0); }
  public static void AddHONORIFIC_PREFIX(FlatBufferBuilder builder, StringOffset HONORIFIC_PREFIXOffset) { builder.AddOffset(5, HONORIFIC_PREFIXOffset.Value, 0); }
  public static void AddHONORIFIC_SUFFIX(FlatBufferBuilder builder, StringOffset HONORIFIC_SUFFIXOffset) { builder.AddOffset(6, HONORIFIC_SUFFIXOffset.Value, 0); }
  public static void AddJOB_TITLE(FlatBufferBuilder builder, StringOffset JOB_TITLEOffset) { builder.AddOffset(7, JOB_TITLEOffset.Value, 0); }
  public static void AddOCCUPATION(FlatBufferBuilder builder, StringOffset OCCUPATIONOffset) { builder.AddOffset(8, OCCUPATIONOffset.Value, 0); }
  public static void AddADDRESS(FlatBufferBuilder builder, Offset<Address> ADDRESSOffset) { builder.AddOffset(9, ADDRESSOffset.Value, 0); }
  public static void AddALTERNATE_NAMES(FlatBufferBuilder builder, VectorOffset ALTERNATE_NAMESOffset) { builder.AddOffset(10, ALTERNATE_NAMESOffset.Value, 0); }
  public static VectorOffset CreateALTERNATE_NAMESVector(FlatBufferBuilder builder, StringOffset[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateALTERNATE_NAMESVectorBlock(FlatBufferBuilder builder, StringOffset[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateALTERNATE_NAMESVectorBlock(FlatBufferBuilder builder, ArraySegment<StringOffset> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateALTERNATE_NAMESVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<StringOffset>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartALTERNATE_NAMESVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static void AddEMAIL(FlatBufferBuilder builder, StringOffset EMAILOffset) { builder.AddOffset(11, EMAILOffset.Value, 0); }
  public static void AddTELEPHONE(FlatBufferBuilder builder, StringOffset TELEPHONEOffset) { builder.AddOffset(12, TELEPHONEOffset.Value, 0); }
  public static void AddKEYS(FlatBufferBuilder builder, VectorOffset KEYSOffset) { builder.AddOffset(13, KEYSOffset.Value, 0); }
  public static VectorOffset CreateKEYSVector(FlatBufferBuilder builder, Offset<CryptoKey>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateKEYSVectorBlock(FlatBufferBuilder builder, Offset<CryptoKey>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateKEYSVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<CryptoKey>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateKEYSVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<CryptoKey>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartKEYSVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static void AddMULTIFORMAT_ADDRESS(FlatBufferBuilder builder, VectorOffset MULTIFORMAT_ADDRESSOffset) { builder.AddOffset(14, MULTIFORMAT_ADDRESSOffset.Value, 0); }
  public static VectorOffset CreateMULTIFORMAT_ADDRESSVector(FlatBufferBuilder builder, StringOffset[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateMULTIFORMAT_ADDRESSVectorBlock(FlatBufferBuilder builder, StringOffset[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateMULTIFORMAT_ADDRESSVectorBlock(FlatBufferBuilder builder, ArraySegment<StringOffset> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateMULTIFORMAT_ADDRESSVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<StringOffset>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartMULTIFORMAT_ADDRESSVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static Offset<EPM> EndEPM(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<EPM>(o);
  }
  public static void FinishEPMBuffer(FlatBufferBuilder builder, Offset<EPM> offset) { builder.Finish(offset.Value, "$EPM"); }
  public static void FinishSizePrefixedEPMBuffer(FlatBufferBuilder builder, Offset<EPM> offset) { builder.FinishSizePrefixed(offset.Value, "$EPM"); }
  public EPMT UnPack() {
    var _o = new EPMT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(EPMT _o) {
    _o.DN = this.DN;
    _o.LEGAL_NAME = this.LEGAL_NAME;
    _o.FAMILY_NAME = this.FAMILY_NAME;
    _o.GIVEN_NAME = this.GIVEN_NAME;
    _o.ADDITIONAL_NAME = this.ADDITIONAL_NAME;
    _o.HONORIFIC_PREFIX = this.HONORIFIC_PREFIX;
    _o.HONORIFIC_SUFFIX = this.HONORIFIC_SUFFIX;
    _o.JOB_TITLE = this.JOB_TITLE;
    _o.OCCUPATION = this.OCCUPATION;
    _o.ADDRESS = this.ADDRESS.HasValue ? this.ADDRESS.Value.UnPack() : null;
    _o.ALTERNATE_NAMES = new List<string>();
    for (var _j = 0; _j < this.ALTERNATE_NAMESLength; ++_j) {_o.ALTERNATE_NAMES.Add(this.ALTERNATE_NAMES(_j));}
    _o.EMAIL = this.EMAIL;
    _o.TELEPHONE = this.TELEPHONE;
    _o.KEYS = new List<CryptoKeyT>();
    for (var _j = 0; _j < this.KEYSLength; ++_j) {_o.KEYS.Add(this.KEYS(_j).HasValue ? this.KEYS(_j).Value.UnPack() : null);}
    _o.MULTIFORMAT_ADDRESS = new List<string>();
    for (var _j = 0; _j < this.MULTIFORMAT_ADDRESSLength; ++_j) {_o.MULTIFORMAT_ADDRESS.Add(this.MULTIFORMAT_ADDRESS(_j));}
  }
  public static Offset<EPM> Pack(FlatBufferBuilder builder, EPMT _o) {
    if (_o == null) return default(Offset<EPM>);
    var _DN = _o.DN == null ? default(StringOffset) : builder.CreateString(_o.DN);
    var _LEGAL_NAME = _o.LEGAL_NAME == null ? default(StringOffset) : builder.CreateString(_o.LEGAL_NAME);
    var _FAMILY_NAME = _o.FAMILY_NAME == null ? default(StringOffset) : builder.CreateString(_o.FAMILY_NAME);
    var _GIVEN_NAME = _o.GIVEN_NAME == null ? default(StringOffset) : builder.CreateString(_o.GIVEN_NAME);
    var _ADDITIONAL_NAME = _o.ADDITIONAL_NAME == null ? default(StringOffset) : builder.CreateString(_o.ADDITIONAL_NAME);
    var _HONORIFIC_PREFIX = _o.HONORIFIC_PREFIX == null ? default(StringOffset) : builder.CreateString(_o.HONORIFIC_PREFIX);
    var _HONORIFIC_SUFFIX = _o.HONORIFIC_SUFFIX == null ? default(StringOffset) : builder.CreateString(_o.HONORIFIC_SUFFIX);
    var _JOB_TITLE = _o.JOB_TITLE == null ? default(StringOffset) : builder.CreateString(_o.JOB_TITLE);
    var _OCCUPATION = _o.OCCUPATION == null ? default(StringOffset) : builder.CreateString(_o.OCCUPATION);
    var _ADDRESS = _o.ADDRESS == null ? default(Offset<Address>) : Address.Pack(builder, _o.ADDRESS);
    var _ALTERNATE_NAMES = default(VectorOffset);
    if (_o.ALTERNATE_NAMES != null) {
      var __ALTERNATE_NAMES = new StringOffset[_o.ALTERNATE_NAMES.Count];
      for (var _j = 0; _j < __ALTERNATE_NAMES.Length; ++_j) { __ALTERNATE_NAMES[_j] = builder.CreateString(_o.ALTERNATE_NAMES[_j]); }
      _ALTERNATE_NAMES = CreateALTERNATE_NAMESVector(builder, __ALTERNATE_NAMES);
    }
    var _EMAIL = _o.EMAIL == null ? default(StringOffset) : builder.CreateString(_o.EMAIL);
    var _TELEPHONE = _o.TELEPHONE == null ? default(StringOffset) : builder.CreateString(_o.TELEPHONE);
    var _KEYS = default(VectorOffset);
    if (_o.KEYS != null) {
      var __KEYS = new Offset<CryptoKey>[_o.KEYS.Count];
      for (var _j = 0; _j < __KEYS.Length; ++_j) { __KEYS[_j] = CryptoKey.Pack(builder, _o.KEYS[_j]); }
      _KEYS = CreateKEYSVector(builder, __KEYS);
    }
    var _MULTIFORMAT_ADDRESS = default(VectorOffset);
    if (_o.MULTIFORMAT_ADDRESS != null) {
      var __MULTIFORMAT_ADDRESS = new StringOffset[_o.MULTIFORMAT_ADDRESS.Count];
      for (var _j = 0; _j < __MULTIFORMAT_ADDRESS.Length; ++_j) { __MULTIFORMAT_ADDRESS[_j] = builder.CreateString(_o.MULTIFORMAT_ADDRESS[_j]); }
      _MULTIFORMAT_ADDRESS = CreateMULTIFORMAT_ADDRESSVector(builder, __MULTIFORMAT_ADDRESS);
    }
    return CreateEPM(
      builder,
      _DN,
      _LEGAL_NAME,
      _FAMILY_NAME,
      _GIVEN_NAME,
      _ADDITIONAL_NAME,
      _HONORIFIC_PREFIX,
      _HONORIFIC_SUFFIX,
      _JOB_TITLE,
      _OCCUPATION,
      _ADDRESS,
      _ALTERNATE_NAMES,
      _EMAIL,
      _TELEPHONE,
      _KEYS,
      _MULTIFORMAT_ADDRESS);
  }
}

public class EPMT
{
  public string DN { get; set; }
  public string LEGAL_NAME { get; set; }
  public string FAMILY_NAME { get; set; }
  public string GIVEN_NAME { get; set; }
  public string ADDITIONAL_NAME { get; set; }
  public string HONORIFIC_PREFIX { get; set; }
  public string HONORIFIC_SUFFIX { get; set; }
  public string JOB_TITLE { get; set; }
  public string OCCUPATION { get; set; }
  public AddressT ADDRESS { get; set; }
  public List<string> ALTERNATE_NAMES { get; set; }
  public string EMAIL { get; set; }
  public string TELEPHONE { get; set; }
  public List<CryptoKeyT> KEYS { get; set; }
  public List<string> MULTIFORMAT_ADDRESS { get; set; }

  public EPMT() {
    this.DN = null;
    this.LEGAL_NAME = null;
    this.FAMILY_NAME = null;
    this.GIVEN_NAME = null;
    this.ADDITIONAL_NAME = null;
    this.HONORIFIC_PREFIX = null;
    this.HONORIFIC_SUFFIX = null;
    this.JOB_TITLE = null;
    this.OCCUPATION = null;
    this.ADDRESS = null;
    this.ALTERNATE_NAMES = null;
    this.EMAIL = null;
    this.TELEPHONE = null;
    this.KEYS = null;
    this.MULTIFORMAT_ADDRESS = null;
  }
  public static EPMT DeserializeFromBinary(byte[] fbBuffer) {
    return EPM.GetRootAsEPM(new ByteBuffer(fbBuffer)).UnPack();
  }
  public byte[] SerializeToBinary() {
    var fbb = new FlatBufferBuilder(0x10000);
    EPM.FinishEPMBuffer(fbb, EPM.Pack(fbb, this));
    return fbb.DataBuffer.ToSizedArray();
  }
}


static public class EPMVerify
{
  static public bool Verify(Google.FlatBuffers.Verifier verifier, uint tablePos)
  {
    return verifier.VerifyTableStart(tablePos)
      && verifier.VerifyString(tablePos, 4 /*DN*/, false)
      && verifier.VerifyString(tablePos, 6 /*LEGAL_NAME*/, false)
      && verifier.VerifyString(tablePos, 8 /*FAMILY_NAME*/, false)
      && verifier.VerifyString(tablePos, 10 /*GIVEN_NAME*/, false)
      && verifier.VerifyString(tablePos, 12 /*ADDITIONAL_NAME*/, false)
      && verifier.VerifyString(tablePos, 14 /*HONORIFIC_PREFIX*/, false)
      && verifier.VerifyString(tablePos, 16 /*HONORIFIC_SUFFIX*/, false)
      && verifier.VerifyString(tablePos, 18 /*JOB_TITLE*/, false)
      && verifier.VerifyString(tablePos, 20 /*OCCUPATION*/, false)
      && verifier.VerifyTable(tablePos, 22 /*ADDRESS*/, AddressVerify.Verify, false)
      && verifier.VerifyVectorOfStrings(tablePos, 24 /*ALTERNATE_NAMES*/, false)
      && verifier.VerifyString(tablePos, 26 /*EMAIL*/, false)
      && verifier.VerifyString(tablePos, 28 /*TELEPHONE*/, false)
      && verifier.VerifyVectorOfTables(tablePos, 30 /*KEYS*/, CryptoKeyVerify.Verify, false)
      && verifier.VerifyVectorOfStrings(tablePos, 32 /*MULTIFORMAT_ADDRESS*/, false)
      && verifier.VerifyTableEnd(tablePos);
  }
}
