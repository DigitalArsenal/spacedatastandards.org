import * as flatbuffers from 'flatbuffers';
import { mplAnomalyKind } from './mplAnomalyKind.js';
import { mplAxes } from './mplAxes.js';
import { mplBurn, mplBurnT } from './mplBurn.js';
import { mplOrbit, mplOrbitT } from './mplOrbit.js';
/**
 * Orbit-geometry questions (OrbitGeometry, AnomalyConversion,
 * TimeOfFlight, OrbitSampling, DeltaVTransform).
 */
export declare class mplGeometryRequest implements flatbuffers.IUnpackableObject<mplGeometryRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplGeometryRequest;
    static getRootAsmplGeometryRequest(bb: flatbuffers.ByteBuffer, obj?: mplGeometryRequest): mplGeometryRequest;
    static getSizePrefixedRootAsmplGeometryRequest(bb: flatbuffers.ByteBuffer, obj?: mplGeometryRequest): mplGeometryRequest;
    /**
     * The orbit asked about (all but AnomalyConversion).
     */
    ORBIT(obj?: mplOrbit): mplOrbit | null;
    /**
     * OrbitGeometry: evaluate at this true anomaly, deg; NaN = at the orbit's
     * own epoch (or after ELAPSED_S). Not together with HAS_ELAPSED.
     */
    AT_TRUE_ANOMALY_DEG(): number;
    /**
     * OrbitGeometry: coast this long from the orbit's epoch first, s (signed);
     * read only when HAS_ELAPSED.
     */
    ELAPSED_S(): number;
    /**
     * True when ELAPSED_S is stated (0 is then a real zero-length coast);
     * false = no coast.
     */
    HAS_ELAPSED(): boolean;
    /**
     * OrbitGeometry: a burn to apply at the evaluated point;
     * DeltaVTransform: the delta-v to rotate (its AXES is the source axes).
     */
    BURN(obj?: mplBurn): mplBurn | null;
    /**
     * DeltaVTransform: axes to rotate the delta-v into.
     */
    TO_AXES(): mplAxes;
    /**
     * AnomalyConversion: eccentricity.
     */
    ECCENTRICITY(): number;
    /**
     * AnomalyConversion: the anomaly to convert, deg.
     */
    ANOMALY_DEG(): number;
    ANOMALY_KIND(): mplAnomalyKind;
    /**
     * TimeOfFlight and OrbitSampling: start true anomaly, deg.
     */
    FROM_TRUE_ANOMALY_DEG(): number;
    /**
     * TimeOfFlight: end true anomaly, deg.
     */
    TO_TRUE_ANOMALY_DEG(): number;
    /**
     * TimeOfFlight: whole revolutions to add.
     */
    REVOLUTIONS(): number;
    /**
     * OrbitSampling: signed sweep from FROM_TRUE_ANOMALY_DEG, deg, at most one
     * revolution; read only when HAS_SWEEP.
     */
    SWEEP_DEG(): number;
    /**
     * True when SWEEP_DEG is stated; false = one full revolution forward.
     */
    HAS_SWEEP(): boolean;
    /**
     * OrbitSampling: samples, endpoints included.
     */
    SAMPLE_COUNT(): number;
    static startmplGeometryRequest(builder: flatbuffers.Builder): void;
    static addOrbit(builder: flatbuffers.Builder, ORBITOffset: flatbuffers.Offset): void;
    static addAtTrueAnomalyDeg(builder: flatbuffers.Builder, AT_TRUE_ANOMALY_DEG: number): void;
    static addElapsedS(builder: flatbuffers.Builder, ELAPSED_S: number): void;
    static addHasElapsed(builder: flatbuffers.Builder, HAS_ELAPSED: boolean): void;
    static addBurn(builder: flatbuffers.Builder, BURNOffset: flatbuffers.Offset): void;
    static addToAxes(builder: flatbuffers.Builder, TO_AXES: mplAxes): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addAnomalyDeg(builder: flatbuffers.Builder, ANOMALY_DEG: number): void;
    static addAnomalyKind(builder: flatbuffers.Builder, ANOMALY_KIND: mplAnomalyKind): void;
    static addFromTrueAnomalyDeg(builder: flatbuffers.Builder, FROM_TRUE_ANOMALY_DEG: number): void;
    static addToTrueAnomalyDeg(builder: flatbuffers.Builder, TO_TRUE_ANOMALY_DEG: number): void;
    static addRevolutions(builder: flatbuffers.Builder, REVOLUTIONS: number): void;
    static addSweepDeg(builder: flatbuffers.Builder, SWEEP_DEG: number): void;
    static addHasSweep(builder: flatbuffers.Builder, HAS_SWEEP: boolean): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static endmplGeometryRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplGeometryRequestT;
    unpackTo(_o: mplGeometryRequestT): void;
}
export declare class mplGeometryRequestT implements flatbuffers.IGeneratedObject {
    ORBIT: mplOrbitT | null;
    AT_TRUE_ANOMALY_DEG: number;
    ELAPSED_S: number;
    HAS_ELAPSED: boolean;
    BURN: mplBurnT | null;
    TO_AXES: mplAxes;
    ECCENTRICITY: number;
    ANOMALY_DEG: number;
    ANOMALY_KIND: mplAnomalyKind;
    FROM_TRUE_ANOMALY_DEG: number;
    TO_TRUE_ANOMALY_DEG: number;
    REVOLUTIONS: number;
    SWEEP_DEG: number;
    HAS_SWEEP: boolean;
    SAMPLE_COUNT: number;
    constructor(ORBIT?: mplOrbitT | null, AT_TRUE_ANOMALY_DEG?: number, ELAPSED_S?: number, HAS_ELAPSED?: boolean, BURN?: mplBurnT | null, TO_AXES?: mplAxes, ECCENTRICITY?: number, ANOMALY_DEG?: number, ANOMALY_KIND?: mplAnomalyKind, FROM_TRUE_ANOMALY_DEG?: number, TO_TRUE_ANOMALY_DEG?: number, REVOLUTIONS?: number, SWEEP_DEG?: number, HAS_SWEEP?: boolean, SAMPLE_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplGeometryRequest.d.ts.map