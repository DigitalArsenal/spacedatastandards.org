import * as flatbuffers from 'flatbuffers';
/**
 * Tolerances of a trajectory comparison. Both trajectories must be on the
 * same uniform UTC grid in the same Earth-centred inertial frame.
 */
export declare class XMTMatchPolicy implements flatbuffers.IUnpackableObject<XMTMatchPolicyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTMatchPolicy;
    static getRootAsXMTMatchPolicy(bb: flatbuffers.ByteBuffer, obj?: XMTMatchPolicy): XMTMatchPolicy;
    static getSizePrefixedRootAsXMTMatchPolicy(bb: flatbuffers.ByteBuffer, obj?: XMTMatchPolicy): XMTMatchPolicy;
    /**
     * Maximum position separation over the arc for Compatible, km.
     */
    POSITION_TOLERANCE_KM(): number;
    /**
     * Maximum velocity separation over the arc for Compatible, km/s.
     */
    VELOCITY_TOLERANCE_KM_S(): number;
    /**
     * Maximum difference between each trajectory's supplied velocity and the
     * velocity differentiated from its positions, km/s.
     */
    FINITE_DIFFERENCE_TOLERANCE_KM_S(): number;
    /**
     * Minimum arc span, s.
     */
    MINIMUM_SPAN_S(): number;
    static startXMTMatchPolicy(builder: flatbuffers.Builder): void;
    static addPositionToleranceKm(builder: flatbuffers.Builder, POSITION_TOLERANCE_KM: number): void;
    static addVelocityToleranceKmS(builder: flatbuffers.Builder, VELOCITY_TOLERANCE_KM_S: number): void;
    static addFiniteDifferenceToleranceKmS(builder: flatbuffers.Builder, FINITE_DIFFERENCE_TOLERANCE_KM_S: number): void;
    static addMinimumSpanS(builder: flatbuffers.Builder, MINIMUM_SPAN_S: number): void;
    static endXMTMatchPolicy(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTMatchPolicy(builder: flatbuffers.Builder, POSITION_TOLERANCE_KM: number, VELOCITY_TOLERANCE_KM_S: number, FINITE_DIFFERENCE_TOLERANCE_KM_S: number, MINIMUM_SPAN_S: number): flatbuffers.Offset;
    unpack(): XMTMatchPolicyT;
    unpackTo(_o: XMTMatchPolicyT): void;
}
export declare class XMTMatchPolicyT implements flatbuffers.IGeneratedObject {
    POSITION_TOLERANCE_KM: number;
    VELOCITY_TOLERANCE_KM_S: number;
    FINITE_DIFFERENCE_TOLERANCE_KM_S: number;
    MINIMUM_SPAN_S: number;
    constructor(POSITION_TOLERANCE_KM?: number, VELOCITY_TOLERANCE_KM_S?: number, FINITE_DIFFERENCE_TOLERANCE_KM_S?: number, MINIMUM_SPAN_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTMatchPolicy.d.ts.map