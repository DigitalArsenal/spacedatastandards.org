import * as flatbuffers from 'flatbuffers';
import { BOV, BOVT } from './BOV.js';
import { CAT, CATT } from './CAT.js';
import { EPM, EPMT } from './EPM.js';
import { ROC, ROCT } from './ROC.js';
import { SIT, SITT } from './SIT.js';
/**
 * Launch Data Message
 */
export declare class LDM implements flatbuffers.IUnpackableObject<LDMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LDM;
    static getRootAsLDM(bb: flatbuffers.ByteBuffer, obj?: LDM): LDM;
    static getSizePrefixedRootAsLDM(bb: flatbuffers.ByteBuffer, obj?: LDM): LDM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Launch Site Information
     */
    SITE(obj?: SIT): SIT | null;
    /**
     * Azimuth at Launch (in Degrees)
     */
    AZIMUTH(): number;
    /**
     * References for Launch Data
     */
    REFERENCES(): string | null;
    REFERENCES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launching Agency Name
     */
    AGENCY_NAME(): string | null;
    AGENCY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Points of Contact for Launch
     */
    POINTS_OF_CONTACT(index: number, obj?: EPM): EPM | null;
    pointsOfContactLength(): number;
    /**
     * Operations Points of Contact for Launch
     */
    OPERATIONS_POINTS_OF_CONTACT(index: number, obj?: EPM): EPM | null;
    operationsPointsOfContactLength(): number;
    /**
     * Net Launch Time (UTC Format)
     */
    NET(): string | null;
    NET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rocket Configuration Details
     */
    ROCKET_CONFIGURATION(obj?: ROC): ROC | null;
    /**
     * Mission Name
     */
    MISSION_NAME(): string | null;
    MISSION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description of the Mission
     */
    MISSION_DESCRIPTION(): string | null;
    MISSION_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the Mission (e.g., Test Flight, Satellite Deployment)
     */
    MISSION_TYPE(): string | null;
    MISSION_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target Orbit Type (e.g., LEO, GEO)
     */
    ORBIT_TYPE(): string | null;
    ORBIT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Weather and Environmental Conditions at Launch
     */
    WEATHER_CONDITIONS(): string | null;
    WEATHER_CONDITIONS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch Outcome and Status (e.g., Successful, Failed)
     */
    LAUNCH_STATUS(): string | null;
    LAUNCH_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Webcast URL for the Launch
     */
    WEBCAST_URL(): string | null;
    WEBCAST_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Media Links Related to the Launch
     */
    MEDIA_LINKS(index: number): string;
    MEDIA_LINKS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    mediaLinksLength(): number;
    /**
     * Earliest Possible Launch Times
     */
    EARLIEST_LAUNCH_TIMES(index: number): string;
    EARLIEST_LAUNCH_TIMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    earliestLaunchTimesLength(): number;
    /**
     * Latest Possible Launch Times
     */
    LATEST_LAUNCH_TIMES(index: number): string;
    LATEST_LAUNCH_TIMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    latestLaunchTimesLength(): number;
    /**
     * Launch Collision Avoidance Information
     */
    LCOLA_WINDOW_CLOSURES(index: number): string;
    LCOLA_WINDOW_CLOSURES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    lcolaWindowClosuresLength(): number;
    /**
     * Payload Information (Catalog Entities)
     */
    OBJECTS(index: number, obj?: CAT): CAT | null;
    objectsLength(): number;
    /**
     * Tracking and Collision Avoidance Requirements
     */
    TRACKING_REQUIREMENTS(index: number): string;
    TRACKING_REQUIREMENTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    trackingRequirementsLength(): number;
    /**
     * Duration of Collision Avoidance Screen (in Seconds)
     */
    COLA_SCREEN_DURATION(): string | null;
    COLA_SCREEN_DURATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Probability of Collision Threshold (Percentage)
     */
    PROBABILITY_OF_COLLISION_THRESHOLD(): string | null;
    PROBABILITY_OF_COLLISION_THRESHOLD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of Required Collision Avoidance Runs
     */
    COLA_RUNS_REQUIRED(): string | null;
    COLA_RUNS_REQUIRED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Points of Contact for Collision Avoidance
     */
    COLA_POINTS_OF_CONTACT(index: number, obj?: EPM): EPM | null;
    colaPointsOfContactLength(): number;
    /**
     * Orbital Parameters of the Launch
     */
    ORBITAL_PARAMETERS(index: number): string;
    ORBITAL_PARAMETERS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    orbitalParametersLength(): number;
    /**
     * Burn Out Vectors for the Launch
     */
    BURN_OUT_VECTORS(index: number, obj?: BOV): BOV | null;
    burnOutVectorsLength(): number;
    static startLDM(builder: flatbuffers.Builder): void;
    static addSite(builder: flatbuffers.Builder, SITEOffset: flatbuffers.Offset): void;
    static addAzimuth(builder: flatbuffers.Builder, AZIMUTH: number): void;
    static addReferences(builder: flatbuffers.Builder, REFERENCESOffset: flatbuffers.Offset): void;
    static addAgencyName(builder: flatbuffers.Builder, AGENCY_NAMEOffset: flatbuffers.Offset): void;
    static addPointsOfContact(builder: flatbuffers.Builder, POINTS_OF_CONTACTOffset: flatbuffers.Offset): void;
    static createPointsOfContactVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsOfContactVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOperationsPointsOfContact(builder: flatbuffers.Builder, OPERATIONS_POINTS_OF_CONTACTOffset: flatbuffers.Offset): void;
    static createOperationsPointsOfContactVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOperationsPointsOfContactVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNet(builder: flatbuffers.Builder, NETOffset: flatbuffers.Offset): void;
    static addRocketConfiguration(builder: flatbuffers.Builder, ROCKET_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addMissionName(builder: flatbuffers.Builder, MISSION_NAMEOffset: flatbuffers.Offset): void;
    static addMissionDescription(builder: flatbuffers.Builder, MISSION_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addMissionType(builder: flatbuffers.Builder, MISSION_TYPEOffset: flatbuffers.Offset): void;
    static addOrbitType(builder: flatbuffers.Builder, ORBIT_TYPEOffset: flatbuffers.Offset): void;
    static addWeatherConditions(builder: flatbuffers.Builder, WEATHER_CONDITIONSOffset: flatbuffers.Offset): void;
    static addLaunchStatus(builder: flatbuffers.Builder, LAUNCH_STATUSOffset: flatbuffers.Offset): void;
    static addWebcastUrl(builder: flatbuffers.Builder, WEBCAST_URLOffset: flatbuffers.Offset): void;
    static addMediaLinks(builder: flatbuffers.Builder, MEDIA_LINKSOffset: flatbuffers.Offset): void;
    static createMediaLinksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMediaLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEarliestLaunchTimes(builder: flatbuffers.Builder, EARLIEST_LAUNCH_TIMESOffset: flatbuffers.Offset): void;
    static createEarliestLaunchTimesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEarliestLaunchTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLatestLaunchTimes(builder: flatbuffers.Builder, LATEST_LAUNCH_TIMESOffset: flatbuffers.Offset): void;
    static createLatestLaunchTimesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLatestLaunchTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLcolaWindowClosures(builder: flatbuffers.Builder, LCOLA_WINDOW_CLOSURESOffset: flatbuffers.Offset): void;
    static createLcolaWindowClosuresVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLcolaWindowClosuresVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrackingRequirements(builder: flatbuffers.Builder, TRACKING_REQUIREMENTSOffset: flatbuffers.Offset): void;
    static createTrackingRequirementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTrackingRequirementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColaScreenDuration(builder: flatbuffers.Builder, COLA_SCREEN_DURATIONOffset: flatbuffers.Offset): void;
    static addProbabilityOfCollisionThreshold(builder: flatbuffers.Builder, PROBABILITY_OF_COLLISION_THRESHOLDOffset: flatbuffers.Offset): void;
    static addColaRunsRequired(builder: flatbuffers.Builder, COLA_RUNS_REQUIREDOffset: flatbuffers.Offset): void;
    static addColaPointsOfContact(builder: flatbuffers.Builder, COLA_POINTS_OF_CONTACTOffset: flatbuffers.Offset): void;
    static createColaPointsOfContactVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startColaPointsOfContactVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOrbitalParameters(builder: flatbuffers.Builder, ORBITAL_PARAMETERSOffset: flatbuffers.Offset): void;
    static createOrbitalParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOrbitalParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBurnOutVectors(builder: flatbuffers.Builder, BURN_OUT_VECTORSOffset: flatbuffers.Offset): void;
    static createBurnOutVectorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBurnOutVectorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endLDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): LDMT;
    unpackTo(_o: LDMT): void;
}
export declare class LDMT implements flatbuffers.IGeneratedObject {
    SITE: SITT | null;
    AZIMUTH: number;
    REFERENCES: string | Uint8Array | null;
    AGENCY_NAME: string | Uint8Array | null;
    POINTS_OF_CONTACT: (EPMT)[];
    OPERATIONS_POINTS_OF_CONTACT: (EPMT)[];
    NET: string | Uint8Array | null;
    ROCKET_CONFIGURATION: ROCT | null;
    MISSION_NAME: string | Uint8Array | null;
    MISSION_DESCRIPTION: string | Uint8Array | null;
    MISSION_TYPE: string | Uint8Array | null;
    ORBIT_TYPE: string | Uint8Array | null;
    WEATHER_CONDITIONS: string | Uint8Array | null;
    LAUNCH_STATUS: string | Uint8Array | null;
    WEBCAST_URL: string | Uint8Array | null;
    MEDIA_LINKS: (string)[];
    EARLIEST_LAUNCH_TIMES: (string)[];
    LATEST_LAUNCH_TIMES: (string)[];
    LCOLA_WINDOW_CLOSURES: (string)[];
    OBJECTS: (CATT)[];
    TRACKING_REQUIREMENTS: (string)[];
    COLA_SCREEN_DURATION: string | Uint8Array | null;
    PROBABILITY_OF_COLLISION_THRESHOLD: string | Uint8Array | null;
    COLA_RUNS_REQUIRED: string | Uint8Array | null;
    COLA_POINTS_OF_CONTACT: (EPMT)[];
    ORBITAL_PARAMETERS: (string)[];
    BURN_OUT_VECTORS: (BOVT)[];
    constructor(SITE?: SITT | null, AZIMUTH?: number, REFERENCES?: string | Uint8Array | null, AGENCY_NAME?: string | Uint8Array | null, POINTS_OF_CONTACT?: (EPMT)[], OPERATIONS_POINTS_OF_CONTACT?: (EPMT)[], NET?: string | Uint8Array | null, ROCKET_CONFIGURATION?: ROCT | null, MISSION_NAME?: string | Uint8Array | null, MISSION_DESCRIPTION?: string | Uint8Array | null, MISSION_TYPE?: string | Uint8Array | null, ORBIT_TYPE?: string | Uint8Array | null, WEATHER_CONDITIONS?: string | Uint8Array | null, LAUNCH_STATUS?: string | Uint8Array | null, WEBCAST_URL?: string | Uint8Array | null, MEDIA_LINKS?: (string)[], EARLIEST_LAUNCH_TIMES?: (string)[], LATEST_LAUNCH_TIMES?: (string)[], LCOLA_WINDOW_CLOSURES?: (string)[], OBJECTS?: (CATT)[], TRACKING_REQUIREMENTS?: (string)[], COLA_SCREEN_DURATION?: string | Uint8Array | null, PROBABILITY_OF_COLLISION_THRESHOLD?: string | Uint8Array | null, COLA_RUNS_REQUIRED?: string | Uint8Array | null, COLA_POINTS_OF_CONTACT?: (EPMT)[], ORBITAL_PARAMETERS?: (string)[], BURN_OUT_VECTORS?: (BOVT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LDM.d.ts.map