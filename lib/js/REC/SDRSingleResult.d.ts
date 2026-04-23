import * as flatbuffers from 'flatbuffers';
/**
 * Compact single-frame detection result.
 */
export declare class SDRSingleResult implements flatbuffers.IUnpackableObject<SDRSingleResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDRSingleResult;
    static getRootAsSDRSingleResult(bb: flatbuffers.ByteBuffer, obj?: SDRSingleResult): SDRSingleResult;
    static getSizePrefixedRootAsSDRSingleResult(bb: flatbuffers.ByteBuffer, obj?: SDRSingleResult): SDRSingleResult;
    DETECTED(): boolean;
    /**
     * Range to target (meters).
     */
    RANGE(): number;
    /**
     * Signal-to-noise ratio (dB).
     */
    SNR(): number;
    /**
     * Azimuth angle to target (radians).
     */
    AZIMUTH(): number;
    /**
     * Elevation angle to target (radians).
     */
    ELEVATION(): number;
    /**
     * Range rate / Doppler velocity (m/s).
     */
    RANGE_RATE(): number;
    /**
     * Detection timestamp (milliseconds since epoch).
     */
    TIMESTAMP_MS(): bigint;
    /**
     * Track identifier (0 if not tracking).
     */
    TRACK_ID(): number;
    static startSDRSingleResult(builder: flatbuffers.Builder): void;
    static addDetected(builder: flatbuffers.Builder, DETECTED: boolean): void;
    static addRange(builder: flatbuffers.Builder, RANGE: number): void;
    static addSnr(builder: flatbuffers.Builder, SNR: number): void;
    static addAzimuth(builder: flatbuffers.Builder, AZIMUTH: number): void;
    static addElevation(builder: flatbuffers.Builder, ELEVATION: number): void;
    static addRangeRate(builder: flatbuffers.Builder, RANGE_RATE: number): void;
    static addTimestampMs(builder: flatbuffers.Builder, TIMESTAMP_MS: bigint): void;
    static addTrackId(builder: flatbuffers.Builder, TRACK_ID: number): void;
    static endSDRSingleResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDRSingleResult(builder: flatbuffers.Builder, DETECTED: boolean, RANGE: number, SNR: number, AZIMUTH: number, ELEVATION: number, RANGE_RATE: number, TIMESTAMP_MS: bigint, TRACK_ID: number): flatbuffers.Offset;
    unpack(): SDRSingleResultT;
    unpackTo(_o: SDRSingleResultT): void;
}
export declare class SDRSingleResultT implements flatbuffers.IGeneratedObject {
    DETECTED: boolean;
    RANGE: number;
    SNR: number;
    AZIMUTH: number;
    ELEVATION: number;
    RANGE_RATE: number;
    TIMESTAMP_MS: bigint;
    TRACK_ID: number;
    constructor(DETECTED?: boolean, RANGE?: number, SNR?: number, AZIMUTH?: number, ELEVATION?: number, RANGE_RATE?: number, TIMESTAMP_MS?: bigint, TRACK_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDRSingleResult.d.ts.map