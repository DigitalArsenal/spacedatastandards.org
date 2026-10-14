import * as flatbuffers from 'flatbuffers';
/**
 * Classical (osculating) orbital elements of one orbit. In a request the
 * first fields describe the orbit; in an answer the derived fields are
 * filled too.
 */
export declare class mplElements implements flatbuffers.IUnpackableObject<mplElementsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplElements;
    static getRootAsmplElements(bb: flatbuffers.ByteBuffer, obj?: mplElements): mplElements;
    static getSizePrefixedRootAsmplElements(bb: flatbuffers.ByteBuffer, obj?: mplElements): mplElements;
    /**
     * Semi-major axis, km; negative for a hyperbola.
     */
    SEMI_MAJOR_AXIS_KM(): number;
    /**
     * Eccentricity, dimensionless.
     */
    ECCENTRICITY(): number;
    /**
     * Inclination, deg.
     */
    INCLINATION_DEG(): number;
    /**
     * Right ascension of the ascending node, deg.
     */
    RAAN_DEG(): number;
    /**
     * Argument of periapsis, deg.
     */
    ARG_OF_PERIAPSIS_DEG(): number;
    /**
     * True anomaly, deg; NaN = not stated (MEAN_ANOMALY_DEG places the
     * object instead).
     */
    TRUE_ANOMALY_DEG(): number;
    /**
     * Mean anomaly, deg; NaN = not stated.
     */
    MEAN_ANOMALY_DEG(): number;
    /**
     * Eccentric anomaly, deg; NaN = not stated.
     */
    ECCENTRIC_ANOMALY_DEG(): number;
    /**
     * Gravitational parameter of the central body, km^3/s^2; 0 = the plan's
     * MU_KM3_S2.
     */
    MU_KM3_S2(): number;
    /**
     * Specific angular momentum, km^2/s; 0 = derived from the elements.
     */
    ANGULAR_MOMENTUM_KM2_S(): number;
    /**
     * Mean motion, deg/s; 0 = not computed.
     */
    MEAN_MOTION_DEG_S(): number;
    /**
     * Orbital period, s; 0 = not computed or not closed.
     */
    PERIOD_S(): number;
    /**
     * Periapsis radius from the body centre, km; 0 = not computed.
     */
    PERIAPSIS_RADIUS_KM(): number;
    /**
     * Apoapsis radius from the body centre, km; 0 = not computed or none.
     */
    APOAPSIS_RADIUS_KM(): number;
    /**
     * True anomaly of the ascending node, deg; NaN = not computed.
     */
    ASCENDING_NODE_TRUE_ANOMALY_DEG(): number;
    /**
     * Mean argument of latitude (argument of periapsis + mean anomaly), deg;
     * NaN = not computed.
     */
    MEAN_ARGUMENT_OF_LATITUDE_DEG(): number;
    static startmplElements(builder: flatbuffers.Builder): void;
    static addSemiMajorAxisKm(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS_KM: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclinationDeg(builder: flatbuffers.Builder, INCLINATION_DEG: number): void;
    static addRaanDeg(builder: flatbuffers.Builder, RAAN_DEG: number): void;
    static addArgOfPeriapsisDeg(builder: flatbuffers.Builder, ARG_OF_PERIAPSIS_DEG: number): void;
    static addTrueAnomalyDeg(builder: flatbuffers.Builder, TRUE_ANOMALY_DEG: number): void;
    static addMeanAnomalyDeg(builder: flatbuffers.Builder, MEAN_ANOMALY_DEG: number): void;
    static addEccentricAnomalyDeg(builder: flatbuffers.Builder, ECCENTRIC_ANOMALY_DEG: number): void;
    static addMuKm3S2(builder: flatbuffers.Builder, MU_KM3_S2: number): void;
    static addAngularMomentumKm2S(builder: flatbuffers.Builder, ANGULAR_MOMENTUM_KM2_S: number): void;
    static addMeanMotionDegS(builder: flatbuffers.Builder, MEAN_MOTION_DEG_S: number): void;
    static addPeriodS(builder: flatbuffers.Builder, PERIOD_S: number): void;
    static addPeriapsisRadiusKm(builder: flatbuffers.Builder, PERIAPSIS_RADIUS_KM: number): void;
    static addApoapsisRadiusKm(builder: flatbuffers.Builder, APOAPSIS_RADIUS_KM: number): void;
    static addAscendingNodeTrueAnomalyDeg(builder: flatbuffers.Builder, ASCENDING_NODE_TRUE_ANOMALY_DEG: number): void;
    static addMeanArgumentOfLatitudeDeg(builder: flatbuffers.Builder, MEAN_ARGUMENT_OF_LATITUDE_DEG: number): void;
    static endmplElements(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplElements(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS_KM: number, ECCENTRICITY: number, INCLINATION_DEG: number, RAAN_DEG: number, ARG_OF_PERIAPSIS_DEG: number, TRUE_ANOMALY_DEG: number, MEAN_ANOMALY_DEG: number, ECCENTRIC_ANOMALY_DEG: number, MU_KM3_S2: number, ANGULAR_MOMENTUM_KM2_S: number, MEAN_MOTION_DEG_S: number, PERIOD_S: number, PERIAPSIS_RADIUS_KM: number, APOAPSIS_RADIUS_KM: number, ASCENDING_NODE_TRUE_ANOMALY_DEG: number, MEAN_ARGUMENT_OF_LATITUDE_DEG: number): flatbuffers.Offset;
    unpack(): mplElementsT;
    unpackTo(_o: mplElementsT): void;
}
export declare class mplElementsT implements flatbuffers.IGeneratedObject {
    SEMI_MAJOR_AXIS_KM: number;
    ECCENTRICITY: number;
    INCLINATION_DEG: number;
    RAAN_DEG: number;
    ARG_OF_PERIAPSIS_DEG: number;
    TRUE_ANOMALY_DEG: number;
    MEAN_ANOMALY_DEG: number;
    ECCENTRIC_ANOMALY_DEG: number;
    MU_KM3_S2: number;
    ANGULAR_MOMENTUM_KM2_S: number;
    MEAN_MOTION_DEG_S: number;
    PERIOD_S: number;
    PERIAPSIS_RADIUS_KM: number;
    APOAPSIS_RADIUS_KM: number;
    ASCENDING_NODE_TRUE_ANOMALY_DEG: number;
    MEAN_ARGUMENT_OF_LATITUDE_DEG: number;
    constructor(SEMI_MAJOR_AXIS_KM?: number, ECCENTRICITY?: number, INCLINATION_DEG?: number, RAAN_DEG?: number, ARG_OF_PERIAPSIS_DEG?: number, TRUE_ANOMALY_DEG?: number, MEAN_ANOMALY_DEG?: number, ECCENTRIC_ANOMALY_DEG?: number, MU_KM3_S2?: number, ANGULAR_MOMENTUM_KM2_S?: number, MEAN_MOTION_DEG_S?: number, PERIOD_S?: number, PERIAPSIS_RADIUS_KM?: number, APOAPSIS_RADIUS_KM?: number, ASCENDING_NODE_TRUE_ANOMALY_DEG?: number, MEAN_ARGUMENT_OF_LATITUDE_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplElements.d.ts.map