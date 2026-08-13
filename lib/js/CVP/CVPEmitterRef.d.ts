import * as flatbuffers from 'flatbuffers';
import { cvpEmitterRole } from './cvpEmitterRole.js';
import { rfPolarization } from './rfPolarization.js';
/**
 * An emitter that contributed to this geometry. Identity and the few
 * parameters that determine the boundary; everything else is joined from
 * `$RFB` and `$RFE`.
 */
export declare class CVPEmitterRef implements flatbuffers.IUnpackableObject<CVPEmitterRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CVPEmitterRef;
    static getRootAsCVPEmitterRef(bb: flatbuffers.ByteBuffer, obj?: CVPEmitterRef): CVPEmitterRef;
    static getSizePrefixedRootAsCVPEmitterRef(bb: flatbuffers.ByteBuffer, obj?: CVPEmitterRef): CVPEmitterRef;
    /**
     * Producer-stable emitter identifier within this record.
     */
    EMITTER_ID(): string;
    EMITTER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    EMITTER_ROLE(): cvpEmitterRole;
    /**
     * `$RFE.ID` — the parametric emitter description.
     */
    RFE_ID(): string | null;
    RFE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFB.ID` — the band specification.
     */
    RFB_ID(): string | null;
    RFB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$CAT.NORAD_CAT_ID` when the emitter is on orbit. 0 when unbound.
     */
    NORAD_CAT_ID(): number;
    /**
     * `$CAT.OBJECT_ID` international designator.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$TBS.SITE_ID` when the emitter is a terrestrial site.
     */
    TBS_SITE_ID(): string | null;
    TBS_SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Beam and channel within the emitter.
     */
    ID_BEAM(): string | null;
    ID_BEAM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CHANNEL_ID(): string | null;
    CHANNEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Carrier centre frequency, megahertz — the `$RFB` convention.
     */
    CENTER_FREQUENCY_MHZ(): number;
    /**
     * EIRP toward boresight used in the evaluation, dBW.
     */
    EIRP_DBW(): number;
    /**
     * Polarization, defaulted to UNKNOWN explicitly because `rfPolarization`
     * ordinal 0 is LHCP.
     */
    POLARIZATION(): rfPolarization;
    /**
     * Emitter position at EPOCH, when the geometry is instantaneous. Geodetic
     * degrees and metres. Absent means "join it from the source record" — a
     * stale copied position is worse than none.
     */
    LATITUDE_DEG(): number;
    LONGITUDE_DEG(): number;
    ALTITUDE_M(): number;
    /**
     * Weight of this emitter's contribution to a union or aggregate [0-1].
     */
    CONTRIBUTION_WEIGHT(): number;
    static startCVPEmitterRef(builder: flatbuffers.Builder): void;
    static addEmitterId(builder: flatbuffers.Builder, EMITTER_IDOffset: flatbuffers.Offset): void;
    static addEmitterRole(builder: flatbuffers.Builder, EMITTER_ROLE: cvpEmitterRole): void;
    static addRfeId(builder: flatbuffers.Builder, RFE_IDOffset: flatbuffers.Offset): void;
    static addRfbId(builder: flatbuffers.Builder, RFB_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addTbsSiteId(builder: flatbuffers.Builder, TBS_SITE_IDOffset: flatbuffers.Offset): void;
    static addIdBeam(builder: flatbuffers.Builder, ID_BEAMOffset: flatbuffers.Offset): void;
    static addChannelId(builder: flatbuffers.Builder, CHANNEL_IDOffset: flatbuffers.Offset): void;
    static addCenterFrequencyMhz(builder: flatbuffers.Builder, CENTER_FREQUENCY_MHZ: number): void;
    static addEirpDbw(builder: flatbuffers.Builder, EIRP_DBW: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATION: rfPolarization): void;
    static addLatitudeDeg(builder: flatbuffers.Builder, LATITUDE_DEG: number): void;
    static addLongitudeDeg(builder: flatbuffers.Builder, LONGITUDE_DEG: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addContributionWeight(builder: flatbuffers.Builder, CONTRIBUTION_WEIGHT: number): void;
    static endCVPEmitterRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCVPEmitterRef(builder: flatbuffers.Builder, EMITTER_IDOffset: flatbuffers.Offset, EMITTER_ROLE: cvpEmitterRole, RFE_IDOffset: flatbuffers.Offset, RFB_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, OBJECT_IDOffset: flatbuffers.Offset, TBS_SITE_IDOffset: flatbuffers.Offset, ID_BEAMOffset: flatbuffers.Offset, CHANNEL_IDOffset: flatbuffers.Offset, CENTER_FREQUENCY_MHZ: number, EIRP_DBW: number, POLARIZATION: rfPolarization, LATITUDE_DEG: number, LONGITUDE_DEG: number, ALTITUDE_M: number, CONTRIBUTION_WEIGHT: number): flatbuffers.Offset;
    unpack(): CVPEmitterRefT;
    unpackTo(_o: CVPEmitterRefT): void;
}
export declare class CVPEmitterRefT implements flatbuffers.IGeneratedObject {
    EMITTER_ID: string | Uint8Array | null;
    EMITTER_ROLE: cvpEmitterRole;
    RFE_ID: string | Uint8Array | null;
    RFB_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    TBS_SITE_ID: string | Uint8Array | null;
    ID_BEAM: string | Uint8Array | null;
    CHANNEL_ID: string | Uint8Array | null;
    CENTER_FREQUENCY_MHZ: number;
    EIRP_DBW: number;
    POLARIZATION: rfPolarization;
    LATITUDE_DEG: number;
    LONGITUDE_DEG: number;
    ALTITUDE_M: number;
    CONTRIBUTION_WEIGHT: number;
    constructor(EMITTER_ID?: string | Uint8Array | null, EMITTER_ROLE?: cvpEmitterRole, RFE_ID?: string | Uint8Array | null, RFB_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, TBS_SITE_ID?: string | Uint8Array | null, ID_BEAM?: string | Uint8Array | null, CHANNEL_ID?: string | Uint8Array | null, CENTER_FREQUENCY_MHZ?: number, EIRP_DBW?: number, POLARIZATION?: rfPolarization, LATITUDE_DEG?: number, LONGITUDE_DEG?: number, ALTITUDE_M?: number, CONTRIBUTION_WEIGHT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CVPEmitterRef.d.ts.map