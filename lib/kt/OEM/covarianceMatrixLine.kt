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
 * Position/Velocity Covariance Matrix Line
 */
@Suppress("unused")
class covarianceMatrixLine : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : covarianceMatrixLine {
        __init(_i, _bb)
        return this
    }
    /**
     * Epoch
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
     * Covariance matrix [1,1] km**2
     */
    val CX_X : Double
        get() {
            val o = __offset(6)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [2,1] km**2
     */
    val CY_X : Double
        get() {
            val o = __offset(8)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [2,2] km**2
     */
    val CY_Y : Double
        get() {
            val o = __offset(10)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [3,1] km**2
     */
    val CZ_X : Double
        get() {
            val o = __offset(12)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [3,2] km**2
     */
    val CZ_Y : Double
        get() {
            val o = __offset(14)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [3,3] km**2
     */
    val CZ_Z : Double
        get() {
            val o = __offset(16)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [4,1] km**2/s
     */
    val CX_DOT_X : Double
        get() {
            val o = __offset(18)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [4,2] km**2/s
     */
    val CX_DOT_Y : Double
        get() {
            val o = __offset(20)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [4,3] km**2/s
     */
    val CX_DOT_Z : Double
        get() {
            val o = __offset(22)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [4,4] km**2/s**2
     */
    val CX_DOT_X_DOT : Double
        get() {
            val o = __offset(24)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [5,1] km**2/s
     */
    val CY_DOT_X : Double
        get() {
            val o = __offset(26)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [5,2] km**2/s
     */
    val CY_DOT_Y : Double
        get() {
            val o = __offset(28)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [5,3] km**2/s
     */
    val CY_DOT_Z : Double
        get() {
            val o = __offset(30)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [5,4] km**2/s**2
     */
    val CY_DOT_X_DOT : Double
        get() {
            val o = __offset(32)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [5,5] km**2/s**2
     */
    val CY_DOT_Y_DOT : Double
        get() {
            val o = __offset(34)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [6,1] km**2/s
     */
    val CZ_DOT_X : Double
        get() {
            val o = __offset(36)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [6,2] km**2/s
     */
    val CZ_DOT_Y : Double
        get() {
            val o = __offset(38)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [6,3] km**2/s
     */
    val CZ_DOT_Z : Double
        get() {
            val o = __offset(40)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [6,4] km**2/s**2
     */
    val CZ_DOT_X_DOT : Double
        get() {
            val o = __offset(42)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [6,5] km**2/s**2
     */
    val CZ_DOT_Y_DOT : Double
        get() {
            val o = __offset(44)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    /**
     * Covariance matrix [6,6] km**2/s**2
     */
    val CZ_DOT_Z_DOT : Double
        get() {
            val o = __offset(46)
            return if(o != 0) bb.getDouble(o + bb_pos) else 0.0
        }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_24_3_25()
        fun getRootAscovarianceMatrixLine(_bb: ByteBuffer): covarianceMatrixLine = getRootAscovarianceMatrixLine(_bb, covarianceMatrixLine())
        fun getRootAscovarianceMatrixLine(_bb: ByteBuffer, obj: covarianceMatrixLine): covarianceMatrixLine {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createcovarianceMatrixLine(builder: FlatBufferBuilder, EPOCHOffset: Int, CX_X: Double, CY_X: Double, CY_Y: Double, CZ_X: Double, CZ_Y: Double, CZ_Z: Double, CX_DOT_X: Double, CX_DOT_Y: Double, CX_DOT_Z: Double, CX_DOT_X_DOT: Double, CY_DOT_X: Double, CY_DOT_Y: Double, CY_DOT_Z: Double, CY_DOT_X_DOT: Double, CY_DOT_Y_DOT: Double, CZ_DOT_X: Double, CZ_DOT_Y: Double, CZ_DOT_Z: Double, CZ_DOT_X_DOT: Double, CZ_DOT_Y_DOT: Double, CZ_DOT_Z_DOT: Double) : Int {
            builder.startTable(22)
            addCZ_DOT_Z_DOT(builder, CZ_DOT_Z_DOT)
            addCZ_DOT_Y_DOT(builder, CZ_DOT_Y_DOT)
            addCZ_DOT_X_DOT(builder, CZ_DOT_X_DOT)
            addCZ_DOT_Z(builder, CZ_DOT_Z)
            addCZ_DOT_Y(builder, CZ_DOT_Y)
            addCZ_DOT_X(builder, CZ_DOT_X)
            addCY_DOT_Y_DOT(builder, CY_DOT_Y_DOT)
            addCY_DOT_X_DOT(builder, CY_DOT_X_DOT)
            addCY_DOT_Z(builder, CY_DOT_Z)
            addCY_DOT_Y(builder, CY_DOT_Y)
            addCY_DOT_X(builder, CY_DOT_X)
            addCX_DOT_X_DOT(builder, CX_DOT_X_DOT)
            addCX_DOT_Z(builder, CX_DOT_Z)
            addCX_DOT_Y(builder, CX_DOT_Y)
            addCX_DOT_X(builder, CX_DOT_X)
            addCZ_Z(builder, CZ_Z)
            addCZ_Y(builder, CZ_Y)
            addCZ_X(builder, CZ_X)
            addCY_Y(builder, CY_Y)
            addCY_X(builder, CY_X)
            addCX_X(builder, CX_X)
            addEPOCH(builder, EPOCHOffset)
            return endcovarianceMatrixLine(builder)
        }
        fun startcovarianceMatrixLine(builder: FlatBufferBuilder) = builder.startTable(22)
        fun addEPOCH(builder: FlatBufferBuilder, EPOCH: Int) = builder.addOffset(0, EPOCH, 0)
        fun addCX_X(builder: FlatBufferBuilder, CX_X: Double) = builder.addDouble(1, CX_X, 0.0)
        fun addCY_X(builder: FlatBufferBuilder, CY_X: Double) = builder.addDouble(2, CY_X, 0.0)
        fun addCY_Y(builder: FlatBufferBuilder, CY_Y: Double) = builder.addDouble(3, CY_Y, 0.0)
        fun addCZ_X(builder: FlatBufferBuilder, CZ_X: Double) = builder.addDouble(4, CZ_X, 0.0)
        fun addCZ_Y(builder: FlatBufferBuilder, CZ_Y: Double) = builder.addDouble(5, CZ_Y, 0.0)
        fun addCZ_Z(builder: FlatBufferBuilder, CZ_Z: Double) = builder.addDouble(6, CZ_Z, 0.0)
        fun addCX_DOT_X(builder: FlatBufferBuilder, CX_DOT_X: Double) = builder.addDouble(7, CX_DOT_X, 0.0)
        fun addCX_DOT_Y(builder: FlatBufferBuilder, CX_DOT_Y: Double) = builder.addDouble(8, CX_DOT_Y, 0.0)
        fun addCX_DOT_Z(builder: FlatBufferBuilder, CX_DOT_Z: Double) = builder.addDouble(9, CX_DOT_Z, 0.0)
        fun addCX_DOT_X_DOT(builder: FlatBufferBuilder, CX_DOT_X_DOT: Double) = builder.addDouble(10, CX_DOT_X_DOT, 0.0)
        fun addCY_DOT_X(builder: FlatBufferBuilder, CY_DOT_X: Double) = builder.addDouble(11, CY_DOT_X, 0.0)
        fun addCY_DOT_Y(builder: FlatBufferBuilder, CY_DOT_Y: Double) = builder.addDouble(12, CY_DOT_Y, 0.0)
        fun addCY_DOT_Z(builder: FlatBufferBuilder, CY_DOT_Z: Double) = builder.addDouble(13, CY_DOT_Z, 0.0)
        fun addCY_DOT_X_DOT(builder: FlatBufferBuilder, CY_DOT_X_DOT: Double) = builder.addDouble(14, CY_DOT_X_DOT, 0.0)
        fun addCY_DOT_Y_DOT(builder: FlatBufferBuilder, CY_DOT_Y_DOT: Double) = builder.addDouble(15, CY_DOT_Y_DOT, 0.0)
        fun addCZ_DOT_X(builder: FlatBufferBuilder, CZ_DOT_X: Double) = builder.addDouble(16, CZ_DOT_X, 0.0)
        fun addCZ_DOT_Y(builder: FlatBufferBuilder, CZ_DOT_Y: Double) = builder.addDouble(17, CZ_DOT_Y, 0.0)
        fun addCZ_DOT_Z(builder: FlatBufferBuilder, CZ_DOT_Z: Double) = builder.addDouble(18, CZ_DOT_Z, 0.0)
        fun addCZ_DOT_X_DOT(builder: FlatBufferBuilder, CZ_DOT_X_DOT: Double) = builder.addDouble(19, CZ_DOT_X_DOT, 0.0)
        fun addCZ_DOT_Y_DOT(builder: FlatBufferBuilder, CZ_DOT_Y_DOT: Double) = builder.addDouble(20, CZ_DOT_Y_DOT, 0.0)
        fun addCZ_DOT_Z_DOT(builder: FlatBufferBuilder, CZ_DOT_Z_DOT: Double) = builder.addDouble(21, CZ_DOT_Z_DOT, 0.0)
        fun endcovarianceMatrixLine(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
