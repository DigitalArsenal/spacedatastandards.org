import * as flatbuffers from 'flatbuffers';
export declare class PRWKeplerianElements implements flatbuffers.IUnpackableObject<PRWKeplerianElementsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWKeplerianElements;
    static getRootAsPRWKeplerianElements(bb: flatbuffers.ByteBuffer, obj?: PRWKeplerianElements): PRWKeplerianElements;
    static getSizePrefixedRootAsPRWKeplerianElements(bb: flatbuffers.ByteBuffer, obj?: PRWKeplerianElements): PRWKeplerianElements;
    /**
     * Gravitational parameter of the central body (km^3 / s^2).
     */
    MU(): number;
    /**
     * Semi-major axis (km).
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * Eccentricity (0 = circular, <1 = ellipse).
     */
    ECCENTRICITY(): number;
    /**
     * Inclination (radians).
     */
    INCLINATION(): number;
    /**
     * Right ascension of the ascending node (radians).
     */
    RAAN(): number;
    /**
     * Argument of periapsis (radians).
     */
    ARG_PERIAPSIS(): number;
    /**
     * True anomaly (radians).
     */
    TRUE_ANOMALY(): number;
    /**
     * Epoch as Julian date.
     */
    EPOCH(): number;
    static startPRWKeplerianElements(builder: flatbuffers.Builder): void;
    static addMu(builder: flatbuffers.Builder, MU: number): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaan(builder: flatbuffers.Builder, RAAN: number): void;
    static addArgPeriapsis(builder: flatbuffers.Builder, ARG_PERIAPSIS: number): void;
    static addTrueAnomaly(builder: flatbuffers.Builder, TRUE_ANOMALY: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static endPRWKeplerianElements(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWKeplerianElements(builder: flatbuffers.Builder, MU: number, SEMI_MAJOR_AXIS: number, ECCENTRICITY: number, INCLINATION: number, RAAN: number, ARG_PERIAPSIS: number, TRUE_ANOMALY: number, EPOCH: number): flatbuffers.Offset;
    unpack(): PRWKeplerianElementsT;
    unpackTo(_o: PRWKeplerianElementsT): void;
}
export declare class PRWKeplerianElementsT implements flatbuffers.IGeneratedObject {
    MU: number;
    SEMI_MAJOR_AXIS: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RAAN: number;
    ARG_PERIAPSIS: number;
    TRUE_ANOMALY: number;
    EPOCH: number;
    constructor(MU?: number, SEMI_MAJOR_AXIS?: number, ECCENTRICITY?: number, INCLINATION?: number, RAAN?: number, ARG_PERIAPSIS?: number, TRUE_ANOMALY?: number, EPOCH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWKeplerianElements.d.ts.map