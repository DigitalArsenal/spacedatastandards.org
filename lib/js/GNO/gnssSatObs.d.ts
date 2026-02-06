import * as flatbuffers from 'flatbuffers';
import { gnssConstellation } from './gnssConstellation.js';
import { gnssObsData, gnssObsDataT } from './gnssObsData.js';
/**
 * GNSS Satellite Observation
 */
export declare class gnssSatObs implements flatbuffers.IUnpackableObject<gnssSatObsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): gnssSatObs;
    static getRootAsgnssSatObs(bb: flatbuffers.ByteBuffer, obj?: gnssSatObs): gnssSatObs;
    static getSizePrefixedRootAsgnssSatObs(bb: flatbuffers.ByteBuffer, obj?: gnssSatObs): gnssSatObs;
    /**
     * GNSS satellite identifier (e.g., G01, R24, E05, C03)
     */
    GNSS_SAT_ID(): string | null;
    GNSS_SAT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Constellation
     */
    CONSTELLATION(): gnssConstellation;
    /**
     * Elevation angle in degrees
     */
    ELEVATION(): number;
    /**
     * Azimuth angle in degrees
     */
    AZIMUTH(): number;
    /**
     * Tracking status (0=not tracked, 1=tracking, 2=locked)
     */
    TRACKING_STATUS(): number;
    /**
     * AGC state
     */
    AGC_STATE(): number;
    /**
     * Observations for this satellite
     */
    OBSERVATIONS(index: number, obj?: gnssObsData): gnssObsData | null;
    observationsLength(): number;
    static startgnssSatObs(builder: flatbuffers.Builder): void;
    static addGnssSatId(builder: flatbuffers.Builder, GNSS_SAT_IDOffset: flatbuffers.Offset): void;
    static addConstellation(builder: flatbuffers.Builder, CONSTELLATION: gnssConstellation): void;
    static addElevation(builder: flatbuffers.Builder, ELEVATION: number): void;
    static addAzimuth(builder: flatbuffers.Builder, AZIMUTH: number): void;
    static addTrackingStatus(builder: flatbuffers.Builder, TRACKING_STATUS: number): void;
    static addAgcState(builder: flatbuffers.Builder, AGC_STATE: number): void;
    static addObservations(builder: flatbuffers.Builder, OBSERVATIONSOffset: flatbuffers.Offset): void;
    static createObservationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObservationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endgnssSatObs(builder: flatbuffers.Builder): flatbuffers.Offset;
    static creategnssSatObs(builder: flatbuffers.Builder, GNSS_SAT_IDOffset: flatbuffers.Offset, CONSTELLATION: gnssConstellation, ELEVATION: number, AZIMUTH: number, TRACKING_STATUS: number, AGC_STATE: number, OBSERVATIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): gnssSatObsT;
    unpackTo(_o: gnssSatObsT): void;
}
export declare class gnssSatObsT implements flatbuffers.IGeneratedObject {
    GNSS_SAT_ID: string | Uint8Array | null;
    CONSTELLATION: gnssConstellation;
    ELEVATION: number;
    AZIMUTH: number;
    TRACKING_STATUS: number;
    AGC_STATE: number;
    OBSERVATIONS: (gnssObsDataT)[];
    constructor(GNSS_SAT_ID?: string | Uint8Array | null, CONSTELLATION?: gnssConstellation, ELEVATION?: number, AZIMUTH?: number, TRACKING_STATUS?: number, AGC_STATE?: number, OBSERVATIONS?: (gnssObsDataT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=gnssSatObs.d.ts.map