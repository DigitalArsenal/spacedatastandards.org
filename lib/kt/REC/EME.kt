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
 * Encrypted Message Envelope
 */
@Suppress("unused")
@kotlin.ExperimentalUnsignedTypes
class EME : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : EME {
        __init(_i, _bb)
        return this
    }
    /**
     * Encrypted data blob, containing the ciphertext of the original plaintext message.
     */
    fun ENCRYPTED_BLOB(j: Int) : UByte {
        val o = __offset(4)
        return if (o != 0) {
            bb.get(__vector(o) + j * 1).toUByte()
        } else {
            0u
        }
    }
    val ENCRYPTED_BLOBLength : Int
        get() {
            val o = __offset(4); return if (o != 0) __vector_len(o) else 0
        }
    val ENCRYPTED_BLOBAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun ENCRYPTED_BLOBInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    /**
     * Temporary public key used for the encryption session, contributing to the derivation of the shared secret.
     */
    val EPHEMERAL_PUBLIC_KEY : String?
        get() {
            val o = __offset(6)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val EPHEMERAL_PUBLIC_KEYAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(6, 1)
    fun EPHEMERAL_PUBLIC_KEYInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 6, 1)
    /**
     * Message Authentication Code to verify the integrity and authenticity of the encrypted message.
     */
    val MAC : String?
        get() {
            val o = __offset(8)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val MACAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(8, 1)
    fun MACInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 8, 1)
    /**
     * Unique value used to ensure that the same plaintext produces a different ciphertext for each encryption.
     */
    val NONCE : String?
        get() {
            val o = __offset(10)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val NONCEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(10, 1)
    fun NONCEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 10, 1)
    /**
     * Additional authentication tag used in some encryption schemes for integrity and authenticity verification.
     */
    val TAG : String?
        get() {
            val o = __offset(12)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val TAGAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(12, 1)
    fun TAGInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 12, 1)
    /**
     * Initialization vector used to introduce randomness in the encryption process, enhancing security.
     */
    val IV : String?
        get() {
            val o = __offset(14)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val IVAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(14, 1)
    fun IVInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 14, 1)
    /**
     * Identifier for the public key used, aiding in recipient key management and message decryption.
     */
    val PUBLIC_KEY_IDENTIFIER : String?
        get() {
            val o = __offset(16)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val PUBLIC_KEY_IDENTIFIERAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(16, 1)
    fun PUBLIC_KEY_IDENTIFIERInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 16, 1)
    /**
     * Specifies the set of cryptographic algorithms used in the encryption process.
     */
    val CIPHER_SUITE : String?
        get() {
            val o = __offset(18)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val CIPHER_SUITEAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(18, 1)
    fun CIPHER_SUITEInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 18, 1)
    /**
     * Parameters for the Key Derivation Function, guiding the process of deriving keys from the shared secret.
     */
    val KDF_PARAMETERS : String?
        get() {
            val o = __offset(20)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val KDF_PARAMETERSAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(20, 1)
    fun KDF_PARAMETERSInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 20, 1)
    /**
     * Parameters defining specific settings for the encryption algorithm, such as block size or operation mode.
     */
    val ENCRYPTION_ALGORITHM_PARAMETERS : String?
        get() {
            val o = __offset(22)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val ENCRYPTION_ALGORITHM_PARAMETERSAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(22, 1)
    fun ENCRYPTION_ALGORITHM_PARAMETERSInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 22, 1)
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_3_3()
        fun getRootAsEME(_bb: ByteBuffer): EME = getRootAsEME(_bb, EME())
        fun getRootAsEME(_bb: ByteBuffer, obj: EME): EME {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun EMEBufferHasIdentifier(_bb: ByteBuffer) : Boolean = __has_identifier(_bb, "$EME")
        fun createEME(builder: FlatBufferBuilder, ENCRYPTED_BLOBOffset: Int, EPHEMERAL_PUBLIC_KEYOffset: Int, MACOffset: Int, NONCEOffset: Int, TAGOffset: Int, IVOffset: Int, PUBLIC_KEY_IDENTIFIEROffset: Int, CIPHER_SUITEOffset: Int, KDF_PARAMETERSOffset: Int, ENCRYPTION_ALGORITHM_PARAMETERSOffset: Int) : Int {
            builder.startTable(10)
            addENCRYPTION_ALGORITHM_PARAMETERS(builder, ENCRYPTION_ALGORITHM_PARAMETERSOffset)
            addKDF_PARAMETERS(builder, KDF_PARAMETERSOffset)
            addCIPHER_SUITE(builder, CIPHER_SUITEOffset)
            addPUBLIC_KEY_IDENTIFIER(builder, PUBLIC_KEY_IDENTIFIEROffset)
            addIV(builder, IVOffset)
            addTAG(builder, TAGOffset)
            addNONCE(builder, NONCEOffset)
            addMAC(builder, MACOffset)
            addEPHEMERAL_PUBLIC_KEY(builder, EPHEMERAL_PUBLIC_KEYOffset)
            addENCRYPTED_BLOB(builder, ENCRYPTED_BLOBOffset)
            return endEME(builder)
        }
        fun startEME(builder: FlatBufferBuilder) = builder.startTable(10)
        fun addENCRYPTED_BLOB(builder: FlatBufferBuilder, ENCRYPTED_BLOB: Int) = builder.addOffset(0, ENCRYPTED_BLOB, 0)
        fun createEncryptedBlobVector(builder: FlatBufferBuilder, data: UByteArray) : Int {
            builder.startVector(1, data.size, 1)
            for (i in data.size - 1 downTo 0) {
                builder.addByte(data[i].toByte())
            }
            return builder.endVector()
        }
        fun startEncryptedBlobVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(1, numElems, 1)
        fun addEPHEMERAL_PUBLIC_KEY(builder: FlatBufferBuilder, EPHEMERAL_PUBLIC_KEY: Int) = builder.addOffset(1, EPHEMERAL_PUBLIC_KEY, 0)
        fun addMAC(builder: FlatBufferBuilder, MAC: Int) = builder.addOffset(2, MAC, 0)
        fun addNONCE(builder: FlatBufferBuilder, NONCE: Int) = builder.addOffset(3, NONCE, 0)
        fun addTAG(builder: FlatBufferBuilder, TAG: Int) = builder.addOffset(4, TAG, 0)
        fun addIV(builder: FlatBufferBuilder, IV: Int) = builder.addOffset(5, IV, 0)
        fun addPUBLIC_KEY_IDENTIFIER(builder: FlatBufferBuilder, PUBLIC_KEY_IDENTIFIER: Int) = builder.addOffset(6, PUBLIC_KEY_IDENTIFIER, 0)
        fun addCIPHER_SUITE(builder: FlatBufferBuilder, CIPHER_SUITE: Int) = builder.addOffset(7, CIPHER_SUITE, 0)
        fun addKDF_PARAMETERS(builder: FlatBufferBuilder, KDF_PARAMETERS: Int) = builder.addOffset(8, KDF_PARAMETERS, 0)
        fun addENCRYPTION_ALGORITHM_PARAMETERS(builder: FlatBufferBuilder, ENCRYPTION_ALGORITHM_PARAMETERS: Int) = builder.addOffset(9, ENCRYPTION_ALGORITHM_PARAMETERS, 0)
        fun endEME(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
        fun finishEMEBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finish(offset, "$EME")
        fun finishSizePrefixedEMEBuffer(builder: FlatBufferBuilder, offset: Int) = builder.finishSizePrefixed(offset, "$EME")
    }
}