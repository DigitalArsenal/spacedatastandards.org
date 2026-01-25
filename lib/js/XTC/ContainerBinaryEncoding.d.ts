import * as flatbuffers from 'flatbuffers';
import { ErrorDetectionType } from './ErrorDetectionType.js';
/**
 * Binary encoding specification for container
 */
export declare class ContainerBinaryEncoding implements flatbuffers.IUnpackableObject<ContainerBinaryEncodingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ContainerBinaryEncoding;
    static getRootAsContainerBinaryEncoding(bb: flatbuffers.ByteBuffer, obj?: ContainerBinaryEncoding): ContainerBinaryEncoding;
    static getSizePrefixedRootAsContainerBinaryEncoding(bb: flatbuffers.ByteBuffer, obj?: ContainerBinaryEncoding): ContainerBinaryEncoding;
    /**
     * Error detection type
     */
    ERROR_DETECTION(): ErrorDetectionType;
    /**
     * CRC polynomial (for CRC error detection)
     */
    CRC_POLYNOMIAL(): string | null;
    CRC_POLYNOMIAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Size in bits
     */
    SIZE_IN_BITS(): number;
    static startContainerBinaryEncoding(builder: flatbuffers.Builder): void;
    static addErrorDetection(builder: flatbuffers.Builder, ERROR_DETECTION: ErrorDetectionType): void;
    static addCrcPolynomial(builder: flatbuffers.Builder, CRC_POLYNOMIALOffset: flatbuffers.Offset): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static endContainerBinaryEncoding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createContainerBinaryEncoding(builder: flatbuffers.Builder, ERROR_DETECTION: ErrorDetectionType, CRC_POLYNOMIALOffset: flatbuffers.Offset, SIZE_IN_BITS: number): flatbuffers.Offset;
    unpack(): ContainerBinaryEncodingT;
    unpackTo(_o: ContainerBinaryEncodingT): void;
}
export declare class ContainerBinaryEncodingT implements flatbuffers.IGeneratedObject {
    ERROR_DETECTION: ErrorDetectionType;
    CRC_POLYNOMIAL: string | Uint8Array | null;
    SIZE_IN_BITS: number;
    constructor(ERROR_DETECTION?: ErrorDetectionType, CRC_POLYNOMIAL?: string | Uint8Array | null, SIZE_IN_BITS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ContainerBinaryEncoding.d.ts.map