# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Orbit Parameter Message
class VCM(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = VCM()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsVCM(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    # VCM
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # VCM
    def CCSDS_OMM_VERS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def CREATION_DATE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def ORIGINATOR(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def OBJECT_NAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def OBJECT_ID(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def CENTER_NAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def REF_FRAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def TIME_SYSTEM(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def STATE_VECTOR(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from VCMStateVector import VCMStateVector
            obj = VCMStateVector()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # VCM
    def KEPLERIAN_ELEMENTS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(22))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from keplerianElements import keplerianElements
            obj = keplerianElements()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # VCM
    def EQUINOCTIAL_ELEMENTS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(24))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from equinoctialElements import equinoctialElements
            obj = equinoctialElements()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # VCM
    def GM(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(26))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def ATMOSPHERIC_MODEL_DATA(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(28))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from VCMAtmosphericModelData import VCMAtmosphericModelData
            obj = VCMAtmosphericModelData()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # VCM
    def PROPAGATOR_SETTINGS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(30))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from propagatorConfig import propagatorConfig
            obj = propagatorConfig()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # VCM
    def COVARIANCE_MATRIX(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(32))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from VCMCovarianceMatrixLine import VCMCovarianceMatrixLine
            obj = VCMCovarianceMatrixLine()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # VCM
    def COVARIANCE_MATRIXLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(32))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # VCM
    def COVARIANCE_MATRIXIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(32))
        return o == 0

    # VCM
    def UVW_SIGMAS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(34))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from uvwSigmas import uvwSigmas
            obj = uvwSigmas()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # VCM
    def MASS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(36))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def SOLAR_RAD_AREA(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(38))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def SOLAR_RAD_COEFF(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(40))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def DRAG_AREA(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(42))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def DRAG_COEFF(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(44))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def SRP(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(46))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # VCM
    def CLASSIFICATION_TYPE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(48))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def NORAD_CAT_ID(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(50))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint32Flags, o + self._tab.Pos)
        return 0

    # VCM
    def ELEMENT_SET_NO(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(52))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint32Flags, o + self._tab.Pos)
        return 0

    # VCM
    def REV_AT_EPOCH(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(54))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def BSTAR(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(56))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def MEAN_MOTION_DOT(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(58))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def MEAN_MOTION_DDOT(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(60))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def COV_REFERENCE_FRAME(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(62))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def CX_X(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(64))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def CY_X(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(66))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def CZ_X(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(68))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def CX_DOT_X(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(70))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def USER_DEFINED_BIP_0044_TYPE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(72))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint32Flags, o + self._tab.Pos)
        return 0

    # VCM
    def USER_DEFINED_OBJECT_DESIGNATOR(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(74))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def USER_DEFINED_EARTH_MODEL(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(76))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # VCM
    def USER_DEFINED_EPOCH_TIMESTAMP(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(78))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # VCM
    def USER_DEFINED_MICROSECONDS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(80))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

def VCMStart(builder):
    builder.StartObject(39)

def Start(builder):
    VCMStart(builder)

def VCMAddCCSDS_OMM_VERS(builder, CCSDS_OMM_VERS):
    builder.PrependFloat64Slot(0, CCSDS_OMM_VERS, 0.0)

def AddCCSDS_OMM_VERS(builder, CCSDS_OMM_VERS):
    VCMAddCCSDS_OMM_VERS(builder, CCSDS_OMM_VERS)

def VCMAddCREATION_DATE(builder, CREATION_DATE):
    builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(CREATION_DATE), 0)

def AddCREATION_DATE(builder, CREATION_DATE):
    VCMAddCREATION_DATE(builder, CREATION_DATE)

def VCMAddORIGINATOR(builder, ORIGINATOR):
    builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(ORIGINATOR), 0)

def AddORIGINATOR(builder, ORIGINATOR):
    VCMAddORIGINATOR(builder, ORIGINATOR)

def VCMAddOBJECT_NAME(builder, OBJECT_NAME):
    builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(OBJECT_NAME), 0)

def AddOBJECT_NAME(builder, OBJECT_NAME):
    VCMAddOBJECT_NAME(builder, OBJECT_NAME)

def VCMAddOBJECT_ID(builder, OBJECT_ID):
    builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(OBJECT_ID), 0)

def AddOBJECT_ID(builder, OBJECT_ID):
    VCMAddOBJECT_ID(builder, OBJECT_ID)

def VCMAddCENTER_NAME(builder, CENTER_NAME):
    builder.PrependUOffsetTRelativeSlot(5, flatbuffers.number_types.UOffsetTFlags.py_type(CENTER_NAME), 0)

def AddCENTER_NAME(builder, CENTER_NAME):
    VCMAddCENTER_NAME(builder, CENTER_NAME)

def VCMAddREF_FRAME(builder, REF_FRAME):
    builder.PrependUOffsetTRelativeSlot(6, flatbuffers.number_types.UOffsetTFlags.py_type(REF_FRAME), 0)

def AddREF_FRAME(builder, REF_FRAME):
    VCMAddREF_FRAME(builder, REF_FRAME)

def VCMAddTIME_SYSTEM(builder, TIME_SYSTEM):
    builder.PrependUOffsetTRelativeSlot(7, flatbuffers.number_types.UOffsetTFlags.py_type(TIME_SYSTEM), 0)

def AddTIME_SYSTEM(builder, TIME_SYSTEM):
    VCMAddTIME_SYSTEM(builder, TIME_SYSTEM)

def VCMAddSTATE_VECTOR(builder, STATE_VECTOR):
    builder.PrependUOffsetTRelativeSlot(8, flatbuffers.number_types.UOffsetTFlags.py_type(STATE_VECTOR), 0)

def AddSTATE_VECTOR(builder, STATE_VECTOR):
    VCMAddSTATE_VECTOR(builder, STATE_VECTOR)

def VCMAddKEPLERIAN_ELEMENTS(builder, KEPLERIAN_ELEMENTS):
    builder.PrependUOffsetTRelativeSlot(9, flatbuffers.number_types.UOffsetTFlags.py_type(KEPLERIAN_ELEMENTS), 0)

def AddKEPLERIAN_ELEMENTS(builder, KEPLERIAN_ELEMENTS):
    VCMAddKEPLERIAN_ELEMENTS(builder, KEPLERIAN_ELEMENTS)

def VCMAddEQUINOCTIAL_ELEMENTS(builder, EQUINOCTIAL_ELEMENTS):
    builder.PrependUOffsetTRelativeSlot(10, flatbuffers.number_types.UOffsetTFlags.py_type(EQUINOCTIAL_ELEMENTS), 0)

def AddEQUINOCTIAL_ELEMENTS(builder, EQUINOCTIAL_ELEMENTS):
    VCMAddEQUINOCTIAL_ELEMENTS(builder, EQUINOCTIAL_ELEMENTS)

def VCMAddGM(builder, GM):
    builder.PrependFloat64Slot(11, GM, 0.0)

def AddGM(builder, GM):
    VCMAddGM(builder, GM)

def VCMAddATMOSPHERIC_MODEL_DATA(builder, ATMOSPHERIC_MODEL_DATA):
    builder.PrependUOffsetTRelativeSlot(12, flatbuffers.number_types.UOffsetTFlags.py_type(ATMOSPHERIC_MODEL_DATA), 0)

def AddATMOSPHERIC_MODEL_DATA(builder, ATMOSPHERIC_MODEL_DATA):
    VCMAddATMOSPHERIC_MODEL_DATA(builder, ATMOSPHERIC_MODEL_DATA)

def VCMAddPROPAGATOR_SETTINGS(builder, PROPAGATOR_SETTINGS):
    builder.PrependUOffsetTRelativeSlot(13, flatbuffers.number_types.UOffsetTFlags.py_type(PROPAGATOR_SETTINGS), 0)

def AddPROPAGATOR_SETTINGS(builder, PROPAGATOR_SETTINGS):
    VCMAddPROPAGATOR_SETTINGS(builder, PROPAGATOR_SETTINGS)

def VCMAddCOVARIANCE_MATRIX(builder, COVARIANCE_MATRIX):
    builder.PrependUOffsetTRelativeSlot(14, flatbuffers.number_types.UOffsetTFlags.py_type(COVARIANCE_MATRIX), 0)

def AddCOVARIANCE_MATRIX(builder, COVARIANCE_MATRIX):
    VCMAddCOVARIANCE_MATRIX(builder, COVARIANCE_MATRIX)

def VCMStartCOVARIANCE_MATRIXVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartCOVARIANCE_MATRIXVector(builder, numElems):
    return VCMStartCOVARIANCE_MATRIXVector(builder, numElems)

def VCMAddUVW_SIGMAS(builder, UVW_SIGMAS):
    builder.PrependUOffsetTRelativeSlot(15, flatbuffers.number_types.UOffsetTFlags.py_type(UVW_SIGMAS), 0)

def AddUVW_SIGMAS(builder, UVW_SIGMAS):
    VCMAddUVW_SIGMAS(builder, UVW_SIGMAS)

def VCMAddMASS(builder, MASS):
    builder.PrependFloat64Slot(16, MASS, 0.0)

def AddMASS(builder, MASS):
    VCMAddMASS(builder, MASS)

def VCMAddSOLAR_RAD_AREA(builder, SOLAR_RAD_AREA):
    builder.PrependFloat64Slot(17, SOLAR_RAD_AREA, 0.0)

def AddSOLAR_RAD_AREA(builder, SOLAR_RAD_AREA):
    VCMAddSOLAR_RAD_AREA(builder, SOLAR_RAD_AREA)

def VCMAddSOLAR_RAD_COEFF(builder, SOLAR_RAD_COEFF):
    builder.PrependFloat64Slot(18, SOLAR_RAD_COEFF, 0.0)

def AddSOLAR_RAD_COEFF(builder, SOLAR_RAD_COEFF):
    VCMAddSOLAR_RAD_COEFF(builder, SOLAR_RAD_COEFF)

def VCMAddDRAG_AREA(builder, DRAG_AREA):
    builder.PrependFloat64Slot(19, DRAG_AREA, 0.0)

def AddDRAG_AREA(builder, DRAG_AREA):
    VCMAddDRAG_AREA(builder, DRAG_AREA)

def VCMAddDRAG_COEFF(builder, DRAG_COEFF):
    builder.PrependFloat64Slot(20, DRAG_COEFF, 0.0)

def AddDRAG_COEFF(builder, DRAG_COEFF):
    VCMAddDRAG_COEFF(builder, DRAG_COEFF)

def VCMAddSRP(builder, SRP):
    builder.PrependInt8Slot(21, SRP, 0)

def AddSRP(builder, SRP):
    VCMAddSRP(builder, SRP)

def VCMAddCLASSIFICATION_TYPE(builder, CLASSIFICATION_TYPE):
    builder.PrependUOffsetTRelativeSlot(22, flatbuffers.number_types.UOffsetTFlags.py_type(CLASSIFICATION_TYPE), 0)

def AddCLASSIFICATION_TYPE(builder, CLASSIFICATION_TYPE):
    VCMAddCLASSIFICATION_TYPE(builder, CLASSIFICATION_TYPE)

def VCMAddNORAD_CAT_ID(builder, NORAD_CAT_ID):
    builder.PrependUint32Slot(23, NORAD_CAT_ID, 0)

def AddNORAD_CAT_ID(builder, NORAD_CAT_ID):
    VCMAddNORAD_CAT_ID(builder, NORAD_CAT_ID)

def VCMAddELEMENT_SET_NO(builder, ELEMENT_SET_NO):
    builder.PrependUint32Slot(24, ELEMENT_SET_NO, 0)

def AddELEMENT_SET_NO(builder, ELEMENT_SET_NO):
    VCMAddELEMENT_SET_NO(builder, ELEMENT_SET_NO)

def VCMAddREV_AT_EPOCH(builder, REV_AT_EPOCH):
    builder.PrependFloat64Slot(25, REV_AT_EPOCH, 0.0)

def AddREV_AT_EPOCH(builder, REV_AT_EPOCH):
    VCMAddREV_AT_EPOCH(builder, REV_AT_EPOCH)

def VCMAddBSTAR(builder, BSTAR):
    builder.PrependFloat64Slot(26, BSTAR, 0.0)

def AddBSTAR(builder, BSTAR):
    VCMAddBSTAR(builder, BSTAR)

def VCMAddMEAN_MOTION_DOT(builder, MEAN_MOTION_DOT):
    builder.PrependFloat64Slot(27, MEAN_MOTION_DOT, 0.0)

def AddMEAN_MOTION_DOT(builder, MEAN_MOTION_DOT):
    VCMAddMEAN_MOTION_DOT(builder, MEAN_MOTION_DOT)

def VCMAddMEAN_MOTION_DDOT(builder, MEAN_MOTION_DDOT):
    builder.PrependFloat64Slot(28, MEAN_MOTION_DDOT, 0.0)

def AddMEAN_MOTION_DDOT(builder, MEAN_MOTION_DDOT):
    VCMAddMEAN_MOTION_DDOT(builder, MEAN_MOTION_DDOT)

def VCMAddCOV_REFERENCE_FRAME(builder, COV_REFERENCE_FRAME):
    builder.PrependUOffsetTRelativeSlot(29, flatbuffers.number_types.UOffsetTFlags.py_type(COV_REFERENCE_FRAME), 0)

def AddCOV_REFERENCE_FRAME(builder, COV_REFERENCE_FRAME):
    VCMAddCOV_REFERENCE_FRAME(builder, COV_REFERENCE_FRAME)

def VCMAddCX_X(builder, CX_X):
    builder.PrependFloat64Slot(30, CX_X, 0.0)

def AddCX_X(builder, CX_X):
    VCMAddCX_X(builder, CX_X)

def VCMAddCY_X(builder, CY_X):
    builder.PrependFloat64Slot(31, CY_X, 0.0)

def AddCY_X(builder, CY_X):
    VCMAddCY_X(builder, CY_X)

def VCMAddCZ_X(builder, CZ_X):
    builder.PrependFloat64Slot(32, CZ_X, 0.0)

def AddCZ_X(builder, CZ_X):
    VCMAddCZ_X(builder, CZ_X)

def VCMAddCX_DOT_X(builder, CX_DOT_X):
    builder.PrependFloat64Slot(33, CX_DOT_X, 0.0)

def AddCX_DOT_X(builder, CX_DOT_X):
    VCMAddCX_DOT_X(builder, CX_DOT_X)

def VCMAddUSER_DEFINED_BIP_0044_TYPE(builder, USER_DEFINED_BIP_0044_TYPE):
    builder.PrependUint32Slot(34, USER_DEFINED_BIP_0044_TYPE, 0)

def AddUSER_DEFINED_BIP_0044_TYPE(builder, USER_DEFINED_BIP_0044_TYPE):
    VCMAddUSER_DEFINED_BIP_0044_TYPE(builder, USER_DEFINED_BIP_0044_TYPE)

def VCMAddUSER_DEFINED_OBJECT_DESIGNATOR(builder, USER_DEFINED_OBJECT_DESIGNATOR):
    builder.PrependUOffsetTRelativeSlot(35, flatbuffers.number_types.UOffsetTFlags.py_type(USER_DEFINED_OBJECT_DESIGNATOR), 0)

def AddUSER_DEFINED_OBJECT_DESIGNATOR(builder, USER_DEFINED_OBJECT_DESIGNATOR):
    VCMAddUSER_DEFINED_OBJECT_DESIGNATOR(builder, USER_DEFINED_OBJECT_DESIGNATOR)

def VCMAddUSER_DEFINED_EARTH_MODEL(builder, USER_DEFINED_EARTH_MODEL):
    builder.PrependUOffsetTRelativeSlot(36, flatbuffers.number_types.UOffsetTFlags.py_type(USER_DEFINED_EARTH_MODEL), 0)

def AddUSER_DEFINED_EARTH_MODEL(builder, USER_DEFINED_EARTH_MODEL):
    VCMAddUSER_DEFINED_EARTH_MODEL(builder, USER_DEFINED_EARTH_MODEL)

def VCMAddUSER_DEFINED_EPOCH_TIMESTAMP(builder, USER_DEFINED_EPOCH_TIMESTAMP):
    builder.PrependFloat64Slot(37, USER_DEFINED_EPOCH_TIMESTAMP, 0.0)

def AddUSER_DEFINED_EPOCH_TIMESTAMP(builder, USER_DEFINED_EPOCH_TIMESTAMP):
    VCMAddUSER_DEFINED_EPOCH_TIMESTAMP(builder, USER_DEFINED_EPOCH_TIMESTAMP)

def VCMAddUSER_DEFINED_MICROSECONDS(builder, USER_DEFINED_MICROSECONDS):
    builder.PrependFloat64Slot(38, USER_DEFINED_MICROSECONDS, 0.0)

def AddUSER_DEFINED_MICROSECONDS(builder, USER_DEFINED_MICROSECONDS):
    VCMAddUSER_DEFINED_MICROSECONDS(builder, USER_DEFINED_MICROSECONDS)

def VCMEnd(builder):
    return builder.EndObject()

def End(builder):
    return VCMEnd(builder)

import VCMAtmosphericModelData
import VCMCovarianceMatrixLine
import VCMStateVector
import equinoctialElements
import keplerianElements
import propagatorConfig
import uvwSigmas
try:
    from typing import List, Optional
except:
    pass

class VCMT(object):

    # VCMT
    def __init__(self):
        self.CCSDS_OMM_VERS = 0.0  # type: float
        self.CREATION_DATE = None  # type: str
        self.ORIGINATOR = None  # type: str
        self.OBJECT_NAME = None  # type: str
        self.OBJECT_ID = None  # type: str
        self.CENTER_NAME = None  # type: str
        self.REF_FRAME = None  # type: str
        self.TIME_SYSTEM = None  # type: str
        self.STATE_VECTOR = None  # type: Optional[VCMStateVector.VCMStateVectorT]
        self.KEPLERIAN_ELEMENTS = None  # type: Optional[keplerianElements.keplerianElementsT]
        self.EQUINOCTIAL_ELEMENTS = None  # type: Optional[equinoctialElements.equinoctialElementsT]
        self.GM = 0.0  # type: float
        self.ATMOSPHERIC_MODEL_DATA = None  # type: Optional[VCMAtmosphericModelData.VCMAtmosphericModelDataT]
        self.PROPAGATOR_SETTINGS = None  # type: Optional[propagatorConfig.propagatorConfigT]
        self.COVARIANCE_MATRIX = None  # type: List[VCMCovarianceMatrixLine.VCMCovarianceMatrixLineT]
        self.UVW_SIGMAS = None  # type: Optional[uvwSigmas.uvwSigmasT]
        self.MASS = 0.0  # type: float
        self.SOLAR_RAD_AREA = 0.0  # type: float
        self.SOLAR_RAD_COEFF = 0.0  # type: float
        self.DRAG_AREA = 0.0  # type: float
        self.DRAG_COEFF = 0.0  # type: float
        self.SRP = 0  # type: int
        self.CLASSIFICATION_TYPE = None  # type: str
        self.NORAD_CAT_ID = 0  # type: int
        self.ELEMENT_SET_NO = 0  # type: int
        self.REV_AT_EPOCH = 0.0  # type: float
        self.BSTAR = 0.0  # type: float
        self.MEAN_MOTION_DOT = 0.0  # type: float
        self.MEAN_MOTION_DDOT = 0.0  # type: float
        self.COV_REFERENCE_FRAME = None  # type: str
        self.CX_X = 0.0  # type: float
        self.CY_X = 0.0  # type: float
        self.CZ_X = 0.0  # type: float
        self.CX_DOT_X = 0.0  # type: float
        self.USER_DEFINED_BIP_0044_TYPE = 0  # type: int
        self.USER_DEFINED_OBJECT_DESIGNATOR = None  # type: str
        self.USER_DEFINED_EARTH_MODEL = None  # type: str
        self.USER_DEFINED_EPOCH_TIMESTAMP = 0.0  # type: float
        self.USER_DEFINED_MICROSECONDS = 0.0  # type: float

    @classmethod
    def InitFromBuf(cls, buf, pos):
        VCM = VCM()
        VCM.Init(buf, pos)
        return cls.InitFromObj(VCM)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, VCM):
        x = VCMT()
        x._UnPack(VCM)
        return x

    # VCMT
    def _UnPack(self, VCM):
        if VCM is None:
            return
        self.CCSDS_OMM_VERS = VCM.CCSDS_OMM_VERS()
        self.CREATION_DATE = VCM.CREATION_DATE()
        self.ORIGINATOR = VCM.ORIGINATOR()
        self.OBJECT_NAME = VCM.OBJECT_NAME()
        self.OBJECT_ID = VCM.OBJECT_ID()
        self.CENTER_NAME = VCM.CENTER_NAME()
        self.REF_FRAME = VCM.REF_FRAME()
        self.TIME_SYSTEM = VCM.TIME_SYSTEM()
        if VCM.STATE_VECTOR() is not None:
            self.STATE_VECTOR = VCMStateVector.VCMStateVectorT.InitFromObj(VCM.STATE_VECTOR())
        if VCM.KEPLERIAN_ELEMENTS() is not None:
            self.KEPLERIAN_ELEMENTS = keplerianElements.keplerianElementsT.InitFromObj(VCM.KEPLERIAN_ELEMENTS())
        if VCM.EQUINOCTIAL_ELEMENTS() is not None:
            self.EQUINOCTIAL_ELEMENTS = equinoctialElements.equinoctialElementsT.InitFromObj(VCM.EQUINOCTIAL_ELEMENTS())
        self.GM = VCM.GM()
        if VCM.ATMOSPHERIC_MODEL_DATA() is not None:
            self.ATMOSPHERIC_MODEL_DATA = VCMAtmosphericModelData.VCMAtmosphericModelDataT.InitFromObj(VCM.ATMOSPHERIC_MODEL_DATA())
        if VCM.PROPAGATOR_SETTINGS() is not None:
            self.PROPAGATOR_SETTINGS = propagatorConfig.propagatorConfigT.InitFromObj(VCM.PROPAGATOR_SETTINGS())
        if not VCM.COVARIANCE_MATRIXIsNone():
            self.COVARIANCE_MATRIX = []
            for i in range(VCM.COVARIANCE_MATRIXLength()):
                if VCM.COVARIANCE_MATRIX(i) is None:
                    self.COVARIANCE_MATRIX.append(None)
                else:
                    vCMCovarianceMatrixLine_ = VCMCovarianceMatrixLine.VCMCovarianceMatrixLineT.InitFromObj(VCM.COVARIANCE_MATRIX(i))
                    self.COVARIANCE_MATRIX.append(vCMCovarianceMatrixLine_)
        if VCM.UVW_SIGMAS() is not None:
            self.UVW_SIGMAS = uvwSigmas.uvwSigmasT.InitFromObj(VCM.UVW_SIGMAS())
        self.MASS = VCM.MASS()
        self.SOLAR_RAD_AREA = VCM.SOLAR_RAD_AREA()
        self.SOLAR_RAD_COEFF = VCM.SOLAR_RAD_COEFF()
        self.DRAG_AREA = VCM.DRAG_AREA()
        self.DRAG_COEFF = VCM.DRAG_COEFF()
        self.SRP = VCM.SRP()
        self.CLASSIFICATION_TYPE = VCM.CLASSIFICATION_TYPE()
        self.NORAD_CAT_ID = VCM.NORAD_CAT_ID()
        self.ELEMENT_SET_NO = VCM.ELEMENT_SET_NO()
        self.REV_AT_EPOCH = VCM.REV_AT_EPOCH()
        self.BSTAR = VCM.BSTAR()
        self.MEAN_MOTION_DOT = VCM.MEAN_MOTION_DOT()
        self.MEAN_MOTION_DDOT = VCM.MEAN_MOTION_DDOT()
        self.COV_REFERENCE_FRAME = VCM.COV_REFERENCE_FRAME()
        self.CX_X = VCM.CX_X()
        self.CY_X = VCM.CY_X()
        self.CZ_X = VCM.CZ_X()
        self.CX_DOT_X = VCM.CX_DOT_X()
        self.USER_DEFINED_BIP_0044_TYPE = VCM.USER_DEFINED_BIP_0044_TYPE()
        self.USER_DEFINED_OBJECT_DESIGNATOR = VCM.USER_DEFINED_OBJECT_DESIGNATOR()
        self.USER_DEFINED_EARTH_MODEL = VCM.USER_DEFINED_EARTH_MODEL()
        self.USER_DEFINED_EPOCH_TIMESTAMP = VCM.USER_DEFINED_EPOCH_TIMESTAMP()
        self.USER_DEFINED_MICROSECONDS = VCM.USER_DEFINED_MICROSECONDS()

    # VCMT
    def Pack(self, builder):
        if self.CREATION_DATE is not None:
            CREATION_DATE = builder.CreateString(self.CREATION_DATE)
        if self.ORIGINATOR is not None:
            ORIGINATOR = builder.CreateString(self.ORIGINATOR)
        if self.OBJECT_NAME is not None:
            OBJECT_NAME = builder.CreateString(self.OBJECT_NAME)
        if self.OBJECT_ID is not None:
            OBJECT_ID = builder.CreateString(self.OBJECT_ID)
        if self.CENTER_NAME is not None:
            CENTER_NAME = builder.CreateString(self.CENTER_NAME)
        if self.REF_FRAME is not None:
            REF_FRAME = builder.CreateString(self.REF_FRAME)
        if self.TIME_SYSTEM is not None:
            TIME_SYSTEM = builder.CreateString(self.TIME_SYSTEM)
        if self.STATE_VECTOR is not None:
            STATE_VECTOR = self.STATE_VECTOR.Pack(builder)
        if self.KEPLERIAN_ELEMENTS is not None:
            KEPLERIAN_ELEMENTS = self.KEPLERIAN_ELEMENTS.Pack(builder)
        if self.EQUINOCTIAL_ELEMENTS is not None:
            EQUINOCTIAL_ELEMENTS = self.EQUINOCTIAL_ELEMENTS.Pack(builder)
        if self.ATMOSPHERIC_MODEL_DATA is not None:
            ATMOSPHERIC_MODEL_DATA = self.ATMOSPHERIC_MODEL_DATA.Pack(builder)
        if self.PROPAGATOR_SETTINGS is not None:
            PROPAGATOR_SETTINGS = self.PROPAGATOR_SETTINGS.Pack(builder)
        if self.COVARIANCE_MATRIX is not None:
            COVARIANCE_MATRIXlist = []
            for i in range(len(self.COVARIANCE_MATRIX)):
                COVARIANCE_MATRIXlist.append(self.COVARIANCE_MATRIX[i].Pack(builder))
            VCMStartCOVARIANCE_MATRIXVector(builder, len(self.COVARIANCE_MATRIX))
            for i in reversed(range(len(self.COVARIANCE_MATRIX))):
                builder.PrependUOffsetTRelative(COVARIANCE_MATRIXlist[i])
            COVARIANCE_MATRIX = builder.EndVector()
        if self.UVW_SIGMAS is not None:
            UVW_SIGMAS = self.UVW_SIGMAS.Pack(builder)
        if self.CLASSIFICATION_TYPE is not None:
            CLASSIFICATION_TYPE = builder.CreateString(self.CLASSIFICATION_TYPE)
        if self.COV_REFERENCE_FRAME is not None:
            COV_REFERENCE_FRAME = builder.CreateString(self.COV_REFERENCE_FRAME)
        if self.USER_DEFINED_OBJECT_DESIGNATOR is not None:
            USER_DEFINED_OBJECT_DESIGNATOR = builder.CreateString(self.USER_DEFINED_OBJECT_DESIGNATOR)
        if self.USER_DEFINED_EARTH_MODEL is not None:
            USER_DEFINED_EARTH_MODEL = builder.CreateString(self.USER_DEFINED_EARTH_MODEL)
        VCMStart(builder)
        VCMAddCCSDS_OMM_VERS(builder, self.CCSDS_OMM_VERS)
        if self.CREATION_DATE is not None:
            VCMAddCREATION_DATE(builder, CREATION_DATE)
        if self.ORIGINATOR is not None:
            VCMAddORIGINATOR(builder, ORIGINATOR)
        if self.OBJECT_NAME is not None:
            VCMAddOBJECT_NAME(builder, OBJECT_NAME)
        if self.OBJECT_ID is not None:
            VCMAddOBJECT_ID(builder, OBJECT_ID)
        if self.CENTER_NAME is not None:
            VCMAddCENTER_NAME(builder, CENTER_NAME)
        if self.REF_FRAME is not None:
            VCMAddREF_FRAME(builder, REF_FRAME)
        if self.TIME_SYSTEM is not None:
            VCMAddTIME_SYSTEM(builder, TIME_SYSTEM)
        if self.STATE_VECTOR is not None:
            VCMAddSTATE_VECTOR(builder, STATE_VECTOR)
        if self.KEPLERIAN_ELEMENTS is not None:
            VCMAddKEPLERIAN_ELEMENTS(builder, KEPLERIAN_ELEMENTS)
        if self.EQUINOCTIAL_ELEMENTS is not None:
            VCMAddEQUINOCTIAL_ELEMENTS(builder, EQUINOCTIAL_ELEMENTS)
        VCMAddGM(builder, self.GM)
        if self.ATMOSPHERIC_MODEL_DATA is not None:
            VCMAddATMOSPHERIC_MODEL_DATA(builder, ATMOSPHERIC_MODEL_DATA)
        if self.PROPAGATOR_SETTINGS is not None:
            VCMAddPROPAGATOR_SETTINGS(builder, PROPAGATOR_SETTINGS)
        if self.COVARIANCE_MATRIX is not None:
            VCMAddCOVARIANCE_MATRIX(builder, COVARIANCE_MATRIX)
        if self.UVW_SIGMAS is not None:
            VCMAddUVW_SIGMAS(builder, UVW_SIGMAS)
        VCMAddMASS(builder, self.MASS)
        VCMAddSOLAR_RAD_AREA(builder, self.SOLAR_RAD_AREA)
        VCMAddSOLAR_RAD_COEFF(builder, self.SOLAR_RAD_COEFF)
        VCMAddDRAG_AREA(builder, self.DRAG_AREA)
        VCMAddDRAG_COEFF(builder, self.DRAG_COEFF)
        VCMAddSRP(builder, self.SRP)
        if self.CLASSIFICATION_TYPE is not None:
            VCMAddCLASSIFICATION_TYPE(builder, CLASSIFICATION_TYPE)
        VCMAddNORAD_CAT_ID(builder, self.NORAD_CAT_ID)
        VCMAddELEMENT_SET_NO(builder, self.ELEMENT_SET_NO)
        VCMAddREV_AT_EPOCH(builder, self.REV_AT_EPOCH)
        VCMAddBSTAR(builder, self.BSTAR)
        VCMAddMEAN_MOTION_DOT(builder, self.MEAN_MOTION_DOT)
        VCMAddMEAN_MOTION_DDOT(builder, self.MEAN_MOTION_DDOT)
        if self.COV_REFERENCE_FRAME is not None:
            VCMAddCOV_REFERENCE_FRAME(builder, COV_REFERENCE_FRAME)
        VCMAddCX_X(builder, self.CX_X)
        VCMAddCY_X(builder, self.CY_X)
        VCMAddCZ_X(builder, self.CZ_X)
        VCMAddCX_DOT_X(builder, self.CX_DOT_X)
        VCMAddUSER_DEFINED_BIP_0044_TYPE(builder, self.USER_DEFINED_BIP_0044_TYPE)
        if self.USER_DEFINED_OBJECT_DESIGNATOR is not None:
            VCMAddUSER_DEFINED_OBJECT_DESIGNATOR(builder, USER_DEFINED_OBJECT_DESIGNATOR)
        if self.USER_DEFINED_EARTH_MODEL is not None:
            VCMAddUSER_DEFINED_EARTH_MODEL(builder, USER_DEFINED_EARTH_MODEL)
        VCMAddUSER_DEFINED_EPOCH_TIMESTAMP(builder, self.USER_DEFINED_EPOCH_TIMESTAMP)
        VCMAddUSER_DEFINED_MICROSECONDS(builder, self.USER_DEFINED_MICROSECONDS)
        VCM = VCMEnd(builder)
        return VCM