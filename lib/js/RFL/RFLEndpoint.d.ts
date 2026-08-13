import * as flatbuffers from 'flatbuffers';
import { rfPolarization } from './rfPolarization.js';
import { rflEndpointKind } from './rflEndpointKind.js';
/**
 * One endpoint of a link. Identity ONLY — position, antenna geometry and band
 * capability are NOT copied here; they are joined from the standard named by
 * ENDPOINT_KIND. A copied position silently goes stale against its source.
 */
export declare class RFLEndpoint implements flatbuffers.IUnpackableObject<RFLEndpointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFLEndpoint;
    static getRootAsRFLEndpoint(bb: flatbuffers.ByteBuffer, obj?: RFLEndpoint): RFLEndpoint;
    static getSizePrefixedRootAsRFLEndpoint(bb: flatbuffers.ByteBuffer, obj?: RFLEndpoint): RFLEndpoint;
    /**
     * Producer-stable identifier for this endpoint within the record.
     */
    ENDPOINT_ID(): string;
    ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ENDPOINT_KIND(): rflEndpointKind;
    /**
     * Human-readable name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$GST.STATION_ID` when ENDPOINT_KIND is GEODETIC_TRACKING_STATION.
     */
    GST_STATION_ID(): string | null;
    GST_STATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$SIT` identifier when ENDPOINT_KIND is SATELLITE_GROUND_STATION.
     */
    SIT_ID(): string | null;
    SIT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$TBS.SITE_ID` when ENDPOINT_KIND is TERRESTRIAL_SITE.
     */
    TBS_SITE_ID(): string | null;
    TBS_SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$CAT.NORAD_CAT_ID` when the endpoint is an on-orbit object. 0 when
     * unbound — never a placeholder catalogue number.
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator, `$CAT.OBJECT_ID`.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFB.ID` — the band specification (frequency, bandwidth, EIRP, gains,
     * polarization) this endpoint transmits or receives on.
     */
    RFB_ID(): string | null;
    RFB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFE.ID` — the parametric emitter description, when one exists.
     */
    RFE_ID(): string | null;
    RFE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$IQC` capture identifier, when the samples were derived from a recording.
     */
    IQC_ID(): string | null;
    IQC_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Beam identifier within the emitter.
     */
    ID_BEAM(): string | null;
    ID_BEAM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Channel or carrier identifier within the beam.
     */
    CHANNEL_ID(): string | null;
    CHANNEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Polarization actually used on this link. Defaults to UNKNOWN explicitly:
     * `rfPolarization` ordinal 0 is LHCP, so an unset field would otherwise
     * decode as a real polarization.
     */
    POLARIZATION(): rfPolarization;
    static startRFLEndpoint(builder: flatbuffers.Builder): void;
    static addEndpointId(builder: flatbuffers.Builder, ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addEndpointKind(builder: flatbuffers.Builder, ENDPOINT_KIND: rflEndpointKind): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addGstStationId(builder: flatbuffers.Builder, GST_STATION_IDOffset: flatbuffers.Offset): void;
    static addSitId(builder: flatbuffers.Builder, SIT_IDOffset: flatbuffers.Offset): void;
    static addTbsSiteId(builder: flatbuffers.Builder, TBS_SITE_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addRfbId(builder: flatbuffers.Builder, RFB_IDOffset: flatbuffers.Offset): void;
    static addRfeId(builder: flatbuffers.Builder, RFE_IDOffset: flatbuffers.Offset): void;
    static addIqcId(builder: flatbuffers.Builder, IQC_IDOffset: flatbuffers.Offset): void;
    static addIdBeam(builder: flatbuffers.Builder, ID_BEAMOffset: flatbuffers.Offset): void;
    static addChannelId(builder: flatbuffers.Builder, CHANNEL_IDOffset: flatbuffers.Offset): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATION: rfPolarization): void;
    static endRFLEndpoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFLEndpoint(builder: flatbuffers.Builder, ENDPOINT_IDOffset: flatbuffers.Offset, ENDPOINT_KIND: rflEndpointKind, NAMEOffset: flatbuffers.Offset, GST_STATION_IDOffset: flatbuffers.Offset, SIT_IDOffset: flatbuffers.Offset, TBS_SITE_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, OBJECT_IDOffset: flatbuffers.Offset, RFB_IDOffset: flatbuffers.Offset, RFE_IDOffset: flatbuffers.Offset, IQC_IDOffset: flatbuffers.Offset, ID_BEAMOffset: flatbuffers.Offset, CHANNEL_IDOffset: flatbuffers.Offset, POLARIZATION: rfPolarization): flatbuffers.Offset;
    unpack(): RFLEndpointT;
    unpackTo(_o: RFLEndpointT): void;
}
export declare class RFLEndpointT implements flatbuffers.IGeneratedObject {
    ENDPOINT_ID: string | Uint8Array | null;
    ENDPOINT_KIND: rflEndpointKind;
    NAME: string | Uint8Array | null;
    GST_STATION_ID: string | Uint8Array | null;
    SIT_ID: string | Uint8Array | null;
    TBS_SITE_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    RFB_ID: string | Uint8Array | null;
    RFE_ID: string | Uint8Array | null;
    IQC_ID: string | Uint8Array | null;
    ID_BEAM: string | Uint8Array | null;
    CHANNEL_ID: string | Uint8Array | null;
    POLARIZATION: rfPolarization;
    constructor(ENDPOINT_ID?: string | Uint8Array | null, ENDPOINT_KIND?: rflEndpointKind, NAME?: string | Uint8Array | null, GST_STATION_ID?: string | Uint8Array | null, SIT_ID?: string | Uint8Array | null, TBS_SITE_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, RFB_ID?: string | Uint8Array | null, RFE_ID?: string | Uint8Array | null, IQC_ID?: string | Uint8Array | null, ID_BEAM?: string | Uint8Array | null, CHANNEL_ID?: string | Uint8Array | null, POLARIZATION?: rfPolarization);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFLEndpoint.d.ts.map