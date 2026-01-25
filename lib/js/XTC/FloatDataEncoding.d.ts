import * as flatbuffers from 'flatbuffers';
import { ByteOrderType } from './ByteOrderType.js';
import { ContextCalibrator, ContextCalibratorT } from './ContextCalibrator.js';
import { FloatEncodingType } from './FloatEncodingType.js';
/**
 * Float data encoding specification
 */
export declare class FloatDataEncoding implements flatbuffers.IUnpackableObject<FloatDataEncodingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FloatDataEncoding;
    static getRootAsFloatDataEncoding(bb: flatbuffers.ByteBuffer, obj?: FloatDataEncoding): FloatDataEncoding;
    static getSizePrefixedRootAsFloatDataEncoding(bb: flatbuffers.ByteBuffer, obj?: FloatDataEncoding): FloatDataEncoding;
    /**
     * Number of bits (typically 32 or 64)
     */
    SIZE_IN_BITS(): number;
    /**
     * Byte ordering
     */
    BYTE_ORDER(): ByteOrderType;
    /**
     * Float encoding format
     */
    ENCODING(): FloatEncodingType;
    /**
     * Default calibrator reference
     */
    DEFAULT_CALIBRATOR(): string | null;
    DEFAULT_CALIBRATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Context-dependent calibrators
     */
    CONTEXT_CALIBRATOR_LIST(index: number, obj?: ContextCalibrator): ContextCalibrator | null;
    contextCalibratorListLength(): number;
    static startFloatDataEncoding(builder: flatbuffers.Builder): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static addByteOrder(builder: flatbuffers.Builder, BYTE_ORDER: ByteOrderType): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: FloatEncodingType): void;
    static addDefaultCalibrator(builder: flatbuffers.Builder, DEFAULT_CALIBRATOROffset: flatbuffers.Offset): void;
    static addContextCalibratorList(builder: flatbuffers.Builder, CONTEXT_CALIBRATOR_LISTOffset: flatbuffers.Offset): void;
    static createContextCalibratorListVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContextCalibratorListVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFloatDataEncoding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFloatDataEncoding(builder: flatbuffers.Builder, SIZE_IN_BITS: number, BYTE_ORDER: ByteOrderType, ENCODING: FloatEncodingType, DEFAULT_CALIBRATOROffset: flatbuffers.Offset, CONTEXT_CALIBRATOR_LISTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FloatDataEncodingT;
    unpackTo(_o: FloatDataEncodingT): void;
}
export declare class FloatDataEncodingT implements flatbuffers.IGeneratedObject {
    SIZE_IN_BITS: number;
    BYTE_ORDER: ByteOrderType;
    ENCODING: FloatEncodingType;
    DEFAULT_CALIBRATOR: string | Uint8Array | null;
    CONTEXT_CALIBRATOR_LIST: (ContextCalibratorT)[];
    constructor(SIZE_IN_BITS?: number, BYTE_ORDER?: ByteOrderType, ENCODING?: FloatEncodingType, DEFAULT_CALIBRATOR?: string | Uint8Array | null, CONTEXT_CALIBRATOR_LIST?: (ContextCalibratorT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FloatDataEncoding.d.ts.map