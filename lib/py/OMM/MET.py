# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class MET(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = MET()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsMET(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def METBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x4D\x45\x54", size_prefixed=size_prefixed)

    # MET
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # MET
    def MEAN_ELEMENT_THEORY(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

def METStart(builder): builder.StartObject(1)
def Start(builder):
    return METStart(builder)
def METAddMEAN_ELEMENT_THEORY(builder, MEAN_ELEMENT_THEORY): builder.PrependInt8Slot(0, MEAN_ELEMENT_THEORY, 0)
def AddMEAN_ELEMENT_THEORY(builder, MEAN_ELEMENT_THEORY):
    return METAddMEAN_ELEMENT_THEORY(builder, MEAN_ELEMENT_THEORY)
def METEnd(builder): return builder.EndObject()
def End(builder):
    return METEnd(builder)

class METT(object):

    # METT
    def __init__(self):
        self.MEAN_ELEMENT_THEORY = 0  # type: int

    @classmethod
    def InitFromBuf(cls, buf, pos):
        MET = MET()
        MET.Init(buf, pos)
        return cls.InitFromObj(MET)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, MET):
        x = METT()
        x._UnPack(MET)
        return x

    # METT
    def _UnPack(self, MET):
        if MET is None:
            return
        self.MEAN_ELEMENT_THEORY = MET.MEAN_ELEMENT_THEORY()

    # METT
    def Pack(self, builder):
        METStart(builder)
        METAddMEAN_ELEMENT_THEORY(builder, self.MEAN_ELEMENT_THEORY)
        MET = METEnd(builder)
        return MET