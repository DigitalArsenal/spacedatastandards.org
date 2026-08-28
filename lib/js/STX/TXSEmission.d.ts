import * as flatbuffers from 'flatbuffers';
import { txsModulationClass } from './txsModulationClass.js';
import { txsOperationalStatus } from './txsOperationalStatus.js';
import { txsPolarization } from './txsPolarization.js';
import { txsServiceClass } from './txsServiceClass.js';
/**
 * One documented emission of one facility: a carrier or channel the facility
 * is stated to radiate, with the power and antenna terms published for it.
 *
 * A facility radiating many carriers carries many entries; a facility whose
 * frequency changes by season or hour carries the documented set here and the
 * time-bounded usage in `$STX`. Unknown terms are ABSENT.
 */
export declare class TXSEmission implements flatbuffers.IUnpackableObject<TXSEmissionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TXSEmission;
    static getRootAsTXSEmission(bb: flatbuffers.ByteBuffer, obj?: TXSEmission): TXSEmission;
    static getSizePrefixedRootAsTXSEmission(bb: flatbuffers.ByteBuffer, obj?: TXSEmission): TXSEmission;
    /**
     * Publisher-stable identifier for this emission within its facility record.
     */
    EMISSION_ID(): string | null;
    EMISSION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Assigned or nominal centre frequency in kilohertz. Kilohertz is the base
     * unit for this family because it spans the low-frequency broadcasting
     * allocations to the microwave allocations without unit switching; a
     * consumer joining to `$RFB` or `$TBS`, which carry megahertz, or to
     * `$IQC`, which carries hertz, converts at the join, explicitly. Zero means
     * unpublished.
     */
    FREQUENCY_KHZ(): number;
    /**
     * Necessary or occupied bandwidth in kilohertz as the source states it.
     * Zero means unpublished.
     */
    BANDWIDTH_KHZ(): number;
    /**
     * ITU emission designator verbatim, e.g. the necessary-bandwidth and
     * class-of-emission string a licence record carries. Authoritative over
     * MODULATION whenever both are present.
     */
    EMISSION_DESIGNATOR(): string | null;
    EMISSION_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULATION(): txsModulationClass;
    POLARIZATION(): txsPolarization;
    /**
     * Service class of THIS emission when it differs from the facility's.
     */
    SERVICE(): txsServiceClass;
    /**
     * Transmitter output power at the antenna feed, kilowatts. Zero means
     * unpublished. Never derived from radiated power.
     */
    TRANSMITTER_POWER_KW(): number;
    /**
     * Effective radiated power referenced to a half-wave dipole, kilowatts.
     * Zero means unpublished.
     */
    EFFECTIVE_RADIATED_POWER_KW(): number;
    /**
     * Equivalent isotropically radiated power, kilowatts. Zero means
     * unpublished. Published alongside, never instead of, the dipole-referenced
     * figure: the two differ by the dipole gain and this standard never
     * converts between them.
     */
    EIRP_KW(): number;
    /**
     * Antenna centre of radiation above ground level, metres. Zero means
     * unpublished.
     */
    ANTENNA_HEIGHT_AGL_M(): number;
    /**
     * Main-lobe bearing, degrees clockwise from true north. Absent for a
     * non-directional emission; a non-directional emission is stated by
     * OMNIDIRECTIONAL, never by a bearing of zero.
     */
    ANTENNA_AZIMUTH_DEG(): number;
    /**
     * The emission is radiated without a preferred bearing.
     */
    OMNIDIRECTIONAL(): boolean;
    /**
     * Half-power beamwidth in degrees. Zero means unpublished.
     */
    BEAMWIDTH_DEG(): number;
    /**
     * Antenna gain in decibels referenced to an isotropic radiator. Zero means
     * unpublished; a real 0 dBi figure is published as a source term in
     * provenance rather than being indistinguishable from absence.
     */
    ANTENNA_GAIN_DBI(): number;
    /**
     * Station identification radiated on this emission, verbatim: a callsign, a
     * spoken or keyed identifier, or the identity string the source publishes.
     * Never synthesized.
     */
    STATION_IDENTITY(): string | null;
    STATION_IDENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATUS(): txsOperationalStatus;
    /**
     * RFC 3339 UTC bounds of the authorization or documented use of this
     * emission. Either bound is absent when unpublished.
     */
    VALID_FROM(): string | null;
    VALID_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALID_UNTIL(): string | null;
    VALID_UNTIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTXSEmission(builder: flatbuffers.Builder): void;
    static addEmissionId(builder: flatbuffers.Builder, EMISSION_IDOffset: flatbuffers.Offset): void;
    static addFrequencyKhz(builder: flatbuffers.Builder, FREQUENCY_KHZ: number): void;
    static addBandwidthKhz(builder: flatbuffers.Builder, BANDWIDTH_KHZ: number): void;
    static addEmissionDesignator(builder: flatbuffers.Builder, EMISSION_DESIGNATOROffset: flatbuffers.Offset): void;
    static addModulation(builder: flatbuffers.Builder, MODULATION: txsModulationClass): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATION: txsPolarization): void;
    static addService(builder: flatbuffers.Builder, SERVICE: txsServiceClass): void;
    static addTransmitterPowerKw(builder: flatbuffers.Builder, TRANSMITTER_POWER_KW: number): void;
    static addEffectiveRadiatedPowerKw(builder: flatbuffers.Builder, EFFECTIVE_RADIATED_POWER_KW: number): void;
    static addEirpKw(builder: flatbuffers.Builder, EIRP_KW: number): void;
    static addAntennaHeightAglM(builder: flatbuffers.Builder, ANTENNA_HEIGHT_AGL_M: number): void;
    static addAntennaAzimuthDeg(builder: flatbuffers.Builder, ANTENNA_AZIMUTH_DEG: number): void;
    static addOmnidirectional(builder: flatbuffers.Builder, OMNIDIRECTIONAL: boolean): void;
    static addBeamwidthDeg(builder: flatbuffers.Builder, BEAMWIDTH_DEG: number): void;
    static addAntennaGainDbi(builder: flatbuffers.Builder, ANTENNA_GAIN_DBI: number): void;
    static addStationIdentity(builder: flatbuffers.Builder, STATION_IDENTITYOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: txsOperationalStatus): void;
    static addValidFrom(builder: flatbuffers.Builder, VALID_FROMOffset: flatbuffers.Offset): void;
    static addValidUntil(builder: flatbuffers.Builder, VALID_UNTILOffset: flatbuffers.Offset): void;
    static endTXSEmission(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTXSEmission(builder: flatbuffers.Builder, EMISSION_IDOffset: flatbuffers.Offset, FREQUENCY_KHZ: number, BANDWIDTH_KHZ: number, EMISSION_DESIGNATOROffset: flatbuffers.Offset, MODULATION: txsModulationClass, POLARIZATION: txsPolarization, SERVICE: txsServiceClass, TRANSMITTER_POWER_KW: number, EFFECTIVE_RADIATED_POWER_KW: number, EIRP_KW: number, ANTENNA_HEIGHT_AGL_M: number, ANTENNA_AZIMUTH_DEG: number, OMNIDIRECTIONAL: boolean, BEAMWIDTH_DEG: number, ANTENNA_GAIN_DBI: number, STATION_IDENTITYOffset: flatbuffers.Offset, STATUS: txsOperationalStatus, VALID_FROMOffset: flatbuffers.Offset, VALID_UNTILOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TXSEmissionT;
    unpackTo(_o: TXSEmissionT): void;
}
export declare class TXSEmissionT implements flatbuffers.IGeneratedObject {
    EMISSION_ID: string | Uint8Array | null;
    FREQUENCY_KHZ: number;
    BANDWIDTH_KHZ: number;
    EMISSION_DESIGNATOR: string | Uint8Array | null;
    MODULATION: txsModulationClass;
    POLARIZATION: txsPolarization;
    SERVICE: txsServiceClass;
    TRANSMITTER_POWER_KW: number;
    EFFECTIVE_RADIATED_POWER_KW: number;
    EIRP_KW: number;
    ANTENNA_HEIGHT_AGL_M: number;
    ANTENNA_AZIMUTH_DEG: number;
    OMNIDIRECTIONAL: boolean;
    BEAMWIDTH_DEG: number;
    ANTENNA_GAIN_DBI: number;
    STATION_IDENTITY: string | Uint8Array | null;
    STATUS: txsOperationalStatus;
    VALID_FROM: string | Uint8Array | null;
    VALID_UNTIL: string | Uint8Array | null;
    constructor(EMISSION_ID?: string | Uint8Array | null, FREQUENCY_KHZ?: number, BANDWIDTH_KHZ?: number, EMISSION_DESIGNATOR?: string | Uint8Array | null, MODULATION?: txsModulationClass, POLARIZATION?: txsPolarization, SERVICE?: txsServiceClass, TRANSMITTER_POWER_KW?: number, EFFECTIVE_RADIATED_POWER_KW?: number, EIRP_KW?: number, ANTENNA_HEIGHT_AGL_M?: number, ANTENNA_AZIMUTH_DEG?: number, OMNIDIRECTIONAL?: boolean, BEAMWIDTH_DEG?: number, ANTENNA_GAIN_DBI?: number, STATION_IDENTITY?: string | Uint8Array | null, STATUS?: txsOperationalStatus, VALID_FROM?: string | Uint8Array | null, VALID_UNTIL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TXSEmission.d.ts.map