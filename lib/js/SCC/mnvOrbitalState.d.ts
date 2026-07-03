import * as flatbuffers from 'flatbuffers';
/**
 * Pre/post-maneuver orbital state
 */
export declare class mnvOrbitalState implements flatbuffers.IUnpackableObject<mnvOrbitalStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mnvOrbitalState;
    static getRootAsmnvOrbitalState(bb: flatbuffers.ByteBuffer, obj?: mnvOrbitalState): mnvOrbitalState;
    static getSizePrefixedRootAsmnvOrbitalState(bb: flatbuffers.ByteBuffer, obj?: mnvOrbitalState): mnvOrbitalState;
    /**
     * Element set identifier
     */
    ID_ELSET(): string | null;
    ID_ELSET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Element set data reference
     */
    ELSET(): string | null;
    ELSET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * State vector identifier
     */
    ID_STATE_VECTOR(): string | null;
    ID_STATE_VECTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * State vector data reference
     */
    STATE_VECTOR(): string | null;
    STATE_VECTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position X (km)
     */
    POS_X(): number;
    /**
     * Position Y (km)
     */
    POS_Y(): number;
    /**
     * Position Z (km)
     */
    POS_Z(): number;
    /**
     * Velocity X (km/s)
     */
    VEL_X(): number;
    /**
     * Velocity Y (km/s)
     */
    VEL_Y(): number;
    /**
     * Velocity Z (km/s)
     */
    VEL_Z(): number;
    /**
     * Radiation pressure coefficient (Cr)
     */
    RADIATION_PRESS_COEFF(): number;
    /**
     * Ballistic coefficient (m^2/kg)
     */
    BALLISTIC_COEFF(): number;
    /**
     * Apogee altitude (km)
     */
    APOGEE(): number;
    /**
     * Perigee altitude (km)
     */
    PERIGEE(): number;
    /**
     * Inclination (degrees)
     */
    INCLINATION(): number;
    /**
     * Eccentricity
     */
    ECCENTRICITY(): number;
    /**
     * Orbital period (minutes)
     */
    PERIOD(): number;
    /**
     * Right ascension of ascending node (degrees)
     */
    RAAN(): number;
    /**
     * Semi-major axis (km)
     */
    SMA(): number;
    /**
     * GEO longitude (degrees east)
     */
    GEO_LONGITUDE(): number;
    /**
     * Longitude drift rate (degrees/day)
     */
    DRIFT_RATE(): number;
    /**
     * Position uncertainty U (km, 1-sigma)
     */
    SIGMA_U(): number;
    /**
     * Position uncertainty V (km, 1-sigma)
     */
    SIGMA_V(): number;
    /**
     * Position uncertainty W (km, 1-sigma)
     */
    SIGMA_W(): number;
    static startmnvOrbitalState(builder: flatbuffers.Builder): void;
    static addIdElset(builder: flatbuffers.Builder, ID_ELSETOffset: flatbuffers.Offset): void;
    static addElset(builder: flatbuffers.Builder, ELSETOffset: flatbuffers.Offset): void;
    static addIdStateVector(builder: flatbuffers.Builder, ID_STATE_VECTOROffset: flatbuffers.Offset): void;
    static addStateVector(builder: flatbuffers.Builder, STATE_VECTOROffset: flatbuffers.Offset): void;
    static addPosX(builder: flatbuffers.Builder, POS_X: number): void;
    static addPosY(builder: flatbuffers.Builder, POS_Y: number): void;
    static addPosZ(builder: flatbuffers.Builder, POS_Z: number): void;
    static addVelX(builder: flatbuffers.Builder, VEL_X: number): void;
    static addVelY(builder: flatbuffers.Builder, VEL_Y: number): void;
    static addVelZ(builder: flatbuffers.Builder, VEL_Z: number): void;
    static addRadiationPressCoeff(builder: flatbuffers.Builder, RADIATION_PRESS_COEFF: number): void;
    static addBallisticCoeff(builder: flatbuffers.Builder, BALLISTIC_COEFF: number): void;
    static addApogee(builder: flatbuffers.Builder, APOGEE: number): void;
    static addPerigee(builder: flatbuffers.Builder, PERIGEE: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addPeriod(builder: flatbuffers.Builder, PERIOD: number): void;
    static addRaan(builder: flatbuffers.Builder, RAAN: number): void;
    static addSma(builder: flatbuffers.Builder, SMA: number): void;
    static addGeoLongitude(builder: flatbuffers.Builder, GEO_LONGITUDE: number): void;
    static addDriftRate(builder: flatbuffers.Builder, DRIFT_RATE: number): void;
    static addSigmaU(builder: flatbuffers.Builder, SIGMA_U: number): void;
    static addSigmaV(builder: flatbuffers.Builder, SIGMA_V: number): void;
    static addSigmaW(builder: flatbuffers.Builder, SIGMA_W: number): void;
    static endmnvOrbitalState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmnvOrbitalState(builder: flatbuffers.Builder, ID_ELSETOffset: flatbuffers.Offset, ELSETOffset: flatbuffers.Offset, ID_STATE_VECTOROffset: flatbuffers.Offset, STATE_VECTOROffset: flatbuffers.Offset, POS_X: number, POS_Y: number, POS_Z: number, VEL_X: number, VEL_Y: number, VEL_Z: number, RADIATION_PRESS_COEFF: number, BALLISTIC_COEFF: number, APOGEE: number, PERIGEE: number, INCLINATION: number, ECCENTRICITY: number, PERIOD: number, RAAN: number, SMA: number, GEO_LONGITUDE: number, DRIFT_RATE: number, SIGMA_U: number, SIGMA_V: number, SIGMA_W: number): flatbuffers.Offset;
    unpack(): mnvOrbitalStateT;
    unpackTo(_o: mnvOrbitalStateT): void;
}
export declare class mnvOrbitalStateT implements flatbuffers.IGeneratedObject {
    ID_ELSET: string | Uint8Array | null;
    ELSET: string | Uint8Array | null;
    ID_STATE_VECTOR: string | Uint8Array | null;
    STATE_VECTOR: string | Uint8Array | null;
    POS_X: number;
    POS_Y: number;
    POS_Z: number;
    VEL_X: number;
    VEL_Y: number;
    VEL_Z: number;
    RADIATION_PRESS_COEFF: number;
    BALLISTIC_COEFF: number;
    APOGEE: number;
    PERIGEE: number;
    INCLINATION: number;
    ECCENTRICITY: number;
    PERIOD: number;
    RAAN: number;
    SMA: number;
    GEO_LONGITUDE: number;
    DRIFT_RATE: number;
    SIGMA_U: number;
    SIGMA_V: number;
    SIGMA_W: number;
    constructor(ID_ELSET?: string | Uint8Array | null, ELSET?: string | Uint8Array | null, ID_STATE_VECTOR?: string | Uint8Array | null, STATE_VECTOR?: string | Uint8Array | null, POS_X?: number, POS_Y?: number, POS_Z?: number, VEL_X?: number, VEL_Y?: number, VEL_Z?: number, RADIATION_PRESS_COEFF?: number, BALLISTIC_COEFF?: number, APOGEE?: number, PERIGEE?: number, INCLINATION?: number, ECCENTRICITY?: number, PERIOD?: number, RAAN?: number, SMA?: number, GEO_LONGITUDE?: number, DRIFT_RATE?: number, SIGMA_U?: number, SIGMA_V?: number, SIGMA_W?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mnvOrbitalState.d.ts.map