import * as flatbuffers from 'flatbuffers';
import { rfmLibrationPoint } from './rfmLibrationPoint.js';
import { tbpOrbitFamily } from './tbpOrbitFamily.js';
import { tbpState, tbpStateT } from './tbpState.js';
import { tbpTrajectory, tbpTrajectoryT } from './tbpTrajectory.js';
/**
 * A periodic orbit, or a first guess of one.
 */
export declare class tbpPeriodicOrbit implements flatbuffers.IUnpackableObject<tbpPeriodicOrbitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpPeriodicOrbit;
    static getRootAstbpPeriodicOrbit(bb: flatbuffers.ByteBuffer, obj?: tbpPeriodicOrbit): tbpPeriodicOrbit;
    static getSizePrefixedRootAstbpPeriodicOrbit(bb: flatbuffers.ByteBuffer, obj?: tbpPeriodicOrbit): tbpPeriodicOrbit;
    FAMILY(): tbpOrbitFamily;
    /**
     * Libration point the orbit is about; UNSPECIFIED for orbits about a
     * primary (distant retrograde).
     */
    LIBRATION_POINT(): rfmLibrationPoint;
    /**
     * Amplitude that selects the member of the family, non-dimensional (the
     * out-of-plane amplitude Az for halo orbits, the in-plane amplitude Ax
     * for planar Lyapunov orbits).
     */
    AMPLITUDE(): number;
    /**
     * NRHO: perilune and apolune altitudes above the smaller primary, km; 0 =
     * not an NRHO request.
     */
    PERILUNE_ALTITUDE_KM(): number;
    APOLUNE_ALTITUDE_KM(): number;
    /**
     * The orbit's state at time 0 (on the XZ-plane crossing for symmetric
     * families).
     */
    INITIAL_STATE(obj?: tbpState): tbpState | null;
    /**
     * Period, non-dimensional, and the same in seconds.
     */
    PERIOD(): number;
    PERIOD_S(): number;
    /**
     * Jacobi constant.
     */
    JACOBI(): number;
    /**
     * True when the orbit was differentially corrected; false = an analytic
     * first guess.
     */
    CORRECTED(): boolean;
    /**
     * Corrector convergence.
     */
    CONVERGED(): boolean;
    ITERATIONS(): number;
    /**
     * Corrector tolerance and iteration limit used (or requested); 0 =
     * default.
     */
    TOLERANCE(): number;
    MAX_ITERATIONS(): number;
    /**
     * Monodromy matrix (state transition over one period), row-major 6x6;
     * empty = not computed.
     */
    MONODROMY(index: number): number | null;
    monodromyLength(): number;
    monodromyArray(): Float64Array | null;
    /**
     * Floquet multipliers (eigenvalues of the monodromy matrix), 6 each.
     */
    FLOQUET_REAL(index: number): number | null;
    floquetRealLength(): number;
    floquetRealArray(): Float64Array | null;
    FLOQUET_IMAGINARY(index: number): number | null;
    floquetImaginaryLength(): number;
    floquetImaginaryArray(): Float64Array | null;
    /**
     * Stability index (|lambda_max| + 1/|lambda_max|) / 2; 1 = marginally
     * stable; 0 = not computed.
     */
    STABILITY_INDEX(): number;
    /**
     * True when the orbit is linearly stable (STABILITY_INDEX <= 1).
     */
    STABLE(): boolean;
    /**
     * One period of the orbit; empty = not sampled.
     */
    TRAJECTORY(obj?: tbpTrajectory): tbpTrajectory | null;
    static starttbpPeriodicOrbit(builder: flatbuffers.Builder): void;
    static addFamily(builder: flatbuffers.Builder, FAMILY: tbpOrbitFamily): void;
    static addLibrationPoint(builder: flatbuffers.Builder, LIBRATION_POINT: rfmLibrationPoint): void;
    static addAmplitude(builder: flatbuffers.Builder, AMPLITUDE: number): void;
    static addPeriluneAltitudeKm(builder: flatbuffers.Builder, PERILUNE_ALTITUDE_KM: number): void;
    static addApoluneAltitudeKm(builder: flatbuffers.Builder, APOLUNE_ALTITUDE_KM: number): void;
    static addInitialState(builder: flatbuffers.Builder, INITIAL_STATEOffset: flatbuffers.Offset): void;
    static addPeriod(builder: flatbuffers.Builder, PERIOD: number): void;
    static addPeriodS(builder: flatbuffers.Builder, PERIOD_S: number): void;
    static addJacobi(builder: flatbuffers.Builder, JACOBI: number): void;
    static addCorrected(builder: flatbuffers.Builder, CORRECTED: boolean): void;
    static addConverged(builder: flatbuffers.Builder, CONVERGED: boolean): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static addTolerance(builder: flatbuffers.Builder, TOLERANCE: number): void;
    static addMaxIterations(builder: flatbuffers.Builder, MAX_ITERATIONS: number): void;
    static addMonodromy(builder: flatbuffers.Builder, MONODROMYOffset: flatbuffers.Offset): void;
    static createMonodromyVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMonodromyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMonodromyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFloquetReal(builder: flatbuffers.Builder, FLOQUET_REALOffset: flatbuffers.Offset): void;
    static createFloquetRealVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFloquetRealVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFloquetRealVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFloquetImaginary(builder: flatbuffers.Builder, FLOQUET_IMAGINARYOffset: flatbuffers.Offset): void;
    static createFloquetImaginaryVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFloquetImaginaryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFloquetImaginaryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStabilityIndex(builder: flatbuffers.Builder, STABILITY_INDEX: number): void;
    static addStable(builder: flatbuffers.Builder, STABLE: boolean): void;
    static addTrajectory(builder: flatbuffers.Builder, TRAJECTORYOffset: flatbuffers.Offset): void;
    static endtbpPeriodicOrbit(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): tbpPeriodicOrbitT;
    unpackTo(_o: tbpPeriodicOrbitT): void;
}
export declare class tbpPeriodicOrbitT implements flatbuffers.IGeneratedObject {
    FAMILY: tbpOrbitFamily;
    LIBRATION_POINT: rfmLibrationPoint;
    AMPLITUDE: number;
    PERILUNE_ALTITUDE_KM: number;
    APOLUNE_ALTITUDE_KM: number;
    INITIAL_STATE: tbpStateT | null;
    PERIOD: number;
    PERIOD_S: number;
    JACOBI: number;
    CORRECTED: boolean;
    CONVERGED: boolean;
    ITERATIONS: number;
    TOLERANCE: number;
    MAX_ITERATIONS: number;
    MONODROMY: (number)[];
    FLOQUET_REAL: (number)[];
    FLOQUET_IMAGINARY: (number)[];
    STABILITY_INDEX: number;
    STABLE: boolean;
    TRAJECTORY: tbpTrajectoryT | null;
    constructor(FAMILY?: tbpOrbitFamily, LIBRATION_POINT?: rfmLibrationPoint, AMPLITUDE?: number, PERILUNE_ALTITUDE_KM?: number, APOLUNE_ALTITUDE_KM?: number, INITIAL_STATE?: tbpStateT | null, PERIOD?: number, PERIOD_S?: number, JACOBI?: number, CORRECTED?: boolean, CONVERGED?: boolean, ITERATIONS?: number, TOLERANCE?: number, MAX_ITERATIONS?: number, MONODROMY?: (number)[], FLOQUET_REAL?: (number)[], FLOQUET_IMAGINARY?: (number)[], STABILITY_INDEX?: number, STABLE?: boolean, TRAJECTORY?: tbpTrajectoryT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpPeriodicOrbit.d.ts.map