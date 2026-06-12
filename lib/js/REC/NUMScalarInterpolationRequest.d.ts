import * as flatbuffers from 'flatbuffers';
import { numOperationCode } from './numOperationCode.js';
/**
 * Request for one scalar interpolation operation.
 */
export declare class NUMScalarInterpolationRequest implements flatbuffers.IUnpackableObject<NUMScalarInterpolationRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMScalarInterpolationRequest;
    static getRootAsNUMScalarInterpolationRequest(bb: flatbuffers.ByteBuffer, obj?: NUMScalarInterpolationRequest): NUMScalarInterpolationRequest;
    static getSizePrefixedRootAsNUMScalarInterpolationRequest(bb: flatbuffers.ByteBuffer, obj?: NUMScalarInterpolationRequest): NUMScalarInterpolationRequest;
    /**
     * LINEAR_INTERPOLATION or BILINEAR_INTERPOLATION.
     */
    OPERATION(): numOperationCode;
    /**
     * First x-coordinate bound.
     */
    X1(): number;
    /**
     * Second x-coordinate bound.
     */
    X2(): number;
    /**
     * First y-coordinate bound for bilinear interpolation.
     */
    Y1(): number;
    /**
     * Second y-coordinate bound for bilinear interpolation.
     */
    Y2(): number;
    /**
     * Linear interpolation value at X1.
     */
    VALUE1(): number;
    /**
     * Linear interpolation value at X2.
     */
    VALUE2(): number;
    /**
     * Bilinear corner value at X1,Y1.
     */
    Z11(): number;
    /**
     * Bilinear corner value at X1,Y2.
     */
    Z12(): number;
    /**
     * Bilinear corner value at X2,Y1.
     */
    Z21(): number;
    /**
     * Bilinear corner value at X2,Y2.
     */
    Z22(): number;
    /**
     * X coordinate to interpolate.
     */
    INTERPOLATION_X(): number;
    /**
     * Y coordinate to interpolate for bilinear interpolation.
     */
    INTERPOLATION_Y(): number;
    /**
     * Optional trace/correlation identifier.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMScalarInterpolationRequest(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: numOperationCode): void;
    static addX1(builder: flatbuffers.Builder, X1: number): void;
    static addX2(builder: flatbuffers.Builder, X2: number): void;
    static addY1(builder: flatbuffers.Builder, Y1: number): void;
    static addY2(builder: flatbuffers.Builder, Y2: number): void;
    static addValue1(builder: flatbuffers.Builder, VALUE1: number): void;
    static addValue2(builder: flatbuffers.Builder, VALUE2: number): void;
    static addZ11(builder: flatbuffers.Builder, Z11: number): void;
    static addZ12(builder: flatbuffers.Builder, Z12: number): void;
    static addZ21(builder: flatbuffers.Builder, Z21: number): void;
    static addZ22(builder: flatbuffers.Builder, Z22: number): void;
    static addInterpolationX(builder: flatbuffers.Builder, INTERPOLATION_X: number): void;
    static addInterpolationY(builder: flatbuffers.Builder, INTERPOLATION_Y: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMScalarInterpolationRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMScalarInterpolationRequest(builder: flatbuffers.Builder, OPERATION: numOperationCode, X1: number, X2: number, Y1: number, Y2: number, VALUE1: number, VALUE2: number, Z11: number, Z12: number, Z21: number, Z22: number, INTERPOLATION_X: number, INTERPOLATION_Y: number, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMScalarInterpolationRequestT;
    unpackTo(_o: NUMScalarInterpolationRequestT): void;
}
export declare class NUMScalarInterpolationRequestT implements flatbuffers.IGeneratedObject {
    OPERATION: numOperationCode;
    X1: number;
    X2: number;
    Y1: number;
    Y2: number;
    VALUE1: number;
    VALUE2: number;
    Z11: number;
    Z12: number;
    Z21: number;
    Z22: number;
    INTERPOLATION_X: number;
    INTERPOLATION_Y: number;
    TRACE_ID: string | Uint8Array | null;
    constructor(OPERATION?: numOperationCode, X1?: number, X2?: number, Y1?: number, Y2?: number, VALUE1?: number, VALUE2?: number, Z11?: number, Z12?: number, Z21?: number, Z22?: number, INTERPOLATION_X?: number, INTERPOLATION_Y?: number, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMScalarInterpolationRequest.d.ts.map