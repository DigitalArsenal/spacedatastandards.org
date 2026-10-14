import * as flatbuffers from 'flatbuffers';
import { mplElements, mplElementsT } from './mplElements.js';
import { mplPhasingDirection } from './mplPhasingDirection.js';
/**
 * Phasing detail: the phase geometry and the floor guard.
 */
export declare class mplPhasingSolution implements flatbuffers.IUnpackableObject<mplPhasingSolutionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplPhasingSolution;
    static getRootAsmplPhasingSolution(bb: flatbuffers.ByteBuffer, obj?: mplPhasingSolution): mplPhasingSolution;
    static getSizePrefixedRootAsmplPhasingSolution(bb: flatbuffers.ByteBuffer, obj?: mplPhasingSolution): mplPhasingSolution;
    /**
     * Phase angle the plan closes, deg (signed).
     */
    PHASE_ANGLE_DEG(): number;
    /**
     * Phase angle the flown (possibly clamped) phasing orbit delivers, deg.
     */
    ACHIEVED_PHASE_ANGLE_DEG(): number;
    /**
     * Semi-major axis and period the unclamped plan would have needed.
     */
    REQUESTED_SEMI_MAJOR_AXIS_KM(): number;
    REQUESTED_PERIOD_S(): number;
    /**
     * Lowest radius the phasing orbit's far apse may reach, km (body radius
     * plus margin).
     */
    FLOOR_RADIUS_KM(): number;
    /**
     * True when the phasing orbit was raised to the floor.
     */
    CLAMPED_TO_FLOOR(): boolean;
    /**
     * Radius of the phasing orbit's far apse (the apse opposite the burn
     * point: its apoapsis when raised, its periapsis when lowered), km.
     */
    FAR_APSE_RADIUS_KM(): number;
    /**
     * The radius the plan was flown at (the chaser's semi-major axis), km.
     */
    PHASING_RADIUS_KM(): number;
    /**
     * PhasingToTarget: relative phase angle, deg, in (-180, 180]; positive
     * when the target leads. The relative mean argument of latitude plus the
     * RAAN difference times cos(chaser inclination).
     */
    RELATIVE_PHASE_ANGLE_DEG(): number;
    /**
     * The catch-up angle, in (0, 360], and the fall-behind angle, in
     * [-360, 0), deg.
     */
    CATCH_UP_ANGLE_DEG(): number;
    FALL_BEHIND_ANGLE_DEG(): number;
    /**
     * The direction the plan flies.
     */
    DIRECTION(): mplPhasingDirection;
    /**
     * The chaser's and target's elements as used (with their mean arguments
     * of latitude).
     */
    CHASER(obj?: mplElements): mplElements | null;
    TARGET(obj?: mplElements): mplElements | null;
    RAAN_DIFFERENCE_DEG(): number;
    INCLINATION_DIFFERENCE_DEG(): number;
    /**
     * Angle between the two orbit normals, deg.
     */
    PLANE_ANGLE_DEG(): number;
    /**
     * Target minus chaser semi-major axis, km.
     */
    SEMI_MAJOR_AXIS_DIFFERENCE_KM(): number;
    /**
     * Verdicts, each beside the tolerance that produced it (none refuses).
     */
    COPLANAR(): boolean;
    COPLANAR_TOLERANCE_DEG(): number;
    NEAR_CIRCULAR(): boolean;
    ECCENTRICITY_TOLERANCE(): number;
    CO_ORBITAL(): boolean;
    /**
     * The co-orbital tolerance applied, as an absolute length, km, and as a
     * fraction of the chaser's semi-major axis (the same threshold both ways).
     */
    CO_ORBITAL_TOLERANCE_KM(): number;
    CO_ORBITAL_TOLERANCE_FRACTION(): number;
    /**
     * Recommended revolution count, and whether the count came from the
     * caller instead.
     */
    RECOMMENDED_REVOLUTIONS(): number;
    REVOLUTIONS_FROM_CALLER(): boolean;
    /**
     * Largest revolution count searched (after clamping).
     */
    MAX_REVOLUTIONS(): number;
    /**
     * The budget applied, km/s, and whether the plan met it.
     */
    DELTA_V_BUDGET_KM_S(): number;
    WITHIN_BUDGET(): boolean;
    static startmplPhasingSolution(builder: flatbuffers.Builder): void;
    static addPhaseAngleDeg(builder: flatbuffers.Builder, PHASE_ANGLE_DEG: number): void;
    static addAchievedPhaseAngleDeg(builder: flatbuffers.Builder, ACHIEVED_PHASE_ANGLE_DEG: number): void;
    static addRequestedSemiMajorAxisKm(builder: flatbuffers.Builder, REQUESTED_SEMI_MAJOR_AXIS_KM: number): void;
    static addRequestedPeriodS(builder: flatbuffers.Builder, REQUESTED_PERIOD_S: number): void;
    static addFloorRadiusKm(builder: flatbuffers.Builder, FLOOR_RADIUS_KM: number): void;
    static addClampedToFloor(builder: flatbuffers.Builder, CLAMPED_TO_FLOOR: boolean): void;
    static addFarApseRadiusKm(builder: flatbuffers.Builder, FAR_APSE_RADIUS_KM: number): void;
    static addPhasingRadiusKm(builder: flatbuffers.Builder, PHASING_RADIUS_KM: number): void;
    static addRelativePhaseAngleDeg(builder: flatbuffers.Builder, RELATIVE_PHASE_ANGLE_DEG: number): void;
    static addCatchUpAngleDeg(builder: flatbuffers.Builder, CATCH_UP_ANGLE_DEG: number): void;
    static addFallBehindAngleDeg(builder: flatbuffers.Builder, FALL_BEHIND_ANGLE_DEG: number): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: mplPhasingDirection): void;
    static addChaser(builder: flatbuffers.Builder, CHASEROffset: flatbuffers.Offset): void;
    static addTarget(builder: flatbuffers.Builder, TARGETOffset: flatbuffers.Offset): void;
    static addRaanDifferenceDeg(builder: flatbuffers.Builder, RAAN_DIFFERENCE_DEG: number): void;
    static addInclinationDifferenceDeg(builder: flatbuffers.Builder, INCLINATION_DIFFERENCE_DEG: number): void;
    static addPlaneAngleDeg(builder: flatbuffers.Builder, PLANE_ANGLE_DEG: number): void;
    static addSemiMajorAxisDifferenceKm(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS_DIFFERENCE_KM: number): void;
    static addCoplanar(builder: flatbuffers.Builder, COPLANAR: boolean): void;
    static addCoplanarToleranceDeg(builder: flatbuffers.Builder, COPLANAR_TOLERANCE_DEG: number): void;
    static addNearCircular(builder: flatbuffers.Builder, NEAR_CIRCULAR: boolean): void;
    static addEccentricityTolerance(builder: flatbuffers.Builder, ECCENTRICITY_TOLERANCE: number): void;
    static addCoOrbital(builder: flatbuffers.Builder, CO_ORBITAL: boolean): void;
    static addCoOrbitalToleranceKm(builder: flatbuffers.Builder, CO_ORBITAL_TOLERANCE_KM: number): void;
    static addCoOrbitalToleranceFraction(builder: flatbuffers.Builder, CO_ORBITAL_TOLERANCE_FRACTION: number): void;
    static addRecommendedRevolutions(builder: flatbuffers.Builder, RECOMMENDED_REVOLUTIONS: number): void;
    static addRevolutionsFromCaller(builder: flatbuffers.Builder, REVOLUTIONS_FROM_CALLER: boolean): void;
    static addMaxRevolutions(builder: flatbuffers.Builder, MAX_REVOLUTIONS: number): void;
    static addDeltaVBudgetKmS(builder: flatbuffers.Builder, DELTA_V_BUDGET_KM_S: number): void;
    static addWithinBudget(builder: flatbuffers.Builder, WITHIN_BUDGET: boolean): void;
    static endmplPhasingSolution(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplPhasingSolutionT;
    unpackTo(_o: mplPhasingSolutionT): void;
}
export declare class mplPhasingSolutionT implements flatbuffers.IGeneratedObject {
    PHASE_ANGLE_DEG: number;
    ACHIEVED_PHASE_ANGLE_DEG: number;
    REQUESTED_SEMI_MAJOR_AXIS_KM: number;
    REQUESTED_PERIOD_S: number;
    FLOOR_RADIUS_KM: number;
    CLAMPED_TO_FLOOR: boolean;
    FAR_APSE_RADIUS_KM: number;
    PHASING_RADIUS_KM: number;
    RELATIVE_PHASE_ANGLE_DEG: number;
    CATCH_UP_ANGLE_DEG: number;
    FALL_BEHIND_ANGLE_DEG: number;
    DIRECTION: mplPhasingDirection;
    CHASER: mplElementsT | null;
    TARGET: mplElementsT | null;
    RAAN_DIFFERENCE_DEG: number;
    INCLINATION_DIFFERENCE_DEG: number;
    PLANE_ANGLE_DEG: number;
    SEMI_MAJOR_AXIS_DIFFERENCE_KM: number;
    COPLANAR: boolean;
    COPLANAR_TOLERANCE_DEG: number;
    NEAR_CIRCULAR: boolean;
    ECCENTRICITY_TOLERANCE: number;
    CO_ORBITAL: boolean;
    CO_ORBITAL_TOLERANCE_KM: number;
    CO_ORBITAL_TOLERANCE_FRACTION: number;
    RECOMMENDED_REVOLUTIONS: number;
    REVOLUTIONS_FROM_CALLER: boolean;
    MAX_REVOLUTIONS: number;
    DELTA_V_BUDGET_KM_S: number;
    WITHIN_BUDGET: boolean;
    constructor(PHASE_ANGLE_DEG?: number, ACHIEVED_PHASE_ANGLE_DEG?: number, REQUESTED_SEMI_MAJOR_AXIS_KM?: number, REQUESTED_PERIOD_S?: number, FLOOR_RADIUS_KM?: number, CLAMPED_TO_FLOOR?: boolean, FAR_APSE_RADIUS_KM?: number, PHASING_RADIUS_KM?: number, RELATIVE_PHASE_ANGLE_DEG?: number, CATCH_UP_ANGLE_DEG?: number, FALL_BEHIND_ANGLE_DEG?: number, DIRECTION?: mplPhasingDirection, CHASER?: mplElementsT | null, TARGET?: mplElementsT | null, RAAN_DIFFERENCE_DEG?: number, INCLINATION_DIFFERENCE_DEG?: number, PLANE_ANGLE_DEG?: number, SEMI_MAJOR_AXIS_DIFFERENCE_KM?: number, COPLANAR?: boolean, COPLANAR_TOLERANCE_DEG?: number, NEAR_CIRCULAR?: boolean, ECCENTRICITY_TOLERANCE?: number, CO_ORBITAL?: boolean, CO_ORBITAL_TOLERANCE_KM?: number, CO_ORBITAL_TOLERANCE_FRACTION?: number, RECOMMENDED_REVOLUTIONS?: number, REVOLUTIONS_FROM_CALLER?: boolean, MAX_REVOLUTIONS?: number, DELTA_V_BUDGET_KM_S?: number, WITHIN_BUDGET?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplPhasingSolution.d.ts.map