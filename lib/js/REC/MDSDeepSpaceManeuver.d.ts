import * as flatbuffers from 'flatbuffers';
/**
 * One deep-space maneuver on a transfer leg.
 */
export declare class MDSDeepSpaceManeuver implements flatbuffers.IUnpackableObject<MDSDeepSpaceManeuverT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDSDeepSpaceManeuver;
    static getRootAsMDSDeepSpaceManeuver(bb: flatbuffers.ByteBuffer, obj?: MDSDeepSpaceManeuver): MDSDeepSpaceManeuver;
    static getSizePrefixedRootAsMDSDeepSpaceManeuver(bb: flatbuffers.ByteBuffer, obj?: MDSDeepSpaceManeuver): MDSDeepSpaceManeuver;
    /**
     * Zero-based leg the maneuver occurs on. Leg i connects encounter i to
     * encounter i + 1.
     */
    LEG_INDEX(): number;
    /**
     * Position along the leg as a fraction of its flight time, in [0, 1].
     */
    ARC_FRACTION(): number;
    /**
     * Maneuver epoch as ephemeris time, seconds past J2000 TDB, when the solver
     * reports it directly.
     */
    EPOCH_ET_S(): number;
    /**
     * Maneuver magnitude, km/s.
     */
    DELTA_V_KM_S(): number;
    /**
     * Maneuver vector when the solver reports one, km/s.
     */
    DELTA_V_X_KM_S(): number;
    DELTA_V_Y_KM_S(): number;
    DELTA_V_Z_KM_S(): number;
    static startMDSDeepSpaceManeuver(builder: flatbuffers.Builder): void;
    static addLegIndex(builder: flatbuffers.Builder, LEG_INDEX: number): void;
    static addArcFraction(builder: flatbuffers.Builder, ARC_FRACTION: number): void;
    static addEpochEtS(builder: flatbuffers.Builder, EPOCH_ET_S: number): void;
    static addDeltaVKmS(builder: flatbuffers.Builder, DELTA_V_KM_S: number): void;
    static addDeltaVXKmS(builder: flatbuffers.Builder, DELTA_V_X_KM_S: number): void;
    static addDeltaVYKmS(builder: flatbuffers.Builder, DELTA_V_Y_KM_S: number): void;
    static addDeltaVZKmS(builder: flatbuffers.Builder, DELTA_V_Z_KM_S: number): void;
    static endMDSDeepSpaceManeuver(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDSDeepSpaceManeuver(builder: flatbuffers.Builder, LEG_INDEX: number, ARC_FRACTION: number, EPOCH_ET_S: number, DELTA_V_KM_S: number, DELTA_V_X_KM_S: number, DELTA_V_Y_KM_S: number, DELTA_V_Z_KM_S: number): flatbuffers.Offset;
    unpack(): MDSDeepSpaceManeuverT;
    unpackTo(_o: MDSDeepSpaceManeuverT): void;
}
export declare class MDSDeepSpaceManeuverT implements flatbuffers.IGeneratedObject {
    LEG_INDEX: number;
    ARC_FRACTION: number;
    EPOCH_ET_S: number;
    DELTA_V_KM_S: number;
    DELTA_V_X_KM_S: number;
    DELTA_V_Y_KM_S: number;
    DELTA_V_Z_KM_S: number;
    constructor(LEG_INDEX?: number, ARC_FRACTION?: number, EPOCH_ET_S?: number, DELTA_V_KM_S?: number, DELTA_V_X_KM_S?: number, DELTA_V_Y_KM_S?: number, DELTA_V_Z_KM_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDSDeepSpaceManeuver.d.ts.map