# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Earth Orientation Parameters
class EOP(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = EOP()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsEOP(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def EOPBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x45\x4F\x50", size_prefixed=size_prefixed)

    # EOP
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    #  Date in ISO 8601 format, e.g., "2018-01-01T00:00:00Z"
    # EOP
    def DATE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    #  Modified Julian Date in UTC, e.g., 58119
    # EOP
    def MJD(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint32Flags, o + self._tab.Pos)
        return 0

    #  x component of Pole Wander in radians, e.g., 2.872908911518888E-7
    # EOP
    def X_POLE_WANDER_RADIANS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 0.0

    #  y component of Pole Wander in radians, e.g., 1.2003259523750447E-6
    # EOP
    def Y_POLE_WANDER_RADIANS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 0.0

    #  x component of Celestial Pole Offset in radians, e.g., 5.720801437092525E-10
    # EOP
    def X_CELESTIAL_POLE_OFFSET_RADIANS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 0.0

    #  y component of Celestial Pole Offset in radians, e.g., -8.484239419416879E-10
    # EOP
    def Y_CELESTIAL_POLE_OFFSET_RADIANS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 0.0

    #  UT1 minus UTC in seconds, e.g., 0.2163567
    # EOP
    def UT1_MINUS_UTC_SECONDS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 0.0

    #  TAI minus UTC in seconds, e.g., 37
    # EOP
    def TAI_MINUS_UTC_SECONDS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint16Flags, o + self._tab.Pos)
        return 0

    #  Correction to Length of Day in seconds, e.g., 8.094E-4
    # EOP
    def LENGTH_OF_DAY_CORRECTION_SECONDS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 0.0

    #  Data type (O = Observed, P = Predicted)
    # EOP
    def DATA_TYPE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(22))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

def EOPStart(builder): builder.StartObject(10)
def Start(builder):
    return EOPStart(builder)
def EOPAddDATE(builder, DATE): builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(DATE), 0)
def AddDATE(builder, DATE):
    return EOPAddDATE(builder, DATE)
def EOPAddMJD(builder, MJD): builder.PrependUint32Slot(1, MJD, 0)
def AddMJD(builder, MJD):
    return EOPAddMJD(builder, MJD)
def EOPAddX_POLE_WANDER_RADIANS(builder, X_POLE_WANDER_RADIANS): builder.PrependFloat32Slot(2, X_POLE_WANDER_RADIANS, 0.0)
def AddX_POLE_WANDER_RADIANS(builder, X_POLE_WANDER_RADIANS):
    return EOPAddX_POLE_WANDER_RADIANS(builder, X_POLE_WANDER_RADIANS)
def EOPAddY_POLE_WANDER_RADIANS(builder, Y_POLE_WANDER_RADIANS): builder.PrependFloat32Slot(3, Y_POLE_WANDER_RADIANS, 0.0)
def AddY_POLE_WANDER_RADIANS(builder, Y_POLE_WANDER_RADIANS):
    return EOPAddY_POLE_WANDER_RADIANS(builder, Y_POLE_WANDER_RADIANS)
def EOPAddX_CELESTIAL_POLE_OFFSET_RADIANS(builder, X_CELESTIAL_POLE_OFFSET_RADIANS): builder.PrependFloat32Slot(4, X_CELESTIAL_POLE_OFFSET_RADIANS, 0.0)
def AddX_CELESTIAL_POLE_OFFSET_RADIANS(builder, X_CELESTIAL_POLE_OFFSET_RADIANS):
    return EOPAddX_CELESTIAL_POLE_OFFSET_RADIANS(builder, X_CELESTIAL_POLE_OFFSET_RADIANS)
def EOPAddY_CELESTIAL_POLE_OFFSET_RADIANS(builder, Y_CELESTIAL_POLE_OFFSET_RADIANS): builder.PrependFloat32Slot(5, Y_CELESTIAL_POLE_OFFSET_RADIANS, 0.0)
def AddY_CELESTIAL_POLE_OFFSET_RADIANS(builder, Y_CELESTIAL_POLE_OFFSET_RADIANS):
    return EOPAddY_CELESTIAL_POLE_OFFSET_RADIANS(builder, Y_CELESTIAL_POLE_OFFSET_RADIANS)
def EOPAddUT1_MINUS_UTC_SECONDS(builder, UT1_MINUS_UTC_SECONDS): builder.PrependFloat32Slot(6, UT1_MINUS_UTC_SECONDS, 0.0)
def AddUT1_MINUS_UTC_SECONDS(builder, UT1_MINUS_UTC_SECONDS):
    return EOPAddUT1_MINUS_UTC_SECONDS(builder, UT1_MINUS_UTC_SECONDS)
def EOPAddTAI_MINUS_UTC_SECONDS(builder, TAI_MINUS_UTC_SECONDS): builder.PrependUint16Slot(7, TAI_MINUS_UTC_SECONDS, 0)
def AddTAI_MINUS_UTC_SECONDS(builder, TAI_MINUS_UTC_SECONDS):
    return EOPAddTAI_MINUS_UTC_SECONDS(builder, TAI_MINUS_UTC_SECONDS)
def EOPAddLENGTH_OF_DAY_CORRECTION_SECONDS(builder, LENGTH_OF_DAY_CORRECTION_SECONDS): builder.PrependFloat32Slot(8, LENGTH_OF_DAY_CORRECTION_SECONDS, 0.0)
def AddLENGTH_OF_DAY_CORRECTION_SECONDS(builder, LENGTH_OF_DAY_CORRECTION_SECONDS):
    return EOPAddLENGTH_OF_DAY_CORRECTION_SECONDS(builder, LENGTH_OF_DAY_CORRECTION_SECONDS)
def EOPAddDATA_TYPE(builder, DATA_TYPE): builder.PrependInt8Slot(9, DATA_TYPE, 0)
def AddDATA_TYPE(builder, DATA_TYPE):
    return EOPAddDATA_TYPE(builder, DATA_TYPE)
def EOPEnd(builder): return builder.EndObject()
def End(builder):
    return EOPEnd(builder)

class EOPT(object):

    # EOPT
    def __init__(self):
        self.DATE = None  # type: str
        self.MJD = 0  # type: int
        self.X_POLE_WANDER_RADIANS = 0.0  # type: float
        self.Y_POLE_WANDER_RADIANS = 0.0  # type: float
        self.X_CELESTIAL_POLE_OFFSET_RADIANS = 0.0  # type: float
        self.Y_CELESTIAL_POLE_OFFSET_RADIANS = 0.0  # type: float
        self.UT1_MINUS_UTC_SECONDS = 0.0  # type: float
        self.TAI_MINUS_UTC_SECONDS = 0  # type: int
        self.LENGTH_OF_DAY_CORRECTION_SECONDS = 0.0  # type: float
        self.DATA_TYPE = 0  # type: int

    @classmethod
    def InitFromBuf(cls, buf, pos):
        EOP = EOP()
        EOP.Init(buf, pos)
        return cls.InitFromObj(EOP)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, EOP):
        x = EOPT()
        x._UnPack(EOP)
        return x

    # EOPT
    def _UnPack(self, EOP):
        if EOP is None:
            return
        self.DATE = EOP.DATE()
        self.MJD = EOP.MJD()
        self.X_POLE_WANDER_RADIANS = EOP.X_POLE_WANDER_RADIANS()
        self.Y_POLE_WANDER_RADIANS = EOP.Y_POLE_WANDER_RADIANS()
        self.X_CELESTIAL_POLE_OFFSET_RADIANS = EOP.X_CELESTIAL_POLE_OFFSET_RADIANS()
        self.Y_CELESTIAL_POLE_OFFSET_RADIANS = EOP.Y_CELESTIAL_POLE_OFFSET_RADIANS()
        self.UT1_MINUS_UTC_SECONDS = EOP.UT1_MINUS_UTC_SECONDS()
        self.TAI_MINUS_UTC_SECONDS = EOP.TAI_MINUS_UTC_SECONDS()
        self.LENGTH_OF_DAY_CORRECTION_SECONDS = EOP.LENGTH_OF_DAY_CORRECTION_SECONDS()
        self.DATA_TYPE = EOP.DATA_TYPE()

    # EOPT
    def Pack(self, builder):
        if self.DATE is not None:
            DATE = builder.CreateString(self.DATE)
        EOPStart(builder)
        if self.DATE is not None:
            EOPAddDATE(builder, DATE)
        EOPAddMJD(builder, self.MJD)
        EOPAddX_POLE_WANDER_RADIANS(builder, self.X_POLE_WANDER_RADIANS)
        EOPAddY_POLE_WANDER_RADIANS(builder, self.Y_POLE_WANDER_RADIANS)
        EOPAddX_CELESTIAL_POLE_OFFSET_RADIANS(builder, self.X_CELESTIAL_POLE_OFFSET_RADIANS)
        EOPAddY_CELESTIAL_POLE_OFFSET_RADIANS(builder, self.Y_CELESTIAL_POLE_OFFSET_RADIANS)
        EOPAddUT1_MINUS_UTC_SECONDS(builder, self.UT1_MINUS_UTC_SECONDS)
        EOPAddTAI_MINUS_UTC_SECONDS(builder, self.TAI_MINUS_UTC_SECONDS)
        EOPAddLENGTH_OF_DAY_CORRECTION_SECONDS(builder, self.LENGTH_OF_DAY_CORRECTION_SECONDS)
        EOPAddDATA_TYPE(builder, self.DATA_TYPE)
        EOP = EOPEnd(builder)
        return EOP