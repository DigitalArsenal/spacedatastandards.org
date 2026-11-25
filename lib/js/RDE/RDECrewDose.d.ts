import * as flatbuffers from 'flatbuffers';
/**
 * Human crew dosimetry and career limit tracking.
 */
export declare class RDECrewDose implements flatbuffers.IUnpackableObject<RDECrewDoseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDECrewDose;
    static getRootAsRDECrewDose(bb: flatbuffers.ByteBuffer, obj?: RDECrewDose): RDECrewDose;
    static getSizePrefixedRootAsRDECrewDose(bb: flatbuffers.ByteBuffer, obj?: RDECrewDose): RDECrewDose;
    /**
     * Crew member or mission role identifier.
     */
    CREW_ID(): string | null;
    CREW_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whole-body effective dose over the window in mSv.
     */
    EFFECTIVE_DOSE_MSV(): number;
    /**
     * Blood-forming organs (BFO) dose in mSv.
     */
    BLOOD_FORMING_ORGANS_MSV(): number;
    /**
     * Eye lens dose in mSv.
     */
    EYE_LENS_MSV(): number;
    /**
     * Skin dose in mSv.
     */
    SKIN_MSV(): number;
    /**
     * Updated cumulative career effective dose in mSv.
     */
    CUMULATIVE_CAREER_MSV(): number;
    /**
     * Fraction of applicable career limit consumed (0..1+).
     */
    CAREER_LIMIT_FRACTION(): number;
    static startRDECrewDose(builder: flatbuffers.Builder): void;
    static addCrewId(builder: flatbuffers.Builder, CREW_IDOffset: flatbuffers.Offset): void;
    static addEffectiveDoseMsv(builder: flatbuffers.Builder, EFFECTIVE_DOSE_MSV: number): void;
    static addBloodFormingOrgansMsv(builder: flatbuffers.Builder, BLOOD_FORMING_ORGANS_MSV: number): void;
    static addEyeLensMsv(builder: flatbuffers.Builder, EYE_LENS_MSV: number): void;
    static addSkinMsv(builder: flatbuffers.Builder, SKIN_MSV: number): void;
    static addCumulativeCareerMsv(builder: flatbuffers.Builder, CUMULATIVE_CAREER_MSV: number): void;
    static addCareerLimitFraction(builder: flatbuffers.Builder, CAREER_LIMIT_FRACTION: number): void;
    static endRDECrewDose(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRDECrewDose(builder: flatbuffers.Builder, CREW_IDOffset: flatbuffers.Offset, EFFECTIVE_DOSE_MSV: number, BLOOD_FORMING_ORGANS_MSV: number, EYE_LENS_MSV: number, SKIN_MSV: number, CUMULATIVE_CAREER_MSV: number, CAREER_LIMIT_FRACTION: number): flatbuffers.Offset;
    unpack(): RDECrewDoseT;
    unpackTo(_o: RDECrewDoseT): void;
}
export declare class RDECrewDoseT implements flatbuffers.IGeneratedObject {
    CREW_ID: string | Uint8Array | null;
    EFFECTIVE_DOSE_MSV: number;
    BLOOD_FORMING_ORGANS_MSV: number;
    EYE_LENS_MSV: number;
    SKIN_MSV: number;
    CUMULATIVE_CAREER_MSV: number;
    CAREER_LIMIT_FRACTION: number;
    constructor(CREW_ID?: string | Uint8Array | null, EFFECTIVE_DOSE_MSV?: number, BLOOD_FORMING_ORGANS_MSV?: number, EYE_LENS_MSV?: number, SKIN_MSV?: number, CUMULATIVE_CAREER_MSV?: number, CAREER_LIMIT_FRACTION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDECrewDose.d.ts.map