import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
import { sbdOrbitClass } from './sbdOrbitClass.js';
/**
 * Small Body
 */
export declare class SBD implements flatbuffers.IUnpackableObject<SBDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SBD;
    static getRootAsSBD(bb: flatbuffers.ByteBuffer, obj?: SBD): SBD;
    static getSizePrefixedRootAsSBD(bb: flatbuffers.ByteBuffer, obj?: SBD): SBD;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Minor-planet number; 0 when the body is not numbered.
     */
    NUMBER(): number;
    /**
     * Principal provisional designation (e.g. "1999 RQ36"), or the comet
     * designation (e.g. "1P"); empty when the source gives none.
     */
    DESIGNATION(): string | null;
    DESIGNATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IAU name (e.g. "Bennu"); empty when the body is not named.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbit class.
     */
    ORBIT_CLASS(): sbdOrbitClass;
    /**
     * Near-Earth object: perihelion distance below 1.3 AU.
     */
    NEO(): boolean;
    /**
     * Potentially hazardous: Earth MOID at most 0.05 AU and H at most 22. False
     * when EARTH_MOID is not given.
     */
    PHA(): boolean;
    /**
     * Earth minimum orbit intersection distance, AU.
     */
    EARTH_MOID(): number;
    /**
     * Origin of the orbit (CCSDS CENTER_NAME), "SUN" for a heliocentric orbit.
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Frame the angles are measured in (CCSDS REF_FRAME), e.g. "ICRF", or
     * "ECLIPJ2000" for the mean ecliptic and equinox of J2000.
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system of EPOCH and PERICENTER_EPOCH (CCSDS TIME_SYSTEM), e.g. "TDB".
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of osculation, ISO 8601 in TIME_SYSTEM.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Semi-major axis, km.
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * Eccentricity.
     */
    ECCENTRICITY(): number;
    /**
     * Inclination, deg.
     */
    INCLINATION(): number;
    /**
     * Right ascension (longitude) of the ascending node, deg.
     */
    RA_OF_ASC_NODE(): number;
    /**
     * Argument of pericenter, deg.
     */
    ARG_OF_PERICENTER(): number;
    /**
     * Mean anomaly at EPOCH, deg.
     */
    MEAN_ANOMALY(): number;
    /**
     * Gravitational parameter of CENTER_NAME the elements were computed with,
     * km**3/s**2.
     */
    GM(): number;
    /**
     * Pericenter distance (q), km: the orbit size of a comet.
     */
    PERICENTER_DISTANCE(): number;
    /**
     * Time of pericenter passage, ISO 8601 in TIME_SYSTEM.
     */
    PERICENTER_EPOCH(): string | null;
    PERICENTER_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Absolute magnitude H (IAU H, G system).
     */
    ABSOLUTE_MAGNITUDE(): number;
    /**
     * Slope parameter G (IAU H, G system).
     */
    SLOPE_PARAMETER(): number;
    /**
     * Diameter, km.
     */
    DIAMETER(): number;
    /**
     * Geometric albedo.
     */
    ALBEDO(): number;
    /**
     * Rotation period, hours.
     */
    ROTATION_PERIOD(): number;
    /**
     * Current ephemeris uncertainty (Lowell astorb CEU) at CEU_EPOCH, arcsec.
     */
    CEU(): number;
    /**
     * Rate of change of CEU, arcsec/day.
     */
    CEU_RATE(): number;
    /**
     * Date CEU holds at, ISO 8601.
     */
    CEU_EPOCH(): string | null;
    CEU_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observed arc the orbit was fitted to, days.
     */
    ORBIT_ARC(): number;
    /**
     * Observations the orbit was fitted to.
     */
    OBSERVATION_COUNT(): number;
    /**
     * Where the record comes from and the terms it travels under.
     */
    PROVENANCE(obj?: PVN): PVN | null;
    static startSBD(builder: flatbuffers.Builder): void;
    static addNumber(builder: flatbuffers.Builder, NUMBER: number): void;
    static addDesignation(builder: flatbuffers.Builder, DESIGNATIONOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addOrbitClass(builder: flatbuffers.Builder, ORBIT_CLASS: sbdOrbitClass): void;
    static addNeo(builder: flatbuffers.Builder, NEO: boolean): void;
    static addPha(builder: flatbuffers.Builder, PHA: boolean): void;
    static addEarthMoid(builder: flatbuffers.Builder, EARTH_MOID: number): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, RA_OF_ASC_NODE: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, ARG_OF_PERICENTER: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addGm(builder: flatbuffers.Builder, GM: number): void;
    static addPericenterDistance(builder: flatbuffers.Builder, PERICENTER_DISTANCE: number): void;
    static addPericenterEpoch(builder: flatbuffers.Builder, PERICENTER_EPOCHOffset: flatbuffers.Offset): void;
    static addAbsoluteMagnitude(builder: flatbuffers.Builder, ABSOLUTE_MAGNITUDE: number): void;
    static addSlopeParameter(builder: flatbuffers.Builder, SLOPE_PARAMETER: number): void;
    static addDiameter(builder: flatbuffers.Builder, DIAMETER: number): void;
    static addAlbedo(builder: flatbuffers.Builder, ALBEDO: number): void;
    static addRotationPeriod(builder: flatbuffers.Builder, ROTATION_PERIOD: number): void;
    static addCeu(builder: flatbuffers.Builder, CEU: number): void;
    static addCeuRate(builder: flatbuffers.Builder, CEU_RATE: number): void;
    static addCeuEpoch(builder: flatbuffers.Builder, CEU_EPOCHOffset: flatbuffers.Offset): void;
    static addOrbitArc(builder: flatbuffers.Builder, ORBIT_ARC: number): void;
    static addObservationCount(builder: flatbuffers.Builder, OBSERVATION_COUNT: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endSBD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSBDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSBDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SBDT;
    unpackTo(_o: SBDT): void;
}
export declare class SBDT implements flatbuffers.IGeneratedObject {
    NUMBER: number;
    DESIGNATION: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    ORBIT_CLASS: sbdOrbitClass;
    NEO: boolean;
    PHA: boolean;
    EARTH_MOID: number;
    CENTER_NAME: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    SEMI_MAJOR_AXIS: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    MEAN_ANOMALY: number;
    GM: number;
    PERICENTER_DISTANCE: number;
    PERICENTER_EPOCH: string | Uint8Array | null;
    ABSOLUTE_MAGNITUDE: number;
    SLOPE_PARAMETER: number;
    DIAMETER: number;
    ALBEDO: number;
    ROTATION_PERIOD: number;
    CEU: number;
    CEU_RATE: number;
    CEU_EPOCH: string | Uint8Array | null;
    ORBIT_ARC: number;
    OBSERVATION_COUNT: number;
    PROVENANCE: PVNT | null;
    constructor(NUMBER?: number, DESIGNATION?: string | Uint8Array | null, NAME?: string | Uint8Array | null, ORBIT_CLASS?: sbdOrbitClass, NEO?: boolean, PHA?: boolean, EARTH_MOID?: number, CENTER_NAME?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, SEMI_MAJOR_AXIS?: number, ECCENTRICITY?: number, INCLINATION?: number, RA_OF_ASC_NODE?: number, ARG_OF_PERICENTER?: number, MEAN_ANOMALY?: number, GM?: number, PERICENTER_DISTANCE?: number, PERICENTER_EPOCH?: string | Uint8Array | null, ABSOLUTE_MAGNITUDE?: number, SLOPE_PARAMETER?: number, DIAMETER?: number, ALBEDO?: number, ROTATION_PERIOD?: number, CEU?: number, CEU_RATE?: number, CEU_EPOCH?: string | Uint8Array | null, ORBIT_ARC?: number, OBSERVATION_COUNT?: number, PROVENANCE?: PVNT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SBD.d.ts.map