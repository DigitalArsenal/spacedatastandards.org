import * as flatbuffers from 'flatbuffers';
import { TIMCcsdsTimeCode, TIMCcsdsTimeCodeT } from './TIMCcsdsTimeCode.js';
import { timEpochRepresentation } from './timEpochRepresentation.js';
import { timingStandard } from './timingStandard.js';
/**
 * Numeric or textual instant tagged with its time system and representation.
 */
export declare class TIMInstant implements flatbuffers.IUnpackableObject<TIMInstantT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TIMInstant;
    static getRootAsTIMInstant(bb: flatbuffers.ByteBuffer, obj?: TIMInstant): TIMInstant;
    static getSizePrefixedRootAsTIMInstant(bb: flatbuffers.ByteBuffer, obj?: TIMInstant): TIMInstant;
    /**
     * Time system for this instant.
     */
    TIME_SYSTEM(): timingStandard;
    /**
     * Interpretation of JULIAN_DATE, SECONDS, and ISO8601.
     */
    EPOCH_FORMAT(): timEpochRepresentation;
    /**
     * Julian Date or Modified Julian Date day value, selected by EPOCH_FORMAT.
     */
    JULIAN_DATE(): number;
    /**
     * Seconds for UNIX_SECONDS, GPS_SECONDS, GNSS_WEEK_SECONDS, or MISSION_ELAPSED_SECONDS.
     */
    SECONDS(): number;
    /**
     * ISO 8601 timestamp text for ISO8601 inputs or display outputs.
     */
    ISO8601(): string | null;
    ISO8601(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional nanoseconds beyond the fractional scalar/text value.
     */
    SUBSECOND_NANOS(): number;
    /**
     * Optional application-defined epoch label for MET, MRT, or SCLK values.
     */
    EPOCH_LABEL(): string | null;
    EPOCH_LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * GNSS week number when EPOCH_FORMAT is GNSS_WEEK_SECONDS.
     */
    GNSS_WEEK(): number;
    /**
     * Whether GNSS_ROLLOVER_REFERENCE_ISO8601 should be applied.
     */
    HAS_GNSS_ROLLOVER_REFERENCE(): boolean;
    /**
     * Optional Orekit-style GNSS week rollover reference timestamp.
     */
    GNSS_ROLLOVER_REFERENCE_ISO8601(): string | null;
    GNSS_ROLLOVER_REFERENCE_ISO8601(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CCSDS time-code payload when EPOCH_FORMAT is CCSDS_TIME_CODE.
     */
    CCSDS_TIME_CODE(obj?: TIMCcsdsTimeCode): TIMCcsdsTimeCode | null;
    static startTIMInstant(builder: flatbuffers.Builder): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timingStandard): void;
    static addEpochFormat(builder: flatbuffers.Builder, EPOCH_FORMAT: timEpochRepresentation): void;
    static addJulianDate(builder: flatbuffers.Builder, JULIAN_DATE: number): void;
    static addSeconds(builder: flatbuffers.Builder, SECONDS: number): void;
    static addIso8601(builder: flatbuffers.Builder, ISO8601Offset: flatbuffers.Offset): void;
    static addSubsecondNanos(builder: flatbuffers.Builder, SUBSECOND_NANOS: number): void;
    static addEpochLabel(builder: flatbuffers.Builder, EPOCH_LABELOffset: flatbuffers.Offset): void;
    static addGnssWeek(builder: flatbuffers.Builder, GNSS_WEEK: number): void;
    static addHasGnssRolloverReference(builder: flatbuffers.Builder, HAS_GNSS_ROLLOVER_REFERENCE: boolean): void;
    static addGnssRolloverReferenceIso8601(builder: flatbuffers.Builder, GNSS_ROLLOVER_REFERENCE_ISO8601Offset: flatbuffers.Offset): void;
    static addCcsdsTimeCode(builder: flatbuffers.Builder, CCSDS_TIME_CODEOffset: flatbuffers.Offset): void;
    static endTIMInstant(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): TIMInstantT;
    unpackTo(_o: TIMInstantT): void;
}
export declare class TIMInstantT implements flatbuffers.IGeneratedObject {
    TIME_SYSTEM: timingStandard;
    EPOCH_FORMAT: timEpochRepresentation;
    JULIAN_DATE: number;
    SECONDS: number;
    ISO8601: string | Uint8Array | null;
    SUBSECOND_NANOS: number;
    EPOCH_LABEL: string | Uint8Array | null;
    GNSS_WEEK: number;
    HAS_GNSS_ROLLOVER_REFERENCE: boolean;
    GNSS_ROLLOVER_REFERENCE_ISO8601: string | Uint8Array | null;
    CCSDS_TIME_CODE: TIMCcsdsTimeCodeT | null;
    constructor(TIME_SYSTEM?: timingStandard, EPOCH_FORMAT?: timEpochRepresentation, JULIAN_DATE?: number, SECONDS?: number, ISO8601?: string | Uint8Array | null, SUBSECOND_NANOS?: number, EPOCH_LABEL?: string | Uint8Array | null, GNSS_WEEK?: number, HAS_GNSS_ROLLOVER_REFERENCE?: boolean, GNSS_ROLLOVER_REFERENCE_ISO8601?: string | Uint8Array | null, CCSDS_TIME_CODE?: TIMCcsdsTimeCodeT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TIMInstant.d.ts.map