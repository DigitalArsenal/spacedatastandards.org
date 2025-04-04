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
class StateVector : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : StateVector {
        __init(_i, _bb)
        return this
    }
    /**
     * Epoch of the state vector.
     */
    val EPOCH : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val EPOCHAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun EPOCHInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    /**
     * X component of position in the specified reference frame.
     */
    val X : Double
        get() {
            val o = __offset(6)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Y component of position.
     */
    val Y : Double
        get() {
            val o = __offset(8)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Z component of position.
     */
    val Z : Double
        get() {
            val o = __offset(10)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * X component of velocity.
     */
    val X_DOT : Double
        get() {
            val o = __offset(12)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Y component of velocity.
     */
    val Y_DOT : Double
        get() {
            val o = __offset(14)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Z component of velocity.
     */
    val Z_DOT : Double
        get() {
            val o = __offset(16)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * X component of acceleration.
     */
    val X_DDOT : Double
        get() {
            val o = __offset(18)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Y component of acceleration.
     */
    val Y_DDOT : Double
        get() {
            val o = __offset(20)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Z component of acceleration.
     */
    val Z_DDOT : Double
        get() {
            val o = __offset(22)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_24_3_25()
        fun getRootAsStateVector(_bb: ByteBuffer): StateVector = getRootAsStateVector(_bb, StateVector())
        fun getRootAsStateVector(_bb: ByteBuffer, obj: StateVector): StateVector {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createStateVector(builder: FlatBufferBuilder, EPOCHOffset: Int, X: Double, Y: Double, Z: Double, X_DOT: Double, Y_DOT: Double, Z_DOT: Double, X_DDOT: Double, Y_DDOT: Double, Z_DDOT: Double) : Int {
            builder.startTable(10)
            addZ_DDOT(builder, Z_DDOT)
            addY_DDOT(builder, Y_DDOT)
            addX_DDOT(builder, X_DDOT)
            addZ_DOT(builder, Z_DOT)
            addY_DOT(builder, Y_DOT)
            addX_DOT(builder, X_DOT)
            addZ(builder, Z)
            addY(builder, Y)
            addX(builder, X)
            addEPOCH(builder, EPOCHOffset)
            return endStateVector(builder)
        }
        fun startStateVector(builder: FlatBufferBuilder) = builder.startTable(10)
        fun addEPOCH(builder: FlatBufferBuilder, EPOCH: Int) = builder.addOffset(0, EPOCH, 0)
        fun addX(builder: FlatBufferBuilder, X: Double) = builder.addDouble(1, X, 0.0)
        fun addY(builder: FlatBufferBuilder, Y: Double) = builder.addDouble(2, Y, 0.0)
        fun addZ(builder: FlatBufferBuilder, Z: Double) = builder.addDouble(3, Z, 0.0)
        fun addX_DOT(builder: FlatBufferBuilder, X_DOT: Double) = builder.addDouble(4, X_DOT, 0.0)
        fun addY_DOT(builder: FlatBufferBuilder, Y_DOT: Double) = builder.addDouble(5, Y_DOT, 0.0)
        fun addZ_DOT(builder: FlatBufferBuilder, Z_DOT: Double) = builder.addDouble(6, Z_DOT, 0.0)
        fun addX_DDOT(builder: FlatBufferBuilder, X_DDOT: Double) = builder.addDouble(7, X_DDOT, 0.0)
        fun addY_DDOT(builder: FlatBufferBuilder, Y_DDOT: Double) = builder.addDouble(8, Y_DDOT, 0.0)
        fun addZ_DDOT(builder: FlatBufferBuilder, Z_DDOT: Double) = builder.addDouble(9, Z_DDOT, 0.0)
        fun endStateVector(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
