import * as flatbuffers from 'flatbuffers';
import { Geometry, GeometryT } from './geometry.js';
import { IDM, IDMT } from './idm.js';
import { SiteType } from './site-type.js';
/**
 * Site Information Message
 */
export declare class SIT implements flatbuffers.IUnpackableObject<SITT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SIT;
    static getRootAsSIT(bb: flatbuffers.ByteBuffer, obj?: SIT): SIT;
    static getSizePrefixedRootAsSIT(bb: flatbuffers.ByteBuffer, obj?: SIT): SIT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier for the site, BE_NUMBER
     */
    id(): string | null;
    id(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the site
     */
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Abbreviation
     */
    abbreviation(): string | null;
    abbreviation(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Site type as defined in SiteType enum
     */
    siteType(): SiteType;
    /**
     * Site type CATCODE
     */
    catcode(): string | null;
    catcode(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Network identifier
     */
    network(): string | null;
    network(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Latitude of the site
     */
    latitude(): number;
    /**
     * Longitude of the site
     */
    longitude(): number;
    /**
     * Altitude of the site
     */
    altitude(): number;
    /**
     * Geometry of the site
     */
    geometry(obj?: Geometry): Geometry | null;
    /**
     * Center point geometry coordinates
     */
    centerPointGeometry(index: number): number | null;
    centerPointGeometryLength(): number;
    centerPointGeometryArray(): Float32Array | null;
    /**
     * Classification marking of the site
     */
    classification(): string | null;
    classification(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CTR ISO 3166 Numeric code as string
     */
    ctrId(): string | null;
    ctrId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the user who created the site data
     */
    createdBy(): string | null;
    createdBy(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description of the site
     */
    description(): string | null;
    description(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL for the 3D model of the site
     */
    modelUrl(): string | null;
    modelUrl(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source of the site data
     */
    source(): string | null;
    source(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Indicates if the site is taskable
     */
    taskable(): boolean;
    /**
     * Operational status of the site (e.g., active, inactive, under construction)
     */
    operationalStatus(): string | null;
    operationalStatus(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Date of establishment
     */
    establishmentDate(): string | null;
    establishmentDate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contact information for the site
     */
    contactInfo(): string | null;
    contactInfo(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Environmental impact or considerations
     */
    environmentalImpact(): string | null;
    environmentalImpact(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Accessibility and infrastructure details
     */
    accessibilityInfra(): string | null;
    accessibilityInfra(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vector of Integrated Devices (IDM)
     */
    integratedDevices(index: number, obj?: IDM): IDM | null;
    integratedDevicesLength(): number;
    static startSIT(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addAbbreviation(builder: flatbuffers.Builder, abbreviationOffset: flatbuffers.Offset): void;
    static addSiteType(builder: flatbuffers.Builder, siteType: SiteType): void;
    static addCatcode(builder: flatbuffers.Builder, catcodeOffset: flatbuffers.Offset): void;
    static addNetwork(builder: flatbuffers.Builder, networkOffset: flatbuffers.Offset): void;
    static addLatitude(builder: flatbuffers.Builder, latitude: number): void;
    static addLongitude(builder: flatbuffers.Builder, longitude: number): void;
    static addAltitude(builder: flatbuffers.Builder, altitude: number): void;
    static addGeometry(builder: flatbuffers.Builder, geometryOffset: flatbuffers.Offset): void;
    static addCenterPointGeometry(builder: flatbuffers.Builder, centerPointGeometryOffset: flatbuffers.Offset): void;
    static createCenterPointGeometryVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCenterPointGeometryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCenterPointGeometryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClassification(builder: flatbuffers.Builder, classificationOffset: flatbuffers.Offset): void;
    static addCtrId(builder: flatbuffers.Builder, ctrIdOffset: flatbuffers.Offset): void;
    static addCreatedBy(builder: flatbuffers.Builder, createdByOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, descriptionOffset: flatbuffers.Offset): void;
    static addModelUrl(builder: flatbuffers.Builder, modelUrlOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, sourceOffset: flatbuffers.Offset): void;
    static addTaskable(builder: flatbuffers.Builder, taskable: boolean): void;
    static addOperationalStatus(builder: flatbuffers.Builder, operationalStatusOffset: flatbuffers.Offset): void;
    static addEstablishmentDate(builder: flatbuffers.Builder, establishmentDateOffset: flatbuffers.Offset): void;
    static addContactInfo(builder: flatbuffers.Builder, contactInfoOffset: flatbuffers.Offset): void;
    static addEnvironmentalImpact(builder: flatbuffers.Builder, environmentalImpactOffset: flatbuffers.Offset): void;
    static addAccessibilityInfra(builder: flatbuffers.Builder, accessibilityInfraOffset: flatbuffers.Offset): void;
    static addIntegratedDevices(builder: flatbuffers.Builder, integratedDevicesOffset: flatbuffers.Offset): void;
    static createIntegratedDevicesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIntegratedDevicesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSIT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSITBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSITBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SITT;
    unpackTo(_o: SITT): void;
}
export declare class SITT implements flatbuffers.IGeneratedObject {
    id: string | Uint8Array | null;
    name: string | Uint8Array | null;
    abbreviation: string | Uint8Array | null;
    siteType: SiteType;
    catcode: string | Uint8Array | null;
    network: string | Uint8Array | null;
    latitude: number;
    longitude: number;
    altitude: number;
    geometry: GeometryT | null;
    centerPointGeometry: (number)[];
    classification: string | Uint8Array | null;
    ctrId: string | Uint8Array | null;
    createdBy: string | Uint8Array | null;
    description: string | Uint8Array | null;
    modelUrl: string | Uint8Array | null;
    source: string | Uint8Array | null;
    taskable: boolean;
    operationalStatus: string | Uint8Array | null;
    establishmentDate: string | Uint8Array | null;
    contactInfo: string | Uint8Array | null;
    environmentalImpact: string | Uint8Array | null;
    accessibilityInfra: string | Uint8Array | null;
    integratedDevices: (IDMT)[];
    constructor(id?: string | Uint8Array | null, name?: string | Uint8Array | null, abbreviation?: string | Uint8Array | null, siteType?: SiteType, catcode?: string | Uint8Array | null, network?: string | Uint8Array | null, latitude?: number, longitude?: number, altitude?: number, geometry?: GeometryT | null, centerPointGeometry?: (number)[], classification?: string | Uint8Array | null, ctrId?: string | Uint8Array | null, createdBy?: string | Uint8Array | null, description?: string | Uint8Array | null, modelUrl?: string | Uint8Array | null, source?: string | Uint8Array | null, taskable?: boolean, operationalStatus?: string | Uint8Array | null, establishmentDate?: string | Uint8Array | null, contactInfo?: string | Uint8Array | null, environmentalImpact?: string | Uint8Array | null, accessibilityInfra?: string | Uint8Array | null, integratedDevices?: (IDMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=sit.d.ts.map