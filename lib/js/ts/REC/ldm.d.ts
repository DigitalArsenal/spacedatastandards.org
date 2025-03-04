import * as flatbuffers from 'flatbuffers';
import { BOV, BOVT } from './bov.js';
import { CAT, CATT } from './cat.js';
import { EPM, EPMT } from './epm.js';
import { ROC, ROCT } from './roc.js';
import { SIT, SITT } from './sit.js';
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
    site(obj?: SIT): SIT | null;
    /**
     * Azimuth at Launch (in Degrees)
     */
    azimuth(): number;
    /**
     * References for Launch Data
     */
    references(): string | null;
    references(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launching Agency Name
     */
    agencyName(): string | null;
    agencyName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Points of Contact for Launch
     */
    pointsOfContact(index: number, obj?: EPM): EPM | null;
    pointsOfContactLength(): number;
    /**
     * Operations Points of Contact for Launch
     */
    operationsPointsOfContact(index: number, obj?: EPM): EPM | null;
    operationsPointsOfContactLength(): number;
    /**
     * Net Launch Time (UTC Format)
     */
    net(): string | null;
    net(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rocket Configuration Details
     */
    rocketConfiguration(obj?: ROC): ROC | null;
    /**
     * Mission Name
     */
    missionName(): string | null;
    missionName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description of the Mission
     */
    missionDescription(): string | null;
    missionDescription(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the Mission (e.g., Test Flight, Satellite Deployment)
     */
    missionType(): string | null;
    missionType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target Orbit Type (e.g., LEO, GEO)
     */
    orbitType(): string | null;
    orbitType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Weather and Environmental Conditions at Launch
     */
    weatherConditions(): string | null;
    weatherConditions(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch Outcome and Status (e.g., Successful, Failed)
     */
    launchStatus(): string | null;
    launchStatus(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Webcast URL for the Launch
     */
    webcastUrl(): string | null;
    webcastUrl(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Media Links Related to the Launch
     */
    mediaLinks(index: number): string;
    mediaLinks(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    mediaLinksLength(): number;
    /**
     * Earliest Possible Launch Times
     */
    earliestLaunchTimes(index: number): string;
    earliestLaunchTimes(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    earliestLaunchTimesLength(): number;
    /**
     * Latest Possible Launch Times
     */
    latestLaunchTimes(index: number): string;
    latestLaunchTimes(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    latestLaunchTimesLength(): number;
    /**
     * Launch Collision Avoidance Information
     */
    lcolaWindowClosures(index: number): string;
    lcolaWindowClosures(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    lcolaWindowClosuresLength(): number;
    /**
     * Payload Information (Catalog Entities)
     */
    objects(index: number, obj?: CAT): CAT | null;
    objectsLength(): number;
    /**
     * Tracking and Collision Avoidance Requirements
     */
    trackingRequirements(index: number): string;
    trackingRequirements(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    trackingRequirementsLength(): number;
    /**
     * Duration of Collision Avoidance Screen (in Seconds)
     */
    colaScreenDuration(): string | null;
    colaScreenDuration(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Probability of Collision Threshold (Percentage)
     */
    probabilityOfCollisionThreshold(): string | null;
    probabilityOfCollisionThreshold(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of Required Collision Avoidance Runs
     */
    colaRunsRequired(): string | null;
    colaRunsRequired(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Points of Contact for Collision Avoidance
     */
    colaPointsOfContact(index: number, obj?: EPM): EPM | null;
    colaPointsOfContactLength(): number;
    /**
     * Orbital Parameters of the Launch
     */
    orbitalParameters(index: number): string;
    orbitalParameters(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    orbitalParametersLength(): number;
    /**
     * Burn Out Vectors for the Launch
     */
    burnOutVectors(index: number, obj?: BOV): BOV | null;
    burnOutVectorsLength(): number;
    static startLDM(builder: flatbuffers.Builder): void;
    static addSite(builder: flatbuffers.Builder, siteOffset: flatbuffers.Offset): void;
    static addAzimuth(builder: flatbuffers.Builder, azimuth: number): void;
    static addReferences(builder: flatbuffers.Builder, referencesOffset: flatbuffers.Offset): void;
    static addAgencyName(builder: flatbuffers.Builder, agencyNameOffset: flatbuffers.Offset): void;
    static addPointsOfContact(builder: flatbuffers.Builder, pointsOfContactOffset: flatbuffers.Offset): void;
    static createPointsOfContactVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsOfContactVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOperationsPointsOfContact(builder: flatbuffers.Builder, operationsPointsOfContactOffset: flatbuffers.Offset): void;
    static createOperationsPointsOfContactVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOperationsPointsOfContactVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNet(builder: flatbuffers.Builder, netOffset: flatbuffers.Offset): void;
    static addRocketConfiguration(builder: flatbuffers.Builder, rocketConfigurationOffset: flatbuffers.Offset): void;
    static addMissionName(builder: flatbuffers.Builder, missionNameOffset: flatbuffers.Offset): void;
    static addMissionDescription(builder: flatbuffers.Builder, missionDescriptionOffset: flatbuffers.Offset): void;
    static addMissionType(builder: flatbuffers.Builder, missionTypeOffset: flatbuffers.Offset): void;
    static addOrbitType(builder: flatbuffers.Builder, orbitTypeOffset: flatbuffers.Offset): void;
    static addWeatherConditions(builder: flatbuffers.Builder, weatherConditionsOffset: flatbuffers.Offset): void;
    static addLaunchStatus(builder: flatbuffers.Builder, launchStatusOffset: flatbuffers.Offset): void;
    static addWebcastUrl(builder: flatbuffers.Builder, webcastUrlOffset: flatbuffers.Offset): void;
    static addMediaLinks(builder: flatbuffers.Builder, mediaLinksOffset: flatbuffers.Offset): void;
    static createMediaLinksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMediaLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEarliestLaunchTimes(builder: flatbuffers.Builder, earliestLaunchTimesOffset: flatbuffers.Offset): void;
    static createEarliestLaunchTimesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEarliestLaunchTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLatestLaunchTimes(builder: flatbuffers.Builder, latestLaunchTimesOffset: flatbuffers.Offset): void;
    static createLatestLaunchTimesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLatestLaunchTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLcolaWindowClosures(builder: flatbuffers.Builder, lcolaWindowClosuresOffset: flatbuffers.Offset): void;
    static createLcolaWindowClosuresVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLcolaWindowClosuresVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjects(builder: flatbuffers.Builder, objectsOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrackingRequirements(builder: flatbuffers.Builder, trackingRequirementsOffset: flatbuffers.Offset): void;
    static createTrackingRequirementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTrackingRequirementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColaScreenDuration(builder: flatbuffers.Builder, colaScreenDurationOffset: flatbuffers.Offset): void;
    static addProbabilityOfCollisionThreshold(builder: flatbuffers.Builder, probabilityOfCollisionThresholdOffset: flatbuffers.Offset): void;
    static addColaRunsRequired(builder: flatbuffers.Builder, colaRunsRequiredOffset: flatbuffers.Offset): void;
    static addColaPointsOfContact(builder: flatbuffers.Builder, colaPointsOfContactOffset: flatbuffers.Offset): void;
    static createColaPointsOfContactVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startColaPointsOfContactVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOrbitalParameters(builder: flatbuffers.Builder, orbitalParametersOffset: flatbuffers.Offset): void;
    static createOrbitalParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOrbitalParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBurnOutVectors(builder: flatbuffers.Builder, burnOutVectorsOffset: flatbuffers.Offset): void;
    static createBurnOutVectorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBurnOutVectorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endLDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): LDMT;
    unpackTo(_o: LDMT): void;
}
export declare class LDMT implements flatbuffers.IGeneratedObject {
    site: SITT | null;
    azimuth: number;
    references: string | Uint8Array | null;
    agencyName: string | Uint8Array | null;
    pointsOfContact: (EPMT)[];
    operationsPointsOfContact: (EPMT)[];
    net: string | Uint8Array | null;
    rocketConfiguration: ROCT | null;
    missionName: string | Uint8Array | null;
    missionDescription: string | Uint8Array | null;
    missionType: string | Uint8Array | null;
    orbitType: string | Uint8Array | null;
    weatherConditions: string | Uint8Array | null;
    launchStatus: string | Uint8Array | null;
    webcastUrl: string | Uint8Array | null;
    mediaLinks: (string)[];
    earliestLaunchTimes: (string)[];
    latestLaunchTimes: (string)[];
    lcolaWindowClosures: (string)[];
    objects: (CATT)[];
    trackingRequirements: (string)[];
    colaScreenDuration: string | Uint8Array | null;
    probabilityOfCollisionThreshold: string | Uint8Array | null;
    colaRunsRequired: string | Uint8Array | null;
    colaPointsOfContact: (EPMT)[];
    orbitalParameters: (string)[];
    burnOutVectors: (BOVT)[];
    constructor(site?: SITT | null, azimuth?: number, references?: string | Uint8Array | null, agencyName?: string | Uint8Array | null, pointsOfContact?: (EPMT)[], operationsPointsOfContact?: (EPMT)[], net?: string | Uint8Array | null, rocketConfiguration?: ROCT | null, missionName?: string | Uint8Array | null, missionDescription?: string | Uint8Array | null, missionType?: string | Uint8Array | null, orbitType?: string | Uint8Array | null, weatherConditions?: string | Uint8Array | null, launchStatus?: string | Uint8Array | null, webcastUrl?: string | Uint8Array | null, mediaLinks?: (string)[], earliestLaunchTimes?: (string)[], latestLaunchTimes?: (string)[], lcolaWindowClosures?: (string)[], objects?: (CATT)[], trackingRequirements?: (string)[], colaScreenDuration?: string | Uint8Array | null, probabilityOfCollisionThreshold?: string | Uint8Array | null, colaRunsRequired?: string | Uint8Array | null, colaPointsOfContact?: (EPMT)[], orbitalParameters?: (string)[], burnOutVectors?: (BOVT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ldm.d.ts.map