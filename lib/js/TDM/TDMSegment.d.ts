import * as flatbuffers from 'flatbuffers';
import { TDMObservation, TDMObservationT } from './TDMObservation.js';
import { TDMTransmitRamp, TDMTransmitRampT } from './TDMTransmitRamp.js';
/**
 * One TDM metadata + data segment.
 *
 * A TDM file may carry MANY segments, each with its own META_START/META_STOP
 * block and its own DATA_START/DATA_STOP block (503.0-B-2 Cor.1 annex E,
 * figures E-16 and E-18). The TDM root models a SINGLE segment, so a
 * multi-segment file cannot be represented without this vector.
 */
export declare class TDMSegment implements flatbuffers.IUnpackableObject<TDMSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TDMSegment;
    static getRootAsTDMSegment(bb: flatbuffers.ByteBuffer, obj?: TDMSegment): TDMSegment;
    static getSizePrefixedRootAsTDMSegment(bb: flatbuffers.ByteBuffer, obj?: TDMSegment): TDMSegment;
    /**
     * Comments carried in this segment's metadata block, in file order.
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    META_START(): string | null;
    META_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PARTICIPANT_1(): string | null;
    PARTICIPANT_1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PARTICIPANT_2(): string | null;
    PARTICIPANT_2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PARTICIPANT_3(): string | null;
    PARTICIPANT_3(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PARTICIPANT_4(): string | null;
    PARTICIPANT_4(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PARTICIPANT_5(): string | null;
    PARTICIPANT_5(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODE(): string | null;
    MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PATH_1(): number;
    PATH_2(): number;
    TRANSMIT_BAND(): string | null;
    TRANSMIT_BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RECEIVE_BAND(): string | null;
    RECEIVE_BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INTEGRATION_INTERVAL(): number;
    INTEGRATION_REF(): string | null;
    INTEGRATION_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIMETAG_REF(): string | null;
    TIMETAG_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ANGLE_TYPE(): string | null;
    ANGLE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RANGE_MODE(): string | null;
    RANGE_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RANGE_MODULUS(): number;
    CORRECTION_ANGLE_1(): number;
    CORRECTION_ANGLE_2(): number;
    CORRECTIONS_APPLIED(): string | null;
    CORRECTIONS_APPLIED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DATA_QUALITY(): string | null;
    DATA_QUALITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RECEIVE_DELAY_2(): number;
    RECEIVE_DELAY_3(): number;
    TRANSMIT_FREQ_1(): number;
    TRANSMIT_FREQ_2(): number;
    TRANSMIT_FREQ_3(): number;
    TRANSMIT_FREQ_4(): number;
    TRANSMIT_FREQ_5(): number;
    TRANSMIT_FREQ_RATE_1(): number;
    TRANSMIT_FREQ_RATE_2(): number;
    TRANSMIT_FREQ_RATE_3(): number;
    TRANSMIT_FREQ_RATE_4(): number;
    TRANSMIT_FREQ_RATE_5(): number;
    META_STOP(): string | null;
    META_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DATA_START(): string | null;
    DATA_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The segment's observations, in FILE ORDER. This is the authoritative
     * data-section representation.
     */
    OBSERVATIONS(index: number, obj?: TDMObservation): TDMObservation | null;
    observationsLength(): number;
    DATA_STOP(): string | null;
    DATA_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uplink frequency ramp table applying to this segment. SDS EXTENSION;
     * absent (not empty) for a ramp-free, exactly CCSDS-conformant segment.
     */
    TRANSMIT_RAMPS(index: number, obj?: TDMTransmitRamp): TDMTransmitRamp | null;
    transmitRampsLength(): number;
    /**
     * Unique message identifier (503.0-B-2 table 3-2).
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-text tracking-pass identifier (503.0-B-2 table 3-3).
     */
    TRACK_ID(): string | null;
    TRACK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Comma-separated list of the data keywords present in the data section.
     */
    DATA_TYPES(): string | null;
    DATA_TYPES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signal path through the participants as an ordered comma-separated list,
     * e.g. "1,2,1". Distinct from the numbered PATH_1 / PATH_2 above.
     */
    PATH(): string | null;
    PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the ephemeris used to generate the data, per participant.
     */
    EPHEMERIS_NAME_1(): string | null;
    EPHEMERIS_NAME_1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPHEMERIS_NAME_2(): string | null;
    EPHEMERIS_NAME_2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPHEMERIS_NAME_3(): string | null;
    EPHEMERIS_NAME_3(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPHEMERIS_NAME_4(): string | null;
    EPHEMERIS_NAME_4(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPHEMERIS_NAME_5(): string | null;
    EPHEMERIS_NAME_5(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Units of the RANGE observable: "km", "s" or "RU" (range units).
     * RANGE is meaningless without it.
     */
    RANGE_UNITS(): string | null;
    RANGE_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for angle and position data, as the verbatim CCSDS
     * keyword value (503.0-B-2 annex B).
     */
    REFERENCE_FRAME(): string | null;
    REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recommended interpolation method for the observations.
     */
    INTERPOLATION(): string | null;
    INTERPOLATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recommended interpolation degree.
     */
    INTERPOLATION_DEGREE(): number;
    /**
     * Frequency offset applied to the observations, Hz.
     */
    FREQ_OFFSET(): number;
    /**
     * Transponder turnaround ratio numerator.
     */
    TURNAROUND_NUMERATOR(): number;
    /**
     * Transponder turnaround ratio denominator.
     */
    TURNAROUND_DENOMINATOR(): number;
    /**
     * Transmit delays by participant, s.
     */
    TRANSMIT_DELAY_1(): number;
    TRANSMIT_DELAY_2(): number;
    TRANSMIT_DELAY_3(): number;
    TRANSMIT_DELAY_4(): number;
    TRANSMIT_DELAY_5(): number;
    /**
     * Receive delay for the first participant, s. (RECEIVE_DELAY_2 and
     * RECEIVE_DELAY_3 already exist on the TDM root.)
     */
    RECEIVE_DELAY_1(): number;
    RECEIVE_DELAY_4(): number;
    RECEIVE_DELAY_5(): number;
    /**
     * Doppler count bias, Hz.
     */
    DOPPLER_COUNT_BIAS(): number;
    /**
     * Doppler count scale factor.
     */
    DOPPLER_COUNT_SCALE(): number;
    /**
     * Whether the Doppler counter rolls over (CCSDS YES/NO).
     */
    DOPPLER_COUNT_ROLLOVER(): boolean;
    /**
     * Corrections that a consumer must apply, or that were applied when
     * CORRECTIONS_APPLIED is "YES". Units follow the corrected observable.
     */
    CORRECTION_RANGE(): number;
    CORRECTION_DOPPLER(): number;
    CORRECTION_MAG(): number;
    CORRECTION_RCS(): number;
    CORRECTION_RECEIVE(): number;
    CORRECTION_TRANSMIT(): number;
    CORRECTION_ABERRATION_YEARLY(): number;
    CORRECTION_ABERRATION_DIURNAL(): number;
    static startTDMSegment(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMetaStart(builder: flatbuffers.Builder, META_STARTOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addParticipant1(builder: flatbuffers.Builder, PARTICIPANT_1Offset: flatbuffers.Offset): void;
    static addParticipant2(builder: flatbuffers.Builder, PARTICIPANT_2Offset: flatbuffers.Offset): void;
    static addParticipant3(builder: flatbuffers.Builder, PARTICIPANT_3Offset: flatbuffers.Offset): void;
    static addParticipant4(builder: flatbuffers.Builder, PARTICIPANT_4Offset: flatbuffers.Offset): void;
    static addParticipant5(builder: flatbuffers.Builder, PARTICIPANT_5Offset: flatbuffers.Offset): void;
    static addMode(builder: flatbuffers.Builder, MODEOffset: flatbuffers.Offset): void;
    static addPath1(builder: flatbuffers.Builder, PATH_1: number): void;
    static addPath2(builder: flatbuffers.Builder, PATH_2: number): void;
    static addTransmitBand(builder: flatbuffers.Builder, TRANSMIT_BANDOffset: flatbuffers.Offset): void;
    static addReceiveBand(builder: flatbuffers.Builder, RECEIVE_BANDOffset: flatbuffers.Offset): void;
    static addIntegrationInterval(builder: flatbuffers.Builder, INTEGRATION_INTERVAL: number): void;
    static addIntegrationRef(builder: flatbuffers.Builder, INTEGRATION_REFOffset: flatbuffers.Offset): void;
    static addTimetagRef(builder: flatbuffers.Builder, TIMETAG_REFOffset: flatbuffers.Offset): void;
    static addAngleType(builder: flatbuffers.Builder, ANGLE_TYPEOffset: flatbuffers.Offset): void;
    static addRangeMode(builder: flatbuffers.Builder, RANGE_MODEOffset: flatbuffers.Offset): void;
    static addRangeModulus(builder: flatbuffers.Builder, RANGE_MODULUS: number): void;
    static addCorrectionAngle1(builder: flatbuffers.Builder, CORRECTION_ANGLE_1: number): void;
    static addCorrectionAngle2(builder: flatbuffers.Builder, CORRECTION_ANGLE_2: number): void;
    static addCorrectionsApplied(builder: flatbuffers.Builder, CORRECTIONS_APPLIEDOffset: flatbuffers.Offset): void;
    static addDataQuality(builder: flatbuffers.Builder, DATA_QUALITYOffset: flatbuffers.Offset): void;
    static addReceiveDelay2(builder: flatbuffers.Builder, RECEIVE_DELAY_2: number): void;
    static addReceiveDelay3(builder: flatbuffers.Builder, RECEIVE_DELAY_3: number): void;
    static addTransmitFreq1(builder: flatbuffers.Builder, TRANSMIT_FREQ_1: number): void;
    static addTransmitFreq2(builder: flatbuffers.Builder, TRANSMIT_FREQ_2: number): void;
    static addTransmitFreq3(builder: flatbuffers.Builder, TRANSMIT_FREQ_3: number): void;
    static addTransmitFreq4(builder: flatbuffers.Builder, TRANSMIT_FREQ_4: number): void;
    static addTransmitFreq5(builder: flatbuffers.Builder, TRANSMIT_FREQ_5: number): void;
    static addTransmitFreqRate1(builder: flatbuffers.Builder, TRANSMIT_FREQ_RATE_1: number): void;
    static addTransmitFreqRate2(builder: flatbuffers.Builder, TRANSMIT_FREQ_RATE_2: number): void;
    static addTransmitFreqRate3(builder: flatbuffers.Builder, TRANSMIT_FREQ_RATE_3: number): void;
    static addTransmitFreqRate4(builder: flatbuffers.Builder, TRANSMIT_FREQ_RATE_4: number): void;
    static addTransmitFreqRate5(builder: flatbuffers.Builder, TRANSMIT_FREQ_RATE_5: number): void;
    static addMetaStop(builder: flatbuffers.Builder, META_STOPOffset: flatbuffers.Offset): void;
    static addDataStart(builder: flatbuffers.Builder, DATA_STARTOffset: flatbuffers.Offset): void;
    static addObservations(builder: flatbuffers.Builder, OBSERVATIONSOffset: flatbuffers.Offset): void;
    static createObservationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObservationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDataStop(builder: flatbuffers.Builder, DATA_STOPOffset: flatbuffers.Offset): void;
    static addTransmitRamps(builder: flatbuffers.Builder, TRANSMIT_RAMPSOffset: flatbuffers.Offset): void;
    static createTransmitRampsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTransmitRampsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addTrackId(builder: flatbuffers.Builder, TRACK_IDOffset: flatbuffers.Offset): void;
    static addDataTypes(builder: flatbuffers.Builder, DATA_TYPESOffset: flatbuffers.Offset): void;
    static addPath(builder: flatbuffers.Builder, PATHOffset: flatbuffers.Offset): void;
    static addEphemerisName1(builder: flatbuffers.Builder, EPHEMERIS_NAME_1Offset: flatbuffers.Offset): void;
    static addEphemerisName2(builder: flatbuffers.Builder, EPHEMERIS_NAME_2Offset: flatbuffers.Offset): void;
    static addEphemerisName3(builder: flatbuffers.Builder, EPHEMERIS_NAME_3Offset: flatbuffers.Offset): void;
    static addEphemerisName4(builder: flatbuffers.Builder, EPHEMERIS_NAME_4Offset: flatbuffers.Offset): void;
    static addEphemerisName5(builder: flatbuffers.Builder, EPHEMERIS_NAME_5Offset: flatbuffers.Offset): void;
    static addRangeUnits(builder: flatbuffers.Builder, RANGE_UNITSOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addInterpolation(builder: flatbuffers.Builder, INTERPOLATIONOffset: flatbuffers.Offset): void;
    static addInterpolationDegree(builder: flatbuffers.Builder, INTERPOLATION_DEGREE: number): void;
    static addFreqOffset(builder: flatbuffers.Builder, FREQ_OFFSET: number): void;
    static addTurnaroundNumerator(builder: flatbuffers.Builder, TURNAROUND_NUMERATOR: number): void;
    static addTurnaroundDenominator(builder: flatbuffers.Builder, TURNAROUND_DENOMINATOR: number): void;
    static addTransmitDelay1(builder: flatbuffers.Builder, TRANSMIT_DELAY_1: number): void;
    static addTransmitDelay2(builder: flatbuffers.Builder, TRANSMIT_DELAY_2: number): void;
    static addTransmitDelay3(builder: flatbuffers.Builder, TRANSMIT_DELAY_3: number): void;
    static addTransmitDelay4(builder: flatbuffers.Builder, TRANSMIT_DELAY_4: number): void;
    static addTransmitDelay5(builder: flatbuffers.Builder, TRANSMIT_DELAY_5: number): void;
    static addReceiveDelay1(builder: flatbuffers.Builder, RECEIVE_DELAY_1: number): void;
    static addReceiveDelay4(builder: flatbuffers.Builder, RECEIVE_DELAY_4: number): void;
    static addReceiveDelay5(builder: flatbuffers.Builder, RECEIVE_DELAY_5: number): void;
    static addDopplerCountBias(builder: flatbuffers.Builder, DOPPLER_COUNT_BIAS: number): void;
    static addDopplerCountScale(builder: flatbuffers.Builder, DOPPLER_COUNT_SCALE: number): void;
    static addDopplerCountRollover(builder: flatbuffers.Builder, DOPPLER_COUNT_ROLLOVER: boolean): void;
    static addCorrectionRange(builder: flatbuffers.Builder, CORRECTION_RANGE: number): void;
    static addCorrectionDoppler(builder: flatbuffers.Builder, CORRECTION_DOPPLER: number): void;
    static addCorrectionMag(builder: flatbuffers.Builder, CORRECTION_MAG: number): void;
    static addCorrectionRcs(builder: flatbuffers.Builder, CORRECTION_RCS: number): void;
    static addCorrectionReceive(builder: flatbuffers.Builder, CORRECTION_RECEIVE: number): void;
    static addCorrectionTransmit(builder: flatbuffers.Builder, CORRECTION_TRANSMIT: number): void;
    static addCorrectionAberrationYearly(builder: flatbuffers.Builder, CORRECTION_ABERRATION_YEARLY: number): void;
    static addCorrectionAberrationDiurnal(builder: flatbuffers.Builder, CORRECTION_ABERRATION_DIURNAL: number): void;
    static endTDMSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTDMSegment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, META_STARTOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, START_TIMEOffset: flatbuffers.Offset, STOP_TIMEOffset: flatbuffers.Offset, PARTICIPANT_1Offset: flatbuffers.Offset, PARTICIPANT_2Offset: flatbuffers.Offset, PARTICIPANT_3Offset: flatbuffers.Offset, PARTICIPANT_4Offset: flatbuffers.Offset, PARTICIPANT_5Offset: flatbuffers.Offset, MODEOffset: flatbuffers.Offset, PATH_1: number, PATH_2: number, TRANSMIT_BANDOffset: flatbuffers.Offset, RECEIVE_BANDOffset: flatbuffers.Offset, INTEGRATION_INTERVAL: number, INTEGRATION_REFOffset: flatbuffers.Offset, TIMETAG_REFOffset: flatbuffers.Offset, ANGLE_TYPEOffset: flatbuffers.Offset, RANGE_MODEOffset: flatbuffers.Offset, RANGE_MODULUS: number, CORRECTION_ANGLE_1: number, CORRECTION_ANGLE_2: number, CORRECTIONS_APPLIEDOffset: flatbuffers.Offset, DATA_QUALITYOffset: flatbuffers.Offset, RECEIVE_DELAY_2: number, RECEIVE_DELAY_3: number, TRANSMIT_FREQ_1: number, TRANSMIT_FREQ_2: number, TRANSMIT_FREQ_3: number, TRANSMIT_FREQ_4: number, TRANSMIT_FREQ_5: number, TRANSMIT_FREQ_RATE_1: number, TRANSMIT_FREQ_RATE_2: number, TRANSMIT_FREQ_RATE_3: number, TRANSMIT_FREQ_RATE_4: number, TRANSMIT_FREQ_RATE_5: number, META_STOPOffset: flatbuffers.Offset, DATA_STARTOffset: flatbuffers.Offset, OBSERVATIONSOffset: flatbuffers.Offset, DATA_STOPOffset: flatbuffers.Offset, TRANSMIT_RAMPSOffset: flatbuffers.Offset, MESSAGE_IDOffset: flatbuffers.Offset, TRACK_IDOffset: flatbuffers.Offset, DATA_TYPESOffset: flatbuffers.Offset, PATHOffset: flatbuffers.Offset, EPHEMERIS_NAME_1Offset: flatbuffers.Offset, EPHEMERIS_NAME_2Offset: flatbuffers.Offset, EPHEMERIS_NAME_3Offset: flatbuffers.Offset, EPHEMERIS_NAME_4Offset: flatbuffers.Offset, EPHEMERIS_NAME_5Offset: flatbuffers.Offset, RANGE_UNITSOffset: flatbuffers.Offset, REFERENCE_FRAMEOffset: flatbuffers.Offset, INTERPOLATIONOffset: flatbuffers.Offset, INTERPOLATION_DEGREE: number, FREQ_OFFSET: number, TURNAROUND_NUMERATOR: number, TURNAROUND_DENOMINATOR: number, TRANSMIT_DELAY_1: number, TRANSMIT_DELAY_2: number, TRANSMIT_DELAY_3: number, TRANSMIT_DELAY_4: number, TRANSMIT_DELAY_5: number, RECEIVE_DELAY_1: number, RECEIVE_DELAY_4: number, RECEIVE_DELAY_5: number, DOPPLER_COUNT_BIAS: number, DOPPLER_COUNT_SCALE: number, DOPPLER_COUNT_ROLLOVER: boolean, CORRECTION_RANGE: number, CORRECTION_DOPPLER: number, CORRECTION_MAG: number, CORRECTION_RCS: number, CORRECTION_RECEIVE: number, CORRECTION_TRANSMIT: number, CORRECTION_ABERRATION_YEARLY: number, CORRECTION_ABERRATION_DIURNAL: number): flatbuffers.Offset;
    unpack(): TDMSegmentT;
    unpackTo(_o: TDMSegmentT): void;
}
export declare class TDMSegmentT implements flatbuffers.IGeneratedObject {
    COMMENT: (string)[];
    META_START: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    PARTICIPANT_1: string | Uint8Array | null;
    PARTICIPANT_2: string | Uint8Array | null;
    PARTICIPANT_3: string | Uint8Array | null;
    PARTICIPANT_4: string | Uint8Array | null;
    PARTICIPANT_5: string | Uint8Array | null;
    MODE: string | Uint8Array | null;
    PATH_1: number;
    PATH_2: number;
    TRANSMIT_BAND: string | Uint8Array | null;
    RECEIVE_BAND: string | Uint8Array | null;
    INTEGRATION_INTERVAL: number;
    INTEGRATION_REF: string | Uint8Array | null;
    TIMETAG_REF: string | Uint8Array | null;
    ANGLE_TYPE: string | Uint8Array | null;
    RANGE_MODE: string | Uint8Array | null;
    RANGE_MODULUS: number;
    CORRECTION_ANGLE_1: number;
    CORRECTION_ANGLE_2: number;
    CORRECTIONS_APPLIED: string | Uint8Array | null;
    DATA_QUALITY: string | Uint8Array | null;
    RECEIVE_DELAY_2: number;
    RECEIVE_DELAY_3: number;
    TRANSMIT_FREQ_1: number;
    TRANSMIT_FREQ_2: number;
    TRANSMIT_FREQ_3: number;
    TRANSMIT_FREQ_4: number;
    TRANSMIT_FREQ_5: number;
    TRANSMIT_FREQ_RATE_1: number;
    TRANSMIT_FREQ_RATE_2: number;
    TRANSMIT_FREQ_RATE_3: number;
    TRANSMIT_FREQ_RATE_4: number;
    TRANSMIT_FREQ_RATE_5: number;
    META_STOP: string | Uint8Array | null;
    DATA_START: string | Uint8Array | null;
    OBSERVATIONS: (TDMObservationT)[];
    DATA_STOP: string | Uint8Array | null;
    TRANSMIT_RAMPS: (TDMTransmitRampT)[];
    MESSAGE_ID: string | Uint8Array | null;
    TRACK_ID: string | Uint8Array | null;
    DATA_TYPES: string | Uint8Array | null;
    PATH: string | Uint8Array | null;
    EPHEMERIS_NAME_1: string | Uint8Array | null;
    EPHEMERIS_NAME_2: string | Uint8Array | null;
    EPHEMERIS_NAME_3: string | Uint8Array | null;
    EPHEMERIS_NAME_4: string | Uint8Array | null;
    EPHEMERIS_NAME_5: string | Uint8Array | null;
    RANGE_UNITS: string | Uint8Array | null;
    REFERENCE_FRAME: string | Uint8Array | null;
    INTERPOLATION: string | Uint8Array | null;
    INTERPOLATION_DEGREE: number;
    FREQ_OFFSET: number;
    TURNAROUND_NUMERATOR: number;
    TURNAROUND_DENOMINATOR: number;
    TRANSMIT_DELAY_1: number;
    TRANSMIT_DELAY_2: number;
    TRANSMIT_DELAY_3: number;
    TRANSMIT_DELAY_4: number;
    TRANSMIT_DELAY_5: number;
    RECEIVE_DELAY_1: number;
    RECEIVE_DELAY_4: number;
    RECEIVE_DELAY_5: number;
    DOPPLER_COUNT_BIAS: number;
    DOPPLER_COUNT_SCALE: number;
    DOPPLER_COUNT_ROLLOVER: boolean;
    CORRECTION_RANGE: number;
    CORRECTION_DOPPLER: number;
    CORRECTION_MAG: number;
    CORRECTION_RCS: number;
    CORRECTION_RECEIVE: number;
    CORRECTION_TRANSMIT: number;
    CORRECTION_ABERRATION_YEARLY: number;
    CORRECTION_ABERRATION_DIURNAL: number;
    constructor(COMMENT?: (string)[], META_START?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, PARTICIPANT_1?: string | Uint8Array | null, PARTICIPANT_2?: string | Uint8Array | null, PARTICIPANT_3?: string | Uint8Array | null, PARTICIPANT_4?: string | Uint8Array | null, PARTICIPANT_5?: string | Uint8Array | null, MODE?: string | Uint8Array | null, PATH_1?: number, PATH_2?: number, TRANSMIT_BAND?: string | Uint8Array | null, RECEIVE_BAND?: string | Uint8Array | null, INTEGRATION_INTERVAL?: number, INTEGRATION_REF?: string | Uint8Array | null, TIMETAG_REF?: string | Uint8Array | null, ANGLE_TYPE?: string | Uint8Array | null, RANGE_MODE?: string | Uint8Array | null, RANGE_MODULUS?: number, CORRECTION_ANGLE_1?: number, CORRECTION_ANGLE_2?: number, CORRECTIONS_APPLIED?: string | Uint8Array | null, DATA_QUALITY?: string | Uint8Array | null, RECEIVE_DELAY_2?: number, RECEIVE_DELAY_3?: number, TRANSMIT_FREQ_1?: number, TRANSMIT_FREQ_2?: number, TRANSMIT_FREQ_3?: number, TRANSMIT_FREQ_4?: number, TRANSMIT_FREQ_5?: number, TRANSMIT_FREQ_RATE_1?: number, TRANSMIT_FREQ_RATE_2?: number, TRANSMIT_FREQ_RATE_3?: number, TRANSMIT_FREQ_RATE_4?: number, TRANSMIT_FREQ_RATE_5?: number, META_STOP?: string | Uint8Array | null, DATA_START?: string | Uint8Array | null, OBSERVATIONS?: (TDMObservationT)[], DATA_STOP?: string | Uint8Array | null, TRANSMIT_RAMPS?: (TDMTransmitRampT)[], MESSAGE_ID?: string | Uint8Array | null, TRACK_ID?: string | Uint8Array | null, DATA_TYPES?: string | Uint8Array | null, PATH?: string | Uint8Array | null, EPHEMERIS_NAME_1?: string | Uint8Array | null, EPHEMERIS_NAME_2?: string | Uint8Array | null, EPHEMERIS_NAME_3?: string | Uint8Array | null, EPHEMERIS_NAME_4?: string | Uint8Array | null, EPHEMERIS_NAME_5?: string | Uint8Array | null, RANGE_UNITS?: string | Uint8Array | null, REFERENCE_FRAME?: string | Uint8Array | null, INTERPOLATION?: string | Uint8Array | null, INTERPOLATION_DEGREE?: number, FREQ_OFFSET?: number, TURNAROUND_NUMERATOR?: number, TURNAROUND_DENOMINATOR?: number, TRANSMIT_DELAY_1?: number, TRANSMIT_DELAY_2?: number, TRANSMIT_DELAY_3?: number, TRANSMIT_DELAY_4?: number, TRANSMIT_DELAY_5?: number, RECEIVE_DELAY_1?: number, RECEIVE_DELAY_4?: number, RECEIVE_DELAY_5?: number, DOPPLER_COUNT_BIAS?: number, DOPPLER_COUNT_SCALE?: number, DOPPLER_COUNT_ROLLOVER?: boolean, CORRECTION_RANGE?: number, CORRECTION_DOPPLER?: number, CORRECTION_MAG?: number, CORRECTION_RCS?: number, CORRECTION_RECEIVE?: number, CORRECTION_TRANSMIT?: number, CORRECTION_ABERRATION_YEARLY?: number, CORRECTION_ABERRATION_DIURNAL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TDMSegment.d.ts.map