# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Collection of OEM messages
class OEMCOLLECTION(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = OEMCOLLECTION()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsOEMCOLLECTION(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def OEMCOLLECTIONBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x4F\x45\x4D", size_prefixed=size_prefixed)

    # OEMCOLLECTION
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # OEMCOLLECTION
    def RECORDS(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from OEM import OEM
            obj = OEM()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # OEMCOLLECTION
    def RECORDSLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # OEMCOLLECTION
    def RECORDSIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        return o == 0

def OEMCOLLECTIONStart(builder): builder.StartObject(1)
def Start(builder):
    return OEMCOLLECTIONStart(builder)
def OEMCOLLECTIONAddRECORDS(builder, RECORDS): builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(RECORDS), 0)
def AddRECORDS(builder, RECORDS):
    return OEMCOLLECTIONAddRECORDS(builder, RECORDS)
def OEMCOLLECTIONStartRECORDSVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def StartRECORDSVector(builder, numElems):
    return OEMCOLLECTIONStartRECORDSVector(builder, numElems)
def OEMCOLLECTIONEnd(builder): return builder.EndObject()
def End(builder):
    return OEMCOLLECTIONEnd(builder)
import OEM
try:
    from typing import List
except:
    pass

class OEMCOLLECTIONT(object):

    # OEMCOLLECTIONT
    def __init__(self):
        self.RECORDS = None  # type: List[OEM.OEMT]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        OEMCOLLECTION = OEMCOLLECTION()
        OEMCOLLECTION.Init(buf, pos)
        return cls.InitFromObj(OEMCOLLECTION)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, OEMCOLLECTION):
        x = OEMCOLLECTIONT()
        x._UnPack(OEMCOLLECTION)
        return x

    # OEMCOLLECTIONT
    def _UnPack(self, OEMCOLLECTION):
        if OEMCOLLECTION is None:
            return
        if not OEMCOLLECTION.RECORDSIsNone():
            self.RECORDS = []
            for i in range(OEMCOLLECTION.RECORDSLength()):
                if OEMCOLLECTION.RECORDS(i) is None:
                    self.RECORDS.append(None)
                else:
                    oEM_ = OEM.OEMT.InitFromObj(OEMCOLLECTION.RECORDS(i))
                    self.RECORDS.append(oEM_)

    # OEMCOLLECTIONT
    def Pack(self, builder):
        if self.RECORDS is not None:
            RECORDSlist = []
            for i in range(len(self.RECORDS)):
                RECORDSlist.append(self.RECORDS[i].Pack(builder))
            OEMCOLLECTIONStartRECORDSVector(builder, len(self.RECORDS))
            for i in reversed(range(len(self.RECORDS))):
                builder.PrependUOffsetTRelative(RECORDSlist[i])
            RECORDS = builder.EndVector()
        OEMCOLLECTIONStart(builder)
        if self.RECORDS is not None:
            OEMCOLLECTIONAddRECORDS(builder, RECORDS)
        OEMCOLLECTION = OEMCOLLECTIONEnd(builder)
        return OEMCOLLECTION