// automatically generated by the FlatBuffers compiler, do not modify
// ignore_for_file: unused_import, unused_field, unused_element, unused_local_variable

import 'dart:typed_data' show Uint8List;
import 'package:flat_buffers/flat_buffers.dart' as fb;


import './main_generated.dart';

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

  ///  Unique ID as a String [no units]
  String? get ENTITY_ID => const fb.StringReader().vTableGetNullable(_bc, _bcOffset, 4);
  ///  Epoch of Mean Keplerian elements (UNIX timestamp) [numeric seconds since 1970-01-01T00:00:00 UTC]
  double get EPOCH => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 6, 0.0);
  ///  Mean motion in rev/day [M if chosen to represent orbit size for SGP/SGP4 elements]
  double get MEAN_MOTION => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 8, 0.0);
  ///  Eccentricity (unitless)
  double get ECCENTRICITY => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 10, 0.0);
  ///  Inclination in degrees
  double get INCLINATION => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 12, 0.0);
  ///  Right ascension of ascending node in degrees
  double get RA_OF_ASC_NODE => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 14, 0.0);
  ///  Argument of pericenter in degrees
  double get ARG_OF_PERICENTER => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 16, 0.0);
  ///  Mean anomaly in degrees
  double get MEAN_ANOMALY => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 18, 0.0);
  ///  SGP/SGP4 drag-like coefficient (BSTAR) in units of 1/[Earth radii]
  double get BSTAR => const fb.Float64Reader().vTableGet(_bc, _bcOffset, 20, 0.0);
  ///  Description of the Mean Element Theory (SGP4, DSST, USM)
  MeanElementTheory get MEAN_ELEMENT_THEORY => MeanElementTheory.fromValue(const fb.Int8Reader().vTableGet(_bc, _bcOffset, 22, 0));

  @override
  String toString() {
    return 'MPE{ENTITY_ID: ${ENTITY_ID}, EPOCH: ${EPOCH}, MEAN_MOTION: ${MEAN_MOTION}, ECCENTRICITY: ${ECCENTRICITY}, INCLINATION: ${INCLINATION}, RA_OF_ASC_NODE: ${RA_OF_ASC_NODE}, ARG_OF_PERICENTER: ${ARG_OF_PERICENTER}, MEAN_ANOMALY: ${MEAN_ANOMALY}, BSTAR: ${BSTAR}, MEAN_ELEMENT_THEORY: ${MEAN_ELEMENT_THEORY}}';
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
    fbBuilder.startTable(10);
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
  int addMeanElementTheory(MeanElementTheory? MEAN_ELEMENT_THEORY) {
    fbBuilder.addInt8(9, MEAN_ELEMENT_THEORY?.value);
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
  final MeanElementTheory? _MEAN_ELEMENT_THEORY;

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
    MeanElementTheory? MEAN_ELEMENT_THEORY,
  })
      : _ENTITY_ID = ENTITY_ID,
        _EPOCH = EPOCH,
        _MEAN_MOTION = MEAN_MOTION,
        _ECCENTRICITY = ECCENTRICITY,
        _INCLINATION = INCLINATION,
        _RA_OF_ASC_NODE = RA_OF_ASC_NODE,
        _ARG_OF_PERICENTER = ARG_OF_PERICENTER,
        _MEAN_ANOMALY = MEAN_ANOMALY,
        _BSTAR = BSTAR,
        _MEAN_ELEMENT_THEORY = MEAN_ELEMENT_THEORY;

  /// Finish building, and store into the [fbBuilder].
  @override
  int finish(fb.Builder fbBuilder) {
    final int? ENTITY_IDOffset = _ENTITY_ID == null ? null
        : fbBuilder.writeString(_ENTITY_ID!);
    fbBuilder.startTable(10);
    fbBuilder.addOffset(0, ENTITY_IDOffset);
    fbBuilder.addFloat64(1, _EPOCH);
    fbBuilder.addFloat64(2, _MEAN_MOTION);
    fbBuilder.addFloat64(3, _ECCENTRICITY);
    fbBuilder.addFloat64(4, _INCLINATION);
    fbBuilder.addFloat64(5, _RA_OF_ASC_NODE);
    fbBuilder.addFloat64(6, _ARG_OF_PERICENTER);
    fbBuilder.addFloat64(7, _MEAN_ANOMALY);
    fbBuilder.addFloat64(8, _BSTAR);
    fbBuilder.addInt8(9, _MEAN_ELEMENT_THEORY?.value);
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
