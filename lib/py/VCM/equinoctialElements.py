# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Equinoctial Elements
class equinoctialElements(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = equinoctialElements()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsequinoctialElements(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    # equinoctialElements
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # equinoctialElements
    def AF(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # equinoctialElements
    def AG(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # equinoctialElements
    def L(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # equinoctialElements
    def N(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # equinoctialElements
    def CHI(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # equinoctialElements
    def PSI(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

def equinoctialElementsStart(builder):
    builder.StartObject(6)

def Start(builder):
    equinoctialElementsStart(builder)

def equinoctialElementsAddAF(builder, AF):
    builder.PrependFloat64Slot(0, AF, 0.0)

def AddAF(builder, AF):
    equinoctialElementsAddAF(builder, AF)

def equinoctialElementsAddAG(builder, AG):
    builder.PrependFloat64Slot(1, AG, 0.0)

def AddAG(builder, AG):
    equinoctialElementsAddAG(builder, AG)

def equinoctialElementsAddL(builder, L):
    builder.PrependFloat64Slot(2, L, 0.0)

def AddL(builder, L):
    equinoctialElementsAddL(builder, L)

def equinoctialElementsAddN(builder, N):
    builder.PrependFloat64Slot(3, N, 0.0)

def AddN(builder, N):
    equinoctialElementsAddN(builder, N)

def equinoctialElementsAddCHI(builder, CHI):
    builder.PrependFloat64Slot(4, CHI, 0.0)

def AddCHI(builder, CHI):
    equinoctialElementsAddCHI(builder, CHI)

def equinoctialElementsAddPSI(builder, PSI):
    builder.PrependFloat64Slot(5, PSI, 0.0)

def AddPSI(builder, PSI):
    equinoctialElementsAddPSI(builder, PSI)

def equinoctialElementsEnd(builder):
    return builder.EndObject()

def End(builder):
    return equinoctialElementsEnd(builder)


class equinoctialElementsT(object):

    # equinoctialElementsT
    def __init__(self):
        self.AF = 0.0  # type: float
        self.AG = 0.0  # type: float
        self.L = 0.0  # type: float
        self.N = 0.0  # type: float
        self.CHI = 0.0  # type: float
        self.PSI = 0.0  # type: float

    @classmethod
    def InitFromBuf(cls, buf, pos):
        equinoctialElements = equinoctialElements()
        equinoctialElements.Init(buf, pos)
        return cls.InitFromObj(equinoctialElements)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, equinoctialElements):
        x = equinoctialElementsT()
        x._UnPack(equinoctialElements)
        return x

    # equinoctialElementsT
    def _UnPack(self, equinoctialElements):
        if equinoctialElements is None:
            return
        self.AF = equinoctialElements.AF()
        self.AG = equinoctialElements.AG()
        self.L = equinoctialElements.L()
        self.N = equinoctialElements.N()
        self.CHI = equinoctialElements.CHI()
        self.PSI = equinoctialElements.PSI()

    # equinoctialElementsT
    def Pack(self, builder):
        equinoctialElementsStart(builder)
        equinoctialElementsAddAF(builder, self.AF)
        equinoctialElementsAddAG(builder, self.AG)
        equinoctialElementsAddL(builder, self.L)
        equinoctialElementsAddN(builder, self.N)
        equinoctialElementsAddCHI(builder, self.CHI)
        equinoctialElementsAddPSI(builder, self.PSI)
        equinoctialElements = equinoctialElementsEnd(builder)
        return equinoctialElements