import * as flatbuffers from 'flatbuffers';
/**
 * Manifold Element Set
 */
export declare class manifoldElset implements flatbuffers.IUnpackableObject<manifoldElsetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): manifoldElset;
    static getRootAsmanifoldElset(bb: flatbuffers.ByteBuffer, obj?: manifoldElset): manifoldElset;
    static getSizePrefixedRootAsmanifoldElset(bb: flatbuffers.ByteBuffer, obj?: manifoldElset): manifoldElset;
    /**
     * Epoch of element set (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Semi-major axis in km
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * Eccentricity
     */
    ECCENTRICITY(): number;
    /**
     * Inclination in degrees
     */
    INCLINATION(): number;
    /**
     * Right ascension of ascending node in degrees
     */
    RA_OF_ASC_NODE(): number;
    /**
     * Argument of pericenter in degrees
     */
    ARG_OF_PERICENTER(): number;
    /**
     * Mean anomaly in degrees
     */
    MEAN_ANOMALY(): number;
    /**
     * Applied delta-V in m/s
     */
    DELTA_V(): number;
    /**
     * Applied delta-T in seconds
     */
    DELTA_T(): number;
    /**
     * Delta-V direction X (unit vector)
     */
    DV_X(): number;
    /**
     * Delta-V direction Y (unit vector)
     */
    DV_Y(): number;
    /**
     * Delta-V direction Z (unit vector)
     */
    DV_Z(): number;
    /**
     * Probability weight (0.0-1.0)
     */
    WEIGHT(): number;
    /**
     * Apogee altitude in km
     */
    APOGEE(): number;
    /**
     * Perigee altitude in km
     */
    PERIGEE(): number;
    /**
     * Period in minutes
     */
    PERIOD(): number;
    static startmanifoldElset(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, RA_OF_ASC_NODE: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, ARG_OF_PERICENTER: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addDeltaV(builder: flatbuffers.Builder, DELTA_V: number): void;
    static addDeltaT(builder: flatbuffers.Builder, DELTA_T: number): void;
    static addDvX(builder: flatbuffers.Builder, DV_X: number): void;
    static addDvY(builder: flatbuffers.Builder, DV_Y: number): void;
    static addDvZ(builder: flatbuffers.Builder, DV_Z: number): void;
    static addWeight(builder: flatbuffers.Builder, WEIGHT: number): void;
    static addApogee(builder: flatbuffers.Builder, APOGEE: number): void;
    static addPerigee(builder: flatbuffers.Builder, PERIGEE: number): void;
    static addPeriod(builder: flatbuffers.Builder, PERIOD: number): void;
    static endmanifoldElset(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmanifoldElset(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, SEMI_MAJOR_AXIS: number, ECCENTRICITY: number, INCLINATION: number, RA_OF_ASC_NODE: number, ARG_OF_PERICENTER: number, MEAN_ANOMALY: number, DELTA_V: number, DELTA_T: number, DV_X: number, DV_Y: number, DV_Z: number, WEIGHT: number, APOGEE: number, PERIGEE: number, PERIOD: number): flatbuffers.Offset;
    unpack(): manifoldElsetT;
    unpackTo(_o: manifoldElsetT): void;
}
export declare class manifoldElsetT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    SEMI_MAJOR_AXIS: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    MEAN_ANOMALY: number;
    DELTA_V: number;
    DELTA_T: number;
    DV_X: number;
    DV_Y: number;
    DV_Z: number;
    WEIGHT: number;
    APOGEE: number;
    PERIGEE: number;
    PERIOD: number;
    constructor(EPOCH?: string | Uint8Array | null, SEMI_MAJOR_AXIS?: number, ECCENTRICITY?: number, INCLINATION?: number, RA_OF_ASC_NODE?: number, ARG_OF_PERICENTER?: number, MEAN_ANOMALY?: number, DELTA_V?: number, DELTA_T?: number, DV_X?: number, DV_Y?: number, DV_Z?: number, WEIGHT?: number, APOGEE?: number, PERIGEE?: number, PERIOD?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=manifoldElset.d.ts.map