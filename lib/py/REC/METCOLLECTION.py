# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class METCOLLECTION(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = METCOLLECTION()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsMETCOLLECTION(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def METCOLLECTIONBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x4D\x45\x54", size_prefixed=size_prefixed)

    # METCOLLECTION
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # METCOLLECTION
    def RECORDS(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from MET import MET
            obj = MET()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # METCOLLECTION
    def RECORDSLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # METCOLLECTION
    def RECORDSIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        return o == 0

def METCOLLECTIONStart(builder): builder.StartObject(1)
def Start(builder):
    return METCOLLECTIONStart(builder)
def METCOLLECTIONAddRECORDS(builder, RECORDS): builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(RECORDS), 0)
def AddRECORDS(builder, RECORDS):
    return METCOLLECTIONAddRECORDS(builder, RECORDS)
def METCOLLECTIONStartRECORDSVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def StartRECORDSVector(builder, numElems):
    return METCOLLECTIONStartRECORDSVector(builder, numElems)
def METCOLLECTIONEnd(builder): return builder.EndObject()
def End(builder):
    return METCOLLECTIONEnd(builder)
import MET
try:
    from typing import List
except:
    pass

class METCOLLECTIONT(object):

    # METCOLLECTIONT
    def __init__(self):
        self.RECORDS = None  # type: List[MET.METT]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        METCOLLECTION = METCOLLECTION()
        METCOLLECTION.Init(buf, pos)
        return cls.InitFromObj(METCOLLECTION)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, METCOLLECTION):
        x = METCOLLECTIONT()
        x._UnPack(METCOLLECTION)
        return x

    # METCOLLECTIONT
    def _UnPack(self, METCOLLECTION):
        if METCOLLECTION is None:
            return
        if not METCOLLECTION.RECORDSIsNone():
            self.RECORDS = []
            for i in range(METCOLLECTION.RECORDSLength()):
                if METCOLLECTION.RECORDS(i) is None:
                    self.RECORDS.append(None)
                else:
                    mET_ = MET.METT.InitFromObj(METCOLLECTION.RECORDS(i))
                    self.RECORDS.append(mET_)

    # METCOLLECTIONT
    def Pack(self, builder):
        if self.RECORDS is not None:
            RECORDSlist = []
            for i in range(len(self.RECORDS)):
                RECORDSlist.append(self.RECORDS[i].Pack(builder))
            METCOLLECTIONStartRECORDSVector(builder, len(self.RECORDS))
            for i in reversed(range(len(self.RECORDS))):
                builder.PrependUOffsetTRelative(RECORDSlist[i])
            RECORDS = builder.EndVector()
        METCOLLECTIONStart(builder)
        if self.RECORDS is not None:
            METCOLLECTIONAddRECORDS(builder, RECORDS)
        METCOLLECTION = METCOLLECTIONEnd(builder)
        return METCOLLECTION