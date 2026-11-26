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
    /**
     * Tulip/pumpkin petal count Np; 0 = not applicable.
     */
    PETALS(): number;
    /**
     * Sidereal resonance denominator p (period = q * 2*pi / p); 0 = not stated.
     */
    RESONANCE_P(): number;
    /**
     * Sidereal resonance numerator q; 0 = not stated.
     */
    RESONANCE_Q(): number;
    /**
     * CR3BP pseudo-potential U* at the initial state.
     */
    PSEUDO_POTENTIAL(): number;
    /**
     * Minimum distance from the larger primary (P1), km; 0 = not computed.
     */
    PERIGEE_KM(): number;
    /**
     * Maximum distance from the larger primary (P1), km; 0 = not computed.
     */
    APOGEE_KM(): number;
    /**
     * Instability doubling time, non-dimensional; 0 = stable or not computed.
     */
    DOUBLING_TIME(): number;
    /**
     * Floquet/Lyapunov characteristic exponent, non-dimensional; 0 = not computed.
     */
    CHARACTERISTIC_EXPONENT(): number;
    /**
     * Longest continuous P2 (lunar) occultation per period, s.
     */
    MAX_LUNAR_OCCULTATION_S(): number;
    /**
     * Total P2 (lunar) occultation duration per period, s.
     */
    TOTAL_LUNAR_OCCULTATION_S(): number;
    /**
     * Longest continuous P1 (Earth) occultation per period, s.
     */
    MAX_EARTH_OCCULTATION_S(): number;
    /**
     * Total P1 (Earth) occultation duration per period, s.
     */
    TOTAL_EARTH_OCCULTATION_S(): number;
    /**
     * Unit stable eigenvector of the monodromy matrix (6 values); empty = none.
     */
    STABLE_EIGENVECTOR(index: number): number | null;
    stableEigenvectorLength(): number;
    stableEigenvectorArray(): Float64Array | null;
    /**
     * Unit unstable eigenvector of the monodromy matrix (6 values); empty = none.
     */
    UNSTABLE_EIGENVECTOR(index: number): number | null;
    unstableEigenvectorLength(): number;
    unstableEigenvectorArray(): Float64Array | null;
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
    static addPetals(builder: flatbuffers.Builder, PETALS: number): void;
    static addResonanceP(builder: flatbuffers.Builder, RESONANCE_P: number): void;
    static addResonanceQ(builder: flatbuffers.Builder, RESONANCE_Q: number): void;
    static addPseudoPotential(builder: flatbuffers.Builder, PSEUDO_POTENTIAL: number): void;
    static addPerigeeKm(builder: flatbuffers.Builder, PERIGEE_KM: number): void;
    static addApogeeKm(builder: flatbuffers.Builder, APOGEE_KM: number): void;
    static addDoublingTime(builder: flatbuffers.Builder, DOUBLING_TIME: number): void;
    static addCharacteristicExponent(builder: flatbuffers.Builder, CHARACTERISTIC_EXPONENT: number): void;
    static addMaxLunarOccultationS(builder: flatbuffers.Builder, MAX_LUNAR_OCCULTATION_S: number): void;
    static addTotalLunarOccultationS(builder: flatbuffers.Builder, TOTAL_LUNAR_OCCULTATION_S: number): void;
    static addMaxEarthOccultationS(builder: flatbuffers.Builder, MAX_EARTH_OCCULTATION_S: number): void;
    static addTotalEarthOccultationS(builder: flatbuffers.Builder, TOTAL_EARTH_OCCULTATION_S: number): void;
    static addStableEigenvector(builder: flatbuffers.Builder, STABLE_EIGENVECTOROffset: flatbuffers.Offset): void;
    static createStableEigenvectorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStableEigenvectorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStableEigenvectorVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUnstableEigenvector(builder: flatbuffers.Builder, UNSTABLE_EIGENVECTOROffset: flatbuffers.Offset): void;
    static createUnstableEigenvectorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createUnstableEigenvectorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startUnstableEigenvectorVector(builder: flatbuffers.Builder, numElems: number): void;
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
    PETALS: number;
    RESONANCE_P: number;
    RESONANCE_Q: number;
    PSEUDO_POTENTIAL: number;
    PERIGEE_KM: number;
    APOGEE_KM: number;
    DOUBLING_TIME: number;
    CHARACTERISTIC_EXPONENT: number;
    MAX_LUNAR_OCCULTATION_S: number;
    TOTAL_LUNAR_OCCULTATION_S: number;
    MAX_EARTH_OCCULTATION_S: number;
    TOTAL_EARTH_OCCULTATION_S: number;
    STABLE_EIGENVECTOR: (number)[];
    UNSTABLE_EIGENVECTOR: (number)[];
    constructor(FAMILY?: tbpOrbitFamily, LIBRATION_POINT?: rfmLibrationPoint, AMPLITUDE?: number, PERILUNE_ALTITUDE_KM?: number, APOLUNE_ALTITUDE_KM?: number, INITIAL_STATE?: tbpStateT | null, PERIOD?: number, PERIOD_S?: number, JACOBI?: number, CORRECTED?: boolean, CONVERGED?: boolean, ITERATIONS?: number, TOLERANCE?: number, MAX_ITERATIONS?: number, MONODROMY?: (number)[], FLOQUET_REAL?: (number)[], FLOQUET_IMAGINARY?: (number)[], STABILITY_INDEX?: number, STABLE?: boolean, TRAJECTORY?: tbpTrajectoryT | null, PETALS?: number, RESONANCE_P?: number, RESONANCE_Q?: number, PSEUDO_POTENTIAL?: number, PERIGEE_KM?: number, APOGEE_KM?: number, DOUBLING_TIME?: number, CHARACTERISTIC_EXPONENT?: number, MAX_LUNAR_OCCULTATION_S?: number, TOTAL_LUNAR_OCCULTATION_S?: number, MAX_EARTH_OCCULTATION_S?: number, TOTAL_EARTH_OCCULTATION_S?: number, STABLE_EIGENVECTOR?: (number)[], UNSTABLE_EIGENVECTOR?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpPeriodicOrbit.d.ts.map