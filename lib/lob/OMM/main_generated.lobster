// automatically generated by the FlatBuffers compiler, do not modify
import flatbuffers

enum ephemerisType:
    /// Simplified General Perturbation Model
    ephemerisType_SGP = 0
    /// Simplified General Perturbation Model 4
    ephemerisType_SGP4 = 1
    /// Simplified Deep Space Perturbation Model 4
    ephemerisType_SDP4 = 2
    /// Simplified General Perturbation Model 8
    ephemerisType_SGP8 = 3
    /// Simplified Deep Space Perturbation Model 8
    ephemerisType_SDP8 = 4

class OMM

class OMMCOLLECTION

/// Orbit Mean Elements Message
class OMM : flatbuffers.handle
    /// OMM Header
    def CCSDS_OMM_VERS() -> float:
        return flatbuffers.field_float64(buf_, pos_, 4, 0.0)
    /// Creation Date
    def CREATION_DATE() -> string:
        return flatbuffers.field_string(buf_, pos_, 6)
    /// Originator
    def ORIGINATOR() -> string:
        return flatbuffers.field_string(buf_, pos_, 8)
    /// OMM Metadata
    /// Satellite Name(s)
    def OBJECT_NAME() -> string:
        return flatbuffers.field_string(buf_, pos_, 10)
    /// International Designator (YYYY-NNNAAA)
    def OBJECT_ID() -> string:
        return flatbuffers.field_string(buf_, pos_, 12)
    /// Origin of reference frame (EARTH, MARS, MOON, etc.)
    def CENTER_NAME() -> string:
        return flatbuffers.field_string(buf_, pos_, 14)
    /// Name of the reference frame (TEME, EME2000, etc.)
    def REFERENCE_FRAME() -> refFrame:
        return refFrame(flatbuffers.field_int8(buf_, pos_, 16, 2))
    /// REFERENCE_FRAME_EPOCH
    def REFERENCE_FRAME_EPOCH() -> string:
        return flatbuffers.field_string(buf_, pos_, 18)
    /// Time system used for the orbit state and covariance matrix. (UTC)
    def TIME_SYSTEM() -> timeSystem:
        return timeSystem(flatbuffers.field_int8(buf_, pos_, 20, 11))
    /// Description of the Mean Element Theory. (SGP4,DSST,USM)
    def MEAN_ELEMENT_THEORY() -> meanElementTheory:
        return meanElementTheory(flatbuffers.field_int8(buf_, pos_, 22, 0))
    /// Mean Keplerian Elements in the Specified Reference Frame
    /// Plain-Text Comment
    def COMMENT() -> string:
        return flatbuffers.field_string(buf_, pos_, 24)
    /// Epoch time, in ISO 8601 UTC format
    def EPOCH() -> string:
        return flatbuffers.field_string(buf_, pos_, 26)
    /// Semi-major axis in km or mean motion in rev/day
    def SEMI_MAJOR_AXIS() -> float:
        return flatbuffers.field_float64(buf_, pos_, 28, 0.0)
    /// Mean motion
    def MEAN_MOTION() -> float:
        return flatbuffers.field_float64(buf_, pos_, 30, 0.0)
    /// Eccentricity
    def ECCENTRICITY() -> float:
        return flatbuffers.field_float64(buf_, pos_, 32, 0.0)
    /// Inclination
    def INCLINATION() -> float:
        return flatbuffers.field_float64(buf_, pos_, 34, 0.0)
    /// Right ascension of ascending node
    def RA_OF_ASC_NODE() -> float:
        return flatbuffers.field_float64(buf_, pos_, 36, 0.0)
    /// Argument of pericenter
    def ARG_OF_PERICENTER() -> float:
        return flatbuffers.field_float64(buf_, pos_, 38, 0.0)
    /// Mean anomaly
    def MEAN_ANOMALY() -> float:
        return flatbuffers.field_float64(buf_, pos_, 40, 0.0)
    /// Gravitational Coefficient (Gravitational Constant x Central Mass)
    def GM() -> float:
        return flatbuffers.field_float64(buf_, pos_, 42, 0.0)
    /// Spacecraft Parameters
    /// S/C Mass
    def MASS() -> float:
        return flatbuffers.field_float64(buf_, pos_, 44, 0.0)
    /// Solar Radiation Pressure Area (AR) m**2
    def SOLAR_RAD_AREA() -> float:
        return flatbuffers.field_float64(buf_, pos_, 46, 0.0)
    /// Solar Radiation Pressure Coefficient (CR)
    def SOLAR_RAD_COEFF() -> float:
        return flatbuffers.field_float64(buf_, pos_, 48, 0.0)
    /// Drag Area (AD) m**2
    def DRAG_AREA() -> float:
        return flatbuffers.field_float64(buf_, pos_, 50, 0.0)
    /// Drag Coefficient (CD)
    def DRAG_COEFF() -> float:
        return flatbuffers.field_float64(buf_, pos_, 52, 0.0)
    /// TLE Related Parameters (This section is only required if MEAN_ELEMENT_THEORY=SGP/SGP4)
    /// Default value = 0
    def EPHEMERIS_TYPE() -> ephemerisType:
        return ephemerisType(flatbuffers.field_int8(buf_, pos_, 54, 1))
    /// Default value = U
    def CLASSIFICATION_TYPE() -> string:
        return flatbuffers.field_string(buf_, pos_, 56)
    /// NORAD Catalog Number (Satellite Number) an integer
    def NORAD_CAT_ID() -> int:
        return flatbuffers.field_uint32(buf_, pos_, 58, 0)
    /// Element set number for this satellite
    def ELEMENT_SET_NO() -> int:
        return flatbuffers.field_uint32(buf_, pos_, 60, 0)
    /// Revolution Number
    def REV_AT_EPOCH() -> float:
        return flatbuffers.field_float64(buf_, pos_, 62, 0.0)
    /// SGP/SGP4 drag-like coefficient (in units 1/[Earth radii])
    def BSTAR() -> float:
        return flatbuffers.field_float64(buf_, pos_, 64, 0.0)
    /// First Time Derivative of the Mean Motion
    def MEAN_MOTION_DOT() -> float:
        return flatbuffers.field_float64(buf_, pos_, 66, 0.0)
    /// Second Time Derivative of Mean Motion
    def MEAN_MOTION_DDOT() -> float:
        return flatbuffers.field_float64(buf_, pos_, 68, 0.0)
    /// Position/Velocity Covariance Matrix
    /// Reference frame for the covariance matrix
    def COV_REFERENCE_FRAME() -> refFrame:
        return refFrame(flatbuffers.field_int8(buf_, pos_, 70, 23))
    /// Covariance matrix [1,1] km**2
    def CX_X() -> float:
        return flatbuffers.field_float64(buf_, pos_, 72, 0.0)
    /// Covariance matrix [2,1] km**2
    def CY_X() -> float:
        return flatbuffers.field_float64(buf_, pos_, 74, 0.0)
    /// Covariance matrix [2,2] km**2
    def CY_Y() -> float:
        return flatbuffers.field_float64(buf_, pos_, 76, 0.0)
    /// Covariance matrix [3,1] km**2
    def CZ_X() -> float:
        return flatbuffers.field_float64(buf_, pos_, 78, 0.0)
    /// Covariance matrix [3,2] km**2
    def CZ_Y() -> float:
        return flatbuffers.field_float64(buf_, pos_, 80, 0.0)
    /// Covariance matrix [3,3] km**2
    def CZ_Z() -> float:
        return flatbuffers.field_float64(buf_, pos_, 82, 0.0)
    /// Covariance matrix [4,1] km**2/s
    def CX_DOT_X() -> float:
        return flatbuffers.field_float64(buf_, pos_, 84, 0.0)
    /// Covariance matrix [4,2] km**2/s
    def CX_DOT_Y() -> float:
        return flatbuffers.field_float64(buf_, pos_, 86, 0.0)
    /// Covariance matrix [4,3] km**2/s
    def CX_DOT_Z() -> float:
        return flatbuffers.field_float64(buf_, pos_, 88, 0.0)
    /// Covariance matrix [4,4] km**2/s**2
    def CX_DOT_X_DOT() -> float:
        return flatbuffers.field_float64(buf_, pos_, 90, 0.0)
    /// Covariance matrix [5,1] km**2/s
    def CY_DOT_X() -> float:
        return flatbuffers.field_float64(buf_, pos_, 92, 0.0)
    /// Covariance matrix [5,2] km**2/s
    def CY_DOT_Y() -> float:
        return flatbuffers.field_float64(buf_, pos_, 94, 0.0)
    /// Covariance matrix [5,3] km**2/s
    def CY_DOT_Z() -> float:
        return flatbuffers.field_float64(buf_, pos_, 96, 0.0)
    /// Covariance matrix [5,4] km**2/s**2
    def CY_DOT_X_DOT() -> float:
        return flatbuffers.field_float64(buf_, pos_, 98, 0.0)
    /// Covariance matrix [5,5] km**2/s**2
    def CY_DOT_Y_DOT() -> float:
        return flatbuffers.field_float64(buf_, pos_, 100, 0.0)
    /// Covariance matrix [6,1] km**2/s
    def CZ_DOT_X() -> float:
        return flatbuffers.field_float64(buf_, pos_, 102, 0.0)
    /// Covariance matrix [6,2] km**2/s
    def CZ_DOT_Y() -> float:
        return flatbuffers.field_float64(buf_, pos_, 104, 0.0)
    /// Covariance matrix [6,3] km**2/s
    def CZ_DOT_Z() -> float:
        return flatbuffers.field_float64(buf_, pos_, 106, 0.0)
    /// Covariance matrix [6,4] km**2/s**2
    def CZ_DOT_X_DOT() -> float:
        return flatbuffers.field_float64(buf_, pos_, 108, 0.0)
    /// Covariance matrix [6,5] km**2/s**2
    def CZ_DOT_Y_DOT() -> float:
        return flatbuffers.field_float64(buf_, pos_, 110, 0.0)
    /// Covariance matrix [6,6] km**2/s**2
    def CZ_DOT_Z_DOT() -> float:
        return flatbuffers.field_float64(buf_, pos_, 112, 0.0)
    /// User defined parameter, must be described in an ICD
    def USER_DEFINED_BIP_0044_TYPE() -> int:
        return flatbuffers.field_uint32(buf_, pos_, 114, 0)
    /// User defined parameter, must be described in an ICD
    def USER_DEFINED_OBJECT_DESIGNATOR() -> string:
        return flatbuffers.field_string(buf_, pos_, 116)
    /// User defined parameter, must be described in an ICD
    def USER_DEFINED_EARTH_MODEL() -> string:
        return flatbuffers.field_string(buf_, pos_, 118)
    /// User defined parameter, must be described in an ICD
    def USER_DEFINED_EPOCH_TIMESTAMP() -> float:
        return flatbuffers.field_float64(buf_, pos_, 120, 0.0)
    /// User defined parameter, must be described in an ICD
    def USER_DEFINED_MICROSECONDS() -> float:
        return flatbuffers.field_float64(buf_, pos_, 122, 0.0)

def GetRootAsOMM(buf:string): return OMM { buf, flatbuffers.indirect(buf, 0) }

struct OMMBuilder:
    b_:flatbuffers.builder
    def start():
        b_.StartObject(60)
        return this
    def add_CCSDS_OMM_VERS(CCSDS_OMM_VERS:float):
        b_.PrependFloat64Slot(0, CCSDS_OMM_VERS, 0.0)
        return this
    def add_CREATION_DATE(CREATION_DATE:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(1, CREATION_DATE)
        return this
    def add_ORIGINATOR(ORIGINATOR:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(2, ORIGINATOR)
        return this
    def add_OBJECT_NAME(OBJECT_NAME:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(3, OBJECT_NAME)
        return this
    def add_OBJECT_ID(OBJECT_ID:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(4, OBJECT_ID)
        return this
    def add_CENTER_NAME(CENTER_NAME:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(5, CENTER_NAME)
        return this
    def add_REFERENCE_FRAME(REFERENCE_FRAME:refFrame):
        b_.PrependInt8Slot(6, REFERENCE_FRAME, 2)
        return this
    def add_REFERENCE_FRAME_EPOCH(REFERENCE_FRAME_EPOCH:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(7, REFERENCE_FRAME_EPOCH)
        return this
    def add_TIME_SYSTEM(TIME_SYSTEM:timeSystem):
        b_.PrependInt8Slot(8, TIME_SYSTEM, 11)
        return this
    def add_MEAN_ELEMENT_THEORY(MEAN_ELEMENT_THEORY:meanElementTheory):
        b_.PrependInt8Slot(9, MEAN_ELEMENT_THEORY, 0)
        return this
    def add_COMMENT(COMMENT:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(10, COMMENT)
        return this
    def add_EPOCH(EPOCH:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(11, EPOCH)
        return this
    def add_SEMI_MAJOR_AXIS(SEMI_MAJOR_AXIS:float):
        b_.PrependFloat64Slot(12, SEMI_MAJOR_AXIS, 0.0)
        return this
    def add_MEAN_MOTION(MEAN_MOTION:float):
        b_.PrependFloat64Slot(13, MEAN_MOTION, 0.0)
        return this
    def add_ECCENTRICITY(ECCENTRICITY:float):
        b_.PrependFloat64Slot(14, ECCENTRICITY, 0.0)
        return this
    def add_INCLINATION(INCLINATION:float):
        b_.PrependFloat64Slot(15, INCLINATION, 0.0)
        return this
    def add_RA_OF_ASC_NODE(RA_OF_ASC_NODE:float):
        b_.PrependFloat64Slot(16, RA_OF_ASC_NODE, 0.0)
        return this
    def add_ARG_OF_PERICENTER(ARG_OF_PERICENTER:float):
        b_.PrependFloat64Slot(17, ARG_OF_PERICENTER, 0.0)
        return this
    def add_MEAN_ANOMALY(MEAN_ANOMALY:float):
        b_.PrependFloat64Slot(18, MEAN_ANOMALY, 0.0)
        return this
    def add_GM(GM:float):
        b_.PrependFloat64Slot(19, GM, 0.0)
        return this
    def add_MASS(MASS:float):
        b_.PrependFloat64Slot(20, MASS, 0.0)
        return this
    def add_SOLAR_RAD_AREA(SOLAR_RAD_AREA:float):
        b_.PrependFloat64Slot(21, SOLAR_RAD_AREA, 0.0)
        return this
    def add_SOLAR_RAD_COEFF(SOLAR_RAD_COEFF:float):
        b_.PrependFloat64Slot(22, SOLAR_RAD_COEFF, 0.0)
        return this
    def add_DRAG_AREA(DRAG_AREA:float):
        b_.PrependFloat64Slot(23, DRAG_AREA, 0.0)
        return this
    def add_DRAG_COEFF(DRAG_COEFF:float):
        b_.PrependFloat64Slot(24, DRAG_COEFF, 0.0)
        return this
    def add_EPHEMERIS_TYPE(EPHEMERIS_TYPE:ephemerisType):
        b_.PrependInt8Slot(25, EPHEMERIS_TYPE, 1)
        return this
    def add_CLASSIFICATION_TYPE(CLASSIFICATION_TYPE:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(26, CLASSIFICATION_TYPE)
        return this
    def add_NORAD_CAT_ID(NORAD_CAT_ID:int):
        b_.PrependUint32Slot(27, NORAD_CAT_ID, 0)
        return this
    def add_ELEMENT_SET_NO(ELEMENT_SET_NO:int):
        b_.PrependUint32Slot(28, ELEMENT_SET_NO, 0)
        return this
    def add_REV_AT_EPOCH(REV_AT_EPOCH:float):
        b_.PrependFloat64Slot(29, REV_AT_EPOCH, 0.0)
        return this
    def add_BSTAR(BSTAR:float):
        b_.PrependFloat64Slot(30, BSTAR, 0.0)
        return this
    def add_MEAN_MOTION_DOT(MEAN_MOTION_DOT:float):
        b_.PrependFloat64Slot(31, MEAN_MOTION_DOT, 0.0)
        return this
    def add_MEAN_MOTION_DDOT(MEAN_MOTION_DDOT:float):
        b_.PrependFloat64Slot(32, MEAN_MOTION_DDOT, 0.0)
        return this
    def add_COV_REFERENCE_FRAME(COV_REFERENCE_FRAME:refFrame):
        b_.PrependInt8Slot(33, COV_REFERENCE_FRAME, 23)
        return this
    def add_CX_X(CX_X:float):
        b_.PrependFloat64Slot(34, CX_X, 0.0)
        return this
    def add_CY_X(CY_X:float):
        b_.PrependFloat64Slot(35, CY_X, 0.0)
        return this
    def add_CY_Y(CY_Y:float):
        b_.PrependFloat64Slot(36, CY_Y, 0.0)
        return this
    def add_CZ_X(CZ_X:float):
        b_.PrependFloat64Slot(37, CZ_X, 0.0)
        return this
    def add_CZ_Y(CZ_Y:float):
        b_.PrependFloat64Slot(38, CZ_Y, 0.0)
        return this
    def add_CZ_Z(CZ_Z:float):
        b_.PrependFloat64Slot(39, CZ_Z, 0.0)
        return this
    def add_CX_DOT_X(CX_DOT_X:float):
        b_.PrependFloat64Slot(40, CX_DOT_X, 0.0)
        return this
    def add_CX_DOT_Y(CX_DOT_Y:float):
        b_.PrependFloat64Slot(41, CX_DOT_Y, 0.0)
        return this
    def add_CX_DOT_Z(CX_DOT_Z:float):
        b_.PrependFloat64Slot(42, CX_DOT_Z, 0.0)
        return this
    def add_CX_DOT_X_DOT(CX_DOT_X_DOT:float):
        b_.PrependFloat64Slot(43, CX_DOT_X_DOT, 0.0)
        return this
    def add_CY_DOT_X(CY_DOT_X:float):
        b_.PrependFloat64Slot(44, CY_DOT_X, 0.0)
        return this
    def add_CY_DOT_Y(CY_DOT_Y:float):
        b_.PrependFloat64Slot(45, CY_DOT_Y, 0.0)
        return this
    def add_CY_DOT_Z(CY_DOT_Z:float):
        b_.PrependFloat64Slot(46, CY_DOT_Z, 0.0)
        return this
    def add_CY_DOT_X_DOT(CY_DOT_X_DOT:float):
        b_.PrependFloat64Slot(47, CY_DOT_X_DOT, 0.0)
        return this
    def add_CY_DOT_Y_DOT(CY_DOT_Y_DOT:float):
        b_.PrependFloat64Slot(48, CY_DOT_Y_DOT, 0.0)
        return this
    def add_CZ_DOT_X(CZ_DOT_X:float):
        b_.PrependFloat64Slot(49, CZ_DOT_X, 0.0)
        return this
    def add_CZ_DOT_Y(CZ_DOT_Y:float):
        b_.PrependFloat64Slot(50, CZ_DOT_Y, 0.0)
        return this
    def add_CZ_DOT_Z(CZ_DOT_Z:float):
        b_.PrependFloat64Slot(51, CZ_DOT_Z, 0.0)
        return this
    def add_CZ_DOT_X_DOT(CZ_DOT_X_DOT:float):
        b_.PrependFloat64Slot(52, CZ_DOT_X_DOT, 0.0)
        return this
    def add_CZ_DOT_Y_DOT(CZ_DOT_Y_DOT:float):
        b_.PrependFloat64Slot(53, CZ_DOT_Y_DOT, 0.0)
        return this
    def add_CZ_DOT_Z_DOT(CZ_DOT_Z_DOT:float):
        b_.PrependFloat64Slot(54, CZ_DOT_Z_DOT, 0.0)
        return this
    def add_USER_DEFINED_BIP_0044_TYPE(USER_DEFINED_BIP_0044_TYPE:int):
        b_.PrependUint32Slot(55, USER_DEFINED_BIP_0044_TYPE, 0)
        return this
    def add_USER_DEFINED_OBJECT_DESIGNATOR(USER_DEFINED_OBJECT_DESIGNATOR:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(56, USER_DEFINED_OBJECT_DESIGNATOR)
        return this
    def add_USER_DEFINED_EARTH_MODEL(USER_DEFINED_EARTH_MODEL:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(57, USER_DEFINED_EARTH_MODEL)
        return this
    def add_USER_DEFINED_EPOCH_TIMESTAMP(USER_DEFINED_EPOCH_TIMESTAMP:float):
        b_.PrependFloat64Slot(58, USER_DEFINED_EPOCH_TIMESTAMP, 0.0)
        return this
    def add_USER_DEFINED_MICROSECONDS(USER_DEFINED_MICROSECONDS:float):
        b_.PrependFloat64Slot(59, USER_DEFINED_MICROSECONDS, 0.0)
        return this
    def end():
        return b_.EndObject()

class OMMCOLLECTION : flatbuffers.handle
    def RECORDS(i:int) -> OMM:
        return OMM { buf_, flatbuffers.indirect(buf_, flatbuffers.field_vector(buf_, pos_, 4) + i * 4) }
    def RECORDS_length() -> int:
        return flatbuffers.field_vector_len(buf_, pos_, 4)

def GetRootAsOMMCOLLECTION(buf:string): return OMMCOLLECTION { buf, flatbuffers.indirect(buf, 0) }

struct OMMCOLLECTIONBuilder:
    b_:flatbuffers.builder
    def start():
        b_.StartObject(1)
        return this
    def add_RECORDS(RECORDS:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(0, RECORDS)
        return this
    def end():
        return b_.EndObject()

def OMMCOLLECTIONStartRECORDSVector(b_:flatbuffers.builder, n_:int):
    b_.StartVector(4, n_, 4)
def OMMCOLLECTIONCreateRECORDSVector(b_:flatbuffers.builder, v_:[flatbuffers.offset]):
    b_.StartVector(4, v_.length, 4)
    reverse(v_) e_: b_.PrependUOffsetTRelative(e_)
    return b_.EndVector(v_.length)

