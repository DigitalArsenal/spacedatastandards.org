import * as flatbuffers from 'flatbuffers';
/**
 * GEO Drift History Record
 */
export declare class driftRecord implements flatbuffers.IUnpackableObject<driftRecordT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): driftRecord;
    static getRootAsdriftRecord(bb: flatbuffers.ByteBuffer, obj?: driftRecord): driftRecord;
    static getSizePrefixedRootAsdriftRecord(bb: flatbuffers.ByteBuffer, obj?: driftRecord): driftRecord;
    /**
     * Epoch of drift measurement (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Longitude drift rate in degrees/day
     */
    DRIFT_RATE(): number;
    /**
     * Mean longitude in degrees East
     */
    MEAN_LONGITUDE(): number;
    /**
     * Longitude oscillation amplitude in degrees
     */
    LONGITUDE_AMPLITUDE(): number;
    /**
     * Eccentricity
     */
    ECCENTRICITY(): number;
    /**
     * Inclination in degrees
     */
    INCLINATION(): number;
    static startdriftRecord(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addDriftRate(builder: flatbuffers.Builder, DRIFT_RATE: number): void;
    static addMeanLongitude(builder: flatbuffers.Builder, MEAN_LONGITUDE: number): void;
    static addLongitudeAmplitude(builder: flatbuffers.Builder, LONGITUDE_AMPLITUDE: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static enddriftRecord(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createdriftRecord(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, DRIFT_RATE: number, MEAN_LONGITUDE: number, LONGITUDE_AMPLITUDE: number, ECCENTRICITY: number, INCLINATION: number): flatbuffers.Offset;
    unpack(): driftRecordT;
    unpackTo(_o: driftRecordT): void;
}
export declare class driftRecordT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    DRIFT_RATE: number;
    MEAN_LONGITUDE: number;
    LONGITUDE_AMPLITUDE: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    constructor(EPOCH?: string | Uint8Array | null, DRIFT_RATE?: number, MEAN_LONGITUDE?: number, LONGITUDE_AMPLITUDE?: number, ECCENTRICITY?: number, INCLINATION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=driftRecord.d.ts.map