import * as flatbuffers from 'flatbuffers';
import { MDSCandidate, MDSCandidateT } from './MDSCandidate.js';
/**
 * Mission Design Solution Set — a set of candidate trajectories produced by
 * solving a mission design broad search, typically a Pareto front over
 * competing objectives (total delta-V against total flight time).
 *
 * SDS had no multi-candidate container of any kind before this record. The
 * closest existing carrier for a single planned burn is OCM.Maneuver, whose
 * payload is untyped DATA:[string] with MAN_UNITS:[string] and which has no
 * v-infinity, turn angle, flyby periapsis radius, or C3.
 */
export declare class MDS implements flatbuffers.IUnpackableObject<MDST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDS;
    static getRootAsMDS(bb: flatbuffers.ByteBuffer, obj?: MDS): MDS;
    static getSizePrefixedRootAsMDS(bb: flatbuffers.ByteBuffer, obj?: MDS): MDS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier for this solution set.
     */
    SOLUTION_SET_ID(): string;
    SOLUTION_SET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * PROBLEM_ID of the $MDP this set solves. A solution set whose problem
     * definition is unknown is not reproducible.
     */
    PROBLEM_ID(): string | null;
    PROBLEM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Objectives the front is expressed over, e.g.
     * ["TOTAL_DELTA_V_KM_S", "TOTAL_FLIGHT_TIME_DAYS"]. Names MUST be field
     * names of MDSCandidate.
     */
    OBJECTIVES(index: number): string;
    OBJECTIVES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    objectivesLength(): number;
    /**
     * The candidates.
     */
    CANDIDATES(index: number, obj?: MDSCandidate): MDSCandidate | null;
    candidatesLength(): number;
    /**
     * Solver identity and version that produced the set.
     */
    SOLVER(): string | null;
    SOLVER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOLVER_VERSION(): string | null;
    SOLVER_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ephemeris source used, e.g. a SPICE kernel set identifier.
     */
    EPHEMERIS_SOURCE(): string | null;
    EPHEMERIS_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When the set was generated, ISO 8601.
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-form notes.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMDS(builder: flatbuffers.Builder): void;
    static addSolutionSetId(builder: flatbuffers.Builder, SOLUTION_SET_IDOffset: flatbuffers.Offset): void;
    static addProblemId(builder: flatbuffers.Builder, PROBLEM_IDOffset: flatbuffers.Offset): void;
    static addObjectives(builder: flatbuffers.Builder, OBJECTIVESOffset: flatbuffers.Offset): void;
    static createObjectivesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectivesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCandidates(builder: flatbuffers.Builder, CANDIDATESOffset: flatbuffers.Offset): void;
    static createCandidatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCandidatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSolver(builder: flatbuffers.Builder, SOLVEROffset: flatbuffers.Offset): void;
    static addSolverVersion(builder: flatbuffers.Builder, SOLVER_VERSIONOffset: flatbuffers.Offset): void;
    static addEphemerisSource(builder: flatbuffers.Builder, EPHEMERIS_SOURCEOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static endMDS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMDSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMDSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMDS(builder: flatbuffers.Builder, SOLUTION_SET_IDOffset: flatbuffers.Offset, PROBLEM_IDOffset: flatbuffers.Offset, OBJECTIVESOffset: flatbuffers.Offset, CANDIDATESOffset: flatbuffers.Offset, SOLVEROffset: flatbuffers.Offset, SOLVER_VERSIONOffset: flatbuffers.Offset, EPHEMERIS_SOURCEOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MDST;
    unpackTo(_o: MDST): void;
}
export declare class MDST implements flatbuffers.IGeneratedObject {
    SOLUTION_SET_ID: string | Uint8Array | null;
    PROBLEM_ID: string | Uint8Array | null;
    OBJECTIVES: (string)[];
    CANDIDATES: (MDSCandidateT)[];
    SOLVER: string | Uint8Array | null;
    SOLVER_VERSION: string | Uint8Array | null;
    EPHEMERIS_SOURCE: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    COMMENT: string | Uint8Array | null;
    constructor(SOLUTION_SET_ID?: string | Uint8Array | null, PROBLEM_ID?: string | Uint8Array | null, OBJECTIVES?: (string)[], CANDIDATES?: (MDSCandidateT)[], SOLVER?: string | Uint8Array | null, SOLVER_VERSION?: string | Uint8Array | null, EPHEMERIS_SOURCE?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, COMMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDS.d.ts.map