import * as flatbuffers from 'flatbuffers';
import { Geometry, GeometryT } from './Geometry.js';
import { IDM, IDMT } from './IDM.js';
import { SiteType } from './SiteType.js';
/**
 * Site Information Message
 */
export declare class SIT implements flatbuffers.IUnpackableObject<SITT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SIT;
    static getRootAsSIT(bb: flatbuffers.ByteBuffer, obj?: SIT): SIT;
    static getSizePrefixedRootAsSIT(bb: flatbuffers.ByteBuffer, obj?: SIT): SIT;
    /**
     * Unique identifier for the site, BE_NUMBER
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the site
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Abbreviation
     */
    ABBREVIATION(): string | null;
    ABBREVIATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Site type as defined in SiteType enum
     */
    SITE_TYPE(): SiteType;
    /**
     * Site type CATCODE
     */
    CATCODE(): string | null;
    CATCODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Network identifier
     */
    NETWORK(): string | null;
    NETWORK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Latitude of the site
     */
    LATITUDE(): number;
    /**
     * Longitude of the site
     */
    LONGITUDE(): number;
    /**
     * Altitude of the site
     */
    ALTITUDE(): number;
    /**
     * Geometry of the site
     */
    GEOMETRY(obj?: Geometry): Geometry | null;
    /**
     * Center point geometry coordinates
     */
    CENTER_POINT_GEOMETRY(index: number): number | null;
    centerPointGeometryLength(): number;
    centerPointGeometryArray(): Float32Array | null;
    /**
     * Classification marking of the site
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CTR ISO 3166 Numeric code as string
     */
    CTR_ID(): string | null;
    CTR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the user who created the site data
     */
    CREATED_BY(): string | null;
    CREATED_BY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description of the site
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL for the 3D model of the site
     */
    MODEL_URL(): string | null;
    MODEL_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source of the site data
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Indicates if the site is taskable
     */
    TASKABLE(): boolean;
    /**
     * Operational status of the site (e.g., active, inactive, under construction)
     */
    OPERATIONAL_STATUS(): string | null;
    OPERATIONAL_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Date of establishment
     */
    ESTABLISHMENT_DATE(): string | null;
    ESTABLISHMENT_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contact information for the site
     */
    CONTACT_INFO(): string | null;
    CONTACT_INFO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Environmental impact or considerations
     */
    ENVIRONMENTAL_IMPACT(): string | null;
    ENVIRONMENTAL_IMPACT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Accessibility and infrastructure details
     */
    ACCESSIBILITY_INFRA(): string | null;
    ACCESSIBILITY_INFRA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vector of Integrated Devices (IDM)
     */
    INTEGRATED_DEVICES(index: number, obj?: IDM): IDM | null;
    integratedDevicesLength(): number;
    static startSIT(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addAbbreviation(builder: flatbuffers.Builder, ABBREVIATIONOffset: flatbuffers.Offset): void;
    static addSiteType(builder: flatbuffers.Builder, SITE_TYPE: SiteType): void;
    static addCatcode(builder: flatbuffers.Builder, CATCODEOffset: flatbuffers.Offset): void;
    static addNetwork(builder: flatbuffers.Builder, NETWORKOffset: flatbuffers.Offset): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static addCenterPointGeometry(builder: flatbuffers.Builder, CENTER_POINT_GEOMETRYOffset: flatbuffers.Offset): void;
    static createCenterPointGeometryVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCenterPointGeometryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCenterPointGeometryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addCtrId(builder: flatbuffers.Builder, CTR_IDOffset: flatbuffers.Offset): void;
    static addCreatedBy(builder: flatbuffers.Builder, CREATED_BYOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addModelUrl(builder: flatbuffers.Builder, MODEL_URLOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addTaskable(builder: flatbuffers.Builder, TASKABLE: boolean): void;
    static addOperationalStatus(builder: flatbuffers.Builder, OPERATIONAL_STATUSOffset: flatbuffers.Offset): void;
    static addEstablishmentDate(builder: flatbuffers.Builder, ESTABLISHMENT_DATEOffset: flatbuffers.Offset): void;
    static addContactInfo(builder: flatbuffers.Builder, CONTACT_INFOOffset: flatbuffers.Offset): void;
    static addEnvironmentalImpact(builder: flatbuffers.Builder, ENVIRONMENTAL_IMPACTOffset: flatbuffers.Offset): void;
    static addAccessibilityInfra(builder: flatbuffers.Builder, ACCESSIBILITY_INFRAOffset: flatbuffers.Offset): void;
    static addIntegratedDevices(builder: flatbuffers.Builder, INTEGRATED_DEVICESOffset: flatbuffers.Offset): void;
    static createIntegratedDevicesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIntegratedDevicesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSIT(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SITT;
    unpackTo(_o: SITT): void;
}
export declare class SITT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    ABBREVIATION: string | Uint8Array | null;
    SITE_TYPE: SiteType;
    CATCODE: string | Uint8Array | null;
    NETWORK: string | Uint8Array | null;
    LATITUDE: number;
    LONGITUDE: number;
    ALTITUDE: number;
    GEOMETRY: GeometryT | null;
    CENTER_POINT_GEOMETRY: (number)[];
    CLASSIFICATION: string | Uint8Array | null;
    CTR_ID: string | Uint8Array | null;
    CREATED_BY: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    MODEL_URL: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    TASKABLE: boolean;
    OPERATIONAL_STATUS: string | Uint8Array | null;
    ESTABLISHMENT_DATE: string | Uint8Array | null;
    CONTACT_INFO: string | Uint8Array | null;
    ENVIRONMENTAL_IMPACT: string | Uint8Array | null;
    ACCESSIBILITY_INFRA: string | Uint8Array | null;
    INTEGRATED_DEVICES: (IDMT)[];
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, ABBREVIATION?: string | Uint8Array | null, SITE_TYPE?: SiteType, CATCODE?: string | Uint8Array | null, NETWORK?: string | Uint8Array | null, LATITUDE?: number, LONGITUDE?: number, ALTITUDE?: number, GEOMETRY?: GeometryT | null, CENTER_POINT_GEOMETRY?: (number)[], CLASSIFICATION?: string | Uint8Array | null, CTR_ID?: string | Uint8Array | null, CREATED_BY?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, MODEL_URL?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, TASKABLE?: boolean, OPERATIONAL_STATUS?: string | Uint8Array | null, ESTABLISHMENT_DATE?: string | Uint8Array | null, CONTACT_INFO?: string | Uint8Array | null, ENVIRONMENTAL_IMPACT?: string | Uint8Array | null, ACCESSIBILITY_INFRA?: string | Uint8Array | null, INTEGRATED_DEVICES?: (IDMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SIT.d.ts.map