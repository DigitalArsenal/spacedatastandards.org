import * as flatbuffers from 'flatbuffers';
import { CDM, CDMT } from './CDM.js';
import { ephemerisDataLine, ephemerisDataLineT } from './ephemerisDataLine.js';
import { mplApproachAxis } from './mplApproachAxis.js';
import { mplDifferentialDrag, mplDifferentialDragT } from './mplDifferentialDrag.js';
import { mplElements, mplElementsT } from './mplElements.js';
import { mplRelativeDynamics } from './mplRelativeDynamics.js';
import { mplWaypoint, mplWaypointT } from './mplWaypoint.js';
/**
 * Relative-motion planning about a reference orbit
 * (RelativeStateTransition, RelativeWaypoints, CollisionAvoidance,
 * ApproachCorridor).
 */
export declare class mplRelativeRequest implements flatbuffers.IUnpackableObject<mplRelativeRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplRelativeRequest;
    static getRootAsmplRelativeRequest(bb: flatbuffers.ByteBuffer, obj?: mplRelativeRequest): mplRelativeRequest;
    static getSizePrefixedRootAsmplRelativeRequest(bb: flatbuffers.ByteBuffer, obj?: mplRelativeRequest): mplRelativeRequest;
    /**
     * The reference (target, chief) orbit.
     */
    REFERENCE(obj?: mplElements): mplElements | null;
    /**
     * Chaser state relative to the reference, RIC, km and km/s.
     */
    RELATIVE_STATE(obj?: ephemerisDataLine): ephemerisDataLine | null;
    /**
     * Dynamics of propagation and targeting: RelativeStateTransition
     * propagates INITIAL_ROE with these (J2 on or off; the drag model is
     * DRAG); the targeting problems plan with them.
     */
    DYNAMICS(): mplRelativeDynamics;
    /**
     * RelativeStateTransition: dynamics of the state transition matrix
     * returned, chosen independently of DYNAMICS (e.g. a Keplerian matrix
     * beside a J2 propagation). J2DragEccentric and J2DragArbitrary also
     * return the drag columns.
     */
    STM_DYNAMICS(): mplRelativeDynamics;
    /**
     * Differential drag; empty = none.
     */
    DRAG(obj?: mplDifferentialDrag): mplDifferentialDrag | null;
    /**
     * RelativeStateTransition: propagation time, s.
     */
    DURATION_S(): number;
    /**
     * RelativeStateTransition: quasi-nonsingular relative orbital elements to
     * propagate (da, dlambda, dex, dey, dix, diy), dimensionless; empty = the
     * transition matrix only.
     */
    INITIAL_ROE(index: number): number | null;
    initialRoeLength(): number;
    initialRoeArray(): Float64Array | null;
    /**
     * RelativeWaypoints: the waypoints, in order.
     */
    WAYPOINTS(index: number, obj?: mplWaypoint): mplWaypoint | null;
    waypointsLength(): number;
    /**
     * Targeting: velocity to arrive with at every waypoint without its own,
     * RIC, km/s, 3 values; empty = free.
     */
    TARGET_VELOCITY_KM_S(index: number): number | null;
    targetVelocityKmSLength(): number;
    targetVelocityKmSArray(): Float64Array | null;
    /**
     * Targeting iteration limit; 0 = default.
     */
    MAX_ITERATIONS(): number;
    /**
     * Targeting position tolerance, km; 0 = default.
     */
    POSITION_TOLERANCE_KM(): number;
    /**
     * Targeting velocity tolerance, km/s; 0 = default.
     */
    VELOCITY_TOLERANCE_KM_S(): number;
    /**
     * Shortest and longest leg time the planner may choose, in reference
     * orbits; 0 = default.
     */
    LEG_TIME_LOWER_ORBITS(): number;
    LEG_TIME_UPPER_ORBITS(): number;
    /**
     * States sampled per leg in the answer's trajectory; 0 = default.
     */
    SAMPLES_PER_LEG(): number;
    /**
     * CollisionAvoidance: required miss distance, km.
     */
    MISS_DISTANCE_KM(): number;
    /**
     * CollisionAvoidance: time from now to closest approach, s.
     */
    TIME_TO_CLOSEST_APPROACH_S(): number;
    /**
     * CollisionAvoidance: delta-v available, km/s; read only when
     * HAS_MAX_DELTA_V. When stated, 0 = unlimited.
     */
    MAX_DELTA_V_KM_S(): number;
    /**
     * True when MAX_DELTA_V_KM_S is stated; false = the planner's default
     * limit.
     */
    HAS_MAX_DELTA_V(): boolean;
    /**
     * CollisionAvoidance: prefer radial burns (they preserve the period).
     */
    PREFER_RADIAL(): boolean;
    /**
     * CollisionAvoidance: the conjunction being avoided, when the request
     * comes from a conjunction data message.
     */
    CONJUNCTION(obj?: CDM): CDM | null;
    /**
     * ApproachCorridor: the corridor axis.
     */
    APPROACH_AXIS(): mplApproachAxis;
    /**
     * ApproachCorridor: point to reach, RIC, km, 3 values.
     */
    APPROACH_TARGET_KM(index: number): number | null;
    approachTargetKmLength(): number;
    approachTargetKmArray(): Float64Array | null;
    /**
     * ApproachCorridor: speed at the target point, km/s.
     */
    APPROACH_SPEED_KM_S(): number;
    /**
     * ApproachCorridor: half-width of the safety corridor, km.
     */
    CORRIDOR_HALF_WIDTH_KM(): number;
    static startmplRelativeRequest(builder: flatbuffers.Builder): void;
    static addReference(builder: flatbuffers.Builder, REFERENCEOffset: flatbuffers.Offset): void;
    static addRelativeState(builder: flatbuffers.Builder, RELATIVE_STATEOffset: flatbuffers.Offset): void;
    static addDynamics(builder: flatbuffers.Builder, DYNAMICS: mplRelativeDynamics): void;
    static addStmDynamics(builder: flatbuffers.Builder, STM_DYNAMICS: mplRelativeDynamics): void;
    static addDrag(builder: flatbuffers.Builder, DRAGOffset: flatbuffers.Offset): void;
    static addDurationS(builder: flatbuffers.Builder, DURATION_S: number): void;
    static addInitialRoe(builder: flatbuffers.Builder, INITIAL_ROEOffset: flatbuffers.Offset): void;
    static createInitialRoeVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInitialRoeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInitialRoeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWaypoints(builder: flatbuffers.Builder, WAYPOINTSOffset: flatbuffers.Offset): void;
    static createWaypointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWaypointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTargetVelocityKmS(builder: flatbuffers.Builder, TARGET_VELOCITY_KM_SOffset: flatbuffers.Offset): void;
    static createTargetVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTargetVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTargetVelocityKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxIterations(builder: flatbuffers.Builder, MAX_ITERATIONS: number): void;
    static addPositionToleranceKm(builder: flatbuffers.Builder, POSITION_TOLERANCE_KM: number): void;
    static addVelocityToleranceKmS(builder: flatbuffers.Builder, VELOCITY_TOLERANCE_KM_S: number): void;
    static addLegTimeLowerOrbits(builder: flatbuffers.Builder, LEG_TIME_LOWER_ORBITS: number): void;
    static addLegTimeUpperOrbits(builder: flatbuffers.Builder, LEG_TIME_UPPER_ORBITS: number): void;
    static addSamplesPerLeg(builder: flatbuffers.Builder, SAMPLES_PER_LEG: number): void;
    static addMissDistanceKm(builder: flatbuffers.Builder, MISS_DISTANCE_KM: number): void;
    static addTimeToClosestApproachS(builder: flatbuffers.Builder, TIME_TO_CLOSEST_APPROACH_S: number): void;
    static addMaxDeltaVKmS(builder: flatbuffers.Builder, MAX_DELTA_V_KM_S: number): void;
    static addHasMaxDeltaV(builder: flatbuffers.Builder, HAS_MAX_DELTA_V: boolean): void;
    static addPreferRadial(builder: flatbuffers.Builder, PREFER_RADIAL: boolean): void;
    static addConjunction(builder: flatbuffers.Builder, CONJUNCTIONOffset: flatbuffers.Offset): void;
    static addApproachAxis(builder: flatbuffers.Builder, APPROACH_AXIS: mplApproachAxis): void;
    static addApproachTargetKm(builder: flatbuffers.Builder, APPROACH_TARGET_KMOffset: flatbuffers.Offset): void;
    static createApproachTargetKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createApproachTargetKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startApproachTargetKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addApproachSpeedKmS(builder: flatbuffers.Builder, APPROACH_SPEED_KM_S: number): void;
    static addCorridorHalfWidthKm(builder: flatbuffers.Builder, CORRIDOR_HALF_WIDTH_KM: number): void;
    static endmplRelativeRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplRelativeRequestT;
    unpackTo(_o: mplRelativeRequestT): void;
}
export declare class mplRelativeRequestT implements flatbuffers.IGeneratedObject {
    REFERENCE: mplElementsT | null;
    RELATIVE_STATE: ephemerisDataLineT | null;
    DYNAMICS: mplRelativeDynamics;
    STM_DYNAMICS: mplRelativeDynamics;
    DRAG: mplDifferentialDragT | null;
    DURATION_S: number;
    INITIAL_ROE: (number)[];
    WAYPOINTS: (mplWaypointT)[];
    TARGET_VELOCITY_KM_S: (number)[];
    MAX_ITERATIONS: number;
    POSITION_TOLERANCE_KM: number;
    VELOCITY_TOLERANCE_KM_S: number;
    LEG_TIME_LOWER_ORBITS: number;
    LEG_TIME_UPPER_ORBITS: number;
    SAMPLES_PER_LEG: number;
    MISS_DISTANCE_KM: number;
    TIME_TO_CLOSEST_APPROACH_S: number;
    MAX_DELTA_V_KM_S: number;
    HAS_MAX_DELTA_V: boolean;
    PREFER_RADIAL: boolean;
    CONJUNCTION: CDMT | null;
    APPROACH_AXIS: mplApproachAxis;
    APPROACH_TARGET_KM: (number)[];
    APPROACH_SPEED_KM_S: number;
    CORRIDOR_HALF_WIDTH_KM: number;
    constructor(REFERENCE?: mplElementsT | null, RELATIVE_STATE?: ephemerisDataLineT | null, DYNAMICS?: mplRelativeDynamics, STM_DYNAMICS?: mplRelativeDynamics, DRAG?: mplDifferentialDragT | null, DURATION_S?: number, INITIAL_ROE?: (number)[], WAYPOINTS?: (mplWaypointT)[], TARGET_VELOCITY_KM_S?: (number)[], MAX_ITERATIONS?: number, POSITION_TOLERANCE_KM?: number, VELOCITY_TOLERANCE_KM_S?: number, LEG_TIME_LOWER_ORBITS?: number, LEG_TIME_UPPER_ORBITS?: number, SAMPLES_PER_LEG?: number, MISS_DISTANCE_KM?: number, TIME_TO_CLOSEST_APPROACH_S?: number, MAX_DELTA_V_KM_S?: number, HAS_MAX_DELTA_V?: boolean, PREFER_RADIAL?: boolean, CONJUNCTION?: CDMT | null, APPROACH_AXIS?: mplApproachAxis, APPROACH_TARGET_KM?: (number)[], APPROACH_SPEED_KM_S?: number, CORRIDOR_HALF_WIDTH_KM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplRelativeRequest.d.ts.map