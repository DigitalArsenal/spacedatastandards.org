import * as flatbuffers from 'flatbuffers';
/**
 * Truncations and switches of the averaged (mean-element) theories SGP4XP
 * and SDNAP. SGP4's constants are fixed by its specification and are not
 * options.
 */
export declare class PCFMeanElementOptions implements flatbuffers.IUnpackableObject<PCFMeanElementOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFMeanElementOptions;
    static getRootAsPCFMeanElementOptions(bb: flatbuffers.ByteBuffer, obj?: PCFMeanElementOptions): PCFMeanElementOptions;
    static getSizePrefixedRootAsPCFMeanElementOptions(bb: flatbuffers.ByteBuffer, obj?: PCFMeanElementOptions): PCFMeanElementOptions;
    /**
     * Highest even degree of the m-daily short-periodic gravity terms; 0
     * omits them. Range 0 to 16. Default 12.
     */
    M_DAILY_MAXIMUM_DEGREE(): number;
    /**
     * Highest degree of the zonal tail (secular and long-period terms past
     * J5). Range 6 to 70. Default 20.
     */
    ZONAL_MAXIMUM_DEGREE(): number;
    /**
     * Highest degree of the eccentricity-vector short-periodic terms. Range
     * 2 to 16. Default 7.
     */
    SHORT_PERIODIC_MAXIMUM_DEGREE(): number;
    /**
     * Resonance terms on or off. Default true.
     */
    ENABLE_RESONANCE(): boolean;
    /**
     * Highest odd degree of the shallow-resonance terms. Default 31.
     */
    RESONANCE_MAXIMUM_DEGREE(): number;
    /**
     * Resonance band: terms whose angle drifts slower than this fraction of
     * the mean motion are integrated with the rates. Default 0.045.
     */
    RESONANCE_BAND(): number;
    /**
     * Highest multiple of the mean anomaly in a resonance angle. Default 1.
     */
    RESONANCE_MAXIMUM_K(): number;
    /**
     * Near-resonance band at output time, as a fraction of the mean motion
     * beyond RESONANCE_BAND; 0 is off. Default 0.
     */
    NEAR_RESONANCE_BAND(): number;
    /**
     * Divisor of the integration grid step; >= 1. Default 1.
     */
    GRID_STEP_DIVISOR(): number;
    /**
     * The catalog-shared density kernel (a gridded log-density table shared by
     * every object) on or off; off evaluates the atmosphere model directly.
     * Default true.
     */
    DENSITY_KERNEL(): boolean;
    /**
     * Perigee height below which B_eff and TAU0 act (the drag regime), km.
     * Default 2500.
     */
    DRAG_REGIME_PERIGEE_KM(): number;
    static startPCFMeanElementOptions(builder: flatbuffers.Builder): void;
    static addMDailyMaximumDegree(builder: flatbuffers.Builder, M_DAILY_MAXIMUM_DEGREE: number): void;
    static addZonalMaximumDegree(builder: flatbuffers.Builder, ZONAL_MAXIMUM_DEGREE: number): void;
    static addShortPeriodicMaximumDegree(builder: flatbuffers.Builder, SHORT_PERIODIC_MAXIMUM_DEGREE: number): void;
    static addEnableResonance(builder: flatbuffers.Builder, ENABLE_RESONANCE: boolean): void;
    static addResonanceMaximumDegree(builder: flatbuffers.Builder, RESONANCE_MAXIMUM_DEGREE: number): void;
    static addResonanceBand(builder: flatbuffers.Builder, RESONANCE_BAND: number): void;
    static addResonanceMaximumK(builder: flatbuffers.Builder, RESONANCE_MAXIMUM_K: number): void;
    static addNearResonanceBand(builder: flatbuffers.Builder, NEAR_RESONANCE_BAND: number): void;
    static addGridStepDivisor(builder: flatbuffers.Builder, GRID_STEP_DIVISOR: number): void;
    static addDensityKernel(builder: flatbuffers.Builder, DENSITY_KERNEL: boolean): void;
    static addDragRegimePerigeeKm(builder: flatbuffers.Builder, DRAG_REGIME_PERIGEE_KM: number): void;
    static endPCFMeanElementOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFMeanElementOptions(builder: flatbuffers.Builder, M_DAILY_MAXIMUM_DEGREE: number, ZONAL_MAXIMUM_DEGREE: number, SHORT_PERIODIC_MAXIMUM_DEGREE: number, ENABLE_RESONANCE: boolean, RESONANCE_MAXIMUM_DEGREE: number, RESONANCE_BAND: number, RESONANCE_MAXIMUM_K: number, NEAR_RESONANCE_BAND: number, GRID_STEP_DIVISOR: number, DENSITY_KERNEL: boolean, DRAG_REGIME_PERIGEE_KM: number): flatbuffers.Offset;
    unpack(): PCFMeanElementOptionsT;
    unpackTo(_o: PCFMeanElementOptionsT): void;
}
export declare class PCFMeanElementOptionsT implements flatbuffers.IGeneratedObject {
    M_DAILY_MAXIMUM_DEGREE: number;
    ZONAL_MAXIMUM_DEGREE: number;
    SHORT_PERIODIC_MAXIMUM_DEGREE: number;
    ENABLE_RESONANCE: boolean;
    RESONANCE_MAXIMUM_DEGREE: number;
    RESONANCE_BAND: number;
    RESONANCE_MAXIMUM_K: number;
    NEAR_RESONANCE_BAND: number;
    GRID_STEP_DIVISOR: number;
    DENSITY_KERNEL: boolean;
    DRAG_REGIME_PERIGEE_KM: number;
    constructor(M_DAILY_MAXIMUM_DEGREE?: number, ZONAL_MAXIMUM_DEGREE?: number, SHORT_PERIODIC_MAXIMUM_DEGREE?: number, ENABLE_RESONANCE?: boolean, RESONANCE_MAXIMUM_DEGREE?: number, RESONANCE_BAND?: number, RESONANCE_MAXIMUM_K?: number, NEAR_RESONANCE_BAND?: number, GRID_STEP_DIVISOR?: number, DENSITY_KERNEL?: boolean, DRAG_REGIME_PERIGEE_KM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFMeanElementOptions.d.ts.map