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
 * Collection of MPE Records
 */
@Suppress("unused")
@kotlin.ExperimentalUnsignedTypes
class MPECOLLECTION : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : MPECOLLECTION {
        __init(_i, _bb)
        return this
    }
    /**
     * Default value = U
     */
    val CLASSIFICATION_TYPE : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CLASSIFICATION_TYPEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun CLASSIFICATION_TYPEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    /**
     * Name of the reference frame (TEME, EME2000, etc.)
     */
    val REF_FRAME : Byte
        get() {
            val o = __offset(6)
            return if(o != 0) bb.get(o + bb_pos) else 9
        }
    /**
     * Epoch of the Reference Frame. (UNIX TimeStamp)
     */
    val REF_FRAME_EPOCH : Double
        get() {
            val o = __offset(8)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Time system used for the orbit state and covariance matrix. (UTC)
     */
    val TIME_SYSTEM : Byte
        get() {
            val o = __offset(10)
            return if(o != 0) bb.get(o + bb_pos) else 11
        }
    /**
     * Description of the Mean Element Theory. (SGP4,DSST,USM)
     */
    val MEAN_ELEMENT_THEORY : Byte
        get() {
            val o = __offset(12)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    /**
     * Array of MPE records
     */
    fun RECORDS(j: Int) : MPE? = RECORDS(MPE(), j)
    fun RECORDS(obj: MPE, j: Int) : MPE? {
        val o = __offset(14)
        return if (o != 0) {
            obj.__assign(__indirect(__vector(o) + j * 4), bb)
        } else {
            null
        }
    }
    val RECORDSLength : Int
        get() {
            val o = __offset(14); return if (o != 0) __vector_len(o) else 0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_3_3()
        fun getRootAsMPECOLLECTION(_bb: ByteBuffer): MPECOLLECTION = getRootAsMPECOLLECTION(_bb, MPECOLLECTION())
        fun getRootAsMPECOLLECTION(_bb: ByteBuffer, obj: MPECOLLECTION): MPECOLLECTION {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createMPECOLLECTION(builder: FlatBufferBuilder, CLASSIFICATION_TYPEOffset: Int, REF_FRAME: Byte, REF_FRAME_EPOCH: Double, TIME_SYSTEM: Byte, MEAN_ELEMENT_THEORY: Byte, RECORDSOffset: Int) : Int {
            builder.startTable(6)
            addREF_FRAME_EPOCH(builder, REF_FRAME_EPOCH)
            addRECORDS(builder, RECORDSOffset)
            addCLASSIFICATION_TYPE(builder, CLASSIFICATION_TYPEOffset)
            addMEAN_ELEMENT_THEORY(builder, MEAN_ELEMENT_THEORY)
            addTIME_SYSTEM(builder, TIME_SYSTEM)
            addREF_FRAME(builder, REF_FRAME)
            return endMPECOLLECTION(builder)
        }
        fun startMPECOLLECTION(builder: FlatBufferBuilder) = builder.startTable(6)
        fun addCLASSIFICATION_TYPE(builder: FlatBufferBuilder, CLASSIFICATION_TYPE: Int) = builder.addOffset(0, CLASSIFICATION_TYPE, 0)
        fun addREF_FRAME(builder: FlatBufferBuilder, REF_FRAME: Byte) = builder.addByte(1, REF_FRAME, 9)
        fun addREF_FRAME_EPOCH(builder: FlatBufferBuilder, REF_FRAME_EPOCH: Double) = builder.addDouble(2, REF_FRAME_EPOCH, 0.0)
        fun addTIME_SYSTEM(builder: FlatBufferBuilder, TIME_SYSTEM: Byte) = builder.addByte(3, TIME_SYSTEM, 11)
        fun addMEAN_ELEMENT_THEORY(builder: FlatBufferBuilder, MEAN_ELEMENT_THEORY: Byte) = builder.addByte(4, MEAN_ELEMENT_THEORY, 0)
        fun addRECORDS(builder: FlatBufferBuilder, RECORDS: Int) = builder.addOffset(5, RECORDS, 0)
        fun createRecordsVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startRecordsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun endMPECOLLECTION(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}