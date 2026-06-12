import * as flatbuffers from 'flatbuffers';
import { numDiscretizeRoundDirection } from './numDiscretizeRoundDirection.js';
/**
 * Request for component-wise vector discretization.
 */
export declare class NUMVectorDiscretizeRequest implements flatbuffers.IUnpackableObject<NUMVectorDiscretizeRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMVectorDiscretizeRequest;
    static getRootAsNUMVectorDiscretizeRequest(bb: flatbuffers.ByteBuffer, obj?: NUMVectorDiscretizeRequest): NUMVectorDiscretizeRequest;
    static getSizePrefixedRootAsNUMVectorDiscretizeRequest(bb: flatbuffers.ByteBuffer, obj?: NUMVectorDiscretizeRequest): NUMVectorDiscretizeRequest;
    /**
     * Input vector to quantize.
     */
    STATE(index: number): number | null;
    stateLength(): number;
    stateArray(): Float64Array | null;
    /**
     * Per-component least-significant-bit size. Length must match STATE.
     */
    LSB(index: number): number | null;
    lsbLength(): number;
    lsbArray(): Float64Array | null;
    /**
     * Rounding direction used before the original sign is restored.
     */
    ROUND_DIRECTION(): numDiscretizeRoundDirection;
    /**
     * When true, PREVIOUS_ERROR is added to STATE before discretization.
     */
    CARRY_ERROR(): boolean;
    /**
     * Optional prior discretization error vector from an earlier result.
     */
    PREVIOUS_ERROR(index: number): number | null;
    previousErrorLength(): number;
    previousErrorArray(): Float64Array | null;
    /**
     * Optional trace/correlation identifier.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMVectorDiscretizeRequest(builder: flatbuffers.Builder): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLsb(builder: flatbuffers.Builder, LSBOffset: flatbuffers.Offset): void;
    static createLsbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLsbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLsbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRoundDirection(builder: flatbuffers.Builder, ROUND_DIRECTION: numDiscretizeRoundDirection): void;
    static addCarryError(builder: flatbuffers.Builder, CARRY_ERROR: boolean): void;
    static addPreviousError(builder: flatbuffers.Builder, PREVIOUS_ERROROffset: flatbuffers.Offset): void;
    static createPreviousErrorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPreviousErrorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPreviousErrorVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMVectorDiscretizeRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMVectorDiscretizeRequest(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset, LSBOffset: flatbuffers.Offset, ROUND_DIRECTION: numDiscretizeRoundDirection, CARRY_ERROR: boolean, PREVIOUS_ERROROffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMVectorDiscretizeRequestT;
    unpackTo(_o: NUMVectorDiscretizeRequestT): void;
}
export declare class NUMVectorDiscretizeRequestT implements flatbuffers.IGeneratedObject {
    STATE: (number)[];
    LSB: (number)[];
    ROUND_DIRECTION: numDiscretizeRoundDirection;
    CARRY_ERROR: boolean;
    PREVIOUS_ERROR: (number)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(STATE?: (number)[], LSB?: (number)[], ROUND_DIRECTION?: numDiscretizeRoundDirection, CARRY_ERROR?: boolean, PREVIOUS_ERROR?: (number)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMVectorDiscretizeRequest.d.ts.map