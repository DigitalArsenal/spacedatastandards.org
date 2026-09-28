import * as flatbuffers from 'flatbuffers';
import { cqrLaunchObjectClass } from './cqrLaunchObjectClass.js';
import { cqrLaunchScreening } from './cqrLaunchScreening.js';
import { cqrProbabilityAlgorithm } from './cqrProbabilityAlgorithm.js';
/**
 * Screening criterion for one object class. Exactly one kind per entry;
 * SCREENING selects which fields apply.
 */
export declare class CQRLaunchCriterion implements flatbuffers.IUnpackableObject<CQRLaunchCriterionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRLaunchCriterion;
    static getRootAsCQRLaunchCriterion(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchCriterion): CQRLaunchCriterion;
    static getSizePrefixedRootAsCQRLaunchCriterion(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchCriterion): CQRLaunchCriterion;
    OBJECT_CLASS(): cqrLaunchObjectClass;
    SCREENING(): cqrLaunchScreening;
    /**
     * Sphere radius, metres (SPHERICAL).
     */
    RADIUS_M(): number;
    /**
     * Ellipsoid semi-axes, metres (ELLIPSOIDAL).
     */
    RADIAL_M(): number;
    IN_TRACK_M(): number;
    CROSS_TRACK_M(): number;
    /**
     * Largest acceptable probability of collision (PROBABILITY).
     */
    MAX_PROBABILITY(): number;
    ALGORITHM(): cqrProbabilityAlgorithm;
    static startCQRLaunchCriterion(builder: flatbuffers.Builder): void;
    static addObjectClass(builder: flatbuffers.Builder, OBJECT_CLASS: cqrLaunchObjectClass): void;
    static addScreening(builder: flatbuffers.Builder, SCREENING: cqrLaunchScreening): void;
    static addRadiusM(builder: flatbuffers.Builder, RADIUS_M: number): void;
    static addRadialM(builder: flatbuffers.Builder, RADIAL_M: number): void;
    static addInTrackM(builder: flatbuffers.Builder, IN_TRACK_M: number): void;
    static addCrossTrackM(builder: flatbuffers.Builder, CROSS_TRACK_M: number): void;
    static addMaxProbability(builder: flatbuffers.Builder, MAX_PROBABILITY: number): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: cqrProbabilityAlgorithm): void;
    static endCQRLaunchCriterion(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRLaunchCriterion(builder: flatbuffers.Builder, OBJECT_CLASS: cqrLaunchObjectClass, SCREENING: cqrLaunchScreening, RADIUS_M: number, RADIAL_M: number, IN_TRACK_M: number, CROSS_TRACK_M: number, MAX_PROBABILITY: number, ALGORITHM: cqrProbabilityAlgorithm): flatbuffers.Offset;
    unpack(): CQRLaunchCriterionT;
    unpackTo(_o: CQRLaunchCriterionT): void;
}
export declare class CQRLaunchCriterionT implements flatbuffers.IGeneratedObject {
    OBJECT_CLASS: cqrLaunchObjectClass;
    SCREENING: cqrLaunchScreening;
    RADIUS_M: number;
    RADIAL_M: number;
    IN_TRACK_M: number;
    CROSS_TRACK_M: number;
    MAX_PROBABILITY: number;
    ALGORITHM: cqrProbabilityAlgorithm;
    constructor(OBJECT_CLASS?: cqrLaunchObjectClass, SCREENING?: cqrLaunchScreening, RADIUS_M?: number, RADIAL_M?: number, IN_TRACK_M?: number, CROSS_TRACK_M?: number, MAX_PROBABILITY?: number, ALGORITHM?: cqrProbabilityAlgorithm);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRLaunchCriterion.d.ts.map