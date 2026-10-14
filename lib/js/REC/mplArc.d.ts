import * as flatbuffers from 'flatbuffers';
import { ephemerisDataLine, ephemerisDataLineT } from './ephemerisDataLine.js';
import { mplArcRole } from './mplArcRole.js';
import { mplAxes } from './mplAxes.js';
import { mplConic } from './mplConic.js';
import { mplLambertBranch } from './mplLambertBranch.js';
import { mplSolver, mplSolverT } from './mplSolver.js';
import { mplTrajectory, mplTrajectoryT } from './mplTrajectory.js';
/**
 * One arc of a plan: a coast or transfer between burns, or a leg, phase or
 * segment of a relative-motion plan.
 */
export declare class mplArc implements flatbuffers.IUnpackableObject<mplArcT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplArc;
    static getRootAsmplArc(bb: flatbuffers.ByteBuffer, obj?: mplArc): mplArc;
    static getSizePrefixedRootAsmplArc(bb: flatbuffers.ByteBuffer, obj?: mplArc): mplArc;
    /**
     * Label within the plan, e.g. "transfer", "leg 2".
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ROLE(): mplArcRole;
    /**
     * Seconds from the plan's start to the arc's start.
     */
    START_OFFSET_S(): number;
    /**
     * Duration of the arc, s (time of flight for a transfer).
     */
    DURATION_S(): number;
    /**
     * Revolutions completed on the arc (Lambert revolution count, phasing
     * revolutions); 0 = less than one.
     */
    REVOLUTIONS(): number;
    BRANCH(): mplLambertBranch;
    CONIC(): mplConic;
    /**
     * Semi-major axis of the arc's conic, km; 0 = not representable
     * (parabola) or not computed.
     */
    SEMI_MAJOR_AXIS_KM(): number;
    /**
     * Eccentricity of the arc's conic.
     */
    ECCENTRICITY(): number;
    /**
     * Periapsis radius from the body centre, km. Reported, never a refusal: an
     * arc may pass below the body surface, and the consumer screens.
     */
    PERIAPSIS_RADIUS_KM(): number;
    /**
     * Apoapsis radius, km; 0 = none (parabolic or hyperbolic).
     */
    APOAPSIS_RADIUS_KM(): number;
    /**
     * Period of the arc's orbit, s; 0 = not closed or not computed.
     */
    PERIOD_S(): number;
    /**
     * State at the arc's start (position and velocity just after the burn
     * that starts it). Inertial (km, km/s) unless STATE_AXES says relative.
     */
    START_STATE(obj?: ephemerisDataLine): ephemerisDataLine | null;
    /**
     * State at the arc's end (just before the burn that ends it).
     */
    END_STATE(obj?: ephemerisDataLine): ephemerisDataLine | null;
    /**
     * Axes of START_STATE and END_STATE.
     */
    STATE_AXES(): mplAxes;
    /**
     * Delta-v of the burns that start and end this arc, km/s; 0 = not
     * computed.
     */
    DELTA_V_KM_S(): number;
    /**
     * Universal variable z of a Lambert solution (dimensionless); 0 elsewhere.
     */
    LAMBERT_Z(): number;
    SOLVER(obj?: mplSolver): mplSolver | null;
    /**
     * Sampled states along the arc; empty = not sampled.
     */
    TRAJECTORY(obj?: mplTrajectory): mplTrajectory | null;
    static startmplArc(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLE: mplArcRole): void;
    static addStartOffsetS(builder: flatbuffers.Builder, START_OFFSET_S: number): void;
    static addDurationS(builder: flatbuffers.Builder, DURATION_S: number): void;
    static addRevolutions(builder: flatbuffers.Builder, REVOLUTIONS: number): void;
    static addBranch(builder: flatbuffers.Builder, BRANCH: mplLambertBranch): void;
    static addConic(builder: flatbuffers.Builder, CONIC: mplConic): void;
    static addSemiMajorAxisKm(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS_KM: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addPeriapsisRadiusKm(builder: flatbuffers.Builder, PERIAPSIS_RADIUS_KM: number): void;
    static addApoapsisRadiusKm(builder: flatbuffers.Builder, APOAPSIS_RADIUS_KM: number): void;
    static addPeriodS(builder: flatbuffers.Builder, PERIOD_S: number): void;
    static addStartState(builder: flatbuffers.Builder, START_STATEOffset: flatbuffers.Offset): void;
    static addEndState(builder: flatbuffers.Builder, END_STATEOffset: flatbuffers.Offset): void;
    static addStateAxes(builder: flatbuffers.Builder, STATE_AXES: mplAxes): void;
    static addDeltaVKmS(builder: flatbuffers.Builder, DELTA_V_KM_S: number): void;
    static addLambertZ(builder: flatbuffers.Builder, LAMBERT_Z: number): void;
    static addSolver(builder: flatbuffers.Builder, SOLVEROffset: flatbuffers.Offset): void;
    static addTrajectory(builder: flatbuffers.Builder, TRAJECTORYOffset: flatbuffers.Offset): void;
    static endmplArc(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplArcT;
    unpackTo(_o: mplArcT): void;
}
export declare class mplArcT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    ROLE: mplArcRole;
    START_OFFSET_S: number;
    DURATION_S: number;
    REVOLUTIONS: number;
    BRANCH: mplLambertBranch;
    CONIC: mplConic;
    SEMI_MAJOR_AXIS_KM: number;
    ECCENTRICITY: number;
    PERIAPSIS_RADIUS_KM: number;
    APOAPSIS_RADIUS_KM: number;
    PERIOD_S: number;
    START_STATE: ephemerisDataLineT | null;
    END_STATE: ephemerisDataLineT | null;
    STATE_AXES: mplAxes;
    DELTA_V_KM_S: number;
    LAMBERT_Z: number;
    SOLVER: mplSolverT | null;
    TRAJECTORY: mplTrajectoryT | null;
    constructor(NAME?: string | Uint8Array | null, ROLE?: mplArcRole, START_OFFSET_S?: number, DURATION_S?: number, REVOLUTIONS?: number, BRANCH?: mplLambertBranch, CONIC?: mplConic, SEMI_MAJOR_AXIS_KM?: number, ECCENTRICITY?: number, PERIAPSIS_RADIUS_KM?: number, APOAPSIS_RADIUS_KM?: number, PERIOD_S?: number, START_STATE?: ephemerisDataLineT | null, END_STATE?: ephemerisDataLineT | null, STATE_AXES?: mplAxes, DELTA_V_KM_S?: number, LAMBERT_Z?: number, SOLVER?: mplSolverT | null, TRAJECTORY?: mplTrajectoryT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplArc.d.ts.map