// automatically generated by the FlatBuffers compiler, do not modify
import flatbuffers

class CTR

/// Country Identity Message
class CTR : flatbuffers.handle
    /// ISO 3166 Numeric code
    def ID() -> string:
        return flatbuffers.field_string(buf_, pos_, 4)
    /// Country name
    def NAME() -> string:
        return flatbuffers.field_string(buf_, pos_, 6)
    /// GENC code
    def GENC_CODE() -> string:
        return flatbuffers.field_string(buf_, pos_, 8)
    /// ISO 3166 Alpha-2 code
    def ALPHA_2_CODE() -> string:
        return flatbuffers.field_string(buf_, pos_, 10)
    /// ISO 3166 Alpha-3 code
    def ALPHA_3_CODE() -> string:
        return flatbuffers.field_string(buf_, pos_, 12)
    /// Stanag code
    def STANAG_CODE() -> string:
        return flatbuffers.field_string(buf_, pos_, 14)
    /// Internet country code top-level domain (ccTLD)
    def INTERNET_CCTLD() -> string:
        return flatbuffers.field_string(buf_, pos_, 16)
    /// Additional comments
    def COMMENT() -> string:
        return flatbuffers.field_string(buf_, pos_, 18)

def GetRootAsCTR(buf:string): return CTR { buf, flatbuffers.indirect(buf, 0) }

struct CTRBuilder:
    b_:flatbuffers.builder
    def start():
        b_.StartObject(8)
        return this
    def add_ID(ID:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(0, ID)
        return this
    def add_NAME(NAME:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(1, NAME)
        return this
    def add_GENC_CODE(GENC_CODE:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(2, GENC_CODE)
        return this
    def add_ALPHA_2_CODE(ALPHA_2_CODE:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(3, ALPHA_2_CODE)
        return this
    def add_ALPHA_3_CODE(ALPHA_3_CODE:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(4, ALPHA_3_CODE)
        return this
    def add_STANAG_CODE(STANAG_CODE:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(5, STANAG_CODE)
        return this
    def add_INTERNET_CCTLD(INTERNET_CCTLD:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(6, INTERNET_CCTLD)
        return this
    def add_COMMENT(COMMENT:flatbuffers.offset):
        b_.PrependUOffsetTRelativeSlot(7, COMMENT)
        return this
    def end():
        return b_.EndObject()

