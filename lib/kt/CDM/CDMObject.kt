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

@Suppress("unused")
@kotlin.ExperimentalUnsignedTypes
class CDMObject : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : CDMObject {
        __init(_i, _bb)
        return this
    }
    /**
     * A comment
     */
    val COMMENT : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val COMMENTAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun COMMENTInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    /**
     * Object number
     */
    val OBJECT : Byte
        get() {
            val o = __offset(6)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    /**
     * Object designator
     */
    val OBJECT_DESIGNATOR : String?
        get() {
            val o = __offset(8)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val OBJECT_DESIGNATORAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(8, 1)
    fun OBJECT_DESIGNATORInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 8, 1)
    /**
     * Catalog name
     */
    val CATALOG_NAME : String?
        get() {
            val o = __offset(10)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CATALOG_NAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(10, 1)
    fun CATALOG_NAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 10, 1)
    /**
     * Object name
     */
    val OBJECT_NAME : String?
        get() {
            val o = __offset(12)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val OBJECT_NAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(12, 1)
    fun OBJECT_NAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 12, 1)
    /**
     * International designator
     */
    val INTERNATIONAL_DESIGNATOR : String?
        get() {
            val o = __offset(14)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val INTERNATIONAL_DESIGNATORAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(14, 1)
    fun INTERNATIONAL_DESIGNATORInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 14, 1)
    /**
     * Object type
     */
    val OBJECT_TYPE : Byte
        get() {
            val o = __offset(16)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    /**
     * Operator contact position
     */
    val OPERATOR_CONTACT_POSITION : String?
        get() {
            val o = __offset(18)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val OPERATOR_CONTACT_POSITIONAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(18, 1)
    fun OPERATOR_CONTACT_POSITIONInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 18, 1)
    /**
     * Operator organization
     */
    val OPERATOR_ORGANIZATION : String?
        get() {
            val o = __offset(20)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val OPERATOR_ORGANIZATIONAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(20, 1)
    fun OPERATOR_ORGANIZATIONInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 20, 1)
    /**
     * Ephemeris name
     */
    val EPHEMERIS_NAME : String?
        get() {
            val o = __offset(22)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val EPHEMERIS_NAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(22, 1)
    fun EPHEMERIS_NAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 22, 1)
    /**
     * Covariance method
     */
    val COVARIANCE_METHOD : Byte
        get() {
            val o = __offset(24)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    /**
     * Maneuverable type
     */
    val MANEUVERABLE : Byte
        get() {
            val o = __offset(26)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    /**
     * Orbit center
     */
    val ORBIT_CENTER : String?
        get() {
            val o = __offset(28)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val ORBIT_CENTERAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(28, 1)
    fun ORBIT_CENTERInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 28, 1)
    /**
     * Reference frame
     */
    val REF_FRAME : Byte
        get() {
            val o = __offset(30)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    /**
     * Gravity model
     */
    val GRAVITY_MODEL : String?
        get() {
            val o = __offset(32)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val GRAVITY_MODELAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(32, 1)
    fun GRAVITY_MODELInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 32, 1)
    /**
     * Atmospheric model
     */
    val ATMOSPHERIC_MODEL : String?
        get() {
            val o = __offset(34)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val ATMOSPHERIC_MODELAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(34, 1)
    fun ATMOSPHERIC_MODELInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 34, 1)
    /**
     * N-body perturbations
     */
    val N_BODY_PERTURBATIONS : String?
        get() {
            val o = __offset(36)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val N_BODY_PERTURBATIONSAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(36, 1)
    fun N_BODY_PERTURBATIONSInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 36, 1)
    /**
     * Solar radiation pressure
     */
    val SOLAR_RAD_PRESSURE : Boolean
        get() {
            val o = __offset(38)
            return if(o != 0) 0.toByte() != bb.get(o + bb_pos) else false
        }
    /**
     * Earth tides
     */
    val EARTH_TIDES : Boolean
        get() {
            val o = __offset(40)
            return if(o != 0) 0.toByte() != bb.get(o + bb_pos) else false
        }
    /**
     * Intrack thrust
     */
    val INTRACK_THRUST : Boolean
        get() {
            val o = __offset(42)
            return if(o != 0) 0.toByte() != bb.get(o + bb_pos) else false
        }
    /**
     * Time of last observation start
     */
    val TIME_LASTOB_START : String?
        get() {
            val o = __offset(44)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val TIME_LASTOB_STARTAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(44, 1)
    fun TIME_LASTOB_STARTInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 44, 1)
    /**
     * Time of last observation end
     */
    val TIME_LASTOB_END : String?
        get() {
            val o = __offset(46)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val TIME_LASTOB_ENDAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(46, 1)
    fun TIME_LASTOB_ENDInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 46, 1)
    /**
     * Recommended observation data span
     */
    val RECOMMENDED_OD_SPAN : Double
        get() {
            val o = __offset(48)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Actual observation data span
     */
    val ACTUAL_OD_SPAN : Double
        get() {
            val o = __offset(50)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Number of observations available
     */
    val OBS_AVAILABLE : UInt
        get() {
            val o = __offset(52)
            return if(o != 0) bb.getInt(o + bb_pos).toUInt() else 0u
        }
    /**
     * Number of observations used
     */
    val OBS_USED : UInt
        get() {
            val o = __offset(54)
            return if(o != 0) bb.getInt(o + bb_pos).toUInt() else 0u
        }
    /**
     * Number of tracks available
     */
    val TRACKS_AVAILABLE : UInt
        get() {
            val o = __offset(56)
            return if(o != 0) bb.getInt(o + bb_pos).toUInt() else 0u
        }
    /**
     * Number of tracks used
     */
    val TRACKS_USED : UInt
        get() {
            val o = __offset(58)
            return if(o != 0) bb.getInt(o + bb_pos).toUInt() else 0u
        }
    /**
     * Residuals accepted
     */
    val RESIDUALS_ACCEPTED : Double
        get() {
            val o = __offset(60)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Weighted root mean square
     */
    val WEIGHTED_RMS : Double
        get() {
            val o = __offset(62)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Area of the object
     */
    val AREA_PC : Double
        get() {
            val o = __offset(64)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Area of the object drag
     */
    val AREA_DRG : Double
        get() {
            val o = __offset(66)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Area of the object solar radiation pressure
     */
    val AREA_SRP : Double
        get() {
            val o = __offset(68)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Mass of the object
     */
    val MASS : Double
        get() {
            val o = __offset(70)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Object's area-to-mass ratio
     */
    val CR_AREA_OVER_MASS : Double
        get() {
            val o = __offset(72)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Object's thrust acceleration
     */
    val THRUST_ACCELERATION : Double
        get() {
            val o = __offset(74)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Object's solar flux
     */
    val SEDR : Double
        get() {
            val o = __offset(76)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * X-coordinate of the object's position in RTN coordinates
     */
    val X : Double
        get() {
            val o = __offset(78)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Y-coordinate of the object's position in RTN
     */
    val Y : Double
        get() {
            val o = __offset(80)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Z-coordinate of the object's position in RTN
     */
    val Z : Double
        get() {
            val o = __offset(82)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * X-coordinate of the object's position in RTN coordinates
     */
    val X_DOT : Double
        get() {
            val o = __offset(84)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Y-coordinate of the object's position in RTN
     */
    val Y_DOT : Double
        get() {
            val o = __offset(86)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Z-coordinate of the object's position in RTN
     */
    val Z_DOT : Double
        get() {
            val o = __offset(88)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CR_R : Double
        get() {
            val o = __offset(90)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CT_R : Double
        get() {
            val o = __offset(92)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CT_T : Double
        get() {
            val o = __offset(94)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CN_R : Double
        get() {
            val o = __offset(96)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CN_T : Double
        get() {
            val o = __offset(98)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CN_N : Double
        get() {
            val o = __offset(100)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CRDOT_R : Double
        get() {
            val o = __offset(102)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CRDOT_T : Double
        get() {
            val o = __offset(104)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CRDOT_N : Double
        get() {
            val o = __offset(106)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CRDOT_RDOT : Double
        get() {
            val o = __offset(108)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTDOT_R : Double
        get() {
            val o = __offset(110)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTDOT_T : Double
        get() {
            val o = __offset(112)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTDOT_N : Double
        get() {
            val o = __offset(114)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTDOT_RDOT : Double
        get() {
            val o = __offset(116)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTDOT_TDOT : Double
        get() {
            val o = __offset(118)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CNDOT_R : Double
        get() {
            val o = __offset(120)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CNDOT_T : Double
        get() {
            val o = __offset(122)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CNDOT_N : Double
        get() {
            val o = __offset(124)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CNDOT_RDOT : Double
        get() {
            val o = __offset(126)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CNDOT_TDOT : Double
        get() {
            val o = __offset(128)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CNDOT_NDOT : Double
        get() {
            val o = __offset(130)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CDRG_R : Double
        get() {
            val o = __offset(132)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CDRG_T : Double
        get() {
            val o = __offset(134)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CDRG_N : Double
        get() {
            val o = __offset(136)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CDRG_RDOT : Double
        get() {
            val o = __offset(138)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CDRG_TDOT : Double
        get() {
            val o = __offset(140)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CDRG_NDOT : Double
        get() {
            val o = __offset(142)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CDRG_DRG : Double
        get() {
            val o = __offset(144)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CSRP_R : Double
        get() {
            val o = __offset(146)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CSRP_T : Double
        get() {
            val o = __offset(148)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CSRP_N : Double
        get() {
            val o = __offset(150)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CSRP_RDOT : Double
        get() {
            val o = __offset(152)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CSRP_TDOT : Double
        get() {
            val o = __offset(154)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CSRP_NDOT : Double
        get() {
            val o = __offset(156)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CSRP_DRG : Double
        get() {
            val o = __offset(158)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CSRP_SRP : Double
        get() {
            val o = __offset(160)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTHR_R : Double
        get() {
            val o = __offset(162)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTHR_T : Double
        get() {
            val o = __offset(164)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTHR_N : Double
        get() {
            val o = __offset(166)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTHR_RDOT : Double
        get() {
            val o = __offset(168)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTHR_TDOT : Double
        get() {
            val o = __offset(170)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTHR_NDOT : Double
        get() {
            val o = __offset(172)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTHR_DRG : Double
        get() {
            val o = __offset(174)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTHR_SRP : Double
        get() {
            val o = __offset(176)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance Matrix component
     */
    val CTHR_THR : Double
        get() {
            val o = __offset(178)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_3_3()
        fun getRootAsCDMObject(_bb: ByteBuffer): CDMObject = getRootAsCDMObject(_bb, CDMObject())
        fun getRootAsCDMObject(_bb: ByteBuffer, obj: CDMObject): CDMObject {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createCDMObject(builder: FlatBufferBuilder, COMMENTOffset: Int, OBJECT: Byte, OBJECT_DESIGNATOROffset: Int, CATALOG_NAMEOffset: Int, OBJECT_NAMEOffset: Int, INTERNATIONAL_DESIGNATOROffset: Int, OBJECT_TYPE: Byte, OPERATOR_CONTACT_POSITIONOffset: Int, OPERATOR_ORGANIZATIONOffset: Int, EPHEMERIS_NAMEOffset: Int, COVARIANCE_METHOD: Byte, MANEUVERABLE: Byte, ORBIT_CENTEROffset: Int, REF_FRAME: Byte, GRAVITY_MODELOffset: Int, ATMOSPHERIC_MODELOffset: Int, N_BODY_PERTURBATIONSOffset: Int, SOLAR_RAD_PRESSURE: Boolean, EARTH_TIDES: Boolean, INTRACK_THRUST: Boolean, TIME_LASTOB_STARTOffset: Int, TIME_LASTOB_ENDOffset: Int, RECOMMENDED_OD_SPAN: Double, ACTUAL_OD_SPAN: Double, OBS_AVAILABLE: UInt, OBS_USED: UInt, TRACKS_AVAILABLE: UInt, TRACKS_USED: UInt, RESIDUALS_ACCEPTED: Double, WEIGHTED_RMS: Double, AREA_PC: Double, AREA_DRG: Double, AREA_SRP: Double, MASS: Double, CR_AREA_OVER_MASS: Double, THRUST_ACCELERATION: Double, SEDR: Double, X: Double, Y: Double, Z: Double, X_DOT: Double, Y_DOT: Double, Z_DOT: Double, CR_R: Double, CT_R: Double, CT_T: Double, CN_R: Double, CN_T: Double, CN_N: Double, CRDOT_R: Double, CRDOT_T: Double, CRDOT_N: Double, CRDOT_RDOT: Double, CTDOT_R: Double, CTDOT_T: Double, CTDOT_N: Double, CTDOT_RDOT: Double, CTDOT_TDOT: Double, CNDOT_R: Double, CNDOT_T: Double, CNDOT_N: Double, CNDOT_RDOT: Double, CNDOT_TDOT: Double, CNDOT_NDOT: Double, CDRG_R: Double, CDRG_T: Double, CDRG_N: Double, CDRG_RDOT: Double, CDRG_TDOT: Double, CDRG_NDOT: Double, CDRG_DRG: Double, CSRP_R: Double, CSRP_T: Double, CSRP_N: Double, CSRP_RDOT: Double, CSRP_TDOT: Double, CSRP_NDOT: Double, CSRP_DRG: Double, CSRP_SRP: Double, CTHR_R: Double, CTHR_T: Double, CTHR_N: Double, CTHR_RDOT: Double, CTHR_TDOT: Double, CTHR_NDOT: Double, CTHR_DRG: Double, CTHR_SRP: Double, CTHR_THR: Double) : Int {
            builder.startTable(88)
            addCTHR_THR(builder, CTHR_THR)
            addCTHR_SRP(builder, CTHR_SRP)
            addCTHR_DRG(builder, CTHR_DRG)
            addCTHR_NDOT(builder, CTHR_NDOT)
            addCTHR_TDOT(builder, CTHR_TDOT)
            addCTHR_RDOT(builder, CTHR_RDOT)
            addCTHR_N(builder, CTHR_N)
            addCTHR_T(builder, CTHR_T)
            addCTHR_R(builder, CTHR_R)
            addCSRP_SRP(builder, CSRP_SRP)
            addCSRP_DRG(builder, CSRP_DRG)
            addCSRP_NDOT(builder, CSRP_NDOT)
            addCSRP_TDOT(builder, CSRP_TDOT)
            addCSRP_RDOT(builder, CSRP_RDOT)
            addCSRP_N(builder, CSRP_N)
            addCSRP_T(builder, CSRP_T)
            addCSRP_R(builder, CSRP_R)
            addCDRG_DRG(builder, CDRG_DRG)
            addCDRG_NDOT(builder, CDRG_NDOT)
            addCDRG_TDOT(builder, CDRG_TDOT)
            addCDRG_RDOT(builder, CDRG_RDOT)
            addCDRG_N(builder, CDRG_N)
            addCDRG_T(builder, CDRG_T)
            addCDRG_R(builder, CDRG_R)
            addCNDOT_NDOT(builder, CNDOT_NDOT)
            addCNDOT_TDOT(builder, CNDOT_TDOT)
            addCNDOT_RDOT(builder, CNDOT_RDOT)
            addCNDOT_N(builder, CNDOT_N)
            addCNDOT_T(builder, CNDOT_T)
            addCNDOT_R(builder, CNDOT_R)
            addCTDOT_TDOT(builder, CTDOT_TDOT)
            addCTDOT_RDOT(builder, CTDOT_RDOT)
            addCTDOT_N(builder, CTDOT_N)
            addCTDOT_T(builder, CTDOT_T)
            addCTDOT_R(builder, CTDOT_R)
            addCRDOT_RDOT(builder, CRDOT_RDOT)
            addCRDOT_N(builder, CRDOT_N)
            addCRDOT_T(builder, CRDOT_T)
            addCRDOT_R(builder, CRDOT_R)
            addCN_N(builder, CN_N)
            addCN_T(builder, CN_T)
            addCN_R(builder, CN_R)
            addCT_T(builder, CT_T)
            addCT_R(builder, CT_R)
            addCR_R(builder, CR_R)
            addZ_DOT(builder, Z_DOT)
            addY_DOT(builder, Y_DOT)
            addX_DOT(builder, X_DOT)
            addZ(builder, Z)
            addY(builder, Y)
            addX(builder, X)
            addSEDR(builder, SEDR)
            addTHRUST_ACCELERATION(builder, THRUST_ACCELERATION)
            addCR_AREA_OVER_MASS(builder, CR_AREA_OVER_MASS)
            addMASS(builder, MASS)
            addAREA_SRP(builder, AREA_SRP)
            addAREA_DRG(builder, AREA_DRG)
            addAREA_PC(builder, AREA_PC)
            addWEIGHTED_RMS(builder, WEIGHTED_RMS)
            addRESIDUALS_ACCEPTED(builder, RESIDUALS_ACCEPTED)
            addACTUAL_OD_SPAN(builder, ACTUAL_OD_SPAN)
            addRECOMMENDED_OD_SPAN(builder, RECOMMENDED_OD_SPAN)
            addTRACKS_USED(builder, TRACKS_USED)
            addTRACKS_AVAILABLE(builder, TRACKS_AVAILABLE)
            addOBS_USED(builder, OBS_USED)
            addOBS_AVAILABLE(builder, OBS_AVAILABLE)
            addTIME_LASTOB_END(builder, TIME_LASTOB_ENDOffset)
            addTIME_LASTOB_START(builder, TIME_LASTOB_STARTOffset)
            addN_BODY_PERTURBATIONS(builder, N_BODY_PERTURBATIONSOffset)
            addATMOSPHERIC_MODEL(builder, ATMOSPHERIC_MODELOffset)
            addGRAVITY_MODEL(builder, GRAVITY_MODELOffset)
            addORBIT_CENTER(builder, ORBIT_CENTEROffset)
            addEPHEMERIS_NAME(builder, EPHEMERIS_NAMEOffset)
            addOPERATOR_ORGANIZATION(builder, OPERATOR_ORGANIZATIONOffset)
            addOPERATOR_CONTACT_POSITION(builder, OPERATOR_CONTACT_POSITIONOffset)
            addINTERNATIONAL_DESIGNATOR(builder, INTERNATIONAL_DESIGNATOROffset)
            addOBJECT_NAME(builder, OBJECT_NAMEOffset)
            addCATALOG_NAME(builder, CATALOG_NAMEOffset)
            addOBJECT_DESIGNATOR(builder, OBJECT_DESIGNATOROffset)
            addCOMMENT(builder, COMMENTOffset)
            addINTRACK_THRUST(builder, INTRACK_THRUST)
            addEARTH_TIDES(builder, EARTH_TIDES)
            addSOLAR_RAD_PRESSURE(builder, SOLAR_RAD_PRESSURE)
            addREF_FRAME(builder, REF_FRAME)
            addMANEUVERABLE(builder, MANEUVERABLE)
            addCOVARIANCE_METHOD(builder, COVARIANCE_METHOD)
            addOBJECT_TYPE(builder, OBJECT_TYPE)
            addOBJECT(builder, OBJECT)
            return endCDMObject(builder)
        }
        fun startCDMObject(builder: FlatBufferBuilder) = builder.startTable(88)
        fun addCOMMENT(builder: FlatBufferBuilder, COMMENT: Int) = builder.addOffset(0, COMMENT, 0)
        fun addOBJECT(builder: FlatBufferBuilder, OBJECT: Byte) = builder.addByte(1, OBJECT, 0)
        fun addOBJECT_DESIGNATOR(builder: FlatBufferBuilder, OBJECT_DESIGNATOR: Int) = builder.addOffset(2, OBJECT_DESIGNATOR, 0)
        fun addCATALOG_NAME(builder: FlatBufferBuilder, CATALOG_NAME: Int) = builder.addOffset(3, CATALOG_NAME, 0)
        fun addOBJECT_NAME(builder: FlatBufferBuilder, OBJECT_NAME: Int) = builder.addOffset(4, OBJECT_NAME, 0)
        fun addINTERNATIONAL_DESIGNATOR(builder: FlatBufferBuilder, INTERNATIONAL_DESIGNATOR: Int) = builder.addOffset(5, INTERNATIONAL_DESIGNATOR, 0)
        fun addOBJECT_TYPE(builder: FlatBufferBuilder, OBJECT_TYPE: Byte) = builder.addByte(6, OBJECT_TYPE, 0)
        fun addOPERATOR_CONTACT_POSITION(builder: FlatBufferBuilder, OPERATOR_CONTACT_POSITION: Int) = builder.addOffset(7, OPERATOR_CONTACT_POSITION, 0)
        fun addOPERATOR_ORGANIZATION(builder: FlatBufferBuilder, OPERATOR_ORGANIZATION: Int) = builder.addOffset(8, OPERATOR_ORGANIZATION, 0)
        fun addEPHEMERIS_NAME(builder: FlatBufferBuilder, EPHEMERIS_NAME: Int) = builder.addOffset(9, EPHEMERIS_NAME, 0)
        fun addCOVARIANCE_METHOD(builder: FlatBufferBuilder, COVARIANCE_METHOD: Byte) = builder.addByte(10, COVARIANCE_METHOD, 0)
        fun addMANEUVERABLE(builder: FlatBufferBuilder, MANEUVERABLE: Byte) = builder.addByte(11, MANEUVERABLE, 0)
        fun addORBIT_CENTER(builder: FlatBufferBuilder, ORBIT_CENTER: Int) = builder.addOffset(12, ORBIT_CENTER, 0)
        fun addREF_FRAME(builder: FlatBufferBuilder, REF_FRAME: Byte) = builder.addByte(13, REF_FRAME, 0)
        fun addGRAVITY_MODEL(builder: FlatBufferBuilder, GRAVITY_MODEL: Int) = builder.addOffset(14, GRAVITY_MODEL, 0)
        fun addATMOSPHERIC_MODEL(builder: FlatBufferBuilder, ATMOSPHERIC_MODEL: Int) = builder.addOffset(15, ATMOSPHERIC_MODEL, 0)
        fun addN_BODY_PERTURBATIONS(builder: FlatBufferBuilder, N_BODY_PERTURBATIONS: Int) = builder.addOffset(16, N_BODY_PERTURBATIONS, 0)
        fun addSOLAR_RAD_PRESSURE(builder: FlatBufferBuilder, SOLAR_RAD_PRESSURE: Boolean) = builder.addBoolean(17, SOLAR_RAD_PRESSURE, false)
        fun addEARTH_TIDES(builder: FlatBufferBuilder, EARTH_TIDES: Boolean) = builder.addBoolean(18, EARTH_TIDES, false)
        fun addINTRACK_THRUST(builder: FlatBufferBuilder, INTRACK_THRUST: Boolean) = builder.addBoolean(19, INTRACK_THRUST, false)
        fun addTIME_LASTOB_START(builder: FlatBufferBuilder, TIME_LASTOB_START: Int) = builder.addOffset(20, TIME_LASTOB_START, 0)
        fun addTIME_LASTOB_END(builder: FlatBufferBuilder, TIME_LASTOB_END: Int) = builder.addOffset(21, TIME_LASTOB_END, 0)
        fun addRECOMMENDED_OD_SPAN(builder: FlatBufferBuilder, RECOMMENDED_OD_SPAN: Double) = builder.addDouble(22, RECOMMENDED_OD_SPAN, 0.0)
        fun addACTUAL_OD_SPAN(builder: FlatBufferBuilder, ACTUAL_OD_SPAN: Double) = builder.addDouble(23, ACTUAL_OD_SPAN, 0.0)
        fun addOBS_AVAILABLE(builder: FlatBufferBuilder, OBS_AVAILABLE: UInt) = builder.addInt(24, OBS_AVAILABLE.toInt(), 0)
        fun addOBS_USED(builder: FlatBufferBuilder, OBS_USED: UInt) = builder.addInt(25, OBS_USED.toInt(), 0)
        fun addTRACKS_AVAILABLE(builder: FlatBufferBuilder, TRACKS_AVAILABLE: UInt) = builder.addInt(26, TRACKS_AVAILABLE.toInt(), 0)
        fun addTRACKS_USED(builder: FlatBufferBuilder, TRACKS_USED: UInt) = builder.addInt(27, TRACKS_USED.toInt(), 0)
        fun addRESIDUALS_ACCEPTED(builder: FlatBufferBuilder, RESIDUALS_ACCEPTED: Double) = builder.addDouble(28, RESIDUALS_ACCEPTED, 0.0)
        fun addWEIGHTED_RMS(builder: FlatBufferBuilder, WEIGHTED_RMS: Double) = builder.addDouble(29, WEIGHTED_RMS, 0.0)
        fun addAREA_PC(builder: FlatBufferBuilder, AREA_PC: Double) = builder.addDouble(30, AREA_PC, 0.0)
        fun addAREA_DRG(builder: FlatBufferBuilder, AREA_DRG: Double) = builder.addDouble(31, AREA_DRG, 0.0)
        fun addAREA_SRP(builder: FlatBufferBuilder, AREA_SRP: Double) = builder.addDouble(32, AREA_SRP, 0.0)
        fun addMASS(builder: FlatBufferBuilder, MASS: Double) = builder.addDouble(33, MASS, 0.0)
        fun addCR_AREA_OVER_MASS(builder: FlatBufferBuilder, CR_AREA_OVER_MASS: Double) = builder.addDouble(34, CR_AREA_OVER_MASS, 0.0)
        fun addTHRUST_ACCELERATION(builder: FlatBufferBuilder, THRUST_ACCELERATION: Double) = builder.addDouble(35, THRUST_ACCELERATION, 0.0)
        fun addSEDR(builder: FlatBufferBuilder, SEDR: Double) = builder.addDouble(36, SEDR, 0.0)
        fun addX(builder: FlatBufferBuilder, X: Double) = builder.addDouble(37, X, 0.0)
        fun addY(builder: FlatBufferBuilder, Y: Double) = builder.addDouble(38, Y, 0.0)
        fun addZ(builder: FlatBufferBuilder, Z: Double) = builder.addDouble(39, Z, 0.0)
        fun addX_DOT(builder: FlatBufferBuilder, X_DOT: Double) = builder.addDouble(40, X_DOT, 0.0)
        fun addY_DOT(builder: FlatBufferBuilder, Y_DOT: Double) = builder.addDouble(41, Y_DOT, 0.0)
        fun addZ_DOT(builder: FlatBufferBuilder, Z_DOT: Double) = builder.addDouble(42, Z_DOT, 0.0)
        fun addCR_R(builder: FlatBufferBuilder, CR_R: Double) = builder.addDouble(43, CR_R, 0.0)
        fun addCT_R(builder: FlatBufferBuilder, CT_R: Double) = builder.addDouble(44, CT_R, 0.0)
        fun addCT_T(builder: FlatBufferBuilder, CT_T: Double) = builder.addDouble(45, CT_T, 0.0)
        fun addCN_R(builder: FlatBufferBuilder, CN_R: Double) = builder.addDouble(46, CN_R, 0.0)
        fun addCN_T(builder: FlatBufferBuilder, CN_T: Double) = builder.addDouble(47, CN_T, 0.0)
        fun addCN_N(builder: FlatBufferBuilder, CN_N: Double) = builder.addDouble(48, CN_N, 0.0)
        fun addCRDOT_R(builder: FlatBufferBuilder, CRDOT_R: Double) = builder.addDouble(49, CRDOT_R, 0.0)
        fun addCRDOT_T(builder: FlatBufferBuilder, CRDOT_T: Double) = builder.addDouble(50, CRDOT_T, 0.0)
        fun addCRDOT_N(builder: FlatBufferBuilder, CRDOT_N: Double) = builder.addDouble(51, CRDOT_N, 0.0)
        fun addCRDOT_RDOT(builder: FlatBufferBuilder, CRDOT_RDOT: Double) = builder.addDouble(52, CRDOT_RDOT, 0.0)
        fun addCTDOT_R(builder: FlatBufferBuilder, CTDOT_R: Double) = builder.addDouble(53, CTDOT_R, 0.0)
        fun addCTDOT_T(builder: FlatBufferBuilder, CTDOT_T: Double) = builder.addDouble(54, CTDOT_T, 0.0)
        fun addCTDOT_N(builder: FlatBufferBuilder, CTDOT_N: Double) = builder.addDouble(55, CTDOT_N, 0.0)
        fun addCTDOT_RDOT(builder: FlatBufferBuilder, CTDOT_RDOT: Double) = builder.addDouble(56, CTDOT_RDOT, 0.0)
        fun addCTDOT_TDOT(builder: FlatBufferBuilder, CTDOT_TDOT: Double) = builder.addDouble(57, CTDOT_TDOT, 0.0)
        fun addCNDOT_R(builder: FlatBufferBuilder, CNDOT_R: Double) = builder.addDouble(58, CNDOT_R, 0.0)
        fun addCNDOT_T(builder: FlatBufferBuilder, CNDOT_T: Double) = builder.addDouble(59, CNDOT_T, 0.0)
        fun addCNDOT_N(builder: FlatBufferBuilder, CNDOT_N: Double) = builder.addDouble(60, CNDOT_N, 0.0)
        fun addCNDOT_RDOT(builder: FlatBufferBuilder, CNDOT_RDOT: Double) = builder.addDouble(61, CNDOT_RDOT, 0.0)
        fun addCNDOT_TDOT(builder: FlatBufferBuilder, CNDOT_TDOT: Double) = builder.addDouble(62, CNDOT_TDOT, 0.0)
        fun addCNDOT_NDOT(builder: FlatBufferBuilder, CNDOT_NDOT: Double) = builder.addDouble(63, CNDOT_NDOT, 0.0)
        fun addCDRG_R(builder: FlatBufferBuilder, CDRG_R: Double) = builder.addDouble(64, CDRG_R, 0.0)
        fun addCDRG_T(builder: FlatBufferBuilder, CDRG_T: Double) = builder.addDouble(65, CDRG_T, 0.0)
        fun addCDRG_N(builder: FlatBufferBuilder, CDRG_N: Double) = builder.addDouble(66, CDRG_N, 0.0)
        fun addCDRG_RDOT(builder: FlatBufferBuilder, CDRG_RDOT: Double) = builder.addDouble(67, CDRG_RDOT, 0.0)
        fun addCDRG_TDOT(builder: FlatBufferBuilder, CDRG_TDOT: Double) = builder.addDouble(68, CDRG_TDOT, 0.0)
        fun addCDRG_NDOT(builder: FlatBufferBuilder, CDRG_NDOT: Double) = builder.addDouble(69, CDRG_NDOT, 0.0)
        fun addCDRG_DRG(builder: FlatBufferBuilder, CDRG_DRG: Double) = builder.addDouble(70, CDRG_DRG, 0.0)
        fun addCSRP_R(builder: FlatBufferBuilder, CSRP_R: Double) = builder.addDouble(71, CSRP_R, 0.0)
        fun addCSRP_T(builder: FlatBufferBuilder, CSRP_T: Double) = builder.addDouble(72, CSRP_T, 0.0)
        fun addCSRP_N(builder: FlatBufferBuilder, CSRP_N: Double) = builder.addDouble(73, CSRP_N, 0.0)
        fun addCSRP_RDOT(builder: FlatBufferBuilder, CSRP_RDOT: Double) = builder.addDouble(74, CSRP_RDOT, 0.0)
        fun addCSRP_TDOT(builder: FlatBufferBuilder, CSRP_TDOT: Double) = builder.addDouble(75, CSRP_TDOT, 0.0)
        fun addCSRP_NDOT(builder: FlatBufferBuilder, CSRP_NDOT: Double) = builder.addDouble(76, CSRP_NDOT, 0.0)
        fun addCSRP_DRG(builder: FlatBufferBuilder, CSRP_DRG: Double) = builder.addDouble(77, CSRP_DRG, 0.0)
        fun addCSRP_SRP(builder: FlatBufferBuilder, CSRP_SRP: Double) = builder.addDouble(78, CSRP_SRP, 0.0)
        fun addCTHR_R(builder: FlatBufferBuilder, CTHR_R: Double) = builder.addDouble(79, CTHR_R, 0.0)
        fun addCTHR_T(builder: FlatBufferBuilder, CTHR_T: Double) = builder.addDouble(80, CTHR_T, 0.0)
        fun addCTHR_N(builder: FlatBufferBuilder, CTHR_N: Double) = builder.addDouble(81, CTHR_N, 0.0)
        fun addCTHR_RDOT(builder: FlatBufferBuilder, CTHR_RDOT: Double) = builder.addDouble(82, CTHR_RDOT, 0.0)
        fun addCTHR_TDOT(builder: FlatBufferBuilder, CTHR_TDOT: Double) = builder.addDouble(83, CTHR_TDOT, 0.0)
        fun addCTHR_NDOT(builder: FlatBufferBuilder, CTHR_NDOT: Double) = builder.addDouble(84, CTHR_NDOT, 0.0)
        fun addCTHR_DRG(builder: FlatBufferBuilder, CTHR_DRG: Double) = builder.addDouble(85, CTHR_DRG, 0.0)
        fun addCTHR_SRP(builder: FlatBufferBuilder, CTHR_SRP: Double) = builder.addDouble(86, CTHR_SRP, 0.0)
        fun addCTHR_THR(builder: FlatBufferBuilder, CTHR_THR: Double) = builder.addDouble(87, CTHR_THR, 0.0)
        fun endCDMObject(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}