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
 * Electro-Optical Observation
 */
@SuppressWarnings("unused")
public final class EOO extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_23_3_3(); }
  public static EOO getRootAsEOO(ByteBuffer _bb) { return getRootAsEOO(_bb, new EOO()); }
  public static EOO getRootAsEOO(ByteBuffer _bb, EOO obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean EOOBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "$EOO"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public EOO __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  /**
   * Unique identifier for Earth Observation Observation
   */
  public String EOBSERVATION_ID() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer EOBSERVATION_IDAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer EOBSERVATION_IDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  /**
   * Classification marking of the data
   */
  public String CLASSIFICATION() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer CLASSIFICATIONAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer CLASSIFICATIONInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  /**
   * Observation time in UTC
   */
  public String OB_TIME() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer OB_TIMEAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }
  public ByteBuffer OB_TIMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 8, 1); }
  /**
   * Quality of the correlation
   */
  public float CORR_QUALITY() { int o = __offset(10); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Identifier for the satellite on orbit
   */
  public String ID_ON_ORBIT() { int o = __offset(12); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ID_ON_ORBITAsByteBuffer() { return __vector_as_bytebuffer(12, 1); }
  public ByteBuffer ID_ON_ORBITInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 12, 1); }
  /**
   * Identifier for the sensor
   */
  public String SENSOR_ID() { int o = __offset(14); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer SENSOR_IDAsByteBuffer() { return __vector_as_bytebuffer(14, 1); }
  public ByteBuffer SENSOR_IDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 14, 1); }
  /**
   * Method of data collection
   */
  public String COLLECT_METHOD() { int o = __offset(16); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer COLLECT_METHODAsByteBuffer() { return __vector_as_bytebuffer(16, 1); }
  public ByteBuffer COLLECT_METHODInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 16, 1); }
  /**
   * NORAD catalog identifier for the satellite
   */
  public int NORAD_CAT_ID() { int o = __offset(18); return o != 0 ? bb.getInt(o + bb_pos) : 0; }
  /**
   * Identifier for the task
   */
  public String TASK_ID() { int o = __offset(20); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer TASK_IDAsByteBuffer() { return __vector_as_bytebuffer(20, 1); }
  public ByteBuffer TASK_IDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 20, 1); }
  /**
   * Identifier for the transaction
   */
  public String TRANSACTION_ID() { int o = __offset(22); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer TRANSACTION_IDAsByteBuffer() { return __vector_as_bytebuffer(22, 1); }
  public ByteBuffer TRANSACTION_IDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 22, 1); }
  /**
   * Identifier for the track
   */
  public String TRACK_ID() { int o = __offset(24); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer TRACK_IDAsByteBuffer() { return __vector_as_bytebuffer(24, 1); }
  public ByteBuffer TRACK_IDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 24, 1); }
  /**
   * Position of the observation
   */
  public String OB_POSITION() { int o = __offset(26); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer OB_POSITIONAsByteBuffer() { return __vector_as_bytebuffer(26, 1); }
  public ByteBuffer OB_POSITIONInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 26, 1); }
  /**
   * Original object identifier
   */
  public String ORIG_OBJECT_ID() { int o = __offset(28); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ORIG_OBJECT_IDAsByteBuffer() { return __vector_as_bytebuffer(28, 1); }
  public ByteBuffer ORIG_OBJECT_IDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 28, 1); }
  /**
   * Original sensor identifier
   */
  public String ORIG_SENSOR_ID() { int o = __offset(30); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ORIG_SENSOR_IDAsByteBuffer() { return __vector_as_bytebuffer(30, 1); }
  public ByteBuffer ORIG_SENSOR_IDInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 30, 1); }
  /**
   * Universal Coordinated Time flag
   */
  public boolean UCT() { int o = __offset(32); return o != 0 ? 0!=bb.get(o + bb_pos) : false; }
  /**
   * Azimuth angle
   */
  public float AZIMUTH() { int o = __offset(34); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in azimuth angle
   */
  public float AZIMUTH_UNC() { int o = __offset(36); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Bias in azimuth angle
   */
  public float AZIMUTH_BIAS() { int o = __offset(38); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Rate of change in azimuth
   */
  public float AZIMUTH_RATE() { int o = __offset(40); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Elevation angle
   */
  public float ELEVATION() { int o = __offset(42); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in elevation angle
   */
  public float ELEVATION_UNC() { int o = __offset(44); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Bias in elevation angle
   */
  public float ELEVATION_BIAS() { int o = __offset(46); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Rate of change in elevation
   */
  public float ELEVATION_RATE() { int o = __offset(48); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Range to the target
   */
  public float RANGE() { int o = __offset(50); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in range
   */
  public float RANGE_UNC() { int o = __offset(52); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Bias in range measurement
   */
  public float RANGE_BIAS() { int o = __offset(54); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Rate of change in range
   */
  public float RANGE_RATE() { int o = __offset(56); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in range rate
   */
  public float RANGE_RATE_UNC() { int o = __offset(58); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Right ascension
   */
  public float RA() { int o = __offset(60); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Rate of change in right ascension
   */
  public float RA_RATE() { int o = __offset(62); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in right ascension
   */
  public float RA_UNC() { int o = __offset(64); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Bias in right ascension
   */
  public float RA_BIAS() { int o = __offset(66); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Declination angle
   */
  public float DECLINATION() { int o = __offset(68); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Rate of change in declination
   */
  public float DECLINATION_RATE() { int o = __offset(70); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in declination
   */
  public float DECLINATION_UNC() { int o = __offset(72); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Bias in declination
   */
  public float DECLINATION_BIAS() { int o = __offset(74); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * X-component of line-of-sight vector
   */
  public float LOSX() { int o = __offset(76); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Y-component of line-of-sight vector
   */
  public float LOSY() { int o = __offset(78); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Z-component of line-of-sight vector
   */
  public float LOSZ() { int o = __offset(80); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in line-of-sight vector
   */
  public float LOS_UNC() { int o = __offset(82); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * X-component of line-of-sight velocity
   */
  public float LOSXVEL() { int o = __offset(84); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Y-component of line-of-sight velocity
   */
  public float LOSYVEL() { int o = __offset(86); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Z-component of line-of-sight velocity
   */
  public float LOSZVEL() { int o = __offset(88); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Latitude of sensor
   */
  public float SENLAT() { int o = __offset(90); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Longitude of sensor
   */
  public float SENLON() { int o = __offset(92); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Altitude of sensor
   */
  public float SENALT() { int o = __offset(94); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * X-coordinate of sensor position
   */
  public float SENX() { int o = __offset(96); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Y-coordinate of sensor position
   */
  public float SENY() { int o = __offset(98); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Z-coordinate of sensor position
   */
  public float SENZ() { int o = __offset(100); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Number of fields of view
   */
  public int FOV_COUNT() { int o = __offset(102); return o != 0 ? bb.getInt(o + bb_pos) : 0; }
  /**
   * Duration of the exposure
   */
  public float EXP_DURATION() { int o = __offset(104); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Zero-point displacement
   */
  public float ZEROPTD() { int o = __offset(106); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Net object signal
   */
  public float NET_OBJ_SIG() { int o = __offset(108); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in net object signal
   */
  public float NET_OBJ_SIG_UNC() { int o = __offset(110); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Magnitude of the observation
   */
  public float MAG() { int o = __offset(112); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in magnitude
   */
  public float MAG_UNC() { int o = __offset(114); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Normalized range for magnitude
   */
  public float MAG_NORM_RANGE() { int o = __offset(116); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Geocentric latitude
   */
  public float GEOLAT() { int o = __offset(118); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Geocentric longitude
   */
  public float GEOLON() { int o = __offset(120); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Geocentric altitude
   */
  public float GEOALT() { int o = __offset(122); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Geocentric range
   */
  public float GEORANGE() { int o = __offset(124); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Sky background level
   */
  public float SKY_BKGRND() { int o = __offset(126); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Primary extinction
   */
  public float PRIMARY_EXTINCTION() { int o = __offset(128); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Uncertainty in primary extinction
   */
  public float PRIMARY_EXTINCTION_UNC() { int o = __offset(130); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Solar phase angle
   */
  public float SOLAR_PHASE_ANGLE() { int o = __offset(132); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Solar equatorial phase angle
   */
  public float SOLAR_EQ_PHASE_ANGLE() { int o = __offset(134); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Solar declination angle
   */
  public float SOLAR_DEC_ANGLE() { int o = __offset(136); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Shutter delay
   */
  public float SHUTTER_DELAY() { int o = __offset(138); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Timing bias
   */
  public float TIMING_BIAS() { int o = __offset(140); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * URI of the raw data file
   */
  public String RAW_FILE_URI() { int o = __offset(142); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer RAW_FILE_URIAsByteBuffer() { return __vector_as_bytebuffer(142, 1); }
  public ByteBuffer RAW_FILE_URIInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 142, 1); }
  /**
   * Intensity of the observation
   */
  public float INTENSITY() { int o = __offset(144); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Background intensity
   */
  public float BG_INTENSITY() { int o = __offset(146); return o != 0 ? bb.getFloat(o + bb_pos) : 0.0f; }
  /**
   * Descriptor of the provided data
   */
  public String DESCRIPTOR() { int o = __offset(148); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer DESCRIPTORAsByteBuffer() { return __vector_as_bytebuffer(148, 1); }
  public ByteBuffer DESCRIPTORInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 148, 1); }
  /**
   * Source of the data
   */
  public String SOURCE() { int o = __offset(150); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer SOURCEAsByteBuffer() { return __vector_as_bytebuffer(150, 1); }
  public ByteBuffer SOURCEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 150, 1); }
  /**
   * Origin of the data
   */
  public String ORIGIN() { int o = __offset(152); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ORIGINAsByteBuffer() { return __vector_as_bytebuffer(152, 1); }
  public ByteBuffer ORIGINInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 152, 1); }
  /**
   * Mode of the data
   */
  public String DATA_MODE() { int o = __offset(154); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer DATA_MODEAsByteBuffer() { return __vector_as_bytebuffer(154, 1); }
  public ByteBuffer DATA_MODEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 154, 1); }
  /**
   * Creation time of the record
   */
  public String CREATED_AT() { int o = __offset(156); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer CREATED_ATAsByteBuffer() { return __vector_as_bytebuffer(156, 1); }
  public ByteBuffer CREATED_ATInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 156, 1); }
  /**
   * User who created the record
   */
  public String CREATED_BY() { int o = __offset(158); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer CREATED_BYAsByteBuffer() { return __vector_as_bytebuffer(158, 1); }
  public ByteBuffer CREATED_BYInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 158, 1); }
  /**
   * Reference frame of the observation
   */
  public byte REFERENCE_FRAME() { int o = __offset(160); return o != 0 ? bb.get(o + bb_pos) : 0; }
  /**
   * Reference frame of the sensor
   */
  public String SEN_REFERENCE_FRAME() { int o = __offset(162); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer SEN_REFERENCE_FRAMEAsByteBuffer() { return __vector_as_bytebuffer(162, 1); }
  public ByteBuffer SEN_REFERENCE_FRAMEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 162, 1); }
  /**
   * Flag for umbra (total eclipse)
   */
  public boolean UMBRA() { int o = __offset(164); return o != 0 ? 0!=bb.get(o + bb_pos) : false; }
  /**
   * Flag for penumbra (partial eclipse)
   */
  public boolean PENUMBRA() { int o = __offset(166); return o != 0 ? 0!=bb.get(o + bb_pos) : false; }
  /**
   * Original network identifier
   */
  public String ORIG_NETWORK() { int o = __offset(168); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ORIG_NETWORKAsByteBuffer() { return __vector_as_bytebuffer(168, 1); }
  public ByteBuffer ORIG_NETWORKInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 168, 1); }
  /**
   * Data link source
   */
  public String SOURCE_DL() { int o = __offset(170); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer SOURCE_DLAsByteBuffer() { return __vector_as_bytebuffer(170, 1); }
  public ByteBuffer SOURCE_DLInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 170, 1); }
  /**
   * Type of the observation
   */
  public String TYPE() { int o = __offset(172); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer TYPEAsByteBuffer() { return __vector_as_bytebuffer(172, 1); }
  public ByteBuffer TYPEInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 172, 1); }

  public static int createEOO(FlatBufferBuilder builder,
      int EOBSERVATION_IDOffset,
      int CLASSIFICATIONOffset,
      int OB_TIMEOffset,
      float CORR_QUALITY,
      int ID_ON_ORBITOffset,
      int SENSOR_IDOffset,
      int COLLECT_METHODOffset,
      int NORAD_CAT_ID,
      int TASK_IDOffset,
      int TRANSACTION_IDOffset,
      int TRACK_IDOffset,
      int OB_POSITIONOffset,
      int ORIG_OBJECT_IDOffset,
      int ORIG_SENSOR_IDOffset,
      boolean UCT,
      float AZIMUTH,
      float AZIMUTH_UNC,
      float AZIMUTH_BIAS,
      float AZIMUTH_RATE,
      float ELEVATION,
      float ELEVATION_UNC,
      float ELEVATION_BIAS,
      float ELEVATION_RATE,
      float RANGE,
      float RANGE_UNC,
      float RANGE_BIAS,
      float RANGE_RATE,
      float RANGE_RATE_UNC,
      float RA,
      float RA_RATE,
      float RA_UNC,
      float RA_BIAS,
      float DECLINATION,
      float DECLINATION_RATE,
      float DECLINATION_UNC,
      float DECLINATION_BIAS,
      float LOSX,
      float LOSY,
      float LOSZ,
      float LOS_UNC,
      float LOSXVEL,
      float LOSYVEL,
      float LOSZVEL,
      float SENLAT,
      float SENLON,
      float SENALT,
      float SENX,
      float SENY,
      float SENZ,
      int FOV_COUNT,
      float EXP_DURATION,
      float ZEROPTD,
      float NET_OBJ_SIG,
      float NET_OBJ_SIG_UNC,
      float MAG,
      float MAG_UNC,
      float MAG_NORM_RANGE,
      float GEOLAT,
      float GEOLON,
      float GEOALT,
      float GEORANGE,
      float SKY_BKGRND,
      float PRIMARY_EXTINCTION,
      float PRIMARY_EXTINCTION_UNC,
      float SOLAR_PHASE_ANGLE,
      float SOLAR_EQ_PHASE_ANGLE,
      float SOLAR_DEC_ANGLE,
      float SHUTTER_DELAY,
      float TIMING_BIAS,
      int RAW_FILE_URIOffset,
      float INTENSITY,
      float BG_INTENSITY,
      int DESCRIPTOROffset,
      int SOURCEOffset,
      int ORIGINOffset,
      int DATA_MODEOffset,
      int CREATED_ATOffset,
      int CREATED_BYOffset,
      byte REFERENCE_FRAME,
      int SEN_REFERENCE_FRAMEOffset,
      boolean UMBRA,
      boolean PENUMBRA,
      int ORIG_NETWORKOffset,
      int SOURCE_DLOffset,
      int TYPEOffset) {
    builder.startTable(85);
    EOO.addType(builder, TYPEOffset);
    EOO.addSourceDl(builder, SOURCE_DLOffset);
    EOO.addOrigNetwork(builder, ORIG_NETWORKOffset);
    EOO.addSenReferenceFrame(builder, SEN_REFERENCE_FRAMEOffset);
    EOO.addCreatedBy(builder, CREATED_BYOffset);
    EOO.addCreatedAt(builder, CREATED_ATOffset);
    EOO.addDataMode(builder, DATA_MODEOffset);
    EOO.addOrigin(builder, ORIGINOffset);
    EOO.addSource(builder, SOURCEOffset);
    EOO.addDescriptor(builder, DESCRIPTOROffset);
    EOO.addBgIntensity(builder, BG_INTENSITY);
    EOO.addIntensity(builder, INTENSITY);
    EOO.addRawFileUri(builder, RAW_FILE_URIOffset);
    EOO.addTimingBias(builder, TIMING_BIAS);
    EOO.addShutterDelay(builder, SHUTTER_DELAY);
    EOO.addSolarDecAngle(builder, SOLAR_DEC_ANGLE);
    EOO.addSolarEqPhaseAngle(builder, SOLAR_EQ_PHASE_ANGLE);
    EOO.addSolarPhaseAngle(builder, SOLAR_PHASE_ANGLE);
    EOO.addPrimaryExtinctionUnc(builder, PRIMARY_EXTINCTION_UNC);
    EOO.addPrimaryExtinction(builder, PRIMARY_EXTINCTION);
    EOO.addSkyBkgrnd(builder, SKY_BKGRND);
    EOO.addGeorange(builder, GEORANGE);
    EOO.addGeoalt(builder, GEOALT);
    EOO.addGeolon(builder, GEOLON);
    EOO.addGeolat(builder, GEOLAT);
    EOO.addMagNormRange(builder, MAG_NORM_RANGE);
    EOO.addMagUnc(builder, MAG_UNC);
    EOO.addMag(builder, MAG);
    EOO.addNetObjSigUnc(builder, NET_OBJ_SIG_UNC);
    EOO.addNetObjSig(builder, NET_OBJ_SIG);
    EOO.addZeroptd(builder, ZEROPTD);
    EOO.addExpDuration(builder, EXP_DURATION);
    EOO.addFovCount(builder, FOV_COUNT);
    EOO.addSenz(builder, SENZ);
    EOO.addSeny(builder, SENY);
    EOO.addSenx(builder, SENX);
    EOO.addSenalt(builder, SENALT);
    EOO.addSenlon(builder, SENLON);
    EOO.addSenlat(builder, SENLAT);
    EOO.addLoszvel(builder, LOSZVEL);
    EOO.addLosyvel(builder, LOSYVEL);
    EOO.addLosxvel(builder, LOSXVEL);
    EOO.addLosUnc(builder, LOS_UNC);
    EOO.addLosz(builder, LOSZ);
    EOO.addLosy(builder, LOSY);
    EOO.addLosx(builder, LOSX);
    EOO.addDeclinationBias(builder, DECLINATION_BIAS);
    EOO.addDeclinationUnc(builder, DECLINATION_UNC);
    EOO.addDeclinationRate(builder, DECLINATION_RATE);
    EOO.addDeclination(builder, DECLINATION);
    EOO.addRaBias(builder, RA_BIAS);
    EOO.addRaUnc(builder, RA_UNC);
    EOO.addRaRate(builder, RA_RATE);
    EOO.addRa(builder, RA);
    EOO.addRangeRateUnc(builder, RANGE_RATE_UNC);
    EOO.addRangeRate(builder, RANGE_RATE);
    EOO.addRangeBias(builder, RANGE_BIAS);
    EOO.addRangeUnc(builder, RANGE_UNC);
    EOO.addRange(builder, RANGE);
    EOO.addElevationRate(builder, ELEVATION_RATE);
    EOO.addElevationBias(builder, ELEVATION_BIAS);
    EOO.addElevationUnc(builder, ELEVATION_UNC);
    EOO.addElevation(builder, ELEVATION);
    EOO.addAzimuthRate(builder, AZIMUTH_RATE);
    EOO.addAzimuthBias(builder, AZIMUTH_BIAS);
    EOO.addAzimuthUnc(builder, AZIMUTH_UNC);
    EOO.addAzimuth(builder, AZIMUTH);
    EOO.addOrigSensorId(builder, ORIG_SENSOR_IDOffset);
    EOO.addOrigObjectId(builder, ORIG_OBJECT_IDOffset);
    EOO.addObPosition(builder, OB_POSITIONOffset);
    EOO.addTrackId(builder, TRACK_IDOffset);
    EOO.addTransactionId(builder, TRANSACTION_IDOffset);
    EOO.addTaskId(builder, TASK_IDOffset);
    EOO.addNoradCatId(builder, NORAD_CAT_ID);
    EOO.addCollectMethod(builder, COLLECT_METHODOffset);
    EOO.addSensorId(builder, SENSOR_IDOffset);
    EOO.addIdOnOrbit(builder, ID_ON_ORBITOffset);
    EOO.addCorrQuality(builder, CORR_QUALITY);
    EOO.addObTime(builder, OB_TIMEOffset);
    EOO.addClassification(builder, CLASSIFICATIONOffset);
    EOO.addEobservationId(builder, EOBSERVATION_IDOffset);
    EOO.addPenumbra(builder, PENUMBRA);
    EOO.addUmbra(builder, UMBRA);
    EOO.addReferenceFrame(builder, REFERENCE_FRAME);
    EOO.addUct(builder, UCT);
    return EOO.endEOO(builder);
  }

  public static void startEOO(FlatBufferBuilder builder) { builder.startTable(85); }
  public static void addEobservationId(FlatBufferBuilder builder, int EOBSERVATION_IDOffset) { builder.addOffset(0, EOBSERVATION_IDOffset, 0); }
  public static void addClassification(FlatBufferBuilder builder, int CLASSIFICATIONOffset) { builder.addOffset(1, CLASSIFICATIONOffset, 0); }
  public static void addObTime(FlatBufferBuilder builder, int OB_TIMEOffset) { builder.addOffset(2, OB_TIMEOffset, 0); }
  public static void addCorrQuality(FlatBufferBuilder builder, float CORR_QUALITY) { builder.addFloat(3, CORR_QUALITY, 0.0f); }
  public static void addIdOnOrbit(FlatBufferBuilder builder, int ID_ON_ORBITOffset) { builder.addOffset(4, ID_ON_ORBITOffset, 0); }
  public static void addSensorId(FlatBufferBuilder builder, int SENSOR_IDOffset) { builder.addOffset(5, SENSOR_IDOffset, 0); }
  public static void addCollectMethod(FlatBufferBuilder builder, int COLLECT_METHODOffset) { builder.addOffset(6, COLLECT_METHODOffset, 0); }
  public static void addNoradCatId(FlatBufferBuilder builder, int NORAD_CAT_ID) { builder.addInt(7, NORAD_CAT_ID, 0); }
  public static void addTaskId(FlatBufferBuilder builder, int TASK_IDOffset) { builder.addOffset(8, TASK_IDOffset, 0); }
  public static void addTransactionId(FlatBufferBuilder builder, int TRANSACTION_IDOffset) { builder.addOffset(9, TRANSACTION_IDOffset, 0); }
  public static void addTrackId(FlatBufferBuilder builder, int TRACK_IDOffset) { builder.addOffset(10, TRACK_IDOffset, 0); }
  public static void addObPosition(FlatBufferBuilder builder, int OB_POSITIONOffset) { builder.addOffset(11, OB_POSITIONOffset, 0); }
  public static void addOrigObjectId(FlatBufferBuilder builder, int ORIG_OBJECT_IDOffset) { builder.addOffset(12, ORIG_OBJECT_IDOffset, 0); }
  public static void addOrigSensorId(FlatBufferBuilder builder, int ORIG_SENSOR_IDOffset) { builder.addOffset(13, ORIG_SENSOR_IDOffset, 0); }
  public static void addUct(FlatBufferBuilder builder, boolean UCT) { builder.addBoolean(14, UCT, false); }
  public static void addAzimuth(FlatBufferBuilder builder, float AZIMUTH) { builder.addFloat(15, AZIMUTH, 0.0f); }
  public static void addAzimuthUnc(FlatBufferBuilder builder, float AZIMUTH_UNC) { builder.addFloat(16, AZIMUTH_UNC, 0.0f); }
  public static void addAzimuthBias(FlatBufferBuilder builder, float AZIMUTH_BIAS) { builder.addFloat(17, AZIMUTH_BIAS, 0.0f); }
  public static void addAzimuthRate(FlatBufferBuilder builder, float AZIMUTH_RATE) { builder.addFloat(18, AZIMUTH_RATE, 0.0f); }
  public static void addElevation(FlatBufferBuilder builder, float ELEVATION) { builder.addFloat(19, ELEVATION, 0.0f); }
  public static void addElevationUnc(FlatBufferBuilder builder, float ELEVATION_UNC) { builder.addFloat(20, ELEVATION_UNC, 0.0f); }
  public static void addElevationBias(FlatBufferBuilder builder, float ELEVATION_BIAS) { builder.addFloat(21, ELEVATION_BIAS, 0.0f); }
  public static void addElevationRate(FlatBufferBuilder builder, float ELEVATION_RATE) { builder.addFloat(22, ELEVATION_RATE, 0.0f); }
  public static void addRange(FlatBufferBuilder builder, float RANGE) { builder.addFloat(23, RANGE, 0.0f); }
  public static void addRangeUnc(FlatBufferBuilder builder, float RANGE_UNC) { builder.addFloat(24, RANGE_UNC, 0.0f); }
  public static void addRangeBias(FlatBufferBuilder builder, float RANGE_BIAS) { builder.addFloat(25, RANGE_BIAS, 0.0f); }
  public static void addRangeRate(FlatBufferBuilder builder, float RANGE_RATE) { builder.addFloat(26, RANGE_RATE, 0.0f); }
  public static void addRangeRateUnc(FlatBufferBuilder builder, float RANGE_RATE_UNC) { builder.addFloat(27, RANGE_RATE_UNC, 0.0f); }
  public static void addRa(FlatBufferBuilder builder, float RA) { builder.addFloat(28, RA, 0.0f); }
  public static void addRaRate(FlatBufferBuilder builder, float RA_RATE) { builder.addFloat(29, RA_RATE, 0.0f); }
  public static void addRaUnc(FlatBufferBuilder builder, float RA_UNC) { builder.addFloat(30, RA_UNC, 0.0f); }
  public static void addRaBias(FlatBufferBuilder builder, float RA_BIAS) { builder.addFloat(31, RA_BIAS, 0.0f); }
  public static void addDeclination(FlatBufferBuilder builder, float DECLINATION) { builder.addFloat(32, DECLINATION, 0.0f); }
  public static void addDeclinationRate(FlatBufferBuilder builder, float DECLINATION_RATE) { builder.addFloat(33, DECLINATION_RATE, 0.0f); }
  public static void addDeclinationUnc(FlatBufferBuilder builder, float DECLINATION_UNC) { builder.addFloat(34, DECLINATION_UNC, 0.0f); }
  public static void addDeclinationBias(FlatBufferBuilder builder, float DECLINATION_BIAS) { builder.addFloat(35, DECLINATION_BIAS, 0.0f); }
  public static void addLosx(FlatBufferBuilder builder, float LOSX) { builder.addFloat(36, LOSX, 0.0f); }
  public static void addLosy(FlatBufferBuilder builder, float LOSY) { builder.addFloat(37, LOSY, 0.0f); }
  public static void addLosz(FlatBufferBuilder builder, float LOSZ) { builder.addFloat(38, LOSZ, 0.0f); }
  public static void addLosUnc(FlatBufferBuilder builder, float LOS_UNC) { builder.addFloat(39, LOS_UNC, 0.0f); }
  public static void addLosxvel(FlatBufferBuilder builder, float LOSXVEL) { builder.addFloat(40, LOSXVEL, 0.0f); }
  public static void addLosyvel(FlatBufferBuilder builder, float LOSYVEL) { builder.addFloat(41, LOSYVEL, 0.0f); }
  public static void addLoszvel(FlatBufferBuilder builder, float LOSZVEL) { builder.addFloat(42, LOSZVEL, 0.0f); }
  public static void addSenlat(FlatBufferBuilder builder, float SENLAT) { builder.addFloat(43, SENLAT, 0.0f); }
  public static void addSenlon(FlatBufferBuilder builder, float SENLON) { builder.addFloat(44, SENLON, 0.0f); }
  public static void addSenalt(FlatBufferBuilder builder, float SENALT) { builder.addFloat(45, SENALT, 0.0f); }
  public static void addSenx(FlatBufferBuilder builder, float SENX) { builder.addFloat(46, SENX, 0.0f); }
  public static void addSeny(FlatBufferBuilder builder, float SENY) { builder.addFloat(47, SENY, 0.0f); }
  public static void addSenz(FlatBufferBuilder builder, float SENZ) { builder.addFloat(48, SENZ, 0.0f); }
  public static void addFovCount(FlatBufferBuilder builder, int FOV_COUNT) { builder.addInt(49, FOV_COUNT, 0); }
  public static void addExpDuration(FlatBufferBuilder builder, float EXP_DURATION) { builder.addFloat(50, EXP_DURATION, 0.0f); }
  public static void addZeroptd(FlatBufferBuilder builder, float ZEROPTD) { builder.addFloat(51, ZEROPTD, 0.0f); }
  public static void addNetObjSig(FlatBufferBuilder builder, float NET_OBJ_SIG) { builder.addFloat(52, NET_OBJ_SIG, 0.0f); }
  public static void addNetObjSigUnc(FlatBufferBuilder builder, float NET_OBJ_SIG_UNC) { builder.addFloat(53, NET_OBJ_SIG_UNC, 0.0f); }
  public static void addMag(FlatBufferBuilder builder, float MAG) { builder.addFloat(54, MAG, 0.0f); }
  public static void addMagUnc(FlatBufferBuilder builder, float MAG_UNC) { builder.addFloat(55, MAG_UNC, 0.0f); }
  public static void addMagNormRange(FlatBufferBuilder builder, float MAG_NORM_RANGE) { builder.addFloat(56, MAG_NORM_RANGE, 0.0f); }
  public static void addGeolat(FlatBufferBuilder builder, float GEOLAT) { builder.addFloat(57, GEOLAT, 0.0f); }
  public static void addGeolon(FlatBufferBuilder builder, float GEOLON) { builder.addFloat(58, GEOLON, 0.0f); }
  public static void addGeoalt(FlatBufferBuilder builder, float GEOALT) { builder.addFloat(59, GEOALT, 0.0f); }
  public static void addGeorange(FlatBufferBuilder builder, float GEORANGE) { builder.addFloat(60, GEORANGE, 0.0f); }
  public static void addSkyBkgrnd(FlatBufferBuilder builder, float SKY_BKGRND) { builder.addFloat(61, SKY_BKGRND, 0.0f); }
  public static void addPrimaryExtinction(FlatBufferBuilder builder, float PRIMARY_EXTINCTION) { builder.addFloat(62, PRIMARY_EXTINCTION, 0.0f); }
  public static void addPrimaryExtinctionUnc(FlatBufferBuilder builder, float PRIMARY_EXTINCTION_UNC) { builder.addFloat(63, PRIMARY_EXTINCTION_UNC, 0.0f); }
  public static void addSolarPhaseAngle(FlatBufferBuilder builder, float SOLAR_PHASE_ANGLE) { builder.addFloat(64, SOLAR_PHASE_ANGLE, 0.0f); }
  public static void addSolarEqPhaseAngle(FlatBufferBuilder builder, float SOLAR_EQ_PHASE_ANGLE) { builder.addFloat(65, SOLAR_EQ_PHASE_ANGLE, 0.0f); }
  public static void addSolarDecAngle(FlatBufferBuilder builder, float SOLAR_DEC_ANGLE) { builder.addFloat(66, SOLAR_DEC_ANGLE, 0.0f); }
  public static void addShutterDelay(FlatBufferBuilder builder, float SHUTTER_DELAY) { builder.addFloat(67, SHUTTER_DELAY, 0.0f); }
  public static void addTimingBias(FlatBufferBuilder builder, float TIMING_BIAS) { builder.addFloat(68, TIMING_BIAS, 0.0f); }
  public static void addRawFileUri(FlatBufferBuilder builder, int RAW_FILE_URIOffset) { builder.addOffset(69, RAW_FILE_URIOffset, 0); }
  public static void addIntensity(FlatBufferBuilder builder, float INTENSITY) { builder.addFloat(70, INTENSITY, 0.0f); }
  public static void addBgIntensity(FlatBufferBuilder builder, float BG_INTENSITY) { builder.addFloat(71, BG_INTENSITY, 0.0f); }
  public static void addDescriptor(FlatBufferBuilder builder, int DESCRIPTOROffset) { builder.addOffset(72, DESCRIPTOROffset, 0); }
  public static void addSource(FlatBufferBuilder builder, int SOURCEOffset) { builder.addOffset(73, SOURCEOffset, 0); }
  public static void addOrigin(FlatBufferBuilder builder, int ORIGINOffset) { builder.addOffset(74, ORIGINOffset, 0); }
  public static void addDataMode(FlatBufferBuilder builder, int DATA_MODEOffset) { builder.addOffset(75, DATA_MODEOffset, 0); }
  public static void addCreatedAt(FlatBufferBuilder builder, int CREATED_ATOffset) { builder.addOffset(76, CREATED_ATOffset, 0); }
  public static void addCreatedBy(FlatBufferBuilder builder, int CREATED_BYOffset) { builder.addOffset(77, CREATED_BYOffset, 0); }
  public static void addReferenceFrame(FlatBufferBuilder builder, byte REFERENCE_FRAME) { builder.addByte(78, REFERENCE_FRAME, 0); }
  public static void addSenReferenceFrame(FlatBufferBuilder builder, int SEN_REFERENCE_FRAMEOffset) { builder.addOffset(79, SEN_REFERENCE_FRAMEOffset, 0); }
  public static void addUmbra(FlatBufferBuilder builder, boolean UMBRA) { builder.addBoolean(80, UMBRA, false); }
  public static void addPenumbra(FlatBufferBuilder builder, boolean PENUMBRA) { builder.addBoolean(81, PENUMBRA, false); }
  public static void addOrigNetwork(FlatBufferBuilder builder, int ORIG_NETWORKOffset) { builder.addOffset(82, ORIG_NETWORKOffset, 0); }
  public static void addSourceDl(FlatBufferBuilder builder, int SOURCE_DLOffset) { builder.addOffset(83, SOURCE_DLOffset, 0); }
  public static void addType(FlatBufferBuilder builder, int TYPEOffset) { builder.addOffset(84, TYPEOffset, 0); }
  public static int endEOO(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishEOOBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "$EOO"); }
  public static void finishSizePrefixedEOOBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "$EOO"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public EOO get(int j) { return get(new EOO(), j); }
    public EOO get(EOO obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
