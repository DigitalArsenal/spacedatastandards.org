# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Collection of Publish Notification Messages
# This table groups multiple PNM records for batch processing and management.
class PNMCOLLECTION(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = PNMCOLLECTION()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsPNMCOLLECTION(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def PNMCOLLECTIONBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x50\x4E\x4D", size_prefixed=size_prefixed)

    # PNMCOLLECTION
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # PNMCOLLECTION
    def RECORDS(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from PNM import PNM
            obj = PNM()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # PNMCOLLECTION
    def RECORDSLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # PNMCOLLECTION
    def RECORDSIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        return o == 0

def PNMCOLLECTIONStart(builder): builder.StartObject(1)
def Start(builder):
    return PNMCOLLECTIONStart(builder)
def PNMCOLLECTIONAddRECORDS(builder, RECORDS): builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(RECORDS), 0)
def AddRECORDS(builder, RECORDS):
    return PNMCOLLECTIONAddRECORDS(builder, RECORDS)
def PNMCOLLECTIONStartRECORDSVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def StartRECORDSVector(builder, numElems):
    return PNMCOLLECTIONStartRECORDSVector(builder, numElems)
def PNMCOLLECTIONEnd(builder): return builder.EndObject()
def End(builder):
    return PNMCOLLECTIONEnd(builder)
import PNM
try:
    from typing import List
except:
    pass

class PNMCOLLECTIONT(object):

    # PNMCOLLECTIONT
    def __init__(self):
        self.RECORDS = None  # type: List[PNM.PNMT]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        PNMCOLLECTION = PNMCOLLECTION()
        PNMCOLLECTION.Init(buf, pos)
        return cls.InitFromObj(PNMCOLLECTION)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, PNMCOLLECTION):
        x = PNMCOLLECTIONT()
        x._UnPack(PNMCOLLECTION)
        return x

    # PNMCOLLECTIONT
    def _UnPack(self, PNMCOLLECTION):
        if PNMCOLLECTION is None:
            return
        if not PNMCOLLECTION.RECORDSIsNone():
            self.RECORDS = []
            for i in range(PNMCOLLECTION.RECORDSLength()):
                if PNMCOLLECTION.RECORDS(i) is None:
                    self.RECORDS.append(None)
                else:
                    pNM_ = PNM.PNMT.InitFromObj(PNMCOLLECTION.RECORDS(i))
                    self.RECORDS.append(pNM_)

    # PNMCOLLECTIONT
    def Pack(self, builder):
        if self.RECORDS is not None:
            RECORDSlist = []
            for i in range(len(self.RECORDS)):
                RECORDSlist.append(self.RECORDS[i].Pack(builder))
            PNMCOLLECTIONStartRECORDSVector(builder, len(self.RECORDS))
            for i in reversed(range(len(self.RECORDS))):
                builder.PrependUOffsetTRelative(RECORDSlist[i])
            RECORDS = builder.EndVector()
        PNMCOLLECTIONStart(builder)
        if self.RECORDS is not None:
            PNMCOLLECTIONAddRECORDS(builder, RECORDS)
        PNMCOLLECTION = PNMCOLLECTIONEnd(builder)
        return PNMCOLLECTION