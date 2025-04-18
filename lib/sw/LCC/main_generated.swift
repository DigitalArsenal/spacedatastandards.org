// automatically generated by the FlatBuffers compiler, do not modify
// swiftlint:disable all
// swiftformat:disable all

import FlatBuffers

public enum legacyCountryCode: Int8, Enum, Verifiable {
  public typealias T = Int8
  public static var byteSize: Int { return MemoryLayout<Int8>.size }
  public var value: Int8 { return self.rawValue }
  ///  Arab Satellite Communications Organization
  case ab = 0
  ///  Asia Broadcast Satellite
  case abs = 1
  ///  Asia Satellite Telecommunications Company (ASIASAT)
  case ac = 2
  ///  Algeria
  case alg = 3
  ///  Angola
  case ang = 4
  ///  Argentina
  case argn = 5
  ///  Republic of Armenia
  case arm = 6
  ///  Austria
  case asra = 7
  ///  Australia
  case aus = 8
  ///  Azerbaijan
  case azer = 9
  ///  Belgium
  case bel = 10
  ///  Belarus
  case bela = 11
  ///  Bermuda
  case berm = 12
  ///  People's Republic of Bangladesh
  case bgd = 13
  ///  Kingdom of Bhutan
  case bhut = 14
  ///  Bolivia
  case bol = 15
  ///  Brazil
  case braz = 16
  ///  Bulgaria
  case bul = 17
  ///  Canada
  case ca = 18
  ///  China/Brazil
  case chbz = 19
  ///  China/Turkey
  case chtu = 20
  ///  Chile
  case chle = 21
  ///  Commonwealth of Independent States (former USSR)
  case cis = 22
  ///  Colombia
  case col = 23
  ///  Republic of Costa Rica
  case cri = 24
  ///  Czech Republic (former Czechoslovakia)
  case czch = 25
  ///  Denmark
  case den = 26
  ///  Republic of Djibouti
  case dji = 27
  ///  Ecuador
  case ecu = 28
  ///  Egypt
  case egyp = 29
  ///  European Space Agency
  case esa = 30
  ///  European Space Research Organization
  case esro = 31
  ///  Estonia
  case est = 32
  ///  Ethiopia
  case eth = 33
  ///  European Organization for the Exploitation of Meteorological Satellites (EUMETSAT)
  case eume = 34
  ///  European Telecommunications Satellite Organization (EUTELSAT)
  case eute = 35
  ///  France/Germany
  case fger = 36
  ///  Finland
  case fin = 37
  ///  France
  case fr = 38
  ///  France/Italy
  case frit = 39
  ///  Germany
  case ger = 40
  ///  Republic of Ghana
  case gha = 41
  ///  Globalstar
  case glob = 42
  ///  Greece
  case grec = 43
  ///  Greece/Saudi Arabia
  case grsa = 44
  ///  Guatemala
  case guat = 45
  ///  Hungary
  case hun = 46
  ///  International Mobile Satellite Organization (INMARSAT)
  case im = 47
  ///  India
  case ind = 48
  ///  Indonesia
  case indo = 49
  ///  Iran
  case iran = 50
  ///  Iraq
  case iraq = 51
  ///  Iridium
  case irid = 52
  ///  Ireland
  case irl = 53
  ///  Israel
  case isra = 54
  ///  Indian Space Research Organisation
  case isro = 55
  ///  International Space Station
  case iss = 56
  ///  Italy
  case it = 57
  ///  International Telecommunications Satellite Organization (INTELSAT)
  case itso = 58
  ///  Japan
  case jpn = 59
  ///  Kazakhstan
  case kaz = 60
  ///  Republic of Kenya
  case ken = 61
  ///  Laos
  case laos = 62
  ///  Democratic Socialist Republic of Sri Lanka
  case lka = 63
  ///  Lithuania
  case ltu = 64
  ///  Luxembourg
  case luxe = 65
  ///  Morocco
  case ma = 66
  ///  Malaysia
  case mala = 67
  ///  Principality of Monaco
  case mco = 68
  ///  Republic of Moldova
  case mda = 69
  ///  Mexico
  case mex = 70
  ///  Republic of the Union of Myanmar
  case mmr = 71
  ///  Mongolia
  case mng = 72
  ///  Mauritius
  case mus = 73
  ///  North Atlantic Treaty Organization
  case nato = 74
  ///  Netherlands
  case neth = 75
  ///  New ICO
  case nico = 76
  ///  Nigeria
  case nig = 77
  ///  Democratic People's Republic of Korea
  case nkor = 78
  ///  Norway
  case nor = 79
  ///  Federal Democratic Republic of Nepal
  case npl = 80
  ///  New Zealand
  case nz = 81
  ///  O3b Networks
  case o3b = 82
  ///  ORBCOMM
  case orb = 83
  ///  Pakistan
  case paki = 84
  ///  Peru
  case peru = 85
  ///  Poland
  case pol = 86
  ///  Portugal
  case por = 87
  ///  People's Republic of China
  case prc = 88
  ///  Republic of Paraguay
  case pry = 89
  ///  People's Republic of China/European Space Agency
  case pres = 90
  ///  State of Qatar
  case qat = 91
  ///  RascomStar-QAF
  case rasc = 92
  ///  Taiwan (Republic of China)
  case roc = 93
  ///  Romania
  case rom = 94
  ///  Philippines (Republic of the Philippines)
  case rp = 95
  ///  Republic of Rwanda
  case rwa = 96
  ///  South Africa
  case safr = 97
  ///  Saudi Arabia
  case saud = 98
  ///  Republic of Sudan
  case sdn = 99
  ///  Sea Launch
  case seal = 100
  ///  SES
  case ses = 101
  ///  Singapore/Japan
  case sgjp = 102
  ///  Singapore
  case sing = 103
  ///  Republic of Korea
  case skor = 104
  ///  Spain
  case spn = 105
  ///  Singapore/Taiwan
  case stct = 106
  ///  Slovenia
  case svn = 107
  ///  Sweden
  case swed = 108
  ///  Switzerland
  case swtz = 109
  ///  To Be Determined
  case tbd = 110
  ///  Thailand
  case thai = 111
  ///  Turkmenistan/Monaco
  case tmmc = 112
  ///  Republic of Tunisia
  case tun = 113
  ///  Turkey
  case turk = 114
  ///  United Arab Emirates
  case uae = 115
  ///  United Kingdom
  case uk = 116
  ///  Ukraine
  case ukr = 117
  ///  Unknown
  case unk = 118
  ///  Uruguay
  case ury = 119
  ///  United States
  case us = 120
  ///  United States/Brazil
  case usbz = 121
  ///  Vatican City State
  case vat = 122
  ///  Venezuela
  case venz = 123
  ///  Vietnam
  case vtnm = 124
  ///  Republic of Zimbabwe
  case zwe = 125

  public static var max: legacyCountryCode { return .zwe }
  public static var min: legacyCountryCode { return .ab }
}


///  Legacy Country Code
public struct LCC: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_24_3_25() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  public static var id: String { "$LCC" } 
  public static func finish(_ fbb: inout FlatBufferBuilder, end: Offset, prefix: Bool = false) { fbb.finish(offset: end, fileId: LCC.id, addPrefix: prefix) }
  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case OWNER = 4
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  public var OWNER: legacyCountryCode { let o = _accessor.offset(VTOFFSET.OWNER.v); return o == 0 ? .ab : legacyCountryCode(rawValue: _accessor.readBuffer(of: Int8.self, at: o)) ?? .ab }
  public static func startLCC(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 1) }
  public static func add(OWNER: legacyCountryCode, _ fbb: inout FlatBufferBuilder) { fbb.add(element: OWNER.rawValue, def: 0, at: VTOFFSET.OWNER.p) }
  public static func endLCC(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createLCC(
    _ fbb: inout FlatBufferBuilder,
    OWNER: legacyCountryCode = .ab
  ) -> Offset {
    let __start = LCC.startLCC(&fbb)
    LCC.add(OWNER: OWNER, &fbb)
    return LCC.endLCC(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.OWNER.p, fieldName: "OWNER", required: false, type: legacyCountryCode.self)
    _v.finish()
  }
}

