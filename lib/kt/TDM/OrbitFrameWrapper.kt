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
class OrbitFrameWrapper : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : OrbitFrameWrapper {
        __init(_i, _bb)
        return this
    }
    val frame : Byte
        get() {
            val o = __offset(4)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_24_3_25()
        fun getRootAsOrbitFrameWrapper(_bb: ByteBuffer): OrbitFrameWrapper = getRootAsOrbitFrameWrapper(_bb, OrbitFrameWrapper())
        fun getRootAsOrbitFrameWrapper(_bb: ByteBuffer, obj: OrbitFrameWrapper): OrbitFrameWrapper {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createOrbitFrameWrapper(builder: FlatBufferBuilder, frame: Byte) : Int {
            builder.startTable(1)
            addFrame(builder, frame)
            return endOrbitFrameWrapper(builder)
        }
        fun startOrbitFrameWrapper(builder: FlatBufferBuilder) = builder.startTable(1)
        fun addFrame(builder: FlatBufferBuilder, frame: Byte) = builder.addByte(0, frame, 0)
        fun endOrbitFrameWrapper(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
