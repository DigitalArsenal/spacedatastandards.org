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

@SuppressWarnings("unused")
public final class PhysicalProperties extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static PhysicalProperties getRootAsPhysicalProperties(ByteBuffer _bb) { return getRootAsPhysicalProperties(_bb, new PhysicalProperties()); }
  public static PhysicalProperties getRootAsPhysicalProperties(ByteBuffer _bb, PhysicalProperties obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public PhysicalProperties __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * Comments in the Physical Properties section.
   */
  public String COMMENT(int j) { int o = __offset(4); return o != 0 ? __string(__vector(o) + j * 4) : null; }
  public int COMMENTLength() { int o = __offset(4); return o != 0 ? __vector_len(o) : 0; }
  public StringVector commentVector() { return commentVector(new StringVector()); }
  public StringVector commentVector(StringVector obj) { int o = __offset(4); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }
  /**
   * Wet mass of the space object.
   */
  public double WET_MASS() { int o = __offset(6); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Dry mass of the space object.
   */
  public double DRY_MASS() { int o = __offset(8); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Units for mass values.
   */
  public String MASS_UNITS() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer MASS_UNITSAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public ByteBuffer MASS_UNITSInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 10, 1); }
  /**
   * Quaternion component q1 of orientation from OEB to EME2000.
   */
  public double OEB_Q1() { int o = __offset(12); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Quaternion component q2.
   */
  public double OEB_Q2() { int o = __offset(14); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Quaternion component q3.
   */
  public double OEB_Q3() { int o = __offset(16); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Quaternion scalar component qc.
   */
  public double OEB_QC() { int o = __offset(18); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Maximum dimension of the object along OEB frame axes.
   */
  public double OEB_MAX() { int o = __offset(20); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Intermediate dimension along OEB frame axes.
   */
  public double OEB_INT() { int o = __offset(22); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Minimum dimension of the object along OEB frame axes.
   */
  public double OEB_MIN() { int o = __offset(24); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Area along OEB_MAX axis.
   */
  public double AREA_ALONG_OEB_MAX() { int o = __offset(26); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Area along OEB_INT axis.
   */
  public double AREA_ALONG_OEB_INT() { int o = __offset(28); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Area along OEB_MIN axis.
   */
  public double AREA_ALONG_OEB_MIN() { int o = __offset(30); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Units for area values.
   */
  public String AREA_UNITS() { int o = __offset(32); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer AREA_UNITSAsByteBuffer() { return __vector_as_bytebuffer(32, 1); }
  public ByteBuffer AREA_UNITSInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 32, 1); }
  /**
   * Constant area for drag computations.
   */
  public double DRAG_CONST_AREA() { int o = __offset(34); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Nominal drag coefficient.
   */
  public double DRAG_COEFF_NOM() { int o = __offset(36); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Uncertainty in the drag coefficient.
   */
  public double DRAG_UNCERTAINTY() { int o = __offset(38); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Constant area for solar radiation pressure computations.
   */
  public double SRP_CONST_AREA() { int o = __offset(40); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Nominal solar radiation pressure coefficient.
   */
  public double SOLAR_RAD_COEFF() { int o = __offset(42); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Uncertainty in the solar radiation pressure coefficient.
   */
  public double SRP_UNCERTAINTY() { int o = __offset(44); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }

  public static int createPhysicalProperties(FlatBufferBuilder builder,
      int COMMENTOffset,
      double WET_MASS,
      double DRY_MASS,
      int MASS_UNITSOffset,
      double OEB_Q1,
      double OEB_Q2,
      double OEB_Q3,
      double OEB_QC,
      double OEB_MAX,
      double OEB_INT,
      double OEB_MIN,
      double AREA_ALONG_OEB_MAX,
      double AREA_ALONG_OEB_INT,
      double AREA_ALONG_OEB_MIN,
      int AREA_UNITSOffset,
      double DRAG_CONST_AREA,
      double DRAG_COEFF_NOM,
      double DRAG_UNCERTAINTY,
      double SRP_CONST_AREA,
      double SOLAR_RAD_COEFF,
      double SRP_UNCERTAINTY) {
    builder.startTable(21);
    PhysicalProperties.addSrpUncertainty(builder, SRP_UNCERTAINTY);
    PhysicalProperties.addSolarRadCoeff(builder, SOLAR_RAD_COEFF);
    PhysicalProperties.addSrpConstArea(builder, SRP_CONST_AREA);
    PhysicalProperties.addDragUncertainty(builder, DRAG_UNCERTAINTY);
    PhysicalProperties.addDragCoeffNom(builder, DRAG_COEFF_NOM);
    PhysicalProperties.addDragConstArea(builder, DRAG_CONST_AREA);
    PhysicalProperties.addAreaAlongOebMin(builder, AREA_ALONG_OEB_MIN);
    PhysicalProperties.addAreaAlongOebInt(builder, AREA_ALONG_OEB_INT);
    PhysicalProperties.addAreaAlongOebMax(builder, AREA_ALONG_OEB_MAX);
    PhysicalProperties.addOebMin(builder, OEB_MIN);
    PhysicalProperties.addOebInt(builder, OEB_INT);
    PhysicalProperties.addOebMax(builder, OEB_MAX);
    PhysicalProperties.addOebQc(builder, OEB_QC);
    PhysicalProperties.addOebQ3(builder, OEB_Q3);
    PhysicalProperties.addOebQ2(builder, OEB_Q2);
    PhysicalProperties.addOebQ1(builder, OEB_Q1);
    PhysicalProperties.addDryMass(builder, DRY_MASS);
    PhysicalProperties.addWetMass(builder, WET_MASS);
    PhysicalProperties.addAreaUnits(builder, AREA_UNITSOffset);
    PhysicalProperties.addMassUnits(builder, MASS_UNITSOffset);
    PhysicalProperties.addComment(builder, COMMENTOffset);
    return PhysicalProperties.endPhysicalProperties(builder);
  }

  public static void startPhysicalProperties(FlatBufferBuilder builder) { builder.startTable(21); }
  public static void addComment(FlatBufferBuilder builder, int COMMENTOffset) { builder.addOffset(0, COMMENTOffset, 0); }
  public static int createCommentVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startCommentVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addWetMass(FlatBufferBuilder builder, double WET_MASS) { builder.addDouble(1, WET_MASS, 0.0); }
  public static void addDryMass(FlatBufferBuilder builder, double DRY_MASS) { builder.addDouble(2, DRY_MASS, 0.0); }
  public static void addMassUnits(FlatBufferBuilder builder, int MASS_UNITSOffset) { builder.addOffset(3, MASS_UNITSOffset, 0); }
  public static void addOebQ1(FlatBufferBuilder builder, double OEB_Q1) { builder.addDouble(4, OEB_Q1, 0.0); }
  public static void addOebQ2(FlatBufferBuilder builder, double OEB_Q2) { builder.addDouble(5, OEB_Q2, 0.0); }
  public static void addOebQ3(FlatBufferBuilder builder, double OEB_Q3) { builder.addDouble(6, OEB_Q3, 0.0); }
  public static void addOebQc(FlatBufferBuilder builder, double OEB_QC) { builder.addDouble(7, OEB_QC, 0.0); }
  public static void addOebMax(FlatBufferBuilder builder, double OEB_MAX) { builder.addDouble(8, OEB_MAX, 0.0); }
  public static void addOebInt(FlatBufferBuilder builder, double OEB_INT) { builder.addDouble(9, OEB_INT, 0.0); }
  public static void addOebMin(FlatBufferBuilder builder, double OEB_MIN) { builder.addDouble(10, OEB_MIN, 0.0); }
  public static void addAreaAlongOebMax(FlatBufferBuilder builder, double AREA_ALONG_OEB_MAX) { builder.addDouble(11, AREA_ALONG_OEB_MAX, 0.0); }
  public static void addAreaAlongOebInt(FlatBufferBuilder builder, double AREA_ALONG_OEB_INT) { builder.addDouble(12, AREA_ALONG_OEB_INT, 0.0); }
  public static void addAreaAlongOebMin(FlatBufferBuilder builder, double AREA_ALONG_OEB_MIN) { builder.addDouble(13, AREA_ALONG_OEB_MIN, 0.0); }
  public static void addAreaUnits(FlatBufferBuilder builder, int AREA_UNITSOffset) { builder.addOffset(14, AREA_UNITSOffset, 0); }
  public static void addDragConstArea(FlatBufferBuilder builder, double DRAG_CONST_AREA) { builder.addDouble(15, DRAG_CONST_AREA, 0.0); }
  public static void addDragCoeffNom(FlatBufferBuilder builder, double DRAG_COEFF_NOM) { builder.addDouble(16, DRAG_COEFF_NOM, 0.0); }
  public static void addDragUncertainty(FlatBufferBuilder builder, double DRAG_UNCERTAINTY) { builder.addDouble(17, DRAG_UNCERTAINTY, 0.0); }
  public static void addSrpConstArea(FlatBufferBuilder builder, double SRP_CONST_AREA) { builder.addDouble(18, SRP_CONST_AREA, 0.0); }
  public static void addSolarRadCoeff(FlatBufferBuilder builder, double SOLAR_RAD_COEFF) { builder.addDouble(19, SOLAR_RAD_COEFF, 0.0); }
  public static void addSrpUncertainty(FlatBufferBuilder builder, double SRP_UNCERTAINTY) { builder.addDouble(20, SRP_UNCERTAINTY, 0.0); }
  public static int endPhysicalProperties(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public PhysicalProperties get(int j) { return get(new PhysicalProperties(), j); }
    public PhysicalProperties get(PhysicalProperties obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
