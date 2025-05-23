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
    def ReferenceFrameType(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint8Flags, o + self._tab.Pos)
        return 0

    # RFM
    def REFERENCE_FRAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            from flatbuffers.table import Table
            obj = Table(bytearray(), 0)
            self._tab.Union(obj, o)
            return obj
        return None

    # RFM
    def INDEX(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # RFM
    def NAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

def RFMStart(builder):
    builder.StartObject(4)

def Start(builder):
    RFMStart(builder)

def RFMAddReferenceFrameType(builder, referenceFrameType):
    builder.PrependUint8Slot(0, referenceFrameType, 0)

def AddReferenceFrameType(builder, referenceFrameType):
    RFMAddReferenceFrameType(builder, referenceFrameType)

def RFMAddREFERENCE_FRAME(builder, REFERENCE_FRAME):
    builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(REFERENCE_FRAME), 0)

def AddREFERENCE_FRAME(builder, REFERENCE_FRAME):
    RFMAddREFERENCE_FRAME(builder, REFERENCE_FRAME)

def RFMAddINDEX(builder, INDEX):
    builder.PrependInt32Slot(2, INDEX, 0)

def AddINDEX(builder, INDEX):
    RFMAddINDEX(builder, INDEX)

def RFMAddNAME(builder, NAME):
    builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(NAME), 0)

def AddNAME(builder, NAME):
    RFMAddNAME(builder, NAME)

def RFMEnd(builder):
    return builder.EndObject()

def End(builder):
    return RFMEnd(builder)

import CelestialFrameWrapper
import CustomFrameWrapper
import OrbitFrameWrapper
import RFMUnion
import SpacecraftFrameWrapper
try:
    from typing import Union
except:
    pass

class RFMT(object):

    # RFMT
    def __init__(self):
        self.referenceFrameType = 0  # type: int
        self.REFERENCE_FRAME = None  # type: Union[None, CelestialFrameWrapper.CelestialFrameWrapperT, SpacecraftFrameWrapper.SpacecraftFrameWrapperT, OrbitFrameWrapper.OrbitFrameWrapperT, CustomFrameWrapper.CustomFrameWrapperT]
        self.INDEX = 0  # type: int
        self.NAME = None  # type: str

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
        self.referenceFrameType = RFM.ReferenceFrameType()
        self.REFERENCE_FRAME = RFMUnion.RFMUnionCreator(self.REFERENCE_FRAMEType, RFM.REFERENCE_FRAME())
        self.INDEX = RFM.INDEX()
        self.NAME = RFM.NAME()

    # RFMT
    def Pack(self, builder):
        if self.REFERENCE_FRAME is not None:
            REFERENCE_FRAME = self.REFERENCE_FRAME.Pack(builder)
        if self.NAME is not None:
            NAME = builder.CreateString(self.NAME)
        RFMStart(builder)
        RFMAddReferenceFrameType(builder, self.referenceFrameType)
        if self.REFERENCE_FRAME is not None:
            RFMAddREFERENCE_FRAME(builder, REFERENCE_FRAME)
        RFMAddINDEX(builder, self.INDEX)
        if self.NAME is not None:
            RFMAddNAME(builder, NAME)
        RFM = RFMEnd(builder)
        return RFM
