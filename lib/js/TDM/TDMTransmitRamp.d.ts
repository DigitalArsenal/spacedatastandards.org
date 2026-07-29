import * as flatbuffers from 'flatbuffers';
/**
 * One uplink transmitter frequency ramp applying over a closed time interval.
 *
 * SDS EXTENSION beyond CCSDS 503.0-B-1: the base standard carries a single
 * TRANSMIT_FREQ_1 per segment, which cannot express a ramped uplink. Deep-space
 * radiometric archives carry an explicit ramp table and the Doppler observables
 * are NOT reconstructible without it. Ramps are optional; a record that omits
 * TRANSMIT_RAMPS is exactly a CCSDS-conformant TDM.
 *
 * Frequency over the interval is the linear polynomial
 *   f(t) = FREQUENCY_HZ + FREQUENCY_RATE_HZ_PER_S * (t - REFERENCE_TIME)
 * which is the common form of the two archive representations: DSN ODF
 * (TRK-2-18, table 3-5) supplies ramp start frequency, ramp rate, and ramp
 * start/end time, so REFERENCE_TIME equals START_TIME; ESA IFMS supplies a
 * ramp reference time with constant and linear transmission-frequency terms,
 * so REFERENCE_TIME is that reference time and may precede START_TIME.
 * Producers MUST set REFERENCE_TIME explicitly rather than letting a consumer
 * assume which convention was used.
 */
export declare class TDMTransmitRamp implements flatbuffers.IUnpackableObject<TDMTransmitRampT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TDMTransmitRamp;
    static getRootAsTDMTransmitRamp(bb: flatbuffers.ByteBuffer, obj?: TDMTransmitRamp): TDMTransmitRamp;
    static getSizePrefixedRootAsTDMTransmitRamp(bb: flatbuffers.ByteBuffer, obj?: TDMTransmitRamp): TDMTransmitRamp;
    /**
     * Start of the interval over which this ramp applies, ISO 8601.
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of the interval over which this ramp applies, ISO 8601.
     */
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch at which FREQUENCY_HZ is the instantaneous value, ISO 8601.
     */
    REFERENCE_TIME(): string | null;
    REFERENCE_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transmitted frequency at REFERENCE_TIME, Hz.
     */
    FREQUENCY_HZ(): number;
    /**
     * Constant ramp rate over the interval, Hz per second.
     */
    FREQUENCY_RATE_HZ_PER_S(): number;
    /**
     * Identifier of the transmitting station the ramp applies to. Must match
     * the PARTICIPANT_n naming used by the segment when both are present.
     */
    TRANSMITTING_STATION_ID(): string | null;
    TRANSMITTING_STATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uplink band the ramp applies to, using the same vocabulary as
     * TRANSMIT_BAND (e.g. "S", "X", "Ka", "Ku").
     */
    TRANSMIT_BAND(): string | null;
    TRANSMIT_BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTDMTransmitRamp(builder: flatbuffers.Builder): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addReferenceTime(builder: flatbuffers.Builder, REFERENCE_TIMEOffset: flatbuffers.Offset): void;
    static addFrequencyHz(builder: flatbuffers.Builder, FREQUENCY_HZ: number): void;
    static addFrequencyRateHzPerS(builder: flatbuffers.Builder, FREQUENCY_RATE_HZ_PER_S: number): void;
    static addTransmittingStationId(builder: flatbuffers.Builder, TRANSMITTING_STATION_IDOffset: flatbuffers.Offset): void;
    static addTransmitBand(builder: flatbuffers.Builder, TRANSMIT_BANDOffset: flatbuffers.Offset): void;
    static endTDMTransmitRamp(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTDMTransmitRamp(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset, END_TIMEOffset: flatbuffers.Offset, REFERENCE_TIMEOffset: flatbuffers.Offset, FREQUENCY_HZ: number, FREQUENCY_RATE_HZ_PER_S: number, TRANSMITTING_STATION_IDOffset: flatbuffers.Offset, TRANSMIT_BANDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TDMTransmitRampT;
    unpackTo(_o: TDMTransmitRampT): void;
}
export declare class TDMTransmitRampT implements flatbuffers.IGeneratedObject {
    START_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    REFERENCE_TIME: string | Uint8Array | null;
    FREQUENCY_HZ: number;
    FREQUENCY_RATE_HZ_PER_S: number;
    TRANSMITTING_STATION_ID: string | Uint8Array | null;
    TRANSMIT_BAND: string | Uint8Array | null;
    constructor(START_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, REFERENCE_TIME?: string | Uint8Array | null, FREQUENCY_HZ?: number, FREQUENCY_RATE_HZ_PER_S?: number, TRANSMITTING_STATION_ID?: string | Uint8Array | null, TRANSMIT_BAND?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TDMTransmitRamp.d.ts.map