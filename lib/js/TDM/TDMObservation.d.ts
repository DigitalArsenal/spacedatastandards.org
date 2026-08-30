import * as flatbuffers from 'flatbuffers';
/**
 * ONE CCSDS TDM observation: a single data-section line.
 *
 * A TDM data section is NOT a uniform grid. Every line in every published
 * example (CCSDS 503.0-B-2 Cor.1 annex E, 18 figures) has the literal form
 *
 *     KEYWORD = <epoch> <value>
 *
 * and the epochs are chosen INDEPENDENTLY PER KEYWORD. Figure E-17 (ground
 * based radar tracking with RCS) is decisive: RANGE, ANGLE_1, ANGLE_2 and
 * CARRIER_POWER share epochs, while the final RCS line repeats the EARLIER
 * epoch 2011-05-11T10:26:33.7008 after a 10:26:33.9686 line. No single
 * OBSERVATION_START_TIME + i * OBSERVATION_STEP_SIZE grid can express that,
 * which is why the parallel observation arrays on the TDM root cannot
 * round-trip a conformant TDM.
 *
 * KEYWORD is the CCSDS data keyword verbatim and case-exact, e.g. "RANGE",
 * "ANGLE_1", "CARRIER_POWER", "RCS", "DOPPLER_INTEGRATED", "PR_N0",
 * "RECEIVE_FREQ_1", "TRANSMIT_PHASE_CT_1", "VLBI_DELAY", "DOR", "MAG",
 * "CLOCK_BIAS", "STEC", "TROPO_DRY", "PRESSURE". Carrying the keyword rather
 * than a fixed field per observable is what lets this form transport the whole
 * 503.0-B-2 data vocabulary, including keywords a future issue adds, without
 * a wire change and without inventing a name the standard does not define.
 *
 * Units are those the standard assigns to that keyword; RANGE additionally
 * depends on RANGE_UNITS, which is metadata, not data.
 */
export declare class TDMObservation implements flatbuffers.IUnpackableObject<TDMObservationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TDMObservation;
    static getRootAsTDMObservation(bb: flatbuffers.ByteBuffer, obj?: TDMObservation): TDMObservation;
    static getSizePrefixedRootAsTDMObservation(bb: flatbuffers.ByteBuffer, obj?: TDMObservation): TDMObservation;
    /**
     * CCSDS data keyword, verbatim and case-exact.
     */
    KEYWORD(): string | null;
    KEYWORD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of this single observation, ISO 8601, in the segment TIME_SYSTEM.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observed value.
     */
    VALUE(): number;
    static startTDMObservation(builder: flatbuffers.Builder): void;
    static addKeyword(builder: flatbuffers.Builder, KEYWORDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static endTDMObservation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTDMObservation(builder: flatbuffers.Builder, KEYWORDOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, VALUE: number): flatbuffers.Offset;
    unpack(): TDMObservationT;
    unpackTo(_o: TDMObservationT): void;
}
export declare class TDMObservationT implements flatbuffers.IGeneratedObject {
    KEYWORD: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    VALUE: number;
    constructor(KEYWORD?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, VALUE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TDMObservation.d.ts.map