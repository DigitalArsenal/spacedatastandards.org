# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class Maneuver(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = Maneuver()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsManeuver(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def ManeuverBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x4F\x43\x4D", size_prefixed=size_prefixed)

    # Maneuver
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Unique identifier for the maneuver.
    # Maneuver
    def MAN_ID(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Basis of the maneuver plan (e.g., planned, predicted, estimated).
    # Maneuver
    def MAN_BASIS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Identifier of the maneuver device.
    # Maneuver
    def MAN_DEVICE_ID(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Identifier of the previous maneuver.
    # Maneuver
    def MAN_PREV_ID(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Purpose of the maneuver.
    # Maneuver
    def MAN_PURPOSE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Reference frame for the maneuver data.
    # Maneuver
    def MAN_REF_FRAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Epoch of the maneuver reference frame.
    # Maneuver
    def MAN_FRAME_EPOCH(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Type of maneuver (e.g., IMPULSIVE, FINITE).
    # Maneuver
    def MAN_TYPE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Start epoch of the maneuver.
    # Maneuver
    def MAN_EPOCH_START(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Duration of the maneuver.
    # Maneuver
    def MAN_DURATION(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(22))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # Units for the maneuver data values.
    # Maneuver
    def MAN_UNITS(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(24))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.String(a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4))
        return ""

    # Maneuver
    def MAN_UNITSLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(24))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # Maneuver
    def MAN_UNITSIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(24))
        return o == 0

    # Data associated with the maneuver.
    # Maneuver
    def DATA(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(26))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.String(a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4))
        return ""

    # Maneuver
    def DATALength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(26))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # Maneuver
    def DATAIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(26))
        return o == 0

    # Comments related to the maneuver.
    # Maneuver
    def MAN_COMMENT(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(28))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.String(a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4))
        return ""

    # Maneuver
    def MAN_COMMENTLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(28))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # Maneuver
    def MAN_COMMENTIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(28))
        return o == 0

def ManeuverStart(builder):
    builder.StartObject(13)

def Start(builder):
    ManeuverStart(builder)

def ManeuverAddMAN_ID(builder, MAN_ID):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_ID), 0)

def AddMAN_ID(builder, MAN_ID):
    ManeuverAddMAN_ID(builder, MAN_ID)

def ManeuverAddMAN_BASIS(builder, MAN_BASIS):
    builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_BASIS), 0)

def AddMAN_BASIS(builder, MAN_BASIS):
    ManeuverAddMAN_BASIS(builder, MAN_BASIS)

def ManeuverAddMAN_DEVICE_ID(builder, MAN_DEVICE_ID):
    builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_DEVICE_ID), 0)

def AddMAN_DEVICE_ID(builder, MAN_DEVICE_ID):
    ManeuverAddMAN_DEVICE_ID(builder, MAN_DEVICE_ID)

def ManeuverAddMAN_PREV_ID(builder, MAN_PREV_ID):
    builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_PREV_ID), 0)

def AddMAN_PREV_ID(builder, MAN_PREV_ID):
    ManeuverAddMAN_PREV_ID(builder, MAN_PREV_ID)

def ManeuverAddMAN_PURPOSE(builder, MAN_PURPOSE):
    builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_PURPOSE), 0)

def AddMAN_PURPOSE(builder, MAN_PURPOSE):
    ManeuverAddMAN_PURPOSE(builder, MAN_PURPOSE)

def ManeuverAddMAN_REF_FRAME(builder, MAN_REF_FRAME):
    builder.PrependUOffsetTRelativeSlot(5, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_REF_FRAME), 0)

def AddMAN_REF_FRAME(builder, MAN_REF_FRAME):
    ManeuverAddMAN_REF_FRAME(builder, MAN_REF_FRAME)

def ManeuverAddMAN_FRAME_EPOCH(builder, MAN_FRAME_EPOCH):
    builder.PrependUOffsetTRelativeSlot(6, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_FRAME_EPOCH), 0)

def AddMAN_FRAME_EPOCH(builder, MAN_FRAME_EPOCH):
    ManeuverAddMAN_FRAME_EPOCH(builder, MAN_FRAME_EPOCH)

def ManeuverAddMAN_TYPE(builder, MAN_TYPE):
    builder.PrependUOffsetTRelativeSlot(7, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_TYPE), 0)

def AddMAN_TYPE(builder, MAN_TYPE):
    ManeuverAddMAN_TYPE(builder, MAN_TYPE)

def ManeuverAddMAN_EPOCH_START(builder, MAN_EPOCH_START):
    builder.PrependUOffsetTRelativeSlot(8, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_EPOCH_START), 0)

def AddMAN_EPOCH_START(builder, MAN_EPOCH_START):
    ManeuverAddMAN_EPOCH_START(builder, MAN_EPOCH_START)

def ManeuverAddMAN_DURATION(builder, MAN_DURATION):
    builder.PrependFloat64Slot(9, MAN_DURATION, 0.0)

def AddMAN_DURATION(builder, MAN_DURATION):
    ManeuverAddMAN_DURATION(builder, MAN_DURATION)

def ManeuverAddMAN_UNITS(builder, MAN_UNITS):
    builder.PrependUOffsetTRelativeSlot(10, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_UNITS), 0)

def AddMAN_UNITS(builder, MAN_UNITS):
    ManeuverAddMAN_UNITS(builder, MAN_UNITS)

def ManeuverStartMAN_UNITSVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartMAN_UNITSVector(builder, numElems):
    return ManeuverStartMAN_UNITSVector(builder, numElems)

def ManeuverAddDATA(builder, DATA):
    builder.PrependUOffsetTRelativeSlot(11, flatbuffers.number_types.UOffsetTFlags.py_type(DATA), 0)

def AddDATA(builder, DATA):
    ManeuverAddDATA(builder, DATA)

def ManeuverStartDATAVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartDATAVector(builder, numElems):
    return ManeuverStartDATAVector(builder, numElems)

def ManeuverAddMAN_COMMENT(builder, MAN_COMMENT):
    builder.PrependUOffsetTRelativeSlot(12, flatbuffers.number_types.UOffsetTFlags.py_type(MAN_COMMENT), 0)

def AddMAN_COMMENT(builder, MAN_COMMENT):
    ManeuverAddMAN_COMMENT(builder, MAN_COMMENT)

def ManeuverStartMAN_COMMENTVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartMAN_COMMENTVector(builder, numElems):
    return ManeuverStartMAN_COMMENTVector(builder, numElems)

def ManeuverEnd(builder):
    return builder.EndObject()

def End(builder):
    return ManeuverEnd(builder)

try:
    from typing import List
except:
    pass

class ManeuverT(object):

    # ManeuverT
    def __init__(self):
        self.MAN_ID = None  # type: str
        self.MAN_BASIS = None  # type: str
        self.MAN_DEVICE_ID = None  # type: str
        self.MAN_PREV_ID = None  # type: str
        self.MAN_PURPOSE = None  # type: str
        self.MAN_REF_FRAME = None  # type: str
        self.MAN_FRAME_EPOCH = None  # type: str
        self.MAN_TYPE = None  # type: str
        self.MAN_EPOCH_START = None  # type: str
        self.MAN_DURATION = 0.0  # type: float
        self.MAN_UNITS = None  # type: List[str]
        self.DATA = None  # type: List[str]
        self.MAN_COMMENT = None  # type: List[str]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        maneuver = Maneuver()
        maneuver.Init(buf, pos)
        return cls.InitFromObj(maneuver)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, maneuver):
        x = ManeuverT()
        x._UnPack(maneuver)
        return x

    # ManeuverT
    def _UnPack(self, maneuver):
        if maneuver is None:
            return
        self.MAN_ID = maneuver.MAN_ID()
        self.MAN_BASIS = maneuver.MAN_BASIS()
        self.MAN_DEVICE_ID = maneuver.MAN_DEVICE_ID()
        self.MAN_PREV_ID = maneuver.MAN_PREV_ID()
        self.MAN_PURPOSE = maneuver.MAN_PURPOSE()
        self.MAN_REF_FRAME = maneuver.MAN_REF_FRAME()
        self.MAN_FRAME_EPOCH = maneuver.MAN_FRAME_EPOCH()
        self.MAN_TYPE = maneuver.MAN_TYPE()
        self.MAN_EPOCH_START = maneuver.MAN_EPOCH_START()
        self.MAN_DURATION = maneuver.MAN_DURATION()
        if not maneuver.MAN_UNITSIsNone():
            self.MAN_UNITS = []
            for i in range(maneuver.MAN_UNITSLength()):
                self.MAN_UNITS.append(maneuver.MAN_UNITS(i))
        if not maneuver.DATAIsNone():
            self.DATA = []
            for i in range(maneuver.DATALength()):
                self.DATA.append(maneuver.DATA(i))
        if not maneuver.MAN_COMMENTIsNone():
            self.MAN_COMMENT = []
            for i in range(maneuver.MAN_COMMENTLength()):
                self.MAN_COMMENT.append(maneuver.MAN_COMMENT(i))

    # ManeuverT
    def Pack(self, builder):
        if self.MAN_ID is not None:
            MAN_ID = builder.CreateString(self.MAN_ID)
        if self.MAN_BASIS is not None:
            MAN_BASIS = builder.CreateString(self.MAN_BASIS)
        if self.MAN_DEVICE_ID is not None:
            MAN_DEVICE_ID = builder.CreateString(self.MAN_DEVICE_ID)
        if self.MAN_PREV_ID is not None:
            MAN_PREV_ID = builder.CreateString(self.MAN_PREV_ID)
        if self.MAN_PURPOSE is not None:
            MAN_PURPOSE = builder.CreateString(self.MAN_PURPOSE)
        if self.MAN_REF_FRAME is not None:
            MAN_REF_FRAME = builder.CreateString(self.MAN_REF_FRAME)
        if self.MAN_FRAME_EPOCH is not None:
            MAN_FRAME_EPOCH = builder.CreateString(self.MAN_FRAME_EPOCH)
        if self.MAN_TYPE is not None:
            MAN_TYPE = builder.CreateString(self.MAN_TYPE)
        if self.MAN_EPOCH_START is not None:
            MAN_EPOCH_START = builder.CreateString(self.MAN_EPOCH_START)
        if self.MAN_UNITS is not None:
            MAN_UNITSlist = []
            for i in range(len(self.MAN_UNITS)):
                MAN_UNITSlist.append(builder.CreateString(self.MAN_UNITS[i]))
            ManeuverStartMAN_UNITSVector(builder, len(self.MAN_UNITS))
            for i in reversed(range(len(self.MAN_UNITS))):
                builder.PrependUOffsetTRelative(MAN_UNITSlist[i])
            MAN_UNITS = builder.EndVector()
        if self.DATA is not None:
            DATAlist = []
            for i in range(len(self.DATA)):
                DATAlist.append(builder.CreateString(self.DATA[i]))
            ManeuverStartDATAVector(builder, len(self.DATA))
            for i in reversed(range(len(self.DATA))):
                builder.PrependUOffsetTRelative(DATAlist[i])
            DATA = builder.EndVector()
        if self.MAN_COMMENT is not None:
            MAN_COMMENTlist = []
            for i in range(len(self.MAN_COMMENT)):
                MAN_COMMENTlist.append(builder.CreateString(self.MAN_COMMENT[i]))
            ManeuverStartMAN_COMMENTVector(builder, len(self.MAN_COMMENT))
            for i in reversed(range(len(self.MAN_COMMENT))):
                builder.PrependUOffsetTRelative(MAN_COMMENTlist[i])
            MAN_COMMENT = builder.EndVector()
        ManeuverStart(builder)
        if self.MAN_ID is not None:
            ManeuverAddMAN_ID(builder, MAN_ID)
        if self.MAN_BASIS is not None:
            ManeuverAddMAN_BASIS(builder, MAN_BASIS)
        if self.MAN_DEVICE_ID is not None:
            ManeuverAddMAN_DEVICE_ID(builder, MAN_DEVICE_ID)
        if self.MAN_PREV_ID is not None:
            ManeuverAddMAN_PREV_ID(builder, MAN_PREV_ID)
        if self.MAN_PURPOSE is not None:
            ManeuverAddMAN_PURPOSE(builder, MAN_PURPOSE)
        if self.MAN_REF_FRAME is not None:
            ManeuverAddMAN_REF_FRAME(builder, MAN_REF_FRAME)
        if self.MAN_FRAME_EPOCH is not None:
            ManeuverAddMAN_FRAME_EPOCH(builder, MAN_FRAME_EPOCH)
        if self.MAN_TYPE is not None:
            ManeuverAddMAN_TYPE(builder, MAN_TYPE)
        if self.MAN_EPOCH_START is not None:
            ManeuverAddMAN_EPOCH_START(builder, MAN_EPOCH_START)
        ManeuverAddMAN_DURATION(builder, self.MAN_DURATION)
        if self.MAN_UNITS is not None:
            ManeuverAddMAN_UNITS(builder, MAN_UNITS)
        if self.DATA is not None:
            ManeuverAddDATA(builder, DATA)
        if self.MAN_COMMENT is not None:
            ManeuverAddMAN_COMMENT(builder, MAN_COMMENT)
        maneuver = ManeuverEnd(builder)
        return maneuver
