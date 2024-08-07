# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class CRMCOLLECTION(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = CRMCOLLECTION()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsCRMCOLLECTION(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def CRMCOLLECTIONBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x43\x52\x4D", size_prefixed=size_prefixed)

    # CRMCOLLECTION
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # CRMCOLLECTION
    def RECORDS(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from CRM import CRM
            obj = CRM()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # CRMCOLLECTION
    def RECORDSLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # CRMCOLLECTION
    def RECORDSIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        return o == 0

def CRMCOLLECTIONStart(builder):
    builder.StartObject(1)

def Start(builder):
    CRMCOLLECTIONStart(builder)

def CRMCOLLECTIONAddRECORDS(builder, RECORDS):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(RECORDS), 0)

def AddRECORDS(builder, RECORDS):
    CRMCOLLECTIONAddRECORDS(builder, RECORDS)

def CRMCOLLECTIONStartRECORDSVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartRECORDSVector(builder, numElems):
    return CRMCOLLECTIONStartRECORDSVector(builder, numElems)

def CRMCOLLECTIONEnd(builder):
    return builder.EndObject()

def End(builder):
    return CRMCOLLECTIONEnd(builder)

import CRM
try:
    from typing import List
except:
    pass

class CRMCOLLECTIONT(object):

    # CRMCOLLECTIONT
    def __init__(self):
        self.RECORDS = None  # type: List[CRM.CRMT]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        CRMCOLLECTION = CRMCOLLECTION()
        CRMCOLLECTION.Init(buf, pos)
        return cls.InitFromObj(CRMCOLLECTION)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, CRMCOLLECTION):
        x = CRMCOLLECTIONT()
        x._UnPack(CRMCOLLECTION)
        return x

    # CRMCOLLECTIONT
    def _UnPack(self, CRMCOLLECTION):
        if CRMCOLLECTION is None:
            return
        if not CRMCOLLECTION.RECORDSIsNone():
            self.RECORDS = []
            for i in range(CRMCOLLECTION.RECORDSLength()):
                if CRMCOLLECTION.RECORDS(i) is None:
                    self.RECORDS.append(None)
                else:
                    cRM_ = CRM.CRMT.InitFromObj(CRMCOLLECTION.RECORDS(i))
                    self.RECORDS.append(cRM_)

    # CRMCOLLECTIONT
    def Pack(self, builder):
        if self.RECORDS is not None:
            RECORDSlist = []
            for i in range(len(self.RECORDS)):
                RECORDSlist.append(self.RECORDS[i].Pack(builder))
            CRMCOLLECTIONStartRECORDSVector(builder, len(self.RECORDS))
            for i in reversed(range(len(self.RECORDS))):
                builder.PrependUOffsetTRelative(RECORDSlist[i])
            RECORDS = builder.EndVector()
        CRMCOLLECTIONStart(builder)
        if self.RECORDS is not None:
            CRMCOLLECTIONAddRECORDS(builder, RECORDS)
        CRMCOLLECTION = CRMCOLLECTIONEnd(builder)
        return CRMCOLLECTION
