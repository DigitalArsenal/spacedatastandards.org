# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class IDMCOLLECTION(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = IDMCOLLECTION()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsIDMCOLLECTION(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def IDMCOLLECTIONBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x49\x44\x4D", size_prefixed=size_prefixed)

    # IDMCOLLECTION
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # IDMCOLLECTION
    def RECORDS(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from IDM import IDM
            obj = IDM()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # IDMCOLLECTION
    def RECORDSLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # IDMCOLLECTION
    def RECORDSIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        return o == 0

def IDMCOLLECTIONStart(builder):
    builder.StartObject(1)

def Start(builder):
    IDMCOLLECTIONStart(builder)

def IDMCOLLECTIONAddRECORDS(builder, RECORDS):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(RECORDS), 0)

def AddRECORDS(builder, RECORDS):
    IDMCOLLECTIONAddRECORDS(builder, RECORDS)

def IDMCOLLECTIONStartRECORDSVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartRECORDSVector(builder, numElems):
    return IDMCOLLECTIONStartRECORDSVector(builder, numElems)

def IDMCOLLECTIONEnd(builder):
    return builder.EndObject()

def End(builder):
    return IDMCOLLECTIONEnd(builder)

import IDM
try:
    from typing import List
except:
    pass

class IDMCOLLECTIONT(object):

    # IDMCOLLECTIONT
    def __init__(self):
        self.RECORDS = None  # type: List[IDM.IDMT]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        IDMCOLLECTION = IDMCOLLECTION()
        IDMCOLLECTION.Init(buf, pos)
        return cls.InitFromObj(IDMCOLLECTION)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, IDMCOLLECTION):
        x = IDMCOLLECTIONT()
        x._UnPack(IDMCOLLECTION)
        return x

    # IDMCOLLECTIONT
    def _UnPack(self, IDMCOLLECTION):
        if IDMCOLLECTION is None:
            return
        if not IDMCOLLECTION.RECORDSIsNone():
            self.RECORDS = []
            for i in range(IDMCOLLECTION.RECORDSLength()):
                if IDMCOLLECTION.RECORDS(i) is None:
                    self.RECORDS.append(None)
                else:
                    iDM_ = IDM.IDMT.InitFromObj(IDMCOLLECTION.RECORDS(i))
                    self.RECORDS.append(iDM_)

    # IDMCOLLECTIONT
    def Pack(self, builder):
        if self.RECORDS is not None:
            RECORDSlist = []
            for i in range(len(self.RECORDS)):
                RECORDSlist.append(self.RECORDS[i].Pack(builder))
            IDMCOLLECTIONStartRECORDSVector(builder, len(self.RECORDS))
            for i in reversed(range(len(self.RECORDS))):
                builder.PrependUOffsetTRelative(RECORDSlist[i])
            RECORDS = builder.EndVector()
        IDMCOLLECTIONStart(builder)
        if self.RECORDS is not None:
            IDMCOLLECTIONAddRECORDS(builder, RECORDS)
        IDMCOLLECTION = IDMCOLLECTIONEnd(builder)
        return IDMCOLLECTION
