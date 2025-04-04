// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

using global::System;
using global::System.Collections.Generic;
using global::Google.FlatBuffers;

/// Orbit Comprehensive Message
public struct OCM : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_24_3_25(); }
  public static OCM GetRootAsOCM(ByteBuffer _bb) { return GetRootAsOCM(_bb, new OCM()); }
  public static OCM GetRootAsOCM(ByteBuffer _bb, OCM obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public static bool OCMBufferHasIdentifier(ByteBuffer _bb) { return Table.__has_identifier(_bb, "$OCM"); }
  public static bool VerifyOCM(ByteBuffer _bb) {Google.FlatBuffers.Verifier verifier = new Google.FlatBuffers.Verifier(_bb); return verifier.VerifyBuffer("$OCM", false, OCMVerify.Verify); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public OCM __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /// Header section of the OCM.
  public Header? HEADER { get { int o = __p.__offset(4); return o != 0 ? (Header?)(new Header()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Metadata section of the OCM.
  public Metadata? METADATA { get { int o = __p.__offset(6); return o != 0 ? (Metadata?)(new Metadata()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Trajectory type (e.g., PROPAGATED, ESTIMATED).
  public string TRAJ_TYPE { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetTRAJ_TYPEBytes() { return __p.__vector_as_span<byte>(8, 1); }
#else
  public ArraySegment<byte>? GetTRAJ_TYPEBytes() { return __p.__vector_as_arraysegment(8); }
#endif
  public byte[] GetTRAJ_TYPEArray() { return __p.__vector_as_array<byte>(8); }
  /// State vector data.
  public StateVector? STATE_DATA(int j) { int o = __p.__offset(10); return o != 0 ? (StateVector?)(new StateVector()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int STATE_DATALength { get { int o = __p.__offset(10); return o != 0 ? __p.__vector_len(o) : 0; } }
  /// Physical properties of the space object.
  public PhysicalProperties? PHYSICAL_PROPERTIES { get { int o = __p.__offset(12); return o != 0 ? (PhysicalProperties?)(new PhysicalProperties()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Covariance data associated with the state vectors.
  public StateVector? COVARIANCE_DATA(int j) { int o = __p.__offset(14); return o != 0 ? (StateVector?)(new StateVector()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int COVARIANCE_DATALength { get { int o = __p.__offset(14); return o != 0 ? __p.__vector_len(o) : 0; } }
  /// Maneuver data.
  public Maneuver? MANEUVER_DATA(int j) { int o = __p.__offset(16); return o != 0 ? (Maneuver?)(new Maneuver()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int MANEUVER_DATALength { get { int o = __p.__offset(16); return o != 0 ? __p.__vector_len(o) : 0; } }
  /// Perturbations parameters used.
  public Perturbations? PERTURBATIONS { get { int o = __p.__offset(18); return o != 0 ? (Perturbations?)(new Perturbations()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// Orbit determination data.
  public OrbitDetermination? ORBIT_DETERMINATION { get { int o = __p.__offset(20); return o != 0 ? (OrbitDetermination?)(new OrbitDetermination()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  /// User-defined parameters and supplemental comments.
  public UserDefinedParameters? USER_DEFINED_PARAMETERS(int j) { int o = __p.__offset(22); return o != 0 ? (UserDefinedParameters?)(new UserDefinedParameters()).__assign(__p.__indirect(__p.__vector(o) + j * 4), __p.bb) : null; }
  public int USER_DEFINED_PARAMETERSLength { get { int o = __p.__offset(22); return o != 0 ? __p.__vector_len(o) : 0; } }

  public static Offset<OCM> CreateOCM(FlatBufferBuilder builder,
      Offset<Header> HEADEROffset = default(Offset<Header>),
      Offset<Metadata> METADATAOffset = default(Offset<Metadata>),
      StringOffset TRAJ_TYPEOffset = default(StringOffset),
      VectorOffset STATE_DATAOffset = default(VectorOffset),
      Offset<PhysicalProperties> PHYSICAL_PROPERTIESOffset = default(Offset<PhysicalProperties>),
      VectorOffset COVARIANCE_DATAOffset = default(VectorOffset),
      VectorOffset MANEUVER_DATAOffset = default(VectorOffset),
      Offset<Perturbations> PERTURBATIONSOffset = default(Offset<Perturbations>),
      Offset<OrbitDetermination> ORBIT_DETERMINATIONOffset = default(Offset<OrbitDetermination>),
      VectorOffset USER_DEFINED_PARAMETERSOffset = default(VectorOffset)) {
    builder.StartTable(10);
    OCM.AddUSER_DEFINED_PARAMETERS(builder, USER_DEFINED_PARAMETERSOffset);
    OCM.AddORBIT_DETERMINATION(builder, ORBIT_DETERMINATIONOffset);
    OCM.AddPERTURBATIONS(builder, PERTURBATIONSOffset);
    OCM.AddMANEUVER_DATA(builder, MANEUVER_DATAOffset);
    OCM.AddCOVARIANCE_DATA(builder, COVARIANCE_DATAOffset);
    OCM.AddPHYSICAL_PROPERTIES(builder, PHYSICAL_PROPERTIESOffset);
    OCM.AddSTATE_DATA(builder, STATE_DATAOffset);
    OCM.AddTRAJ_TYPE(builder, TRAJ_TYPEOffset);
    OCM.AddMETADATA(builder, METADATAOffset);
    OCM.AddHEADER(builder, HEADEROffset);
    return OCM.EndOCM(builder);
  }

  public static void StartOCM(FlatBufferBuilder builder) { builder.StartTable(10); }
  public static void AddHEADER(FlatBufferBuilder builder, Offset<Header> HEADEROffset) { builder.AddOffset(0, HEADEROffset.Value, 0); }
  public static void AddMETADATA(FlatBufferBuilder builder, Offset<Metadata> METADATAOffset) { builder.AddOffset(1, METADATAOffset.Value, 0); }
  public static void AddTRAJ_TYPE(FlatBufferBuilder builder, StringOffset TRAJ_TYPEOffset) { builder.AddOffset(2, TRAJ_TYPEOffset.Value, 0); }
  public static void AddSTATE_DATA(FlatBufferBuilder builder, VectorOffset STATE_DATAOffset) { builder.AddOffset(3, STATE_DATAOffset.Value, 0); }
  public static VectorOffset CreateSTATE_DATAVector(FlatBufferBuilder builder, Offset<StateVector>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateSTATE_DATAVectorBlock(FlatBufferBuilder builder, Offset<StateVector>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateSTATE_DATAVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<StateVector>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateSTATE_DATAVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<StateVector>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartSTATE_DATAVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static void AddPHYSICAL_PROPERTIES(FlatBufferBuilder builder, Offset<PhysicalProperties> PHYSICAL_PROPERTIESOffset) { builder.AddOffset(4, PHYSICAL_PROPERTIESOffset.Value, 0); }
  public static void AddCOVARIANCE_DATA(FlatBufferBuilder builder, VectorOffset COVARIANCE_DATAOffset) { builder.AddOffset(5, COVARIANCE_DATAOffset.Value, 0); }
  public static VectorOffset CreateCOVARIANCE_DATAVector(FlatBufferBuilder builder, Offset<StateVector>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateCOVARIANCE_DATAVectorBlock(FlatBufferBuilder builder, Offset<StateVector>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateCOVARIANCE_DATAVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<StateVector>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateCOVARIANCE_DATAVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<StateVector>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartCOVARIANCE_DATAVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static void AddMANEUVER_DATA(FlatBufferBuilder builder, VectorOffset MANEUVER_DATAOffset) { builder.AddOffset(6, MANEUVER_DATAOffset.Value, 0); }
  public static VectorOffset CreateMANEUVER_DATAVector(FlatBufferBuilder builder, Offset<Maneuver>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateMANEUVER_DATAVectorBlock(FlatBufferBuilder builder, Offset<Maneuver>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateMANEUVER_DATAVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<Maneuver>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateMANEUVER_DATAVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<Maneuver>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartMANEUVER_DATAVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static void AddPERTURBATIONS(FlatBufferBuilder builder, Offset<Perturbations> PERTURBATIONSOffset) { builder.AddOffset(7, PERTURBATIONSOffset.Value, 0); }
  public static void AddORBIT_DETERMINATION(FlatBufferBuilder builder, Offset<OrbitDetermination> ORBIT_DETERMINATIONOffset) { builder.AddOffset(8, ORBIT_DETERMINATIONOffset.Value, 0); }
  public static void AddUSER_DEFINED_PARAMETERS(FlatBufferBuilder builder, VectorOffset USER_DEFINED_PARAMETERSOffset) { builder.AddOffset(9, USER_DEFINED_PARAMETERSOffset.Value, 0); }
  public static VectorOffset CreateUSER_DEFINED_PARAMETERSVector(FlatBufferBuilder builder, Offset<UserDefinedParameters>[] data) { builder.StartVector(4, data.Length, 4); for (int i = data.Length - 1; i >= 0; i--) builder.AddOffset(data[i].Value); return builder.EndVector(); }
  public static VectorOffset CreateUSER_DEFINED_PARAMETERSVectorBlock(FlatBufferBuilder builder, Offset<UserDefinedParameters>[] data) { builder.StartVector(4, data.Length, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateUSER_DEFINED_PARAMETERSVectorBlock(FlatBufferBuilder builder, ArraySegment<Offset<UserDefinedParameters>> data) { builder.StartVector(4, data.Count, 4); builder.Add(data); return builder.EndVector(); }
  public static VectorOffset CreateUSER_DEFINED_PARAMETERSVectorBlock(FlatBufferBuilder builder, IntPtr dataPtr, int sizeInBytes) { builder.StartVector(1, sizeInBytes, 1); builder.Add<Offset<UserDefinedParameters>>(dataPtr, sizeInBytes); return builder.EndVector(); }
  public static void StartUSER_DEFINED_PARAMETERSVector(FlatBufferBuilder builder, int numElems) { builder.StartVector(4, numElems, 4); }
  public static Offset<OCM> EndOCM(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<OCM>(o);
  }
  public static void FinishOCMBuffer(FlatBufferBuilder builder, Offset<OCM> offset) { builder.Finish(offset.Value, "$OCM"); }
  public static void FinishSizePrefixedOCMBuffer(FlatBufferBuilder builder, Offset<OCM> offset) { builder.FinishSizePrefixed(offset.Value, "$OCM"); }
  public OCMT UnPack() {
    var _o = new OCMT();
    this.UnPackTo(_o);
    return _o;
  }
  public void UnPackTo(OCMT _o) {
    _o.HEADER = this.HEADER.HasValue ? this.HEADER.Value.UnPack() : null;
    _o.METADATA = this.METADATA.HasValue ? this.METADATA.Value.UnPack() : null;
    _o.TRAJ_TYPE = this.TRAJ_TYPE;
    _o.STATE_DATA = new List<StateVectorT>();
    for (var _j = 0; _j < this.STATE_DATALength; ++_j) {_o.STATE_DATA.Add(this.STATE_DATA(_j).HasValue ? this.STATE_DATA(_j).Value.UnPack() : null);}
    _o.PHYSICAL_PROPERTIES = this.PHYSICAL_PROPERTIES.HasValue ? this.PHYSICAL_PROPERTIES.Value.UnPack() : null;
    _o.COVARIANCE_DATA = new List<StateVectorT>();
    for (var _j = 0; _j < this.COVARIANCE_DATALength; ++_j) {_o.COVARIANCE_DATA.Add(this.COVARIANCE_DATA(_j).HasValue ? this.COVARIANCE_DATA(_j).Value.UnPack() : null);}
    _o.MANEUVER_DATA = new List<ManeuverT>();
    for (var _j = 0; _j < this.MANEUVER_DATALength; ++_j) {_o.MANEUVER_DATA.Add(this.MANEUVER_DATA(_j).HasValue ? this.MANEUVER_DATA(_j).Value.UnPack() : null);}
    _o.PERTURBATIONS = this.PERTURBATIONS.HasValue ? this.PERTURBATIONS.Value.UnPack() : null;
    _o.ORBIT_DETERMINATION = this.ORBIT_DETERMINATION.HasValue ? this.ORBIT_DETERMINATION.Value.UnPack() : null;
    _o.USER_DEFINED_PARAMETERS = new List<UserDefinedParametersT>();
    for (var _j = 0; _j < this.USER_DEFINED_PARAMETERSLength; ++_j) {_o.USER_DEFINED_PARAMETERS.Add(this.USER_DEFINED_PARAMETERS(_j).HasValue ? this.USER_DEFINED_PARAMETERS(_j).Value.UnPack() : null);}
  }
  public static Offset<OCM> Pack(FlatBufferBuilder builder, OCMT _o) {
    if (_o == null) return default(Offset<OCM>);
    var _HEADER = _o.HEADER == null ? default(Offset<Header>) : Header.Pack(builder, _o.HEADER);
    var _METADATA = _o.METADATA == null ? default(Offset<Metadata>) : Metadata.Pack(builder, _o.METADATA);
    var _TRAJ_TYPE = _o.TRAJ_TYPE == null ? default(StringOffset) : builder.CreateString(_o.TRAJ_TYPE);
    var _STATE_DATA = default(VectorOffset);
    if (_o.STATE_DATA != null) {
      var __STATE_DATA = new Offset<StateVector>[_o.STATE_DATA.Count];
      for (var _j = 0; _j < __STATE_DATA.Length; ++_j) { __STATE_DATA[_j] = StateVector.Pack(builder, _o.STATE_DATA[_j]); }
      _STATE_DATA = CreateSTATE_DATAVector(builder, __STATE_DATA);
    }
    var _PHYSICAL_PROPERTIES = _o.PHYSICAL_PROPERTIES == null ? default(Offset<PhysicalProperties>) : PhysicalProperties.Pack(builder, _o.PHYSICAL_PROPERTIES);
    var _COVARIANCE_DATA = default(VectorOffset);
    if (_o.COVARIANCE_DATA != null) {
      var __COVARIANCE_DATA = new Offset<StateVector>[_o.COVARIANCE_DATA.Count];
      for (var _j = 0; _j < __COVARIANCE_DATA.Length; ++_j) { __COVARIANCE_DATA[_j] = StateVector.Pack(builder, _o.COVARIANCE_DATA[_j]); }
      _COVARIANCE_DATA = CreateCOVARIANCE_DATAVector(builder, __COVARIANCE_DATA);
    }
    var _MANEUVER_DATA = default(VectorOffset);
    if (_o.MANEUVER_DATA != null) {
      var __MANEUVER_DATA = new Offset<Maneuver>[_o.MANEUVER_DATA.Count];
      for (var _j = 0; _j < __MANEUVER_DATA.Length; ++_j) { __MANEUVER_DATA[_j] = Maneuver.Pack(builder, _o.MANEUVER_DATA[_j]); }
      _MANEUVER_DATA = CreateMANEUVER_DATAVector(builder, __MANEUVER_DATA);
    }
    var _PERTURBATIONS = _o.PERTURBATIONS == null ? default(Offset<Perturbations>) : Perturbations.Pack(builder, _o.PERTURBATIONS);
    var _ORBIT_DETERMINATION = _o.ORBIT_DETERMINATION == null ? default(Offset<OrbitDetermination>) : OrbitDetermination.Pack(builder, _o.ORBIT_DETERMINATION);
    var _USER_DEFINED_PARAMETERS = default(VectorOffset);
    if (_o.USER_DEFINED_PARAMETERS != null) {
      var __USER_DEFINED_PARAMETERS = new Offset<UserDefinedParameters>[_o.USER_DEFINED_PARAMETERS.Count];
      for (var _j = 0; _j < __USER_DEFINED_PARAMETERS.Length; ++_j) { __USER_DEFINED_PARAMETERS[_j] = UserDefinedParameters.Pack(builder, _o.USER_DEFINED_PARAMETERS[_j]); }
      _USER_DEFINED_PARAMETERS = CreateUSER_DEFINED_PARAMETERSVector(builder, __USER_DEFINED_PARAMETERS);
    }
    return CreateOCM(
      builder,
      _HEADER,
      _METADATA,
      _TRAJ_TYPE,
      _STATE_DATA,
      _PHYSICAL_PROPERTIES,
      _COVARIANCE_DATA,
      _MANEUVER_DATA,
      _PERTURBATIONS,
      _ORBIT_DETERMINATION,
      _USER_DEFINED_PARAMETERS);
  }
}

public class OCMT
{
  public HeaderT HEADER { get; set; }
  public MetadataT METADATA { get; set; }
  public string TRAJ_TYPE { get; set; }
  public List<StateVectorT> STATE_DATA { get; set; }
  public PhysicalPropertiesT PHYSICAL_PROPERTIES { get; set; }
  public List<StateVectorT> COVARIANCE_DATA { get; set; }
  public List<ManeuverT> MANEUVER_DATA { get; set; }
  public PerturbationsT PERTURBATIONS { get; set; }
  public OrbitDeterminationT ORBIT_DETERMINATION { get; set; }
  public List<UserDefinedParametersT> USER_DEFINED_PARAMETERS { get; set; }

  public OCMT() {
    this.HEADER = null;
    this.METADATA = null;
    this.TRAJ_TYPE = null;
    this.STATE_DATA = null;
    this.PHYSICAL_PROPERTIES = null;
    this.COVARIANCE_DATA = null;
    this.MANEUVER_DATA = null;
    this.PERTURBATIONS = null;
    this.ORBIT_DETERMINATION = null;
    this.USER_DEFINED_PARAMETERS = null;
  }
  public static OCMT DeserializeFromBinary(byte[] fbBuffer) {
    return OCM.GetRootAsOCM(new ByteBuffer(fbBuffer)).UnPack();
  }
  public byte[] SerializeToBinary() {
    var fbb = new FlatBufferBuilder(0x10000);
    OCM.FinishOCMBuffer(fbb, OCM.Pack(fbb, this));
    return fbb.DataBuffer.ToSizedArray();
  }
}


static public class OCMVerify
{
  static public bool Verify(Google.FlatBuffers.Verifier verifier, uint tablePos)
  {
    return verifier.VerifyTableStart(tablePos)
      && verifier.VerifyTable(tablePos, 4 /*HEADER*/, HeaderVerify.Verify, false)
      && verifier.VerifyTable(tablePos, 6 /*METADATA*/, MetadataVerify.Verify, false)
      && verifier.VerifyString(tablePos, 8 /*TRAJ_TYPE*/, false)
      && verifier.VerifyVectorOfTables(tablePos, 10 /*STATE_DATA*/, StateVectorVerify.Verify, false)
      && verifier.VerifyTable(tablePos, 12 /*PHYSICAL_PROPERTIES*/, PhysicalPropertiesVerify.Verify, false)
      && verifier.VerifyVectorOfTables(tablePos, 14 /*COVARIANCE_DATA*/, StateVectorVerify.Verify, false)
      && verifier.VerifyVectorOfTables(tablePos, 16 /*MANEUVER_DATA*/, ManeuverVerify.Verify, false)
      && verifier.VerifyTable(tablePos, 18 /*PERTURBATIONS*/, PerturbationsVerify.Verify, false)
      && verifier.VerifyTable(tablePos, 20 /*ORBIT_DETERMINATION*/, OrbitDeterminationVerify.Verify, false)
      && verifier.VerifyVectorOfTables(tablePos, 22 /*USER_DEFINED_PARAMETERS*/, UserDefinedParametersVerify.Verify, false)
      && verifier.VerifyTableEnd(tablePos);
  }
}
