import * as flatbuffers from 'flatbuffers';
import { mplBurn, mplBurnT } from './mplBurn.js';
import { tbpPeriodicOrbit, tbpPeriodicOrbitT } from './tbpPeriodicOrbit.js';
import { tbpTrajectory, tbpTrajectoryT } from './tbpTrajectory.js';
import { tbpTransferKind } from './tbpTransferKind.js';
/**
 * A transfer into the system.
 */
export declare class tbpTransfer implements flatbuffers.IUnpackableObject<tbpTransferT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpTransfer;
    static getRootAstbpTransfer(bb: flatbuffers.ByteBuffer, obj?: tbpTransfer): tbpTransfer;
    static getSizePrefixedRootAstbpTransfer(bb: flatbuffers.ByteBuffer, obj?: tbpTransfer): tbpTransfer;
    KIND(): tbpTransferKind;
    /**
     * Altitude of the circular parking orbit about the larger primary, km.
     */
    PARKING_ALTITUDE_KM(): number;
    /**
     * Altitude of the final orbit about the smaller primary, km.
     */
    TARGET_ALTITUDE_KM(): number;
    /**
     * Inclination of the transfer plane, deg.
     */
    INCLINATION_DEG(): number;
    /**
     * PeriodicOrbitInsertion: the orbit to insert into.
     */
    TARGET_ORBIT(obj?: tbpPeriodicOrbit): tbpPeriodicOrbit | null;
    /**
     * Targeter limits; 0 = default.
     */
    MAX_ITERATIONS(): number;
    TOLERANCE(): number;
    /**
     * Result: convergence of the targeter.
     */
    CONVERGED(): boolean;
    /**
     * Result: departure and arrival burns (their DELTA_V in the axes they
     * state, km/s; offsets in seconds from departure).
     */
    BURNS(index: number, obj?: mplBurn): mplBurn | null;
    burnsLength(): number;
    /**
     * Result: total delta-v, km/s, and time of flight, s.
     */
    TOTAL_DELTA_V_KM_S(): number;
    TIME_OF_FLIGHT_S(): number;
    /**
     * Result: the transfer trajectory; empty = not sampled.
     */
    TRAJECTORY(obj?: tbpTrajectory): tbpTrajectory | null;
    static starttbpTransfer(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: tbpTransferKind): void;
    static addParkingAltitudeKm(builder: flatbuffers.Builder, PARKING_ALTITUDE_KM: number): void;
    static addTargetAltitudeKm(builder: flatbuffers.Builder, TARGET_ALTITUDE_KM: number): void;
    static addInclinationDeg(builder: flatbuffers.Builder, INCLINATION_DEG: number): void;
    static addTargetOrbit(builder: flatbuffers.Builder, TARGET_ORBITOffset: flatbuffers.Offset): void;
    static addMaxIterations(builder: flatbuffers.Builder, MAX_ITERATIONS: number): void;
    static addTolerance(builder: flatbuffers.Builder, TOLERANCE: number): void;
    static addConverged(builder: flatbuffers.Builder, CONVERGED: boolean): void;
    static addBurns(builder: flatbuffers.Builder, BURNSOffset: flatbuffers.Offset): void;
    static createBurnsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBurnsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalDeltaVKmS(builder: flatbuffers.Builder, TOTAL_DELTA_V_KM_S: number): void;
    static addTimeOfFlightS(builder: flatbuffers.Builder, TIME_OF_FLIGHT_S: number): void;
    static addTrajectory(builder: flatbuffers.Builder, TRAJECTORYOffset: flatbuffers.Offset): void;
    static endtbpTransfer(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): tbpTransferT;
    unpackTo(_o: tbpTransferT): void;
}
export declare class tbpTransferT implements flatbuffers.IGeneratedObject {
    KIND: tbpTransferKind;
    PARKING_ALTITUDE_KM: number;
    TARGET_ALTITUDE_KM: number;
    INCLINATION_DEG: number;
    TARGET_ORBIT: tbpPeriodicOrbitT | null;
    MAX_ITERATIONS: number;
    TOLERANCE: number;
    CONVERGED: boolean;
    BURNS: (mplBurnT)[];
    TOTAL_DELTA_V_KM_S: number;
    TIME_OF_FLIGHT_S: number;
    TRAJECTORY: tbpTrajectoryT | null;
    constructor(KIND?: tbpTransferKind, PARKING_ALTITUDE_KM?: number, TARGET_ALTITUDE_KM?: number, INCLINATION_DEG?: number, TARGET_ORBIT?: tbpPeriodicOrbitT | null, MAX_ITERATIONS?: number, TOLERANCE?: number, CONVERGED?: boolean, BURNS?: (mplBurnT)[], TOTAL_DELTA_V_KM_S?: number, TIME_OF_FLIGHT_S?: number, TRAJECTORY?: tbpTrajectoryT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpTransfer.d.ts.map