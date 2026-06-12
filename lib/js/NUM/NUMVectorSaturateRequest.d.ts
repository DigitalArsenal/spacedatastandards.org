import * as flatbuffers from 'flatbuffers';
/**
 * Request for component-wise vector saturation.
 */
export declare class NUMVectorSaturateRequest implements flatbuffers.IUnpackableObject<NUMVectorSaturateRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMVectorSaturateRequest;
    static getRootAsNUMVectorSaturateRequest(bb: flatbuffers.ByteBuffer, obj?: NUMVectorSaturateRequest): NUMVectorSaturateRequest;
    static getSizePrefixedRootAsNUMVectorSaturateRequest(bb: flatbuffers.ByteBuffer, obj?: NUMVectorSaturateRequest): NUMVectorSaturateRequest;
    /**
     * Input vector to clamp.
     */
    STATE(index: number): number | null;
    stateLength(): number;
    stateArray(): Float64Array | null;
    /**
     * Per-component lower bounds. Length must match STATE.
     */
    LOWER_BOUNDS(index: number): number | null;
    lowerBoundsLength(): number;
    lowerBoundsArray(): Float64Array | null;
    /**
     * Per-component upper bounds. Length must match STATE.
     */
    UPPER_BOUNDS(index: number): number | null;
    upperBoundsLength(): number;
    upperBoundsArray(): Float64Array | null;
    /**
     * Optional trace/correlation identifier.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMVectorSaturateRequest(builder: flatbuffers.Builder): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLowerBounds(builder: flatbuffers.Builder, LOWER_BOUNDSOffset: flatbuffers.Offset): void;
    static createLowerBoundsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLowerBoundsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLowerBoundsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUpperBounds(builder: flatbuffers.Builder, UPPER_BOUNDSOffset: flatbuffers.Offset): void;
    static createUpperBoundsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createUpperBoundsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startUpperBoundsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMVectorSaturateRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMVectorSaturateRequest(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset, LOWER_BOUNDSOffset: flatbuffers.Offset, UPPER_BOUNDSOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMVectorSaturateRequestT;
    unpackTo(_o: NUMVectorSaturateRequestT): void;
}
export declare class NUMVectorSaturateRequestT implements flatbuffers.IGeneratedObject {
    STATE: (number)[];
    LOWER_BOUNDS: (number)[];
    UPPER_BOUNDS: (number)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(STATE?: (number)[], LOWER_BOUNDS?: (number)[], UPPER_BOUNDS?: (number)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMVectorSaturateRequest.d.ts.map