import * as flatbuffers from 'flatbuffers';
import { rfPolarization } from './rfPolarization.js';
import { rflEndpointKind } from './rflEndpointKind.js';
/**
 * A receiver the coverage was evaluated FOR. Coverage is never absolute: a
 * -110 dBW contour means one thing for a 60 cm terminal and another for a
 * 12 m dish, so the assumed receiver is part of the record.
 */
export declare class CVPReceiverRef implements flatbuffers.IUnpackableObject<CVPReceiverRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CVPReceiverRef;
    static getRootAsCVPReceiverRef(bb: flatbuffers.ByteBuffer, obj?: CVPReceiverRef): CVPReceiverRef;
    static getSizePrefixedRootAsCVPReceiverRef(bb: flatbuffers.ByteBuffer, obj?: CVPReceiverRef): CVPReceiverRef;
    RECEIVER_ID(): string;
    RECEIVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ENDPOINT_KIND(): rflEndpointKind;
    /**
     * `$GST.STATION_ID`, `$SIT` or `$TBS.SITE_ID`, per ENDPOINT_KIND.
     */
    GST_STATION_ID(): string | null;
    GST_STATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SIT_ID(): string | null;
    SIT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TBS_SITE_ID(): string | null;
    TBS_SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receive antenna gain assumed, dBi.
     */
    ANTENNA_GAIN_DBI(): number;
    /**
     * System noise temperature assumed, kelvin.
     */
    SYSTEM_NOISE_TEMPERATURE_K(): number;
    /**
     * Figure of merit assumed, dB/K.
     */
    GAIN_TO_NOISE_TEMPERATURE_DB_PER_K(): number;
    /**
     * Minimum elevation the receiver can work at, degrees.
     */
    MIN_ELEVATION_DEG(): number;
    /**
     * Polarization, defaulted to UNKNOWN explicitly.
     */
    POLARIZATION(): rfPolarization;
    /**
     * Receiver group this receiver belongs to, matching
     * `$RFL.RFLLink.RECEIVER_GROUP_ID`.
     */
    RECEIVER_GROUP_ID(): string | null;
    RECEIVER_GROUP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCVPReceiverRef(builder: flatbuffers.Builder): void;
    static addReceiverId(builder: flatbuffers.Builder, RECEIVER_IDOffset: flatbuffers.Offset): void;
    static addEndpointKind(builder: flatbuffers.Builder, ENDPOINT_KIND: rflEndpointKind): void;
    static addGstStationId(builder: flatbuffers.Builder, GST_STATION_IDOffset: flatbuffers.Offset): void;
    static addSitId(builder: flatbuffers.Builder, SIT_IDOffset: flatbuffers.Offset): void;
    static addTbsSiteId(builder: flatbuffers.Builder, TBS_SITE_IDOffset: flatbuffers.Offset): void;
    static addAntennaGainDbi(builder: flatbuffers.Builder, ANTENNA_GAIN_DBI: number): void;
    static addSystemNoiseTemperatureK(builder: flatbuffers.Builder, SYSTEM_NOISE_TEMPERATURE_K: number): void;
    static addGainToNoiseTemperatureDbPerK(builder: flatbuffers.Builder, GAIN_TO_NOISE_TEMPERATURE_DB_PER_K: number): void;
    static addMinElevationDeg(builder: flatbuffers.Builder, MIN_ELEVATION_DEG: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATION: rfPolarization): void;
    static addReceiverGroupId(builder: flatbuffers.Builder, RECEIVER_GROUP_IDOffset: flatbuffers.Offset): void;
    static endCVPReceiverRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCVPReceiverRef(builder: flatbuffers.Builder, RECEIVER_IDOffset: flatbuffers.Offset, ENDPOINT_KIND: rflEndpointKind, GST_STATION_IDOffset: flatbuffers.Offset, SIT_IDOffset: flatbuffers.Offset, TBS_SITE_IDOffset: flatbuffers.Offset, ANTENNA_GAIN_DBI: number, SYSTEM_NOISE_TEMPERATURE_K: number, GAIN_TO_NOISE_TEMPERATURE_DB_PER_K: number, MIN_ELEVATION_DEG: number, POLARIZATION: rfPolarization, RECEIVER_GROUP_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CVPReceiverRefT;
    unpackTo(_o: CVPReceiverRefT): void;
}
export declare class CVPReceiverRefT implements flatbuffers.IGeneratedObject {
    RECEIVER_ID: string | Uint8Array | null;
    ENDPOINT_KIND: rflEndpointKind;
    GST_STATION_ID: string | Uint8Array | null;
    SIT_ID: string | Uint8Array | null;
    TBS_SITE_ID: string | Uint8Array | null;
    ANTENNA_GAIN_DBI: number;
    SYSTEM_NOISE_TEMPERATURE_K: number;
    GAIN_TO_NOISE_TEMPERATURE_DB_PER_K: number;
    MIN_ELEVATION_DEG: number;
    POLARIZATION: rfPolarization;
    RECEIVER_GROUP_ID: string | Uint8Array | null;
    constructor(RECEIVER_ID?: string | Uint8Array | null, ENDPOINT_KIND?: rflEndpointKind, GST_STATION_ID?: string | Uint8Array | null, SIT_ID?: string | Uint8Array | null, TBS_SITE_ID?: string | Uint8Array | null, ANTENNA_GAIN_DBI?: number, SYSTEM_NOISE_TEMPERATURE_K?: number, GAIN_TO_NOISE_TEMPERATURE_DB_PER_K?: number, MIN_ELEVATION_DEG?: number, POLARIZATION?: rfPolarization, RECEIVER_GROUP_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CVPReceiverRef.d.ts.map