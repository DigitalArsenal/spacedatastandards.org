# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class USR(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = USR()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsUSR(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def USRBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x50\x52\x47", size_prefixed=size_prefixed)

    # USR
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # USR
    def ID(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # USR
    def MESSAGE_TYPES(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.String(a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4))
        return ""

    # USR
    def MESSAGE_TYPESLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # USR
    def MESSAGE_TYPESIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        return o == 0

def USRStart(builder): builder.StartObject(2)
def Start(builder):
    return USRStart(builder)
def USRAddID(builder, ID): builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(ID), 0)
def AddID(builder, ID):
    return USRAddID(builder, ID)
def USRAddMESSAGE_TYPES(builder, MESSAGE_TYPES): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(MESSAGE_TYPES), 0)
def AddMESSAGE_TYPES(builder, MESSAGE_TYPES):
    return USRAddMESSAGE_TYPES(builder, MESSAGE_TYPES)
def USRStartMESSAGE_TYPESVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def StartMESSAGE_TYPESVector(builder, numElems):
    return USRStartMESSAGE_TYPESVector(builder, numElems)
def USREnd(builder): return builder.EndObject()
def End(builder):
    return USREnd(builder)
try:
    from typing import List
except:
    pass

class USRT(object):

    # USRT
    def __init__(self):
        self.ID = None  # type: str
        self.MESSAGE_TYPES = None  # type: List[str]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        USR = USR()
        USR.Init(buf, pos)
        return cls.InitFromObj(USR)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, USR):
        x = USRT()
        x._UnPack(USR)
        return x

    # USRT
    def _UnPack(self, USR):
        if USR is None:
            return
        self.ID = USR.ID()
        if not USR.MESSAGE_TYPESIsNone():
            self.MESSAGE_TYPES = []
            for i in range(USR.MESSAGE_TYPESLength()):
                self.MESSAGE_TYPES.append(USR.MESSAGE_TYPES(i))

    # USRT
    def Pack(self, builder):
        if self.ID is not None:
            ID = builder.CreateString(self.ID)
        if self.MESSAGE_TYPES is not None:
            MESSAGE_TYPESlist = []
            for i in range(len(self.MESSAGE_TYPES)):
                MESSAGE_TYPESlist.append(builder.CreateString(self.MESSAGE_TYPES[i]))
            USRStartMESSAGE_TYPESVector(builder, len(self.MESSAGE_TYPES))
            for i in reversed(range(len(self.MESSAGE_TYPES))):
                builder.PrependUOffsetTRelative(MESSAGE_TYPESlist[i])
            MESSAGE_TYPES = builder.EndVector()
        USRStart(builder)
        if self.ID is not None:
            USRAddID(builder, ID)
        if self.MESSAGE_TYPES is not None:
            USRAddMESSAGE_TYPES(builder, MESSAGE_TYPES)
        USR = USREnd(builder)
        return USR