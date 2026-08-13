import * as flatbuffers from 'flatbuffers';
import { trsPathClass } from './trsPathClass.js';
import { trsResultStatus } from './trsResultStatus.js';
/**
 * One terrain raster solve result. On STATUS = OK every layer below is
 * present with exactly GRID_WIDTH * GRID_HEIGHT row-major entries. On any
 * other STATUS the result carries NO layers — never a partial raster.
 */
export declare class TRSResult implements flatbuffers.IUnpackableObject<TRSResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRSResult;
    static getRootAsTRSResult(bb: flatbuffers.ByteBuffer, obj?: TRSResult): TRSResult;
    static getSizePrefixedRootAsTRSResult(bb: flatbuffers.ByteBuffer, obj?: TRSResult): TRSResult;
    STATUS(): trsResultStatus;
    /**
     * On REFUSED or INVALID_INPUT: names the exact gap or defect. Empty on
     * OK.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Output raster dimensions the layers are stated for, echoed from the
     * request.
     */
    GRID_WIDTH(): number;
    GRID_HEIGHT(): number;
    /**
     * 1 where the geometric ray from the emitter clears the obstruction
     * surface, else 0.
     */
    VISIBLE_MASK(index: number): number | null;
    visibleMaskLength(): number;
    visibleMaskArray(): Uint8Array | null;
    /**
     * Complement of VISIBLE_MASK.
     */
    OCCLUDED_MASK(index: number): number | null;
    occludedMaskLength(): number;
    occludedMaskArray(): Uint8Array | null;
    /**
     * 1 where LINK_MARGIN_DB > 0, else 0.
     */
    POSITIVE_LINK_MASK(index: number): number | null;
    positiveLinkMaskLength(): number;
    positiveLinkMaskArray(): Uint8Array | null;
    /**
     * Path classification of every cell from the dominant-edge diffraction
     * parameter — see trsPathClass.
     */
    PATH_CLASS(index: number): trsPathClass | null;
    pathClassLength(): number;
    pathClassArray(): Int8Array | null;
    /**
     * Total path loss including every applied term, dB (positive).
     */
    PATH_LOSS_DB(index: number): number | null;
    pathLossDbLength(): number;
    pathLossDbArray(): Float32Array | null;
    /**
     * Loss above free space — what the terrain cost the cell, dB.
     */
    EXCESS_LOSS_DB(index: number): number | null;
    excessLossDbLength(): number;
    excessLossDbArray(): Float32Array | null;
    /**
     * Link budget margin, dB.
     */
    LINK_MARGIN_DB(index: number): number | null;
    linkMarginDbLength(): number;
    linkMarginDbArray(): Float32Array | null;
    /**
     * ITU-R P.526-15 eq. (29) diffraction parameter v of the dominant edge.
     * Exactly -10.0 where no finite v exists (an unobstructed, Fresnel-clear
     * path) — the layer's stated no-finite-v encoding, carried verbatim so
     * the FlatBuffer and aligned-binary forms stay byte-comparable.
     */
    DIFFRACTION_PARAMETER(index: number): number | null;
    diffractionParameterLength(): number;
    diffractionParameterArray(): Float32Array | null;
    /**
     * Specular ground-bounce contribution, dB. All zeros outside the
     * SPECULAR_SINGLE_BOUNCE tier.
     */
    REFLECTION_CONTRIBUTION_DB(index: number): number | null;
    reflectionContributionDbLength(): number;
    reflectionContributionDbArray(): Float32Array | null;
    /**
     * Caller trace/correlation identifier copied from the request when
     * present.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTRSResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: trsResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addGridWidth(builder: flatbuffers.Builder, GRID_WIDTH: number): void;
    static addGridHeight(builder: flatbuffers.Builder, GRID_HEIGHT: number): void;
    static addVisibleMask(builder: flatbuffers.Builder, VISIBLE_MASKOffset: flatbuffers.Offset): void;
    static createVisibleMaskVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVisibleMaskVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOccludedMask(builder: flatbuffers.Builder, OCCLUDED_MASKOffset: flatbuffers.Offset): void;
    static createOccludedMaskVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOccludedMaskVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositiveLinkMask(builder: flatbuffers.Builder, POSITIVE_LINK_MASKOffset: flatbuffers.Offset): void;
    static createPositiveLinkMaskVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositiveLinkMaskVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPathClass(builder: flatbuffers.Builder, PATH_CLASSOffset: flatbuffers.Offset): void;
    static createPathClassVector(builder: flatbuffers.Builder, data: trsPathClass[]): flatbuffers.Offset;
    static startPathClassVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPathLossDb(builder: flatbuffers.Builder, PATH_LOSS_DBOffset: flatbuffers.Offset): void;
    static createPathLossDbVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPathLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPathLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExcessLossDb(builder: flatbuffers.Builder, EXCESS_LOSS_DBOffset: flatbuffers.Offset): void;
    static createExcessLossDbVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createExcessLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startExcessLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLinkMarginDb(builder: flatbuffers.Builder, LINK_MARGIN_DBOffset: flatbuffers.Offset): void;
    static createLinkMarginDbVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLinkMarginDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLinkMarginDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDiffractionParameter(builder: flatbuffers.Builder, DIFFRACTION_PARAMETEROffset: flatbuffers.Offset): void;
    static createDiffractionParameterVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDiffractionParameterVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDiffractionParameterVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReflectionContributionDb(builder: flatbuffers.Builder, REFLECTION_CONTRIBUTION_DBOffset: flatbuffers.Offset): void;
    static createReflectionContributionDbVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReflectionContributionDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReflectionContributionDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endTRSResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRSResult(builder: flatbuffers.Builder, STATUS: trsResultStatus, ERROR_MESSAGEOffset: flatbuffers.Offset, GRID_WIDTH: number, GRID_HEIGHT: number, VISIBLE_MASKOffset: flatbuffers.Offset, OCCLUDED_MASKOffset: flatbuffers.Offset, POSITIVE_LINK_MASKOffset: flatbuffers.Offset, PATH_CLASSOffset: flatbuffers.Offset, PATH_LOSS_DBOffset: flatbuffers.Offset, EXCESS_LOSS_DBOffset: flatbuffers.Offset, LINK_MARGIN_DBOffset: flatbuffers.Offset, DIFFRACTION_PARAMETEROffset: flatbuffers.Offset, REFLECTION_CONTRIBUTION_DBOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRSResultT;
    unpackTo(_o: TRSResultT): void;
}
export declare class TRSResultT implements flatbuffers.IGeneratedObject {
    STATUS: trsResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    GRID_WIDTH: number;
    GRID_HEIGHT: number;
    VISIBLE_MASK: (number)[];
    OCCLUDED_MASK: (number)[];
    POSITIVE_LINK_MASK: (number)[];
    PATH_CLASS: (trsPathClass)[];
    PATH_LOSS_DB: (number)[];
    EXCESS_LOSS_DB: (number)[];
    LINK_MARGIN_DB: (number)[];
    DIFFRACTION_PARAMETER: (number)[];
    REFLECTION_CONTRIBUTION_DB: (number)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: trsResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, GRID_WIDTH?: number, GRID_HEIGHT?: number, VISIBLE_MASK?: (number)[], OCCLUDED_MASK?: (number)[], POSITIVE_LINK_MASK?: (number)[], PATH_CLASS?: (trsPathClass)[], PATH_LOSS_DB?: (number)[], EXCESS_LOSS_DB?: (number)[], LINK_MARGIN_DB?: (number)[], DIFFRACTION_PARAMETER?: (number)[], REFLECTION_CONTRIBUTION_DB?: (number)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRSResult.d.ts.map