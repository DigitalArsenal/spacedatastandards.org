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
 * Collection of Standard Records
 */
@Suppress("unused")
class REC : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : REC {
        __init(_i, _bb)
        return this
    }
    val version : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val versionAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun versionInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    fun RECORDS(j: Int) : Record? = RECORDS(Record(), j)
    fun RECORDS(obj: Record, j: Int) : Record? {
        val o = __offset(6)
        return if (o != 0) {
            obj.__assign(__indirect(__vector(o) + j * 4), bb)
        } else {
            null
        }
    }
    val RECORDSLength : Int
        get() {
            val o = __offset(6); return if (o != 0) __vector_len(o) else 0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_24_3_25()
        fun getRootAsREC(_bb: ByteBuffer): REC = getRootAsREC(_bb, REC())
        fun getRootAsREC(_bb: ByteBuffer, obj: REC): REC {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun RECBufferHasIdentifier(_bb: ByteBuffer) : Boolean = __has_identifier(_bb, "$REC")
        fun createREC(builder: FlatBufferBuilder, versionOffset: Int, RECORDSOffset: Int) : Int {
            builder.startTable(2)
            addRECORDS(builder, RECORDSOffset)
            addVersion(builder, versionOffset)
            return endREC(builder)
        }
        fun startREC(builder: FlatBufferBuilder) = builder.startTable(2)
        fun addVersion(builder: FlatBufferBuilder, version: Int) = builder.addOffset(0, version, 0)
        fun addRECORDS(builder: FlatBufferBuilder, RECORDS: Int) = builder.addOffset(1, RECORDS, 0)
        fun createRecordsVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startRecordsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun endREC(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
        fun finishRECBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finish(offset, "$REC")
        fun finishSizePrefixedRECBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finishSizePrefixed(offset, "$REC")
    }
}
