import * as flatbuffers from 'flatbuffers';
import { mplOrbit, mplOrbitT } from './mplOrbit.js';
import { mplPhasingDirection } from './mplPhasingDirection.js';
import { mplToleranceBasis } from './mplToleranceBasis.js';
/**
 * Phasing (Phasing, PhasingToTarget).
 */
export declare class mplPhasingRequest implements flatbuffers.IUnpackableObject<mplPhasingRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplPhasingRequest;
    static getRootAsmplPhasingRequest(bb: flatbuffers.ByteBuffer, obj?: mplPhasingRequest): mplPhasingRequest;
    static getSizePrefixedRootAsmplPhasingRequest(bb: flatbuffers.ByteBuffer, obj?: mplPhasingRequest): mplPhasingRequest;
    /**
     * Phasing: radius of the chaser's circular orbit, km.
     */
    ORBIT_RADIUS_KM(): number;
    /**
     * Phasing: phase angle to close, deg; positive when the target leads.
     */
    PHASE_ANGLE_DEG(): number;
    /**
     * Revolutions on the phasing orbit; read only when HAS_REVOLUTIONS.
     */
    REVOLUTIONS(): number;
    /**
     * True when REVOLUTIONS is stated (0 is then a real request for zero
     * revolutions, which a planner may refuse); false = recommend the
     * smallest count that neither clamps to the floor nor exceeds the budget
     * (Phasing: the planner's default count).
     */
    HAS_REVOLUTIONS(): boolean;
    /**
     * Largest revolution count a recommendation may use; 0 = the planner's
     * default (a planner searches at least one revolution).
     */
    MAX_REVOLUTIONS(): number;
    /**
     * PhasingToTarget: the chaser's orbit.
     */
    CHASER(obj?: mplOrbit): mplOrbit | null;
    /**
     * PhasingToTarget: the target's orbit.
     */
    TARGET(obj?: mplOrbit): mplOrbit | null;
    DIRECTION(): mplPhasingDirection;
    /**
     * Delta-v budget, km/s; 0 = DELTA_V_BUDGET_FRACTION of the chaser's
     * circular speed.
     */
    DELTA_V_BUDGET_KM_S(): number;
    /**
     * Budget as a fraction of the chaser's circular speed; 0 = the planner's
     * default (0.01).
     */
    DELTA_V_BUDGET_FRACTION(): number;
    /**
     * Largest angle between the two orbit normals still called coplanar, deg;
     * read only when HAS_COPLANAR_TOLERANCE (false = the planner's default).
     */
    COPLANAR_TOLERANCE_DEG(): number;
    HAS_COPLANAR_TOLERANCE(): boolean;
    /**
     * Largest eccentricity still called near-circular; read only when
     * HAS_ECCENTRICITY_TOLERANCE (false = the planner's default).
     */
    ECCENTRICITY_TOLERANCE(): number;
    HAS_ECCENTRICITY_TOLERANCE(): boolean;
    /**
     * Largest semi-major-axis difference still called co-orbital, in the unit
     * CO_ORBITAL_TOLERANCE_BASIS states (km, or a fraction of the chaser's
     * semi-major axis); read only when HAS_CO_ORBITAL_TOLERANCE (false = the
     * planner's default).
     */
    CO_ORBITAL_TOLERANCE(): number;
    CO_ORBITAL_TOLERANCE_BASIS(): mplToleranceBasis;
    HAS_CO_ORBITAL_TOLERANCE(): boolean;
    static startmplPhasingRequest(builder: flatbuffers.Builder): void;
    static addOrbitRadiusKm(builder: flatbuffers.Builder, ORBIT_RADIUS_KM: number): void;
    static addPhaseAngleDeg(builder: flatbuffers.Builder, PHASE_ANGLE_DEG: number): void;
    static addRevolutions(builder: flatbuffers.Builder, REVOLUTIONS: number): void;
    static addHasRevolutions(builder: flatbuffers.Builder, HAS_REVOLUTIONS: boolean): void;
    static addMaxRevolutions(builder: flatbuffers.Builder, MAX_REVOLUTIONS: number): void;
    static addChaser(builder: flatbuffers.Builder, CHASEROffset: flatbuffers.Offset): void;
    static addTarget(builder: flatbuffers.Builder, TARGETOffset: flatbuffers.Offset): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: mplPhasingDirection): void;
    static addDeltaVBudgetKmS(builder: flatbuffers.Builder, DELTA_V_BUDGET_KM_S: number): void;
    static addDeltaVBudgetFraction(builder: flatbuffers.Builder, DELTA_V_BUDGET_FRACTION: number): void;
    static addCoplanarToleranceDeg(builder: flatbuffers.Builder, COPLANAR_TOLERANCE_DEG: number): void;
    static addHasCoplanarTolerance(builder: flatbuffers.Builder, HAS_COPLANAR_TOLERANCE: boolean): void;
    static addEccentricityTolerance(builder: flatbuffers.Builder, ECCENTRICITY_TOLERANCE: number): void;
    static addHasEccentricityTolerance(builder: flatbuffers.Builder, HAS_ECCENTRICITY_TOLERANCE: boolean): void;
    static addCoOrbitalTolerance(builder: flatbuffers.Builder, CO_ORBITAL_TOLERANCE: number): void;
    static addCoOrbitalToleranceBasis(builder: flatbuffers.Builder, CO_ORBITAL_TOLERANCE_BASIS: mplToleranceBasis): void;
    static addHasCoOrbitalTolerance(builder: flatbuffers.Builder, HAS_CO_ORBITAL_TOLERANCE: boolean): void;
    static endmplPhasingRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplPhasingRequestT;
    unpackTo(_o: mplPhasingRequestT): void;
}
export declare class mplPhasingRequestT implements flatbuffers.IGeneratedObject {
    ORBIT_RADIUS_KM: number;
    PHASE_ANGLE_DEG: number;
    REVOLUTIONS: number;
    HAS_REVOLUTIONS: boolean;
    MAX_REVOLUTIONS: number;
    CHASER: mplOrbitT | null;
    TARGET: mplOrbitT | null;
    DIRECTION: mplPhasingDirection;
    DELTA_V_BUDGET_KM_S: number;
    DELTA_V_BUDGET_FRACTION: number;
    COPLANAR_TOLERANCE_DEG: number;
    HAS_COPLANAR_TOLERANCE: boolean;
    ECCENTRICITY_TOLERANCE: number;
    HAS_ECCENTRICITY_TOLERANCE: boolean;
    CO_ORBITAL_TOLERANCE: number;
    CO_ORBITAL_TOLERANCE_BASIS: mplToleranceBasis;
    HAS_CO_ORBITAL_TOLERANCE: boolean;
    constructor(ORBIT_RADIUS_KM?: number, PHASE_ANGLE_DEG?: number, REVOLUTIONS?: number, HAS_REVOLUTIONS?: boolean, MAX_REVOLUTIONS?: number, CHASER?: mplOrbitT | null, TARGET?: mplOrbitT | null, DIRECTION?: mplPhasingDirection, DELTA_V_BUDGET_KM_S?: number, DELTA_V_BUDGET_FRACTION?: number, COPLANAR_TOLERANCE_DEG?: number, HAS_COPLANAR_TOLERANCE?: boolean, ECCENTRICITY_TOLERANCE?: number, HAS_ECCENTRICITY_TOLERANCE?: boolean, CO_ORBITAL_TOLERANCE?: number, CO_ORBITAL_TOLERANCE_BASIS?: mplToleranceBasis, HAS_CO_ORBITAL_TOLERANCE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplPhasingRequest.d.ts.map