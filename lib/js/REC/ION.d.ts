import * as flatbuffers from 'flatbuffers';
import { ionoDataPoint, ionoDataPointT } from './ionoDataPoint.js';
import { ionoDensityProfile, ionoDensityProfileT } from './ionoDensityProfile.js';
import { ionoSource } from './ionoSource.js';
/**
 * Ionospheric Observation
 */
export declare class ION implements flatbuffers.IUnpackableObject<IONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ION;
    static getRootAsION(bb: flatbuffers.ByteBuffer, obj?: ION): ION;
    static getSizePrefixedRootAsION(bb: flatbuffers.ByteBuffer, obj?: ION): ION;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Data source type
     */
    SOURCE(): ionoSource;
    /**
     * Station or sensor identifier
     */
    STATION_ID(): string | null;
    STATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Station name
     */
    STATION_NAME(): string | null;
    STATION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Station geodetic latitude in degrees
     */
    LATITUDE(): number;
    /**
     * Station geodetic longitude in degrees
     */
    LONGITUDE(): number;
    /**
     * Station altitude in meters
     */
    ALTITUDE(): number;
    /**
     * Observation start time (ISO 8601)
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation stop time (ISO 8601)
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * foF2 critical frequency in MHz
     */
    FOF2(): number;
    /**
     * foF1 critical frequency in MHz
     */
    FOF1(): number;
    /**
     * foE critical frequency in MHz
     */
    FOE(): number;
    /**
     * foEs sporadic E critical frequency in MHz
     */
    FOES(): number;
    /**
     * hmF2 peak height of F2 layer in km
     */
    HMF2(): number;
    /**
     * hmF1 peak height of F1 layer in km
     */
    HMF1(): number;
    /**
     * hmE peak height of E layer in km
     */
    HME(): number;
    /**
     * NmF2 peak density of F2 layer in electrons/m^3
     */
    NMF2(): number;
    /**
     * Vertical TEC in TECU
     */
    VTEC(): number;
    /**
     * Slant TEC in TECU
     */
    STEC(): number;
    /**
     * Scintillation index S4
     */
    S4(): number;
    /**
     * Observation data points
     */
    DATA_POINTS(index: number, obj?: ionoDataPoint): ionoDataPoint | null;
    dataPointsLength(): number;
    /**
     * Electron density profiles
     */
    DENSITY_PROFILES(index: number, obj?: ionoDensityProfile): ionoDensityProfile | null;
    densityProfilesLength(): number;
    /**
     * Data quality indicator (0-9, 9=best)
     */
    QUALITY(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startION(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCE: ionoSource): void;
    static addStationId(builder: flatbuffers.Builder, STATION_IDOffset: flatbuffers.Offset): void;
    static addStationName(builder: flatbuffers.Builder, STATION_NAMEOffset: flatbuffers.Offset): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addFof2(builder: flatbuffers.Builder, FOF2: number): void;
    static addFof1(builder: flatbuffers.Builder, FOF1: number): void;
    static addFoe(builder: flatbuffers.Builder, FOE: number): void;
    static addFoes(builder: flatbuffers.Builder, FOES: number): void;
    static addHmf2(builder: flatbuffers.Builder, HMF2: number): void;
    static addHmf1(builder: flatbuffers.Builder, HMF1: number): void;
    static addHme(builder: flatbuffers.Builder, HME: number): void;
    static addNmf2(builder: flatbuffers.Builder, NMF2: number): void;
    static addVtec(builder: flatbuffers.Builder, VTEC: number): void;
    static addStec(builder: flatbuffers.Builder, STEC: number): void;
    static addS4(builder: flatbuffers.Builder, S4: number): void;
    static addDataPoints(builder: flatbuffers.Builder, DATA_POINTSOffset: flatbuffers.Offset): void;
    static createDataPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDataPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDensityProfiles(builder: flatbuffers.Builder, DENSITY_PROFILESOffset: flatbuffers.Offset): void;
    static createDensityProfilesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDensityProfilesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQuality(builder: flatbuffers.Builder, QUALITY: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createION(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SOURCE: ionoSource, STATION_IDOffset: flatbuffers.Offset, STATION_NAMEOffset: flatbuffers.Offset, LATITUDE: number, LONGITUDE: number, ALTITUDE: number, START_TIMEOffset: flatbuffers.Offset, STOP_TIMEOffset: flatbuffers.Offset, FOF2: number, FOF1: number, FOE: number, FOES: number, HMF2: number, HMF1: number, HME: number, NMF2: number, VTEC: number, STEC: number, S4: number, DATA_POINTSOffset: flatbuffers.Offset, DENSITY_PROFILESOffset: flatbuffers.Offset, QUALITY: number, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IONT;
    unpackTo(_o: IONT): void;
}
export declare class IONT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SOURCE: ionoSource;
    STATION_ID: string | Uint8Array | null;
    STATION_NAME: string | Uint8Array | null;
    LATITUDE: number;
    LONGITUDE: number;
    ALTITUDE: number;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    FOF2: number;
    FOF1: number;
    FOE: number;
    FOES: number;
    HMF2: number;
    HMF1: number;
    HME: number;
    NMF2: number;
    VTEC: number;
    STEC: number;
    S4: number;
    DATA_POINTS: (ionoDataPointT)[];
    DENSITY_PROFILES: (ionoDensityProfileT)[];
    QUALITY: number;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, SOURCE?: ionoSource, STATION_ID?: string | Uint8Array | null, STATION_NAME?: string | Uint8Array | null, LATITUDE?: number, LONGITUDE?: number, ALTITUDE?: number, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, FOF2?: number, FOF1?: number, FOE?: number, FOES?: number, HMF2?: number, HMF1?: number, HME?: number, NMF2?: number, VTEC?: number, STEC?: number, S4?: number, DATA_POINTS?: (ionoDataPointT)[], DENSITY_PROFILES?: (ionoDensityProfileT)[], QUALITY?: number, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ION.d.ts.map