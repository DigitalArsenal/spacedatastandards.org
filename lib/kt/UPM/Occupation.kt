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
class Occupation : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : Occupation {
        __init(_i, _bb)
        return this
    }
    val NAME : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val NAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun NAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_3_3()
        fun getRootAsOccupation(_bb: ByteBuffer): Occupation = getRootAsOccupation(_bb, Occupation())
        fun getRootAsOccupation(_bb: ByteBuffer, obj: Occupation): Occupation {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createOccupation(builder: FlatBufferBuilder, NAMEOffset: Int) : Int {
            builder.startTable(1)
            addNAME(builder, NAMEOffset)
            return endOccupation(builder)
        }
        fun startOccupation(builder: FlatBufferBuilder) = builder.startTable(1)
        fun addNAME(builder: FlatBufferBuilder, NAME: Int) = builder.addOffset(0, NAME, 0)
        fun endOccupation(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}