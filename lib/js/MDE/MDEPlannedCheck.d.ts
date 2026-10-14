import * as flatbuffers from 'flatbuffers';
import { maneuverStatus } from './maneuverStatus.js';
/**
 * One planned maneuver checked against the versions.
 */
export declare class MDEPlannedCheck implements flatbuffers.IUnpackableObject<MDEPlannedCheckT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEPlannedCheck;
    static getRootAsMDEPlannedCheck(bb: flatbuffers.ByteBuffer, obj?: MDEPlannedCheck): MDEPlannedCheck;
    static getSizePrefixedRootAsMDEPlannedCheck(bb: flatbuffers.ByteBuffer, obj?: MDEPlannedCheck): MDEPlannedCheck;
    /**
     * The plan's maneuver ID.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Planned ignition, Unix ms.
     */
    TIG_MS(): bigint;
    /**
     * Planned delta-v, m/s.
     */
    PLANNED_M_S(): number;
    /**
     * EXECUTED, CANCELLED or UNKNOWN.
     */
    STATUS(): maneuverStatus;
    /**
     * Group of plans checked together, Unix ms.
     */
    GROUP_START_MS(): bigint;
    GROUP_STOP_MS(): bigint;
    /**
     * Why it could not be decided; empty otherwise.
     */
    DETAIL(): string | null;
    DETAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Pre-burn and post-burn version descriptions; empty = none.
     */
    PRE(): string | null;
    PRE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    POST(): string | null;
    POST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Window compared, Unix ms.
     */
    WINDOW_START_MS(): bigint;
    WINDOW_STOP_MS(): bigint;
    /**
     * Semi-major axis change the plan models, km.
     */
    MODELED_DELTA_SMA_KM(): number;
    /**
     * Post-burn minus pre-burn semi-major axis, km.
     */
    POST_MINUS_PRE_SMA_KM(): number;
    /**
     * Executed semi-major axis change, km.
     */
    EXECUTED_DELTA_SMA_KM(): number;
    /**
     * Executed in-track and cross-track delta-v, m/s.
     */
    EXECUTED_IN_TRACK_M_S(): number;
    EXECUTED_CROSS_TRACK_M_S(): number;
    /**
     * Cross-track delta-v the plan models, m/s.
     */
    MODELED_CROSS_TRACK_M_S(): number;
    /**
     * Post minus pre cross-track, m/s.
     */
    POST_MINUS_PRE_CROSS_TRACK_M_S(): number;
    static startMDEPlannedCheck(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addTigMs(builder: flatbuffers.Builder, TIG_MS: bigint): void;
    static addPlannedMS(builder: flatbuffers.Builder, PLANNED_M_S: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: maneuverStatus): void;
    static addGroupStartMs(builder: flatbuffers.Builder, GROUP_START_MS: bigint): void;
    static addGroupStopMs(builder: flatbuffers.Builder, GROUP_STOP_MS: bigint): void;
    static addDetail(builder: flatbuffers.Builder, DETAILOffset: flatbuffers.Offset): void;
    static addPre(builder: flatbuffers.Builder, PREOffset: flatbuffers.Offset): void;
    static addPost(builder: flatbuffers.Builder, POSTOffset: flatbuffers.Offset): void;
    static addWindowStartMs(builder: flatbuffers.Builder, WINDOW_START_MS: bigint): void;
    static addWindowStopMs(builder: flatbuffers.Builder, WINDOW_STOP_MS: bigint): void;
    static addModeledDeltaSmaKm(builder: flatbuffers.Builder, MODELED_DELTA_SMA_KM: number): void;
    static addPostMinusPreSmaKm(builder: flatbuffers.Builder, POST_MINUS_PRE_SMA_KM: number): void;
    static addExecutedDeltaSmaKm(builder: flatbuffers.Builder, EXECUTED_DELTA_SMA_KM: number): void;
    static addExecutedInTrackMS(builder: flatbuffers.Builder, EXECUTED_IN_TRACK_M_S: number): void;
    static addExecutedCrossTrackMS(builder: flatbuffers.Builder, EXECUTED_CROSS_TRACK_M_S: number): void;
    static addModeledCrossTrackMS(builder: flatbuffers.Builder, MODELED_CROSS_TRACK_M_S: number): void;
    static addPostMinusPreCrossTrackMS(builder: flatbuffers.Builder, POST_MINUS_PRE_CROSS_TRACK_M_S: number): void;
    static endMDEPlannedCheck(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEPlannedCheck(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, TIG_MS: bigint, PLANNED_M_S: number, STATUS: maneuverStatus, GROUP_START_MS: bigint, GROUP_STOP_MS: bigint, DETAILOffset: flatbuffers.Offset, PREOffset: flatbuffers.Offset, POSTOffset: flatbuffers.Offset, WINDOW_START_MS: bigint, WINDOW_STOP_MS: bigint, MODELED_DELTA_SMA_KM: number, POST_MINUS_PRE_SMA_KM: number, EXECUTED_DELTA_SMA_KM: number, EXECUTED_IN_TRACK_M_S: number, EXECUTED_CROSS_TRACK_M_S: number, MODELED_CROSS_TRACK_M_S: number, POST_MINUS_PRE_CROSS_TRACK_M_S: number): flatbuffers.Offset;
    unpack(): MDEPlannedCheckT;
    unpackTo(_o: MDEPlannedCheckT): void;
}
export declare class MDEPlannedCheckT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    TIG_MS: bigint;
    PLANNED_M_S: number;
    STATUS: maneuverStatus;
    GROUP_START_MS: bigint;
    GROUP_STOP_MS: bigint;
    DETAIL: string | Uint8Array | null;
    PRE: string | Uint8Array | null;
    POST: string | Uint8Array | null;
    WINDOW_START_MS: bigint;
    WINDOW_STOP_MS: bigint;
    MODELED_DELTA_SMA_KM: number;
    POST_MINUS_PRE_SMA_KM: number;
    EXECUTED_DELTA_SMA_KM: number;
    EXECUTED_IN_TRACK_M_S: number;
    EXECUTED_CROSS_TRACK_M_S: number;
    MODELED_CROSS_TRACK_M_S: number;
    POST_MINUS_PRE_CROSS_TRACK_M_S: number;
    constructor(ID?: string | Uint8Array | null, TIG_MS?: bigint, PLANNED_M_S?: number, STATUS?: maneuverStatus, GROUP_START_MS?: bigint, GROUP_STOP_MS?: bigint, DETAIL?: string | Uint8Array | null, PRE?: string | Uint8Array | null, POST?: string | Uint8Array | null, WINDOW_START_MS?: bigint, WINDOW_STOP_MS?: bigint, MODELED_DELTA_SMA_KM?: number, POST_MINUS_PRE_SMA_KM?: number, EXECUTED_DELTA_SMA_KM?: number, EXECUTED_IN_TRACK_M_S?: number, EXECUTED_CROSS_TRACK_M_S?: number, MODELED_CROSS_TRACK_M_S?: number, POST_MINUS_PRE_CROSS_TRACK_M_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEPlannedCheck.d.ts.map