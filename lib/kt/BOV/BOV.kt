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
 * Burn Out Vector Message
 */
@Suppress("unused")
@kotlin.ExperimentalUnsignedTypes
class BOV : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : BOV {
        __init(_i, _bb)
        return this
    }
    val E_COORDINATE : Double
        get() {
            val o = __offset(4)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val F_COORDINATE : Double
        get() {
            val o = __offset(6)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val G_COORDINATE : Double
        get() {
            val o = __offset(8)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val E_DOT : Double
        get() {
            val o = __offset(10)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val F_DOT : Double
        get() {
            val o = __offset(12)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val G_DOT : Double
        get() {
            val o = __offset(14)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    val EPOCH_TIME : String?
        get() {
            val o = __offset(16)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val EPOCH_TIMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(16, 1)
    fun EPOCH_TIMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 16, 1)
    val TIME_FROM_LAUNCH : Double
        get() {
            val o = __offset(18)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_3_3()
        fun getRootAsBOV(_bb: ByteBuffer): BOV = getRootAsBOV(_bb, BOV())
        fun getRootAsBOV(_bb: ByteBuffer, obj: BOV): BOV {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun BOVBufferHasIdentifier(_bb: ByteBuffer) : Boolean = __has_identifier(_bb, "$BOV")
        fun createBOV(builder: FlatBufferBuilder, E_COORDINATE: Double, F_COORDINATE: Double, G_COORDINATE: Double, E_DOT: Double, F_DOT: Double, G_DOT: Double, EPOCH_TIMEOffset: Int, TIME_FROM_LAUNCH: Double) : Int {
            builder.startTable(8)
            addTIME_FROM_LAUNCH(builder, TIME_FROM_LAUNCH)
            addG_DOT(builder, G_DOT)
            addF_DOT(builder, F_DOT)
            addE_DOT(builder, E_DOT)
            addG_COORDINATE(builder, G_COORDINATE)
            addF_COORDINATE(builder, F_COORDINATE)
            addE_COORDINATE(builder, E_COORDINATE)
            addEPOCH_TIME(builder, EPOCH_TIMEOffset)
            return endBOV(builder)
        }
        fun startBOV(builder: FlatBufferBuilder) = builder.startTable(8)
        fun addE_COORDINATE(builder: FlatBufferBuilder, E_COORDINATE: Double) = builder.addDouble(0, E_COORDINATE, 0.0)
        fun addF_COORDINATE(builder: FlatBufferBuilder, F_COORDINATE: Double) = builder.addDouble(1, F_COORDINATE, 0.0)
        fun addG_COORDINATE(builder: FlatBufferBuilder, G_COORDINATE: Double) = builder.addDouble(2, G_COORDINATE, 0.0)
        fun addE_DOT(builder: FlatBufferBuilder, E_DOT: Double) = builder.addDouble(3, E_DOT, 0.0)
        fun addF_DOT(builder: FlatBufferBuilder, F_DOT: Double) = builder.addDouble(4, F_DOT, 0.0)
        fun addG_DOT(builder: FlatBufferBuilder, G_DOT: Double) = builder.addDouble(5, G_DOT, 0.0)
        fun addEPOCH_TIME(builder: FlatBufferBuilder, EPOCH_TIME: Int) = builder.addOffset(6, EPOCH_TIME, 0)
        fun addTIME_FROM_LAUNCH(builder: FlatBufferBuilder, TIME_FROM_LAUNCH: Double) = builder.addDouble(7, TIME_FROM_LAUNCH, 0.0)
        fun endBOV(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
        fun finishBOVBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finish(offset, "$BOV")
        fun finishSizePrefixedBOVBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finishSizePrefixed(offset, "$BOV")
    }
}