// automatically generated by the FlatBuffers compiler, do not modify
// ignore_for_file: unused_import, unused_field, unused_element, unused_local_variable

import 'dart:typed_data' show Uint8List;
import 'package:flat_buffers/flat_buffers.dart' as fb;


class DataType {
  final int value;
  const DataType._(this.value);

  factory DataType.fromValue(int value) {
    final result = values[value];
    if (result == null) {
        throw StateError('Invalid value $value for bit flag enum DataType');
    }
    return result;
  }

  static DataType? _createOrNull(int? value) => 
      value == null ? null : DataType.fromValue(value);

  static const int minValue = 0;
  static const int maxValue = 1;
  static bool containsValue(int value) => values.containsKey(value);

  static const DataType OBSERVED = DataType._(0);
  static const DataType PREDICTED = DataType._(1);
  static const Map<int, DataType> values = {
    0: OBSERVED,
    1: PREDICTED};

  static const fb.Reader<DataType> reader = _DataTypeReader();

  @override
  String toString() {
    return 'DataType{value: $value}';
  }
}

class _DataTypeReader extends fb.Reader<DataType> {
  const _DataTypeReader();

  @override
  int get size => 1;

  @override
  DataType read(fb.BufferContext bc, int offset) =>
      DataType.fromValue(const fb.Int8Reader().read(bc, offset));
}

///  Earth Orientation Parameters
class EOP {
  EOP._(this._bc, this._bcOffset);
  factory EOP(List<int> bytes) {
    final rootRef = fb.BufferContext.fromBytes(bytes);
    return reader.read(rootRef, 0);
  }

  static const fb.Reader<EOP> reader = _EOPReader();

  final fb.BufferContext _bc;
  final int _bcOffset;

  ///   Date in ISO 8601 format, e.g., "2018-01-01T00:00:00Z"
  String? get DATE => const fb.StringReader().vTableGetNullable(_bc, _bcOffset, 4);
  ///   Modified Julian Date in UTC, e.g., 58119
  int get MJD => const fb.Uint32Reader().vTableGet(_bc, _bcOffset, 6, 0);
  ///   x component of Pole Wander in radians, e.g., 2.872908911518888E-7
  double get X_POLE_WANDER_RADIANS => const fb.Float32Reader().vTableGet(_bc, _bcOffset, 8, 0.0);
  ///   y component of Pole Wander in radians, e.g., 1.2003259523750447E-6
  double get Y_POLE_WANDER_RADIANS => const fb.Float32Reader().vTableGet(_bc, _bcOffset, 10, 0.0);
  ///   x component of Celestial Pole Offset in radians, e.g., 5.720801437092525E-10
  double get X_CELESTIAL_POLE_OFFSET_RADIANS => const fb.Float32Reader().vTableGet(_bc, _bcOffset, 12, 0.0);
  ///   y component of Celestial Pole Offset in radians, e.g., -8.484239419416879E-10
  double get Y_CELESTIAL_POLE_OFFSET_RADIANS => const fb.Float32Reader().vTableGet(_bc, _bcOffset, 14, 0.0);
  ///   UT1 minus UTC in seconds, e.g., 0.2163567
  double get UT1_MINUS_UTC_SECONDS => const fb.Float32Reader().vTableGet(_bc, _bcOffset, 16, 0.0);
  ///   TAI minus UTC in seconds, e.g., 37
  int get TAI_MINUS_UTC_SECONDS => const fb.Uint16Reader().vTableGet(_bc, _bcOffset, 18, 0);
  ///   Correction to Length of Day in seconds, e.g., 8.094E-4
  double get LENGTH_OF_DAY_CORRECTION_SECONDS => const fb.Float32Reader().vTableGet(_bc, _bcOffset, 20, 0.0);
  ///   Data type (O = Observed, P = Predicted)
  DataType get DATA_TYPE => DataType.fromValue(const fb.Int8Reader().vTableGet(_bc, _bcOffset, 22, 0));

  @override
  String toString() {
    return 'EOP{DATE: ${DATE}, MJD: ${MJD}, X_POLE_WANDER_RADIANS: ${X_POLE_WANDER_RADIANS}, Y_POLE_WANDER_RADIANS: ${Y_POLE_WANDER_RADIANS}, X_CELESTIAL_POLE_OFFSET_RADIANS: ${X_CELESTIAL_POLE_OFFSET_RADIANS}, Y_CELESTIAL_POLE_OFFSET_RADIANS: ${Y_CELESTIAL_POLE_OFFSET_RADIANS}, UT1_MINUS_UTC_SECONDS: ${UT1_MINUS_UTC_SECONDS}, TAI_MINUS_UTC_SECONDS: ${TAI_MINUS_UTC_SECONDS}, LENGTH_OF_DAY_CORRECTION_SECONDS: ${LENGTH_OF_DAY_CORRECTION_SECONDS}, DATA_TYPE: ${DATA_TYPE}}';
  }
}

class _EOPReader extends fb.TableReader<EOP> {
  const _EOPReader();

  @override
  EOP createObject(fb.BufferContext bc, int offset) => 
    EOP._(bc, offset);
}

class EOPBuilder {
  EOPBuilder(this.fbBuilder);

  final fb.Builder fbBuilder;

  void begin() {
    fbBuilder.startTable(10);
  }

  int addDateOffset(int? offset) {
    fbBuilder.addOffset(0, offset);
    return fbBuilder.offset;
  }
  int addMjd(int? MJD) {
    fbBuilder.addUint32(1, MJD);
    return fbBuilder.offset;
  }
  int addXPoleWanderRadians(double? X_POLE_WANDER_RADIANS) {
    fbBuilder.addFloat32(2, X_POLE_WANDER_RADIANS);
    return fbBuilder.offset;
  }
  int addYPoleWanderRadians(double? Y_POLE_WANDER_RADIANS) {
    fbBuilder.addFloat32(3, Y_POLE_WANDER_RADIANS);
    return fbBuilder.offset;
  }
  int addXCelestialPoleOffsetRadians(double? X_CELESTIAL_POLE_OFFSET_RADIANS) {
    fbBuilder.addFloat32(4, X_CELESTIAL_POLE_OFFSET_RADIANS);
    return fbBuilder.offset;
  }
  int addYCelestialPoleOffsetRadians(double? Y_CELESTIAL_POLE_OFFSET_RADIANS) {
    fbBuilder.addFloat32(5, Y_CELESTIAL_POLE_OFFSET_RADIANS);
    return fbBuilder.offset;
  }
  int addUt1MinusUtcSeconds(double? UT1_MINUS_UTC_SECONDS) {
    fbBuilder.addFloat32(6, UT1_MINUS_UTC_SECONDS);
    return fbBuilder.offset;
  }
  int addTaiMinusUtcSeconds(int? TAI_MINUS_UTC_SECONDS) {
    fbBuilder.addUint16(7, TAI_MINUS_UTC_SECONDS);
    return fbBuilder.offset;
  }
  int addLengthOfDayCorrectionSeconds(double? LENGTH_OF_DAY_CORRECTION_SECONDS) {
    fbBuilder.addFloat32(8, LENGTH_OF_DAY_CORRECTION_SECONDS);
    return fbBuilder.offset;
  }
  int addDataType(DataType? DATA_TYPE) {
    fbBuilder.addInt8(9, DATA_TYPE?.value);
    return fbBuilder.offset;
  }

  int finish() {
    return fbBuilder.endTable();
  }
}

class EOPObjectBuilder extends fb.ObjectBuilder {
  final String? _DATE;
  final int? _MJD;
  final double? _X_POLE_WANDER_RADIANS;
  final double? _Y_POLE_WANDER_RADIANS;
  final double? _X_CELESTIAL_POLE_OFFSET_RADIANS;
  final double? _Y_CELESTIAL_POLE_OFFSET_RADIANS;
  final double? _UT1_MINUS_UTC_SECONDS;
  final int? _TAI_MINUS_UTC_SECONDS;
  final double? _LENGTH_OF_DAY_CORRECTION_SECONDS;
  final DataType? _DATA_TYPE;

  EOPObjectBuilder({
    String? DATE,
    int? MJD,
    double? X_POLE_WANDER_RADIANS,
    double? Y_POLE_WANDER_RADIANS,
    double? X_CELESTIAL_POLE_OFFSET_RADIANS,
    double? Y_CELESTIAL_POLE_OFFSET_RADIANS,
    double? UT1_MINUS_UTC_SECONDS,
    int? TAI_MINUS_UTC_SECONDS,
    double? LENGTH_OF_DAY_CORRECTION_SECONDS,
    DataType? DATA_TYPE,
  })
      : _DATE = DATE,
        _MJD = MJD,
        _X_POLE_WANDER_RADIANS = X_POLE_WANDER_RADIANS,
        _Y_POLE_WANDER_RADIANS = Y_POLE_WANDER_RADIANS,
        _X_CELESTIAL_POLE_OFFSET_RADIANS = X_CELESTIAL_POLE_OFFSET_RADIANS,
        _Y_CELESTIAL_POLE_OFFSET_RADIANS = Y_CELESTIAL_POLE_OFFSET_RADIANS,
        _UT1_MINUS_UTC_SECONDS = UT1_MINUS_UTC_SECONDS,
        _TAI_MINUS_UTC_SECONDS = TAI_MINUS_UTC_SECONDS,
        _LENGTH_OF_DAY_CORRECTION_SECONDS = LENGTH_OF_DAY_CORRECTION_SECONDS,
        _DATA_TYPE = DATA_TYPE;

  /// Finish building, and store into the [fbBuilder].
  @override
  int finish(fb.Builder fbBuilder) {
    final int? DATEOffset = _DATE == null ? null
        : fbBuilder.writeString(_DATE!);
    fbBuilder.startTable(10);
    fbBuilder.addOffset(0, DATEOffset);
    fbBuilder.addUint32(1, _MJD);
    fbBuilder.addFloat32(2, _X_POLE_WANDER_RADIANS);
    fbBuilder.addFloat32(3, _Y_POLE_WANDER_RADIANS);
    fbBuilder.addFloat32(4, _X_CELESTIAL_POLE_OFFSET_RADIANS);
    fbBuilder.addFloat32(5, _Y_CELESTIAL_POLE_OFFSET_RADIANS);
    fbBuilder.addFloat32(6, _UT1_MINUS_UTC_SECONDS);
    fbBuilder.addUint16(7, _TAI_MINUS_UTC_SECONDS);
    fbBuilder.addFloat32(8, _LENGTH_OF_DAY_CORRECTION_SECONDS);
    fbBuilder.addInt8(9, _DATA_TYPE?.value);
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
///  Collection of EOP records
class EOPCOLLECTION {
  EOPCOLLECTION._(this._bc, this._bcOffset);
  factory EOPCOLLECTION(List<int> bytes) {
    final rootRef = fb.BufferContext.fromBytes(bytes);
    return reader.read(rootRef, 0);
  }

  static const fb.Reader<EOPCOLLECTION> reader = _EOPCOLLECTIONReader();

  final fb.BufferContext _bc;
  final int _bcOffset;

  List<EOP>? get RECORDS => const fb.ListReader<EOP>(EOP.reader).vTableGetNullable(_bc, _bcOffset, 4);

  @override
  String toString() {
    return 'EOPCOLLECTION{RECORDS: ${RECORDS}}';
  }
}

class _EOPCOLLECTIONReader extends fb.TableReader<EOPCOLLECTION> {
  const _EOPCOLLECTIONReader();

  @override
  EOPCOLLECTION createObject(fb.BufferContext bc, int offset) => 
    EOPCOLLECTION._(bc, offset);
}

class EOPCOLLECTIONBuilder {
  EOPCOLLECTIONBuilder(this.fbBuilder);

  final fb.Builder fbBuilder;

  void begin() {
    fbBuilder.startTable(1);
  }

  int addRecordsOffset(int? offset) {
    fbBuilder.addOffset(0, offset);
    return fbBuilder.offset;
  }

  int finish() {
    return fbBuilder.endTable();
  }
}

class EOPCOLLECTIONObjectBuilder extends fb.ObjectBuilder {
  final List<EOPObjectBuilder>? _RECORDS;

  EOPCOLLECTIONObjectBuilder({
    List<EOPObjectBuilder>? RECORDS,
  })
      : _RECORDS = RECORDS;

  /// Finish building, and store into the [fbBuilder].
  @override
  int finish(fb.Builder fbBuilder) {
    final int? RECORDSOffset = _RECORDS == null ? null
        : fbBuilder.writeList(_RECORDS!.map((b) => b.getOrCreateOffset(fbBuilder)).toList());
    fbBuilder.startTable(1);
    fbBuilder.addOffset(0, RECORDSOffset);
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