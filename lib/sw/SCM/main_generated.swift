// automatically generated by the FlatBuffers compiler, do not modify
// swiftlint:disable all
// swiftformat:disable all

import FlatBuffers

///  Schema Standard Definition
public struct SCHEMA_STANDARD: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_24_3_25() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  public static var id: String { "$SCM" } 
  public static func finish(_ fbb: inout FlatBufferBuilder, end: Offset, prefix: Bool = false) { fbb.finish(offset: end, fileId: SCHEMA_STANDARD.id, addPrefix: prefix) }
  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case key = 4
    case idl = 6
    case files = 8
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  ///  Unique identifier for the standard
  public var key: String? { let o = _accessor.offset(VTOFFSET.key.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var keySegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.key.v) }
  ///  IDL
  public var idl: String? { let o = _accessor.offset(VTOFFSET.idl.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var idlSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.idl.v) }
  ///  List Of File Paths
  public var hasFiles: Bool { let o = _accessor.offset(VTOFFSET.files.v); return o == 0 ? false : true }
  public var filesCount: Int32 { let o = _accessor.offset(VTOFFSET.files.v); return o == 0 ? 0 : _accessor.vector(count: o) }
  public func files(at index: Int32) -> String? { let o = _accessor.offset(VTOFFSET.files.v); return o == 0 ? nil : _accessor.directString(at: _accessor.vector(at: o) + index * 4) }
  public static func startSCHEMA_STANDARD(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 3) }
  public static func add(key: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: key, at: VTOFFSET.key.p) }
  public static func add(idl: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: idl, at: VTOFFSET.idl.p) }
  public static func addVectorOf(files: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: files, at: VTOFFSET.files.p) }
  public static func endSCHEMA_STANDARD(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createSCHEMA_STANDARD(
    _ fbb: inout FlatBufferBuilder,
    keyOffset key: Offset = Offset(),
    idlOffset idl: Offset = Offset(),
    filesVectorOffset files: Offset = Offset()
  ) -> Offset {
    let __start = SCHEMA_STANDARD.startSCHEMA_STANDARD(&fbb)
    SCHEMA_STANDARD.add(key: key, &fbb)
    SCHEMA_STANDARD.add(idl: idl, &fbb)
    SCHEMA_STANDARD.addVectorOf(files: files, &fbb)
    return SCHEMA_STANDARD.endSCHEMA_STANDARD(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.key.p, fieldName: "key", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.idl.p, fieldName: "idl", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.files.p, fieldName: "files", required: false, type: ForwardOffset<Vector<ForwardOffset<String>, String>>.self)
    _v.finish()
  }
}

///  Schema Manifest
public struct SCM: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_24_3_25() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  public static var id: String { "$SCM" } 
  public static func finish(_ fbb: inout FlatBufferBuilder, end: Offset, prefix: Bool = false) { fbb.finish(offset: end, fileId: SCM.id, addPrefix: prefix) }
  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case version = 4
    case RECORDS = 6
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  ///  Version of Space Data Standards
  public var version: String? { let o = _accessor.offset(VTOFFSET.version.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var versionSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.version.v) }
  ///  Standards Dictionary
  public var hasRecords: Bool { let o = _accessor.offset(VTOFFSET.RECORDS.v); return o == 0 ? false : true }
  public var RECORDSCount: Int32 { let o = _accessor.offset(VTOFFSET.RECORDS.v); return o == 0 ? 0 : _accessor.vector(count: o) }
  public func RECORDS(at index: Int32) -> SCHEMA_STANDARD? { let o = _accessor.offset(VTOFFSET.RECORDS.v); return o == 0 ? nil : SCHEMA_STANDARD(_accessor.bb, o: _accessor.indirect(_accessor.vector(at: o) + index * 4)) }
  public static func startSCM(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 2) }
  public static func add(version: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: version, at: VTOFFSET.version.p) }
  public static func addVectorOf(RECORDS: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: RECORDS, at: VTOFFSET.RECORDS.p) }
  public static func endSCM(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createSCM(
    _ fbb: inout FlatBufferBuilder,
    versionOffset version: Offset = Offset(),
    RECORDSVectorOffset RECORDS: Offset = Offset()
  ) -> Offset {
    let __start = SCM.startSCM(&fbb)
    SCM.add(version: version, &fbb)
    SCM.addVectorOf(RECORDS: RECORDS, &fbb)
    return SCM.endSCM(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.version.p, fieldName: "version", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.RECORDS.p, fieldName: "RECORDS", required: false, type: ForwardOffset<Vector<ForwardOffset<SCHEMA_STANDARD>, SCHEMA_STANDARD>>.self)
    _v.finish()
  }
}

