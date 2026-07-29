import * as flatbuffers from 'flatbuffers';
import { MDSDeepSpaceManeuver, MDSDeepSpaceManeuverT } from './MDSDeepSpaceManeuver.js';
import { MDSEncounter, MDSEncounterT } from './MDSEncounter.js';
/**
 * One candidate trajectory on the front.
 */
export declare class MDSCandidate implements flatbuffers.IUnpackableObject<MDSCandidateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDSCandidate;
    static getRootAsMDSCandidate(bb: flatbuffers.ByteBuffer, obj?: MDSCandidate): MDSCandidate;
    static getSizePrefixedRootAsMDSCandidate(bb: flatbuffers.ByteBuffer, obj?: MDSCandidate): MDSCandidate;
    /**
     * Solver-assigned trajectory identifier, unique within the set.
     */
    CANDIDATE_ID(): string | null;
    CANDIDATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ordered encounters, first to last.
     */
    ENCOUNTERS(index: number, obj?: MDSEncounter): MDSEncounter | null;
    encountersLength(): number;
    /**
     * Deep-space maneuvers, ordered by LEG_INDEX then ARC_FRACTION.
     */
    DEEP_SPACE_MANEUVERS(index: number, obj?: MDSDeepSpaceManeuver): MDSDeepSpaceManeuver | null;
    deepSpaceManeuversLength(): number;
    /**
     * Total post-launch delta-V, km/s.
     */
    TOTAL_DELTA_V_KM_S(): number;
    /**
     * Total flight time from first to last encounter, days.
     */
    TOTAL_FLIGHT_TIME_DAYS(): number;
    /**
     * Launch characteristic energy, km^2/s^2.
     */
    LAUNCH_C3_KM2_S2(): number;
    /**
     * Hyperbolic excess speed at arrival, km/s.
     */
    ARRIVAL_V_INFINITY_KM_S(): number;
    /**
     * Reference escape delta-V from the departure body, km/s.
     */
    ESCAPE_DELTA_V_KM_S(): number;
    /**
     * Reference insertion delta-V at the arrival body, km/s.
     */
    INSERTION_DELTA_V_KM_S(): number;
    /**
     * True when this candidate is non-dominated within the set. A set MAY carry
     * dominated candidates for context; a consumer plotting a front MUST filter
     * on this rather than assume every member is non-dominated.
     */
    NON_DOMINATED(): boolean;
    static startMDSCandidate(builder: flatbuffers.Builder): void;
    static addCandidateId(builder: flatbuffers.Builder, CANDIDATE_IDOffset: flatbuffers.Offset): void;
    static addEncounters(builder: flatbuffers.Builder, ENCOUNTERSOffset: flatbuffers.Offset): void;
    static createEncountersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEncountersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDeepSpaceManeuvers(builder: flatbuffers.Builder, DEEP_SPACE_MANEUVERSOffset: flatbuffers.Offset): void;
    static createDeepSpaceManeuversVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDeepSpaceManeuversVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalDeltaVKmS(builder: flatbuffers.Builder, TOTAL_DELTA_V_KM_S: number): void;
    static addTotalFlightTimeDays(builder: flatbuffers.Builder, TOTAL_FLIGHT_TIME_DAYS: number): void;
    static addLaunchC3Km2S2(builder: flatbuffers.Builder, LAUNCH_C3_KM2_S2: number): void;
    static addArrivalVInfinityKmS(builder: flatbuffers.Builder, ARRIVAL_V_INFINITY_KM_S: number): void;
    static addEscapeDeltaVKmS(builder: flatbuffers.Builder, ESCAPE_DELTA_V_KM_S: number): void;
    static addInsertionDeltaVKmS(builder: flatbuffers.Builder, INSERTION_DELTA_V_KM_S: number): void;
    static addNonDominated(builder: flatbuffers.Builder, NON_DOMINATED: boolean): void;
    static endMDSCandidate(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDSCandidate(builder: flatbuffers.Builder, CANDIDATE_IDOffset: flatbuffers.Offset, ENCOUNTERSOffset: flatbuffers.Offset, DEEP_SPACE_MANEUVERSOffset: flatbuffers.Offset, TOTAL_DELTA_V_KM_S: number, TOTAL_FLIGHT_TIME_DAYS: number, LAUNCH_C3_KM2_S2: number, ARRIVAL_V_INFINITY_KM_S: number, ESCAPE_DELTA_V_KM_S: number, INSERTION_DELTA_V_KM_S: number, NON_DOMINATED: boolean): flatbuffers.Offset;
    unpack(): MDSCandidateT;
    unpackTo(_o: MDSCandidateT): void;
}
export declare class MDSCandidateT implements flatbuffers.IGeneratedObject {
    CANDIDATE_ID: string | Uint8Array | null;
    ENCOUNTERS: (MDSEncounterT)[];
    DEEP_SPACE_MANEUVERS: (MDSDeepSpaceManeuverT)[];
    TOTAL_DELTA_V_KM_S: number;
    TOTAL_FLIGHT_TIME_DAYS: number;
    LAUNCH_C3_KM2_S2: number;
    ARRIVAL_V_INFINITY_KM_S: number;
    ESCAPE_DELTA_V_KM_S: number;
    INSERTION_DELTA_V_KM_S: number;
    NON_DOMINATED: boolean;
    constructor(CANDIDATE_ID?: string | Uint8Array | null, ENCOUNTERS?: (MDSEncounterT)[], DEEP_SPACE_MANEUVERS?: (MDSDeepSpaceManeuverT)[], TOTAL_DELTA_V_KM_S?: number, TOTAL_FLIGHT_TIME_DAYS?: number, LAUNCH_C3_KM2_S2?: number, ARRIVAL_V_INFINITY_KM_S?: number, ESCAPE_DELTA_V_KM_S?: number, INSERTION_DELTA_V_KM_S?: number, NON_DOMINATED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDSCandidate.d.ts.map