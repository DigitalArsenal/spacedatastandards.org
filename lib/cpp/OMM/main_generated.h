// automatically generated by the FlatBuffers compiler, do not modify


#ifndef FLATBUFFERS_GENERATED_MAIN_H_
#define FLATBUFFERS_GENERATED_MAIN_H_

#include "flatbuffers/flatbuffers.h"

// Ensure the included flatbuffers.h is the same version as when this file was
// generated, otherwise it may not be compatible.
static_assert(FLATBUFFERS_VERSION_MAJOR == 24 &&
              FLATBUFFERS_VERSION_MINOR == 3 &&
              FLATBUFFERS_VERSION_REVISION == 25,
             "Non-compatible flatbuffers version included");

#include "main_generated.h"
#include "main_generated.h"
#include "main_generated.h"

struct OMM;
struct OMMBuilder;

enum ephemerisType : int8_t {
  /// Simplified General Perturbation Model
  ephemerisType_SGP = 0,
  /// Simplified General Perturbation Model 4
  ephemerisType_SGP4 = 1,
  /// Simplified Deep Space Perturbation Model 4
  ephemerisType_SDP4 = 2,
  /// Simplified General Perturbation Model 8
  ephemerisType_SGP8 = 3,
  /// Simplified Deep Space Perturbation Model 8
  ephemerisType_SDP8 = 4,
  ephemerisType_MIN = ephemerisType_SGP,
  ephemerisType_MAX = ephemerisType_SDP8
};

inline const ephemerisType (&EnumValuesephemerisType())[5] {
  static const ephemerisType values[] = {
    ephemerisType_SGP,
    ephemerisType_SGP4,
    ephemerisType_SDP4,
    ephemerisType_SGP8,
    ephemerisType_SDP8
  };
  return values;
}

inline const char * const *EnumNamesephemerisType() {
  static const char * const names[6] = {
    "SGP",
    "SGP4",
    "SDP4",
    "SGP8",
    "SDP8",
    nullptr
  };
  return names;
}

inline const char *EnumNameephemerisType(ephemerisType e) {
  if (::flatbuffers::IsOutRange(e, ephemerisType_SGP, ephemerisType_SDP8)) return "";
  const size_t index = static_cast<size_t>(e);
  return EnumNamesephemerisType()[index];
}

/// Orbit Mean Elements Message
struct OMM FLATBUFFERS_FINAL_CLASS : private ::flatbuffers::Table {
  typedef OMMBuilder Builder;
  enum FlatBuffersVTableOffset FLATBUFFERS_VTABLE_UNDERLYING_TYPE {
    VT_CCSDS_OMM_VERS = 4,
    VT_CREATION_DATE = 6,
    VT_ORIGINATOR = 8,
    VT_OBJECT_NAME = 10,
    VT_OBJECT_ID = 12,
    VT_CENTER_NAME = 14,
    VT_REFERENCE_FRAME = 16,
    VT_REFERENCE_FRAME_EPOCH = 18,
    VT_TIME_SYSTEM = 20,
    VT_MEAN_ELEMENT_THEORY = 22,
    VT_COMMENT = 24,
    VT_EPOCH = 26,
    VT_SEMI_MAJOR_AXIS = 28,
    VT_MEAN_MOTION = 30,
    VT_ECCENTRICITY = 32,
    VT_INCLINATION = 34,
    VT_RA_OF_ASC_NODE = 36,
    VT_ARG_OF_PERICENTER = 38,
    VT_MEAN_ANOMALY = 40,
    VT_GM = 42,
    VT_MASS = 44,
    VT_SOLAR_RAD_AREA = 46,
    VT_SOLAR_RAD_COEFF = 48,
    VT_DRAG_AREA = 50,
    VT_DRAG_COEFF = 52,
    VT_EPHEMERIS_TYPE = 54,
    VT_CLASSIFICATION_TYPE = 56,
    VT_NORAD_CAT_ID = 58,
    VT_ELEMENT_SET_NO = 60,
    VT_REV_AT_EPOCH = 62,
    VT_BSTAR = 64,
    VT_MEAN_MOTION_DOT = 66,
    VT_MEAN_MOTION_DDOT = 68,
    VT_COV_REFERENCE_FRAME = 70,
    VT_CX_X = 72,
    VT_CY_X = 74,
    VT_CY_Y = 76,
    VT_CZ_X = 78,
    VT_CZ_Y = 80,
    VT_CZ_Z = 82,
    VT_CX_DOT_X = 84,
    VT_CX_DOT_Y = 86,
    VT_CX_DOT_Z = 88,
    VT_CX_DOT_X_DOT = 90,
    VT_CY_DOT_X = 92,
    VT_CY_DOT_Y = 94,
    VT_CY_DOT_Z = 96,
    VT_CY_DOT_X_DOT = 98,
    VT_CY_DOT_Y_DOT = 100,
    VT_CZ_DOT_X = 102,
    VT_CZ_DOT_Y = 104,
    VT_CZ_DOT_Z = 106,
    VT_CZ_DOT_X_DOT = 108,
    VT_CZ_DOT_Y_DOT = 110,
    VT_CZ_DOT_Z_DOT = 112,
    VT_USER_DEFINED_BIP_0044_TYPE = 114,
    VT_USER_DEFINED_OBJECT_DESIGNATOR = 116,
    VT_USER_DEFINED_EARTH_MODEL = 118,
    VT_USER_DEFINED_EPOCH_TIMESTAMP = 120,
    VT_USER_DEFINED_MICROSECONDS = 122
  };
  /// CCSDS OMM Version 
  double CCSDS_OMM_VERS() const {
    return GetField<double>(VT_CCSDS_OMM_VERS, 0.0);
  }
  /// Creation Date (ISO 8601 UTC format) 
  const ::flatbuffers::String *CREATION_DATE() const {
    return GetPointer<const ::flatbuffers::String *>(VT_CREATION_DATE);
  }
  /// Originator 
  const ::flatbuffers::String *ORIGINATOR() const {
    return GetPointer<const ::flatbuffers::String *>(VT_ORIGINATOR);
  }
  /// Satellite Name(s)
  const ::flatbuffers::String *OBJECT_NAME() const {
    return GetPointer<const ::flatbuffers::String *>(VT_OBJECT_NAME);
  }
  /// International Designator (YYYY-NNNAAA)
  const ::flatbuffers::String *OBJECT_ID() const {
    return GetPointer<const ::flatbuffers::String *>(VT_OBJECT_ID);
  }
  /// Center Name (e.g. EARTH, MARS)
  const ::flatbuffers::String *CENTER_NAME() const {
    return GetPointer<const ::flatbuffers::String *>(VT_CENTER_NAME);
  }
  /// Reference Frame
  /// Typically TEMEOFDATE
  const RFM *REFERENCE_FRAME() const {
    return GetPointer<const RFM *>(VT_REFERENCE_FRAME);
  }
  /// Reference Frame Epoch (ISO 8601 UTC format)
  const ::flatbuffers::String *REFERENCE_FRAME_EPOCH() const {
    return GetPointer<const ::flatbuffers::String *>(VT_REFERENCE_FRAME_EPOCH);
  }
  /// Time System [M, UTC]
  timeSystem TIME_SYSTEM() const {
    return static_cast<timeSystem>(GetField<int8_t>(VT_TIME_SYSTEM, 11));
  }
  /// Mean Element Theory
  meanElementTheory MEAN_ELEMENT_THEORY() const {
    return static_cast<meanElementTheory>(GetField<int8_t>(VT_MEAN_ELEMENT_THEORY, 0));
  }
  /// COMMENT (O)
  const ::flatbuffers::String *COMMENT() const {
    return GetPointer<const ::flatbuffers::String *>(VT_COMMENT);
  }
  /// EPOCH of Mean Keplerian elements (ISO 8601 UTC format)
  const ::flatbuffers::String *EPOCH() const {
    return GetPointer<const ::flatbuffers::String *>(VT_EPOCH);
  }
  /// Semi-major axis in km or Mean Motion in rev/day
  double SEMI_MAJOR_AXIS() const {
    return GetField<double>(VT_SEMI_MAJOR_AXIS, 0.0);
  }
  /// Mean motion in rev/day if MEAN_ELEMENT_THEORY=SGP/SGP4 else unused
  double MEAN_MOTION() const {
    return GetField<double>(VT_MEAN_MOTION, 0.0);
  }
  /// Eccentricity (unitless)
  double ECCENTRICITY() const {
    return GetField<double>(VT_ECCENTRICITY, 0.0);
  }
  /// Inclination in degrees
  double INCLINATION() const {
    return GetField<double>(VT_INCLINATION, 0.0);
  }
  /// RA_OF_ASC_NODE in degrees
  double RA_OF_ASC_NODE() const {
    return GetField<double>(VT_RA_OF_ASC_NODE, 0.0);
  }
  /// ARG_OF_PERICENTER in degrees
  double ARG_OF_PERICENTER() const {
    return GetField<double>(VT_ARG_OF_PERICENTER, 0.0);
  }
  /// MEAN_ANOMALY in degrees
  double MEAN_ANOMALY() const {
    return GetField<double>(VT_MEAN_ANOMALY, 0.0);
  }
  /// GM in km**3/s**2
  double GM() const {
    return GetField<double>(VT_GM, 0.0);
  }
  /// MASS in kg
  double MASS() const {
    return GetField<double>(VT_MASS, 0.0);
  }
  /// SOLAR_RAD_AREA in m**2
  double SOLAR_RAD_AREA() const {
    return GetField<double>(VT_SOLAR_RAD_AREA, 0.0);
  }
  /// SOLAR_RAD_COEFF (unitless)
  double SOLAR_RAD_COEFF() const {
    return GetField<double>(VT_SOLAR_RAD_COEFF, 0.0);
  }
  /// DRAG_AREA in m**2
  double DRAG_AREA() const {
    return GetField<double>(VT_DRAG_AREA, 0.0);
  }
  /// DRAG_COEFF (unitless)
  double DRAG_COEFF() const {
    return GetField<double>(VT_DRAG_COEFF, 0.0);
  }
  /// TLE Related Parameters (Only if MEAN_ELEMENT_THEORY=SGP/SGP4)
  /// EPHEMERIS_TYPE Default=0
  ephemerisType EPHEMERIS_TYPE() const {
    return static_cast<ephemerisType>(GetField<int8_t>(VT_EPHEMERIS_TYPE, 1));
  }
  /// CLASSIFICATION_TYPE Default=U
  const ::flatbuffers::String *CLASSIFICATION_TYPE() const {
    return GetPointer<const ::flatbuffers::String *>(VT_CLASSIFICATION_TYPE);
  }
  /// NORAD_CAT_ID (integer) [O if SGP/SGP4]
  uint32_t NORAD_CAT_ID() const {
    return GetField<uint32_t>(VT_NORAD_CAT_ID, 0);
  }
  /// ELEMENT_SET_NO [O if SGP/SGP4]
  uint32_t ELEMENT_SET_NO() const {
    return GetField<uint32_t>(VT_ELEMENT_SET_NO, 0);
  }
  /// REV_AT_EPOCH [O if SGP/SGP4]
  double REV_AT_EPOCH() const {
    return GetField<double>(VT_REV_AT_EPOCH, 0.0);
  }
  /// BSTAR in 1/Earth radii or BTERM in m²/kg depending on MEAN_ELEMENT_THEORY [C]
  double BSTAR() const {
    return GetField<double>(VT_BSTAR, 0.0);
  }
  /// MEAN_MOTION_DOT in rev/day² [C if SGP or PPT3]
  double MEAN_MOTION_DOT() const {
    return GetField<double>(VT_MEAN_MOTION_DOT, 0.0);
  }
  /// MEAN_MOTION_DDOT in rev/day³ if SGP/PPT3 or AGOM in m²/kg if SGP4-XP [C]
  double MEAN_MOTION_DDOT() const {
    return GetField<double>(VT_MEAN_MOTION_DDOT, 0.0);
  }
  /// Position/Velocity Covariance Matrix (6x6 Lower Triangular) [C if any covariance provided]
  /// COV_REF_FRAME reference frame for covariance [C if covariance given]
  /// Typically RSW
  const RFM *COV_REFERENCE_FRAME() const {
    return GetPointer<const RFM *>(VT_COV_REFERENCE_FRAME);
  }
  /// CX_X [km**2]
  double CX_X() const {
    return GetField<double>(VT_CX_X, 0.0);
  }
  /// CY_X [km**2]
  double CY_X() const {
    return GetField<double>(VT_CY_X, 0.0);
  }
  /// CY_Y [km**2]
  double CY_Y() const {
    return GetField<double>(VT_CY_Y, 0.0);
  }
  /// CZ_X [km**2]
  double CZ_X() const {
    return GetField<double>(VT_CZ_X, 0.0);
  }
  /// CZ_Y [km**2]
  double CZ_Y() const {
    return GetField<double>(VT_CZ_Y, 0.0);
  }
  /// CZ_Z [km**2]
  double CZ_Z() const {
    return GetField<double>(VT_CZ_Z, 0.0);
  }
  /// CX_DOT_X [km**2/s]
  double CX_DOT_X() const {
    return GetField<double>(VT_CX_DOT_X, 0.0);
  }
  /// CX_DOT_Y [km**2/s]
  double CX_DOT_Y() const {
    return GetField<double>(VT_CX_DOT_Y, 0.0);
  }
  /// CX_DOT_Z [km**2/s]
  double CX_DOT_Z() const {
    return GetField<double>(VT_CX_DOT_Z, 0.0);
  }
  /// CX_DOT_X_DOT [km**2/s**2]
  double CX_DOT_X_DOT() const {
    return GetField<double>(VT_CX_DOT_X_DOT, 0.0);
  }
  /// CY_DOT_X [km**2/s]
  double CY_DOT_X() const {
    return GetField<double>(VT_CY_DOT_X, 0.0);
  }
  /// CY_DOT_Y [km**2/s]
  double CY_DOT_Y() const {
    return GetField<double>(VT_CY_DOT_Y, 0.0);
  }
  /// CY_DOT_Z [km**2/s]
  double CY_DOT_Z() const {
    return GetField<double>(VT_CY_DOT_Z, 0.0);
  }
  /// CY_DOT_X_DOT [km**2/s**2]
  double CY_DOT_X_DOT() const {
    return GetField<double>(VT_CY_DOT_X_DOT, 0.0);
  }
  /// CY_DOT_Y_DOT [km**2/s**2]
  double CY_DOT_Y_DOT() const {
    return GetField<double>(VT_CY_DOT_Y_DOT, 0.0);
  }
  /// CZ_DOT_X [km**2/s]
  double CZ_DOT_X() const {
    return GetField<double>(VT_CZ_DOT_X, 0.0);
  }
  /// CZ_DOT_Y [km**2/s]
  double CZ_DOT_Y() const {
    return GetField<double>(VT_CZ_DOT_Y, 0.0);
  }
  /// CZ_DOT_Z [km**2/s]
  double CZ_DOT_Z() const {
    return GetField<double>(VT_CZ_DOT_Z, 0.0);
  }
  /// CZ_DOT_X_DOT [km**2/s**2]
  double CZ_DOT_X_DOT() const {
    return GetField<double>(VT_CZ_DOT_X_DOT, 0.0);
  }
  /// CZ_DOT_Y_DOT [km**2/s**2]
  double CZ_DOT_Y_DOT() const {
    return GetField<double>(VT_CZ_DOT_Y_DOT, 0.0);
  }
  /// CZ_DOT_Z_DOT [km**2/s**2]
  double CZ_DOT_Z_DOT() const {
    return GetField<double>(VT_CZ_DOT_Z_DOT, 0.0);
  }
  /// USER_DEFINED_BIP_0044_TYPE [O, units per ICD]
  uint32_t USER_DEFINED_BIP_0044_TYPE() const {
    return GetField<uint32_t>(VT_USER_DEFINED_BIP_0044_TYPE, 0);
  }
  /// USER_DEFINED_OBJECT_DESIGNATOR [O, units per ICD]
  const ::flatbuffers::String *USER_DEFINED_OBJECT_DESIGNATOR() const {
    return GetPointer<const ::flatbuffers::String *>(VT_USER_DEFINED_OBJECT_DESIGNATOR);
  }
  /// USER_DEFINED_EARTH_MODEL [O, units per ICD]
  const ::flatbuffers::String *USER_DEFINED_EARTH_MODEL() const {
    return GetPointer<const ::flatbuffers::String *>(VT_USER_DEFINED_EARTH_MODEL);
  }
  /// USER_DEFINED_EPOCH_TIMESTAMP [O, units per ICD]
  double USER_DEFINED_EPOCH_TIMESTAMP() const {
    return GetField<double>(VT_USER_DEFINED_EPOCH_TIMESTAMP, 0.0);
  }
  /// USER_DEFINED_MICROSECONDS [O, units per ICD]
  double USER_DEFINED_MICROSECONDS() const {
    return GetField<double>(VT_USER_DEFINED_MICROSECONDS, 0.0);
  }
  bool Verify(::flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<double>(verifier, VT_CCSDS_OMM_VERS, 8) &&
           VerifyOffset(verifier, VT_CREATION_DATE) &&
           verifier.VerifyString(CREATION_DATE()) &&
           VerifyOffset(verifier, VT_ORIGINATOR) &&
           verifier.VerifyString(ORIGINATOR()) &&
           VerifyOffset(verifier, VT_OBJECT_NAME) &&
           verifier.VerifyString(OBJECT_NAME()) &&
           VerifyOffset(verifier, VT_OBJECT_ID) &&
           verifier.VerifyString(OBJECT_ID()) &&
           VerifyOffset(verifier, VT_CENTER_NAME) &&
           verifier.VerifyString(CENTER_NAME()) &&
           VerifyOffset(verifier, VT_REFERENCE_FRAME) &&
           verifier.VerifyTable(REFERENCE_FRAME()) &&
           VerifyOffset(verifier, VT_REFERENCE_FRAME_EPOCH) &&
           verifier.VerifyString(REFERENCE_FRAME_EPOCH()) &&
           VerifyField<int8_t>(verifier, VT_TIME_SYSTEM, 1) &&
           VerifyField<int8_t>(verifier, VT_MEAN_ELEMENT_THEORY, 1) &&
           VerifyOffset(verifier, VT_COMMENT) &&
           verifier.VerifyString(COMMENT()) &&
           VerifyOffset(verifier, VT_EPOCH) &&
           verifier.VerifyString(EPOCH()) &&
           VerifyField<double>(verifier, VT_SEMI_MAJOR_AXIS, 8) &&
           VerifyField<double>(verifier, VT_MEAN_MOTION, 8) &&
           VerifyField<double>(verifier, VT_ECCENTRICITY, 8) &&
           VerifyField<double>(verifier, VT_INCLINATION, 8) &&
           VerifyField<double>(verifier, VT_RA_OF_ASC_NODE, 8) &&
           VerifyField<double>(verifier, VT_ARG_OF_PERICENTER, 8) &&
           VerifyField<double>(verifier, VT_MEAN_ANOMALY, 8) &&
           VerifyField<double>(verifier, VT_GM, 8) &&
           VerifyField<double>(verifier, VT_MASS, 8) &&
           VerifyField<double>(verifier, VT_SOLAR_RAD_AREA, 8) &&
           VerifyField<double>(verifier, VT_SOLAR_RAD_COEFF, 8) &&
           VerifyField<double>(verifier, VT_DRAG_AREA, 8) &&
           VerifyField<double>(verifier, VT_DRAG_COEFF, 8) &&
           VerifyField<int8_t>(verifier, VT_EPHEMERIS_TYPE, 1) &&
           VerifyOffset(verifier, VT_CLASSIFICATION_TYPE) &&
           verifier.VerifyString(CLASSIFICATION_TYPE()) &&
           VerifyField<uint32_t>(verifier, VT_NORAD_CAT_ID, 4) &&
           VerifyField<uint32_t>(verifier, VT_ELEMENT_SET_NO, 4) &&
           VerifyField<double>(verifier, VT_REV_AT_EPOCH, 8) &&
           VerifyField<double>(verifier, VT_BSTAR, 8) &&
           VerifyField<double>(verifier, VT_MEAN_MOTION_DOT, 8) &&
           VerifyField<double>(verifier, VT_MEAN_MOTION_DDOT, 8) &&
           VerifyOffset(verifier, VT_COV_REFERENCE_FRAME) &&
           verifier.VerifyTable(COV_REFERENCE_FRAME()) &&
           VerifyField<double>(verifier, VT_CX_X, 8) &&
           VerifyField<double>(verifier, VT_CY_X, 8) &&
           VerifyField<double>(verifier, VT_CY_Y, 8) &&
           VerifyField<double>(verifier, VT_CZ_X, 8) &&
           VerifyField<double>(verifier, VT_CZ_Y, 8) &&
           VerifyField<double>(verifier, VT_CZ_Z, 8) &&
           VerifyField<double>(verifier, VT_CX_DOT_X, 8) &&
           VerifyField<double>(verifier, VT_CX_DOT_Y, 8) &&
           VerifyField<double>(verifier, VT_CX_DOT_Z, 8) &&
           VerifyField<double>(verifier, VT_CX_DOT_X_DOT, 8) &&
           VerifyField<double>(verifier, VT_CY_DOT_X, 8) &&
           VerifyField<double>(verifier, VT_CY_DOT_Y, 8) &&
           VerifyField<double>(verifier, VT_CY_DOT_Z, 8) &&
           VerifyField<double>(verifier, VT_CY_DOT_X_DOT, 8) &&
           VerifyField<double>(verifier, VT_CY_DOT_Y_DOT, 8) &&
           VerifyField<double>(verifier, VT_CZ_DOT_X, 8) &&
           VerifyField<double>(verifier, VT_CZ_DOT_Y, 8) &&
           VerifyField<double>(verifier, VT_CZ_DOT_Z, 8) &&
           VerifyField<double>(verifier, VT_CZ_DOT_X_DOT, 8) &&
           VerifyField<double>(verifier, VT_CZ_DOT_Y_DOT, 8) &&
           VerifyField<double>(verifier, VT_CZ_DOT_Z_DOT, 8) &&
           VerifyField<uint32_t>(verifier, VT_USER_DEFINED_BIP_0044_TYPE, 4) &&
           VerifyOffset(verifier, VT_USER_DEFINED_OBJECT_DESIGNATOR) &&
           verifier.VerifyString(USER_DEFINED_OBJECT_DESIGNATOR()) &&
           VerifyOffset(verifier, VT_USER_DEFINED_EARTH_MODEL) &&
           verifier.VerifyString(USER_DEFINED_EARTH_MODEL()) &&
           VerifyField<double>(verifier, VT_USER_DEFINED_EPOCH_TIMESTAMP, 8) &&
           VerifyField<double>(verifier, VT_USER_DEFINED_MICROSECONDS, 8) &&
           verifier.EndTable();
  }
};

struct OMMBuilder {
  typedef OMM Table;
  ::flatbuffers::FlatBufferBuilder &fbb_;
  ::flatbuffers::uoffset_t start_;
  void add_CCSDS_OMM_VERS(double CCSDS_OMM_VERS) {
    fbb_.AddElement<double>(OMM::VT_CCSDS_OMM_VERS, CCSDS_OMM_VERS, 0.0);
  }
  void add_CREATION_DATE(::flatbuffers::Offset<::flatbuffers::String> CREATION_DATE) {
    fbb_.AddOffset(OMM::VT_CREATION_DATE, CREATION_DATE);
  }
  void add_ORIGINATOR(::flatbuffers::Offset<::flatbuffers::String> ORIGINATOR) {
    fbb_.AddOffset(OMM::VT_ORIGINATOR, ORIGINATOR);
  }
  void add_OBJECT_NAME(::flatbuffers::Offset<::flatbuffers::String> OBJECT_NAME) {
    fbb_.AddOffset(OMM::VT_OBJECT_NAME, OBJECT_NAME);
  }
  void add_OBJECT_ID(::flatbuffers::Offset<::flatbuffers::String> OBJECT_ID) {
    fbb_.AddOffset(OMM::VT_OBJECT_ID, OBJECT_ID);
  }
  void add_CENTER_NAME(::flatbuffers::Offset<::flatbuffers::String> CENTER_NAME) {
    fbb_.AddOffset(OMM::VT_CENTER_NAME, CENTER_NAME);
  }
  void add_REFERENCE_FRAME(::flatbuffers::Offset<RFM> REFERENCE_FRAME) {
    fbb_.AddOffset(OMM::VT_REFERENCE_FRAME, REFERENCE_FRAME);
  }
  void add_REFERENCE_FRAME_EPOCH(::flatbuffers::Offset<::flatbuffers::String> REFERENCE_FRAME_EPOCH) {
    fbb_.AddOffset(OMM::VT_REFERENCE_FRAME_EPOCH, REFERENCE_FRAME_EPOCH);
  }
  void add_TIME_SYSTEM(timeSystem TIME_SYSTEM) {
    fbb_.AddElement<int8_t>(OMM::VT_TIME_SYSTEM, static_cast<int8_t>(TIME_SYSTEM), 11);
  }
  void add_MEAN_ELEMENT_THEORY(meanElementTheory MEAN_ELEMENT_THEORY) {
    fbb_.AddElement<int8_t>(OMM::VT_MEAN_ELEMENT_THEORY, static_cast<int8_t>(MEAN_ELEMENT_THEORY), 0);
  }
  void add_COMMENT(::flatbuffers::Offset<::flatbuffers::String> COMMENT) {
    fbb_.AddOffset(OMM::VT_COMMENT, COMMENT);
  }
  void add_EPOCH(::flatbuffers::Offset<::flatbuffers::String> EPOCH) {
    fbb_.AddOffset(OMM::VT_EPOCH, EPOCH);
  }
  void add_SEMI_MAJOR_AXIS(double SEMI_MAJOR_AXIS) {
    fbb_.AddElement<double>(OMM::VT_SEMI_MAJOR_AXIS, SEMI_MAJOR_AXIS, 0.0);
  }
  void add_MEAN_MOTION(double MEAN_MOTION) {
    fbb_.AddElement<double>(OMM::VT_MEAN_MOTION, MEAN_MOTION, 0.0);
  }
  void add_ECCENTRICITY(double ECCENTRICITY) {
    fbb_.AddElement<double>(OMM::VT_ECCENTRICITY, ECCENTRICITY, 0.0);
  }
  void add_INCLINATION(double INCLINATION) {
    fbb_.AddElement<double>(OMM::VT_INCLINATION, INCLINATION, 0.0);
  }
  void add_RA_OF_ASC_NODE(double RA_OF_ASC_NODE) {
    fbb_.AddElement<double>(OMM::VT_RA_OF_ASC_NODE, RA_OF_ASC_NODE, 0.0);
  }
  void add_ARG_OF_PERICENTER(double ARG_OF_PERICENTER) {
    fbb_.AddElement<double>(OMM::VT_ARG_OF_PERICENTER, ARG_OF_PERICENTER, 0.0);
  }
  void add_MEAN_ANOMALY(double MEAN_ANOMALY) {
    fbb_.AddElement<double>(OMM::VT_MEAN_ANOMALY, MEAN_ANOMALY, 0.0);
  }
  void add_GM(double GM) {
    fbb_.AddElement<double>(OMM::VT_GM, GM, 0.0);
  }
  void add_MASS(double MASS) {
    fbb_.AddElement<double>(OMM::VT_MASS, MASS, 0.0);
  }
  void add_SOLAR_RAD_AREA(double SOLAR_RAD_AREA) {
    fbb_.AddElement<double>(OMM::VT_SOLAR_RAD_AREA, SOLAR_RAD_AREA, 0.0);
  }
  void add_SOLAR_RAD_COEFF(double SOLAR_RAD_COEFF) {
    fbb_.AddElement<double>(OMM::VT_SOLAR_RAD_COEFF, SOLAR_RAD_COEFF, 0.0);
  }
  void add_DRAG_AREA(double DRAG_AREA) {
    fbb_.AddElement<double>(OMM::VT_DRAG_AREA, DRAG_AREA, 0.0);
  }
  void add_DRAG_COEFF(double DRAG_COEFF) {
    fbb_.AddElement<double>(OMM::VT_DRAG_COEFF, DRAG_COEFF, 0.0);
  }
  void add_EPHEMERIS_TYPE(ephemerisType EPHEMERIS_TYPE) {
    fbb_.AddElement<int8_t>(OMM::VT_EPHEMERIS_TYPE, static_cast<int8_t>(EPHEMERIS_TYPE), 1);
  }
  void add_CLASSIFICATION_TYPE(::flatbuffers::Offset<::flatbuffers::String> CLASSIFICATION_TYPE) {
    fbb_.AddOffset(OMM::VT_CLASSIFICATION_TYPE, CLASSIFICATION_TYPE);
  }
  void add_NORAD_CAT_ID(uint32_t NORAD_CAT_ID) {
    fbb_.AddElement<uint32_t>(OMM::VT_NORAD_CAT_ID, NORAD_CAT_ID, 0);
  }
  void add_ELEMENT_SET_NO(uint32_t ELEMENT_SET_NO) {
    fbb_.AddElement<uint32_t>(OMM::VT_ELEMENT_SET_NO, ELEMENT_SET_NO, 0);
  }
  void add_REV_AT_EPOCH(double REV_AT_EPOCH) {
    fbb_.AddElement<double>(OMM::VT_REV_AT_EPOCH, REV_AT_EPOCH, 0.0);
  }
  void add_BSTAR(double BSTAR) {
    fbb_.AddElement<double>(OMM::VT_BSTAR, BSTAR, 0.0);
  }
  void add_MEAN_MOTION_DOT(double MEAN_MOTION_DOT) {
    fbb_.AddElement<double>(OMM::VT_MEAN_MOTION_DOT, MEAN_MOTION_DOT, 0.0);
  }
  void add_MEAN_MOTION_DDOT(double MEAN_MOTION_DDOT) {
    fbb_.AddElement<double>(OMM::VT_MEAN_MOTION_DDOT, MEAN_MOTION_DDOT, 0.0);
  }
  void add_COV_REFERENCE_FRAME(::flatbuffers::Offset<RFM> COV_REFERENCE_FRAME) {
    fbb_.AddOffset(OMM::VT_COV_REFERENCE_FRAME, COV_REFERENCE_FRAME);
  }
  void add_CX_X(double CX_X) {
    fbb_.AddElement<double>(OMM::VT_CX_X, CX_X, 0.0);
  }
  void add_CY_X(double CY_X) {
    fbb_.AddElement<double>(OMM::VT_CY_X, CY_X, 0.0);
  }
  void add_CY_Y(double CY_Y) {
    fbb_.AddElement<double>(OMM::VT_CY_Y, CY_Y, 0.0);
  }
  void add_CZ_X(double CZ_X) {
    fbb_.AddElement<double>(OMM::VT_CZ_X, CZ_X, 0.0);
  }
  void add_CZ_Y(double CZ_Y) {
    fbb_.AddElement<double>(OMM::VT_CZ_Y, CZ_Y, 0.0);
  }
  void add_CZ_Z(double CZ_Z) {
    fbb_.AddElement<double>(OMM::VT_CZ_Z, CZ_Z, 0.0);
  }
  void add_CX_DOT_X(double CX_DOT_X) {
    fbb_.AddElement<double>(OMM::VT_CX_DOT_X, CX_DOT_X, 0.0);
  }
  void add_CX_DOT_Y(double CX_DOT_Y) {
    fbb_.AddElement<double>(OMM::VT_CX_DOT_Y, CX_DOT_Y, 0.0);
  }
  void add_CX_DOT_Z(double CX_DOT_Z) {
    fbb_.AddElement<double>(OMM::VT_CX_DOT_Z, CX_DOT_Z, 0.0);
  }
  void add_CX_DOT_X_DOT(double CX_DOT_X_DOT) {
    fbb_.AddElement<double>(OMM::VT_CX_DOT_X_DOT, CX_DOT_X_DOT, 0.0);
  }
  void add_CY_DOT_X(double CY_DOT_X) {
    fbb_.AddElement<double>(OMM::VT_CY_DOT_X, CY_DOT_X, 0.0);
  }
  void add_CY_DOT_Y(double CY_DOT_Y) {
    fbb_.AddElement<double>(OMM::VT_CY_DOT_Y, CY_DOT_Y, 0.0);
  }
  void add_CY_DOT_Z(double CY_DOT_Z) {
    fbb_.AddElement<double>(OMM::VT_CY_DOT_Z, CY_DOT_Z, 0.0);
  }
  void add_CY_DOT_X_DOT(double CY_DOT_X_DOT) {
    fbb_.AddElement<double>(OMM::VT_CY_DOT_X_DOT, CY_DOT_X_DOT, 0.0);
  }
  void add_CY_DOT_Y_DOT(double CY_DOT_Y_DOT) {
    fbb_.AddElement<double>(OMM::VT_CY_DOT_Y_DOT, CY_DOT_Y_DOT, 0.0);
  }
  void add_CZ_DOT_X(double CZ_DOT_X) {
    fbb_.AddElement<double>(OMM::VT_CZ_DOT_X, CZ_DOT_X, 0.0);
  }
  void add_CZ_DOT_Y(double CZ_DOT_Y) {
    fbb_.AddElement<double>(OMM::VT_CZ_DOT_Y, CZ_DOT_Y, 0.0);
  }
  void add_CZ_DOT_Z(double CZ_DOT_Z) {
    fbb_.AddElement<double>(OMM::VT_CZ_DOT_Z, CZ_DOT_Z, 0.0);
  }
  void add_CZ_DOT_X_DOT(double CZ_DOT_X_DOT) {
    fbb_.AddElement<double>(OMM::VT_CZ_DOT_X_DOT, CZ_DOT_X_DOT, 0.0);
  }
  void add_CZ_DOT_Y_DOT(double CZ_DOT_Y_DOT) {
    fbb_.AddElement<double>(OMM::VT_CZ_DOT_Y_DOT, CZ_DOT_Y_DOT, 0.0);
  }
  void add_CZ_DOT_Z_DOT(double CZ_DOT_Z_DOT) {
    fbb_.AddElement<double>(OMM::VT_CZ_DOT_Z_DOT, CZ_DOT_Z_DOT, 0.0);
  }
  void add_USER_DEFINED_BIP_0044_TYPE(uint32_t USER_DEFINED_BIP_0044_TYPE) {
    fbb_.AddElement<uint32_t>(OMM::VT_USER_DEFINED_BIP_0044_TYPE, USER_DEFINED_BIP_0044_TYPE, 0);
  }
  void add_USER_DEFINED_OBJECT_DESIGNATOR(::flatbuffers::Offset<::flatbuffers::String> USER_DEFINED_OBJECT_DESIGNATOR) {
    fbb_.AddOffset(OMM::VT_USER_DEFINED_OBJECT_DESIGNATOR, USER_DEFINED_OBJECT_DESIGNATOR);
  }
  void add_USER_DEFINED_EARTH_MODEL(::flatbuffers::Offset<::flatbuffers::String> USER_DEFINED_EARTH_MODEL) {
    fbb_.AddOffset(OMM::VT_USER_DEFINED_EARTH_MODEL, USER_DEFINED_EARTH_MODEL);
  }
  void add_USER_DEFINED_EPOCH_TIMESTAMP(double USER_DEFINED_EPOCH_TIMESTAMP) {
    fbb_.AddElement<double>(OMM::VT_USER_DEFINED_EPOCH_TIMESTAMP, USER_DEFINED_EPOCH_TIMESTAMP, 0.0);
  }
  void add_USER_DEFINED_MICROSECONDS(double USER_DEFINED_MICROSECONDS) {
    fbb_.AddElement<double>(OMM::VT_USER_DEFINED_MICROSECONDS, USER_DEFINED_MICROSECONDS, 0.0);
  }
  explicit OMMBuilder(::flatbuffers::FlatBufferBuilder &_fbb)
        : fbb_(_fbb) {
    start_ = fbb_.StartTable();
  }
  ::flatbuffers::Offset<OMM> Finish() {
    const auto end = fbb_.EndTable(start_);
    auto o = ::flatbuffers::Offset<OMM>(end);
    return o;
  }
};

inline ::flatbuffers::Offset<OMM> CreateOMM(
    ::flatbuffers::FlatBufferBuilder &_fbb,
    double CCSDS_OMM_VERS = 0.0,
    ::flatbuffers::Offset<::flatbuffers::String> CREATION_DATE = 0,
    ::flatbuffers::Offset<::flatbuffers::String> ORIGINATOR = 0,
    ::flatbuffers::Offset<::flatbuffers::String> OBJECT_NAME = 0,
    ::flatbuffers::Offset<::flatbuffers::String> OBJECT_ID = 0,
    ::flatbuffers::Offset<::flatbuffers::String> CENTER_NAME = 0,
    ::flatbuffers::Offset<RFM> REFERENCE_FRAME = 0,
    ::flatbuffers::Offset<::flatbuffers::String> REFERENCE_FRAME_EPOCH = 0,
    timeSystem TIME_SYSTEM = timeSystem_UTC,
    meanElementTheory MEAN_ELEMENT_THEORY = meanElementTheory_SGP4,
    ::flatbuffers::Offset<::flatbuffers::String> COMMENT = 0,
    ::flatbuffers::Offset<::flatbuffers::String> EPOCH = 0,
    double SEMI_MAJOR_AXIS = 0.0,
    double MEAN_MOTION = 0.0,
    double ECCENTRICITY = 0.0,
    double INCLINATION = 0.0,
    double RA_OF_ASC_NODE = 0.0,
    double ARG_OF_PERICENTER = 0.0,
    double MEAN_ANOMALY = 0.0,
    double GM = 0.0,
    double MASS = 0.0,
    double SOLAR_RAD_AREA = 0.0,
    double SOLAR_RAD_COEFF = 0.0,
    double DRAG_AREA = 0.0,
    double DRAG_COEFF = 0.0,
    ephemerisType EPHEMERIS_TYPE = ephemerisType_SGP4,
    ::flatbuffers::Offset<::flatbuffers::String> CLASSIFICATION_TYPE = 0,
    uint32_t NORAD_CAT_ID = 0,
    uint32_t ELEMENT_SET_NO = 0,
    double REV_AT_EPOCH = 0.0,
    double BSTAR = 0.0,
    double MEAN_MOTION_DOT = 0.0,
    double MEAN_MOTION_DDOT = 0.0,
    ::flatbuffers::Offset<RFM> COV_REFERENCE_FRAME = 0,
    double CX_X = 0.0,
    double CY_X = 0.0,
    double CY_Y = 0.0,
    double CZ_X = 0.0,
    double CZ_Y = 0.0,
    double CZ_Z = 0.0,
    double CX_DOT_X = 0.0,
    double CX_DOT_Y = 0.0,
    double CX_DOT_Z = 0.0,
    double CX_DOT_X_DOT = 0.0,
    double CY_DOT_X = 0.0,
    double CY_DOT_Y = 0.0,
    double CY_DOT_Z = 0.0,
    double CY_DOT_X_DOT = 0.0,
    double CY_DOT_Y_DOT = 0.0,
    double CZ_DOT_X = 0.0,
    double CZ_DOT_Y = 0.0,
    double CZ_DOT_Z = 0.0,
    double CZ_DOT_X_DOT = 0.0,
    double CZ_DOT_Y_DOT = 0.0,
    double CZ_DOT_Z_DOT = 0.0,
    uint32_t USER_DEFINED_BIP_0044_TYPE = 0,
    ::flatbuffers::Offset<::flatbuffers::String> USER_DEFINED_OBJECT_DESIGNATOR = 0,
    ::flatbuffers::Offset<::flatbuffers::String> USER_DEFINED_EARTH_MODEL = 0,
    double USER_DEFINED_EPOCH_TIMESTAMP = 0.0,
    double USER_DEFINED_MICROSECONDS = 0.0) {
  OMMBuilder builder_(_fbb);
  builder_.add_USER_DEFINED_MICROSECONDS(USER_DEFINED_MICROSECONDS);
  builder_.add_USER_DEFINED_EPOCH_TIMESTAMP(USER_DEFINED_EPOCH_TIMESTAMP);
  builder_.add_CZ_DOT_Z_DOT(CZ_DOT_Z_DOT);
  builder_.add_CZ_DOT_Y_DOT(CZ_DOT_Y_DOT);
  builder_.add_CZ_DOT_X_DOT(CZ_DOT_X_DOT);
  builder_.add_CZ_DOT_Z(CZ_DOT_Z);
  builder_.add_CZ_DOT_Y(CZ_DOT_Y);
  builder_.add_CZ_DOT_X(CZ_DOT_X);
  builder_.add_CY_DOT_Y_DOT(CY_DOT_Y_DOT);
  builder_.add_CY_DOT_X_DOT(CY_DOT_X_DOT);
  builder_.add_CY_DOT_Z(CY_DOT_Z);
  builder_.add_CY_DOT_Y(CY_DOT_Y);
  builder_.add_CY_DOT_X(CY_DOT_X);
  builder_.add_CX_DOT_X_DOT(CX_DOT_X_DOT);
  builder_.add_CX_DOT_Z(CX_DOT_Z);
  builder_.add_CX_DOT_Y(CX_DOT_Y);
  builder_.add_CX_DOT_X(CX_DOT_X);
  builder_.add_CZ_Z(CZ_Z);
  builder_.add_CZ_Y(CZ_Y);
  builder_.add_CZ_X(CZ_X);
  builder_.add_CY_Y(CY_Y);
  builder_.add_CY_X(CY_X);
  builder_.add_CX_X(CX_X);
  builder_.add_MEAN_MOTION_DDOT(MEAN_MOTION_DDOT);
  builder_.add_MEAN_MOTION_DOT(MEAN_MOTION_DOT);
  builder_.add_BSTAR(BSTAR);
  builder_.add_REV_AT_EPOCH(REV_AT_EPOCH);
  builder_.add_DRAG_COEFF(DRAG_COEFF);
  builder_.add_DRAG_AREA(DRAG_AREA);
  builder_.add_SOLAR_RAD_COEFF(SOLAR_RAD_COEFF);
  builder_.add_SOLAR_RAD_AREA(SOLAR_RAD_AREA);
  builder_.add_MASS(MASS);
  builder_.add_GM(GM);
  builder_.add_MEAN_ANOMALY(MEAN_ANOMALY);
  builder_.add_ARG_OF_PERICENTER(ARG_OF_PERICENTER);
  builder_.add_RA_OF_ASC_NODE(RA_OF_ASC_NODE);
  builder_.add_INCLINATION(INCLINATION);
  builder_.add_ECCENTRICITY(ECCENTRICITY);
  builder_.add_MEAN_MOTION(MEAN_MOTION);
  builder_.add_SEMI_MAJOR_AXIS(SEMI_MAJOR_AXIS);
  builder_.add_CCSDS_OMM_VERS(CCSDS_OMM_VERS);
  builder_.add_USER_DEFINED_EARTH_MODEL(USER_DEFINED_EARTH_MODEL);
  builder_.add_USER_DEFINED_OBJECT_DESIGNATOR(USER_DEFINED_OBJECT_DESIGNATOR);
  builder_.add_USER_DEFINED_BIP_0044_TYPE(USER_DEFINED_BIP_0044_TYPE);
  builder_.add_COV_REFERENCE_FRAME(COV_REFERENCE_FRAME);
  builder_.add_ELEMENT_SET_NO(ELEMENT_SET_NO);
  builder_.add_NORAD_CAT_ID(NORAD_CAT_ID);
  builder_.add_CLASSIFICATION_TYPE(CLASSIFICATION_TYPE);
  builder_.add_EPOCH(EPOCH);
  builder_.add_COMMENT(COMMENT);
  builder_.add_REFERENCE_FRAME_EPOCH(REFERENCE_FRAME_EPOCH);
  builder_.add_REFERENCE_FRAME(REFERENCE_FRAME);
  builder_.add_CENTER_NAME(CENTER_NAME);
  builder_.add_OBJECT_ID(OBJECT_ID);
  builder_.add_OBJECT_NAME(OBJECT_NAME);
  builder_.add_ORIGINATOR(ORIGINATOR);
  builder_.add_CREATION_DATE(CREATION_DATE);
  builder_.add_EPHEMERIS_TYPE(EPHEMERIS_TYPE);
  builder_.add_MEAN_ELEMENT_THEORY(MEAN_ELEMENT_THEORY);
  builder_.add_TIME_SYSTEM(TIME_SYSTEM);
  return builder_.Finish();
}

inline ::flatbuffers::Offset<OMM> CreateOMMDirect(
    ::flatbuffers::FlatBufferBuilder &_fbb,
    double CCSDS_OMM_VERS = 0.0,
    const char *CREATION_DATE = nullptr,
    const char *ORIGINATOR = nullptr,
    const char *OBJECT_NAME = nullptr,
    const char *OBJECT_ID = nullptr,
    const char *CENTER_NAME = nullptr,
    ::flatbuffers::Offset<RFM> REFERENCE_FRAME = 0,
    const char *REFERENCE_FRAME_EPOCH = nullptr,
    timeSystem TIME_SYSTEM = timeSystem_UTC,
    meanElementTheory MEAN_ELEMENT_THEORY = meanElementTheory_SGP4,
    const char *COMMENT = nullptr,
    const char *EPOCH = nullptr,
    double SEMI_MAJOR_AXIS = 0.0,
    double MEAN_MOTION = 0.0,
    double ECCENTRICITY = 0.0,
    double INCLINATION = 0.0,
    double RA_OF_ASC_NODE = 0.0,
    double ARG_OF_PERICENTER = 0.0,
    double MEAN_ANOMALY = 0.0,
    double GM = 0.0,
    double MASS = 0.0,
    double SOLAR_RAD_AREA = 0.0,
    double SOLAR_RAD_COEFF = 0.0,
    double DRAG_AREA = 0.0,
    double DRAG_COEFF = 0.0,
    ephemerisType EPHEMERIS_TYPE = ephemerisType_SGP4,
    const char *CLASSIFICATION_TYPE = nullptr,
    uint32_t NORAD_CAT_ID = 0,
    uint32_t ELEMENT_SET_NO = 0,
    double REV_AT_EPOCH = 0.0,
    double BSTAR = 0.0,
    double MEAN_MOTION_DOT = 0.0,
    double MEAN_MOTION_DDOT = 0.0,
    ::flatbuffers::Offset<RFM> COV_REFERENCE_FRAME = 0,
    double CX_X = 0.0,
    double CY_X = 0.0,
    double CY_Y = 0.0,
    double CZ_X = 0.0,
    double CZ_Y = 0.0,
    double CZ_Z = 0.0,
    double CX_DOT_X = 0.0,
    double CX_DOT_Y = 0.0,
    double CX_DOT_Z = 0.0,
    double CX_DOT_X_DOT = 0.0,
    double CY_DOT_X = 0.0,
    double CY_DOT_Y = 0.0,
    double CY_DOT_Z = 0.0,
    double CY_DOT_X_DOT = 0.0,
    double CY_DOT_Y_DOT = 0.0,
    double CZ_DOT_X = 0.0,
    double CZ_DOT_Y = 0.0,
    double CZ_DOT_Z = 0.0,
    double CZ_DOT_X_DOT = 0.0,
    double CZ_DOT_Y_DOT = 0.0,
    double CZ_DOT_Z_DOT = 0.0,
    uint32_t USER_DEFINED_BIP_0044_TYPE = 0,
    const char *USER_DEFINED_OBJECT_DESIGNATOR = nullptr,
    const char *USER_DEFINED_EARTH_MODEL = nullptr,
    double USER_DEFINED_EPOCH_TIMESTAMP = 0.0,
    double USER_DEFINED_MICROSECONDS = 0.0) {
  auto CREATION_DATE__ = CREATION_DATE ? _fbb.CreateString(CREATION_DATE) : 0;
  auto ORIGINATOR__ = ORIGINATOR ? _fbb.CreateString(ORIGINATOR) : 0;
  auto OBJECT_NAME__ = OBJECT_NAME ? _fbb.CreateString(OBJECT_NAME) : 0;
  auto OBJECT_ID__ = OBJECT_ID ? _fbb.CreateString(OBJECT_ID) : 0;
  auto CENTER_NAME__ = CENTER_NAME ? _fbb.CreateString(CENTER_NAME) : 0;
  auto REFERENCE_FRAME_EPOCH__ = REFERENCE_FRAME_EPOCH ? _fbb.CreateString(REFERENCE_FRAME_EPOCH) : 0;
  auto COMMENT__ = COMMENT ? _fbb.CreateString(COMMENT) : 0;
  auto EPOCH__ = EPOCH ? _fbb.CreateString(EPOCH) : 0;
  auto CLASSIFICATION_TYPE__ = CLASSIFICATION_TYPE ? _fbb.CreateString(CLASSIFICATION_TYPE) : 0;
  auto USER_DEFINED_OBJECT_DESIGNATOR__ = USER_DEFINED_OBJECT_DESIGNATOR ? _fbb.CreateString(USER_DEFINED_OBJECT_DESIGNATOR) : 0;
  auto USER_DEFINED_EARTH_MODEL__ = USER_DEFINED_EARTH_MODEL ? _fbb.CreateString(USER_DEFINED_EARTH_MODEL) : 0;
  return CreateOMM(
      _fbb,
      CCSDS_OMM_VERS,
      CREATION_DATE__,
      ORIGINATOR__,
      OBJECT_NAME__,
      OBJECT_ID__,
      CENTER_NAME__,
      REFERENCE_FRAME,
      REFERENCE_FRAME_EPOCH__,
      TIME_SYSTEM,
      MEAN_ELEMENT_THEORY,
      COMMENT__,
      EPOCH__,
      SEMI_MAJOR_AXIS,
      MEAN_MOTION,
      ECCENTRICITY,
      INCLINATION,
      RA_OF_ASC_NODE,
      ARG_OF_PERICENTER,
      MEAN_ANOMALY,
      GM,
      MASS,
      SOLAR_RAD_AREA,
      SOLAR_RAD_COEFF,
      DRAG_AREA,
      DRAG_COEFF,
      EPHEMERIS_TYPE,
      CLASSIFICATION_TYPE__,
      NORAD_CAT_ID,
      ELEMENT_SET_NO,
      REV_AT_EPOCH,
      BSTAR,
      MEAN_MOTION_DOT,
      MEAN_MOTION_DDOT,
      COV_REFERENCE_FRAME,
      CX_X,
      CY_X,
      CY_Y,
      CZ_X,
      CZ_Y,
      CZ_Z,
      CX_DOT_X,
      CX_DOT_Y,
      CX_DOT_Z,
      CX_DOT_X_DOT,
      CY_DOT_X,
      CY_DOT_Y,
      CY_DOT_Z,
      CY_DOT_X_DOT,
      CY_DOT_Y_DOT,
      CZ_DOT_X,
      CZ_DOT_Y,
      CZ_DOT_Z,
      CZ_DOT_X_DOT,
      CZ_DOT_Y_DOT,
      CZ_DOT_Z_DOT,
      USER_DEFINED_BIP_0044_TYPE,
      USER_DEFINED_OBJECT_DESIGNATOR__,
      USER_DEFINED_EARTH_MODEL__,
      USER_DEFINED_EPOCH_TIMESTAMP,
      USER_DEFINED_MICROSECONDS);
}

inline const OMM *GetOMM(const void *buf) {
  return ::flatbuffers::GetRoot<OMM>(buf);
}

inline const OMM *GetSizePrefixedOMM(const void *buf) {
  return ::flatbuffers::GetSizePrefixedRoot<OMM>(buf);
}

inline const char *OMMIdentifier() {
  return "$OMM";
}

inline bool OMMBufferHasIdentifier(const void *buf) {
  return ::flatbuffers::BufferHasIdentifier(
      buf, OMMIdentifier());
}

inline bool SizePrefixedOMMBufferHasIdentifier(const void *buf) {
  return ::flatbuffers::BufferHasIdentifier(
      buf, OMMIdentifier(), true);
}

inline bool VerifyOMMBuffer(
    ::flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<OMM>(OMMIdentifier());
}

inline bool VerifySizePrefixedOMMBuffer(
    ::flatbuffers::Verifier &verifier) {
  return verifier.VerifySizePrefixedBuffer<OMM>(OMMIdentifier());
}

inline void FinishOMMBuffer(
    ::flatbuffers::FlatBufferBuilder &fbb,
    ::flatbuffers::Offset<OMM> root) {
  fbb.Finish(root, OMMIdentifier());
}

inline void FinishSizePrefixedOMMBuffer(
    ::flatbuffers::FlatBufferBuilder &fbb,
    ::flatbuffers::Offset<OMM> root) {
  fbb.FinishSizePrefixed(root, OMMIdentifier());
}

#endif  // FLATBUFFERS_GENERATED_MAIN_H_
