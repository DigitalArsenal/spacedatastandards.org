import * as flatbuffers from 'flatbuffers';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { PRWBurnBoundary, PRWBurnBoundaryT } from './PRWBurnBoundary.js';
import { PRWThrottlePoint, PRWThrottlePointT } from './PRWThrottlePoint.js';
import { prwSteeringBasis } from './prwSteeringBasis.js';
import { prwThrustPrescription } from './prwThrustPrescription.js';
/**
 * Finite thrust. RTN=(rhat, N cross rhat, N), N=unit(r cross v).
 * VNC=(vhat, unit(r cross v), vhat cross unit(r cross v)).
 */
export declare class PRWFiniteBurn implements flatbuffers.IUnpackableObject<PRWFiniteBurnT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWFiniteBurn;
    static getRootAsPRWFiniteBurn(bb: flatbuffers.ByteBuffer, obj?: PRWFiniteBurn): PRWFiniteBurn;
    static getSizePrefixedRootAsPRWFiniteBurn(bb: flatbuffers.ByteBuffer, obj?: PRWFiniteBurn): PRWFiniteBurn;
    START(obj?: PRWBurnBoundary): PRWBurnBoundary | null;
    STOP(obj?: PRWBurnBoundary): PRWBurnBoundary | null;
    THRUST_LAW(): prwThrustPrescription;
    FORCE_NEWTONS(): number;
    /**
     * True when FORCE_NEWTONS carries a value; false means absent.
     */
    HAS_FORCE_NEWTONS(): boolean;
    ACCELERATION_M_S2(): number;
    /**
     * True when ACCELERATION_M_S2 carries a value; false means absent.
     */
    HAS_ACCELERATION_M_S2(): boolean;
    SPECIFIC_IMPULSE_SECONDS(): number;
    VECTOR_BASIS(): prwSteeringBasis;
    /**
     * Dimensionless components; normalized after adding elapsed*time rate.
     */
    DIRECTION(obj?: FRMVector3): FRMVector3 | null;
    /**
     * Direction-component change per second, not radians/second.
     */
    DIRECTION_RATE(obj?: FRMVector3): FRMVector3 | null;
    THROTTLE(index: number, obj?: PRWThrottlePoint): PRWThrottlePoint | null;
    throttleLength(): number;
    static startPRWFiniteBurn(builder: flatbuffers.Builder): void;
    static addStart(builder: flatbuffers.Builder, STARTOffset: flatbuffers.Offset): void;
    static addStop(builder: flatbuffers.Builder, STOPOffset: flatbuffers.Offset): void;
    static addThrustLaw(builder: flatbuffers.Builder, THRUST_LAW: prwThrustPrescription): void;
    static addForceNewtons(builder: flatbuffers.Builder, FORCE_NEWTONS: number): void;
    static addHasForceNewtons(builder: flatbuffers.Builder, HAS_FORCE_NEWTONS: boolean): void;
    static addAccelerationMS2(builder: flatbuffers.Builder, ACCELERATION_M_S2: number): void;
    static addHasAccelerationMS2(builder: flatbuffers.Builder, HAS_ACCELERATION_M_S2: boolean): void;
    static addSpecificImpulseSeconds(builder: flatbuffers.Builder, SPECIFIC_IMPULSE_SECONDS: number): void;
    static addVectorBasis(builder: flatbuffers.Builder, VECTOR_BASIS: prwSteeringBasis): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTIONOffset: flatbuffers.Offset): void;
    static addDirectionRate(builder: flatbuffers.Builder, DIRECTION_RATEOffset: flatbuffers.Offset): void;
    static addThrottle(builder: flatbuffers.Builder, THROTTLEOffset: flatbuffers.Offset): void;
    static createThrottleVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startThrottleVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWFiniteBurn(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWFiniteBurnT;
    unpackTo(_o: PRWFiniteBurnT): void;
}
export declare class PRWFiniteBurnT implements flatbuffers.IGeneratedObject {
    START: PRWBurnBoundaryT | null;
    STOP: PRWBurnBoundaryT | null;
    THRUST_LAW: prwThrustPrescription;
    FORCE_NEWTONS: number;
    HAS_FORCE_NEWTONS: boolean;
    ACCELERATION_M_S2: number;
    HAS_ACCELERATION_M_S2: boolean;
    SPECIFIC_IMPULSE_SECONDS: number;
    VECTOR_BASIS: prwSteeringBasis;
    DIRECTION: FRMVector3T | null;
    DIRECTION_RATE: FRMVector3T | null;
    THROTTLE: (PRWThrottlePointT)[];
    constructor(START?: PRWBurnBoundaryT | null, STOP?: PRWBurnBoundaryT | null, THRUST_LAW?: prwThrustPrescription, FORCE_NEWTONS?: number, HAS_FORCE_NEWTONS?: boolean, ACCELERATION_M_S2?: number, HAS_ACCELERATION_M_S2?: boolean, SPECIFIC_IMPULSE_SECONDS?: number, VECTOR_BASIS?: prwSteeringBasis, DIRECTION?: FRMVector3T | null, DIRECTION_RATE?: FRMVector3T | null, THROTTLE?: (PRWThrottlePointT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWFiniteBurn.d.ts.map