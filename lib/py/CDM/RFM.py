# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Reference Frame Message
class RFM(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = RFM()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsRFM(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def RFMBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x52\x46\x4D", size_prefixed=size_prefixed)

    # RFM
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # RFM
    def REFERENCE_FRAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

def RFMStart(builder): builder.StartObject(1)
def Start(builder):
    return RFMStart(builder)
def RFMAddREFERENCE_FRAME(builder, REFERENCE_FRAME): builder.PrependInt8Slot(0, REFERENCE_FRAME, 0)
def AddREFERENCE_FRAME(builder, REFERENCE_FRAME):
    return RFMAddREFERENCE_FRAME(builder, REFERENCE_FRAME)
def RFMEnd(builder): return builder.EndObject()
def End(builder):
    return RFMEnd(builder)

class RFMT(object):

    # RFMT
    def __init__(self):
        self.REFERENCE_FRAME = 0  # type: int

    @classmethod
    def InitFromBuf(cls, buf, pos):
        RFM = RFM()
        RFM.Init(buf, pos)
        return cls.InitFromObj(RFM)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, RFM):
        x = RFMT()
        x._UnPack(RFM)
        return x

    # RFMT
    def _UnPack(self, RFM):
        if RFM is None:
            return
        self.REFERENCE_FRAME = RFM.REFERENCE_FRAME()

    # RFMT
    def Pack(self, builder):
        RFMStart(builder)
        RFMAddREFERENCE_FRAME(builder, self.REFERENCE_FRAME)
        RFM = RFMEnd(builder)
        return RFM