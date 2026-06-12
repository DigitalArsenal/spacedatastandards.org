import * as flatbuffers from 'flatbuffers';
import { BSPVector3Series, BSPVector3SeriesT } from './BSPVector3Series.js';
/**
 * Request for one 3D B-spline interpolation.
 */
export declare class BSPInterpolationRequest implements flatbuffers.IUnpackableObject<BSPInterpolationRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BSPInterpolationRequest;
    static getRootAsBSPInterpolationRequest(bb: flatbuffers.ByteBuffer, obj?: BSPInterpolationRequest): BSPInterpolationRequest;
    static getSizePrefixedRootAsBSPInterpolationRequest(bb: flatbuffers.ByteBuffer, obj?: BSPInterpolationRequest): BSPInterpolationRequest;
    /**
     * Waypoint times and coordinates. T, X1, X2, and X3 must have equal length.
     */
    WAYPOINTS(obj?: BSPVector3Series): BSPVector3Series | null;
    /**
     * Number of equally spaced output samples.
     */
    SAMPLE_COUNT(): number;
    /**
     * Polynomial order of the B-spline basis.
     */
    POLYNOMIAL_ORDER(): number;
    /**
     * Whether X_DOT_0 contains the first derivative at the first waypoint.
     */
    HAS_X_DOT_0(): boolean;
    /**
     * Optional first derivative at the first waypoint, length 3.
     */
    X_DOT_0(index: number): number | null;
    xDot0Length(): number;
    xDot0Array(): Float64Array | null;
    /**
     * Whether X_DOT_N contains the first derivative at the last waypoint.
     */
    HAS_X_DOT_N(): boolean;
    /**
     * Optional first derivative at the last waypoint, length 3.
     */
    X_DOT_N(index: number): number | null;
    xDotNLength(): number;
    xDotNArray(): Float64Array | null;
    /**
     * Whether X_D_DOT_0 contains the second derivative at the first waypoint.
     */
    HAS_X_D_DOT_0(): boolean;
    /**
     * Optional second derivative at the first waypoint, length 3.
     */
    X_D_DOT_0(index: number): number | null;
    xDDot0Length(): number;
    xDDot0Array(): Float64Array | null;
    /**
     * Whether X_D_DOT_N contains the second derivative at the last waypoint.
     */
    HAS_X_D_DOT_N(): boolean;
    /**
     * Optional second derivative at the last waypoint, length 3.
     */
    X_D_DOT_N(index: number): number | null;
    xDDotNLength(): number;
    xDDotNArray(): Float64Array | null;
    /**
     * Optional trace/correlation identifier.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startBSPInterpolationRequest(builder: flatbuffers.Builder): void;
    static addWaypoints(builder: flatbuffers.Builder, WAYPOINTSOffset: flatbuffers.Offset): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static addPolynomialOrder(builder: flatbuffers.Builder, POLYNOMIAL_ORDER: number): void;
    static addHasXDot0(builder: flatbuffers.Builder, HAS_X_DOT_0: boolean): void;
    static addXDot0(builder: flatbuffers.Builder, X_DOT_0Offset: flatbuffers.Offset): void;
    static createXDot0Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXDot0Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXDot0Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addHasXDotN(builder: flatbuffers.Builder, HAS_X_DOT_N: boolean): void;
    static addXDotN(builder: flatbuffers.Builder, X_DOT_NOffset: flatbuffers.Offset): void;
    static createXDotNVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXDotNVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXDotNVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHasXDDot0(builder: flatbuffers.Builder, HAS_X_D_DOT_0: boolean): void;
    static addXDDot0(builder: flatbuffers.Builder, X_D_DOT_0Offset: flatbuffers.Offset): void;
    static createXDDot0Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXDDot0Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXDDot0Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addHasXDDotN(builder: flatbuffers.Builder, HAS_X_D_DOT_N: boolean): void;
    static addXDDotN(builder: flatbuffers.Builder, X_D_DOT_NOffset: flatbuffers.Offset): void;
    static createXDDotNVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXDDotNVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXDDotNVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endBSPInterpolationRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBSPInterpolationRequest(builder: flatbuffers.Builder, WAYPOINTSOffset: flatbuffers.Offset, SAMPLE_COUNT: number, POLYNOMIAL_ORDER: number, HAS_X_DOT_0: boolean, X_DOT_0Offset: flatbuffers.Offset, HAS_X_DOT_N: boolean, X_DOT_NOffset: flatbuffers.Offset, HAS_X_D_DOT_0: boolean, X_D_DOT_0Offset: flatbuffers.Offset, HAS_X_D_DOT_N: boolean, X_D_DOT_NOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BSPInterpolationRequestT;
    unpackTo(_o: BSPInterpolationRequestT): void;
}
export declare class BSPInterpolationRequestT implements flatbuffers.IGeneratedObject {
    WAYPOINTS: BSPVector3SeriesT | null;
    SAMPLE_COUNT: number;
    POLYNOMIAL_ORDER: number;
    HAS_X_DOT_0: boolean;
    X_DOT_0: (number)[];
    HAS_X_DOT_N: boolean;
    X_DOT_N: (number)[];
    HAS_X_D_DOT_0: boolean;
    X_D_DOT_0: (number)[];
    HAS_X_D_DOT_N: boolean;
    X_D_DOT_N: (number)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(WAYPOINTS?: BSPVector3SeriesT | null, SAMPLE_COUNT?: number, POLYNOMIAL_ORDER?: number, HAS_X_DOT_0?: boolean, X_DOT_0?: (number)[], HAS_X_DOT_N?: boolean, X_DOT_N?: (number)[], HAS_X_D_DOT_0?: boolean, X_D_DOT_0?: (number)[], HAS_X_D_DOT_N?: boolean, X_D_DOT_N?: (number)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BSPInterpolationRequest.d.ts.map