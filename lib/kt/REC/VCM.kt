// automatically generated by the FlatBuffers compiler, do not modify

import com.google.flatbuffers.BaseVector
import com.google.flatbuffers.BooleanVector
import com.google.flatbuffers.ByteVector
import com.google.flatbuffers.Constants
import com.google.flatbuffers.DoubleVector
import com.google.flatbuffers.FlatBufferBuilder
import com.google.flatbuffers.FloatVector
import com.google.flatbuffers.LongVector
import com.google.flatbuffers.StringVector
import com.google.flatbuffers.Struct
import com.google.flatbuffers.Table
import com.google.flatbuffers.UnionVector
import java.nio.ByteBuffer
import java.nio.ByteOrder
import kotlin.math.sign

/**
 * Orbit Parameter Message
 */
@Suppress("unused")
class VCM : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : VCM {
        __init(_i, _bb)
        return this
    }
    val CCSDS_OMM_VERS : Double
        get() {
            val o = __offset(4)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val CREATION_DATE : String?
        get() {
            val o = __offset(6)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CREATION_DATEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(6, 1)
    fun CREATION_DATEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 6, 1)
    val ORIGINATOR : String?
        get() {
            val o = __offset(8)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val ORIGINATORAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(8, 1)
    fun ORIGINATORInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 8, 1)
    val OBJECT_NAME : String?
        get() {
            val o = __offset(10)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val OBJECT_NAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(10, 1)
    fun OBJECT_NAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 10, 1)
    val OBJECT_ID : String?
        get() {
            val o = __offset(12)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val OBJECT_IDAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(12, 1)
    fun OBJECT_IDInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 12, 1)
    val CENTER_NAME : String?
        get() {
            val o = __offset(14)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CENTER_NAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(14, 1)
    fun CENTER_NAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 14, 1)
    val REF_FRAME : String?
        get() {
            val o = __offset(16)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val REF_FRAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(16, 1)
    fun REF_FRAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 16, 1)
    val TIME_SYSTEM : String?
        get() {
            val o = __offset(18)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val TIME_SYSTEMAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(18, 1)
    fun TIME_SYSTEMInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 18, 1)
    val STATE_VECTOR : VCMStateVector? get() = STATE_VECTOR(VCMStateVector())
    fun STATE_VECTOR(obj: VCMStateVector) : VCMStateVector? {
        val o = __offset(20)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    val KEPLERIAN_ELEMENTS : keplerianElements? get() = KEPLERIAN_ELEMENTS(keplerianElements())
    fun KEPLERIAN_ELEMENTS(obj: keplerianElements) : keplerianElements? {
        val o = __offset(22)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    val EQUINOCTIAL_ELEMENTS : equinoctialElements? get() = EQUINOCTIAL_ELEMENTS(equinoctialElements())
    fun EQUINOCTIAL_ELEMENTS(obj: equinoctialElements) : equinoctialElements? {
        val o = __offset(24)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    val GM : Double
        get() {
            val o = __offset(26)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val ATMOSPHERIC_MODEL_DATA : VCMAtmosphericModelData? get() = ATMOSPHERIC_MODEL_DATA(VCMAtmosphericModelData())
    fun ATMOSPHERIC_MODEL_DATA(obj: VCMAtmosphericModelData) : VCMAtmosphericModelData? {
        val o = __offset(28)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    val PROPAGATOR_SETTINGS : propagatorConfig? get() = PROPAGATOR_SETTINGS(propagatorConfig())
    fun PROPAGATOR_SETTINGS(obj: propagatorConfig) : propagatorConfig? {
        val o = __offset(30)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    fun COVARIANCE_MATRIX(j: Int) : VCMCovarianceMatrixLine? = COVARIANCE_MATRIX(VCMCovarianceMatrixLine(), j)
    fun COVARIANCE_MATRIX(obj: VCMCovarianceMatrixLine, j: Int) : VCMCovarianceMatrixLine? {
        val o = __offset(32)
        return if (o != 0) {
            obj.__assign(__indirect(__vector(o) + j * 4), bb)
        } else {
            null
        }
    }
    val COVARIANCE_MATRIXLength : Int
        get() {
            val o = __offset(32); return if (o != 0) __vector_len(o) else 0
        }
    val UVW_SIGMAS : uvwSigmas? get() = UVW_SIGMAS(uvwSigmas())
    fun UVW_SIGMAS(obj: uvwSigmas) : uvwSigmas? {
        val o = __offset(34)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    val MASS : Double
        get() {
            val o = __offset(36)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val SOLAR_RAD_AREA : Double
        get() {
            val o = __offset(38)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val SOLAR_RAD_COEFF : Double
        get() {
            val o = __offset(40)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val DRAG_AREA : Double
        get() {
            val o = __offset(42)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val DRAG_COEFF : Double
        get() {
            val o = __offset(44)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val SRP : Byte
        get() {
            val o = __offset(46)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    val CLASSIFICATION_TYPE : String?
        get() {
            val o = __offset(48)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CLASSIFICATION_TYPEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(48, 1)
    fun CLASSIFICATION_TYPEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 48, 1)
    val NORAD_CAT_ID : UInt
        get() {
            val o = __offset(50)
            return if(o != 0) bb.getInt(o + bb_pos).toUInt() else 0u
        }
    val ELEMENT_SET_NO : UInt
        get() {
            val o = __offset(52)
            return if(o != 0) bb.getInt(o + bb_pos).toUInt() else 0u
        }
    val REV_AT_EPOCH : Double
        get() {
            val o = __offset(54)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val BSTAR : Double
        get() {
            val o = __offset(56)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val MEAN_MOTION_DOT : Double
        get() {
            val o = __offset(58)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val MEAN_MOTION_DDOT : Double
        get() {
            val o = __offset(60)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val COV_REFERENCE_FRAME : String?
        get() {
            val o = __offset(62)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val COV_REFERENCE_FRAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(62, 1)
    fun COV_REFERENCE_FRAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 62, 1)
    val CX_X : Double
        get() {
            val o = __offset(64)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val CY_X : Double
        get() {
            val o = __offset(66)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val CZ_X : Double
        get() {
            val o = __offset(68)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val CX_DOT_X : Double
        get() {
            val o = __offset(70)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val USER_DEFINED_BIP_0044_TYPE : UInt
        get() {
            val o = __offset(72)
            return if(o != 0) bb.getInt(o + bb_pos).toUInt() else 0u
        }
    val USER_DEFINED_OBJECT_DESIGNATOR : String?
        get() {
            val o = __offset(74)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val USER_DEFINED_OBJECT_DESIGNATORAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(74, 1)
    fun USER_DEFINED_OBJECT_DESIGNATORInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 74, 1)
    val USER_DEFINED_EARTH_MODEL : String?
        get() {
            val o = __offset(76)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val USER_DEFINED_EARTH_MODELAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(76, 1)
    fun USER_DEFINED_EARTH_MODELInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 76, 1)
    val USER_DEFINED_EPOCH_TIMESTAMP : Double
        get() {
            val o = __offset(78)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val USER_DEFINED_MICROSECONDS : Double
        get() {
            val o = __offset(80)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_24_3_25()
        fun getRootAsVCM(_bb: ByteBuffer): VCM = getRootAsVCM(_bb, VCM())
        fun getRootAsVCM(_bb: ByteBuffer, obj: VCM): VCM {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createVCM(builder: FlatBufferBuilder, CCSDS_OMM_VERS: Double, CREATION_DATEOffset: Int, ORIGINATOROffset: Int, OBJECT_NAMEOffset: Int, OBJECT_IDOffset: Int, CENTER_NAMEOffset: Int, REF_FRAMEOffset: Int, TIME_SYSTEMOffset: Int, STATE_VECTOROffset: Int, KEPLERIAN_ELEMENTSOffset: Int, EQUINOCTIAL_ELEMENTSOffset: Int, GM: Double, ATMOSPHERIC_MODEL_DATAOffset: Int, PROPAGATOR_SETTINGSOffset: Int, COVARIANCE_MATRIXOffset: Int, UVW_SIGMASOffset: Int, MASS: Double, SOLAR_RAD_AREA: Double, SOLAR_RAD_COEFF: Double, DRAG_AREA: Double, DRAG_COEFF: Double, SRP: Byte, CLASSIFICATION_TYPEOffset: Int, NORAD_CAT_ID: UInt, ELEMENT_SET_NO: UInt, REV_AT_EPOCH: Double, BSTAR: Double, MEAN_MOTION_DOT: Double, MEAN_MOTION_DDOT: Double, COV_REFERENCE_FRAMEOffset: Int, CX_X: Double, CY_X: Double, CZ_X: Double, CX_DOT_X: Double, USER_DEFINED_BIP_0044_TYPE: UInt, USER_DEFINED_OBJECT_DESIGNATOROffset: Int, USER_DEFINED_EARTH_MODELOffset: Int, USER_DEFINED_EPOCH_TIMESTAMP: Double, USER_DEFINED_MICROSECONDS: Double) : Int {
            builder.startTable(39)
            addUSER_DEFINED_MICROSECONDS(builder, USER_DEFINED_MICROSECONDS)
            addUSER_DEFINED_EPOCH_TIMESTAMP(builder, USER_DEFINED_EPOCH_TIMESTAMP)
            addCX_DOT_X(builder, CX_DOT_X)
            addCZ_X(builder, CZ_X)
            addCY_X(builder, CY_X)
            addCX_X(builder, CX_X)
            addMEAN_MOTION_DDOT(builder, MEAN_MOTION_DDOT)
            addMEAN_MOTION_DOT(builder, MEAN_MOTION_DOT)
            addBSTAR(builder, BSTAR)
            addREV_AT_EPOCH(builder, REV_AT_EPOCH)
            addDRAG_COEFF(builder, DRAG_COEFF)
            addDRAG_AREA(builder, DRAG_AREA)
            addSOLAR_RAD_COEFF(builder, SOLAR_RAD_COEFF)
            addSOLAR_RAD_AREA(builder, SOLAR_RAD_AREA)
            addMASS(builder, MASS)
            addGM(builder, GM)
            addCCSDS_OMM_VERS(builder, CCSDS_OMM_VERS)
            addUSER_DEFINED_EARTH_MODEL(builder, USER_DEFINED_EARTH_MODELOffset)
            addUSER_DEFINED_OBJECT_DESIGNATOR(builder, USER_DEFINED_OBJECT_DESIGNATOROffset)
            addUSER_DEFINED_BIP_0044_TYPE(builder, USER_DEFINED_BIP_0044_TYPE)
            addCOV_REFERENCE_FRAME(builder, COV_REFERENCE_FRAMEOffset)
            addELEMENT_SET_NO(builder, ELEMENT_SET_NO)
            addNORAD_CAT_ID(builder, NORAD_CAT_ID)
            addCLASSIFICATION_TYPE(builder, CLASSIFICATION_TYPEOffset)
            addUVW_SIGMAS(builder, UVW_SIGMASOffset)
            addCOVARIANCE_MATRIX(builder, COVARIANCE_MATRIXOffset)
            addPROPAGATOR_SETTINGS(builder, PROPAGATOR_SETTINGSOffset)
            addATMOSPHERIC_MODEL_DATA(builder, ATMOSPHERIC_MODEL_DATAOffset)
            addEQUINOCTIAL_ELEMENTS(builder, EQUINOCTIAL_ELEMENTSOffset)
            addKEPLERIAN_ELEMENTS(builder, KEPLERIAN_ELEMENTSOffset)
            addSTATE_VECTOR(builder, STATE_VECTOROffset)
            addTIME_SYSTEM(builder, TIME_SYSTEMOffset)
            addREF_FRAME(builder, REF_FRAMEOffset)
            addCENTER_NAME(builder, CENTER_NAMEOffset)
            addOBJECT_ID(builder, OBJECT_IDOffset)
            addOBJECT_NAME(builder, OBJECT_NAMEOffset)
            addORIGINATOR(builder, ORIGINATOROffset)
            addCREATION_DATE(builder, CREATION_DATEOffset)
            addSRP(builder, SRP)
            return endVCM(builder)
        }
        fun startVCM(builder: FlatBufferBuilder) = builder.startTable(39)
        fun addCCSDS_OMM_VERS(builder: FlatBufferBuilder, CCSDS_OMM_VERS: Double) = builder.addDouble(0, CCSDS_OMM_VERS, 0.0)
        fun addCREATION_DATE(builder: FlatBufferBuilder, CREATION_DATE: Int) = builder.addOffset(1, CREATION_DATE, 0)
        fun addORIGINATOR(builder: FlatBufferBuilder, ORIGINATOR: Int) = builder.addOffset(2, ORIGINATOR, 0)
        fun addOBJECT_NAME(builder: FlatBufferBuilder, OBJECT_NAME: Int) = builder.addOffset(3, OBJECT_NAME, 0)
        fun addOBJECT_ID(builder: FlatBufferBuilder, OBJECT_ID: Int) = builder.addOffset(4, OBJECT_ID, 0)
        fun addCENTER_NAME(builder: FlatBufferBuilder, CENTER_NAME: Int) = builder.addOffset(5, CENTER_NAME, 0)
        fun addREF_FRAME(builder: FlatBufferBuilder, REF_FRAME: Int) = builder.addOffset(6, REF_FRAME, 0)
        fun addTIME_SYSTEM(builder: FlatBufferBuilder, TIME_SYSTEM: Int) = builder.addOffset(7, TIME_SYSTEM, 0)
        fun addSTATE_VECTOR(builder: FlatBufferBuilder, STATE_VECTOR: Int) = builder.addOffset(8, STATE_VECTOR, 0)
        fun addKEPLERIAN_ELEMENTS(builder: FlatBufferBuilder, KEPLERIAN_ELEMENTS: Int) = builder.addOffset(9, KEPLERIAN_ELEMENTS, 0)
        fun addEQUINOCTIAL_ELEMENTS(builder: FlatBufferBuilder, EQUINOCTIAL_ELEMENTS: Int) = builder.addOffset(10, EQUINOCTIAL_ELEMENTS, 0)
        fun addGM(builder: FlatBufferBuilder, GM: Double) = builder.addDouble(11, GM, 0.0)
        fun addATMOSPHERIC_MODEL_DATA(builder: FlatBufferBuilder, ATMOSPHERIC_MODEL_DATA: Int) = builder.addOffset(12, ATMOSPHERIC_MODEL_DATA, 0)
        fun addPROPAGATOR_SETTINGS(builder: FlatBufferBuilder, PROPAGATOR_SETTINGS: Int) = builder.addOffset(13, PROPAGATOR_SETTINGS, 0)
        fun addCOVARIANCE_MATRIX(builder: FlatBufferBuilder, COVARIANCE_MATRIX: Int) = builder.addOffset(14, COVARIANCE_MATRIX, 0)
        fun createCovarianceMatrixVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startCovarianceMatrixVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addUVW_SIGMAS(builder: FlatBufferBuilder, UVW_SIGMAS: Int) = builder.addOffset(15, UVW_SIGMAS, 0)
        fun addMASS(builder: FlatBufferBuilder, MASS: Double) = builder.addDouble(16, MASS, 0.0)
        fun addSOLAR_RAD_AREA(builder: FlatBufferBuilder, SOLAR_RAD_AREA: Double) = builder.addDouble(17, SOLAR_RAD_AREA, 0.0)
        fun addSOLAR_RAD_COEFF(builder: FlatBufferBuilder, SOLAR_RAD_COEFF: Double) = builder.addDouble(18, SOLAR_RAD_COEFF, 0.0)
        fun addDRAG_AREA(builder: FlatBufferBuilder, DRAG_AREA: Double) = builder.addDouble(19, DRAG_AREA, 0.0)
        fun addDRAG_COEFF(builder: FlatBufferBuilder, DRAG_COEFF: Double) = builder.addDouble(20, DRAG_COEFF, 0.0)
        fun addSRP(builder: FlatBufferBuilder, SRP: Byte) = builder.addByte(21, SRP, 0)
        fun addCLASSIFICATION_TYPE(builder: FlatBufferBuilder, CLASSIFICATION_TYPE: Int) = builder.addOffset(22, CLASSIFICATION_TYPE, 0)
        fun addNORAD_CAT_ID(builder: FlatBufferBuilder, NORAD_CAT_ID: UInt) = builder.addInt(23, NORAD_CAT_ID.toInt(), 0)
        fun addELEMENT_SET_NO(builder: FlatBufferBuilder, ELEMENT_SET_NO: UInt) = builder.addInt(24, ELEMENT_SET_NO.toInt(), 0)
        fun addREV_AT_EPOCH(builder: FlatBufferBuilder, REV_AT_EPOCH: Double) = builder.addDouble(25, REV_AT_EPOCH, 0.0)
        fun addBSTAR(builder: FlatBufferBuilder, BSTAR: Double) = builder.addDouble(26, BSTAR, 0.0)
        fun addMEAN_MOTION_DOT(builder: FlatBufferBuilder, MEAN_MOTION_DOT: Double) = builder.addDouble(27, MEAN_MOTION_DOT, 0.0)
        fun addMEAN_MOTION_DDOT(builder: FlatBufferBuilder, MEAN_MOTION_DDOT: Double) = builder.addDouble(28, MEAN_MOTION_DDOT, 0.0)
        fun addCOV_REFERENCE_FRAME(builder: FlatBufferBuilder, COV_REFERENCE_FRAME: Int) = builder.addOffset(29, COV_REFERENCE_FRAME, 0)
        fun addCX_X(builder: FlatBufferBuilder, CX_X: Double) = builder.addDouble(30, CX_X, 0.0)
        fun addCY_X(builder: FlatBufferBuilder, CY_X: Double) = builder.addDouble(31, CY_X, 0.0)
        fun addCZ_X(builder: FlatBufferBuilder, CZ_X: Double) = builder.addDouble(32, CZ_X, 0.0)
        fun addCX_DOT_X(builder: FlatBufferBuilder, CX_DOT_X: Double) = builder.addDouble(33, CX_DOT_X, 0.0)
        fun addUSER_DEFINED_BIP_0044_TYPE(builder: FlatBufferBuilder, USER_DEFINED_BIP_0044_TYPE: UInt) = builder.addInt(34, USER_DEFINED_BIP_0044_TYPE.toInt(), 0)
        fun addUSER_DEFINED_OBJECT_DESIGNATOR(builder: FlatBufferBuilder, USER_DEFINED_OBJECT_DESIGNATOR: Int) = builder.addOffset(35, USER_DEFINED_OBJECT_DESIGNATOR, 0)
        fun addUSER_DEFINED_EARTH_MODEL(builder: FlatBufferBuilder, USER_DEFINED_EARTH_MODEL: Int) = builder.addOffset(36, USER_DEFINED_EARTH_MODEL, 0)
        fun addUSER_DEFINED_EPOCH_TIMESTAMP(builder: FlatBufferBuilder, USER_DEFINED_EPOCH_TIMESTAMP: Double) = builder.addDouble(37, USER_DEFINED_EPOCH_TIMESTAMP, 0.0)
        fun addUSER_DEFINED_MICROSECONDS(builder: FlatBufferBuilder, USER_DEFINED_MICROSECONDS: Double) = builder.addDouble(38, USER_DEFINED_MICROSECONDS, 0.0)
        fun endVCM(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
        fun finishVCMBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finish(offset)
        fun finishSizePrefixedVCMBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finishSizePrefixed(offset)
    }
}