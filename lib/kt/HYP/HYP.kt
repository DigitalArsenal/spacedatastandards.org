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
 * Hypothesis Message
 */
@Suppress("unused")
@kotlin.ExperimentalUnsignedTypes
class HYP : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : HYP {
        __init(_i, _bb)
        return this
    }
    /**
     * Space Objects Involved
     */
    fun CAT_IDS(j: Int) : String? {
        val o = __offset(4)
        return if (o != 0) {
            __string(__vector(o) + j * 4)
        } else {
            null
        }
    }
    val CAT_IDSLength : Int
        get() {
            val o = __offset(4); return if (o != 0) __vector_len(o) else 0
        }
    /**
     * Space Objects Involved
     */
    fun SIT_IDS(j: Int) : String? {
        val o = __offset(6)
        return if (o != 0) {
            __string(__vector(o) + j * 4)
        } else {
            null
        }
    }
    val SIT_IDSLength : Int
        get() {
            val o = __offset(6); return if (o != 0) __vector_len(o) else 0
        }
    /**
     * Name of the hypothesis
     */
    val NAME : String?
        get() {
            val o = __offset(8)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val NAMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(8, 1)
    fun NAMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 8, 1)
    /**
     * Category of the hypothesis
     */
    val CATEGORY : String?
        get() {
            val o = __offset(10)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CATEGORYAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(10, 1)
    fun CATEGORYInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 10, 1)
    /**
     * Row indicators for the hypothesis matrix
     */
    fun ROW_INDICATORS(j: Int) : String? {
        val o = __offset(12)
        return if (o != 0) {
            __string(__vector(o) + j * 4)
        } else {
            null
        }
    }
    val ROW_INDICATORSLength : Int
        get() {
            val o = __offset(12); return if (o != 0) __vector_len(o) else 0
        }
    /**
     * Column indicators for the hypothesis matrix
     */
    fun COL_INDICATORS(j: Int) : String? {
        val o = __offset(14)
        return if (o != 0) {
            __string(__vector(o) + j * 4)
        } else {
            null
        }
    }
    val COL_INDICATORSLength : Int
        get() {
            val o = __offset(14); return if (o != 0) __vector_len(o) else 0
        }
    /**
     * Matrix data as a boolean array in row major format; if overflow, adds additional rows
     */
    fun MATRIX(j: Int) : Boolean {
        val o = __offset(16)
        return if (o != 0) {
            0.toByte() != bb.get(__vector(o) + j * 1)
        } else {
            false
        }
    }
    val MATRIXLength : Int
        get() {
            val o = __offset(16); return if (o != 0) __vector_len(o) else 0
        }
    val MATRIXAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(16, 1)
    fun MATRIXInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 16, 1)
    /**
     * Scores for objects
     */
    fun SCORE(j: Int) : Score? = SCORE(Score(), j)
    fun SCORE(obj: Score, j: Int) : Score? {
        val o = __offset(18)
        return if (o != 0) {
            obj.__assign(__indirect(__vector(o) + j * 4), bb)
        } else {
            null
        }
    }
    val SCORELength : Int
        get() {
            val o = __offset(18); return if (o != 0) __vector_len(o) else 0
        }
    /**
     * Analysis methodology used to form the hypothesis
     */
    val ANALYSIS_METHOD : String?
        get() {
            val o = __offset(20)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val ANALYSIS_METHODAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(20, 1)
    fun ANALYSIS_METHODInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 20, 1)
    val EVENT_START_TIME : String?
        get() {
            val o = __offset(22)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val EVENT_START_TIMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(22, 1)
    fun EVENT_START_TIMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 22, 1)
    val EVENT_END_TIME : String?
        get() {
            val o = __offset(24)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val EVENT_END_TIMEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(24, 1)
    fun EVENT_END_TIMEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 24, 1)
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_3_3()
        fun getRootAsHYP(_bb: ByteBuffer): HYP = getRootAsHYP(_bb, HYP())
        fun getRootAsHYP(_bb: ByteBuffer, obj: HYP): HYP {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun HYPBufferHasIdentifier(_bb: ByteBuffer) : Boolean = __has_identifier(_bb, "$HYP")
        fun createHYP(builder: FlatBufferBuilder, CAT_IDSOffset: Int, SIT_IDSOffset: Int, NAMEOffset: Int, CATEGORYOffset: Int, ROW_INDICATORSOffset: Int, COL_INDICATORSOffset: Int, MATRIXOffset: Int, SCOREOffset: Int, ANALYSIS_METHODOffset: Int, EVENT_START_TIMEOffset: Int, EVENT_END_TIMEOffset: Int) : Int {
            builder.startTable(11)
            addEVENT_END_TIME(builder, EVENT_END_TIMEOffset)
            addEVENT_START_TIME(builder, EVENT_START_TIMEOffset)
            addANALYSIS_METHOD(builder, ANALYSIS_METHODOffset)
            addSCORE(builder, SCOREOffset)
            addMATRIX(builder, MATRIXOffset)
            addCOL_INDICATORS(builder, COL_INDICATORSOffset)
            addROW_INDICATORS(builder, ROW_INDICATORSOffset)
            addCATEGORY(builder, CATEGORYOffset)
            addNAME(builder, NAMEOffset)
            addSIT_IDS(builder, SIT_IDSOffset)
            addCAT_IDS(builder, CAT_IDSOffset)
            return endHYP(builder)
        }
        fun startHYP(builder: FlatBufferBuilder) = builder.startTable(11)
        fun addCAT_IDS(builder: FlatBufferBuilder, CAT_IDS: Int) = builder.addOffset(0, CAT_IDS, 0)
        fun createCatIdsVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startCatIdsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addSIT_IDS(builder: FlatBufferBuilder, SIT_IDS: Int) = builder.addOffset(1, SIT_IDS, 0)
        fun createSitIdsVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startSitIdsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addNAME(builder: FlatBufferBuilder, NAME: Int) = builder.addOffset(2, NAME, 0)
        fun addCATEGORY(builder: FlatBufferBuilder, CATEGORY: Int) = builder.addOffset(3, CATEGORY, 0)
        fun addROW_INDICATORS(builder: FlatBufferBuilder, ROW_INDICATORS: Int) = builder.addOffset(4, ROW_INDICATORS, 0)
        fun createRowIndicatorsVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startRowIndicatorsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addCOL_INDICATORS(builder: FlatBufferBuilder, COL_INDICATORS: Int) = builder.addOffset(5, COL_INDICATORS, 0)
        fun createColIndicatorsVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startColIndicatorsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addMATRIX(builder: FlatBufferBuilder, MATRIX: Int) = builder.addOffset(6, MATRIX, 0)
        fun createMatrixVector(builder: FlatBufferBuilder, data: BooleanArray) : Int {
            builder.startVector(1, data.size, 1)
            for (i in data.size - 1 downTo 0) {
                builder.addBoolean(data[i])
            }
            return builder.endVector()
        }
        fun startMatrixVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(1, numElems, 1)
        fun addSCORE(builder: FlatBufferBuilder, SCORE: Int) = builder.addOffset(7, SCORE, 0)
        fun createScoreVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startScoreVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addANALYSIS_METHOD(builder: FlatBufferBuilder, ANALYSIS_METHOD: Int) = builder.addOffset(8, ANALYSIS_METHOD, 0)
        fun addEVENT_START_TIME(builder: FlatBufferBuilder, EVENT_START_TIME: Int) = builder.addOffset(9, EVENT_START_TIME, 0)
        fun addEVENT_END_TIME(builder: FlatBufferBuilder, EVENT_END_TIME: Int) = builder.addOffset(10, EVENT_END_TIME, 0)
        fun endHYP(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
        fun finishHYPBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finish(offset, "$HYP")
        fun finishSizePrefixedHYPBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finishSizePrefixed(offset, "$HYP")
    }
}