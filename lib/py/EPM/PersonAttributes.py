# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Specific attributes for a Person
class PersonAttributes(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = PersonAttributes()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsPersonAttributes(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def PersonAttributesBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x45\x50\x4D", size_prefixed=size_prefixed)

    # PersonAttributes
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Family name or surname of the person
    # PersonAttributes
    def FAMILY_NAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Given name or first name of the person
    # PersonAttributes
    def GIVEN_NAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Additional name or middle name of the person
    # PersonAttributes
    def ADDITIONAL_NAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Honorific prefix preceding the person's name (e.g., Mr., Dr.)
    # PersonAttributes
    def HONORIFIC_PREFIX(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Honorific suffix following the person's name (e.g., Jr., Sr.)
    # PersonAttributes
    def HONORIFIC_SUFFIX(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Job title of the person
    # PersonAttributes
    def JOB_TITLE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Occupation of the person
    # PersonAttributes
    def OCCUPATION(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

def PersonAttributesStart(builder): builder.StartObject(7)
def Start(builder):
    return PersonAttributesStart(builder)
def PersonAttributesAddFAMILY_NAME(builder, FAMILY_NAME): builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(FAMILY_NAME), 0)
def AddFAMILY_NAME(builder, FAMILY_NAME):
    return PersonAttributesAddFAMILY_NAME(builder, FAMILY_NAME)
def PersonAttributesAddGIVEN_NAME(builder, GIVEN_NAME): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(GIVEN_NAME), 0)
def AddGIVEN_NAME(builder, GIVEN_NAME):
    return PersonAttributesAddGIVEN_NAME(builder, GIVEN_NAME)
def PersonAttributesAddADDITIONAL_NAME(builder, ADDITIONAL_NAME): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(ADDITIONAL_NAME), 0)
def AddADDITIONAL_NAME(builder, ADDITIONAL_NAME):
    return PersonAttributesAddADDITIONAL_NAME(builder, ADDITIONAL_NAME)
def PersonAttributesAddHONORIFIC_PREFIX(builder, HONORIFIC_PREFIX): builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(HONORIFIC_PREFIX), 0)
def AddHONORIFIC_PREFIX(builder, HONORIFIC_PREFIX):
    return PersonAttributesAddHONORIFIC_PREFIX(builder, HONORIFIC_PREFIX)
def PersonAttributesAddHONORIFIC_SUFFIX(builder, HONORIFIC_SUFFIX): builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(HONORIFIC_SUFFIX), 0)
def AddHONORIFIC_SUFFIX(builder, HONORIFIC_SUFFIX):
    return PersonAttributesAddHONORIFIC_SUFFIX(builder, HONORIFIC_SUFFIX)
def PersonAttributesAddJOB_TITLE(builder, JOB_TITLE): builder.PrependUOffsetTRelativeSlot(5, flatbuffers.number_types.UOffsetTFlags.py_type(JOB_TITLE), 0)
def AddJOB_TITLE(builder, JOB_TITLE):
    return PersonAttributesAddJOB_TITLE(builder, JOB_TITLE)
def PersonAttributesAddOCCUPATION(builder, OCCUPATION): builder.PrependUOffsetTRelativeSlot(6, flatbuffers.number_types.UOffsetTFlags.py_type(OCCUPATION), 0)
def AddOCCUPATION(builder, OCCUPATION):
    return PersonAttributesAddOCCUPATION(builder, OCCUPATION)
def PersonAttributesEnd(builder): return builder.EndObject()
def End(builder):
    return PersonAttributesEnd(builder)

class PersonAttributesT(object):

    # PersonAttributesT
    def __init__(self):
        self.FAMILY_NAME = None  # type: str
        self.GIVEN_NAME = None  # type: str
        self.ADDITIONAL_NAME = None  # type: str
        self.HONORIFIC_PREFIX = None  # type: str
        self.HONORIFIC_SUFFIX = None  # type: str
        self.JOB_TITLE = None  # type: str
        self.OCCUPATION = None  # type: str

    @classmethod
    def InitFromBuf(cls, buf, pos):
        personAttributes = PersonAttributes()
        personAttributes.Init(buf, pos)
        return cls.InitFromObj(personAttributes)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, personAttributes):
        x = PersonAttributesT()
        x._UnPack(personAttributes)
        return x

    # PersonAttributesT
    def _UnPack(self, personAttributes):
        if personAttributes is None:
            return
        self.FAMILY_NAME = personAttributes.FAMILY_NAME()
        self.GIVEN_NAME = personAttributes.GIVEN_NAME()
        self.ADDITIONAL_NAME = personAttributes.ADDITIONAL_NAME()
        self.HONORIFIC_PREFIX = personAttributes.HONORIFIC_PREFIX()
        self.HONORIFIC_SUFFIX = personAttributes.HONORIFIC_SUFFIX()
        self.JOB_TITLE = personAttributes.JOB_TITLE()
        self.OCCUPATION = personAttributes.OCCUPATION()

    # PersonAttributesT
    def Pack(self, builder):
        if self.FAMILY_NAME is not None:
            FAMILY_NAME = builder.CreateString(self.FAMILY_NAME)
        if self.GIVEN_NAME is not None:
            GIVEN_NAME = builder.CreateString(self.GIVEN_NAME)
        if self.ADDITIONAL_NAME is not None:
            ADDITIONAL_NAME = builder.CreateString(self.ADDITIONAL_NAME)
        if self.HONORIFIC_PREFIX is not None:
            HONORIFIC_PREFIX = builder.CreateString(self.HONORIFIC_PREFIX)
        if self.HONORIFIC_SUFFIX is not None:
            HONORIFIC_SUFFIX = builder.CreateString(self.HONORIFIC_SUFFIX)
        if self.JOB_TITLE is not None:
            JOB_TITLE = builder.CreateString(self.JOB_TITLE)
        if self.OCCUPATION is not None:
            OCCUPATION = builder.CreateString(self.OCCUPATION)
        PersonAttributesStart(builder)
        if self.FAMILY_NAME is not None:
            PersonAttributesAddFAMILY_NAME(builder, FAMILY_NAME)
        if self.GIVEN_NAME is not None:
            PersonAttributesAddGIVEN_NAME(builder, GIVEN_NAME)
        if self.ADDITIONAL_NAME is not None:
            PersonAttributesAddADDITIONAL_NAME(builder, ADDITIONAL_NAME)
        if self.HONORIFIC_PREFIX is not None:
            PersonAttributesAddHONORIFIC_PREFIX(builder, HONORIFIC_PREFIX)
        if self.HONORIFIC_SUFFIX is not None:
            PersonAttributesAddHONORIFIC_SUFFIX(builder, HONORIFIC_SUFFIX)
        if self.JOB_TITLE is not None:
            PersonAttributesAddJOB_TITLE(builder, JOB_TITLE)
        if self.OCCUPATION is not None:
            PersonAttributesAddOCCUPATION(builder, OCCUPATION)
        personAttributes = PersonAttributesEnd(builder)
        return personAttributes