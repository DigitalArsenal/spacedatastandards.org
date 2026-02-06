import * as flatbuffers from 'flatbuffers';
import { geoConfidence } from './geoConfidence.js';
import { geoStationKeeping } from './geoStationKeeping.js';
import { troughType } from './troughType.js';
/**
 * GEO Spacecraft Status
 */
export declare class GEO implements flatbuffers.IUnpackableObject<GEOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GEO;
    static getRootAsGEO(bb: flatbuffers.ByteBuffer, obj?: GEO): GEO;
    static getSizePrefixedRootAsGEO(bb: flatbuffers.ByteBuffer, obj?: GEO): GEO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designator
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number
     */
    SAT_NO(): number;
    /**
     * On-orbit reference identifier
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Station-keeping status
     */
    STATION_KEEPING(): geoStationKeeping;
    /**
     * Subsatellite point longitude (degrees east)
     */
    SS(): number;
    /**
     * Longitude of ascending node (degrees)
     */
    SC(): number;
    /**
     * Relative energy (km^2/s^2)
     */
    RELATIVE_ENERGY(): number;
    /**
     * Longitude drift rate (degrees/day)
     */
    LONGITUDE_RATE(): number;
    /**
     * Western longitude boundary of slot (degrees east)
     */
    LONGITUDE_MIN(): number;
    /**
     * Eastern longitude boundary of slot (degrees east)
     */
    LONGITUDE_MAX(): number;
    /**
     * Assessment confidence level
     */
    CONFIDENCE(): geoConfidence;
    /**
     * Trough type (east/west gravitational well)
     */
    TROUGH(): troughType;
    /**
     * Plane change status description
     */
    PLANE_CHANGE_STATUS(): string | null;
    PLANE_CHANGE_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if object is lost/not tracked
     */
    LOST_FLAG(): boolean;
    /**
     * True if semi-annual correction applied
     */
    SEMI_ANNUAL_CORR_FLAG(): boolean;
    /**
     * Current operational status
     */
    OBJECT_STATUS(): string | null;
    OBJECT_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inclination (degrees)
     */
    INCLINATION(): number;
    /**
     * Eccentricity
     */
    ECCENTRICITY(): number;
    /**
     * Epoch of status (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to raw data file
     */
    RAW_FILE_URI(): string | null;
    RAW_FILE_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGEO(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addStationKeeping(builder: flatbuffers.Builder, STATION_KEEPING: geoStationKeeping): void;
    static addSs(builder: flatbuffers.Builder, SS: number): void;
    static addSc(builder: flatbuffers.Builder, SC: number): void;
    static addRelativeEnergy(builder: flatbuffers.Builder, RELATIVE_ENERGY: number): void;
    static addLongitudeRate(builder: flatbuffers.Builder, LONGITUDE_RATE: number): void;
    static addLongitudeMin(builder: flatbuffers.Builder, LONGITUDE_MIN: number): void;
    static addLongitudeMax(builder: flatbuffers.Builder, LONGITUDE_MAX: number): void;
    static addConfidence(builder: flatbuffers.Builder, CONFIDENCE: geoConfidence): void;
    static addTrough(builder: flatbuffers.Builder, TROUGH: troughType): void;
    static addPlaneChangeStatus(builder: flatbuffers.Builder, PLANE_CHANGE_STATUSOffset: flatbuffers.Offset): void;
    static addLostFlag(builder: flatbuffers.Builder, LOST_FLAG: boolean): void;
    static addSemiAnnualCorrFlag(builder: flatbuffers.Builder, SEMI_ANNUAL_CORR_FLAG: boolean): void;
    static addObjectStatus(builder: flatbuffers.Builder, OBJECT_STATUSOffset: flatbuffers.Offset): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addRawFileUri(builder: flatbuffers.Builder, RAW_FILE_URIOffset: flatbuffers.Offset): void;
    static endGEO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGEOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGEOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createGEO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ORIG_OBJECT_IDOffset: flatbuffers.Offset, SAT_NO: number, ON_ORBITOffset: flatbuffers.Offset, STATION_KEEPING: geoStationKeeping, SS: number, SC: number, RELATIVE_ENERGY: number, LONGITUDE_RATE: number, LONGITUDE_MIN: number, LONGITUDE_MAX: number, CONFIDENCE: geoConfidence, TROUGH: troughType, PLANE_CHANGE_STATUSOffset: flatbuffers.Offset, LOST_FLAG: boolean, SEMI_ANNUAL_CORR_FLAG: boolean, OBJECT_STATUSOffset: flatbuffers.Offset, INCLINATION: number, ECCENTRICITY: number, EPOCHOffset: flatbuffers.Offset, RAW_FILE_URIOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GEOT;
    unpackTo(_o: GEOT): void;
}
export declare class GEOT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    SAT_NO: number;
    ON_ORBIT: string | Uint8Array | null;
    STATION_KEEPING: geoStationKeeping;
    SS: number;
    SC: number;
    RELATIVE_ENERGY: number;
    LONGITUDE_RATE: number;
    LONGITUDE_MIN: number;
    LONGITUDE_MAX: number;
    CONFIDENCE: geoConfidence;
    TROUGH: troughType;
    PLANE_CHANGE_STATUS: string | Uint8Array | null;
    LOST_FLAG: boolean;
    SEMI_ANNUAL_CORR_FLAG: boolean;
    OBJECT_STATUS: string | Uint8Array | null;
    INCLINATION: number;
    ECCENTRICITY: number;
    EPOCH: string | Uint8Array | null;
    RAW_FILE_URI: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ORIG_OBJECT_ID?: string | Uint8Array | null, SAT_NO?: number, ON_ORBIT?: string | Uint8Array | null, STATION_KEEPING?: geoStationKeeping, SS?: number, SC?: number, RELATIVE_ENERGY?: number, LONGITUDE_RATE?: number, LONGITUDE_MIN?: number, LONGITUDE_MAX?: number, CONFIDENCE?: geoConfidence, TROUGH?: troughType, PLANE_CHANGE_STATUS?: string | Uint8Array | null, LOST_FLAG?: boolean, SEMI_ANNUAL_CORR_FLAG?: boolean, OBJECT_STATUS?: string | Uint8Array | null, INCLINATION?: number, ECCENTRICITY?: number, EPOCH?: string | Uint8Array | null, RAW_FILE_URI?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GEO.d.ts.map