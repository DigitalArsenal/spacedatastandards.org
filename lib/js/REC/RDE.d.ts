import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
import { RDECrewDose, RDECrewDoseT } from './RDECrewDose.js';
import { RDEElectronicsEffect, RDEElectronicsEffectT } from './RDEElectronicsEffect.js';
import { RDEPassDose, RDEPassDoseT } from './RDEPassDose.js';
import { RDESepEffect, RDESepEffectT } from './RDESepEffect.js';
import { RDEShieldCurvePoint, RDEShieldCurvePointT } from './RDEShieldCurvePoint.js';
import { RDEShielding, RDEShieldingT } from './RDEShielding.js';
import { rdeEffectSeverity } from './rdeEffectSeverity.js';
/**
 * Radiation Effects
 */
export declare class RDE implements flatbuffers.IUnpackableObject<RDET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDE;
    static getRootAsRDE(bb: flatbuffers.ByteBuffer, obj?: RDE): RDE;
    static getSizePrefixedRootAsRDE(bb: flatbuffers.ByteBuffer, obj?: RDE): RDE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier of this radiation effects record.
     */
    RDE_ID(): string;
    RDE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * CCSDS SANA central body name (e.g. "EARTH", "JUPITER", "SATURN").
     */
    BODY_NAME(): string;
    BODY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * NAIF SPICE body identifier (e.g. 399, 599, 699).
     */
    BODY_NAIF_ID(): number;
    /**
     * NORAD catalog number of the target spacecraft (0 for uncataloged/crew trajectory).
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator or object identifier.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inclusive assessment window start, RFC 3339 UTC.
     */
    WINDOW_START(): string;
    WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Exclusive assessment window end, RFC 3339 UTC.
     */
    WINDOW_END(): string;
    WINDOW_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Referenced $RBF radiation belt flux record identifiers.
     */
    RBF_RECORD_IDS(index: number): string;
    RBF_RECORD_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rbfRecordIdsLength(): number;
    /**
     * Referenced $SWS or $SFE space-weather record identifiers.
     */
    SPACE_WEATHER_REFS(index: number): string;
    SPACE_WEATHER_REFS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    spaceWeatherRefsLength(): number;
    /**
     * Spacecraft or habitat shielding configuration.
     */
    SHIELDING(obj?: RDEShielding): RDEShielding | null;
    /**
     * Instantaneous dose rate at WINDOW_START in mSv/h.
     */
    INSTANT_DOSE_RATE_MSV_H(): number;
    /**
     * Orbit-averaged dose rate over the assessment window in mSv/h.
     */
    ORBIT_AVG_DOSE_RATE_MSV_H(): number;
    /**
     * Total mission/window dose in mSv.
     */
    MISSION_DOSE_MSV(): number;
    /**
     * Total ionizing dose in silicon over the window in krad(Si).
     */
    TID_KRAD_SI(): number;
    /**
     * Overall effect severity classification.
     */
    EFFECT_SEVERITY(): rdeEffectSeverity;
    /**
     * Per-pass dose breakdown across belt and SAA transits.
     */
    PASS_DOSES(index: number, obj?: RDEPassDose): RDEPassDose | null;
    passDosesLength(): number;
    /**
     * Depth-dose attenuation curve across shielding thicknesses.
     */
    SHIELDING_CURVE(index: number, obj?: RDEShieldCurvePoint): RDEShieldCurvePoint | null;
    shieldingCurveLength(): number;
    /**
     * Electronics SEE and TID margin assessment.
     */
    ELECTRONICS(obj?: RDEElectronicsEffect): RDEElectronicsEffect | null;
    /**
     * Crew organ and career dose assessment when crewed.
     */
    CREW(obj?: RDECrewDose): RDECrewDose | null;
    /**
     * Solar flare / SEP impact breakdown.
     */
    SEP_EFFECTS(index: number, obj?: RDESepEffect): RDESepEffect | null;
    sepEffectsLength(): number;
    /**
     * Record-level source and build provenance.
     */
    PROVENANCE(obj?: PVN): PVN | null;
    static startRDE(builder: flatbuffers.Builder): void;
    static addRdeId(builder: flatbuffers.Builder, RDE_IDOffset: flatbuffers.Offset): void;
    static addBodyName(builder: flatbuffers.Builder, BODY_NAMEOffset: flatbuffers.Offset): void;
    static addBodyNaifId(builder: flatbuffers.Builder, BODY_NAIF_ID: number): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addWindowEnd(builder: flatbuffers.Builder, WINDOW_ENDOffset: flatbuffers.Offset): void;
    static addRbfRecordIds(builder: flatbuffers.Builder, RBF_RECORD_IDSOffset: flatbuffers.Offset): void;
    static createRbfRecordIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRbfRecordIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpaceWeatherRefs(builder: flatbuffers.Builder, SPACE_WEATHER_REFSOffset: flatbuffers.Offset): void;
    static createSpaceWeatherRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSpaceWeatherRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addShielding(builder: flatbuffers.Builder, SHIELDINGOffset: flatbuffers.Offset): void;
    static addInstantDoseRateMsvH(builder: flatbuffers.Builder, INSTANT_DOSE_RATE_MSV_H: number): void;
    static addOrbitAvgDoseRateMsvH(builder: flatbuffers.Builder, ORBIT_AVG_DOSE_RATE_MSV_H: number): void;
    static addMissionDoseMsv(builder: flatbuffers.Builder, MISSION_DOSE_MSV: number): void;
    static addTidKradSi(builder: flatbuffers.Builder, TID_KRAD_SI: number): void;
    static addEffectSeverity(builder: flatbuffers.Builder, EFFECT_SEVERITY: rdeEffectSeverity): void;
    static addPassDoses(builder: flatbuffers.Builder, PASS_DOSESOffset: flatbuffers.Offset): void;
    static createPassDosesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPassDosesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addShieldingCurve(builder: flatbuffers.Builder, SHIELDING_CURVEOffset: flatbuffers.Offset): void;
    static createShieldingCurveVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startShieldingCurveVector(builder: flatbuffers.Builder, numElems: number): void;
    static addElectronics(builder: flatbuffers.Builder, ELECTRONICSOffset: flatbuffers.Offset): void;
    static addCrew(builder: flatbuffers.Builder, CREWOffset: flatbuffers.Offset): void;
    static addSepEffects(builder: flatbuffers.Builder, SEP_EFFECTSOffset: flatbuffers.Offset): void;
    static createSepEffectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSepEffectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endRDE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRDEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRDEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): RDET;
    unpackTo(_o: RDET): void;
}
export declare class RDET implements flatbuffers.IGeneratedObject {
    RDE_ID: string | Uint8Array | null;
    BODY_NAME: string | Uint8Array | null;
    BODY_NAIF_ID: number;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    WINDOW_START: string | Uint8Array | null;
    WINDOW_END: string | Uint8Array | null;
    RBF_RECORD_IDS: (string)[];
    SPACE_WEATHER_REFS: (string)[];
    SHIELDING: RDEShieldingT | null;
    INSTANT_DOSE_RATE_MSV_H: number;
    ORBIT_AVG_DOSE_RATE_MSV_H: number;
    MISSION_DOSE_MSV: number;
    TID_KRAD_SI: number;
    EFFECT_SEVERITY: rdeEffectSeverity;
    PASS_DOSES: (RDEPassDoseT)[];
    SHIELDING_CURVE: (RDEShieldCurvePointT)[];
    ELECTRONICS: RDEElectronicsEffectT | null;
    CREW: RDECrewDoseT | null;
    SEP_EFFECTS: (RDESepEffectT)[];
    PROVENANCE: PVNT | null;
    constructor(RDE_ID?: string | Uint8Array | null, BODY_NAME?: string | Uint8Array | null, BODY_NAIF_ID?: number, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, WINDOW_START?: string | Uint8Array | null, WINDOW_END?: string | Uint8Array | null, RBF_RECORD_IDS?: (string)[], SPACE_WEATHER_REFS?: (string)[], SHIELDING?: RDEShieldingT | null, INSTANT_DOSE_RATE_MSV_H?: number, ORBIT_AVG_DOSE_RATE_MSV_H?: number, MISSION_DOSE_MSV?: number, TID_KRAD_SI?: number, EFFECT_SEVERITY?: rdeEffectSeverity, PASS_DOSES?: (RDEPassDoseT)[], SHIELDING_CURVE?: (RDEShieldCurvePointT)[], ELECTRONICS?: RDEElectronicsEffectT | null, CREW?: RDECrewDoseT | null, SEP_EFFECTS?: (RDESepEffectT)[], PROVENANCE?: PVNT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDE.d.ts.map