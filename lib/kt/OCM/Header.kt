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
class Header : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : Header {
        __init(_i, _bb)
        return this
    }
    /**
     * Format version in the form of 'x.y', where 'y' is incremented for minor changes, and 'x' for major changes.
     */
    val CCSDS_OCM_VERS : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CCSDS_OCM_VERSAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun CCSDS_OCM_VERSInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    /**
     * Comments (a contiguous set of one or more comment lines may be provided immediately after the version number).
     */
    fun COMMENT(j: Int) : String? {
        val o = __offset(6)
        return if (o != 0) {
            __string(__vector(o) + j * 4)
        } else {
            null
        }
    }
    val COMMENTLength : Int
        get() {
            val o = __offset(6); return if (o != 0) __vector_len(o) else 0
        }
    /**
     * User-defined free-text message classification/caveats of this OCM.
     */
    val CLASSIFICATION : String?
        get() {
            val o = __offset(8)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CLASSIFICATIONAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(8, 1)
    fun CLASSIFICATIONInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 8, 1)
    /**
     * File creation date/time in UTC.
     */
    val CREATION_DATE : String?
        get() {
            val o = __offset(10)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CREATION_DATEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(10, 1)
    fun CREATION_DATEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 10, 1)
    /**
     * Creating agency or operator.
     */
    val ORIGINATOR : String?
        get() {
            val o = __offset(12)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val ORIGINATORAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(12, 1)
    fun ORIGINATORInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 12, 1)
    /**
     * Free-text field containing an ID that uniquely identifies a message from this originator.
     */
    val MESSAGE_ID : String?
        get() {
            val o = __offset(14)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val MESSAGE_IDAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(14, 1)
    fun MESSAGE_IDInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 14, 1)
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_24_3_25()
        fun getRootAsHeader(_bb: ByteBuffer): Header = getRootAsHeader(_bb, Header())
        fun getRootAsHeader(_bb: ByteBuffer, obj: Header): Header {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createHeader(builder: FlatBufferBuilder, CCSDS_OCM_VERSOffset: Int, COMMENTOffset: Int, CLASSIFICATIONOffset: Int, CREATION_DATEOffset: Int, ORIGINATOROffset: Int, MESSAGE_IDOffset: Int) : Int {
            builder.startTable(6)
            addMESSAGE_ID(builder, MESSAGE_IDOffset)
            addORIGINATOR(builder, ORIGINATOROffset)
            addCREATION_DATE(builder, CREATION_DATEOffset)
            addCLASSIFICATION(builder, CLASSIFICATIONOffset)
            addCOMMENT(builder, COMMENTOffset)
            addCCSDS_OCM_VERS(builder, CCSDS_OCM_VERSOffset)
            return endHeader(builder)
        }
        fun startHeader(builder: FlatBufferBuilder) = builder.startTable(6)
        fun addCCSDS_OCM_VERS(builder: FlatBufferBuilder, CCSDS_OCM_VERS: Int) = builder.addOffset(0, CCSDS_OCM_VERS, 0)
        fun addCOMMENT(builder: FlatBufferBuilder, COMMENT: Int) = builder.addOffset(1, COMMENT, 0)
        fun createCommentVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startCommentVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addCLASSIFICATION(builder: FlatBufferBuilder, CLASSIFICATION: Int) = builder.addOffset(2, CLASSIFICATION, 0)
        fun addCREATION_DATE(builder: FlatBufferBuilder, CREATION_DATE: Int) = builder.addOffset(3, CREATION_DATE, 0)
        fun addORIGINATOR(builder: FlatBufferBuilder, ORIGINATOR: Int) = builder.addOffset(4, ORIGINATOR, 0)
        fun addMESSAGE_ID(builder: FlatBufferBuilder, MESSAGE_ID: Int) = builder.addOffset(5, MESSAGE_ID, 0)
        fun endHeader(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
