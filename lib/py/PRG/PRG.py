# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Program Description Message
class PRG(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = PRG()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsPRG(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def PRGBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x50\x52\x47", size_prefixed=size_prefixed)

    # PRG
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # The name of the program
    # PRG
    def NAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Hierarchical Deterministic (HD) derivation path for the program's key, used in cryptocurrency wallets
    # PRG
    def HD_KEY_PATH(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Vector of standard message types used by the program
    # PRG
    def MESSAGE_TYPES(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.String(a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4))
        return ""

    # PRG
    def MESSAGE_TYPESLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # PRG
    def MESSAGE_TYPESIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        return o == 0

    # Vector of users associated with the program, each user can have assigned message types
    # PRG
    def USERS(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from USR import USR
            obj = USR()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # PRG
    def USERSLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # PRG
    def USERSIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        return o == 0

def PRGStart(builder):
    builder.StartObject(4)

def Start(builder):
    PRGStart(builder)

def PRGAddNAME(builder, NAME):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(NAME), 0)

def AddNAME(builder, NAME):
    PRGAddNAME(builder, NAME)

def PRGAddHD_KEY_PATH(builder, HD_KEY_PATH):
    builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(HD_KEY_PATH), 0)

def AddHD_KEY_PATH(builder, HD_KEY_PATH):
    PRGAddHD_KEY_PATH(builder, HD_KEY_PATH)

def PRGAddMESSAGE_TYPES(builder, MESSAGE_TYPES):
    builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(MESSAGE_TYPES), 0)

def AddMESSAGE_TYPES(builder, MESSAGE_TYPES):
    PRGAddMESSAGE_TYPES(builder, MESSAGE_TYPES)

def PRGStartMESSAGE_TYPESVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartMESSAGE_TYPESVector(builder, numElems):
    return PRGStartMESSAGE_TYPESVector(builder, numElems)

def PRGAddUSERS(builder, USERS):
    builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(USERS), 0)

def AddUSERS(builder, USERS):
    PRGAddUSERS(builder, USERS)

def PRGStartUSERSVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartUSERSVector(builder, numElems):
    return PRGStartUSERSVector(builder, numElems)

def PRGEnd(builder):
    return builder.EndObject()

def End(builder):
    return PRGEnd(builder)

import USR
try:
    from typing import List
except:
    pass

class PRGT(object):

    # PRGT
    def __init__(self):
        self.NAME = None  # type: str
        self.HD_KEY_PATH = None  # type: str
        self.MESSAGE_TYPES = None  # type: List[str]
        self.USERS = None  # type: List[USR.USRT]

    @classmethod
    def InitFromBuf(cls, buf, pos):
        PRG = PRG()
        PRG.Init(buf, pos)
        return cls.InitFromObj(PRG)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, PRG):
        x = PRGT()
        x._UnPack(PRG)
        return x

    # PRGT
    def _UnPack(self, PRG):
        if PRG is None:
            return
        self.NAME = PRG.NAME()
        self.HD_KEY_PATH = PRG.HD_KEY_PATH()
        if not PRG.MESSAGE_TYPESIsNone():
            self.MESSAGE_TYPES = []
            for i in range(PRG.MESSAGE_TYPESLength()):
                self.MESSAGE_TYPES.append(PRG.MESSAGE_TYPES(i))
        if not PRG.USERSIsNone():
            self.USERS = []
            for i in range(PRG.USERSLength()):
                if PRG.USERS(i) is None:
                    self.USERS.append(None)
                else:
                    uSR_ = USR.USRT.InitFromObj(PRG.USERS(i))
                    self.USERS.append(uSR_)

    # PRGT
    def Pack(self, builder):
        if self.NAME is not None:
            NAME = builder.CreateString(self.NAME)
        if self.HD_KEY_PATH is not None:
            HD_KEY_PATH = builder.CreateString(self.HD_KEY_PATH)
        if self.MESSAGE_TYPES is not None:
            MESSAGE_TYPESlist = []
            for i in range(len(self.MESSAGE_TYPES)):
                MESSAGE_TYPESlist.append(builder.CreateString(self.MESSAGE_TYPES[i]))
            PRGStartMESSAGE_TYPESVector(builder, len(self.MESSAGE_TYPES))
            for i in reversed(range(len(self.MESSAGE_TYPES))):
                builder.PrependUOffsetTRelative(MESSAGE_TYPESlist[i])
            MESSAGE_TYPES = builder.EndVector()
        if self.USERS is not None:
            USERSlist = []
            for i in range(len(self.USERS)):
                USERSlist.append(self.USERS[i].Pack(builder))
            PRGStartUSERSVector(builder, len(self.USERS))
            for i in reversed(range(len(self.USERS))):
                builder.PrependUOffsetTRelative(USERSlist[i])
            USERS = builder.EndVector()
        PRGStart(builder)
        if self.NAME is not None:
            PRGAddNAME(builder, NAME)
        if self.HD_KEY_PATH is not None:
            PRGAddHD_KEY_PATH(builder, HD_KEY_PATH)
        if self.MESSAGE_TYPES is not None:
            PRGAddMESSAGE_TYPES(builder, MESSAGE_TYPES)
        if self.USERS is not None:
            PRGAddUSERS(builder, USERS)
        PRG = PRGEnd(builder)
        return PRG
