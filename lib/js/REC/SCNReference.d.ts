import * as flatbuffers from 'flatbuffers';
import { EOO, EOOT } from './EOO.js';
import { MNV, MNVT } from './MNV.js';
import { OMM, OMMT } from './OMM.js';
import { RDO, RDOT } from './RDO.js';
import { SCNExclusionZone, SCNExclusionZoneT } from './SCNExclusionZone.js';
import { SCNPointOfInterest, SCNPointOfInterestT } from './SCNPointOfInterest.js';
import { SCNSunAdvantageTarget, SCNSunAdvantageTargetT } from './SCNSunAdvantageTarget.js';
import { SCNTleLines, SCNTleLinesT } from './SCNTleLines.js';
import { SCNViewCone, SCNViewConeT } from './SCNViewCone.js';
import { SEN, SENT } from './SEN.js';
import { SIT, SITT } from './SIT.js';
import { STV, STVT } from './STV.js';
import { scenarioReferenceKind } from './scenarioReferenceKind.js';
/**
 * Scene reference that binds viewer-scene state to existing SDS domain
 * records without duplicating those records.
 */
export declare class SCNReference implements flatbuffers.IUnpackableObject<SCNReferenceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNReference;
    static getRootAsSCNReference(bb: flatbuffers.ByteBuffer, obj?: SCNReference): SCNReference;
    static getSizePrefixedRootAsSCNReference(bb: flatbuffers.ByteBuffer, obj?: SCNReference): SCNReference;
    /**
     * Stable scenario-local id for this reference.
     */
    REFERENCE_ID(): string | null;
    REFERENCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable display name for the reference.
     */
    DISPLAY_NAME(): string | null;
    DISPLAY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Category of object or annotation represented by this reference.
     */
    REFERENCE_KIND(): scenarioReferenceKind;
    /**
     * True when this reference represents a removal request.
     */
    REMOVE(): boolean;
    /**
     * NORAD catalog id for satellite references when available.
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator or provider object id when available.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Country or owner label associated with the reference.
     */
    COUNTRY(): string | null;
    COUNTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source labels or URIs that produced this reference.
     */
    SOURCES(index: number): string;
    SOURCES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourcesLength(): number;
    /**
     * Data-mode labels associated with this reference.
     */
    DATA_MODES(index: number): string;
    DATA_MODES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    dataModesLength(): number;
    /**
     * TLE provenance and raw lines for satellite references.
     */
    TLES(index: number, obj?: SCNTleLines): SCNTleLines | null;
    tlesLength(): number;
    /**
     * Mean orbital elements associated with this reference.
     */
    MEAN_ELEMENTS(index: number, obj?: OMM): OMM | null;
    meanElementsLength(): number;
    /**
     * State vectors associated with this reference.
     */
    STATES(index: number, obj?: STV): STV | null;
    statesLength(): number;
    /**
     * Maneuver records associated with this reference.
     */
    MANEUVERS(index: number, obj?: MNV): MNV | null;
    maneuversLength(): number;
    /**
     * Ground-site record associated with this reference.
     */
    SITE(obj?: SIT): SIT | null;
    /**
     * Sensor record associated with this reference.
     */
    SENSOR(obj?: SEN): SEN | null;
    /**
     * Sensor system id for references that identify a sensor by id.
     */
    SENSOR_SYSTEM_ID(): string | null;
    SENSOR_SYSTEM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor id for references that identify a sensor by id.
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ground-site latitude in degrees when no SIT record is available.
     */
    SITE_LATITUDE_DEG(): number;
    /**
     * Ground-site longitude in degrees when no SIT record is available.
     */
    SITE_LONGITUDE_DEG(): number;
    /**
     * Scenario variable id for variable satellite references.
     */
    VARIABLE_SATELLITE_ID(): string | null;
    VARIABLE_SATELLITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Scenario variable id for variable site references.
     */
    VARIABLE_SITE_ID(): string | null;
    VARIABLE_SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Points of interest associated with this reference.
     */
    POINTS(index: number, obj?: SCNPointOfInterest): SCNPointOfInterest | null;
    pointsLength(): number;
    /**
     * View-cone overlay associated with this reference.
     */
    VIEW_CONE(obj?: SCNViewCone): SCNViewCone | null;
    /**
     * Sun-advantage target pairing for this reference.
     */
    SUN_ADVANTAGE_TARGET(obj?: SCNSunAdvantageTarget): SCNSunAdvantageTarget | null;
    /**
     * Exclusion-zone geometry associated with this reference.
     */
    EXCLUSION_ZONE(obj?: SCNExclusionZone): SCNExclusionZone | null;
    /**
     * Electro-optical observation record associated with this reference.
     */
    OBSERVATION_EO(obj?: EOO): EOO | null;
    /**
     * Radar observation record associated with this reference.
     */
    OBSERVATION_RADAR(obj?: RDO): RDO | null;
    static startSCNReference(builder: flatbuffers.Builder): void;
    static addReferenceId(builder: flatbuffers.Builder, REFERENCE_IDOffset: flatbuffers.Offset): void;
    static addDisplayName(builder: flatbuffers.Builder, DISPLAY_NAMEOffset: flatbuffers.Offset): void;
    static addReferenceKind(builder: flatbuffers.Builder, REFERENCE_KIND: scenarioReferenceKind): void;
    static addRemove(builder: flatbuffers.Builder, REMOVE: boolean): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addCountry(builder: flatbuffers.Builder, COUNTRYOffset: flatbuffers.Offset): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDataModes(builder: flatbuffers.Builder, DATA_MODESOffset: flatbuffers.Offset): void;
    static createDataModesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDataModesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTles(builder: flatbuffers.Builder, TLESOffset: flatbuffers.Offset): void;
    static createTlesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTlesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMeanElements(builder: flatbuffers.Builder, MEAN_ELEMENTSOffset: flatbuffers.Offset): void;
    static createMeanElementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMeanElementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static createStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManeuvers(builder: flatbuffers.Builder, MANEUVERSOffset: flatbuffers.Offset): void;
    static createManeuversVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManeuversVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSite(builder: flatbuffers.Builder, SITEOffset: flatbuffers.Offset): void;
    static addSensor(builder: flatbuffers.Builder, SENSOROffset: flatbuffers.Offset): void;
    static addSensorSystemId(builder: flatbuffers.Builder, SENSOR_SYSTEM_IDOffset: flatbuffers.Offset): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addSiteLatitudeDeg(builder: flatbuffers.Builder, SITE_LATITUDE_DEG: number): void;
    static addSiteLongitudeDeg(builder: flatbuffers.Builder, SITE_LONGITUDE_DEG: number): void;
    static addVariableSatelliteId(builder: flatbuffers.Builder, VARIABLE_SATELLITE_IDOffset: flatbuffers.Offset): void;
    static addVariableSiteId(builder: flatbuffers.Builder, VARIABLE_SITE_IDOffset: flatbuffers.Offset): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addViewCone(builder: flatbuffers.Builder, VIEW_CONEOffset: flatbuffers.Offset): void;
    static addSunAdvantageTarget(builder: flatbuffers.Builder, SUN_ADVANTAGE_TARGETOffset: flatbuffers.Offset): void;
    static addExclusionZone(builder: flatbuffers.Builder, EXCLUSION_ZONEOffset: flatbuffers.Offset): void;
    static addObservationEo(builder: flatbuffers.Builder, OBSERVATION_EOOffset: flatbuffers.Offset): void;
    static addObservationRadar(builder: flatbuffers.Builder, OBSERVATION_RADAROffset: flatbuffers.Offset): void;
    static endSCNReference(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SCNReferenceT;
    unpackTo(_o: SCNReferenceT): void;
}
export declare class SCNReferenceT implements flatbuffers.IGeneratedObject {
    REFERENCE_ID: string | Uint8Array | null;
    DISPLAY_NAME: string | Uint8Array | null;
    REFERENCE_KIND: scenarioReferenceKind;
    REMOVE: boolean;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    COUNTRY: string | Uint8Array | null;
    SOURCES: (string)[];
    DATA_MODES: (string)[];
    TLES: (SCNTleLinesT)[];
    MEAN_ELEMENTS: (OMMT)[];
    STATES: (STVT)[];
    MANEUVERS: (MNVT)[];
    SITE: SITT | null;
    SENSOR: SENT | null;
    SENSOR_SYSTEM_ID: string | Uint8Array | null;
    SENSOR_ID: string | Uint8Array | null;
    SITE_LATITUDE_DEG: number;
    SITE_LONGITUDE_DEG: number;
    VARIABLE_SATELLITE_ID: string | Uint8Array | null;
    VARIABLE_SITE_ID: string | Uint8Array | null;
    POINTS: (SCNPointOfInterestT)[];
    VIEW_CONE: SCNViewConeT | null;
    SUN_ADVANTAGE_TARGET: SCNSunAdvantageTargetT | null;
    EXCLUSION_ZONE: SCNExclusionZoneT | null;
    OBSERVATION_EO: EOOT | null;
    OBSERVATION_RADAR: RDOT | null;
    constructor(REFERENCE_ID?: string | Uint8Array | null, DISPLAY_NAME?: string | Uint8Array | null, REFERENCE_KIND?: scenarioReferenceKind, REMOVE?: boolean, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, COUNTRY?: string | Uint8Array | null, SOURCES?: (string)[], DATA_MODES?: (string)[], TLES?: (SCNTleLinesT)[], MEAN_ELEMENTS?: (OMMT)[], STATES?: (STVT)[], MANEUVERS?: (MNVT)[], SITE?: SITT | null, SENSOR?: SENT | null, SENSOR_SYSTEM_ID?: string | Uint8Array | null, SENSOR_ID?: string | Uint8Array | null, SITE_LATITUDE_DEG?: number, SITE_LONGITUDE_DEG?: number, VARIABLE_SATELLITE_ID?: string | Uint8Array | null, VARIABLE_SITE_ID?: string | Uint8Array | null, POINTS?: (SCNPointOfInterestT)[], VIEW_CONE?: SCNViewConeT | null, SUN_ADVANTAGE_TARGET?: SCNSunAdvantageTargetT | null, EXCLUSION_ZONE?: SCNExclusionZoneT | null, OBSERVATION_EO?: EOOT | null, OBSERVATION_RADAR?: RDOT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNReference.d.ts.map