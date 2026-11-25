import * as flatbuffers from 'flatbuffers';
/**
 * Spacecraft electronics single-event effects (SEE) and total ionizing dose (TID) assessment.
 */
export declare class RDEElectronicsEffect implements flatbuffers.IUnpackableObject<RDEElectronicsEffectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDEElectronicsEffect;
    static getRootAsRDEElectronicsEffect(bb: flatbuffers.ByteBuffer, obj?: RDEElectronicsEffect): RDEElectronicsEffect;
    static getSizePrefixedRootAsRDEElectronicsEffect(bb: flatbuffers.ByteBuffer, obj?: RDEElectronicsEffect): RDEElectronicsEffect;
    /**
     * Reference device or part hardness profile identifier.
     */
    DEVICE_PROFILE_ID(): string | null;
    DEVICE_PROFILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Single-event upset rate in upsets/bit/day.
     */
    SEE_UPSET_RATE_PER_BIT_DAY(): number;
    /**
     * Single-event latchup probability over the assessment window (0..1).
     */
    SEL_PROBABILITY(): number;
    /**
     * Single-event burnout / gate rupture risk metric (0..1).
     */
    SEB_SEGR_RISK(): number;
    /**
     * Total ionizing dose accumulated over the window in krad(Si).
     */
    TID_KRAD_SI(): number;
    /**
     * Remaining TID design margin in percent.
     */
    TID_MARGIN_PCT(): number;
    /**
     * Linear energy transfer threshold in MeV*cm^2/mg.
     */
    LET_THRESHOLD_MEV_CM2_MG(): number;
    static startRDEElectronicsEffect(builder: flatbuffers.Builder): void;
    static addDeviceProfileId(builder: flatbuffers.Builder, DEVICE_PROFILE_IDOffset: flatbuffers.Offset): void;
    static addSeeUpsetRatePerBitDay(builder: flatbuffers.Builder, SEE_UPSET_RATE_PER_BIT_DAY: number): void;
    static addSelProbability(builder: flatbuffers.Builder, SEL_PROBABILITY: number): void;
    static addSebSegrRisk(builder: flatbuffers.Builder, SEB_SEGR_RISK: number): void;
    static addTidKradSi(builder: flatbuffers.Builder, TID_KRAD_SI: number): void;
    static addTidMarginPct(builder: flatbuffers.Builder, TID_MARGIN_PCT: number): void;
    static addLetThresholdMevCm2Mg(builder: flatbuffers.Builder, LET_THRESHOLD_MEV_CM2_MG: number): void;
    static endRDEElectronicsEffect(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRDEElectronicsEffect(builder: flatbuffers.Builder, DEVICE_PROFILE_IDOffset: flatbuffers.Offset, SEE_UPSET_RATE_PER_BIT_DAY: number, SEL_PROBABILITY: number, SEB_SEGR_RISK: number, TID_KRAD_SI: number, TID_MARGIN_PCT: number, LET_THRESHOLD_MEV_CM2_MG: number): flatbuffers.Offset;
    unpack(): RDEElectronicsEffectT;
    unpackTo(_o: RDEElectronicsEffectT): void;
}
export declare class RDEElectronicsEffectT implements flatbuffers.IGeneratedObject {
    DEVICE_PROFILE_ID: string | Uint8Array | null;
    SEE_UPSET_RATE_PER_BIT_DAY: number;
    SEL_PROBABILITY: number;
    SEB_SEGR_RISK: number;
    TID_KRAD_SI: number;
    TID_MARGIN_PCT: number;
    LET_THRESHOLD_MEV_CM2_MG: number;
    constructor(DEVICE_PROFILE_ID?: string | Uint8Array | null, SEE_UPSET_RATE_PER_BIT_DAY?: number, SEL_PROBABILITY?: number, SEB_SEGR_RISK?: number, TID_KRAD_SI?: number, TID_MARGIN_PCT?: number, LET_THRESHOLD_MEV_CM2_MG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDEElectronicsEffect.d.ts.map