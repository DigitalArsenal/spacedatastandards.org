import * as flatbuffers from 'flatbuffers';
import { tbpPeriodicOrbit, tbpPeriodicOrbitT } from './tbpPeriodicOrbit.js';
import { tbpStationKeepingStrategy } from './tbpStationKeepingStrategy.js';
/**
 * Station-keeping budget for a periodic orbit.
 */
export declare class tbpStationKeeping implements flatbuffers.IUnpackableObject<tbpStationKeepingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpStationKeeping;
    static getRootAstbpStationKeeping(bb: flatbuffers.ByteBuffer, obj?: tbpStationKeeping): tbpStationKeeping;
    static getSizePrefixedRootAstbpStationKeeping(bb: flatbuffers.ByteBuffer, obj?: tbpStationKeeping): tbpStationKeeping;
    /**
     * The orbit kept (its INITIAL_STATE, PERIOD and JACOBI at least).
     */
    ORBIT(obj?: tbpPeriodicOrbit): tbpPeriodicOrbit | null;
    STRATEGY(): tbpStationKeepingStrategy;
    /**
     * Navigation (orbit knowledge) error, km, 1 sigma.
     */
    NAVIGATION_ERROR_KM(): number;
    /**
     * Maneuver execution error, fraction of each burn, 1 sigma.
     */
    EXECUTION_ERROR_FRACTION(): number;
    /**
     * Station-keeping cycles simulated.
     */
    CYCLES(): number;
    /**
     * Result: delta-v per year, km/s.
     */
    ANNUAL_DELTA_V_KM_S(): number;
    /**
     * Result: mean and largest delta-v per cycle, km/s.
     */
    MEAN_CYCLE_DELTA_V_KM_S(): number;
    MAX_CYCLE_DELTA_V_KM_S(): number;
    /**
     * Result: delta-v of each cycle, km/s.
     */
    CYCLE_DELTA_V_KM_S(index: number): number | null;
    cycleDeltaVKmSLength(): number;
    cycleDeltaVKmSArray(): Float64Array | null;
    /**
     * Result: true when the orbit stays bounded over the simulation.
     */
    BOUNDED(): boolean;
    static starttbpStationKeeping(builder: flatbuffers.Builder): void;
    static addOrbit(builder: flatbuffers.Builder, ORBITOffset: flatbuffers.Offset): void;
    static addStrategy(builder: flatbuffers.Builder, STRATEGY: tbpStationKeepingStrategy): void;
    static addNavigationErrorKm(builder: flatbuffers.Builder, NAVIGATION_ERROR_KM: number): void;
    static addExecutionErrorFraction(builder: flatbuffers.Builder, EXECUTION_ERROR_FRACTION: number): void;
    static addCycles(builder: flatbuffers.Builder, CYCLES: number): void;
    static addAnnualDeltaVKmS(builder: flatbuffers.Builder, ANNUAL_DELTA_V_KM_S: number): void;
    static addMeanCycleDeltaVKmS(builder: flatbuffers.Builder, MEAN_CYCLE_DELTA_V_KM_S: number): void;
    static addMaxCycleDeltaVKmS(builder: flatbuffers.Builder, MAX_CYCLE_DELTA_V_KM_S: number): void;
    static addCycleDeltaVKmS(builder: flatbuffers.Builder, CYCLE_DELTA_V_KM_SOffset: flatbuffers.Offset): void;
    static createCycleDeltaVKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCycleDeltaVKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCycleDeltaVKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBounded(builder: flatbuffers.Builder, BOUNDED: boolean): void;
    static endtbpStationKeeping(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createtbpStationKeeping(builder: flatbuffers.Builder, ORBITOffset: flatbuffers.Offset, STRATEGY: tbpStationKeepingStrategy, NAVIGATION_ERROR_KM: number, EXECUTION_ERROR_FRACTION: number, CYCLES: number, ANNUAL_DELTA_V_KM_S: number, MEAN_CYCLE_DELTA_V_KM_S: number, MAX_CYCLE_DELTA_V_KM_S: number, CYCLE_DELTA_V_KM_SOffset: flatbuffers.Offset, BOUNDED: boolean): flatbuffers.Offset;
    unpack(): tbpStationKeepingT;
    unpackTo(_o: tbpStationKeepingT): void;
}
export declare class tbpStationKeepingT implements flatbuffers.IGeneratedObject {
    ORBIT: tbpPeriodicOrbitT | null;
    STRATEGY: tbpStationKeepingStrategy;
    NAVIGATION_ERROR_KM: number;
    EXECUTION_ERROR_FRACTION: number;
    CYCLES: number;
    ANNUAL_DELTA_V_KM_S: number;
    MEAN_CYCLE_DELTA_V_KM_S: number;
    MAX_CYCLE_DELTA_V_KM_S: number;
    CYCLE_DELTA_V_KM_S: (number)[];
    BOUNDED: boolean;
    constructor(ORBIT?: tbpPeriodicOrbitT | null, STRATEGY?: tbpStationKeepingStrategy, NAVIGATION_ERROR_KM?: number, EXECUTION_ERROR_FRACTION?: number, CYCLES?: number, ANNUAL_DELTA_V_KM_S?: number, MEAN_CYCLE_DELTA_V_KM_S?: number, MAX_CYCLE_DELTA_V_KM_S?: number, CYCLE_DELTA_V_KM_S?: (number)[], BOUNDED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpStationKeeping.d.ts.map