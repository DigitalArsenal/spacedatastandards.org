// automatically generated by the FlatBuffers compiler, do not modify
// swiftlint:disable all
// swiftformat:disable all

import FlatBuffers

public enum meanElementTheory: Int8, Enum, Verifiable {
  public typealias T = Int8
  public static var byteSize: Int { return MemoryLayout<Int8>.size }
  public var value: Int8 { return self.rawValue }
  ///  Simplified General Perturbation Model 4
  case sgp4 = 0
  ///  Simplified General Perturbation Model 4 eXtended Perturbations (https://amostech.com/TechnicalPapers/2022/Astrodynamics/Payne_2.pdf)
  case sgp4xp = 1
  ///  Draper Semi-analytical Satellite Theory
  case dsst = 2
  ///  Universal Semianalytical Method
  case usm = 3

  public static var max: meanElementTheory { return .usm }
  public static var min: meanElementTheory { return .sgp4 }
}


public struct MET: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_3_3() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  public static var id: String { "$MET" } 
  public static func finish(_ fbb: inout FlatBufferBuilder, end: Offset, prefix: Bool = false) { fbb.finish(offset: end, fileId: MET.id, addPrefix: prefix) }
  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case MEAN_ELEMENT_THEORY = 4
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  public var MEAN_ELEMENT_THEORY: meanElementTheory { let o = _accessor.offset(VTOFFSET.MEAN_ELEMENT_THEORY.v); return o == 0 ? .sgp4 : meanElementTheory(rawValue: _accessor.readBuffer(of: Int8.self, at: o)) ?? .sgp4 }
  public static func startMET(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 1) }
  public static func add(MEAN_ELEMENT_THEORY: meanElementTheory, _ fbb: inout FlatBufferBuilder) { fbb.add(element: MEAN_ELEMENT_THEORY.rawValue, def: 0, at: VTOFFSET.MEAN_ELEMENT_THEORY.p) }
  public static func endMET(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createMET(
    _ fbb: inout FlatBufferBuilder,
    MEAN_ELEMENT_THEORY: meanElementTheory = .sgp4
  ) -> Offset {
    let __start = MET.startMET(&fbb)
    MET.add(MEAN_ELEMENT_THEORY: MEAN_ELEMENT_THEORY, &fbb)
    return MET.endMET(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.MEAN_ELEMENT_THEORY.p, fieldName: "MEAN_ELEMENT_THEORY", required: false, type: meanElementTheory.self)
    _v.finish()
  }
}
