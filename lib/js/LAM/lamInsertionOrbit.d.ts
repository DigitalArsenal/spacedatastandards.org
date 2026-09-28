import * as flatbuffers from 'flatbuffers';
/**
 * Orbit at insertion, measured or projected.
 */
export declare class lamInsertionOrbit implements flatbuffers.IUnpackableObject<lamInsertionOrbitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): lamInsertionOrbit;
    static getRootAslamInsertionOrbit(bb: flatbuffers.ByteBuffer, obj?: lamInsertionOrbit): lamInsertionOrbit;
    static getSizePrefixedRootAslamInsertionOrbit(bb: flatbuffers.ByteBuffer, obj?: lamInsertionOrbit): lamInsertionOrbit;
    /**
     * Insertion epoch in ISO 8601 UTC format.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time from launch of insertion, in seconds.
     */
    TIME_FROM_LAUNCH_S(): number;
    /**
     * Frame of the angular elements.
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Osculating semi-major axis in meters.
     */
    SEMI_MAJOR_AXIS_M(): number;
    /**
     * Osculating eccentricity.
     */
    ECCENTRICITY(): number;
    /**
     * Inclination in degrees.
     */
    INCLINATION_DEG(): number;
    /**
     * Right ascension of the ascending node in degrees.
     */
    RAAN_DEG(): number;
    /**
     * Argument of periapsis in degrees.
     */
    ARGUMENT_OF_PERIAPSIS_DEG(): number;
    /**
     * Argument of latitude at insertion in degrees.
     */
    ARGUMENT_OF_LATITUDE_DEG(): number;
    /**
     * Periapsis altitude above the WGS-84 equatorial radius, in meters.
     */
    PERIAPSIS_ALTITUDE_M(): number;
    /**
     * Apoapsis altitude above the WGS-84 equatorial radius, in meters.
     */
    APOAPSIS_ALTITUDE_M(): number;
    /**
     * One-sigma uncertainty of RAAN_DEG in degrees.
     */
    RAAN_UNCERTAINTY_DEG(): number;
    /**
     * One-sigma uncertainty of ARGUMENT_OF_LATITUDE_DEG in degrees.
     */
    ARGUMENT_OF_LATITUDE_UNCERTAINTY_DEG(): number;
    /**
     * One-sigma uncertainty of PERIAPSIS_ALTITUDE_M in meters.
     */
    PERIAPSIS_ALTITUDE_UNCERTAINTY_M(): number;
    /**
     * One-sigma uncertainty of APOAPSIS_ALTITUDE_M in meters.
     */
    APOAPSIS_ALTITUDE_UNCERTAINTY_M(): number;
    static startlamInsertionOrbit(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTimeFromLaunchS(builder: flatbuffers.Builder, TIME_FROM_LAUNCH_S: number): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addSemiMajorAxisM(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS_M: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclinationDeg(builder: flatbuffers.Builder, INCLINATION_DEG: number): void;
    static addRaanDeg(builder: flatbuffers.Builder, RAAN_DEG: number): void;
    static addArgumentOfPeriapsisDeg(builder: flatbuffers.Builder, ARGUMENT_OF_PERIAPSIS_DEG: number): void;
    static addArgumentOfLatitudeDeg(builder: flatbuffers.Builder, ARGUMENT_OF_LATITUDE_DEG: number): void;
    static addPeriapsisAltitudeM(builder: flatbuffers.Builder, PERIAPSIS_ALTITUDE_M: number): void;
    static addApoapsisAltitudeM(builder: flatbuffers.Builder, APOAPSIS_ALTITUDE_M: number): void;
    static addRaanUncertaintyDeg(builder: flatbuffers.Builder, RAAN_UNCERTAINTY_DEG: number): void;
    static addArgumentOfLatitudeUncertaintyDeg(builder: flatbuffers.Builder, ARGUMENT_OF_LATITUDE_UNCERTAINTY_DEG: number): void;
    static addPeriapsisAltitudeUncertaintyM(builder: flatbuffers.Builder, PERIAPSIS_ALTITUDE_UNCERTAINTY_M: number): void;
    static addApoapsisAltitudeUncertaintyM(builder: flatbuffers.Builder, APOAPSIS_ALTITUDE_UNCERTAINTY_M: number): void;
    static endlamInsertionOrbit(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createlamInsertionOrbit(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, TIME_FROM_LAUNCH_S: number, REF_FRAMEOffset: flatbuffers.Offset, SEMI_MAJOR_AXIS_M: number, ECCENTRICITY: number, INCLINATION_DEG: number, RAAN_DEG: number, ARGUMENT_OF_PERIAPSIS_DEG: number, ARGUMENT_OF_LATITUDE_DEG: number, PERIAPSIS_ALTITUDE_M: number, APOAPSIS_ALTITUDE_M: number, RAAN_UNCERTAINTY_DEG: number, ARGUMENT_OF_LATITUDE_UNCERTAINTY_DEG: number, PERIAPSIS_ALTITUDE_UNCERTAINTY_M: number, APOAPSIS_ALTITUDE_UNCERTAINTY_M: number): flatbuffers.Offset;
    unpack(): lamInsertionOrbitT;
    unpackTo(_o: lamInsertionOrbitT): void;
}
export declare class lamInsertionOrbitT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    TIME_FROM_LAUNCH_S: number;
    REF_FRAME: string | Uint8Array | null;
    SEMI_MAJOR_AXIS_M: number;
    ECCENTRICITY: number;
    INCLINATION_DEG: number;
    RAAN_DEG: number;
    ARGUMENT_OF_PERIAPSIS_DEG: number;
    ARGUMENT_OF_LATITUDE_DEG: number;
    PERIAPSIS_ALTITUDE_M: number;
    APOAPSIS_ALTITUDE_M: number;
    RAAN_UNCERTAINTY_DEG: number;
    ARGUMENT_OF_LATITUDE_UNCERTAINTY_DEG: number;
    PERIAPSIS_ALTITUDE_UNCERTAINTY_M: number;
    APOAPSIS_ALTITUDE_UNCERTAINTY_M: number;
    constructor(EPOCH?: string | Uint8Array | null, TIME_FROM_LAUNCH_S?: number, REF_FRAME?: string | Uint8Array | null, SEMI_MAJOR_AXIS_M?: number, ECCENTRICITY?: number, INCLINATION_DEG?: number, RAAN_DEG?: number, ARGUMENT_OF_PERIAPSIS_DEG?: number, ARGUMENT_OF_LATITUDE_DEG?: number, PERIAPSIS_ALTITUDE_M?: number, APOAPSIS_ALTITUDE_M?: number, RAAN_UNCERTAINTY_DEG?: number, ARGUMENT_OF_LATITUDE_UNCERTAINTY_DEG?: number, PERIAPSIS_ALTITUDE_UNCERTAINTY_M?: number, APOAPSIS_ALTITUDE_UNCERTAINTY_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=lamInsertionOrbit.d.ts.map