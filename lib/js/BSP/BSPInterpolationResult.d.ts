import * as flatbuffers from 'flatbuffers';
import { BSPVector3Series, BSPVector3SeriesT } from './BSPVector3Series.js';
import { bspInterpolationStatus } from './bspInterpolationStatus.js';
/**
 * Result of one 3D B-spline interpolation.
 */
export declare class BSPInterpolationResult implements flatbuffers.IUnpackableObject<BSPInterpolationResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BSPInterpolationResult;
    static getRootAsBSPInterpolationResult(bb: flatbuffers.ByteBuffer, obj?: BSPInterpolationResult): BSPInterpolationResult;
    static getSizePrefixedRootAsBSPInterpolationResult(bb: flatbuffers.ByteBuffer, obj?: BSPInterpolationResult): BSPInterpolationResult;
    /**
     * Interpolation status.
     */
    STATUS(): bspInterpolationStatus;
    /**
     * Optional error detail when STATUS is not OK.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Output sample positions.
     */
    SAMPLES(obj?: BSPVector3Series): BSPVector3Series | null;
    /**
     * First derivative of coordinate 1 at each output sample.
     */
    XD1(index: number): number | null;
    xd1Length(): number;
    xd1Array(): Float64Array | null;
    /**
     * First derivative of coordinate 2 at each output sample.
     */
    XD2(index: number): number | null;
    xd2Length(): number;
    xd2Array(): Float64Array | null;
    /**
     * First derivative of coordinate 3 at each output sample.
     */
    XD3(index: number): number | null;
    xd3Length(): number;
    xd3Array(): Float64Array | null;
    /**
     * Second derivative of coordinate 1 at each output sample.
     */
    XDD1(index: number): number | null;
    xdd1Length(): number;
    xdd1Array(): Float64Array | null;
    /**
     * Second derivative of coordinate 2 at each output sample.
     */
    XDD2(index: number): number | null;
    xdd2Length(): number;
    xdd2Array(): Float64Array | null;
    /**
     * Second derivative of coordinate 3 at each output sample.
     */
    XDD3(index: number): number | null;
    xdd3Length(): number;
    xdd3Array(): Float64Array | null;
    /**
     * Caller trace/correlation identifier copied from the request when present.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startBSPInterpolationResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: bspInterpolationStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static addXd1(builder: flatbuffers.Builder, XD1Offset: flatbuffers.Offset): void;
    static createXd1Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXd1Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXd1Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addXd2(builder: flatbuffers.Builder, XD2Offset: flatbuffers.Offset): void;
    static createXd2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXd2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXd2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addXd3(builder: flatbuffers.Builder, XD3Offset: flatbuffers.Offset): void;
    static createXd3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXd3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXd3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addXdd1(builder: flatbuffers.Builder, XDD1Offset: flatbuffers.Offset): void;
    static createXdd1Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXdd1Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXdd1Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addXdd2(builder: flatbuffers.Builder, XDD2Offset: flatbuffers.Offset): void;
    static createXdd2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXdd2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXdd2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addXdd3(builder: flatbuffers.Builder, XDD3Offset: flatbuffers.Offset): void;
    static createXdd3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXdd3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXdd3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endBSPInterpolationResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BSPInterpolationResultT;
    unpackTo(_o: BSPInterpolationResultT): void;
}
export declare class BSPInterpolationResultT implements flatbuffers.IGeneratedObject {
    STATUS: bspInterpolationStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    SAMPLES: BSPVector3SeriesT | null;
    XD1: (number)[];
    XD2: (number)[];
    XD3: (number)[];
    XDD1: (number)[];
    XDD2: (number)[];
    XDD3: (number)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: bspInterpolationStatus, ERROR_MESSAGE?: string | Uint8Array | null, SAMPLES?: BSPVector3SeriesT | null, XD1?: (number)[], XD2?: (number)[], XD3?: (number)[], XDD1?: (number)[], XDD2?: (number)[], XDD3?: (number)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BSPInterpolationResult.d.ts.map