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
 * Atmospheric Model Message
 */
@Suppress("unused")
class ATM : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : ATM {
        __init(_i, _bb)
        return this
    }
    /**
     * Canonical model family
     */
    val MODEL : Byte
        get() {
            val o = __offset(4)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    /**
     * Four-digit year identifying the model version (e.g., 1970, 2008, 2020)
     */
    val YEAR : Int
        get() {
            val o = __offset(6)
            return if(o != 0) bb.getInt(o + bb_pos) else 0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_24_3_25()
        fun getRootAsATM(_bb: ByteBuffer): ATM = getRootAsATM(_bb, ATM())
        fun getRootAsATM(_bb: ByteBuffer, obj: ATM): ATM {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun ATMBufferHasIdentifier(_bb: ByteBuffer) : Boolean = __has_identifier(_bb, "$ATM")
        fun createATM(builder: FlatBufferBuilder, MODEL: Byte, YEAR: Int) : Int {
            builder.startTable(2)
            addYEAR(builder, YEAR)
            addMODEL(builder, MODEL)
            return endATM(builder)
        }
        fun startATM(builder: FlatBufferBuilder) = builder.startTable(2)
        fun addMODEL(builder: FlatBufferBuilder, MODEL: Byte) = builder.addByte(0, MODEL, 0)
        fun addYEAR(builder: FlatBufferBuilder, YEAR: Int) = builder.addInt(1, YEAR, 0)
        fun endATM(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
        fun finishATMBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finish(offset, "$ATM")
        fun finishSizePrefixedATMBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finishSizePrefixed(offset, "$ATM")
    }
}
