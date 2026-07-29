import * as flatbuffers from 'flatbuffers';
import { MDPEncounterStage, MDPEncounterStageT } from './MDPEncounterStage.js';
import { MDPFlightTimeBound, MDPFlightTimeBoundT } from './MDPFlightTimeBound.js';
import { mdpDsmMode } from './mdpDsmMode.js';
import { mdpTransferDirection } from './mdpTransferDirection.js';
/**
 * Mission Design Problem — the definition of a patched-conic broad search over
 * an ordered sequence of body encounters.
 *
 * This is the PROBLEM, not a solution: it states what is being searched and
 * under what constraints. Candidate trajectories produced by solving it are
 * carried in $MDS. Nothing existing covers this: $LMS is a single Lambert
 * boundary-value problem with no body/epoch grid and no sequence, $MPE is an
 * Earth mean-element targeter, $MNF is an Earth manifold sweep, and $MNV is an
 * SSA-detected maneuver on a catalogued Earth object.
 */
export declare class MDP implements flatbuffers.IUnpackableObject<MDPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDP;
    static getRootAsMDP(bb: flatbuffers.ByteBuffer, obj?: MDP): MDP;
    static getSizePrefixedRootAsMDP(bb: flatbuffers.ByteBuffer, obj?: MDP): MDP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier for this problem definition.
     */
    PROBLEM_ID(): string;
    PROBLEM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ordered encounter stages. Order in this vector IS the body sequence.
     */
    ENCOUNTER_STAGES(index: number, obj?: MDPEncounterStage): MDPEncounterStage | null;
    encounterStagesLength(): number;
    /**
     * Per-leg and cumulative time-of-flight bounds.
     */
    FLIGHT_TIME_BOUNDS(index: number, obj?: MDPFlightTimeBound): MDPFlightTimeBound | null;
    flightTimeBoundsLength(): number;
    /**
     * Cap on total mission duration, days.
     */
    MAX_TOTAL_FLIGHT_TIME_DAYS(): number;
    /**
     * Cap on launch characteristic energy C3, km^2/s^2.
     */
    MAX_LAUNCH_C3_KM2_S2(): number;
    /**
     * Cap on total post-launch delta-V, km/s.
     */
    MAX_TOTAL_DELTA_V_KM_S(): number;
    /**
     * Deep-space maneuver search controls.
     */
    DSM_MODE(): mdpDsmMode;
    /**
     * Cap on the magnitude of any single deep-space maneuver, km/s.
     */
    MAX_DSM_DELTA_V_KM_S(): number;
    /**
     * Grid step used when searching deep-space maneuver magnitude, km/s.
     */
    DSM_GRID_STEP_KM_S(): number;
    /**
     * Lambert controls: maximum number of complete revolutions considered on a
     * leg, and the admissible transfer direction.
     */
    MAX_REVOLUTIONS(): number;
    TRANSFER_DIRECTION(): mdpTransferDirection;
    /**
     * Output decimation: width of the time bin within which only the best
     * candidate is retained. Zero means no decimation.
     */
    OUTPUT_TIME_BIN_DAYS(): number;
    /**
     * Optional spacecraft propulsion limits constraining admissible solutions.
     */
    MAX_THRUST_N(): number;
    SPECIFIC_IMPULSE_S(): number;
    DRY_MASS_KG(): number;
    INITIAL_MASS_KG(): number;
    /**
     * Ephemeris source the search was posed against, e.g. a SPICE kernel set
     * identifier. Recorded so a solution set can be reproduced.
     */
    EPHEMERIS_SOURCE(): string | null;
    EPHEMERIS_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-form notes.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMDP(builder: flatbuffers.Builder): void;
    static addProblemId(builder: flatbuffers.Builder, PROBLEM_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addEncounterStages(builder: flatbuffers.Builder, ENCOUNTER_STAGESOffset: flatbuffers.Offset): void;
    static createEncounterStagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEncounterStagesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFlightTimeBounds(builder: flatbuffers.Builder, FLIGHT_TIME_BOUNDSOffset: flatbuffers.Offset): void;
    static createFlightTimeBoundsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFlightTimeBoundsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxTotalFlightTimeDays(builder: flatbuffers.Builder, MAX_TOTAL_FLIGHT_TIME_DAYS: number): void;
    static addMaxLaunchC3Km2S2(builder: flatbuffers.Builder, MAX_LAUNCH_C3_KM2_S2: number): void;
    static addMaxTotalDeltaVKmS(builder: flatbuffers.Builder, MAX_TOTAL_DELTA_V_KM_S: number): void;
    static addDsmMode(builder: flatbuffers.Builder, DSM_MODE: mdpDsmMode): void;
    static addMaxDsmDeltaVKmS(builder: flatbuffers.Builder, MAX_DSM_DELTA_V_KM_S: number): void;
    static addDsmGridStepKmS(builder: flatbuffers.Builder, DSM_GRID_STEP_KM_S: number): void;
    static addMaxRevolutions(builder: flatbuffers.Builder, MAX_REVOLUTIONS: number): void;
    static addTransferDirection(builder: flatbuffers.Builder, TRANSFER_DIRECTION: mdpTransferDirection): void;
    static addOutputTimeBinDays(builder: flatbuffers.Builder, OUTPUT_TIME_BIN_DAYS: number): void;
    static addMaxThrustN(builder: flatbuffers.Builder, MAX_THRUST_N: number): void;
    static addSpecificImpulseS(builder: flatbuffers.Builder, SPECIFIC_IMPULSE_S: number): void;
    static addDryMassKg(builder: flatbuffers.Builder, DRY_MASS_KG: number): void;
    static addInitialMassKg(builder: flatbuffers.Builder, INITIAL_MASS_KG: number): void;
    static addEphemerisSource(builder: flatbuffers.Builder, EPHEMERIS_SOURCEOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static endMDP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMDPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMDPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMDP(builder: flatbuffers.Builder, PROBLEM_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, ENCOUNTER_STAGESOffset: flatbuffers.Offset, FLIGHT_TIME_BOUNDSOffset: flatbuffers.Offset, MAX_TOTAL_FLIGHT_TIME_DAYS: number, MAX_LAUNCH_C3_KM2_S2: number, MAX_TOTAL_DELTA_V_KM_S: number, DSM_MODE: mdpDsmMode, MAX_DSM_DELTA_V_KM_S: number, DSM_GRID_STEP_KM_S: number, MAX_REVOLUTIONS: number, TRANSFER_DIRECTION: mdpTransferDirection, OUTPUT_TIME_BIN_DAYS: number, MAX_THRUST_N: number, SPECIFIC_IMPULSE_S: number, DRY_MASS_KG: number, INITIAL_MASS_KG: number, EPHEMERIS_SOURCEOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MDPT;
    unpackTo(_o: MDPT): void;
}
export declare class MDPT implements flatbuffers.IGeneratedObject {
    PROBLEM_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    ENCOUNTER_STAGES: (MDPEncounterStageT)[];
    FLIGHT_TIME_BOUNDS: (MDPFlightTimeBoundT)[];
    MAX_TOTAL_FLIGHT_TIME_DAYS: number;
    MAX_LAUNCH_C3_KM2_S2: number;
    MAX_TOTAL_DELTA_V_KM_S: number;
    DSM_MODE: mdpDsmMode;
    MAX_DSM_DELTA_V_KM_S: number;
    DSM_GRID_STEP_KM_S: number;
    MAX_REVOLUTIONS: number;
    TRANSFER_DIRECTION: mdpTransferDirection;
    OUTPUT_TIME_BIN_DAYS: number;
    MAX_THRUST_N: number;
    SPECIFIC_IMPULSE_S: number;
    DRY_MASS_KG: number;
    INITIAL_MASS_KG: number;
    EPHEMERIS_SOURCE: string | Uint8Array | null;
    COMMENT: string | Uint8Array | null;
    constructor(PROBLEM_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, ENCOUNTER_STAGES?: (MDPEncounterStageT)[], FLIGHT_TIME_BOUNDS?: (MDPFlightTimeBoundT)[], MAX_TOTAL_FLIGHT_TIME_DAYS?: number, MAX_LAUNCH_C3_KM2_S2?: number, MAX_TOTAL_DELTA_V_KM_S?: number, DSM_MODE?: mdpDsmMode, MAX_DSM_DELTA_V_KM_S?: number, DSM_GRID_STEP_KM_S?: number, MAX_REVOLUTIONS?: number, TRANSFER_DIRECTION?: mdpTransferDirection, OUTPUT_TIME_BIN_DAYS?: number, MAX_THRUST_N?: number, SPECIFIC_IMPULSE_S?: number, DRY_MASS_KG?: number, INITIAL_MASS_KG?: number, EPHEMERIS_SOURCE?: string | Uint8Array | null, COMMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDP.d.ts.map