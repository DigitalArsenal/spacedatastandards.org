# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Stage Details
class STAGE(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = STAGE()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsSTAGE(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def STAGEBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x52\x4F\x43", size_prefixed=size_prefixed)

    # STAGE
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Stage Number
    # STAGE
    def STAGE_NUMBER(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # Engines Used in This Stage
    # STAGE
    def ENGINES(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from ENGINE import ENGINE
            obj = ENGINE()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # STAGE
    def ENGINESLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # STAGE
    def ENGINESIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        return o == 0

    # Fuel Type Used in This Stage
    # STAGE
    def FUEL_TYPE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Thrust Produced by This Stage (in Newtons)
    # STAGE
    def THRUST(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # Duration of the Burn (in Seconds)
    # STAGE
    def BURN_DURATION(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

def STAGEStart(builder): builder.StartObject(5)
def Start(builder):
    return STAGEStart(builder)
def STAGEAddSTAGE_NUMBER(builder, STAGE_NUMBER): builder.PrependInt32Slot(0, STAGE_NUMBER, 0)
def AddSTAGE_NUMBER(builder, STAGE_NUMBER):
    return STAGEAddSTAGE_NUMBER(builder, STAGE_NUMBER)
def STAGEAddENGINES(builder, ENGINES): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(ENGINES), 0)
def AddENGINES(builder, ENGINES):
    return STAGEAddENGINES(builder, ENGINES)
def STAGEStartENGINESVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def StartENGINESVector(builder, numElems):
    return STAGEStartENGINESVector(builder, numElems)
def STAGEAddFUEL_TYPE(builder, FUEL_TYPE): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(FUEL_TYPE), 0)
def AddFUEL_TYPE(builder, FUEL_TYPE):
    return STAGEAddFUEL_TYPE(builder, FUEL_TYPE)
def STAGEAddTHRUST(builder, THRUST): builder.PrependFloat64Slot(3, THRUST, 0.0)
def AddTHRUST(builder, THRUST):
    return STAGEAddTHRUST(builder, THRUST)
def STAGEAddBURN_DURATION(builder, BURN_DURATION): builder.PrependFloat64Slot(4, BURN_DURATION, 0.0)
def AddBURN_DURATION(builder, BURN_DURATION):
    return STAGEAddBURN_DURATION(builder, BURN_DURATION)
def STAGEEnd(builder): return builder.EndObject()
def End(builder):
    return STAGEEnd(builder)
import ENGINE
try:
    from typing import List
except:
    pass

class STAGET(object):

    # STAGET
    def __init__(self):
        self.STAGE_NUMBER = 0  # type: int
        self.ENGINES = None  # type: List[ENGINE.ENGINET]
        self.FUEL_TYPE = None  # type: str
        self.THRUST = 0.0  # type: float
        self.BURN_DURATION = 0.0  # type: float

    @classmethod
    def InitFromBuf(cls, buf, pos):
        STAGE = STAGE()
        STAGE.Init(buf, pos)
        return cls.InitFromObj(STAGE)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, STAGE):
        x = STAGET()
        x._UnPack(STAGE)
        return x

    # STAGET
    def _UnPack(self, STAGE):
        if STAGE is None:
            return
        self.STAGE_NUMBER = STAGE.STAGE_NUMBER()
        if not STAGE.ENGINESIsNone():
            self.ENGINES = []
            for i in range(STAGE.ENGINESLength()):
                if STAGE.ENGINES(i) is None:
                    self.ENGINES.append(None)
                else:
                    eNGINE_ = ENGINE.ENGINET.InitFromObj(STAGE.ENGINES(i))
                    self.ENGINES.append(eNGINE_)
        self.FUEL_TYPE = STAGE.FUEL_TYPE()
        self.THRUST = STAGE.THRUST()
        self.BURN_DURATION = STAGE.BURN_DURATION()

    # STAGET
    def Pack(self, builder):
        if self.ENGINES is not None:
            ENGINESlist = []
            for i in range(len(self.ENGINES)):
                ENGINESlist.append(self.ENGINES[i].Pack(builder))
            STAGEStartENGINESVector(builder, len(self.ENGINES))
            for i in reversed(range(len(self.ENGINES))):
                builder.PrependUOffsetTRelative(ENGINESlist[i])
            ENGINES = builder.EndVector()
        if self.FUEL_TYPE is not None:
            FUEL_TYPE = builder.CreateString(self.FUEL_TYPE)
        STAGEStart(builder)
        STAGEAddSTAGE_NUMBER(builder, self.STAGE_NUMBER)
        if self.ENGINES is not None:
            STAGEAddENGINES(builder, ENGINES)
        if self.FUEL_TYPE is not None:
            STAGEAddFUEL_TYPE(builder, FUEL_TYPE)
        STAGEAddTHRUST(builder, self.THRUST)
        STAGEAddBURN_DURATION(builder, self.BURN_DURATION)
        STAGE = STAGEEnd(builder)
        return STAGE