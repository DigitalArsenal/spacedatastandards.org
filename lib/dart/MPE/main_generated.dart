// automatically generated by the FlatBuffers compiler, do not modify
// ignore_for_file: unused_import, unused_field, unused_element, unused_local_variable

import 'dart:typed_data' show Uint8List;
import 'package:flat_buffers/flat_buffers.dart' as fb;


class ReferenceFrame {
  final int value;
  const ReferenceFrame._(this.value);

  factory ReferenceFrame.fromValue(int value) {
    final result = values[value];
    if (result == null) {
        throw StateError('Invalid value $value for bit flag enum ReferenceFrame');
    }
    return result;
  }

  static ReferenceFrame? _createOrNull(int? value) => 
      value == null ? null : ReferenceFrame.fromValue(value);

  static const int minValue = 0;
  static const int maxValue = 10;
  static bool containsValue(int value) => values.containsKey(value);

  ///  Earth Mean Equator and Equinox of J2000
  static const ReferenceFrame EME2000 = ReferenceFrame._(0);

  ///  Geocentric Celestial Reference Frame
  static const ReferenceFrame GCRF = ReferenceFrame._(1);

  ///  Greenwich Rotating Coordinates
  static const ReferenceFrame GRC = ReferenceFrame._(2);

  ///  International Celestial Reference Frame
  static const ReferenceFrame ICRF = ReferenceFrame._(3);

  ///  International Terrestrial Reference Frame 2000
  static const ReferenceFrame ITRF2000 = ReferenceFrame._(4);

  ///  International Terrestrial Reference Frame 1993
  static const ReferenceFrame ITRF93 = ReferenceFrame._(5);

  ///  International Terrestrial Reference Frame 1997
  static const ReferenceFrame ITRF97 = ReferenceFrame._(6);

  ///  Mars Centered Inertial
  static const ReferenceFrame MCI = ReferenceFrame._(7);

  ///  True of Date, Rotating
  static const ReferenceFrame TDR = ReferenceFrame._(8);

  ///  True Equator Mean Equinox
  static const ReferenceFrame TEME = ReferenceFrame._(9);

  ///  True of Date
  static const ReferenceFrame TOD = ReferenceFrame._(10);
  static const Map<int, ReferenceFrame> values = {
    0: EME2000,
    1: GCRF,
    2: GRC,
    3: ICRF,
    4: ITRF2000,
    5: ITRF93,
    6: ITRF97,
    7: MCI,
    8: TDR,
    9: TEME,
    10: TOD};

  static const fb.Reader<ReferenceFrame> reader = _ReferenceFrameReader();

  @override
  String toString() {
    return 'ReferenceFrame{value: $value}';
  }
}

class _ReferenceFrameReader extends fb.Reader<ReferenceFrame> {
  const _ReferenceFrameReader();

  @override
  int get size => 1;

  @override
  ReferenceFrame read(fb.BufferContext bc, int offset) =>
      ReferenceFrame.fromValue(const fb.Int8Reader().read(bc, offset));
}

class TimeSystem {
  final int value;
  const TimeSystem._(this.value);

  factory TimeSystem.fromValue(int value) {
    final result = values[value];
    if (result == null) {
        throw StateError('Invalid value $value for bit flag enum TimeSystem');
    }
    return result;
  }

  static TimeSystem? _createOrNull(int? value) => 
      value == null ? null : TimeSystem.fromValue(value);

  static const int minValue = 0;
  static const int maxValue = 11;
  static bool containsValue(int value) => values.containsKey(value);

  ///  Greenwich Mean Sidereal Time
  static const TimeSystem GMST = TimeSystem._(0);

  ///  Global Positioning System
  static const TimeSystem GPS = TimeSystem._(1);

  ///  Mission Elapsed Time
  static const TimeSystem MET = TimeSystem._(2);

  ///  Mission Relative Time
  static const TimeSystem MRT = TimeSystem._(3);

  ///  Spacecraft Clock (receiver) (requires rules for interpretation in ICD)
  static const TimeSystem SCLK = TimeSystem._(4);

  ///  International Atomic Time
  static const TimeSystem TAI = TimeSystem._(5);

  ///  Barycentric Coordinate Time
  static const TimeSystem TCB = TimeSystem._(6);

  ///  Barycentric Dynamical Time
  static const TimeSystem TDB = TimeSystem._(7);

  ///  Geocentric Coordinate Time
  static const TimeSystem TCG = TimeSystem._(8);

  ///  Terrestrial Time
  static const TimeSystem TT = TimeSystem._(9);

  ///  Universal Time
  static const TimeSystem UT1 = TimeSystem._(10);

  ///  Coordinated Universal Time
  static const TimeSystem UTC = TimeSystem._(11);
  static const Map<int, TimeSystem> values = {
    0: GMST,
    1: GPS,
    2: MET,
    3: MRT,
    4: SCLK,
    5: TAI,
    6: TCB,
    7: TDB,
    8: TCG,
    9: TT,
    10: UT1,
    11: UTC};

  static const fb.Reader<TimeSystem> reader = _TimeSystemReader();

  @override
  String toString() {
    return 'TimeSystem{value: $value}';
  }
}

class _TimeSystemReader extends fb.Reader<TimeSystem> {
  const _TimeSystemReader();

  @override
  int get size => 1;

  @override
  TimeSystem read(fb.BufferContext bc, int offset) =>
      TimeSystem.fromValue(const fb.Int8Reader().read(bc, offset));
}

class MeanElementTheory {
  final int value;
  const MeanElementTheory._(this.value);

  factory MeanElementTheory.fromValue(int value) {
    final result = values[value];
    if (result == null) {
        throw StateError('Invalid value $value for bit flag enum MeanElementTheory');
    }
    return result;
  }

  static MeanElementTheory? _createOrNull(int? value) => 
      value == null ? null : MeanElementTheory.fromValue(value);

  static const int minValue = 0;
  static const int maxValue = 2;
  static bool containsValue(int value) => values.containsKey(value);

  ///  Simplified General Perturbation Model 4
  static const MeanElementTheory SGP4 = MeanElementTheory._(0);

  ///  Draper Semi-analytical Satellite Theory
  static const MeanElementTheory DSST = MeanElementTheory._(1);

  ///  Universal Semianalytical Method
  static const MeanElementTheory USM = MeanElementTheory._(2);
  static const Map<int, MeanElementTheory> values = {
    0: SGP4,
    1: DSST,
    2: USM};

  static const fb.Reader<MeanElementTheory> reader = _MeanElementTheoryReader();

  @override
  String toString() {
    return 'MeanElementTheory{value: $value}';
  }
}

class _MeanElementTheoryReader extends fb.Reader<MeanElementTheory> {
  const _MeanElementTheoryReader();

  @override
  int get size => 1;

  @override
  MeanElementTheory read(fb.BufferContext bc, int offset) =>
      MeanElementTheory.fromValue(const fb.Int8Reader().read(bc, offset));
}

///  Minimum Propagatable Element Set
class MPE {
  MPE._(this._bc, this._bcOffset);
  factory MPE(List<int> bytes) {
    final rootRef = fb.BufferContext.fromBytes(bytes);
    return reader.read(rootRef, 0);
  }

  static const fb.Reader<MPE> reader = _MPEReader();

  final fb.BufferContext _bc;
  final int _bcOffset;

  ///  Unique ID as a String
  String? get ENTITY_ID => const fb.StringReader().vTableGetNullable(_bc, _bcOffset, 4);
  ///  Epoch of Mean Keplerian elements. (UNIX TimeStamp)
  double get EPOCH => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 6, 0.0);
  ///  Semi-major axis in km or mean motion in rev/day
  double get MEAN_MOTION => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 8, 0.0);
  ///  Eccentricity
  double get ECCENTRICITY => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 10, 0.0);
  ///  Inclination
  double get INCLINATION => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 12, 0.0);
  ///  Right ascension of ascending node
  double get RA_OF_ASC_NODE => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 14, 0.0);
  ///  Argument of pericenter
  double get ARG_OF_PERICENTER => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 16, 0.0);
  ///  Mean anomaly
  double get MEAN_ANOMALY => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 18, 0.0);
  ///  SGP/SGP4 drag-like coefficient (in units 1/[Earth radii])
  double get BSTAR => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 20, 0.0);

  @override
  String toString() {
    return 'MPE{ENTITY_ID: ${ENTITY_ID}, EPOCH: ${EPOCH}, MEAN_MOTION: ${MEAN_MOTION}, ECCENTRICITY: ${ECCENTRICITY}, INCLINATION: ${INCLINATION}, RA_OF_ASC_NODE: ${RA_OF_ASC_NODE}, ARG_OF_PERICENTER: ${ARG_OF_PERICENTER}, MEAN_ANOMALY: ${MEAN_ANOMALY}, BSTAR: ${BSTAR}}';
  }
}

class _MPEReader extends fb.TableReader<MPE> {
  const _MPEReader();

  @override
  MPE createObject(fb.BufferContext bc, int offset) => 
    MPE._(bc, offset);
}

class MPEBuilder {
  MPEBuilder(this.fbBuilder);

  final fb.Builder fbBuilder;

  void begin() {
    fbBuilder.startTable(9);
  }

  int addEntityIdOffset(int? offset) {
    fbBuilder.addOffset(0, offset);
    return fbBuilder.offset;
  }
  int addEpoch(double? EPOCH) {
    fbBuilder.addFloat64(1, EPOCH);
    return fbBuilder.offset;
  }
  int addMeanMotion(double? MEAN_MOTION) {
    fbBuilder.addFloat64(2, MEAN_MOTION);
    return fbBuilder.offset;
  }
  int addEccentricity(double? ECCENTRICITY) {
    fbBuilder.addFloat64(3, ECCENTRICITY);
    return fbBuilder.offset;
  }
  int addInclination(double? INCLINATION) {
    fbBuilder.addFloat64(4, INCLINATION);
    return fbBuilder.offset;
  }
  int addRaOfAscNode(double? RA_OF_ASC_NODE) {
    fbBuilder.addFloat64(5, RA_OF_ASC_NODE);
    return fbBuilder.offset;
  }
  int addArgOfPericenter(double? ARG_OF_PERICENTER) {
    fbBuilder.addFloat64(6, ARG_OF_PERICENTER);
    return fbBuilder.offset;
  }
  int addMeanAnomaly(double? MEAN_ANOMALY) {
    fbBuilder.addFloat64(7, MEAN_ANOMALY);
    return fbBuilder.offset;
  }
  int addBstar(double? BSTAR) {
    fbBuilder.addFloat64(8, BSTAR);
    return fbBuilder.offset;
  }

  int finish() {
    return fbBuilder.endTable();
  }
}

class MPEObjectBuilder extends fb.ObjectBuilder {
  final String? _ENTITY_ID;
  final double? _EPOCH;
  final double? _MEAN_MOTION;
  final double? _ECCENTRICITY;
  final double? _INCLINATION;
  final double? _RA_OF_ASC_NODE;
  final double? _ARG_OF_PERICENTER;
  final double? _MEAN_ANOMALY;
  final double? _BSTAR;

  MPEObjectBuilder({
    String? ENTITY_ID,
    double? EPOCH,
    double? MEAN_MOTION,
    double? ECCENTRICITY,
    double? INCLINATION,
    double? RA_OF_ASC_NODE,
    double? ARG_OF_PERICENTER,
    double? MEAN_ANOMALY,
    double? BSTAR,
  })
      : _ENTITY_ID = ENTITY_ID,
        _EPOCH = EPOCH,
        _MEAN_MOTION = MEAN_MOTION,
        _ECCENTRICITY = ECCENTRICITY,
        _INCLINATION = INCLINATION,
        _RA_OF_ASC_NODE = RA_OF_ASC_NODE,
        _ARG_OF_PERICENTER = ARG_OF_PERICENTER,
        _MEAN_ANOMALY = MEAN_ANOMALY,
        _BSTAR = BSTAR;

  /// Finish building, and store into the [fbBuilder].
  @override
  int finish(fb.Builder fbBuilder) {
    final int? ENTITY_IDOffset = _ENTITY_ID == null ? null
        : fbBuilder.writeString(_ENTITY_ID!);
    fbBuilder.startTable(9);
    fbBuilder.addOffset(0, ENTITY_IDOffset);
    fbBuilder.addFloat64(1, _EPOCH);
    fbBuilder.addFloat64(2, _MEAN_MOTION);
    fbBuilder.addFloat64(3, _ECCENTRICITY);
    fbBuilder.addFloat64(4, _INCLINATION);
    fbBuilder.addFloat64(5, _RA_OF_ASC_NODE);
    fbBuilder.addFloat64(6, _ARG_OF_PERICENTER);
    fbBuilder.addFloat64(7, _MEAN_ANOMALY);
    fbBuilder.addFloat64(8, _BSTAR);
    return fbBuilder.endTable();
  }

  /// Convenience method to serialize to byte list.
  @override
  Uint8List toBytes([String? fileIdentifier]) {
    final fbBuilder = fb.Builder(deduplicateTables: false);
    fbBuilder.finish(finish(fbBuilder), fileIdentifier);
    return fbBuilder.buffer;
  }
}
///  Collection of MPE Records
class MPECOLLECTION {
  MPECOLLECTION._(this._bc, this._bcOffset);
  factory MPECOLLECTION(List<int> bytes) {
    final rootRef = fb.BufferContext.fromBytes(bytes);
    return reader.read(rootRef, 0);
  }

  static const fb.Reader<MPECOLLECTION> reader = _MPECOLLECTIONReader();

  final fb.BufferContext _bc;
  final int _bcOffset;

  ///  Default value = U
  String? get CLASSIFICATION_TYPE => const fb.StringReader().vTableGetNullable(_bc, _bcOffset, 4);
  ///  Name of the reference frame (TEME, EME2000, etc.)
  ReferenceFrame get REF_FRAME => ReferenceFrame.fromValue(const fb.Int8Reader().vTableGet(_bc, _bcOffset, 6, 9));
  ///  Epoch of the Reference Frame. (UNIX TimeStamp)
  double get REF_FRAME_EPOCH => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 8, 0.0);
  ///  Time system used for the orbit state and covariance matrix. (UTC)
  TimeSystem get TIME_SYSTEM => TimeSystem.fromValue(const fb.Int8Reader().vTableGet(_bc, _bcOffset, 10, 11));
  ///  Description of the Mean Element Theory. (SGP4,DSST,USM)
  MeanElementTheory get MEAN_ELEMENT_THEORY => MeanElementTheory.fromValue(const fb.Int8Reader().vTableGet(_bc, _bcOffset, 12, 0));
  ///  Array of MPE records
  List<MPE>? get RECORDS => const fb.ListReader<MPE>(MPE.reader).vTableGetNullable(_bc, _bcOffset, 14);

  @override
  String toString() {
    return 'MPECOLLECTION{CLASSIFICATION_TYPE: ${CLASSIFICATION_TYPE}, REF_FRAME: ${REF_FRAME}, REF_FRAME_EPOCH: ${REF_FRAME_EPOCH}, TIME_SYSTEM: ${TIME_SYSTEM}, MEAN_ELEMENT_THEORY: ${MEAN_ELEMENT_THEORY}, RECORDS: ${RECORDS}}';
  }
}

class _MPECOLLECTIONReader extends fb.TableReader<MPECOLLECTION> {
  const _MPECOLLECTIONReader();

  @override
  MPECOLLECTION createObject(fb.BufferContext bc, int offset) => 
    MPECOLLECTION._(bc, offset);
}

class MPECOLLECTIONBuilder {
  MPECOLLECTIONBuilder(this.fbBuilder);

  final fb.Builder fbBuilder;

  void begin() {
    fbBuilder.startTable(6);
  }

  int addClassificationTypeOffset(int? offset) {
    fbBuilder.addOffset(0, offset);
    return fbBuilder.offset;
  }
  int addRefFrame(ReferenceFrame? REF_FRAME) {
    fbBuilder.addInt8(1, REF_FRAME?.value);
    return fbBuilder.offset;
  }
  int addRefFrameEpoch(double? REF_FRAME_EPOCH) {
    fbBuilder.addFloat64(2, REF_FRAME_EPOCH);
    return fbBuilder.offset;
  }
  int addTimeSystem(TimeSystem? TIME_SYSTEM) {
    fbBuilder.addInt8(3, TIME_SYSTEM?.value);
    return fbBuilder.offset;
  }
  int addMeanElementTheory(MeanElementTheory? MEAN_ELEMENT_THEORY) {
    fbBuilder.addInt8(4, MEAN_ELEMENT_THEORY?.value);
    return fbBuilder.offset;
  }
  int addRecordsOffset(int? offset) {
    fbBuilder.addOffset(5, offset);
    return fbBuilder.offset;
  }

  int finish() {
    return fbBuilder.endTable();
  }
}

class MPECOLLECTIONObjectBuilder extends fb.ObjectBuilder {
  final String? _CLASSIFICATION_TYPE;
  final ReferenceFrame? _REF_FRAME;
  final double? _REF_FRAME_EPOCH;
  final TimeSystem? _TIME_SYSTEM;
  final MeanElementTheory? _MEAN_ELEMENT_THEORY;
  final List<MPEObjectBuilder>? _RECORDS;

  MPECOLLECTIONObjectBuilder({
    String? CLASSIFICATION_TYPE,
    ReferenceFrame? REF_FRAME,
    double? REF_FRAME_EPOCH,
    TimeSystem? TIME_SYSTEM,
    MeanElementTheory? MEAN_ELEMENT_THEORY,
    List<MPEObjectBuilder>? RECORDS,
  })
      : _CLASSIFICATION_TYPE = CLASSIFICATION_TYPE,
        _REF_FRAME = REF_FRAME,
        _REF_FRAME_EPOCH = REF_FRAME_EPOCH,
        _TIME_SYSTEM = TIME_SYSTEM,
        _MEAN_ELEMENT_THEORY = MEAN_ELEMENT_THEORY,
        _RECORDS = RECORDS;

  /// Finish building, and store into the [fbBuilder].
  @override
  int finish(fb.Builder fbBuilder) {
    final int? CLASSIFICATION_TYPEOffset = _CLASSIFICATION_TYPE == null ? null
        : fbBuilder.writeString(_CLASSIFICATION_TYPE!);
    final int? RECORDSOffset = _RECORDS == null ? null
        : fbBuilder.writeList(_RECORDS!.map((b) => b.getOrCreateOffset(fbBuilder)).toList());
    fbBuilder.startTable(6);
    fbBuilder.addOffset(0, CLASSIFICATION_TYPEOffset);
    fbBuilder.addInt8(1, _REF_FRAME?.value);
    fbBuilder.addFloat64(2, _REF_FRAME_EPOCH);
    fbBuilder.addInt8(3, _TIME_SYSTEM?.value);
    fbBuilder.addInt8(4, _MEAN_ELEMENT_THEORY?.value);
    fbBuilder.addOffset(5, RECORDSOffset);
    return fbBuilder.endTable();
  }

  /// Convenience method to serialize to byte list.
  @override
  Uint8List toBytes([String? fileIdentifier]) {
    final fbBuilder = fb.Builder(deduplicateTables: false);
    fbBuilder.finish(finish(fbBuilder), fileIdentifier);
    return fbBuilder.buffer;
  }
}