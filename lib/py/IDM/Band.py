# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Table representing a frequency band with a name and frequency range
class Band(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = Band()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsBand(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def BandBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x49\x44\x4D", size_prefixed=size_prefixed)

    # Band
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Name of the band
    # Band
    def NAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Frequency range of the band
    # Band
    def FREQUENCY_RANGE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from FrequencyRange import FrequencyRange
            obj = FrequencyRange()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

def BandStart(builder):
    builder.StartObject(2)

def Start(builder):
    BandStart(builder)

def BandAddNAME(builder, NAME):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(NAME), 0)

def AddNAME(builder, NAME):
    BandAddNAME(builder, NAME)

def BandAddFREQUENCY_RANGE(builder, FREQUENCY_RANGE):
    builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(FREQUENCY_RANGE), 0)

def AddFREQUENCY_RANGE(builder, FREQUENCY_RANGE):
    BandAddFREQUENCY_RANGE(builder, FREQUENCY_RANGE)

def BandEnd(builder):
    return builder.EndObject()

def End(builder):
    return BandEnd(builder)

import FrequencyRange
try:
    from typing import Optional
except:
    pass

class BandT(object):

    # BandT
    def __init__(self):
        self.NAME = None  # type: str
        self.FREQUENCY_RANGE = None  # type: Optional[FrequencyRange.FrequencyRangeT]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        band = Band()
        band.Init(buf, pos)
        return cls.InitFromObj(band)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, band):
        x = BandT()
        x._UnPack(band)
        return x

    # BandT
    def _UnPack(self, band):
        if band is None:
            return
        self.NAME = band.NAME()
        if band.FREQUENCY_RANGE() is not None:
            self.FREQUENCY_RANGE = FrequencyRange.FrequencyRangeT.InitFromObj(band.FREQUENCY_RANGE())

    # BandT
    def Pack(self, builder):
        if self.NAME is not None:
            NAME = builder.CreateString(self.NAME)
        if self.FREQUENCY_RANGE is not None:
            FREQUENCY_RANGE = self.FREQUENCY_RANGE.Pack(builder)
        BandStart(builder)
        if self.NAME is not None:
            BandAddNAME(builder, NAME)
        if self.FREQUENCY_RANGE is not None:
            BandAddFREQUENCY_RANGE(builder, FREQUENCY_RANGE)
        band = BandEnd(builder)
        return band
