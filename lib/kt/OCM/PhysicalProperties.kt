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
class PhysicalProperties : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : PhysicalProperties {
        __init(_i, _bb)
        return this
    }
    /**
     * Comments in the Physical Properties section.
     */
    fun COMMENT(j: Int) : String? {
        val o = __offset(4)
        return if (o != 0) {
            __string(__vector(o) + j * 4)
        } else {
            null
        }
    }
    val COMMENTLength : Int
        get() {
            val o = __offset(4); return if (o != 0) __vector_len(o) else 0
        }
    /**
     * Wet mass of the space object.
     */
    val WET_MASS : Double
        get() {
            val o = __offset(6)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Dry mass of the space object.
     */
    val DRY_MASS : Double
        get() {
            val o = __offset(8)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Units for mass values.
     */
    val MASS_UNITS : String?
        get() {
            val o = __offset(10)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val MASS_UNITSAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(10, 1)
    fun MASS_UNITSInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 10, 1)
    /**
     * Quaternion component q1 of orientation from OEB to EME2000.
     */
    val OEB_Q1 : Double
        get() {
            val o = __offset(12)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Quaternion component q2.
     */
    val OEB_Q2 : Double
        get() {
            val o = __offset(14)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Quaternion component q3.
     */
    val OEB_Q3 : Double
        get() {
            val o = __offset(16)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Quaternion scalar component qc.
     */
    val OEB_QC : Double
        get() {
            val o = __offset(18)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Maximum dimension of the object along OEB frame axes.
     */
    val OEB_MAX : Double
        get() {
            val o = __offset(20)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Intermediate dimension along OEB frame axes.
     */
    val OEB_INT : Double
        get() {
            val o = __offset(22)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Minimum dimension of the object along OEB frame axes.
     */
    val OEB_MIN : Double
        get() {
            val o = __offset(24)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Area along OEB_MAX axis.
     */
    val AREA_ALONG_OEB_MAX : Double
        get() {
            val o = __offset(26)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Area along OEB_INT axis.
     */
    val AREA_ALONG_OEB_INT : Double
        get() {
            val o = __offset(28)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Area along OEB_MIN axis.
     */
    val AREA_ALONG_OEB_MIN : Double
        get() {
            val o = __offset(30)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Units for area values.
     */
    val AREA_UNITS : String?
        get() {
            val o = __offset(32)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val AREA_UNITSAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(32, 1)
    fun AREA_UNITSInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 32, 1)
    /**
     * Constant area for drag computations.
     */
    val DRAG_CONST_AREA : Double
        get() {
            val o = __offset(34)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Nominal drag coefficient.
     */
    val DRAG_COEFF_NOM : Double
        get() {
            val o = __offset(36)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Uncertainty in the drag coefficient.
     */
    val DRAG_UNCERTAINTY : Double
        get() {
            val o = __offset(38)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Constant area for solar radiation pressure computations.
     */
    val SRP_CONST_AREA : Double
        get() {
            val o = __offset(40)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Nominal solar radiation pressure coefficient.
     */
    val SOLAR_RAD_COEFF : Double
        get() {
            val o = __offset(42)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Uncertainty in the solar radiation pressure coefficient.
     */
    val SRP_UNCERTAINTY : Double
        get() {
            val o = __offset(44)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_24_3_25()
        fun getRootAsPhysicalProperties(_bb: ByteBuffer): PhysicalProperties = getRootAsPhysicalProperties(_bb, PhysicalProperties())
        fun getRootAsPhysicalProperties(_bb: ByteBuffer, obj: PhysicalProperties): PhysicalProperties {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createPhysicalProperties(builder: FlatBufferBuilder, COMMENTOffset: Int, WET_MASS: Double, DRY_MASS: Double, MASS_UNITSOffset: Int, OEB_Q1: Double, OEB_Q2: Double, OEB_Q3: Double, OEB_QC: Double, OEB_MAX: Double, OEB_INT: Double, OEB_MIN: Double, AREA_ALONG_OEB_MAX: Double, AREA_ALONG_OEB_INT: Double, AREA_ALONG_OEB_MIN: Double, AREA_UNITSOffset: Int, DRAG_CONST_AREA: Double, DRAG_COEFF_NOM: Double, DRAG_UNCERTAINTY: Double, SRP_CONST_AREA: Double, SOLAR_RAD_COEFF: Double, SRP_UNCERTAINTY: Double) : Int {
            builder.startTable(21)
            addSRP_UNCERTAINTY(builder, SRP_UNCERTAINTY)
            addSOLAR_RAD_COEFF(builder, SOLAR_RAD_COEFF)
            addSRP_CONST_AREA(builder, SRP_CONST_AREA)
            addDRAG_UNCERTAINTY(builder, DRAG_UNCERTAINTY)
            addDRAG_COEFF_NOM(builder, DRAG_COEFF_NOM)
            addDRAG_CONST_AREA(builder, DRAG_CONST_AREA)
            addAREA_ALONG_OEB_MIN(builder, AREA_ALONG_OEB_MIN)
            addAREA_ALONG_OEB_INT(builder, AREA_ALONG_OEB_INT)
            addAREA_ALONG_OEB_MAX(builder, AREA_ALONG_OEB_MAX)
            addOEB_MIN(builder, OEB_MIN)
            addOEB_INT(builder, OEB_INT)
            addOEB_MAX(builder, OEB_MAX)
            addOEB_QC(builder, OEB_QC)
            addOEB_Q3(builder, OEB_Q3)
            addOEB_Q2(builder, OEB_Q2)
            addOEB_Q1(builder, OEB_Q1)
            addDRY_MASS(builder, DRY_MASS)
            addWET_MASS(builder, WET_MASS)
            addAREA_UNITS(builder, AREA_UNITSOffset)
            addMASS_UNITS(builder, MASS_UNITSOffset)
            addCOMMENT(builder, COMMENTOffset)
            return endPhysicalProperties(builder)
        }
        fun startPhysicalProperties(builder: FlatBufferBuilder) = builder.startTable(21)
        fun addCOMMENT(builder: FlatBufferBuilder, COMMENT: Int) = builder.addOffset(0, COMMENT, 0)
        fun createCommentVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startCommentVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addWET_MASS(builder: FlatBufferBuilder, WET_MASS: Double) = builder.addDouble(1, WET_MASS, 0.0)
        fun addDRY_MASS(builder: FlatBufferBuilder, DRY_MASS: Double) = builder.addDouble(2, DRY_MASS, 0.0)
        fun addMASS_UNITS(builder: FlatBufferBuilder, MASS_UNITS: Int) = builder.addOffset(3, MASS_UNITS, 0)
        fun addOEB_Q1(builder: FlatBufferBuilder, OEB_Q1: Double) = builder.addDouble(4, OEB_Q1, 0.0)
        fun addOEB_Q2(builder: FlatBufferBuilder, OEB_Q2: Double) = builder.addDouble(5, OEB_Q2, 0.0)
        fun addOEB_Q3(builder: FlatBufferBuilder, OEB_Q3: Double) = builder.addDouble(6, OEB_Q3, 0.0)
        fun addOEB_QC(builder: FlatBufferBuilder, OEB_QC: Double) = builder.addDouble(7, OEB_QC, 0.0)
        fun addOEB_MAX(builder: FlatBufferBuilder, OEB_MAX: Double) = builder.addDouble(8, OEB_MAX, 0.0)
        fun addOEB_INT(builder: FlatBufferBuilder, OEB_INT: Double) = builder.addDouble(9, OEB_INT, 0.0)
        fun addOEB_MIN(builder: FlatBufferBuilder, OEB_MIN: Double) = builder.addDouble(10, OEB_MIN, 0.0)
        fun addAREA_ALONG_OEB_MAX(builder: FlatBufferBuilder, AREA_ALONG_OEB_MAX: Double) = builder.addDouble(11, AREA_ALONG_OEB_MAX, 0.0)
        fun addAREA_ALONG_OEB_INT(builder: FlatBufferBuilder, AREA_ALONG_OEB_INT: Double) = builder.addDouble(12, AREA_ALONG_OEB_INT, 0.0)
        fun addAREA_ALONG_OEB_MIN(builder: FlatBufferBuilder, AREA_ALONG_OEB_MIN: Double) = builder.addDouble(13, AREA_ALONG_OEB_MIN, 0.0)
        fun addAREA_UNITS(builder: FlatBufferBuilder, AREA_UNITS: Int) = builder.addOffset(14, AREA_UNITS, 0)
        fun addDRAG_CONST_AREA(builder: FlatBufferBuilder, DRAG_CONST_AREA: Double) = builder.addDouble(15, DRAG_CONST_AREA, 0.0)
        fun addDRAG_COEFF_NOM(builder: FlatBufferBuilder, DRAG_COEFF_NOM: Double) = builder.addDouble(16, DRAG_COEFF_NOM, 0.0)
        fun addDRAG_UNCERTAINTY(builder: FlatBufferBuilder, DRAG_UNCERTAINTY: Double) = builder.addDouble(17, DRAG_UNCERTAINTY, 0.0)
        fun addSRP_CONST_AREA(builder: FlatBufferBuilder, SRP_CONST_AREA: Double) = builder.addDouble(18, SRP_CONST_AREA, 0.0)
        fun addSOLAR_RAD_COEFF(builder: FlatBufferBuilder, SOLAR_RAD_COEFF: Double) = builder.addDouble(19, SOLAR_RAD_COEFF, 0.0)
        fun addSRP_UNCERTAINTY(builder: FlatBufferBuilder, SRP_UNCERTAINTY: Double) = builder.addDouble(20, SRP_UNCERTAINTY, 0.0)
        fun endPhysicalProperties(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
