# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class RECCOLLECTION(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = RECCOLLECTION()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsRECCOLLECTION(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def RECCOLLECTIONBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x52\x45\x43", size_prefixed=size_prefixed)

    # RECCOLLECTION
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # RECCOLLECTION
    def RECORDS(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from REC import REC
            obj = REC()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # RECCOLLECTION
    def RECORDSLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # RECCOLLECTION
    def RECORDSIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        return o == 0

def RECCOLLECTIONStart(builder):
    builder.StartObject(1)

def Start(builder):
    RECCOLLECTIONStart(builder)

def RECCOLLECTIONAddRECORDS(builder, RECORDS):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(RECORDS), 0)

def AddRECORDS(builder, RECORDS):
    RECCOLLECTIONAddRECORDS(builder, RECORDS)

def RECCOLLECTIONStartRECORDSVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartRECORDSVector(builder, numElems):
    return RECCOLLECTIONStartRECORDSVector(builder, numElems)

def RECCOLLECTIONEnd(builder):
    return builder.EndObject()

def End(builder):
    return RECCOLLECTIONEnd(builder)

import REC
try:
    from typing import List
except:
    pass

class RECCOLLECTIONT(object):

    # RECCOLLECTIONT
    def __init__(self):
        self.RECORDS = None  # type: List[REC.RECT]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        RECCOLLECTION = RECCOLLECTION()
        RECCOLLECTION.Init(buf, pos)
        return cls.InitFromObj(RECCOLLECTION)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, RECCOLLECTION):
        x = RECCOLLECTIONT()
        x._UnPack(RECCOLLECTION)
        return x

    # RECCOLLECTIONT
    def _UnPack(self, RECCOLLECTION):
        if RECCOLLECTION is None:
            return
        if not RECCOLLECTION.RECORDSIsNone():
            self.RECORDS = []
            for i in range(RECCOLLECTION.RECORDSLength()):
                if RECCOLLECTION.RECORDS(i) is None:
                    self.RECORDS.append(None)
                else:
                    rEC_ = REC.RECT.InitFromObj(RECCOLLECTION.RECORDS(i))
                    self.RECORDS.append(rEC_)

    # RECCOLLECTIONT
    def Pack(self, builder):
        if self.RECORDS is not None:
            RECORDSlist = []
            for i in range(len(self.RECORDS)):
                RECORDSlist.append(self.RECORDS[i].Pack(builder))
            RECCOLLECTIONStartRECORDSVector(builder, len(self.RECORDS))
            for i in reversed(range(len(self.RECORDS))):
                builder.PrependUOffsetTRelative(RECORDSlist[i])
            RECORDS = builder.EndVector()
        RECCOLLECTIONStart(builder)
        if self.RECORDS is not None:
            RECCOLLECTIONAddRECORDS(builder, RECORDS)
        RECCOLLECTION = RECCOLLECTIONEnd(builder)
        return RECCOLLECTION
