import * as flatbuffers from 'flatbuffers';
import { dclCorrectionForm } from './dclCorrectionForm.js';
import { dclHarmonicSegment, dclHarmonicSegmentT } from './dclHarmonicSegment.js';
/**
 * An exospheric-temperature correction or a dimensionless log-density scale.
 */
export declare class dclCorrection implements flatbuffers.IUnpackableObject<dclCorrectionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclCorrection;
    static getRootAsdclCorrection(bb: flatbuffers.ByteBuffer, obj?: dclCorrection): dclCorrection;
    static getSizePrefixedRootAsdclCorrection(bb: flatbuffers.ByteBuffer, obj?: dclCorrection): dclCorrection;
    FORM(): dclCorrectionForm;
    /**
     * Harmonic: the degree (0 = a global constant per segment).
     */
    DEGREE(): number;
    /**
     * Harmonic: segments in time order, not overlapping; an instant in no
     * segment has dT = 0.
     */
    SEGMENTS(index: number, obj?: dclHarmonicSegment): dclHarmonicSegment | null;
    segmentsLength(): number;
    /**
     * Nodes or LogDensityNodes: UTC Unix milliseconds, strictly increasing.
     * The selected correction is linear in time between nodes and held at the
     * first/last value outside the node span.
     */
    NODE_TIMES_MS(index: number): bigint | null;
    nodeTimesMsLength(): number;
    /**
     * Nodes: altitude nodes, km, strictly increasing; empty = one global
     * value per time node (at least two otherwise). dT is linear in altitude
     * between them, extrapolated linearly up to 100 km beyond the outer ones
     * and held beyond that.
     */
    NODE_ALTITUDES_KM(index: number): number | null;
    nodeAltitudesKmLength(): number;
    nodeAltitudesKmArray(): Float64Array | null;
    /**
     * Nodes: values, K, time-node-major (time node j, altitude node a at
     * j * altitudes + a).
     */
    NODE_VALUES_K(index: number): number | null;
    nodeValuesKLength(): number;
    nodeValuesKArray(): Float64Array | null;
    /**
     * Nodes: formal sigmas of NODE_VALUES_K, K, same layout; empty = not
     * estimated.
     */
    NODE_SIGMAS_K(index: number): number | null;
    nodeSigmasKLength(): number;
    nodeSigmasKArray(): Float64Array | null;
    /**
     * LogDensityNodes only: s = ln(rho_drag / rho_NRLMSISE00), dimensionless,
     * one finite value per NODE_TIMES_MS entry, shared by the whole fleet.
     * rho_drag = rho_NRLMSISE00 * exp(s(t)); this is not a temperature change.
     * NODE_ALTITUDES_KM, NODE_VALUES_K, NODE_SIGMAS_K and SEGMENTS must be empty.
     * SETTINGS.TO_MS marks the last solve epoch. Published nodes explicitly
     * include the producer's forecast decay through at least 48 hours after
     * that epoch. Interpolate those nodes; do not apply another decay in the
     * consumer. After the final published node, hold its value.
     */
    NODE_LOG_DENSITY_SCALE_DIMENSIONLESS(index: number): number | null;
    nodeLogDensityScaleDimensionlessLength(): number;
    nodeLogDensityScaleDimensionlessArray(): Float64Array | null;
    static startdclCorrection(builder: flatbuffers.Builder): void;
    static addForm(builder: flatbuffers.Builder, FORM: dclCorrectionForm): void;
    static addDegree(builder: flatbuffers.Builder, DEGREE: number): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static createSegmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNodeTimesMs(builder: flatbuffers.Builder, NODE_TIMES_MSOffset: flatbuffers.Offset): void;
    static createNodeTimesMsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startNodeTimesMsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNodeAltitudesKm(builder: flatbuffers.Builder, NODE_ALTITUDES_KMOffset: flatbuffers.Offset): void;
    static createNodeAltitudesKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNodeAltitudesKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNodeAltitudesKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNodeValuesK(builder: flatbuffers.Builder, NODE_VALUES_KOffset: flatbuffers.Offset): void;
    static createNodeValuesKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNodeValuesKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNodeValuesKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNodeSigmasK(builder: flatbuffers.Builder, NODE_SIGMAS_KOffset: flatbuffers.Offset): void;
    static createNodeSigmasKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNodeSigmasKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNodeSigmasKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNodeLogDensityScaleDimensionless(builder: flatbuffers.Builder, NODE_LOG_DENSITY_SCALE_DIMENSIONLESSOffset: flatbuffers.Offset): void;
    static createNodeLogDensityScaleDimensionlessVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNodeLogDensityScaleDimensionlessVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNodeLogDensityScaleDimensionlessVector(builder: flatbuffers.Builder, numElems: number): void;
    static enddclCorrection(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createdclCorrection(builder: flatbuffers.Builder, FORM: dclCorrectionForm, DEGREE: number, SEGMENTSOffset: flatbuffers.Offset, NODE_TIMES_MSOffset: flatbuffers.Offset, NODE_ALTITUDES_KMOffset: flatbuffers.Offset, NODE_VALUES_KOffset: flatbuffers.Offset, NODE_SIGMAS_KOffset: flatbuffers.Offset, NODE_LOG_DENSITY_SCALE_DIMENSIONLESSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): dclCorrectionT;
    unpackTo(_o: dclCorrectionT): void;
}
export declare class dclCorrectionT implements flatbuffers.IGeneratedObject {
    FORM: dclCorrectionForm;
    DEGREE: number;
    SEGMENTS: (dclHarmonicSegmentT)[];
    NODE_TIMES_MS: (bigint)[];
    NODE_ALTITUDES_KM: (number)[];
    NODE_VALUES_K: (number)[];
    NODE_SIGMAS_K: (number)[];
    NODE_LOG_DENSITY_SCALE_DIMENSIONLESS: (number)[];
    constructor(FORM?: dclCorrectionForm, DEGREE?: number, SEGMENTS?: (dclHarmonicSegmentT)[], NODE_TIMES_MS?: (bigint)[], NODE_ALTITUDES_KM?: (number)[], NODE_VALUES_K?: (number)[], NODE_SIGMAS_K?: (number)[], NODE_LOG_DENSITY_SCALE_DIMENSIONLESS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclCorrection.d.ts.map