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
 * Orbit Mean Elements Message
 */
@SuppressWarnings("unused")
public final class OMM extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static OMM getRootAsOMM(ByteBuffer _bb) { return getRootAsOMM(_bb, new OMM()); }
  public static OMM getRootAsOMM(ByteBuffer _bb, OMM obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean OMMBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$OMM"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public OMM __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * CCSDS OMM Version 
   */
  public double CCSDS_OMM_VERS() { int o = __offset(4); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Creation Date (ISO 8601 UTC format) 
   */
  public String CREATION_DATE() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer CREATION_DATEAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer CREATION_DATEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  /**
   * Originator 
   */
  public String ORIGINATOR() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ORIGINATORAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }
  public ByteBuffer ORIGINATORInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 8, 1); }
  /**
   * Satellite Name(s)
   */
  public String OBJECT_NAME() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer OBJECT_NAMEAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public ByteBuffer OBJECT_NAMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 10, 1); }
  /**
   * International Designator (YYYY-NNNAAA)
   */
  public String OBJECT_ID() { int o = __offset(12); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer OBJECT_IDAsByteBuffer() { return __vector_as_bytebuffer(12, 1); }
  public ByteBuffer OBJECT_IDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 12, 1); }
  /**
   * Center Name (e.g. EARTH, MARS)
   */
  public String CENTER_NAME() { int o = __offset(14); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer CENTER_NAMEAsByteBuffer() { return __vector_as_bytebuffer(14, 1); }
  public ByteBuffer CENTER_NAMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 14, 1); }
  /**
   * Reference Frame
   * Typically TEMEOFDATE
   */
  public RFM REFERENCE_FRAME() { return REFERENCE_FRAME(new RFM()); }
  public RFM REFERENCE_FRAME(RFM obj) { int o = __offset(16); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  /**
   * Reference Frame Epoch (ISO 8601 UTC format)
   */
  public String REFERENCE_FRAME_EPOCH() { int o = __offset(18); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer REFERENCE_FRAME_EPOCHAsByteBuffer() { return __vector_as_bytebuffer(18, 1); }
  public ByteBuffer REFERENCE_FRAME_EPOCHInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 18, 1); }
  /**
   * Time System [M, UTC]
   */
  public byte TIME_SYSTEM() { int o = __offset(20); return o != 0 ? bb.get(o + bb_pos) : 11; }
  /**
   * Mean Element Theory
   */
  public byte MEAN_ELEMENT_THEORY() { int o = __offset(22); return o != 0 ? bb.get(o + bb_pos) : 0; }
  /**
   * COMMENT (O)
   */
  public String COMMENT() { int o = __offset(24); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer COMMENTAsByteBuffer() { return __vector_as_bytebuffer(24, 1); }
  public ByteBuffer COMMENTInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 24, 1); }
  /**
   * EPOCH of Mean Keplerian elements (ISO 8601 UTC format)
   */
  public String EPOCH() { int o = __offset(26); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer EPOCHAsByteBuffer() { return __vector_as_bytebuffer(26, 1); }
  public ByteBuffer EPOCHInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 26, 1); }
  /**
   * Semi-major axis in km or Mean Motion in rev/day
   */
  public double SEMI_MAJOR_AXIS() { int o = __offset(28); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Mean motion in rev/day if MEAN_ELEMENT_THEORY=SGP/SGP4 else unused
   */
  public double MEAN_MOTION() { int o = __offset(30); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Eccentricity (unitless)
   */
  public double ECCENTRICITY() { int o = __offset(32); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Inclination in degrees
   */
  public double INCLINATION() { int o = __offset(34); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * RA_OF_ASC_NODE in degrees
   */
  public double RA_OF_ASC_NODE() { int o = __offset(36); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * ARG_OF_PERICENTER in degrees
   */
  public double ARG_OF_PERICENTER() { int o = __offset(38); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * MEAN_ANOMALY in degrees
   */
  public double MEAN_ANOMALY() { int o = __offset(40); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * GM in km**3/s**2
   */
  public double GM() { int o = __offset(42); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * MASS in kg
   */
  public double MASS() { int o = __offset(44); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * SOLAR_RAD_AREA in m**2
   */
  public double SOLAR_RAD_AREA() { int o = __offset(46); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * SOLAR_RAD_COEFF (unitless)
   */
  public double SOLAR_RAD_COEFF() { int o = __offset(48); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * DRAG_AREA in m**2
   */
  public double DRAG_AREA() { int o = __offset(50); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * DRAG_COEFF (unitless)
   */
  public double DRAG_COEFF() { int o = __offset(52); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * TLE Related Parameters (Only if MEAN_ELEMENT_THEORY=SGP/SGP4)
   * EPHEMERIS_TYPE Default=0
   */
  public byte EPHEMERIS_TYPE() { int o = __offset(54); return o != 0 ? bb.get(o + bb_pos) : 1; }
  /**
   * CLASSIFICATION_TYPE Default=U
   */
  public String CLASSIFICATION_TYPE() { int o = __offset(56); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer CLASSIFICATION_TYPEAsByteBuffer() { return __vector_as_bytebuffer(56, 1); }
  public ByteBuffer CLASSIFICATION_TYPEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 56, 1); }
  /**
   * NORAD_CAT_ID (integer) [O if SGP/SGP4]
   */
  public long NORAD_CAT_ID() { int o = __offset(58); return o != 0 ? (long)bb.getInt(o + bb_pos) & 0xFFFFFFFFL : 0L; }
  /**
   * ELEMENT_SET_NO [O if SGP/SGP4]
   */
  public long ELEMENT_SET_NO() { int o = __offset(60); return o != 0 ? (long)bb.getInt(o + bb_pos) & 0xFFFFFFFFL : 0L; }
  /**
   * REV_AT_EPOCH [O if SGP/SGP4]
   */
  public double REV_AT_EPOCH() { int o = __offset(62); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * BSTAR in 1/Earth radii or BTERM in m²/kg depending on MEAN_ELEMENT_THEORY [C]
   */
  public double BSTAR() { int o = __offset(64); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * MEAN_MOTION_DOT in rev/day² [C if SGP or PPT3]
   */
  public double MEAN_MOTION_DOT() { int o = __offset(66); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * MEAN_MOTION_DDOT in rev/day³ if SGP/PPT3 or AGOM in m²/kg if SGP4-XP [C]
   */
  public double MEAN_MOTION_DDOT() { int o = __offset(68); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * Position/Velocity Covariance Matrix (6x6 Lower Triangular) [C if any covariance provided]
   * COV_REF_FRAME reference frame for covariance [C if covariance given]
   * Typically RSW
   */
  public RFM COV_REFERENCE_FRAME() { return COV_REFERENCE_FRAME(new RFM()); }
  public RFM COV_REFERENCE_FRAME(RFM obj) { int o = __offset(70); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  /**
   * CX_X [km**2]
   */
  public double CX_X() { int o = __offset(72); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CY_X [km**2]
   */
  public double CY_X() { int o = __offset(74); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CY_Y [km**2]
   */
  public double CY_Y() { int o = __offset(76); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CZ_X [km**2]
   */
  public double CZ_X() { int o = __offset(78); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CZ_Y [km**2]
   */
  public double CZ_Y() { int o = __offset(80); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CZ_Z [km**2]
   */
  public double CZ_Z() { int o = __offset(82); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CX_DOT_X [km**2/s]
   */
  public double CX_DOT_X() { int o = __offset(84); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CX_DOT_Y [km**2/s]
   */
  public double CX_DOT_Y() { int o = __offset(86); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CX_DOT_Z [km**2/s]
   */
  public double CX_DOT_Z() { int o = __offset(88); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CX_DOT_X_DOT [km**2/s**2]
   */
  public double CX_DOT_X_DOT() { int o = __offset(90); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CY_DOT_X [km**2/s]
   */
  public double CY_DOT_X() { int o = __offset(92); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CY_DOT_Y [km**2/s]
   */
  public double CY_DOT_Y() { int o = __offset(94); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CY_DOT_Z [km**2/s]
   */
  public double CY_DOT_Z() { int o = __offset(96); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CY_DOT_X_DOT [km**2/s**2]
   */
  public double CY_DOT_X_DOT() { int o = __offset(98); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CY_DOT_Y_DOT [km**2/s**2]
   */
  public double CY_DOT_Y_DOT() { int o = __offset(100); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CZ_DOT_X [km**2/s]
   */
  public double CZ_DOT_X() { int o = __offset(102); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CZ_DOT_Y [km**2/s]
   */
  public double CZ_DOT_Y() { int o = __offset(104); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CZ_DOT_Z [km**2/s]
   */
  public double CZ_DOT_Z() { int o = __offset(106); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CZ_DOT_X_DOT [km**2/s**2]
   */
  public double CZ_DOT_X_DOT() { int o = __offset(108); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CZ_DOT_Y_DOT [km**2/s**2]
   */
  public double CZ_DOT_Y_DOT() { int o = __offset(110); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * CZ_DOT_Z_DOT [km**2/s**2]
   */
  public double CZ_DOT_Z_DOT() { int o = __offset(112); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * USER_DEFINED_BIP_0044_TYPE [O, units per ICD]
   */
  public long USER_DEFINED_BIP_0044_TYPE() { int o = __offset(114); return o != 0 ? (long)bb.getInt(o + bb_pos) & 0xFFFFFFFFL : 0L; }
  /**
   * USER_DEFINED_OBJECT_DESIGNATOR [O, units per ICD]
   */
  public String USER_DEFINED_OBJECT_DESIGNATOR() { int o = __offset(116); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer USER_DEFINED_OBJECT_DESIGNATORAsByteBuffer() { return __vector_as_bytebuffer(116, 1); }
  public ByteBuffer USER_DEFINED_OBJECT_DESIGNATORInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 116, 1); }
  /**
   * USER_DEFINED_EARTH_MODEL [O, units per ICD]
   */
  public String USER_DEFINED_EARTH_MODEL() { int o = __offset(118); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer USER_DEFINED_EARTH_MODELAsByteBuffer() { return __vector_as_bytebuffer(118, 1); }
  public ByteBuffer USER_DEFINED_EARTH_MODELInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 118, 1); }
  /**
   * USER_DEFINED_EPOCH_TIMESTAMP [O, units per ICD]
   */
  public double USER_DEFINED_EPOCH_TIMESTAMP() { int o = __offset(120); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  /**
   * USER_DEFINED_MICROSECONDS [O, units per ICD]
   */
  public double USER_DEFINED_MICROSECONDS() { int o = __offset(122); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }

  public static int createOMM(FlatBufferBuilder builder,
      double CCSDS_OMM_VERS,
      int CREATION_DATEOffset,
      int ORIGINATOROffset,
      int OBJECT_NAMEOffset,
      int OBJECT_IDOffset,
      int CENTER_NAMEOffset,
      int REFERENCE_FRAMEOffset,
      int REFERENCE_FRAME_EPOCHOffset,
      byte TIME_SYSTEM,
      byte MEAN_ELEMENT_THEORY,
      int COMMENTOffset,
      int EPOCHOffset,
      double SEMI_MAJOR_AXIS,
      double MEAN_MOTION,
      double ECCENTRICITY,
      double INCLINATION,
      double RA_OF_ASC_NODE,
      double ARG_OF_PERICENTER,
      double MEAN_ANOMALY,
      double GM,
      double MASS,
      double SOLAR_RAD_AREA,
      double SOLAR_RAD_COEFF,
      double DRAG_AREA,
      double DRAG_COEFF,
      byte EPHEMERIS_TYPE,
      int CLASSIFICATION_TYPEOffset,
      long NORAD_CAT_ID,
      long ELEMENT_SET_NO,
      double REV_AT_EPOCH,
      double BSTAR,
      double MEAN_MOTION_DOT,
      double MEAN_MOTION_DDOT,
      int COV_REFERENCE_FRAMEOffset,
      double CX_X,
      double CY_X,
      double CY_Y,
      double CZ_X,
      double CZ_Y,
      double CZ_Z,
      double CX_DOT_X,
      double CX_DOT_Y,
      double CX_DOT_Z,
      double CX_DOT_X_DOT,
      double CY_DOT_X,
      double CY_DOT_Y,
      double CY_DOT_Z,
      double CY_DOT_X_DOT,
      double CY_DOT_Y_DOT,
      double CZ_DOT_X,
      double CZ_DOT_Y,
      double CZ_DOT_Z,
      double CZ_DOT_X_DOT,
      double CZ_DOT_Y_DOT,
      double CZ_DOT_Z_DOT,
      long USER_DEFINED_BIP_0044_TYPE,
      int USER_DEFINED_OBJECT_DESIGNATOROffset,
      int USER_DEFINED_EARTH_MODELOffset,
      double USER_DEFINED_EPOCH_TIMESTAMP,
      double USER_DEFINED_MICROSECONDS) {
    builder.startTable(60);
    OMM.addUserDefinedMicroseconds(builder, USER_DEFINED_MICROSECONDS);
    OMM.addUserDefinedEpochTimestamp(builder, USER_DEFINED_EPOCH_TIMESTAMP);
    OMM.addCzDotZDot(builder, CZ_DOT_Z_DOT);
    OMM.addCzDotYDot(builder, CZ_DOT_Y_DOT);
    OMM.addCzDotXDot(builder, CZ_DOT_X_DOT);
    OMM.addCzDotZ(builder, CZ_DOT_Z);
    OMM.addCzDotY(builder, CZ_DOT_Y);
    OMM.addCzDotX(builder, CZ_DOT_X);
    OMM.addCyDotYDot(builder, CY_DOT_Y_DOT);
    OMM.addCyDotXDot(builder, CY_DOT_X_DOT);
    OMM.addCyDotZ(builder, CY_DOT_Z);
    OMM.addCyDotY(builder, CY_DOT_Y);
    OMM.addCyDotX(builder, CY_DOT_X);
    OMM.addCxDotXDot(builder, CX_DOT_X_DOT);
    OMM.addCxDotZ(builder, CX_DOT_Z);
    OMM.addCxDotY(builder, CX_DOT_Y);
    OMM.addCxDotX(builder, CX_DOT_X);
    OMM.addCzZ(builder, CZ_Z);
    OMM.addCzY(builder, CZ_Y);
    OMM.addCzX(builder, CZ_X);
    OMM.addCyY(builder, CY_Y);
    OMM.addCyX(builder, CY_X);
    OMM.addCxX(builder, CX_X);
    OMM.addMeanMotionDdot(builder, MEAN_MOTION_DDOT);
    OMM.addMeanMotionDot(builder, MEAN_MOTION_DOT);
    OMM.addBstar(builder, BSTAR);
    OMM.addRevAtEpoch(builder, REV_AT_EPOCH);
    OMM.addDragCoeff(builder, DRAG_COEFF);
    OMM.addDragArea(builder, DRAG_AREA);
    OMM.addSolarRadCoeff(builder, SOLAR_RAD_COEFF);
    OMM.addSolarRadArea(builder, SOLAR_RAD_AREA);
    OMM.addMass(builder, MASS);
    OMM.addGm(builder, GM);
    OMM.addMeanAnomaly(builder, MEAN_ANOMALY);
    OMM.addArgOfPericenter(builder, ARG_OF_PERICENTER);
    OMM.addRaOfAscNode(builder, RA_OF_ASC_NODE);
    OMM.addInclination(builder, INCLINATION);
    OMM.addEccentricity(builder, ECCENTRICITY);
    OMM.addMeanMotion(builder, MEAN_MOTION);
    OMM.addSemiMajorAxis(builder, SEMI_MAJOR_AXIS);
    OMM.addCcsdsOmmVers(builder, CCSDS_OMM_VERS);
    OMM.addUserDefinedEarthModel(builder, USER_DEFINED_EARTH_MODELOffset);
    OMM.addUserDefinedObjectDesignator(builder, USER_DEFINED_OBJECT_DESIGNATOROffset);
    OMM.addUserDefinedBip0044Type(builder, USER_DEFINED_BIP_0044_TYPE);
    OMM.addCovReferenceFrame(builder, COV_REFERENCE_FRAMEOffset);
    OMM.addElementSetNo(builder, ELEMENT_SET_NO);
    OMM.addNoradCatId(builder, NORAD_CAT_ID);
    OMM.addClassificationType(builder, CLASSIFICATION_TYPEOffset);
    OMM.addEpoch(builder, EPOCHOffset);
    OMM.addComment(builder, COMMENTOffset);
    OMM.addReferenceFrameEpoch(builder, REFERENCE_FRAME_EPOCHOffset);
    OMM.addReferenceFrame(builder, REFERENCE_FRAMEOffset);
    OMM.addCenterName(builder, CENTER_NAMEOffset);
    OMM.addObjectId(builder, OBJECT_IDOffset);
    OMM.addObjectName(builder, OBJECT_NAMEOffset);
    OMM.addOriginator(builder, ORIGINATOROffset);
    OMM.addCreationDate(builder, CREATION_DATEOffset);
    OMM.addEphemerisType(builder, EPHEMERIS_TYPE);
    OMM.addMeanElementTheory(builder, MEAN_ELEMENT_THEORY);
    OMM.addTimeSystem(builder, TIME_SYSTEM);
    return OMM.endOMM(builder);
  }

  public static void startOMM(FlatBufferBuilder builder) { builder.startTable(60); }
  public static void addCcsdsOmmVers(FlatBufferBuilder builder, double CCSDS_OMM_VERS) { builder.addDouble(0, CCSDS_OMM_VERS, 0.0); }
  public static void addCreationDate(FlatBufferBuilder builder, int CREATION_DATEOffset) { builder.addOffset(1, CREATION_DATEOffset, 0); }
  public static void addOriginator(FlatBufferBuilder builder, int ORIGINATOROffset) { builder.addOffset(2, ORIGINATOROffset, 0); }
  public static void addObjectName(FlatBufferBuilder builder, int OBJECT_NAMEOffset) { builder.addOffset(3, OBJECT_NAMEOffset, 0); }
  public static void addObjectId(FlatBufferBuilder builder, int OBJECT_IDOffset) { builder.addOffset(4, OBJECT_IDOffset, 0); }
  public static void addCenterName(FlatBufferBuilder builder, int CENTER_NAMEOffset) { builder.addOffset(5, CENTER_NAMEOffset, 0); }
  public static void addReferenceFrame(FlatBufferBuilder builder, int REFERENCE_FRAMEOffset) { builder.addOffset(6, REFERENCE_FRAMEOffset, 0); }
  public static void addReferenceFrameEpoch(FlatBufferBuilder builder, int REFERENCE_FRAME_EPOCHOffset) { builder.addOffset(7, REFERENCE_FRAME_EPOCHOffset, 0); }
  public static void addTimeSystem(FlatBufferBuilder builder, byte TIME_SYSTEM) { builder.addByte(8, TIME_SYSTEM, 11); }
  public static void addMeanElementTheory(FlatBufferBuilder builder, byte MEAN_ELEMENT_THEORY) { builder.addByte(9, MEAN_ELEMENT_THEORY, 0); }
  public static void addComment(FlatBufferBuilder builder, int COMMENTOffset) { builder.addOffset(10, COMMENTOffset, 0); }
  public static void addEpoch(FlatBufferBuilder builder, int EPOCHOffset) { builder.addOffset(11, EPOCHOffset, 0); }
  public static void addSemiMajorAxis(FlatBufferBuilder builder, double SEMI_MAJOR_AXIS) { builder.addDouble(12, SEMI_MAJOR_AXIS, 0.0); }
  public static void addMeanMotion(FlatBufferBuilder builder, double MEAN_MOTION) { builder.addDouble(13, MEAN_MOTION, 0.0); }
  public static void addEccentricity(FlatBufferBuilder builder, double ECCENTRICITY) { builder.addDouble(14, ECCENTRICITY, 0.0); }
  public static void addInclination(FlatBufferBuilder builder, double INCLINATION) { builder.addDouble(15, INCLINATION, 0.0); }
  public static void addRaOfAscNode(FlatBufferBuilder builder, double RA_OF_ASC_NODE) { builder.addDouble(16, RA_OF_ASC_NODE, 0.0); }
  public static void addArgOfPericenter(FlatBufferBuilder builder, double ARG_OF_PERICENTER) { builder.addDouble(17, ARG_OF_PERICENTER, 0.0); }
  public static void addMeanAnomaly(FlatBufferBuilder builder, double MEAN_ANOMALY) { builder.addDouble(18, MEAN_ANOMALY, 0.0); }
  public static void addGm(FlatBufferBuilder builder, double GM) { builder.addDouble(19, GM, 0.0); }
  public static void addMass(FlatBufferBuilder builder, double MASS) { builder.addDouble(20, MASS, 0.0); }
  public static void addSolarRadArea(FlatBufferBuilder builder, double SOLAR_RAD_AREA) { builder.addDouble(21, SOLAR_RAD_AREA, 0.0); }
  public static void addSolarRadCoeff(FlatBufferBuilder builder, double SOLAR_RAD_COEFF) { builder.addDouble(22, SOLAR_RAD_COEFF, 0.0); }
  public static void addDragArea(FlatBufferBuilder builder, double DRAG_AREA) { builder.addDouble(23, DRAG_AREA, 0.0); }
  public static void addDragCoeff(FlatBufferBuilder builder, double DRAG_COEFF) { builder.addDouble(24, DRAG_COEFF, 0.0); }
  public static void addEphemerisType(FlatBufferBuilder builder, byte EPHEMERIS_TYPE) { builder.addByte(25, EPHEMERIS_TYPE, 1); }
  public static void addClassificationType(FlatBufferBuilder builder, int CLASSIFICATION_TYPEOffset) { builder.addOffset(26, CLASSIFICATION_TYPEOffset, 0); }
  public static void addNoradCatId(FlatBufferBuilder builder, long NORAD_CAT_ID) { builder.addInt(27, (int) NORAD_CAT_ID, (int) 0L); }
  public static void addElementSetNo(FlatBufferBuilder builder, long ELEMENT_SET_NO) { builder.addInt(28, (int) ELEMENT_SET_NO, (int) 0L); }
  public static void addRevAtEpoch(FlatBufferBuilder builder, double REV_AT_EPOCH) { builder.addDouble(29, REV_AT_EPOCH, 0.0); }
  public static void addBstar(FlatBufferBuilder builder, double BSTAR) { builder.addDouble(30, BSTAR, 0.0); }
  public static void addMeanMotionDot(FlatBufferBuilder builder, double MEAN_MOTION_DOT) { builder.addDouble(31, MEAN_MOTION_DOT, 0.0); }
  public static void addMeanMotionDdot(FlatBufferBuilder builder, double MEAN_MOTION_DDOT) { builder.addDouble(32, MEAN_MOTION_DDOT, 0.0); }
  public static void addCovReferenceFrame(FlatBufferBuilder builder, int COV_REFERENCE_FRAMEOffset) { builder.addOffset(33, COV_REFERENCE_FRAMEOffset, 0); }
  public static void addCxX(FlatBufferBuilder builder, double CX_X) { builder.addDouble(34, CX_X, 0.0); }
  public static void addCyX(FlatBufferBuilder builder, double CY_X) { builder.addDouble(35, CY_X, 0.0); }
  public static void addCyY(FlatBufferBuilder builder, double CY_Y) { builder.addDouble(36, CY_Y, 0.0); }
  public static void addCzX(FlatBufferBuilder builder, double CZ_X) { builder.addDouble(37, CZ_X, 0.0); }
  public static void addCzY(FlatBufferBuilder builder, double CZ_Y) { builder.addDouble(38, CZ_Y, 0.0); }
  public static void addCzZ(FlatBufferBuilder builder, double CZ_Z) { builder.addDouble(39, CZ_Z, 0.0); }
  public static void addCxDotX(FlatBufferBuilder builder, double CX_DOT_X) { builder.addDouble(40, CX_DOT_X, 0.0); }
  public static void addCxDotY(FlatBufferBuilder builder, double CX_DOT_Y) { builder.addDouble(41, CX_DOT_Y, 0.0); }
  public static void addCxDotZ(FlatBufferBuilder builder, double CX_DOT_Z) { builder.addDouble(42, CX_DOT_Z, 0.0); }
  public static void addCxDotXDot(FlatBufferBuilder builder, double CX_DOT_X_DOT) { builder.addDouble(43, CX_DOT_X_DOT, 0.0); }
  public static void addCyDotX(FlatBufferBuilder builder, double CY_DOT_X) { builder.addDouble(44, CY_DOT_X, 0.0); }
  public static void addCyDotY(FlatBufferBuilder builder, double CY_DOT_Y) { builder.addDouble(45, CY_DOT_Y, 0.0); }
  public static void addCyDotZ(FlatBufferBuilder builder, double CY_DOT_Z) { builder.addDouble(46, CY_DOT_Z, 0.0); }
  public static void addCyDotXDot(FlatBufferBuilder builder, double CY_DOT_X_DOT) { builder.addDouble(47, CY_DOT_X_DOT, 0.0); }
  public static void addCyDotYDot(FlatBufferBuilder builder, double CY_DOT_Y_DOT) { builder.addDouble(48, CY_DOT_Y_DOT, 0.0); }
  public static void addCzDotX(FlatBufferBuilder builder, double CZ_DOT_X) { builder.addDouble(49, CZ_DOT_X, 0.0); }
  public static void addCzDotY(FlatBufferBuilder builder, double CZ_DOT_Y) { builder.addDouble(50, CZ_DOT_Y, 0.0); }
  public static void addCzDotZ(FlatBufferBuilder builder, double CZ_DOT_Z) { builder.addDouble(51, CZ_DOT_Z, 0.0); }
  public static void addCzDotXDot(FlatBufferBuilder builder, double CZ_DOT_X_DOT) { builder.addDouble(52, CZ_DOT_X_DOT, 0.0); }
  public static void addCzDotYDot(FlatBufferBuilder builder, double CZ_DOT_Y_DOT) { builder.addDouble(53, CZ_DOT_Y_DOT, 0.0); }
  public static void addCzDotZDot(FlatBufferBuilder builder, double CZ_DOT_Z_DOT) { builder.addDouble(54, CZ_DOT_Z_DOT, 0.0); }
  public static void addUserDefinedBip0044Type(FlatBufferBuilder builder, long USER_DEFINED_BIP_0044_TYPE) { builder.addInt(55, (int) USER_DEFINED_BIP_0044_TYPE, (int) 0L); }
  public static void addUserDefinedObjectDesignator(FlatBufferBuilder builder, int USER_DEFINED_OBJECT_DESIGNATOROffset) { builder.addOffset(56, USER_DEFINED_OBJECT_DESIGNATOROffset, 0); }
  public static void addUserDefinedEarthModel(FlatBufferBuilder builder, int USER_DEFINED_EARTH_MODELOffset) { builder.addOffset(57, USER_DEFINED_EARTH_MODELOffset, 0); }
  public static void addUserDefinedEpochTimestamp(FlatBufferBuilder builder, double USER_DEFINED_EPOCH_TIMESTAMP) { builder.addDouble(58, USER_DEFINED_EPOCH_TIMESTAMP, 0.0); }
  public static void addUserDefinedMicroseconds(FlatBufferBuilder builder, double USER_DEFINED_MICROSECONDS) { builder.addDouble(59, USER_DEFINED_MICROSECONDS, 0.0); }
  public static int endOMM(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishOMMBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "$OMM"); }
  public static void finishSizePrefixedOMMBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "$OMM"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public OMM get(int j) { return get(new OMM(), j); }
    public OMM get(OMM obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

