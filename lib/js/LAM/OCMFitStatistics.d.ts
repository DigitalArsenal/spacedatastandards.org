import * as flatbuffers from 'flatbuffers';
import { OCMHeldOutDay, OCMHeldOutDayT } from './OCMHeldOutDay.js';
/**
 * Position statistics of an element set fitted to a reference ephemeris, km. SDS addition:
 * CCSDS 502.0-B-3 WEIGHTED_RMS and OD_RESIDUAL_RMS state no position unit.
 */
export declare class OCMFitStatistics implements flatbuffers.IUnpackableObject<OCMFitStatisticsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMFitStatistics;
    static getRootAsOCMFitStatistics(bb: flatbuffers.ByteBuffer, obj?: OCMFitStatistics): OCMFitStatistics;
    static getSizePrefixedRootAsOCMFitStatistics(bb: flatbuffers.ByteBuffer, obj?: OCMFitStatistics): OCMFitStatistics;
    /**
     * Reference states fitted.
     */
    FIT_STATES(): number;
    /**
     * Position RMS over the fit arc, km.
     */
    FIT_RMS_KM(): number;
    /**
     * Largest position error over the fit arc, km.
     */
    FIT_MAX_KM(): number;
    /**
     * RMS of each position error component in the model's radial, in-track and cross-track
     * axes, km.
     */
    FIT_RADIAL_RMS_KM(): number;
    FIT_IN_TRACK_RMS_KM(): number;
    FIT_CROSS_TRACK_RMS_KM(): number;
    /**
     * Iterations the fit took.
     */
    ITERATIONS(): number;
    /**
     * True when the fit converged.
     */
    CONVERGED(): boolean;
    /**
     * End of the held-out window (ISO 8601 UTC); empty without one.
     */
    HELD_OUT_STOP(): string | null;
    HELD_OUT_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Held-out reference states, their position RMS and largest error, km.
     */
    HELD_OUT_STATES(): number;
    HELD_OUT_RMS_KM(): number;
    HELD_OUT_MAX_KM(): number;
    /**
     * The held-out error by day after the fit arc.
     */
    HELD_OUT_DAYS(index: number, obj?: OCMHeldOutDay): OCMHeldOutDay | null;
    heldOutDaysLength(): number;
    /**
     * CID of the $PCF the fit ran under: its span rule, priors and holdout.
     */
    PCF_CID(): string | null;
    PCF_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First epoch of the fit arc (ISO 8601 UTC).
     */
    FIT_START(): string | null;
    FIT_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Last epoch of the fit arc (ISO 8601 UTC).
     */
    FIT_STOP(): string | null;
    FIT_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOCMFitStatistics(builder: flatbuffers.Builder): void;
    static addFitStates(builder: flatbuffers.Builder, FIT_STATES: number): void;
    static addFitRmsKm(builder: flatbuffers.Builder, FIT_RMS_KM: number): void;
    static addFitMaxKm(builder: flatbuffers.Builder, FIT_MAX_KM: number): void;
    static addFitRadialRmsKm(builder: flatbuffers.Builder, FIT_RADIAL_RMS_KM: number): void;
    static addFitInTrackRmsKm(builder: flatbuffers.Builder, FIT_IN_TRACK_RMS_KM: number): void;
    static addFitCrossTrackRmsKm(builder: flatbuffers.Builder, FIT_CROSS_TRACK_RMS_KM: number): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static addConverged(builder: flatbuffers.Builder, CONVERGED: boolean): void;
    static addHeldOutStop(builder: flatbuffers.Builder, HELD_OUT_STOPOffset: flatbuffers.Offset): void;
    static addHeldOutStates(builder: flatbuffers.Builder, HELD_OUT_STATES: number): void;
    static addHeldOutRmsKm(builder: flatbuffers.Builder, HELD_OUT_RMS_KM: number): void;
    static addHeldOutMaxKm(builder: flatbuffers.Builder, HELD_OUT_MAX_KM: number): void;
    static addHeldOutDays(builder: flatbuffers.Builder, HELD_OUT_DAYSOffset: flatbuffers.Offset): void;
    static createHeldOutDaysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHeldOutDaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPcfCid(builder: flatbuffers.Builder, PCF_CIDOffset: flatbuffers.Offset): void;
    static addFitStart(builder: flatbuffers.Builder, FIT_STARTOffset: flatbuffers.Offset): void;
    static addFitStop(builder: flatbuffers.Builder, FIT_STOPOffset: flatbuffers.Offset): void;
    static endOCMFitStatistics(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMFitStatistics(builder: flatbuffers.Builder, FIT_STATES: number, FIT_RMS_KM: number, FIT_MAX_KM: number, FIT_RADIAL_RMS_KM: number, FIT_IN_TRACK_RMS_KM: number, FIT_CROSS_TRACK_RMS_KM: number, ITERATIONS: number, CONVERGED: boolean, HELD_OUT_STOPOffset: flatbuffers.Offset, HELD_OUT_STATES: number, HELD_OUT_RMS_KM: number, HELD_OUT_MAX_KM: number, HELD_OUT_DAYSOffset: flatbuffers.Offset, PCF_CIDOffset: flatbuffers.Offset, FIT_STARTOffset: flatbuffers.Offset, FIT_STOPOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OCMFitStatisticsT;
    unpackTo(_o: OCMFitStatisticsT): void;
}
export declare class OCMFitStatisticsT implements flatbuffers.IGeneratedObject {
    FIT_STATES: number;
    FIT_RMS_KM: number;
    FIT_MAX_KM: number;
    FIT_RADIAL_RMS_KM: number;
    FIT_IN_TRACK_RMS_KM: number;
    FIT_CROSS_TRACK_RMS_KM: number;
    ITERATIONS: number;
    CONVERGED: boolean;
    HELD_OUT_STOP: string | Uint8Array | null;
    HELD_OUT_STATES: number;
    HELD_OUT_RMS_KM: number;
    HELD_OUT_MAX_KM: number;
    HELD_OUT_DAYS: (OCMHeldOutDayT)[];
    PCF_CID: string | Uint8Array | null;
    FIT_START: string | Uint8Array | null;
    FIT_STOP: string | Uint8Array | null;
    constructor(FIT_STATES?: number, FIT_RMS_KM?: number, FIT_MAX_KM?: number, FIT_RADIAL_RMS_KM?: number, FIT_IN_TRACK_RMS_KM?: number, FIT_CROSS_TRACK_RMS_KM?: number, ITERATIONS?: number, CONVERGED?: boolean, HELD_OUT_STOP?: string | Uint8Array | null, HELD_OUT_STATES?: number, HELD_OUT_RMS_KM?: number, HELD_OUT_MAX_KM?: number, HELD_OUT_DAYS?: (OCMHeldOutDayT)[], PCF_CID?: string | Uint8Array | null, FIT_START?: string | Uint8Array | null, FIT_STOP?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMFitStatistics.d.ts.map