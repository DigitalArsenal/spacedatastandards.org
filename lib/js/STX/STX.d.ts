import * as flatbuffers from 'flatbuffers';
import { TXSProvenance, TXSProvenanceT } from './TXSProvenance.js';
import { stxContentClass } from './stxContentClass.js';
import { stxDayMask } from './stxDayMask.js';
import { stxScheduleAuthorityClass } from './stxScheduleAuthorityClass.js';
import { stxScheduleStatus } from './stxScheduleStatus.js';
import { txsModulationClass } from './txsModulationClass.js';
import { txsPolarization } from './txsPolarization.js';
import { txsServiceClass } from './txsServiceClass.js';
/**
 * Scheduled Transmission.
 */
export declare class STX implements flatbuffers.IUnpackableObject<STXT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): STX;
    static getRootAsSTX(bb: flatbuffers.ByteBuffer, obj?: STX): STX;
    static getSizePrefixedRootAsSTX(bb: flatbuffers.ByteBuffer, obj?: STX): STX;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for this schedule row, unique within its
     * record set.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * `$TXS`.ID of the facility radiating this transmission. ABSENT when the
     * originating facility is unidentified or disputed; a row is publishable
     * without one and a consumer must not fabricate a join.
     */
    SITE_ID(): string | null;
    SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The source's own identifier for the transmitting facility, verbatim —
     * a register site code or a compilation's site abbreviation. Retained so a
     * row whose SITE_ID could not be resolved is still traceable.
     */
    SITE_NATIVE_ID(): string | null;
    SITE_NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Station or service name verbatim as the source states it. A display name,
     * never an identifier.
     */
    STATION_NAME(): string | null;
    STATION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Station identification radiated on this transmission, verbatim: a
     * callsign, a keyed or spoken identifier, or the identity string the source
     * publishes. Never synthesized and never inferred from frequency.
     */
    STATION_IDENTITY(): string | null;
    STATION_IDENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Assigned frequency in kilohertz, following the `$TXS` convention. Zero
     * means unpublished; a row whose frequency is unpublished is a facility
     * record, not a schedule row.
     */
    FREQUENCY_KHZ(): number;
    /**
     * Necessary or occupied bandwidth in kilohertz when the source states one
     * for this transmission. Zero means unpublished.
     */
    BANDWIDTH_KHZ(): number;
    /**
     * ITU emission designator verbatim. Authoritative over MODULATION whenever
     * both are present.
     */
    EMISSION_DESIGNATOR(): string | null;
    EMISSION_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULATION(): txsModulationClass;
    POLARIZATION(): txsPolarization;
    SERVICE(): txsServiceClass;
    CONTENT(): stxContentClass;
    /**
     * Daily on-air window in Coordinated Universal Time, as four decimal digits
     * "HHMM". A window whose stop is not later than its start crosses midnight
     * and is read as continuing into the following day. Strings because the
     * register form is four digits with significant leading zeros and no date;
     * an integer would invite a consumer to treat 0000 as absence.
     */
    TIME_START_UTC(): string | null;
    TIME_START_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIME_STOP_UTC(): string | null;
    TIME_STOP_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Days on which the window runs. An unset field means the source publishes
     * no day pattern.
     */
    DAYS(): stxDayMask;
    /**
     * The transmission runs without a fixed daily window — as required, on
     * occurrence, or continuously. TIME_START_UTC and TIME_STOP_UTC are absent
     * in that case and are never filled with 0000/2400 to stand in for it.
     */
    IRREGULAR(): boolean;
    /**
     * RFC 3339 UTC bounds over which this row is valid — the seasonal or
     * licence period. Either bound is absent when unpublished.
     */
    VALID_FROM(): string | null;
    VALID_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALID_UNTIL(): string | null;
    VALID_UNTIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The source's own name for the validity period, verbatim: a season code, a
     * schedule edition, or a period label. Never parsed into VALID_FROM by this
     * standard.
     */
    SEASON(): string | null;
    SEASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target area verbatim as the source states it, including its own zone or
     * region notation.
     */
    TARGET_AREA(): string | null;
    TARGET_AREA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Individual target zone identifiers verbatim when the source publishes a
     * list, one entry per zone, in source order.
     */
    TARGET_ZONES(index: number): string;
    TARGET_ZONES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    targetZonesLength(): number;
    /**
     * Language of the transmission. A BCP 47 tag when the source publishes one;
     * otherwise the source's own language term verbatim, never translated and
     * never guessed from the target area.
     */
    LANGUAGE(): string | null;
    LANGUAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transmitter output power for this transmission, kilowatts. Zero means
     * unpublished.
     */
    TRANSMITTER_POWER_KW(): number;
    /**
     * Main-lobe bearing for this transmission, degrees clockwise from true
     * north. Absent for a non-directional transmission, which is stated by
     * OMNIDIRECTIONAL and never by a bearing of zero.
     */
    ANTENNA_AZIMUTH_DEG(): number;
    /**
     * Secondary lobe bearing when the source publishes a slewed or dual-beam
     * antenna, degrees clockwise from true north.
     */
    ANTENNA_AZIMUTH_SECONDARY_DEG(): number;
    /**
     * The transmission is radiated without a preferred bearing.
     */
    OMNIDIRECTIONAL(): boolean;
    /**
     * Antenna designation verbatim as the source states it — a curtain-array
     * code, an antenna number, or a pattern identifier.
     */
    ANTENNA_DESIGNATION(): string | null;
    ANTENNA_DESIGNATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$TXS`.EMISSIONS[].EMISSION_ID this row exercises, when the facility
     * record enumerates it.
     */
    EMISSION_ID(): string | null;
    EMISSION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    AUTHORITY(): stxScheduleAuthorityClass;
    STATUS(): stxScheduleStatus;
    /**
     * RFC 3339 UTC fixed-millisecond bounds of the observation window backing
     * the row, when observers rather than a register established it.
     */
    FIRST_OBSERVED(): string | null;
    FIRST_OBSERVED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LAST_OBSERVED(): string | null;
    LAST_OBSERVED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Independent observation reports behind the row. Zero means the source
     * publishes no count, never that the transmission was never heard.
     */
    OBSERVATION_COUNT(): number;
    /**
     * Every source consulted for this row, including sources that returned
     * nothing. Required: a schedule row with no named sources is not
     * publishable. The provenance table is the one this family already
     * publishes in `$TXS`; a schedule row and a facility carry provenance of
     * the same shape and are frequently reconciled from the same fetch.
     */
    SOURCES(index: number, obj?: TXSProvenance): TXSProvenance | null;
    sourcesLength(): number;
    static startSTX(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSiteId(builder: flatbuffers.Builder, SITE_IDOffset: flatbuffers.Offset): void;
    static addSiteNativeId(builder: flatbuffers.Builder, SITE_NATIVE_IDOffset: flatbuffers.Offset): void;
    static addStationName(builder: flatbuffers.Builder, STATION_NAMEOffset: flatbuffers.Offset): void;
    static addStationIdentity(builder: flatbuffers.Builder, STATION_IDENTITYOffset: flatbuffers.Offset): void;
    static addFrequencyKhz(builder: flatbuffers.Builder, FREQUENCY_KHZ: number): void;
    static addBandwidthKhz(builder: flatbuffers.Builder, BANDWIDTH_KHZ: number): void;
    static addEmissionDesignator(builder: flatbuffers.Builder, EMISSION_DESIGNATOROffset: flatbuffers.Offset): void;
    static addModulation(builder: flatbuffers.Builder, MODULATION: txsModulationClass): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATION: txsPolarization): void;
    static addService(builder: flatbuffers.Builder, SERVICE: txsServiceClass): void;
    static addContent(builder: flatbuffers.Builder, CONTENT: stxContentClass): void;
    static addTimeStartUtc(builder: flatbuffers.Builder, TIME_START_UTCOffset: flatbuffers.Offset): void;
    static addTimeStopUtc(builder: flatbuffers.Builder, TIME_STOP_UTCOffset: flatbuffers.Offset): void;
    static addDays(builder: flatbuffers.Builder, DAYS: stxDayMask): void;
    static addIrregular(builder: flatbuffers.Builder, IRREGULAR: boolean): void;
    static addValidFrom(builder: flatbuffers.Builder, VALID_FROMOffset: flatbuffers.Offset): void;
    static addValidUntil(builder: flatbuffers.Builder, VALID_UNTILOffset: flatbuffers.Offset): void;
    static addSeason(builder: flatbuffers.Builder, SEASONOffset: flatbuffers.Offset): void;
    static addTargetArea(builder: flatbuffers.Builder, TARGET_AREAOffset: flatbuffers.Offset): void;
    static addTargetZones(builder: flatbuffers.Builder, TARGET_ZONESOffset: flatbuffers.Offset): void;
    static createTargetZonesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTargetZonesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLanguage(builder: flatbuffers.Builder, LANGUAGEOffset: flatbuffers.Offset): void;
    static addTransmitterPowerKw(builder: flatbuffers.Builder, TRANSMITTER_POWER_KW: number): void;
    static addAntennaAzimuthDeg(builder: flatbuffers.Builder, ANTENNA_AZIMUTH_DEG: number): void;
    static addAntennaAzimuthSecondaryDeg(builder: flatbuffers.Builder, ANTENNA_AZIMUTH_SECONDARY_DEG: number): void;
    static addOmnidirectional(builder: flatbuffers.Builder, OMNIDIRECTIONAL: boolean): void;
    static addAntennaDesignation(builder: flatbuffers.Builder, ANTENNA_DESIGNATIONOffset: flatbuffers.Offset): void;
    static addEmissionId(builder: flatbuffers.Builder, EMISSION_IDOffset: flatbuffers.Offset): void;
    static addAuthority(builder: flatbuffers.Builder, AUTHORITY: stxScheduleAuthorityClass): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: stxScheduleStatus): void;
    static addFirstObserved(builder: flatbuffers.Builder, FIRST_OBSERVEDOffset: flatbuffers.Offset): void;
    static addLastObserved(builder: flatbuffers.Builder, LAST_OBSERVEDOffset: flatbuffers.Offset): void;
    static addObservationCount(builder: flatbuffers.Builder, OBSERVATION_COUNT: number): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSTX(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSTXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSTXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSTX(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SITE_IDOffset: flatbuffers.Offset, SITE_NATIVE_IDOffset: flatbuffers.Offset, STATION_NAMEOffset: flatbuffers.Offset, STATION_IDENTITYOffset: flatbuffers.Offset, FREQUENCY_KHZ: number, BANDWIDTH_KHZ: number, EMISSION_DESIGNATOROffset: flatbuffers.Offset, MODULATION: txsModulationClass, POLARIZATION: txsPolarization, SERVICE: txsServiceClass, CONTENT: stxContentClass, TIME_START_UTCOffset: flatbuffers.Offset, TIME_STOP_UTCOffset: flatbuffers.Offset, DAYS: stxDayMask, IRREGULAR: boolean, VALID_FROMOffset: flatbuffers.Offset, VALID_UNTILOffset: flatbuffers.Offset, SEASONOffset: flatbuffers.Offset, TARGET_AREAOffset: flatbuffers.Offset, TARGET_ZONESOffset: flatbuffers.Offset, LANGUAGEOffset: flatbuffers.Offset, TRANSMITTER_POWER_KW: number, ANTENNA_AZIMUTH_DEG: number, ANTENNA_AZIMUTH_SECONDARY_DEG: number, OMNIDIRECTIONAL: boolean, ANTENNA_DESIGNATIONOffset: flatbuffers.Offset, EMISSION_IDOffset: flatbuffers.Offset, AUTHORITY: stxScheduleAuthorityClass, STATUS: stxScheduleStatus, FIRST_OBSERVEDOffset: flatbuffers.Offset, LAST_OBSERVEDOffset: flatbuffers.Offset, OBSERVATION_COUNT: number, SOURCESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): STXT;
    unpackTo(_o: STXT): void;
}
export declare class STXT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SITE_ID: string | Uint8Array | null;
    SITE_NATIVE_ID: string | Uint8Array | null;
    STATION_NAME: string | Uint8Array | null;
    STATION_IDENTITY: string | Uint8Array | null;
    FREQUENCY_KHZ: number;
    BANDWIDTH_KHZ: number;
    EMISSION_DESIGNATOR: string | Uint8Array | null;
    MODULATION: txsModulationClass;
    POLARIZATION: txsPolarization;
    SERVICE: txsServiceClass;
    CONTENT: stxContentClass;
    TIME_START_UTC: string | Uint8Array | null;
    TIME_STOP_UTC: string | Uint8Array | null;
    DAYS: stxDayMask;
    IRREGULAR: boolean;
    VALID_FROM: string | Uint8Array | null;
    VALID_UNTIL: string | Uint8Array | null;
    SEASON: string | Uint8Array | null;
    TARGET_AREA: string | Uint8Array | null;
    TARGET_ZONES: (string)[];
    LANGUAGE: string | Uint8Array | null;
    TRANSMITTER_POWER_KW: number;
    ANTENNA_AZIMUTH_DEG: number;
    ANTENNA_AZIMUTH_SECONDARY_DEG: number;
    OMNIDIRECTIONAL: boolean;
    ANTENNA_DESIGNATION: string | Uint8Array | null;
    EMISSION_ID: string | Uint8Array | null;
    AUTHORITY: stxScheduleAuthorityClass;
    STATUS: stxScheduleStatus;
    FIRST_OBSERVED: string | Uint8Array | null;
    LAST_OBSERVED: string | Uint8Array | null;
    OBSERVATION_COUNT: number;
    SOURCES: (TXSProvenanceT)[];
    constructor(ID?: string | Uint8Array | null, SITE_ID?: string | Uint8Array | null, SITE_NATIVE_ID?: string | Uint8Array | null, STATION_NAME?: string | Uint8Array | null, STATION_IDENTITY?: string | Uint8Array | null, FREQUENCY_KHZ?: number, BANDWIDTH_KHZ?: number, EMISSION_DESIGNATOR?: string | Uint8Array | null, MODULATION?: txsModulationClass, POLARIZATION?: txsPolarization, SERVICE?: txsServiceClass, CONTENT?: stxContentClass, TIME_START_UTC?: string | Uint8Array | null, TIME_STOP_UTC?: string | Uint8Array | null, DAYS?: stxDayMask, IRREGULAR?: boolean, VALID_FROM?: string | Uint8Array | null, VALID_UNTIL?: string | Uint8Array | null, SEASON?: string | Uint8Array | null, TARGET_AREA?: string | Uint8Array | null, TARGET_ZONES?: (string)[], LANGUAGE?: string | Uint8Array | null, TRANSMITTER_POWER_KW?: number, ANTENNA_AZIMUTH_DEG?: number, ANTENNA_AZIMUTH_SECONDARY_DEG?: number, OMNIDIRECTIONAL?: boolean, ANTENNA_DESIGNATION?: string | Uint8Array | null, EMISSION_ID?: string | Uint8Array | null, AUTHORITY?: stxScheduleAuthorityClass, STATUS?: stxScheduleStatus, FIRST_OBSERVED?: string | Uint8Array | null, LAST_OBSERVED?: string | Uint8Array | null, OBSERVATION_COUNT?: number, SOURCES?: (TXSProvenanceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=STX.d.ts.map