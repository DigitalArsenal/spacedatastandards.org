import * as flatbuffers from 'flatbuffers';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
import { cqrLaunchObjectClass } from './cqrLaunchObjectClass.js';
/**
 * Closest approach of one segment to one orbiting object for one liftoff
 * time: the worst liftoff time of each contiguous run below REPORT_RATIO.
 */
export declare class CQRLaunchApproach implements flatbuffers.IUnpackableObject<CQRLaunchApproachT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRLaunchApproach;
    static getRootAsCQRLaunchApproach(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchApproach): CQRLaunchApproach;
    static getSizePrefixedRootAsCQRLaunchApproach(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchApproach): CQRLaunchApproach;
    SEGMENT_ID(): string;
    SEGMENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    OBJECT_ID(): string;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    OBJECT_CLASS(): cqrLaunchObjectClass;
    LIFTOFF(obj?: TIMInstant): TIMInstant | null;
    TCA(obj?: TIMInstant): TIMInstant | null;
    MISS_DISTANCE_M(): number;
    RELATIVE_SPEED_M_S(): number;
    /**
     * Segment position relative to the orbiting object in the object's
     * radial/in-track/cross-track frame, metres.
     */
    RELATIVE_POSITION_RTN(obj?: FRMVector3): FRMVector3 | null;
    /**
     * Normalised separation: distance over radius (SPHERICAL) or ellipsoid
     * radius (ELLIPSOIDAL). Below 1 violates.
     */
    CRITERION_RATIO(): number;
    VIOLATES(): boolean;
    RENDEZVOUS_COORDINATED(): boolean;
    /**
     * First and last liftoff times of the run this approach represents.
     */
    RUN_START(obj?: TIMInstant): TIMInstant | null;
    RUN_END(obj?: TIMInstant): TIMInstant | null;
    static startCQRLaunchApproach(builder: flatbuffers.Builder): void;
    static addSegmentId(builder: flatbuffers.Builder, SEGMENT_IDOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addObjectClass(builder: flatbuffers.Builder, OBJECT_CLASS: cqrLaunchObjectClass): void;
    static addLiftoff(builder: flatbuffers.Builder, LIFTOFFOffset: flatbuffers.Offset): void;
    static addTca(builder: flatbuffers.Builder, TCAOffset: flatbuffers.Offset): void;
    static addMissDistanceM(builder: flatbuffers.Builder, MISS_DISTANCE_M: number): void;
    static addRelativeSpeedMS(builder: flatbuffers.Builder, RELATIVE_SPEED_M_S: number): void;
    static addRelativePositionRtn(builder: flatbuffers.Builder, RELATIVE_POSITION_RTNOffset: flatbuffers.Offset): void;
    static addCriterionRatio(builder: flatbuffers.Builder, CRITERION_RATIO: number): void;
    static addViolates(builder: flatbuffers.Builder, VIOLATES: boolean): void;
    static addRendezvousCoordinated(builder: flatbuffers.Builder, RENDEZVOUS_COORDINATED: boolean): void;
    static addRunStart(builder: flatbuffers.Builder, RUN_STARTOffset: flatbuffers.Offset): void;
    static addRunEnd(builder: flatbuffers.Builder, RUN_ENDOffset: flatbuffers.Offset): void;
    static endCQRLaunchApproach(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRLaunchApproachT;
    unpackTo(_o: CQRLaunchApproachT): void;
}
export declare class CQRLaunchApproachT implements flatbuffers.IGeneratedObject {
    SEGMENT_ID: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    OBJECT_CLASS: cqrLaunchObjectClass;
    LIFTOFF: TIMInstantT | null;
    TCA: TIMInstantT | null;
    MISS_DISTANCE_M: number;
    RELATIVE_SPEED_M_S: number;
    RELATIVE_POSITION_RTN: FRMVector3T | null;
    CRITERION_RATIO: number;
    VIOLATES: boolean;
    RENDEZVOUS_COORDINATED: boolean;
    RUN_START: TIMInstantT | null;
    RUN_END: TIMInstantT | null;
    constructor(SEGMENT_ID?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, OBJECT_CLASS?: cqrLaunchObjectClass, LIFTOFF?: TIMInstantT | null, TCA?: TIMInstantT | null, MISS_DISTANCE_M?: number, RELATIVE_SPEED_M_S?: number, RELATIVE_POSITION_RTN?: FRMVector3T | null, CRITERION_RATIO?: number, VIOLATES?: boolean, RENDEZVOUS_COORDINATED?: boolean, RUN_START?: TIMInstantT | null, RUN_END?: TIMInstantT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRLaunchApproach.d.ts.map