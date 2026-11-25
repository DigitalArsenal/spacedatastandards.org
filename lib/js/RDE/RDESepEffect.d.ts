import * as flatbuffers from 'flatbuffers';
/**
 * Solar flare / solar energetic particle (SEP) asset impact entry.
 */
export declare class RDESepEffect implements flatbuffers.IUnpackableObject<RDESepEffectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDESepEffect;
    static getRootAsRDESepEffect(bb: flatbuffers.ByteBuffer, obj?: RDESepEffect): RDESepEffect;
    static getSizePrefixedRootAsRDESepEffect(bb: flatbuffers.ByteBuffer, obj?: RDESepEffect): RDESepEffect;
    /**
     * Referenced $SFE solar flare event identifier.
     */
    SFE_EVENT_ID(): string | null;
    SFE_EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NOAA Solar Radiation Storm scale S1..S5 (0 if below S1).
     */
    NOAA_S_SCALE(): number;
    /**
     * Soft X-ray flare class verbatim (e.g. "X2.4").
     */
    FLARE_CLASS(): string | null;
    FLARE_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional SEP event dose in mSv.
     */
    SEP_DOSE_MSV(): number;
    /**
     * Estimated solar array power degradation in percent.
     */
    SOLAR_CELL_DEGRADATION_PCT(): number;
    /**
     * Estimated star-tracker blinding duration in minutes.
     */
    STAR_TRACKER_BLINDING_MIN(): number;
    /**
     * Concise human-readable impact summary.
     */
    SUMMARY(): string | null;
    SUMMARY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRDESepEffect(builder: flatbuffers.Builder): void;
    static addSfeEventId(builder: flatbuffers.Builder, SFE_EVENT_IDOffset: flatbuffers.Offset): void;
    static addNoaaSScale(builder: flatbuffers.Builder, NOAA_S_SCALE: number): void;
    static addFlareClass(builder: flatbuffers.Builder, FLARE_CLASSOffset: flatbuffers.Offset): void;
    static addSepDoseMsv(builder: flatbuffers.Builder, SEP_DOSE_MSV: number): void;
    static addSolarCellDegradationPct(builder: flatbuffers.Builder, SOLAR_CELL_DEGRADATION_PCT: number): void;
    static addStarTrackerBlindingMin(builder: flatbuffers.Builder, STAR_TRACKER_BLINDING_MIN: number): void;
    static addSummary(builder: flatbuffers.Builder, SUMMARYOffset: flatbuffers.Offset): void;
    static endRDESepEffect(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRDESepEffect(builder: flatbuffers.Builder, SFE_EVENT_IDOffset: flatbuffers.Offset, NOAA_S_SCALE: number, FLARE_CLASSOffset: flatbuffers.Offset, SEP_DOSE_MSV: number, SOLAR_CELL_DEGRADATION_PCT: number, STAR_TRACKER_BLINDING_MIN: number, SUMMARYOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RDESepEffectT;
    unpackTo(_o: RDESepEffectT): void;
}
export declare class RDESepEffectT implements flatbuffers.IGeneratedObject {
    SFE_EVENT_ID: string | Uint8Array | null;
    NOAA_S_SCALE: number;
    FLARE_CLASS: string | Uint8Array | null;
    SEP_DOSE_MSV: number;
    SOLAR_CELL_DEGRADATION_PCT: number;
    STAR_TRACKER_BLINDING_MIN: number;
    SUMMARY: string | Uint8Array | null;
    constructor(SFE_EVENT_ID?: string | Uint8Array | null, NOAA_S_SCALE?: number, FLARE_CLASS?: string | Uint8Array | null, SEP_DOSE_MSV?: number, SOLAR_CELL_DEGRADATION_PCT?: number, STAR_TRACKER_BLINDING_MIN?: number, SUMMARY?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDESepEffect.d.ts.map