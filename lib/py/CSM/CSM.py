# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class CSM(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = CSM()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsCSM(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def CSMBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x43\x53\x4D", size_prefixed=size_prefixed)

    # CSM
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # NORAD Catalog Number for the first object
    # CSM
    def NORAD_CAT_ID_1(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint32Flags, o + self._tab.Pos)
        return 0

    # Satellite name for the first object
    # CSM
    def OBJECT_NAME_1(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Days since epoch for the first object
    # CSM
    def DSE_1(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # NORAD Catalog Number for the second object
    # CSM
    def NORAD_CAT_ID_2(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint32Flags, o + self._tab.Pos)
        return 0

    # Satellite name for the second object
    # CSM
    def OBJECT_NAME_2(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Days since epoch for the second object
    # CSM
    def DSE_2(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # Time of closest approach as a Unix timestamp
    # CSM
    def TCA(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # The distance or range between the two objects at TCA
    # CSM
    def TCA_RANGE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # The magnitude of the relative velocity at TCA
    # CSM
    def TCA_RELATIVE_SPEED(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # Maximum probability
    # CSM
    def MAX_PROB(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(22))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # Standard deviation that produces the maximum probability
    # CSM
    def DILUTION(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(24))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

def CSMStart(builder): builder.StartObject(11)
def Start(builder):
    return CSMStart(builder)
def CSMAddNORAD_CAT_ID_1(builder, NORAD_CAT_ID_1): builder.PrependUint32Slot(0, NORAD_CAT_ID_1, 0)
def AddNORAD_CAT_ID_1(builder, NORAD_CAT_ID_1):
    return CSMAddNORAD_CAT_ID_1(builder, NORAD_CAT_ID_1)
def CSMAddOBJECT_NAME_1(builder, OBJECT_NAME_1): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(OBJECT_NAME_1), 0)
def AddOBJECT_NAME_1(builder, OBJECT_NAME_1):
    return CSMAddOBJECT_NAME_1(builder, OBJECT_NAME_1)
def CSMAddDSE_1(builder, DSE_1): builder.PrependFloat64Slot(2, DSE_1, 0.0)
def AddDSE_1(builder, DSE_1):
    return CSMAddDSE_1(builder, DSE_1)
def CSMAddNORAD_CAT_ID_2(builder, NORAD_CAT_ID_2): builder.PrependUint32Slot(3, NORAD_CAT_ID_2, 0)
def AddNORAD_CAT_ID_2(builder, NORAD_CAT_ID_2):
    return CSMAddNORAD_CAT_ID_2(builder, NORAD_CAT_ID_2)
def CSMAddOBJECT_NAME_2(builder, OBJECT_NAME_2): builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(OBJECT_NAME_2), 0)
def AddOBJECT_NAME_2(builder, OBJECT_NAME_2):
    return CSMAddOBJECT_NAME_2(builder, OBJECT_NAME_2)
def CSMAddDSE_2(builder, DSE_2): builder.PrependFloat64Slot(5, DSE_2, 0.0)
def AddDSE_2(builder, DSE_2):
    return CSMAddDSE_2(builder, DSE_2)
def CSMAddTCA(builder, TCA): builder.PrependFloat64Slot(6, TCA, 0.0)
def AddTCA(builder, TCA):
    return CSMAddTCA(builder, TCA)
def CSMAddTCA_RANGE(builder, TCA_RANGE): builder.PrependFloat64Slot(7, TCA_RANGE, 0.0)
def AddTCA_RANGE(builder, TCA_RANGE):
    return CSMAddTCA_RANGE(builder, TCA_RANGE)
def CSMAddTCA_RELATIVE_SPEED(builder, TCA_RELATIVE_SPEED): builder.PrependFloat64Slot(8, TCA_RELATIVE_SPEED, 0.0)
def AddTCA_RELATIVE_SPEED(builder, TCA_RELATIVE_SPEED):
    return CSMAddTCA_RELATIVE_SPEED(builder, TCA_RELATIVE_SPEED)
def CSMAddMAX_PROB(builder, MAX_PROB): builder.PrependFloat64Slot(9, MAX_PROB, 0.0)
def AddMAX_PROB(builder, MAX_PROB):
    return CSMAddMAX_PROB(builder, MAX_PROB)
def CSMAddDILUTION(builder, DILUTION): builder.PrependFloat64Slot(10, DILUTION, 0.0)
def AddDILUTION(builder, DILUTION):
    return CSMAddDILUTION(builder, DILUTION)
def CSMEnd(builder): return builder.EndObject()
def End(builder):
    return CSMEnd(builder)

class CSMT(object):

    # CSMT
    def __init__(self):
        self.NORAD_CAT_ID_1 = 0  # type: int
        self.OBJECT_NAME_1 = None  # type: str
        self.DSE_1 = 0.0  # type: float
        self.NORAD_CAT_ID_2 = 0  # type: int
        self.OBJECT_NAME_2 = None  # type: str
        self.DSE_2 = 0.0  # type: float
        self.TCA = 0.0  # type: float
        self.TCA_RANGE = 0.0  # type: float
        self.TCA_RELATIVE_SPEED = 0.0  # type: float
        self.MAX_PROB = 0.0  # type: float
        self.DILUTION = 0.0  # type: float

    @classmethod
    def InitFromBuf(cls, buf, pos):
        CSM = CSM()
        CSM.Init(buf, pos)
        return cls.InitFromObj(CSM)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, CSM):
        x = CSMT()
        x._UnPack(CSM)
        return x

    # CSMT
    def _UnPack(self, CSM):
        if CSM is None:
            return
        self.NORAD_CAT_ID_1 = CSM.NORAD_CAT_ID_1()
        self.OBJECT_NAME_1 = CSM.OBJECT_NAME_1()
        self.DSE_1 = CSM.DSE_1()
        self.NORAD_CAT_ID_2 = CSM.NORAD_CAT_ID_2()
        self.OBJECT_NAME_2 = CSM.OBJECT_NAME_2()
        self.DSE_2 = CSM.DSE_2()
        self.TCA = CSM.TCA()
        self.TCA_RANGE = CSM.TCA_RANGE()
        self.TCA_RELATIVE_SPEED = CSM.TCA_RELATIVE_SPEED()
        self.MAX_PROB = CSM.MAX_PROB()
        self.DILUTION = CSM.DILUTION()

    # CSMT
    def Pack(self, builder):
        if self.OBJECT_NAME_1 is not None:
            OBJECT_NAME_1 = builder.CreateString(self.OBJECT_NAME_1)
        if self.OBJECT_NAME_2 is not None:
            OBJECT_NAME_2 = builder.CreateString(self.OBJECT_NAME_2)
        CSMStart(builder)
        CSMAddNORAD_CAT_ID_1(builder, self.NORAD_CAT_ID_1)
        if self.OBJECT_NAME_1 is not None:
            CSMAddOBJECT_NAME_1(builder, OBJECT_NAME_1)
        CSMAddDSE_1(builder, self.DSE_1)
        CSMAddNORAD_CAT_ID_2(builder, self.NORAD_CAT_ID_2)
        if self.OBJECT_NAME_2 is not None:
            CSMAddOBJECT_NAME_2(builder, OBJECT_NAME_2)
        CSMAddDSE_2(builder, self.DSE_2)
        CSMAddTCA(builder, self.TCA)
        CSMAddTCA_RANGE(builder, self.TCA_RANGE)
        CSMAddTCA_RELATIVE_SPEED(builder, self.TCA_RELATIVE_SPEED)
        CSMAddMAX_PROB(builder, self.MAX_PROB)
        CSMAddDILUTION(builder, self.DILUTION)
        CSM = CSMEnd(builder)
        return CSM