import * as flatbuffers from 'flatbuffers';
import { RFM, RFMT } from './RFM.js';
import { mplArc, mplArcT } from './mplArc.js';
import { mplBurn, mplBurnT } from './mplBurn.js';
import { mplGeometrySolution, mplGeometrySolutionT } from './mplGeometrySolution.js';
import { mplOption, mplOptionT } from './mplOption.js';
import { mplPhasingSolution, mplPhasingSolutionT } from './mplPhasingSolution.js';
import { mplProblem } from './mplProblem.js';
import { mplRelativeSolution, mplRelativeSolutionT } from './mplRelativeSolution.js';
import { mplRendezvousSolution, mplRendezvousSolutionT } from './mplRendezvousSolution.js';
import { mplRequest, mplRequestT } from './mplRequest.js';
import { mplSolver, mplSolverT } from './mplSolver.js';
import { mplStatus } from './mplStatus.js';
import { mplTrajectory, mplTrajectoryT } from './mplTrajectory.js';
/**
 * Maneuver Plan - one planning request and the plan that answers it.
 */
export declare class MPL implements flatbuffers.IUnpackableObject<MPLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MPL;
    static getRootAsMPL(bb: flatbuffers.ByteBuffer, obj?: MPL): MPL;
    static getSizePrefixedRootAsMPL(bb: flatbuffers.ByteBuffer, obj?: MPL): MPL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the plan; empty = not assigned.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds the request was made (or the plan produced).
     */
    CREATED_AT_MS(): bigint;
    /**
     * Identifier of the planning service or tool that answered.
     */
    PLANNER(): string | null;
    PLANNER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROBLEM(): mplProblem;
    /**
     * Unix milliseconds of the plan's start (offset 0); 0 = the plan is in
     * relative time only.
     */
    PLAN_EPOCH_MS(): bigint;
    /**
     * The maneuvering object (chaser) and, for relative problems, the target.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGET_OBJECT_ID(): string | null;
    TARGET_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inertial frame of every inertial state and Inertial-axes vector; empty =
     * the central body's GCRF/EME2000.
     */
    REFERENCE_FRAME(obj?: RFM): RFM | null;
    REQUEST(obj?: mplRequest): mplRequest | null;
    STATUS(): mplStatus;
    /**
     * Stable machine-readable reason when STATUS is not Solved, e.g.
     * "invalid-parameter", "no-solution"; empty otherwise.
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The burns, in time order.
     */
    BURNS(index: number, obj?: mplBurn): mplBurn | null;
    burnsLength(): number;
    /**
     * The arcs, in time order.
     */
    ARCS(index: number, obj?: mplArc): mplArc | null;
    arcsLength(): number;
    /**
     * Total delta-v: the sum of burn magnitudes (the propellant budget), km/s.
     */
    TOTAL_DELTA_V_KM_S(): number;
    /**
     * Time from the plan's start to its end, s.
     */
    TOTAL_TIME_S(): number;
    /**
     * Propellant for the whole plan, kg; 0 = not computed.
     */
    TOTAL_DELTA_MASS_KG(): number;
    /**
     * Solver evidence for the plan as a whole.
     */
    SOLVER(obj?: mplSolver): mplSolver | null;
    /**
     * Options weighed, including the selected one.
     */
    OPTIONS(index: number, obj?: mplOption): mplOption | null;
    optionsLength(): number;
    /**
     * The whole plan's sampled trajectory; empty = not sampled.
     */
    TRAJECTORY(obj?: mplTrajectory): mplTrajectory | null;
    PHASING(obj?: mplPhasingSolution): mplPhasingSolution | null;
    RELATIVE(obj?: mplRelativeSolution): mplRelativeSolution | null;
    RENDEZVOUS(obj?: mplRendezvousSolution): mplRendezvousSolution | null;
    GEOMETRY(obj?: mplGeometrySolution): mplGeometrySolution | null;
    static startMPL(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addCreatedAtMs(builder: flatbuffers.Builder, CREATED_AT_MS: bigint): void;
    static addPlanner(builder: flatbuffers.Builder, PLANNEROffset: flatbuffers.Offset): void;
    static addProblem(builder: flatbuffers.Builder, PROBLEM: mplProblem): void;
    static addPlanEpochMs(builder: flatbuffers.Builder, PLAN_EPOCH_MS: bigint): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addTargetObjectId(builder: flatbuffers.Builder, TARGET_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addRequest(builder: flatbuffers.Builder, REQUESTOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: mplStatus): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addBurns(builder: flatbuffers.Builder, BURNSOffset: flatbuffers.Offset): void;
    static createBurnsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBurnsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addArcs(builder: flatbuffers.Builder, ARCSOffset: flatbuffers.Offset): void;
    static createArcsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startArcsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalDeltaVKmS(builder: flatbuffers.Builder, TOTAL_DELTA_V_KM_S: number): void;
    static addTotalTimeS(builder: flatbuffers.Builder, TOTAL_TIME_S: number): void;
    static addTotalDeltaMassKg(builder: flatbuffers.Builder, TOTAL_DELTA_MASS_KG: number): void;
    static addSolver(builder: flatbuffers.Builder, SOLVEROffset: flatbuffers.Offset): void;
    static addOptions(builder: flatbuffers.Builder, OPTIONSOffset: flatbuffers.Offset): void;
    static createOptionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOptionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrajectory(builder: flatbuffers.Builder, TRAJECTORYOffset: flatbuffers.Offset): void;
    static addPhasing(builder: flatbuffers.Builder, PHASINGOffset: flatbuffers.Offset): void;
    static addRelative(builder: flatbuffers.Builder, RELATIVEOffset: flatbuffers.Offset): void;
    static addRendezvous(builder: flatbuffers.Builder, RENDEZVOUSOffset: flatbuffers.Offset): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static endMPL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMPLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMPLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): MPLT;
    unpackTo(_o: MPLT): void;
}
export declare class MPLT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CREATED_AT_MS: bigint;
    PLANNER: string | Uint8Array | null;
    PROBLEM: mplProblem;
    PLAN_EPOCH_MS: bigint;
    OBJECT_ID: string | Uint8Array | null;
    TARGET_OBJECT_ID: string | Uint8Array | null;
    REFERENCE_FRAME: RFMT | null;
    REQUEST: mplRequestT | null;
    STATUS: mplStatus;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    BURNS: (mplBurnT)[];
    ARCS: (mplArcT)[];
    TOTAL_DELTA_V_KM_S: number;
    TOTAL_TIME_S: number;
    TOTAL_DELTA_MASS_KG: number;
    SOLVER: mplSolverT | null;
    OPTIONS: (mplOptionT)[];
    TRAJECTORY: mplTrajectoryT | null;
    PHASING: mplPhasingSolutionT | null;
    RELATIVE: mplRelativeSolutionT | null;
    RENDEZVOUS: mplRendezvousSolutionT | null;
    GEOMETRY: mplGeometrySolutionT | null;
    constructor(ID?: string | Uint8Array | null, CREATED_AT_MS?: bigint, PLANNER?: string | Uint8Array | null, PROBLEM?: mplProblem, PLAN_EPOCH_MS?: bigint, OBJECT_ID?: string | Uint8Array | null, TARGET_OBJECT_ID?: string | Uint8Array | null, REFERENCE_FRAME?: RFMT | null, REQUEST?: mplRequestT | null, STATUS?: mplStatus, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null, BURNS?: (mplBurnT)[], ARCS?: (mplArcT)[], TOTAL_DELTA_V_KM_S?: number, TOTAL_TIME_S?: number, TOTAL_DELTA_MASS_KG?: number, SOLVER?: mplSolverT | null, OPTIONS?: (mplOptionT)[], TRAJECTORY?: mplTrajectoryT | null, PHASING?: mplPhasingSolutionT | null, RELATIVE?: mplRelativeSolutionT | null, RENDEZVOUS?: mplRendezvousSolutionT | null, GEOMETRY?: mplGeometrySolutionT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MPL.d.ts.map