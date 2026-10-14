import * as flatbuffers from 'flatbuffers';
import { SCRPossibilityKernel, SCRPossibilityKernelT } from './SCRPossibilityKernel.js';
import { SCRPossibilityPoint, SCRPossibilityPointT } from './SCRPossibilityPoint.js';
import { scrPossibilityModel } from './scrPossibilityModel.js';
/**
 * A possibility-of-collision assessment of one encounter.
 */
export declare class SCRPossibilityRequest implements flatbuffers.IUnpackableObject<SCRPossibilityRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRPossibilityRequest;
    static getRootAsSCRPossibilityRequest(bb: flatbuffers.ByteBuffer, obj?: SCRPossibilityRequest): SCRPossibilityRequest;
    static getSizePrefixedRootAsSCRPossibilityRequest(bb: flatbuffers.ByteBuffer, obj?: SCRPossibilityRequest): SCRPossibilityRequest;
    /**
     * Combined hard-body radius, m (> 0).
     */
    COMBINED_RADIUS_M(): number;
    /**
     * Closest approach is searched over [-T, T] s about the common epoch of
     * the states.
     */
    HALF_WINDOW_S(): number;
    MODEL(): scrPossibilityModel;
    /**
     * Object A's and B's sampled states (FiniteSupport), 1 to 200000 each.
     */
    A_POINTS(index: number, obj?: SCRPossibilityPoint): SCRPossibilityPoint | null;
    aPointsLength(): number;
    B_POINTS(index: number, obj?: SCRPossibilityPoint): SCRPossibilityPoint | null;
    bPointsLength(): number;
    /**
     * Object A's and B's kernels (EllipsoidalKernel).
     */
    A_KERNEL(obj?: SCRPossibilityKernel): SCRPossibilityKernel | null;
    B_KERNEL(obj?: SCRPossibilityKernel): SCRPossibilityKernel | null;
    /**
     * Alpha levels to report, each in (0, 1], at most 64.
     */
    ALPHA_LEVELS(index: number): number | null;
    alphaLevelsLength(): number;
    alphaLevelsArray(): Float64Array | null;
    static startSCRPossibilityRequest(builder: flatbuffers.Builder): void;
    static addCombinedRadiusM(builder: flatbuffers.Builder, COMBINED_RADIUS_M: number): void;
    static addHalfWindowS(builder: flatbuffers.Builder, HALF_WINDOW_S: number): void;
    static addModel(builder: flatbuffers.Builder, MODEL: scrPossibilityModel): void;
    static addAPoints(builder: flatbuffers.Builder, A_POINTSOffset: flatbuffers.Offset): void;
    static startAPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBPoints(builder: flatbuffers.Builder, B_POINTSOffset: flatbuffers.Offset): void;
    static startBPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAKernel(builder: flatbuffers.Builder, A_KERNELOffset: flatbuffers.Offset): void;
    static addBKernel(builder: flatbuffers.Builder, B_KERNELOffset: flatbuffers.Offset): void;
    static addAlphaLevels(builder: flatbuffers.Builder, ALPHA_LEVELSOffset: flatbuffers.Offset): void;
    static createAlphaLevelsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAlphaLevelsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAlphaLevelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCRPossibilityRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SCRPossibilityRequestT;
    unpackTo(_o: SCRPossibilityRequestT): void;
}
export declare class SCRPossibilityRequestT implements flatbuffers.IGeneratedObject {
    COMBINED_RADIUS_M: number;
    HALF_WINDOW_S: number;
    MODEL: scrPossibilityModel;
    A_POINTS: (SCRPossibilityPointT)[];
    B_POINTS: (SCRPossibilityPointT)[];
    A_KERNEL: SCRPossibilityKernelT | null;
    B_KERNEL: SCRPossibilityKernelT | null;
    ALPHA_LEVELS: (number)[];
    constructor(COMBINED_RADIUS_M?: number, HALF_WINDOW_S?: number, MODEL?: scrPossibilityModel, A_POINTS?: (SCRPossibilityPointT)[], B_POINTS?: (SCRPossibilityPointT)[], A_KERNEL?: SCRPossibilityKernelT | null, B_KERNEL?: SCRPossibilityKernelT | null, ALPHA_LEVELS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRPossibilityRequest.d.ts.map