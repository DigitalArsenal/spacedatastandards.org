// automatically generated by the FlatBuffers compiler, do not modify

import com.google.flatbuffers.BaseVector;
import com.google.flatbuffers.BooleanVector;
import com.google.flatbuffers.ByteVector;
import com.google.flatbuffers.Constants;
import com.google.flatbuffers.DoubleVector;
import com.google.flatbuffers.FlatBufferBuilder;
import com.google.flatbuffers.FloatVector;
import com.google.flatbuffers.IntVector;
import com.google.flatbuffers.LongVector;
import com.google.flatbuffers.ShortVector;
import com.google.flatbuffers.StringVector;
import com.google.flatbuffers.Struct;
import com.google.flatbuffers.Table;
import com.google.flatbuffers.UnionVector;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

/**
 * Orbit Comprehensive Message
 */
@SuppressWarnings("unused")
public final class OCM extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static OCM getRootAsOCM(ByteBuffer _bb) { return getRootAsOCM(_bb, new OCM()); }
  public static OCM getRootAsOCM(ByteBuffer _bb, OCM obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean OCMBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$OCM"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public OCM __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * Header section of the OCM.
   */
  public Header HEADER() { return HEADER(new Header()); }
  public Header HEADER(Header obj) { int o = __offset(4); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  /**
   * Metadata section of the OCM.
   */
  public Metadata METADATA() { return METADATA(new Metadata()); }
  public Metadata METADATA(Metadata obj) { int o = __offset(6); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  /**
   * Trajectory type (e.g., PROPAGATED, ESTIMATED).
   */
  public String TRAJ_TYPE() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer TRAJ_TYPEAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }
  public ByteBuffer TRAJ_TYPEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 8, 1); }
  /**
   * State vector data.
   */
  public StateVector STATE_DATA(int j) { return STATE_DATA(new StateVector(), j); }
  public StateVector STATE_DATA(StateVector obj, int j) { int o = __offset(10); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int STATE_DATALength() { int o = __offset(10); return o != 0 ? __vector_len(o) : 0; }
  public StateVector.Vector stateDataVector() { return stateDataVector(new StateVector.Vector()); }
  public StateVector.Vector stateDataVector(StateVector.Vector obj) { int o = __offset(10); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  /**
   * Physical properties of the space object.
   */
  public PhysicalProperties PHYSICAL_PROPERTIES() { return PHYSICAL_PROPERTIES(new PhysicalProperties()); }
  public PhysicalProperties PHYSICAL_PROPERTIES(PhysicalProperties obj) { int o = __offset(12); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  /**
   * Covariance data associated with the state vectors.
   */
  public StateVector COVARIANCE_DATA(int j) { return COVARIANCE_DATA(new StateVector(), j); }
  public StateVector COVARIANCE_DATA(StateVector obj, int j) { int o = __offset(14); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int COVARIANCE_DATALength() { int o = __offset(14); return o != 0 ? __vector_len(o) : 0; }
  public StateVector.Vector covarianceDataVector() { return covarianceDataVector(new StateVector.Vector()); }
  public StateVector.Vector covarianceDataVector(StateVector.Vector obj) { int o = __offset(14); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  /**
   * Maneuver data.
   */
  public Maneuver MANEUVER_DATA(int j) { return MANEUVER_DATA(new Maneuver(), j); }
  public Maneuver MANEUVER_DATA(Maneuver obj, int j) { int o = __offset(16); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int MANEUVER_DATALength() { int o = __offset(16); return o != 0 ? __vector_len(o) : 0; }
  public Maneuver.Vector maneuverDataVector() { return maneuverDataVector(new Maneuver.Vector()); }
  public Maneuver.Vector maneuverDataVector(Maneuver.Vector obj) { int o = __offset(16); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  /**
   * Perturbations parameters used.
   */
  public Perturbations PERTURBATIONS() { return PERTURBATIONS(new Perturbations()); }
  public Perturbations PERTURBATIONS(Perturbations obj) { int o = __offset(18); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  /**
   * Orbit determination data.
   */
  public OrbitDetermination ORBIT_DETERMINATION() { return ORBIT_DETERMINATION(new OrbitDetermination()); }
  public OrbitDetermination ORBIT_DETERMINATION(OrbitDetermination obj) { int o = __offset(20); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  /**
   * User-defined parameters and supplemental comments.
   */
  public UserDefinedParameters USER_DEFINED_PARAMETERS(int j) { return USER_DEFINED_PARAMETERS(new UserDefinedParameters(), j); }
  public UserDefinedParameters USER_DEFINED_PARAMETERS(UserDefinedParameters obj, int j) { int o = __offset(22); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int USER_DEFINED_PARAMETERSLength() { int o = __offset(22); return o != 0 ? __vector_len(o) : 0; }
  public UserDefinedParameters.Vector userDefinedParametersVector() { return userDefinedParametersVector(new UserDefinedParameters.Vector()); }
  public UserDefinedParameters.Vector userDefinedParametersVector(UserDefinedParameters.Vector obj) { int o = __offset(22); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }

  public static int createOCM(FlatBufferBuilder builder,
      int HEADEROffset,
      int METADATAOffset,
      int TRAJ_TYPEOffset,
      int STATE_DATAOffset,
      int PHYSICAL_PROPERTIESOffset,
      int COVARIANCE_DATAOffset,
      int MANEUVER_DATAOffset,
      int PERTURBATIONSOffset,
      int ORBIT_DETERMINATIONOffset,
      int USER_DEFINED_PARAMETERSOffset) {
    builder.startTable(10);
    OCM.addUserDefinedParameters(builder, USER_DEFINED_PARAMETERSOffset);
    OCM.addOrbitDetermination(builder, ORBIT_DETERMINATIONOffset);
    OCM.addPerturbations(builder, PERTURBATIONSOffset);
    OCM.addManeuverData(builder, MANEUVER_DATAOffset);
    OCM.addCovarianceData(builder, COVARIANCE_DATAOffset);
    OCM.addPhysicalProperties(builder, PHYSICAL_PROPERTIESOffset);
    OCM.addStateData(builder, STATE_DATAOffset);
    OCM.addTrajType(builder, TRAJ_TYPEOffset);
    OCM.addMetadata(builder, METADATAOffset);
    OCM.addHeader(builder, HEADEROffset);
    return OCM.endOCM(builder);
  }

  public static void startOCM(FlatBufferBuilder builder) { builder.startTable(10); }
  public static void addHeader(FlatBufferBuilder builder, int HEADEROffset) { builder.addOffset(0, HEADEROffset, 0); }
  public static void addMetadata(FlatBufferBuilder builder, int METADATAOffset) { builder.addOffset(1, METADATAOffset, 0); }
  public static void addTrajType(FlatBufferBuilder builder, int TRAJ_TYPEOffset) { builder.addOffset(2, TRAJ_TYPEOffset, 0); }
  public static void addStateData(FlatBufferBuilder builder, int STATE_DATAOffset) { builder.addOffset(3, STATE_DATAOffset, 0); }
  public static int createStateDataVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startStateDataVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addPhysicalProperties(FlatBufferBuilder builder, int PHYSICAL_PROPERTIESOffset) { builder.addOffset(4, PHYSICAL_PROPERTIESOffset, 0); }
  public static void addCovarianceData(FlatBufferBuilder builder, int COVARIANCE_DATAOffset) { builder.addOffset(5, COVARIANCE_DATAOffset, 0); }
  public static int createCovarianceDataVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startCovarianceDataVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addManeuverData(FlatBufferBuilder builder, int MANEUVER_DATAOffset) { builder.addOffset(6, MANEUVER_DATAOffset, 0); }
  public static int createManeuverDataVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startManeuverDataVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addPerturbations(FlatBufferBuilder builder, int PERTURBATIONSOffset) { builder.addOffset(7, PERTURBATIONSOffset, 0); }
  public static void addOrbitDetermination(FlatBufferBuilder builder, int ORBIT_DETERMINATIONOffset) { builder.addOffset(8, ORBIT_DETERMINATIONOffset, 0); }
  public static void addUserDefinedParameters(FlatBufferBuilder builder, int USER_DEFINED_PARAMETERSOffset) { builder.addOffset(9, USER_DEFINED_PARAMETERSOffset, 0); }
  public static int createUserDefinedParametersVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startUserDefinedParametersVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static int endOCM(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishOCMBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "$OCM"); }
  public static void finishSizePrefixedOCMBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "$OCM"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public OCM get(int j) { return get(new OCM(), j); }
    public OCM get(OCM obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
