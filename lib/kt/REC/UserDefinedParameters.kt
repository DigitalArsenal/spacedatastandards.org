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
class UserDefinedParameters : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : UserDefinedParameters {
        __init(_i, _bb)
        return this
    }
    /**
     * Name of the user-defined parameter.
     */
    val PARAM_NAME : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val PARAM_NAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun PARAM_NAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    /**
     * Value of the user-defined parameter.
     */
    val PARAM_VALUE : String?
        get() {
            val o = __offset(6)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val PARAM_VALUEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(6, 1)
    fun PARAM_VALUEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 6, 1)
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_24_3_25()
        fun getRootAsUserDefinedParameters(_bb: ByteBuffer): UserDefinedParameters = getRootAsUserDefinedParameters(_bb, UserDefinedParameters())
        fun getRootAsUserDefinedParameters(_bb: ByteBuffer, obj: UserDefinedParameters): UserDefinedParameters {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createUserDefinedParameters(builder: FlatBufferBuilder, PARAM_NAMEOffset: Int, PARAM_VALUEOffset: Int) : Int {
            builder.startTable(2)
            addPARAM_VALUE(builder, PARAM_VALUEOffset)
            addPARAM_NAME(builder, PARAM_NAMEOffset)
            return endUserDefinedParameters(builder)
        }
        fun startUserDefinedParameters(builder: FlatBufferBuilder) = builder.startTable(2)
        fun addPARAM_NAME(builder: FlatBufferBuilder, PARAM_NAME: Int) = builder.addOffset(0, PARAM_NAME, 0)
        fun addPARAM_VALUE(builder: FlatBufferBuilder, PARAM_VALUE: Int) = builder.addOffset(1, PARAM_VALUE, 0)
        fun endUserDefinedParameters(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}