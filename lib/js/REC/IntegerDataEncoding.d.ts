import * as flatbuffers from 'flatbuffers';
import { ByteOrderType } from './ByteOrderType.js';
import { ContextCalibrator, ContextCalibratorT } from './ContextCalibrator.js';
import { IntegerEncodingType } from './IntegerEncodingType.js';
/**
 * Integer data encoding specification
 */
export declare class IntegerDataEncoding implements flatbuffers.IUnpackableObject<IntegerDataEncodingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IntegerDataEncoding;
    static getRootAsIntegerDataEncoding(bb: flatbuffers.ByteBuffer, obj?: IntegerDataEncoding): IntegerDataEncoding;
    static getSizePrefixedRootAsIntegerDataEncoding(bb: flatbuffers.ByteBuffer, obj?: IntegerDataEncoding): IntegerDataEncoding;
    /**
     * Number of bits for this integer
     */
    SIZE_IN_BITS(): number;
    /**
     * Byte ordering
     */
    BYTE_ORDER(): ByteOrderType;
    /**
     * Integer encoding type
     */
    ENCODING(): IntegerEncodingType;
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
    static startIntegerDataEncoding(builder: flatbuffers.Builder): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static addByteOrder(builder: flatbuffers.Builder, BYTE_ORDER: ByteOrderType): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: IntegerEncodingType): void;
    static addDefaultCalibrator(builder: flatbuffers.Builder, DEFAULT_CALIBRATOROffset: flatbuffers.Offset): void;
    static addContextCalibratorList(builder: flatbuffers.Builder, CONTEXT_CALIBRATOR_LISTOffset: flatbuffers.Offset): void;
    static createContextCalibratorListVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContextCalibratorListVector(builder: flatbuffers.Builder, numElems: number): void;
    static endIntegerDataEncoding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIntegerDataEncoding(builder: flatbuffers.Builder, SIZE_IN_BITS: number, BYTE_ORDER: ByteOrderType, ENCODING: IntegerEncodingType, DEFAULT_CALIBRATOROffset: flatbuffers.Offset, CONTEXT_CALIBRATOR_LISTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IntegerDataEncodingT;
    unpackTo(_o: IntegerDataEncodingT): void;
}
export declare class IntegerDataEncodingT implements flatbuffers.IGeneratedObject {
    SIZE_IN_BITS: number;
    BYTE_ORDER: ByteOrderType;
    ENCODING: IntegerEncodingType;
    DEFAULT_CALIBRATOR: string | Uint8Array | null;
    CONTEXT_CALIBRATOR_LIST: (ContextCalibratorT)[];
    constructor(SIZE_IN_BITS?: number, BYTE_ORDER?: ByteOrderType, ENCODING?: IntegerEncodingType, DEFAULT_CALIBRATOR?: string | Uint8Array | null, CONTEXT_CALIBRATOR_LIST?: (ContextCalibratorT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IntegerDataEncoding.d.ts.map